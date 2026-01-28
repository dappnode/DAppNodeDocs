---
llm_description: "Overview of DappnodeSDK tool for creating, building, and publishing packages."
---

# DappnodeSDK

The DappnodeSDK `dappnodesdk` is a tool that makes creating and publishing new Dappnode packages as simple as possible. It helps to initialize, build, test, and publish the new package/repo to an APM tracked on the Ethereum Mainnet.

We have deployed a public APM (Aragon Package Manager) registry in which anyone can create their own APM repository: [public.dappnode.eth](https://etherscan.io/address/public.dappnode.eth)

![Demo GIF](/img/demo.gif)

## Command-line options
DappnodeSDK is usually executed from the command line. The following are all the available commands. 

:::info
You can run `dappnodesdk <command> help` to get more information about each command.
:::

```
Usage: dappnodesdk <command> [options]

Commands:
  build                   Build a new version (only generates the ipfs hash)
  from_github [repoSlug]  Gets an existing DNP Github release (assets) and uploa
                          d it to IPFS
  increase [type]         Increases the version defined in the manifest
  init                    Initialize a new DAppNodePackage (DNP) repository
  next [type]             Compute the next release version from local
  publish [type]          Publish a new version of the package in an Aragon Pack
                          age Manager Repository
  github-action           Github actions tooling to be run in CI. Uses a specifi
                          c set of options for internal DAppNode use. Caution: o
                          ptions may change without notice.

Options:
      --dir, --directory   Change the base directory    [string] [default: "./"]
      --compose_file_name  Compose file for docker-compose
                                        [string] [default: "docker-compose.yml"]
      --silent             Silence output to terminal                  [boolean]
      --verbose, --debug   Show more output to terminal                [boolean]
  -h, --help               Show help                                   [boolean]
  -v, --version            Show version number                         [boolean]```
