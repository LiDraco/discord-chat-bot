require('dotenv').config();
const token = process.env.DISCORD_TOKEN;
const prefix = process.env.PREFIX
const Discord = require('discord.js');

var fs = require('fs');
var helpList = fs.readFileSync('help.txt', 'utf8');

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.on('ready', () => {
    console.log('Beep Boop Bot is Online');
});

client.on('message', (message) => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (!client.commands.has(command)) return;

    try {
        client.commands.get(command).execute(message, args);
    } catch (error) {
        console.error(error);
        message.reply('Non-Existent Command! Use !help to view a list of commands.');
    }

    //If author != owner or bot
    if (message.author.id != 594902585811664937 && message.author.id != 184114692631822337) {
        message.channel.send(`You should not be here ${message.author} !`);
    }


});

client.login(token);