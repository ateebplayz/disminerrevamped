const Discord = require("discord.js")
const { MessageEmbed } = require('discord.js')
const embed = new MessageEmbed()
const { footer } = require('../../footer.json')

module.exports = {
    commands:['patreon', 'Patreon', 'PATREON'],
    minArgs: 0,
    maxArgs: 0,
    cooldown: 1,
    callback: (message, arguments, text) => {
        const help = new Discord.MessageEmbed()
            .setTitle('Patreon')
            .setAuthor(message.author.username)
            .setDescription(`You can support us on patreon by clicking [here](https://patreon.com/disminer)\nTo run the bot smoothly i need atleast 2$ a month, any help is appreciated tho. :)`)
            .setFooter(footer)
            .setColor('#00FF00')

        message.channel.send({embeds:[help]})
    }
} 
