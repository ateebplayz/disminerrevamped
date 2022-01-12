const economy = require('../../economy')
const Discord = require('discord.js')
const { MessageEmbed } = require('discord.js')
module.exports = {
  commands: [`addbalance`, `addbal`, `dev`],
  minArgs: 0,
  maxArgs: 2,
  expectedArgs: "<The target`s @> <coin amount>",
  permissionError: `You do not have permission to use this command!`, 
  cooldown: 1,
  callback: async (message, arguments) => {
    const ids = [`754390594289139753`, `747913247176523856`]
    if(ids.includes(message.author.id)) {
    const mention = message.mentions.users.first()

    if (!mention) {
      const embed = new Discord.MessageEmbed()
      .setTitle(`Fail`)
      .setColor(`#FF0000`)
      .setFooter(`ok`)
      .setDescription(`<@${message.author.id}>, Please give **someone** coins!`)
  
      message.channel.send({embeds:[embed]})
      return
    }
const args = message.content.trim().split(/ +/g);
    const coins = args[2]
    if (isNaN(coins)) {
      const embed = new Discord.MessageEmbed()
      .setTitle(`Fail`)
      .setColor(`#FF0000`)
      .setFooter(`ok`)
      .setDescription(`<@${message.author.id}>, Specify a valid number of coins`)
  
      message.channel.send({embeds:[embed]})
      return
    }
    const userId = mention.id

    const newCoins = await economy.addCoins(userId, coins)

    const embed = new Discord.MessageEmbed()
    .setTitle(`Success`)
    .setColor(`#00FF00`)
    .setFooter(`ok`)
    .setDescription(`<@${message.author.id}>, You have given <!@${userId}> **${coins}**!`)

    message.channel.send({embeds:[embed]})
    } else {
      const embed = new Discord.MessageEmbed()
      .setTitle(`Fail`)
      .setColor(`#FF0000`)
      .setFooter(`ok`)
      .setDescription(`<@${message.author.id}>, You do not have the permissions to do so!`)
  
      message.channel.send({embeds:[embed]})
      return
    }
  },
}
