const Discord = require("discord.js");

module.exports.run = async (bot,message,args) => {

  let emotesroll = ["How long were you going to keep me waiting?! Being alone feels so.. Hmph!", "YOU PERVERT!!", "Stop Touching My Head!", "I don't want you touching me, you pervert!", "Baka! Baka! Baka! Baka! It's not like Hammann is enjoying this", "Don't make me bite you!", "Hands off you pervert!", "Don't touch Hammann so casually, you pervert!", "Why won't you talk to Hammann?", "*(picks up phone)*\nHello, is this Military Police? Yes, this Commander is a pervert and he....", "If you're not looking at Hammann then at whom?\nYou really are just a giant idiot who doesn't understand women!\nJust because Hammann stops being angry for a little bi--\naaah why did you start hugging me suddenly?!\nI-I'm going to call the police!", `${message.author}, You want Hammann to go into your dorm? Pervert!`];
  let resultemotesroll = Math.floor((Math.random() * emotesroll.length));
  let questionemotesroll = args.slice(1).join(" ");

  message.delete().catch(O_o=>{});
  message.channel.send(emotesroll[resultemotesroll]);

  }

module.exports.help = {
  name: "emotes"
}
