const Discord = require('discord.js')
const economy = require('../economy.js')

          const { MessageEmbed } = require('discord.js')
const { footer } = require('../footer.json')
module.exports = {
    commands: ['mine'.toLowerCase(),'m'.toLowerCase()],
    minArgs: 0,
    maxArgs: 0,
    cooldown: 5,
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
      const userId = message.author.id
      
  const toolstone = await economy.getItemsAmount(userId, 'stonetool')
  const tooliron = await economy.getItemsAmount(userId, 'irontool')
  const toolobsidian = await economy.getItemsAmount(userId, 'obsidiantool')
  const toolgold = await economy.getItemsAmount(userId, 'goldtool')
  const tooldia = await economy.getItemsAmount(userId, 'diamondtool')
  const toolems = await economy.getItemsAmount(userId, 'emeraldtool')
  const toolbed = await economy.getItemsAmount(userId, 'bedrocktool')
  const toolvoid = await economy.getItemsAmount(userId, 'voidtool')
      if(message.author.bot) return
        const userID = message.author.id
        var Cought1 = ('You went mining in a cave under your ');
        var Reply1 = (' and you earned\n');
        var moneyrandom = (Math.floor(Math.random() * 1000) + 100);
        var diamondsrandom = (Math.floor(Math.random() * 100) + 2);
        var stonerandom = (Math.floor(Math.random() * 1000) + 500);
        var emeraldsrandom = (Math.floor(Math.random() * 25) + 100);
        let responsecrime = moneyrandom + '$\n' + diamondsrandom + ' <:Diamond:825393298909954088>\n' + emeraldsrandom + ' <:Emerald:825393316412522527>\n' + stonerandom + ' <:Stone:825393571246899220>'
        var CA = ['mansion','house','cousins mansion', 'trashcan'];
        var People = CA[Math.floor(Math.random() * CA.length)];
        const normal = economy.getItemsAmount(userID, 'normalm')
        const embed = economy.getItemsAmount(userID, 'embedm')
        
        /*if(normal = 1) {
          message.reply(Cought1 + People + Reply1 + responsecrime)
        }*/
        
        const ne = new MessageEmbed()
            .setTitle('Mine')
            .setFooter(footer)
            .setColor(message.member.displayHexColor)
            .setDescription(Cought1 + People + Reply1 + responsecrime)
            message.channel.send({embeds:[ne]})
        
        await economy.addCoins( userID, moneyrandom)
        await economy.addItems( userID, diamondsrandom, 'diamonds')
        await economy.addItems( userID, emeraldsrandom, 'emeralds')
        await economy.addItems( userID, stonerandom, 'stone')
  }
}