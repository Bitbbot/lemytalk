import s from "./Modal.module.scss";
import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Context } from "../../index";

const Modal = observer(({ Modal, state }) => {
    const { modals } = useContext(Context);
    if (modals[state] === true) {
        return (
            <div className={s.wrapper}>
                <div className={s.content_wrapper}>{Modal}</div>
            </div>
        );
    } else return <></>;
});
export default Modal;
