const { User } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

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
                        const { username, id } = findEmail;
                        console.log(username, id);
                        const token = jwt.sign(
                            { name: username, id: id },
                            process.env.TOKEN_SECRET
                        );

                        res.cookie("token", token, {
                            maxAge: 86_400_000,
                            httpOnly: true,
                        }).render("pages/signIn", {
                            message: "Logged in.",
                        });
                    } else {
                        return res.render("pages/signIn", {
                            message: "Wrong password.",
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
