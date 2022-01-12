const Discord = require("discord.js")
const { MessageEmbed } = require('discord.js')
const embed = new MessageEmbed()

const { footer } = require('../footer.json')
module.exports = {
    commands: 'invite'.toLowerCase(),
    minArgs: 0,
    maxArgs: 0,
    cooldown: 3,
    callback: (message, arguments, text) => {
        const embed = new Discord.MessageEmbed()
	.setFooter(footer)
            .setColor(message.member.displayHexColor)
	.setTitle('Invite Me To Your Server')
	.setURL('https://discord.com/oauth2/authorize?client_id=818008902226018314&scope=bot')
	.setTimestamp()
    message.channel.send({embeds:[embed]})
    }
}

