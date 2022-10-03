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
import getUser from "./utils/getUser";
import LanguageButtons from "./components/Buttons/LanguageButtons/LanguageButtons";
import Report from "./components/Report/Report";

const App = observer(() => {
    const { user } = useContext(Context);
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
    useEffect(() => {
        getUser().then((e) => {
            user.setIsAuth(e);
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
            </div>
        </Router>
    );
});

export default App;
