import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import { react, useContext, useEffect, useRef } from "react";
import Header from "./components/Header/Header";
import Login from "./components/Modals/Login/Login";
import Home from "./pages/Home/Home";
import "./App.scss";
import { Context } from "./index";
import { observer } from "mobx-react-lite";
import { checkUser, getUser, createUser } from "./utils/api/userAPI";
import Settings from "./components/Modals/Settings/Settings";
import Report from "./components/Modals/Report/Report";
import HelloWindow from "./components/Modals/HelloWindow/HelloWindow";
import { connectionWithWebSocket } from "./utils/wsConnection/wsConnection";
import AllowMedia from "./components/Modals/AllowMedia/AllowMedia";
import axios from "axios";
import { setTurnServers } from "./utils/WebRTC/TURN";
import { SERVER_URL } from "./env";

const App = observer(() => {
    const { user, modals } = useContext(Context);
    const width = useRef(null);
    const windowRef = useRef(null);
    useEffect(() => {
        user.setWidth(width.current ? width.current.offsetWidth : 0);
        window.visualViewport.addEventListener("resize", () => {
            user.setWidth(width.current ? width.current.offsetWidth : 0);
            windowRef.current?.scrollIntoView({
                // behavior: "smooth",
                block: "nearest",
                inline: "start",
            });
            user.setViewPortHeight(window.visualViewport.height);
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
                <Settings />
                <Report />
                <HelloWindow />
                <AllowMedia />
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <a href="https://t.me/hgrughrg" target="_blank">
                        Developer
                    </a>
                </div>
            </div>
        </Router>
    );
});

export default App;
