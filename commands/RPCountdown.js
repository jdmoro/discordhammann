const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot,message,args) => {

  let user = message.guild.member(message.author);
  let userrole = message.guild.roles.find(role => role.name === "commissioned");

  let timer = args[0];
  if(!timer) return message.reply("Specify a time.");

  await(user.addRole(userrole.id));
  message.channel.send(`Doomsday timer has started!`);

  setTimeout(function(){
    user.removeRole(userrole.id);
    message.channel.send(`<@${user.id}> <${timer}> countdown has finished!`);
    }, ms(timer));

}
module.exports.help = {
  name: "cd"
}
