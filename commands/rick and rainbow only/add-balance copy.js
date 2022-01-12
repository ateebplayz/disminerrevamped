const economy = require('../../economy')
const Discord = require('discord.js')
const { MessageEmbed } = require('discord.js')
module.exports = {
  commands: 'shutdown',
  minArgs: 0,
  maxArgs: 2,
  expectedArgs: "<The target`s @> <coin amount>",
  permissionError: `You do not have permission to use this command!`, 
  cooldown: 1,
  callback: async(message, arguments) => {
      
    const ids = [`754390594289139753`, `747913247176523856`]
        if(ids.includes(message.author.id)) {
    const spAmount = await economy.getItemsAmount('rik')
    message.channel.send(spAmount)
        }
  },
}
