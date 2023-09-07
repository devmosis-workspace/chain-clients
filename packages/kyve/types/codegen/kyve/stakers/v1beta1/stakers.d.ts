import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
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
    commissionRewards: Long;
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
    commission_rewards: Long;
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
    poolId: Long;
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
    points: Long;
    /** isLeaving indicates if a staker is leaving the given pool. */
    isLeaving: boolean;
}
/**
 * Valaccount gets authorized by a staker to
 * vote in a given pool by favor of the staker.
 */
export interface ValaccountSDKType {
    pool_id: Long;
    staker: string;
    valaddress: string;
    points: Long;
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
    index: Long;
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
    creationDate: Long;
}
/**
 * CommissionChangeEntry stores the information for an
 * upcoming commission change. A commission change is never
 * instant, so delegators have time to redelegate in case
 * they don't agree with the new commission.
 */
export interface CommissionChangeEntrySDKType {
    index: Long;
    staker: string;
    commission: string;
    creation_date: Long;
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
    index: Long;
    /** staker is the address of the affected staker */
    staker: string;
    /** pool_id indicates the pool the staker wants to leave */
    poolId: Long;
    /**
     * creation_date is the UNIX-timestamp in seconds
     * when the entry was created.
     */
    creationDate: Long;
}
/**
 * LeavePoolEntry stores the information for an upcoming
 * pool leave. A staker can't leave a pool instantly.
 * Instead a the `LeaveTime` needs to be awaited.
 * If a staker start to leave a pool, it will be shown
 * in the UI to the delegators.
 */
export interface LeavePoolEntrySDKType {
    index: Long;
    staker: string;
    pool_id: Long;
    creation_date: Long;
}
/** UnbondingState stores the state for the unbonding of stakes and delegations. */
export interface QueueState {
    /**
     * low_index is the tail of the queue. It is the
     * oldest entry in the queue. If this entry isn't
     * due, non of the other entries is.
     */
    lowIndex: Long;
    /**
     * high_index is the head of the queue. New entries
     * are added to the top.
     */
    highIndex: Long;
}
/** UnbondingState stores the state for the unbonding of stakes and delegations. */
export interface QueueStateSDKType {
    low_index: Long;
    high_index: Long;
}
export declare const Staker: {
    encode(message: Staker, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Staker;
    fromPartial(object: Partial<Staker>): Staker;
};
export declare const Valaccount: {
    encode(message: Valaccount, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Valaccount;
    fromPartial(object: Partial<Valaccount>): Valaccount;
};
export declare const CommissionChangeEntry: {
    encode(message: CommissionChangeEntry, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): CommissionChangeEntry;
    fromPartial(object: Partial<CommissionChangeEntry>): CommissionChangeEntry;
};
export declare const LeavePoolEntry: {
    encode(message: LeavePoolEntry, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): LeavePoolEntry;
    fromPartial(object: Partial<LeavePoolEntry>): LeavePoolEntry;
};
export declare const QueueState: {
    encode(message: QueueState, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueueState;
    fromPartial(object: Partial<QueueState>): QueueState;
};
