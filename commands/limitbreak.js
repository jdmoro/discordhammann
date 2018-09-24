const Discord = require("discord.js");

module.exports.run = async (bot,message,args) => {

  let limitbreak = new Discord.RichEmbed()
  .setColor("#4aef5a")
  .setFooter("Universal Bullin and Prototype Bullin MkII - These super cheerful and friendly lolis can be used in the place of dupes to LB a shipgirl.These are especially useful for limited construction/event ships or rare drop only ships that you might not get many copies of. However, they're not so uncommon you can't afford to use them on other ships as well, so don't get too hung up on it.")
  .addField("When to limit break a ship 101",
  "Unless you are playing the CN server (which allows you to raise a ship to level 100 without limit breaking), you will limit break (LB) and MaxLB any girl you're using. The important question is **when?**\n\nThis depends on the circumstances.\n- If you're actively using a ship with no problems, limit break them as they hit the soft level caps of 70, 80, and 90.\n- If you're actively using a ship but are encountering problems, you can limit break your ship to give her a power boost. However, you may also be better off going to a weaker map to grind some levels and/or improving and upgrading her equipment.\n- For a ship you're not actively using, it's good to level them to at least level 30 via commissions (not the 800-1200 oil one) and backyard so that you can limit break them for collection reward purposes and fulfill commission minimum level requirements easily.")

  return message.channel.send(limitbreak);
}

module.exports.help = {
  name: "limitbreak"
}
