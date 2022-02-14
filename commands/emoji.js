module.exports = {
    name: 'emoji',
    description: 'emoji!',
    execute(message) {
        const emojiList = message.guild.emojis.map(e => e.toString()).join(" ");
        console.log(emojiList);
        if(emojiList.length<2000){
            message.channel.send(emojiList);
        }
    },
};