const Discord = require("discord.js");

module.exports.run = async (bot,message,args) => {

  let gChannel = message.guild.channels.find(role => role.name === "the-dockyard");
  if(!gChannel) return message.channel.send("Couldn't find the channel.");

  message.delete().catch(O_o=>{});
  message.channel.send("I'm sorry commanders\n\nSome pervert went into my dorm and got my keys\nHammann will try to fix all her mistakes so that you can forgive her.\n*sobs*\nHammann swears it wont happen again.", {
  file: "https://i.imgur.com/YWbG9xR.png"
});

}

module.exports.help = {
  name: "sorry"
}
