const { prefix } = require('./config.json')
module.exports = (client, aliases, callback) => {
  if (typeof aliases === 'string') {
    aliases = [aliases]
  }
  client.on('messageCreate', (message) => {
    const { content } = message
if(message.author.bot) return;
    aliases.forEach((alias) => {
      const command = `${prefix}${alias}`
      if(message.author.bot) return;
      if (content.startsWith(`${command} `) || content === command) {
        if(message.author.bot) return;
        console.log(`Running the command ${command}`)
        callback(message)
      }
    })
  })
}