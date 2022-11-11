import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import classNames from 'classnames';
import Close from '../Close';
import s from './Login.module.scss';
import Context from '../../../index';

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
          <button
            type="button"
            className={classNames([s.button, s.google])}
            onClick={() => {
              window.open(
                `${process.env.REACT_APP_SERVER_URL}auth/google`,
                '_self',
              );
            }}
          >
            Google
          </button>
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
