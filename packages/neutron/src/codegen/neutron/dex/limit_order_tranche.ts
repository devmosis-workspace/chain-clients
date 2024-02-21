import { TradePairID, TradePairIDAmino, TradePairIDSDKType } from "./trade_pair_id";
import { Timestamp, TimestampSDKType } from "../../google/protobuf/timestamp";
import { BinaryWriter } from "../../binary";
import { isSet, fromJsonTimestamp } from "../../helpers";
export interface LimitOrderTrancheKey {
  tradePairId?: TradePairID;
  tickIndexTakerToMaker: bigint;
  trancheKey: string;
}
export interface LimitOrderTrancheKeyProtoMsg {
  typeUrl: "/neutron.dex.LimitOrderTrancheKey";
  value: Uint8Array;
}
export interface LimitOrderTrancheKeyAmino {
  trade_pair_id?: TradePairIDAmino;
  tick_index_taker_to_maker?: string;
  tranche_key?: string;
}
export interface LimitOrderTrancheKeyAminoMsg {
  type: "/neutron.dex.LimitOrderTrancheKey";
  value: LimitOrderTrancheKeyAmino;
}
export interface LimitOrderTrancheKeySDKType {
  trade_pair_id?: TradePairIDSDKType;
  tick_index_taker_to_maker: bigint;
  tranche_key: string;
}
export interface LimitOrderTranche {
  key?: LimitOrderTrancheKey;
  reservesMakerDenom: string;
  reservesTakerDenom: string;
  totalMakerDenom: string;
  totalTakerDenom: string;
  /**
   * JIT orders also use goodTilDate to handle deletion but represent a special case
   * All JIT orders have a goodTilDate of 0 and an exception is made to still still treat these orders as live
   * Order deletion still functions the same and the orders will be deleted at the end of the block
   */
  expirationTime?: Timestamp;
  priceTakerToMaker: string;
}
export interface LimitOrderTrancheProtoMsg {
  typeUrl: "/neutron.dex.LimitOrderTranche";
  value: Uint8Array;
}
export interface LimitOrderTrancheAmino {
  key?: LimitOrderTrancheKeyAmino;
  reserves_maker_denom?: string;
  reserves_taker_denom?: string;
  total_maker_denom?: string;
  total_taker_denom?: string;
  /**
   * JIT orders also use goodTilDate to handle deletion but represent a special case
   * All JIT orders have a goodTilDate of 0 and an exception is made to still still treat these orders as live
   * Order deletion still functions the same and the orders will be deleted at the end of the block
   */
  expiration_time?: string;
  price_taker_to_maker?: string;
}
export interface LimitOrderTrancheAminoMsg {
  type: "/neutron.dex.LimitOrderTranche";
  value: LimitOrderTrancheAmino;
}
export interface LimitOrderTrancheSDKType {
  key?: LimitOrderTrancheKeySDKType;
  reserves_maker_denom: string;
  reserves_taker_denom: string;
  total_maker_denom: string;
  total_taker_denom: string;
  expiration_time?: TimestampSDKType;
  price_taker_to_maker: string;
}
function createBaseLimitOrderTrancheKey(): LimitOrderTrancheKey {
  return {
    tradePairId: undefined,
    tickIndexTakerToMaker: BigInt(0),
    trancheKey: ""
  };
}
export const LimitOrderTrancheKey = {
  typeUrl: "/neutron.dex.LimitOrderTrancheKey",
  encode(message: LimitOrderTrancheKey, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tradePairId !== undefined) {
      TradePairID.encode(message.tradePairId, writer.uint32(10).fork()).ldelim();
    }
    if (message.tickIndexTakerToMaker !== BigInt(0)) {
      writer.uint32(16).int64(message.tickIndexTakerToMaker);
    }
    if (message.trancheKey !== "") {
      writer.uint32(26).string(message.trancheKey);
    }
    return writer;
  },
  fromJSON(object: any): LimitOrderTrancheKey {
    return {
      tradePairId: isSet(object.tradePairId) ? TradePairID.fromJSON(object.tradePairId) : undefined,
      tickIndexTakerToMaker: isSet(object.tickIndexTakerToMaker) ? BigInt(object.tickIndexTakerToMaker.toString()) : BigInt(0),
      trancheKey: isSet(object.trancheKey) ? String(object.trancheKey) : ""
    };
  },
  fromPartial(object: Partial<LimitOrderTrancheKey>): LimitOrderTrancheKey {
    const message = createBaseLimitOrderTrancheKey();
    message.tradePairId = object.tradePairId !== undefined && object.tradePairId !== null ? TradePairID.fromPartial(object.tradePairId) : undefined;
    message.tickIndexTakerToMaker = object.tickIndexTakerToMaker !== undefined && object.tickIndexTakerToMaker !== null ? BigInt(object.tickIndexTakerToMaker.toString()) : BigInt(0);
    message.trancheKey = object.trancheKey ?? "";
    return message;
  },
  fromAmino(object: LimitOrderTrancheKeyAmino): LimitOrderTrancheKey {
    const message = createBaseLimitOrderTrancheKey();
    if (object.trade_pair_id !== undefined && object.trade_pair_id !== null) {
      message.tradePairId = TradePairID.fromAmino(object.trade_pair_id);
    }
    if (object.tick_index_taker_to_maker !== undefined && object.tick_index_taker_to_maker !== null) {
      message.tickIndexTakerToMaker = BigInt(object.tick_index_taker_to_maker);
    }
    if (object.tranche_key !== undefined && object.tranche_key !== null) {
      message.trancheKey = object.tranche_key;
    }
    return message;
  },
  toAmino(message: LimitOrderTrancheKey): LimitOrderTrancheKeyAmino {
    const obj: any = {};
    obj.trade_pair_id = message.tradePairId ? TradePairID.toAmino(message.tradePairId) : undefined;
    obj.tick_index_taker_to_maker = message.tickIndexTakerToMaker ? message.tickIndexTakerToMaker.toString() : undefined;
    obj.tranche_key = message.trancheKey;
    return obj;
  },
  fromAminoMsg(object: LimitOrderTrancheKeyAminoMsg): LimitOrderTrancheKey {
    return LimitOrderTrancheKey.fromAmino(object.value);
  },
  fromProtoMsg(message: LimitOrderTrancheKeyProtoMsg): LimitOrderTrancheKey {
    return LimitOrderTrancheKey.decode(message.value);
  },
  toProto(message: LimitOrderTrancheKey): Uint8Array {
    return LimitOrderTrancheKey.encode(message).finish();
  },
  toProtoMsg(message: LimitOrderTrancheKey): LimitOrderTrancheKeyProtoMsg {
    return {
      typeUrl: "/neutron.dex.LimitOrderTrancheKey",
      value: LimitOrderTrancheKey.encode(message).finish()
    };
  }
};
function createBaseLimitOrderTranche(): LimitOrderTranche {
  return {
    key: undefined,
    reservesMakerDenom: "",
    reservesTakerDenom: "",
    totalMakerDenom: "",
    totalTakerDenom: "",
    expirationTime: undefined,
    priceTakerToMaker: ""
  };
}
export const LimitOrderTranche = {
  typeUrl: "/neutron.dex.LimitOrderTranche",
  encode(message: LimitOrderTranche, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key !== undefined) {
      LimitOrderTrancheKey.encode(message.key, writer.uint32(10).fork()).ldelim();
    }
    if (message.reservesMakerDenom !== "") {
      writer.uint32(18).string(message.reservesMakerDenom);
    }
    if (message.reservesTakerDenom !== "") {
      writer.uint32(26).string(message.reservesTakerDenom);
    }
    if (message.totalMakerDenom !== "") {
      writer.uint32(34).string(message.totalMakerDenom);
    }
    if (message.totalTakerDenom !== "") {
      writer.uint32(42).string(message.totalTakerDenom);
    }
    if (message.expirationTime !== undefined) {
      Timestamp.encode(message.expirationTime, writer.uint32(50).fork()).ldelim();
    }
    if (message.priceTakerToMaker !== "") {
      writer.uint32(58).string(message.priceTakerToMaker);
    }
    return writer;
  },
  fromJSON(object: any): LimitOrderTranche {
    return {
      key: isSet(object.key) ? LimitOrderTrancheKey.fromJSON(object.key) : undefined,
      reservesMakerDenom: isSet(object.reservesMakerDenom) ? String(object.reservesMakerDenom) : "",
      reservesTakerDenom: isSet(object.reservesTakerDenom) ? String(object.reservesTakerDenom) : "",
      totalMakerDenom: isSet(object.totalMakerDenom) ? String(object.totalMakerDenom) : "",
      totalTakerDenom: isSet(object.totalTakerDenom) ? String(object.totalTakerDenom) : "",
      expirationTime: isSet(object.expirationTime) ? fromJsonTimestamp(object.expirationTime) : undefined,
      priceTakerToMaker: isSet(object.priceTakerToMaker) ? String(object.priceTakerToMaker) : ""
    };
  },
  fromPartial(object: Partial<LimitOrderTranche>): LimitOrderTranche {
    const message = createBaseLimitOrderTranche();
    message.key = object.key !== undefined && object.key !== null ? LimitOrderTrancheKey.fromPartial(object.key) : undefined;
    message.reservesMakerDenom = object.reservesMakerDenom ?? "";
    message.reservesTakerDenom = object.reservesTakerDenom ?? "";
    message.totalMakerDenom = object.totalMakerDenom ?? "";
    message.totalTakerDenom = object.totalTakerDenom ?? "";
    message.expirationTime = object.expirationTime !== undefined && object.expirationTime !== null ? Timestamp.fromPartial(object.expirationTime) : undefined;
    message.priceTakerToMaker = object.priceTakerToMaker ?? "";
    return message;
  },
  fromAmino(object: LimitOrderTrancheAmino): LimitOrderTranche {
    const message = createBaseLimitOrderTranche();
    if (object.key !== undefined && object.key !== null) {
      message.key = LimitOrderTrancheKey.fromAmino(object.key);
    }
    if (object.reserves_maker_denom !== undefined && object.reserves_maker_denom !== null) {
      message.reservesMakerDenom = object.reserves_maker_denom;
    }
    if (object.reserves_taker_denom !== undefined && object.reserves_taker_denom !== null) {
      message.reservesTakerDenom = object.reserves_taker_denom;
    }
    if (object.total_maker_denom !== undefined && object.total_maker_denom !== null) {
      message.totalMakerDenom = object.total_maker_denom;
    }
    if (object.total_taker_denom !== undefined && object.total_taker_denom !== null) {
      message.totalTakerDenom = object.total_taker_denom;
    }
    if (object.expiration_time !== undefined && object.expiration_time !== null) {
      message.expirationTime = Timestamp.fromAmino(object.expiration_time);
    }
    if (object.price_taker_to_maker !== undefined && object.price_taker_to_maker !== null) {
      message.priceTakerToMaker = object.price_taker_to_maker;
    }
    return message;
  },
  toAmino(message: LimitOrderTranche): LimitOrderTrancheAmino {
    const obj: any = {};
    obj.key = message.key ? LimitOrderTrancheKey.toAmino(message.key) : undefined;
    obj.reserves_maker_denom = message.reservesMakerDenom;
    obj.reserves_taker_denom = message.reservesTakerDenom;
    obj.total_maker_denom = message.totalMakerDenom;
    obj.total_taker_denom = message.totalTakerDenom;
    obj.expiration_time = message.expirationTime ? Timestamp.toAmino(message.expirationTime) : undefined;
    obj.price_taker_to_maker = message.priceTakerToMaker;
    return obj;
  },
  fromAminoMsg(object: LimitOrderTrancheAminoMsg): LimitOrderTranche {
    return LimitOrderTranche.fromAmino(object.value);
  },
  fromProtoMsg(message: LimitOrderTrancheProtoMsg): LimitOrderTranche {
    return LimitOrderTranche.decode(message.value);
  },
  toProto(message: LimitOrderTranche): Uint8Array {
    return LimitOrderTranche.encode(message).finish();
  },
  toProtoMsg(message: LimitOrderTranche): LimitOrderTrancheProtoMsg {
    return {
      typeUrl: "/neutron.dex.LimitOrderTranche",
      value: LimitOrderTranche.encode(message).finish()
    };
  }
};