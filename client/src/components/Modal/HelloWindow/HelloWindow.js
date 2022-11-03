import s from "./HelloWindow.module.scss";
import { useContext, useState } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../../../index";
import start from "../../../assets/img/start.svg";
import stop from "../../../assets/img/stop.svg";
import report from "../../../assets/img/report.svg";
import options from "../../../assets/img/options.svg";
import classNames from "classnames";

const Report = observer(() => {
    const { modals } = useContext(Context);
    const handleNext = () => {
        modals.setIsHello(false);
        modals.setIsSettings(true);
    };
    return (
        <>
            <div className={s.title}>How to use</div>
            <div className={s.items}>
                <div className={s.item}>
                    <div className={classNames([s.start, s.button])}>
                        <img src={start} />
                    </div>
                    <div className={s.description}>
                        Start conversation/ Change partner
                    </div>
                </div>
                <div className={s.item}>
                    <div className={classNames([s.stop, s.button])}>
                        <img src={stop} />
                    </div>
                    <div className={s.description}>Stop conversation</div>
                </div>
                <div className={s.item}>
                    <div className={classNames([s.report, s.button])}>
                        <img src={report} />
                    </div>
                    <div className={s.description}>Complain about user</div>
                </div>
                <div className={s.item}>
                    <div className={classNames([s.options, s.button])}>
                        <img src={options} />
                    </div>
                    <div className={s.description}>Settings</div>
                </div>
            </div>
            <div></div>
            <div
                className={s.next}
                onClick={() => {
                    handleNext();
                }}
            >
                Next
            </div>
        </>
    );
});

export default Report;
