import { createServer } from "http";
import { Server } from "socket.io";
import { PORT } from "./env.js";

const httpServer = createServer();
const io = new Server(httpServer, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"],
    },
});
io.on("connection", (socket) => {
    socket.emit("connection", null);
    console.log("new user connected");
});
httpServer.listen(PORT);
