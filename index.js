require('dotenv').config();
//require('./../discord-chat-bot/index');
//console.log(process.env.DISCORD_TOKEN);
const token = process.env.DISCORD_TOKEN;
const Discord = require('discord.js');

const client = new Discord.Client();

client.on('ready', () => {
    //console.log('Beep Boop Bot is Online');
    client.channels.find(x => x.name === 'general').send('I am ALIVE!');

});
client.on('message', (msg) => {
    if (msg.content == '!test') {
        msg.channel.send(`Success ${msg.author}!`);
    }
});

client.login(token);