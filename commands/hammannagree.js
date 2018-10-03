const Discord = require("discord.js");

module.exports.run = async (bot,message,args) => {

  let replyroll = ["**ヘンタイ!!  はい!!  フン!！**\n*Pervert! Yes! Hmpf!*", "はい...な、何も言ってないわよ!\n*Ye... I-I didn't say anything!*"];
  let questionroll = args.slice(1).join(" ");
  let resultroll = Math.floor((Math.random() * replyroll.length));

  message.delete().catch(O_o=>{});
  message.channel.send(replyroll[resultroll]);

}

module.exports.help = {
  name: "agree"
}
