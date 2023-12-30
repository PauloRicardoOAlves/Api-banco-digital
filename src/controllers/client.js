function teste (req, res) {
    return res.status(200).json({mensagem: "ok"})
}

module.exports = {
    teste
}