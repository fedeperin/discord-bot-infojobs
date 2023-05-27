import { 
    INFOJOBS_TOKEN,
    categories,
    getItemString,
    BOT_NAME,
    BOT_DISCRIMINATOR } from '../consts.js'
import fetch from 'node-fetch'

export default async (repliedMessage, message) => {
    if(message?.content?.toLowerCase() != 'pagina anterior' ||
    !repliedMessage?.author?.bot ||
    repliedMessage?.author?.username != BOT_NAME ||
    repliedMessage?.author?.discriminator != BOT_DISCRIMINATOR ||
    repliedMessage?.content.split(' *"')[0] != 'Resultados para') return

    const { content } = repliedMessage
    const lines = content.split('\n')
    const categoryLineSplitted = lines[0].split('"')
    const paginationLineSplitted = lines[lines.length - 2].split(' ')

    const query = categoryLineSplitted[1]
    const category = categories.find(c => c.name == categoryLineSplitted[3]).value
    const categoryDisplayName = categoryLineSplitted[3]
    const pageNum = parseInt(paginationLineSplitted[1]) - 1
    const maxPages = parseInt(paginationLineSplitted[3])

    if(pageNum == 0) return message.reply('Esa era la primera página')

    const res = await fetch(`https://api.infojobs.net/api/7/offer?category=${ category }&q=${ query }&maxResults=5&page=${ pageNum }`, {
        headers: {
            'Content-Type': 'application/json',
        Authorization: `Basic ${ INFOJOBS_TOKEN }`
        }
    })
    const data = await res.json()
    const { items } = data

    message.reply(getItemString(items, query, categoryDisplayName, pageNum, maxPages) || 'No se encontraron trabajos con esas especificaciónes')
}