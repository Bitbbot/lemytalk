import s from "./Window3.module.css";
import Translate from "./Translate/Translate";
import Chat from "./Chat/Chat";

const Window3 = () => {
    return (
        <div className={s.wrapper}>
            <Translate />
            <Chat />
        </div>
    );
};
export default Window3;
