import s from "./Window2.module.css";
import noise from "../../assets/img/he.jpg";
import { Link } from "react-router-dom";

const Window2 = (user) => {
    const logout = () => {
        window.open("http://localhost:5000/auth/logout", "_self");
    };
    return (
        <div className={s.wrapper}>
            <div className={s.auth}>
                {user ? (
                    <div className="listItem" onClick={logout}>
                        Logout
                    </div>
                ) : (
                    <Link className={s.link} to="login">
                        Login
                    </Link>
                )}
            </div>
        </div>
    );
};

export default Window2;
