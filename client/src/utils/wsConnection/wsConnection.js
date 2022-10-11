import socketClient from "socket.io-client";
import { SIGNALING_SERVER_URL } from "../../env";

let socket;
export const connectionWithWebSocket = () => {
    socket = socketClient(SIGNALING_SERVER_URL);
    socket.on("connection", () => {
        // console.log("success", socket.id);
    });
};

export const registerUser = (id) => {
    socket.emit("register user", id);
};

export const findPartner = (user) => {
    // console.log(user.id);
    socket.emit("find partner", {
        id: user.id,
        nativeLanguage: user.nativeLanguage,
        studiedLanguage: user.studiedLanguage,
        level: user.level,
    });
};
