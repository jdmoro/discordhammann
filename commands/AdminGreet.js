const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  //!greet @user

  let gUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if (!gUser) return message.channel.send("I couldn't find that user Admiral.");
  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Hmph! You need **Admin privilege** to do this!");
  let gReason = args.join(" ")
    .slice(22);

  let gChannel = message.guild.channels.find(role => role.name === "general-chat");
  if (!gChannel) return message.channel.send("Couldn't find the channel.");

  message.delete()
    .catch(O_o => {});
  gChannel.send(`${gUser}`)
  gChannel.send(gReason, {
    file: "https://media.giphy.com/media/CZpro4AZHs436/giphy.gif"
  });

  return;

}

module.exports.help = {
  name: "0000000002"
}