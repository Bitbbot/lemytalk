import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import { react, useEffect, useState } from "react";
import Header from "./components/Header/Header";
import User from "./pages/User/User";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";

function App() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const getUser = () => {
            fetch("http://localhost:5000/auth/login/success", {
                method: "GET",
                credentials: "include",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Credentials": true,
                },
            })
                .then((response) => {
                    if (response.status === 200) return response.json();
                    throw new Error("authentication has been failed!");
                })
                .then((resObject) => {
                    setUser(resObject.user);
                })
                .catch((err) => {
                    console.log(err);
                });
        };
        getUser();
    }, []);
    return (
        <div className="App">
            <Router>
                <div className="App">
                    <Header user={user} />
                    <Routes>
                        {/*<Route exact path="/" element={<Home />} />*/}
                        <Route
                            exact
                            path="/login"
                            element={user ? <Navigate to="/" /> : <Login />}
                        />
                        <Route
                            path="/user"
                            element={user ? <User user={user} /> : <Home />}
                        />
                    </Routes>
                </div>
            </Router>
        </div>
    );
}

export default App;
