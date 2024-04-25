import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { BinaryWriter } from "../../../binary";
/**
 * EventUpdateParams is an event emitted when the module parameters are updated.
 * emitted_by: MsgUpdateParams
 */
export interface EventUpdateParams {
    /** old_params is the module's old parameters. */
    oldParams: Params;
    /** new_params is the module's new parameters. */
    newParams: Params;
    /** payload is the parameter updates that were performed. */
    payload: string;
}
export interface EventUpdateParamsProtoMsg {
    typeUrl: "/kyve.stakers.v1beta1.EventUpdateParams";
    value: Uint8Array;
}
/**
 * EventUpdateParams is an event emitted when the module parameters are updated.
 * emitted_by: MsgUpdateParams
 */
export interface EventUpdateParamsAmino {
    /** old_params is the module's old parameters. */
    old_params?: ParamsAmino;
    /** new_params is the module's new parameters. */
    new_params?: ParamsAmino;
    /** payload is the parameter updates that were performed. */
    payload?: string;
}
export interface EventUpdateParamsAminoMsg {
    type: "/kyve.stakers.v1beta1.EventUpdateParams";
    value: EventUpdateParamsAmino;
}
/**
 * EventUpdateParams is an event emitted when the module parameters are updated.
 * emitted_by: MsgUpdateParams
 */
export interface EventUpdateParamsSDKType {
    old_params: ParamsSDKType;
    new_params: ParamsSDKType;
    payload: string;
}
/**
 * EventCreateStaker is an event emitted when a protocol node stakes in a pool.
 * emitted_by: MsgCreateStaker
 */
export interface EventCreateStaker {
    /** staker is the account address of the protocol node. */
    staker: string;
    /** amount ... */
    amount: bigint;
    /** commission */
    commission: string;
}
export interface EventCreateStakerProtoMsg {
    typeUrl: "/kyve.stakers.v1beta1.EventCreateStaker";
    value: Uint8Array;
}
/**
 * EventCreateStaker is an event emitted when a protocol node stakes in a pool.
 * emitted_by: MsgCreateStaker
 */
export interface EventCreateStakerAmino {
    /** staker is the account address of the protocol node. */
    staker?: string;
    /** amount ... */
    amount?: string;
    /** commission */
    commission?: string;
}
export interface EventCreateStakerAminoMsg {
    type: "/kyve.stakers.v1beta1.EventCreateStaker";
    value: EventCreateStakerAmino;
}
/**
 * EventCreateStaker is an event emitted when a protocol node stakes in a pool.
 * emitted_by: MsgCreateStaker
 */
export interface EventCreateStakerSDKType {
    staker: string;
    amount: bigint;
    commission: string;
}
/**
 * EventUpdateMetadata is an event emitted when a protocol node updates their metadata.
 * emitted_by: MsgUpdateMetadata
 */
export interface EventUpdateMetadata {
    /** staker is the account address of the protocol node. */
    staker: string;
    /** moniker ... */
    moniker: string;
    /** website ... */
    website: string;
    /** identity ... */
    identity: string;
    /** security_contact ... */
    securityContact: string;
    /** details ... */
    details: string;
}
export interface EventUpdateMetadataProtoMsg {
    typeUrl: "/kyve.stakers.v1beta1.EventUpdateMetadata";
    value: Uint8Array;
}
/**
 * EventUpdateMetadata is an event emitted when a protocol node updates their metadata.
 * emitted_by: MsgUpdateMetadata
 */
export interface EventUpdateMetadataAmino {
    /** staker is the account address of the protocol node. */
    staker?: string;
    /** moniker ... */
    moniker?: string;
    /** website ... */
    website?: string;
    /** identity ... */
    identity?: string;
    /** security_contact ... */
    security_contact?: string;
    /** details ... */
    details?: string;
}
export interface EventUpdateMetadataAminoMsg {
    type: "/kyve.stakers.v1beta1.EventUpdateMetadata";
    value: EventUpdateMetadataAmino;
}
/**
 * EventUpdateMetadata is an event emitted when a protocol node updates their metadata.
 * emitted_by: MsgUpdateMetadata
 */
export interface EventUpdateMetadataSDKType {
    staker: string;
    moniker: string;
    website: string;
    identity: string;
    security_contact: string;
    details: string;
}
/**
 * EventUpdateCommission ...
 * emitted_by: EndBlock
 */
export interface EventUpdateCommission {
    /** staker is the account address of the protocol node. */
    staker: string;
    /** commission ... */
    commission: string;
}
export interface EventUpdateCommissionProtoMsg {
    typeUrl: "/kyve.stakers.v1beta1.EventUpdateCommission";
    value: Uint8Array;
}
/**
 * EventUpdateCommission ...
 * emitted_by: EndBlock
 */
