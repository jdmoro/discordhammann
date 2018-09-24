const Discord = require("discord.js");

module.exports.run = async (bot,message,args) => {

//!kick @user reason

  let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!kUser) return message.channel.send("I couldn't find that user Admiral.");
  let kReason = args.join(" ").slice(22);
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Hmph! You need **Admin privilege** to do this!");
  if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Sims would kill me if I try kicking an Admiral\n*Even thou I want to.....*");

  let kickEmbed = new Discord.RichEmbed()
  .setColor("#2a82c1")
  .addField("Kicked User", `${kUser}`)
  .addField("Kicked By", `${message.author}`)
  .addField("Channel", message.channel)
  .addField("Reason", kReason);

  let kChannel = message.guild.channels.find(role => role.name === "kicked-reports");
  if(!kChannel) return message.channel.send("Couldn't find the channel.");

  message.delete().catch(O_o=>{});
  message.guild.member(kUser).kick(kReason);
  kChannel.send(kickEmbed);

  return;

}

module.exports.help = {
  name: "kick"
}
