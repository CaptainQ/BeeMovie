const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
    console.log("IM SORRY");
});

client.on("message", (message) => {
    if (message.content.startsWith("ping") == true) {
        message.reply("BUP");
    }
});

client.login(process.env.BOT_TOKEN);
