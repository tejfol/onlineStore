const express = require("express");

const port = process.env.PORT;

const app = express();

const homeRouter = require("./routes/Home");

const db = require("./models");

app.use("/", homeRouter);

db.sequelize.sync().then((req) => {
    app.listen(port, () => {
        console.log(`listen on http://localhost:${port}`);
    });
});
