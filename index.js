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
    getPlayerByUuid(uuid) {
        await fetch(url+"/player&key="+this.key+"&uuid="+uuid)
        .then(res => {
            const parsed = await res.json();
            if(parsed.success) {
                return parsed;
            }else {
                throw new Error(parsed.cause)
            }
        })
        .catch(err => {
            throw new Error(err);
        });
    };

    //Get player stats by name
    getPlayerByName(name) {
        const uuid = util.nameToUuid(name);

        await fetch(url+"/player&key="+this.key+"&uuid="+uuid)
        .then(res => {
            const parsed = await res.json();
            if(parsed.success) {
                return parsed;
            }else {
                throw new Error(parsed.cause)
            }
        })
        .catch(err => {
            throw new Error(err);
        });
    };
}

module.exports = HypixelApi;