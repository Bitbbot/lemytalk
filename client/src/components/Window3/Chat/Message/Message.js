import s from "./Message.module.css";

const Message = ({ message }) => {
    return (
        <div className={s.wrapper}>
            {message["user"] === "you" ? (
                <div className={s.you}>
                    {/*<div className={s.user}>{message.user}</div>*/}
                    <div className={s.text}>{message.text}</div>
                </div>
            ) : (
                <div></div>
            )}
            {message["user"] === "stranger" ? (
                <div className={s.stranger}>
                    {/*<div className={s.user}>{message.user}</div>*/}
                    <div className={s.text}>{message.text}</div>
                </div>
            ) : (
                <div></div>
            )}
        </div>
    );
};
export default Message;
