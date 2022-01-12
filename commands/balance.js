const economy = require('../economy')
const { MessageEmbed } = require('../economy.js')
const Discord = require('discord.js')
const { footer } = require('../footer.json')
module.exports = {
  commands: ['balance'.toLowerCase(), 'bal'.toLowerCase()],
  maxArgs: 1,
  cooldown: 3,
  expectedArgs: "[Target user's @]",
  callback: async (message) => {
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
    let member = message.mentions.members.first() || message.member
    const target = message.mentions.users.first() || message.author
    const targetId = target.id

    const userId = target.id
    const userID = target.id

    const coins = await economy.getCoins(userId)
let trashcanAmount = await economy.getItemsAmount( userID, 'trashcan')
        let diamondsAmount = await economy.getItemsAmount( userID, 'diamonds')
        let ticketAmount = await economy.getItemsAmount( userID, 'ticket')
        let bananaAmount = await economy.getItemsAmount( userID, 'banana')
        let stoneAmount = await economy.getItemsAmount( userID, 'stone')
        let emeraldsAmount = await economy.getItemsAmount( userID, 'emeralds')
        
        
        
        let oakAmount = await economy.getItemsAmount( userID, 'oakwood')
        let birchAmount = await economy.getItemsAmount( userID, 'birchwood')
        let acaciaAmount = await economy.getItemsAmount( userID, 'acaciawood')
        let spruceAmount = await economy.getItemsAmount( userID, 'sprucewood')
        let jungleAmount = await economy.getItemsAmount( userID, 'junglewood')
        
        
        let gravelAmount = await economy.getItemsAmount( userID, 'gravel')
        let grassAmount = await economy.getItemsAmount( userID, 'grass')
        let dirtAmount = await economy.getItemsAmount( userID, 'dirt')

        
        
        let wheatAmount = await economy.getItemsAmount( userID, 'wheat')
        let carrotAmount = await economy.getItemsAmount( userID, 'carrot')
        let potatoAmount = await economy.getItemsAmount( userID, 'potato')
        // event items
        let kaellyAmount = await economy.getItemsAmount( userID, 'kaelly')

        let mattAmount = await economy.getItemsAmount( userID, 'matt')

        //d!fight 
        let rfAmount = await economy.getItemsAmount(userID, 'rf')
        let gpAmount = await economy.getItemsAmount(userID, 'gp')
        let boneAmount = await economy.getItemsAmount(userID, 'bone')
        console.log(ticketAmount,bananaAmount,trashcanAmount,diamondsAmount,emeraldsAmount,stoneAmount,oakAmount,birchAmount,spruceAmount,jungleAmount,acaciaAmount,gravelAmount,dirtAmount,grassAmount,wheatAmount,carrotAmount,potatoAmount)
        let trashcanPrice = 1
        let ticketPrice = 1
        let bananaPrice = 1
        let diamondsPrice = 22
        let stonePrice = 2
        let emeraldsPrice = 32
        let oakPrice = 10
        let birchPrice = 15
        let acaciaPrice = 25
        let sprucePrice = 15
        let junglePrice = 25
        let gravelPrice = 21
        let dirtPrice = 5
        let grassPrice = 13
        let wheatPrice = 16
        let carrotPrice = 30
        let potatoPrice = 34
        let kaellyPrice = 25000
        let mattPrice = 6969
        let gpPrice = 34
        let bonePrice = 30
        let rfPrice = 16
        let totPrice = (trashcanAmount*trashcanPrice)+(bananaAmount*bananaPrice)+(ticketAmount*ticketPrice)+(diamondsAmount*diamondsPrice)+(emeraldsAmount*emeraldsPrice)+(stoneAmount*stonePrice)+(oakPrice*oakAmount)+(birchPrice*birchAmount)+(sprucePrice*spruceAmount)+(junglePrice*jungleAmount)+(acaciaPrice*acaciaAmount)+(gravelAmount*gravelPrice)+(dirtAmount*dirtPrice)+(grassAmount*grassPrice)+(wheatAmount*wheatPrice)+(carrotAmount*carrotPrice)+(potatoAmount*potatoPrice)+(kaellyPrice*kaellyAmount)+(mattAmount*mattPrice)+(rfAmount*rfPrice)+(boneAmount*bonePrice)+(gpAmount*gpPrice)
        let total = totPrice+coins
        let desc = `\n**Total Balance** : ${formatNumber(total)}\n**Coins Owned** : ${formatNumber(coins)}\n**Inventory Value** : ${formatNumber(totPrice)}`
        function formatNumber(number) {
    let str = String(number)

    return str.split('').reduce(
        (a, b, i) => a + (i && !((str.length - i) % 3) ? ',' : '') + b,
        ''
    )
}
    const bal = new Discord.MessageEmbed()
    .setTitle(`${member.user.username}'s balance`)
    .setDescription(desc)
    .setFooter(footer)
    .setColor(message.member.displayHexColor)
    
    message.channel.send({embeds:[bal]})
  },
}
