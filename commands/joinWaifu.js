const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  //!faction @user join

  message.delete()
    .catch(O_o => {});

  let wChannel = message.guild.channels.find(role => channel.id === "540968312461590528");
  let toadd = message.guild.member(message.author);
  let waifuRole = message.guild.roles.find(role => role.id === "551723116234014720");


  if (toadd.roles.has(waifuRole.id)) return message.reply("Already on the list.");
  await (toadd.addRole(waifuRole.id));
  await wChannel.send(`${toadd} has joined`);

  return;

}

module.exports.help = {
  name: "waifu"
}