const Discord = require("discord.js");

module.exports.run = async (bot,message,args) => {

  let tierlist = new Discord.RichEmbed()
  .setColor("#4aef5a")
  .setDescription("- [EN Tier Guide](https://pastebin.com/ZMBi8g6R) by a Discord community member\n- [JP Tier Guide](https://pastebin.com/bffW2aNa) by a Discord community member\n- [CN Tier List](https://i.imgur.com/7uciJeW.png)\n- [JP Tier List](https://i.imgur.com/bpSIHYr.png)")

  return message.channel.send(tierlist);
}

module.exports.help = {
  name: "tierlist"
}
