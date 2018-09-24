const Discord = require("discord.js");

module.exports.run = async (bot,message,args) => {

message.delete().catch(O_o=>{});
message.channel.send(" ", {
  file: "https://cdn.discordapp.com/attachments/493432081477533696/493432216399904799/Triggered.gif"
});

}

module.exports.help = {
  name: "teittriggered"
}
