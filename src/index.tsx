import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { store } from "./Store";
import { BrowserRouter as Router } from 'react-router-dom';

// Components
import { App } from "./App/App";

ReactDOM.render(
    <Provider store={store}>
        <Router>
           <App/>
        </Router>
    </Provider>,
    document.getElementById("app")
);

// Webpack Hot Module Replacement Initiliaze
declare const module: any;

if (module.hot) {
    module.hot.accept();
}