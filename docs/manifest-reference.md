# DAppNode Package (DNP) manifest

The DAppNode Package manifest defines all the necessary information for a DAppNode to understand this package:

- IPFS of BZZ hashes to download its docker image
- Docker related data to configure and run its container
- Metadata to control how the package is shown in the admin UI.

## Example

```json
{
  "name": "ipfs.dnp.dappnode.eth",
  "version": "0.2.0",
  "upstreamVersion": "2.6.0",
  "shortDescription": "Distributed file system for storing and accessing data.",
  "description": "Welcome! IPFS is a distributed system for storing and accessing files, websites, applications, and data. If you’re new to IPFS, check our [introductory page](https://ipfs.io/#why) for an easy overview. \n\nWith this node you can upload and download files from IPFS using it own fancy web console at [http://ipfs.dappnode:5001/webui](http://ipfs.dappnode:5001/webui). Other DAppNode Packages and external applications can use its API at the endpoint `http://ipfs.dappnode:5001/api`. Go to the [IPFS HTTP API full reference](https://docs.ipfs.io/reference/api/http/) to check all the features of the API.",
  "avatar": "/ipfs/QmWwMb3XhuCH6JnCF6m6EQzA4mW9pHHtg7rqAfhDr2ofi8",
  "type": "service",
  "image": {
    "hash": "/ipfs/QmWwMb3XhuCH6JnCF6m6EQzA4mW9pHHtg7rqAfhDr2ofi8",
    "size": 25738523,
    "path": "ipfs.dnp.dappnode.eth_0.2.0.tar.xz",
    "volumes": [
      "/var/run/docker.sock:/var/run/docker.sock",
      "/usr/src/dappnode/config:/usr/src/app/config:ro",
      "ipfsdnpdappnodeeth_data:/data/ipfs"
    ],
    "external_vol": ["dncore_ethchaindnpdappnodeeth_data:/app/.ethchain:ro"],
    "ports": ["1194:1194/udp", "8090:3000/udp"],
    "environment": ["RACK_ENV=development", "SHOW=true", "EXTRA_OPTS=", "EMPTY_ENV"],
    "restart": "always",
    "privileged": true,
    "cap_add": ["NET_ADMIN", "SYS_ADMIN"],
    "cap_drop": ["NET_ADMIN", "SYS_ADMIN"],
    "devices": ["/dev/ttyUSB0:/dev/ttyUSB0", "/dev/sda:/dev/xvdc:rwm"],
    "subnet": "172.33.0.0/16",
    "ipv4_address": "172.33.1.4",
    "network_mode": "bridge",
    "command": "bundle exec thin -p 3000",
    "labels": ["eth.dappnode.dnp.my-dnp.developer=Awesome_Name"]
  },
  "chain": "ethereum",
  "dependencies": {
    "bitcoin.dnp.dappnode.eth": "^0.1.2",
    "swarm.dnp.dappnode.eth": "latest"
  },
  "requirements": {
    "minimumDappnodeVersion": "0.2.0"
  },
  "backup": [
    {
      "name": "keystore",
      "path": "/root/.raiden/secret/keystore"
    }
  ],
  "changelog": "Brief summary of the most relevant changes that the user must known before installing",
  "warnings": {
    "onInstall": "You must set the PASSWORD ENV before installing the DAppNode Package in order for the setup to work correctly.",
    "onUpdate": "Your VPN connection will be lost when the VPN finalizes updating. Leave 1-2 minutes after executing the update and then reconnect and refresh this site.",
    "onReset": "You MUST properly close your open channels before resetting this DAppNode Package or you may lose your funds.",
    "onRemove": "You MUST properly close your open channels before removing this DAppNode Package or you may lose your funds."
  },
  "updateAlerts": [
    {
      "from": "0.1.x",
      "to": "0.1.x",
      "message": "Major update to OpenVPN: This update breaks compatibility with the last VPN version. Please read the migration guide: https://migration020.dappnode.io"
    }
  ],
  "disclaimer": {
    "message": "This software is experimental, presented “as is” and inherently carries risks."
  },
  "style": {
    "featuredBackground": "linear-gradient(to right, #323131, #395353)",
    "featuredColor": "white",
    "featuredAvatarFilter": "invert(1)"
  },
  "author": "DAppNode Association <admin@dappnode.io> (https://github.com/dappnode)",
  "contributors": [
    "Michael First <developerHanlder@project.io> (https://github.com/developerHanlder)",
    "Michael Second <developerHanlder@project.io> (https://github.com/developerHanlder)"
  ],
  "categories": ["Developer tools", "Blockchain"],
  "keywords": ["DAppNodeCore"],
  "links": {
    "homepage": "https://github.com/dappnode/DNP_IPFS#readme",
    "ui": "http://ipfs.dappnode:5001/webui",
    "api": "http://ipfs.dappnode:5001/api/v0",
    "gateway": "http://ipfs.dappnode:8080/ipfs"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/dappnode/DNP_IPFS.git",
    "directory": "packages/react-dom"
  },
  "bugs": {
    "url": "https://github.com/dappnode/DNP_IPFS/issues"
  },
  "license": "GPL-3.0"
}
```

## Properties reference

| Property                              | Type       | Required     |
| ------------------------------------- | ---------- | ------------ |
| [name](#name)                         | `string`   | **Required** |
| [version](#version)                   | `string`   | **Required** |
| [upstreamVersion](#upstreamversion)   | `string`   | Optional     |
| [shortDescription](#shortdescription) | `string`   | Optional     |
| [description](#description)           | `string`   | **Required** |
| [avatar](#avatar)                     | `string`   | **Required** |
| [type](#type)                         | `enum`     | **Required** |
| [image](#image)                       | `object`   | **Required** |
| [chain](#chain)                       | `enum`     | Optional     |
| [dependencies](#dependencies)         | `object`   | Optional     |
| [requirements](#requirements)         | `object`   | Optional     |
| [backup](#backup)                     | `object[]` | Optional     |
| [changelog](#changelog)               | `string`   | Optional     |
| [warnings](#warnings)                 | `object`   | Optional     |
| [updateAlerts](#updatealerts)         | `object[]` | Optional     |
| [disclaimer](#disclaimer)             | `object`   | Optional     |
| [style](#style)                       | `object`   | Optional     |
| [author](#author)                     | `string`   | Optional     |
| [contributors](#contributors)         | `string[]` | Optional     |
| [categories](#categories)             | `enum[]`   | Optional     |
| [keywords](#keywords)                 | `string[]` | Optional     |
| [links](#links)                       | `object`   | Optional     |
| [repository](#repository)             | `object`   | Optional     |
| [bugs](#bugs)                         | `object`   | Optional     |
| [license](#license)                   | `string`   | **Required** |

### name

DAppNode Package ENS name.

- is **required**
- type: `string`

Example:

```json
"ipfs.dnp.dappnode.eth"
```

### version

DAppNode Package semantic version (semver).

- is **required**
- type: `string`

All instances must conform to this regular expression

```regex
^((([0-9]+).([0-9]+).([0-9]+)))$
```

- test example:
  [0.2.0](<https://regexr.com/?expression=%5E(((%5B0-9%5D%2B).(%5B0-9%5D%2B).(%5B0-9%5D%2B)))%24&text=0.2.0>)

Example:

```json
"0.2.0"
```

### upstreamVersion

For DAppNode Packages that only wrap existing software (i.e. Bitcoin node, Ethereum node), the underlying software
version can be specified here. It will be shown in the admin UI alongside the field `version`.

- is optional
- type: `string`

All instances must conform to this regular expression

```regex
^((([0-9]+).([0-9]+).([0-9]+)))$
```

- test example:
  [2.6.0](<https://regexr.com/?expression=%5E(((%5B0-9%5D%2B).(%5B0-9%5D%2B).(%5B0-9%5D%2B)))%24&text=2.6.0>)

Example:

```json
"2.6.0"
```

### shortDescription

Short DAppNode Package description, 6-8 words sentence briefly describing the purpose of this DAppNode Package. The
purpose is to quickly grab users' attention and clearly define its purpose. Markdown is discouraged as it will NOT be
rendered on the DAppNode Package store view.

- is optional
- type: `string`

Example:

```json
"Distributed file system for storing and accessing data."
```

### description

DAppNode Package description. Markdown and links are allowed and ecouraged to give users the option to read more
information about this DAppNode Package.

- is **required**
- type: `string`

Example:

```json
"Welcome! IPFS is a distributed system for storing and accessing files, websites, applications, and data. If you’re new to IPFS, check our [introductory page](https://ipfs.io/#why) for an easy overview. \n\nWith this node you can upload and download files from IPFS using it own fancy web console at [http://ipfs.dappnode:5001/webui](http://ipfs.dappnode:5001/webui). Other DAppNode Packages and external applications can use its API at the endpoint `http://ipfs.dappnode:5001/api`. Go to the [IPFS HTTP API full reference](https://docs.ipfs.io/reference/api/http/) to check all the features of the API."
```

### avatar

IPFS / BZZ hash of the Avatar of this DAppNode Package. Must be a 300 x 300px transparent PNG. It is strongly
encouraged that you optimize the .png before uploading it to minimize its size.

- is **required**
- type: `string`
- minimum length: 46 characters

All instances must conform to this regular expression

```regex
^/(ipfs|bzz)/\w+$
```

- test example:
  [/ipfs/QmWwMb3XhuCH6JnCF6m6EQzA4mW9pHHtg7rqAfhDr2ofi8](<https://regexr.com/?expression=%5E%2F(ipfs%7Cbzz)%2F%5Cw%2B%24&text=%2Fipfs%2FQmWwMb3XhuCH6JnCF6m6EQzA4mW9pHHtg7rqAfhDr2ofi8>)

Example:

```json
"/ipfs/QmWwMb3XhuCH6JnCF6m6EQzA4mW9pHHtg7rqAfhDr2ofi8"
```

### type

Type of this DAppNode Package. It is used to trigger some special features such as core functionality.

- is **required**
- default: `"service"`
- type: `string`

The value of this property **must** be equal to one of the known values below.

| Value     | Description                                                                       |
| --------- | --------------------------------------------------------------------------------- |
| `service` | Can have ENVs a depend on library DAppNode Packages                               |
| `library` | Should not have ENVs and cannot depend on service DAppNode Packages               |
| `dncore`  | DAppNode Packages that are part of the DAppNode core and have special permissions |

Examples:

```json
"service"
```

```json
"dncore"
```

### image

Docker compose properties from which this DAppNode Package's `docker-compose.yml` will be generated. Also includes
upload data to fetch the image tarball from IPFS of BZZ.

- is **required**
- type: `object` with the following properties:

| Property       | Type    | Required     | Default    |
| -------------- | ------- | ------------ | ---------- |
| `hash`         | string  | **Required** |            |
| `size`         | integer | **Required** |            |
| `path`         | string  | Optional     |            |
| `volumes`      | array   | Optional     |            |
| `external_vol` | array   | Optional     |            |
| `ports`        | array   | Optional     |            |
| `environment`  | array   | Optional     |            |
| `restart`      | string  | Optional     | `"always"` |
| `privileged`   | boolean | Optional     |            |
| `cap_add`      | array   | Optional     |            |
| `cap_drop`     | array   | Optional     |            |
| `devices`      | array   | Optional     |            |
| `subnet`       | string  | Optional     |            |
| `ipv4_address` | string  | Optional     |            |
| `network_mode` | string  | Optional     |            |
| `command`      | string  | Optional     |            |
| `labels`       | array   | Optional     |            |

#### hash

IPFS / BZZ hash of the DAppNode Package image.

- is **required**
- type: `string`
- minimum length: 46 characters

All instances must conform to this regular expression

```regex
^/(ipfs|bzz)/\w+$
```

- test example:
  [/ipfs/QmWwMb3XhuCH6JnCF6m6EQzA4mW9pHHtg7rqAfhDr2ofi8](<https://regexr.com/?expression=%5E%2F(ipfs%7Cbzz)%2F%5Cw%2B%24&text=%2Fipfs%2FQmWwMb3XhuCH6JnCF6m6EQzA4mW9pHHtg7rqAfhDr2ofi8>)

Example:

```json
"/ipfs/QmWwMb3XhuCH6JnCF6m6EQzA4mW9pHHtg7rqAfhDr2ofi8"
```

#### size

Size of the DAppNode Package image in bytes. Necessary to show a correct download progress bar when user's install this
DAppNode Package.

- is **required**
- type: `integer`
- minimum value: `1`

Example:

```
25738523
```

#### path

The filename of the DAppNode Package image.

- is optional
- type: `string`
- minimum length: 1 characters

Example:

```json
"ipfs.dnp.dappnode.eth_0.2.0.tar.xz"
```

#### volumes

DAppNode Package volume mappings.

- is optional
- type: Array type: `string[]`

All items must be of the type: `string`

All instances must conform to this regular expression (test examples
[here](https://regexr.com/?expression=%5E%5B%5E%5Cs%5D%2B%3A%5B%5E%5Cs%5D%2B%24)):

```regex
^[^\s]+:[^\s]+$
```

Docker volumes short syntax `HOST:CONTAINER:ro` mapping. Go to the
[docker-compose file volumes reference](https://docs.docker.com/compose/compose-file/#volumes) for valid values.

Example:

```json
[
  "/var/run/docker.sock:/var/run/docker.sock",
  "/usr/src/dappnode/config:/usr/src/app/config:ro",
  "ipfsdnpdappnodeeth_data:/data/ipfs"
]
```

#### external_vol

DAppNode Package external volume mappings, volumes have been created outside of this DAppNode Package's compose.

- is optional
- type: Array type: `string[]`

All items must be of the type: `string`

All instances must conform to this regular expression (test examples
[here](https://regexr.com/?expression=%5E%5B%5E%5Cs%5D%2B%3A%5B%5E%5Cs%5D%2B%24)):

```regex
^[^\s]+:[^\s]+$
```

Docker volumes short syntax `HOST:CONTAINER:ro` mapping. Go to the
[docker-compose file external volumes reference](https://docs.docker.com/compose/compose-file/#external) for valid
values.

Examples:

```json
["dncore_ethchaindnpdappnodeeth_data:/app/.ethchain:ro"]
```

```json
["nginxproxydnpdappnodeeth_vhost.d:/etc/nginx/vhost.d", "nginxproxydnpdappnodeeth_html:/usr/share/nginx/html"]
```

#### ports

DAppNode Package port mappings.

- is optional
- type: Array type: `string[]`

All items must be of the type: `string`

- minimum length: 1 characters

Docker ports short syntax `HOST:CONTAINER/protocol`. Go to the
[docker-compose file ports reference](https://docs.docker.com/compose/compose-file/#ports) for valid values.

Examples:

```json
["1194:1194/udp", "8090:3000/udp"]
```

```json
["4001/udp", "4001/tcp"]
```

```json
["4001"]
```

#### environment

DAppNode Package environment variables. You must declare all ENVs even if they are empty.

- is optional
- type: Array type: `string[]`

All items must be of the type: `string`

- minimum length: 1 characters

Docker environment variables in array form, in the format `KEY=VALUE`. Go to the
[docker-compose file environment reference](https://docs.docker.com/compose/compose-file/#environment) for valid
values.

Example:

```json
["RACK_ENV=development", "SHOW=true", "EXTRA_OPTS=", "EMPTY_ENV"]
```

#### restart

Docker restart policy, 'always' is highly recommended. Go to the
[docker-compose file restart reference](https://docs.docker.com/compose/compose-file/#restart) for more details.

- is optional
- default: `"always"`
- type: `string`

The value of this property **must** be equal to one of the known values below.

| Value            | Description                                             |
| ---------------- | ------------------------------------------------------- |
| `always`         | Always restarts                                         |
| `no`             | Does not restart under any circumstance                 |
| `on-failure`     | Restarts if the exit code indicates an on-failure error |
| `unless-stopped` | Restarts unless Docker itself is stopped or restarted   |

Example:

```json
"always"
```

#### privileged

Grant the DAppNode Package (almost) all the capabilities of their host machine, regarding kernel features and device
access. Go to this
[docker article about priviledge mode](https://blog.docker.com/2013/09/docker-can-now-run-within-docker/) for more
details.

- is optional
- type: `boolean`

Example:

```
true
```

#### cap_add

Add container capabilities. Go to the
[docker-compose file cap_add reference](https://docs.docker.com/compose/compose-file/#cap_add-cap_drop) for more
details

- is optional
- type: Array type: `string[]`

All items must be of the type: `string`

- minimum length: 1 characters

A valid docker capability key. Go to the
[docker reference about Linux capabilities](https://docs.docker.com/engine/reference/run/#runtime-privilege-and-linux-capabilities)
for valid values and their meaning.

Examples:

```json
["NET_ADMIN", "SYS_ADMIN"]
```

```json
["ALL"]
```

#### cap_drop

Drop container capabilities. Go to the
[docker-compose file cap_drop reference](https://docs.docker.com/compose/compose-file/#cap_add-cap_drop) for more
details

- is optional
- type: Array type: `string[]`

All items must be of the type: `string`

- minimum length: 1 characters

A valid docker capability key. Go to the
[docker reference about Linux capabilities](https://docs.docker.com/engine/reference/run/#runtime-privilege-and-linux-capabilities)
for valid values and their meaning.

Example:

```json
["NET_ADMIN", "SYS_ADMIN"]
```

#### devices

Allows you to run devices inside the container without the `privileged` flag. Must be a list of device mappings. Uses
the same format as the --device docker client create option.

- is optional
- type: Array type: `string[]`

All items must be of the type: `string`

- minimum length: 1 characters

A valid docker device mapping. Go to the
[docker reference about runtime privileges](https://docs.docker.com/engine/reference/run/#runtime-privilege-and-linux-capabilities)
for valid values and more details.

Example:

```json
["/dev/ttyUSB0:/dev/ttyUSB0", "/dev/sda:/dev/xvdc:rwm"]
```

#### subnet

Specify the subnet. Go to the
[docker-compose file ipv4_address-ipv6_address reference](https://docs.docker.com/compose/compose-file/#ipv4_address-ipv6_address)
for valid values.

- is optional
- type: `string`

All instances must conform to this regular expression

```regex
^(?:[0-9]{1,3}.){3}[0-9]{1,3}/[0-9]+$
```

- test example:
  [172.33.0.0/16](<https://regexr.com/?expression=%5E(%3F%3A%5B0-9%5D%7B1%2C3%7D.)%7B3%7D%5B0-9%5D%7B1%2C3%7D%2F%5B0-9%5D%2B%24&text=172.33.0.0%2F16>)

Example:

```json
"172.33.0.0/16"
```

#### ipv4_address

Specify a static IP address for containers for this service when joining the network. Go to the
[docker-compose file ipv4_address-ipv6_address reference](https://docs.docker.com/compose/compose-file/#ipv4_address-ipv6_address)
for valid values.

- is optional
- type: `string`

All instances must conform to this regular expression

```regex
^(?:[0-9]{1,3}.){3}[0-9]{1,3}$
```

- test example:
  [172.33.1.4](<https://regexr.com/?expression=%5E(%3F%3A%5B0-9%5D%7B1%2C3%7D.)%7B3%7D%5B0-9%5D%7B1%2C3%7D%24&text=172.33.1.4>)

Example:

```json
"172.33.1.4"
```

#### network_mode

Connect this DAppNode Package to a specific network. See
https://docs.docker.com/engine/reference/run/#network-settings.

- is optional
- type: `string`
- minimum length: 1 characters

Examples:

```json
"bridge"
```

```json
"host"
```

```json
"none"
```

#### command

Override the default command. Go to the
[docker-compose file command reference](https://docs.docker.com/compose/compose-file/#command) for valid values.

- is optional
- type: `string`
- minimum length: 1 characters

Example:

```json
"bundle exec thin -p 3000"
```

#### labels

Labels to be added to the DAppNode Package's docker container.

- is optional
- type: Array type: `string[]`

All items must be of the type: `string`

- minimum length: 1 characters

Use reverse-DNS notation (`eth.dappnode.dnp.my-dnp.developer`) to prevent label conflicts. Go to the
[docker-compose file labels reference](https://docs.docker.com/compose/compose-file/#labels-2) for valid values.

Example:

```json
["eth.dappnode.dnp.my-dnp.developer=Awesome_Name"]
```

### chain

Indicate that this DAppNode Package is a blockchain node so the admin UI shows its syncing status

- is optional
- type: `string`

The value of this property **must** be equal to one of the known values below.

| Value      | Description                                                                                                   |
| ---------- | ------------------------------------------------------------------------------------------------------------- |
| `ethereum` | Must have an Ethereum JSON RPC exposed internally at port 8545                                                |
| `bitcoin`  | Must have a standard Bitcoin JSON API exposed at the default port (8332). Uses the NPM package `bitcoin-core` |
| `monero`   | Must have a Monero API exposed internally at port 18081. Uses the NPM package `monero-rpc`                    |

Examples:

```json
"ethereum"
```

```json
"bitcoin"
```

```json
"monero"
```

### dependencies

DAppNode Package dependencies. Must be an object where the keys are the DAppNode Package's ENS. The values must be a
semantic range, i.e. `'0.2.0'`, `'^0.2.1'`, `'*'`, `'latest'`,
`'/ipfs/QmWwMb3XhuCH6JnCF6m6EQzA4mW9pHHtg7rqAfhDr2ofi8'`.

- is optional
- type: `object` with the following properties:

| Property | Type | Required |
| -------- | ---- | -------- |


Examples:

```json
{
  "bitcoin.dnp.dappnode.eth": "^0.1.2",
  "swarm.dnp.dappnode.eth": "latest"
}
```

```json
{
  "only-for-dev-1.dappnode.eth": "/ipfs/QmYjtig7VJQ6XsnUjqqJvj7QaMcCAwtrgNdahSiFofrE7o",
  "only-for-dev-2.dappnode.eth": "/ipfs/zdj7WWeQ43G6JJvLWQWZpyHuAMq6uYWRjkBXFad11vE2LHhQ7"
}
```

### requirements

Specify requirements to be met before allowing users to install this DAppNode Package.

- is optional
- type: `object` with the following properties:

| Property                 | Type   | Required |
| ------------------------ | ------ | -------- |
| `minimumDappnodeVersion` | string | Optional |

#### minimumDappnodeVersion

Minimum DAppNode version that includes all the features necessary to run this DAppNode Package.

- is optional
- type: `string`

All instances must conform to this regular expression

```regex
^((([0-9]+).([0-9]+).([0-9]+)))$
```

- test example:
  [0.2.0](<https://regexr.com/?expression=%5E(((%5B0-9%5D%2B).(%5B0-9%5D%2B).(%5B0-9%5D%2B)))%24&text=0.2.0>)

Example:

```json
"0.2.0"
```

### backup

Allows users to download and restore a backup of key files of this package. If this property is non-empty array, a new
view will be available in the admin UI for this DAppNode Package. The files or directories specified in the array will
be bundled in a tarball. As long as the name properties stay the same, their associated paths can change in future
versions. Then, when restoring an old backup, the new paths will be associated to files stored under the same name
keys. **Note:** it is recommended to only backup lightweight files such as configs, keys or passwords.

- is optional
- type: Array type: `object[]`

All items must be of the type: `object` with the following properties:

| Property | Type   | Required     |
| -------- | ------ | ------------ |
| `name`   | string | **Required** |
| `path`   | string | **Required** |

#### name

A key identifier of this file or directory. Its purpose is to allow the path to change in the future.

- is **required**
- type: `string`
- minimum length: 1 characters

Examples:

```json
"keystore"
```

```json
"config"
```

```json
"keys"
```

#### path

Path to the file or directory to backup. It **MUST** be an absolute path (do not use the `~` character) for the backup
tool to work correctly.

- is **required**
- type: `string`
- minimum length: 1 characters

Examples:

```json
"/root/.raiden/secret/keystore"
```

```json
"/usr/src/app/config.json"
```

### changelog

Description of relevant changes of this specific version. Supports markdown and links.

- is optional
- type: `string`

Example:

```json
"Brief summary of the most relevant changes that the user must known before installing"
```

### warnings

Very relevant information that MUST be shown to the user BEFORE executing a specific action in the DAppNode Package's
lifecycle.

- is optional
- type: `object` with the following properties:

| Property    | Type   | Required |
| ----------- | ------ | -------- |
| `onInstall` | string | Optional |
| `onUpdate`  | string | Optional |
| `onReset`   | string | Optional |
| `onRemove`  | string | Optional |

#### onInstall

Will be shown before installing the DAppNode Package.

- is optional
- type: `string`

Example:

```json
"You must set the PASSWORD ENV before installing the DAppNode Package in order for the setup to work correctly."
```

#### onUpdate

Will be shown before updating the DAppNode Package, not in the first installation.

- is optional
- type: `string`

Example:

```json
"Your VPN connection will be lost when the VPN finalizes updating. Leave 1-2 minutes after executing the update and then reconnect and refresh this site."
```

#### onReset

Will be shown before resetting the DAppNode Package.

- is optional
- type: `string`

Example:

```json
"You MUST properly close your open channels before resetting this DAppNode Package or you may lose your funds."
```

#### onRemove

Will be shown before removing the DAppNode Package.

- is optional
- type: `string`

Example:

```json
"You MUST properly close your open channels before removing this DAppNode Package or you may lose your funds."
```

### updateAlerts

Alerts targeted to a specific update jump.

- is optional
- type: Array type: `object[]`

All items must be of the type: `object` with the following properties:

| Property  | Type   | Required     | Default |
| --------- | ------ | ------------ | ------- |
| `from`    | string | **Required** |         |
| `to`      | string | Optional     | `"*"`   |
| `message` | string | **Required** |         |

#### from

Semver range, show this message when a user updates this DAppNode Package FROM a version that satisfies this range.

- is **required**
- type: `string`
- minimum length: 1 characters

Examples:

```json
"0.1.x"
```

```json
"^0.2.0"
```

#### to

Semver range, show this message when a user updates this DAppNode Package TO a version that satisfies this range.

- is optional
- default: `"*"`
- type: `string`
- minimum length: 1 characters

Examples:

```json
"0.1.x"
```

```json
"^0.2.0"
```

```json
"*"
```

#### message

Alert message to be shown when `from` and `to` ranges are satisfied.

- is **required**
- type: `string`
- minimum length: 1 characters

Example:

```json
"Major update to OpenVPN: This update breaks compatibility with the last VPN version. Please read the migration guide: https://migration020.dappnode.io"
```

Specific update jump alert.

### disclaimer

Disclaimer to be shown to the user on install, and will require the user to approve it.

- is optional
- type: `object` with the following properties:

| Property  | Type   | Required     |
| --------- | ------ | ------------ |
| `message` | string | **Required** |

#### message

The message shown in the pop-up. Markdown and links are allowed.

- is **required**
- type: `string`

Example:

```json
"This software is experimental, presented “as is” and inherently carries risks."
```

### style

Graphic information to control the appearance of DAppNode Package related items in the admin UI.

- is optional
- type: `object` with the following properties:

| Property               | Type   | Required |
| ---------------------- | ------ | -------- |
| `featuredBackground`   | string | Optional |
| `featuredColor`        | string | Optional |
| `featuredAvatarFilter` | string | Optional |

#### featuredBackground

CSS background property to be applied to the DAppNode Package card in the DAppNode Package store if featured. Go to the
[Mozilla CSS background reference](https://developer.mozilla.org/docs/Web/CSS/background) for valid values.

- is optional
- type: `string`

Examples:

```json
"linear-gradient(to right, #323131, #395353)"
```

```json
"black"
```

#### featuredColor

CSS color property to be applied to the DAppNode Package card in the DAppNode Package store if featured. Go to the
[Mozilla CSS color reference](https://developer.mozilla.org/docs/Web/CSS/color) for valid values.

- is optional
- type: `string`

Examples:

```json
"white"
```

```json
"#fff"
```

#### featuredAvatarFilter

CSS filter property to be applied to `<img>` component (avatar) of the DAppNode Package card in the DAppNode Package
store if featured. Go to the [Mozilla CSS filter reference](https://developer.mozilla.org/docs/Web/CSS/filter) for
valid values.

- is optional
- type: `string`

Examples:

```json
"invert(1)"
```

```json
"grayscale(80%);"
```

### author

Main author of this DAppNode Package. Must follow the structure `${name} <${email}> (${githubUserLink})`.

- is optional
- type: `string`
- minimum length: 1 characters

Example:

```json
"DAppNode Association <admin@dappnode.io> (https://github.com/dappnode)"
```

### contributors

Contributing authors of this DAppNode Package.

- is optional
- type: Array type: `string[]`

All items must be of the type: `string`

- minimum length: 1 characters

Contributor author. Must follow the structure `${name} <${email}> (${githubUserLink})`.

Example:

```json
[
  "Michael First <developerHanlder@project.io> (https://github.com/developerHanlder)",
  "Michael Second <developerHanlder@project.io> (https://github.com/developerHanlder)"
]
```

### categories

Categories to organize and group DAppNode Packages in the DAppNode Package store. Only one or two categories maximum
should be specified per package. If you feel that any of the current categories represent the nature of your package,
please open an issue requesting a new category https://github.com/dappnode/dnp-manifest/issues/new

- is optional
- type: Array type: `enum[]`

All items must be of the type: `string`

The value of this property **must** be equal to one of the known values below.

| Value                | Description                                                                                           |
| -------------------- | ----------------------------------------------------------------------------------------------------- |
| `Developer tools`    | Packages that their main purpose is to aid in developing, i.e. testnets                               |
| `Blockchain`         | Blockchain nodes, i.e. Bitcoin, Monero                                                                |
| `Economic incentive` | Packages that offer an economic incentive or reward to the admin that runs it, i.e. Lightning Network |
| `Payment channels`   | Packages whose main purpose is to manage or control payment channels, i.e. Raiden                     |
| `Storage`            | Decentralized storage solutions, i.e. Swarm                                                           |
| `Communications`     | Decentralized networking or chat solutions, i.e. Swarm                                                |

Example:

```json
["Developer tools", "Blockchain"]
```

### keywords

Keywords, relevant and descriptive of this DAppNode Package. They will be shown in the admin UI DAppNode Package store.

- is optional
- type: Array type: `string[]`

All items must be of the type: `string`

- minimum length: 1 characters

Single keyword.

### links

Various links (URLs) useful for the user of this package. All links will be shown in the dedicated view of this package
in the admin UI. The predefined links properties below will be shown with concept related icons. Other links will be
shown as well but with their plain name instead of an icon.

- is optional
- type: `object` with the following properties:

| Property   | Type   | Required |
| ---------- | ------ | -------- |
| `homepage` | string | Optional |
| `ui`       | string | Optional |
| `api`      | string | Optional |
| `gateway`  | string | Optional |

#### homepage

Url to an informative homepage for this DAppNode Package. Should be a README or landing website.

- is optional
- type: `string`

Example:

```json
"https://github.com/dappnode/DNP_IPFS#readme"
```

#### ui

Url to this DNP's DAppNode local UI.

- is optional
- type: `string`

Example:

```json
"http://ipfs.dappnode:5001/webui"
```

#### api

Url to this DNP's DAppNode local HTTP API endpoint.

- is optional
- type: `string`

Example:

```json
"http://ipfs.dappnode:5001/api/v0"
```

#### gateway

Url to this DNP's DAppNode local gateway.

- is optional
- type: `string`

Example:

```json
"http://ipfs.dappnode:8080/ipfs"
```

### repository

DAppNode Package's repository. Must be a publicly available url that can be handed directly to a VCS program.

- is optional
- type: `object` with the following properties:

| Property    | Type   | Required     |
| ----------- | ------ | ------------ |
| `type`      | string | **Required** |
| `url`       | string | **Required** |
| `directory` | string | Optional     |

#### type

- is **required**
- type: `string`
- minimum length: 1 characters

Example:

```json
"git"
```

#### url

- is **required**
- type: `string`
- minimum length: 1 characters

Example:

```json
"https://github.com/dappnode/DNP_IPFS.git"
```

#### directory

- is optional
- type: `string`

Example:

```json
"packages/react-dom"
```

### bugs

Url to your project’s issue tracker.

- is optional
- type: `object` with the following properties:

| Property | Type   | Required     |
| -------- | ------ | ------------ |
| `url`    | string | **Required** |

#### url

- is **required**
- type: `string`

Example:

```json
"https://github.com/dappnode/DNP_IPFS/issues"
```

### license

DAppNode Package's License.

- is **required**
- type: `string`
- minimum length: 1 characters

Example:

```json
"GPL-3.0"
```
