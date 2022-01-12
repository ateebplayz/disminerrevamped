const Discord = require('discord.js')
const economy = require('../../economy.js')

const { footer } = require('../../footer.json')
module.exports = {
  commands: ['cooldowns'.toLowerCase()],
  minArgs: 0,
  maxArgs: null,
  cooldown: 1,
  callback: async(message,arguments, text) => {
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
const embed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle(`**Bot Cooldowns**`)
  .setDescription('`D!mine`: **5 seconds**\n`D!chop`: **30 seconds**\n`d!hoe`: **120 seconds**')
	.setTimestamp()
	.setFooter(footer);
  message.channel.send({embeds:[embed]})

    console.log('Success')
  }
} 