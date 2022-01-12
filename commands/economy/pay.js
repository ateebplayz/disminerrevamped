const { MessageEmbed } = require(`discord.js`);
const economy = require(`../../economy`)
const Discord = require(`discord.js`)
const { footer } = require('../../footer.json')
module.exports = {
  commands: `pay`.toLowerCase(),
  minArgs: 0,
  maxArgs: 2,
  cooldown: 5,
  expectedArgs: "<Target user`s @> <Amount of coins>",
  callback: async (message, arguments, text) => {
      const guy = message.author.id
        const doeshe = await economy.getItemsAmount(guy, 'woodentool')
        if(doeshe < 1) {
            const embed = new Discord.MessageEmbed()
            .setTitle('Fail')
            .setColor('#FF0000')
            .setFooter(footer)
            .setDescription('Please join disminer using the **d!start** command')
            message.channel.send({embeds:[embed]})
            return
        }
      if(message.author.bot) return
    const args = message.content.trim().split(/ +/g);
    const { member } = message

    const coinsOwned = await economy.getCoins( member.id)
    const target = message.mentions.users.first()
    if (!target) {
      const embed = new Discord.MessageEmbed()
      .setTitle(`Fail`)
      .setColor(`#FF0000`)
      .setFooter(footer)
      .setDescription(`<@${message.author.id}>, Specify someone to pay to!`)
  
      message.channel.send({embeds:[embed]})
      return
    }
    const coinsToGive = args[2]
    if(coinsToGive < 1) {
      const embed = new Discord.MessageEmbed()
      .setTitle(`Fail`)
      .setColor(`#FF0000`)
      .setFooter(footer)
      .setDescription(`<@${message.author.id}>, Please provide a valid number of coins!`)
  
      message.channel.send({embeds:[embed]})
      console.log(coinsToGive)
      return
    } 

    if (coinsOwned < coinsToGive) {
      const embed = new Discord.MessageEmbed()
      .setTitle(`Fail`)
      .setColor(`#FF0000`)
      .setFooter(footer)
      .setDescription(`<@${message.author.id}>, You do not have **${coinsToGive}** coins!`)
  
      message.channel.send({embeds:[embed]})
      return
    }
   

    const remainingCoins = await economy.addCoins(
      member.id,
      coinsToGive * -1
    )
    const newBalance = await economy.addCoins(target.id, coinsToGive)

    
    const embed = new Discord.MessageEmbed()
    .setTitle(`Success`)
    .setColor(`#00FF00`)
      .setFooter(footer)
    .setDescription(`<@${message.author.id}>, You have given <@${target.id}>, **${coinsToGive}** coins!`)

    message.channel.send({embeds:[embed]})
  },
}