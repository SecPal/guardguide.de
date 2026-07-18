#!/usr/bin/env bash
# SPDX-FileCopyrightText: 2026 SecPal
# SPDX-License-Identifier: MIT

set -euo pipefail

echo "🔧 Setting up pre-commit hooks for SecPal..."

# Work from the repository root so npm and pre-commit use the tracked config.
REPO_ROOT="$(git rev-parse --show-toplevel)"
cd "$REPO_ROOT"

# Check if npm is installed
if ! command -v npm &>/dev/null; then
  echo "❌ npm is not installed."
  echo ""
  echo "Install Node.js 22 with npm, then run this script again."
  exit 1
fi

# Check if pre-commit is installed
if ! command -v pre-commit &>/dev/null; then
  echo "❌ pre-commit is not installed."
  echo ""
  echo "Install it using one of the following methods:"
  echo ""
  echo "  # Using pip:"
  echo "  pip install pre-commit"
  echo ""
  echo "  # Using brew (macOS):"
  echo "  brew install pre-commit"
  echo ""
  echo "  # Using dnf (Fedora):"
  echo "  sudo dnf install pre-commit"
  echo ""
  exit 1
fi

# Install the locked repository dependencies used by local hooks.
echo "📦 Installing locked npm dependencies..."
npm ci

# Install pre-commit hooks
echo "📦 Installing pre-commit hooks..."
pre-commit install --install-hooks

# Run hooks on all files to verify setup
echo "🧪 Running hooks on all files to verify setup..."
if pre-commit run --all-files; then
  echo ""
  echo "✅ Pre-commit hooks installed successfully!"
  echo ""
  echo "Hooks will now run automatically on git commit."
  echo "To run manually: pre-commit run --all-files"
  echo "To update hooks: pre-commit autoupdate"
else
  echo ""
  echo "⚠️  Some hooks failed. Please fix the issues above."
  echo ""
  exit 1
fi
