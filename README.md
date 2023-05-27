# Infojobs Discord Bot 🤖
Un bot de Discord que permite buscar trabajos y recibir notificaciónes de ofertas de trabajo personalizadas.  
Usando [Discord.JS](https://discord.js.org/) y la [API de Infojobs](https://developer.infojobs.net/)  
Para probarlo se puede entrar al [servidor de prueba](https://discord.gg/b8Z7vD5bAH)  

## FAQ
### ¿Por qué discord?
Discord es una plataforma conocida y tiene soporte para web, móvil y escritorio. Esto la hace ideal para poder recibir notificaciónes como a uno le parezca.
También Discord deja personalizar la forma de recibir notificaciones en cada canal, así que este bot puede ser personalizado al gusto de cada uno.

### ¿Cómo recibo notificaciones?
Para recibir notificaciones, corra el comando de /notificaciones y luego seleccione la categoría del canal de notificaciones al que se quiera unir.
Una vez que el bot lo haya unido al canal (cosa que pasa instantáneamente), el bot se encargará de enviarle las notificaciones.
Puede cambiar la manera de recibir notificaciones desde la misma plataforma de discord.

### ¿Cómo buscar trabajo?
Para buscar trabajo, corra el comando de /buscatrabajo.
En ese comando, podrá seleccionar la categoría de trabajo y proporcionar una consulta (Lo que pondría en el buscador).
Para pasar a la página siguente o ir a la anterior, solo responde al mensaje con Pagina Siguente o Pagina anterior.
Para tener información detallada de una oferta, corra el comando /datostrabajo, al cual se le puede pasar el ID de la oferta en particular.

### ¿Cómo puedo conocer la lista entera de comandos?
Para conocer la lista de comandos, corra el comando de /comandos.

## Agregar a un servidor
Para agregarlo a un servidor hay que primero llenar los datos del .env, siguiendo el .env.example.  
También hay que crear un canal y un rol para cada una de las categorías de notificaciónes.  
A cada canal, hay que no dejar mandar mensajes, y permitir entrar solo a los del rol asignado.  
Después, en `consts.js`, hay que cambiar los `channelID` y `roleID` para cada categría en la constante `categories`