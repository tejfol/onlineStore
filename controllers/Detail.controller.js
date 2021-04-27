const { Items } = require("../models");

module.exports = {
    get: async (req, res) => {
        try {
            const { id } = req.params;
            const Item = await Items.findOne({ where: { id } });
            res.status(200).render("pages/detail", { Item: Item, message: "" });
        } catch (e) {
            console.log(e);
        }
    },
    deleteItem: async (req, res) => {
        try {
            const { id } = req.params;
            const Item = await Items.findOne({ where: { id: id } });
            await Item.destroy();
            res.redirect("/");
        } catch (e) {
            console.log(e);
        }
    },
};