export interface EventUpdateCommissionAmino {
    /** staker is the account address of the protocol node. */
    staker?: string;
    /** commission ... */
    commission?: string;
}
export interface EventUpdateCommissionAminoMsg {
    type: "/kyve.stakers.v1beta1.EventUpdateCommission";
    value: EventUpdateCommissionAmino;
}
/**
 * EventUpdateCommission ...
 * emitted_by: EndBlock
 */
export interface EventUpdateCommissionSDKType {
    staker: string;
    commission: string;
}
/**
 * EventClaimCommissionRewards ...
 * emitted_by: MsgClaimCommissionRewards
 */
export interface EventClaimCommissionRewards {
    /** staker is the account address of the protocol node. */
    staker: string;
    /** amount ... */
    amount: bigint;
}
export interface EventClaimCommissionRewardsProtoMsg {
    typeUrl: "/kyve.stakers.v1beta1.EventClaimCommissionRewards";
    value: Uint8Array;
}
/**
 * EventClaimCommissionRewards ...
 * emitted_by: MsgClaimCommissionRewards
 */
export interface EventClaimCommissionRewardsAmino {
    /** staker is the account address of the protocol node. */
    staker?: string;
    /** amount ... */
    amount?: string;
}
export interface EventClaimCommissionRewardsAminoMsg {
    type: "/kyve.stakers.v1beta1.EventClaimCommissionRewards";
    value: EventClaimCommissionRewardsAmino;
}
/**
 * EventClaimCommissionRewards ...
 * emitted_by: MsgClaimCommissionRewards
 */
export interface EventClaimCommissionRewardsSDKType {
    staker: string;
    amount: bigint;
}
/**
 * EventJoinPool ...
 * emitted_by: MsgJoinPool
 */
export interface EventJoinPool {
    /** pool_id is the pool the staker joined */
    poolId: bigint;
    /** staker is the address of the staker */
    staker: string;
    /**
     * valaddress is the address of the protocol node which
     * votes in favor of the staker
     */
    valaddress: string;
    /** amount is the amount of funds transferred to the valaddress */
    amount: bigint;
}
export interface EventJoinPoolProtoMsg {
    typeUrl: "/kyve.stakers.v1beta1.EventJoinPool";
    value: Uint8Array;
}
/**
 * EventJoinPool ...
 * emitted_by: MsgJoinPool
 */
export interface EventJoinPoolAmino {
    /** pool_id is the pool the staker joined */
    pool_id?: string;
    /** staker is the address of the staker */
    staker?: string;
    /**
     * valaddress is the address of the protocol node which
     * votes in favor of the staker
     */
    valaddress?: string;
    /** amount is the amount of funds transferred to the valaddress */
    amount?: string;
}
export interface EventJoinPoolAminoMsg {
    type: "/kyve.stakers.v1beta1.EventJoinPool";
    value: EventJoinPoolAmino;
}
/**
 * EventJoinPool ...
 * emitted_by: MsgJoinPool
 */
export interface EventJoinPoolSDKType {
    pool_id: bigint;
    staker: string;
    valaddress: string;
    amount: bigint;
}
/**
 * EventLeavePool ...
 * emitted_by: EndBlock
 */
export interface EventLeavePool {
    /** pool_id ... */
    poolId: bigint;
    /** staker ... */
    staker: string;
}
export interface EventLeavePoolProtoMsg {
    typeUrl: "/kyve.stakers.v1beta1.EventLeavePool";
    value: Uint8Array;
}
/**
 * EventLeavePool ...
 * emitted_by: EndBlock
 */
export interface EventLeavePoolAmino {
    /** pool_id ... */
    pool_id?: string;
    /** staker ... */
    staker?: string;
}
export interface EventLeavePoolAminoMsg {
    type: "/kyve.stakers.v1beta1.EventLeavePool";
    value: EventLeavePoolAmino;
}
/**
 * EventLeavePool ...
 * emitted_by: EndBlock
 */
