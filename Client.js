const Discord = require('discord.js');
const logger = require('./helpers/logger')

module.exports = class extends Discord.Client {
    constructor(options) {
        super(options);
        this.commands = new Discord.Collection()
        this.logger = logger
        this.config = require('./config.json')
    }
}