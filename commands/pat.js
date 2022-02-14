module.exports = {
    name: 'pat',
    description: 'pat!',
    execute(message) {
        cmessage.channel.send({ files: ["./media/pat.gif"] });
    },
};