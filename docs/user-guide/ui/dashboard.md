# Dashboard View

When you first enter the Admin UI, you will see a link to a survey made to tell us how the installation went and provide your insights about the process. We greatly appreciate this feedback in order to help us to make a better product.

By clicking “Dashboard” you can have a fast look to your server state, if you want to check the overall status and functioning click on the report button at the top right corner.

1. Tabs area

2. Name of the server / IP / DynDNS

3. Sync State

4. Server Stats

5. Size of ETHCHAIN and IPFS volumes

6. Fast access to sync state

7. Notifications area

8. Autodiagnose tool / Report Issue

TODO: add image witht he new dashboard

> :warning: IMPORTANT NOTE ON SERVER STATS: if you note that the disk capacity is getting near to 100 % you should disable services to avoid the disk getting full. If this happens the DAppNode will get unfunctional, and you will not be able to erase packages once the memory is at 100%

To avoid this, non core packages will be automatically stopped when there is less than 5 Gbs left, IPFS will be automatically stopped when there is less than 1 GB available. If by any chance your DAppNode server gets to 100 % busy disk space, it will become unworkable from the ADMIN UI and you will have to erase containers/volumes manually from the commmand line of your server.
