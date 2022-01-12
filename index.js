//dependancies

const { Client, Intents } = require('discord.js');

const myIntents = new Intents();
myIntents.add(Intents.FLAGS.GUILD_PRESENCES, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_BANS, Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS, Intents.FLAGS.GUILD_INTEGRATIONS, Intents.FLAGS.GUILD_WEBHOOKS, Intents.FLAGS.GUILD_INVITES, Intents.FLAGS.GUILD_VOICE_STATES, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS, Intents.FLAGS.GUILD_MESSAGE_TYPING, Intents.FLAGS.DIRECT_MESSAGES, Intents.FLAGS.DIRECT_MESSAGE_REACTIONS, Intents.FLAGS.DIRECT_MESSAGE_TYPING);

const client = new Client({ intents: myIntents });
const path = require('path')
const fs = require('fs')
const config = require('./config.json')
const command = require('./command')
const economy = require('./economy.js')
const privateMessage = require('./private-message')
const mongo = require('./mongo')
const env = require('dot-env')
require('dotenv').config();

//others

const { version } = require('./version.json')
const token = process.env.TOKEN

//risky but working
console.log('going to initialize')
client.on('ready', async () => {
  console.log('The client is ready!')
await mongo()
    client.user.setActivity(`${client.guilds.cache.size} servers | t!help`, { type: 'WATCHING' });
    client.user.setStatus('online');
  //fs

  const baseFile = 'command-base.js'
  const readCommands = (dir) => {
    const files = fs.readdirSync(path.join(__dirname, dir))
    for (const file of files) {
      const stat = fs.lstatSync(path.join(__dirname, dir, file))
      if (stat.isDirectory()) {
        readCommands(path.join(dir, file))
      } else if (file !== baseFile) {
 		const commandBase = require(`./commands/${baseFile}`)
        const option = require(path.join(__dirname, dir, file))
        commandBase(client, option)
      }
    }
  }
  readCommands('commands')
})
client.login(token)