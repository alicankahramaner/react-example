import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { store } from "./Store";

// Components
import { Hello } from './Components/Hello';

ReactDOM.render(
    <Provider store={store}>
        <Hello />
    </Provider>,
    document.getElementById("app")
);

// Webpack Hot Module Replacement Initiliaze
declare const module: any;

if (module.hot) {
    module.hot.accept();
}