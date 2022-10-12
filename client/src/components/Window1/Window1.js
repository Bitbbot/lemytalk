import s from "./Window1.module.scss";
import { useEffect } from "react";
import LocalVideo from "./LocalVideo/LocalVideo";
const Window1 = () => {
    useEffect(() => {
        console.log("render w1");
    }, []);
    return (
        <div className={s.wrapper}>
            <LocalVideo />
        </div>
    );
};

export default Window1;
