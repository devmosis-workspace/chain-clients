import { BinaryWriter } from "../../../binary";
/**
 * Staker contains all metadata for a staker
 * Every address can only create one staker (itself)
 */
export interface Staker {
    /** address ... */
    address: string;
    /** commission ... */
    commission: string;
    /** moniker ... */
    moniker: string;
    /** website ... */
    website: string;
    /** identity is the 64 bit keybase.io identity string */
    identity: string;
    /** security_contact ... */
    securityContact: string;
    /** details are some additional notes the staker finds important */
    details: string;
    /** commission_rewards are the rewards in $KYVE earned through commission */
    commissionRewards: bigint;
}
export interface StakerProtoMsg {
    typeUrl: "/kyve.stakers.v1beta1.Staker";
    value: Uint8Array;
}
/**
 * Staker contains all metadata for a staker
 * Every address can only create one staker (itself)
 */
export interface StakerAmino {
    /** address ... */
    address?: string;
    /** commission ... */
    commission?: string;
    /** moniker ... */
    moniker?: string;
    /** website ... */
    website?: string;
    /** identity is the 64 bit keybase.io identity string */
    identity?: string;
    /** security_contact ... */
    security_contact?: string;
    /** details are some additional notes the staker finds important */
    details?: string;
    /** commission_rewards are the rewards in $KYVE earned through commission */
    commission_rewards?: string;
}
export interface StakerAminoMsg {
    type: "/kyve.stakers.v1beta1.Staker";
    value: StakerAmino;
}
/**
 * Staker contains all metadata for a staker
 * Every address can only create one staker (itself)
 */
export interface StakerSDKType {
    address: string;
    commission: string;
    moniker: string;
    website: string;
    identity: string;
    security_contact: string;
    details: string;
    commission_rewards: bigint;
}
/**
 * Valaccount gets authorized by a staker to
 * vote in a given pool by favor of the staker.
 */
export interface Valaccount {
    /**
     * pool_id defines the pool in which the address
     * is allowed to vote in.
     */
    poolId: bigint;
    /** staker is the address the valaccount is voting for. */
    staker: string;
    /**
     * valaddress is the account stored on the protocol
     * node which votes for the staker in the given pool
     */
    valaddress: string;
    /**
     * When a node is inactive (does not vote at all)
     * A point is added, after a certain amount of points
     * is reached the node gets kicked out.
     */
    points: bigint;
    /** isLeaving indicates if a staker is leaving the given pool. */
    isLeaving: boolean;
}
export interface ValaccountProtoMsg {
    typeUrl: "/kyve.stakers.v1beta1.Valaccount";
    value: Uint8Array;
}
/**
 * Valaccount gets authorized by a staker to
 * vote in a given pool by favor of the staker.
 */
export interface ValaccountAmino {
    /**
     * pool_id defines the pool in which the address
     * is allowed to vote in.
     */
    pool_id?: string;
    /** staker is the address the valaccount is voting for. */
    staker?: string;
    /**
     * valaddress is the account stored on the protocol
     * node which votes for the staker in the given pool
     */
    valaddress?: string;
    /**
     * When a node is inactive (does not vote at all)
     * A point is added, after a certain amount of points
     * is reached the node gets kicked out.
     */
    points?: string;
    /** isLeaving indicates if a staker is leaving the given pool. */
    is_leaving?: boolean;
}
export interface ValaccountAminoMsg {
    type: "/kyve.stakers.v1beta1.Valaccount";
    value: ValaccountAmino;
}
/**
 * Valaccount gets authorized by a staker to
 * vote in a given pool by favor of the staker.
 */
export interface ValaccountSDKType {
    pool_id: bigint;
    staker: string;
    valaddress: string;
    points: bigint;
    is_leaving: boolean;
}
/**
 * CommissionChangeEntry stores the information for an
 * upcoming commission change. A commission change is never
 * instant, so delegators have time to redelegate in case
 * they don't agree with the new commission.
 */
