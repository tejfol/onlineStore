const jwt = require("jsonwebtoken");

const verifyToken = async (req, res, next) => {
    const token = req.cookies.token || "";
    try {
        if (!token) {
            return res.status(200).render("pages/signin", {
                message: "Login first to add items.",
                messageClass: "alert-danger",
            });
        }
        const decrypt = await jwt.verify(token, process.env.TOKEN_SECRET);
        req.user = {
            id: decrypt.id,
            username: decrypt.username,
        };
        next();
    } catch (err) {
        return res.status(200).render("pages/signin", {
            message: "Login first to make changes",
            messageClass: "alert-danger",
        });
    }
};

module.exports = verifyToken;
