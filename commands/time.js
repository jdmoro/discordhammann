const Discord = require("discord.js");

module.exports.run = async (bot,message,args) => {

  var d = new Date;

  let dformat = [d.getMonth()+1, d.getDate(), d.getFullYear()].join('/')+'\n'+ [d.getHours()-8, d.getMinutes(), d.getSeconds()].join(':');

  message.channel.send("AzurLane's Server time is now:\n"+ dformat);

}

module.exports.help = {
  name: "time"
}
