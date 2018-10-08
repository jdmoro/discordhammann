const Discord = require("discord.js");

module.exports.run = async (bot,message,args) => {

  Number.prototype.padLeft = function(base,chr){
    var len = (String(base || 10).length - String(this).length)+1;
    return len > 0? new Array(len).join(chr || '0')+this : this;
  }

  var d = new Date;

  let dformat = [(d.getMonth()+1).padLeft(), d.getDate().padLeft(), d.getFullYear()].join('/')+'\n'+ [(d.getHours()-7).padLeft(), d.getMinutes().padLeft(), d.getSeconds().padLeft()].join(':');

  message.channel.send("AzurLane's Server time is now:\n"+ dformat + "\n-7 is  5pm\n-6 is 6pm\n-5 is 7pm\n-4 is 8pm\n-3 is 9pm\n-2 is 10pm\n-1 is 11pm\n0 is 12pm");

}

module.exports.help = {
  name: "time"
}
