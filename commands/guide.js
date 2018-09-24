const Discord = require("discord.js");

module.exports.run = async (bot,message,args) => {

  let guide = new Discord.RichEmbed()
  .setColor("#4aef5a")
  .addField("Beginner's Guide to Azur Lane",
  "This [General Guide](https://azurlane.koumakan.jp/User:Shipposting_Duck) by Hayashi#8923 explains Azur Lane for beginning, intermediate, and advanced players. If you're not sure where to start or how to optimize something, try checking it out! \n\nHere are some other useful references\n- [Good ships to Farm Early](https://i.imgur.com/QxQ7NJ0.jpg)\n- [Farmable Equipment](https://i.imgur.com/obVp3rH.jpg)\n- Use `!fleetcomp` for info about building your fleet\n- Use`!tierlist` for the ship tier list\n- Use `!gearlist` for equipment tier list\n- Use `!commandlist` for the list of all commands\n")

  return message.channel.send(guide);
}

module.exports.help = {
  name: "guide"
}
