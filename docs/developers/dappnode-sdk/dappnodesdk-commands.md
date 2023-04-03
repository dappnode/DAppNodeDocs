# DappNodeSDK commands

The DappNodeSDK is a tool that simplifies the creation of new DappNode packages. This section defines all DappNodeSDK commands. A guide on how to publish a new DappNode package with DappNodeSDK can be found [here](https://docs.dappnode.io/developers/package-dev/package-tutorial-from-scratch).

### init
```console
$ dappnodesdk init
```
The init command initializes a new DappNode Package repository. Once executed, the user will be prompted to define the package name, version, description, author, and license. These details will be added to the `dappnode_package.json` manifest file. The `init` command creates the following files:

- *avatar-default.png*
- *dappnode_package.json*
- *docker-compose.yml*
- *Dockerfile*
- *.gitignore*


### build

```console
$ dappnodesdk build
```
The `build` command verifies the contents of the DappNode package in the current working directory, and then builds a Docker image of the package. If the `dappnode_package.json` file follows the manifest schema, and the `docker-compose.yml` and `Dockerfile` files are error-free, the DappNode package is published on IPFS. Once the build command completes execution, an IPFS release hash is printed on the console, and the DappNode package is now ready to be installed at DappNode UI through the IPFS hash, like any other DappNode Package.

You can use the optional `--dir` or `--directory` flag to change the build directory from the default `./` (current base directory).



### from_github
```console
$ dappnodesdk from_github
```
The`from_github` command builds a DappNode package similar to `build`, but it uses a remote GitHub directory as the source files, instead of the current working directory on your local machine.

### increase
```console
$ dappnodesdk increase [major|minor|patch]
```
The `increase` command offers an easy way of incrementing the version of the DappNode Package defined in the `dappnode_package` manifest file. The increase can be:
- *major*: **0**.0.0 &rarr; **1**.0.0 
- *minor*: 1.**0**.0 &rarr; 1.**1**.0 
- *patch*: 1.1.**0** &rarr; 1.1.**1**

### next
```console
$ dappnodesdk next
```
Computes the next release version from local.

### publish
```console
$ dappnodesdk publish
```
Publishes a new version of the package in an Aragon Package Manager Repository.

### github-action
```console
$ dappnodesdk github-action [build|bump-upstream]
```

The `github-action` command accepts one argument, either `build` or `bump-upstream`. When working with a DappNode Package remotely, this command allows you to:
- Build and upload a test release and post a comment with install link to the triggering PR.
- Check if upstream repository has released a new version and open a PR with version bump.