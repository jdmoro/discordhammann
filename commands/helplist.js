const Discord = require("discord.js");

module.exports.run = async (bot,message,args) => {

  let helplist = new Discord.RichEmbed()
  .setColor("#58e85c")
  .setThumbnail("https://i.imgur.com/kUN25XN.png")
  .addField("General Commands for HammanBOT",
  "**`!guide`** - Useful tips ingame. \n**`!farming`** - Farming Tips 101. \n**`!fleetcomp`** - Fleet Composition Tips \n**`!morale`** - Morale System \n**`!limitbreak`** - Limit break guide \n**`!gems`** - What to spend gems on. \n**`!tierlist`** - Current EN Ship Tierlist.  \n**`!gearlist`** - Current EN Gear Tierlist.  \n**`!drops`** - Best Gear and Ship farming spots.\n")

  message.channel.send(`I'm not doing it for you or anything like that!`)
  message.channel.send(helplist);
}

module.exports.help = {
  name: "helplist"
}
