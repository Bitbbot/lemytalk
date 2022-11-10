import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import s from './ControlButtons.module.scss';
import Context from '../../../index';
import { findPartner } from '../../../utils/wsConnection/wsConnection';
import { getLocalStream } from '../../../utils/WebRTC/WebRTCHandler';

const ControlButtons = observer(() => {
  const { user } = useContext(Context);
  const { modals } = useContext(Context);

  return (
    <div className={s.wrapper}>
      <button
        type="button"
        className={`${s.button} ${s.start}`}
        onClick={() => {
          if (user.isAuth === true) {
            if (user.localStream === null) {
              getLocalStream(user).then((stream) => {
                console.log(`${stream}`);
                if (stream) {
                  user.setLocalStream(stream);
                  findPartner(user);
                } else modals.setIsAllowMedia(true);
                console.log(user.localStream);
              });
            } else {
              findPartner(user);
            }
          } else {
            modals.setIsLogin(true);
          }
        }}
      >
        Start
      </button>
      <button
        type="button"
        className={`${s.button} ${s.stop}`}
        onClick={() => {
          if (user.isAuth) {
            console.log();
          } else {
            modals.setIsLogin(true);
          }
        }}
      >
        Stop
      </button>
      <button
        type="button"
        className={`${s.button} ${s.complain}`}
        onClick={() => {
          if (user.isAuth === true) {
            modals.setIsReport(true);
          } else {
            modals.setIsLogin(true);
          }
        }}
      >
        Report
      </button>
    </div>
  );
});
export default ControlButtons;
