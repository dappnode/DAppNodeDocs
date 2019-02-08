#  Core packages readmes

## Installer 

[![Website dappnode.io](https://img.shields.io/badge/Website-dappnode.io-brightgreen.svg)](https://dappnode.io/)
[![Documentation Wiki](https://img.shields.io/badge/Documentation-Wiki-brightgreen.svg)](https://github.com/dappnode/DAppNode/wiki)
[![GIVETH Campaign](https://img.shields.io/badge/GIVETH-Campaign-1e083c.svg)](https://alpha.giveth.io/campaigns/OcKJryNwjeidMXi9)
[![RIOT DAppNode](https://img.shields.io/badge/RIOT-DAppNode-blue.svg)](https://riot.im/app/#/room/#DAppNode:matrix.org)
[![Twitter Follow](https://img.shields.io/twitter/follow/espadrine.svg?style=social&label=Follow)](https://twitter.com/DAppNODE?lang=es)

This repository generates the .iso file for installing DappNode to a server. Below are the instructions that you will need to make your own DappNode ISO.

Follow this link if you want to know how to install DAppNode: [DappNode-Installation-Guide](https://github.com/dappnode/Dappnode/wiki/DappNode-Installation-Guide)

### How to generate a DAppNode's ISO

#### Prerequisites
Make sure the following sotfware is installed

##### 1. git
Run this command to verify the git:
```
$ git --version
```
If you don't see a valid version, install [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) commandline tool.

##### 2. docker
Run this command to verify the git:
```
$ docker -v
```
If you don't see a valid version, install [docker](https://docs.docker.com/engine/installation). The community edition (docker-ce) will work. In Linux make sure you grant permissions to the current user to use docker by adding current user to docker group, `sudo usermod -aG docker $USER`. Once you update the users group, exit from the current terminal and open a new one to make effect.

##### 3. docker-compose
Run this command to verify the git:
```
$ docker-compose -v
```
If you don't see a valid version, install [docker-compose](https://docs.docker.com/compose/install)
   
**Note**: Make sure you can run `git`, `docker ps`, `docker-compose` without any issue and without sudo command.

### Generate the ISO image

#### 1. Generate DAppNode's ISO
Run the following commands in your terminal. Make sure you have at least 2 GB of disk space available.
```
$ git clone https://github.com/dappnode/DAppNode_Installer.git
$ cd DAppNode_Installer
$ docker-compose build
$ docker-compose up
```

#### 2. Verify image generation
When the execution of the Docker-compose finishes, run the following command to verify the image existance:
```
$ ls -lrt images/DappNode-ubuntu-*
-rw-r--r--  1 edu  staff  916455424 20 mar 13:19 images/DAppNode-ubuntu-18.04-server-amd64.iso
```

#### 3. Burn the ISO into a USB
Now you can burn the ISO to a DVD or create a bootable USB. Follow the tutorial of your operating system below and come back when you are finished:

* [MacOS](https://tutorials.ubuntu.com/tutorial/tutorial-create-a-usb-stick-on-macos)
* [Windows](https://tutorials.ubuntu.com/tutorial/tutorial-create-a-usb-stick-on-windows)
* [Ubuntu](https://tutorials.ubuntu.com/tutorial/tutorial-create-a-usb-stick-on-ubuntu)

Once completed, come back to the [main guide to install an Ubuntu server](https://github.com/dappnode/DAppNode/wiki/DAppNode-Installation-Guide#13-install-an-ubuntu-distribution).


### Contributing

Please read [CONTRIBUTING.md](https://github.com/dappnode) for details on our code of conduct, and the process for submitting pull requests to us.

### Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/dappnode/DAppNode_Installer/tags). 

### Authors

* **Eduardo Antuña Díez** - *Initial work* - [eduadiez](https://github.com/eduadiez)

See also the list of [contributors](https://github.com/dappnode/DAppNode_Installer/contributors) who participated in this project.

### License

This project is licensed under the GNU General Public License v3.0 - see the [LICENSE](LICENSE) file for details

### References

[git](https://git-scm.com/)

[docker](https://www.docker.com/)

[docker-compose](https://docs.docker.com/compose/)

## VPN

[![Website dappnode.io](https://img.shields.io/badge/Website-dappnode.io-brightgreen.svg)](https://dappnode.io/)
[![Documentation Wiki](https://img.shields.io/badge/Documentation-Wiki-brightgreen.svg)](https://github.com/dappnode/DAppNode/wiki)
[![GIVETH Campaign](https://img.shields.io/badge/GIVETH-Campaign-1e083c.svg)](https://alpha.giveth.io/campaigns/OcKJryNwjeidMXi9)
[![RIOT DAppNode](https://img.shields.io/badge/RIOT-DAppNode-blue.svg)](https://riot.im/app/#/room/#DAppNode:matrix.org)
[![Twitter Follow](https://img.shields.io/twitter/follow/espadrine.svg?style=social&label=Follow)](https://twitter.com/DAppNODE?lang=es)

<p align="left">
  <img src="https://github.com/dappnode/DNP_VPN/blob/master/VPN-min.png" width="200"/>
</p>

Dappnode package responsible for providing the VPN connection

It is an AragonApp whose repo is deployed at this address: [0xe27438944187b49ef0005554a15b913b11baa08c](https://etherscan.io/address/0xe27438944187b49ef0005554a15b913b11baa08c) and whose ENS address is: [vpn.dnp.dappnode.eth](https://etherscan.io/enslookup?q=vpn.dnp.dappnode.eth])

### Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

#### Prerequisites

- git

  Install [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) commandline tool.

- docker

  Install [docker](https://docs.docker.com/engine/installation). The community edition (docker-ce) will work. In Linux make sure you grant permissions to the current user to use docker by adding current user to docker group, `sudo usermod -aG docker $USER`. Once you update the users group, exit from the current terminal and open a new one to make effect.

- docker-compose

  Install [docker-compose](https://docs.docker.com/compose/install)

**Note**: Make sure you can run `git`, `docker ps`, `docker-compose` without any issue and without sudo command.

#### Building

```
$ git clone https://github.com/dappnode/DNP_VPN.git
```

```
$ docker-compose build
or
$ docker build --rm -f build/Dockerfile -t vpn.dnp.dappnode.eth:dev build
```

### Running

#### Start

```
$ docker-compose up -d
```

#### Stop

```
$ docker-compose down
```

#### Status

```
$ docker-compose ps
```

#### Logs

```
$ docker-compose logs -f
```

### Generating a tar.xz image

[xz](https://tukaani.org/xz/) is required

```
$ docker save vpn.dnp.dappnode.eth:dev | xz -e9vT0 > vpn.dnp.dappnode.eth_x.y.z.tar.xz
```

You can download the latest tar.xz version from here [releases](https://github.com/dappnode/DNP_VPN/releases).

#### Loading a Docker image

```
$docker load -i vpn.dnp.dappnode.eth_x.y.z.tar.xz
```

### Contributing

Please read [CONTRIBUTING.md](https://github.com/dappnode/DAppNode/blob/master/CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

### Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/dappnode/DNP_VPN/tags).

### Authors

- **Eduardo Antuña Díez** - _Initial work_ - [eduadiez](https://github.com/eduadiez)
- **DAppLion** - _API_ - [dapplion](https://github.com/dapplion)
- **Alex Floyd** - _Improvements and review_ - [mex20](https://github.com/mex20)

See also the list of [contributors](https://github.com/dappnode/DNP_VPN/contributors) who participated in this project.

### License

This project is licensed under the GNU General Public License v3.0 - see the [LICENSE](LICENSE) file for details

### References

[git](https://git-scm.com/)

[docker](https://www.docker.com/)

[docker-compose](https://docs.docker.com/compose/)

## Admin

[![Website dappnode.io](https://img.shields.io/badge/Website-dappnode.io-brightgreen.svg)](https://dappnode.io/)
[![Documentation Wiki](https://img.shields.io/badge/Documentation-Wiki-brightgreen.svg)](https://github.com/dappnode/DAppNode/wiki)
[![GIVETH Campaign](https://img.shields.io/badge/GIVETH-Campaign-1e083c.svg)](https://alpha.giveth.io/campaigns/OcKJryNwjeidMXi9)
[![RIOT DAppNode](https://img.shields.io/badge/RIOT-DAppNode-blue.svg)](https://riot.im/app/#/room/#DAppNode:matrix.org)
[![Twitter Follow](https://img.shields.io/twitter/follow/espadrine.svg?style=social&label=Follow)](https://twitter.com/DAppNODE?lang=es)

<p align="left">
  <img src="https://github.com/dappnode/DNP_ADMIN/blob/master/ADMINUI-min.png" width="200"/>
</p>

DAppNode tool responsible for providing the admin UI of DAppNode.

It is an AragonApp whose repo is deployed at this address: [0xee66c4765696c922078e8670aa9e6d4f6ffcc455
](https://etherscan.io/address/0xee66c4765696c922078e8670aa9e6d4f6ffcc455) and whose ENS address is: [admin.dnp.dappnode.eth](https://etherscan.io/enslookup?q=admin.dnp.dappnode.eth)

### Usage

Once connected to DAppNode, go to [my.admin.dnp.dappnode.eth](http://my.admin.dnp.dappnode.eth) to manage packages or devices.

### Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

#### Prerequisites

- git

  Install [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) commandline tool.

- docker

  Install [docker](https://docs.docker.com/engine/installation). The community edition (docker-ce) will work. In Linux make sure you grant permissions to the current user to use docker by adding current user to docker group, `sudo usermod -aG docker $USER`. Once you update the users group, exit from the current terminal and open a new one to make effect.

- docker-compose

  Install [docker-compose](https://docs.docker.com/compose/install)

**Note**: Make sure you can run `git`, `docker ps`, `docker-compose` without any issue and without sudo command.

#### Building

```
$ git clone https://github.com/dappnode/DNP_ADMIN.git
```

```
$ docker-compose build
or
$ docker build --rm -f build/Dockerfile -t admin.dnp.dappnode.eth:dev build
```

#### Running

##### Start

```
$ docker-compose up -d
```

##### Stop

```
$ docker-compose down
```

##### Status

```
$ docker-compose ps
```

##### Logs

```
$ docker-compose logs -f
```

### Generating a tar.xz image

[xz](https://tukaani.org/xz/) is required

```
$ docker save admin.dnp.dappnode.eth:dev | xz -e9vT0 > admin.dnp.dappnode.eth_x.y.z.tar.xz
```

You can download the latest tar.xz version from here [releases](https://github.com/dappnode/DNP_ADMIN/releases).

#### Loading a Docker image

```
$docker load -i admin.dnp.dappnode.eth_x.y.z.tar.xz
```

### Contributing

Please read [CONTRIBUTING.md](https://github.com/dappnode) for details on our code of conduct, and the process for submitting pull requests to us.

### Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/dappnode/DNP_ADMIN/tags).

### Authors

- **DAppLion** - [dapplion](https://github.com/dapplion)
- **Eduardo Antuña Díez** - [eduadiez](https://github.com/eduadiez)

See also the list of [contributors](https://github.com/dappnode/DNP_ADMIN/contributors) who participated in this project.

### License

This project is licensed under the GNU General Public License v3.0 - see the [LICENSE](LICENSE) file for details

## IPFS 

[![Website dappnode.io](https://img.shields.io/badge/Website-dappnode.io-brightgreen.svg)](https://dappnode.io/)
[![Documentation Wiki](https://img.shields.io/badge/Documentation-Wiki-brightgreen.svg)](https://github.com/dappnode/DAppNode/wiki)
[![GIVETH Campaign](https://img.shields.io/badge/GIVETH-Campaign-1e083c.svg)](https://alpha.giveth.io/campaigns/OcKJryNwjeidMXi9)
[![RIOT DAppNode](https://img.shields.io/badge/RIOT-DAppNode-blue.svg)](https://riot.im/app/#/room/#DAppNode:matrix.org)
[![Twitter Follow](https://img.shields.io/twitter/follow/espadrine.svg?style=social&label=Follow)](https://twitter.com/DAppNODE?lang=es)

<p align="left">
  <img src="https://github.com/dappnode/DNP_IPFS/blob/master/IPFS-min.png" width="200"/>
</p>

Dappnode package responsible for providing IPFS connectivity (go-ipfs v0.4.15)

It is an AragonApp whose repo is deployed at this address: [0x9dc9dc601f8f177ab558bcabde71786f1ea84091](https://etherscan.io/address/0x9dc9dc601f8f177ab558bcabde71786f1ea84091) and whose ENS address is: [ipfs.dnp.dappnode.eth](https://etherscan.io/enslookup?q=ipfs.dnp.dappnode.eth])

### Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

#### Prerequisites

- git

  Install [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) commandline tool.

- docker

  Install [docker](https://docs.docker.com/engine/installation). The community edition (docker-ce) will work. In Linux make sure you grant permissions to the current user to use docker by adding current user to docker group, `sudo usermod -aG docker $USER`. Once you update the users group, exit from the current terminal and open a new one to make effect.

- docker-compose

  Install [docker-compose](https://docs.docker.com/compose/install)

**Note**: Make sure you can run `git`, `docker ps`, `docker-compose` without any issue and without sudo command.

#### Building

```
$ git clone https://github.com/dappnode/DNP_IPFS.git
```

```
$ docker-compose build
or
$ docker build --rm -f build/Dockerfile -t ipfs.dnp.dappnode.eth:dev build
```

### Running

#### Start

```
$ docker-compose up -d
```

#### Stop

```
$ docker-compose down
```

#### Status

```
$ docker-compose ps
```

#### Logs

```
$ docker-compose logs -f
```

#### Run commands

```
$ docker-compose exec ipfs.dnp.dappnode.eth ipfs ...
```

### Generating a tar.xz image

[xz](https://tukaani.org/xz/) is required

```
$ docker save ipfs.dnp.dappnode.eth:dev | xz -e9vT0 > ipfs.dnp.dappnode.eth_x.y.z.tar.xz
```

You can download the latest tar.xz version from here [releases](https://github.com/dappnode/DNP_IPFS/releases).

#### Loading a Docker image

```
$docker load -i ipfs.dnp.dappnode.eth_x.y.z.tar.xz
```

### Contributing

Please read [CONTRIBUTING.md](https://github.com/dappnode/DAppNode/blob/master/CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

### Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/dappnode/DNP_IPFS/tags).

### Authors

- **Eduardo Antuña Díez** - _Initial work_ - [eduadiez](https://github.com/eduadiez)

See also the list of [contributors](https://github.com/dappnode/DNP_IPFS/contributors) who participated in this project.

### License

This project is licensed under the GNU General Public License v3.0 - see the [LICENSE](LICENSE) file for details

### References

[git](https://git-scm.com/)

[docker](https://www.docker.com/)

[docker-compose](https://docs.docker.com/compose/)

[IPFS](https://ipfs.io/)

## Ethchain

<p align="left">
  <img src="https://github.com/dappnode/DNP_ETHCHAIN/blob/master/ETHCHAIN-min.png" width="200"/>
</p>

[![Website dappnode.io](https://img.shields.io/badge/Website-dappnode.io-brightgreen.svg)](https://dappnode.io/)
[![Documentation Wiki](https://img.shields.io/badge/Documentation-Wiki-brightgreen.svg)](https://github.com/dappnode/DAppNode/wiki)
[![GIVETH Campaign](https://img.shields.io/badge/GIVETH-Campaign-1e083c.svg)](https://alpha.giveth.io/campaigns/OcKJryNwjeidMXi9)
[![RIOT DAppNode](https://img.shields.io/badge/RIOT-DAppNode-blue.svg)](https://riot.im/app/#/room/#DAppNode:matrix.org)
[![Twitter Follow](https://img.shields.io/twitter/follow/espadrine.svg?style=social&label=Follow)](https://twitter.com/DAppNODE?lang=es)

Dappnode package responsible for providing the Ethereum blockchain service. 

Actually based on version v2.2.9-stable of [Parity](https://github.com/paritytech/parity/releases/tag/v2.2.9) and compatible with Constantinople postponement. 

It is an AragonApp whose repo is deployed at this address: [0x30a933d920bc4a71a446a0f15f0e80eaf2383fc9 ](https://etherscan.io/address/0x30a933d920bc4a71a446a0f15f0e80eaf2383fc9 ) and whose ENS address is: [ethchain.dnp.dappnode.eth](https://etherscan.io/enslookup?q=ethchain.dnp.dappnode.eth])

### Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

#### Prerequisites

- git

   Install [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) commandline tool.

- docker

   Install [docker](https://docs.docker.com/engine/installation). The community edition (docker-ce) will work. In Linux make sure you grant permissions to the current user to use docker by adding current user to docker group, `sudo usermod -aG docker $USER`. Once you update the users group, exit from the current terminal and open a new one to make effect.

- docker-compose

   Install [docker-compose](https://docs.docker.com/compose/install)
   
**Note**: Make sure you can run `git`, `docker ps`, `docker-compose` without any issue and without sudo command.

#### Building

```
$ git clone https://github.com/dappnode/DNP_ETHCHAIN.git
```

```
$ docker-compose build
or 
$ docker build --rm -f build/Dockerfile -t dnp_ethchain:dev build 
```

### Running

#### Start
```
$ docker-compose up -d
```
#### Stop
```
$ docker-compose down
```
#### Status
```
$ docker-compose ps
```
#### Logs
```
$ docker-compose logs -f
```

**Note**: 
There is a time drift issue on Docker for Mac, to solve it try running [Fixing Time drift issue on Docker for Mac](https://blog.shameerc.com/2017/03/quick-tip-fixing-time-drift-issue-on-docker-for-mac):

```
$ docker run --rm --privileged alpine hwclock -s
```

### Generating a tar.xz image

[xz](https://tukaani.org/xz/) is required 

```
$ docker save dnp_ethchain:dev | xz -e9vT0 > dnp_ethchain_dev.tar.xz
```

You can download the latest tar.xz version from here [releases](https://github.com/dappnode/DNP_ETHCHAIN/releases).

#### Loading a Docker image

```
$docker load -i dnp_ethchain_dev.tar.xz
```

### Contributing

Please read [CONTRIBUTING.md](https://github.com/dappnode/DAppNode/blob/master/CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

### Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/dappnode/DNP_ETHCHAIN/tags). 

### Authors

* **Eduardo Antuña Díez** - *Initial work* - [eduadiez](https://github.com/eduadiez)

See also the list of [contributors](https://github.com/dappnode/DNP_ETHCHAIN/contributors) who participated in this project.

### License

This project is licensed under the GNU General Public License v3.0 - see the [LICENSE](LICENSE) file for details

### References

[git](https://git-scm.com/)

[docker](https://www.docker.com/)

[docker-compose](https://docs.docker.com/compose/)

[Parity](https://www.parity.io/)

## Dappmanager

[![Website dappnode.io](https://img.shields.io/badge/Website-dappnode.io-brightgreen.svg)](https://dappnode.io/)
[![Documentation Wiki](https://img.shields.io/badge/Documentation-Wiki-brightgreen.svg)](https://github.com/dappnode/DAppNode/wiki)
[![GIVETH Campaign](https://img.shields.io/badge/GIVETH-Campaign-1e083c.svg)](https://alpha.giveth.io/campaigns/OcKJryNwjeidMXi9)
[![RIOT DAppNode](https://img.shields.io/badge/RIOT-DAppNode-blue.svg)](https://riot.im/app/#/room/#DAppNode:matrix.org)
[![Twitter Follow](https://img.shields.io/twitter/follow/espadrine.svg?style=social&label=Follow)](https://twitter.com/DAppNODE?lang=es)

<p align="left">
  <img src="https://github.com/dappnode/DNP_DAPPMANAGER/blob/master/DAPPMANAGER-min.png" width="200"/>
</p>

Dappnode package responsible for providing the DappNode Package Manager

It is an AragonApp whose repo is deployed at this address: [0x0c564ca7b948008fb324268d8baedaeb1bd47bce](https://etherscan.io/address/0x0c564ca7b948008fb324268d8baedaeb1bd47bce) and whose ENS address is: [dappmanager.dnp.dappnode.eth](https://etherscan.io/enslookup?q=dappmanager.dnp.dappnode.eth])

### Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

#### Prerequisites

- git

  Install [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) commandline tool.

- docker

  Install [docker](https://docs.docker.com/engine/installation). The community edition (docker-ce) will work. In Linux make sure you grant permissions to the current user to use docker by adding current user to docker group, `sudo usermod -aG docker $USER`. Once you update the users group, exit from the current terminal and open a new one to make effect.

- docker-compose

  Install [docker-compose](https://docs.docker.com/compose/install)

**Note**: Make sure you can run `git`, `docker ps`, `docker-compose` without any issue and without sudo command.

#### Building

```
$ git clone https://github.com/dappnode/DNP_DAPPMANAGER.git
```

```
$ docker-compose build
or
$ docker build --rm -f build/Dockerfile -t dappmanager.dnp.dappnode.eth:dev build
```

### Running

#### Start

```
$ docker-compose up -d
```

#### Stop

```
$ docker-compose down
```

#### Status

```
$ docker-compose ps
```

#### Logs

```
$ docker-compose logs -f
```

**Note**: In case of having the port 8080 occupied, you should change them in the file docker-compose.yml by other.

### Generating a tar.xz image

[xz](https://tukaani.org/xz/) is required

```
$ docker save dappmanager.dnp.dappnode.eth:dev | xz -9 > dappmanager.dnp.dappnode.eth_x.y.z.tar.xz
```

You can download the latest tar.xz version from here [releases](https://github.com/dappnode/DNP_DAPPMANAGER/releases).

#### Loading a Docker image

```
$docker load -i dappmanager.dnp.dappnode.eth.x.y.z.tar.xz
```

### Contributing

Please read [CONTRIBUTING.md](https://github.com/dappnode) for details on our code of conduct, and the process for submitting pull requests to us.

### Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/dappnode/DNP_DAPPMANAGER/tags).

### Authors

- **Eduardo Antuña Díez** - _Initial work_ - [eduadiez](https://github.com/eduadiez)
- **DAppLion** - [dapplion](https://github.com/dapplion)

See also the list of [contributors](https://github.com/dappnode/DNP_DAPPMANAGER/contributors) who participated in this project.

### License

This project is licensed under the GNU General Public License v3.0 - see the [LICENSE](LICENSE) file for details

### References

[git](https://git-scm.com/)

[docker](https://www.docker.com/)

[docker-compose](https://docs.docker.com/compose/)

## Ethforward

[![Website dappnode.io](https://img.shields.io/badge/Website-dappnode.io-brightgreen.svg)](https://dappnode.io/)
[![Documentation Wiki](https://img.shields.io/badge/Documentation-Wiki-brightgreen.svg)](https://github.com/dappnode/DAppNode/wiki)
[![GIVETH Campaign](https://img.shields.io/badge/GIVETH-Campaign-1e083c.svg)](https://alpha.giveth.io/campaigns/OcKJryNwjeidMXi9)
[![RIOT DAppNode](https://img.shields.io/badge/RIOT-DAppNode-blue.svg)](https://riot.im/app/#/room/#DAppNode:matrix.org)
[![Twitter Follow](https://img.shields.io/twitter/follow/espadrine.svg?style=social&label=Follow)](https://twitter.com/DAppNODE?lang=es)

<p align="left">
  <img src="https://github.com/dappnode/DNP_ETHFORWARD/blob/master/ETHFORWARD-min.png" width="200"/>
</p>

Dappnode package responsible for providing .eth address resolve through ENS

It is an AragonApp whose repo is deployed at this address: [0x294888d97308d7ce3445d83d90268b29282863f7](https://etherscan.io/address/0x294888d97308d7ce3445d83d90268b29282863f7) and whose ENS address is: [ethforward.dnp.dappnode.eth](https://etherscan.io/enslookup?q=ethforward.dnp.dappnode.eth)

### Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

#### Prerequisites

- git

  Install [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) commandline tool.

- docker

  Install [docker](https://docs.docker.com/engine/installation). The community edition (docker-ce) will work. In Linux make sure you grant permissions to the current user to use docker by adding current user to docker group, `sudo usermod -aG docker $USER`. Once you update the users group, exit from the current terminal and open a new one to make effect.

- docker-compose

  Install [docker-compose](https://docs.docker.com/compose/install)

**Note**: Make sure you can run `git`, `docker ps`, `docker-compose` without any issue and without sudo command.

#### Building

```
$ git clone https://github.com/dappnode/DNP_ETHFORWARD.git
```

```
$ docker-compose build
or
$ docker build --rm -f build/Dockerfile -t ethforward.dnp.dappnode.eth:dev build
```

### Running

#### Start

```
$ docker-compose up -d
```

#### Stop

```
$ docker-compose down
```

#### Status

```
$ docker-compose ps
```

#### Logs

```
$ docker-compose logs -f
```

**Note**: In case of having the port 8888 occupied, you should change them in the file docker-compose.yml by other.

### Generating a tar.xz image

[xz](https://tukaani.org/xz/) is required

```
$ docker save ethforward.dnp.dappnode.eth:dev | xz -e9vT0 > ethforward.dnp.dappnode.eth_x.y.z.tar.xz
```

You can download the latest tar.xz version from here [releases](https://github.com/dappnode/DNP_ETHFORWARD/releases).

#### Loading a Docker image

```
$docker load -i ethforward.dnp.dappnode.eth_x.y.z.tar.xz
```

### Contributing

Please read [CONTRIBUTING.md](https://github.com/dappnode/DAppNode/blob/master/CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

### Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/dappnode/DNP_ETHFORWARD/tags).

### Authors

- **Jordi Baylina** - _Initial work _ - [jbaylina](https://github.com/jbaylina)
- **Eduardo Antuña Díez** - _Dockerize and improvements_ - [eduadiez](https://github.com/eduadiez)

See also the list of [contributors](https://github.com/dappnode/DNP_ETHFORWARD/contributors) who participated in this project.

### License

This project is licensed under the GNU General Public License v3.0 - see the [LICENSE](LICENSE) file for details

### References

[git](https://git-scm.com/)

[docker](https://www.docker.com/)

[docker-compose](https://docs.docker.com/compose/)

[IPFS](https://ipfs.io/)

[ethforward](https://github.com/jbaylina/ethforward)

## Bind

[![Website dappnode.io](https://img.shields.io/badge/Website-dappnode.io-brightgreen.svg)](https://dappnode.io/)
[![Documentation Wiki](https://img.shields.io/badge/Documentation-Wiki-brightgreen.svg)](https://github.com/dappnode/DAppNode/wiki)
[![GIVETH Campaign](https://img.shields.io/badge/GIVETH-Campaign-1e083c.svg)](https://alpha.giveth.io/campaigns/OcKJryNwjeidMXi9)
[![RIOT DAppNode](https://img.shields.io/badge/RIOT-DAppNode-blue.svg)](https://riot.im/app/#/room/#DAppNode:matrix.org)
[![Twitter Follow](https://img.shields.io/twitter/follow/espadrine.svg?style=social&label=Follow)](https://twitter.com/DAppNODE?lang=es)

<p align="left">
  <img src="https://github.com/dappnode/DNP_BIND/blob/master/BIND-min.png" width="200"/>
</p>

Dappnode package responsible for providing DNS resolution

It is an AragonApp whose repo is deployed at this address: [0xb7e15019b306b9d76068742330e10cdc61bf5006](https://etherscan.io/address/0xb7e15019b306b9d76068742330e10cdc61bf5006) and whose ENS address is: [bind.dnp.dappnode.eth](https://etherscan.io/enslookup?q=bind.dnp.dappnode.eth])

### Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

#### Prerequisites

- git

  Install [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) commandline tool.

- docker

  Install [docker](https://docs.docker.com/engine/installation). The community edition (docker-ce) will work. In Linux make sure you grant permissions to the current user to use docker by adding current user to docker group, `sudo usermod -aG docker $USER`. Once you update the users group, exit from the current terminal and open a new one to make effect.

- docker-compose

  Install [docker-compose](https://docs.docker.com/compose/install)

**Note**: Make sure you can run `git`, `docker ps`, `docker-compose` without any issue and without sudo command.

#### Building

```
$ git clone https://github.com/dappnode/DNP_BIND
```

```
$ docker-compose build
or
$ docker build --rm -f build/Dockerfile -t bind.dnp.dappnode.eth:dev build
```

### Running

#### Start

```
$ docker-compose up -d
```

#### Stop

```
$ docker-compose  down
```

#### Status

```
$ docker-compose  ps
```

#### Logs

```
$ docker-compose  logs -f
```

#### Testing

The mission of this repo by itself is only to check the functionality provided by the bind service.

For this, once it has been started, you can run the below command to check that it resolves the expected address:

```
eduadiez~ $ dig @172.33.1.2 bind.dappnode.eth

; <<>> DiG 9.9.4-RedHat-9.9.4-61.el7_5.1 <<>> @172.33.1.2 bind.dappnode.eth
; (1 server found)
;; global options: +cmd
;; Got answer:
;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 8657
;; flags: qr aa rd ra; QUERY: 1, ANSWER: 1, AUTHORITY: 0, ADDITIONAL: 1

;; OPT PSEUDOSECTION:
; EDNS: version: 0, flags:; udp: 4096
;; QUESTION SECTION:
;bind.dappnode.eth.		IN	A

;; ANSWER SECTION:
bind.dappnode.eth.	38400	IN	A	172.33.1.3

;; Query time: 2 msec
;; SERVER: 172.33.1.2#53(172.33.1.2)
;; WHEN: Sun Oct 07 11:39:18 CEST 2018
;; MSG SIZE  rcvd: 62

```

### Generating a tar.xz image

[xz](https://tukaani.org/xz/) is required

```
$ docker save bind.dnp.dappnode.eth:dev | xz -e9vT0 > bind.dnp.dappnode.eth_x.y.z.tar.xz
```

You can download the latest tar.xz version from here [releases](https://github.com/dappnode/DNP_BIND/releases).

#### Loading a Docker image

```
$docker load -i bind.dnp.dappnode.eth_x.y.z.tar.xz
```

### Contributing

Please read [CONTRIBUTING.md](https://github.com/dappnode) for details on our code of conduct, and the process for submitting pull requests to us.

### Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/dappnode/DNP_BIND/tags).

### Authors

- **Eduardo Antuña Díez** - _Initial work_ - [eduadiez](https://github.com/eduadiez)

See also the list of [contributors](https://github.com/dappnode/DNP_BIND/contributors) who participated in this project.

### License

This project is licensed under the GNU General Public License v3.0 - see the [LICENSE](LICENSE) file for details

### References

[git](https://git-scm.com/)

[docker](https://www.docker.com/)

[docker-compose](https://docs.docker.com/compose/)

[BIND](https://www.isc.org/downloads/bind/)

## WAMP

[![Website dappnode.io](https://img.shields.io/badge/Website-dappnode.io-brightgreen.svg)](https://dappnode.io/)
[![Documentation Wiki](https://img.shields.io/badge/Documentation-Wiki-brightgreen.svg)](https://github.com/dappnode/DAppNode/wiki)
[![GIVETH Campaign](https://img.shields.io/badge/GIVETH-Campaign-1e083c.svg)](https://alpha.giveth.io/campaigns/OcKJryNwjeidMXi9)
[![RIOT DAppNode](https://img.shields.io/badge/RIOT-DAppNode-blue.svg)](https://riot.im/app/#/room/#DAppNode:matrix.org)
[![Twitter Follow](https://img.shields.io/twitter/follow/espadrine.svg?style=social&label=Follow)](https://twitter.com/DAppNODE?lang=es)

<p align="left">
  <img src="https://github.com/dappnode/DNP_WAMP/blob/master/WAMP-min.png" width="200"/>
</p>

Dappnode package responsible for providing a WAMP communication using [crossbar.io](https://crossbar.io/)

### Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

#### Prerequisites

- git

  Install [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) commandline tool.

- docker

  Install [docker](https://docs.docker.com/engine/installation). The community edition (docker-ce) will work. In Linux make sure you grant permissions to the current user to use docker by adding current user to docker group, `sudo usermod -aG docker $USER`. Once you update the users group, exit from the current terminal and open a new one to make effect.

- docker-compose

  Install [docker-compose](https://docs.docker.com/compose/install)

**Note**: Make sure you can run `git`, `docker ps`, `docker-compose` without any issue and without sudo command.

#### Building

```
$ git clone https://github.com/dappnode/DNP_WAMP.git
```

```
$ docker-compose build
or
$ docker build --rm -f build/Dockerfile -t wamp.dnp.dappnode.eth:dev build
```

### Running

#### Start

```
$ docker-compose up -d
```

#### Stop

```
$ docker-compose down
```

#### Status

```
$ docker-compose ps
```

#### Logs

```
$ docker-compose logs -f
```

**Note**: In case of having the port 8080 occupied, you should change them in the file docker-compose.yml by other.

### Generating a tar.xz image

[xz](https://tukaani.org/xz/) is required

```
$ docker save wamp.dnp.dappnode.eth:dev | xz -9 > wamp.dnp.dappnode.eth_x.y.z.tar.xz
```

You can download the latest tar.xz version from here [releases](https://github.com/dappnode/WAMP.DNP.DAPPNODE.ETH/releases).

#### Loading a Docker image

```
$docker load -i wamp.dnp.dappnode.eth_x.y.z.tar.xz
```

### Contributing

Please read [CONTRIBUTING.md](https://github.com/dappnode) for details on our code of conduct, and the process for submitting pull requests to us.

### Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/dappnode/DNP_WAMP/tags).

### Authors

- **Eduardo Antuña Díez** - _Initial work_ - [eduadiez](https://github.com/eduadiez)

See also the list of [contributors](https://github.com/dappnode/DNP_WAMP/contributors) who participated in this project.

### License

This project is licensed under the GNU General Public License v3.0 - see the [LICENSE](LICENSE) file for details

### References

[git](https://git-scm.com/)

[docker](https://www.docker.com/)

[docker-compose](https://docs.docker.com/compose/)

[crossbar.io](https://crossbar.io/)

## OTP

[![Website dappnode.io](https://img.shields.io/badge/Website-dappnode.io-brightgreen.svg)](https://dappnode.io/)
[![Documentation Wiki](https://img.shields.io/badge/Documentation-Wiki-brightgreen.svg)](https://github.com/dappnode/DAppNode/wiki)
[![GIVETH Campaign](https://img.shields.io/badge/GIVETH-Campaign-1e083c.svg)](https://alpha.giveth.io/campaigns/OcKJryNwjeidMXi9)
[![RIOT DAppNode](https://img.shields.io/badge/RIOT-DAppNode-blue.svg)](https://riot.im/app/#/room/#DAppNode:matrix.org)
[![Twitter Follow](https://img.shields.io/twitter/follow/espadrine.svg?style=social&label=Follow)](https://twitter.com/DAppNODE?lang=es)

DAppNode tool responsible for helping users connect to DAppNode.

### Usage

Get a valid link with credentials from your DAppNode administrator or get your own on my. To get sample instructions follow this [link](https://dappnode.github.io/DAppNode_OTP/#otp=eyJzZXJ2ZXIiOiJTRVJWRVJfSVAiLCJuYW1lIjoiU0VSVkVSX05BTUUiLCJ1c2VyIjoiVlBOX1VTRVIiLCJwYXNzIjoiVlBOX1BBU1NXT1JEIiwicHNrIjoiU0VSVkVSX1BTSyJ9).

### Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

#### Prerequisites

- git

   Install [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) commandline tool.

#### Building

```
$ git clone https://github.com/dappnode/DAppNode_OTP.git
```

```
$ cd DAppNode_OTP/
$ npm install
```

#### Running

```
$ npm start
```

### Contributing

Please read [CONTRIBUTING.md](https://github.com/dappnode) for details on our code of conduct, and the process for submitting pull requests to us.

### Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/dappnode/DAppNode_OTP/tags).

### Authors

* **DAppLion** - [dapplion](https://github.com/dapplion)

See also the list of [contributors](https://github.com/dappnode/DAppNode_OTP/contributors) who participated in this project.

### License

This project is licensed under the GPLv3 License - see the [LICENSE](LICENSE) file for details

## Dyndns-server

A Dynamic DNS server implementation for DAppNode.

In most of the cases, nodes running at home are using a dynamic IP provided by the ISP. Clients configured to connect to a provided IP will eventually lose connectivity to the DAppNode because its IP will change. At the moment we don't have any truly distributed, cross-platform and user friendly alternative to solve this, so we make use of an optional centralized service (which can be easily replicated) until we find a proper solution.

### Installation

Configure variables in docker-compose.yml to fit your needs.

Then the services can be deployed using docker compose:

```
$ docker-compose build
$ docker-compose up -d
```

### Usage

The server expects the following parameters in a GET call from the client:

`address` Public Ethereum address generated in the client.

`timestamp` Current UNIX timestamp. If the timestamp is not under some tolerance window (by default +/- 10min.) the request is not valid.

`sig` Signature of the timestamp by the address previously provided.

### Client request example

```
curl https://ns.dappnode.io/?address=0x8bb3A7F48F8c684EEF5BbE56c4c49c3Df636cd02&timestamp=1537958488&sig=0x97e9c5bfb4e46f73b0ef570a69f5fb39c6576b456506f4015bd0b64a4cd62a6b7a5278cbd3e070c4ce3177a8fbbe72801680b10c1384a6dcc8c369ec3f6ceeb31b
```

### Todo

* Disable logs completely in every component, so the dyndns-server doesn't store any information about existing DAppNodes.

## WIFI 

<p align="left">
  <img src="https://github.com/dappnode/DNP_WIFI/blob/master/WIFI-min.png" width="200"/>
</p>

[![Website dappnode.io](https://img.shields.io/badge/Website-dappnode.io-brightgreen.svg)](https://dappnode.io/)
[![Documentation Wiki](https://img.shields.io/badge/Documentation-Wiki-brightgreen.svg)](https://github.com/dappnode/DAppNode/wiki)
[![GIVETH Campaign](https://img.shields.io/badge/GIVETH-Campaign-1e083c.svg)](https://alpha.giveth.io/campaigns/OcKJryNwjeidMXi9)
[![RIOT DAppNode](https://img.shields.io/badge/RIOT-DAppNode-blue.svg)](https://riot.im/app/#/room/#DAppNode:matrix.org)
[![Twitter Follow](https://img.shields.io/twitter/follow/espadrine.svg?style=social&label=Follow)](https://twitter.com/DAppNODE?lang=es)

Dappnode package responsible for providing wifi access to the internal network.

It is an AragonApp whose repo is deployed at this address: [0xbb0fe4bcc05d83617ff29219e46a7834be9496d7](https://etherscan.io/address/0xbb0fe4bcc05d83617ff29219e46a7834be9496d7) and whose ENS address is: [wifi.dnp.dappnode.eth](https://etherscan.io/enslookup?q=wifi.dnp.dappnode.eth])

### Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

#### Prerequisites

- git

  Install [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) commandline tool.

- docker

  Install [docker](https://docs.docker.com/engine/installation). The community edition (docker-ce) will work. In Linux make sure you grant permissions to the current user to use docker by adding current user to docker group, `sudo usermod -aG docker $USER`. Once you update the users group, exit from the current terminal and open a new one to make effect.

- docker-compose

  Install [docker-compose](https://docs.docker.com/compose/install)

**Note**: Make sure you can run `git`, `docker ps`, `docker-compose` without any issue and without sudo command.

#### Building

```
$ git clone https://github.com/dappnode/DNP_WIFI.git
```

```
$ docker-compose build
or
$ docker build --rm -f build/Dockerfile -t wifi.dnp.dappnode.eth:dev build
```

### Running

#### Start

```
$ docker-compose up -d
```

#### Stop

```
$ docker-compose down
```

#### Status

```
$ docker-compose ps
```

#### Logs

```
$ docker-compose logs -f
```

### Generating a tar.xz image

[xz](https://tukaani.org/xz/) is required

```
$ docker save wifi.dnp.dappnode.eth:dev | xz -e9vT0 > wifi.dnp.dappnode.eth_x.y.z.tar.xz
```

You can download the latest tar.xz version from here [releases](https://github.com/dappnode/DNP_WIFI/releases).

#### Loading a Docker image

```
$docker load -i wifi.dnp.dappnode.eth_x.y.z.tar.xz
```

### Contributing

Please read [CONTRIBUTING.md](https://github.com/dappnode/DAppNode/blob/master/CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

### Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/dappnode/DNP_WIFI/tags).

### Authors

- **Eduardo Antuña Díez** - _Initial work_ - [eduadiez](https://github.com/eduadiez)

See also the list of [contributors](https://github.com/dappnode/DNP_WIFI/contributors) who participated in this project.

### License

This project is licensed under the GNU General Public License v3.0 - see the [LICENSE](LICENSE) file for details

### References

[git](https://git-scm.com/)

[docker](https://www.docker.com/)

[docker-compose](https://docs.docker.com/compose/)

[Parity](https://www.parity.io/)

## DAppNode SDK

DAppNode SDK is a tool to make as simple as possible the creation of new dappnode packages. It helps to initialize and publish an Aragon Package Manager Repo in the ethereum mainnet.

We have deployed a public APM (Aragon Package Manager) registry in which anyone can create their own APM repository: [public.dappnode.eth](https://etherscan.io/address/public.dappnode.eth)

### Install 

```
$ npm install -g @dappnode/dappnodesdk
```

### DEMO

<p align="center"><img src="https://github.com/dappnode/DAppNodeSDK/blob/master/img/demo.gif"/></p>

### Initialization
```
$ dappnodesdk init
```

### build 
Only generates the IPFS Hash to be able to install it without needing to create the APM Repo
```
$ dappnodesdk build
```

### Publish 
It does the build of the image and shows the necessary transaction to be able to publish the package. The first time will create the repository but the rest will be updates of it.

__To be able to update a repository you must be the authorized dev.__

the script increases the current version of the repository based on the specified type (patch, minor, major), unless a version hasn't yet been published

for more information about versioning check [semver](https://semver.org/)

```
$ dappnodesdk publish < patch | minor | mayor >
```
Please take in account that the package version is not the internal version of the package you want to upload. 
We use Aragon package manager, and it only lets starting with version 1 and increment one by one. Valid initial versions are 1.0.0, 0.1.0 or 0.0.1

### License

This project is licensed under the GNU General Public License v3.0 - see the [LICENSE](LICENSE) file for details


