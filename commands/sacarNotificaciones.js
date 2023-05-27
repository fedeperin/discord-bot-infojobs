import { categories } from '../consts.js'

export default interaction => {
    if(interaction.commandName != 'sacarnotificaciones') return
    
    const category = interaction.options.getString('categoria')
    const categoryRoleId = categories.find(c => c.value == category).roleID
    const categoryDisplayName = categories.find(c => c.value == category).name
    const role = interaction.guild.roles.cache.get(categoryRoleId)
    
    if(!role) return interaction.reply('No se encontró la categoría')

    if(!interaction.member.roles.cache.has(role.id)) return interaction.reply(`No tiene asignado el canal de notificaciones ${ categoryDisplayName }, no puede ser removido`)

    interaction.member.roles.remove(role)
    interaction.reply(`Has sido removido del canal de notificaciónes ${ categoryDisplayName }`)
}