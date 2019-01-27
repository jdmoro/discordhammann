const Discord = require("discord.js");

module.exports.run = async (bot,message,args) => {

    let hitroll = ["**HIT**","**MISS**","**CRITICAL HIT**","**HIT**"];
    let questionroll = args.slice(1).join(" ");
    let resultroll = Math.floor((Math.random() * replyroll.length));

    message.channel.send(hitroll[resultroll]);
  }
  
module.exports.help = {
  name: "attack"
}
