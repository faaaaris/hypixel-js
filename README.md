<p align="center" style="text-align: center;"><img src="https://api.hypixel.net/assets/images/logo.png" width="300" alt="Hypixel logo"/></p>

<div align="center">
        <h1> hypixel-js </h1>
        <strong> <i>A Javascript Wrapper for the <a href="https://api.hypixel.net">Hypixel API</a></i></strong>
  <br>
  <br>
  <a href="https://discord.gg/SPwjmyN">
    <img src="https://img.shields.io/discord/703759069130784768?color=Blue&label=Support&logo=Discord&style=for-the-badge" alt="Support"></a>
  
<a href="https://github.com/fqriss/hypixel-js">
  <img src="https://img.shields.io/github/languages/top/fqriss/hypixel-js?color=blue&label=Javascript&logo=javascript&style=for-the-badge" alt="Languages">
</a>

<a href="https://github.com/fqriss/hypixel-js/blob/master/LICENSE">
        <img src="https://img.shields.io/github/license/fqriss/hypixel-js?color=blue&label=License&style=for-the-badge" alt="LICENSE">
</a>

<a href="https://github.com/fqriss/hypixel-js/contributors">
        <img src="https://img.shields.io/github/contributors/fqriss/hypixel-js?color=blue&logo=github&logoColor=green&style=for-the-badge" alt="Contributors">
</a>        
<br>
<a href="https://npmjs.com/package/@fqqris/hypixel-js">
        <img src="https://img.shields.io/npm/v/@fqqris/hypixel-js?color=red&logo=npm&style=for-the-badge" alt="Version">
</a>

<a href="https://npmjs.com/package/@fqqris/hypixel-js">
        <img src="https://img.shields.io/bundlephobia/min/@fqqris/hypixel-js?color=red&logo=npm&style=for-the-badge" alt="Size">
</a>

<a href="https://npmjs.com/package/@fqqris/hypixel-js">
        <img src="https://img.shields.io/npm/dw/@fqqris/hypixel-js?color=red&logo=npm&style=for-the-badge" alt="Downloads">
</a>

<br>
<a href="https://github.com/fqriss/hypixel-js/issues">
        <img src="https://img.shields.io/github/issues/fqriss/hypixel-api-node?color=red&logo=github&style=for-the-badge" alt="Issues-open">
</a>

<a href="https://github.com/fqriss/hypixel-js/issues?q=is%3Aissue+is%3Aclosed">
        <img src="https://img.shields.io/github/issues-closed/fqriss/hypixel-api-node?color=yellow&logo=github&style=for-the-badge" alt="Issues-closed">
</a>

<a href="https://github.com/fqriss/hypixel-js/pulls">
        <img src="https://img.shields.io/github/issues-pr/fqriss/hypixel-api-node?logo=github&style=for-the-badge" alt="pulls-open">
</a>

<a href="https://github.com/fqriss/hypixel-js/pulls?q=is%3Apr+is%3Aclosed">
        <img src="https://img.shields.io/github/issues-pr-closed/fqriss/hypixel-api-node?color=yellow&logo=github&style=for-the-badge" alt="pulls-closed">
</a>
</div>

## Installation

Using NPM:

```bash
npm i -s @fqqris/hypixel-js
```

## Dependencies

* [node-fetch](https://npmjs.com/package/node-fetch)

## Usage

### Add to Project

```js
const HypixelClient = require("hypixel-js");

const hypixel = new HypixelClient("your-api-key");
```

### Functions
|               	|           Args   	        |
|----------------------	|:----------------------------:	|
| **getPlayer**       	|    uuid | username           	|
| **getGuild**      	|    searchParameter, query     |
| **getWatchdogStats**  |    withCommas          	|
| **getBoosters** 	|              	                |
| **getOnlinePlayers** 	|    withCommas          	|
| **getFriends**   	|    uuid | username   	        |
|**getSkyblockProfiles**|    uuid | username        	|
| **getSkyblockProfile**|    id                         |
| **getSkyblockNews**   |             	                |
|**getSkyblockAuctions**|    page   	                |
| **getSkyblockAuction**|    searchParameter, query 	|
| **getBazaar**         |                               |
| **getBazaarProduct**  |    product                    |
| **getStatus**         |    uuid | username            |

### Examples

```js
async () => {
        await HypixelClient.getPlayer("Hypixel").then(player => {
        console.log(player);
});

        let guild = await HypixelClient.getGuild("name", "The Sloths");
        console.log(guild);
}
```

## How to obtain a Hypixel API key

You can obtain an API key by joining `mc.hypixel.net` with a valid Minecraft account and running the /api command. You will then be assigned a unique key that is to remain **private**.
