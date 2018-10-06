const Discord = require("discord.js");

module.exports.run = async (bot,message,args) => {

  message.channel.send((new Date()).toString());

}

module.exports.help = {
  name: "time"
}
