import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { SyntheticLock, SyntheticLockSDKType } from "../lockup/lock";
import { Long, isSet } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
/**
 * SuperfluidAssetType indicates whether the superfluid asset is
 * a native token, lp share of a pool, or concentrated share of a pool
 */
export enum SuperfluidAssetType {
  SuperfluidAssetTypeNative = 0,
  SuperfluidAssetTypeLPShare = 1,
  SuperfluidAssetTypeConcentratedShare = 2,
  UNRECOGNIZED = -1,
}
export const SuperfluidAssetTypeSDKType = SuperfluidAssetType;
export function superfluidAssetTypeFromJSON(object: any): SuperfluidAssetType {
  switch (object) {
    case 0:
    case "SuperfluidAssetTypeNative":
      return SuperfluidAssetType.SuperfluidAssetTypeNative;
    case 1:
    case "SuperfluidAssetTypeLPShare":
      return SuperfluidAssetType.SuperfluidAssetTypeLPShare;
    case 2:
    case "SuperfluidAssetTypeConcentratedShare":
      return SuperfluidAssetType.SuperfluidAssetTypeConcentratedShare;
    case -1:
    case "UNRECOGNIZED":
    default:
      return SuperfluidAssetType.UNRECOGNIZED;
  }
}
export function superfluidAssetTypeToJSON(object: SuperfluidAssetType): string {
  switch (object) {
    case SuperfluidAssetType.SuperfluidAssetTypeNative:
      return "SuperfluidAssetTypeNative";
    case SuperfluidAssetType.SuperfluidAssetTypeLPShare:
      return "SuperfluidAssetTypeLPShare";
    case SuperfluidAssetType.SuperfluidAssetTypeConcentratedShare:
      return "SuperfluidAssetTypeConcentratedShare";
    case SuperfluidAssetType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** SuperfluidAsset stores the pair of superfluid asset type and denom pair */
export interface SuperfluidAsset {
  denom: string;
  /**
   * AssetType indicates whether the superfluid asset is a native token or an lp
   * share
   */
  assetType: SuperfluidAssetType;
}
/** SuperfluidAsset stores the pair of superfluid asset type and denom pair */
export interface SuperfluidAssetSDKType {
  denom: string;
  asset_type: SuperfluidAssetType;
}
/**
 * SuperfluidIntermediaryAccount takes the role of intermediary between LP token
 * and OSMO tokens for superfluid staking. The intermediary account is the
 * actual account responsible for delegation, not the validator account itself.
 */
export interface SuperfluidIntermediaryAccount {
  /** Denom indicates the denom of the superfluid asset. */
  denom: string;
  valAddr: string;
  /** perpetual gauge for rewards distribution */
  gaugeId: Long;
}
/**
 * SuperfluidIntermediaryAccount takes the role of intermediary between LP token
 * and OSMO tokens for superfluid staking. The intermediary account is the
 * actual account responsible for delegation, not the validator account itself.
 */
export interface SuperfluidIntermediaryAccountSDKType {
  denom: string;
  val_addr: string;
  gauge_id: Long;
}
/**
 * The Osmo-Equivalent-Multiplier Record for epoch N refers to the osmo worth we
 * treat an LP share as having, for all of epoch N. Eventually this is intended
 * to be set as the Time-weighted-average-osmo-backing for the entire duration
 * of epoch N-1. (Thereby locking whats in use for epoch N as based on the prior
 * epochs rewards) However for now, this is not the TWAP but instead the spot
 * price at the boundary. For different types of assets in the future, it could
 * change.
 */
export interface OsmoEquivalentMultiplierRecord {
  epochNumber: Long;
  /** superfluid asset denom, can be LP token or native token */
  denom: string;
  multiplier: string;
}
/**
 * The Osmo-Equivalent-Multiplier Record for epoch N refers to the osmo worth we
 * treat an LP share as having, for all of epoch N. Eventually this is intended
 * to be set as the Time-weighted-average-osmo-backing for the entire duration
 * of epoch N-1. (Thereby locking whats in use for epoch N as based on the prior
 * epochs rewards) However for now, this is not the TWAP but instead the spot
 * price at the boundary. For different types of assets in the future, it could
 * change.
 */
export interface OsmoEquivalentMultiplierRecordSDKType {
  epoch_number: Long;
  denom: string;
  multiplier: string;
}
/**
 * SuperfluidDelegationRecord is a struct used to indicate superfluid
 * delegations of an account in the state machine in a user friendly form.
 */
export interface SuperfluidDelegationRecord {
  delegatorAddress: string;
  validatorAddress: string;
  delegationAmount?: Coin;
  equivalentStakedAmount?: Coin;
}
/**
 * SuperfluidDelegationRecord is a struct used to indicate superfluid
 * delegations of an account in the state machine in a user friendly form.
 */
export interface SuperfluidDelegationRecordSDKType {
  delegator_address: string;
  validator_address: string;
  delegation_amount?: CoinSDKType;
  equivalent_staked_amount?: CoinSDKType;
}
/**
 * LockIdIntermediaryAccountConnection is a struct used to indicate the
 * relationship between the underlying lock id and superfluid delegation done
 * via lp shares.
 */
export interface LockIdIntermediaryAccountConnection {
  lockId: Long;
  intermediaryAccount: string;
}
/**
 * LockIdIntermediaryAccountConnection is a struct used to indicate the
 * relationship between the underlying lock id and superfluid delegation done
 * via lp shares.
 */
export interface LockIdIntermediaryAccountConnectionSDKType {
  lock_id: Long;
  intermediary_account: string;
}
export interface UnpoolWhitelistedPools {
  ids: Long[];
}
export interface UnpoolWhitelistedPoolsSDKType {
  ids: Long[];
}
export interface ConcentratedPoolUserPositionRecord {
  validatorAddress: string;
  positionId: Long;
  lockId: Long;
  syntheticLock?: SyntheticLock;
  delegationAmount?: Coin;
  equivalentStakedAmount?: Coin;
}
export interface ConcentratedPoolUserPositionRecordSDKType {
  validator_address: string;
  position_id: Long;
  lock_id: Long;
  synthetic_lock?: SyntheticLockSDKType;
  delegation_amount?: CoinSDKType;
  equivalent_staked_amount?: CoinSDKType;
}
function createBaseSuperfluidAsset(): SuperfluidAsset {
  return {
    denom: "",
    assetType: 0
  };
}
export const SuperfluidAsset = {
  encode(message: SuperfluidAsset, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.assetType !== 0) {
      writer.uint32(16).int32(message.assetType);
    }
    return writer;
  },
  fromJSON(object: any): SuperfluidAsset {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      assetType: isSet(object.assetType) ? superfluidAssetTypeFromJSON(object.assetType) : 0
    };
  },
  fromPartial(object: Partial<SuperfluidAsset>): SuperfluidAsset {
    const message = createBaseSuperfluidAsset();
    message.denom = object.denom ?? "";
    message.assetType = object.assetType ?? 0;
    return message;
  }
};
function createBaseSuperfluidIntermediaryAccount(): SuperfluidIntermediaryAccount {
  return {
    denom: "",
    valAddr: "",
    gaugeId: Long.UZERO
  };
}
export const SuperfluidIntermediaryAccount = {
  encode(message: SuperfluidIntermediaryAccount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.valAddr !== "") {
      writer.uint32(18).string(message.valAddr);
    }
    if (!message.gaugeId.isZero()) {
      writer.uint32(24).uint64(message.gaugeId);
    }
    return writer;
  },
  fromJSON(object: any): SuperfluidIntermediaryAccount {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      valAddr: isSet(object.valAddr) ? String(object.valAddr) : "",
      gaugeId: isSet(object.gaugeId) ? Long.fromValue(object.gaugeId) : Long.UZERO
    };
  },
  fromPartial(object: Partial<SuperfluidIntermediaryAccount>): SuperfluidIntermediaryAccount {
    const message = createBaseSuperfluidIntermediaryAccount();
    message.denom = object.denom ?? "";
    message.valAddr = object.valAddr ?? "";
    message.gaugeId = object.gaugeId !== undefined && object.gaugeId !== null ? Long.fromValue(object.gaugeId) : Long.UZERO;
    return message;
  }
};
function createBaseOsmoEquivalentMultiplierRecord(): OsmoEquivalentMultiplierRecord {
  return {
    epochNumber: Long.ZERO,
    denom: "",
    multiplier: ""
  };
}
export const OsmoEquivalentMultiplierRecord = {
  encode(message: OsmoEquivalentMultiplierRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.epochNumber.isZero()) {
      writer.uint32(8).int64(message.epochNumber);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.multiplier !== "") {
      writer.uint32(26).string(message.multiplier);
    }
    return writer;
  },
  fromJSON(object: any): OsmoEquivalentMultiplierRecord {
    return {
      epochNumber: isSet(object.epochNumber) ? Long.fromValue(object.epochNumber) : Long.ZERO,
      denom: isSet(object.denom) ? String(object.denom) : "",
      multiplier: isSet(object.multiplier) ? String(object.multiplier) : ""
    };
  },
  fromPartial(object: Partial<OsmoEquivalentMultiplierRecord>): OsmoEquivalentMultiplierRecord {
    const message = createBaseOsmoEquivalentMultiplierRecord();
    message.epochNumber = object.epochNumber !== undefined && object.epochNumber !== null ? Long.fromValue(object.epochNumber) : Long.ZERO;
    message.denom = object.denom ?? "";
    message.multiplier = object.multiplier ?? "";
    return message;
  }
};
function createBaseSuperfluidDelegationRecord(): SuperfluidDelegationRecord {
  return {
    delegatorAddress: "",
    validatorAddress: "",
    delegationAmount: undefined,
    equivalentStakedAmount: undefined
  };
}
export const SuperfluidDelegationRecord = {
  encode(message: SuperfluidDelegationRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }
    if (message.delegationAmount !== undefined) {
      Coin.encode(message.delegationAmount, writer.uint32(26).fork()).ldelim();
    }
    if (message.equivalentStakedAmount !== undefined) {
      Coin.encode(message.equivalentStakedAmount, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): SuperfluidDelegationRecord {
    return {
      delegatorAddress: isSet(object.delegatorAddress) ? String(object.delegatorAddress) : "",
      validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "",
      delegationAmount: isSet(object.delegationAmount) ? Coin.fromJSON(object.delegationAmount) : undefined,
      equivalentStakedAmount: isSet(object.equivalentStakedAmount) ? Coin.fromJSON(object.equivalentStakedAmount) : undefined
    };
  },
  fromPartial(object: Partial<SuperfluidDelegationRecord>): SuperfluidDelegationRecord {
    const message = createBaseSuperfluidDelegationRecord();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.validatorAddress = object.validatorAddress ?? "";
    message.delegationAmount = object.delegationAmount !== undefined && object.delegationAmount !== null ? Coin.fromPartial(object.delegationAmount) : undefined;
    message.equivalentStakedAmount = object.equivalentStakedAmount !== undefined && object.equivalentStakedAmount !== null ? Coin.fromPartial(object.equivalentStakedAmount) : undefined;
    return message;
  }
};
function createBaseLockIdIntermediaryAccountConnection(): LockIdIntermediaryAccountConnection {
  return {
    lockId: Long.UZERO,
    intermediaryAccount: ""
  };
}
export const LockIdIntermediaryAccountConnection = {
  encode(message: LockIdIntermediaryAccountConnection, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.lockId.isZero()) {
      writer.uint32(8).uint64(message.lockId);
    }
    if (message.intermediaryAccount !== "") {
      writer.uint32(18).string(message.intermediaryAccount);
    }
    return writer;
  },
  fromJSON(object: any): LockIdIntermediaryAccountConnection {
    return {
      lockId: isSet(object.lockId) ? Long.fromValue(object.lockId) : Long.UZERO,
      intermediaryAccount: isSet(object.intermediaryAccount) ? String(object.intermediaryAccount) : ""
    };
  },
  fromPartial(object: Partial<LockIdIntermediaryAccountConnection>): LockIdIntermediaryAccountConnection {
    const message = createBaseLockIdIntermediaryAccountConnection();
    message.lockId = object.lockId !== undefined && object.lockId !== null ? Long.fromValue(object.lockId) : Long.UZERO;
    message.intermediaryAccount = object.intermediaryAccount ?? "";
    return message;
  }
};
function createBaseUnpoolWhitelistedPools(): UnpoolWhitelistedPools {
  return {
    ids: []
  };
}
export const UnpoolWhitelistedPools = {
  encode(message: UnpoolWhitelistedPools, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.ids) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },
  fromJSON(object: any): UnpoolWhitelistedPools {
    return {
      ids: Array.isArray(object?.ids) ? object.ids.map((e: any) => Long.fromValue(e)) : []
    };
  },
  fromPartial(object: Partial<UnpoolWhitelistedPools>): UnpoolWhitelistedPools {
    const message = createBaseUnpoolWhitelistedPools();
    message.ids = object.ids?.map(e => Long.fromValue(e)) || [];
    return message;
  }
};
function createBaseConcentratedPoolUserPositionRecord(): ConcentratedPoolUserPositionRecord {
  return {
    validatorAddress: "",
    positionId: Long.UZERO,
    lockId: Long.UZERO,
    syntheticLock: undefined,
    delegationAmount: undefined,
    equivalentStakedAmount: undefined
  };
}
export const ConcentratedPoolUserPositionRecord = {
  encode(message: ConcentratedPoolUserPositionRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    if (!message.positionId.isZero()) {
      writer.uint32(16).uint64(message.positionId);
    }
    if (!message.lockId.isZero()) {
      writer.uint32(24).uint64(message.lockId);
    }
    if (message.syntheticLock !== undefined) {
      SyntheticLock.encode(message.syntheticLock, writer.uint32(34).fork()).ldelim();
    }
    if (message.delegationAmount !== undefined) {
      Coin.encode(message.delegationAmount, writer.uint32(42).fork()).ldelim();
    }
    if (message.equivalentStakedAmount !== undefined) {
      Coin.encode(message.equivalentStakedAmount, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): ConcentratedPoolUserPositionRecord {
    return {
      validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "",
      positionId: isSet(object.positionId) ? Long.fromValue(object.positionId) : Long.UZERO,
      lockId: isSet(object.lockId) ? Long.fromValue(object.lockId) : Long.UZERO,
      syntheticLock: isSet(object.syntheticLock) ? SyntheticLock.fromJSON(object.syntheticLock) : undefined,
      delegationAmount: isSet(object.delegationAmount) ? Coin.fromJSON(object.delegationAmount) : undefined,
      equivalentStakedAmount: isSet(object.equivalentStakedAmount) ? Coin.fromJSON(object.equivalentStakedAmount) : undefined
    };
  },
  fromPartial(object: Partial<ConcentratedPoolUserPositionRecord>): ConcentratedPoolUserPositionRecord {
    const message = createBaseConcentratedPoolUserPositionRecord();
    message.validatorAddress = object.validatorAddress ?? "";
    message.positionId = object.positionId !== undefined && object.positionId !== null ? Long.fromValue(object.positionId) : Long.UZERO;
    message.lockId = object.lockId !== undefined && object.lockId !== null ? Long.fromValue(object.lockId) : Long.UZERO;
    message.syntheticLock = object.syntheticLock !== undefined && object.syntheticLock !== null ? SyntheticLock.fromPartial(object.syntheticLock) : undefined;
    message.delegationAmount = object.delegationAmount !== undefined && object.delegationAmount !== null ? Coin.fromPartial(object.delegationAmount) : undefined;
    message.equivalentStakedAmount = object.equivalentStakedAmount !== undefined && object.equivalentStakedAmount !== null ? Coin.fromPartial(object.equivalentStakedAmount) : undefined;
    return message;
  }
};