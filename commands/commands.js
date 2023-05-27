import { ApplicationCommandOptionType } from 'discord.js'
import { categories } from '../consts.js'

export default [
    {
        name: 'buscatrabajo',
        description: 'Busca trabajos en la plataforma de Infojobs',
        options: [
            {
                name: 'consulta',
                description: 'La consulta a realizar',
                required: true,
                type: ApplicationCommandOptionType.String,
            },
            {
                name: 'categoria',
                description: 'La categoría de la consulta',
                required: true,
                type: ApplicationCommandOptionType.String,
                choices: categories
            }
        ]
    },
    {
        name: 'datostrabajo',
        description: 'Encuentra los datos de un trabajo por su ID',
        options: [
            {
                name: 'id',
                description: 'El ID del trabajo',
                required: true,
                type: ApplicationCommandOptionType.String,
            }
        ]
    },
    {
        name: 'notificaciones',
        description: 'Agrega un canal de notificaciones',
        options: [
            {
                name: 'categoria',
                description: 'La categoría del canal a unirse',
                required: true,
                type: ApplicationCommandOptionType.String,
                choices: categories
            }
        ]
    },
    {
        name: 'sacarnotificaciones',
        description: 'Remueve un canal de notificaciones',
        options: [
            {
                name: 'categoria',
                description: 'La categoría del canal a remover',
                required: true,
                type: ApplicationCommandOptionType.String,
                choices: categories
            }
        ]
    },
    {
        name: 'botinfo',
        description: 'Información sobre este bot',
    },
    {
        name: 'comandos',
        description: 'Da la lista de comandos'
    }
]