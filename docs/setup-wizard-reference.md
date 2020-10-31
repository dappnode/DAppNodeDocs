# Setup Wizard Reference

The setup wizard for DAppNode packages helps automate the package customization and improve its user experience. You can allow users to conveniently edit environment variables, port mappings, and upload files while interacting with a simple web form, right before installing the package.

## How to use

To add this functionality, create a file `setup-wizard.yml` in the root of your DAppNode package directory. Both JSON and YAML formats are supported, but YAML makes writing markdown text blocks much easier (its used in the [`description`](#description) property).

```diff
  DAppNodePackage-my-package.public.dappnode.eth/
  ├── build
  │   ├── ...
  │   └── Dockerfile
  ├── avatar-my-package.png
  ├── dappnode_package.json
  ├── docker-compose.yml
+ └── setup-wizard.yml
```

## Example

```yaml
version: "2"
fields:
  - id: payoutAddress,
    target:
      type: environment
      name: PAYOUT_ADDRESS
      service: service1
    title: Payout address
    description: >-
      Address to send **payouts** too. [More info](https://more.info)
      Supports markdown and multiline
    secret: true
    pattern: "^0x[a-fA-F0-9]{40}$"
    patternErrorMessage: Must be a valid address (0x1fd16a...)
    enum:
      - normal
      - archive
      - advanced
    required: true
    if: { "mode": { "enum": ["advanced"] } }
```

## version

Identify this setup wizard version. Currently only supports version `"2"`

- is **required**
- type: `string`
- value: `"2"`

## fields

Setup wizard fields. Fields to show in the setup wizard form UI

- is **required**
- type: Array type: `object[]`

All items must be of the type: `object` with the following properties:

| Property              | Type    | Required     | Default |
| --------------------- | ------- | ------------ | ------- |
| `target`              | object  | Optional     |         |
| `id`                  | string  | **Required** |         |
| `title`               | string  | **Required** |         |
| `description`         | string  | **Required** |         |
| `secret`              | boolean | Optional     | `false` |
| `pattern`             | string  | Optional     |         |
| `patternErrorMessage` | string  | Optional     |         |
| `enum`                | array   | Optional     |         |
| `required`            | boolean | Optional     |         |
| `if`                  | object  | Optional     |         |

### id

Unique property ID required for internal form parsing, and to use the `if` conditional block.

- is **required**
- type: `string`

Example:

```yaml
id: payoutAddress
```

### target

Maps the setup wizard field to a package configuration option. Supports:

- [`environment`](#environment): For environment variables
- [`portMapping`](#portMapping): For port mapping
- [`namedVolumeMountpoint`](#namedVolumeMountpoint): To allow hosting a specific package volume into a different drive or mountpoint
- [`allNamedVolumesMountpoint`](#allNamedVolumesMountpoint): To allow hosting all package volumes into a different drive or mountpoint
- [`fileUpload`](#fileUpload): To upload user files to the package container

#### environment

To customize environment variables with user input. Targeted variables must be declared in the package's docker-compose. You can customize the type of input shown in the UI with this field properties

- [`secret`](#secret): Hides input, to collect sensitive data.
- [`pattern`](#pattern): To validate input against any Regex expression.
- [`enum`](#enum): Show as a select dropdown menu.

```yaml
target:
  type: environment
  name: PAYOUT_ADDRESS
  service: service1
```

##### name

The name of the environment variable as declared in the docker-compose.

- is **required**
- type: `string`

Example:

```yaml
name: PAYOUT_ADDRESS
```

##### service

In multi-service package, which service should be targeted with this setting.

- type: `string`

Examples:

```yaml
service: service1
```

#### portMapping

To customize port mappings with user input. Targeted container port must be declared in the package's docker-compose.

```yaml
target:
  type: portMapping
  containerPort: 9554/UDP
  service: service1
```

##### containerPort

Exposed container port to map to. Must follow the format `{portNumber}` or `{portNumber}/{PROTOCOL}`, where PROTOCOL must be `TCP` or `UDP` in all caps.

- is **required**
- type: `string`

Examples:

```yaml
containerPort: 9554
```

```yaml
containerPort: 9554/TCP
```

##### service

See [service](#service)

#### namedVolumeMountpoint

To allow hosting a specific package volume into a different drive or mountpoint

```yaml
target:
  type: namedVolumeMountpoint
  volumeName: blockchain_data
```

##### volumeName

Name of the docker volume to allow the user to change its mountpoint. Must have the exact same name as declared in the package's compose `volumes` section.

- is **required**
- type: `string`

Example:

```yaml
volumeName: blockchain_data
```

#### allNamedVolumesMountpoint

To allow hosting all package volumes into a different drive or mountpoint at once. Use this option if your package has multiple heavy volumes whose mountpoint should be changed at once.

```yaml
target:
  type: allNamedVolumesMountpoint
```

#### fileUpload

To allow hosting a specific package volume into a different drive or mountpoint

```yaml
target:
  type: fileUpload
  path: /usr/src/config.json
  service: service1
```

##### path

Destination path to upload the file to. Must be a valid absolute path in the package container.

- is **required**
- type: `string`

Example:

```yaml
path: /usr/src/config.json
```

##### service

See [service](#service)

### title

The Title Schema

- is **required**
- default: `""`
- type: `string`

Example:

```yaml
title: Payout address
```

### description

The Description Schema

- is **required**
- default: `""`
- type: `string`

Example:

```yaml
description: >-
  Address to send **payouts** too. [More info](https://more.info)
  Supports markdown and multiline
```

### secret

Display field input as hidden. Use to collect sensitive data. It will automatically activate if the field name contains "secret" "passphrase" or "password". Only available with target environment.

- is optional
- default: `false`
- type: `boolean`

Example:

```yaml
secret: true
```

### pattern

Enforce this property to satisfy a regex before continuing. Only available with target environment. Use also [`patternErrorMessage`](#patternErrorMessage) to show a nicer error message when regex validation fails.

- is optional
- type: `string`

Example:

```yaml
pattern: "^0x[a-fA-F0-9]{40}$"
```

### patternErrorMessage

Error to show if the regex pattern validation fails. Only available with target environment.

- is optional
- type: `string`

Examples:

```yaml
patternErrorMessage: Must be a valid address (0x1fd16a...)
```

```yaml
patternErrorMessage: Must be at least 8 characters long
```

### enum

List valid options. Will automatically display the input as a select menu. Only available with target environment.

- is optional
- type: Array type: `string[]`

All items must be of the type: `string`

Examples

```yaml
enum:
  - normal
  - archive
  - advanced
```

### required

Enforce this property to be provided before continuing

- is optional
- type: `boolean`

Examples

```yaml
required: true
```

### if

Only display the field property if the `if` schema is valid against the current form data provided by the user. The form data is an object with the structure `{ [field.id]: JSONSchema }`.

- is optional
- type: `object`

Examples:

```yaml
if: { "mode": { "enum": ["advanced"] } }
```

```yaml
if: { "mode": { "enum": ["archive"] } }
```
