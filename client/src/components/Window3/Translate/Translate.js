import s from "./Translate.module.css";
import { useContext } from "react";
import { Context } from "../../../index";

const Translate = () => {
    const { user } = useContext(Context);
    return (
        <div className={s.wrapper}>
            <div className={s.title}>Translator</div>
            <div className={s.fields_wrapper}>
                <div className={s.input_wrapper}>
                    <textarea
                        maxLength="200"
                        placeholder="Do not hesitate to use me"
                    ></textarea>
                    <div className={s.language}>{user.nativeLanguage}</div>
                </div>
                <div className={s.input_wrapper}>
                    <textarea maxLength="200"></textarea>
                    <div className={s.language}>{user.studiedLanguage}</div>
                </div>
            </div>
        </div>
    );
};
export default Translate;