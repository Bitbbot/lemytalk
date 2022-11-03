import Close from "../Close";
import s from "./Login.module.scss";
import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Context } from "../../../index";
import classNames from "classnames";
import { SERVER_URL } from "../../../env";

const Login = observer(() => {
    const { modals } = useContext(Context);
    return (
        <>
            <Close
                callback={() => {
                    modals.setIsLogin(false);
                }}
            />
            <div className={s.content_wrapper}>
                <div className={s.title}>Choose a Login Method</div>
                <div>
                    <div
                        className={classNames([s.button, s.google])}
                        onClick={() => {
                            window.open(
                                `${SERVER_URL}/api/auth/google`,
                                "_self"
                            );
                        }}
                    >
                        Google
                    </div>
                    <div className={classNames([s.button, s.facebook])}>
                        Facebook
                    </div>
                    <div className={classNames([s.button, s.vk])}>Vk</div>
                </div>
                <div className={s.policies}>
                    <div>
                        By signing up, you agree to our Terms of Use and Privacy
                        Policy
                    </div>
                </div>
            </div>
        </>
    );
});

export default Login;
