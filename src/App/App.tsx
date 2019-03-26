import * as React from 'react';
import { Routes, iRoute, getLinks } from '../Routes/index';
import { Route, Link, Switch } from "react-router-dom";

export class App extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    private getLinks() {
        return getLinks().map((l, i) => {
            return (
                <Link
                    to={l.url}
                    key={i}
                >
                    {l.title}
                </Link>
            )
        });
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
                    path={router.url}
                    component={router.component}
                />
            )
        });

        return routes;
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