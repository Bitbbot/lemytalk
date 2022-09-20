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
    const [isModalActive, setIsModalActive] = useState(false);
    const { user } = useContext(Context);
    useEffect(() => {
        getUser().then((e) => {
            user.setIsAuth(e);
            console.log(e);
        });
    }, []);
    return (
        <Router>
            <div className="App">
                <Header setIsModelActive={setIsModalActive} />
                <Routes>
                    {/*<Route*/}
                    {/*    exact*/}
                    {/*    path="/login"*/}
                    {/*    element={*/}
                    {/*        user.isAuth === true ? (*/}
                    {/*            <Navigate to="/" />*/}
                    {/*        ) : (*/}
                    {/*            <Login />*/}
                    {/*        )*/}
                    {/*    }*/}
                    {/*/>*/}
                    <Route
                        path="/"
                        // element={<Home />}
                        element={user.isAuth === true ? <Home /> : <Home />}
                    />
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
