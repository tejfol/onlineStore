const express = require("express");

const port = process.env.PORT;

const app = express();

const db = require("./models");

const { User } = require("./models");

app.get("/", async (req, res) => {
    await User.create({
        username: "Momo",
        password: "1234",
        email: "moremore@more.com",
    }).catch((e) => {
        if (e) console.log(e);
    });
    res.send("Success");
});

app.get("/all", async (req, res) => {
    const all = await User.findAll().catch((e) => {
        if (e) console.log(e);
    });
    res.send(all);
});

db.sequelize.sync().then((req) => {
    app.listen(port, () => {
        console.log(`listen on http://localhost:${port}`);
    });
});
