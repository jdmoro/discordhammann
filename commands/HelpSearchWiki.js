const Discord = require("discord.js");

module.exports.run = async (bot,message,args) => {

//!kick @user reason

  let search = args[0];
  if(!search) return message.channel.send("```*Please type !wiki keyword*\n**Wiki Guide:**\nEvents - List of events\nCombat - All Combat related equations\nEquipment - Gears and etc.\nSkills - List of all known skills\nCommissions - commission schedules and drop list.");

  message.channel.send(`https://azurlane.koumakan.jp/${search}`)
}

module.exports.help = {
  name: "wiki"
}