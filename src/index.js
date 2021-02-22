import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter } from "react-router-dom";
import Routers from "./routes";

import "./index.css";

import { Provider } from "react-redux";
import store from "./store/store";

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <Routers />
        </Provider>
    </BrowserRouter>,
    document.getElementById("root")
);
