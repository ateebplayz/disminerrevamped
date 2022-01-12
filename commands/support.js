const Discord = require("discord.js")
const { MessageEmbed } = require('discord.js')
const embed = new MessageEmbed()
const { footer } = require('../footer.json')


module.exports = {
    commands: 'support'.toLowerCase(),
    minArgs: 0,
    maxArgs: 0,
    cooldown: 3,
    callback: (message, arguments, text) => {
       const embed = new Discord.MessageEmbed()
	.setTitle('Support Server!')
	.setURL('https://discord.gg/TCEck9knEe')
	.setTimestamp()
	.setFooter(footer)
            .setColor(message.member.displayHexColor);
            message.channel.send({embeds:[embed]})
    }
}
