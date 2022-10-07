import s from "./LanguageButtons.module.scss";
import { languages } from "../../../env";
import { observer } from "mobx-react-lite";
import { useContext, useState } from "react";
import { Context } from "../../../index";
import { updateLanguages } from "../../../api/userAPI";
import classNames from "classnames";

const LanguageButtons = observer(() => {
    const { modals, user } = useContext(Context);
    const handleClose = () => {
        if (
            user.nativeLanguage !== "" &&
            user.studiedLanguage !== "" &&
            user.level !== ""
        ) {
            modals.setIsSettings(false);
            updateLanguages(
                user.nativeLanguage,
                user.studiedLanguage,
                user.level,
                user.isNotifications
            );
        }
    };
    if (modals.isSettings === true) {
        return (
            <div className={s.wrapper}>
                <div className={s.options_wrapper}>
                    <div>
                        <div className={s.description}>Native language</div>
                        <select
                            onChange={(e) => {
                                user.setNativeLanguage(e.target.value);
                            }}
                            defaultValue={user.nativeLanguage}
                        >
                            {languages.names.map((name) => (
                                <option key={name}>{name}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <div className={s.description}>Studied language</div>
                        <select
                            onChange={(e) => {
                                user.setStudiedLanguage(e.target.value);
                            }}
                            defaultValue={user.studiedLanguage}
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
                            defaultValue={user.level}
                        >
                            {languages.levels.map((level) => (
                                <option key={level}>{level}</option>
                            ))}
                        </select>
                    </div>
                    <div className={s.checkbox_wrapper}>
                        <input
                            type="checkbox"
                            checked={user.isNotifications}
                            className={s.checkbox}
                            onChange={() => {
                                user.setIsNotifications(!user.isNotifications);
                            }}
                        />
                        <div className={s.checkbox_description}>
                            Send me updates, recommendations and learning tips
                        </div>
                    </div>
                    <div>
                        {user.nativeLanguage !== "" &&
                        user.studiedLanguage !== "" &&
                        user.level !== "" ? (
                            <div>
                                <div
                                    className={s.save}
                                    onClick={() => {
                                        handleClose();
                                    }}
                                >
                                    Save
                                </div>
                            </div>
                        ) : (
                            <div>
                                <div
                                    className={classNames([
                                        s.save,
                                        s.not_active,
                                    ])}
                                >
                                    Save
                                </div>
                            </div>
                        )}
                    </div>
                    <div className={s.error}>
                        {user.nativeLanguage !== "" &&
                        user.studiedLanguage !== "" &&
                        user.level !== ""
                            ? ""
                            : "To continue choose your native language, studied language and it's level"}
                    </div>
                </div>
            </div>
        );
    } else {
        return <div></div>;
    }
});
export default LanguageButtons;
