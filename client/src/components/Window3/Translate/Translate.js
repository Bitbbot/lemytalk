import s from "./Translate.module.scss";
import { useContext } from "react";
import { Context } from "../../../index";
import classNames from "classnames";
import { observer } from "mobx-react-lite";

const Translate = observer(() => {
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
                    <div className={s.language}>
                        {user.nativeLanguage !== ""
                            ? user.nativeLanguage
                            : "Native language"}
                    </div>
                </div>
                <div
                    className={classNames([
                        s.input_wrapper,
                        s.input_wrapper_bottom,
                    ])}
                >
                    <textarea maxLength="200"></textarea>
                    <div className={s.language}>
                        {user.studiedLanguage !== ""
                            ? user.studiedLanguage
                            : "Studied language"}
                    </div>
                </div>
            </div>
        </div>
    );
});
export default Translate;
