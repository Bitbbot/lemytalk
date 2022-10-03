// import { User } from "../models/models.js";
// import ApiError from "../error/ApiError.js";
// import bcrypt from "bcrypt";
//
// class UserController {
//     async registration(req, res) {
//         const { authMethod } = req.body;
//         const user = await User.create({ authMethod });
//         return res.json({ user });
//     }
//     async login(req, res) {}
//     async check(req, res, next) {
//         const { id } = req.query;
//         if (!id) {
//             return next(ApiError.badRequest("no id"));
//         }
//         res.json({ message: "j" });
//     }
//     async getOne(req, res) {
//         const { id } = req.params;
//         const user = await User.findOne({
//             where: { id: id },
//         });
//         return res.json(user);
//     }
// }
// export default new UserController();
