module.exports = {
    get: (req, res) => {
        res.clearCookie("token");
        res.session = null;
        res.redirect("/");
    },
};
