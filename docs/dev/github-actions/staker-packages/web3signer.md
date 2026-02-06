---
title: "Web3Signer Workflows"
sidebar_label: Web3Signer
llm_description: "GitHub Actions workflows for the Dappnode Web3Signer package (to be designed)."
---

# Web3Signer Workflows

:::caution Work in Progress
The CI workflows for Web3Signer packages are currently being designed. This documentation will be updated once the workflows are finalized.
:::

## Overview

Web3Signer is a critical component in the staking stack that handles validator key management and signing. The CI workflows for Web3Signer will need to verify:

- Proper key import functionality
- Signing operations work correctly
- Integration with both execution and consensus client pairs
- Slashing protection database handling

## Planned Workflows

The following workflows are being considered for Web3Signer packages:

| Workflow         | Status | Purpose                       |
| ---------------- | ------ | ----------------------------- |
| `auto_check.yml` | 🔄 TBD | Check for upstream updates    |
| `sync-test.yml`  | 🔄 TBD | Test package changes          |
| `release.yml`    | 🔄 TBD | Release with integration test |

## Testing Considerations

Web3Signer testing presents unique challenges:

1. **Key Management**: Tests need to handle validator keys securely
2. **Slashing Protection**: Must verify slashing protection DB is working correctly
3. **Client Compatibility**: Should test with multiple execution/consensus client combinations
4. **API Verification**: Web3Signer's remote signing API should be validated

## Contributing

If you have ideas or want to contribute to the Web3Signer CI workflow design, please:

- Join the discussion on [Discord](https://discord.com/invite/dappnode)
- Open an issue on [GitHub](https://github.com/dappnode)
