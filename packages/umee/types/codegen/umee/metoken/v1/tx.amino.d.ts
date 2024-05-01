import { MsgSwap, MsgRedeem, MsgGovSetParams, MsgGovUpdateRegistry } from "./tx";
export declare const AminoConverter: {
    "/umee.metoken.v1.MsgSwap": {
        aminoType: string;
        toAmino: (message: MsgSwap) => import("./tx").MsgSwapAmino;
        fromAmino: (object: import("./tx").MsgSwapAmino) => MsgSwap;
    };
    "/umee.metoken.v1.MsgRedeem": {
        aminoType: string;
        toAmino: (message: MsgRedeem) => import("./tx").MsgRedeemAmino;
        fromAmino: (object: import("./tx").MsgRedeemAmino) => MsgRedeem;
    };
    "/umee.metoken.v1.MsgGovSetParams": {
        aminoType: string;
        toAmino: (message: MsgGovSetParams) => import("./tx").MsgGovSetParamsAmino;
        fromAmino: (object: import("./tx").MsgGovSetParamsAmino) => MsgGovSetParams;
    };
    "/umee.metoken.v1.MsgGovUpdateRegistry": {
        aminoType: string;
        toAmino: (message: MsgGovUpdateRegistry) => import("./tx").MsgGovUpdateRegistryAmino;
        fromAmino: (object: import("./tx").MsgGovUpdateRegistryAmino) => MsgGovUpdateRegistry;
    };
};
