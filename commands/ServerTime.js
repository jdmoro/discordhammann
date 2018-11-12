const Discord = require("discord.js");

module.exports.run = async (bot,message,args) => {

  Number.prototype.padLeft = function(base,chr){
    var len = (String(base || 10).length - String(this).length)+1;
    return len > 0? new Array(len).join(chr || '0')+this : this;
  }

  var d = new Date;

  let dformat = [(d.getMonth()+1).padLeft(), d.getDate().padLeft(), (d.getFullYear()-1000)].join('/')+'\n`'+ [((d.getHours()-8+24)%24).padLeft(), d.getMinutes().padLeft(), d.getSeconds().padLeft()].join(':')+"`";




  message.channel.send("**AzurLane's Server Time:**\n" + dformat);

}

module.exports.help = {
  name: "time"
}
