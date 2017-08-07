const { Command } = require('klasa');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            name: 'echo',
            enabled: true,
            runIn: ['text'],
            cooldown: 0,
            aliases: [],
            permLevel: 2,
            botPerms: [],
            requiredSettings: [],
            description: 'Send a message to a channel as Evil server',
            usage: '[channel:channel] <message:string> [...]',
            usageDelim: undefined,
            extendedHelp: 'No extended help available.'
        });
    }

    async run(msg, [channel = msg.channel, ...message]) {
        // This is where you place the code you want to run for your command
        if (channel.postable === false) throw msg.language('SYSTEM_CHANNEL_NOT_POSTABLE');
        return channel.send(message.join(''));
    }

    async init() {
        // You can optionally define this method which will be run when the bot starts (after login, so discord data is available via this.client)
    }

};
