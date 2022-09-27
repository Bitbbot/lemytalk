import s from "./MobileButtons.module.css";
import start from "../../assets/img/start.svg";
import stop from "../../assets/img/stop.svg";
import report from "../../assets/img/report.svg";
import options from "../../assets/img/options.svg";
import classNames from "classnames";

const MobileButtons = (props) => {
    return (
        <div className={s.wrapper}>
            <div className={s.buttons}>
                <div
                    className={classNames([s.options, s.button])}
                    onClick={() => {
                        props.setIsSettingsActive(true);
                    }}
                >
                    <img src={options} />
                </div>
                <div className={classNames([s.report, s.button])}>
                    <img src={report} />
                </div>
                <div className={classNames([s.stop, s.button])}>
                    <img src={stop} />
                </div>
                <div className={classNames([s.start, s.button])}>
                    <img src={start} />
                </div>
            </div>
        </div>
    );
};

export default MobileButtons;
