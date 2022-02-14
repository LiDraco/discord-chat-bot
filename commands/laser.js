module.exports = {
    name: 'laser',
    description: 'laser!',
    execute(message) {
        message.channel.send({ files: ["./media/laser.gif"] });
    },
};