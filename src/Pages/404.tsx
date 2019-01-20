import * as React from "react";
import { BaseContainer } from "../Containers/BaseContainer";
import { Link } from "react-router-dom";

export class page404 extends BaseContainer {

    constructor(props: any) {
        super(props);

        this.pageTitle = '404';
    }

    render() {
        return (
            <div>
                <h3>404 - Not Found</h3>
                <Link to="/">Go to home page</Link>
            </div>
        );
    }
}
