# DAppNode package (DNP) manifest

The DAppNode package (DNP) defines all the necessary information for a DAppNode to understand this DNP:

- IPFS of BZZ hashes to download the DNP docker image
- Docker related data to configure and run its container
- Metadata to be control how the DNP shown in the Admin UI

## Example

```json
{
  "name": "ipfs.dnp.dappnode.eth",
  "version": "0.2.0",
  "description": "Your local IPFS node. Dappnode package responsible for providing the VPN (OpenVPN) connection",
  "avatar": "/ipfs/QmWwMb3XhuCH6JnCF6m6EQzA4mW9pHHtg7rqAfhDr2ofi8",
  "type": "service",
  "chain": "ethereum",
  "image": {
    "path": "ipfs.dnp.dappnode.eth_0.2.0.tar.xz",
    "hash": "/ipfs/QmWwMb3XhuCH6JnCF6m6EQzA4mW9pHHtg7rqAfhDr2ofi8",
    "size": 25738523,
    "volumes": [
      "/var/run/docker.sock:/var/run/docker.sock",
      "/usr/src/dappnode/config:/usr/src/app/config:ro",
      "ipfsdnpdappnodeeth_data:/data/ipfs"
    ],
    "external_vol": ["dncore_ethchaindnpdappnodeeth_data:/app/.ethchain:ro"],
    "ports": ["1194:1194/udp", "8090:3000/udp"],
    "environment": ["RACK_ENV=development", "SHOW=true", "EXTRA_OPTS=", "EMPTY_ENV"],
    "labels": ["eth.dappnode.dnp.my-dnp.developer=Awesome_Name"],
    "privileged": true,
    "restart": "always",
    "subnet": "172.33.0.0/16",
    "ipv4_address": "172.33.1.4",
    "cap_add": ["NET_ADMIN", "SYS_ADMIN"],
    "cap_drop": ["NET_ADMIN", "SYS_ADMIN"],
    "network_mode": "bridge",
    "command": "bundle exec thin -p 3000"
  },
  "requirements": {
    "minimumDappnodeVersion": "0.2.0"
  },
  "dependencies": {
    "bitcoin.dnp.dappnode.eth": "^0.1.2",
    "swarm.dnp.dappnode.eth": "latest"
  },
  "changelog": "Brief summary of the most relevant changes that the user must known before installing",
  "warnings": {
    "onInstall": "You must set the PASSWORD ENV before installing the DNP in order for the setup to work correctly.",
    "onUpdate": "Your VPN connection will be lost when the VPN finalizes updating. Leave 1-2 minutes after executing the update and then reconnect and refresh this site.",
    "onReset": "You MUST properly close your open channels before reseting this DNP or you may lose your funds.",
    "onRemove": "You MUST properly close your open channels before stopping this DNP or you may lose your funds."
  },
  "updateAlerts": [
    {
      "from": "0.1.x",
      "to": "0.1.x",
      "message": "Major update to OpenVPN: This update breaks compatibility with the last VPN version. Please read the migration guide at: https://migration020.dappnode.io"
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

| Property                      | Type       | Required     |
| ----------------------------- | ---------- | ------------ |
| [name](#name)                 | `string`   | **Required** |
| [version](#version)           | `string`   | **Required** |
| [description](#description)   | `string`   | **Required** |
| [avatar](#avatar)             | `string`   | **Required** |
| [type](#type)                 | `enum`     | **Required** |
| [chain](#chain)               | `enum`     | Optional     |
| [image](#image)               | `object`   | **Required** |
| [requirements](#requirements) | `object`   | Optional     |
| [dependencies](#dependencies) | `object`   | Optional     |
| [changelog](#changelog)       | `string`   | Optional     |
| [warnings](#warnings)         | `object`   | Optional     |
| [updateAlerts](#updatealerts) | `object[]` | Optional     |
| [disclaimer](#disclaimer)     | `object`   | Optional     |
| [style](#style)               | `object`   | Optional     |
| [author](#author)             | `string`   | Optional     |
| [contributors](#contributors) | `string[]` | Optional     |
| [keywords](#keywords)         | `string[]` | Optional     |
| [links](#links)               | `object`   | Optional     |
| [repository](#repository)     | `object`   | Optional     |
| [bugs](#bugs)                 | `object`   | Optional     |
| [license](#license)           | `string`   | **Required** |

### name

DNP ENS name

- is **required**
- type: `string`

Example:

```json
"ipfs.dnp.dappnode.eth"
```

### version

DNP semantic version (semver)

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

### description

DNP description. Should start with a 4-5 words sentence and then be as long as necessary. Markdown and links are
allowed

- is **required**
- type: `string`

Example:

```json
"Your local IPFS node. Dappnode package responsible for providing the VPN (OpenVPN) connection"
```

### avatar

IPFS / BZZ hash of the Avatar of the DNP. Must be 300x300px, transparent PNG

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

Type of the DNP. Must be one these types

- is **required**
- default: `"service"`
- type: `string`

The value of this property **must** be equal to one of the known values below.

| Value     | Description                                                           |
| --------- | --------------------------------------------------------------------- |
| `service` | Can have ENVs a depend on library DNPs.                               |
| `library` | Should not have ENVs and cannot depend on service DNPs.               |
| `dncore`  | DNPs that are part of the DAppNode core and have special permissions. |

Examples:

```json
"service"
```

```json
"dncore"
```

### chain

Indicate that this DNP is a blockchain node so the Admin UI shows its syncing status

- is optional
- type: `string`

The value of this property **must** be equal to one of the known values below.

| Value      | Description                                                                                                       |
| ---------- | ----------------------------------------------------------------------------------------------------------------- |
| `ethereum` | DNP must have an Ethereum JSON RPC exposed internally at port 8545                                                |
| `bitcoin`  | DNP must have a standard Bitcoin JSON API exposed at the default port (8332). Uses the npm package `bitcoin-core` |

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

### image

The DNP Image Schema

DNP image upload information, and its docker related properties

- is **required**
- type: `object` with following properties:

| Property       | Type    | Required     | Default    |
| -------------- | ------- | ------------ | ---------- |
| `path`         | string  | Optional     |            |
| `hash`         | string  | **Required** |            |
| `size`         | integer | **Required** |            |
| `volumes`      | array   | Optional     |            |
| `external_vol` | array   | Optional     |            |
| `ports`        | array   | Optional     |            |
| `environment`  | array   | Optional     |            |
| `labels`       | array   | Optional     |            |
| `privileged`   | boolean | Optional     |            |
| `restart`      | string  | Optional     | `"always"` |
| `subnet`       | string  | Optional     |            |
| `ipv4_address` | string  | Optional     |            |
| `cap_add`      | array   | Optional     |            |
| `cap_drop`     | array   | Optional     |            |
| `network_mode` | string  | Optional     |            |
| `command`      | string  | Optional     |            |

#### path

Filename of the DNP image

- is optional
- type: `string`
- minimum length: 1 characters

Example:

```json
"ipfs.dnp.dappnode.eth_0.2.0.tar.xz"
```

#### hash

IPFS / BZZ hash of the DNP image

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

Size of the DNP image in bytes

- is **required**
- type: `integer`
- minimum value: `1`

Example:

```
25738523
```

#### volumes

DNP volume mappings

- is optional
- type: Array type: `string[]`

All items must be of the type: `string`

All instances must conform to this regular expression (test examples
[here](https://regexr.com/?expression=%5E%5B%5E%5Cs%5D%2B%3A%5B%5E%5Cs%5D%2B%24)):

```regex
^[^\s]+:[^\s]+$
```

Docker volumes short syntax HOST:CONTAINER:ro mapping. See https://docs.docker.com/compose/compose-file/#volumes

Example:

```json
[
  "/var/run/docker.sock:/var/run/docker.sock",
  "/usr/src/dappnode/config:/usr/src/app/config:ro",
  "ipfsdnpdappnodeeth_data:/data/ipfs"
]
```

#### external_vol

DNP external volume mappings, volumes have been created outside of this DNP's compose

- is optional
- type: Array type: `string[]`

All items must be of the type: `string`

All instances must conform to this regular expression (test examples
[here](https://regexr.com/?expression=%5E%5B%5E%5Cs%5D%2B%3A%5B%5E%5Cs%5D%2B%24)):

```regex
^[^\s]+:[^\s]+$
```

Docker volumes short syntax HOST:CONTAINER:ro mapping. See https://docs.docker.com/compose/compose-file/#external

Examples:

```json
["dncore_ethchaindnpdappnodeeth_data:/app/.ethchain:ro"]
```

```json
["nginxproxydnpdappnodeeth_vhost.d:/etc/nginx/vhost.d", "nginxproxydnpdappnodeeth_html:/usr/share/nginx/html"]
```

#### ports

DNP port mappings

- is optional
- type: Array type: `string[]`

All items must be of the type: `string`

- minimum length: 1 characters

Docker ports short syntax HOST:CONTAINER/protocol. See https://docs.docker.com/compose/compose-file/#ports

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

DNP environment variables. You must declare all ENVs even if they are empty.

- is optional
- type: Array type: `string[]`

All items must be of the type: `string`

- minimum length: 1 characters

Docker environment variables in array form. See https://docs.docker.com/compose/compose-file/#environment

Example:

```json
["RACK_ENV=development", "SHOW=true", "EXTRA_OPTS=", "EMPTY_ENV"]
```

#### labels

Labels to be added to the DNP's docker container.

- is optional
- type: Array type: `string[]`

All items must be of the type: `string`

- minimum length: 1 characters

Use reverse-DNS notation to prevent label conflicts. See https://docs.docker.com/compose/compose-file/#labels-2

Example:

```json
["eth.dappnode.dnp.my-dnp.developer=Awesome_Name"]
```

#### privileged

Grant the DNP (almost) all the capabilities of their host machine, regarding kernel features and device access. See
https://blog.docker.com/2013/09/docker-can-now-run-within-docker/

- is optional
- type: `boolean`

Example:

```
true
```

#### restart

Docker restart policy, 'always' is highly recommended. See https://docs.docker.com/compose/compose-file/#restart

- is optional
- default: `"always"`
- type: `string`

The value of this property **must** be equal to one of the known values below.

| Value            | Description |
| ---------------- | ----------- |
| `always`         |             |
| `no`             |             |
| `on-failure`     |             |
| `unless-stopped` |             |

Example:

```json
"always"
```

#### subnet

Specify the subnet. See https://docs.docker.com/compose/compose-file/#ipv4_address-ipv6_address

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

Specify a static IP address for containers for this service when joining the network. See
https://docs.docker.com/compose/compose-file/#ipv4_address-ipv6_address

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

#### cap_add

Add container capabilities. See https://docs.docker.com/compose/compose-file/#cap_add-cap_drop

- is optional
- type: Array type: `string[]`

All items must be of the type: `string`

- minimum length: 1 characters

A valid docker capability key. See
https://docs.docker.com/engine/reference/run/#runtime-privilege-and-linux-capabilities

Examples:

```json
["NET_ADMIN", "SYS_ADMIN"]
```

```json
["ALL"]
```

#### cap_drop

Drop container capabilities. See https://docs.docker.com/compose/compose-file/#cap_add-cap_drop

- is optional
- type: Array type: `string[]`

All items must be of the type: `string`

- minimum length: 1 characters

A valid docker capability key. See
https://docs.docker.com/engine/reference/run/#runtime-privilege-and-linux-capabilities

Example:

```json
["NET_ADMIN", "SYS_ADMIN"]
```

#### network_mode

Connect this DNP to a specific network. See https://docs.docker.com/engine/reference/run/#network-settings

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

Override the default command. See https://docs.docker.com/compose/compose-file/#command

- is optional
- type: `string`
- minimum length: 1 characters

Example:

```json
"bundle exec thin -p 3000"
```

### requirements

Specify requirements to be met before allowing users to install this DNP

- is optional
- type: `object` with following properties:

| Property                 | Type   | Required |
| ------------------------ | ------ | -------- |
| `minimumDappnodeVersion` | string | Optional |

#### minimumDappnodeVersion

Minimum DAppNode version that includes all the features necessary to run this DNP

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

### dependencies

DNP dependencies. Must be an object where the keys are the DNP's ENS. The values must be a semantic range ('0.2.0',
'^0.2.1', '\*', 'latest', '/ipfs/QmWwMb3XhuCH6JnCF6m6EQzA4mW9pHHtg7rqAfhDr2ofi8')

- is optional
- type: `object` with following properties:

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

### changelog

Description of relevant changes of this specific version. Supports markdown and links

- is optional
- type: `string`

Example:

```json
"Brief summary of the most relevant changes that the user must known before installing"
```

### warnings

The DNP Image Schema

Very relevant information that MUST be shown to the user BEFORE executing a specific action in the DNP's lifecycle.

- is optional
- type: `object` with following properties:

| Property    | Type   | Required |
| ----------- | ------ | -------- |
| `onInstall` | string | Optional |
| `onUpdate`  | string | Optional |
| `onReset`   | string | Optional |
| `onRemove`  | string | Optional |

#### onInstall

Will be shown before installing the DNP

- is optional
- type: `string`

Example:

```json
"You must set the PASSWORD ENV before installing the DNP in order for the setup to work correctly."
```

#### onUpdate

Will be shown before updating the DNP, not in the first installation

- is optional
- type: `string`

Example:

```json
"Your VPN connection will be lost when the VPN finalizes updating. Leave 1-2 minutes after executing the update and then reconnect and refresh this site."
```

#### onReset

Will be shown before reseting the DNP

- is optional
- type: `string`

Example:

```json
"You MUST properly close your open channels before reseting this DNP or you may lose your funds."
```

#### onRemove

Filename of the DNP image

- is optional
- type: `string`

Example:

```json
"You MUST properly close your open channels before stopping this DNP or you may lose your funds."
```

### updateAlerts

Alerts targeted to a specific update jump.

- is optional
- type: Array type: `object[]`

All items must be of the type: `object` with following properties:

| Property  | Type   | Required     | Default |
| --------- | ------ | ------------ | ------- |
| `from`    | string | **Required** |         |
| `to`      | string | Optional     | `"*"`   |
| `message` | string | **Required** |         |

#### from

Semver range, show this message when a user updates this DNP FROM a version that satisfies this range.

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

Semver range, show this message when a user updates this DNP TO a version that satisfies this range.

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

Alert message to be shown when the from and to ranges are satisfied.

- is **required**
- type: `string`
- minimum length: 1 characters

Example:

```json
"Major update to OpenVPN: This update breaks compatibility with the last VPN version. Please read the migration guide at: https://migration020.dappnode.io"
```

Specific update jump alert

### disclaimer

Disclaimer to be shown to the user on install, and will require the user to approve it

- is optional
- type: `object` with following properties:

| Property  | Type   | Required     |
| --------- | ------ | ------------ |
| `message` | string | **Required** |

#### message

Message shown in the pop-up. Markdown and links are allowed

- is **required**
- type: `string`

Example:

```json
"This software is experimental, presented “as is” and inherently carries risks."
```

### style

Graphic information to control the appearance of DNP related items in the ADMIN UI

- is optional
- type: `object` with following properties:

| Property               | Type   | Required |
| ---------------------- | ------ | -------- |
| `featuredBackground`   | string | Optional |
| `featuredColor`        | string | Optional |
| `featuredAvatarFilter` | string | Optional |

#### featuredBackground

CSS background property to be applied to the DNP card in the DNP store if featured. See
https://developer.mozilla.org/docs/Web/CSS/background for valid values

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

CSS color property to be applied to the DNP card in the DNP store if featured. See
https://developer.mozilla.org/docs/Web/CSS/color for valid values

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

CSS filter property to be applied to `<img>` component (avatar) of the DNP card in the DNP store if featured. See
https://developer.mozilla.org/docs/Web/CSS/filter for valid values

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

Main author of this DNP. Must follow the structure `${name} <${email}> (${githubUserLink})`

- is optional
- type: `string`
- minimum length: 1 characters

Example:

```json
"DAppNode Association <admin@dappnode.io> (https://github.com/dappnode)"
```

### contributors

Contributing authors of this DNP

- is optional
- type: Array type: `string[]`

All items must be of the type: `string`

- minimum length: 1 characters

Contributor author. Must follow the structure `${name} <${email}> (${githubUserLink})`

Example:

```json
[
  "Michael First <developerHanlder@project.io> (https://github.com/developerHanlder)",
  "Michael Second <developerHanlder@project.io> (https://github.com/developerHanlder)"
]
```

### keywords

Keywords, relevant and descriptive of this DNP. They will be shown in the ADMIN's UI package store.

- is optional
- type: Array type: `string[]`

All items must be of the type: `string`

- minimum length: 1 characters

Single keyword

### links

Single keyword with no spaces

- is optional
- type: `object` with following properties:

| Property   | Type   | Required |
| ---------- | ------ | -------- |
| `homepage` | string | Optional |
| `ui`       | string | Optional |
| `api`      | string | Optional |
| `gateway`  | string | Optional |

#### homepage

Url to an informative homepage for this DNP. Should be a README or landing website.

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

DNP's repository. Must be a publicly available url that can be handed directly to a VCS program

- is optional
- type: `object` with following properties:

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
- type: `object` with following properties:

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

DNP's License

- is **required**
- type: `string`
- minimum length: 1 characters

Example:

```json
"GPL-3.0"
```
