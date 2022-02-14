module.exports = {
    name: 'pat',
    description: 'pat!',
    execute(message) {
        message.channel.send({ files: ["./media/think.gif"] });
    },
};