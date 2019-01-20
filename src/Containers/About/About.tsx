import * as React from "react";
import { BaseContainer } from "../BaseContainer";
import { Hello } from "../../Components/Hello";

export class About extends BaseContainer {

    constructor(props: any) {
        super(props);

        this.pageTitle = 'About';
    }

    render() {
        return (
            <div>
                <h1>About Page</h1>
                <hr />
                <h4>Redux example component</h4>
                <Hello></Hello>
            </div>
        );
    }
}
