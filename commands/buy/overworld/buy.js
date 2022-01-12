const Discord = require('discord.js')
const economy = require('../../../economy.js')
const { MessageEmbed } = require('discord.js')
const { footer } = require('../../../footer.json')

module.exports = {
  commands: "buy".toLowerCase(),
  minArgs: 0,
  maxArgs: null,
  cooldown: 3,
  callback: async(message,arguments,text) => {
      const userId = message.author.id
      
const args = message.content.trim().split(/ +/g);
    const coinspresent = await economy.getCoins(userId)
    if(args[1] === 'stone'.toLowerCase()) {
      const stonetool = await economy.getItemsAmount(userId, 'stonetool')
      if(coinspresent >= 100000) {
        if(stonetool < 1) {
          const embed = new Discord.MessageEmbed()
          .setFooter(footer)
          .setColor(message.member.displayHexColor)
          .setTitle('Success')
          .setDescription('You have successfully bought Stone Tools')
          message.channel.send({embeds:[embed]})
          //role adding
          var role = message.guild.roles.cache.find(r => r.name === "Stone");
          message.member.roles.add(role);
          //money deduction
          const remainingCoins = await economy.addCoins(
            userId,
            100000 * -1
          )
          var birchrandom = 1
          await economy.addItems( userId, birchrandom, 'stonetool')
        } else {
          const embed = new Discord.MessageEmbed()
             .setFooter(footer)
             .setColor('#FF0000')
             .setTitle('Error')
             .setDescription('You have already bought Stone Tools')
             message.channel.send({embeds:[embed]})
        }
      } else {
        const pricetopay = 100000-coinspresent
        const embed = new Discord.MessageEmbed()
             .setFooter(footer)
             .setColor('#FF0000')
             .setTitle('Error')
             .setDescription(`You cannot buy Stone Tools, you need **${pricetopay} more!`)
             message.channel.send({embeds:[embed]})
      }
    }
    if(args[1] === 'iron'.toLowerCase()) {
      const stonetool = await economy.getItemsAmount(userId, 'irontool')
      if(coinspresent >= 500000) {
        if(stonetool < 1) {
          const embed = new Discord.MessageEmbed()
          .setFooter(footer)
          .setColor(message.member.displayHexColor)
          .setTitle('Success')
          .setDescription('You have successfully bought Iron Tools')
          message.channel.send({embeds:[embed]})
          //role adding
          var role = message.guild.roles.cache.find(r => r.name === "Iron");
          message.member.roles.add(role);
          //money deduction
          const remainingCoins = await economy.addCoins(
            userId,
            500000 * -1
          )
          var birchrandom = 1
          await economy.addItems( userId, birchrandom, 'irontool')
        } else {
          const embed = new Discord.MessageEmbed()
             .setFooter(footer)
             .setColor('#FF0000')
             .setTitle('Error')
             .setDescription('You have already bought Iron Tools')
             message.channel.send({embeds:[embed]})
        }
      } else {
        const pricetopay = 500000-coinspresent
        const embed = new Discord.MessageEmbed()
             .setFooter(footer)
             .setColor('#FF0000')
             .setTitle('Error')
             .setDescription(`You cannot buy Iron Tools, you need **${pricetopay} more!`)
             message.channel.send({embeds:[embed]})
      }
    }
    if(args[1] === 'gold'.toLowerCase()) {
      const stonetool = await economy.getItemsAmount(userId, 'goldtool')
      if(coinspresent >= 1000000) {
        if(stonetool < 1) {
          const embed = new Discord.MessageEmbed()
          .setFooter(footer)
          .setColor(message.member.displayHexColor)
          .setTitle('Success')
          .setDescription('You have successfully bought Gold Tools')
          message.channel.send({embeds:[embed]})
          //role adding
          var role = message.guild.roles.cache.find(r => r.name === "Gold");
          message.member.roles.add(role);
          //money deduction
          const remainingCoins = await economy.addCoins(
            userId,
            1000000 * -1
          )
          var birchrandom = 1
          await economy.addItems( userId, birchrandom, 'goldtool')
        } else {
          const embed = new Discord.MessageEmbed()
             .setFooter(footer)
             .setColor('#FF0000')
             .setTitle('Error')
             .setDescription('You have already bought Gold Tools')
             message.channel.send({embeds:[embed]})
        }
      } else {
        const pricetopay = 1000000-coinspresent
        const embed = new Discord.MessageEmbed()
             .setFooter(footer)
             .setColor('#FF0000')
             .setTitle('Error')
             .setDescription(`You cannot buy Gold Tools, you need **${pricetopay} more!`)
             message.channel.send({embeds:[embed]})
      }
    }
    if(args[1] === 'diamond'.toLowerCase()) {
      const stonetool = await economy.getItemsAmount(userId, 'diamondtool')
      if(coinspresent >= 5000000) {
        if(stonetool < 1) {
          const embed = new Discord.MessageEmbed()
          .setFooter(footer)
          .setColor(message.member.displayHexColor)
          .setTitle('Success')
          .setDescription('You have successfully bought Diamond Tools')
          message.channel.send({embeds:[embed]})
          //role adding
          var role = message.guild.roles.cache.find(r => r.name === "Diamond");
          message.member.roles.add(role);
          //money deduction
          const remainingCoins = await economy.addCoins(
            userId,
            5000000 * -1
          )
          var birchrandom = 1
          await economy.addItems( userId, birchrandom, 'diamondtool')
        } else {
          const embed = new Discord.MessageEmbed()
             .setFooter(footer)
             .setColor('#FF0000')
             .setTitle('Error')
             .setDescription('You have already bought Diamond Tools')
             message.channel.send({embeds:[embed]})
        }
      } else {
        const pricetopay = 5000000-coinspresent
        const embed = new Discord.MessageEmbed()
             .setFooter(footer)
             .setColor('#FF0000')
             .setTitle('Error')
             .setDescription(`You cannot buy Diamond Tools, you need **${pricetopay} more!`)
             message.channel.send({embeds:[embed]})
      }
    }
    if(args[1] === 'emerald'.toLowerCase()) {
      const stonetool = await economy.getItemsAmount(userId, 'emeraldtool')
      if(coinspresent >= 10000000) {
        if(stonetool < 1) {
          const embed = new Discord.MessageEmbed()
          .setFooter(footer)
          .setColor(message.member.displayHexColor)
          .setTitle('Success')
          .setDescription('You have successfully bought Emerald Tools')
          message.channel.send({embeds:[embed]})
          //role adding
          var role = message.guild.roles.cache.find(r => r.name === "Emerald");
          message.member.roles.add(role);
          //money deduction
          const remainingCoins = await economy.addCoins(
            userId,
            10000000 * -1
          )
          var birchrandom = 1
          await economy.addItems( userId, birchrandom, 'emeraldtool')
        } else {
          const embed = new Discord.MessageEmbed()
             .setFooter(footer)
             .setColor('#FF0000')
             .setTitle('Error')
             .setDescription('You have already bought Emerald Tools')
             message.channel.send({embeds:[embed]})
        }
      } else {
        const pricetopay = 10000000-coinspresent
        const embed = new Discord.MessageEmbed()
             .setFooter(footer)
             .setColor('#FF0000')
             .setTitle('Error')
             .setDescription(`You cannot buy Emerald Tools, you need **${pricetopay} more!`)
             message.channel.send({embeds:[embed]})
      }
    }
    if(args[1] === 'obsidian'.toLowerCase()) {
      const stonetool = await economy.getItemsAmount(userId, 'obsidiantool')
      if(coinspresent >= 25000000) {
        if(stonetool < 1) {
          const embed = new Discord.MessageEmbed()
          .setFooter(footer)
          .setColor(message.member.displayHexColor)
          .setTitle('Success')
          .setDescription('You have successfully bought Obsidian Tools')
          message.channel.send({embeds:[embed]})
          //role adding
          var role = message.guild.roles.cache.find(r => r.name === "Obsidian");
          message.member.roles.add(role);
          //money deduction
          const remainingCoins = await economy.addCoins(
            userId,
            25000000 * -1
          )
          var birchrandom = 1
          await economy.addItems( userId, birchrandom, 'obsidiantool')
        } else {
          const embed = new Discord.MessageEmbed()
             .setFooter(footer)
             .setColor('#FF0000')
             .setTitle('Error')
             .setDescription('You have already bought Obsidian Tools')
             message.channel.send({embeds:[embed]})
        }
      } else {
        const pricetopay = 25000000-coinspresent
        const embed = new Discord.MessageEmbed()
             .setFooter(footer)
             .setColor('#FF0000')
             .setTitle('Error')
             .setDescription(`You cannot buy Obsidian Tools, you need **${pricetopay} more!`)
             message.channel.send({embeds:[embed]})
      }
    }
    if(args[1] === 'bedrock'.toLowerCase()) {
      const stonetool = await economy.getItemsAmount(userId, 'bedrocktool')
      if(coinspresent >= 50000000) {
        if(stonetool < 1) {
          const embed = new Discord.MessageEmbed()
          .setFooter(footer)
          .setColor(message.member.displayHexColor)
          .setTitle('Success')
          .setDescription('You have successfully bought Bedrock Tools')
          message.channel.send({embeds:[embed]})
          //role adding
          var role = message.guild.roles.cache.find(r => r.name === "Bedrock");
          message.member.roles.add(role);
          //money deduction
          const remainingCoins = await economy.addCoins(
            userId,
            50000000 * -1
          )
          var birchrandom = 1
          await economy.addItems( userId, birchrandom, 'bedrocktool')
        } else {
          const embed = new Discord.MessageEmbed()
             .setFooter(footer)
             .setColor('#FF0000')
             .setTitle('Error')
             .setDescription('You have already bought Bedrock Tools')
             message.channel.send({embeds:[embed]})
        }
      } else {
        const pricetopay = 50000000-coinspresent
        const embed = new Discord.MessageEmbed()
             .setFooter(footer)
             .setColor('#FF0000')
             .setTitle('Error')
             .setDescription(`You cannot buy Bedrock Tools, you need **${pricetopay} more!`)
             message.channel.send({embeds:[embed]})
      }
    }
    if(args[1] === 'void'.toLowerCase()) {
      const stonetool = await economy.getItemsAmount(userId, 'voidtool')
      if(coinspresent >= 100000000) {
        if(stonetool < 1) {
          const embed = new Discord.MessageEmbed()
          .setFooter(footer)
          .setColor(message.member.displayHexColor)
          .setTitle('Success')
          .setDescription('You have successfully bought Void Tools')
          message.channel.send({embeds:[embed]})
          //role adding
          var role = message.guild.roles.cache.find(r => r.name === "Void");
          message.member.roles.add(role);
          //money deduction
          const remainingCoins = await economy.addCoins(
            userId,
            100000000 * -1
          )
          var birchrandom = 1
          await economy.addItems( userId, birchrandom, 'voidtool')
        } else {
          const embed = new Discord.MessageEmbed()
             .setFooter(footer)
             .setColor('#FF0000')
             .setTitle('Error')
             .setDescription('You have already bought Void Tools')
             message.channel.send({embeds:[embed]})
        }
      } else {
        const pricetopay = 100000000-coinspresent
        const embed = new Discord.MessageEmbed()
             .setFooter(footer)
             .setColor('#FF0000')
             .setTitle('Error')
             .setDescription(`You cannot buy Void Tools, you need **${pricetopay} more!`)
             message.channel.send({embeds:[embed]})
      }
    }
  }
}