const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  //!ban @user reason

  let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if (!bUser) return message.channel.send("I couldn't find that user Admiral.");
  let bReason = args.join(" ")
    .slice(22);
  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Hmph! You need **Admin privilege** to do this!");
  if (bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("**Ehhh?!**\nAs much as I want to ban this pervert, he gives me food!\nIts not like I love my admirals! hmph!");

  let banEmbed = new Discord.RichEmbed()
    .setColor("#870009")
    .addField("Banned User", `${bUser}`)
    .addField("Banned By", `${message.author}`)
    .addField("Channel", message.channel)
    .addField("Reason", bReason);

  let bChannel = message.guild.channels.find(role => role.name === "banned-reports");
  if (!bChannel) return message.channel.send("Couldn't find the channel.");

  message.delete()
    .catch(O_o => {});
  message.guild.member(bUser)
    .ban(bReason);
  bChannel.send(banEmbed);

  return;

}

module.exports.help = {
  name: "0000000001"
}