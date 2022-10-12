import s from "./ControlButtons.module.scss";
import { observer } from "mobx-react-lite";
import { useContext, useEffect } from "react";
import { Context } from "../../../index";
import { findPartner } from "../../../utils/wsConnection/wsConnection";
import { getLocalStream } from "../../../utils/WebRTC/WebRTCHandler";

const ControlButtons = observer(() => {
    const { user } = useContext(Context);
    const { modals } = useContext(Context);

    useEffect(() => {
        console.log("render CB");
    }, []);

    return (
        <div className={s.wrapper}>
            <div
                className={`${s.button} ${s.start}`}
                onClick={() => {
                    if (user.isAuth === true) {
                        // getLocalStream().then((stream) => {
                        //     if (user.localStream !== stream) {
                        //         console.log(stream + "");
                        //         if (stream) {
                        //             user.setLocalStream(stream);
                        //             findPartner(user);
                        //         } else modals.setIsAllowMedia(true);
                        //         console.log(user.localStream);
                        //     }
                        // });

                        if (user.localStream === null) {
                            getLocalStream().then((stream) => {
                                console.log(stream + "");
                                if (stream) {
                                    user.setLocalStream(stream);
                                } else modals.setIsAllowMedia(true);
                                console.log(user.localStream);
                            });
                        }
                        findPartner(user);
                    } else {
                        modals.setIsLogin(true);
                    }
                }}
            >
                Start
            </div>
            <div
                className={`${s.button} ${s.stop}`}
                onClick={() => {
                    if (user.isAuth === true) {
                    } else {
                        modals.setIsLogin(true);
                    }
                }}
            >
                Stop
            </div>
            <div
                className={`${s.button} ${s.complain}`}
                onClick={() => {
                    if (user.isAuth === true) {
                        modals.setIsReport(true);
                    } else {
                        modals.setIsLogin(true);
                    }
                }}
            >
                Report
            </div>
        </div>
    );
});
export default ControlButtons;
