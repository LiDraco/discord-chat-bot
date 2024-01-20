module.exports = {
    name: 'help',
    description: 'help!',
    execute(message) {
        var fs = require('fs');
        var helpList = fs.readFileSync('help.txt', 'utf8');
        message.channel.send(helpList);
    },
};