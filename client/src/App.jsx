import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import {
  useContext, useEffect, useRef,
} from 'react';
import Header from './components/Header/Header';
import Login from './components/Modal/Login/Login';
import Home from './pages/Home/Home';
import './App.scss';
import Context from './index';
import { checkUser, getUser, createUser } from './utils/api/userAPI';
import Settings from './components/Modal/Settings/Settings';
import Report from './components/Modal/Report/Report';
import HelloWindow from './components/Modal/HelloWindow/HelloWindow';
import { connectionWithWebSocket } from './utils/wsConnection/wsConnection';
import AllowMedia from './components/Modal/AllowMedia/AllowMedia';
import Modal from './components/Modal/Modal';

const App = observer(() => {
  const { user, modals } = useContext(Context);
  const width = useRef(null);
  const windowRef = useRef(null);
  useEffect(() => {
    user.setWidth(width.current ? width.current.offsetWidth : 0);
    window.visualViewport.addEventListener('resize', () => {
      user.setWidth(width.current ? width.current.offsetWidth : 0);
      windowRef.current?.scrollIntoView({
        block: 'nearest',
        inline: 'start',
      });
      user.setViewPortHeight(window.visualViewport.height);
    });
    return () => {
      window.visualViewport.removeEventListener('resize', () => { });
    };
  }, []);
  useEffect(() => {
    (async () => {
      const e = await checkUser();
      user.setIsAuth(e);
      if (user.isAuth) {
        const response = await getUser();
        try {
          user.setNativeLanguage(response.nativeLanguage);
          user.setStudiedLanguage(response.studiedLanguage);
          user.setLevel(response.languageLevel);
          user.setIsNotifications(response.isNotifications);
        // eslint-disable-next-line no-shadow
        } catch (e) {
          modals.setIsHello(true);
        }
        if (response === null) {
          createUser();
        }
        if (
          response?.nativeLanguage === ''
          && response?.studiedLanguage === ''
          && response?.languageLevel === ''
        ) { modals.setIsHello(true); }
        // eslint-disable-next-line no-shadow
        getUser().then((response) => {
          user.setId(response.authId);
        });
        connectionWithWebSocket();
      }
    })();
  }, []);
  return (
    <Router>
      <div className="App" ref={width}>
        <div ref={windowRef} className="windowRef" />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Modal Modal={<Settings />} state="isSettings" />
        <Modal Modal={<Report />} state="isReport" />
        <Modal Modal={<Login />} state="isLogin" />
        <Modal Modal={<HelloWindow />} state="isHello" />
        <Modal Modal={<AllowMedia />} state="isAllowMedia" />
      </div>
    </Router>
    // https://t.me/hgrughrgj
  );
});

export default App;
