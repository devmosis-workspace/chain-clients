import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { Timestamp, TimestampSDKType } from "../../google/protobuf/timestamp";
import { Long, isSet, fromJsonTimestamp } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface MsgSuperfluidDelegate {
  sender: string;
  lockId: Long;
  valAddr: string;
}
export interface MsgSuperfluidDelegateSDKType {
  sender: string;
  lock_id: Long;
  val_addr: string;
}
export interface MsgSuperfluidDelegateResponse {}
export interface MsgSuperfluidDelegateResponseSDKType {}
export interface MsgSuperfluidUndelegate {
  sender: string;
  lockId: Long;
}
export interface MsgSuperfluidUndelegateSDKType {
  sender: string;
  lock_id: Long;
}
export interface MsgSuperfluidUndelegateResponse {}
export interface MsgSuperfluidUndelegateResponseSDKType {}
export interface MsgSuperfluidUnbondLock {
  sender: string;
  lockId: Long;
}
export interface MsgSuperfluidUnbondLockSDKType {
  sender: string;
  lock_id: Long;
}
export interface MsgSuperfluidUnbondLockResponse {}
export interface MsgSuperfluidUnbondLockResponseSDKType {}
export interface MsgSuperfluidUndelegateAndUnbondLock {
  sender: string;
  lockId: Long;
  /** Amount of unlocking coin. */
  coin?: Coin;
}
export interface MsgSuperfluidUndelegateAndUnbondLockSDKType {
  sender: string;
  lock_id: Long;
  coin?: CoinSDKType;
}
export interface MsgSuperfluidUndelegateAndUnbondLockResponse {
  /**
   * lock id of the new lock created for the remaining amount.
   * returns the original lockid if the unlocked amount is equal to the
   * original lock's amount.
   */
  lockId: Long;
}
export interface MsgSuperfluidUndelegateAndUnbondLockResponseSDKType {
  lock_id: Long;
}
/**
 * MsgLockAndSuperfluidDelegate locks coins with the unbonding period duration,
 * and then does a superfluid lock from the newly created lockup, to the
 * specified validator addr.
 */
export interface MsgLockAndSuperfluidDelegate {
  sender: string;
  coins: Coin[];
  valAddr: string;
}
/**
 * MsgLockAndSuperfluidDelegate locks coins with the unbonding period duration,
 * and then does a superfluid lock from the newly created lockup, to the
 * specified validator addr.
 */
export interface MsgLockAndSuperfluidDelegateSDKType {
  sender: string;
  coins: CoinSDKType[];
  val_addr: string;
}
export interface MsgLockAndSuperfluidDelegateResponse {
  ID: Long;
}
export interface MsgLockAndSuperfluidDelegateResponseSDKType {
  ID: Long;
}
/**
 * MsgCreateFullRangePositionAndSuperfluidDelegate creates a full range position
 * in a concentrated liquidity pool, then superfluid delegates.
 */
export interface MsgCreateFullRangePositionAndSuperfluidDelegate {
  sender: string;
  coins: Coin[];
  valAddr: string;
  poolId: Long;
}
/**
 * MsgCreateFullRangePositionAndSuperfluidDelegate creates a full range position
 * in a concentrated liquidity pool, then superfluid delegates.
 */
export interface MsgCreateFullRangePositionAndSuperfluidDelegateSDKType {
  sender: string;
  coins: CoinSDKType[];
  val_addr: string;
  pool_id: Long;
}
export interface MsgCreateFullRangePositionAndSuperfluidDelegateResponse {
  lockID: Long;
  positionID: Long;
}
export interface MsgCreateFullRangePositionAndSuperfluidDelegateResponseSDKType {
  lockID: Long;
  positionID: Long;
}
/**
 * MsgUnPoolWhitelistedPool Unpools every lock the sender has, that is
 * associated with pool pool_id. If pool_id is not approved for unpooling by
 * governance, this is a no-op. Unpooling takes the locked gamm shares, and runs
 * "ExitPool" on it, to get the constituent tokens. e.g. z gamm/pool/1 tokens
 * ExitPools into constituent tokens x uatom, y uosmo. Then it creates a new
 * lock for every constituent token, with the duration associated with the lock.
 * If the lock was unbonding, the new lockup durations should be the time left
 * until unbond completion.
 */
