const economy = require('../../economy')
const Discord = require('discord.js')
const { MessageEmbed } = require('discord.js')
module.exports = {
  commands: 'devbuy',
  minArgs: 0,
  maxArgs: 2,
  expectedArgs: "<The target`s @> <coin amount>",
  permissionError: `You do not have permission to use this command!`, 
  cooldown: 1,
  callback: async(message, arguments) => {
      
    const ids = [`754390594289139753`, `747913247176523856`]
        if(ids.includes(message.author.id)) {
const userId = message.author.id
const coinspresent = await economy.getCoins(userId)
const args = message.content.trim().split(/ +/g);
    if(args[1] === 'stone'.toLowerCase) {
    var price = 100000

        if(coinspresent > 100000) {
          const item = await economy.getItemsAmount(userId, 'stonetool')
          
          console.log(item)
          if (item > 1) {
            console.log(item)
             const embed = new Discord.MessageEmbed()
             .setFooter(footer)
             .setColor('#FF0000')
             .setTitle('Error')
             .setDescription('You have already bought Stone Tools')
             message.channel.send({embeds:[embed]})
            } else {
    const embed = new Discord.MessageEmbed()
        .setFooter(footer)
        .setColor(message.member.displayHexColor)
        .setTitle('Success')
        .setDescription('You have successfully bought Stone Tools')
    message.channel.send({embeds:[embed]})
    //role 
    var role = message.guild.roles.cache.find(r => r.name === "Stone");
    message.member.roles.add(role);
    const remainingCoins = await economy.addCoins(
        userId,
        price * -1
    )
      var birchrandom = 1
      await economy.addItems( userId, birchrandom, 'stonetool')
          }
        } 
    } else if(args[1] === 'void'.toLowerCase()) {
        var price = 1000000000

    if(coinspresent > 1000000000) {
      const embed = new Discord.MessageEmbed()
      .setFooter(footer)
      .setColor(message.member.displayHexColor)
      .setTitle('Success')
      .setDescription('You have successfully bought Void Tools')
      message.channel.send({embeds:[embed]})
      //role 
      var role = message.guild.roles.cache.find(r => r.name === "Void");
message.member.roles.add(role);
      const remainingCoins = await economy.addCoins(
      userId,
      price * -1
    )
      var birchrandom = 1
      await economy.addItems( userId, birchrandom, 'voidtool')
    } 
    } else if(args[1] === 'obsidian'.toLowerCase()) {
        var price = 125000000

    if(coinspresent > 125000000) {
      const embed = new Discord.MessageEmbed()
      .setFooter(footer)
      .setColor('#00FF20')
      .setTitle('Success')
      .setDescription('You have successfully bought Obsidian Tools')
      message.channel.send({embeds:[embed]})

      //role
      var role = message.guild.roles.cache.find(r => r.name === "Obsidian");
message.member.roles.add(role);
      const remainingCoins = await economy.addCoins(
      userId,
      price * -1
    )
      var birchrandom = 1
      await economy.addItems( userId, birchrandom, 'obsidiantool')
    } 
    } else if(args[1] === 'iron'.toLowerCase()) {
        var price = 500000

    if(coinspresent > 500000) {
      const embed = new Discord.MessageEmbed()
      .setFooter(footer)
      .setColor('#00FF20')
      .setTitle('Success')
      .setDescription('You have successfully bought Iron Tools')
      message.channel.send({embeds:[embed]})

      //role
      var role = message.guild.roles.cache.find(r => r.name === "Iron");
message.member.roles.add(role);
      const remainingCoins = await economy.addCoins(
      userId,
      price * -1
    )
      var birchrandom = 1
      await economy.addItems( userId, birchrandom, 'irontool')
    } 
    } else if(args[1] === 'gold'.toLowerCase()) {
        var price = 5000000

    if(coinspresent > 5000000) {
      const embed = new Discord.MessageEmbed()
      .setFooter(footer)
      .setColor('#00FF20')
      .setTitle('Success')
      .setDescription('You have successfully bought Gold Tools')
      message.channel.send({embeds:[embed]})

      //role
      var role = message.guild.roles.cache.find(r => r.name === "Gold");
message.member.roles.add(role);
      const remainingCoins = await economy.addCoins(
      userId,
      price * -1
    )
      var birchrandom = 1
      await economy.addItems( userId, birchrandom, 'goldtool')
    } var price = 5000000

    if(coinspresent > 5000000) {
      const embed = new Discord.MessageEmbed()
      .setFooter(footer)
      .setColor('#00FF20')
      .setTitle('Success')
      .setDescription('You have successfully bought Gold Tools')
      message.channel.send({embeds:[embed]})

      //role
      var role = message.guild.roles.cache.find(r => r.name === "Gold");
message.member.roles.add(role);
      const remainingCoins = await economy.addCoins(
      userId,
      price * -1
    )
      var birchrandom = 1
      await economy.addItems( userId, birchrandom, 'goldtool')
    } 
    } else if(args[1] === 'emerald'.toLowerCase()) {
        var price = 50000000
    if(coinspresent > 50000000) {
      const embed = new Discord.MessageEmbed()
      .setFooter(footer)
      .setColor('#00FF20')
      .setTitle('Success')
      .setDescription('You have successfully bought Emerald Tools')
      message.channel.send({embeds:[embed]})

      //role
      var role = message.guild.roles.cache.find(r => r.name === "Emerald");
message.member.roles.add(role);
      const remainingCoins = await economy.addCoins(
      userId,
      price * -1
    )
      var birchrandom = 1
      await economy.addItems( userId, birchrandom, 'emeraldtool')
    } 
    } else if(args[1] === 'diamond'.toLowerCase()) {
        var price = 10000000

    if(coinspresent > 10000000) {
      const embed = new Discord.MessageEmbed()
      .setFooter(footer)
      .setColor('#00FF20')
      .setTitle('Success')
      .setDescription('You have successfully bought Diamond Tools')
      message.channel.send({embeds:[embed]})
//role
      var role = message.guild.roles.cache.find(r => r.name === "Diamond");
message.member.roles.add(role);
const remainingCoins = await economy.addCoins(
      userId,
      price * -1
    )

      var birchrandom = 1
      await economy.addItems( userId, birchrandom, 'diamondtool')
    } 
    } else if(args[1] === 'bedrock'.toLowerCase()) {
        var price = 500000000

    if(coinspresent > 500000000) {
      const embed = new Discord.MessageEmbed()
      .setFooter(footer)
      .setColor('#00FF20')
      .setTitle('Success')
      .setDescription('You have successfully bought Bedrock Tools')
      message.channel.send({embeds:[embed]})
//role
      var role = message.guild.roles.cache.find(r => r.name === "Bedrock");
message.member.roles.add(role);
     await economy.addCoins(
      userId,
      price * -1
    )

      var birchrandom = 1
      await economy.addItems( userId, birchrandom, 'bedrocktool')
    } 
    }
        }
  },
}
