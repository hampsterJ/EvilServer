const klasa = require('klasa');
const settings = require('./settings');

const client = new klasa.Client({
    clientOptions: { fetchAllMembers: false },
    prefix: ':',
    cmdPrompt: true,
    cmdEditing: true
});

client.login(settings.token);
