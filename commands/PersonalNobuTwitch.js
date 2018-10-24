const Discord = require("discord.js");

module.exports.run = async (bot,message,args) => {

  message.delete().catch(O_o=>{});
  if(message.author.id !== "363857147584577538") return send.message.channel("Don't spam Nobu's notifs! Hmpf!");
  else {
    message.channel.send("<@363857147584577538> is now live and streaming.\n<https://twitch.tv/nobukun>");
  }

}

module.exports.help = {
  name: "nobutwitch"
}
