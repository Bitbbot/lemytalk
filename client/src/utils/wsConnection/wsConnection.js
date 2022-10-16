import socketClient from "socket.io-client";
import { SIGNALING_SERVER_URL } from "../../env";
import * as webRTCHandler from "../WebRTC/WebRTCHandler";

let partnerSocketId;
let partnerUserId;
let socket;
export const getPartnerSocketId = () => {
    return partnerSocketId;
};

export const connectionWithWebSocket = () => {
    socket = socketClient(SIGNALING_SERVER_URL);
    socket.on("connection", () => {
        // console.log("success", socket.id);
        partnerUserId = socket.id;
    });
    socket.on("partner info", (data) => {
        partnerSocketId = data.socketId;
        partnerUserId = data.userId;
        console.log(partnerSocketId, partnerUserId);
        // webRTCHandler.sendOffer();
    });
    socket.on("webRTC offer", (data) => {
        partnerSocketId = data.socketId;
        partnerUserId = data.userId;
        console.log(partnerSocketId, partnerUserId);
        webRTCHandler.sendOffer();
    });
    socket.on("get webRTC offer", (data) => {
        webRTCHandler.handleOffer(data);
        console.log(data.offer);
    });
    socket.on("get webRTC answer", (data) => {
        webRTCHandler.handleAnswer(data);
        console.log(data.answer);
    });
    socket.on("webRTC-candidate", (data) => {
        webRTCHandler.handleCandidate(data);
    });
};

export const findPartner = (user) => {
    // console.log(user.id);
    socket.emit("find partner", {
        id: user.id,
        nativeLanguage: user.nativeLanguage,
        studiedLanguage: user.studiedLanguage,
        level: user.level,
        partnerUserId: partnerUserId,
    });
};
export const sendWebRTCOffer = (offer) => {
    socket.emit("send webRTC offer", { offer, partnerSocketId });
};

export const sendWebRTCAnswer = (answer) => {
    socket.emit("send webRTC answer", { answer, partnerSocketId });
};
export const sendWebRTCCandidate = (candidate) => {
    socket.emit("webRTC-candidate", { candidate, partnerSocketId });
};
