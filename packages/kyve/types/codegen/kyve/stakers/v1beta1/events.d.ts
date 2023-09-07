import { Params, ParamsSDKType } from "./params";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/**
 * EventUpdateParams is an event emitted when the module parameters are updated.
 * emitted_by: MsgUpdateParams
 */
export interface EventUpdateParams {
    /** old_params is the module's old parameters. */
    oldParams?: Params;
    /** new_params is the module's new parameters. */
    newParams?: Params;
    /** payload is the parameter updates that were performed. */
    payload: string;
}
/**
 * EventUpdateParams is an event emitted when the module parameters are updated.
 * emitted_by: MsgUpdateParams
 */
export interface EventUpdateParamsSDKType {
    old_params?: ParamsSDKType;
    new_params?: ParamsSDKType;
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
    amount: Long;
    /** commission */
    commission: string;
}
/**
 * EventCreateStaker is an event emitted when a protocol node stakes in a pool.
 * emitted_by: MsgCreateStaker
 */
export interface EventCreateStakerSDKType {
    staker: string;
    amount: Long;
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
    amount: Long;
}
/**
 * EventClaimCommissionRewards ...
 * emitted_by: MsgClaimCommissionRewards
 */
export interface EventClaimCommissionRewardsSDKType {
    staker: string;
    amount: Long;
}
/**
 * EventJoinPool ...
 * emitted_by: MsgJoinPool
 */
export interface EventJoinPool {
    /** pool_id is the pool the staker joined */
    poolId: Long;
    /** staker is the address of the staker */
    staker: string;
    /**
     * valaddress is the address of the protocol node which
     * votes in favor of the staker
     */
    valaddress: string;
    /** amount is the amount of funds transferred to the valaddress */
    amount: Long;
}
/**
 * EventJoinPool ...
 * emitted_by: MsgJoinPool
 */
export interface EventJoinPoolSDKType {
    pool_id: Long;
    staker: string;
    valaddress: string;
    amount: Long;
}
/**
 * EventLeavePool ...
 * emitted_by: EndBlock
 */
export interface EventLeavePool {
    /** pool_id ... */
    poolId: Long;
    /** staker ... */
    staker: string;
}
/**
 * EventLeavePool ...
 * emitted_by: EndBlock
 */
export interface EventLeavePoolSDKType {
    pool_id: Long;
    staker: string;
}
export declare const EventUpdateParams: {
    encode(message: EventUpdateParams, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventUpdateParams;
    fromPartial(object: Partial<EventUpdateParams>): EventUpdateParams;
};
export declare const EventCreateStaker: {
    encode(message: EventCreateStaker, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventCreateStaker;
    fromPartial(object: Partial<EventCreateStaker>): EventCreateStaker;
};
export declare const EventUpdateMetadata: {
    encode(message: EventUpdateMetadata, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventUpdateMetadata;
    fromPartial(object: Partial<EventUpdateMetadata>): EventUpdateMetadata;
};
export declare const EventUpdateCommission: {
    encode(message: EventUpdateCommission, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventUpdateCommission;
    fromPartial(object: Partial<EventUpdateCommission>): EventUpdateCommission;
};
export declare const EventClaimCommissionRewards: {
    encode(message: EventClaimCommissionRewards, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventClaimCommissionRewards;
    fromPartial(object: Partial<EventClaimCommissionRewards>): EventClaimCommissionRewards;
};
export declare const EventJoinPool: {
    encode(message: EventJoinPool, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventJoinPool;
    fromPartial(object: Partial<EventJoinPool>): EventJoinPool;
};
export declare const EventLeavePool: {
    encode(message: EventLeavePool, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventLeavePool;
    fromPartial(object: Partial<EventLeavePool>): EventLeavePool;
};
