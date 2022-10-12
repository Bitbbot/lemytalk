import s from "./Window1.module.scss";
import noise from "../../assets/img/Untitled8.svg";
import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Context } from "../../index";

const Window1 = observer(() => {
    const { user } = useContext(Context);
    return (
        <div className={s.wrapper}>
            {user.localStream ? (
                <div>local</div>
            ) : (
                <img src={noise} width="100%" className={s.img} />
            )}
        </div>
    );
});

export default Window1;
