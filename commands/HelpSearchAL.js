const Discord = require("discord.js");

module.exports.run = async (bot,message,args) => {

//!kick @user reason

  let search = args[0];

  message.channel.send(`https://azurlane.koumakan.jp/w/index.php?title=Special%3ASearch&go=Go&search=${search}`)
}

module.exports.help = {
  name: "searchal"
}
