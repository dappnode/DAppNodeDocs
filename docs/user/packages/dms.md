# Understanding the DappNode Monitoring Service (DMS)

As a DappNode user, there are times when having insights into the performance of your packages or your whole system can be incredibly beneficial. This means understanding the condition or "health" of your packages, the utilization of your computer resources such as CPU, RAM, and disk space, as well as monitoring network traffic flow. Yet, managing all of these aspects can become complex and tedious, even for those with experience. This is precisely where the DappNode Monitoring Service (DMS) steps in to simplify matters.

## How It All Works

DMS acts as a strong monitoring solution, simplifying the complex task of monitoring your packages and system by automatically collecting all available data and visualizing it for you. But how does it achieve this? DMS primarily comprises two key components: Prometheus and Grafana. Let's break it down

1. **Prometheus Integration:** DMS seamlessly incorporates [Prometheus](https://prometheus.io/), a comprehensive monitoring toolkit. Prometheus is responsible of  gathering all data coming from other dappnode packages. This information is the foundation for understanding your package's performance.

2. **Grafana Dashboards:** To transform raw data coming from Prometheus into meaningful insights, DMS brings in [Grafana](https://grafana.com/), renowned for its exceptional data visualization capabilities. Through customizable dashboards, you gain instant access to both real-time and historical perspectives on how your packages are functioning. 

:::info
💡 While DMS can monitor data from your installed packages on its own, we highly recommend installing the **Dappnode Exporter** package as well. This package expands DMS's capabilities to monitor critical DappNode system metrics, such as network traffic, CPU, RAM, and disk usage. Moreover, it unlocks new Grafana dashboards that visualize this data for your convenience. You can easily find the Dappnode Exporter in your DAppStore.
:::

**Your Privacy Matters:**

At DappNode, we respect your privacy. Rest assured that all the metrics collected by DMS are stored locally, ensuring your information remains private and secure.

## Installing and accessing DMS

Locate DMS in your DAppStore, listed among the Featured packages. The installation process is straightforward, much like any other DappNode package. After installation, you can access DMS Grafana and explore all its dashboards by visiting http://dms.dappnode.

## Monitoring through Dashboards

As explained in the [official Grafana documentation](https://grafana.com/docs/grafana/latest/dashboards/), Grafana simplifies data visualization through organized views known as dashboards. In the context of DappNode, many packages, especially our staker packages, come equipped with pre-built Grafana dashboards that seamlessly integrate into DMS upon installation. These dashboards are designed to provide specific insights into the performance of the corresponding packages. To explore the range of available Grafana dashboards within DMS, follow these simple steps:


1. **Accessing Dashboards:** Find the "Dashboards" icon on the left-hand side of the DMS interface and hover your mouse over it. Click on "Browse" to proceed.
<div style={{textAlign: 'center'}}>

   ![Browse Dashboards](/img/dms-browse-dashboards.png)
</div>

2. **Dashboard Folders:** In the dashboard browsing view, you'll see different dashboard folders. Each folder contains one or more dashboards related to specific aspects of your DappNode environment. For instance, let's click on the "Docker" dashboard provided by the **Dappnode Exporter** package.

   ![Dashboard Folders](/img/dms-dashboards-page.png)

3. **Exploring a Dashboard:** That's it! You are now within the chosen dashboard, such as the "Docker" dashboard. Here, you'll find valuable information about all your installed packages, including relevant metrics and performance indicators.

   ![Docker Dashboard](/img/dms-docker-dashboard.png)

As you navigate through these Grafana dashboards, it's worth mentioning that the [official Grafana documentation](https://grafana.com/docs/grafana/latest/) provides a wealth of information about dashboards, visualization techniques, and best practices. Exploring this documentation can greatly enhance your ability to interpret and utilize the data presented in DMS dashboards. Whether you're new to Grafana or seeking advanced tips, the official documentation is a valuable resource for maximizing your monitoring experience.

:::info
💡 If you're looking for specific dashboards beyond what comes pre-installed, [Grafana's dashboard repository](https://grafana.com/grafana/dashboards/) makes it easy to search and import dashboards created by the community.
:::

Feel free to check out the different dashboard folders and adjust how things look based on what you like. Grafana offers a bunch of cool features, so have fun exploring and making the dashboards work just right for you!

