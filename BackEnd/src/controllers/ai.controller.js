const aiService = require("../services/ai.services");

module.exports.getReview = async (req, res) => {
    const code = req.body.code;
    console.log(code);

    if (!code) {
        return res.status(400).send("code is required");
    }

    const response = await aiService.generateResponse(code);

    res.send(response);
};