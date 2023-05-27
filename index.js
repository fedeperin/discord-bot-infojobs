import { Routes } from 'discord.js'
import { 
    DISCORD_TOKEN,
    DISCORD_CLIENT_ID,
    rest,
    client,
    MONGO_URI
} from './consts.js'
import mongoose from 'mongoose'
import setCommands from './commands/setCommands.js'
import commands from './commands/commands.js'
import handleNotifications from './handleNotifications.js'

setCommands()

await rest.put(Routes.applicationCommands(DISCORD_CLIENT_ID), {
    body: commands
})
    
client.login(DISCORD_TOKEN)

client.on('ready', async () => {
    console.log('Bot Started')
    
    await mongoose.connect(MONGO_URI)
    console.log('Connected to MongoDB')
    handleNotifications()
})