import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Context } from "../../../index";
import s from "./RemoteVideo.module.scss";
import noise from "../../../assets/img/Untitled8.svg";

const LocalVideo = observer(() => {
    const { user } = useContext(Context);
    return (
        <div className={s.wrapper}>
            {user.localStream ? (
                <div className={s.video_wrapper}>h</div>
            ) : (
                // <div></div>
                <img src={noise} width="100%" className={s.img} />
            )}
        </div>
    );
});
export default LocalVideo;
