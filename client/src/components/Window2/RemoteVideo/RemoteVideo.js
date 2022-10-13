import { observer } from "mobx-react-lite";
import { useContext, useEffect, useRef } from "react";
import { Context } from "../../../index";
import s from "./RemoteVideo.module.scss";
import noise from "../../../assets/img/Untitled8.svg";

const RemoteVideo = observer(() => {
    const { user } = useContext(Context);
    const remoteVideoRef = useRef();
    useEffect(() => {
        if (user.remoteStream) {
            const remoteVideo = remoteVideoRef.current;
            remoteVideo.srcObject = user.remoteStream;
            remoteVideo.onLoadedMetadata = () => {
                remoteVideo.play();
            };
        }
    }, [user.remoteStream]);
    return (
        <div className={s.wrapper}>
            {user.remoteStream ? (
                <div className={s.video_wrapper}>
                    <video
                        className={s.video}
                        ref={remoteVideoRef}
                        autoPlay
                        muted
                        width="100%"
                    ></video>
                </div>
            ) : (
                <img src={noise} width="100%" className={s.img} />
            )}
        </div>
    );
});
export default RemoteVideo;
