const Discord = require("discord.js");

module.exports.run = async (bot,message,args) => {

  message.delete().catch(O_o=>{});

  let user = message.author.id;
  let sMember = message.author;
  let sChannel = message.guild.channels.find(role => role.name === "stream");
  let twitch = message.guild.roles.find(role => role.name === "Streamer");

  if(sMember.roles.has(twitch.id)) {
    sChannel.send(`<@${user}>\nis now live and streaming.\nhttps://twitch.tv/nobukun`);
  } else {
  send.message.channel("You don't have the streamer tag.");
  }

}

module.exports.help = {
  name: "stream"
}
