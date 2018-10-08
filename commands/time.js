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
  .setTitle("AzurLane's Server time")
  .addField(dformat,"If the time is negative please refer to the chart below")
  .setFooter("-7 is 5pm | -6 is 6pm | -5 is 7pm | -4 is 8pm | -3 is 9pm | -2 is 10pm | -1 is 11pm | 0 is 12pm")

  message.channel.send(timetable);

}

module.exports.help = {
  name: "time"
}
