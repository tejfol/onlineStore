const { Items } = require("../models");

module.exports = {
    get: (req, res) => {
        res.render("pages/additem");
    },
    post: async (req, res) => {
        try {
            const { name, description, price } = req.body;
            const Item = await Items.create({
                name,
                description,
                price: price,
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
