import { MsgDistributeTokens, MsgUpdateParams } from "./tx";
export declare const AminoConverter: {
    "/juno.drip.v1.MsgDistributeTokens": {
        aminoType: string;
        toAmino: (message: MsgDistributeTokens) => import("./tx").MsgDistributeTokensAmino;
        fromAmino: (object: import("./tx").MsgDistributeTokensAmino) => MsgDistributeTokens;
    };
    "/juno.drip.v1.MsgUpdateParams": {
        aminoType: string;
        toAmino: (message: MsgUpdateParams) => import("./tx").MsgUpdateParamsAmino;
        fromAmino: (object: import("./tx").MsgUpdateParamsAmino) => MsgUpdateParams;
    };
};
