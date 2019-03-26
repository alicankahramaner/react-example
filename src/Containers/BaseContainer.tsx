import * as React from "react";
import { RouteComponentProps } from "react-router";

export interface iBaseContainer extends RouteComponentProps<any> {

}
export class BaseContainer<P = {}, S = {}> extends React.Component<P, S> {

    private appName: string = 'React Example';

    public pageTitle: string = '';

    private updatePageTitle() {
        if (this.pageTitle) {
            document.title = `${this.appName} - ${this.pageTitle}`;
        } else {
            document.title = this.appName;
        }
    }

    componentWillMount() {
        this.updatePageTitle();
    }
}
