// SPDX-FileCopyrightText: 2026 SecPal Contributors
// SPDX-License-Identifier: AGPL-3.0-or-later

import assert from "node:assert/strict";
import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import test from "node:test";

const workflowsDirectory = path.resolve(".github/workflows");
const fullCommitSha = /^[0-9a-f]{40}$/;
const sourceRefAnnotation = /^[A-Za-z0-9][A-Za-z0-9._/-]*$/;

test("external workflow references use annotated full commit SHAs", async () => {
  const workflowFiles = (await readdir(workflowsDirectory))
    .filter((file) => /\.ya?ml$/.test(file))
    .sort();
  const failures = [];
  let externalReferences = 0;

  for (const workflowFile of workflowFiles) {
    const workflowPath = path.join(workflowsDirectory, workflowFile);
    const lines = (await readFile(workflowPath, "utf8")).split("\n");

    for (const [index, line] of lines.entries()) {
      const match = line.match(
        /^\s*(?:-\s*)?uses:\s*([^\s#]+)(?:\s+#\s*(\S.*?))?\s*$/
      );
      if (!match || match[1].startsWith("./")) {
        continue;
      }

      externalReferences += 1;
      const [source, ref] = match[1].split("@");
      const location = `${workflowFile}:${index + 1}`;

      if (!source || !fullCommitSha.test(ref ?? "")) {
        failures.push(
          `${location}: ${match[1]} must use a lowercase full commit SHA`
        );
      }

      if (
        !sourceRefAnnotation.test(match[2] ?? "") ||
        fullCommitSha.test(match[2] ?? "")
      ) {
        failures.push(
          `${location}: ${match[1]} must have a same-line source ref annotation`
        );
      }
    }
  }

  assert.ok(
    externalReferences > 0,
    "expected at least one external workflow reference"
  );
  assert.deepEqual(failures, []);
});
