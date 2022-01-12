const Discord = require("discord.js")
const { MessageEmbed } = require('discord.js')
const embed = new MessageEmbed()
const { footer } = require('../footer.json')


module.exports = {
    commands: 'help'.toLowerCase(),
    minArgs: 0,
    maxArgs: 0,
    cooldown: 1,
    callback: (message, arguments, text) => {
        const help = new Discord.MessageEmbed()
            .setTitle('Help Commands')
            .setURL('https://discord.gg/Mm6t6DpbA7')
            .setAuthor(message.author.username)
            .setFooter(footer)
            .setColor(message.member.displayHexColor)
            .setDescription(`Hi! I am disminer, a minecraft related bot. I was designed by JustAte. My commands are : \n**d!buy**\n**d!donate**\n**d!patreon**\n**d!inventory**\n**d!pay**\n**d!shop**\n**d!cooldowns**\n**d!tools**\n**d!balance**\n**d!chop**\n**d!credit**\n**d!help**\n**d!hoe**(Under maintenance for economy update, try d!build instead!)\n**d!invite**\n**d!legends**\n**d!mine**\n**d!sell**\n**d!support**`)

            message.channel.send({embeds:[help]})
    }
} 