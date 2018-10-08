const Discord = require("discord.js");

module.exports.run = async (bot,message,args) => {

  Number.prototype.padLeft = function(base,chr){
    var len = (String(base || 10).length - String(this).length)+1;
    return len > 0? new Array(len).join(chr || '0')+this : this;
  }

  var d = new Date;

  let dformat = [(d.getMonth()+1).padLeft(), d.getDate().padLeft(), d.getFullYear()].join('/')+'\n'+ [((d.getHours()-7+24)%24).padLeft(), d.getMinutes().padLeft(), d.getSeconds().padLeft()].join(':');


  let timetable = new Discord.RichEmbed()
  .setColor("#4aef5a")
  .addField("AzurLane's Server time", dformat)
  
  message.channel.send(timetable);

}

module.exports.help = {
  name: "time"
}
