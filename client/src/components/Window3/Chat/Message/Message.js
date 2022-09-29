import s from "./Message.module.css";

const Message = (props) => {
    return (
        <div className={s.wrapper}>
            {props.message["user"] === "you" ? (
                <div className={s.you}>
                    <div className={s.text}>{props.message.text}</div>
                </div>
            ) : (
                <div></div>
            )}
            {props.message["user"] === "stranger" ? (
                <div className={s.stranger}>
                    <div className={s.text}>{props.message.text}</div>
                </div>
            ) : (
                <div></div>
            )}
        </div>
    );
};
export default Message;
