import { CLIENT_URL } from "../env.js";
import ApiError from "../error/ApiError.js";

class AuthController {
    async loginSuccess(req, res, next) {
        try {
            if (req.user) {
                return res.status(200).json({
                    success: true,
                    message: "successful",
                    user: req.user,
                });
            } else
                return res.status(401).json({
                    success: false,
                    message: "failure",
                });
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }
    async loginFailed(req, res, next) {
        try {
            return res.status(401).json({
                success: false,
                message: "failure",
            });
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }
    async logoutRoute(req, res, next) {
        try {
            req.logout();
            return res.redirect(CLIENT_URL);
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }
}

export default new AuthController();
