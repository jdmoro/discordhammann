const Discord = require("discord.js");

module.exports.run = async (bot,message,args) => {

//!kick @user reason

  let search = args[0];
  if(!search) return message.channel.send("Input");

  message.channel.send(`https://azurlane.koumakan.jp/${search}`)
}

module.exports.help = {
  name: "wiki"
}
