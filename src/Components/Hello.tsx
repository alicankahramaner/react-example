import * as React from "react";
import { connect } from "react-redux";
import { iHelloProps } from "./iHello";
import { sayHello } from "../Store/Hello/actions";

class HelloComponent extends React.Component<iHelloProps, {}> {
    constructor(props: iHelloProps) {
        super(props);
    }

    messageShowButton(): any {
        if (this.props.isMessageShow) {
            return null;
        }

        return (
            <button onClick={this.props.sayHello}>Click and show message</button>
        );
    }

    render() {
        return (
            <div>
                {this.messageShowButton()}
                <h1>{this.props.message}</h1>
            </div>
        );
    }
}

const mapStateToProps = (state: any) => ({
    message: state.hello.message,
    isMessageShow: state.hello.isMessageShow
});

const mapDispatchToProps = (dispatch: any) => ({
    sayHello: () => { dispatch(sayHello()) }
});

export const Hello = connect(mapStateToProps, mapDispatchToProps)(HelloComponent)

