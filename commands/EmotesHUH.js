const Discord = require("discord.js");

module.exports.run = async (bot,message,args) => {

message.delete().catch(O_o=>{});
message.channel.send(" ",{
  file: "https://i.imgur.com/85uKxip.png"
});

}

module.exports.help = {
  name: "?"
}
