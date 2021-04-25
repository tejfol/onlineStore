const { User, Items } = require("../models");

module.exports = {
    get: async (req, res) => {
        const allUsers = await Items.findAll();
        res.status(200).render("pages/index");
    },
    post: async (req, res) => {
        try {
            const { name, description, price } = req.body;
            const addItem = await Items.create({
                name,
                description,
                price,
            });
            console.log(addItem.id);
            res.render("pages/index");
        } catch (error) {}
    },
};
