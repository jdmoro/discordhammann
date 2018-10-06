const Discord = require("discord.js");

module.exports.run = async (bot,message,args) => {

  message.channel.send((new Date().add(-8)).toString());

}

module.exports.help = {
  name: "time"
}
