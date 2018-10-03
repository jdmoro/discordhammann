const Discord = require("discord.js");

module.exports.run = async (bot,message,args) => {


  var VC = message.member.voiceChannel;
        if (!VC)
            return message.reply("MESSAGE IF NOT IN A VOICE CHANNEL")
    VC.join()
        .then(connection => {
            const dispatcher = connection.playFile('./PledgeJP.mp3');
            dispatcher.on("end", end => {VC.leave()});
        })
        .catch(console.error);

}

module.exports.help = {
  name: "pledge"
}
