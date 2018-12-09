const Discord = require("discord.js");

module.exports.run = async (bot,message,args) => {

  let replyroll = ["k, whatever.","ohh.k","do whatever you want to do"];
  let questionroll = args.slice(1).join(" ");
  let resultroll = Math.floor((Math.random() * replyroll.length));

  message.delete().catch(O_o=>{});
  message.channel.send(replyroll[resultroll]);

}

module.exports.help = {
  name: "agree"
}
