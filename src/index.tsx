import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello } from './Components/Hello';

ReactDOM.render(
    <Hello compiler="TypeScript" framework="React" />,
    document.getElementById("app")
);

// Webpack Hot Module Replacement Initiliaze
declare const module: any;

if (module.hot) {
    module.hot.accept();
}