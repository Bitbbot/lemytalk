import s from "./LanguageButtons.module.css";
import languages from "../../../utils/getLanguages";
import Close from "../../../assets/img/close.png";

const LanguageButtons = (props) => {
    if (props.isSettingsActive === true) {
        return (
            <div className={s.wrapper}>
                <div className={s.options_wrapper}>
                    <div className={s.close_wrapper}>
                        <img
                            src={Close}
                            width="20px"
                            onClick={() => {
                                props.setIsSettingsActive(false);
                            }}
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
};
export default LanguageButtons;