export interface MsgUnPoolWhitelistedPool {
  sender: string;
  poolId: Long;
}
/**
 * MsgUnPoolWhitelistedPool Unpools every lock the sender has, that is
 * associated with pool pool_id. If pool_id is not approved for unpooling by
 * governance, this is a no-op. Unpooling takes the locked gamm shares, and runs
 * "ExitPool" on it, to get the constituent tokens. e.g. z gamm/pool/1 tokens
 * ExitPools into constituent tokens x uatom, y uosmo. Then it creates a new
 * lock for every constituent token, with the duration associated with the lock.
 * If the lock was unbonding, the new lockup durations should be the time left
 * until unbond completion.
 */
export interface MsgUnPoolWhitelistedPoolSDKType {
  sender: string;
  pool_id: Long;
}
export interface MsgUnPoolWhitelistedPoolResponse {
  exitedLockIds: Long[];
}
export interface MsgUnPoolWhitelistedPoolResponseSDKType {
  exited_lock_ids: Long[];
}
/**
 * =====================
 * MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition
 */
export interface MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition {
  sender: string;
  lockId: Long;
  sharesToMigrate?: Coin;
  /** token_out_mins indicates minimum token to exit Balancer pool with. */
  tokenOutMins: Coin[];
}
/**
 * =====================
 * MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition
 */
