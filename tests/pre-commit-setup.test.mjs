// SPDX-FileCopyrightText: 2026 SecPal
// SPDX-License-Identifier: AGPL-3.0-or-later

import assert from "node:assert/strict";
import {
  chmodSync,
  mkdtempSync,
  mkdirSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from "node:fs";
import { tmpdir } from "node:os";
import { delimiter, join } from "node:path";
import { spawnSync } from "node:child_process";
import test from "node:test";

const repositoryRoot = new URL("../", import.meta.url);
const setupScript = new URL("../scripts/setup-pre-commit.sh", import.meta.url);
const nodeToolchainScripts = [
  new URL("../scripts/setup-pre-commit.sh", import.meta.url),
  new URL("../scripts/preflight.sh", import.meta.url),
  new URL("../scripts/release-stable.sh", import.meta.url),
];

test("npm install-script policy approves required platform install scripts", () => {
  const packageManifest = JSON.parse(
    readFileSync(new URL("../package.json", import.meta.url), "utf8")
  );

  assert.deepEqual(packageManifest.allowScripts, {
    "esbuild@0.28.1": true,
    "fsevents@2.3.3": true,
  });
});

test("Prettier hook requires the repository-local installation", () => {
  const preCommitConfig = readFileSync(
    new URL("../.pre-commit-config.yaml", import.meta.url),
    "utf8"
  );

  assert.match(preCommitConfig, /entry: node_modules\/.bin\/prettier --write/);
});

test("Node toolchain scripts install development dependencies explicitly", () => {
  for (const script of nodeToolchainScripts) {
    assert.match(
      readFileSync(script, "utf8"),
      /npm ci(?: --silent)? --include=dev/
    );
  }
});

test("pre-commit setup installs locked npm dependencies before running hooks", () => {
  const fixtureDirectory = mkdtempSync(
    join(tmpdir(), "guardguide-pre-commit-")
  );
  const binaryDirectory = join(fixtureDirectory, "bin");
  const callLog = join(fixtureDirectory, "calls.log");

  try {
    mkdirSync(binaryDirectory);

    for (const command of ["npm", "pre-commit"]) {
      const executable = join(binaryDirectory, command);
      writeFileSync(
        executable,
        `#!/usr/bin/env bash\nprintf '%s\\n' "${command} $*" >> "$GUARDGUIDE_TEST_CALL_LOG"\n`,
        "utf8"
      );
      chmodSync(executable, 0o755);
    }

    const result = spawnSync("bash", [setupScript.pathname], {
      cwd: repositoryRoot,
      encoding: "utf8",
      env: {
        ...process.env,
        GUARDGUIDE_TEST_CALL_LOG: callLog,
        PATH: `${binaryDirectory}${delimiter}${process.env.PATH}`,
      },
    });

    assert.equal(result.status, 0, result.stderr || result.stdout);
    assert.deepEqual(readFileSync(callLog, "utf8").trim().split("\n"), [
      "npm ci --include=dev",
      "pre-commit install --install-hooks",
      "pre-commit run --all-files",
    ]);
  } finally {
    rmSync(fixtureDirectory, { recursive: true, force: true });
  }
});
