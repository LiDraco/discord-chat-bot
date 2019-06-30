require('dotenv').config();
const token = process.env.DISCORD_TOKEN;
const Discord = require('discord.js');

const client = new Discord.Client();

var fs = require('fs');
var helpList = fs.readFileSync('help.txt', 'utf8');

client.on('ready', () => {
    console.log('Beep Boop Bot is Online');
});

client.on('message', (msg) => {

    //!hello
    if (msg.content == '!hello') {
        msg.channel.send(`hello ${msg.author}!`);
    }

    //!avatar
    if (msg.content === '!avatar') {
        msg.reply(msg.author.avatarURL);
    }

    //!help
    if (msg.content === '!help') {
        msg.channel.send(helpList);
    }

    //!pat
    if (msg.content === '!pat') {
        const pat = [
            'https://i.imgur.com/MB09aRS.jpg'
        ];
        msg.channel.send(pat);
    }

    //!am
    if (msg.content === '!am') {
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
        msg.channel.send({
            file: am[animePicture]
        });
    }

    //If author != owner or bot
    if (msg.author.id != 594902585811664937 && msg.author.id != 184114692631822337) {
        msg.channel.send(`You should not be here ${msg.author} !`);
    }


});

client.login(token);