module.exports = async (client, message) => {
    if(message.author.bot || !message.content.startsWith(client.config.prefix)) return;
    
    let args = message.content.trim().slice(client.config.prefix.length).split(/\s+/g)
    let commandName = args.shift().toLowerCase()

    let command = client.commands.get(commandName)
    if(!command) return;
    try {
        await command.execute(message, args, client)
    } catch(e) {
        message.channel.send(":warning: An error occured! Please try again...")
        client.logger.error(e)
    }
}
