---
sidebar_position: 9
---

# Support View

## Autodiagnose

In this screen you will have an overview of the functioning of your DAppNode with checks that will indicate you if there is any problem for the normal operation of your DAppNode. You can contribute to DAppNode´s improvement by opening issues directly from the ADMIN UI.

<p align="center">
    <img src="../../../../img/support_view_auto-diagnose.png"/>
</p>

## Report

When you click the "Report" tab you will chave the option of sending the issue with a prepopulated form that will be automatically loaded in the report screen. You can also choose to open the issue without any data. There are 2 types of scan.

<p align="center">
    <img src="../../../../img/support_view_report.png"/>
</p>

## Ports

This functionality let the user know the status of the port of its DAppNode, sometimes know certainly this status can be hard. Because of that, this feature was implemented.

<p align="center">
    <img src="../../../../img/support_view_port_scan.png"/>
</p>

In this view you will be able to know:

- Which ports need to be opened deppending on the services you have
- **Wich service** is demmanding each port
- **Port status**: open, closed and unknown
- **Port protocol**: TCP and UDP

### UPnP Scan

If your DAppNode is not on a VPS, you should have the option to execute a UPnP scan. Take into account that this scan may fail since each router has different specifications and may no response to DAppNode requests.

### API Scan

Due to the uncertainty of the UPnP scan, an external service has been created that performs a TCP port scan. This scan will throw “unknow” status for UDP ports.

Almost with total security the UDP ports will have the same status as the TCP ports scanned with the API scan.

Note: The UDP protocol ports cannot be scanned without prior settings on the router.

## Activity

This tab allows easy access to the DAppNode logs in order to debug errors. We work hard to make this tab irrelevant to you, but for the time being, if you are experiencing any issue, these logs will help our support team help you identify and fix any problem. You will also find a button to download a log report file.

<p align="center">
    <img src="../../../../img/support_activity.png"/>
</p>
