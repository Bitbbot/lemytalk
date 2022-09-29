import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import UserStore from "./store/UserStore";
import MessageStore from "./store/MessageStore";
import ModalsStore from "./store/ModalsStore";

export const Context = createContext(null);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Context.Provider
            value={{
                user: new UserStore(),
                messages: new MessageStore(),
                modals: new ModalsStore(),
            }}
        >
            <App />
        </Context.Provider>
    </React.StrictMode>
);

reportWebVitals();
