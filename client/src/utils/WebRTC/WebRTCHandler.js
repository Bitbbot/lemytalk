const defaultConstrains = {
    video: true,
    audio: true,
};

export const getLocalStream = async () => {
    try {
        const stream = await navigator.mediaDevices.getUserMedia(
            defaultConstrains
        );
        console.log(stream);
        return stream;
    } catch (err) {
        console.log("error occurred trying to get access to local stream");
        console.log(err);
    }
};
