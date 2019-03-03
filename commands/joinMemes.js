const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  //!faction @user join

  message.delete()
    .catch(O_o => {});

  let mChannel = message.guild.channels.find(role => role.id === "550657166605025295");
  let toadd = message.guild.member(message.author);
  let memeRole = message.guild.roles.find(role => role.id === "551759604686651402");


  if (toadd.roles.has(memeRole.id)) return message.reply("Already on the list.");
  await (toadd.addRole(memeRole.id));
  await mChannel.send(`${toadd} has joined`);

  return;

}

module.exports.help = {
  name: "memes"
}