const Discord = require("discord.js");

module.exports.run = async (bot,message,args) => {

//!faction @user join

  let toadd = message.guild.member(message.author);
  let onerole = message.guild.roles.find(role => role.name === "EagleUnion");

  await(toadd.addRole(onerole.id));
  message.reply("Added to Eagle Union");
}

module.exports.help = {
  name: "eagleunion"
}