export interface CommissionChangeEntry {
    /**
     * index is needed for the queue-algorithm which
     * processes the commission changes
     */
    index: bigint;
    /** staker is the address of the affected staker */
    staker: string;
    /**
     * commission is the new commission which will
     * be applied after the waiting time is over.
     */
    commission: string;
    /**
     * creation_date is the UNIX-timestamp in seconds
     * when the entry was created.
     */
    creationDate: bigint;
}
export interface CommissionChangeEntryProtoMsg {
    typeUrl: "/kyve.stakers.v1beta1.CommissionChangeEntry";
    value: Uint8Array;
}
/**
 * CommissionChangeEntry stores the information for an
 * upcoming commission change. A commission change is never
 * instant, so delegators have time to redelegate in case
 * they don't agree with the new commission.
 */
export interface CommissionChangeEntryAmino {
    /**
     * index is needed for the queue-algorithm which
     * processes the commission changes
     */
    index?: string;
    /** staker is the address of the affected staker */
    staker?: string;
    /**
     * commission is the new commission which will
     * be applied after the waiting time is over.
     */
    commission?: string;
    /**
     * creation_date is the UNIX-timestamp in seconds
     * when the entry was created.
     */
    creation_date?: string;
}
export interface CommissionChangeEntryAminoMsg {
    type: "/kyve.stakers.v1beta1.CommissionChangeEntry";
    value: CommissionChangeEntryAmino;
}
/**
 * CommissionChangeEntry stores the information for an
 * upcoming commission change. A commission change is never
 * instant, so delegators have time to redelegate in case
 * they don't agree with the new commission.
 */
export interface CommissionChangeEntrySDKType {
    index: bigint;
    staker: string;
    commission: string;
    creation_date: bigint;
}
/**
 * LeavePoolEntry stores the information for an upcoming
 * pool leave. A staker can't leave a pool instantly.
 * Instead a the `LeaveTime` needs to be awaited.
 * If a staker start to leave a pool, it will be shown
 * in the UI to the delegators.
 */
export interface LeavePoolEntry {
    /**
     * index is needed for the queue-algorithm which
     * processes the commission changes
     */
    index: bigint;
    /** staker is the address of the affected staker */
    staker: string;
    /** pool_id indicates the pool the staker wants to leave */
    poolId: bigint;
    /**
     * creation_date is the UNIX-timestamp in seconds
     * when the entry was created.
     */
    creationDate: bigint;
}
export interface LeavePoolEntryProtoMsg {
    typeUrl: "/kyve.stakers.v1beta1.LeavePoolEntry";
    value: Uint8Array;
}
/**
 * LeavePoolEntry stores the information for an upcoming
 * pool leave. A staker can't leave a pool instantly.
 * Instead a the `LeaveTime` needs to be awaited.
 * If a staker start to leave a pool, it will be shown
 * in the UI to the delegators.
 */
export interface LeavePoolEntryAmino {
    /**
     * index is needed for the queue-algorithm which
     * processes the commission changes
     */
    index?: string;
    /** staker is the address of the affected staker */
    staker?: string;
    /** pool_id indicates the pool the staker wants to leave */
    pool_id?: string;
    /**
     * creation_date is the UNIX-timestamp in seconds
     * when the entry was created.
     */
    creation_date?: string;
}
export interface LeavePoolEntryAminoMsg {
    type: "/kyve.stakers.v1beta1.LeavePoolEntry";
    value: LeavePoolEntryAmino;
}
/**
 * LeavePoolEntry stores the information for an upcoming
 * pool leave. A staker can't leave a pool instantly.
 * Instead a the `LeaveTime` needs to be awaited.
 * If a staker start to leave a pool, it will be shown
 * in the UI to the delegators.
 */
