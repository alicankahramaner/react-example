import * as React from "react";
import { BaseContainer, iBaseContainer } from "../BaseContainer";
import { Link } from "react-router-dom";

interface iHome extends iBaseContainer { }
export class Home extends BaseContainer<iHome> {

    constructor(props: any) {
        super(props);
        this.pageTitle = "Home";
    }

    render() {
        return (
            <div>
                <h1>Home Page</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Harum culpa dolore, molestiae perspiciatis, reprehenderit nobis nisi ullam nemo, perferendis veritatis quaerat.
                    Voluptate excepturi ipsa velit sit quidem, unde nesciunt vel.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Harum culpa dolore, molestiae perspiciatis, reprehenderit nobis nisi ullam nemo, perferendis veritatis quaerat.
                    Voluptate excepturi ipsa velit sit quidem, unde nesciunt vel.
                </p>
            </div>
        );
    }
}

