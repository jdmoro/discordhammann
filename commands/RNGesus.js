const Discord = require("discord.js");

module.exports.run = async (bot,message,args) => {

    let hitroll = ["**HIT!!**","**MISS!**","**CRITICAL HIT!!**","**HIT!**"];
    let questionroll = args.slice(1).join(" ");
    let resultroll = Math.floor((Math.random() * hitroll.length));


    message.channel.reply(hitroll[resultroll]);
  }

module.exports.help = {
  name: "attack"
}
