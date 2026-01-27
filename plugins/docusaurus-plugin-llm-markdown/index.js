const fs = require('fs');
const path = require('path');
const { glob } = require('glob');

// Hardcoded summaries for each documentation page
const SUMMARIES = {
  // DAO
  "dao.md": "Dappnode DAO governance overview: NODE token addresses, mission, Snapshot voting, and ValidatorDAO.",
  "dao/faq.md": "FAQ explaining what a DAO is and Dappnode DAO's mission for decentralized infrastructure.",
  "dao/liquidity-mining.md": "NODE liquidity mining program details: pool allocations, contract addresses, and weekly rewards.",
  "dao/node-basics.md": "NODE token economics: 100M supply distribution, NODEdrop recipients, and NODEstream vesting.",
  "dao/node-drop.md": "NODEdrop airdrop program for early Dappnode supporters and community members.",
  "dao/node-stream.md": "NODEstream vesting program for gradual token distribution to participants.",

  // Dev
  "dev.md": "Introduction to Dappnode developer docs for creating, deploying, and managing custom packages.",
  "dev/dns.md": "DNS-based service discovery and domain naming conventions for DAppNode packages.",
  "dev/github-actions.md": "GitHub Actions workflows for automating upstream updates and package releases.",
  "dev/metrics.md": "Prometheus and Grafana metrics framework for DAppNode packages via DMS.",
  "dev/notifications.md": "Notification system for alerting users about events via the DAppNode UI.",
  "dev/package-development/multi-configuration.md": "Guide for developing multi-variant packages supporting different networks from one codebase.",
  "dev/package-development/overview.md": "Overview of single-config and multi-config package repository types.",
  "dev/package-development/single-configuration.md": "Step-by-step guide for developing single-variant Dappnode packages.",
  "dev/package-publishing/package-ownership.md": "Role permission system for managing package ownership via Aragon ACL contracts.",
  "dev/package-publishing/publish-packages-clients.md": "Step-by-step guide for publishing packages using the SDK-publish UI.",
  "dev/references/docker-compose.md": "Reference for docker-compose.yml structure, environment variables, and build arguments.",
  "dev/references/manifest.md": "Complete reference for dappnode_package.json manifest file properties.",
  "dev/references/notifications.md": "Schema reference for notifications.yaml configuration using Gatus endpoints.",
  "dev/references/setup-wizard.md": "Reference for setup-wizard.yml to customize package installation with forms.",
  "dev/sdk/commands.md": "Documentation for SDK init, build, and publish commands with options.",
  "dev/sdk/overview.md": "Overview of DappnodeSDK tool for creating, building, and publishing packages.",
  "dev/sdk/sdk-publish.md": "Guide for using SDK-Publish tool to sign and publish package releases.",

  // Smooth
  "smooth.md": "Introduction to Smooth, Dappnode's MEV Smoothing Pool for consistent solo staker rewards.",
  "smooth/deep-dive-into-smooth/consolidations.md": "How Smooth handles Pectra validator consolidations and transfers pending rewards automatically.",
  "smooth/deep-dive-into-smooth/oracle-sm.md": "Explains Smooth's Oracle and Smart Contract architecture for tracking validators and rewards.",
  "smooth/deep-dive-into-smooth/overview.md": "Index page linking to deep-dive sections on rewards, validator states, and architecture.",
  "smooth/deep-dive-into-smooth/rewards.md": "How Smooth distributes rewards based on effective balance and converts pending to claimable.",
  "smooth/deep-dive-into-smooth/states.md": "Validator state machine: Active, YellowCard, RedCard, NotSubscribed, Banned, and Untracked.",
  "smooth/deep-dive-into-smooth/vanilla-blocks.md": "Explains vanilla blocks and why MEV blocks are required; 3 vanilla blocks leads to ban.",
  "smooth/faq-glossary.md": "FAQ about fees, claiming rewards, and glossary of terms like pending/accumulated rewards.",
  "smooth/subscribe-to-smooth/automatic.md": "Auto-subscribe by setting fee recipient to Smooth address and proposing a block.",
  "smooth/subscribe-to-smooth/manual.md": "Manual subscription via website with 0.01 ETH deposit to start earning immediately.",
  "smooth/subscribe-to-smooth/overview.md": "Overview of two subscription methods: automatic and manual, with address info.",
  "smooth/unsubscribe-from-smooth.md": "How to unsubscribe via website; warns that pending rewards are lost on exit.",

  // User - Access
  "user/access-your-dappnode/local.md": "Access Dappnode via http://dappnode.local on same network; limited to Admin UI dashboard only.",
  "user/access-your-dappnode/overview.md": "Overview of four ways to access Dappnode: WiFi, VPN, Local Proxy, and Terminal.",
  "user/access-your-dappnode/terminal.md": "Advanced CLI access via SSH or physical terminal for deep control and management.",
  "user/access-your-dappnode/vpn/openvpn.md": "Setup guide for OpenVPN access with credential retrieval and multi-platform installation steps.",
  "user/access-your-dappnode/vpn/overview.md": "Overview of VPN options (Tailscale, WireGuard, OpenVPN) for secure local and remote access.",
  "user/access-your-dappnode/vpn/tailscale.md": "Setup Tailscale VPN for easy access without port forwarding; solves UPnP and CGNAT issues.",
  "user/access-your-dappnode/vpn/wireguard.md": "WireGuard VPN setup guide with credential retrieval and multi-platform client configuration.",
  "user/access-your-dappnode/wifi.md": "Connect to Dappnode via built-in WiFi hotspot (SSID: DappnodeWIFI, password: dappnode).",

  // User - Dappnode App
  "user/dappnode-app/how-to-install.md": "Step-by-step guide to install Dappnode PWA app on mobile/desktop with VPN and notifications.",
  "user/dappnode-app/overview.md": "Dappnode PWA app for mobile/desktop: remote management, notifications, and staking configuration.",

  // User - Cloud
  "user/dappnode-cloud/overview.md": "Deploy Dappnode in cloud (AWS) without hardware; ideal for testing, dev, or short-term use.",
  "user/dappnode-cloud/providers/aws/faqs.md": "AWS FAQs: machine selection, storage requirements, security groups, Telegram setup, troubleshooting.",
  "user/dappnode-cloud/providers/aws/overview.md": "AWS overview: Dappnode AMI at $15/month plus AWS infrastructure costs (pay-as-you-go).",
  "user/dappnode-cloud/providers/aws/set-up-instance.md": "Step-by-step guide to launch Dappnode on AWS EC2 with Telegram or SSH credential retrieval.",
  "user/dappnode-cloud/providers/coming-soon.md": "More cloud providers coming soon; request new providers via GitHub issues.",

  // User - Premium
  "user/dappnode-premium/premium-overview.md": "Dappnode Premium: paid services including monitoring, support, and beacon node backup.",
  "user/dappnode-premium/premium-services.md": "Premium features: push notifications, validator alerts, backup node (168h/month), and support calls.",

  // User - Ethical Metrics
  "user/ethical-metrics/metrics.md": "Lists all metrics collected by Ethical Metrics: host, Dappmanager, and staking metrics via TOR.",
  "user/ethical-metrics/overview.md": "Introduces Ethical Metrics for privacy-preserving external monitoring and offline alerts via TOR.",
  "user/ethical-metrics/setup.md": "Step-by-step guide to configure Telegram and email notifications for Ethical Metrics alerts.",
  "user/ethical-metrics/troubleshooting.md": "FAQ for Ethical Metrics: verifying registration, testing alerts, and unregistering from monitoring.",

  // User - Getting Started
  "user/faqs.md": "Common questions about staking, installation issues, VPN/Wireguard, client syncing, and specs.",
  "user/getting-started/access-dappnode-via-wifi.md": "How to connect to DappnodeWIFI hotspot and access the web interface via browser.",
  "user/getting-started/choose-your-path.md": "Entry point to choose between using pre-installed Dappnode or installing on your own machine.",
  "user/getting-started/connect-dappnode-to-the-router.md": "Instructions to connect Dappnode to router via ethernet and enable UPnP for port forwarding.",
  "user/getting-started/next-steps.md": "Suggested actions after setup: configure VPN access, start staking, and enable Ethical Metrics.",
  "user/getting-started/register.md": "Guide to create a Dappnode account, secure recovery token, and log in to the interface.",
  "user/getting-started/setup.md": "Initial configuration: repository source, auto-updates, notifications, and host password setup.",

  // User - Hardware
  "user/hardware/maintenance.md": "Hardware maintenance tips: airflow, dust cleaning, and thermal paste replacement procedures.",
  "user/hardware/overview.md": "Overview of hardware-related documentation covering maintenance and temperature monitoring.",
  "user/hardware/temperature.md": "How to monitor CPU temperature via dashboard and configure temperature alerts.",

  // User - Install
  "user/install/arm.md": "ARM installation guide using script method, plus instructions to add external SSD storage.",
  "user/install/dappnode-commands.md": "Reference list of CLI commands: wifi, VPN credentials, status, start, and stop Dappnode.",
  "user/install/iso.md": "Guide to install Dappnode from ISO: download, burn to USB, boot, and follow prompts.",
  "user/install/overview.md": "Installation overview: minimum hardware specs and comparison of ISO vs script methods.",
  "user/install/script.md": "Install Dappnode via bash script on Debian/Ubuntu, including prerequisites and update commands.",

  // User - Notifications
  "user/notifications/devices.md": "How to subscribe desktop/mobile devices to receive push notifications in Dappnode.",
  "user/notifications/inbox.md": "View notification inbox with history, priority levels, status, categories, and filtering options.",
  "user/notifications/legacy.md": "Legacy email/telegram notification system being deprecated in favor of the new unified system.",
  "user/notifications/notifications-list.md": "Complete list of Dappnode notifications: system, DMS, execution/consensus clients, validators.",
  "user/notifications/overview.md": "Introduction to Dappnode's built-in notification system for monitoring hardware, system, and staking.",
  "user/notifications/settings.md": "Configure notification preferences per package with master switch and threshold sliders.",

  // User - Packages
  "user/packages/avalanche.md": "Running Avalanche nodes on Dappnode for network decentralization and AVAX staking rewards.",
  "user/packages/bitcoin.md": "Running a Bitcoin node on Dappnode to validate transactions and support network decentralization.",
  "user/packages/dms.md": "Dappnode Monitoring Service using Prometheus and Grafana for system and package health monitoring.",
  "user/packages/ethclassic.md": "Running Ethereum Classic nodes on Dappnode to support blockchain immutability principles.",
  "user/packages/monero.md": "Running a Monero node on Dappnode to support the privacy-focused cryptocurrency network.",
  "user/packages/signature.md": "Package signature verification system with trusted keys management and bypass options.",
  "user/packages/swarm.md": "Guide to installing and running a Swarm Bee node on Dappnode for decentralized storage.",
  "user/packages/understanding-dappnode-packages/backup.md": "Backup and restore functionality for packages with sensitive data like validator keystores.",
  "user/packages/understanding-dappnode-packages/config.md": "Package configuration settings with simple and advanced modes for parameter customization.",
  "user/packages/understanding-dappnode-packages/file-manager.md": "File Manager for downloading and uploading files to package databases without terminal.",
  "user/packages/understanding-dappnode-packages/info.md": "Package info section showing version, status, links, and management options like remove/restart.",
  "user/packages/understanding-dappnode-packages/logs.md": "View package logs for troubleshooting, with multi-service support for beacon-chain/validator.",
  "user/packages/understanding-dappnode-packages/network.md": "Network configuration for packages: port mapping, HTTPS domains, and basic authentication.",
  "user/packages/understanding-dappnode-packages/overview.md": "Overview of Dappnode package features: Info, Config, Network, Logs, File Manager, and Backup.",

  // User - Repository
  "user/repository/ethereum.md": "How Dappnode connects to Ethereum nodes for package distribution via smart contracts.",
  "user/repository/ipfs.md": "Configure local or remote IPFS nodes for downloading Dappnode packages from the Dappstore.",

  // User - Rollups
  "user/rollups/aztec.md": "Step-by-step guide to becoming an Aztec sequencer using DAppNode infrastructure.",
  "user/rollups/optimism.md": "Setting up an Optimism Layer 2 node on Dappnode using op-node and op-geth/op-erigon.",
  "user/rollups/overview.md": "Overview of Ethereum rollups as Layer 2 scaling solutions and how to enable them in Dappnode.",

  // User - Staking Ethereum DVT
  "user/staking/ethereum/dvt-technologies/diva.md": "Run a Diva DVT operator node for liquid staking with distributed validator technology.",
  "user/staking/ethereum/dvt-technologies/obol-network.md": "Set up Obol distributed validators with DKG ceremony and cluster configuration on Dappnode.",
  "user/staking/ethereum/dvt-technologies/ssv-network.md": "Register and run an SSV distributed validator operator node on Dappnode.",

  // User - Staking Ethereum LSD
  "user/staking/ethereum/lsd-pools/lido/already-node-operator.md": "Instructions for existing Lido CSM node operators to integrate with Dappnode.",
  "user/staking/ethereum/lsd-pools/lido/notifications.md": "Configure Telegram notifications and UI warnings for Lido CSM validator monitoring.",
  "user/staking/ethereum/lsd-pools/lido/overview.md": "Lido CSM overview: permissionless staking from 2.4 ETH with Dappnode integration features.",
  "user/staking/ethereum/lsd-pools/lido/performance.md": "Monitor Lido validator performance with attestation rates and efficiency comparisons.",
  "user/staking/ethereum/lsd-pools/lido/register.md": "Step-by-step guide to register as a new Lido CSM node operator on Dappnode.",
  "user/staking/ethereum/lsd-pools/rocketpool.md": "Run Rocketpool minipools on Dappnode with as little as 8 or 16 ETH.",
  "user/staking/ethereum/lsd-pools/stakehouse.md": "Become a Stakehouse node runner with 4 ETH using Web3Signer integration.",
  "user/staking/ethereum/lsd-pools/stakewise.md": "StakeWise liquid staking setup on Dappnode with solo or pooled staking options.",

  // User - Staking Ethereum Solo
  "user/staking/ethereum/solo/holesky.md": "Run validators on Holesky testnet for risk-free Ethereum staking practice.",
  "user/staking/ethereum/solo/mainnet.md": "Complete guide to solo staking on Ethereum mainnet: setup, key generation, and deposits.",

  // User - Staking Gnosis
  "user/staking/gnosis-chain/consolidate-gnosis-validators.md": "Guide to merge multiple Gnosis validators into fewer ones after Pectra hard fork.",
  "user/staking/gnosis-chain/consolidation-gnosis.md": "Guide to merge multiple Gnosis validators into fewer ones after Pectra hard fork.",
  "user/staking/gnosis-chain/incentive-program.md": "How to claim free GNO validators through Dappnode's Gnosis Chain incentive program.",
  "user/staking/gnosis-chain/solo.md": "Complete guide to solo staking on Gnosis Chain: install packages, generate keys, deposit 1 GNO.",

  // User - Staking Other
  "user/staking/lukso/solo.md": "Complete guide to solo staking on LUKSO: install packages, generate keys, deposit 32 LYX.",
  "user/staking/overview.md": "Introduction to staking with Dappnode on Ethereum, Gnosis Chain, and LUKSO networks.",
  "user/staking/starknet/solo.md": "Guide to become a Starknet validator: create accounts, stake STRK, run attestation client.",
  "user/staking/switch-clients.md": "How to switch execution and consensus clients on Dappnode with sync times and best practices.",

  // User - Videos and Tutorials
  "user/videos-and-tutorials/crash-course.md": "Collection of YouTube workshop recordings covering Dappnode setup, validators, and staking.",
  "user/videos-and-tutorials/driving-school/configuration.md": "Video tutorials on configuring Dappnode: repositories, monitoring service, and notifications.",
  "user/videos-and-tutorials/driving-school/initial-setup.md": "Video tutorials for initial Dappnode setup: ISO boot, UI access, security, VPN, and syncing.",
  "user/videos-and-tutorials/guides/connect-node.md": "How to connect applications and Metamask to your Dappnode blockchain node via RPC.",
  "user/videos-and-tutorials/guides/migrating-from-avado.md": "Step-by-step guide to migrate Avado hardware to DappnodeOS using a bootable USB.",
  "user/videos-and-tutorials/overview.md": "Overview of Dappnode video tutorials and guides for beginners and advanced users.",
};

