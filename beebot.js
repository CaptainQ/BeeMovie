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
    if (message.author.username == "McCaffeteria") {
        message.reply("test");
        message.reply("test message", {files: ["https://cdn0.iconfinder.com/data/icons/popular-files-formats/154/tmp-512.png"]});
    }
});

client.login(process.env.BOT_TOKEN);
