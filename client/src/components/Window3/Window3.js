import s from "./Window3.module.css";
import Translate from "./Translate/Translate";
import Chat from "./Chat/Chat";
import { observer } from "mobx-react-lite";
import { useContext, useState } from "react";
import { Context } from "../../index";
import classNames from "classnames";

const Window3 = observer(() => {
    const { user } = useContext(Context);
    const [element, setElement] = useState("chat");
    return (
        <div className={s.wrapper}>
            {user.width > 1300 ? (
                <>
                    <Translate />
                    <Chat />
                </>
            ) : (
                // </div>
                <div className={s.mobile_wrapper}>
                    {element === "chat" ? (
                        <>
                            <div className={s.title}>
                                <div className={s.active}>Chat</div>
                                <div
                                    className={classNames([
                                        s.not_active,
                                        s.right_bottom,
                                    ])}
                                    onClick={() => {
                                        setElement("translator");
                                    }}
                                >
                                    Translator
                                </div>
                            </div>
                            <Chat />
                        </>
                    ) : (
                        <>
                            <div className={s.title}>
                                <div
                                    className={classNames([
                                        s.not_active,
                                        s.left_bottom,
                                    ])}
                                    onClick={() => {
                                        setElement("chat");
                                    }}
                                >
                                    Chat
                                </div>
                                <div className={s.active}>Translator</div>
                            </div>
                            <Translate />
                        </>
                    )}
                </div>
            )}
        </div>
    );
});
export default Window3;
