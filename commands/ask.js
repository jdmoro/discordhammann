const Discord = require("discord.js");

module.exports.run = async (bot,message,args) => {

  if(!args[2]) return message.reply("Try to speak properly... baka! ");
  let replyroll = ["Yes!", "No! No! No!", "Maybe? I don’t know", "Hmph! I guess so... Baka!"];
  let questionroll = args.slice(1).join(" ");
  let resultroll = Math.floor((Math.random() * replyroll.length));

  message.channel.send(replyroll[resultroll]);

}

module.exports.help = {
  name: "ask"
}
