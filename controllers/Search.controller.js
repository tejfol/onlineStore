const { Items } = require("../models"); 

module.exports = {
    get: async (req, res) => {
        try {
            const { term } = req.query;
            const searchedItems = await Items.findAll({
                where: {
                    name: term,
                },
            });
            return res.render("pages/index", { allItems: searchedItems });
        } catch (e) {
            console.log(e);
        }
    },
};
