require('dotenv').config();

const token = process.env.DISCORD_TOKEN;

const fs = require('node:fs');
const path = require('node:path');
const { Client, Collection, Events, GatewayIntentBits } = require('discord.js');

const client = new Client({ intents: [GatewayIntentBits.Guilds,GatewayIntentBits.GuildMessages,GatewayIntentBits.MessageContent] });

client.commands = new Collection();
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

const delay = ms => new Promise(res => setTimeout(res, ms));


for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);
	client.commands.set(command.data.name, command);
}

client.once(Events.ClientReady, () => {
	console.log('Ready!');
});

client.on('messageCreate', (message) => {
	if (message.content.includes('x.com') || (message.content.includes('twitter.com')&&!message.content.includes('vxtwitter.com'))) {
	const modifiedContent = message.content.replace(/(x\.com|twitter\.com)/g, 'vxtwitter.com');
	 message.channel.send("from: " + message.author.username +"\n"+ modifiedContent);
	 message.delete()
	}

  });

client.login(token);