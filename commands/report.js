const Discord = require("discord.js");

module.exports.run = async (bot,message,args) => {

//!report @user reason

  let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!rUser) return message.channel.send("I couldn't find that user Admiral.");
  let rReason = args.join(" ").slice(22);

  let reportList = new Discord.RichEmbed()
  .setColor("#ef7d13")
  .addField("Reported User", `${rUser}`)
  .addField("Reported By", `${message.author}`)
  .addField("Channel", message.channel)
  .addField("Reason", rReason);

  let reportschannel = message.guild.channels.find(role => role.name === "public-reports");
  if(!reportschannel) return message.channel.send("Couldn't find the channel.");


    message.delete().catch(O_o=>{});
    reportschannel.send(reportList);

  return;

}

module.exports.help = {
  name: "report"
}
