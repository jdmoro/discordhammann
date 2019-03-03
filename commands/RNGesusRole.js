const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let role = message.mentions.roles.first();
  if (!role) return message.channel.send("Specify Role.");

  if (message.author.id !== "363857147584577538") return;

  role.members.forEach(member => {

    let hitroll = ["**HITS!! <a:nani:503539484009168897>**", "**MISSES! <:haha:538469858338144278>**", "**CRITICALLY HITS!! <:cleve:503539339536629780>**", "**HITS!! <:heheh:551092454078545921>**"];
    let questionroll = args.slice(1)
      .join(" ");
    let resultroll = Math.floor((Math.random() * hitroll.length));

    message.reply(hitroll[resultroll] + ` ${member}`);
  });
}
module.exports.help = {
  name: "massattack"
}