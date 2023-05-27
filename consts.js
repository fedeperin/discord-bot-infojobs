import * as dotenv from 'dotenv'
dotenv.config()

import {
    REST,
    Client,
    GatewayIntentBits
} from 'discord.js'

export const {
    DISCORD_TOKEN,
    DISCORD_CLIENT_ID,
    INFOJOBS_TOKEN,
    BOT_NAME,
    BOT_DISCRIMINATOR,
    MONGO_URI
} = process.env

export const rest = new REST({
    version: '10'
}).setToken(DISCORD_TOKEN)

export const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ]
})

export const getItemString = (items, query, categoryDisplayName, currentPage, totalPages) => {
    let reply = ''

    reply += `Resultados para *"${ query }"*  en *"${ categoryDisplayName }"*\n\n`
    items.forEach(item => {
        reply += `**${ item.title }**\n`
        reply += `*${ item.city }*\n`
        reply += `ID: ${ item.id }\n`
        reply += `${ item.salaryDescription }\n`
        reply += `Jornada ${ item.workDay.value.toLowerCase() }\n`
        reply += `Experiencia mínima de ${ item.experienceMin.value.toLowerCase() }\n`
        reply += `${ item.link }\n\n`
    })
    
    reply += `Página ${ currentPage } de ${ totalPages }\n`
    reply += `Datos de https://infojobs.net`

    return reply
}

export const generateOfferMessage = data => {
    let reply = ''

    reply += `### ${ data.title }\n`
    reply += `Empresa: **${ data.profile.name }**\n`
    reply += `Página de la empresa: ${ data.profile.url }\n`
    reply += `Ciudad: ${ data.city }\n`
    reply += `Experiencia mínima: ${ data.experienceMin.value }\n`
    reply += `${ data.salaryDescription }\n`
    
    if(data.skillsList) {
        reply += `Habilidades requeridas:\n`
        data.skillsList.forEach(({skill}) => {
            reply += `- ${ skill }\n`
        })
    }
    reply += `Ver más: ${ data.link }`

    return reply
}

export const addNotificationsChannel = num => {

}

export const categories = [
    {
        id: 1,
        name: 'Administración Pública',
        value: 'administracion-publica',
        channelID: '1111290688563326976',
        roleID: '1111683018495635457'
    },
    {
        id: 2,
        name: 'Administración de empresas',
        value: 'administracion-empresas',
        channelID: '1111290726400135299',
        roleID: '1111683397165781034'
    },
    {
        id: 3,
        name: 'Atención a clientes',
        value: 'atencion-a-cliente',
        channelID: '1111290771031728190',
        roleID: '1111683447279341610'
    },
    {
        id: 4,
        name: 'Calidad, producción e I+D',
        value: 'calidad-produccion-id',
        channelID: '1111290810584010865',
        roleID: '1111683503579463862'
    },
    {
        id: 5,
        name: 'Comercial y ventas',
        value: 'comercial-ventas',
        channelID: '1111290855320473612',
        roleID: '1111683615257022544'
    },
    {
        id: 6,
        name: 'Compras, logística y almacén',
        value: 'compras-logistica-almacen',
        channelID: '1111290898517606460',
        roleID: '1111683665357975562'
    },
    {
        id: 7,
        name: 'Diseño y artes gráficas',
        value: 'diseno-artes-graficas',
        channelID: '1111291224792510575',
        roleID: '1111683774518919218'
    },
    {
        id: 8,
        name: 'Educación y formación',
        value: 'educacion-formacion',
        channelID: '1111291258091077702',
        roleID: '1111683797679886439'
    },
    {
        id: 9,
        name: 'Finanzas y banca',
        value: 'finanzas-banca',
        channelID: '1111291304731758642',
        roleID: '1111683918542929920'
    },
    {
        id: 10,
        name: 'Informática y telecomunicaciones',
        value: 'informatica-telecomunicaciones',
        channelID: '1111291342153330728',
        roleID: '1111684099812360213'
    },
    {
        id: 11,
        name: 'Ingenieros y técnicos',
        value: 'ingenieros-tecnicos',
        channelID: '1111291500593160295',
        roleID: '1111684277701185636'
    },
    {
        id: 13,
        name: 'Inmobiliario y construcción',
        value: 'inmobiliario-construccion',
        channelID: '1111291531459047605',
        roleID: '1111684420890534019'
    },
    {
        id: 14,
        name: 'Legal',
        value: 'legal',
        channelID: '1111291567479726240',
        roleID: '1111684471910051931'
    },
    {
        id: 15,
        name: 'Marketing y comunicación',
        value: 'marketing-comunicacion',
        channelID: '1111291608151900290',
        roleID: '1111684564595773530'
    },
    {
        id: 16,
        name: 'Profesiones, artes y oficios',
        value: 'profesiones-artes-oficios',
        channelID: '1111291646034853958',
        roleID: '1111684716039508020'
    },
    {
        id: 17,
        name: 'Recursos humanos',
        value: 'recursos-humanos',
        channelID: '1111291679404728501',
        roleID: '1111684776009662575'
    },
    {
        id: 18,
        name: 'Sanidad y salud',
        value: 'sanidad-salud',
        channelID: '1111291712900448266',
        roleID: '1111684856510947358'
    },
    {
        id: 19,
        name: 'Sector Farmacéutico',
        value: 'sector-farmaceutico',
        channelID: '1111291743464329296',
        roleID: '1111684942276071474'
    },
    {
        id: 20,
        name: 'Turismo y restauración',
        value: 'turismo-restauracion',
        channelID: '1111291774749642803',
        roleID: '1111685010844565514'
    },
    {
        id: 21,
        name: 'Ventas al detalle',
        value: 'venta-detalle',
        channelID: '1111291815287595070',
        roleID: '1111685124308860948'
    },
    {
        id: 22,
        name: 'Otros',
        value: 'otros',
        channelID: '1111291843645296670',
        roleID: '1111685247965331547'
    }
]