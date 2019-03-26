import { RouteProps, Route, RouteComponentProps } from "react-router";

// Containers
import { Home } from "../Containers/Home/Home";
import { About } from "../Containers/About/About";
import { page404 } from "../Pages/404";
import { Link, LinkProps } from "react-router-dom";
import { LinkHTMLAttributes } from "react";
export interface iRoute extends RouteProps {
  name: string;
  title: string;
  errorPage?: boolean;
  url?: string;
}

export const Routes: iRoute[] = [
  {
    name: "home",
    title: "Home",
    exact: true,
    url: "/",
    component: Home
  },

  {
    name: "about",
    title: "About",
    url: "/about",
    exact: false,
    component: About
  },

  {
    name: "404",
    title: "404",
    errorPage: true,
    component: page404
  }
];

export const getLinks = () => {

  return Routes.filter((r)=>{
      if(r.errorPage){
          return false;
      }

    r.url.includes(':id') ? r.url = r.url.replace(':id','new'): null;

    return r;
  });

};
