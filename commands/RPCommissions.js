const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot,message,args) => {

  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tomute) return message.channel.send("I couldn't find that user, Commander.");
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Hmph! You need **Admin privilege** to do this!");
  let muterole = message.guild.roles.find(role => role.name === "commissioned");

//start create role
  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name : "commissioned",
        color : "#000000",
        permissions: []
      });
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: true,
          ADD_REACTION: true
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }
//end create role
  let mutetime = args[1];
  if(!mutetime) return message.reply("Specify a commission time.");

  await(tomute.addRole(muterole.id));
  message.channel.send(`<@${tomute.id}> has been sent out on a commission!`);

  setTimeout(function(){
    tomute.removeRole(muterole.id);
    message.channel.send(`<@${tomute.id}> has returned from the commission!`);
    }, ms(mutetime));

  //end module
}
module.exports.help = {
  name: "commission"
}
