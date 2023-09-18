import { PoolStatus } from "../../pool/v1beta1/pool";
import { BinaryWriter } from "../../../binary";
/**
 * BasicPool contains the necessary properties need for a pool
 * to be displayed in the UI
 */
export interface BasicPool {
    /** id is the ID of the pool */
    id: bigint;
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
    operatingCost: bigint;
    /** upload_interval is the interval bundles get created */
    uploadInterval: bigint;
    /**
     * total_funds of the pool. If the pool runs
     * out of funds no more bundles will be produced
     */
    totalFunds: bigint;
    /** total_delegation of the pool */
    totalDelegation: bigint;
    /**
     * status of the pool if pool is able
     * to produce bundles, etc.
     */
    status: PoolStatus;
}
export interface BasicPoolProtoMsg {
    typeUrl: "/kyve.query.v1beta1.BasicPool";
    value: Uint8Array;
}
/**
 * BasicPool contains the necessary properties need for a pool
 * to be displayed in the UI
 */
export interface BasicPoolAmino {
    /** id is the ID of the pool */
    id: string;
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
    operating_cost: string;
    /** upload_interval is the interval bundles get created */
    upload_interval: string;
    /**
     * total_funds of the pool. If the pool runs
     * out of funds no more bundles will be produced
     */
    total_funds: string;
    /** total_delegation of the pool */
    total_delegation: string;
    /**
     * status of the pool if pool is able
     * to produce bundles, etc.
     */
    status: PoolStatus;
}
export interface BasicPoolAminoMsg {
    type: "/kyve.query.v1beta1.BasicPool";
    value: BasicPoolAmino;
}
/**
 * BasicPool contains the necessary properties need for a pool
 * to be displayed in the UI
 */
export interface BasicPoolSDKType {
    id: bigint;
    name: string;
    runtime: string;
    logo: string;
    operating_cost: bigint;
    upload_interval: bigint;
    total_funds: bigint;
    total_delegation: bigint;
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
    metadata: StakerMetadata;
    /** amount the staker has delegated to himself */
    selfDelegation: bigint;
    /**
     * unbonding_amount is the amount the staker is currently unbonding
     * from the self-delegation.
     * This amount can be larger than `amount` when the staker
     * got slashed during unbonding. However, at the end of
     * the unbonding period this amount is double checked with the
     * remaining amount.
     */
    selfDelegationUnbonding: bigint;
    /**
     * total_delegation returns the sum of all $KYVE users
     * have delegated to this staker
     */
    totalDelegation: bigint;
    /**
     * delegator_count is the total number of individual
     * delegator addresses for that user.
     */
    delegatorCount: bigint;
    /**
     * pools is a list of all pools the staker is currently
     * participating, i.e. allowed to vote and upload data.
     */
    pools: PoolMembership[];
}
export interface FullStakerProtoMsg {
    typeUrl: "/kyve.query.v1beta1.FullStaker";
    value: Uint8Array;
}
/**
 * FullStaker aggregates information from the staker and its delegators
 * as well as pending queue entries into one object.
 * It contains almost all needed information for a convenient usage
 */
export interface FullStakerAmino {
    /** address of the staker */
    address: string;
    /** metadata as logo, moniker, etc. */
    metadata?: StakerMetadataAmino;
    /** amount the staker has delegated to himself */
    self_delegation: string;
    /**
     * unbonding_amount is the amount the staker is currently unbonding
     * from the self-delegation.
     * This amount can be larger than `amount` when the staker
     * got slashed during unbonding. However, at the end of
     * the unbonding period this amount is double checked with the
     * remaining amount.
     */
    self_delegation_unbonding: string;
    /**
     * total_delegation returns the sum of all $KYVE users
     * have delegated to this staker
     */
    total_delegation: string;
    /**
     * delegator_count is the total number of individual
     * delegator addresses for that user.
     */
    delegator_count: string;
    /**
     * pools is a list of all pools the staker is currently
     * participating, i.e. allowed to vote and upload data.
     */
    pools: PoolMembershipAmino[];
}
export interface FullStakerAminoMsg {
    type: "/kyve.query.v1beta1.FullStaker";
    value: FullStakerAmino;
}
/**
 * FullStaker aggregates information from the staker and its delegators
 * as well as pending queue entries into one object.
 * It contains almost all needed information for a convenient usage
 */
export interface FullStakerSDKType {
    address: string;
    metadata: StakerMetadataSDKType;
    self_delegation: bigint;
    self_delegation_unbonding: bigint;
    total_delegation: bigint;
    delegator_count: bigint;
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
    pendingCommissionChange: CommissionChangeEntry;
    /** commission_rewards are the rewards in $KYVE earned through commission */
    commissionRewards: bigint;
}
export interface StakerMetadataProtoMsg {
    typeUrl: "/kyve.query.v1beta1.StakerMetadata";
    value: Uint8Array;
}
/** StakerMetadata contains static information for a staker */
export interface StakerMetadataAmino {
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
    security_contact: string;
    /** details ... */
    details: string;
    /**
     * pending_commission_change shows if the staker plans
     * to change its commission. Delegators will see a warning in
     * the UI. A Commission change takes some time until
     * the commission is applied. Users have time to redelegate
     * if they not agree with the new commission.
     */
    pending_commission_change?: CommissionChangeEntryAmino;
    /** commission_rewards are the rewards in $KYVE earned through commission */
    commission_rewards: string;
}
export interface StakerMetadataAminoMsg {
    type: "/kyve.query.v1beta1.StakerMetadata";
    value: StakerMetadataAmino;
}
/** StakerMetadata contains static information for a staker */
export interface StakerMetadataSDKType {
    commission: string;
    moniker: string;
    website: string;
    identity: string;
    security_contact: string;
    details: string;
    pending_commission_change: CommissionChangeEntrySDKType;
    commission_rewards: bigint;
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
    creationDate: bigint;
}
export interface CommissionChangeEntryProtoMsg {
    typeUrl: "/kyve.query.v1beta1.CommissionChangeEntry";
    value: Uint8Array;
}
/**
 * CommissionChangeEntry shows when the old commission
 * of a staker will change to the new commission
 */
