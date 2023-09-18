import { MsgDelegate, MsgWithdrawRewards, MsgUndelegate, MsgRedelegate, MsgUpdateParams } from "./tx";
export declare const AminoConverter: {
    "/kyve.delegation.v1beta1.MsgDelegate": {
        aminoType: string;
        toAmino: (message: MsgDelegate) => import("./tx").MsgDelegateAmino;
        fromAmino: (object: import("./tx").MsgDelegateAmino) => MsgDelegate;
    };
    "/kyve.delegation.v1beta1.MsgWithdrawRewards": {
        aminoType: string;
        toAmino: (message: MsgWithdrawRewards) => import("./tx").MsgWithdrawRewardsAmino;
        fromAmino: (object: import("./tx").MsgWithdrawRewardsAmino) => MsgWithdrawRewards;
    };
    "/kyve.delegation.v1beta1.MsgUndelegate": {
        aminoType: string;
        toAmino: (message: MsgUndelegate) => import("./tx").MsgUndelegateAmino;
        fromAmino: (object: import("./tx").MsgUndelegateAmino) => MsgUndelegate;
    };
    "/kyve.delegation.v1beta1.MsgRedelegate": {
        aminoType: string;
        toAmino: (message: MsgRedelegate) => import("./tx").MsgRedelegateAmino;
        fromAmino: (object: import("./tx").MsgRedelegateAmino) => MsgRedelegate;
    };
    "/kyve.delegation.v1beta1.MsgUpdateParams": {
        aminoType: string;
        toAmino: (message: MsgUpdateParams) => import("./tx").MsgUpdateParamsAmino;
        fromAmino: (object: import("./tx").MsgUpdateParamsAmino) => MsgUpdateParams;
    };
};
