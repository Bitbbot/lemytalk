import { User } from "../models/models.js";
import ApiError from "../error/ApiError.js";
import twilio from "twilio";
import * as dotenv from "dotenv";

dotenv.config();

class UserController {
    async create(req, res, next) {
        try {
            const user = await User.create({
                authId: req.user.authId,
            });
            return res.json({ user });
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }
    async updateLanguages(req, res, next) {
        try {
            const {
                nativeLanguage,
                studiedLanguage,
                languageLevel,
                isNotifications,
            } = req.body;
            const user = await User.update(
                {
                    nativeLanguage,
                    studiedLanguage,
                    languageLevel,
                    isNotifications,
                },
                {
                    where: {
                        authId: req.user.authId,
                    },
                }
            );
            return res.json({ user });
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }
    async getOne(req, res, next) {
        try {
            const user = await User.findOne({
                where: {
                    authId: req.user.authId,
                },
            });
            return res.json(user);
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }
    async getTwilio(req, res, next) {
        try {
            const accountSid = process.env.ACCOUNT_SID;
            const authToken = process.env.AUTH_TOKEN;
            const client = twilio(accountSid, authToken);
            client.tokens.create().then((token) => res.send({ token }));
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }
}
export default new UserController();
