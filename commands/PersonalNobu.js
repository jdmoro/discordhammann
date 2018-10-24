const Discord = require("discord.js");

module.exports.run = async (bot,message,args) => {

  message.delete().catch(O_o=>{});
  if(message.author.id !== "363857147584577538") return send.message.channel("Don't spam Nobu's notifs! Hmpf!");
  else {
    message.channel.send("Well, That is what <@363857147584577538> would say.\n*Don't trust him! He is a Pervert!*");
  }

}

module.exports.help = {
  name: "nobu"
}
