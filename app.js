const express = require("express");

const path = require("path");
const bodyParser = require("body-parser");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const port = process.env.PORT;

const app = express();

const homeRouter = require("./routes/Home");
const signinRouter = require("./routes/SignIn");
const signupRouter = require("./routes/SignUp");
const logoutRouter = require("./routes/Logout");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const corsOptions = {
    origin: "*",
    optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.use(
    session({
        secret: "reallySecretToken",
        resave: false,
        saveUninitialized: true,
        cookie: { secure: true },
    })
);

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const db = require("./models");

app.use("/", homeRouter);
app.use("/signin", signinRouter);
app.use("/signup", signupRouter);
app.use("/logout", logoutRouter);

db.sequelize.sync().then((req) => {
    app.listen(port, () => {
        console.log(`listen on http://localhost:${port}`);
    });
});
