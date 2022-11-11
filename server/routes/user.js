import { Router } from "express";

const router = new Router();
import userController from "../controllers/userController.js";

router.get("/", userController.getOne);
router.post("/", userController.create);
router.put("/updateLanguages", userController.updateLanguages);
router.get("/twillio", userController.getTwilio);

export default router;
