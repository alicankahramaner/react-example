import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { store } from "./Store";
import { BrowserRouter } from 'react-router-dom';
import { App } from "./App/App";

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>,
    document.getElementById("app")
);

// Webpack Hot Module Replacement Initiliaze
declare const module: any;

if (module.hot) {
    module.hot.accept();
}