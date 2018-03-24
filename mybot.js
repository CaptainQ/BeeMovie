const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
    console.log("IM SORRY");
});

client.on("message", (message) => {
    var isBot = new Boolean(true);
    isBot = message.author.bot();
    if (isBot = false) {
        message.channel.send("BUP");
    }
});

client.login("NDI1ODgzOTI5ODI5MTc5Mzky.DZN7Gg.cRYfwvcLN7X6LkfBm1NwloJsjss");