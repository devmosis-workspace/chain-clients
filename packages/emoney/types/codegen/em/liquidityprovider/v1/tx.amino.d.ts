import { MsgMintTokens, MsgBurnTokens } from "./tx";
export declare const AminoConverter: {
    "/em.liquidityprovider.v1.MsgMintTokens": {
        aminoType: string;
        toAmino: (message: MsgMintTokens) => import("./tx").MsgMintTokensAmino;
        fromAmino: (object: import("./tx").MsgMintTokensAmino) => MsgMintTokens;
    };
    "/em.liquidityprovider.v1.MsgBurnTokens": {
        aminoType: string;
        toAmino: (message: MsgBurnTokens) => import("./tx").MsgBurnTokensAmino;
        fromAmino: (object: import("./tx").MsgBurnTokensAmino) => MsgBurnTokens;
    };
};
