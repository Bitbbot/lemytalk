import { response, Router } from "express";
const router = new Router();
import userController from "../controllers/userController.js";

router.get("/", userController.getOne);
// router.get("/number");
router.post("/", userController.create);
router.put("/updateLanguages", userController.updateLanguages);

export default router;
