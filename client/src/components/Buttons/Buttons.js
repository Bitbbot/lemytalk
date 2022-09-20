import s from "./Buttons.module.css";
import LanguageButtons from "./LanguageButtons/LanguageButtons";
import ControlButtons from "./ControlButtons/ControlButtons";

const Buttons = () => {
    return (
        <div className={s.wrapper}>
            <LanguageButtons />
            <ControlButtons />
        </div>
    );
};
export default Buttons;
