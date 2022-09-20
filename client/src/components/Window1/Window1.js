import s from "./Window1.module.css";
import noise from "../../assets/img/w9.png";

const Window1 = () => {
    return (
        <div className={s.wrapper}>
            {/*It's time to speak about*/}
            {<img src={noise} width="100%" className={s.img} />}
        </div>
    );
};

export default Window1;
