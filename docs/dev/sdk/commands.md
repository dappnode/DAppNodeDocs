> ## Documentation Index
> Fetch the complete documentation index at: https://docs.dappnode.io/llms.txt
> Use this file to discover all available pages before exploring further.

---

# Main commands

This page covers the top three functionalities of DappnodeSDK: `init`, `build`, and `publish`. Each command plays a crucial role in the development and deployment process of dappnode packages (DNPs).

## `init`

The `init` command allows you to initialize a new DAppNodePackage (DNP) repository. This is the first step when creating a new DNP. To use the `init` command, run the following:

```sh
npx @dappnode/dappnodesdk init
```
The following are all the possible `init` options:

```Options:
      --dir, --directory   Change the base directory    [string] [default: "./"]
      --compose_file_name  Compose file for docker-compose
                                        [string] [default: "docker-compose.yml"]
      --silent             Silence output to terminal                  [boolean]
      --verbose, --debug   Show more output to terminal                [boolean]
  -y, --yes                Answer yes or the default option to all initializatio
                           n questions                                 [boolean]
  -f, --force              Overwrite previous project if necessary     [boolean]
  -h, --help               Show help                                   [boolean]
  -v, --version            Show version number                         [boolean]
```

## `build`
The build command is used to build a new version of a DNP. It generates the IPFS hash for the package. To use the build command, run the following:

```sh
npx @dappnode/dappnodesdk build
```

The following are all the possible `build` options:

```Options:
      --dir, --directory   Change the base directory    [string] [default: "./"]
      --compose_file_name  Compose file for docker-compose
                                        [string] [default: "docker-compose.yml"]
      --silent             Silence output to terminal                  [boolean]
      --verbose, --debug   Show more output to terminal                [boolean]
  -p, --provider           Specify an ipfs provider: "dappnode" (default), "infu
                           ra", "localhost:5002"           [default: "dappnode"]
  -t, --timeout            Overrides default build timeout: "15h", "20min 15s",
                           "5000". Specs npmjs.com/package/timestring
                                                              [default: "60min"]
      --skip_save          For testing only: do not save image to disk [boolean]
      --skip_upload        For testing only: do not upload image from disk
                                                                       [boolean]
  -h, --help               Show help                                   [boolean]
  -v, --version            Show version number                         [boolean]
```

## `publish`
The `publish` command is used to publish a new version of the DNP in an Aragon Package Manager Repository. To use the `publish` command, run the following:

```sh
npx @dappnode/dappnodesdk publish
```
The following are all the possible `publish` options:

```Options:
      --dir, --directory      Change the base directory [string] [default: "./"]
      --compose_file_name     Compose file for docker-compose
                                        [string] [default: "docker-compose.yml"]
      --silent                Silence output to terminal               [boolean]
      --verbose, --debug      Show more output to terminal             [boolean]
      --type                  Semver update type. Can also be provided with env
                              RELEASE_TYPE=[type] or via TRAVIS_TAG=release (pat
                              ch), TRAVIS_TAG=release/[type]
                                   [string] [choices: "major", "minor", "patch"]
  -p, --provider              Specify a provider (overwrittes content_provider a
                              nd eth_provider): "dappnode" (default), "infura",
                              "http://localhost:8545"                   [string]
      --eth_provider          Specify an eth provider: "dappnode" (default), "in
                              fura", "localhost:8545"
                                                  [string] [default: "dappnode"]
      --content_provider      Specify an ipfs provider: "dappnode" (default), "i
                              nfura", "http://localhost:5001"
                                                  [string] [default: "dappnode"]
      --upload_to             Specify where to upload the release
                                    [choices: "ipfs", "swarm"] [default: "ipfs"]
  -a, --developer_address     If there is no existing repo for this DNP the publ
                              ish command needs a developer address. If it is no
                              t provided as an option a prompt will request it
                                                                        [string]
  -t, --timeout               Overrides default build timeout: "15h", "20min 15s
                              ", "5000". Specs npmjs.com/package/timestring
                                                                        [string]
      --github_release        Publish the release on the Github repo specified i
                              n the manifest. Requires a GITHUB_TOKEN ENV to aut
                              henticate                                [boolean]
      --dappnode_team_preset  Specific set of options used for internal DAppNode
                               releases. Caution: options may change without not
                              ice.                                     [boolean]
  -h, --help                  Show help                                [boolean]
  -v, --version               Show version number                      [boolean]```
