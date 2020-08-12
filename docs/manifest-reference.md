# DAppNode Package Manifest Reference

The DAppNode Package manifest defines all the necessary information for a DAppNode to understand this package:

- IPFS of BZZ hashes to download its docker image
- Docker related data to configure and run its container
- Metadata to control how the package is shown in the admin UI.

## Example

```json
{
  "name": "ipfs.dnp.dappnode.eth",
  "version": "0.2.0",
  "upstreamVersion": "2.6.0-beta",
  "shortDescription": "Distributed file system for storing and accessing data.",
  "description": "Welcome! IPFS is a distributed system for storing and accessing files, websites, applications, and data. If you’re new to IPFS, check our [introductory page](https://ipfs.io/#why) for an easy overview. \n\nWith this node you can upload and download files from IPFS using it own fancy web console at [http://ipfs.dappnode:5001/webui](http://ipfs.dappnode:5001/webui). Other DAppNode Packages and external applications can use its API at the endpoint `http://ipfs.dappnode:5001/api`. Go to the [IPFS HTTP API full reference](https://docs.ipfs.io/reference/api/http/) to check all the features of the API.",
  "avatar": "/ipfs/QmWwMb3XhuCH6JnCF6m6EQzA4mW9pHHtg7rqAfhDr2ofi8",
  "type": "service",
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

Examples:

```json
"2.6.0-beta"
```

```json
"any-text"
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
| `Blockchain`         | Blockchain nodes, i.e. Bitcoin, Monero                                                                |
| `Communications`     | Decentralized networking or chat solutions, i.e. Swarm                                                |
| `Developer tools`    | Packages that their main purpose is to aid in developing, i.e. testnets                               |
| `ETH2.0`             | Packages to participate or use the Eth2.0 network                                                     |
| `Economic incentive` | Packages that offer an economic incentive or reward to the admin that runs it, i.e. Lightning Network |
| `Monitoring`         | Packages that track metrics                                                                           |
| `Payment channels`   | Packages whose main purpose is to manage or control payment channels, i.e. Raiden                     |
| `Storage`            | Decentralized storage solutions, i.e. Swarm                                                           |

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
