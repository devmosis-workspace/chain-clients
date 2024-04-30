import { Coin, CoinAmino, CoinSDKType } from "../cosmos/base/v1beta1/coin";
import { Any, AnyAmino, AnySDKType } from "../google/protobuf/any";
import { Timestamp, TimestampSDKType } from "../google/protobuf/timestamp";
import { BinaryWriter } from "../binary";
import { isSet, bytesFromBase64, fromJsonTimestamp, base64FromBytes } from "../helpers";
/** Pool defines the generalized structure of a liquidity pool coming from any source chain to qoracle. */
export interface Pool {
  /** The identifier of this pool in the source chain */
  id: string;
  assets: Coin[];
  tvl: Uint8Array;
  apy: Uint8Array;
  /** Raw data of pool structure stored in the source chain */
  raw?: Any;
  /** Last time this pool was updated */
  updatedAt: Timestamp;
}
export interface PoolProtoMsg {
  typeUrl: "/quasarlabs.quasarnode.qoracle.Pool";
  value: Uint8Array;
}
/** Pool defines the generalized structure of a liquidity pool coming from any source chain to qoracle. */
export interface PoolAmino {
  /** The identifier of this pool in the source chain */
  id?: string;
  assets?: CoinAmino[];
  tvl?: string;
  apy?: string;
  /** Raw data of pool structure stored in the source chain */
  raw?: AnyAmino;
  /** Last time this pool was updated */
  updated_at?: string;
}
export interface PoolAminoMsg {
  type: "/quasarlabs.quasarnode.qoracle.Pool";
  value: PoolAmino;
}
/** Pool defines the generalized structure of a liquidity pool coming from any source chain to qoracle. */
export interface PoolSDKType {
  id: string;
  assets: CoinSDKType[];
  tvl: Uint8Array;
  apy: Uint8Array;
  raw?: AnySDKType;
  updated_at: TimestampSDKType;
}
function createBasePool(): Pool {
  return {
    id: "",
    assets: [],
    tvl: new Uint8Array(),
    apy: new Uint8Array(),
    raw: undefined,
    updatedAt: Timestamp.fromPartial({})
  };
}
export const Pool = {
  typeUrl: "/quasarlabs.quasarnode.qoracle.Pool",
  encode(message: Pool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    for (const v of message.assets) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.tvl.length !== 0) {
      writer.uint32(26).bytes(message.tvl);
    }
    if (message.apy.length !== 0) {
      writer.uint32(34).bytes(message.apy);
    }
    if (message.raw !== undefined) {
      Any.encode(message.raw, writer.uint32(42).fork()).ldelim();
    }
    if (message.updatedAt !== undefined) {
      Timestamp.encode(message.updatedAt, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): Pool {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      assets: Array.isArray(object?.assets) ? object.assets.map((e: any) => Coin.fromJSON(e)) : [],
      tvl: isSet(object.tvl) ? bytesFromBase64(object.tvl) : new Uint8Array(),
      apy: isSet(object.apy) ? bytesFromBase64(object.apy) : new Uint8Array(),
      raw: isSet(object.raw) ? Any.fromJSON(object.raw) : undefined,
      updatedAt: isSet(object.updatedAt) ? fromJsonTimestamp(object.updatedAt) : undefined
    };
  },
  fromPartial(object: Partial<Pool>): Pool {
    const message = createBasePool();
    message.id = object.id ?? "";
    message.assets = object.assets?.map(e => Coin.fromPartial(e)) || [];
    message.tvl = object.tvl ?? new Uint8Array();
    message.apy = object.apy ?? new Uint8Array();
    message.raw = object.raw !== undefined && object.raw !== null ? Any.fromPartial(object.raw) : undefined;
    message.updatedAt = object.updatedAt !== undefined && object.updatedAt !== null ? Timestamp.fromPartial(object.updatedAt) : undefined;
    return message;
  },
  fromAmino(object: PoolAmino): Pool {
    const message = createBasePool();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    message.assets = object.assets?.map(e => Coin.fromAmino(e)) || [];
    if (object.tvl !== undefined && object.tvl !== null) {
      message.tvl = bytesFromBase64(object.tvl);
    }
    if (object.apy !== undefined && object.apy !== null) {
      message.apy = bytesFromBase64(object.apy);
    }
    if (object.raw !== undefined && object.raw !== null) {
      message.raw = Any.fromAmino(object.raw);
    }
    if (object.updated_at !== undefined && object.updated_at !== null) {
      message.updatedAt = Timestamp.fromAmino(object.updated_at);
    }
    return message;
  },
  toAmino(message: Pool): PoolAmino {
    const obj: any = {};
    obj.id = message.id;
    if (message.assets) {
      obj.assets = message.assets.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.assets = [];
    }
    obj.tvl = message.tvl ? base64FromBytes(message.tvl) : undefined;
    obj.apy = message.apy ? base64FromBytes(message.apy) : undefined;
    obj.raw = message.raw ? Any.toAmino(message.raw) : undefined;
    obj.updated_at = message.updatedAt ? Timestamp.toAmino(message.updatedAt) : undefined;
    return obj;
  },
  fromAminoMsg(object: PoolAminoMsg): Pool {
    return Pool.fromAmino(object.value);
  },
  fromProtoMsg(message: PoolProtoMsg): Pool {
    return Pool.decode(message.value);
  },
  toProto(message: Pool): Uint8Array {
    return Pool.encode(message).finish();
  },
  toProtoMsg(message: Pool): PoolProtoMsg {
    return {
      typeUrl: "/quasarlabs.quasarnode.qoracle.Pool",
      value: Pool.encode(message).finish()
    };
  }
};