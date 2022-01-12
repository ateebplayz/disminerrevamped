const Discord = require('discord.js')
const { MessageEmbed } = require('discord.js')
const { footer } = require('../footer.json')
module.exports = {
   commands: ['legend'.toLowerCase(), 'legends'.toLowerCase()],
   minArgs: null,
   maxArgs: 2,
   cooldown: 1,
   callback: async(message, arguments, text) => {
   let desc = 'Disminer faced many legends, many of whom left for personal reasons etc. This is the people who contributed, but quit Discord.\n\n`Loading`: *Loading was a member of M!necord, Atom found loading when he joined M!necord. He was a true legend and friend, claiming to have left for personal reasons and exams*\n\n`IAMWH0FARTED`: *IAMWH0FARTED was too a member of M!necord whom atom met, and made friends with. His account was deleted in February 2021, claiming to have had his parents ban him from Discord.*\n\n`꧁{★✿яαιивσω✿★}꧂#7225`: *Rainbow is the co-founder co-owner, or whatever other co- you can think of, of disminer. Itd be over the allocated allowed message sending in an embed if i sent i thought of her and how i met her(yes im rick talking). She have left for a while without letting anyone knowing.*'
   const legends = new Discord.MessageEmbed()
   .setTitle('Legends')
   .setColor(message.author.displayHexColor)
   .setDescription(desc)
   .setFooter(footer)
   message.channel.send({embeds:[legends]})
  }
}