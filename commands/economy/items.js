const Discord = require("discord.js")
const economy = require('../../economy.js')

const { footer } = require('../../footer.json')
module.exports = {
    commands: ['inventory'.toLowerCase(), 'inv'.toLowerCase(), 'i'.toLowerCase()],
    minArgs: 0, //change to 1 once you will have to choose what to sell
    maxArgs: null,
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
        let member = message.mentions.members.first() || message.member
        const target = member.id
        const userId = message.author.id
        const coins = await economy.getCoins(target)
        const userID = member.user.id
        let stuff = arguments[0]
        stuff = 'all' //delete the line once you make it so you can sell just some stuff
        let diamondsAmount = await economy.getItemsAmount(userID, 'diamonds')
        let emeraldsAmount = await economy.getItemsAmount(userID, 'emeralds')
        let stoneAmount = await economy.getItemsAmount(userID, 'stone')
        
        let spAmount = await economy.getItemsAmount(userID, 'stonetool')
        
        let oakAmount = await economy.getItemsAmount(userID, 'oakwood')
        let birchAmount = await economy.getItemsAmount(userID, 'birchwood')
        let spruceAmount = await economy.getItemsAmount(userID, 'sprucewood')
        let jungleAmount = await economy.getItemsAmount(userID, 'junglewood')
        let acaciaAmount = await economy.getItemsAmount(userID, 'acaciawood')
        
        
        
        let gravelAmount = await economy.getItemsAmount(userID, 'gravel')
        let dirtAmount = await economy.getItemsAmount(userID, 'dirt')
        let grassAmount = await economy.getItemsAmount(userID, 'grass')
        
        
        
        let wheatAmount = await economy.getItemsAmount(userID, 'wheat')
        let carrotAmount = await economy.getItemsAmount(userID, 'carrot')
        let potatoAmount = await economy.getItemsAmount(userID, 'potato')

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
        let totPrice = diamondsAmount*diamondsPrice+emeraldsAmount*emeraldsPrice+stoneAmount*stonePrice+oakPrice*oakAmount+birchPrice*birchAmount+sprucePrice*spruceAmount+junglePrice*jungleAmount+acaciaPrice*acaciaAmount+gravelAmount*gravelPrice+dirtAmount*dirtPrice+grassAmount*grassPrice+wheatAmount*wheatPrice+carrotAmount*carrotPrice+potatoAmount*potatoPrice
        let response = ``
if(diamondsAmount > 0) response += `\n<:Diamond:825393298909954088>: ${diamondsAmount}`
if(emeraldsAmount > 0) response += `\n<:Emerald:825393316412522527>: ${emeraldsAmount}`
if(stoneAmount > 0) response += `\n<:Stone:825393571246899220>: ${stoneAmount}`
if(birchAmount > 0) response += `\n<:Birch:825396932238245908>: ${birchAmount}`
if(spruceAmount > 0) response += `\n<:Spruce:825396914937790504>: ${spruceAmount}`
if(jungleAmount > 0) response += `\n<:Jungle:825396900038836234>:${jungleAmount}`
if(oakAmount > 0) response += `\n<:Oak:825397173473771530>: ${oakAmount}`
if(acaciaAmount > 0) response += `\n<:Acacia:825395940247470150>: ${acaciaAmount}`
if(wheatAmount > 0) response += `\n<:Wheat:825402045950328843>: ${wheatAmount}`
if(carrotAmount > 0) response += `\n<:Carrot:825396882917556234>: ${carrotAmount}`
if(potatoAmount > 0) response += `\n<:Potato:825396866052390953> ${potatoAmount}`
if(gravelAmount > 0) response += `\n<:Gravel:825397608675672064>: ${gravelAmount}`
if(dirtAmount > 0) response += `\n<:Dirt:825397955120988220>: ${dirtAmount}`
if(grassAmount > 0) response += `\n<:Grass:825399212115755029>: ${grassAmount}`
if(1 > 0) response += `\nTotal Balance : ${coins}`
        const embed = new Discord.MessageEmbed()
        embed.setAuthor(member.user.tag, member.user.displayAvatarURL({dynamic: true}))
        .setFooter(footer)
            .setColor(message.member.displayHexColor)
        embed.setTitle(`__${member.user.username}'s Inventory__:`)
        embed.setDescription(response)
        embed.addField(`Total inventory value:`, `${(diamondsAmount*diamondsPrice+emeraldsAmount*emeraldsPrice+stoneAmount*stonePrice+oakPrice*oakAmount+birchPrice*birchAmount+sprucePrice*spruceAmount+junglePrice*jungleAmount+acaciaPrice*acaciaAmount+gravelAmount*gravelPrice+dirtAmount*dirtPrice+grassAmount*grassPrice+wheatAmount*wheatPrice+carrotAmount*carrotPrice+potatoAmount*potatoPrice)}$`)
        embed.addField(`Balance: `, `${coins}$`)
        embed.setTimestamp()
        message.channel.send({embeds:[embed]})
        console.log(`${member.user.username} success`)
    }
};
