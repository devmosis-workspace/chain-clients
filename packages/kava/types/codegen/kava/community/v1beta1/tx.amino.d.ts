import { MsgFundCommunityPool } from "./tx";
export declare const AminoConverter: {
    "/kava.community.v1beta1.MsgFundCommunityPool": {
        aminoType: string;
        toAmino: (message: MsgFundCommunityPool) => import("./tx").MsgFundCommunityPoolAmino;
        fromAmino: (object: import("./tx").MsgFundCommunityPoolAmino) => MsgFundCommunityPool;
    };
};
