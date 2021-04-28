const { Items } = require("../models");
const {Op} = require('sequelize')

module.exports = {
    get: async (req, res) => {
        try {
            const { term } = req.query;
            const searchedItems = await Items.findAll({
                where: {
                    name: {
                        [Op.like]: "%" + term + "%",
                    },
                },
                order: [["updatedAt", "DESC"]],
            });
            return res.render("pages/index", { allItems: searchedItems });
        } catch (e) {
            console.log(e);
        }
    },
};
