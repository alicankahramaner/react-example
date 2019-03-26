import * as React from "react";
import { BaseContainer, iBaseContainer } from "../BaseContainer";
import { Hello } from "../../Components/Hello";

export interface iAbout extends iBaseContainer { }
export class About extends BaseContainer<iAbout> {

    constructor(props: any) {
        super(props);

        this.pageTitle = 'About';

        console.log(this.props.match);
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
