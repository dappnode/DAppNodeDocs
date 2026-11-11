---
title: "Dappnode Package (DNP) manifest"
llm_description: "Complete reference for dappnode_package.json manifest file properties."
---

# Dappnode Package (DNP) manifest

The Dappnode Package manifest defines all the necessary information for a Dappnode to understand this package:

- Package identity, version and upstream software metadata.
- Installation requirements and container configuration.
- Information displayed in the admin UI.

The [SDK package spec](https://github.com/dappnode/DAppNodeSDK/blob/master/doc/package-spec.md) defines repository rules and the warning-to-error rollout. This reference describes manifest fields. For templates, required package identity fields belong in each variant; validate the merged result.

## Example

```json
{
  "name": "example.public.dappnode.eth",
  "version": "0.1.0",
  "description": "Example package with an application service.",
  "type": "service",
  "license": "MIT",
  "upstream": [
    {
      "repo": "example/upstream",
      "version": "v1.2.3",
      "arg": "APP_VERSION"
    }
  ],
  "mainService": "app",
  "architectures": [
    "linux/amd64",
    "linux/arm64"
  ],
  "requirements": {
    "minimumDappnodeVersion": "0.2.0"
  },
  "globalEnvs": [
    {
      "envs": [
        "PUBLIC_IP"
      ],
      "services": [
        "app"
      ]
    }
  ],
  "backup": [
    {
      "name": "data",
      "path": "/data",
      "service": "app"
    }
  ],
  "exposable": [
    {
      "name": "Application",
      "serviceName": "app",
      "port": 8080,
      "exposeByDefault": false
    }
  ],
  "upnpDisable": [
    30303
  ],
  "repository": {
    "type": "git",
    "url": "https://github.com/example/DAppNodePackage-example"
  }
}
```

The example refers to this `docker-compose.yml`. Every explicit manifest service reference must match a service key in the resolved compose, and every service declaring `APP_VERSION` must use the manifest’s upstream version.

```yaml
version: "3.5"
services:
  app:
    build:
      context: .
      args:
        APP_VERSION: v1.2.3
    image: app.example.public.dappnode.eth:0.1.0
    volumes:
      - data:/data
    restart: unless-stopped
volumes:
  data: {}
```

## Properties reference

| Property                              | Type                    | Required     |
| ------------------------------------- | ----------------------- | ------------ |
| [name](#name)                         | `string`                | **Required** |
| [version](#version)                   | `string`                | **Required** |
| [upstream](#upstream)                 | `object[]`              | Optional     |
| [upstreamVersion](#upstreamversion)   | `string` (legacy)       | Optional     |
| [shortDescription](#shortdescription) | `string`                | Optional     |
| [description](#description)           | `string`                | **Required** |
| [type](#type)                         | `enum`                  | **Required** |
| [chain](#chain)                       | `enum` or `object`      | Optional     |
| [mainService](#mainservice)           | `string`                | Optional     |
| [dockerTimeout](#dockertimeout)       | `string`                | Optional     |
| [dependencies](#dependencies)         | `object`                | Optional     |
| [requirements](#requirements)         | `object`                | Optional     |
| [globalEnvs](#globalenvs)             | `object[]` or legacy `object` | Optional |
| [architectures](#architectures)       | `enum[]`                | Optional     |
| [backup](#backup)                     | `object[]`              | Optional     |
| [changelog](#changelog)               | `string`                | Optional     |
| [warnings](#warnings)                 | `object`                | Optional     |
| [updateAlerts](#updatealerts)         | `object[]`              | Optional     |
| [disclaimer](#disclaimer)             | `object`                | Optional     |
| [style](#style)                       | `object`                | Optional     |
| [exposable](#exposable)               | `object[]`              | Optional     |
| [upnpDisable](#upnpdisable)           | `number[]` or `boolean` | Optional     |
| [author](#author)                     | `string`                | Optional     |
| [contributors](#contributors)         | `string[]`              | Optional     |
| [categories](#categories)             | `enum[]`                | Optional     |
| [keywords](#keywords)                 | `string[]`              | Optional     |
| [links](#links)                       | `object`                | Optional     |
| [repository](#repository)             | `object`                | Optional     |
| [bugs](#bugs)                         | `object`                | Optional     |
| [license](#license)                   | `string`                | **Required** |

### name

Dappnode Package ENS name.

- is **required**
- type: `string`

Example:

```json
"ipfs.dnp.dappnode.eth"
```

### version

Dappnode Package semantic version (semver).

- is **required**
- type: `string`

All instances must conform to this regular expression

```regex
^[0-9]+\.[0-9]+\.[0-9]+$
```

Example:

```json
"0.2.0"
```

### upstream

Use an array of upstream software dependencies, including when there is only one. Each entry requires `repo`, `version` and `arg`.

| Property | Meaning |
|---|---|
| `repo` | Upstream repository, such as `ethereum/go-ethereum`. |
| `version` | Version string used by the compose build argument, preserving prefixes such as `v`. This is independent of the package’s registry `version`. |
| `arg` | Exact argument name declared under a service’s `build.args`, such as `GETH_VERSION`. |

Every service declaring the argument must use the same version. A build argument may additionally pin that version with `@sha256:` followed by 64 hexadecimal characters. The SDK reports conflicting service values; one matching service does not make the others valid.

```json
[
  { "repo": "ethereum/go-ethereum", "version": "v1.2.3", "arg": "GETH_VERSION" }
]
```

For root/variant inheritance, see [multi-config package development](../package-development/multi-configuration.md). Provider selection and source-tag transformations are automation configuration; the shared manifest contract currently defines `repo`, `version` and `arg`.

### upstreamVersion

The top-level `upstreamVersion`, `upstreamRepo` and `upstreamArg` fields are legacy. Existing consumers still read them during migration. New and migrated packages use `upstream[]`; do not mix both forms.

### shortDescription

Short Dappnode Package description, 6-8 words sentence briefly describing the purpose of this Dappnode Package. The
purpose is to quickly grab users' attention and clearly define its purpose. Markdown is discouraged as it will NOT be
rendered on the Dappnode Package store view.

- is optional
- type: `string`

Example:

```json
"Distributed file system for storing and accessing data."
```

### description

Dappnode Package description. Markdown and links are allowed and ecouraged to give users the option to read more
information about this Dappnode Package.

- is **required**
- type: `string`

Example:

```json
"Welcome! IPFS is a distributed system for storing and accessing files, websites, applications, and data. If you’re new to IPFS, check our [introductory page](https://ipfs.io/#why) for an easy overview. \n\nWith this node you can upload and download files from IPFS using it own fancy web console at [http://ipfs.dappnode:5001/webui](http://ipfs.dappnode:5001/webui). Other Dappnode Packages and external applications can use its API at the endpoint `http://ipfs.dappnode:5001/api`. Go to the [IPFS HTTP API full reference](https://docs.ipfs.io/reference/api/http/) to check all the features of the API."
```

### type

Type of this Dappnode Package. It is used to trigger some special features such as core functionality.

- is **required**
- default: `"service"`
- type: `string`

The value of this property **must** be equal to one of the known values below.

| Value     | Description                                                                       |
| --------- | --------------------------------------------------------------------------------- |
| `service` | Can have ENVs a depend on library Dappnode Packages                               |
| `library` | Should not have ENVs and cannot depend on service Dappnode Packages               |
| `dncore`  | Dappnode Packages that are part of the Dappnode core and have special permissions |

Examples:

```json
"service"
```

```json
"dncore"
```

### chain

Optional blockchain-driver metadata used to show node synchronization status. The value is either a driver name or an object with `driver`, optional `serviceName` and optional `portNumber`.

Supported driver names are `ethereum`, `ethereum-beacon-chain`, `ethereum2-beacon-chain-prysm`, `bitcoin` and `monero`.

For a package whose resolved compose includes an `execution` service, an explicit target looks like:

```json
{
  "driver": "ethereum",
  "serviceName": "execution",
  "portNumber": 8545
}
```

An explicit `serviceName` must exist in the resolved compose. Omitting it preserves the runtime’s default service selection.

### mainService

An explicit value must match a service key in the resolved compose, including after variant overrides.


For multi-service packages, indicate which service is the main one. The root ENS domain of this package will be mapped
to this service IP.

- is optional
- type: `string`

Examples:

```json
"webserver"
```

```json
"backend"
```

```json
"service1"
```

### dockerTimeout

Modify the default Docker timeout of 10 seconds. It affects package updates, removals, container restarts, start and
stop, updating config environments and port mappings. You can either pass a numerical value in seconds or a string
representation parsed with [timestring](http://npmjs.com/package/timestring). Available from DAPPMANAGER v0.2.36

- is optional
- type: `string`

Examples:

```json
"5min"
```

```json
"60"
```

### dependencies

Dappnode Package dependencies. Must be an object where the keys are the Dappnode Package's ENS. The values must be a
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

Specify requirements to be met before allowing users to install this Dappnode Package.

- is optional
- type: `object` with the following properties:

| Property                 | Type   | Required |
| ------------------------ | ------ | -------- |
| `minimumDappnodeVersion` | string | Optional |
| `minimumDockerVersion` | string | Optional |
| `notInstalledPackages` | string[] | Optional |

#### minimumDappnodeVersion

Minimum Dappnode version that includes all the features necessary to run this Dappnode Package.

- is optional
- type: `string`

All instances must conform to this regular expression

```regex
^[0-9]+\.[0-9]+\.[0-9]+$
```

Example:

```json
"0.2.0"
```

### globalEnvs

Request global environment variables for selected compose services. Use short names such as `PUBLIC_IP` and `HOSTNAME`. Dappmanager adds the `_DAPPNODE_GLOBAL_` prefix during installation; including the prefix in the manifest would add it twice.

```json
[
  { "envs": ["PUBLIC_IP", "HOSTNAME"], "services": ["app"] }
]
```

Both `envs` and `services` are required in each entry. Empty lists are allowed. Every service must exist in the resolved compose. Names come from the shared [GLOBAL_ENVS catalogue](https://github.com/dappnode/DNP_DAPPMANAGER/blob/master/packages/types/src/globalEnvs.ts): remove the prefix from its values, rather than using its keys. For example, the key `ACTIVE` maps to `_DAPPNODE_GLOBAL_ENVS_ACTIVE`, so the manifest name is `ENVS_ACTIVE`.

The runtime also accepts the legacy all-services form:

```json
{ "all": true }
```

Use a JSON boolean, not the string `"true"`. The value `false` leaves services unchanged. Prefer explicit lists for new packages. The published schema currently rejects this legacy object form; the corrected shared schema and matching types must be released before SDK validation accepts it everywhere.

### architectures

Build and distribute this package in multiple architectures using
[Docker's buildx plugin](https://docs.docker.com/buildx/working-with-buildx/)

- is optional
- type: Array type: `enum[]`

All items must be of the type: `string`

The value of this property **must** be equal to one of the known values below.

| Value         | Description                  |
| ------------- | ---------------------------- |
| `linux/amd64` | Default architecture, x86-64 |
| `linux/arm64` | ARM architecture             |

Example:

```json
["linux/amd64", "linux/arm64"]
```

### backup

When `backup[].service` is specified, it must name a service in the resolved compose. Omission retains Dappmanager’s default service selection.


Allows users to download and restore a backup of key files of this package. If this property is non-empty array, a new
view will be available in the admin UI for this Dappnode Package. The files or directories specified in the array will
be bundled in a tarball. As long as the name properties stay the same, their associated paths can change in future
versions. Then, when restoring an old backup, the new paths will be associated to files stored under the same name
keys. **Note:** it is recommended to only backup lightweight files such as configs, keys or passwords.

- is optional
- type: Array type: `object[]`

All items must be of the type: `object` with the following properties:

| Property  | Type   | Required     |
| --------- | ------ | ------------ |
| `name`    | string | **Required** |
| `path`    | string | **Required** |
| `service` | string | Optional     |

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

#### service

Service to which the path belongs to. Must be equal to the name used in the docker-compose services object

- is optional
- type: `string`
- minimum length: 1 characters

Examples:

```json
"validator"
```

```json
"service1"
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

Optional messages shown for package operations. Use the supported update-level fields rather than a generic `onUpdate` key.

| Property | Type | Required |
|---|---|---|
| `onInstall` | string | Optional |
| `onPatchUpdate` | string | Optional |
| `onMinorUpdate` | string | Optional |
| `onMajorUpdate` | string | Optional |
| `onReset` | string | Optional |
| `onRemove` | string | Optional |

```json
{
  "onMajorUpdate": "Read the migration instructions before updating.",
  "onReset": "Back up your data before resetting this package."
}
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

Semver range, show this message when a user updates this Dappnode Package FROM a version that satisfies this range.

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

Semver range, show this message when a user updates this Dappnode Package TO a version that satisfies this range.

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

Graphic information to control the appearance of Dappnode Package related items in the admin UI.

- is optional
- type: `object` with the following properties:

| Property               | Type   | Required |
| ---------------------- | ------ | -------- |
| `featuredBackground`   | string | Optional |
| `featuredColor`        | string | Optional |
| `featuredAvatarFilter` | string | Optional |

#### featuredBackground

CSS background property to be applied to the Dappnode Package card in the Dappnode Package store if featured. Go to the
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

CSS color property to be applied to the Dappnode Package card in the Dappnode Package store if featured. Go to the
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

CSS filter property to be applied to `<img>` component (avatar) of the Dappnode Package card in the Dappnode Package
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

### exposable

Exposable services safe to be in the public internet

- is optional
- type: Array type: `object[]`

All items must be of the type: `object` with the following properties:

| Property        | Type   | Required     |
| --------------- | ------ | ------------ |
| `name`          | string | **Required** |
| `description`   | string | Optional     |
| `serviceName`   | string | Optional     |
| `port`          | number | **Required** |
| `fromSubdomain` | string | Optional     |

#### name

Short human readable name of this exposable service

- is **required**
- type: `string`
- minimum length: 1 characters

Example:

```json
"Geth JSON RPC"
```

#### description

Description of this exposable service

- is optional
- type: `string`

Example:

```json
"JSON RPC endpoint for Geth mainnet"
```

#### serviceName

Docker compose service this exposable service belongs to. Defaults to the first service.

- is optional
- type: `string`
- minimum length: 1 characters

Example:

```json
"beacon_chain"
```

#### port

Port this exposable service listens to

- is **required**
- type: `number`

Examples:

```
80
```

```
5001
```

```
8545
```

Single exposable service item

### upnpDisable {#upnpdisable}

<span id="disableupnp"></span>

The manifest key is `upnpDisable`; `disableUpnp` is not a supported alias.

Controls UPnP port forwarding for this package. By default, DAppNode attempts to create UPnP port mappings for all ports defined in the docker-compose file. This property can either disable UPnP completely for the package or selectively disable it for specific ports.

- is optional
- type: `boolean` or `number[]`

If set to `true`, UPnP is disabled for all ports. An array selects host port numbers from 1 to 65535 and applies to both TCP and UDP. `false` or an empty array keeps UPnP enabled.

Examples:

```json
true
```

```json
[8545, 30303]
```

### author

Main author of this Dappnode Package. Must follow the structure `${name} <${email}> (${githubUserLink})`.

- is optional
- type: `string`
- minimum length: 1 characters

Example:

```json
"Dappnode Association <admin@dappnode.io> (https://github.com/dappnode)"
```

### contributors

Contributing authors of this Dappnode Package.

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

Categories to organize and group Dappnode Packages in the Dappnode Package store. Only one or two categories maximum
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

Keywords, relevant and descriptive of this Dappnode Package. They will be shown in the admin UI Dappnode Package store.

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

Url to an informative homepage for this Dappnode Package. Should be a README or landing website.

- is optional
- type: `string`

Example:

```json
"https://github.com/dappnode/DNP_IPFS#readme"
```

#### ui

Url to this DNP's Dappnode local UI.

- is optional
- type: `string`

Example:

```json
"http://ipfs.dappnode:5001/webui"
```

#### api

Url to this DNP's Dappnode local HTTP API endpoint.

- is optional
- type: `string`

Example:

```json
"http://ipfs.dappnode:5001/api/v0"
```

#### gateway

Url to this DNP's Dappnode local gateway.

- is optional
- type: `string`

Example:

```json
"http://ipfs.dappnode:8080/ipfs"
```

### repository

Dappnode Package's repository. Must be a publicly available url that can be handed directly to a VCS program.

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

Dappnode Package's License.

- is **required**
- type: `string`
- minimum length: 1 characters

Example:

```json
"GPL-3.0"
```