export interface EventLeavePoolSDKType {
    pool_id: bigint;
    staker: string;
}
export declare const EventUpdateParams: {
    typeUrl: string;
    encode(message: EventUpdateParams, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventUpdateParams;
    fromPartial(object: Partial<EventUpdateParams>): EventUpdateParams;
    fromAmino(object: EventUpdateParamsAmino): EventUpdateParams;
    toAmino(message: EventUpdateParams): EventUpdateParamsAmino;
    fromAminoMsg(object: EventUpdateParamsAminoMsg): EventUpdateParams;
    fromProtoMsg(message: EventUpdateParamsProtoMsg): EventUpdateParams;
    toProto(message: EventUpdateParams): Uint8Array;
    toProtoMsg(message: EventUpdateParams): EventUpdateParamsProtoMsg;
};
export declare const EventCreateStaker: {
    typeUrl: string;
    encode(message: EventCreateStaker, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventCreateStaker;
    fromPartial(object: Partial<EventCreateStaker>): EventCreateStaker;
    fromAmino(object: EventCreateStakerAmino): EventCreateStaker;
    toAmino(message: EventCreateStaker): EventCreateStakerAmino;
    fromAminoMsg(object: EventCreateStakerAminoMsg): EventCreateStaker;
    fromProtoMsg(message: EventCreateStakerProtoMsg): EventCreateStaker;
    toProto(message: EventCreateStaker): Uint8Array;
    toProtoMsg(message: EventCreateStaker): EventCreateStakerProtoMsg;
};
export declare const EventUpdateMetadata: {
    typeUrl: string;
    encode(message: EventUpdateMetadata, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventUpdateMetadata;
    fromPartial(object: Partial<EventUpdateMetadata>): EventUpdateMetadata;
    fromAmino(object: EventUpdateMetadataAmino): EventUpdateMetadata;
    toAmino(message: EventUpdateMetadata): EventUpdateMetadataAmino;
    fromAminoMsg(object: EventUpdateMetadataAminoMsg): EventUpdateMetadata;
    fromProtoMsg(message: EventUpdateMetadataProtoMsg): EventUpdateMetadata;
    toProto(message: EventUpdateMetadata): Uint8Array;
    toProtoMsg(message: EventUpdateMetadata): EventUpdateMetadataProtoMsg;
};
export declare const EventUpdateCommission: {
    typeUrl: string;
    encode(message: EventUpdateCommission, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventUpdateCommission;
    fromPartial(object: Partial<EventUpdateCommission>): EventUpdateCommission;
    fromAmino(object: EventUpdateCommissionAmino): EventUpdateCommission;
    toAmino(message: EventUpdateCommission): EventUpdateCommissionAmino;
    fromAminoMsg(object: EventUpdateCommissionAminoMsg): EventUpdateCommission;
    fromProtoMsg(message: EventUpdateCommissionProtoMsg): EventUpdateCommission;
    toProto(message: EventUpdateCommission): Uint8Array;
    toProtoMsg(message: EventUpdateCommission): EventUpdateCommissionProtoMsg;
};
export declare const EventClaimCommissionRewards: {
    typeUrl: string;
    encode(message: EventClaimCommissionRewards, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventClaimCommissionRewards;
    fromPartial(object: Partial<EventClaimCommissionRewards>): EventClaimCommissionRewards;
    fromAmino(object: EventClaimCommissionRewardsAmino): EventClaimCommissionRewards;
    toAmino(message: EventClaimCommissionRewards): EventClaimCommissionRewardsAmino;
    fromAminoMsg(object: EventClaimCommissionRewardsAminoMsg): EventClaimCommissionRewards;
    fromProtoMsg(message: EventClaimCommissionRewardsProtoMsg): EventClaimCommissionRewards;
    toProto(message: EventClaimCommissionRewards): Uint8Array;
    toProtoMsg(message: EventClaimCommissionRewards): EventClaimCommissionRewardsProtoMsg;
};
export declare const EventJoinPool: {
    typeUrl: string;
    encode(message: EventJoinPool, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventJoinPool;
    fromPartial(object: Partial<EventJoinPool>): EventJoinPool;
    fromAmino(object: EventJoinPoolAmino): EventJoinPool;
    toAmino(message: EventJoinPool): EventJoinPoolAmino;
    fromAminoMsg(object: EventJoinPoolAminoMsg): EventJoinPool;
    fromProtoMsg(message: EventJoinPoolProtoMsg): EventJoinPool;
    toProto(message: EventJoinPool): Uint8Array;
    toProtoMsg(message: EventJoinPool): EventJoinPoolProtoMsg;
};
export declare const EventLeavePool: {
    typeUrl: string;
    encode(message: EventLeavePool, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventLeavePool;
    fromPartial(object: Partial<EventLeavePool>): EventLeavePool;
    fromAmino(object: EventLeavePoolAmino): EventLeavePool;
    toAmino(message: EventLeavePool): EventLeavePoolAmino;
    fromAminoMsg(object: EventLeavePoolAminoMsg): EventLeavePool;
    fromProtoMsg(message: EventLeavePoolProtoMsg): EventLeavePool;
    toProto(message: EventLeavePool): Uint8Array;
    toProtoMsg(message: EventLeavePool): EventLeavePoolProtoMsg;
};
