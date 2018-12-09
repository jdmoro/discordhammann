const Discord = require("discord.js");

module.exports.run = async (bot,message,args) => {

  let replyroll = ["ppshh. get away", "no, dont.. just, urgh. no"];
  let questionroll = args.slice(1).join(" ");
  let resultroll = Math.floor((Math.random() * replyroll.length));

  message.delete().catch(O_o=>{});
  message.channel.send(replyroll[resultroll]);

}

module.exports.help = {
  name: "deny"
}
