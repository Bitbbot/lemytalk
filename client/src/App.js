import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import { react, useContext, useEffect, useRef, useState } from "react";
import Header from "./components/Header/Header";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import "./App.scss";
import { Context } from "./index";
import { observer } from "mobx-react-lite";
import { checkUser, getUser, createUser } from "./api/userAPI";
import LanguageButtons from "./components/Buttons/LanguageButtons/LanguageButtons";
import Report from "./components/Report/Report";
import HelloWindow from "./components/HelloWindow/HelloWindow";
import { connectionWithWebSocket } from "./utils/wsConnection/wsConnection";

const App = observer(() => {
    const { user, modals } = useContext(Context);
    const width = useRef(null);
    useEffect(() => {
        connectionWithWebSocket();
    }, []);
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
    useEffect(() => {
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
                });
        });
    }, []);
    return (
        <Router>
            <div className="App" ref={width}>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
                <Login />
                <LanguageButtons />
                <Report />
                <HelloWindow />
            </div>
        </Router>
    );
});

export default App;
