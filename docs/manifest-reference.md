# DAppNode package (DNP) manifest reference

```
https://github.com/dappnode/DAppNode/raw/schema/manifest.schema.json
```

The DAppNode package (DNP) defines all the necessary information for a DAppNode to understand this DNP:

- IPFS of BZZ hashes to download the DNP docker image
- Docker related data to configure and run its container
- Metadata to be shown in the Admin UI

| Abstract            | Extensible | Status | Identifiable | Custom Properties | Additional Properties | Defined In                                   |
| ------------------- | ---------- | ------ | ------------ | ----------------- | --------------------- | -------------------------------------------- |
| Can be instantiated | No         | Stable | No           | Forbidden         | Permitted             | [manifest.schema.json](manifest.schema.json) |

Manifest full reference example

```json
{
  "name": "ipfs.dnp.dappnode.eth",
  "version": "0.2.0",
  "description": "Dappnode package responsible for providing IPFS connectivity (go-ipfs v0.4.20)",
  "avatar": "/ipfs/QmViXy8BVb8dQ7J9jLK626kcB5Tz2pvvKE43KHo8RNDXxL",
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
    "external_vol": [
      "dncore_ethchaindnpdappnodeeth_data:/app/.ethchain:ro",
      "nginxproxydnpdappnodeeth_vhost.d:/etc/nginx/vhost.d",
      "nginxproxydnpdappnodeeth_html:/usr/share/nginx/html"
    ],
    "ports": ["1194:1194/udp", "8090:3000/udp", "4001/udp", "4001/tcp"],
    "environment": [
      "RACK_ENV=development",
      "SHOW=true",
      "EXTRA_OPTS=",
      "EMPTY_ENV"
    ],
    "labels": ["eth.dappnode.dnp.my-dnp.developer=Awesome_Name"],
    "privileged": true,
    "restart": "always",
    "subnet": "172.33.0.0/16",
    "ipv4_address": "172.33.1.4",
    "cap_add": ["ALL"],
    "cap_drop": ["NET_ADMIN", "SYS_ADMIN"],
    "network_mode": "host",
    "command": "bundle exec thin -p 3000"
  },
  "dependencies": {
    "bitcoin.dnp.dappnode.eth": "^0.1.2",
    "swarm.dnp.dappnode.eth": "latest",
    "dont-use-on-produccion.dappnode.eth": "/ipfs/QmYjtig7VJQ6XsnUjqqJvj7QaMcCAwtrgNdahSiFofrE7o"
  },
  "changelog": "Major update to OpenVPN: This update breaks compatibility with the last VPN version. Please read the migration guide at: https://migration020.dappnode.io",
  "warnings": {
    "onInstall": "You must set the PASSWORD ENV before installing the DNP in order for the setup to work correctly.",
    "onUpdate": "Your VPN connection will be lost when the VPN finalizes updating. Leave 1-2 minutes after executing the update and then reconnect and refresh this site.",
    "onReset": "You MUST properly close your open channels before reseting this DNP or you may lose your funds.",
    "onRemove": "You MUST properly close your open channels before stopping this DNP or you may lose your funds."
  },
  "updateAlerts": [
    {
      "from": "0.1.x",
      "to": "^0.2.0",
      "message": "Major update to OpenVPN: This update breaks compatibility with the last VPN version. Please read the migration guide at: https://migration020.dappnode.io"
    }
  ],
  "author": "DAppNode Association <admin@dappnode.io> (https://github.com/dappnode)",
  "contributors": [
    "Michael First <developerHanlder@project.io> (https://github.com/developerHanlder)",
    "Michael Second <developerHanlder@project.io> (https://github.com/developerHanlder)"
  ],
  "keywords": ["DAppNodeCore", "IPFS", "File sharing"],
  "links": {
    "homepage": "https://github.com/dappnode/DNP_IPFS#readme",
    "ui": "http://ipfs.dappnode:5001/webui",
    "api": "http://ipfs.dappnode:5001/api/v0",
    "gateway": "http://ipfs.dappnode:8080/ipfs"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/dappnode/DNP_IPFS.git"
  },
  "bugs": {
    "url": "https://github.com/dappnode/DNP_IPFS/issues"
  },
  "license": "GPL-3.0"
}
```

