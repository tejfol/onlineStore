module.exports = {
    get: (req, res) => {
        res.render("pages/signIn");
    },
    post: (req, res) => {
        try {
            const { email, password } = req.body;
            
            

            res.redirect("/");
        } catch (e) {
            console.log(e);
        }
    },
};
