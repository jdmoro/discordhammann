const Discord = require("discord.js");

module.exports.run = async (bot,message,args) => {


  int max = 100;
  int min = 1;
  int range = max - min + 1;

  for(int i = 0; i < 100; i++) {
    int random = (int) (Math.random() * range) + min;

    if(random = 1){
      message.channel.send("Keep being you Skikan.....It’s not that I love you or anything!");
      else {
        message.channel.send(" ", {
            file: "https://media.giphy.com/media/40677cZyM0BLiLPpgr/giphy.gif"
        });
      }
    }
  }
}

module.exports.help = {
  name: "praise"
}
