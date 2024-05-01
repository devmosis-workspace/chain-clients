import { MsgClaim, MsgCreateReward, MsgUpdateParams } from "./tx";
export declare const AminoConverter: {
    "/gitopia.gitopia.rewards.MsgClaim": {
        aminoType: string;
        toAmino: (message: MsgClaim) => import("./tx").MsgClaimAmino;
        fromAmino: (object: import("./tx").MsgClaimAmino) => MsgClaim;
    };
    "/gitopia.gitopia.rewards.MsgCreateReward": {
        aminoType: string;
        toAmino: (message: MsgCreateReward) => import("./tx").MsgCreateRewardAmino;
        fromAmino: (object: import("./tx").MsgCreateRewardAmino) => MsgCreateReward;
    };
    "/gitopia.gitopia.rewards.MsgUpdateParams": {
        aminoType: string;
        toAmino: (message: MsgUpdateParams) => import("./tx").MsgUpdateParamsAmino;
        fromAmino: (object: import("./tx").MsgUpdateParamsAmino) => MsgUpdateParams;
    };
};
