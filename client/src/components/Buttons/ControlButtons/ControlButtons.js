import s from "./ControlButtons.module.scss";
import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Context } from "../../../index";

const ControlButtons = observer(() => {
    const { user } = useContext(Context);
    const { modals } = useContext(Context);
    return (
        <div className={s.wrapper}>
            <div
                className={`${s.button} ${s.start}`}
                onClick={() => {
                    if (user.isAuth === true) {
                    } else {
                        modals.setIsLogin(true);
                    }
                }}
            >
                Start
            </div>
            <div
                className={`${s.button} ${s.stop}`}
                onClick={() => {
                    if (user.isAuth === true) {
                    } else {
                        modals.setIsLogin(true);
                    }
                }}
            >
                Stop
            </div>
            <div
                className={`${s.button} ${s.complain}`}
                onClick={() => {
                    if (user.isAuth === true) {
                        modals.setIsReport(true);
                    } else {
                        modals.setIsLogin(true);
                    }
                }}
            >
                Report
            </div>
        </div>
    );
});
export default ControlButtons;
