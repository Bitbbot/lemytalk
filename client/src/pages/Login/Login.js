import googleAuth from "../../utils/googleAuth";
import Close from "../../assets/img/close.png";
import s from "./Login.module.scss";
import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Context } from "../../index";

const Login = observer(() => {
    const { modals } = useContext(Context);
    if (modals.isLogin === true) {
        return (
            <div className={s.wrapper}>
                <div className={s.content}>
                    <div className={s.close_wrapper}>
                        <div
                            className={s.close_img_wrapper}
                            onClick={() => {
                                modals.setIsLogin(false);
                            }}
                        >
                            <img
                                src={Close}
                                width="20px"
                                height="20px"
                                className={s.close_img}
                            />
                        </div>
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
});

export default Login;
