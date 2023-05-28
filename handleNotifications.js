import fetch from 'node-fetch'
import {
    categories,
    client,
    INFOJOBS_TOKEN,
    generateOfferMessage
} from './consts.js'
import Category from './models/Category.js'

export default async () => {
    setInterval(() => {
        console.log('Checking for new notifications...')
        categories.forEach(async categ => {
            const res = await fetch(`https://api.infojobs.net/api/7/offer?category=${ categ.value }&maxResults=10`, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Basic ${ INFOJOBS_TOKEN }`
                }
            })
        
            const data = await res.json()
            let { items } = data
            
            if(!items) return

            items = items.map(item => item.id)
            const foundItem = await Category.findOne({ name: categ.value })
    
            const notifications = items.filter(item => !foundItem.offers.includes(item))
            notifications.forEach(async notification => {
                const channel = await client.channels.fetch(categ.channelID)

                const res = await fetch(`https://api.infojobs.net/api/7/offer/${ notification }`, {
                    headers: {
                        'Content-Type': 'application/json',
                    Authorization: `Basic ${ INFOJOBS_TOKEN }`
                    }
                })

                const data = await res.json()

                channel.send(generateOfferMessage(data))
            })
    
            foundItem.offers = items
            foundItem.save()
        })
    }, 3 * 60 * 1000)
}