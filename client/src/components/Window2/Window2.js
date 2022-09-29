import s from "./Window2.module.scss";

const Window2 = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.title}>
                LemyTalk helps people find a speaking partner
            </div>
            {/*<div>How to start: </div>*/}
            <ul>
                {/*<li>- Login</li>*/}
                {/*<li>*/}
                {/*    - Choose the language you know and the language you learn*/}
                {/*</li>*/}
                {/*<li>- Start speaking</li>*/}
            </ul>
            {/*<img src={picture} />*/}
        </div>
    );
};

export default Window2;
