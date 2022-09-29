import s from "./LanguageButtons.module.css";
import languages from "../../../utils/getLanguages";
import Close from "../../../assets/img/close.png";
import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Context } from "../../../index";

const LanguageButtons = observer(() => {
    const { modals } = useContext(Context);
    if (modals.isSettings === true) {
        return (
            <div className={s.wrapper}>
                <div className={s.options_wrapper}>
                    <div
                        className={s.close_wrapper}
                        onClick={() => {
                            modals.setIsSettings(false);
                        }}
                    >
                        <img
                            src={Close}
                            width="20px"
                            height="20px"
                            className={s.close_img}
                        />
                    </div>
                    <div>
                        <div className={s.description}>Native language</div>
                        <select>
                            {languages.names.map((name) => (
                                <option key={name}>{name}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <div className={s.description}>Studied language</div>
                        <select>
                            {languages.names.map((name) => (
                                <option key={name}>{name}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <div className={s.description}>Level</div>
                        <select>
                            {languages.levels.map((level) => (
                                <option key={level}>{level}</option>
                            ))}
                        </select>
                    </div>
                    <div className={s.changes}>
                        Сhanges will be saved automatically
                    </div>
                </div>
            </div>
        );
    } else {
        return <div></div>;
    }
});
export default LanguageButtons;
