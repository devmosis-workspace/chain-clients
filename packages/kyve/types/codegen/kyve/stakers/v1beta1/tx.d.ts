import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** MsgCreateStaker defines a SDK message for creating a staker. */
export interface MsgCreateStaker {
    /** creator is the address of the staker. */
    creator: string;
    /** amount is the initial self-stake of the staker. */
    amount: Long;
    /**
     * commission is the percentage that is deducted from rewards before
     * distributing the staker's delegators.
     */
    commission: string;
}
/** MsgCreateStaker defines a SDK message for creating a staker. */
export interface MsgCreateStakerSDKType {
    creator: string;
    amount: Long;
    commission: string;
}
/** MsgStakePoolResponse defines the Msg/StakePool response type. */
export interface MsgCreateStakerResponse {
}
/** MsgStakePoolResponse defines the Msg/StakePool response type. */
export interface MsgCreateStakerResponseSDKType {
}
/** MsgUpdateMetadata defines a SDK message for claiming the uploader role. */
export interface MsgUpdateMetadata {
    /** creator ... */
    creator: string;
    /** moniker ... */
    moniker: string;
    /** website ... */
    website: string;
    /** identity from keybase.io */
    identity: string;
    /** security_contact ... */
    securityContact: string;
    /** details ... */
    details: string;
}
/** MsgUpdateMetadata defines a SDK message for claiming the uploader role. */
export interface MsgUpdateMetadataSDKType {
    creator: string;
    moniker: string;
    website: string;
    identity: string;
    security_contact: string;
    details: string;
}
/** MsgUpdateMetadataResponse defines the Msg/MsgUpdateMetadata response type. */
export interface MsgUpdateMetadataResponse {
}
/** MsgUpdateMetadataResponse defines the Msg/MsgUpdateMetadata response type. */
export interface MsgUpdateMetadataResponseSDKType {
}
/** MsgUpdateCommission ... */
export interface MsgUpdateCommission {
    /** creator ... */
    creator: string;
    /** commission ... */
    commission: string;
}
/** MsgUpdateCommission ... */
export interface MsgUpdateCommissionSDKType {
    creator: string;
    commission: string;
}
/** MsgUpdateCommissionResponse ... */
export interface MsgUpdateCommissionResponse {
}
/** MsgUpdateCommissionResponse ... */
export interface MsgUpdateCommissionResponseSDKType {
}
/** MsgClaimCommissionRewards ... */
export interface MsgClaimCommissionRewards {
    /** creator ... */
    creator: string;
    /** amount ... */
    amount: Long;
}
/** MsgClaimCommissionRewards ... */
export interface MsgClaimCommissionRewardsSDKType {
    creator: string;
    amount: Long;
}
/** MsgClaimCommissionRewardsResponse ... */
export interface MsgClaimCommissionRewardsResponse {
}
/** MsgClaimCommissionRewardsResponse ... */
export interface MsgClaimCommissionRewardsResponseSDKType {
}
/** MsgJoinPool ... */
export interface MsgJoinPool {
    /** creator ... */
    creator: string;
    /** pool_id ... */
    poolId: Long;
    /** valaddress ... */
    valaddress: string;
    /** amount ... */
    amount: Long;
}
/** MsgJoinPool ... */
export interface MsgJoinPoolSDKType {
    creator: string;
    pool_id: Long;
    valaddress: string;
    amount: Long;
}
/** MsgJoinPoolResponse ... */
export interface MsgJoinPoolResponse {
}
/** MsgJoinPoolResponse ... */
export interface MsgJoinPoolResponseSDKType {
}
/** MsgLeavePool ... */
export interface MsgLeavePool {
    /** creator ... */
    creator: string;
    /** pool_id ... */
    poolId: Long;
}
/** MsgLeavePool ... */
export interface MsgLeavePoolSDKType {
    creator: string;
    pool_id: Long;
}
/** MsgReactivateStakerResponse ... */
export interface MsgLeavePoolResponse {
}
/** MsgReactivateStakerResponse ... */
export interface MsgLeavePoolResponseSDKType {
}
/** MsgUpdateParams defines a SDK message for updating the module parameters. */
export interface MsgUpdateParams {
    /** authority is the address of the governance account. */
    authority: string;
    /** payload defines the x/stakers parameters to update. */
    payload: string;
}
/** MsgUpdateParams defines a SDK message for updating the module parameters. */
export interface MsgUpdateParamsSDKType {
    authority: string;
    payload: string;
}
/** MsgUpdateParamsResponse defines the Msg/UpdateParams response type. */
export interface MsgUpdateParamsResponse {
}
/** MsgUpdateParamsResponse defines the Msg/UpdateParams response type. */
export interface MsgUpdateParamsResponseSDKType {
}
export declare const MsgCreateStaker: {
    encode(message: MsgCreateStaker, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgCreateStaker;
    fromPartial(object: Partial<MsgCreateStaker>): MsgCreateStaker;
};
export declare const MsgCreateStakerResponse: {
    encode(_: MsgCreateStakerResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgCreateStakerResponse;
    fromPartial(_: Partial<MsgCreateStakerResponse>): MsgCreateStakerResponse;
};
export declare const MsgUpdateMetadata: {
    encode(message: MsgUpdateMetadata, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgUpdateMetadata;
    fromPartial(object: Partial<MsgUpdateMetadata>): MsgUpdateMetadata;
};
export declare const MsgUpdateMetadataResponse: {
    encode(_: MsgUpdateMetadataResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgUpdateMetadataResponse;
    fromPartial(_: Partial<MsgUpdateMetadataResponse>): MsgUpdateMetadataResponse;
};
export declare const MsgUpdateCommission: {
    encode(message: MsgUpdateCommission, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgUpdateCommission;
    fromPartial(object: Partial<MsgUpdateCommission>): MsgUpdateCommission;
};
export declare const MsgUpdateCommissionResponse: {
    encode(_: MsgUpdateCommissionResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgUpdateCommissionResponse;
    fromPartial(_: Partial<MsgUpdateCommissionResponse>): MsgUpdateCommissionResponse;
};
export declare const MsgClaimCommissionRewards: {
    encode(message: MsgClaimCommissionRewards, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgClaimCommissionRewards;
    fromPartial(object: Partial<MsgClaimCommissionRewards>): MsgClaimCommissionRewards;
};
export declare const MsgClaimCommissionRewardsResponse: {
    encode(_: MsgClaimCommissionRewardsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgClaimCommissionRewardsResponse;
    fromPartial(_: Partial<MsgClaimCommissionRewardsResponse>): MsgClaimCommissionRewardsResponse;
};
export declare const MsgJoinPool: {
    encode(message: MsgJoinPool, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgJoinPool;
    fromPartial(object: Partial<MsgJoinPool>): MsgJoinPool;
};
export declare const MsgJoinPoolResponse: {
    encode(_: MsgJoinPoolResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgJoinPoolResponse;
    fromPartial(_: Partial<MsgJoinPoolResponse>): MsgJoinPoolResponse;
};
export declare const MsgLeavePool: {
    encode(message: MsgLeavePool, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgLeavePool;
    fromPartial(object: Partial<MsgLeavePool>): MsgLeavePool;
};
export declare const MsgLeavePoolResponse: {
    encode(_: MsgLeavePoolResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgLeavePoolResponse;
    fromPartial(_: Partial<MsgLeavePoolResponse>): MsgLeavePoolResponse;
};
export declare const MsgUpdateParams: {
    encode(message: MsgUpdateParams, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgUpdateParams;
    fromPartial(object: Partial<MsgUpdateParams>): MsgUpdateParams;
};
export declare const MsgUpdateParamsResponse: {
    encode(_: MsgUpdateParamsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgUpdateParamsResponse;
    fromPartial(_: Partial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse;
};
