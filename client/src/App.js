import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import { react, useContext, useEffect, useState } from "react";
import Header from "./components/Header/Header";
import User from "./pages/User/User";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import "./App.css";
import { Context } from "./index";
import { observer } from "mobx-react-lite";
import getUser from "./utils/getUser";

const App = observer(() => {
    const { user } = useContext(Context);
    useEffect(() => {
        getUser().then((e) => {
            user.setIsAuth(e);
        });
    }, []);
    return (
        <Router>
            <div className="App">
                <Header user={user} />
                <Routes>
                    <Route
                        exact
                        path="/login"
                        element={
                            user.isAuth === true ? (
                                <Navigate to="/" />
                            ) : (
                                <Login />
                            )
                        }
                    />
                    <Route
                        path="/"
                        element={user.isAuth === true ? <Home /> : <Home />}
                    />
                </Routes>
            </div>
            <p>h</p>
            <p>h</p>
            <p>h</p>
            <p>h</p>
            <p>h</p>
            <p>h</p>
            <p>h</p>
            <p>h</p>
            <p>h</p>
            <p>h</p>
            <p>h</p>
            <p>h</p>
            <p>h</p>
            <p>h</p>
            <p>h</p>
            <p>h</p>
            <p>h</p>
            <p>h</p>
            <p>h</p>
            <p>h</p>
        </Router>
    );
});

export default App;
