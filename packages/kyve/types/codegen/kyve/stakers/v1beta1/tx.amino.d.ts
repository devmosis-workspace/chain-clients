import { AminoMsg } from "@cosmjs/amino";
import { MsgCreateStaker, MsgUpdateMetadata, MsgUpdateCommission, MsgClaimCommissionRewards, MsgJoinPool, MsgLeavePool, MsgUpdateParams } from "./tx";
export interface MsgCreateStakerAminoType extends AminoMsg {
    type: "/kyve.stakers.v1beta1.MsgCreateStaker";
    value: {
        creator: string;
        amount: string;
        commission: string;
    };
}
export interface MsgUpdateMetadataAminoType extends AminoMsg {
    type: "/kyve.stakers.v1beta1.MsgUpdateMetadata";
    value: {
        creator: string;
        moniker: string;
        website: string;
        identity: string;
        security_contact: string;
        details: string;
    };
}
export interface MsgUpdateCommissionAminoType extends AminoMsg {
    type: "/kyve.stakers.v1beta1.MsgUpdateCommission";
    value: {
        creator: string;
        commission: string;
    };
}
export interface MsgClaimCommissionRewardsAminoType extends AminoMsg {
    type: "/kyve.stakers.v1beta1.MsgClaimCommissionRewards";
    value: {
        creator: string;
        amount: string;
    };
}
export interface MsgJoinPoolAminoType extends AminoMsg {
    type: "/kyve.stakers.v1beta1.MsgJoinPool";
    value: {
        creator: string;
        pool_id: string;
        valaddress: string;
        amount: string;
    };
}
export interface MsgLeavePoolAminoType extends AminoMsg {
    type: "/kyve.stakers.v1beta1.MsgLeavePool";
    value: {
        creator: string;
        pool_id: string;
    };
}
export interface MsgUpdateParamsAminoType extends AminoMsg {
    type: "/kyve.stakers.v1beta1.MsgUpdateParams";
    value: {
        authority: string;
        payload: string;
    };
}
export declare const AminoConverter: {
    "/kyve.stakers.v1beta1.MsgCreateStaker": {
        aminoType: string;
        toAmino: ({ creator, amount, commission }: MsgCreateStaker) => MsgCreateStakerAminoType["value"];
        fromAmino: ({ creator, amount, commission }: MsgCreateStakerAminoType["value"]) => MsgCreateStaker;
    };
    "/kyve.stakers.v1beta1.MsgUpdateMetadata": {
        aminoType: string;
        toAmino: ({ creator, moniker, website, identity, securityContact, details }: MsgUpdateMetadata) => MsgUpdateMetadataAminoType["value"];
        fromAmino: ({ creator, moniker, website, identity, security_contact, details }: MsgUpdateMetadataAminoType["value"]) => MsgUpdateMetadata;
    };
    "/kyve.stakers.v1beta1.MsgUpdateCommission": {
        aminoType: string;
        toAmino: ({ creator, commission }: MsgUpdateCommission) => MsgUpdateCommissionAminoType["value"];
        fromAmino: ({ creator, commission }: MsgUpdateCommissionAminoType["value"]) => MsgUpdateCommission;
    };
    "/kyve.stakers.v1beta1.MsgClaimCommissionRewards": {
        aminoType: string;
        toAmino: ({ creator, amount }: MsgClaimCommissionRewards) => MsgClaimCommissionRewardsAminoType["value"];
        fromAmino: ({ creator, amount }: MsgClaimCommissionRewardsAminoType["value"]) => MsgClaimCommissionRewards;
    };
    "/kyve.stakers.v1beta1.MsgJoinPool": {
        aminoType: string;
        toAmino: ({ creator, poolId, valaddress, amount }: MsgJoinPool) => MsgJoinPoolAminoType["value"];
        fromAmino: ({ creator, pool_id, valaddress, amount }: MsgJoinPoolAminoType["value"]) => MsgJoinPool;
    };
    "/kyve.stakers.v1beta1.MsgLeavePool": {
        aminoType: string;
        toAmino: ({ creator, poolId }: MsgLeavePool) => MsgLeavePoolAminoType["value"];
        fromAmino: ({ creator, pool_id }: MsgLeavePoolAminoType["value"]) => MsgLeavePool;
    };
    "/kyve.stakers.v1beta1.MsgUpdateParams": {
        aminoType: string;
        toAmino: ({ authority, payload }: MsgUpdateParams) => MsgUpdateParamsAminoType["value"];
        fromAmino: ({ authority, payload }: MsgUpdateParamsAminoType["value"]) => MsgUpdateParams;
    };
};
