import s from "./Buttons.module.css";
import LanguageButtons from "./LanguageButtons/LanguageButtons";
import ControlButtons from "./ControlButtons/ControlButtons";
import options from "../../assets/img/options.png";

const Buttons = (props) => {
    return (
        <div className={s.wrapper}>
            <div className={s.options_wrapper}>
                <div
                    className={s.options}
                    onClick={() => {
                        props.setIsSettingsActive(true);
                    }}
                >
                    <img src={options} className={s.options_img} />
                </div>
            </div>
            <ControlButtons />
            <div className={s.void}></div>
        </div>
    );
};
export default Buttons;
