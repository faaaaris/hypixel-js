<p align="center" style="text-align: center;"><img src="https://api.hypixel.net/assets/images/logo.png" width="300" alt="Hypixel logo"/></p>

<div align="center">
        <h1> hypixel-api-node </h1>
    <strong> <i>A node API wrapper for Hypixel.</i></strong>
  <br>
  <br>
  <a href="https://discord.gg/SPwjmyN">
    <img src="https://img.shields.io/discord/703759069130784768?color=Blue&label=Support&logo=Discord&style=for-the-badge" alt="Support"></a>
  
<a href="https://github.com/fqriss/hypixel-api-node">
  <img src="https://img.shields.io/github/languages/top/fqriss/hypixel-api-node?color=blue&label=Javascript&logo=javascript&style=for-the-badge" alt="Languages">
</a>

<a href="https://github.com/fqriss/hypixel-api-node/blob/master/LICENSE">
        <img src="https://img.shields.io/github/license/fqriss/hypixel-api-node?color=blue&label=License&style=for-the-badge" alt="LICENSE">
</a>

<a href="https://github.com/fqriss/hypixel-api-node/contributors">
        <img src="https://img.shields.io/github/contributors/fqriss/hypixel-api-node?color=blue&logo=github&logoColor=green&style=for-the-badge" alt="Contributors">
</a>        
<br>
<a href="https://npmjs.com/package/hypixel-api-node">
        <img src="https://img.shields.io/npm/v/hypixel-api-node?color=red&logo=npm&style=for-the-badge" alt="Version">
</a>

<a href="https://npmjs.com/package/hypixel-api-node">
        <img src="https://img.shields.io/bundlephobia/min/hypixel-api-node?color=red&label=SIZE&logo=npm&style=for-the-badge" alt="Size">
</a>

<a href="https://npmjs.com/package/hypixel-api-node">
        <img src="https://img.shields.io/npm/dw/hypixel-api-node?color=red&label=DOWNLOADS&logo=npm&style=for-the-badge" alt="Downloads">
</a>

<br>
<a href="https://github.com/fqriss/hypixel-api-node/issues">
        <img src="https://img.shields.io/github/issues/fqriss/hypixel-api-node?color=red&logo=github&style=for-the-badge" alt="Issues-open">
</a>

<a href="https://github.com/fqriss/hypixel-api-node/issues?q=is%3Aissue+is%3Aclosed">
        <img src="https://img.shields.io/github/issues-closed/fqriss/hypixel-api-node?color=yellow&logo=github&style=for-the-badge" alt="Issues-closed">
</a>

<a href="https://github.com/NovelCOVID/API/pulls">
        <img src="https://img.shields.io/github/issues-pr/fqriss/hypixel-api-node?logo=github&style=for-the-badge" alt="pulls-open">
</a>

<a href="https://github.com/fqriss/hypixel-api-node/pulls?q=is%3Apr+is%3Aclosed">
        <img src="https://img.shields.io/github/issues-pr-closed/fqriss/hypixel-api-node?color=yellow&logo=github&style=for-the-badge" alt="pulls-closed">
</a>
</div>

## Installation

Using NPM:

```bash
npm i -s hypixel-api-node
```

## Dependencies

* [node-fetch](https://npmjs.com/package/node-fetch)
* [object-path](https://npmjs.com/package/object-path)

## Setup

JavaScript:

```js
const HypixelClient = require("hypixel-api-node");

const hypixel = new HypixelClient("your-api-key");
```

TypeScript:

```ts
import HypixelClient from 'hypixel-api-node';

const hypixel = new HypixelClient("your-api-key");
```

## How to obtain a Hypixel API key

You can obtain an API key by joining `mc.hypixel.net` with a valid Minecraft account and running the /api command. You will then be assigned a unique key that is to remain **private**.
