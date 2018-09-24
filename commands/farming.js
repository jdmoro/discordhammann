const Discord = require("discord.js");

module.exports.run = async (bot,message,args) => {

  let farming = new Discord.RichEmbed()
  .setColor("#4aef5a")
  .setFooter("Your ships should be 15 to 20 levels higher than enemy level for a 1:1 fleet to function well.")
  .addField("Farming Tips 101",
  "- Low level ships in general are VERY cheap. in 3-4 and other low level maps to to raise multiple girls to level 70+. If you're not sure which girls to prioritize, use `!tierlist`. You **WILL** need lvl 70+ ships to farm world 6+\n\n- Use around 3 to 4 girls in a fleet to keep your costs low. If you're having difficulties to use this number of low level ships to clear a map, swap one or two girls out for one higher level girl and let her carry others through the map.\n\n- In the future, you will need to farm harder maps and event maps. To make sure you can do it, prepare a 1:1 fleet to clear the trash nodes, which means one Main fleet and one Vanguard. Suitable ships include\n\n**Vanguard**\n> Phoenix\n> Cassin/Downes\n\n**Main Fleet**\n> Pennsylvania and Fusou / Yamashiro\n> Yorktown due to her self-heal skill\n\nLimit breaking (LBing) a ship will increase it's oil cost, but make them stronger `!limitbreak`. for more info ")

  return message.channel.send(farming);
}

module.exports.help = {
  name: "farming"
}
