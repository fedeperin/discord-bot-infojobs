import { categories } from '../consts.js'

export default interaction => {
    if(interaction.commandName != 'notificaciones') return
    
    const category = interaction.options.getString('categoria')
    const categoryRoleId = categories.find(c => c.value == category).roleID
    const categoryDisplayName = categories.find(c => c.value == category).name
    const role = interaction.guild.roles.cache.get(categoryRoleId)
    
    if(!role) return interaction.reply('No se encontró la categoría')

    if(interaction.member.roles.cache.has(role.id)) return interaction.reply(`Ya tiene asignado el canal de notificaciones ${ categoryDisplayName }`)
    
    interaction.member.roles.add(role)
    interaction.reply(`Has sido asignado al canal de notificaciónes ${ categoryDisplayName }`)
}