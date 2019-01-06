import { iHello } from "./interface";
import { helloState } from "./state";
import { helloTypes } from "./types";

const hello = (state: iHello = helloState, action: any) => {
    switch (action.type) {
        case helloTypes.sayHello:
            return {
                ...state,
                message: 'Hello Redux',
                isMessageShow: true
            };
        default:
            return state;
    }
}

export const helloReducers = {
    hello
};