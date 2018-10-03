const Discord = require("discord.js");

module.exports.run = async (bot,message,args) => {

  let replyroll = ["Yes!", "No! No! No!", "Maybe? I don’t know", "Hmph! I guess so... Baka!"];
  let whyroll = ["1", "2", "3"];
  let howroll = ["4", "5", "6", "7"];

  let questionroll = args.slice(1).join(" ");
  let resultroll = Math.floor((Math.random() * replyroll.length));

  if(args[0] === 'why') message.channel.send(whyroll[resultroll]);
  if(args[0] === 'how') message.channel.send(howroll[resultroll]);

  message.channel.send(replyroll[resultroll]);


}

module.exports.help = {
  name: "ask2"
}
