const Discord = require("discord.js");

module.exports.run = async (bot,message,args) => {


  const streamOptions = { seek: 0, volume: 1 };
  var voiceChannel = message.member.voiceChannel;
          voiceChannel.join().then(connection => {
              console.log("joined channel");
              const stream = ytdl('https://www.youtube.com/watch?v=gOMhN-hfMtY', { filter : 'audioonly' });
              const dispatcher = connection.playStream(stream, streamOptions);
              dispatcher.on("end", end => {
                  console.log("left channel");
                  voiceChannel.leave();
              });

}

module.exports.help = {
  name: "pledge"
}
