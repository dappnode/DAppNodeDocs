---
llm_description: "ARM installation guide using script method, plus instructions to add external SSD storage."
---

# Install - ARM

## Hardware Recommendations

- 8 Gb RAM memory
- Screen and keyboard (Only for the first installation)
- Wired connection to the Dappnode

## Install Dappnode via Script

Follow the instructions you can find in [Script Installation](/docs/user/install/script)

## Add an external SSD

In case you have installed Dappnode in a Raspberry using a SD card and you want to add an external SSD you should mount docker data in it. To do this, follow the next steps:

- Stop Docker service
  `systemctl stop docker`

- Create a new mountpoint for docker data. As an example:
  `mkdir /data`

- Add your partition on the new device to `/etc/fstab`. You can identify its UUID using the `blkid` tool. Make sure your device is properly partitioned first. Your line in `/etc/fstab` should look like this:
  `UUID=b311b983-bda6-4e9f-835c-266d40d64f07 /data/ ext4 defaults 0 0`

- Mount your SSD drive
  `mount /data`

- Move docker data to the mountpoint
  `mv /var/lib/docker/* /data/`

- Edit Docker settings to use the alternative location. Edit `/etc/docker/daemon.json` as follows:

```json
{
  "data-root": "/data"
}
```

- Restart docker

`systemctl start docker`
