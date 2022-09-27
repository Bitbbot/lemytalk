// import Facebook from "../img/facebook.png";
// import Github from "../img/github.png";
import googleAuth from "../../utils/googleAuth";
import Google from "../../assets/img/google.png";
import Close from "../../assets/img/close.png";
import s from "./Login.module.css";

const Login = (props) => {
    // console.log(props.isModelActive);
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
                                {/*<img src={Google} width="20px" />*/}
                                Google
                            </div>
                        </div>
                        <div className={s.policies}>
                            <div>Accepting Policy</div>
                            <div>Agreement</div>
                        </div>
                    </div>
                </div>
                g{/*<h1 className="s.loginTitle">Choose a Login Method</h1>*/}
                {/*<div className="s.wrapper">*/}
                {/*    <div className="s.left">*/}
                {/*        <div className="s.loginButton google" onClick={googleAuth}>*/}
                {/*            <img src={Google} alt="" className="icon" />*/}
                {/*            Google*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
        );
    } else {
        return <div></div>;
    }
};

export default Login;
