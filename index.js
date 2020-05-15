const fetch = require("node-fetch");
const url = "https://api.hypixel.net";
const util = require("./util");
const getUuid = require("./utils/getUuid");

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
    /**
     * @async
     * 
     * @param {String} uuid Minecraft player id
     * 
     * @returns {Object}
     */
    async getPlayer(uuid) {
        if(uuid.length <= 16) {
            uuid = await getUuid(uuid);
        };

        await fetch(url+"/player?key="+this.key+"&uuid="+uuid)
        .then(async res => {
            if(res.status !== 200) {
                throw new Error("Hypixel API returned an error, try again.")
            };
            const parsed = await res.json();

            if(parsed.success = true) {
                return parsed;
            }else {
                throw new Error(parsed.cause)
            };
        });
    };

    /**
     * @async
     * 
     * @param {String} query Search query
     * 
     * @param {String} searchParameter name | player | id
     * 
     * @returns {Object}
     */
    async getGuild(query, searchParameter) {
        let URL;

        switch(searchParameter) {
            case 'name': {
                URL= url+"/guild?key="+this.key+"&name"+query;
            }
            break;
            case 'player': {
                if(query.length <= 16) {
                    query = await getUuid(query);
                    URL= url+"/guild?key="+this.key+"&player="+query;
                };
            };
            break;
            case 'id': {
                if(query.length !== 24) {
                    throw new Error("Invalid guild ID.");
                }
                URL= url+"/guild?key="+this.key+"&id="+query;
            };
            break;
            default: {
                throw new ReferenceError("Guild search parameter is not defined.");
            };
        };

        await fetch(url)
        .then(async res => {
            if(res.status !== 200) {
                throw new Error("Cannot get api.hypixel.net, try again later.");
            };

            const parsed = await res.json();
            if(parsed.guild == null) throw new Error("Guild not found.");

            if(res.success = true) {
                return parsed;
            }else {
                throw new Error(parsed.cause);
            };
        });
    };
};

module.exports = HypixelClient;