module.exports = {
    name: 'hello',
    description: 'hello!',
    execute(message) {
        message.channel.send(`hello ${message.author}!`);
    },
};