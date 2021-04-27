const { Items } = require("../models");

module.exports = {
    get: async (req, res) => {
        const allItems = await Items.findAll({
            order: [["createdAt", "DESC"]],
        });
        return res.status(200).render("pages/index", { allItems: allItems });
    },
    filter: async (req, res) => {
        const { filter } = req.query;
        switch (filter) {
            case "newest":
                const filteredItems = await Items.findAll({
                    order: [["createdAt", "DESC"]],
                });
                console.log(filteredItems);
                return res
                    .status(200)
                    .render("pages/index", { allItems: filteredItems });
            case "highest_price":
                const filteredHighest = await Items.findAll({
                    order: [["price", "DESC"]],
                });
                console.log(filteredHighest);
                return res
                    .status(200)
                    .render("pages/index", { allItems: filteredHighest });
            case "lowest_price":
                const filteredLowest = await Items.findAll({
                    order: [["price", "ASC"]],
                });
                console.log(filteredLowest);
                return res
                    .status(200)
                    .render("pages/index", { allItems: filteredLowest });
            default:
                return res.send("Error");
        }
    },
};
