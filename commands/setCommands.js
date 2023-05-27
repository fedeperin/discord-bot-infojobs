import { client } from '../consts.js'
import buscatrabajoCommand from './buscatrabajo.js'
import paginaanteriorCommand from './paginaanterior.js'
import paginasiguienteCommand from './paginasiguiente.js'
import botinfoCommand from './botinfo.js'
import datostrabajoCommand  from './datostrabajo.js'
import notificacionesCommand from './notificaciones.js'
import sacarNotificacionesCommand  from './sacarNotificaciones.js'
import comandosCommand from './comandos.js'

const setCommands = () => {
    client.on('interactionCreate', async interaction => {
        if (!interaction.isChatInputCommand()) return

        buscatrabajoCommand(interaction)
        botinfoCommand(interaction)
        datostrabajoCommand(interaction)
        notificacionesCommand(interaction)
        sacarNotificacionesCommand(interaction)
        comandosCommand(interaction)
    })

    client.on('messageCreate', async message => {
        if (!message.reference) return
        const repliedMessage = await message.fetchReference()

        paginaanteriorCommand(repliedMessage, message)
        paginasiguienteCommand(repliedMessage, message)
    })
}

export default setCommands