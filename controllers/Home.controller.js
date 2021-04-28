const { Items } = require("../models");

module.exports = {
    get: async (req, res) => {
        const allItems = await Items.findAll({
            order: [["updatedAt", "DESC"]],
        });
        return res.status(200).render("pages/index", { allItems: allItems });
    },
};
