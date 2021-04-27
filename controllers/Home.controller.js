const { Items } = require("../models");

module.exports = {
    get: async (req, res) => {
        const allItems = await Items.findAll();
        return res.status(200).render("pages/index", { allItems: allItems });
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
            const allItems = await Items.findAll();
            return res.render("pages/index", { allItems: allItems });
        } catch (error) {
            console.log(error);
            return res.render("pages/index", {
                errorMessage: "Something went wrong.",
            });
        }
    },
};
