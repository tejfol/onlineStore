const bcrypt = require("bcrypt");
const { User, Items } = require("../models");

module.exports = {
    get: (req, res) => {
        res.render("pages/signUp");
    },
    post: async (req, res) => {
        try {
            const saltRounds = 10;
            const { username, password, email } = req.body;
            const encryptedPassword = await bcrypt.hash(password, saltRounds);
            await User.create({
                username,
                password: encryptedPassword,
                email,
            });
            res.render("pages/signIn");
        } catch (e) {
            console.log(e);
            res.render("pages/signUp");
        }
    },
};
