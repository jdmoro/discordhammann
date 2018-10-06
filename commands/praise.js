const Discord = require("discord.js");

module.exports.run = async (bot,message,args) => {


  let roll = Math.floor((Math.random() * 10 + 1));

  if(rol === 2) {
    message.channel.send("BINGO!");
  } else {
    message.channel.send('',{
      file: "https://media.giphy.com/media/40677cZyM0BLiLPpgr/giphy.gif"
    });
  }
}

module.exports.help = {
  name: "praise"
}
