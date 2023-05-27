import { 
    INFOJOBS_TOKEN,
    categories,
    getItemString
} from '../consts.js'
import fetch from 'node-fetch'

export default async interaction => {
    if (interaction.commandName != 'buscatrabajo') return

    const query = interaction.options.getString('consulta')
    const category = interaction.options.getString('categoria')
    const categoryDisplayName = categories.find(c => c.value == category).name

    const res = await fetch(`https://api.infojobs.net/api/7/offer?category=${ category }&q=${ query }&maxResults=5`, {
        headers: {
            'Content-Type': 'application/json',
        Authorization: `Basic ${ INFOJOBS_TOKEN }`
        }
    })

    const data = await res.json()
    const { items } = data
    
    if(!data.totalPages) return interaction.reply('No se encontraron trabajos con esas especificaciónes')

    interaction.reply(getItemString(items, query, categoryDisplayName, data.currentPage, data.totalPages) || 'No se encontraron trabajos con esas especificaciónes')
}