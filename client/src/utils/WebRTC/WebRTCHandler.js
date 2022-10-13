const defaultConstrains = {
    video: true,
    audio: true,
};
let peerConnection;
const configuration = {
    iceServers: [
        {
            urls: "stun:stun.l.google.com:19302",
        },
    ],
};

export const getLocalStream = async () => {
    try {
        const stream = await navigator.mediaDevices.getUserMedia(
            defaultConstrains
        );
        // createPeerConnection(stream);
        return stream;
    } catch (err) {
        console.log("error occurred trying to get access to local stream");
        console.log(err);
    }
};

const createPeerConnection = () => {
    peerConnection = new RTCPeerConnection(configuration);
    // const localStream=
};
