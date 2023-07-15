import { AminoMsg } from "@cosmjs/amino";
import { MsgDelegate, MsgWithdrawRewards, MsgUndelegate, MsgRedelegate, MsgUpdateParams } from "./tx";
export interface MsgDelegateAminoType extends AminoMsg {
    type: "/kyve.delegation.v1beta1.MsgDelegate";
    value: {
        creator: string;
        staker: string;
        amount: string;
    };
}
export interface MsgWithdrawRewardsAminoType extends AminoMsg {
    type: "/kyve.delegation.v1beta1.MsgWithdrawRewards";
    value: {
        creator: string;
        staker: string;
    };
}
export interface MsgUndelegateAminoType extends AminoMsg {
    type: "/kyve.delegation.v1beta1.MsgUndelegate";
    value: {
        creator: string;
        staker: string;
        amount: string;
    };
}
export interface MsgRedelegateAminoType extends AminoMsg {
    type: "/kyve.delegation.v1beta1.MsgRedelegate";
    value: {
        creator: string;
        from_staker: string;
        to_staker: string;
        amount: string;
    };
}
export interface MsgUpdateParamsAminoType extends AminoMsg {
    type: "/kyve.delegation.v1beta1.MsgUpdateParams";
    value: {
        authority: string;
        payload: string;
    };
}
export declare const AminoConverter: {
    "/kyve.delegation.v1beta1.MsgDelegate": {
        aminoType: string;
        toAmino: ({ creator, staker, amount }: MsgDelegate) => MsgDelegateAminoType["value"];
        fromAmino: ({ creator, staker, amount }: MsgDelegateAminoType["value"]) => MsgDelegate;
    };
    "/kyve.delegation.v1beta1.MsgWithdrawRewards": {
        aminoType: string;
        toAmino: ({ creator, staker }: MsgWithdrawRewards) => MsgWithdrawRewardsAminoType["value"];
        fromAmino: ({ creator, staker }: MsgWithdrawRewardsAminoType["value"]) => MsgWithdrawRewards;
    };
    "/kyve.delegation.v1beta1.MsgUndelegate": {
        aminoType: string;
        toAmino: ({ creator, staker, amount }: MsgUndelegate) => MsgUndelegateAminoType["value"];
        fromAmino: ({ creator, staker, amount }: MsgUndelegateAminoType["value"]) => MsgUndelegate;
    };
    "/kyve.delegation.v1beta1.MsgRedelegate": {
        aminoType: string;
        toAmino: ({ creator, fromStaker, toStaker, amount }: MsgRedelegate) => MsgRedelegateAminoType["value"];
        fromAmino: ({ creator, from_staker, to_staker, amount }: MsgRedelegateAminoType["value"]) => MsgRedelegate;
    };
    "/kyve.delegation.v1beta1.MsgUpdateParams": {
        aminoType: string;
        toAmino: ({ authority, payload }: MsgUpdateParams) => MsgUpdateParamsAminoType["value"];
        fromAmino: ({ authority, payload }: MsgUpdateParamsAminoType["value"]) => MsgUpdateParams;
    };
};
