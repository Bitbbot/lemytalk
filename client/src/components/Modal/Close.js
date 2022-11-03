import s from "./Close.module.scss";
import closeimg from "../../assets/img/close.png";

const Close = ({ callback }) => {
    return (
        <div className={s.close_wrapper}>
            <div
                className={s.close_img_wrapper}
                onClick={() => {
                    callback();
                }}
            >
                <img
                    src={closeimg}
                    width="20px"
                    height="20px"
                    className={s.close_img}
                />
            </div>
        </div>
    );
};
export default Close;
