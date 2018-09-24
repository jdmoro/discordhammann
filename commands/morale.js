const Discord = require("discord.js");

module.exports.run = async (bot,message,args) => {

  let morale = new Discord.RichEmbed()
  .setColor("#4aef5a")
  .addField("Morale System",
  "Morale determines how much EXP a ship earns. It's represented by the face icon next to a ship's name.\n\n**Sparkly green**: Morale >120. Gets 1.2x bonus experience. Flagship enjoys 3.6x bonus experience when MVP. 1.8x otherwise.\n**Green**: Morale >= 80 and <= 120\n**Orange**: Morale <= 30\n**Red**: Morale = 0. At this stage, every attack will reduce affection\n\nMorale is consumed when engaging an enemy fleet in PVE, including ambush (-2) or when a ship is sunk (-10). Nothing else (including PVP) decreases morale.\n\nMorale regenerates at the rate of one point every 6 minutes. Ships on the first floor of the backyard will recover at the rate of 40 points per hour (50 if married), and ships on the *second floor* (not yet available) of the backyard will recover at the rate of 50 points per hour (60 if married).")

  return message.channel.send(morale);
}

module.exports.help = {
  name: "morale"
}
