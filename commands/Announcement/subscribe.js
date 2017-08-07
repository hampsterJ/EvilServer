const { Command } = require('klasa');
const announcement = require('../../util/announcement');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            name: 'subscribe',
            enabled: true,
            runIn: ['text'],
            aliases: ['sub'],
            permLevel: 0,
            description: 'Subscribe to this servers\' announcements'
        });
    }

    async run(msg) {
        const role = announcement(msg);
        await msg.member.addRole(role);
        return msg.send(msg.language.get('COMMAND_SUBSCRIBE_SUCCESS', role.name));
    }

};
