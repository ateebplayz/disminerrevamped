const Discord = require("discord.js")
const { MessageEmbed } = require('discord.js')
const embed = new MessageEmbed()
const { footer } = require('../../footer.json')

module.exports = {
    commands:['donate'],
    minArgs: 0,
    maxArgs: 0,
    cooldown: 1,
    callback: (message, arguments, text) => {
        const help = new Discord.MessageEmbed()
            .setTitle('Donate')
            .setAuthor(message.author.username)
            .setDescription(`Donate to disminer today!, You can support disminer by using our OTP link by clicking [here](https://donatebot.io/checkout/837450770555076629), \n\n Alternatively you can support us on patreon by clicking [here](https://patreon.com/disminer)`)
            .setFooter(footer)
            .setColor(message.member.displayHexColor)

        message.channel.send({embeds:[help]})
    }
} 
