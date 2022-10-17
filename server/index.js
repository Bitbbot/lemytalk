import * as models from "./models/models.js";
import cookieSession from "cookie-session";
import express from "express";
import cors from "cors";
import passportSetup from "./passport.js";
import passport from "passport";
import router from "./routes/index.js";
import { CLIENT_URL, PORT } from "./env.js";
import cookieParser from "cookie-parser";
import { sequelize } from "./db.js";

const app = express();

app.use(
    cookieSession({
        name: "session",
        keys: ["lama"],
        maxAge: 24 * 60 * 60 * 1000,
    })
);
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());
app.use(
    cors({
        origin: CLIENT_URL,
        methods: "GET,POST,PUT,DELETE",
        credentials: true,
    })
);
app.use(express.json());
app.use("/api", router);

const start = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(PORT, () =>
            console.log(`Server started on port ${process.env.PORT || PORT}`)
        );
    } catch (e) {
        console.log(e);
    }
};

start();
