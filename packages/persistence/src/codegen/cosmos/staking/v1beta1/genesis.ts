import { Params, ParamsAmino, ParamsSDKType, Validator, ValidatorAmino, ValidatorSDKType, Delegation, DelegationAmino, DelegationSDKType, UnbondingDelegation, UnbondingDelegationAmino, UnbondingDelegationSDKType, Redelegation, RedelegationAmino, RedelegationSDKType, TokenizeShareRecord, TokenizeShareRecordAmino, TokenizeShareRecordSDKType } from "./staking";
import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64, base64FromBytes, fromJsonTimestamp } from "../../../helpers";
/** GenesisState defines the staking module's genesis state. */
export interface GenesisState {
  /** params defines all the parameters of related to deposit. */
  params: Params;
  /**
   * last_total_power tracks the total amounts of bonded tokens recorded during
   * the previous end block.
   */
  lastTotalPower: Uint8Array;
  /**
   * last_validator_powers is a special index that provides a historical list
   * of the last-block's bonded validators.
   */
  lastValidatorPowers: LastValidatorPower[];
  /** delegations defines the validator set at genesis. */
  validators: Validator[];
  /** delegations defines the delegations active at genesis. */
  delegations: Delegation[];
  /** unbonding_delegations defines the unbonding delegations active at genesis. */
  unbondingDelegations: UnbondingDelegation[];
  /** redelegations defines the redelegations active at genesis. */
  redelegations: Redelegation[];
  exported: boolean;
  /**
   * store tokenize share records to provide reward to record owners.
   * 
   * Since: cosmos-sdk 0.47-lsm
   */
  tokenizeShareRecords: TokenizeShareRecord[];
  /**
   * last tokenize share record id, used for next share record id calculation.
   * 
   * Since: cosmos-sdk 0.47-lsm
   */
  lastTokenizeShareRecordId: bigint;
  /**
   * total number of liquid staked tokens at genesis.
   * 
   * Since: cosmos-sdk 0.47-lsm
   */
  totalLiquidStakedTokens: Uint8Array;
  /**
   * tokenize shares locks at genesis.
   * 
   * Since: cosmos-sdk 0.47-lsm
   */
  tokenizeShareLocks: TokenizeShareLock[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/cosmos.staking.v1beta1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the staking module's genesis state. */
export interface GenesisStateAmino {
  /** params defines all the parameters of related to deposit. */
  params: ParamsAmino;
  /**
   * last_total_power tracks the total amounts of bonded tokens recorded during
   * the previous end block.
   */
  last_total_power: string;
  /**
   * last_validator_powers is a special index that provides a historical list
   * of the last-block's bonded validators.
   */
  last_validator_powers: LastValidatorPowerAmino[];
  /** delegations defines the validator set at genesis. */
  validators: ValidatorAmino[];
  /** delegations defines the delegations active at genesis. */
  delegations: DelegationAmino[];
  /** unbonding_delegations defines the unbonding delegations active at genesis. */
  unbonding_delegations: UnbondingDelegationAmino[];
  /** redelegations defines the redelegations active at genesis. */
  redelegations: RedelegationAmino[];
  exported?: boolean;
  /**
   * store tokenize share records to provide reward to record owners.
   * 
   * Since: cosmos-sdk 0.47-lsm
   */
  tokenize_share_records: TokenizeShareRecordAmino[];
  /**
   * last tokenize share record id, used for next share record id calculation.
   * 
   * Since: cosmos-sdk 0.47-lsm
   */
  last_tokenize_share_record_id?: string;
  /**
   * total number of liquid staked tokens at genesis.
   * 
   * Since: cosmos-sdk 0.47-lsm
   */
  total_liquid_staked_tokens: string;
  /**
   * tokenize shares locks at genesis.
   * 
   * Since: cosmos-sdk 0.47-lsm
   */
  tokenize_share_locks: TokenizeShareLockAmino[];
}
export interface GenesisStateAminoMsg {
  type: "cosmos-sdk/GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the staking module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  last_total_power: Uint8Array;
  last_validator_powers: LastValidatorPowerSDKType[];
  validators: ValidatorSDKType[];
  delegations: DelegationSDKType[];
  unbonding_delegations: UnbondingDelegationSDKType[];
  redelegations: RedelegationSDKType[];
  exported: boolean;
  tokenize_share_records: TokenizeShareRecordSDKType[];
  last_tokenize_share_record_id: bigint;
  total_liquid_staked_tokens: Uint8Array;
  tokenize_share_locks: TokenizeShareLockSDKType[];
}
/**
 * TokenizeSharesLock required for specifying account locks at genesis.
 * 
 * Since: cosmos-sdk 0.47-lsm
 */
export interface TokenizeShareLock {
  /** Address of the account that is locked. */
  address: string;
  /** Status of the lock (LOCKED or LOCK_EXPIRING) */
  status: string;
  /** Completion time if the lock is expiring. */
  completionTime: Timestamp;
}
export interface TokenizeShareLockProtoMsg {
  typeUrl: "/cosmos.staking.v1beta1.TokenizeShareLock";
  value: Uint8Array;
}
/**
 * TokenizeSharesLock required for specifying account locks at genesis.
 * 
 * Since: cosmos-sdk 0.47-lsm
 */
export interface TokenizeShareLockAmino {
  /** Address of the account that is locked. */
  address?: string;
  /** Status of the lock (LOCKED or LOCK_EXPIRING) */
  status?: string;
  /** Completion time if the lock is expiring. */
  completion_time?: string;
}
export interface TokenizeShareLockAminoMsg {
  type: "cosmos-sdk/TokenizeShareLock";
  value: TokenizeShareLockAmino;
}
/**
 * TokenizeSharesLock required for specifying account locks at genesis.
 * 
 * Since: cosmos-sdk 0.47-lsm
 */
export interface TokenizeShareLockSDKType {
  address: string;
  status: string;
  completion_time: TimestampSDKType;
}
/** LastValidatorPower required for validator set update logic. */
export interface LastValidatorPower {
  /** address is the address of the validator. */
  address: string;
  /** power defines the power of the validator. */
  power: bigint;
}
export interface LastValidatorPowerProtoMsg {
  typeUrl: "/cosmos.staking.v1beta1.LastValidatorPower";
  value: Uint8Array;
}
/** LastValidatorPower required for validator set update logic. */
export interface LastValidatorPowerAmino {
  /** address is the address of the validator. */
  address?: string;
  /** power defines the power of the validator. */
  power?: string;
}
export interface LastValidatorPowerAminoMsg {
  type: "cosmos-sdk/LastValidatorPower";
  value: LastValidatorPowerAmino;
}
/** LastValidatorPower required for validator set update logic. */
export interface LastValidatorPowerSDKType {
  address: string;
  power: bigint;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    lastTotalPower: new Uint8Array(),
    lastValidatorPowers: [],
    validators: [],
    delegations: [],
    unbondingDelegations: [],
    redelegations: [],
    exported: false,
    tokenizeShareRecords: [],
    lastTokenizeShareRecordId: BigInt(0),
    totalLiquidStakedTokens: new Uint8Array(),
    tokenizeShareLocks: []
  };
}
export const GenesisState = {
  typeUrl: "/cosmos.staking.v1beta1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.lastTotalPower.length !== 0) {
      writer.uint32(18).bytes(message.lastTotalPower);
    }
    for (const v of message.lastValidatorPowers) {
      LastValidatorPower.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.validators) {
      Validator.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.delegations) {
      Delegation.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.unbondingDelegations) {
      UnbondingDelegation.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.redelegations) {
      Redelegation.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.exported === true) {
      writer.uint32(64).bool(message.exported);
    }
    for (const v of message.tokenizeShareRecords) {
      TokenizeShareRecord.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    if (message.lastTokenizeShareRecordId !== BigInt(0)) {
      writer.uint32(80).uint64(message.lastTokenizeShareRecordId);
    }
    if (message.totalLiquidStakedTokens.length !== 0) {
      writer.uint32(90).bytes(message.totalLiquidStakedTokens);
    }
    for (const v of message.tokenizeShareLocks) {
      TokenizeShareLock.encode(v!, writer.uint32(98).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      lastTotalPower: isSet(object.lastTotalPower) ? bytesFromBase64(object.lastTotalPower) : new Uint8Array(),
      lastValidatorPowers: Array.isArray(object?.lastValidatorPowers) ? object.lastValidatorPowers.map((e: any) => LastValidatorPower.fromJSON(e)) : [],
      validators: Array.isArray(object?.validators) ? object.validators.map((e: any) => Validator.fromJSON(e)) : [],
      delegations: Array.isArray(object?.delegations) ? object.delegations.map((e: any) => Delegation.fromJSON(e)) : [],
      unbondingDelegations: Array.isArray(object?.unbondingDelegations) ? object.unbondingDelegations.map((e: any) => UnbondingDelegation.fromJSON(e)) : [],
      redelegations: Array.isArray(object?.redelegations) ? object.redelegations.map((e: any) => Redelegation.fromJSON(e)) : [],
      exported: isSet(object.exported) ? Boolean(object.exported) : false,
      tokenizeShareRecords: Array.isArray(object?.tokenizeShareRecords) ? object.tokenizeShareRecords.map((e: any) => TokenizeShareRecord.fromJSON(e)) : [],
      lastTokenizeShareRecordId: isSet(object.lastTokenizeShareRecordId) ? BigInt(object.lastTokenizeShareRecordId.toString()) : BigInt(0),
      totalLiquidStakedTokens: isSet(object.totalLiquidStakedTokens) ? bytesFromBase64(object.totalLiquidStakedTokens) : new Uint8Array(),
      tokenizeShareLocks: Array.isArray(object?.tokenizeShareLocks) ? object.tokenizeShareLocks.map((e: any) => TokenizeShareLock.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.lastTotalPower = object.lastTotalPower ?? new Uint8Array();
    message.lastValidatorPowers = object.lastValidatorPowers?.map(e => LastValidatorPower.fromPartial(e)) || [];
    message.validators = object.validators?.map(e => Validator.fromPartial(e)) || [];
    message.delegations = object.delegations?.map(e => Delegation.fromPartial(e)) || [];
    message.unbondingDelegations = object.unbondingDelegations?.map(e => UnbondingDelegation.fromPartial(e)) || [];
    message.redelegations = object.redelegations?.map(e => Redelegation.fromPartial(e)) || [];
    message.exported = object.exported ?? false;
    message.tokenizeShareRecords = object.tokenizeShareRecords?.map(e => TokenizeShareRecord.fromPartial(e)) || [];
    message.lastTokenizeShareRecordId = object.lastTokenizeShareRecordId !== undefined && object.lastTokenizeShareRecordId !== null ? BigInt(object.lastTokenizeShareRecordId.toString()) : BigInt(0);
    message.totalLiquidStakedTokens = object.totalLiquidStakedTokens ?? new Uint8Array();
    message.tokenizeShareLocks = object.tokenizeShareLocks?.map(e => TokenizeShareLock.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    if (object.last_total_power !== undefined && object.last_total_power !== null) {
      message.lastTotalPower = bytesFromBase64(object.last_total_power);
    }
    message.lastValidatorPowers = object.last_validator_powers?.map(e => LastValidatorPower.fromAmino(e)) || [];
    message.validators = object.validators?.map(e => Validator.fromAmino(e)) || [];
    message.delegations = object.delegations?.map(e => Delegation.fromAmino(e)) || [];
    message.unbondingDelegations = object.unbonding_delegations?.map(e => UnbondingDelegation.fromAmino(e)) || [];
    message.redelegations = object.redelegations?.map(e => Redelegation.fromAmino(e)) || [];
    if (object.exported !== undefined && object.exported !== null) {
      message.exported = object.exported;
    }
    message.tokenizeShareRecords = object.tokenize_share_records?.map(e => TokenizeShareRecord.fromAmino(e)) || [];
    if (object.last_tokenize_share_record_id !== undefined && object.last_tokenize_share_record_id !== null) {
      message.lastTokenizeShareRecordId = BigInt(object.last_tokenize_share_record_id);
    }
    if (object.total_liquid_staked_tokens !== undefined && object.total_liquid_staked_tokens !== null) {
      message.totalLiquidStakedTokens = bytesFromBase64(object.total_liquid_staked_tokens);
    }
    message.tokenizeShareLocks = object.tokenize_share_locks?.map(e => TokenizeShareLock.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : Params.fromPartial({});
    obj.last_total_power = message.lastTotalPower ? base64FromBytes(message.lastTotalPower) : "";
    if (message.lastValidatorPowers) {
      obj.last_validator_powers = message.lastValidatorPowers.map(e => e ? LastValidatorPower.toAmino(e) : undefined);
    } else {
      obj.last_validator_powers = [];
    }
    if (message.validators) {
      obj.validators = message.validators.map(e => e ? Validator.toAmino(e) : undefined);
    } else {
      obj.validators = [];
    }
    if (message.delegations) {
      obj.delegations = message.delegations.map(e => e ? Delegation.toAmino(e) : undefined);
    } else {
      obj.delegations = [];
    }
    if (message.unbondingDelegations) {
      obj.unbonding_delegations = message.unbondingDelegations.map(e => e ? UnbondingDelegation.toAmino(e) : undefined);
    } else {
      obj.unbonding_delegations = [];
    }
    if (message.redelegations) {
      obj.redelegations = message.redelegations.map(e => e ? Redelegation.toAmino(e) : undefined);
    } else {
      obj.redelegations = [];
    }
    obj.exported = message.exported;
    if (message.tokenizeShareRecords) {
      obj.tokenize_share_records = message.tokenizeShareRecords.map(e => e ? TokenizeShareRecord.toAmino(e) : undefined);
    } else {
      obj.tokenize_share_records = [];
    }
    obj.last_tokenize_share_record_id = message.lastTokenizeShareRecordId ? message.lastTokenizeShareRecordId.toString() : undefined;
    obj.total_liquid_staked_tokens = message.totalLiquidStakedTokens ? base64FromBytes(message.totalLiquidStakedTokens) : "";
    if (message.tokenizeShareLocks) {
      obj.tokenize_share_locks = message.tokenizeShareLocks.map(e => e ? TokenizeShareLock.toAmino(e) : undefined);
    } else {
      obj.tokenize_share_locks = [];
    }
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  toAminoMsg(message: GenesisState): GenesisStateAminoMsg {
    return {
      type: "cosmos-sdk/GenesisState",
      value: GenesisState.toAmino(message)
    };
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
function createBaseTokenizeShareLock(): TokenizeShareLock {
  return {
    address: "",
    status: "",
    completionTime: Timestamp.fromPartial({})
  };
}
export const TokenizeShareLock = {
  typeUrl: "/cosmos.staking.v1beta1.TokenizeShareLock",
  encode(message: TokenizeShareLock, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.status !== "") {
      writer.uint32(18).string(message.status);
    }
    if (message.completionTime !== undefined) {
      Timestamp.encode(message.completionTime, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): TokenizeShareLock {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      status: isSet(object.status) ? String(object.status) : "",
      completionTime: isSet(object.completionTime) ? fromJsonTimestamp(object.completionTime) : undefined
    };
  },
  fromPartial(object: Partial<TokenizeShareLock>): TokenizeShareLock {
    const message = createBaseTokenizeShareLock();
    message.address = object.address ?? "";
    message.status = object.status ?? "";
    message.completionTime = object.completionTime !== undefined && object.completionTime !== null ? Timestamp.fromPartial(object.completionTime) : undefined;
    return message;
  },
  fromAmino(object: TokenizeShareLockAmino): TokenizeShareLock {
    const message = createBaseTokenizeShareLock();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    if (object.completion_time !== undefined && object.completion_time !== null) {
      message.completionTime = Timestamp.fromAmino(object.completion_time);
    }
    return message;
  },
  toAmino(message: TokenizeShareLock): TokenizeShareLockAmino {
    const obj: any = {};
    obj.address = message.address;
    obj.status = message.status;
    obj.completion_time = message.completionTime ? Timestamp.toAmino(message.completionTime) : undefined;
    return obj;
  },
  fromAminoMsg(object: TokenizeShareLockAminoMsg): TokenizeShareLock {
    return TokenizeShareLock.fromAmino(object.value);
  },
  toAminoMsg(message: TokenizeShareLock): TokenizeShareLockAminoMsg {
    return {
      type: "cosmos-sdk/TokenizeShareLock",
      value: TokenizeShareLock.toAmino(message)
    };
  },
  fromProtoMsg(message: TokenizeShareLockProtoMsg): TokenizeShareLock {
    return TokenizeShareLock.decode(message.value);
  },
  toProto(message: TokenizeShareLock): Uint8Array {
    return TokenizeShareLock.encode(message).finish();
  },
  toProtoMsg(message: TokenizeShareLock): TokenizeShareLockProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.TokenizeShareLock",
      value: TokenizeShareLock.encode(message).finish()
    };
  }
};
function createBaseLastValidatorPower(): LastValidatorPower {
  return {
    address: "",
    power: BigInt(0)
  };
}
export const LastValidatorPower = {
  typeUrl: "/cosmos.staking.v1beta1.LastValidatorPower",
  encode(message: LastValidatorPower, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.power !== BigInt(0)) {
      writer.uint32(16).int64(message.power);
    }
    return writer;
  },
  fromJSON(object: any): LastValidatorPower {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      power: isSet(object.power) ? BigInt(object.power.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<LastValidatorPower>): LastValidatorPower {
    const message = createBaseLastValidatorPower();
    message.address = object.address ?? "";
    message.power = object.power !== undefined && object.power !== null ? BigInt(object.power.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: LastValidatorPowerAmino): LastValidatorPower {
    const message = createBaseLastValidatorPower();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.power !== undefined && object.power !== null) {
      message.power = BigInt(object.power);
    }
    return message;
  },
  toAmino(message: LastValidatorPower): LastValidatorPowerAmino {
    const obj: any = {};
    obj.address = message.address;
    obj.power = message.power ? message.power.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: LastValidatorPowerAminoMsg): LastValidatorPower {
    return LastValidatorPower.fromAmino(object.value);
  },
  toAminoMsg(message: LastValidatorPower): LastValidatorPowerAminoMsg {
    return {
      type: "cosmos-sdk/LastValidatorPower",
      value: LastValidatorPower.toAmino(message)
    };
  },
  fromProtoMsg(message: LastValidatorPowerProtoMsg): LastValidatorPower {
    return LastValidatorPower.decode(message.value);
  },
  toProto(message: LastValidatorPower): Uint8Array {
    return LastValidatorPower.encode(message).finish();
  },
  toProtoMsg(message: LastValidatorPower): LastValidatorPowerProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.LastValidatorPower",
      value: LastValidatorPower.encode(message).finish()
    };
  }
};