const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if (!user) return message.channel.send("I couldn't find the target.");

  let hitroll = ["**HITS!! <a:nani:503539484009168897>**", "**MISSES! <a:LaffeyDrinking:529795381584855060>**", "**CRITICALLY HITS!! <:cleve:503539339536629780>**", "**HITS!! <:heheh:551092454078545921>**"];
  let questionroll = args.slice(1)
    .join(" ");
  let resultroll = Math.floor((Math.random() * hitroll.length));

  message.reply(hitroll[resultroll] + ` ${user}`);
}

module.exports.help = {
  name: "attack"
}