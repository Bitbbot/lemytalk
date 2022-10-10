import s from "./Window1.module.scss";
import noise from "../../assets/img/Untitled8.svg";

const Window1 = () => {
    return (
        <div className={s.wrapper}>
            <img src={noise} width="100%" className={s.img} />
        </div>
    );
};

export default Window1;
