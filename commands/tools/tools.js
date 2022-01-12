const Discord = require('discord.js')
const economy = require('../../economy.js')
const { footer } = require('../../footer.json')
module.exports = {
  commands: ['tool'.toLowerCase(), 't'.toLowerCase(), 'tools'.toLowerCase()],
  minArgs: 0,
  maxArgs: null,
  cooldown: 1,
  callback: async(message,arguments, text) => {
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
    //declaring stuff
    const target = message.mentions.users.first() || message.author
    const targetId = target.id
let member = message.mentions.members.first() || message.member 
    const userId = target.id
    const userID = target.id

    const coins = await economy.getCoins(userId)


     //GEtting them tools

     const stone = await economy.getItemsAmount(userId, 'stonetool')
     const iron = await economy.getItemsAmount(userId, 'irontool')
     const gold = await economy.getItemsAmount(userId, 'goldtool')
     const diamond = await economy.getItemsAmount(userId, 'diamondtool')
     const emerald = await economy.getItemsAmount(userId, 'emeraldtool')
     const obsidian = await economy.getItemsAmount(userId, 'obsidiantool')
     const bedrock = await economy.getItemsAmount(userId, 'bedrocktool')
     const voidt = await economy.getItemsAmount(userId, 'voidtool')
     const total = stone + iron + gold + diamond + emerald + obsidian + bedrock + voidt
    //If user has nothing send this
    let response = ``
if(stone > 0) response += '\nStone Tools'
if(iron > 0) response += '\nIron Tools'
if(gold > 0) response += '\nGold Tools'
if(diamond > 0) response += '\nDiamond Tools'
if(emerald > 0) response += '\nEmerald Tools'
if(obsidian > 0) response += '\nObsidian Tools'
if(bedrock > 0) response += '\nBedrock Tools'
if(voidt > 0) response += '\nVoid Tools'
const embed = new Discord.MessageEmbed()
	.setColor(message.member.displayHexColor)
	.setTitle(`**${member.user.username}'s Tools**`)
  .setDescription(response)
	.setTimestamp()
	.setFooter(footer);
  message.channel.send({embeds:[embed]})
    console.log('Success')
  }
} 