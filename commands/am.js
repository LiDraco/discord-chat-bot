module.exports = {
    name: 'am',
    description: 'am',
    execute(message) {
        const am = [
            'https://i.imgur.com/RvZhMYS.jpg',
            'https://i.imgur.com/bmBYaFe.jpg',
            'https://i.imgur.com/LfJiio6.jpg',
            'https://i.imgur.com/4GXG2uf.jpg'
        ];

        //Prevents an image from being sent back to back
        var animePicture = parseInt(Math.floor(Math.random() * am.length));
        var comparePicture = parseInt(Math.floor(Math.random() * am.length));
        if (animePicture == comparePicture) {
            animePicture = parseInt(Math.floor(Math.random() * am.length));
        }
        message.channel.send({
            file: am[animePicture]
        });
    },
};