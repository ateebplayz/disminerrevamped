const Discord = require("discord.js")
const { MessageEmbed } = require('discord.js')
const embed = new MessageEmbed()
const { footer } = require('../../footer.json')
const economy = require('../../economy.js')
module.exports = {
    commands: 'shop'.toLowerCase(),
    minArgs: 0,
    maxArgs: 0,
    cooldown: 1,
    callback: async(message, arguments, text) => {
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
        const ow = new Discord.MessageEmbed()
            .setTitle('Shop')
            .setAuthor(message.author.username)
            .setFooter(footer)
            .setColor(message.member.displayHexColor)
            .setDescription('**Wooden Tools** - Free \n **Stone Tools** - 100,000$\n **Iron Tools** - 500,000$ \n **Gold Tools** - 1,000,000$\n **Diamond Tools** - 5,000,000$ \n **Emerald Tools** - 10,000,000$ \n **Obsidian Tools** - 25,000,000$ \n  **Bedrock Tools** - 50,000,000$ \n **Void Tools** - 100,000,000$')

        message.channel.send({embeds:[ow]})
    }
} 