import s from "./Report.module.css";
import Close from "../../assets/img/close.png";
import { useState } from "react";

const Report = (props) => {
    const handleChange = (reason) => {
        setReason(reason);
    };
    const handleReport = () => {
        if (reason !== "") {
            console.log(reason);
            props.setIsReportActive(false);
        }
    };
    const [reason, setReason] = useState("");
    if (props.isReportActive === true) {
        return (
            <div className={s.wrapper}>
                <div className={s.report_wrapper}>
                    <div className={s.close_wrapper}>
                        <img
                            src={Close}
                            width="20px"
                            onClick={() => {
                                props.setIsReportActive(false);
                            }}
                            className={s.close_img}
                        />
                    </div>
                    <div className={s.title}>Choose the reason of report</div>
                    <div>
                        <form className={s.form_wrapper}>
                            <div className={s.label}>
                                <label>
                                    <input
                                        type="radio"
                                        name="question"
                                        onClick={() => {
                                            handleChange("Insulting behavior");
                                        }}
                                    />
                                    Insulting behavior
                                </label>
                            </div>
                            <div className={s.label}>
                                <label>
                                    <input
                                        type="radio"
                                        name="question"
                                        onChange={() => {
                                            handleChange("Advertisement");
                                        }}
                                    />
                                    Advertisement
                                </label>
                            </div>
                            <div className={s.label}>
                                <label>
                                    <input
                                        type="radio"
                                        name="question"
                                        onChange={() => {
                                            handleChange("Pornography");
                                        }}
                                    />
                                    Pornography
                                </label>
                            </div>
                            <div className={s.label}>
                                <label>
                                    <input
                                        type="radio"
                                        name="question"
                                        onChange={() => {
                                            handleChange("Other");
                                        }}
                                    />
                                    Other
                                </label>
                            </div>
                        </form>
                    </div>
                    <div
                        className={s.submit}
                        onClick={() => {
                            handleReport();
                        }}
                    >
                        Submit
                    </div>
                </div>
            </div>
        );
    } else return <div></div>;
};

export default Report;
