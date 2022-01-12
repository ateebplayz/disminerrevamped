const economy = require('../economy.js')
const { MessageEmbed } = require('discord.js')
const { footer } = require('../footer.json')
const Discord = require('discord.js')

module.exports = {
    commands: ["chop".toLowerCase(), "c".toLowerCase()],
    minArgs: 0,
    maxArgs: 0,
    cooldown: 30,
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
const toolstone = await economy.getItemsAmount(userId, 'stonetool')
const tooliron = await economy.getItemsAmount(userId, 'irontool')
const toolobsidian = await economy.getItemsAmount(userId, 'obsidiantool') 
const toolgold = await economy.getItemsAmount(userId, 'goldtool') 
const tooldia = await economy.getItemsAmount(userId, 'diamondtool')
const toolems = await economy.getItemsAmount(userId, 'emeraldtool')
const toolbed = await economy.getItemsAmount(userId, 'bedrocktool')
const toolvoid = await economy.getItemsAmount(userId, 'voidtool')
        const userID = message.author.id
        var Cought1 = ('You went chopping in ');
        var Reply1 = (' and you earned\n');
        var moneyrandom = (Math.floor(Math.random() * 1000) + 2);
        var oakrandom = (Math.floor(Math.random() * 25) + 100);
        var birchrandom = (Math.floor(Math.random() * 25) + 100);
        var sprucerandom = (Math.floor(Math.random() * 25) + 100);
        var junglerandom = (Math.floor(Math.random() * 25) + 100);
        var acaciarandom = (Math.floor(Math.random() * 25) + 100);
        let responsecrime =  moneyrandom + `$\n` + oakrandom + ` <:Oak:825397173473771530>\n` + birchrandom + `<:Birch:825396932238245908>\n` + sprucerandom + ` <:Spruce:825396914937790504>\n` + junglerandom + ` <:Jungle:825396900038836234>\n` + acaciarandom + ` <:Acacia:825395940247470150>`
        var CA = ['the Jungle',' the Woods','the Forest', 'someones garden :))'];
        var People = CA[Math.floor(Math.random() * CA.length)];
        const { MessageEmbed } = require('discord.js')
        const ne = new MessageEmbed()
            .setTitle('Chop')
            .setFooter(footer)
            .setColor(message.member.displayHexColor)
            .setDescription(Cought1 + People + Reply1 + responsecrime)
            message.channel.send({embeds:[ne]})
        await economy.addCoins( userID, moneyrandom)
        await economy.addItems( userID, oakrandom, 'oakwood')
        await economy.addItems( userID, birchrandom, 'birchwood')
        await economy.addItems( userID, sprucerandom, 'sprucewood')
        await economy.addItems( userID, junglerandom, 'junglewood')
        await economy.addItems(userID, acaciarandom, 'acaciawood')
    }
}