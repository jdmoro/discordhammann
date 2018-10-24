const Discord = require("discord.js");

module.exports.run = async (bot,message,args) => {

  let user = message.author.id;
  let sChannel = message.guild.channels.find(role => role.name === "stream");
  let twitch = message.guild.roles.find(role => role.name === "Streamer");

  if(message.author.id !== "363857147584577538") return send.message.channel("Nani?!");
  else {
      sChannel.send(`<@${user}>\nis now live and streaming.\nhttps://twitch.tv/nobukun`);
  }


}

module.exports.help = {
  name: "stream"
}
