import s from "./Chat.module.css";
import { useContext, useEffect, useRef } from "react";
import { Context } from "../../../index";
import Message from "./Message/Message";
import send_button from "../../../assets/img/send-button.png";

const Chat = () => {
    const { messages } = useContext(Context);
    const bottomRef = useRef(null);
    useEffect(() => {
        bottomRef.current?.scrollIntoView({
            // behavior: "smooth",
            block: "nearest",
            inline: "start",
        });
    }, [messages]);
    return (
        <div className={s.wrapper}>
            <div className={s.title}>Chat</div>
            {/*<div className={s.messages_wr}>*/}
            <div className={s.messages}>
                <div className={s.messages_wrapper}>
                    {messages?.messages?.map((message) => (
                        <Message message={message} key={message.id} />
                    ))}
                </div>
                <div ref={bottomRef}></div>
            </div>
            {/*</div>*/}
            <div className={s.input}>
                <input
                    type="text"
                    className={s.input_field}
                    placeholder="Send a message"
                ></input>
                <div className={s.input_img}>
                    <img src={send_button} width="100%" />
                </div>
            </div>
        </div>
    );
};
export default Chat;
