const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const token = process.env.token;
const {
  Client,
  Attachment
} = require('discord.js');
const fs = require("fs");
const bot = new Discord.Client({
  disabledEveryone: true
});
bot.commands = new Discord.Collection();

fs.readdir("./commands/", (err, file) => {

  if (err) console.log(err);

  let jsfile = file.filter(f => f.split(".")
    .pop() === "js")
  if (jsfile.length <= 0) {
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) => {
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);
  });

});

bot.on("ready", async () => {
  console.log(`${bot.user.username} is happy to serve the admiral`)
  bot.user.setActivity("Nobu's Dorm", {
    type: "Watching"
  });

});

bot.on('error', console.error);

bot.on("message", async message => {

  if (message.author.bot) return;
  if (!message.guild) message.reply("STOOOOPP!!!");

  let prefix = botconfig.prefix;
  if (!message.content.startsWith(prefix)) return;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  if (cmd === "!") {
    return;
  }
  let commandfile = bot.commands.get(cmd.slice(prefix.length)) || bot.commands.get(bot.aliases.get(cmd.slice(prefix.length)));
  if (commandfile) commandfile.run(bot, message, args);
  if (!commandfile) return;
});

bot.login(token)
  .catch(err => console.log(err));