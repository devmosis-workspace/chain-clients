import { Header, HeaderSDKType } from "../../../tendermint/types/types";
import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { Any, AnySDKType } from "../../../google/protobuf/any";
import { Duration, DurationSDKType } from "../../../google/protobuf/duration";
import { Coin, CoinSDKType } from "../../base/v1beta1/coin";
import { ValidatorUpdate, ValidatorUpdateSDKType } from "../../../tendermint/abci/types";
import { Long, isSet, fromJsonTimestamp } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** BondStatus is the status of a validator. */
export enum BondStatus {
  /** BOND_STATUS_UNSPECIFIED - UNSPECIFIED defines an invalid validator status. */
  BOND_STATUS_UNSPECIFIED = 0,
  /** BOND_STATUS_UNBONDED - UNBONDED defines a validator that is not bonded. */
  BOND_STATUS_UNBONDED = 1,
  /** BOND_STATUS_UNBONDING - UNBONDING defines a validator that is unbonding. */
  BOND_STATUS_UNBONDING = 2,
  /** BOND_STATUS_BONDED - BONDED defines a validator that is bonded. */
  BOND_STATUS_BONDED = 3,
  UNRECOGNIZED = -1,
}
export const BondStatusSDKType = BondStatus;
export function bondStatusFromJSON(object: any): BondStatus {
  switch (object) {
    case 0:
    case "BOND_STATUS_UNSPECIFIED":
      return BondStatus.BOND_STATUS_UNSPECIFIED;
    case 1:
    case "BOND_STATUS_UNBONDED":
      return BondStatus.BOND_STATUS_UNBONDED;
    case 2:
    case "BOND_STATUS_UNBONDING":
      return BondStatus.BOND_STATUS_UNBONDING;
    case 3:
    case "BOND_STATUS_BONDED":
      return BondStatus.BOND_STATUS_BONDED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return BondStatus.UNRECOGNIZED;
  }
}
export function bondStatusToJSON(object: BondStatus): string {
  switch (object) {
    case BondStatus.BOND_STATUS_UNSPECIFIED:
      return "BOND_STATUS_UNSPECIFIED";
    case BondStatus.BOND_STATUS_UNBONDED:
      return "BOND_STATUS_UNBONDED";
    case BondStatus.BOND_STATUS_UNBONDING:
      return "BOND_STATUS_UNBONDING";
    case BondStatus.BOND_STATUS_BONDED:
      return "BOND_STATUS_BONDED";
    case BondStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** InfractionType indicates the infraction type a validator commited. */
export enum InfractionType {
  /** INFRACTION_TYPE_UNSPECIFIED - UNSPECIFIED defines an empty infraction type. */
  INFRACTION_TYPE_UNSPECIFIED = 0,
  /** INFRACTION_TYPE_DOUBLE_SIGN - DOUBLE_SIGN defines a validator that double-signs a block. */
  INFRACTION_TYPE_DOUBLE_SIGN = 1,
  /** INFRACTION_TYPE_DOWNTIME - DOWNTIME defines a validator that missed signing too many blocks. */
  INFRACTION_TYPE_DOWNTIME = 2,
  UNRECOGNIZED = -1,
}
export const InfractionTypeSDKType = InfractionType;
export function infractionTypeFromJSON(object: any): InfractionType {
  switch (object) {
    case 0:
    case "INFRACTION_TYPE_UNSPECIFIED":
      return InfractionType.INFRACTION_TYPE_UNSPECIFIED;
    case 1:
    case "INFRACTION_TYPE_DOUBLE_SIGN":
      return InfractionType.INFRACTION_TYPE_DOUBLE_SIGN;
    case 2:
    case "INFRACTION_TYPE_DOWNTIME":
      return InfractionType.INFRACTION_TYPE_DOWNTIME;
    case -1:
    case "UNRECOGNIZED":
    default:
      return InfractionType.UNRECOGNIZED;
  }
}
export function infractionTypeToJSON(object: InfractionType): string {
  switch (object) {
    case InfractionType.INFRACTION_TYPE_UNSPECIFIED:
      return "INFRACTION_TYPE_UNSPECIFIED";
    case InfractionType.INFRACTION_TYPE_DOUBLE_SIGN:
      return "INFRACTION_TYPE_DOUBLE_SIGN";
    case InfractionType.INFRACTION_TYPE_DOWNTIME:
      return "INFRACTION_TYPE_DOWNTIME";
    case InfractionType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * HistoricalInfo contains header and validator information for a given block.
 * It is stored as part of staking module's state, which persists the `n` most
 * recent HistoricalInfo
 * (`n` is set by the staking module's `historical_entries` parameter).
 */
export interface HistoricalInfo {
  header?: Header;
  valset: Validator[];
}
/**
 * HistoricalInfo contains header and validator information for a given block.
 * It is stored as part of staking module's state, which persists the `n` most
 * recent HistoricalInfo
 * (`n` is set by the staking module's `historical_entries` parameter).
 */
export interface HistoricalInfoSDKType {
  header?: HeaderSDKType;
  valset: ValidatorSDKType[];
}
/**
 * CommissionRates defines the initial commission rates to be used for creating
 * a validator.
 */
export interface CommissionRates {
  /** rate is the commission rate charged to delegators, as a fraction. */
  rate: string;
  /** max_rate defines the maximum commission rate which validator can ever charge, as a fraction. */
  maxRate: string;
  /** max_change_rate defines the maximum daily increase of the validator commission, as a fraction. */
  maxChangeRate: string;
}
/**
 * CommissionRates defines the initial commission rates to be used for creating
 * a validator.
 */
export interface CommissionRatesSDKType {
  rate: string;
  max_rate: string;
  max_change_rate: string;
}
/** Commission defines commission parameters for a given validator. */
export interface Commission {
  /** commission_rates defines the initial commission rates to be used for creating a validator. */
  commissionRates?: CommissionRates;
  /** update_time is the last time the commission rate was changed. */
  updateTime?: Timestamp;
}
/** Commission defines commission parameters for a given validator. */
export interface CommissionSDKType {
  commission_rates?: CommissionRatesSDKType;
  update_time?: TimestampSDKType;
}
/** Description defines a validator description. */
export interface Description {
  /** moniker defines a human-readable name for the validator. */
  moniker: string;
  /** identity defines an optional identity signature (ex. UPort or Keybase). */
  identity: string;
  /** website defines an optional website link. */
  website: string;
  /** security_contact defines an optional email for security contact. */
  securityContact: string;
  /** details define other optional details. */
  details: string;
}
/** Description defines a validator description. */
export interface DescriptionSDKType {
  moniker: string;
  identity: string;
  website: string;
  security_contact: string;
  details: string;
}
/**
 * Validator defines a validator, together with the total amount of the
 * Validator's bond shares and their exchange rate to coins. Slashing results in
 * a decrease in the exchange rate, allowing correct calculation of future
 * undelegations without iterating over delegators. When coins are delegated to
 * this validator, the validator is credited with a delegation whose number of
 * bond shares is based on the amount of coins delegated divided by the current
 * exchange rate. Voting power can be calculated as total bonded shares
 * multiplied by exchange rate.
 */
export interface Validator {
  /** operator_address defines the address of the validator's operator; bech encoded in JSON. */
  operatorAddress: string;
  /** consensus_pubkey is the consensus public key of the validator, as a Protobuf Any. */
  consensusPubkey?: Any;
  /** jailed defined whether the validator has been jailed from bonded status or not. */
  jailed: boolean;
  /** status is the validator status (bonded/unbonding/unbonded). */
  status: BondStatus;
  /** tokens define the delegated tokens (incl. self-delegation). */
  tokens: string;
  /** delegator_shares defines total shares issued to a validator's delegators. */
  delegatorShares: string;
  /** description defines the description terms for the validator. */
  description?: Description;
  /** unbonding_height defines, if unbonding, the height at which this validator has begun unbonding. */
  unbondingHeight: Long;
  /** unbonding_time defines, if unbonding, the min time for the validator to complete unbonding. */
  unbondingTime?: Timestamp;
  /** commission defines the commission parameters. */
  commission?: Commission;
  /** min_self_delegation is the validator's self declared minimum self delegation. */
  minSelfDelegation: string;
  /** strictly positive if this validator's unbonding has been stopped by external modules */
  unbondingOnHoldRefCount: Long;
  /** list of unbonding ids, each uniquely identifing an unbonding of this validator */
  unbondingIds: Long[];
}
/**
 * Validator defines a validator, together with the total amount of the
 * Validator's bond shares and their exchange rate to coins. Slashing results in
 * a decrease in the exchange rate, allowing correct calculation of future
 * undelegations without iterating over delegators. When coins are delegated to
 * this validator, the validator is credited with a delegation whose number of
 * bond shares is based on the amount of coins delegated divided by the current
 * exchange rate. Voting power can be calculated as total bonded shares
 * multiplied by exchange rate.
 */
export interface ValidatorSDKType {
  operator_address: string;
  consensus_pubkey?: AnySDKType;
  jailed: boolean;
  status: BondStatus;
  tokens: string;
  delegator_shares: string;
  description?: DescriptionSDKType;
  unbonding_height: Long;
  unbonding_time?: TimestampSDKType;
  commission?: CommissionSDKType;
  min_self_delegation: string;
  unbonding_on_hold_ref_count: Long;
  unbonding_ids: Long[];
}
/** ValAddresses defines a repeated set of validator addresses. */
export interface ValAddresses {
  addresses: string[];
}
/** ValAddresses defines a repeated set of validator addresses. */
export interface ValAddressesSDKType {
  addresses: string[];
}
/**
 * DVPair is struct that just has a delegator-validator pair with no other data.
 * It is intended to be used as a marshalable pointer. For example, a DVPair can
 * be used to construct the key to getting an UnbondingDelegation from state.
 */
export interface DVPair {
  delegatorAddress: string;
  validatorAddress: string;
}
/**
 * DVPair is struct that just has a delegator-validator pair with no other data.
 * It is intended to be used as a marshalable pointer. For example, a DVPair can
 * be used to construct the key to getting an UnbondingDelegation from state.
 */
export interface DVPairSDKType {
  delegator_address: string;
  validator_address: string;
}
/** DVPairs defines an array of DVPair objects. */
export interface DVPairs {
  pairs: DVPair[];
}
/** DVPairs defines an array of DVPair objects. */
export interface DVPairsSDKType {
  pairs: DVPairSDKType[];
}
/**
 * DVVTriplet is struct that just has a delegator-validator-validator triplet
 * with no other data. It is intended to be used as a marshalable pointer. For
 * example, a DVVTriplet can be used to construct the key to getting a
 * Redelegation from state.
 */
export interface DVVTriplet {
  delegatorAddress: string;
  validatorSrcAddress: string;
  validatorDstAddress: string;
}
/**
 * DVVTriplet is struct that just has a delegator-validator-validator triplet
 * with no other data. It is intended to be used as a marshalable pointer. For
 * example, a DVVTriplet can be used to construct the key to getting a
 * Redelegation from state.
 */
export interface DVVTripletSDKType {
  delegator_address: string;
  validator_src_address: string;
  validator_dst_address: string;
}
/** DVVTriplets defines an array of DVVTriplet objects. */
export interface DVVTriplets {
  triplets: DVVTriplet[];
}
/** DVVTriplets defines an array of DVVTriplet objects. */
export interface DVVTripletsSDKType {
  triplets: DVVTripletSDKType[];
}
/**
 * Delegation represents the bond with tokens held by an account. It is
 * owned by one delegator, and is associated with the voting power of one
 * validator.
 */
export interface Delegation {
  /** delegator_address is the bech32-encoded address of the delegator. */
  delegatorAddress: string;
  /** validator_address is the bech32-encoded address of the validator. */
  validatorAddress: string;
  /** shares define the delegation shares received. */
  shares: string;
}
/**
 * Delegation represents the bond with tokens held by an account. It is
 * owned by one delegator, and is associated with the voting power of one
 * validator.
 */
export interface DelegationSDKType {
  delegator_address: string;
  validator_address: string;
  shares: string;
}
/**
 * UnbondingDelegation stores all of a single delegator's unbonding bonds
 * for a single validator in an time-ordered list.
 */
export interface UnbondingDelegation {
  /** delegator_address is the bech32-encoded address of the delegator. */
  delegatorAddress: string;
  /** validator_address is the bech32-encoded address of the validator. */
  validatorAddress: string;
  /** entries are the unbonding delegation entries. */
  entries: UnbondingDelegationEntry[];
}
/**
 * UnbondingDelegation stores all of a single delegator's unbonding bonds
 * for a single validator in an time-ordered list.
 */
export interface UnbondingDelegationSDKType {
  delegator_address: string;
  validator_address: string;
  entries: UnbondingDelegationEntrySDKType[];
}
/** UnbondingDelegationEntry defines an unbonding object with relevant metadata. */
export interface UnbondingDelegationEntry {
  /** creation_height is the height which the unbonding took place. */
  creationHeight: Long;
  /** completion_time is the unix time for unbonding completion. */
  completionTime?: Timestamp;
  /** initial_balance defines the tokens initially scheduled to receive at completion. */
  initialBalance: string;
  /** balance defines the tokens to receive at completion. */
  balance: string;
  /** Incrementing id that uniquely identifies this entry */
  unbondingId: Long;
  /** Strictly positive if this entry's unbonding has been stopped by external modules */
  unbondingOnHoldRefCount: Long;
}
/** UnbondingDelegationEntry defines an unbonding object with relevant metadata. */
export interface UnbondingDelegationEntrySDKType {
  creation_height: Long;
  completion_time?: TimestampSDKType;
  initial_balance: string;
  balance: string;
  unbonding_id: Long;
  unbonding_on_hold_ref_count: Long;
}
/** RedelegationEntry defines a redelegation object with relevant metadata. */
export interface RedelegationEntry {
  /** creation_height  defines the height which the redelegation took place. */
  creationHeight: Long;
  /** completion_time defines the unix time for redelegation completion. */
  completionTime?: Timestamp;
  /** initial_balance defines the initial balance when redelegation started. */
  initialBalance: string;
  /** shares_dst is the amount of destination-validator shares created by redelegation. */
  sharesDst: string;
  /** Incrementing id that uniquely identifies this entry */
  unbondingId: Long;
  /** Strictly positive if this entry's unbonding has been stopped by external modules */
  unbondingOnHoldRefCount: Long;
}
/** RedelegationEntry defines a redelegation object with relevant metadata. */
export interface RedelegationEntrySDKType {
  creation_height: Long;
  completion_time?: TimestampSDKType;
  initial_balance: string;
  shares_dst: string;
  unbonding_id: Long;
  unbonding_on_hold_ref_count: Long;
}
/**
 * Redelegation contains the list of a particular delegator's redelegating bonds
 * from a particular source validator to a particular destination validator.
 */
export interface Redelegation {
  /** delegator_address is the bech32-encoded address of the delegator. */
  delegatorAddress: string;
  /** validator_src_address is the validator redelegation source operator address. */
  validatorSrcAddress: string;
  /** validator_dst_address is the validator redelegation destination operator address. */
  validatorDstAddress: string;
  /** entries are the redelegation entries. */
  entries: RedelegationEntry[];
}
/**
 * Redelegation contains the list of a particular delegator's redelegating bonds
 * from a particular source validator to a particular destination validator.
 */
export interface RedelegationSDKType {
  delegator_address: string;
  validator_src_address: string;
  validator_dst_address: string;
  entries: RedelegationEntrySDKType[];
}
/** Params defines the parameters for the staking module. */
export interface Params {
  /** unbonding_time is the time duration of unbonding. */
  unbondingTime?: Duration;
  /** max_validators is the maximum number of validators. */
  maxValidators: number;
  /** max_entries is the max entries for either unbonding delegation or redelegation (per pair/trio). */
  maxEntries: number;
  /** historical_entries is the number of historical entries to persist. */
  historicalEntries: number;
  /** bond_denom defines the bondable coin denomination. */
  bondDenom: string;
}
/** Params defines the parameters for the staking module. */
export interface ParamsSDKType {
  unbonding_time?: DurationSDKType;
  max_validators: number;
  max_entries: number;
  historical_entries: number;
  bond_denom: string;
}
/**
 * DelegationResponse is equivalent to Delegation except that it contains a
 * balance in addition to shares which is more suitable for client responses.
 */
export interface DelegationResponse {
  delegation?: Delegation;
  balance?: Coin;
}
/**
 * DelegationResponse is equivalent to Delegation except that it contains a
 * balance in addition to shares which is more suitable for client responses.
 */
export interface DelegationResponseSDKType {
  delegation?: DelegationSDKType;
  balance?: CoinSDKType;
}
/**
 * RedelegationEntryResponse is equivalent to a RedelegationEntry except that it
 * contains a balance in addition to shares which is more suitable for client
 * responses.
 */
export interface RedelegationEntryResponse {
  redelegationEntry?: RedelegationEntry;
  balance: string;
}
/**
 * RedelegationEntryResponse is equivalent to a RedelegationEntry except that it
 * contains a balance in addition to shares which is more suitable for client
 * responses.
 */
export interface RedelegationEntryResponseSDKType {
  redelegation_entry?: RedelegationEntrySDKType;
  balance: string;
}
/**
 * RedelegationResponse is equivalent to a Redelegation except that its entries
 * contain a balance in addition to shares which is more suitable for client
 * responses.
 */
export interface RedelegationResponse {
  redelegation?: Redelegation;
  entries: RedelegationEntryResponse[];
}
/**
 * RedelegationResponse is equivalent to a Redelegation except that its entries
 * contain a balance in addition to shares which is more suitable for client
 * responses.
 */
export interface RedelegationResponseSDKType {
  redelegation?: RedelegationSDKType;
  entries: RedelegationEntryResponseSDKType[];
}
/**
 * Pool is used for tracking bonded and not-bonded token supply of the bond
 * denomination.
 */
export interface Pool {
  notBondedTokens: string;
  bondedTokens: string;
}
/**
 * Pool is used for tracking bonded and not-bonded token supply of the bond
 * denomination.
 */
export interface PoolSDKType {
  not_bonded_tokens: string;
  bonded_tokens: string;
}
/** ValidatorUpdates defines an array of abci.ValidatorUpdate objects. */
export interface ValidatorUpdates {
  updates: ValidatorUpdate[];
}
/** ValidatorUpdates defines an array of abci.ValidatorUpdate objects. */
export interface ValidatorUpdatesSDKType {
  updates: ValidatorUpdateSDKType[];
}
function createBaseHistoricalInfo(): HistoricalInfo {
  return {
    header: undefined,
    valset: []
  };
}
export const HistoricalInfo = {
  encode(message: HistoricalInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.header !== undefined) {
      Header.encode(message.header, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.valset) {
      Validator.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): HistoricalInfo {
    return {
      header: isSet(object.header) ? Header.fromJSON(object.header) : undefined,
      valset: Array.isArray(object?.valset) ? object.valset.map((e: any) => Validator.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<HistoricalInfo>): HistoricalInfo {
    const message = createBaseHistoricalInfo();
    message.header = object.header !== undefined && object.header !== null ? Header.fromPartial(object.header) : undefined;
    message.valset = object.valset?.map(e => Validator.fromPartial(e)) || [];
    return message;
  }
};
function createBaseCommissionRates(): CommissionRates {
  return {
    rate: "",
    maxRate: "",
    maxChangeRate: ""
  };
}
export const CommissionRates = {
  encode(message: CommissionRates, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.rate !== "") {
      writer.uint32(10).string(message.rate);
    }
    if (message.maxRate !== "") {
      writer.uint32(18).string(message.maxRate);
    }
    if (message.maxChangeRate !== "") {
      writer.uint32(26).string(message.maxChangeRate);
    }
    return writer;
  },
  fromJSON(object: any): CommissionRates {
    return {
      rate: isSet(object.rate) ? String(object.rate) : "",
      maxRate: isSet(object.maxRate) ? String(object.maxRate) : "",
      maxChangeRate: isSet(object.maxChangeRate) ? String(object.maxChangeRate) : ""
    };
  },
  fromPartial(object: Partial<CommissionRates>): CommissionRates {
    const message = createBaseCommissionRates();
    message.rate = object.rate ?? "";
    message.maxRate = object.maxRate ?? "";
    message.maxChangeRate = object.maxChangeRate ?? "";
    return message;
  }
};
function createBaseCommission(): Commission {
  return {
    commissionRates: undefined,
    updateTime: undefined
  };
}
export const Commission = {
  encode(message: Commission, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.commissionRates !== undefined) {
      CommissionRates.encode(message.commissionRates, writer.uint32(10).fork()).ldelim();
    }
    if (message.updateTime !== undefined) {
      Timestamp.encode(message.updateTime, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): Commission {
    return {
      commissionRates: isSet(object.commissionRates) ? CommissionRates.fromJSON(object.commissionRates) : undefined,
      updateTime: isSet(object.updateTime) ? fromJsonTimestamp(object.updateTime) : undefined
    };
  },
  fromPartial(object: Partial<Commission>): Commission {
    const message = createBaseCommission();
    message.commissionRates = object.commissionRates !== undefined && object.commissionRates !== null ? CommissionRates.fromPartial(object.commissionRates) : undefined;
    message.updateTime = object.updateTime !== undefined && object.updateTime !== null ? Timestamp.fromPartial(object.updateTime) : undefined;
    return message;
  }
};
function createBaseDescription(): Description {
  return {
    moniker: "",
    identity: "",
    website: "",
    securityContact: "",
    details: ""
  };
}
export const Description = {
  encode(message: Description, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.moniker !== "") {
      writer.uint32(10).string(message.moniker);
    }
    if (message.identity !== "") {
      writer.uint32(18).string(message.identity);
    }
    if (message.website !== "") {
      writer.uint32(26).string(message.website);
    }
    if (message.securityContact !== "") {
      writer.uint32(34).string(message.securityContact);
    }
    if (message.details !== "") {
      writer.uint32(42).string(message.details);
    }
    return writer;
  },
  fromJSON(object: any): Description {
    return {
      moniker: isSet(object.moniker) ? String(object.moniker) : "",
      identity: isSet(object.identity) ? String(object.identity) : "",
      website: isSet(object.website) ? String(object.website) : "",
      securityContact: isSet(object.securityContact) ? String(object.securityContact) : "",
      details: isSet(object.details) ? String(object.details) : ""
    };
  },
  fromPartial(object: Partial<Description>): Description {
    const message = createBaseDescription();
    message.moniker = object.moniker ?? "";
    message.identity = object.identity ?? "";
    message.website = object.website ?? "";
    message.securityContact = object.securityContact ?? "";
    message.details = object.details ?? "";
    return message;
  }
};
function createBaseValidator(): Validator {
  return {
    operatorAddress: "",
    consensusPubkey: undefined,
    jailed: false,
    status: 0,
    tokens: "",
    delegatorShares: "",
    description: undefined,
    unbondingHeight: Long.ZERO,
    unbondingTime: undefined,
    commission: undefined,
    minSelfDelegation: "",
    unbondingOnHoldRefCount: Long.ZERO,
    unbondingIds: []
  };
}
export const Validator = {
  encode(message: Validator, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.operatorAddress !== "") {
      writer.uint32(10).string(message.operatorAddress);
    }
    if (message.consensusPubkey !== undefined) {
      Any.encode(message.consensusPubkey, writer.uint32(18).fork()).ldelim();
    }
    if (message.jailed === true) {
      writer.uint32(24).bool(message.jailed);
    }
    if (message.status !== 0) {
      writer.uint32(32).int32(message.status);
    }
    if (message.tokens !== "") {
      writer.uint32(42).string(message.tokens);
    }
    if (message.delegatorShares !== "") {
      writer.uint32(50).string(message.delegatorShares);
    }
    if (message.description !== undefined) {
      Description.encode(message.description, writer.uint32(58).fork()).ldelim();
    }
    if (!message.unbondingHeight.isZero()) {
      writer.uint32(64).int64(message.unbondingHeight);
    }
    if (message.unbondingTime !== undefined) {
      Timestamp.encode(message.unbondingTime, writer.uint32(74).fork()).ldelim();
    }
    if (message.commission !== undefined) {
      Commission.encode(message.commission, writer.uint32(82).fork()).ldelim();
    }
    if (message.minSelfDelegation !== "") {
      writer.uint32(90).string(message.minSelfDelegation);
    }
    if (!message.unbondingOnHoldRefCount.isZero()) {
      writer.uint32(96).int64(message.unbondingOnHoldRefCount);
    }
    writer.uint32(106).fork();
    for (const v of message.unbondingIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },
  fromJSON(object: any): Validator {
    return {
      operatorAddress: isSet(object.operatorAddress) ? String(object.operatorAddress) : "",
      consensusPubkey: isSet(object.consensusPubkey) ? Any.fromJSON(object.consensusPubkey) : undefined,
      jailed: isSet(object.jailed) ? Boolean(object.jailed) : false,
      status: isSet(object.status) ? bondStatusFromJSON(object.status) : 0,
      tokens: isSet(object.tokens) ? String(object.tokens) : "",
      delegatorShares: isSet(object.delegatorShares) ? String(object.delegatorShares) : "",
      description: isSet(object.description) ? Description.fromJSON(object.description) : undefined,
      unbondingHeight: isSet(object.unbondingHeight) ? Long.fromValue(object.unbondingHeight) : Long.ZERO,
      unbondingTime: isSet(object.unbondingTime) ? fromJsonTimestamp(object.unbondingTime) : undefined,
      commission: isSet(object.commission) ? Commission.fromJSON(object.commission) : undefined,
      minSelfDelegation: isSet(object.minSelfDelegation) ? String(object.minSelfDelegation) : "",
      unbondingOnHoldRefCount: isSet(object.unbondingOnHoldRefCount) ? Long.fromValue(object.unbondingOnHoldRefCount) : Long.ZERO,
      unbondingIds: Array.isArray(object?.unbondingIds) ? object.unbondingIds.map((e: any) => Long.fromValue(e)) : []
    };
  },
  fromPartial(object: Partial<Validator>): Validator {
    const message = createBaseValidator();
    message.operatorAddress = object.operatorAddress ?? "";
    message.consensusPubkey = object.consensusPubkey !== undefined && object.consensusPubkey !== null ? Any.fromPartial(object.consensusPubkey) : undefined;
    message.jailed = object.jailed ?? false;
    message.status = object.status ?? 0;
    message.tokens = object.tokens ?? "";
    message.delegatorShares = object.delegatorShares ?? "";
    message.description = object.description !== undefined && object.description !== null ? Description.fromPartial(object.description) : undefined;
    message.unbondingHeight = object.unbondingHeight !== undefined && object.unbondingHeight !== null ? Long.fromValue(object.unbondingHeight) : Long.ZERO;
    message.unbondingTime = object.unbondingTime !== undefined && object.unbondingTime !== null ? Timestamp.fromPartial(object.unbondingTime) : undefined;
    message.commission = object.commission !== undefined && object.commission !== null ? Commission.fromPartial(object.commission) : undefined;
    message.minSelfDelegation = object.minSelfDelegation ?? "";
    message.unbondingOnHoldRefCount = object.unbondingOnHoldRefCount !== undefined && object.unbondingOnHoldRefCount !== null ? Long.fromValue(object.unbondingOnHoldRefCount) : Long.ZERO;
    message.unbondingIds = object.unbondingIds?.map(e => Long.fromValue(e)) || [];
    return message;
  }
};
function createBaseValAddresses(): ValAddresses {
  return {
    addresses: []
  };
}
export const ValAddresses = {
  encode(message: ValAddresses, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.addresses) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  fromJSON(object: any): ValAddresses {
    return {
      addresses: Array.isArray(object?.addresses) ? object.addresses.map((e: any) => String(e)) : []
    };
  },
  fromPartial(object: Partial<ValAddresses>): ValAddresses {
    const message = createBaseValAddresses();
    message.addresses = object.addresses?.map(e => e) || [];
    return message;
  }
};
function createBaseDVPair(): DVPair {
  return {
    delegatorAddress: "",
    validatorAddress: ""
  };
}
export const DVPair = {
  encode(message: DVPair, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }
    return writer;
  },
  fromJSON(object: any): DVPair {
    return {
      delegatorAddress: isSet(object.delegatorAddress) ? String(object.delegatorAddress) : "",
      validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : ""
    };
  },
  fromPartial(object: Partial<DVPair>): DVPair {
    const message = createBaseDVPair();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.validatorAddress = object.validatorAddress ?? "";
    return message;
  }
};
function createBaseDVPairs(): DVPairs {
  return {
    pairs: []
  };
}
export const DVPairs = {
  encode(message: DVPairs, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.pairs) {
      DVPair.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): DVPairs {
    return {
      pairs: Array.isArray(object?.pairs) ? object.pairs.map((e: any) => DVPair.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<DVPairs>): DVPairs {
    const message = createBaseDVPairs();
    message.pairs = object.pairs?.map(e => DVPair.fromPartial(e)) || [];
    return message;
  }
};
function createBaseDVVTriplet(): DVVTriplet {
  return {
    delegatorAddress: "",
    validatorSrcAddress: "",
    validatorDstAddress: ""
  };
}
export const DVVTriplet = {
  encode(message: DVVTriplet, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.validatorSrcAddress !== "") {
      writer.uint32(18).string(message.validatorSrcAddress);
    }
    if (message.validatorDstAddress !== "") {
      writer.uint32(26).string(message.validatorDstAddress);
    }
    return writer;
  },
  fromJSON(object: any): DVVTriplet {
    return {
      delegatorAddress: isSet(object.delegatorAddress) ? String(object.delegatorAddress) : "",
      validatorSrcAddress: isSet(object.validatorSrcAddress) ? String(object.validatorSrcAddress) : "",
      validatorDstAddress: isSet(object.validatorDstAddress) ? String(object.validatorDstAddress) : ""
    };
  },
  fromPartial(object: Partial<DVVTriplet>): DVVTriplet {
    const message = createBaseDVVTriplet();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.validatorSrcAddress = object.validatorSrcAddress ?? "";
    message.validatorDstAddress = object.validatorDstAddress ?? "";
    return message;
  }
};
function createBaseDVVTriplets(): DVVTriplets {
  return {
    triplets: []
  };
}
export const DVVTriplets = {
  encode(message: DVVTriplets, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.triplets) {
      DVVTriplet.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): DVVTriplets {
    return {
      triplets: Array.isArray(object?.triplets) ? object.triplets.map((e: any) => DVVTriplet.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<DVVTriplets>): DVVTriplets {
    const message = createBaseDVVTriplets();
    message.triplets = object.triplets?.map(e => DVVTriplet.fromPartial(e)) || [];
    return message;
  }
};
function createBaseDelegation(): Delegation {
  return {
    delegatorAddress: "",
    validatorAddress: "",
    shares: ""
  };
}
export const Delegation = {
  encode(message: Delegation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }
    if (message.shares !== "") {
      writer.uint32(26).string(message.shares);
    }
    return writer;
  },
  fromJSON(object: any): Delegation {
    return {
      delegatorAddress: isSet(object.delegatorAddress) ? String(object.delegatorAddress) : "",
      validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "",
      shares: isSet(object.shares) ? String(object.shares) : ""
    };
  },
  fromPartial(object: Partial<Delegation>): Delegation {
    const message = createBaseDelegation();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.validatorAddress = object.validatorAddress ?? "";
    message.shares = object.shares ?? "";
    return message;
  }
};
function createBaseUnbondingDelegation(): UnbondingDelegation {
  return {
    delegatorAddress: "",
    validatorAddress: "",
    entries: []
  };
}
export const UnbondingDelegation = {
  encode(message: UnbondingDelegation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }
    for (const v of message.entries) {
      UnbondingDelegationEntry.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): UnbondingDelegation {
    return {
      delegatorAddress: isSet(object.delegatorAddress) ? String(object.delegatorAddress) : "",
      validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "",
      entries: Array.isArray(object?.entries) ? object.entries.map((e: any) => UnbondingDelegationEntry.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<UnbondingDelegation>): UnbondingDelegation {
    const message = createBaseUnbondingDelegation();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.validatorAddress = object.validatorAddress ?? "";
    message.entries = object.entries?.map(e => UnbondingDelegationEntry.fromPartial(e)) || [];
    return message;
  }
};
function createBaseUnbondingDelegationEntry(): UnbondingDelegationEntry {
  return {
    creationHeight: Long.ZERO,
    completionTime: undefined,
    initialBalance: "",
    balance: "",
    unbondingId: Long.UZERO,
    unbondingOnHoldRefCount: Long.ZERO
  };
}
export const UnbondingDelegationEntry = {
  encode(message: UnbondingDelegationEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.creationHeight.isZero()) {
      writer.uint32(8).int64(message.creationHeight);
    }
    if (message.completionTime !== undefined) {
      Timestamp.encode(message.completionTime, writer.uint32(18).fork()).ldelim();
    }
    if (message.initialBalance !== "") {
      writer.uint32(26).string(message.initialBalance);
    }
    if (message.balance !== "") {
      writer.uint32(34).string(message.balance);
    }
    if (!message.unbondingId.isZero()) {
      writer.uint32(40).uint64(message.unbondingId);
    }
    if (!message.unbondingOnHoldRefCount.isZero()) {
      writer.uint32(48).int64(message.unbondingOnHoldRefCount);
    }
    return writer;
  },
  fromJSON(object: any): UnbondingDelegationEntry {
    return {
      creationHeight: isSet(object.creationHeight) ? Long.fromValue(object.creationHeight) : Long.ZERO,
      completionTime: isSet(object.completionTime) ? fromJsonTimestamp(object.completionTime) : undefined,
      initialBalance: isSet(object.initialBalance) ? String(object.initialBalance) : "",
      balance: isSet(object.balance) ? String(object.balance) : "",
      unbondingId: isSet(object.unbondingId) ? Long.fromValue(object.unbondingId) : Long.UZERO,
      unbondingOnHoldRefCount: isSet(object.unbondingOnHoldRefCount) ? Long.fromValue(object.unbondingOnHoldRefCount) : Long.ZERO
    };
  },
  fromPartial(object: Partial<UnbondingDelegationEntry>): UnbondingDelegationEntry {
    const message = createBaseUnbondingDelegationEntry();
    message.creationHeight = object.creationHeight !== undefined && object.creationHeight !== null ? Long.fromValue(object.creationHeight) : Long.ZERO;
    message.completionTime = object.completionTime !== undefined && object.completionTime !== null ? Timestamp.fromPartial(object.completionTime) : undefined;
    message.initialBalance = object.initialBalance ?? "";
    message.balance = object.balance ?? "";
    message.unbondingId = object.unbondingId !== undefined && object.unbondingId !== null ? Long.fromValue(object.unbondingId) : Long.UZERO;
    message.unbondingOnHoldRefCount = object.unbondingOnHoldRefCount !== undefined && object.unbondingOnHoldRefCount !== null ? Long.fromValue(object.unbondingOnHoldRefCount) : Long.ZERO;
    return message;
  }
};
function createBaseRedelegationEntry(): RedelegationEntry {
  return {
    creationHeight: Long.ZERO,
    completionTime: undefined,
    initialBalance: "",
    sharesDst: "",
    unbondingId: Long.UZERO,
    unbondingOnHoldRefCount: Long.ZERO
  };
}
export const RedelegationEntry = {
  encode(message: RedelegationEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.creationHeight.isZero()) {
      writer.uint32(8).int64(message.creationHeight);
    }
    if (message.completionTime !== undefined) {
      Timestamp.encode(message.completionTime, writer.uint32(18).fork()).ldelim();
    }
    if (message.initialBalance !== "") {
      writer.uint32(26).string(message.initialBalance);
    }
    if (message.sharesDst !== "") {
      writer.uint32(34).string(message.sharesDst);
    }
    if (!message.unbondingId.isZero()) {
      writer.uint32(40).uint64(message.unbondingId);
    }
    if (!message.unbondingOnHoldRefCount.isZero()) {
      writer.uint32(48).int64(message.unbondingOnHoldRefCount);
    }
    return writer;
  },
  fromJSON(object: any): RedelegationEntry {
    return {
      creationHeight: isSet(object.creationHeight) ? Long.fromValue(object.creationHeight) : Long.ZERO,
      completionTime: isSet(object.completionTime) ? fromJsonTimestamp(object.completionTime) : undefined,
      initialBalance: isSet(object.initialBalance) ? String(object.initialBalance) : "",
      sharesDst: isSet(object.sharesDst) ? String(object.sharesDst) : "",
      unbondingId: isSet(object.unbondingId) ? Long.fromValue(object.unbondingId) : Long.UZERO,
      unbondingOnHoldRefCount: isSet(object.unbondingOnHoldRefCount) ? Long.fromValue(object.unbondingOnHoldRefCount) : Long.ZERO
    };
  },
  fromPartial(object: Partial<RedelegationEntry>): RedelegationEntry {
    const message = createBaseRedelegationEntry();
    message.creationHeight = object.creationHeight !== undefined && object.creationHeight !== null ? Long.fromValue(object.creationHeight) : Long.ZERO;
    message.completionTime = object.completionTime !== undefined && object.completionTime !== null ? Timestamp.fromPartial(object.completionTime) : undefined;
    message.initialBalance = object.initialBalance ?? "";
    message.sharesDst = object.sharesDst ?? "";
    message.unbondingId = object.unbondingId !== undefined && object.unbondingId !== null ? Long.fromValue(object.unbondingId) : Long.UZERO;
    message.unbondingOnHoldRefCount = object.unbondingOnHoldRefCount !== undefined && object.unbondingOnHoldRefCount !== null ? Long.fromValue(object.unbondingOnHoldRefCount) : Long.ZERO;
    return message;
  }
};
function createBaseRedelegation(): Redelegation {
  return {
    delegatorAddress: "",
    validatorSrcAddress: "",
    validatorDstAddress: "",
    entries: []
  };
}
export const Redelegation = {
  encode(message: Redelegation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.validatorSrcAddress !== "") {
      writer.uint32(18).string(message.validatorSrcAddress);
    }
    if (message.validatorDstAddress !== "") {
      writer.uint32(26).string(message.validatorDstAddress);
    }
    for (const v of message.entries) {
      RedelegationEntry.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): Redelegation {
    return {
      delegatorAddress: isSet(object.delegatorAddress) ? String(object.delegatorAddress) : "",
      validatorSrcAddress: isSet(object.validatorSrcAddress) ? String(object.validatorSrcAddress) : "",
      validatorDstAddress: isSet(object.validatorDstAddress) ? String(object.validatorDstAddress) : "",
      entries: Array.isArray(object?.entries) ? object.entries.map((e: any) => RedelegationEntry.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<Redelegation>): Redelegation {
    const message = createBaseRedelegation();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.validatorSrcAddress = object.validatorSrcAddress ?? "";
    message.validatorDstAddress = object.validatorDstAddress ?? "";
    message.entries = object.entries?.map(e => RedelegationEntry.fromPartial(e)) || [];
    return message;
  }
};
function createBaseParams(): Params {
  return {
    unbondingTime: undefined,
    maxValidators: 0,
    maxEntries: 0,
    historicalEntries: 0,
    bondDenom: ""
  };
}
export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.unbondingTime !== undefined) {
      Duration.encode(message.unbondingTime, writer.uint32(10).fork()).ldelim();
    }
    if (message.maxValidators !== 0) {
      writer.uint32(16).uint32(message.maxValidators);
    }
    if (message.maxEntries !== 0) {
      writer.uint32(24).uint32(message.maxEntries);
    }
    if (message.historicalEntries !== 0) {
      writer.uint32(32).uint32(message.historicalEntries);
    }
    if (message.bondDenom !== "") {
      writer.uint32(42).string(message.bondDenom);
    }
    return writer;
  },
  fromJSON(object: any): Params {
    return {
      unbondingTime: isSet(object.unbondingTime) ? Duration.fromJSON(object.unbondingTime) : undefined,
      maxValidators: isSet(object.maxValidators) ? Number(object.maxValidators) : 0,
      maxEntries: isSet(object.maxEntries) ? Number(object.maxEntries) : 0,
      historicalEntries: isSet(object.historicalEntries) ? Number(object.historicalEntries) : 0,
      bondDenom: isSet(object.bondDenom) ? String(object.bondDenom) : ""
    };
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.unbondingTime = object.unbondingTime !== undefined && object.unbondingTime !== null ? Duration.fromPartial(object.unbondingTime) : undefined;
    message.maxValidators = object.maxValidators ?? 0;
    message.maxEntries = object.maxEntries ?? 0;
    message.historicalEntries = object.historicalEntries ?? 0;
    message.bondDenom = object.bondDenom ?? "";
    return message;
  }
};
function createBaseDelegationResponse(): DelegationResponse {
  return {
    delegation: undefined,
    balance: undefined
  };
}
export const DelegationResponse = {
  encode(message: DelegationResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegation !== undefined) {
      Delegation.encode(message.delegation, writer.uint32(10).fork()).ldelim();
    }
    if (message.balance !== undefined) {
      Coin.encode(message.balance, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): DelegationResponse {
    return {
      delegation: isSet(object.delegation) ? Delegation.fromJSON(object.delegation) : undefined,
      balance: isSet(object.balance) ? Coin.fromJSON(object.balance) : undefined
    };
  },
  fromPartial(object: Partial<DelegationResponse>): DelegationResponse {
    const message = createBaseDelegationResponse();
    message.delegation = object.delegation !== undefined && object.delegation !== null ? Delegation.fromPartial(object.delegation) : undefined;
    message.balance = object.balance !== undefined && object.balance !== null ? Coin.fromPartial(object.balance) : undefined;
    return message;
  }
};
function createBaseRedelegationEntryResponse(): RedelegationEntryResponse {
  return {
    redelegationEntry: undefined,
    balance: ""
  };
}
export const RedelegationEntryResponse = {
  encode(message: RedelegationEntryResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.redelegationEntry !== undefined) {
      RedelegationEntry.encode(message.redelegationEntry, writer.uint32(10).fork()).ldelim();
    }
    if (message.balance !== "") {
      writer.uint32(34).string(message.balance);
    }
    return writer;
  },
  fromJSON(object: any): RedelegationEntryResponse {
    return {
      redelegationEntry: isSet(object.redelegationEntry) ? RedelegationEntry.fromJSON(object.redelegationEntry) : undefined,
      balance: isSet(object.balance) ? String(object.balance) : ""
    };
  },
  fromPartial(object: Partial<RedelegationEntryResponse>): RedelegationEntryResponse {
    const message = createBaseRedelegationEntryResponse();
    message.redelegationEntry = object.redelegationEntry !== undefined && object.redelegationEntry !== null ? RedelegationEntry.fromPartial(object.redelegationEntry) : undefined;
    message.balance = object.balance ?? "";
    return message;
  }
};
function createBaseRedelegationResponse(): RedelegationResponse {
  return {
    redelegation: undefined,
    entries: []
  };
}
export const RedelegationResponse = {
  encode(message: RedelegationResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.redelegation !== undefined) {
      Redelegation.encode(message.redelegation, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.entries) {
      RedelegationEntryResponse.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): RedelegationResponse {
    return {
      redelegation: isSet(object.redelegation) ? Redelegation.fromJSON(object.redelegation) : undefined,
      entries: Array.isArray(object?.entries) ? object.entries.map((e: any) => RedelegationEntryResponse.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<RedelegationResponse>): RedelegationResponse {
    const message = createBaseRedelegationResponse();
    message.redelegation = object.redelegation !== undefined && object.redelegation !== null ? Redelegation.fromPartial(object.redelegation) : undefined;
    message.entries = object.entries?.map(e => RedelegationEntryResponse.fromPartial(e)) || [];
    return message;
  }
};
function createBasePool(): Pool {
  return {
    notBondedTokens: "",
    bondedTokens: ""
  };
}
export const Pool = {
  encode(message: Pool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.notBondedTokens !== "") {
      writer.uint32(10).string(message.notBondedTokens);
    }
    if (message.bondedTokens !== "") {
      writer.uint32(18).string(message.bondedTokens);
    }
    return writer;
  },
  fromJSON(object: any): Pool {
    return {
      notBondedTokens: isSet(object.notBondedTokens) ? String(object.notBondedTokens) : "",
      bondedTokens: isSet(object.bondedTokens) ? String(object.bondedTokens) : ""
    };
  },
  fromPartial(object: Partial<Pool>): Pool {
    const message = createBasePool();
    message.notBondedTokens = object.notBondedTokens ?? "";
    message.bondedTokens = object.bondedTokens ?? "";
    return message;
  }
};
function createBaseValidatorUpdates(): ValidatorUpdates {
  return {
    updates: []
  };
}
export const ValidatorUpdates = {
  encode(message: ValidatorUpdates, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.updates) {
      ValidatorUpdate.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): ValidatorUpdates {
    return {
      updates: Array.isArray(object?.updates) ? object.updates.map((e: any) => ValidatorUpdate.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<ValidatorUpdates>): ValidatorUpdates {
    const message = createBaseValidatorUpdates();
    message.updates = object.updates?.map(e => ValidatorUpdate.fromPartial(e)) || [];
    return message;
  }
};