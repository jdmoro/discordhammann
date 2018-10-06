const Discord = require("discord.js");

module.exports.run = async (bot,message,args) => {


  let pic = file: "https://media.giphy.com/media/40677cZyM0BLiLPpgr/giphy.gif";
  let count = [`${pic}`, "BINGO!", `${pic}`,`${pic}`,`${pic}`];
  let roll = Math.floor((Math.random() * count.lenght));

  message.channel.send(count[roll]);

}

module.exports.help = {
  name: "praise"
}
