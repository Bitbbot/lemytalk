import { response, Router } from "express";
const router = new Router();
import userController from "../controllers/userController.js";
import twilio from "twilio";

router.get("/", userController.getOne);
// router.get("/number");
router.post("/", userController.create);
router.put("/updateLanguages", userController.updateLanguages);
router.get("/twillio", (req, res) => {
    const accountSid = "AC32bf5c4d6c653c092f25b8b4645d5894";
    const authToken = "e97e8e30362d0e03c020c004ab15b4cc";
    const client = twilio(accountSid, authToken);
    client.tokens.create().then((token) => res.send({ token }));
});

export default router;
