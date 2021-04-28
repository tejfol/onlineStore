const bcrypt = require("bcrypt");
const { User } = require("../models");

module.exports = {
    get: (req, res) => {
        res.render("pages/signUp", { message: "", messageClass: "" });
    },
    post: async (req, res) => {
        try {
            const saltRounds = 10;
            const { username, password, passwordrepeat, email } = req.body;

            if (password != passwordrepeat) {
                return res.render("pages/signUp", {
                    message: "Password does not match.",
                    messageClass: "alert-danger",
                });
            }

            const emailExists = await User.findOne({ where: { email: email } });

            if (emailExists) {
                return res.render("pages/signUp", {
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
            return res.render("pages/signUp", {
                message: "Registered successfully",
                messageClass: "alert-success",
            });
        } catch (e) {
            console.log(e);
            return res.render("pages/signUp", {
                message: "Something went wrong.",
                messageClass: "alert-danger",
            });
        }
    },
};
