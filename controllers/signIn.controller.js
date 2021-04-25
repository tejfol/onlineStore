const { User } = require("../models");
const bcrypt = require("bcrypt");

module.exports = {
    get: (req, res) => {
        res.render("pages/signIn", { message: "" });
    },
    post: async (req, res) => {
        try {
            const { email, password } = req.body;
            if ((email, password)) {
                const findEmail = await User.findOne({
                    where: { email: email },
                }).catch((e) => {
                    console.log(e);
                });
                if (findEmail) {
                    const match = await bcrypt.compare(
                        password,
                        findEmail.password.toString()
                    );
                    console.log(password, findEmail.password);
                    if (match) {
                        return res.render("pages/signIn", {
                            message: "Logged in.",
                        });
                    }
                } else {
                    return res.status(500).render("pages/signIn", {
                        message: "Email not found.",
                    });
                }
            }
        } catch (e) {
            console.log(e);
            res.render("pages/signIn", { message: "Wrong password or email." });
        }
    },
};
