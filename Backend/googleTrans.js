const translate = require('translate-google');

const translateTo = async (req, res) => {
    const msg = req.body.msg;
    const from = req.body.langFrom || "auto"
    const to = req.body.langTo || "en"
    console.log(msg)
    if (!msg || typeof msg !== 'string') {
        res.status(400).send('Invalid input message');
        return;
    }

    try {
        const translation = await translate(msg, { from: from, to: to })
        res.send({
            msg : translation
        })
    }
    catch(err) {
        console.log(err)
        res.status(500).send("something went wrong");
    }
}

module.exports = translateTo;
