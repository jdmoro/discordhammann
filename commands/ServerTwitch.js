const Discord = require("discord.js");

module.exports.run = async (bot,message,args) => {

  message.delete().catch(O_o=>{});

  let user = message.author.id;
  let twitch = message.guild.roles.find(role => role.name === "Streamer");
  if(!twitch) return send.message.channel("You don't have the streamer tag.");
  else
  {
  message.channel.send(`${user}\nis now live and streaming.\n<https://twitch.tv/nobukun>`);
  }

}

module.exports.help = {
  name: "nobutwitch"
}
