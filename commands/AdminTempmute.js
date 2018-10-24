const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot,message,args) => {

//!tempmute @user m/h/d

  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tomute) return message.channel.send("I couldn't find that user, Admiral.");
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Hmph! You need **Admin privilege** to do this!");
  if(tomute.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Admirals can still speak no matter what I do! hmph!!");
  let muterole = message.guild.roles.find(role => role.name === "muted");

//start create role
  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name : "muted",
        color : "#000000",
        permissions: []
      });
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTION: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }
//end create role
  let mutetime = args[1];
  if(!mutetime) return message.reply("Specify a time Admiral!");

  await(tomute.addRole(muterole.id));
  message.channel.send(`<@${tomute.id}> has been muted for being a pervert!`);

  setTimeout(function(){
    tomute.removeRole(muterole.id);
    message.channel.send(`<@${tomute.id}> has been unmuted! Praise me now!`);
    }, ms(mutetime));

  //end module
}
module.exports.help = {
  name: "tempmute"
}