export interface MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionSDKType {
  sender: string;
  lock_id: Long;
  shares_to_migrate?: CoinSDKType;
  token_out_mins: CoinSDKType[];
}
export interface MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse {
  amount0: string;
  amount1: string;
  liquidityCreated: string;
  joinTime?: Timestamp;
}
export interface MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponseSDKType {
  amount0: string;
  amount1: string;
  liquidity_created: string;
  join_time?: TimestampSDKType;
}
/** ===================== MsgAddToConcentratedLiquiditySuperfluidPosition */
export interface MsgAddToConcentratedLiquiditySuperfluidPosition {
  positionId: Long;
  sender: string;
  tokenDesired0?: Coin;
  tokenDesired1?: Coin;
}
/** ===================== MsgAddToConcentratedLiquiditySuperfluidPosition */
export interface MsgAddToConcentratedLiquiditySuperfluidPositionSDKType {
  position_id: Long;
  sender: string;
  token_desired0?: CoinSDKType;
  token_desired1?: CoinSDKType;
}
export interface MsgAddToConcentratedLiquiditySuperfluidPositionResponse {
  positionId: Long;
  amount0: string;
  amount1: string;
  /**
   * new_liquidity is the final liquidity after the add.
   * It includes the liquidity that existed before in the position
   * and the new liquidity that was added to the position.
   */
  newLiquidity: string;
  lockId: Long;
}
export interface MsgAddToConcentratedLiquiditySuperfluidPositionResponseSDKType {
  position_id: Long;
  amount0: string;
  amount1: string;
  new_liquidity: string;
  lock_id: Long;
}
function createBaseMsgSuperfluidDelegate(): MsgSuperfluidDelegate {
  return {
    sender: "",
    lockId: Long.UZERO,
    valAddr: ""
  };
}
export const MsgSuperfluidDelegate = {
  encode(message: MsgSuperfluidDelegate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (!message.lockId.isZero()) {
      writer.uint32(16).uint64(message.lockId);
    }
    if (message.valAddr !== "") {
      writer.uint32(26).string(message.valAddr);
    }
    return writer;
  },
  fromJSON(object: any): MsgSuperfluidDelegate {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      lockId: isSet(object.lockId) ? Long.fromValue(object.lockId) : Long.UZERO,
      valAddr: isSet(object.valAddr) ? String(object.valAddr) : ""
    };
  },
  fromPartial(object: Partial<MsgSuperfluidDelegate>): MsgSuperfluidDelegate {
    const message = createBaseMsgSuperfluidDelegate();
    message.sender = object.sender ?? "";
    message.lockId = object.lockId !== undefined && object.lockId !== null ? Long.fromValue(object.lockId) : Long.UZERO;
    message.valAddr = object.valAddr ?? "";
    return message;
  }
};
function createBaseMsgSuperfluidDelegateResponse(): MsgSuperfluidDelegateResponse {
  return {};
}
export const MsgSuperfluidDelegateResponse = {
  encode(_: MsgSuperfluidDelegateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgSuperfluidDelegateResponse {
    return {};
  },
  fromPartial(_: Partial<MsgSuperfluidDelegateResponse>): MsgSuperfluidDelegateResponse {
    const message = createBaseMsgSuperfluidDelegateResponse();
    return message;
  }
};
function createBaseMsgSuperfluidUndelegate(): MsgSuperfluidUndelegate {
  return {
    sender: "",
    lockId: Long.UZERO
  };
}
export const MsgSuperfluidUndelegate = {
  encode(message: MsgSuperfluidUndelegate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (!message.lockId.isZero()) {
      writer.uint32(16).uint64(message.lockId);
    }
    return writer;
  },
  fromJSON(object: any): MsgSuperfluidUndelegate {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      lockId: isSet(object.lockId) ? Long.fromValue(object.lockId) : Long.UZERO
    };
  },
  fromPartial(object: Partial<MsgSuperfluidUndelegate>): MsgSuperfluidUndelegate {
    const message = createBaseMsgSuperfluidUndelegate();
    message.sender = object.sender ?? "";
    message.lockId = object.lockId !== undefined && object.lockId !== null ? Long.fromValue(object.lockId) : Long.UZERO;
    return message;
  }
};
function createBaseMsgSuperfluidUndelegateResponse(): MsgSuperfluidUndelegateResponse {
  return {};
}
export const MsgSuperfluidUndelegateResponse = {
  encode(_: MsgSuperfluidUndelegateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgSuperfluidUndelegateResponse {
    return {};
  },
  fromPartial(_: Partial<MsgSuperfluidUndelegateResponse>): MsgSuperfluidUndelegateResponse {
    const message = createBaseMsgSuperfluidUndelegateResponse();
    return message;
  }
};
function createBaseMsgSuperfluidUnbondLock(): MsgSuperfluidUnbondLock {
  return {
    sender: "",
    lockId: Long.UZERO
  };
}
export const MsgSuperfluidUnbondLock = {
  encode(message: MsgSuperfluidUnbondLock, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (!message.lockId.isZero()) {
      writer.uint32(16).uint64(message.lockId);
    }
    return writer;
  },
  fromJSON(object: any): MsgSuperfluidUnbondLock {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      lockId: isSet(object.lockId) ? Long.fromValue(object.lockId) : Long.UZERO
    };
  },
  fromPartial(object: Partial<MsgSuperfluidUnbondLock>): MsgSuperfluidUnbondLock {
    const message = createBaseMsgSuperfluidUnbondLock();
    message.sender = object.sender ?? "";
    message.lockId = object.lockId !== undefined && object.lockId !== null ? Long.fromValue(object.lockId) : Long.UZERO;
    return message;
  }
};
function createBaseMsgSuperfluidUnbondLockResponse(): MsgSuperfluidUnbondLockResponse {
  return {};
}
export const MsgSuperfluidUnbondLockResponse = {
  encode(_: MsgSuperfluidUnbondLockResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgSuperfluidUnbondLockResponse {
    return {};
  },
  fromPartial(_: Partial<MsgSuperfluidUnbondLockResponse>): MsgSuperfluidUnbondLockResponse {
    const message = createBaseMsgSuperfluidUnbondLockResponse();
    return message;
  }
};
function createBaseMsgSuperfluidUndelegateAndUnbondLock(): MsgSuperfluidUndelegateAndUnbondLock {
  return {
    sender: "",
    lockId: Long.UZERO,
    coin: undefined
  };
}
export const MsgSuperfluidUndelegateAndUnbondLock = {
  encode(message: MsgSuperfluidUndelegateAndUnbondLock, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (!message.lockId.isZero()) {
      writer.uint32(16).uint64(message.lockId);
    }
    if (message.coin !== undefined) {
      Coin.encode(message.coin, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgSuperfluidUndelegateAndUnbondLock {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      lockId: isSet(object.lockId) ? Long.fromValue(object.lockId) : Long.UZERO,
      coin: isSet(object.coin) ? Coin.fromJSON(object.coin) : undefined
    };
  },
  fromPartial(object: Partial<MsgSuperfluidUndelegateAndUnbondLock>): MsgSuperfluidUndelegateAndUnbondLock {
    const message = createBaseMsgSuperfluidUndelegateAndUnbondLock();
    message.sender = object.sender ?? "";
    message.lockId = object.lockId !== undefined && object.lockId !== null ? Long.fromValue(object.lockId) : Long.UZERO;
    message.coin = object.coin !== undefined && object.coin !== null ? Coin.fromPartial(object.coin) : undefined;
    return message;
  }
};
function createBaseMsgSuperfluidUndelegateAndUnbondLockResponse(): MsgSuperfluidUndelegateAndUnbondLockResponse {
  return {
    lockId: Long.UZERO
  };
}
export const MsgSuperfluidUndelegateAndUnbondLockResponse = {
  encode(message: MsgSuperfluidUndelegateAndUnbondLockResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.lockId.isZero()) {
      writer.uint32(8).uint64(message.lockId);
    }
    return writer;
  },
  fromJSON(object: any): MsgSuperfluidUndelegateAndUnbondLockResponse {
    return {
      lockId: isSet(object.lockId) ? Long.fromValue(object.lockId) : Long.UZERO
    };
  },
  fromPartial(object: Partial<MsgSuperfluidUndelegateAndUnbondLockResponse>): MsgSuperfluidUndelegateAndUnbondLockResponse {
    const message = createBaseMsgSuperfluidUndelegateAndUnbondLockResponse();
    message.lockId = object.lockId !== undefined && object.lockId !== null ? Long.fromValue(object.lockId) : Long.UZERO;
    return message;
  }
};
function createBaseMsgLockAndSuperfluidDelegate(): MsgLockAndSuperfluidDelegate {
  return {
    sender: "",
    coins: [],
    valAddr: ""
  };
}
export const MsgLockAndSuperfluidDelegate = {
  encode(message: MsgLockAndSuperfluidDelegate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.valAddr !== "") {
      writer.uint32(26).string(message.valAddr);
    }
    return writer;
  },
  fromJSON(object: any): MsgLockAndSuperfluidDelegate {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => Coin.fromJSON(e)) : [],
      valAddr: isSet(object.valAddr) ? String(object.valAddr) : ""
    };
  },
  fromPartial(object: Partial<MsgLockAndSuperfluidDelegate>): MsgLockAndSuperfluidDelegate {
    const message = createBaseMsgLockAndSuperfluidDelegate();
    message.sender = object.sender ?? "";
    message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
    message.valAddr = object.valAddr ?? "";
    return message;
  }
};
function createBaseMsgLockAndSuperfluidDelegateResponse(): MsgLockAndSuperfluidDelegateResponse {
  return {
    ID: Long.UZERO
  };
}
export const MsgLockAndSuperfluidDelegateResponse = {
  encode(message: MsgLockAndSuperfluidDelegateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.ID.isZero()) {
      writer.uint32(8).uint64(message.ID);
    }
    return writer;
  },
  fromJSON(object: any): MsgLockAndSuperfluidDelegateResponse {
    return {
      ID: isSet(object.ID) ? Long.fromValue(object.ID) : Long.UZERO
    };
  },
  fromPartial(object: Partial<MsgLockAndSuperfluidDelegateResponse>): MsgLockAndSuperfluidDelegateResponse {
    const message = createBaseMsgLockAndSuperfluidDelegateResponse();
    message.ID = object.ID !== undefined && object.ID !== null ? Long.fromValue(object.ID) : Long.UZERO;
    return message;
  }
};
function createBaseMsgCreateFullRangePositionAndSuperfluidDelegate(): MsgCreateFullRangePositionAndSuperfluidDelegate {
  return {
    sender: "",
    coins: [],
    valAddr: "",
    poolId: Long.UZERO
  };
}
export const MsgCreateFullRangePositionAndSuperfluidDelegate = {
  encode(message: MsgCreateFullRangePositionAndSuperfluidDelegate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.valAddr !== "") {
      writer.uint32(26).string(message.valAddr);
    }
    if (!message.poolId.isZero()) {
      writer.uint32(32).uint64(message.poolId);
    }
    return writer;
  },
  fromJSON(object: any): MsgCreateFullRangePositionAndSuperfluidDelegate {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => Coin.fromJSON(e)) : [],
      valAddr: isSet(object.valAddr) ? String(object.valAddr) : "",
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO
    };
  },
  fromPartial(object: Partial<MsgCreateFullRangePositionAndSuperfluidDelegate>): MsgCreateFullRangePositionAndSuperfluidDelegate {
    const message = createBaseMsgCreateFullRangePositionAndSuperfluidDelegate();
    message.sender = object.sender ?? "";
    message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
    message.valAddr = object.valAddr ?? "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    return message;
  }
};
function createBaseMsgCreateFullRangePositionAndSuperfluidDelegateResponse(): MsgCreateFullRangePositionAndSuperfluidDelegateResponse {
  return {
    lockID: Long.UZERO,
    positionID: Long.UZERO
  };
}
export const MsgCreateFullRangePositionAndSuperfluidDelegateResponse = {
  encode(message: MsgCreateFullRangePositionAndSuperfluidDelegateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.lockID.isZero()) {
      writer.uint32(8).uint64(message.lockID);
    }
    if (!message.positionID.isZero()) {
      writer.uint32(16).uint64(message.positionID);
    }
    return writer;
  },
  fromJSON(object: any): MsgCreateFullRangePositionAndSuperfluidDelegateResponse {
    return {
      lockID: isSet(object.lockID) ? Long.fromValue(object.lockID) : Long.UZERO,
      positionID: isSet(object.positionID) ? Long.fromValue(object.positionID) : Long.UZERO
    };
  },
  fromPartial(object: Partial<MsgCreateFullRangePositionAndSuperfluidDelegateResponse>): MsgCreateFullRangePositionAndSuperfluidDelegateResponse {
    const message = createBaseMsgCreateFullRangePositionAndSuperfluidDelegateResponse();
    message.lockID = object.lockID !== undefined && object.lockID !== null ? Long.fromValue(object.lockID) : Long.UZERO;
    message.positionID = object.positionID !== undefined && object.positionID !== null ? Long.fromValue(object.positionID) : Long.UZERO;
    return message;
  }
};
function createBaseMsgUnPoolWhitelistedPool(): MsgUnPoolWhitelistedPool {
  return {
    sender: "",
    poolId: Long.UZERO
  };
}
export const MsgUnPoolWhitelistedPool = {
  encode(message: MsgUnPoolWhitelistedPool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (!message.poolId.isZero()) {
      writer.uint32(16).uint64(message.poolId);
    }
    return writer;
  },
  fromJSON(object: any): MsgUnPoolWhitelistedPool {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO
    };
  },
  fromPartial(object: Partial<MsgUnPoolWhitelistedPool>): MsgUnPoolWhitelistedPool {
    const message = createBaseMsgUnPoolWhitelistedPool();
    message.sender = object.sender ?? "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    return message;
  }
};
function createBaseMsgUnPoolWhitelistedPoolResponse(): MsgUnPoolWhitelistedPoolResponse {
  return {
    exitedLockIds: []
  };
}
export const MsgUnPoolWhitelistedPoolResponse = {
  encode(message: MsgUnPoolWhitelistedPoolResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.exitedLockIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },
  fromJSON(object: any): MsgUnPoolWhitelistedPoolResponse {
    return {
      exitedLockIds: Array.isArray(object?.exitedLockIds) ? object.exitedLockIds.map((e: any) => Long.fromValue(e)) : []
    };
  },
  fromPartial(object: Partial<MsgUnPoolWhitelistedPoolResponse>): MsgUnPoolWhitelistedPoolResponse {
    const message = createBaseMsgUnPoolWhitelistedPoolResponse();
    message.exitedLockIds = object.exitedLockIds?.map(e => Long.fromValue(e)) || [];
    return message;
  }
};
function createBaseMsgUnlockAndMigrateSharesToFullRangeConcentratedPosition(): MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition {
  return {
    sender: "",
    lockId: Long.ZERO,
    sharesToMigrate: undefined,
    tokenOutMins: []
  };
}
export const MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition = {
  encode(message: MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (!message.lockId.isZero()) {
      writer.uint32(16).int64(message.lockId);
    }
    if (message.sharesToMigrate !== undefined) {
      Coin.encode(message.sharesToMigrate, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.tokenOutMins) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      lockId: isSet(object.lockId) ? Long.fromValue(object.lockId) : Long.ZERO,
      sharesToMigrate: isSet(object.sharesToMigrate) ? Coin.fromJSON(object.sharesToMigrate) : undefined,
      tokenOutMins: Array.isArray(object?.tokenOutMins) ? object.tokenOutMins.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition>): MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition {
    const message = createBaseMsgUnlockAndMigrateSharesToFullRangeConcentratedPosition();
    message.sender = object.sender ?? "";
    message.lockId = object.lockId !== undefined && object.lockId !== null ? Long.fromValue(object.lockId) : Long.ZERO;
    message.sharesToMigrate = object.sharesToMigrate !== undefined && object.sharesToMigrate !== null ? Coin.fromPartial(object.sharesToMigrate) : undefined;
    message.tokenOutMins = object.tokenOutMins?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }
};
function createBaseMsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse(): MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse {
  return {
    amount0: "",
    amount1: "",
    liquidityCreated: "",
    joinTime: undefined
  };
}
export const MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse = {
  encode(message: MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.amount0 !== "") {
      writer.uint32(10).string(message.amount0);
    }
    if (message.amount1 !== "") {
      writer.uint32(18).string(message.amount1);
    }
    if (message.liquidityCreated !== "") {
      writer.uint32(26).string(message.liquidityCreated);
    }
    if (message.joinTime !== undefined) {
      Timestamp.encode(message.joinTime, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse {
    return {
      amount0: isSet(object.amount0) ? String(object.amount0) : "",
      amount1: isSet(object.amount1) ? String(object.amount1) : "",
      liquidityCreated: isSet(object.liquidityCreated) ? String(object.liquidityCreated) : "",
      joinTime: isSet(object.joinTime) ? fromJsonTimestamp(object.joinTime) : undefined
    };
  },
  fromPartial(object: Partial<MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse>): MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse {
    const message = createBaseMsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse();
    message.amount0 = object.amount0 ?? "";
    message.amount1 = object.amount1 ?? "";
    message.liquidityCreated = object.liquidityCreated ?? "";
    message.joinTime = object.joinTime !== undefined && object.joinTime !== null ? Timestamp.fromPartial(object.joinTime) : undefined;
    return message;
  }
};
function createBaseMsgAddToConcentratedLiquiditySuperfluidPosition(): MsgAddToConcentratedLiquiditySuperfluidPosition {
  return {
    positionId: Long.UZERO,
    sender: "",
    tokenDesired0: undefined,
    tokenDesired1: undefined
  };
}
export const MsgAddToConcentratedLiquiditySuperfluidPosition = {
  encode(message: MsgAddToConcentratedLiquiditySuperfluidPosition, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.positionId.isZero()) {
      writer.uint32(8).uint64(message.positionId);
    }
    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }
    if (message.tokenDesired0 !== undefined) {
      Coin.encode(message.tokenDesired0, writer.uint32(26).fork()).ldelim();
    }
    if (message.tokenDesired1 !== undefined) {
      Coin.encode(message.tokenDesired1, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgAddToConcentratedLiquiditySuperfluidPosition {
    return {
      positionId: isSet(object.positionId) ? Long.fromValue(object.positionId) : Long.UZERO,
      sender: isSet(object.sender) ? String(object.sender) : "",
      tokenDesired0: isSet(object.tokenDesired0) ? Coin.fromJSON(object.tokenDesired0) : undefined,
      tokenDesired1: isSet(object.tokenDesired1) ? Coin.fromJSON(object.tokenDesired1) : undefined
    };
  },
  fromPartial(object: Partial<MsgAddToConcentratedLiquiditySuperfluidPosition>): MsgAddToConcentratedLiquiditySuperfluidPosition {
    const message = createBaseMsgAddToConcentratedLiquiditySuperfluidPosition();
    message.positionId = object.positionId !== undefined && object.positionId !== null ? Long.fromValue(object.positionId) : Long.UZERO;
    message.sender = object.sender ?? "";
    message.tokenDesired0 = object.tokenDesired0 !== undefined && object.tokenDesired0 !== null ? Coin.fromPartial(object.tokenDesired0) : undefined;
    message.tokenDesired1 = object.tokenDesired1 !== undefined && object.tokenDesired1 !== null ? Coin.fromPartial(object.tokenDesired1) : undefined;
    return message;
  }
};
function createBaseMsgAddToConcentratedLiquiditySuperfluidPositionResponse(): MsgAddToConcentratedLiquiditySuperfluidPositionResponse {
  return {
    positionId: Long.UZERO,
    amount0: "",
    amount1: "",
    newLiquidity: "",
    lockId: Long.UZERO
  };
}
export const MsgAddToConcentratedLiquiditySuperfluidPositionResponse = {
  encode(message: MsgAddToConcentratedLiquiditySuperfluidPositionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.positionId.isZero()) {
      writer.uint32(8).uint64(message.positionId);
    }
    if (message.amount0 !== "") {
      writer.uint32(18).string(message.amount0);
    }
    if (message.amount1 !== "") {
      writer.uint32(26).string(message.amount1);
    }
    if (message.newLiquidity !== "") {
      writer.uint32(42).string(message.newLiquidity);
    }
    if (!message.lockId.isZero()) {
      writer.uint32(32).uint64(message.lockId);
    }
    return writer;
  },
  fromJSON(object: any): MsgAddToConcentratedLiquiditySuperfluidPositionResponse {
    return {
      positionId: isSet(object.positionId) ? Long.fromValue(object.positionId) : Long.UZERO,
      amount0: isSet(object.amount0) ? String(object.amount0) : "",
      amount1: isSet(object.amount1) ? String(object.amount1) : "",
      newLiquidity: isSet(object.newLiquidity) ? String(object.newLiquidity) : "",
      lockId: isSet(object.lockId) ? Long.fromValue(object.lockId) : Long.UZERO
    };
  },
  fromPartial(object: Partial<MsgAddToConcentratedLiquiditySuperfluidPositionResponse>): MsgAddToConcentratedLiquiditySuperfluidPositionResponse {
    const message = createBaseMsgAddToConcentratedLiquiditySuperfluidPositionResponse();
    message.positionId = object.positionId !== undefined && object.positionId !== null ? Long.fromValue(object.positionId) : Long.UZERO;
    message.amount0 = object.amount0 ?? "";
    message.amount1 = object.amount1 ?? "";
    message.newLiquidity = object.newLiquidity ?? "";
    message.lockId = object.lockId !== undefined && object.lockId !== null ? Long.fromValue(object.lockId) : Long.UZERO;
    return message;
  }
};