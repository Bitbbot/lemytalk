import s from "./LanguageButtons.module.css";
import languages from "../../../utils/getLanguages";

const LanguageButtons = () => {
    return (
        <div className={s.wrapper}>
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
        </div>
    );
};
export default LanguageButtons;
