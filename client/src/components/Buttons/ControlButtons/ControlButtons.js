import s from "./ControlButtons.module.css";

const ControlButtons = () => {
    return (
        <div className={s.wrapper}>
            <div className={`${s.button} ${s.start}`}>Start</div>
            <div className={`${s.button} ${s.stop}`}>Stop</div>
            <div className={`${s.button} ${s.complain}`}>Complain</div>
        </div>
    );
};
export default ControlButtons;