export interface LeavePoolEntrySDKType {
    index: bigint;
    staker: string;
    pool_id: bigint;
    creation_date: bigint;
}
/** UnbondingState stores the state for the unbonding of stakes and delegations. */
export interface QueueState {
    /**
     * low_index is the tail of the queue. It is the
     * oldest entry in the queue. If this entry isn't
     * due, non of the other entries is.
     */
    lowIndex: bigint;
    /**
     * high_index is the head of the queue. New entries
     * are added to the top.
     */
    highIndex: bigint;
}
export interface QueueStateProtoMsg {
    typeUrl: "/kyve.stakers.v1beta1.QueueState";
    value: Uint8Array;
}
/** UnbondingState stores the state for the unbonding of stakes and delegations. */
export interface QueueStateAmino {
    /**
     * low_index is the tail of the queue. It is the
     * oldest entry in the queue. If this entry isn't
     * due, non of the other entries is.
     */
    low_index?: string;
    /**
     * high_index is the head of the queue. New entries
     * are added to the top.
     */
    high_index?: string;
}
export interface QueueStateAminoMsg {
    type: "/kyve.stakers.v1beta1.QueueState";
    value: QueueStateAmino;
}
/** UnbondingState stores the state for the unbonding of stakes and delegations. */
export interface QueueStateSDKType {
    low_index: bigint;
    high_index: bigint;
}
export declare const Staker: {
    typeUrl: string;
    encode(message: Staker, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Staker;
    fromPartial(object: Partial<Staker>): Staker;
    fromAmino(object: StakerAmino): Staker;
    toAmino(message: Staker): StakerAmino;
    fromAminoMsg(object: StakerAminoMsg): Staker;
    fromProtoMsg(message: StakerProtoMsg): Staker;
    toProto(message: Staker): Uint8Array;
    toProtoMsg(message: Staker): StakerProtoMsg;
};
export declare const Valaccount: {
    typeUrl: string;
    encode(message: Valaccount, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Valaccount;
    fromPartial(object: Partial<Valaccount>): Valaccount;
    fromAmino(object: ValaccountAmino): Valaccount;
    toAmino(message: Valaccount): ValaccountAmino;
    fromAminoMsg(object: ValaccountAminoMsg): Valaccount;
    fromProtoMsg(message: ValaccountProtoMsg): Valaccount;
    toProto(message: Valaccount): Uint8Array;
    toProtoMsg(message: Valaccount): ValaccountProtoMsg;
};
export declare const CommissionChangeEntry: {
    typeUrl: string;
    encode(message: CommissionChangeEntry, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): CommissionChangeEntry;
    fromPartial(object: Partial<CommissionChangeEntry>): CommissionChangeEntry;
    fromAmino(object: CommissionChangeEntryAmino): CommissionChangeEntry;
    toAmino(message: CommissionChangeEntry): CommissionChangeEntryAmino;
    fromAminoMsg(object: CommissionChangeEntryAminoMsg): CommissionChangeEntry;
    fromProtoMsg(message: CommissionChangeEntryProtoMsg): CommissionChangeEntry;
    toProto(message: CommissionChangeEntry): Uint8Array;
    toProtoMsg(message: CommissionChangeEntry): CommissionChangeEntryProtoMsg;
};
export declare const LeavePoolEntry: {
    typeUrl: string;
    encode(message: LeavePoolEntry, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): LeavePoolEntry;
    fromPartial(object: Partial<LeavePoolEntry>): LeavePoolEntry;
    fromAmino(object: LeavePoolEntryAmino): LeavePoolEntry;
    toAmino(message: LeavePoolEntry): LeavePoolEntryAmino;
    fromAminoMsg(object: LeavePoolEntryAminoMsg): LeavePoolEntry;
    fromProtoMsg(message: LeavePoolEntryProtoMsg): LeavePoolEntry;
    toProto(message: LeavePoolEntry): Uint8Array;
    toProtoMsg(message: LeavePoolEntry): LeavePoolEntryProtoMsg;
};
export declare const QueueState: {
    typeUrl: string;
    encode(message: QueueState, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueueState;
    fromPartial(object: Partial<QueueState>): QueueState;
    fromAmino(object: QueueStateAmino): QueueState;
    toAmino(message: QueueState): QueueStateAmino;
    fromAminoMsg(object: QueueStateAminoMsg): QueueState;
    fromProtoMsg(message: QueueStateProtoMsg): QueueState;
    toProto(message: QueueState): Uint8Array;
    toProtoMsg(message: QueueState): QueueStateProtoMsg;
};
