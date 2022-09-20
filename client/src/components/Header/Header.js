import { Link } from "react-router-dom";
import s from "./Header.module.css";
import logout from "../../utils/logout";
const Header = ({ user }) => {
    return (
        <div className={s.wrapper}>
            <div className={s.logo}>
                <Link className={s.link} to="/">
                    LemyTalk
                    {/*<img src={logo} className={s.logoimg} />*/}
                </Link>
            </div>
            <div className={s.auth}>
                {user.isAuth === true ? (
                    <div className={s.login} onClick={logout}>
                        Logout
                    </div>
                ) : (
                    <Link className={s.link} to="login">
                        <div className={s.login}>Login</div>
                    </Link>
                )}
            </div>
        </div>
    );
};

export default Header;
