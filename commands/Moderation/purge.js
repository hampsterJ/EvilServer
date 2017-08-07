const { Command } = require('klasa');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            name: 'purge',
            enabled: true,
            runIn: ['text', 'dm', 'group'],
            cooldown: 0,
            aliases: [],
            permLevel: 0,
            botPerms: [],
            requiredSettings: [],
            description: 'Purges X amount of messages from a given channel.',
            usage: '[Type{1,100}]',
            usageDelim: undefined,
            extendedHelp: 'No extended help available.'
        });
    }

    async run(msg, [limit, ...params]) {
        // This is where you place the code you want to run for your command
        const messages = await msg.channel.fetchMessages({ limit });
        await msg.channel.bulkDelete(messages);
    }

    async init() {
        // You can optionally define this method which will be run when the bot starts (after login, so discord data is available via this.client)
    }

};
