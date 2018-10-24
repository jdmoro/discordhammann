const Discord = require("discord.js");

module.exports.run = async (bot,message,args) => {

//!faction @user join

  let toadd = message.guild.member(message.author);
  let first = message.guild.roles.find(role => role.name === "EagleUnion");
  let second = message.guild.roles.find(role => role.name === "IronBlood");
  let third = message.guild.roles.find(role => role.name === "RoyalNavy");
  let fourth = message.guild.roles.find(role => role.name === "SakuraEmpire");

  await(toadd.removeRole(first.id));
  await(toadd.removeRole(second.id));
  await(toadd.removeRole(third.id));
  await(toadd.removeRole(fourth.id));

}

module.exports.help = {
  name: "resetfaction"
}
