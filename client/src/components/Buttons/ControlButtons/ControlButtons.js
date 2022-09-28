import s from "./ControlButtons.module.css";
import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Context } from "../../../index";

const ControlButtons = observer((props) => {
    const { user } = useContext(Context);
    return (
        <div className={s.wrapper}>
            <div
                className={`${s.button} ${s.start}`}
                onClick={() => {
                    if (user.isAuth === true) {
                    } else {
                        props.setIsModalActive(true);
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
                        props.setIsModalActive(true);
                    }
                }}
            >
                Stop
            </div>
            <div
                className={`${s.button} ${s.complain}`}
                onClick={() => {
                    if (user.isAuth === true) {
                        props.setIsReportActive(true);
                    } else {
                        props.setIsModalActive(true);
                    }
                }}
            >
                Report
            </div>
        </div>
    );
});
export default ControlButtons;
