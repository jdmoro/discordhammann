const Discord = require("discord.js");

module.exports.run = async (bot,message,args) => {

  message.delete().catch(O_o=>{});
  if(message.author.id !== "363857147584577538") return send.message.channel("Don't spam Nobu's notifs! Hmpf!");
  else {
    message.channel.send("Ehh?! Don't?! EHH??!! DON'T PUT THAT THING ANYWHERE NEAR ME!!IT WON'T FIT!! NO?!!");
  }

}

module.exports.help = {
  name: "nobu2"
}
