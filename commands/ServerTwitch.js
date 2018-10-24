const Discord = require("discord.js");

module.exports.run = async (bot,message,args) => {

  let user = message.author.id;
  let sMember = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  let link = args.join(" ").slice(22);
  let sChannel = message.guild.channels.find(role => role.name === "stream");
  let twitch = message.guild.roles.find(role => role.name === "Streamer");

  if(message.author.has(twitch.id)) return sChannel.send(`<@${user}>\nis now live and streaming.\n${link}`);
  if(!message.author.has(twitch.id)) return send.message.channel("You don't have the streamer tag.");

}

module.exports.help = {
  name: "stream"
}
