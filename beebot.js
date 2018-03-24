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
    if (message.author.username == "beefy nacho despacito hater") {
        message.reply("Here is a cooki", {files: ["https://images-gmi-pmc.edge-generalmills.com/8012d5ca-eb39-4901-91a0-0bdddec883b8.jpg"]});
    }
});

client.login(process.env.BOT_TOKEN);
