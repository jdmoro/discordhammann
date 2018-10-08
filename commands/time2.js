const Discord = require("discord.js");
const moment = require('moment-timezone');


module.exports.run = async (bot,message,args) => {

  var df = new SimpleDateFormat("dd-MM-yy HH:mm:SS z");
  df.setTimeZone(TimeZone.getTimeZone("Asia/Kolkata"));
  String IST = df.format(today);

  message.channel.send("AzurLane's Server time is now:\n"+ df);

}

module.exports.help = {
  name: "time2"
}
