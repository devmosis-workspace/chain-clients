import { PoolStatus, poolStatusFromJSON } from "../../pool/v1beta1/pool";
import { Long, isSet } from "../../../helpers";
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
function createBaseBasicPool(): BasicPool {
  return {
    id: Long.UZERO,
    name: "",
    runtime: "",
    logo: "",
    operatingCost: Long.UZERO,
    uploadInterval: Long.UZERO,
    totalFunds: Long.UZERO,
    totalDelegation: Long.UZERO,
    status: 0
  };
}
export const BasicPool = {
  encode(message: BasicPool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
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
    if (!message.operatingCost.isZero()) {
      writer.uint32(40).uint64(message.operatingCost);
    }
    if (!message.uploadInterval.isZero()) {
      writer.uint32(48).uint64(message.uploadInterval);
    }
    if (!message.totalFunds.isZero()) {
      writer.uint32(56).uint64(message.totalFunds);
    }
    if (!message.totalDelegation.isZero()) {
      writer.uint32(64).uint64(message.totalDelegation);
    }
    if (message.status !== 0) {
      writer.uint32(72).int32(message.status);
    }
    return writer;
  },
  fromJSON(object: any): BasicPool {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      name: isSet(object.name) ? String(object.name) : "",
      runtime: isSet(object.runtime) ? String(object.runtime) : "",
      logo: isSet(object.logo) ? String(object.logo) : "",
      operatingCost: isSet(object.operatingCost) ? Long.fromValue(object.operatingCost) : Long.UZERO,
      uploadInterval: isSet(object.uploadInterval) ? Long.fromValue(object.uploadInterval) : Long.UZERO,
      totalFunds: isSet(object.totalFunds) ? Long.fromValue(object.totalFunds) : Long.UZERO,
      totalDelegation: isSet(object.totalDelegation) ? Long.fromValue(object.totalDelegation) : Long.UZERO,
      status: isSet(object.status) ? poolStatusFromJSON(object.status) : 0
    };
  },
  fromPartial(object: Partial<BasicPool>): BasicPool {
    const message = createBaseBasicPool();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.name = object.name ?? "";
    message.runtime = object.runtime ?? "";
    message.logo = object.logo ?? "";
    message.operatingCost = object.operatingCost !== undefined && object.operatingCost !== null ? Long.fromValue(object.operatingCost) : Long.UZERO;
    message.uploadInterval = object.uploadInterval !== undefined && object.uploadInterval !== null ? Long.fromValue(object.uploadInterval) : Long.UZERO;
    message.totalFunds = object.totalFunds !== undefined && object.totalFunds !== null ? Long.fromValue(object.totalFunds) : Long.UZERO;
    message.totalDelegation = object.totalDelegation !== undefined && object.totalDelegation !== null ? Long.fromValue(object.totalDelegation) : Long.UZERO;
    message.status = object.status ?? 0;
    return message;
  }
};
function createBaseFullStaker(): FullStaker {
  return {
    address: "",
    metadata: undefined,
    selfDelegation: Long.UZERO,
    selfDelegationUnbonding: Long.UZERO,
    totalDelegation: Long.UZERO,
    delegatorCount: Long.UZERO,
    pools: []
  };
}
export const FullStaker = {
  encode(message: FullStaker, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.metadata !== undefined) {
      StakerMetadata.encode(message.metadata, writer.uint32(18).fork()).ldelim();
    }
    if (!message.selfDelegation.isZero()) {
      writer.uint32(24).uint64(message.selfDelegation);
    }
    if (!message.selfDelegationUnbonding.isZero()) {
      writer.uint32(32).uint64(message.selfDelegationUnbonding);
    }
    if (!message.totalDelegation.isZero()) {
      writer.uint32(40).uint64(message.totalDelegation);
    }
    if (!message.delegatorCount.isZero()) {
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
      selfDelegation: isSet(object.selfDelegation) ? Long.fromValue(object.selfDelegation) : Long.UZERO,
      selfDelegationUnbonding: isSet(object.selfDelegationUnbonding) ? Long.fromValue(object.selfDelegationUnbonding) : Long.UZERO,
      totalDelegation: isSet(object.totalDelegation) ? Long.fromValue(object.totalDelegation) : Long.UZERO,
      delegatorCount: isSet(object.delegatorCount) ? Long.fromValue(object.delegatorCount) : Long.UZERO,
      pools: Array.isArray(object?.pools) ? object.pools.map((e: any) => PoolMembership.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<FullStaker>): FullStaker {
    const message = createBaseFullStaker();
    message.address = object.address ?? "";
    message.metadata = object.metadata !== undefined && object.metadata !== null ? StakerMetadata.fromPartial(object.metadata) : undefined;
    message.selfDelegation = object.selfDelegation !== undefined && object.selfDelegation !== null ? Long.fromValue(object.selfDelegation) : Long.UZERO;
    message.selfDelegationUnbonding = object.selfDelegationUnbonding !== undefined && object.selfDelegationUnbonding !== null ? Long.fromValue(object.selfDelegationUnbonding) : Long.UZERO;
    message.totalDelegation = object.totalDelegation !== undefined && object.totalDelegation !== null ? Long.fromValue(object.totalDelegation) : Long.UZERO;
    message.delegatorCount = object.delegatorCount !== undefined && object.delegatorCount !== null ? Long.fromValue(object.delegatorCount) : Long.UZERO;
    message.pools = object.pools?.map(e => PoolMembership.fromPartial(e)) || [];
    return message;
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
    pendingCommissionChange: undefined
  };
}
export const StakerMetadata = {
  encode(message: StakerMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.commission !== "") {
      writer.uint32(10).string(message.commission);
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
      pendingCommissionChange: isSet(object.pendingCommissionChange) ? CommissionChangeEntry.fromJSON(object.pendingCommissionChange) : undefined
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
    return message;
  }
};
function createBaseCommissionChangeEntry(): CommissionChangeEntry {
  return {
    commission: "",
    creationDate: Long.ZERO
  };
}
export const CommissionChangeEntry = {
  encode(message: CommissionChangeEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.commission !== "") {
      writer.uint32(10).string(message.commission);
    }
    if (!message.creationDate.isZero()) {
      writer.uint32(16).int64(message.creationDate);
    }
    return writer;
  },
  fromJSON(object: any): CommissionChangeEntry {
    return {
      commission: isSet(object.commission) ? String(object.commission) : "",
      creationDate: isSet(object.creationDate) ? Long.fromValue(object.creationDate) : Long.ZERO
    };
  },
  fromPartial(object: Partial<CommissionChangeEntry>): CommissionChangeEntry {
    const message = createBaseCommissionChangeEntry();
    message.commission = object.commission ?? "";
    message.creationDate = object.creationDate !== undefined && object.creationDate !== null ? Long.fromValue(object.creationDate) : Long.ZERO;
    return message;
  }
};
function createBasePoolMembership(): PoolMembership {
  return {
    pool: undefined,
    points: Long.UZERO,
    isLeaving: false,
    valaddress: "",
    balance: Long.UZERO
  };
}
export const PoolMembership = {
  encode(message: PoolMembership, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pool !== undefined) {
      BasicPool.encode(message.pool, writer.uint32(10).fork()).ldelim();
    }
    if (!message.points.isZero()) {
      writer.uint32(16).uint64(message.points);
    }
    if (message.isLeaving === true) {
      writer.uint32(24).bool(message.isLeaving);
    }
    if (message.valaddress !== "") {
      writer.uint32(34).string(message.valaddress);
    }
    if (!message.balance.isZero()) {
      writer.uint32(40).uint64(message.balance);
    }
    return writer;
  },
  fromJSON(object: any): PoolMembership {
    return {
      pool: isSet(object.pool) ? BasicPool.fromJSON(object.pool) : undefined,
      points: isSet(object.points) ? Long.fromValue(object.points) : Long.UZERO,
      isLeaving: isSet(object.isLeaving) ? Boolean(object.isLeaving) : false,
      valaddress: isSet(object.valaddress) ? String(object.valaddress) : "",
      balance: isSet(object.balance) ? Long.fromValue(object.balance) : Long.UZERO
    };
  },
  fromPartial(object: Partial<PoolMembership>): PoolMembership {
    const message = createBasePoolMembership();
    message.pool = object.pool !== undefined && object.pool !== null ? BasicPool.fromPartial(object.pool) : undefined;
    message.points = object.points !== undefined && object.points !== null ? Long.fromValue(object.points) : Long.UZERO;
    message.isLeaving = object.isLeaving ?? false;
    message.valaddress = object.valaddress ?? "";
    message.balance = object.balance !== undefined && object.balance !== null ? Long.fromValue(object.balance) : Long.UZERO;
    return message;
  }
};