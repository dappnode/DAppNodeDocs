---
llm_description: "GitHub Actions workflows for automating upstream updates and package releases."
---

# GitHub Actions for Dappnode Packages

GitHub Actions help automate workflows around your projects on GitHub. For Dappnode packages, we utilize specific GitHub Actions to manage updates and releases.

## 1. Auto Check for Upstream Updates (`auto_check.yml`)

This action checks if there's an available update from the upstream repository. If an update is found, it creates a Pull Request with the new version.

### Workflow File:

**Filename:** `auto_check.yml`

```yaml
name: Bump upstream version

on:
  schedule:
    - cron: "00 */4 * * *"
  push:
    branches:
      - "master"

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - run: npx @dappnode/dappnodesdk github-action bump-upstream
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
          PINATA_API_KEY: ${{ secrets.PINATA_API_KEY }}
          PINATA_SECRET_API_KEY: ${{ secrets.PINATA_SECRET_API_KEY }}
```

**Features:**

- **Scheduled Runs**: The action runs every 4 hours (as per the cron setting).
- **Environment Variables**: Uses `GITHUB_TOKEN` for authentication, and `PINATA_API_KEY` and `PINATA_SECRET_API_KEY` for interfacing with the IPFS pinning service Pinata.

## 2. Main Build and Pre-release (`main.yml`)

This action builds the Dappnode package and creates a pre-release that's ready to be published.

### Workflow File:

**Filename:** `main.yml`

```yaml
name: "Main"
on:
  pull_request:
  push:
    branches:
      - "main"
      - "master"
      - "v[0-9]+.[0-9]+.[0-9]+"
    paths-ignore:
      - "README.md"

jobs:
  build-test:
    runs-on: ubuntu-latest
    name: Build test
    if: github.event_name != 'push'
    steps:
      - uses: actions/checkout@v3
      - run: npx @dappnode/dappnodesdk build --skip_save

  release:
    name: Release
    runs-on: ubuntu-latest
    if: github.event_name == 'push'
    steps:
      - uses: actions/checkout@v3
      - name: Publish
        run: npx @dappnode/dappnodesdk publish patch --dappnode_team_preset
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
          DEVELOPER_ADDRESS: "0xf35960302a07022aba880dffaec2fdd64d5bf1c1"
```

**Features:**

- **Branch Filters**: The action only triggers on the `main`, `master`, and version tags (e.g., `v1.0.0`).
- **Paths Ignore**: Ignores changes solely related to `README.md`.
- **Conditional Runs**: Different steps are executed based on the event that triggered the workflow (e.g., push event or pull request).