import s from "./MobileButtons.module.css";
import start from "../../assets/img/start.svg";
import stop from "../../assets/img/stop.svg";
import report from "../../assets/img/report.svg";
import options from "../../assets/img/options.svg";
import classNames from "classnames";
import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Context } from "../../index";

const MobileButtons = observer((props) => {
    const { user } = useContext(Context);
    return (
        <div className={s.wrapper}>
            <div className={s.buttons}>
                <div
                    className={classNames([s.options, s.button])}
                    onClick={() => {
                        if (user.isAuth === true) {
                            props.setIsSettingsActive(true);
                        } else {
                            props.setIsModalActive(true);
                        }
                    }}
                >
                    <img src={options} />
                </div>
                <div
                    className={classNames([s.report, s.button])}
                    onClick={() => {
                        if (user.isAuth === true) {
                            props.setIsReportActive(true);
                        } else {
                            props.setIsModalActive(true);
                        }
                    }}
                >
                    <img src={report} />
                </div>
                <div
                    className={classNames([s.stop, s.button])}
                    onClick={() => {
                        if (user.isAuth === true) {
                            // props.setIsReportActive(true);
                        } else {
                            props.setIsModalActive(true);
                        }
                    }}
                >
                    <img src={stop} />
                </div>
                <div
                    className={classNames([s.start, s.button])}
                    onClick={() => {
                        if (user.isAuth === true) {
                            // props.setIsReportActive(true);
                        } else {
                            props.setIsModalActive(true);
                        }
                    }}
                >
                    <img src={start} />
                </div>
            </div>
        </div>
    );
});

export default MobileButtons;
