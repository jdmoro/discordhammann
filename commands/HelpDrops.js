const Discord = require("discord.js");

module.exports.run = async (bot,message,args) => {

  let drops = new Discord.RichEmbed()
  .setColor("#4aef5a")
  .addField("Ship and Equipment Drop Tables",
  "This [spreadsheet](https://docs.google.com/spreadsheets/d/1SDJ1jR4w_VNblJYEvYrStrib3KSr6WTOl9t3LpoRKDE/edit#gid=1145083796&fvid=1722875935) details some useful ships that drop early in the game, which means they can be farmed by beginners! You can use the preset filter views to look at all ship drop data as well.You can use [this](https://docs.google.com/spreadsheets/d/1IkUG7Qot3GedHzK_VMdiPuI39uERybGybuqsJeKzDeo/edit#gid=0) spreadsheet as well.\n\nThis [image](https://i.imgur.com/obVp3rH.jpg) is a guide to some notable farmable equipment in the game as well.\n\nFinally, [this image](https://i.imgur.com/Ah21v3i.jpg) combines both ship and equipment drop information into a graphical layout, but note that the text is in Japanese")

  return message.channel.send(drops);
}

module.exports.help = {
  name: "drops"
}
