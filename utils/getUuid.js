const fetch = require("node-fetch");
const url = "https://api.mojang.com";

module.exports = async (query) => {
    await fetch(url+"/users/profiles/minecraft/"+query)
    .then(async res => {
        if(res.status == 200) {
            const parsed = await res.json();
            return parsed.id;
        }else {
            throw new Error("Invalid UUID.");
        };
    });
}