const fetch = require("node-fetch");
const url = "https://api.hypixel.net";
const util = require("./util");

class HypixelClient {
    constructor(key) {
        if(key) {
            this.key = key;
        }else {
            throw new Error("API key not provided.");
        };
    };

    /*========================================================
                              Methods
    ==========================================================*/

    //Get player stats by uuid
    async getPlayerByUuid(uuid) {
        await fetch(url+"/player?key="+this.key+"&uuid="+uuid)
        .then(res => {
            const parsed = await res.json();
            if(parsed.success) {
                return parsed;
            }else {
                throw new Error(parsed.cause || "Player not found.")
            }
        })
        .catch(err => {
            throw new Error(err);
        });
    };

    //Get player stats by name
    async getPlayerByName(name) {
        const uuid = util.nameToUuid(name);

        await fetch(url+"/player?key="+this.key+"&uuid="+uuid)
        .then(res => {
            const parsed = await res.json();
            if(parsed.success) {
                return parsed;
            }else {
                throw new Error(parsed.cause || "Player not found.")
            }
        })
        .catch(err => {
            throw new Error(err);
        });
    };

    /**
     * @async
     * 
     * @description Hypixel player stats
     * 
     * @param {String} uuid - uuid of the player
     * 
     * @returns {Player} Player stats or error
     */

    async getPlayer(uuid) {
        if(await util.isUuid(uuid)) {
            await fetch(url+"/player?key="+this.key+"&uuid="+uuid)
            .then(res => {
                const parsed = await res.json();
                if(parsed.success) {
                    return parsed;
                }else {
                    throw new Error(parsed.cause || "Player not found.")
                };
            })
            .catch(err => {
                throw new Eror(err);
            });
        }else {
            const toUuid = util.nameToUuid(uuid);

            await fetch(url+"/player?key="+this.key+"&uuid="+toUuid)
            .then(res => {
                const parsed = await res.json();
                if(parsed.success) {
                    return parsed;
                }else {
                    throw new Error(parsed.cause || "Player not found.");
                };
            })
            .catch(err => {
                throw new Error(err);
            });
        };
    };

    async getGuild(query, searchParam) {
        let res;
        let URL;

        switch(searchParam) {
            case 'name': {
                URL = url+"/guild?key="+this.key+"&name="+query;
                res = await fetch(url).then(data => data.json());
            }
            break;
            case 'player': {
                if(util.isUuid(query) == false) {
                    let uuid = util.nameToUuid(query)
                    .catch(err => {
                        throw new Error("Player not found.");
                    })
                }

                URL = url+"/guild?key="+this.key+"&player="+query;
                res = await fetch(URL)
                .then(data => data.json())
            }
            break;
            case 'id': {
                if(await util.isGuildId(query) == false) throw new Error("Invalid Guild ID.");

                URL = url+"/guild?key="+this.key+"&id="+query;
                res = await fetch(URL)
                .then(data => data.json());
            }
            break;
            default: {
                throw new Error("Guild search parameter is not defined.");
            }
        };

        if(res.guild == null) throw new Error("Guild not found.");

        if(res.success) {
            return res;
        }else {
            throw new Error(res.cause || "Unknown error.")
        }
    }
}

module.exports = HypixelClient;