import {
    INFOJOBS_TOKEN,
    generateOfferMessage
} from '../consts.js'
import fetch from 'node-fetch'

export default async interaction => {
    if (interaction.commandName != 'datostrabajo') return

    const id = interaction.options.getString('id')
    const res = await fetch(`https://api.infojobs.net/api/7/offer/${ id }`, {
        headers: {
            'Content-Type': 'application/json',
        Authorization: `Basic ${ INFOJOBS_TOKEN }`
        }
    })

    const data = await res.json()

    interaction.reply(generateOfferMessage(data))
}