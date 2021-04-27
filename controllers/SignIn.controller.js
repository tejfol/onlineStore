const { User } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = {
    get: (req, res) => {
        res.render("pages/signIn", { message: "", messageClass: "" });
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
                        const expiryDate = new Date(
                            Date.now() + 60 * 60 * 1000
                        ); // 1 hour
                        res.cookie("token", token, {
                            maxAge: expiryDate,
                            httpOnly: true,
                        }).render("pages/signIn", {
                            message: "Logged in.",
                            messageClass: "alert-success",
                        });
                    } else {
                        return res.render("pages/signIn", {
                            message: "Wrong password.", messageClass: "alert-danger" 
                        });
                    }
                } else {
                    return res.status(500).render("pages/signIn", {
                        message: "Email not found.",messageClass: "alert-danger"
                    });
                }
            }
        } catch (e) {
            console.log(e);
            res.render("pages/signIn", { message: "Wrong password or email.", messageClass: "alert-danger" });
        }
    },
};
