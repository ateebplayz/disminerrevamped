const economy = require('../economy.js')
const { MessageEmbed } = require('discord.js')
const { footer } = require('../footer.json')
const Discord = require('discord.js')

module.exports = {
    commands: ["build".toLowerCase(), "b".toLowerCase()],
    minArgs: 0,
    maxArgs: 0,
    cooldown: 120,
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
      if(message.author.bot) return
const userId = message.author.id
        const userID = message.author.id
        var Cought1 = ('You got hired by ');
        var Reply1 = (' and you earned\n');
        var moneyrandom = (Math.floor(Math.random() * 10000) + 1000);
        var random = (Math.floor(Math.random() * 10000) + 1000);
        let responsecrime =  moneyrandom 
        var CA = ['Madman builds', "Fluff Builds", "Rik Ashkey Real Estate"]
        var People = CA[Math.floor(Math.random() * CA.length)];
        const ne = new MessageEmbed()
            .setTitle('Build')
            .setFooter(footer)
            .setColor(message.member.displayHexColor)
            .setDescription(Cought1 + People + Reply1 + responsecrime)
            message.channel.send({embeds:[ne]})
        await economy.addCoins( userID, moneyrandom)
        
        if(random === 1001) {
        	const ne = new MessageEmbed()
            .setTitle('Lucky!')
            .setFooter(footer)
            .setColor(message.member.displayHexColor)
            .setDescription("You have gotten a 100,000,000 tip! Sick dude!")
            message.channel.send({embeds:[ne]})
            const money = 100000000
            await economy.addCoins( userID, money)
        }
    }
}