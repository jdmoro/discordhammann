const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  message.delete()
    .catch(O_o => {});
  message.channel.send(" ", {
    file: "https://media.discordapp.net/attachments/504211156613988352/511951029009383426/1541888516763.jpg"
  });

}

module.exports.help = {
  name: "0000000010"
}