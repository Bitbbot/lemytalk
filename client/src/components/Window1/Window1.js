import s from "./Window1.module.scss";
import LocalVideo from "./LocalVideo/LocalVideo";
const Window1 = () => {
    return (
        <div className={s.wrapper}>
            <LocalVideo />
        </div>
    );
};

export default Window1;
