const Discord = require("discord.js")
const economy = require('../economy.js')

const { footer } = require('../footer.json')
module.exports = {
    commands: 'sell'.toLowerCase(),
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
      if(message.author.bot) return
       const userID = message.author.id
         let stuff = arguments[0]
        stuff = 'all' //delete the line once you make it so you can sell just some stuff
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

        let gpAmount = await economy.getItemsAmount(userID, 'gp')

        let rfAmount = await economy.getItemsAmount(userID, 'rf')

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
        let totPrice = (trashcanAmount*trashcanPrice)+(bananaAmount*bananaPrice)+(ticketAmount*ticketPrice)+(diamondsAmount*diamondsPrice)+(emeraldsAmount*emeraldsPrice)+(stoneAmount*stonePrice)+(oakPrice*oakAmount)+(birchPrice*birchAmount)+(sprucePrice*spruceAmount)+(junglePrice*jungleAmount)+(acaciaPrice*acaciaAmount)+(gravelAmount*gravelPrice)+(dirtAmount*dirtPrice)+(grassAmount*grassPrice)+(wheatAmount*wheatPrice)+(carrotAmount*carrotPrice)+(potatoAmount*potatoPrice)+(kaellyPrice*kaellyAmount)+(mattAmount*mattPrice)+(rfPrice*rfAmount)+(bonePrice*boneAmount)+(gpPrice*gpAmount)
        if((trashcanAmount+bananaAmount+ticketAmount*ticketPrice+diamondsAmount+stoneAmount+emeraldsAmount+oakAmount+birchAmount+spruceAmount+jungleAmount+acaciaAmount+gravelAmount+dirtAmount+grassAmount+carrotAmount+wheatAmount+potatoAmount) < 1) return message.reply(`You cant sell nothing, get items by d!mine,d!chop,d!dig,d!hoe`)
        const embed = new Discord.MessageEmbed()
        .setTitle('Success')
        .setColor('#00FF00')
        .setFooter(footer)
        .setDescription(`<@${message.author.id}>, You have sold all of your stuff for the price of $${totPrice}!`)
    
        message.channel.send({embeds:[embed]})
        await economy.addCoins( userID, totPrice)
        await economy.addItems( userID, 0-trashcanAmount, 'trashcan')
        await economy.addItems( userID, 0-ticketAmount, 'ticket')
        await economy.addItems( userID, 0-bananaAmount, 'banana')
        
        await economy.addItems( userID, 0-stoneAmount, 'stone')
        await economy.addItems( userID, 0-diamondsAmount, 'diamonds')
        await economy.addItems( userID, 0-emeraldsAmount, 'emeralds')
        
        await economy.addItems( userID, 0-oakAmount, 'oakwood')
        await economy.addItems( userID, 0-birchAmount, 'birchwood')
        await economy.addItems( userID, 0-spruceAmount, 'sprucewood')
        await economy.addItems( userID, 0-jungleAmount, 'junglewood')
        await economy.addItems( userID, 0-acaciaAmount, 'acaciawood')
        
        await economy.addItems( userID, 0-gravelAmount, 'gravel')
        await economy.addItems( userID, 0-dirtAmount, 'dirt')
        await economy.addItems( userID, 0-grassAmount, 'grass')
        
        await economy.addItems( userID, 0-wheatAmount, 'wheat')
        await economy.addItems( userID, 0-carrotAmount, 'carrot')
        await economy.addItems( userID, 0-potatoAmount, 'potato')
        //mystery peoplle event 
        await economy.addItems( userID, 0-kaellyAmount, 'kaelly')

        await economy.addItems( userID, 0-mattAmount, 'matt')

        //d!fight

        await economy.addItems( userID, 0-gpAmount, 'gp')

        await economy.addItems( userID, 0-boneAmount, 'bone')
        await economy.addItems( userID, 0-rfAmount, 'rf')
        
    }
};
