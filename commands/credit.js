const Discord = require("discord.js")
const { MessageEmbed } = require('discord.js')
const embed = new MessageEmbed()
const { footer } = require('../footer.json')

module.exports = {
    commands: 'credit'.toLowerCase(),
    minArgs: 0,
    maxArgs: 0,
    cooldown: 1,
    callback: (message, arguments, text) => {
        const credit = new Discord.MessageEmbed()
            .setTitle('Bot Credits')
            .setAuthor(message.author.username)
            .setFooter(footer)
            .setColor(message.member.displayHexColor)
            .setDescription(`**Owner** : Konami\n**Devoloper** : RickRolled(JustAte)\n**Co-Developer** : mkpanda\n**Head Administrator** : Rainbow\n**Administrator(s)** : 1750sai, Jamikin, Abigail\n**Moderator(s)** : Common_Sir Fluffu, Spider007, MADMAN656563, ducky\n **Helpers(s)** : Matthew, darkvoid, Anomi`)

            message.channel.send({embeds:[credit]})
    }
} 
