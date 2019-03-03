const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  //!greet @user

  let gUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if (!gUser) return message.channel.send("I couldn't find that user Admiral.");
  let gReason = args.join(" ")
    .slice(22);

  message.delete()
    .catch(O_o => {});
  message.channel.send(`${gUser}`)
  message.channel.send(gReason, {
    file: "https://media.giphy.com/media/CZpro4AZHs436/giphy.gif"
  });

  return;

}

module.exports.help = {
  name: "0000000003"
}