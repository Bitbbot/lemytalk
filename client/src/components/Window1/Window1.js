import s from "./Window1.module.css";
import noise from "../../assets/img/w9.png";

const Window1 = () => {
    return (
        <div className={s.wrapper}>
            <img src={noise} width="100%" className={s.img} />
        </div>
    );
};

export default Window1;
