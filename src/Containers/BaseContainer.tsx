import * as React from "react";


export class BaseContainer extends React.Component<any, any> {

    constructor(props: any) {
        super(props);

    }

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
