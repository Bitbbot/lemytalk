import * as ws from "../wsConnection/wsConnection";
import { getTurnServers } from "./TURN";

const defaultConstrains = {
    video: true,
    audio: true,
};

let peerConnection;

export const getLocalStream = async (user) => {
    try {
        const stream = await navigator.mediaDevices.getUserMedia(
            defaultConstrains
        );
        createPeerConnection(stream, user);
        return stream;
    } catch (err) {
        console.log("error occurred trying to get access to local stream");
        console.log(err);
    }
};

const createPeerConnection = (localStream, user) => {
    const turnServers = getTurnServers();
    const configuration = {
        iceServers: [...turnServers, { url: "stun:stun.l.google.com:19302" }],
        iceTransportPolicy: "relay",
    };
    peerConnection = new RTCPeerConnection(configuration);
    // const localStream=
    for (const track of localStream.getTracks()) {
        peerConnection.addTrack(track, localStream);
    }
    peerConnection.ontrack = ({ streams: [stream] }) => {
        user.setRemoteStream(stream);
    };
    peerConnection.onicecandidate = (event) => {
        if (event.candidate) {
            ws.sendWebRTCCandidate(event.candidate);
        }
    };
    peerConnection.onconnectionstatechange = (event) => {
        if (peerConnection.connectionState === "connected") {
            console.log("success");
        }
    };
};

export const sendOffer = async () => {
    const offer = await peerConnection.createOffer();
    await peerConnection.setLocalDescription(offer);
    ws.sendWebRTCOffer(offer);
};

export const handleOffer = async (data) => {
    await peerConnection.setRemoteDescription(data.offer);
    const answer = await peerConnection.createAnswer();
    await peerConnection.setLocalDescription(answer);
    ws.sendWebRTCAnswer(answer);
};

export const handleAnswer = async (data) => {
    await peerConnection.setRemoteDescription(data.answer);
};
export const handleCandidate = async (data) => {
    try {
        console.log("adding_ice");
        await peerConnection.addIceCandidate(data.candidate);
    } catch (err) {
        console.log(err);
    }
};
