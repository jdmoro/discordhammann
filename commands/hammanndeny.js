const Discord = require("discord.js");

module.exports.run = async (bot,message,args) => {

  if(!args[2]) return message.reply("Try to speak properly... baka! ");
  let replyroll = ["いいえ! いいえ!", "No! No! No!", "BAKA! NO!", "ほんとにばか！いいえ！いいえ！しないで!!!!"];
  let questionroll = args.slice(1).join(" ");
  let resultroll = Math.floor((Math.random() * replyroll.length));

  message.delete().catch(O_o=>{});
  message.channel.send(replyroll[resultroll]);

}

module.exports.help = {
  name: "deny"
}
