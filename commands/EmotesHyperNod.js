const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  message.delete()
    .catch(O_o => {});
  message.channel.send(" ", {
    file: "https://media.discordapp.net/attachments/460643534685470730/504572735121391616/hyper_nod.gif"
  });

}

module.exports.help = {
  name: "0000000009"
}