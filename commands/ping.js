const Client = require('../Client'),
    {
        Message
    } = require('discord.js')

module.exports = {
    name: "ping",
    description: "Sends the client ping",
    
    /**
     * 
     * @param {Message} message 
     * @param {string[]} args 
     * @param {Client} client 
     */

    execute: async function (message, args, client) {
        let msg = await message.channel.send(`Pinging...`);
        msg.edit(`Pong!\nAPI Latency: ${msg.createdTimestamp - message.createdTimestamp}`)
    }
}