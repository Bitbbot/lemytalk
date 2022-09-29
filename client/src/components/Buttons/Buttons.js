import s from "./Buttons.module.css";
import ControlButtons from "./ControlButtons/ControlButtons";
import options from "../../assets/img/options.svg";
import { useContext } from "react";
import { Context } from "../../index";
import { observer } from "mobx-react-lite";

const Buttons = observer(() => {
    const { user } = useContext(Context);
    const { modals } = useContext(Context);
    return (
        <div className={s.wrapper}>
            <div className={s.options_wrapper}>
                <div
                    className={s.options}
                    onClick={() => {
                        if (user.isAuth === true) {
                            modals.setIsSettings(true);
                        } else {
                            modals.setIsLogin(true);
                        }
                    }}
                >
                    <img src={options} className={s.options_img} />
                </div>
            </div>
            <ControlButtons />
            <div className={s.void}></div>
        </div>
    );
});
export default Buttons;
