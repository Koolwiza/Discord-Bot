const client = require('./Client'),
    commandFiles = readdirSync('./commands').filter(c => c.endsWith('.js'))

for (let file of commandFiles) {
    let cmd = require(`./commands/${file}`)
    client.commands.set(cmd.name, cmd)
}

const evtFiles = readdirSync("./events/");
evtFiles.forEach(file => {
    const eventName = file.split(".")[0];
    client.logger.log(`Loading Event: ${eventName}`);
    const event = require(`./events/${file}`);
    client.on(eventName, event.bind(null, client));
});

client.login(token)