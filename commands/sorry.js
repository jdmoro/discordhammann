const Discord = require("discord.js");

module.exports.run = async (bot,message,args) => {

message.delete().catch(O_o=>{});
message.channel.send("I'm sorry commanders, some pervert went into my dorm and got my keys\nHammann will try to fix all her mistakes so that you can forgive her.\n*sobs*\nHammann swears it wont happen again.", {
  file: "https://i.imgur.com/YWbG9xR.png"
});

}

module.exports.help = {
  name: "sorry"
}
