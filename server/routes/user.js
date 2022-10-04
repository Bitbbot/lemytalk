import { response, Router } from "express";
const router = new Router();
import userController from "../controllers/userController.js";

router.get("/login", () => {
    userController.getOne().then((response) => {
        // if (response)
        console.log(response);
    });
});
router.get("/", userController.getOne);
// router.get("/number");
router.post("/", userController.create);
router.put("/updateLanguages", userController.updateLanguages);

export default router;
