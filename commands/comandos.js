import commands from './commands.js'

export default interaction => {
    if(interaction.commandName != 'comandos') return
    
    let reply = 'Lista de comandos:\n'

    commands.forEach(command => {
        reply += `/${command.name}: ${command.description}\n`
    })
    reply += `Pagina Anterior: Funciona solo respondiendo a un mensaje con paginación (como /buscatrabajo). Pasa a la página anterior. No es un comando, solo es un mensaje \n`
    reply += `Pagina Siguiente: Funciona solo respondiendo a un mensaje con paginación (como /buscatrabajo). Pasa a la página siguiente. No es un comando, solo es un mensaje \n`
    
    interaction.reply(reply)
}