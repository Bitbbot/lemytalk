import { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import s from './Buttons.module.scss';
import ControlButtons from './ControlButtons/ControlButtons';
import options from '../../assets/img/options.svg';
import Context from '../../index';

const Buttons = observer(() => {
  const { user } = useContext(Context);
  const { modals } = useContext(Context);
  return (
    <div className={s.wrapper}>
      <div className={s.options_wrapper}>
        <button
          type="button"
          className={s.options}
          onClick={() => {
            if (user.isAuth === true) {
              modals.setIsSettings(true);
            } else {
              modals.setIsLogin(true);
            }
          }}
        >
          <img src={options} className={s.options_img} alt="" />
        </button>
      </div>
      <ControlButtons />
      <div className={s.void} />
    </div>
  );
});
export default Buttons;
