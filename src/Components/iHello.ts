import { iHello } from "../State/Hello/interface";

export interface iHelloProps extends iHello {
    sayHello: () => void;
}