import { iHello } from "../Store/Hello/interface";

export interface iHelloProps extends iHello {
    sayHello: () => void;
}