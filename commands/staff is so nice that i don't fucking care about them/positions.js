const Discord = require('discord.js')
const economy = require('../../economy.js')
const { footer } = require('../../footer.json')

module.exports = {
  commands: ['pos', 'Position', 'position', 'Pos', 'POS', 'POSITION', 'Positions', 'positions', 'POSITIONS', 'Staff', 'staff', 'STAFF'],
  minArgs: 0,
  maxArgs: null,
  cooldown: 1,
  callback: async(message,arguments, text) => {
    //declaring stuff
    const target = message.mentions.users.first() || message.author
    const targetId = target.id
let member = message.mentions.members.first() || message.member 
    const userId = target.id
    const userID = target.id

    const coins = await economy.getCoins(userId)
    //getting them ranks
   const helper = await economy.getItemsAmount(userId, 'helper')
   const mod = await economy.getItemsAmount(userId, 'mod')
   const admin = await economy.getItemsAmount(userId, 'admin')
   const hadmin = await economy.getItemsAmount(userId, 'hadmin')
   const codev = await economy.getItemsAmount(userId, 'codev')
   const dev = await economy.getItemsAmount(userId, 'dev')
   
    //If user has nothing send this
    let response = ``
if(helper > 0) response += '\nHelper'
if(mod > 0) response += '\n ,Moderator'
if(admin > 0) response += '\nAdministrator'
if(hadmin > 0) response += '\nHead Administrator'
if(codev > 0) response += `\nCo Developer`
if(dev > 0) response += '\nDeveloper'
const embed = new Discord.MessageEmbed()
	.setColor(message.member.displayHexColor)
	.setTitle(`**${member.user.username}'s Positions**`)
  .setDescription(response)
	.setTimestamp()
	.setFooter(`RickRolled#3526 - Version 1.2.4`);
  message.channel.send({embeds:[embed]})
    console.log('Success')
  }
} 