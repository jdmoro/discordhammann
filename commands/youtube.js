const Discord = require("discord.js");

module.exports.run = async (bot,message,args) => {

//!kick @user reason

  let search = args.join("").slice(22);

  message.channel.send(`https://www.youtube.com/results?search_query=${search}`)
}

module.exports.help = {
  name: "youtube"
}
