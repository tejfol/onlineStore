const jwt = require("jsonwebtoken");

const verifyToken = async (req, res, next) => {
    const token = req.cookies.token || "";
    try {
        if (!token) {
            res.status(200).render("pages/signin", {
                message: "Login first to add items.",
            });
        }
        const decrypt = await jwt.verify(token, process.env.TOKEN_SECRET);
        req.user = {
            id: decrypt.id,
            username: decrypt.username,
        };
        next();
    } catch (err) {
        return res.status(500).json(err.toString());
    }
};

module.exports = verifyToken;
