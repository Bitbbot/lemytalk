import { observer } from 'mobx-react-lite';
import classNames from 'classnames';
import Window3 from '../../components/Window3/Window3';
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
      <Window3 />
    </div>
    <div className={s.buttons_desktop}>
      <Buttons />
    </div>
  </div>
));
export default Home;
