const bcrypt = require("bcrypt");
const { User, Items } = require("../models");

module.exports = {
    get: (req, res) => {
        res.render("pages/signUp");
    },
    post: async (req, res) => {
        try {
            const saltRounds = 10;
            const { username, password, passwordrepeat, email } = req.body;
            if (password != passwordrepeat) {
                res.render("pages/signUp", {
                    message: "Password does not match.",
                    messageClass: "alert-danger",
                });
            }
            const emailExists = await User.findOne({ where: { email: email } });
            if (!emailExists) {
                res.render("pages/signUp", {
                    message: "E-mail already registered.",
                    messageClass: "alert-danger",
                });
            }
            const encryptedPassword = await bcrypt.hash(password, saltRounds);
            await User.create({
                username,
                password: encryptedPassword,
                email,
            });
            res.render("pages/signIn", {
                message: "Registered successfully",
                messageClass: "alert-danger",
            });
        } catch (e) {
            console.log(e);
            res.render("pages/signUp");
        }
    },
};
