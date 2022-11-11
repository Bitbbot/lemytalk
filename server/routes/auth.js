import { Router } from "express";
const router = new Router();
import authController from "../controllers/authController.js";
import passport from "passport";
import * as dotenv from "dotenv";
dotenv.config();

router.get("/login/success", authController.loginSuccess);

router.get("/login/failed", authController.loginFailed);

router.get("/logout", authController.logoutRoute);

router.get(
    "/google",
    passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
    "/google/callback",
    passport.authenticate("google", {
        successRedirect: process.env.CLIENT_URL,
        failureRedirect: "/login/failed",
    })
);

export default router;