export interface CommissionChangeEntryAmino {
    /**
     * commission is the new commission that will
     * become active once the change-time is over
     */
    commission: string;
    /**
     * creation_date is the UNIX-timestamp (in seconds)
     * of when the entry was created.
     */
    creation_date: string;
}
export interface CommissionChangeEntryAminoMsg {
    type: "/kyve.query.v1beta1.CommissionChangeEntry";
    value: CommissionChangeEntryAmino;
}
/**
 * CommissionChangeEntry shows when the old commission
 * of a staker will change to the new commission
 */
export interface CommissionChangeEntrySDKType {
    commission: string;
    creation_date: bigint;
}
/**
 * PoolMembership shows in which pool the staker
 * is participating
 */
export interface PoolMembership {
    /** pool contains useful information about the pool */
    pool: BasicPool;
    /**
     * points indicates if the staker is inactive
     * If the staker misses a vote, a point is added.
     * After 5 points the staker is removed from
     * the stakers set.
     */
    points: bigint;
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
    balance: bigint;
}
export interface PoolMembershipProtoMsg {
    typeUrl: "/kyve.query.v1beta1.PoolMembership";
    value: Uint8Array;
}
/**
 * PoolMembership shows in which pool the staker
 * is participating
 */
export interface PoolMembershipAmino {
    /** pool contains useful information about the pool */
    pool?: BasicPoolAmino;
    /**
     * points indicates if the staker is inactive
     * If the staker misses a vote, a point is added.
     * After 5 points the staker is removed from
     * the stakers set.
     */
    points: string;
    /**
     * is_leaving indicates if a user has scheduled a
     * a PoolLeave entry. After the leave-time is over
     * the staker will no longer participate in that pool
     */
    is_leaving: boolean;
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
    balance: string;
}
export interface PoolMembershipAminoMsg {
    type: "/kyve.query.v1beta1.PoolMembership";
    value: PoolMembershipAmino;
}
/**
 * PoolMembership shows in which pool the staker
 * is participating
 */
export interface PoolMembershipSDKType {
    pool: BasicPoolSDKType;
    points: bigint;
    is_leaving: boolean;
    valaddress: string;
    balance: bigint;
}
export declare const BasicPool: {
    typeUrl: string;
    encode(message: BasicPool, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): BasicPool;
    fromPartial(object: Partial<BasicPool>): BasicPool;
    fromAmino(object: BasicPoolAmino): BasicPool;
    toAmino(message: BasicPool): BasicPoolAmino;
    fromAminoMsg(object: BasicPoolAminoMsg): BasicPool;
    fromProtoMsg(message: BasicPoolProtoMsg): BasicPool;
    toProto(message: BasicPool): Uint8Array;
    toProtoMsg(message: BasicPool): BasicPoolProtoMsg;
};
export declare const FullStaker: {
    typeUrl: string;
    encode(message: FullStaker, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): FullStaker;
    fromPartial(object: Partial<FullStaker>): FullStaker;
    fromAmino(object: FullStakerAmino): FullStaker;
    toAmino(message: FullStaker): FullStakerAmino;
    fromAminoMsg(object: FullStakerAminoMsg): FullStaker;
    fromProtoMsg(message: FullStakerProtoMsg): FullStaker;
    toProto(message: FullStaker): Uint8Array;
    toProtoMsg(message: FullStaker): FullStakerProtoMsg;
};
export declare const StakerMetadata: {
    typeUrl: string;
    encode(message: StakerMetadata, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): StakerMetadata;
    fromPartial(object: Partial<StakerMetadata>): StakerMetadata;
    fromAmino(object: StakerMetadataAmino): StakerMetadata;
    toAmino(message: StakerMetadata): StakerMetadataAmino;
    fromAminoMsg(object: StakerMetadataAminoMsg): StakerMetadata;
    fromProtoMsg(message: StakerMetadataProtoMsg): StakerMetadata;
    toProto(message: StakerMetadata): Uint8Array;
    toProtoMsg(message: StakerMetadata): StakerMetadataProtoMsg;
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
export declare const PoolMembership: {
    typeUrl: string;
    encode(message: PoolMembership, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): PoolMembership;
    fromPartial(object: Partial<PoolMembership>): PoolMembership;
    fromAmino(object: PoolMembershipAmino): PoolMembership;
    toAmino(message: PoolMembership): PoolMembershipAmino;
    fromAminoMsg(object: PoolMembershipAminoMsg): PoolMembership;
    fromProtoMsg(message: PoolMembershipProtoMsg): PoolMembership;
    toProto(message: PoolMembership): Uint8Array;
    toProtoMsg(message: PoolMembership): PoolMembershipProtoMsg;
};
