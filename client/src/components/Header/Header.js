import { Link } from "react-router-dom";
import s from "./Header.module.css";
import logout from "../../utils/logout";
import { useContext } from "react";
import { Context } from "../../index";
import { observer } from "mobx-react-lite";

const Header = observer((props) => {
    const { user } = useContext(Context);
    return (
        <div className={s.wrapper}>
            <div className={s.logo}>
                <Link className={s.link} to="/">
                    LemyTalk
                </Link>
            </div>
            <div className={s.auth}>
                {user.isAuth === true ? (
                    <div className={s.login} onClick={logout}>
                        Logout
                    </div>
                ) : (
                    <div
                        className={s.login}
                        onClick={() => {
                            props.setIsModelActive(true);
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
