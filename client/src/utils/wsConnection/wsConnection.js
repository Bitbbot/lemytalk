import socketClient from "socket.io-client";
import { SIGNALING_SERVER_URL } from "../../env";

let socket;
export const connectionWithWebSocket = () => {
    socket = socketClient(SIGNALING_SERVER_URL);
    socket.on("connection", () => {
        console.log("success", socket.id);
    });
};
