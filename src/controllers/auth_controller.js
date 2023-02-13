const jwt = require("jsonwebtoken");

module.exports = (req, res) => {
    const token = req.cookies.token;
    if (token) {
        try {
            const decode = jwt.verify(token, process.env.JWT_SECRET_KEY);
            const { name, email, userid } = decode["0"];
            res.send({ valid: "true", name: name, email: email, userid: userid });
        } catch (err) {}
    } else {
        res.send({ valid: "false" });
    }
};
