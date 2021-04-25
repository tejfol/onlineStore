const { User, Items } = require("../models");

module.exports = {
    get: async (req, res) => {
        const allUsers = await Items.findAll();
        res.json(allUsers);
    },
};
