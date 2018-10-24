const Discord = require("discord.js");

module.exports.run = async (bot,message,args) => {

//!faction @user join

  message.delete().catch(O_o=>{});

  let nChannel = message.guild.channels.find(role => role.name === "nsfw-chat");
  let toadd = message.guild.member(message.author);
  let onerole = message.guild.roles.find(role => role.name === "nsfw");

  await(toadd.addRole(onerole.id));
  nChannel.send(`${kUser} has joined`);

  return;

}

module.exports.help = {
  name: "nsfw"
}
