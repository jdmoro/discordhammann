const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot,message,args) => {

  let tomute = message.author;
  let muterole = message.guild.roles.find(role => role.name === "commissioned");

  let timer = args[0];
  if(!timer) return message.reply("Specify a time.");

  await(tomute.addRole(muterole.id));
  message.channel.send(`countdown started!`);

  setTimeout(function(){
    tomute.removeRole(muterole.id);
    message.channel.send(`<@${tomute.id}> countdown has finished!`);
    }, ms(timer));

}
module.exports.help = {
  name: "cd"
}
