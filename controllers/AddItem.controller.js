const { Items } = require("../models");
module.exports = {
    get: (req, res) => {
        res.render("pages/AddItem");
    },
    post: async (req, res) => {
        try {
            const { name, description, price } = req.body;
            const addItem = await Items.create({
                name,
                description,
                price,
            });
            const allItems = await Items.findAll({
                order: [["updatedAt", "DESC"]],
            });
            return res.render("pages/index", { allItems: allItems });
        } catch (error) {
            console.log(error);
            return res.render("pages/index", {
                errorMessage: "Something went wrong.", 
            });
        }
    },
};
