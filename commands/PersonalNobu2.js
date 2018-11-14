const Discord = require("discord.js");

module.exports.run = async (bot,message,args) => {

  message.delete().catch(O_o=>{});
  if(message.author.id !== "363857147584577538") return send.message.channel("can't use this lad.");
  else {
    message.channel.send("**Ehh?! Stop.. Please.. Stop!!**\n**EHH??!!**\n**DON'T PUT THAT THING ANYWHERE NEAR ME!!**\n**IT WON'T FIT!! NO!!**");
  }

}

module.exports.help = {
  name: "nobu2"
}
