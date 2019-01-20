import { RouteProps } from "react-router";

// Containers
import { Home } from "../Containers/Home/Home";
import { About } from "../Containers/About/About";
import { page404 } from "../Pages/404";

export interface iRoute extends RouteProps {
    name: string;
    title: string;
    errorPage?: boolean;
}

export const Routes: iRoute[] = [
    {
        name: 'home',
        title: 'Home',
        exact: true,
        path: '/',
        component: Home
    },

    {
        name: 'about',
        title: 'About',
        path: '/about',
        exact: false,
        component: About
    },

    {
        name: '404',
        title: '404',
        errorPage: true,
        component: page404
    }
];