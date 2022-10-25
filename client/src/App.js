import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import { react, useContext, useEffect, useRef } from "react";
import Header from "./components/Header/Header";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import "./App.scss";
import { Context } from "./index";
import { observer } from "mobx-react-lite";
import { checkUser, getUser, createUser } from "./utils/api/userAPI";
import LanguageButtons from "./components/Buttons/LanguageButtons/LanguageButtons";
import Report from "./components/Report/Report";
import HelloWindow from "./components/HelloWindow/HelloWindow";
import { connectionWithWebSocket } from "./utils/wsConnection/wsConnection";
import AllowMedia from "./components/AllowMedia/AllowMedia";
import axios from "axios";
import { setTurnServers } from "./utils/WebRTC/TURN";
import { SERVER_URL } from "./env";

const App = observer(() => {
    const { user, modals } = useContext(Context);
    const width = useRef(null);
    useEffect(() => {
        user.setWidth(width.current ? width.current.offsetWidth : 0);
        window.addEventListener("resize", () => {
            user.setWidth(width.current ? width.current.offsetWidth : 0);
        });
        return () => {
            window.removeEventListener("resize", () => {
                user.setWidth(width.current ? width.current.offsetWidth : 0);
            });
        };
    }, []);
    const windowRef = useRef(null);
    useEffect(() => {
        window.visualViewport.addEventListener("resize", () => {
            console.log("resize");
            windowRef.current?.scrollIntoView({
                // behavior: "smooth",
                block: "nearest",
                inline: "start",
            });
        });
        return () => {
            window.visualViewport.removeEventListener("resize", () => {});
        };
    }, []);
    useEffect(() => {
        axios.get(`${SERVER_URL}/api/user/twillio`).then((response) => {
            console.log(response);
            setTurnServers(response.data.token.iceServers);
            checkUser().then((e) => {
                user.setIsAuth(e);
                if (user.isAuth === true)
                    getUser().then((response) => {
                        try {
                            user.setNativeLanguage(response.nativeLanguage);
                            user.setStudiedLanguage(response.studiedLanguage);
                            user.setLevel(response.languageLevel);
                            user.setIsNotifications(response.isNotifications);
                        } catch (e) {
                            modals.setIsHello(true);
                        }
                        if (response === null) {
                            createUser();
                        }
                        if (
                            response?.nativeLanguage === "" &&
                            response?.studiedLanguage === "" &&
                            response?.languageLevel === ""
                        )
                            modals.setIsHello(true);
                        getUser().then((response) => {
                            user.setId(response.authId);
                        });
                        connectionWithWebSocket();
                    });
            });
        });
    }, []);
    return (
        <Router>
            <div className="App" ref={width}>
                <div ref={windowRef} className="windowRef"></div>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
                <Login />
                <LanguageButtons />
                <Report />
                <HelloWindow />
                <AllowMedia />
            </div>
        </Router>
    );
});

export default App;
