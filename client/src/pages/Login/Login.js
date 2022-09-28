import googleAuth from "../../utils/googleAuth";
import Close from "../../assets/img/close.png";
import s from "./Login.module.css";

const Login = (props) => {
    if (props.isModalActive === true) {
        return (
            <div className={s.wrapper}>
                <div className={s.content}>
                    <div className={s.close_wrapper}>
                        <img
                            src={Close}
                            width="20px"
                            onClick={() => {
                                props.setIsModalActive(false);
                            }}
                            className={s.close_img}
                        />
                    </div>
                    <div className={s.content_wrapper}>
                        <div className={s.title}>Choose a Login Method</div>
                        <div>
                            <div
                                className={s.google}
                                onClick={() => {
                                    googleAuth();
                                }}
                            >
                                Google
                            </div>
                        </div>
                        <div className={s.policies}>
                            <div>Accepting Policy</div>
                            <div>Agreement</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    } else {
        return <div></div>;
    }
};

export default Login;
