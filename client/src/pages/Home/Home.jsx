import { observer } from 'mobx-react-lite';
import classNames from 'classnames';
import ChatTranslator from '../../components/ChatTranslator/ChatTranslator';
import Buttons from '../../components/Buttons/Buttons';
import s from './Home.module.scss';
import MobileButtons from '../../components/Buttons/MobileButtons/MobileButtons';
import LocalVideo from '../../components/LocalVideo/LocalVideo';
import RemoteVideo from '../../components/RemoteVideo/RemoteVideo';

const Home = observer(() => (
  <div className={s.home_wrapper}>
    <div className={s.windows}>
      <div className={s.mobile_wrapper}>
        <div className={s.windows_wrapper}>
          <div className={classNames([s.wrapper, s.local])}>
            <LocalVideo />
          </div>
          <div className={classNames([s.wrapper, s.remote])}>
            <RemoteVideo />
          </div>
          <MobileButtons />
        </div>
      </div>
      <ChatTranslator />
    </div>
    <div className={s.buttons_desktop}>
      <Buttons />
    </div>
  </div>
));
export default Home;
