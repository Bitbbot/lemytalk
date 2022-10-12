import s from "./Window2.module.scss";
import lemytalk from "../../assets/img/Untitled8.svg";
import { useEffect } from "react";
const Window2 = () => {
    useEffect(() => {
        console.log("render w2");
    }, []);
    return (
        <div className={s.wrapper}>
            {/*<div className={s.title}>*/}
            {/*    LemyTalk is created to help people learn languages.*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    Login, specify the language you know and the language you wanna*/}
            {/*    learn and we will find you a speaking partner{" "}*/}
            {/*</div>*/}

            {/*<div>How to start: </div>*/}
            {/*<ul>*/}
            {/*    /!*<li>- Login</li>*!/*/}
            {/*    /!*<li>*!/*/}
            {/*    /!*    - Choose the language you know and the language you learn*!/*/}
            {/*    /!*</li>*!/*/}
            {/*    /!*<li>- Start speaking</li>*!/*/}
            {/*</ul>*/}
            {/*<img src={picture} />*/}
            <img src={lemytalk} width="100%" height="100%" />
        </div>
    );
};

export default Window2;
