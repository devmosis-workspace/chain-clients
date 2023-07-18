import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
/** Params defines the parameters for the swap module. */
export interface Params {
    /** allowed_pools defines that pools that are allowed to be created */
    allowedPools: AllowedPool[];
    /** swap_fee defines the swap fee for all pools */
    swapFee: string;
}
/** Params defines the parameters for the swap module. */
export interface ParamsSDKType {
    allowed_pools: AllowedPoolSDKType[];
    swap_fee: string;
}
/** AllowedPool defines a pool that is allowed to be created */
export interface AllowedPool {
    /** token_a represents the a token allowed */
    tokenA: string;
    /** token_b represents the b token allowed */
    tokenB: string;
}
/** AllowedPool defines a pool that is allowed to be created */
export interface AllowedPoolSDKType {
    token_a: string;
    token_b: string;
}
/**
 * PoolRecord represents the state of a liquidity pool
 * and is used to store the state of a denominated pool
 */
export interface PoolRecord {
    /** pool_id represents the unique id of the pool */
    poolId: string;
    /** reserves_a is the a token coin reserves */
    reservesA?: Coin;
    /** reserves_b is the a token coin reserves */
    reservesB?: Coin;
    /** total_shares is the total distrubuted shares of the pool */
    totalShares: string;
}
/**
 * PoolRecord represents the state of a liquidity pool
 * and is used to store the state of a denominated pool
 */
export interface PoolRecordSDKType {
    pool_id: string;
    reserves_a?: CoinSDKType;
    reserves_b?: CoinSDKType;
    total_shares: string;
}
/** ShareRecord stores the shares owned for a depositor and pool */
export interface ShareRecord {
    /** depositor represents the owner of the shares */
    depositor: Uint8Array;
    /** pool_id represents the pool the shares belong to */
    poolId: string;
    /** shares_owned represents the number of shares owned by depsoitor for the pool_id */
    sharesOwned: string;
}
/** ShareRecord stores the shares owned for a depositor and pool */
export interface ShareRecordSDKType {
    depositor: Uint8Array;
    pool_id: string;
    shares_owned: string;
}
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Params;
    fromPartial(object: Partial<Params>): Params;
};
export declare const AllowedPool: {
    encode(message: AllowedPool, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): AllowedPool;
    fromPartial(object: Partial<AllowedPool>): AllowedPool;
};
export declare const PoolRecord: {
    encode(message: PoolRecord, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): PoolRecord;
    fromPartial(object: Partial<PoolRecord>): PoolRecord;
};
export declare const ShareRecord: {
    encode(message: ShareRecord, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): ShareRecord;
    fromPartial(object: Partial<ShareRecord>): ShareRecord;
};
