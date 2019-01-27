const Discord = require("discord.js");

module.exports.run = async (bot,message,args) => {

    let enemy = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

    let hitroll = ["**HIT!!**","**MISS!**","**CRITICAL HIT!!**","**HIT!**"];
    let questionroll = args.slice(1).join(" ");
    let resultroll = Math.floor((Math.random() * hitroll.length));

    message.channel.send(enemy);
    message.channel.send(hitroll[resultroll]);
  }

module.exports.help = {
  name: "attack"
}
