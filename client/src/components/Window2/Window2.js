import s from "./Window2.module.scss";
import RemoteVideo from "./RemoteVideo/RemoteVideo";
const Window2 = () => {
    return (
        <div className={s.wrapper}>
            <RemoteVideo />
        </div>
    );
};

export default Window2;
