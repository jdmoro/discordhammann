const Discord = require("discord.js");

module.exports.run = async (bot,message,args) => {

  let fleetcomp = new Discord.RichEmbed()
  .setColor("#4aef5a")
  .addField("Fleet Composition Tips",
  "**General Tips**\nThis [Google Doc](https://docs.google.com/document/d/1yUk-WeSi0ZfXyHyM5Wjjh8apRQlZnFfPMVc27gfsu1k/edit) is a very brief explanation of some tips/tricks for good fleet composition.\n\n**Detailed Guides**\n> [Backline Composition 101](https://docs.google.com/document/d/17tGltQXRFfJ0E1GfjRK64VMPjNw-FhALVI-TRCXIgfA/edit#)\n> [Frontline Composition 101](https://docs.google.com/document/d/1PHIsUhLNGTiDayweWxtnWkhzwJrGBX7j5NF_7VflGGs/edit)\ncredits to Enbayft#2527")

  return message.channel.send(fleetcomp);
}

module.exports.help = {
  name: "fleetcomp"
}
