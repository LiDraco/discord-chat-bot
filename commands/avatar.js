module.exports = {
    name: 'avatar',
    description: 'avatar!',
    execute(message) {
        message.reply(message.author.avatarURL);
    },
};