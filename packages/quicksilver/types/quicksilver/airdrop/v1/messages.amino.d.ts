import { MsgClaim, MsgIncentivePoolSpend } from "./messages";
export declare const AminoConverter: {
    "/quicksilver.airdrop.v1.MsgClaim": {
        aminoType: string;
        toAmino: (message: MsgClaim) => import("./messages").MsgClaimAmino;
        fromAmino: (object: import("./messages").MsgClaimAmino) => MsgClaim;
    };
    "/quicksilver.airdrop.v1.MsgIncentivePoolSpend": {
        aminoType: string;
        toAmino: (message: MsgIncentivePoolSpend) => import("./messages").MsgIncentivePoolSpendAmino;
        fromAmino: (object: import("./messages").MsgIncentivePoolSpendAmino) => MsgIncentivePoolSpend;
    };
};
