import React = require("react");
import { Routes, iRoute } from '../Routes/index';
import { Route, Link, Switch } from "react-router-dom";

export class App extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    private getRoutes() {
        let routes = Routes.map((router: iRoute, index: number) => {
            if (router.errorPage) {
                return (
                    <Route
                        key={index}
                        component={router.component}
                    />
                )
            }

            return (
                <Route
                    key={index}
                    exact={router.exact}
                    path={router.path}
                    component={router.component}
                />
            )
        });

        return routes;
    }

    private getLinks() {

        let links = Routes.map((router: iRoute, index: number) => {
            if (router.errorPage) {
                return false;
            }

            return (
                <Link
                    key={index}
                    to={router.path.toString()}
                >
                    {router.title}
                </Link>
            )
        });

        return links;
    }

    render() {
        return (
            <div className="main-container">
                <nav>
                    {this.getLinks()}
                </nav>
                <main>
                    <Switch>
                        {this.getRoutes()}
                    </Switch>
                </main>
            </div>
        )
    }
};