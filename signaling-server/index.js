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
//list of waiting for a partner users
let peers = [];
//list of rooms with 2 users
let rooms = [];

io.on("connection", (socket) => {
    socket.emit("connection", null);
    socket.on("find partner", (data) => {
        //check if user is waiting and delete him if he is
        const peer = peers.findIndex((peer) => peer.userId === data.id);
        if (peer !== -1) peers.splice(peer, 1);
        //check if user is talking
        const room = rooms.findIndex(
            (room) =>
                room.user1.userId === data.id || room.user2.userId === data.id
        );
        //if user is talking delete the room and add his partner in a waiting list
        if (room !== -1) {
            // удалить комнату с данным юзером и разорвать соединение webRTC
            let secondUser = "user1";
            if (rooms[room].user1.userId === data.userId) secondUser = "user2";
            peers.push({
                userId: rooms[room][secondUser].userId,
                socketId: rooms[room][secondUser].socketId,
                nativeLanguage: rooms[room][secondUser].nativeLanguage,
                studiedLanguage: rooms[room][secondUser].studiedLanguage,
                level: rooms[room][secondUser].level,
                lastCallerId: rooms[room][secondUser].lastCallerId,
            });
            rooms.splice(room, 1);
        }
        //try to find a partner for a user
        const candidate = peers.findIndex(
            (peer) =>
                peer.studiedLanguage === data.studiedLanguage &&
                peer.lastCallerId !== data.id
        );
        //if we find a partner add 2 peers in a room and connect them
        //if we don't find a partner add user to waiting list
        if (candidate !== -1) {
            rooms.push({
                user1: {
                    userId: peers[candidate].userId,
                    socketId: peers[candidate].socketId,
                    nativeLanguage: peers[candidate].nativeLanguage,
                    studiedLanguage: peers[candidate].studiedLanguage,
                    level: peers[candidate].level,
                    lastCallerId: data.id,
                },
                user2: {
                    userId: data.id,
                    socketId: socket.id,
                    nativeLanguage: data.nativeLanguage,
                    studiedLanguage: data.studiedLanguage,
                    level: data.level,
                    lastCallerId: peers[candidate].userId,
                },
            });
            peers.splice(candidate, 1);
            //установить соединение
        } else {
            peers.push({
                userId: data.id,
                socketId: socket.id,
                nativeLanguage: data.nativeLanguage,
                studiedLanguage: data.studiedLanguage,
                level: data.level,
                lastCallerId: "",
            });
        }
        console.log("peers");
        console.log(peers);
        console.log("rooms");
        console.log(rooms);
    });
});
httpServer.listen(PORT);
