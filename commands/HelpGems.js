const Discord = require("discord.js");

module.exports.run = async (bot,message,args) => {

  let gems = new Discord.RichEmbed()
  .setColor("#4aef5a")
  .addField("Gem Spending 101",
  "Gems in Azur Lane are fairly rare from a free-to-play perspective. However, the gacha in Azur lane does not require gems. The best way to use your gems is generally as follows\n\n1. All 5 dorm slots\n2. Dorm second floor (not implemented in EN)\n3. Dock expansion to about 200\n4. Oath rings\n5. Dock expansion as needed (generally keep one of every ship)\n6. Equipment expansion as needed (generally sell any equips that aren't purple or higher except fire extinguishers and the 76 mm gun)\n7. Skins (or suffer with lower equipment/dock space if you just love skins)\n8. Everything else because everything else is either not worth gems or obtainable just by playing the game.\n\nOptionally, you can spend gems on oil if you're intensely farming, but it's recommended to only do it twice a day as the price doubles after the second recharge.")

  return message.channel.send(gems);
}

module.exports.help = {
  name: "gems"
}
