const fetch = require("node-fetch");
const mojang = "https://api.mojang.com";

class Util {

    /**
     * @description Converts username to uuid
     * 
     * @returns {String}
     * 
     * @param {name} String - username of player
     */

    async nameToUuid(name) {
        await fetch(mojang+"/users/profiles/minecraft/"+name)
        .then(res => {
            const parsed = await res.json();

            return parsed.id;
        })
        .catch(err => {
            throw new Error(err);
        });
    };

    /**
     * @description Checks if the string is a uuid
     * 
     * @returns {Boolean}
     * 
     * @param {String} uuid - Minecraft player uuid
     */

    async isUuid(uuid) {
        let f = new RegExp('[0-9a-fA-F]{8}[0-9a-fA-F]{4}[0-9a-fA-F]{4}[0-9a-fA-F]{4}[0-9a-fA-F]{12}');
        let s = new RegExp('[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}');

        let test = f.test(uuid);
        let test1 = s.test(uuid);

        return test == false && test1 == false ? false : true;
    };

    /**
     * @description Checks if the id is a valid guild id
     * 
     * @returns {Boolean}
     * 
     * @param {String} id - id of the guild
     */

    async isGuildId(id) {
        return id.length == 24 ? true : false;
    };
}

module.exports = Util;