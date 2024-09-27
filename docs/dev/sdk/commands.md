# Main commands
This page covers the top three functionalities of DappnodeSDK: `init`, `build`, and `publish`. Each command plays a crucial role in the development and deployment process of dappnode packages (DNPs).
## `init`
The `init` command allows you to initialize a new DAppNodePackage (DNP) repository. This is the first step when creating a new DNP. To use the `init` command, run the following:
```sh
npx @dappnode/dappnodesdk init
```
The following are all the possible `init` options:
<!--flag_init_start-->
```Options:
  --dir, --directory   Change the base directory        [string] [default: "./"]
  --compose_file_name  Compose file for docker-compose
                                        [string] [default: "docker-compose.yml"]
  --silent             Silence output to terminal                      [boolean]
  --verbose, --debug   Show more output to terminal                    [boolean]
  --yes, -y            Answer yes or the default option to all initialization
                       questions                                       [boolean]
  --force, -f          Overwrite previous project if necessary         [boolean]
  -h, --help           Show help                                       [boolean]
  -v, --version        Show version number                             [boolean]
```
<!--flag_init_end-->
## `build`
The build command is used to build a new version of a DNP. It generates the IPFS hash for the package. To use the build command, run the following:
```sh
npx @dappnode/dappnodesdk build
```
The following are all the possible `build` options:
<!--flag_build_start-->
```Options:
  --dir, --directory   Change the base directory        [string] [default: "./"]
  --compose_file_name  Compose file for docker-compose
                                        [string] [default: "docker-compose.yml"]
  --silent             Silence output to terminal                      [boolean]
  --verbose, --debug   Show more output to terminal                    [boolean]
  --provider, -p       Specify an ipfs provider: "dappnode" (default), "infura",
                       "localhost:5002"                    [default: "dappnode"]
  --timeout, -t        Overrides default build timeout: "15h", "20min 15s",
                       "5000". Specs npmjs.com/package/timestring
                                                              [default: "60min"]
  --skip_save          For testing only: do not save image to disk     [boolean]
  --skip_upload        For testing only: do not upload image from disk [boolean]
  -h, --help           Show help                                       [boolean]
  -v, --version        Show version number                             [boolean]
```
<!--flag_build_end-->
## `publish`
The `publish` command is used to publish a new version of the DNP in an Aragon Package Manager Repository. To use the `publish` command, run the following:
```sh
npx @dappnode/dappnodesdk publish
```
The following are all the possible `publish` options:
<!--flag_publish_start-->
```Options:
  --dir, --directory       Change the base directory    [string] [default: "./"]
  --compose_file_name      Compose file for docker-compose
                                        [string] [default: "docker-compose.yml"]
  --silent                 Silence output to terminal                  [boolean]
  --verbose, --debug       Show more output to terminal                [boolean]
  --provider, -p           Specify a provider (overwrittes content_provider and
                           eth_provider): "dappnode" (default), "infura",
                           "http://localhost:8545"                      [string]
  --eth_provider           Specify an eth provider: "dappnode" (default),
                           "infura", "localhost:5002"
                                                  [string] [default: "dappnode"]
  --content_provider       Specify an ipfs provider: "dappnode" (default),
                           "infura", "http://localhost:8545"
                                                  [string] [default: "dappnode"]
  --upload_to              Specify where to upload the release
                                    [choices: "ipfs", "swarm"] [default: "ipfs"]
  --developer_address, -a  If there is no existing repo for this DNP the publish
                           command needs a developer address. If it is not
                           provided as an option a prompt will request it
                                                                        [string]
  --timeout, -t            Overrides default build timeout: "15h", "20min 15s",
                           "5000". Specs npmjs.com/package/timestring
                                                     [string] [default: "60min"]
  --github_release         Publish the release on the Github repo specified in
                           the manifest. Requires a GITHUB_TOKEN ENV to
                           authenticate                                [boolean]
  --dappnode_team_preset   Specific set of options used for internal DAppNode
                           releases. Caution: options may change without notice.
                                                                       [boolean]
  -h, --help               Show help                                   [boolean]
  -v, --version            Show version number                         [boolean]
```
<!--flag_publish_end-->
## `from_github`
The `from_github` command is used to get an existing DNP Github release and upload it to IPFS. To use the `from_github` command, run the following:
```sh
npx @dappnode/dappnodesdk from_github
```
The following are all the possible `from_github` options:
<!--flag_from_github_start-->
```Options:
  --dir, --directory   Change the base directory        [string] [default: "./"]
  --compose_file_name  Compose file for docker-compose
                                        [string] [default: "docker-compose.yml"]
  --silent             Silence output to terminal                      [boolean]
  --verbose, --debug   Show more output to terminal                    [boolean]
  --provider, -p       Specify an ipfs provider: "dappnode" (default), "infura",
                       "localhost:5002"                    [default: "dappnode"]
  --latest             Fetch the latest release only, even if it's a prerelease
                                                                       [boolean]
  -h, --help           Show help                                       [boolean]
  -v, --version        Fetch a given version: v0.2.5                    [string]
```
<!--flag_from_github_end-->

## `increase`
The `increase` command is used to increase the version defined in the manifest. To use the `increase` command, run the following:
```sh
npx @dappnode/dappnodesdk increase
```
The following are all the possible `increase` options:
<!--flag_increase_start-->
```Options:
  --dir, --directory   Change the base directory        [string] [default: "./"]
  --compose_file_name  Compose file for docker-compose
                                        [string] [default: "docker-compose.yml"]
  --silent             Silence output to terminal                      [boolean]
  --verbose, --debug   Show more output to terminal                    [boolean]
  -h, --help           Show help                                       [boolean]
  -v, --version        Show version number                             [boolean]
```
<!--flag_increase_end-->

## `next`
The `next` command is used to compute the next release version from local. To use the `next` command, run the following:
```sh
npx @dappnode/dappnodesdk next
```
The following are all the possible `next` options:
<!--flag_next_start-->
```Options:
  --dir, --directory   Change the base directory        [string] [default: "./"]
  --compose_file_name  Compose file for docker-compose
                                        [string] [default: "docker-compose.yml"]
  --silent             Silence output to terminal                      [boolean]
  --verbose, --debug   Show more output to terminal                    [boolean]
  --provider, -p       Specify an ipfs provider: "dappnode" (default), "infura",
                       "localhost:5002"           [string] [default: "dappnode"]
  -h, --help           Show help                                       [boolean]
  -v, --version        Show version number                             [boolean]
```
<!--flag_next_end-->

## `github-action`
The `github-action` command is a Github Actions tooling to be run in CI. Uses a specific set of options for internal DAppNode use. (Caution: options may change without notice) To use the `github-action` command, run the following:
```sh
npx @dappnode/dappnodesdk github-action
```
The following are all the possible `github-action` options:
<!--flag_github-action_start-->
```Options:
  --dir, --directory   Change the base directory        [string] [default: "./"]
  --compose_file_name  Compose file for docker-compose
                                        [string] [default: "docker-compose.yml"]
  --silent             Silence output to terminal                      [boolean]
  --verbose, --debug   Show more output to terminal                    [boolean]
  -h, --help           Show help                                       [boolean]
  -v, --version        Show version number                             [boolean]
```
<!--flag_github-action_end-->