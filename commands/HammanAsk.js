const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let replyroll = ["Yes! <:Oohh:503545401731711006>", "No! <:z2No:503547731340427264>", "Maybe? <:KagaSip:504873454571618304>", "<:LaffeyHide:503547822549762048>", "I don’t know <:uniConfused:503539368535916556>"];
  let whyroll = ["Because you're a pervert!", "ask yourself! idiot.. Hmpf!", "Sims would know..Hmpf!"];
  let howroll = ["How would I know?", "Buy more gems! Akashi?!", "By not being an idiot! Baka!", "Hammann won't answer stupid questions"];
  let whenroll = ["How would I know?", "Hammann won't answer stupid questions", "When? when you give what Hammann wants!"];
  let whereroll = ["Eh?! I'm not a map!", "In the depths of the sea! where you will be if you don't give Hammann food!", "Do I look like I know?", "Well, I haven't heard a question as stupid as that."];
  let whatroll = ["I'm not answering a pervert!", "I don't know!", "*snobs*", "I don't care.", "Do you really think I'd answer you?", "*hmpf*"];
  let whoroll = ["The Pervert", "That certain Admiral", "The Vice-Admirals of course", "Me!", "It was Sims!"];

  let result1roll = Math.floor((Math.random() * replyroll.length));
  let result2roll = Math.floor((Math.random() * whyroll.length));
  let result3roll = Math.floor((Math.random() * howroll.length));
  let result4roll = Math.floor((Math.random() * whenroll.length));
  let result5roll = Math.floor((Math.random() * whereroll.length));
  let result6roll = Math.floor((Math.random() * whatroll.length));
  let result7roll = Math.floor((Math.random() * whoroll.length));

  if (message.content.includes("why")) {
    return message.channel.send(whyroll[result2roll]);
  } else if (message.content.includes("how")) {
    return message.channel.send(howroll[result3roll]);
  } else if (message.content.includes("when")) {
    return message.channel.send(whenroll[result4roll]);
  } else if (message.content.includes("where")) {
    return message.channel.send(whereroll[result5roll]);
  } else if (message.content.includes("what")) {
    return message.channel.send(whatroll[result6roll]);
  } else if (message.content.includes("who")) {
    return message.channel.send(whoroll[result7roll]);
  } else {
    return message.channel.send(replyroll[result1roll]);
  }

}
module.exports.help = {
  name: "ask"
}