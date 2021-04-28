module.exports = {
    get: (req, res) => {
        res.clearCookie("token");
        res.render("pages/signIn", {
            message: "Logged out.",
            messageClass: "alert-danger",
        });
    },
};
