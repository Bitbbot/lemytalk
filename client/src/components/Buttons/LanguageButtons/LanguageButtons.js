import s from "./LanguageButtons.module.scss";
import { languages } from "../../../env";
import Close from "../../../assets/img/close.png";
import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Context } from "../../../index";

const LanguageButtons = observer(() => {
    const { modals, user } = useContext(Context);
    const handleClose = () => {
        // if
        // user.setNativeLanguage()
        // user.setStudiedLanguage()
    };
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
                        <select
                            onChange={(e) => {
                                user.setNativeLanguage(e.target.value);
                            }}
                            defaultValue={user.nativeLanguage}
                        >
                            {languages.names.map((name) =>
                                name === user.nativeLanguage ? (
                                    <option key={name}>{name}</option>
                                ) : (
                                    <option key={name}>{name}</option>
                                )
                            )}
                        </select>
                    </div>
                    <div>
                        <div className={s.description}>Studied language</div>
                        <select
                            onChange={(e) => {
                                user.setStudiedLanguage(e.target.value);
                            }}
                        >
                            {languages.names.map((name) => (
                                <option key={name}>{name}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <div className={s.description}>Level</div>
                        <select
                            onChange={(e) => {
                                user.setLevel(e.target.value);
                            }}
                        >
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
