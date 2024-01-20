module.exports = {
    name: 'sheesh',
    description: 'sheesh',
    execute(message) {
        message.channel.send({ files: ["./media/sheesh.mov"] });
    },
};