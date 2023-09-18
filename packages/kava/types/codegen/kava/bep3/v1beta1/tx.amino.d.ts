import { MsgCreateAtomicSwap, MsgClaimAtomicSwap, MsgRefundAtomicSwap } from "./tx";
export declare const AminoConverter: {
    "/kava.bep3.v1beta1.MsgCreateAtomicSwap": {
        aminoType: string;
        toAmino: (message: MsgCreateAtomicSwap) => import("./tx").MsgCreateAtomicSwapAmino;
        fromAmino: (object: import("./tx").MsgCreateAtomicSwapAmino) => MsgCreateAtomicSwap;
    };
    "/kava.bep3.v1beta1.MsgClaimAtomicSwap": {
        aminoType: string;
        toAmino: (message: MsgClaimAtomicSwap) => import("./tx").MsgClaimAtomicSwapAmino;
        fromAmino: (object: import("./tx").MsgClaimAtomicSwapAmino) => MsgClaimAtomicSwap;
    };
    "/kava.bep3.v1beta1.MsgRefundAtomicSwap": {
        aminoType: string;
        toAmino: (message: MsgRefundAtomicSwap) => import("./tx").MsgRefundAtomicSwapAmino;
        fromAmino: (object: import("./tx").MsgRefundAtomicSwapAmino) => MsgRefundAtomicSwap;
    };
};
