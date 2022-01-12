const Discord = require('discord.js')
const economy = require('../economy.js')
const { MessageEmbed } = require('discord.js')
const { footer } = require('../footer.json')

module.exports = {
  commands: "start".toLowerCase(),
  minArgs: 0,
  maxArgs: null,
  cooldown: 3,
  callback: async(message,arguments,text) => {
      const userId = message.author.id
      
const args = message.content.trim().split(/ +/g);
      const doeshe = await economy.getItemsAmount(userId, 'woodentool')
		console.log(doeshe)
      if(doeshe >= 1) {
          const embed = new Discord.MessageEmbed()
        .setFooter(footer)
        .setColor(message.member.displayHexColor)
        .setTitle('Fail')
        .setDescription('You have already joined Disminer')
    message.channel.send({embeds:[embed]})
          return
      }
      const embed = new Discord.MessageEmbed()
        .setFooter(footer)
        .setColor(message.member.displayHexColor)
        .setTitle('Success')
        .setDescription('You have successfully joined Disminer and earned Wooden Tools')
    message.channel.send({embeds:[embed]})
    //role 
    var role = message.guild.roles.cache.find(r => r.name === "Wooden");
    message.member.roles.add(role);
      var birchrandom = 1
      await economy.addItems( userId, birchrandom, 'woodentool')

  }
}