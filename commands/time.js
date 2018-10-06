const Discord = require("discord.js");

module.exports.run = async (bot,message,args) => {

  var d = new Date,
  let dformat = [d.getMonth(),
         d.getDate(),
         d.getFullYear()].join('/')+' '+
        [d.getHours()-8,
         d.getMinutes(),
         d.getSeconds()].join(':');

  message.channel.send(dformat);

}

module.exports.help = {
  name: "time"
}
