---
llm_description: "Hardware maintenance tips: airflow, dust cleaning, and thermal paste replacement procedures."
---

# Maintenance

This section will cover four different approaches to servicing your hardware. The order is by level of difficulty from easiest to hardest. Remember that if you have any questions they're always welcome in our [Discord server](https://discord.gg/dappnode).

:::info
💡 Keep in mind these have different levels of difficulty, and if you're hesitant about trying them you should find a professional to give you a hand. Hardware is delicate and if mishandled it can cause permanent damage to your Dappnode, so proceed with caution.
:::

### 1. Air Flow

One of the key elements to keep your Dappnode's performance optimal is where you place it. There's this myth about air conditioning or cool air being able to lower your devices' temperatures, however constant **air flow** is much more important than the temperature of the air itself. We recommend picking a place for your Dappnode that will favor this, and where the heat it produces won't stay in the same room and raise the atmosphere temperature. An open room with windows is great for this, so you should avoid closets or small storage rooms. If your Dappnode is still struggling to keep its temperature low, try removing the upper lid. It won't look as pretty, but it'll get the job done!

### 2. Dust cleaning

Dust is the enemy of electronics. It can cause overheating and short circuits, so it's important to keep your Dappnode clean. The best way to do this is by using a can of compressed air (also called air dusters), which you can find in any hardware store.

These cans are very helpful to get your Dappnode's insides clean. You can do this by carefully oppening the bottom metal lid. Loosen its four screws and be specially careful when lifting it, as there's a SATA ribbon cable attached to the NUC's board and the metal lid that can be damaged if handled roughly.

For diving into the actual cleaning of your Dappnode, try to be in an outside location when performing this dust cleaning process. Keep your Dappnode safe from humidity or extreme direct temperatures. Carefully place the can of duster in a vertical position for starting the cleaning process. Always point the airstream somewhere other than your device when starting to use it, as these release liquid for a brief period of time sometimes. After you've made sure the duster is working as expected, start blowing at the smaller spaces in the board and gradually moving to the more general area of your hardware without getting the tip of the duster to close to the circuits. Make sure the fans don't have big chunks of dust that prevent them from working properly.

When done, put the bottom metal lid back on and screw it back without leaving it too tight.

### 3. Thermal Paste Change

Your CPU has a heatsink right above it that helps dissipate heat. To facilitate this transfer of heat effectively, thermal paste is applied between the CPU's top plate and the heatsink. Over time, the thermal paste can degrade or dry out, leading to reduced thermal conductivity and potentially higher operating temperatures for the CPU.

To replace the thermal paste, start by powering down your dappnode, removing the heatsink, and cleaning both the CPU surface and the heatsink thoroughly with rubbing alcohol. Then, apply a small amount of fresh thermal paste onto the center of the CPU (Be careful not to use too much, as excess paste can lead to inefficient heat transfer), reattach the heatsink carefully, and ensure all connections are secure before powering it back on. Monitoring temperatures post-replacement ensures optimal performance and cooling efficiency. You can learn how to monitor it in [**Temperature**](/docs/user/hardware/temperature) section.
