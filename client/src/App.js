import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import { react, useContext, useEffect, useRef, useState } from "react";
import Header from "./components/Header/Header";
import User from "./pages/User/User";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import "./App.css";
import { Context } from "./index";
import { observer } from "mobx-react-lite";
import getUser from "./utils/getUser";

const App = observer(() => {
    const [isModalActive, setIsModalActive] = useState(false);
    const { user } = useContext(Context);
    const width = useRef(null);

    console.log("render");
    // useEffect(() => {
    //     user.setWidth(width.current ? width.current.offsetWidth : 0);
    // }, []);
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
                <Header setIsModelActive={setIsModalActive} />
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
                <Login
                    isModelActive={isModalActive}
                    setIsModelActive={setIsModalActive}
                />
            </div>
        </Router>
    );
});

export default App;
