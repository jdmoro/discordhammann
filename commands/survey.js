const Discord = require("discord.js");

module.exports.run = async (bot,message,args) => {

  let survey = args.join("+").slice(22);

  message.delete().catch(O_o=>{});
  message.channel.send("Attention Perverted Commanders!\nThe higher ups has a message for all of you.\nDon't make me repeat myself?! Hmph!\n")
  message.channel.send(survey);

}

module.exports.help = {
  name: "survey"
}
