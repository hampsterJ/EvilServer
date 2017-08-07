const { Event } = require('klasa');

module.exports = class extends Event {

    constructor(...args) {
        super(...args, { name:'isplaying' });
    }

    run(...params) {
        // This is where you place the code you want to run for your event
        //clientUser.presence.game

    }

    async init() {
        // You can optionally define this method which will be run when the bot starts (after login, so discord data is available via this.client)
    }

};