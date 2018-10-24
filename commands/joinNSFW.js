const Discord = require("discord.js");

module.exports.run = async (bot,message,args) => {

//!faction @user join

  message.delete().catch(O_o=>{});

  let nChannel = message.guild.channels.find(role => role.name === "nsfw-chat");
  let toadd = message.guild.member(message.author);
  let onerole = message.guild.roles.find(role => role.name === "nsfw");


  if(toadd.roles.has(onerole.id)) return message.reply("Already on the list.");
  await(toadd.addRole(onerole.id));

  try{
    await nChannel.send(`${toadd} has joined`);
  }
  return;

}

module.exports.help = {
  name: "nsfw"
}
