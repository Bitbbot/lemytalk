import s from "./AllowMedia.module.scss";
import Close from "../../../assets/img/close.png";
import { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../../../index";

const AllowMedia = observer(() => {
    const { modals } = useContext(Context);
    if (modals.isAllowMedia === true) {
        return (
            <div className={s.wrapper}>
                <div className={s.report_wrapper}>
                    <div className={s.close_wrapper}>
                        <div
                            className={s.close_img_wrapper}
                            onClick={() => {
                                modals.setIsAllowMedia(false);
                            }}
                        >
                            <img
                                src={Close}
                                width="20px"
                                className={s.close_img}
                            />
                        </div>
                    </div>
                    <div className={s.title}>
                        To start allow access to your camera and microphone
                    </div>
                </div>
            </div>
        );
    } else return <div></div>;
});

export default AllowMedia;
