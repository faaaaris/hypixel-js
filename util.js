const fetch = require("node-fetch");
const mojang = "https://api.mojang.com";

class Util {

    nameToUuid(name) {
        await fetch(mojang+"/users/profiles/minecraft/"+name)
        .then(res => {
            const parsed = await res.json();

            return parsed.id;
        })
        .catch(err => {
            throw new Error(err);
        });
    }
}

module.exports = Util;