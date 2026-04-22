---
title: "UI Telemetry"
llm_description: "Explains what anonymous frontend telemetry data Dappnode collects, how it flows through a proxy to Grafana Cloud, and how to enable or disable it."
---

# UI Telemetry

Dappnode collects **optional, anonymous frontend telemetry** from the Dappnode UI to help improve the product. This telemetry is powered by the [Grafana Faro Web SDK](https://github.com/grafana/faro-web-sdk/), an open-source frontend observability library.

:::caution
UI Telemetry is **disabled by default**. No data is sent until you explicitly enable it in the Dappnode settings. You are always in control.
:::

## Why We Collect Telemetry

This telemetry data helps the Dappnode team:

- **Improve product performance** — identify slow pages, rendering bottlenecks, and resource loading issues in real-world conditions
- **Help users in support** — inspect error logs and traces to diagnose issues faster when users report problems
- **Identify and fix UI bugs** — detect unhandled exceptions and crashes that users may not report
- **Prioritize development efforts** — understand which pages and features are most used so we can focus on what matters most

## Architecture Overview

Every Dappnode user who has telemetry enabled sends metrics from their browser to a **proxy server** operated by Dappnode. The proxy applies filtering and security checks before forwarding the data to **Grafana Cloud** for visualization and processing.

```
┌──────────────────┐       ┌──────────────────────────────────┐       ┌───────────────┐
│  Dappnode UI     │──────▶│  Proxy                           │──────▶│ Grafana Cloud │
│  (your browser)  │ HTTPS │  grafana-cloud-proxy.dappnode.net│       │ (storage &    │
│                  │       │  filtering & security layer      │       │  dashboards)  │
└──────────────────┘       └──────────────────────────────────┘       └───────────────┘
```

:::info
The proxy acts as a security and filtering layer between your browser and Grafana Cloud. Your Dappnode UI never communicates directly with Grafana Cloud — all telemetry goes through the Dappnode-operated proxy first.
:::

## What Data Is Collected

The following sections describe each category of data collected by the Faro SDK with the current Dappnode configuration.

### Errors & Exceptions

Unhandled JavaScript errors and rejected promises are automatically captured. This includes:

- **Error message** and **error type**
- **Stack trace** (file name, line number, column number)
- The browser's `window.onerror` and `onunhandledrejection` events

This helps the team detect crashes and bugs that occur in production, even when users don't report them.

### Console Logs

The SDK captures browser console messages at the `console.error` and `console.warn` levels. These provide context around errors and help diagnose issues.

:::note
Lower-level console methods (`console.log`, `console.debug`, `console.trace`) are **not captured** by default.
:::

### Web Vitals (Performance Metrics)

[Web Vitals](https://web.dev/vitals/) are industry-standard metrics that measure real-user experience. The following are collected:

| Metric                              | What it measures                                                    |
| ----------------------------------- | ------------------------------------------------------------------- |
| **TTFB** (Time to First Byte)       | How long until the browser receives the first byte from the server  |
| **FCP** (First Contentful Paint)    | How long until the first text or image appears on screen            |
| **LCP** (Largest Contentful Paint)  | How long until the largest visible element finishes rendering       |
| **FID** (First Input Delay)         | Delay between a user's first interaction and the browser's response |
| **INP** (Interaction to Next Paint) | Responsiveness across all interactions during the session           |
| **CLS** (Cumulative Layout Shift)   | How much unexpected layout movement occurs on the page              |

### Navigation & Resource Performance

The SDK automatically tracks page load and resource fetch performance, including:

- **Page load timing** — total load time, DOM parsing time, DOM processing time, time to first byte
- **Resource timing** — load duration of JavaScript, CSS, images and other assets (DNS lookup, TCP handshake, TLS negotiation, request/response time)

This data helps identify slow-loading pages and bottleneck resources.

### Session Tracking

An **anonymous session ID** is generated and stored in your browser's `localStorage` to group related events together. This allows the team to understand sequences of errors or performance issues within a single session.

- Sessions have a **maximum lifetime of 4 hours**
- Sessions expire after **15 minutes of inactivity**
- Session lifecycle events are tracked: `session_start`, `session_resume`, `session_extend`
- **No user identity** is attached to sessions — they are completely anonymous

### Page & Route Tracking

The URL path of each page you visit within the Dappnode UI is recorded. This uses React Router v6 integration to track single-page application (SPA) view changes.

- Only the **route path** is tracked (e.g., `/stakers/ethereum`)
- This helps understand which sections of the UI are most used and where errors occur

### Distributed Traces

HTTP requests made by the Dappnode UI (via `fetch` and `XMLHttpRequest`) are traced using [OpenTelemetry](https://opentelemetry.io/). For each request, the following timing data is captured:

- Request duration, DNS lookup time, TCP handshake time, TLS negotiation time
- Request and response time, redirect time
- Response status and resource size

:::note
Requests to the telemetry proxy itself are excluded from tracing to avoid recursive data collection.
:::

## What We Do NOT Collect

:::tip
Dappnode takes your privacy seriously. The following data is **never** collected:

- **Personal information** — no names, emails, or account identifiers
- **Form inputs or credentials** — no passwords, seed phrases, or private keys
- **Wallet addresses** — no blockchain addresses of any kind
- **Screenshots or session recordings** — no visual capture of your screen
- **Keystrokes** — no keyboard input is recorded
  :::

## How to Enable or Disable Telemetry

You can enable or disable UI Telemetry at any time from the Dappnode settings:

1. Navigate to [http://my.dappnode/system/advanced](http://my.dappnode/system/advanced)
2. Scroll to the **"UI Telemetry"** section
3. Toggle the switch to **enable** or **disable** telemetry
4. The change takes effect immediately — no restart required

When disabled, the Faro SDK is paused and **no data is sent** to the proxy or Grafana Cloud.
