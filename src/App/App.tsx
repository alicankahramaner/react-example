import * as React from "react";
import { Routes, iRoute, getLinks } from "../Routes/index";
import { Route, Switch, NavLink } from "react-router-dom";

export class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  private getLinks() {
    let links = getLinks();

    return links.map((l, i) => {
      return (
        <NavLink
          to={l.url}
          key={i}
          exact={l.exact}
          activeClassName="active"
        >
          {l.title}
        </NavLink>
      );
    });
  }

  private getRoutes() {
    let routes = Routes.map((router: iRoute, index: number) => {
      if (router.errorPage) {
        return <Route key={index} component={router.component} />;
      }

      return (
        <Route
          key={index}
          exact={router.exact}
          path={router.url}
          component={router.component}
        />
      );
    });

    return routes;
  }

  render() {
    return (
      <div className="main-container">
        <nav className="navigation">{this.getLinks()}</nav>
        <main>
          <Switch>{this.getRoutes()}</Switch>
        </main>
      </div>
    );
  }
}
