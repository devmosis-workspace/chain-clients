import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { Timestamp, TimestampSDKType } from "../../google/protobuf/timestamp";
import { Long } from "../../helpers";
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
export interface MsgSuperfluidDelegateResponse {
}
export interface MsgSuperfluidDelegateResponseSDKType {
}
export interface MsgSuperfluidUndelegate {
    sender: string;
    lockId: Long;
}
export interface MsgSuperfluidUndelegateSDKType {
    sender: string;
    lock_id: Long;
}
export interface MsgSuperfluidUndelegateResponse {
}
export interface MsgSuperfluidUndelegateResponseSDKType {
}
export interface MsgSuperfluidUnbondLock {
    sender: string;
    lockId: Long;
}
export interface MsgSuperfluidUnbondLockSDKType {
    sender: string;
    lock_id: Long;
}
export interface MsgSuperfluidUnbondLockResponse {
}
export interface MsgSuperfluidUnbondLockResponseSDKType {
}
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
export declare const MsgSuperfluidDelegate: {
    encode(message: MsgSuperfluidDelegate, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgSuperfluidDelegate;
    fromPartial(object: Partial<MsgSuperfluidDelegate>): MsgSuperfluidDelegate;
};
export declare const MsgSuperfluidDelegateResponse: {
    encode(_: MsgSuperfluidDelegateResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgSuperfluidDelegateResponse;
    fromPartial(_: Partial<MsgSuperfluidDelegateResponse>): MsgSuperfluidDelegateResponse;
};
export declare const MsgSuperfluidUndelegate: {
    encode(message: MsgSuperfluidUndelegate, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgSuperfluidUndelegate;
    fromPartial(object: Partial<MsgSuperfluidUndelegate>): MsgSuperfluidUndelegate;
};
export declare const MsgSuperfluidUndelegateResponse: {
    encode(_: MsgSuperfluidUndelegateResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgSuperfluidUndelegateResponse;
    fromPartial(_: Partial<MsgSuperfluidUndelegateResponse>): MsgSuperfluidUndelegateResponse;
};
export declare const MsgSuperfluidUnbondLock: {
    encode(message: MsgSuperfluidUnbondLock, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgSuperfluidUnbondLock;
    fromPartial(object: Partial<MsgSuperfluidUnbondLock>): MsgSuperfluidUnbondLock;
};
export declare const MsgSuperfluidUnbondLockResponse: {
    encode(_: MsgSuperfluidUnbondLockResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgSuperfluidUnbondLockResponse;
    fromPartial(_: Partial<MsgSuperfluidUnbondLockResponse>): MsgSuperfluidUnbondLockResponse;
};
export declare const MsgSuperfluidUndelegateAndUnbondLock: {
    encode(message: MsgSuperfluidUndelegateAndUnbondLock, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgSuperfluidUndelegateAndUnbondLock;
    fromPartial(object: Partial<MsgSuperfluidUndelegateAndUnbondLock>): MsgSuperfluidUndelegateAndUnbondLock;
};
export declare const MsgSuperfluidUndelegateAndUnbondLockResponse: {
    encode(message: MsgSuperfluidUndelegateAndUnbondLockResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgSuperfluidUndelegateAndUnbondLockResponse;
    fromPartial(object: Partial<MsgSuperfluidUndelegateAndUnbondLockResponse>): MsgSuperfluidUndelegateAndUnbondLockResponse;
};
export declare const MsgLockAndSuperfluidDelegate: {
    encode(message: MsgLockAndSuperfluidDelegate, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgLockAndSuperfluidDelegate;
    fromPartial(object: Partial<MsgLockAndSuperfluidDelegate>): MsgLockAndSuperfluidDelegate;
};
export declare const MsgLockAndSuperfluidDelegateResponse: {
    encode(message: MsgLockAndSuperfluidDelegateResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgLockAndSuperfluidDelegateResponse;
    fromPartial(object: Partial<MsgLockAndSuperfluidDelegateResponse>): MsgLockAndSuperfluidDelegateResponse;
};
export declare const MsgCreateFullRangePositionAndSuperfluidDelegate: {
    encode(message: MsgCreateFullRangePositionAndSuperfluidDelegate, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgCreateFullRangePositionAndSuperfluidDelegate;
    fromPartial(object: Partial<MsgCreateFullRangePositionAndSuperfluidDelegate>): MsgCreateFullRangePositionAndSuperfluidDelegate;
};
export declare const MsgCreateFullRangePositionAndSuperfluidDelegateResponse: {
    encode(message: MsgCreateFullRangePositionAndSuperfluidDelegateResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgCreateFullRangePositionAndSuperfluidDelegateResponse;
    fromPartial(object: Partial<MsgCreateFullRangePositionAndSuperfluidDelegateResponse>): MsgCreateFullRangePositionAndSuperfluidDelegateResponse;
};
export declare const MsgUnPoolWhitelistedPool: {
    encode(message: MsgUnPoolWhitelistedPool, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgUnPoolWhitelistedPool;
    fromPartial(object: Partial<MsgUnPoolWhitelistedPool>): MsgUnPoolWhitelistedPool;
};
export declare const MsgUnPoolWhitelistedPoolResponse: {
    encode(message: MsgUnPoolWhitelistedPoolResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgUnPoolWhitelistedPoolResponse;
    fromPartial(object: Partial<MsgUnPoolWhitelistedPoolResponse>): MsgUnPoolWhitelistedPoolResponse;
};
export declare const MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition: {
    encode(message: MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition;
    fromPartial(object: Partial<MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition>): MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition;
};
export declare const MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse: {
    encode(message: MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse;
    fromPartial(object: Partial<MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse>): MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse;
};
export declare const MsgAddToConcentratedLiquiditySuperfluidPosition: {
    encode(message: MsgAddToConcentratedLiquiditySuperfluidPosition, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgAddToConcentratedLiquiditySuperfluidPosition;
    fromPartial(object: Partial<MsgAddToConcentratedLiquiditySuperfluidPosition>): MsgAddToConcentratedLiquiditySuperfluidPosition;
};
export declare const MsgAddToConcentratedLiquiditySuperfluidPositionResponse: {
    encode(message: MsgAddToConcentratedLiquiditySuperfluidPositionResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgAddToConcentratedLiquiditySuperfluidPositionResponse;
    fromPartial(object: Partial<MsgAddToConcentratedLiquiditySuperfluidPositionResponse>): MsgAddToConcentratedLiquiditySuperfluidPositionResponse;
};
