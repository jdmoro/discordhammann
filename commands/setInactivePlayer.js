const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  //!faction @user join

  let toadd = message.guild.member(message.author);
  let first = message.guild.roles.find(role => role.name === "EagleUnion");
  let second = message.guild.roles.find(role => role.name === "IronBlood");
  let third = message.guild.roles.find(role => role.name === "RoyalNavy");
  let fourth = message.guild.roles.find(role => role.name === "SakuraEmpire");
  let fifth = message.guild.roles.find(role => role.name === "VichyaDominion");

  await (toadd.removeRole(first.id));
  await (toadd.removeRole(second.id));
  await (toadd.removeRole(third.id));
  await (toadd.removeRole(fourth.id));
  await (toadd.removeRole(fifth.id));


  const Discord = require("discord.js");
  const Exp = require("../models/exp.js");
  const mongooseuri = process.env.MONGODB_URI;
  const mongoose = require("mongoose");
  const fs = require("fs");


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
  name: "weekly"
}