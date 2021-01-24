module.exports = {
    name: 'emoji',
    description: 'emoji!',
    execute(message) {
        const emojiList = message.guild.emojis.map(e => e.toString()).join(" ");
        message.channel.send(emojiList);
    },
};