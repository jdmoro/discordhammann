const Discord = require("discord.js");
const moment = require('moment-timezone');


module.exports.run = async (bot,message,args) => {

  Number.prototype.padLeft = function(base,chr){
    var len = (String(base || 10).length - String(this).length)+1;
    return len > 0? new Array(len).join(chr || '0')+this : this;
  }

  var d = new Date;

  let dformat = [(d.getMonth()+1).padLeft(), d.getDate().padLeft(), d.getFullYear()].join('/')+'\n'+ [(d.getHours()-7).padLeft(), d.getMinutes().padLeft(), d.getSeconds().padLeft()].join(':');

  message.channel.send("AzurLane's Server time is now:\n"+ dformat);

}

module.exports.help = {
  name: "time"
}
