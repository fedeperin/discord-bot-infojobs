import {
    BOT_NAME
} from '../consts.js'

export default interaction => {
    if(interaction.commandName != 'botinfo') return
    
    interaction.reply(
`# ${ BOT_NAME }
Con este Bot de Discord, se puede buscar trabajo y recibir notificaciones de nuevos trabajos en una categoría específica. Toda la información es sacada directamente de Infojobs.
## ¿Por qué discord?
Discord es una plataforma conocida y tiene soporte para web, móvil y escritorio. Esto la hace ideal para poder recibir notificaciónes como a uno le parezca.
También Discord deja personalizar la forma de recibir notificaciones en cada canal, así que este bot puede ser personalizado al gusto de cada uno.
## ¿Cómo recibo notificaciones?
Para recibir notificaciones, corra el comando de /notificaciones y luego seleccione la categoría del canal de notificaciones al que se quiera unir.
Una vez que el bot lo haya unido al canal (cosa que pasa instantáneamente), el bot se encargará de enviarle las notificaciones.
Puede cambiar la manera de recibir notificaciones desde la misma plataforma de discord.
## ¿Cómo buscar trabajo?
Para buscar trabajo, corra el comando de /buscatrabajo.
En ese comando, podrá seleccionar la categoría de trabajo y proporcionar una consulta (Lo que pondría en el buscador).
Para pasar a la página siguente o ir a la anterior, solo responde al mensaje con Pagina Siguente o Pagina anterior.
Para tener información detallada de una oferta, corra el comando /datostrabajo, al cual se le puede pasar el ID de la oferta en particular.
## ¿Cómo puedo conocer la lista entera de comandos?
Para conocer la lista de comandos, corra el comando de /comandos.
## Algunas cosas más...
Este es un proyecto Open Source para una hackaton. Cualquier pregunta hagala en el canal general. Para información más técnica revise el [proyecto en GitHub](https://github.com/fedeperin/discord-bot-infojobs).
Muchas Gracias.`
)
}