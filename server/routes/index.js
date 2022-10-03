import { Router } from "express";
const router = new Router();
import authRouter from "./auth.js";

router.use("/auth", authRouter);

export default router;