/**
 * Docusaurus plugin that generates plain markdown files for LLM consumption.
 */
module.exports = function pluginLlmMarkdown(context) {
  const { siteConfig } = context;
  const siteUrl = siteConfig.url;

  return {
    name: 'docusaurus-plugin-llm-markdown',

    async postBuild({ outDir }) {
      const docsDir = path.join(context.siteDir, 'docs');
      const docsMetadata = [];

      console.log('[LLM Markdown] Generating markdown files for LLM consumption...');

      // Find all markdown files in docs
      const files = await glob('**/*.{md,mdx}', { cwd: docsDir });

      for (const file of files) {
        const sourcePath = path.join(docsDir, file);
        const fileContent = fs.readFileSync(sourcePath, 'utf-8');

        // Get title from content
        const title = getTitle(fileContent, file);

        // Get hardcoded summary or fallback
        const fileKey = file.replace(/\.mdx$/, '.md');
        const summary = SUMMARIES[fileKey] || 'Documentation page';

        // Strip frontmatter
        const strippedContent = stripFrontmatter(fileContent);

        // Convert file path to URL path
        const urlPath = `/docs/${file.replace(/\.mdx?$/, '')}.md`;

        // Create output path
        const outputPath = path.join(outDir, 'docs', file.replace(/\.mdx?$/, '.md'));
        const outputDirPath = path.dirname(outputPath);

        // Ensure directory exists
        fs.mkdirSync(outputDirPath, { recursive: true });

        // Create header with reference to llms.txt index
        const header = `> ## Documentation Index
> Fetch the complete documentation index at: ${siteUrl}/llms.txt
> Use this file to discover all available pages before exploring further.

---

`;

        // Write the file with header
        fs.writeFileSync(outputPath, header + strippedContent);

        // Store metadata for llms.txt
        docsMetadata.push({
          title,
          summary,
          url: `${siteUrl}${urlPath}`,
          path: file,
        });
      }

      // Sort by path alphabetically
      docsMetadata.sort((a, b) => a.path.localeCompare(b.path));

      // Generate llms.txt with descriptions
      const docsList = docsMetadata
        .map(doc => `- [${doc.title}](${doc.url}): ${doc.summary}`)
        .join('\n');

      const llmsTxtContent = `# Knowledge Base

## Docs

${docsList}
`;

      fs.writeFileSync(path.join(outDir, 'llms.txt'), llmsTxtContent);

      console.log(`[LLM Markdown] Generated ${docsMetadata.length} markdown files`);
      console.log(`[LLM Markdown] Created /llms.txt index`);
    },
  };
};

/**
 * Remove YAML frontmatter from markdown content
 */
function stripFrontmatter(content) {
  const frontmatterRegex = /^---\r?\n[\s\S]*?\r?\n---\r?\n*/;
  return content.replace(frontmatterRegex, '');
}

/**
 * Extract title from frontmatter or first heading
 */
function getTitle(content, filename) {
  // Try to get title from frontmatter
  const frontmatterMatch = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (frontmatterMatch) {
    const titleMatch = frontmatterMatch[1].match(/^title:\s*["']?(.+?)["']?\s*$/m);
    if (titleMatch) {
      return titleMatch[1];
    }
  }

  // Try to get title from first heading
  const headingMatch = content.match(/^#\s+(.+)$/m);
  if (headingMatch) {
    return headingMatch[1];
  }

  // Fall back to filename
  return filename
    .replace(/\.mdx?$/, '')
    .split('/')
    .pop()
    .replace(/-/g, ' ')
    .replace(/\b\w/g, c => c.toUpperCase());
}