Manifest object first level properties

| Property                      | Type       | Required     |
| ----------------------------- | ---------- | ------------ |
| [author](#author)             | `string`   | Optional     |
| [avatar](#avatar)             | `string`   | **Required** |
| [bugs](#bugs)                 | `object`   | Optional     |
| [chain](#chain)               | `string`   | Optional     |
| [changelog](#changelog)       | `string`   | Optional     |
| [contributors](#contributors) | `string[]` | Optional     |
| [dependencies](#dependencies) | `object`   | Optional     |
| [description](#description)   | `string`   | **Required** |
| [image](#image)               | `object`   | **Required** |
| [keywords](#keywords)         | `string[]` | Optional     |
| [license](#license)           | `string`   | **Required** |
| [links](#links)               | `object`   | Optional     |
| [name](#name)                 | `string`   | **Required** |
| [repository](#repository)     | `object`   | Optional     |
| [type](#type)                 | `string`   | **Required** |
| [updateAlerts](#updatealerts) | `object[]` | Optional     |
| [version](#version)           | `string`   | **Required** |
| [warnings](#warnings)         | `object`   | Optional     |

## author

Main author of this DNP. Must follow the structure `${name} <${email}> (${githubUserLink})`

`author`

- is optional
- type: `string`
- defined in this schema

### author type

`string`

All instances must conform to this regular expression

```regex
^(.*)$
```

- test example:
  [DAppNode Association &lt;admin@dappnode.io&gt; (https://github.com/dappnode)](<https://regexr.com/?expression=%5E(.*)%24&text=DAppNode%20Association%20%3Cadmin%40dappnode.io%3E%20(https%3A%2F%2Fgithub.com%2Fdappnode)>)

### author example

```json
"DAppNode Association <admin@dappnode.io> (https://github.com/dappnode)"
```

## avatar

IPFS / BZZ hash of the Avatar of the DNP. Must be 300x300px, transparent PNG

`avatar`

- is **required**
- type: `string`
- defined in this schema

### avatar type

`string`

All instances must conform to this regular expression

```regex
^/(ipfs|bzz)/w+$
```

- test example:
  [/ipfs/QmWwMb3XhuCH6JnCF6m6EQzA4mW9pHHtg7rqAfhDr2ofi8](<https://regexr.com/?expression=%5E%2F(ipfs%7Cbzz)%2Fw%2B%24&text=%2Fipfs%2FQmWwMb3XhuCH6JnCF6m6EQzA4mW9pHHtg7rqAfhDr2ofi8>)

### avatar example

```json
"/ipfs/QmWwMb3XhuCH6JnCF6m6EQzA4mW9pHHtg7rqAfhDr2ofi8"
```

## bugs

Url to your project’s issue tracker.

`bugs`

- is optional
- type: `object`
- defined in this schema

### bugs type

`object` with following properties:

| Property | Type   | Required     |
| -------- | ------ | ------------ |
| `url`    | string | **Required** |

#### url

`url`

- is **required**
- type: `string`

##### url type

`string`

##### url example

```json
"https://github.com/dappnode/DNP_IPFS/issues"
```

## chain

Indicate that this DNP is a blockchain node so the Admin UI shows its syncing status

`chain`

- is optional
- type: `string`
- defined in this schema

### chain type

`string`

All instances must conform to this regular expression

```regex
^(ethereum|bitcoin|monero)$
```

- test example: [ethereum](<https://regexr.com/?expression=%5E(ethereum%7Cbitcoin%7Cmonero)%24&text=ethereum>)
- test example: [bitcoin](<https://regexr.com/?expression=%5E(ethereum%7Cbitcoin%7Cmonero)%24&text=bitcoin>)
- test example: [monero](<https://regexr.com/?expression=%5E(ethereum%7Cbitcoin%7Cmonero)%24&text=monero>)

### chain Examples

```json
"ethereum"
```

```json
"bitcoin"
```

```json
"monero"
```

## changelog

Description of relevant changes of this specific version. Supports markdown and links

`changelog`

- is optional
- type: `string`
- defined in this schema

### changelog type

`string`

### changelog example

```json
"Major update to OpenVPN: This update breaks compatibility with the last VPN version. Please read the migration guide at: https://migration020.dappnode.io"
```

## contributors

Contributing authors of this DNP

`contributors`

- is optional
- type: `string[]`
- defined in this schema

### contributors type

Array type: `string[]`

All items must be of the type: `string`

All instances must conform to this regular expression (test examples
[here](<https://regexr.com/?expression=%5E(.*)%24>)):

```regex
^(.*)$
```

Contributor author. Must follow the structure `${name} <${email}> (${githubUserLink})`

### contributors example

```json
[
  "Michael First <developerHanlder@project.io> (https://github.com/developerHanlder)",
  "Michael Second <developerHanlder@project.io> (https://github.com/developerHanlder)"
]
```

## dependencies

DNP dependencies. Must be an object where the keys are the DNP's ENS. The values must be a semantic range ('0.2.0',
'^0.2.1', '\*', 'latest', '/ipfs/QmWwMb3XhuCH6JnCF6m6EQzA4mW9pHHtg7rqAfhDr2ofi8')

`dependencies`

- is optional
- type: `object`
- defined in this schema

### dependencies type

`object` with following properties:

| Property | Type | Required |
| -------- | ---- | -------- |


### dependencies Examples

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

## description

DNP description. Should start with a 4-5 words sentence and then be as long as necessary. Markdown and links are
allowed

`description`

- is **required**
- type: `string`
- defined in this schema

### description type

`string`

### description example

```json
"Your local IPFS node. Dappnode package responsible for providing the VPN (OpenVPN) connection"
```

## image

### The DNP Image Schema

DNP image upload information, and its docker related properties

`image`

- is **required**
- type: `object`
- defined in this schema

### image type

`object` with following properties:

| Property       | Type    | Required     |
| -------------- | ------- | ------------ |
| `cap_add`      | array   | Optional     |
| `cap_drop`     | array   | Optional     |
| `command`      | string  | Optional     |
| `environment`  | array   | Optional     |
| `external_vol` | array   | Optional     |
| `hash`         | string  | **Required** |
| `ipv4_address` | string  | Optional     |
| `labels`       | array   | Optional     |
| `network_mode` | string  | Optional     |
| `path`         | string  | Optional     |
| `ports`        | array   | Optional     |
| `privileged`   | boolean | Optional     |
| `restart`      | string  | Optional     |
| `size`         | number  | **Required** |
| `subnet`       | string  | Optional     |
| `volumes`      | array   | Optional     |

#### cap_add

Add container capabilities. See https://docs.docker.com/compose/compose-file/#cap_add-cap_drop

`cap_add`

- is optional
- type: `string[]`

##### cap_add type

Array type: `string[]`

All items must be of the type: `string`

A valid docker capability key. See
https://docs.docker.com/engine/reference/run/#runtime-privilege-and-linux-capabilities

##### cap_add Examples

```json
["NET_ADMIN", "SYS_ADMIN"]
```

```json
["ALL"]
```

#### cap_drop

Drop container capabilities. See https://docs.docker.com/compose/compose-file/#cap_add-cap_drop

`cap_drop`

- is optional
- type: `string[]`

##### cap_drop type

Array type: `string[]`

All items must be of the type: `string`

A valid docker capability key. See
https://docs.docker.com/engine/reference/run/#runtime-privilege-and-linux-capabilities

##### cap_drop example

```json
["NET_ADMIN", "SYS_ADMIN"]
```

#### command

Override the default command. See https://docs.docker.com/compose/compose-file/#command

`command`

- is optional
- type: `string`

##### command type

`string`

##### command example

```json
"bundle exec thin -p 3000"
```

#### environment

DNP environment variables. You must declare all ENVs even if they are empty.

`environment`

- is optional
- type: `string[]`

##### environment type

Array type: `string[]`

All items must be of the type: `string`

Docker environment variables in array form. See https://docs.docker.com/compose/compose-file/#environment

##### environment example

```json
["RACK_ENV=development", "SHOW=true", "EXTRA_OPTS=", "EMPTY_ENV"]
```

#### external_vol

DNP external volume mappings, volumes have been created outside of this DNP's compose

`external_vol`

- is optional
- type: `string[]`

##### external_vol type

Array type: `string[]`

All items must be of the type: `string`

Docker volumes short syntax HOST:CONTAINER:ro mapping. See https://docs.docker.com/compose/compose-file/#external

##### external_vol Examples

```json
["dncore_ethchaindnpdappnodeeth_data:/app/.ethchain:ro"]
```

```json
[
  "nginxproxydnpdappnodeeth_vhost.d:/etc/nginx/vhost.d",
  "nginxproxydnpdappnodeeth_html:/usr/share/nginx/html"
]
```

#### hash

IPFS / BZZ hash of the DNP image

`hash`

- is **required**
- type: `string`

##### hash type

`string`

All instances must conform to this regular expression

```regex
^/(ipfs|bzz)/w+$
```

- test example:
  [/ipfs/QmWwMb3XhuCH6JnCF6m6EQzA4mW9pHHtg7rqAfhDr2ofi8](<https://regexr.com/?expression=%5E%2F(ipfs%7Cbzz)%2Fw%2B%24&text=%2Fipfs%2FQmWwMb3XhuCH6JnCF6m6EQzA4mW9pHHtg7rqAfhDr2ofi8>)

##### hash example

```json
/ipfs/QmWwMb3XhuCH6JnCF6m6EQzA4mW9pHHtg7rqAfhDr2ofi8
```

#### ipv4_address

Specify a static IP address for containers for this service when joining the network. See
https://docs.docker.com/compose/compose-file/#ipv4_address-ipv6_address

`ipv4_address`

- is optional
- type: `string`

##### ipv4_address type

`string`

All instances must conform to this regular expression

```regex
^(?:[0-9]{1,3}.){3}[0-9]{1,3}$
```

- test example:
  [172.33.1.4](<https://regexr.com/?expression=%5E(%3F%3A%5B0-9%5D%7B1%2C3%7D.)%7B3%7D%5B0-9%5D%7B1%2C3%7D%24&text=172.33.1.4>)

##### ipv4_address example

```json
172.33.1.4
```

#### labels

Labels to be added to the DNP's docker container.

`labels`

- is optional
- type: `string[]`

##### labels type

Array type: `string[]`

All items must be of the type: `string`

Use reverse-DNS notation to prevent label conflicts. See https://docs.docker.com/compose/compose-file/#labels-2

##### labels example

```json
["eth.dappnode.dnp.my-dnp.developer=Awesome_Name"]
```

#### network_mode

Connect this DNP to a specific network. See https://docs.docker.com/engine/reference/run/#network-settings

`network_mode`

- is optional
- type: `string`

##### network_mode type

`string`

##### network_mode Examples

```json
"bridge"
```

```json
"host"
```

```json
"none"
```

#### path

Filename of the DNP image

`path`

- is optional
- type: `string`

##### path type

`string`

##### path example

```json
"ipfs.dnp.dappnode.eth_0.2.0.tar.xz"
```

#### ports

DNP port mappings

`ports`

- is optional
- type: `string[]`

##### ports type

Array type: `string[]`

All items must be of the type: `string`

Docker ports short syntax HOST:CONTAINER/protocol. See https://docs.docker.com/compose/compose-file/#ports

##### ports Examples

```json
["1194:1194/udp", "8090:3000/udp"]
```

```json
["4001/udp", "4001/tcp"]
```

```json
["4001"]
```

#### privileged

Grant the DNP (almost) all the capabilities of their host machine, regarding kernel features and device access. See
https://blog.docker.com/2013/09/docker-can-now-run-within-docker/

`privileged`

- is optional
- type: `boolean`

##### privileged type

`boolean`

#### restart

Docker restart policy, 'always' is highly recommended. See https://docs.docker.com/compose/compose-file/#restart

`restart`

- is optional
- type: `string`

##### restart type

`string`

All instances must conform to this regular expression

```regex
^(no|always|on-failure|unless-stopped)$
```

- test example:
  [always](<https://regexr.com/?expression=%5E(no%7Calways%7Con-failure%7Cunless-stopped)%24&text=always>)

##### restart example

```json
always
```

#### size

Size of the DNP image in bytes

`size`

- is **required**
- type: `number`

##### size type

`number`

##### size example

```json
25738523
```

#### subnet

Specify the subnet. See https://docs.docker.com/compose/compose-file/#ipv4_address-ipv6_address

`subnet`

- is optional
- type: `string`

##### subnet type

`string`

All instances must conform to this regular expression

```regex
^(?:[0-9]{1,3}.){3}[0-9]{1,3}/[0-9]+$
```

- test example:
  [172.33.0.0/16](<https://regexr.com/?expression=%5E(%3F%3A%5B0-9%5D%7B1%2C3%7D.)%7B3%7D%5B0-9%5D%7B1%2C3%7D%2F%5B0-9%5D%2B%24&text=172.33.0.0%2F16>)

##### subnet example

```json
172.33.0.0/16
```

#### volumes

DNP volume mappings

`volumes`

- is optional
- type: `string[]`

##### volumes type

Array type: `string[]`

All items must be of the type: `string`

Docker volumes short syntax HOST:CONTAINER:ro mapping. See https://docs.docker.com/compose/compose-file/#volumes

##### volumes example

```json
[
  "/var/run/docker.sock:/var/run/docker.sock",
  "/usr/src/dappnode/config:/usr/src/app/config:ro",
  "ipfsdnpdappnodeeth_data:/data/ipfs"
]
```

## keywords

Keywords, relevant and descriptive of this DNP. They will be shown in the ADMIN's UI package store.

`keywords`

- is optional
- type: `string[]`
- defined in this schema

### keywords type

Array type: `string[]`

All items must be of the type: `string`

Single keyword

## license

DNP's License

`license`

- is **required**
- type: `string`
- defined in this schema

### license type

`string`

### license example

```json
"GPL-3.0"
```

## links

Single keyword with no spaces

`links`

- is optional
- type: `object`
- defined in this schema

### links type

`object` with following properties:

| Property   | Type   | Required |
| ---------- | ------ | -------- |
| `api`      | string | Optional |
| `gateway`  | string | Optional |
| `homepage` | string | Optional |
| `ui`       | string | Optional |

#### api

Url to this DNP's DAppNode local HTTP API endpoint.

`api`

- is optional
- type: `string`

##### api type

`string`

##### api example

```json
"http://ipfs.dappnode:5001/api/v0"
```

#### gateway

Url to this DNP's DAppNode local gateway.

`gateway`

- is optional
- type: `string`

##### gateway type

`string`

##### gateway example

```json
"http://ipfs.dappnode:8080/ipfs"
```

#### homepage

Url to an informative homepage for this DNP. Should be a README or landing website.

`homepage`

- is optional
- type: `string`

##### homepage type

`string`

##### homepage example

```json
"https://github.com/dappnode/DNP_IPFS#readme"
```

#### ui

Url to this DNP's DAppNode local UI.

`ui`

- is optional
- type: `string`

##### ui type

`string`

##### ui example

```json
"http://ipfs.dappnode:5001/webui"
```

## name

DNP ENS name

`name`

- is **required**
- type: `string`
- defined in this schema

### name type

`string`

### name example

```json
"ipfs.dnp.dappnode.eth"
```

## repository

DNP's repository. Must be a publicly available url that can be handed directly to a VCS program

`repository`

- is optional
- type: `object`
- defined in this schema

### repository type

`object` with following properties:

| Property    | Type   | Required     |
| ----------- | ------ | ------------ |
| `directory` | string | Optional     |
| `type`      | string | **Required** |
| `url`       | string | **Required** |

#### directory

`directory`

- is optional
- type: `string`

##### directory type

`string`

##### directory example

```json
"packages/react-dom"
```

#### type

`type`

- is **required**
- type: `string`

##### type type

`string`

##### type example

```json
"git"
```

#### url

`url`

- is **required**
- type: `string`

##### url type

`string`

##### url example

```json
"https://github.com/dappnode/DNP_IPFS.git"
```

## type

Type of the DNP. Must be one these types

`type`

- is **required**
- type: `string`
- defined in this schema

### type type

`string`

All instances must conform to this regular expression

```regex
^(dncore|service|library)$
```

- test example: [dncore](<https://regexr.com/?expression=%5E(dncore%7Cservice%7Clibrary)%24&text=dncore>)
- test example: [service](<https://regexr.com/?expression=%5E(dncore%7Cservice%7Clibrary)%24&text=service>)

### type Examples

```json
"dncore"
```

```json
"service"
```

## updateAlerts

Alerts targeted to a specific update jump.

`updateAlerts`

- is optional
- type: `object[]`
- defined in this schema

### updateAlerts type

Array type: `object[]`

All items must be of the type: `object` with following properties:

| Property  | Type   | Required     | Default |
| --------- | ------ | ------------ | ------- |
| `from`    | string | **Required** |         |
| `message` | string | **Required** |         |
| `to`      | string | Optional     | `"*"`   |

#### from

Semver range, show this message when a user updates this DNP FROM a version that satisfies this range.

`from`

- is **required**
- type: `string`

##### from type

`string`

##### from Examples

```json
"0.1.x"
```

```json
"^0.2.0"
```

#### message

Alert message to be shown when the from and to ranges are satisfied.

`message`

- is **required**
- type: `string`

##### message type

`string`

##### message example

```json
"Major update to OpenVPN: This update breaks compatibility with the last VPN version. Please read the migration guide at: https://migration020.dappnode.io"
```

#### to

Semver range, show this message when a user updates this DNP TO a version that satisfies this range.

`to`

- is optional
- type: `string`
- default: `"*"`

##### to type

`string`

##### to Examples

```json
"0.1.x"
```

```json
"^0.2.0"
```

```json
"*"
```

Specific update jump alert

## version

DNP semantic version (semver)

`version`

- is **required**
- type: `string`
- defined in this schema

### version type

`string`

All instances must conform to this regular expression

```regex
^((([0-9]+).([0-9]+).([0-9]+)))$
```

- test example:
  [0.2.0](<https://regexr.com/?expression=%5E(((%5B0-9%5D%2B).(%5B0-9%5D%2B).(%5B0-9%5D%2B)))%24&text=0.2.0>)

### version example

```json
"0.2.0"
```

## warnings

### The DNP Image Schema

Very relevant information that MUST be shown to the user BEFORE executing a specific action in the DNP's lifecycle.

`warnings`

- is optional
- type: `object`
- defined in this schema

### warnings type

`object` with following properties:

| Property    | Type   | Required |
| ----------- | ------ | -------- |
| `onInstall` | string | Optional |
| `onRemove`  | string | Optional |
| `onReset`   | string | Optional |
| `onUpdate`  | string | Optional |

#### onInstall

Will be shown before installing the DNP

`onInstall`

- is optional
- type: `string`

##### onInstall type

`string`

##### onInstall example

```json
"You must set the PASSWORD ENV before installing the DNP in order for the setup to work correctly."
```

#### onRemove

Filename of the DNP image

`onRemove`

- is optional
- type: `string`

##### onRemove type

`string`

##### onRemove example

```json
"You MUST properly close your open channels before stopping this DNP or you may lose your funds."
```

#### onReset

Will be shown before reseting the DNP

`onReset`

- is optional
- type: `string`

##### onReset type

`string`

##### onReset example

```json
"You MUST properly close your open channels before reseting this DNP or you may lose your funds."
```

#### onUpdate

Will be shown before updating the DNP, not in the first installation

`onUpdate`

- is optional
- type: `string`

##### onUpdate type

`string`

##### onUpdate example

```json
"Your VPN connection will be lost when the VPN finalizes updating. Leave 1-2 minutes after executing the update and then reconnect and refresh this site."
```
