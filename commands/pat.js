module.exports = {
    name: 'pat',
    description: 'pat!',
    execute(message) {
        const pat = [
            'https://i.imgur.com/MB09aRS.jpg'
        ];
        message.channel.send(pat);
    },
};