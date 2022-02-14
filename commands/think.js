module.exports = {
    name: 'think',
    description: 'think!',
    execute(message) {
        message.channel.send({ files: ["./media/think.gif"] });
    },
};