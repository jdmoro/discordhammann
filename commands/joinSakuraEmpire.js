const Discord = require("discord.js");

module.exports.run = async (bot,message,args) => {

//!faction @user join

let toadd = message.guild.member(message.author);
let onerole = message.guild.roles.find(role => role.name === "SakuraEmpire");

await(toadd.addRole(onerole.id));
}

module.exports.help = {
  name: "sakuraempire"
}
