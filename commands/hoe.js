const economy = require('../economy.js')

        const { MessageEmbed } = require('discord.js')
const { footer } = require('../footer.json')
const Discord = require('discord.js')
module.exports = {
    commands: ['hoe'.toLowerCase(),'h'.toLowerCase()],
    minArgs: 0,
    maxArgs: 0,
    cooldown: 120,
    callback: async(message, arguments, text) => {
            const embed = new Discord.MessageEmbed()
            .setTitle('Fail')
            .setColor('#FF0000')
            .setFooter(footer)
            .setDescription('This command is currently being maintained, try again later, thanks!')
            message.channel.send({embeds:[embed]})
            return

    }
}