const Discord = require("discord.js");

module.exports.run = async (bot,message,args) => {

  message.delete().catch(O_o=>{});
  message.channel.send('A skull!?! <@252153643745148938> did you lose your head again?\nBetter screw it on to that hollow body of yours.\n*Ehh?!?* You want me to do that?\n**SIIIIIIIIMMSS!!!**')

}

module.exports.help = {
  name: "skull"
}
