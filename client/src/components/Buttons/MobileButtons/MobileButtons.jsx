import classNames from 'classnames';
import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import s from './MobileButtons.module.scss';
import start from '../../../assets/img/start.svg';
import stop from '../../../assets/img/stop.svg';
import report from '../../../assets/img/report.svg';
import options from '../../../assets/img/options.svg';
import Context from '../../../index';
import { getLocalStream } from '../../../utils/WebRTC/WebRTCHandler';
import { findPartner } from '../../../utils/wsConnection/wsConnection';

const MobileButtons = observer(() => {
  const { user } = useContext(Context);
  const { modals } = useContext(Context);
  return (
    <div className={s.wrapper}>
      <div className={s.buttons}>
        <button
          type="button"
          className={classNames([s.options, s.button])}
          onClick={() => {
            if (user.isAuth === true) {
              modals.setIsSettings(true);
            } else {
              modals.setIsLogin(true);
            }
          }}
        >
          <img src={options} alt="" />
        </button>
        <button
          type="button"
          className={classNames([s.report, s.button])}
          onClick={() => {
            if (user.isAuth === true) {
              modals.setIsReport(true);
            } else {
              modals.setIsLogin(true);
            }
          }}
        >
          <img src={report} alt="" />
        </button>
        <button
          type="button"
          className={classNames([s.stop, s.button])}
          onClick={() => {
            if (!user.isAuth) {
              modals.setIsLogin(true);
            } else {
              console.log();
            }
          }}
        >
          <img src={stop} alt="" />
        </button>
        <button
          type="button"
          className={classNames([s.start, s.button])}
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
          <img src={start} alt="" />
        </button>
      </div>
    </div>
  );
});

export default MobileButtons;
