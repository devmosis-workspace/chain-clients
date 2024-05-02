import { MsgSwap, MsgSwapSend } from "./tx";
export declare const AminoConverter: {
    "/terra.market.v1beta1.MsgSwap": {
        aminoType: string;
        toAmino: (message: MsgSwap) => import("./tx").MsgSwapAmino;
        fromAmino: (object: import("./tx").MsgSwapAmino) => MsgSwap;
    };
    "/terra.market.v1beta1.MsgSwapSend": {
        aminoType: string;
        toAmino: (message: MsgSwapSend) => import("./tx").MsgSwapSendAmino;
        fromAmino: (object: import("./tx").MsgSwapSendAmino) => MsgSwapSend;
    };
};
