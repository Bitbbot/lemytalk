import s from "./Buttons.module.css";
import ControlButtons from "./ControlButtons/ControlButtons";
import options from "../../assets/img/options.svg";
import { useContext } from "react";
import { Context } from "../../index";
import { observer } from "mobx-react-lite";

const Buttons = observer((props) => {
    const { user } = useContext(Context);
    return (
        <div className={s.wrapper}>
            <div className={s.options_wrapper}>
                <div
                    className={s.options}
                    onClick={() => {
                        if (user.isAuth === true) {
                            props.setIsSettingsActive(true);
                        } else {
                            props.setIsModalActive(true);
                        }
                    }}
                >
                    <img src={options} className={s.options_img} />
                </div>
            </div>
            <ControlButtons
                setIsReportActive={props.setIsReportActive}
                setIsModalActive={props.setIsModalActive}
            />
            <div className={s.void}></div>
        </div>
    );
});
export default Buttons;
