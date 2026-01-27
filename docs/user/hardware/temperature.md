---
llm_description: "How to monitor CPU temperature via dashboard and configure temperature alerts."
---

# Temperature

Keeping a close eye to your Dappnode's temperature is part of the Node Runner's basic good practices. Dappnode provides you with metrics 📊 in the [main dashboard](http://my.dappnode/dashboard) to do so.

<p align="center">
    <img width="100%" src="/img/temp_dashboard.png" alt="CPU_temp"/>
</p>

If you want to configure notifications 🔔 for temperature changes, you can find two options:

1. In the [DMS Dashboard](http://dms.dappnode/dashboards) you'll be able to configure Grafana notifications.
2. You can also set [Ethical Metrics](http://my.dappnode/system/notifications) up to get email notifications while keeping your privacy.

Some additional tips that will contribute to an optimal temperature are:

- BIOS Adjustments: if you shut your Dappnode down you can access your NUC's BIOS setup with the `F2` key while booting. The UI includes different options that you can check in [Intel's documentation](https://www.intel.com/content/www/us/en/support/articles/000096279/intel-nuc.html) and tweak according to your preferences.
- If you're using an 11th Generation NUC, check its ambient temperature recommendations [here](https://www.intel.com/content/dam/support/us/en/documents/intel-nuc/NUC11AT_TechProdSpec.pdf).
- If you're using a 12th Generation NUC, check its ambient temperature recommendations [here](https://www.intel.com/content/dam/support/us/en/documents/intel-nuc/NUC12WSK_L10_UserGuide.pdf).
