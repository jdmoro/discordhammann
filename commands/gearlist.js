const Discord = require("discord.js");

module.exports.run = async (bot,message,args) => {

  let gearlist = new Discord.RichEmbed()
  .setColor("#4aef5a")
  .addField("Gear/Equipment Tier List",
  "[JP 2018-08-04](https://i.imgur.com/CDJQUzt.png)\n[CN 2018-05-02](https://i.imgur.com/gaP2MZd.png)\n[EN 2018-08-27](https://i.imgur.com/TiCGywy.jpg)\n\nPlease check [here](https://azurlane.koumakan.jp/Equipment_List) for full details on equipment statistics and [here](http://azurlane.koumakan.jp/Combat) if you want to know how it all fits together (heavy math warning). Also check out Your Waifu Is Ship's - what do I equip on this ship [guide](https://pastebin.com/3dMWR8nM).")

  return message.channel.send(gearlist);
}

module.exports.help = {
  name: "gearlist"
}
