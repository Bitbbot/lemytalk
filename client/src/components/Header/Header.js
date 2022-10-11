import { Link } from "react-router-dom";
import s from "./Header.module.scss";
import { useContext } from "react";
import { Context } from "../../index";
import { observer } from "mobx-react-lite";
import { SERVER_URL } from "../../env";

const Header = observer(() => {
    const { user } = useContext(Context);
    const { modals } = useContext(Context);
    return (
        <div className={s.wrapper}>
            <div className={s.logo}>
                <Link className={s.link} to="/">
                    LemyTalk
                </Link>
            </div>
            <div className={s.auth}>
                {user.isAuth === true ? (
                    <div
                        className={s.login}
                        onClick={() => {
                            window.open(
                                `${SERVER_URL}/api/auth/logout`,
                                "_self"
                            );
                        }}
                    >
                        Logout
                    </div>
                ) : (
                    <div
                        className={s.login}
                        onClick={() => {
                            modals.setIsLogin(true);
                        }}
                    >
                        Login
                    </div>
                )}
            </div>
        </div>
    );
});

export default Header;
