import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
/** Params defines the parameters for the swap module. */
export interface Params {
    /** allowed_pools defines that pools that are allowed to be created */
    allowedPools: AllowedPool[];
    /** swap_fee defines the swap fee for all pools */
    swapFee: string;
}
export interface ParamsProtoMsg {
    typeUrl: "/kava.swap.v1beta1.Params";
    value: Uint8Array;
}
/** Params defines the parameters for the swap module. */
export interface ParamsAmino {
    /** allowed_pools defines that pools that are allowed to be created */
    allowed_pools: AllowedPoolAmino[];
    /** swap_fee defines the swap fee for all pools */
    swap_fee: string;
}
export interface ParamsAminoMsg {
    type: "/kava.swap.v1beta1.Params";
    value: ParamsAmino;
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
export interface AllowedPoolProtoMsg {
    typeUrl: "/kava.swap.v1beta1.AllowedPool";
    value: Uint8Array;
}
/** AllowedPool defines a pool that is allowed to be created */
export interface AllowedPoolAmino {
    /** token_a represents the a token allowed */
    token_a: string;
    /** token_b represents the b token allowed */
    token_b: string;
}
export interface AllowedPoolAminoMsg {
    type: "/kava.swap.v1beta1.AllowedPool";
    value: AllowedPoolAmino;
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
    reservesA: Coin;
    /** reserves_b is the a token coin reserves */
    reservesB: Coin;
    /** total_shares is the total distrubuted shares of the pool */
    totalShares: string;
}
export interface PoolRecordProtoMsg {
    typeUrl: "/kava.swap.v1beta1.PoolRecord";
    value: Uint8Array;
}
/**
 * PoolRecord represents the state of a liquidity pool
 * and is used to store the state of a denominated pool
 */
export interface PoolRecordAmino {
    /** pool_id represents the unique id of the pool */
    pool_id: string;
    /** reserves_a is the a token coin reserves */
    reserves_a?: CoinAmino;
    /** reserves_b is the a token coin reserves */
    reserves_b?: CoinAmino;
    /** total_shares is the total distrubuted shares of the pool */
    total_shares: string;
}
export interface PoolRecordAminoMsg {
    type: "/kava.swap.v1beta1.PoolRecord";
    value: PoolRecordAmino;
}
/**
 * PoolRecord represents the state of a liquidity pool
 * and is used to store the state of a denominated pool
 */
export interface PoolRecordSDKType {
    pool_id: string;
    reserves_a: CoinSDKType;
    reserves_b: CoinSDKType;
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
export interface ShareRecordProtoMsg {
    typeUrl: "/kava.swap.v1beta1.ShareRecord";
    value: Uint8Array;
}
/** ShareRecord stores the shares owned for a depositor and pool */
export interface ShareRecordAmino {
    /** depositor represents the owner of the shares */
    depositor: Uint8Array;
    /** pool_id represents the pool the shares belong to */
    pool_id: string;
    /** shares_owned represents the number of shares owned by depsoitor for the pool_id */
    shares_owned: string;
}
export interface ShareRecordAminoMsg {
    type: "/kava.swap.v1beta1.ShareRecord";
    value: ShareRecordAmino;
}
/** ShareRecord stores the shares owned for a depositor and pool */
export interface ShareRecordSDKType {
    depositor: Uint8Array;
    pool_id: string;
    shares_owned: string;
}
export declare const Params: {
    typeUrl: string;
    encode(message: Params, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Params;
    fromPartial(object: Partial<Params>): Params;
    fromAmino(object: ParamsAmino): Params;
    toAmino(message: Params): ParamsAmino;
    fromAminoMsg(object: ParamsAminoMsg): Params;
    fromProtoMsg(message: ParamsProtoMsg): Params;
    toProto(message: Params): Uint8Array;
    toProtoMsg(message: Params): ParamsProtoMsg;
};
export declare const AllowedPool: {
    typeUrl: string;
    encode(message: AllowedPool, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): AllowedPool;
    fromPartial(object: Partial<AllowedPool>): AllowedPool;
    fromAmino(object: AllowedPoolAmino): AllowedPool;
    toAmino(message: AllowedPool): AllowedPoolAmino;
    fromAminoMsg(object: AllowedPoolAminoMsg): AllowedPool;
    fromProtoMsg(message: AllowedPoolProtoMsg): AllowedPool;
    toProto(message: AllowedPool): Uint8Array;
    toProtoMsg(message: AllowedPool): AllowedPoolProtoMsg;
};
export declare const PoolRecord: {
    typeUrl: string;
    encode(message: PoolRecord, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): PoolRecord;
    fromPartial(object: Partial<PoolRecord>): PoolRecord;
    fromAmino(object: PoolRecordAmino): PoolRecord;
    toAmino(message: PoolRecord): PoolRecordAmino;
    fromAminoMsg(object: PoolRecordAminoMsg): PoolRecord;
    fromProtoMsg(message: PoolRecordProtoMsg): PoolRecord;
    toProto(message: PoolRecord): Uint8Array;
    toProtoMsg(message: PoolRecord): PoolRecordProtoMsg;
};
export declare const ShareRecord: {
    typeUrl: string;
    encode(message: ShareRecord, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ShareRecord;
    fromPartial(object: Partial<ShareRecord>): ShareRecord;
    fromAmino(object: ShareRecordAmino): ShareRecord;
    toAmino(message: ShareRecord): ShareRecordAmino;
    fromAminoMsg(object: ShareRecordAminoMsg): ShareRecord;
    fromProtoMsg(message: ShareRecordProtoMsg): ShareRecord;
    toProto(message: ShareRecord): Uint8Array;
    toProtoMsg(message: ShareRecord): ShareRecordProtoMsg;
};
