module.exports = {
    name: 'emoji',
    description: 'emoji!',
    execute(message) {
        const emojiList = message.guild.emojis.map(e => e.toString()).join(" ");
        if(emojiList.length<2000){
            message.channel.send(emojiList);
        }
    },
};