const Discord = require("discord.js");

module.exports.run = async (bot,message,args) => {

    let replyroll = ["Yes!", "No! No! No!", "Maybe? I don’t know", "Hmph! I guess so... Baka!"];
    let whyroll = ["Because you're a pervert!", "ask yourself! idiot.. Hmpf!", "Sims would know..Hmpf!"];
    let howroll = ["How would I know?", "Buy more gems! Akashi?!", "By not being an idiot! Baka!", "Hammann won't answer stupid questions"];
    let whenroll = ["How would I know?", "Hammann won't answer stupid questions", "When? when you give what Hammann wants!"];
    let whereroll = ["Eh?! I'm not a map!", "In the depths of the sea! where you will be if you don't give Hammann food!", "Do I look like I know?", "Well, I haven't heard a question as stupid as that."];
    let whatroll = ["I'm not answering a pervert!", "I don't know!", "*snobs*", "I don't care.", "Do you really think I'd answer you?", "*hmpf*"];
    let whoroll = ["The Pervert", "That certain Admiral", "The Vice-Admirals of course", "Me!", "It was Sims!"];

    let questionroll = args.slice(1).join(" ");
    let resultroll = Math.floor((Math.random() * replyroll.length));

    if(args[0] === 'why') {
        return message.channel.send(whyroll[resultroll]);
    }
    else if (args[0] === 'how'){
        return message.channel.send(howroll[resultroll]);
    }
    else if (args[0] === 'when'){
        return message.channel.send(whenroll[resultroll]);
    }
    else if (args[0] === 'where'){
        return message.channel.send(whereroll[resultroll]);
    }
    else if (args[0] === 'what'){
        return message.channel.send(whatroll[resultroll]);
    }
    else if (args[0] === 'who'){
        return message.channel.send(whoroll[resultroll]);
    }
    else {
        return message.channel.send(replyroll[resultroll]);
    }

  }
module.exports.help = {
  name: "ask"
}