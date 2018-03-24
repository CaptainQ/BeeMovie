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

client.on("message", (message) => {
    if (message.author.avatar == "3523") {
        message.reply("test");
    }
});

client.login(process.env.BOT_TOKEN);
