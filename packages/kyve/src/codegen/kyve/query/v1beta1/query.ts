import { PoolStatus, poolStatusFromJSON } from "../../pool/v1beta1/pool";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { Decimal } from "@cosmjs/math";
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
  /** inflation_share_weight is the base payout for each bundle reward */
  inflationShareWeight: bigint;
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
  id?: string;
  /** name of the pool */
  name?: string;
  /**
   * runtime for the protocol nodes
   * like evm, bitcoin, etc.
   */
  runtime?: string;
  /** logo of the pool */
  logo?: string;
  /** inflation_share_weight is the base payout for each bundle reward */
  inflation_share_weight?: string;
  /** upload_interval is the interval bundles get created */
  upload_interval?: string;
  /**
   * total_funds of the pool. If the pool runs
   * out of funds no more bundles will be produced
   */
  total_funds?: string;
  /** total_delegation of the pool */
  total_delegation?: string;
  /**
   * status of the pool if pool is able
   * to produce bundles, etc.
   */
  status?: PoolStatus;
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
  inflation_share_weight: bigint;
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
  metadata?: StakerMetadata;
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
  address?: string;
  /** metadata as logo, moniker, etc. */
  metadata?: StakerMetadataAmino;
  /** amount the staker has delegated to himself */
  self_delegation?: string;
  /**
   * unbonding_amount is the amount the staker is currently unbonding
   * from the self-delegation.
   * This amount can be larger than `amount` when the staker
   * got slashed during unbonding. However, at the end of
   * the unbonding period this amount is double checked with the
   * remaining amount.
   */
  self_delegation_unbonding?: string;
  /**
   * total_delegation returns the sum of all $KYVE users
   * have delegated to this staker
   */
  total_delegation?: string;
  /**
   * delegator_count is the total number of individual
   * delegator addresses for that user.
   */
  delegator_count?: string;
  /**
   * pools is a list of all pools the staker is currently
   * participating, i.e. allowed to vote and upload data.
   */
  pools?: PoolMembershipAmino[];
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
  metadata?: StakerMetadataSDKType;
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
  pendingCommissionChange?: CommissionChangeEntry;
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
  commission?: string;
  /**
   * moniker is a human-readable name for displaying
   * the staker in the UI
   */
  moniker?: string;
  /** website is a https-link to the website of the staker */
  website?: string;
  /** identity from keybase.io */
  identity?: string;
  /** security_contact ... */
  security_contact?: string;
  /** details ... */
  details?: string;
  /**
   * pending_commission_change shows if the staker plans
   * to change its commission. Delegators will see a warning in
   * the UI. A Commission change takes some time until
   * the commission is applied. Users have time to redelegate
   * if they not agree with the new commission.
   */
  pending_commission_change?: CommissionChangeEntryAmino;
  /** commission_rewards are the rewards in $KYVE earned through commission */
  commission_rewards?: string;
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
  pending_commission_change?: CommissionChangeEntrySDKType;
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
  commission?: string;
  /**
   * creation_date is the UNIX-timestamp (in seconds)
   * of when the entry was created.
   */
  creation_date?: string;
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
  pool?: BasicPool;
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
  points?: string;
  /**
   * is_leaving indicates if a user has scheduled a
   * a PoolLeave entry. After the leave-time is over
   * the staker will no longer participate in that pool
   */
  is_leaving?: boolean;
  /**
   * Valaddress is the address which is authorized to vote
   * and submit bundles. If the server gets compromised
   * the staker can just change the valaddress.
   */
  valaddress?: string;
  /**
   * balance is the valaddress account balance and indicates
   * whether or not the valaccount needs additional funds to
   * pay for gas fees
   */
  balance?: string;
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
  pool?: BasicPoolSDKType;
  points: bigint;
  is_leaving: boolean;
  valaddress: string;
  balance: bigint;
}
function createBaseBasicPool(): BasicPool {
  return {
    id: BigInt(0),
    name: "",
    runtime: "",
    logo: "",
    inflationShareWeight: BigInt(0),
    uploadInterval: BigInt(0),
    totalFunds: BigInt(0),
    totalDelegation: BigInt(0),
    status: 0
  };
}
export const BasicPool = {
  typeUrl: "/kyve.query.v1beta1.BasicPool",
  encode(message: BasicPool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.runtime !== "") {
      writer.uint32(26).string(message.runtime);
    }
    if (message.logo !== "") {
      writer.uint32(34).string(message.logo);
    }
    if (message.inflationShareWeight !== BigInt(0)) {
      writer.uint32(40).uint64(message.inflationShareWeight);
    }
    if (message.uploadInterval !== BigInt(0)) {
      writer.uint32(48).uint64(message.uploadInterval);
    }
    if (message.totalFunds !== BigInt(0)) {
      writer.uint32(56).uint64(message.totalFunds);
    }
    if (message.totalDelegation !== BigInt(0)) {
      writer.uint32(64).uint64(message.totalDelegation);
    }
    if (message.status !== 0) {
      writer.uint32(72).int32(message.status);
    }
    return writer;
  },
  fromJSON(object: any): BasicPool {
    return {
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
      name: isSet(object.name) ? String(object.name) : "",
      runtime: isSet(object.runtime) ? String(object.runtime) : "",
      logo: isSet(object.logo) ? String(object.logo) : "",
      inflationShareWeight: isSet(object.inflationShareWeight) ? BigInt(object.inflationShareWeight.toString()) : BigInt(0),
      uploadInterval: isSet(object.uploadInterval) ? BigInt(object.uploadInterval.toString()) : BigInt(0),
      totalFunds: isSet(object.totalFunds) ? BigInt(object.totalFunds.toString()) : BigInt(0),
      totalDelegation: isSet(object.totalDelegation) ? BigInt(object.totalDelegation.toString()) : BigInt(0),
      status: isSet(object.status) ? poolStatusFromJSON(object.status) : -1
    };
  },
  fromPartial(object: Partial<BasicPool>): BasicPool {
    const message = createBaseBasicPool();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.name = object.name ?? "";
    message.runtime = object.runtime ?? "";
    message.logo = object.logo ?? "";
    message.inflationShareWeight = object.inflationShareWeight !== undefined && object.inflationShareWeight !== null ? BigInt(object.inflationShareWeight.toString()) : BigInt(0);
    message.uploadInterval = object.uploadInterval !== undefined && object.uploadInterval !== null ? BigInt(object.uploadInterval.toString()) : BigInt(0);
    message.totalFunds = object.totalFunds !== undefined && object.totalFunds !== null ? BigInt(object.totalFunds.toString()) : BigInt(0);
    message.totalDelegation = object.totalDelegation !== undefined && object.totalDelegation !== null ? BigInt(object.totalDelegation.toString()) : BigInt(0);
    message.status = object.status ?? 0;
    return message;
  },
  fromAmino(object: BasicPoolAmino): BasicPool {
    const message = createBaseBasicPool();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.runtime !== undefined && object.runtime !== null) {
      message.runtime = object.runtime;
    }
    if (object.logo !== undefined && object.logo !== null) {
      message.logo = object.logo;
    }
    if (object.inflation_share_weight !== undefined && object.inflation_share_weight !== null) {
      message.inflationShareWeight = BigInt(object.inflation_share_weight);
    }
    if (object.upload_interval !== undefined && object.upload_interval !== null) {
      message.uploadInterval = BigInt(object.upload_interval);
    }
    if (object.total_funds !== undefined && object.total_funds !== null) {
      message.totalFunds = BigInt(object.total_funds);
    }
    if (object.total_delegation !== undefined && object.total_delegation !== null) {
      message.totalDelegation = BigInt(object.total_delegation);
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = poolStatusFromJSON(object.status);
    }
    return message;
  },
  toAmino(message: BasicPool): BasicPoolAmino {
    const obj: any = {};
    obj.id = message.id ? message.id.toString() : undefined;
    obj.name = message.name;
    obj.runtime = message.runtime;
    obj.logo = message.logo;
    obj.inflation_share_weight = message.inflationShareWeight ? message.inflationShareWeight.toString() : undefined;
    obj.upload_interval = message.uploadInterval ? message.uploadInterval.toString() : undefined;
    obj.total_funds = message.totalFunds ? message.totalFunds.toString() : undefined;
    obj.total_delegation = message.totalDelegation ? message.totalDelegation.toString() : undefined;
    obj.status = message.status;
    return obj;
  },
  fromAminoMsg(object: BasicPoolAminoMsg): BasicPool {
    return BasicPool.fromAmino(object.value);
  },
  fromProtoMsg(message: BasicPoolProtoMsg): BasicPool {
    return BasicPool.decode(message.value);
  },
  toProto(message: BasicPool): Uint8Array {
    return BasicPool.encode(message).finish();
  },
  toProtoMsg(message: BasicPool): BasicPoolProtoMsg {
    return {
      typeUrl: "/kyve.query.v1beta1.BasicPool",
      value: BasicPool.encode(message).finish()
    };
  }
};
function createBaseFullStaker(): FullStaker {
  return {
    address: "",
    metadata: undefined,
    selfDelegation: BigInt(0),
    selfDelegationUnbonding: BigInt(0),
    totalDelegation: BigInt(0),
    delegatorCount: BigInt(0),
    pools: []
  };
}
export const FullStaker = {
  typeUrl: "/kyve.query.v1beta1.FullStaker",
  encode(message: FullStaker, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.metadata !== undefined) {
      StakerMetadata.encode(message.metadata, writer.uint32(18).fork()).ldelim();
    }
    if (message.selfDelegation !== BigInt(0)) {
      writer.uint32(24).uint64(message.selfDelegation);
    }
    if (message.selfDelegationUnbonding !== BigInt(0)) {
      writer.uint32(32).uint64(message.selfDelegationUnbonding);
    }
    if (message.totalDelegation !== BigInt(0)) {
      writer.uint32(40).uint64(message.totalDelegation);
    }
    if (message.delegatorCount !== BigInt(0)) {
      writer.uint32(48).uint64(message.delegatorCount);
    }
    for (const v of message.pools) {
      PoolMembership.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): FullStaker {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      metadata: isSet(object.metadata) ? StakerMetadata.fromJSON(object.metadata) : undefined,
      selfDelegation: isSet(object.selfDelegation) ? BigInt(object.selfDelegation.toString()) : BigInt(0),
      selfDelegationUnbonding: isSet(object.selfDelegationUnbonding) ? BigInt(object.selfDelegationUnbonding.toString()) : BigInt(0),
      totalDelegation: isSet(object.totalDelegation) ? BigInt(object.totalDelegation.toString()) : BigInt(0),
      delegatorCount: isSet(object.delegatorCount) ? BigInt(object.delegatorCount.toString()) : BigInt(0),
      pools: Array.isArray(object?.pools) ? object.pools.map((e: any) => PoolMembership.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<FullStaker>): FullStaker {
    const message = createBaseFullStaker();
    message.address = object.address ?? "";
    message.metadata = object.metadata !== undefined && object.metadata !== null ? StakerMetadata.fromPartial(object.metadata) : undefined;
    message.selfDelegation = object.selfDelegation !== undefined && object.selfDelegation !== null ? BigInt(object.selfDelegation.toString()) : BigInt(0);
    message.selfDelegationUnbonding = object.selfDelegationUnbonding !== undefined && object.selfDelegationUnbonding !== null ? BigInt(object.selfDelegationUnbonding.toString()) : BigInt(0);
    message.totalDelegation = object.totalDelegation !== undefined && object.totalDelegation !== null ? BigInt(object.totalDelegation.toString()) : BigInt(0);
    message.delegatorCount = object.delegatorCount !== undefined && object.delegatorCount !== null ? BigInt(object.delegatorCount.toString()) : BigInt(0);
    message.pools = object.pools?.map(e => PoolMembership.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: FullStakerAmino): FullStaker {
    const message = createBaseFullStaker();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = StakerMetadata.fromAmino(object.metadata);
    }
    if (object.self_delegation !== undefined && object.self_delegation !== null) {
      message.selfDelegation = BigInt(object.self_delegation);
    }
    if (object.self_delegation_unbonding !== undefined && object.self_delegation_unbonding !== null) {
      message.selfDelegationUnbonding = BigInt(object.self_delegation_unbonding);
    }
    if (object.total_delegation !== undefined && object.total_delegation !== null) {
      message.totalDelegation = BigInt(object.total_delegation);
    }
    if (object.delegator_count !== undefined && object.delegator_count !== null) {
      message.delegatorCount = BigInt(object.delegator_count);
    }
    message.pools = object.pools?.map(e => PoolMembership.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: FullStaker): FullStakerAmino {
    const obj: any = {};
    obj.address = message.address;
    obj.metadata = message.metadata ? StakerMetadata.toAmino(message.metadata) : undefined;
    obj.self_delegation = message.selfDelegation ? message.selfDelegation.toString() : undefined;
    obj.self_delegation_unbonding = message.selfDelegationUnbonding ? message.selfDelegationUnbonding.toString() : undefined;
    obj.total_delegation = message.totalDelegation ? message.totalDelegation.toString() : undefined;
    obj.delegator_count = message.delegatorCount ? message.delegatorCount.toString() : undefined;
    if (message.pools) {
      obj.pools = message.pools.map(e => e ? PoolMembership.toAmino(e) : undefined);
    } else {
      obj.pools = [];
    }
    return obj;
  },
  fromAminoMsg(object: FullStakerAminoMsg): FullStaker {
    return FullStaker.fromAmino(object.value);
  },
  fromProtoMsg(message: FullStakerProtoMsg): FullStaker {
    return FullStaker.decode(message.value);
  },
  toProto(message: FullStaker): Uint8Array {
    return FullStaker.encode(message).finish();
  },
  toProtoMsg(message: FullStaker): FullStakerProtoMsg {
    return {
      typeUrl: "/kyve.query.v1beta1.FullStaker",
      value: FullStaker.encode(message).finish()
    };
  }
};
function createBaseStakerMetadata(): StakerMetadata {
  return {
    commission: "",
    moniker: "",
    website: "",
    identity: "",
    securityContact: "",
    details: "",
    pendingCommissionChange: undefined,
    commissionRewards: BigInt(0)
  };
}
export const StakerMetadata = {
  typeUrl: "/kyve.query.v1beta1.StakerMetadata",
  encode(message: StakerMetadata, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.commission !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.commission, 18).atomics);
    }
    if (message.moniker !== "") {
      writer.uint32(18).string(message.moniker);
    }
    if (message.website !== "") {
      writer.uint32(26).string(message.website);
    }
    if (message.identity !== "") {
      writer.uint32(34).string(message.identity);
    }
    if (message.securityContact !== "") {
      writer.uint32(42).string(message.securityContact);
    }
    if (message.details !== "") {
      writer.uint32(50).string(message.details);
    }
    if (message.pendingCommissionChange !== undefined) {
      CommissionChangeEntry.encode(message.pendingCommissionChange, writer.uint32(58).fork()).ldelim();
    }
    if (message.commissionRewards !== BigInt(0)) {
      writer.uint32(64).uint64(message.commissionRewards);
    }
    return writer;
  },
  fromJSON(object: any): StakerMetadata {
    return {
      commission: isSet(object.commission) ? String(object.commission) : "",
      moniker: isSet(object.moniker) ? String(object.moniker) : "",
      website: isSet(object.website) ? String(object.website) : "",
      identity: isSet(object.identity) ? String(object.identity) : "",
      securityContact: isSet(object.securityContact) ? String(object.securityContact) : "",
      details: isSet(object.details) ? String(object.details) : "",
      pendingCommissionChange: isSet(object.pendingCommissionChange) ? CommissionChangeEntry.fromJSON(object.pendingCommissionChange) : undefined,
      commissionRewards: isSet(object.commissionRewards) ? BigInt(object.commissionRewards.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<StakerMetadata>): StakerMetadata {
    const message = createBaseStakerMetadata();
    message.commission = object.commission ?? "";
    message.moniker = object.moniker ?? "";
    message.website = object.website ?? "";
    message.identity = object.identity ?? "";
    message.securityContact = object.securityContact ?? "";
    message.details = object.details ?? "";
    message.pendingCommissionChange = object.pendingCommissionChange !== undefined && object.pendingCommissionChange !== null ? CommissionChangeEntry.fromPartial(object.pendingCommissionChange) : undefined;
    message.commissionRewards = object.commissionRewards !== undefined && object.commissionRewards !== null ? BigInt(object.commissionRewards.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: StakerMetadataAmino): StakerMetadata {
    const message = createBaseStakerMetadata();
    if (object.commission !== undefined && object.commission !== null) {
      message.commission = object.commission;
    }
    if (object.moniker !== undefined && object.moniker !== null) {
      message.moniker = object.moniker;
    }
    if (object.website !== undefined && object.website !== null) {
      message.website = object.website;
    }
    if (object.identity !== undefined && object.identity !== null) {
      message.identity = object.identity;
    }
    if (object.security_contact !== undefined && object.security_contact !== null) {
      message.securityContact = object.security_contact;
    }
    if (object.details !== undefined && object.details !== null) {
      message.details = object.details;
    }
    if (object.pending_commission_change !== undefined && object.pending_commission_change !== null) {
      message.pendingCommissionChange = CommissionChangeEntry.fromAmino(object.pending_commission_change);
    }
    if (object.commission_rewards !== undefined && object.commission_rewards !== null) {
      message.commissionRewards = BigInt(object.commission_rewards);
    }
    return message;
  },
  toAmino(message: StakerMetadata): StakerMetadataAmino {
    const obj: any = {};
    obj.commission = message.commission;
    obj.moniker = message.moniker;
    obj.website = message.website;
    obj.identity = message.identity;
    obj.security_contact = message.securityContact;
    obj.details = message.details;
    obj.pending_commission_change = message.pendingCommissionChange ? CommissionChangeEntry.toAmino(message.pendingCommissionChange) : undefined;
    obj.commission_rewards = message.commissionRewards ? message.commissionRewards.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: StakerMetadataAminoMsg): StakerMetadata {
    return StakerMetadata.fromAmino(object.value);
  },
  fromProtoMsg(message: StakerMetadataProtoMsg): StakerMetadata {
    return StakerMetadata.decode(message.value);
  },
  toProto(message: StakerMetadata): Uint8Array {
    return StakerMetadata.encode(message).finish();
  },
  toProtoMsg(message: StakerMetadata): StakerMetadataProtoMsg {
    return {
      typeUrl: "/kyve.query.v1beta1.StakerMetadata",
      value: StakerMetadata.encode(message).finish()
    };
  }
};
function createBaseCommissionChangeEntry(): CommissionChangeEntry {
  return {
    commission: "",
    creationDate: BigInt(0)
  };
}
export const CommissionChangeEntry = {
  typeUrl: "/kyve.query.v1beta1.CommissionChangeEntry",
  encode(message: CommissionChangeEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.commission !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.commission, 18).atomics);
    }
    if (message.creationDate !== BigInt(0)) {
      writer.uint32(16).int64(message.creationDate);
    }
    return writer;
  },
  fromJSON(object: any): CommissionChangeEntry {
    return {
      commission: isSet(object.commission) ? String(object.commission) : "",
      creationDate: isSet(object.creationDate) ? BigInt(object.creationDate.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<CommissionChangeEntry>): CommissionChangeEntry {
    const message = createBaseCommissionChangeEntry();
    message.commission = object.commission ?? "";
    message.creationDate = object.creationDate !== undefined && object.creationDate !== null ? BigInt(object.creationDate.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: CommissionChangeEntryAmino): CommissionChangeEntry {
    const message = createBaseCommissionChangeEntry();
    if (object.commission !== undefined && object.commission !== null) {
      message.commission = object.commission;
    }
    if (object.creation_date !== undefined && object.creation_date !== null) {
      message.creationDate = BigInt(object.creation_date);
    }
    return message;
  },
  toAmino(message: CommissionChangeEntry): CommissionChangeEntryAmino {
    const obj: any = {};
    obj.commission = message.commission;
    obj.creation_date = message.creationDate ? message.creationDate.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: CommissionChangeEntryAminoMsg): CommissionChangeEntry {
    return CommissionChangeEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: CommissionChangeEntryProtoMsg): CommissionChangeEntry {
    return CommissionChangeEntry.decode(message.value);
  },
  toProto(message: CommissionChangeEntry): Uint8Array {
    return CommissionChangeEntry.encode(message).finish();
  },
  toProtoMsg(message: CommissionChangeEntry): CommissionChangeEntryProtoMsg {
    return {
      typeUrl: "/kyve.query.v1beta1.CommissionChangeEntry",
      value: CommissionChangeEntry.encode(message).finish()
    };
  }
};
function createBasePoolMembership(): PoolMembership {
  return {
    pool: undefined,
    points: BigInt(0),
    isLeaving: false,
    valaddress: "",
    balance: BigInt(0)
  };
}
export const PoolMembership = {
  typeUrl: "/kyve.query.v1beta1.PoolMembership",
  encode(message: PoolMembership, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pool !== undefined) {
      BasicPool.encode(message.pool, writer.uint32(10).fork()).ldelim();
    }
    if (message.points !== BigInt(0)) {
      writer.uint32(16).uint64(message.points);
    }
    if (message.isLeaving === true) {
      writer.uint32(24).bool(message.isLeaving);
    }
    if (message.valaddress !== "") {
      writer.uint32(34).string(message.valaddress);
    }
    if (message.balance !== BigInt(0)) {
      writer.uint32(40).uint64(message.balance);
    }
    return writer;
  },
  fromJSON(object: any): PoolMembership {
    return {
      pool: isSet(object.pool) ? BasicPool.fromJSON(object.pool) : undefined,
      points: isSet(object.points) ? BigInt(object.points.toString()) : BigInt(0),
      isLeaving: isSet(object.isLeaving) ? Boolean(object.isLeaving) : false,
      valaddress: isSet(object.valaddress) ? String(object.valaddress) : "",
      balance: isSet(object.balance) ? BigInt(object.balance.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<PoolMembership>): PoolMembership {
    const message = createBasePoolMembership();
    message.pool = object.pool !== undefined && object.pool !== null ? BasicPool.fromPartial(object.pool) : undefined;
    message.points = object.points !== undefined && object.points !== null ? BigInt(object.points.toString()) : BigInt(0);
    message.isLeaving = object.isLeaving ?? false;
    message.valaddress = object.valaddress ?? "";
    message.balance = object.balance !== undefined && object.balance !== null ? BigInt(object.balance.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: PoolMembershipAmino): PoolMembership {
    const message = createBasePoolMembership();
    if (object.pool !== undefined && object.pool !== null) {
      message.pool = BasicPool.fromAmino(object.pool);
    }
    if (object.points !== undefined && object.points !== null) {
      message.points = BigInt(object.points);
    }
    if (object.is_leaving !== undefined && object.is_leaving !== null) {
      message.isLeaving = object.is_leaving;
    }
    if (object.valaddress !== undefined && object.valaddress !== null) {
      message.valaddress = object.valaddress;
    }
    if (object.balance !== undefined && object.balance !== null) {
      message.balance = BigInt(object.balance);
    }
    return message;
  },
  toAmino(message: PoolMembership): PoolMembershipAmino {
    const obj: any = {};
    obj.pool = message.pool ? BasicPool.toAmino(message.pool) : undefined;
    obj.points = message.points ? message.points.toString() : undefined;
    obj.is_leaving = message.isLeaving;
    obj.valaddress = message.valaddress;
    obj.balance = message.balance ? message.balance.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: PoolMembershipAminoMsg): PoolMembership {
    return PoolMembership.fromAmino(object.value);
  },
  fromProtoMsg(message: PoolMembershipProtoMsg): PoolMembership {
    return PoolMembership.decode(message.value);
  },
  toProto(message: PoolMembership): Uint8Array {
    return PoolMembership.encode(message).finish();
  },
  toProtoMsg(message: PoolMembership): PoolMembershipProtoMsg {
    return {
      typeUrl: "/kyve.query.v1beta1.PoolMembership",
      value: PoolMembership.encode(message).finish()
    };
  }
};