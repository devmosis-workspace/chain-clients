import { PoolStatus } from "../../pool/v1beta1/pool";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/**
 * BasicPool contains the necessary properties need for a pool
 * to be displayed in the UI
 */
export interface BasicPool {
    /** id is the ID of the pool */
    id: Long;
    /** name of the pool */
    name: string;
    /**
     * runtime for the protocol nodes
     * like evm, bitcoin, etc.
     */
    runtime: string;
    /** logo of the pool */
    logo: string;
    /** operating_cost is the base payout for each bundle reward */
    operatingCost: Long;
    /** upload_interval is the interval bundles get created */
    uploadInterval: Long;
    /**
     * total_funds of the pool. If the pool runs
     * out of funds no more bundles will be produced
     */
    totalFunds: Long;
    /** total_delegation of the pool */
    totalDelegation: Long;
    /**
     * status of the pool if pool is able
     * to produce bundles, etc.
     */
    status: PoolStatus;
}
/**
 * BasicPool contains the necessary properties need for a pool
 * to be displayed in the UI
 */
export interface BasicPoolSDKType {
    id: Long;
    name: string;
    runtime: string;
    logo: string;
    operating_cost: Long;
    upload_interval: Long;
    total_funds: Long;
    total_delegation: Long;
    status: PoolStatus;
}
/**
 * FullStaker aggregates information from the staker and its delegators
 * as well as pending queue entries into one object.
 * It contains almost all needed information for a convenient usage
 */
export interface FullStaker {
    /** address of the staker */
    address: string;
    /** metadata as logo, moniker, etc. */
    metadata?: StakerMetadata;
    /** amount the staker has delegated to himself */
    selfDelegation: Long;
    /**
     * unbonding_amount is the amount the staker is currently unbonding
     * from the self-delegation.
     * This amount can be larger than `amount` when the staker
     * got slashed during unbonding. However, at the end of
     * the unbonding period this amount is double checked with the
     * remaining amount.
     */
    selfDelegationUnbonding: Long;
    /**
     * total_delegation returns the sum of all $KYVE users
     * have delegated to this staker
     */
    totalDelegation: Long;
    /**
     * delegator_count is the total number of individual
     * delegator addresses for that user.
     */
    delegatorCount: Long;
    /**
     * pools is a list of all pools the staker is currently
     * participating, i.e. allowed to vote and upload data.
     */
    pools: PoolMembership[];
}
/**
 * FullStaker aggregates information from the staker and its delegators
 * as well as pending queue entries into one object.
 * It contains almost all needed information for a convenient usage
 */
export interface FullStakerSDKType {
    address: string;
    metadata?: StakerMetadataSDKType;
    self_delegation: Long;
    self_delegation_unbonding: Long;
    total_delegation: Long;
    delegator_count: Long;
    pools: PoolMembershipSDKType[];
}
/** StakerMetadata contains static information for a staker */
export interface StakerMetadata {
    /**
     * commission is the percentage of the rewards that will
     * get transferred to the staker before the remaining
     * rewards are split across all delegators
     */
    commission: string;
    /**
     * moniker is a human-readable name for displaying
     * the staker in the UI
     */
    moniker: string;
    /** website is a https-link to the website of the staker */
    website: string;
    /** identity from keybase.io */
    identity: string;
    /** security_contact ... */
    securityContact: string;
    /** details ... */
    details: string;
    /**
     * pending_commission_change shows if the staker plans
     * to change its commission. Delegators will see a warning in
     * the UI. A Commission change takes some time until
     * the commission is applied. Users have time to redelegate
     * if they not agree with the new commission.
     */
    pendingCommissionChange?: CommissionChangeEntry;
}
/** StakerMetadata contains static information for a staker */
export interface StakerMetadataSDKType {
    commission: string;
    moniker: string;
    website: string;
    identity: string;
    security_contact: string;
    details: string;
    pending_commission_change?: CommissionChangeEntrySDKType;
}
/**
 * CommissionChangeEntry shows when the old commission
 * of a staker will change to the new commission
 */
export interface CommissionChangeEntry {
    /**
     * commission is the new commission that will
     * become active once the change-time is over
     */
    commission: string;
    /**
     * creation_date is the UNIX-timestamp (in seconds)
     * of when the entry was created.
     */
    creationDate: Long;
}
/**
 * CommissionChangeEntry shows when the old commission
 * of a staker will change to the new commission
 */
export interface CommissionChangeEntrySDKType {
    commission: string;
    creation_date: Long;
}
/**
 * PoolMembership shows in which pool the staker
 * is participating
 */
export interface PoolMembership {
    /** pool contains useful information about the pool */
    pool?: BasicPool;
    /**
     * points indicates if the staker is inactive
     * If the staker misses a vote, a point is added.
     * After 5 points the staker is removed from
     * the stakers set.
     */
    points: Long;
    /**
     * is_leaving indicates if a user has scheduled a
     * a PoolLeave entry. After the leave-time is over
     * the staker will no longer participate in that pool
     */
    isLeaving: boolean;
    /**
     * Valaddress is the address which is authorized to vote
     * and submit bundles. If the server gets compromised
     * the staker can just change the valaddress.
     */
    valaddress: string;
    /**
     * balance is the valaddress account balance and indicates
     * whether or not the valaccount needs additional funds to
     * pay for gas fees
     */
    balance: Long;
}
/**
 * PoolMembership shows in which pool the staker
 * is participating
 */
export interface PoolMembershipSDKType {
    pool?: BasicPoolSDKType;
    points: Long;
    is_leaving: boolean;
    valaddress: string;
    balance: Long;
}
export declare const BasicPool: {
    encode(message: BasicPool, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): BasicPool;
    fromPartial(object: Partial<BasicPool>): BasicPool;
};
export declare const FullStaker: {
    encode(message: FullStaker, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): FullStaker;
    fromPartial(object: Partial<FullStaker>): FullStaker;
};
export declare const StakerMetadata: {
    encode(message: StakerMetadata, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): StakerMetadata;
    fromPartial(object: Partial<StakerMetadata>): StakerMetadata;
};
export declare const CommissionChangeEntry: {
    encode(message: CommissionChangeEntry, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): CommissionChangeEntry;
    fromPartial(object: Partial<CommissionChangeEntry>): CommissionChangeEntry;
};
export declare const PoolMembership: {
    encode(message: PoolMembership, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): PoolMembership;
    fromPartial(object: Partial<PoolMembership>): PoolMembership;
};
