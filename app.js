const express = require("express");

const path = require("path");
const bodyParser = require("body-parser");

const port = process.env.PORT;

const app = express();

const homeRouter = require("./routes/Home");
const signinRouter = require("./routes/SignIn");
const signupRouter = require("./routes/SignUp");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const db = require("./models");

app.use("/", homeRouter);
app.use("/signin", signinRouter);
app.use("/signup", signupRouter);

db.sequelize.sync().then((req) => {
    app.listen(port, () => {
        console.log(`listen on http://localhost:${port}`);
    });
});
