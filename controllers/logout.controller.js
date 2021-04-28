module.exports = {
    get: (req, res) => {
        res.clearCookie("token");
        res.render("pages/signin", {
            message: "Logged out.",
            messageClass: "alert-danger",
        });
    },
};
