---
title: "Agent-assisted package development"
llm_description: "Use Dappmanager v0.2.125 Nexus chat and DAppNode MCP tools to develop, validate, upload, and install packages with coding agents."
---

# Agent-assisted package development

[Dappmanager v0.2.125](https://github.com/dappnode/DNP_DAPPMANAGER/releases/tag/v0.2.125), published on June 29, 2026, added **Nexus chat** and a **DAppNode MCP server**. Together they let operators and developers use AI agents with live Dappnode context: installed packages, logs, diagnostics, docs search, package validation, registry previews, and development-package installation.

Nexus chat is built into the Dappmanager UI. External agent clients can use the same Dappnode tools through the MCP endpoint at `/mcp`.

## Requirements

- Dappmanager `v0.2.125` or newer.
- Admin access to the Dappmanager UI.
- A private connection to your Dappnode, such as Wireguar VPN or Tailscale.
- For Nexus chat, a Nexus API key from [nexus.dappnode.com](https://nexus.dappnode.com).
- For external MCP clients, a DAppNode MCP API key generated in the Dappmanager UI.

:::note
The Nexus API key and the DAppNode MCP API key are different keys. The Nexus API key lets the built-in chat talk to Nexus. The DAppNode MCP API key lets external MCP clients authenticate to your Dappnode's `/mcp` endpoint.
:::

## Use Nexus chat

Open **Nexus** from the Dappmanager sidebar. On first use, paste a Nexus API key. The key is stored on your Dappnode and used by the Dappmanager backend to talk to Nexus.

You can use Nexus chat to:

- Ask questions about your Dappnode using installed-package context.
- Search and summarize Dappnode docs from the chat.
- Inspect package status, logs, system info, notifications, updates, disk usage, and ports.
- Start workflows that need confirmation, such as package changes.

When a chat action can change package state, Dappmanager asks for confirmation before the action runs.

## Connect an external MCP client

External MCP clients such as coding agents connect to the Dappmanager MCP server with a bearer token.

1. In Dappmanager, go to **System > Advanced > MCP API key**.
2. Click **Generate MCP API key** and copy the key. The raw key is shown only when it is generated.
3. In your MCP client, configure an HTTP or Streamable HTTP MCP server:

```json
{
  "mcpServers": {
    "dappnode": {
      "url": "http://my.dappnode/mcp",
      "headers": {
        "Authorization": "Bearer YOUR_MCP_API_KEY"
      }
    }
  }
}
```

Use the same origin you use to access Dappmanager.

Read-only MCP tools are available by default. To let external clients run package-changing tools, enable **Allow mutating MCP tools** in the same **System > Advanced > MCP API key** section. Disable it again when you are done with the agent workflow.

## What agents can do

Read-only tools can list installed packages, inspect package details, read logs, get system information, run diagnostics, list notifications, check updates, inspect disk usage and ports, read user action logs, check node status, search docs, fetch docs, inspect staker config, browse the package registry, and preview package installs.

Mutating tools are available to external MCP clients only after you enable them. They can start, stop, restart, update, remove, configure, install, and upload packages. For package development, the most useful tools are:

- `dappnode_validate_package`: validates `dappnode_package.json`, `docker-compose.yml`, and optional setup wizard files against Dappnode rules without building an IPFS hash.
- `dappnode_begin_dev_image_upload`, `dappnode_append_dev_image_upload_chunk`, and `dappnode_finish_dev_image_upload`: upload a local `docker save` image tarball through MCP.
- `dappnode_install_dev_package`: installs a custom development package into the **My custom packages** area for end-to-end testing.

## Use the package-development skill

Dappnode also provides an agent skill for package builders in [dappnode/dappnode-agent-skills](https://github.com/dappnode/dappnode-agent-skills). The `create-dappnode-package` skill teaches coding agents the Dappnode package structure, the fast local Docker loop, and the MCP validation, upload, install, and debug flow.

Install it for Codex with:

```bash
npx skills add dappnode/dappnode-agent-skills --skill create-dappnode-package -a codex
```

Or install it globally:

```bash
npx skills add dappnode/dappnode-agent-skills --skill create-dappnode-package -a codex -g
```

After installing the skill, ask your coding agent to use `create-dappnode-package` when creating a new package, wrapping an existing Docker image, or debugging a package that will not install or run.

## Recommended development loop

1. Create or edit the package locally with `dappnode_package.json`, `docker-compose.yml`, and, if needed, a `Dockerfile` and `setup-wizard.yml`.
2. Run and debug it locally with Docker.
3. Ask the agent to validate the manifest and compose files with `dappnode_validate_package`.
4. Build the image locally and save it as a tarball.
5. Let the agent upload the tarball through the MCP chunked upload tools.
6. Install it on your Dappnode with `dappnode_install_dev_package`.
7. Read package logs and iterate until the package runs correctly.

This loop avoids IPFS while developing. Build and publish an IPFS release only when the package is ready.

## Safety notes

- Keep the MCP API key secret. Rotate it from **System > Advanced > MCP API key** if it is exposed.
- The MCP API key is scoped to `/mcp`; it is not a full Dappmanager admin session.
- Leave mutating MCP tools disabled unless an external agent needs to change package state.
- Review every package-changing action before approving it, especially removals, volume changes, installs, updates, and custom package uploads.
