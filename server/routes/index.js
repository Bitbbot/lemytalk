import { Router } from "express";
const router = new Router();
import authRouter from "./auth.js";
import userRouter from "./user.js";

router.use("/auth", authRouter);
router.use("/user", userRouter);

export default router;
