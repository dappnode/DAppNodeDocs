---
sidebar_position: 4
---

# DAppStore View

## What is the DAppStore?

DAppStore is the place where you can look for, install and update the package you want.

You can access the DAppStore view clicking on the DAppStore option which appears on the left menu on the UI. You should see something similar to this image:

<p align="center">
    <img src="../../../../img/dappstore_view.png"/>
</p>

The main tasks you can do here are:

- Look for a package
- Install a package
- Update a package manually

## How to look for a package?

There are 2 ways of using this view for searching a package:

- Using the GUI(Graphical User Interface)
- Using the navigation bar

### GUI (Graphical User Interface)

The main view of the DAppStore shows the packages you can install.

<p align="center">
    <img src="../../../../img/installing_a_package_1.png"/>
</p>

Every of this card represents a package, the information you can obtain from that is the next:

- **Name**: Name of the package
- **Blue ticker**: Indicate this package has been built and uploaded to DAppNode by the DAppNode association and are maintained by DAppNode, you will find a blue ticker in the DAppNode Association Verified packages.(To obtain more information about the kind of packages, read the apart Kind of packages)
- **Description**: Define what the packages does.
- **Button**: This button can have several values: **GET** indicates you can install the package, **UPDATE** let you update the package manually and **UPDATED** will show in case the version of the package is the last one.

### Navigation Bar

You can use this bar to look for the package by its name or its IPFS Hash.

<p align="center">
    <img src="../../../../img/dappstore_nav_bar.png"/>
</p>

## Install a package

Once you have located the package you want to install. Click on the **GET** button. You will be redirected to the next view:

<p align="center">
    <img src="../../../../img/installing_a_package_2.png"/>
</p>

On this view you can observe the next information about the package:

- **DESCRIPTION**: it is a short explanation of the package.
- **DETAILS**: it is a long description of the package.
- **SIZE**: the size of the package. (It's different to how much space requires the package to work)
- **VERSION**: the first number indicates the DAppNode package version, the second one is the official version.

If you want to install de package, click on the **INSTALL** button.

Some packages required an extra step before installing where you have to set up some parameters. In this cases, every package is "unique" so we can't explain a generic way to fill these parameters.

## Kind of packages

### DAppNode Association Verified Packages

These packages have been built and uploaded to DAppNode by the DAppNode association and are maintained by DAppNode, you will find a blue ticker in the DAppNode Association Verified packages.

### Non verified packages

Packages without the blue ticker have been developed and uploaded by third parties. DAppNode association is not maintaining these package and has not performed any audit on its content. Use them at your own risk. DAppNode will not be liable for any loss or damage produced by the use of any package within the installer.

## Common Errors

### I can't see any package on the DAppStore

This can happen if the ethereum node of your DAppNode is not synced and the remote sync is turned off.
