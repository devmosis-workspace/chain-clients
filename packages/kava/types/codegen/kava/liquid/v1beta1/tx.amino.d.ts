import { MsgMintDerivative, MsgBurnDerivative } from "./tx";
export declare const AminoConverter: {
    "/kava.liquid.v1beta1.MsgMintDerivative": {
        aminoType: string;
        toAmino: (message: MsgMintDerivative) => import("./tx").MsgMintDerivativeAmino;
        fromAmino: (object: import("./tx").MsgMintDerivativeAmino) => MsgMintDerivative;
    };
    "/kava.liquid.v1beta1.MsgBurnDerivative": {
        aminoType: string;
        toAmino: (message: MsgBurnDerivative) => import("./tx").MsgBurnDerivativeAmino;
        fromAmino: (object: import("./tx").MsgBurnDerivativeAmino) => MsgBurnDerivative;
    };
};
