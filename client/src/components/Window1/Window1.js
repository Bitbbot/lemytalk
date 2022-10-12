import s from "./Window1.module.scss";
import noise from "../../assets/img/Untitled8.svg";
import { observer } from "mobx-react-lite";
import { useContext, useEffect, useRef } from "react";
import { Context } from "../../index";
import test from "../../assets/img/test.jpg";
const Window1 = observer(() => {
    const { user } = useContext(Context);
    const localVideoRef = useRef();
    useEffect(() => {
        console.log("render w1");
        if (user.localStream) {
            const localVideo = localVideoRef.current;
            localVideo.srcObject = user.localStream;
            localVideo.onLoadedMetadata = () => {
                localVideo.play();
            };
        }
    }, [user.localStream]);
    return (
        <div className={s.wrapper}>
            {user.localStream ? (
                <div className={s.video_wrapper}>
                    <video
                        className={s.video}
                        ref={localVideoRef}
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

export default Window1;
