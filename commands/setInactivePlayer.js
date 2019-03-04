const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  //!faction @user join

  let toadd = message.guild.member(message.author);
  let inactiveRole = message.guild.roles.find(role => role.id === "541608599311482880");

  await (toadd.addRole(inactiveRole.id));

  let role = message.guild.roles.find(role => role.id === "549320899170664448");

  if (!message.guild.members.get(message.author.id)
    .hasPermission("ADMINISTRATOR")) return message.channel.send("You can't do this.");

  if (!role) return message.channel.send("Error.");

  message.delete()
    .catch(O_o => {});

  role.members.forEach(member => {

    message.channel.send(`1`)
      .then(msg => {
        msg.delete(5000)
      });
  });

}

module.exports.help = {
  name: "ALweekly"
}