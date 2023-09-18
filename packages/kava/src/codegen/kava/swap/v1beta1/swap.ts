import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet, bytesFromBase64 } from "../../../helpers";
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
function createBaseParams(): Params {
  return {
    allowedPools: [],
    swapFee: ""
  };
}
export const Params = {
  typeUrl: "/kava.swap.v1beta1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.allowedPools) {
      AllowedPool.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.swapFee !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.swapFee, 18).atomics);
    }
    return writer;
  },
  fromJSON(object: any): Params {
    return {
      allowedPools: Array.isArray(object?.allowedPools) ? object.allowedPools.map((e: any) => AllowedPool.fromJSON(e)) : [],
      swapFee: isSet(object.swapFee) ? String(object.swapFee) : ""
    };
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.allowedPools = object.allowedPools?.map(e => AllowedPool.fromPartial(e)) || [];
    message.swapFee = object.swapFee ?? "";
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    return {
      allowedPools: Array.isArray(object?.allowed_pools) ? object.allowed_pools.map((e: any) => AllowedPool.fromAmino(e)) : [],
      swapFee: object.swap_fee
    };
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    if (message.allowedPools) {
      obj.allowed_pools = message.allowedPools.map(e => e ? AllowedPool.toAmino(e) : undefined);
    } else {
      obj.allowed_pools = [];
    }
    obj.swap_fee = message.swapFee;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/kava.swap.v1beta1.Params",
      value: Params.encode(message).finish()
    };
  }
};
function createBaseAllowedPool(): AllowedPool {
  return {
    tokenA: "",
    tokenB: ""
  };
}
export const AllowedPool = {
  typeUrl: "/kava.swap.v1beta1.AllowedPool",
  encode(message: AllowedPool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tokenA !== "") {
      writer.uint32(10).string(message.tokenA);
    }
    if (message.tokenB !== "") {
      writer.uint32(18).string(message.tokenB);
    }
    return writer;
  },
  fromJSON(object: any): AllowedPool {
    return {
      tokenA: isSet(object.tokenA) ? String(object.tokenA) : "",
      tokenB: isSet(object.tokenB) ? String(object.tokenB) : ""
    };
  },
  fromPartial(object: Partial<AllowedPool>): AllowedPool {
    const message = createBaseAllowedPool();
    message.tokenA = object.tokenA ?? "";
    message.tokenB = object.tokenB ?? "";
    return message;
  },
  fromAmino(object: AllowedPoolAmino): AllowedPool {
    return {
      tokenA: object.token_a,
      tokenB: object.token_b
    };
  },
  toAmino(message: AllowedPool): AllowedPoolAmino {
    const obj: any = {};
    obj.token_a = message.tokenA;
    obj.token_b = message.tokenB;
    return obj;
  },
  fromAminoMsg(object: AllowedPoolAminoMsg): AllowedPool {
    return AllowedPool.fromAmino(object.value);
  },
  fromProtoMsg(message: AllowedPoolProtoMsg): AllowedPool {
    return AllowedPool.decode(message.value);
  },
  toProto(message: AllowedPool): Uint8Array {
    return AllowedPool.encode(message).finish();
  },
  toProtoMsg(message: AllowedPool): AllowedPoolProtoMsg {
    return {
      typeUrl: "/kava.swap.v1beta1.AllowedPool",
      value: AllowedPool.encode(message).finish()
    };
  }
};
function createBasePoolRecord(): PoolRecord {
  return {
    poolId: "",
    reservesA: Coin.fromPartial({}),
    reservesB: Coin.fromPartial({}),
    totalShares: ""
  };
}
export const PoolRecord = {
  typeUrl: "/kava.swap.v1beta1.PoolRecord",
  encode(message: PoolRecord, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== "") {
      writer.uint32(10).string(message.poolId);
    }
    if (message.reservesA !== undefined) {
      Coin.encode(message.reservesA, writer.uint32(18).fork()).ldelim();
    }
    if (message.reservesB !== undefined) {
      Coin.encode(message.reservesB, writer.uint32(26).fork()).ldelim();
    }
    if (message.totalShares !== "") {
      writer.uint32(34).string(message.totalShares);
    }
    return writer;
  },
  fromJSON(object: any): PoolRecord {
    return {
      poolId: isSet(object.poolId) ? String(object.poolId) : "",
      reservesA: isSet(object.reservesA) ? Coin.fromJSON(object.reservesA) : undefined,
      reservesB: isSet(object.reservesB) ? Coin.fromJSON(object.reservesB) : undefined,
      totalShares: isSet(object.totalShares) ? String(object.totalShares) : ""
    };
  },
  fromPartial(object: Partial<PoolRecord>): PoolRecord {
    const message = createBasePoolRecord();
    message.poolId = object.poolId ?? "";
    message.reservesA = object.reservesA !== undefined && object.reservesA !== null ? Coin.fromPartial(object.reservesA) : undefined;
    message.reservesB = object.reservesB !== undefined && object.reservesB !== null ? Coin.fromPartial(object.reservesB) : undefined;
    message.totalShares = object.totalShares ?? "";
    return message;
  },
  fromAmino(object: PoolRecordAmino): PoolRecord {
    return {
      poolId: object.pool_id,
      reservesA: object?.reserves_a ? Coin.fromAmino(object.reserves_a) : undefined,
      reservesB: object?.reserves_b ? Coin.fromAmino(object.reserves_b) : undefined,
      totalShares: object.total_shares
    };
  },
  toAmino(message: PoolRecord): PoolRecordAmino {
    const obj: any = {};
    obj.pool_id = message.poolId;
    obj.reserves_a = message.reservesA ? Coin.toAmino(message.reservesA) : undefined;
    obj.reserves_b = message.reservesB ? Coin.toAmino(message.reservesB) : undefined;
    obj.total_shares = message.totalShares;
    return obj;
  },
  fromAminoMsg(object: PoolRecordAminoMsg): PoolRecord {
    return PoolRecord.fromAmino(object.value);
  },
  fromProtoMsg(message: PoolRecordProtoMsg): PoolRecord {
    return PoolRecord.decode(message.value);
  },
  toProto(message: PoolRecord): Uint8Array {
    return PoolRecord.encode(message).finish();
  },
  toProtoMsg(message: PoolRecord): PoolRecordProtoMsg {
    return {
      typeUrl: "/kava.swap.v1beta1.PoolRecord",
      value: PoolRecord.encode(message).finish()
    };
  }
};
function createBaseShareRecord(): ShareRecord {
  return {
    depositor: new Uint8Array(),
    poolId: "",
    sharesOwned: ""
  };
}
export const ShareRecord = {
  typeUrl: "/kava.swap.v1beta1.ShareRecord",
  encode(message: ShareRecord, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.depositor.length !== 0) {
      writer.uint32(10).bytes(message.depositor);
    }
    if (message.poolId !== "") {
      writer.uint32(18).string(message.poolId);
    }
    if (message.sharesOwned !== "") {
      writer.uint32(26).string(message.sharesOwned);
    }
    return writer;
  },
  fromJSON(object: any): ShareRecord {
    return {
      depositor: isSet(object.depositor) ? bytesFromBase64(object.depositor) : new Uint8Array(),
      poolId: isSet(object.poolId) ? String(object.poolId) : "",
      sharesOwned: isSet(object.sharesOwned) ? String(object.sharesOwned) : ""
    };
  },
  fromPartial(object: Partial<ShareRecord>): ShareRecord {
    const message = createBaseShareRecord();
    message.depositor = object.depositor ?? new Uint8Array();
    message.poolId = object.poolId ?? "";
    message.sharesOwned = object.sharesOwned ?? "";
    return message;
  },
  fromAmino(object: ShareRecordAmino): ShareRecord {
    return {
      depositor: object.depositor,
      poolId: object.pool_id,
      sharesOwned: object.shares_owned
    };
  },
  toAmino(message: ShareRecord): ShareRecordAmino {
    const obj: any = {};
    obj.depositor = message.depositor;
    obj.pool_id = message.poolId;
    obj.shares_owned = message.sharesOwned;
    return obj;
  },
  fromAminoMsg(object: ShareRecordAminoMsg): ShareRecord {
    return ShareRecord.fromAmino(object.value);
  },
  fromProtoMsg(message: ShareRecordProtoMsg): ShareRecord {
    return ShareRecord.decode(message.value);
  },
  toProto(message: ShareRecord): Uint8Array {
    return ShareRecord.encode(message).finish();
  },
  toProtoMsg(message: ShareRecord): ShareRecordProtoMsg {
    return {
      typeUrl: "/kava.swap.v1beta1.ShareRecord",
      value: ShareRecord.encode(message).finish()
    };
  }
};