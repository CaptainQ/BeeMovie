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
    if (message.author.username == "T I M E") {
        message.reply("Here is a cooki", {files: ["https://images-gmi-pmc.edge-generalmills.com/8012d5ca-eb39-4901-91a0-0bdddec883b8.jpg"]});
    }
});

client.on("message", (message) => {
    var link = "https://testcreative.co.uk/wp-content/uploads/2017/10/Test-Logo-Circle-black-transparent.png";
    if (message.author.username == "McCaffeteria") {
        message.reply("Test message", {files: [link]});
    }
});

client.login(process.env.BOT_TOKEN);
