const Discord = require("discord.js");

module.exports.run = async (bot,message,args) => {

  message.channel.send(" ", {
    file: "https://media.giphy.com/media/40677cZyM0BLiLPpgr/giphy.gif"
  });

}

module.exports.help = {
  name: "praise"
}
