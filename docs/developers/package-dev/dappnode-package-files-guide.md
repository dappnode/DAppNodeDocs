# The DAppNode Package

A DAppNode package is a pre-configured dApp that can be installed and managed on the DAppNode platform. This section defines the contents of a standard DappNode package (DNP).


## Mandatory files
In order for a DappNode package to be installed through the DAppNode platform, it must include two mandatory files, both included at the root of your DNP repository:

1. **dappnode_package.json**: This manifest file contains metadata and configuration information for the package and is validated against the [manifest schema](https://github.com/dappnode/DAppNodeSDK/blob/master/src/schemaValidation/schemas/manifest.schema.json). 
3. **docker-compose.yml**: This file configures the Docker containers that the package will run in. It specifices the image to be used, as well as any additional configuration options needed to run the package. Please ensure that the official [Docker Compose specification](https://docs.docker.com/compose/compose-file/) is followed. DappNode also runs a [test](https://github.com/dappnode/DAppNodeSDK/blob/master/src/files/compose/validateDappnodeCompose.ts) on the contents of the docker-compose.yml file to ensure that it is a valid DappNode docker-compose.yml file.



## Other recommended files
A DappNode package may also have some additional files. These usually are:

1. One or more `Dockerfile` to build or make any additional configuration changes to an image.
2. The `setup-wizard.yml`, which helps the user set any additional configuration variables during the instalation.
3. A custom avatar PNG file, which is displayed in the DappNode UI.
4. `LICENSE` and `README.md` files.
5. `getting-started.md` file, which provides additional information about the package and is displayed in the DappNode UI.

## Complete DAppNode package Example

To be added soon