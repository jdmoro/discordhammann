const Discord = require("discord.js");

module.exports.run = async (bot,message,args) => {

  let tonsfw = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tonsfw) return message.channel.send("I couldn't find that pervert.");
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Hmph! You need **Admin privilege** to do this!");
  let nsfwrole = message.guild.roles.find(role => role.name === "nsfw role");

  await(tonsfw.addRole(nsfwrole.id));
  message.channel.send(`<@${tonsfw.id}> has been added to the pervert list!`);

}

module.exports.help = {
  name: "nsfw"
}
