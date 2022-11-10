import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import s from './Header.module.scss';
import Context from '../../index';
import { SERVER_URL } from '../../env';

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
          <button
            type="button"
            className={s.login}
            onClick={() => {
              window.open(
                `${SERVER_URL}/api/auth/logout`,
                '_self',
              );
            }}
          >
            Logout
          </button>
        ) : (
          <button
            type="button"
            className={s.login}
            onClick={() => {
              modals.setIsLogin(true);
            }}
          >
            Login
          </button>
        )}
      </div>
    </div>
  );
});

export default Header;
