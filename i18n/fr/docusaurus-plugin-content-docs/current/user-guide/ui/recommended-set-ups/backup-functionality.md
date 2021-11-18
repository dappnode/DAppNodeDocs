---
sidebar_position: 3
---

# Backup Functionality

## What is a backup and why is important to do regular backups?

When you make a backup of a package on DAppNode, you will download a compressed file that contains the sensitive data of the package, this information depends on the package. Usually, this information is relative to keys or some kind of identification.

It's important making backups of the important packages because in case the data is corrupted, the DAppNode machine is broken, or any catastrophe. If you have a backup, you will not have a problem to back to the situation before the catastrophe.

We recommend to do backups regularly, and always if there is an important update, before and after.

## How to do a backup?

The DAppNode user interface let you to do a backup of the package you want on a easy way.
We will show how to do it step by step:

1. Firstly, you need to go to Packages view. Selecting the Packages item on the left menu.

<p align="center">
    <img src="../../../../img/backup-functionality_1.png"/>
</p>

2. Select one package that have sensitive information. For example, bee package. Click on the name of the package you want to do the backup, and select the **Backup** tab.

<p align="center">
    <img src="../../../../img/backup-functionality_2.png"/>
</p>

3. Click on the **Backup now** button.

<p align="center">
    <img src="../../../../img/backup-functionality_3.png"/>
</p>

4. You will see a pop up where you can choose where to store the compressed file with your backup file.

<p align="center">
    <img src="../../../../img/backup-functionality_4.png"/>
</p>

And **that's all**, you have a backup that package, in this example I would have a backup of my bee package.

## How to restore your data from a backup

Once you have learnt how to do a backup, it's so important know how to use this backup file to restore your configuration.

> :warning: Bee package is so because when you start the package first time, internally it creates an ethereum address, so if you don't save these keys and address in someplace you can't recover the access to that created address, in other packages like Prysm you could set up the package as before if you have the 24 words, but you had to set up the package, UI, etc. What we want you to say is every package works differently. But bee package is a good example to release how important is to do backups of your important packages.

Following the same example above, let's imagine that my be package crashed and all its data is damaged. I could set up my package the same way before only if I did a backup.

1. Go to the view of the package, in this case, Packages > Bee > Backup and click on the **Restore** button:

<p align="center">
    <img src="../../../../img/backup-functionality_5.png"/>
</p>

2. It will appear a pop up asking you select your backup file, you have to select the same compressed file you download when you do the backup, as simple as that.

<p align="center">
    <img src="../../../../img/backup-functionality_6.png"/>
</p>

After this two steps, you would have restore your package.
