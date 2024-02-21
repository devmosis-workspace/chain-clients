import { TradePairID, TradePairIDAmino, TradePairIDSDKType } from "./trade_pair_id";
import { BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
export interface PoolReservesKey {
  tradePairId?: TradePairID;
  tickIndexTakerToMaker: bigint;
  fee: bigint;
}
export interface PoolReservesKeyProtoMsg {
  typeUrl: "/neutron.dex.PoolReservesKey";
  value: Uint8Array;
}
export interface PoolReservesKeyAmino {
  trade_pair_id?: TradePairIDAmino;
  tick_index_taker_to_maker?: string;
  fee?: string;
}
export interface PoolReservesKeyAminoMsg {
  type: "/neutron.dex.PoolReservesKey";
  value: PoolReservesKeyAmino;
}
export interface PoolReservesKeySDKType {
  trade_pair_id?: TradePairIDSDKType;
  tick_index_taker_to_maker: bigint;
  fee: bigint;
}
export interface PoolReserves {
  key?: PoolReservesKey;
  reservesMakerDenom: string;
  priceTakerToMaker: string;
  priceOppositeTakerToMaker: string;
}
export interface PoolReservesProtoMsg {
  typeUrl: "/neutron.dex.PoolReserves";
  value: Uint8Array;
}
export interface PoolReservesAmino {
  key?: PoolReservesKeyAmino;
  reserves_maker_denom?: string;
  price_taker_to_maker?: string;
  price_opposite_taker_to_maker?: string;
}
export interface PoolReservesAminoMsg {
  type: "/neutron.dex.PoolReserves";
  value: PoolReservesAmino;
}
export interface PoolReservesSDKType {
  key?: PoolReservesKeySDKType;
  reserves_maker_denom: string;
  price_taker_to_maker: string;
  price_opposite_taker_to_maker: string;
}
function createBasePoolReservesKey(): PoolReservesKey {
  return {
    tradePairId: undefined,
    tickIndexTakerToMaker: BigInt(0),
    fee: BigInt(0)
  };
}
export const PoolReservesKey = {
  typeUrl: "/neutron.dex.PoolReservesKey",
  encode(message: PoolReservesKey, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tradePairId !== undefined) {
      TradePairID.encode(message.tradePairId, writer.uint32(10).fork()).ldelim();
    }
    if (message.tickIndexTakerToMaker !== BigInt(0)) {
      writer.uint32(16).int64(message.tickIndexTakerToMaker);
    }
    if (message.fee !== BigInt(0)) {
      writer.uint32(24).uint64(message.fee);
    }
    return writer;
  },
  fromJSON(object: any): PoolReservesKey {
    return {
      tradePairId: isSet(object.tradePairId) ? TradePairID.fromJSON(object.tradePairId) : undefined,
      tickIndexTakerToMaker: isSet(object.tickIndexTakerToMaker) ? BigInt(object.tickIndexTakerToMaker.toString()) : BigInt(0),
      fee: isSet(object.fee) ? BigInt(object.fee.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<PoolReservesKey>): PoolReservesKey {
    const message = createBasePoolReservesKey();
    message.tradePairId = object.tradePairId !== undefined && object.tradePairId !== null ? TradePairID.fromPartial(object.tradePairId) : undefined;
    message.tickIndexTakerToMaker = object.tickIndexTakerToMaker !== undefined && object.tickIndexTakerToMaker !== null ? BigInt(object.tickIndexTakerToMaker.toString()) : BigInt(0);
    message.fee = object.fee !== undefined && object.fee !== null ? BigInt(object.fee.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: PoolReservesKeyAmino): PoolReservesKey {
    const message = createBasePoolReservesKey();
    if (object.trade_pair_id !== undefined && object.trade_pair_id !== null) {
      message.tradePairId = TradePairID.fromAmino(object.trade_pair_id);
    }
    if (object.tick_index_taker_to_maker !== undefined && object.tick_index_taker_to_maker !== null) {
      message.tickIndexTakerToMaker = BigInt(object.tick_index_taker_to_maker);
    }
    if (object.fee !== undefined && object.fee !== null) {
      message.fee = BigInt(object.fee);
    }
    return message;
  },
  toAmino(message: PoolReservesKey): PoolReservesKeyAmino {
    const obj: any = {};
    obj.trade_pair_id = message.tradePairId ? TradePairID.toAmino(message.tradePairId) : undefined;
    obj.tick_index_taker_to_maker = message.tickIndexTakerToMaker ? message.tickIndexTakerToMaker.toString() : undefined;
    obj.fee = message.fee ? message.fee.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: PoolReservesKeyAminoMsg): PoolReservesKey {
    return PoolReservesKey.fromAmino(object.value);
  },
  fromProtoMsg(message: PoolReservesKeyProtoMsg): PoolReservesKey {
    return PoolReservesKey.decode(message.value);
  },
  toProto(message: PoolReservesKey): Uint8Array {
    return PoolReservesKey.encode(message).finish();
  },
  toProtoMsg(message: PoolReservesKey): PoolReservesKeyProtoMsg {
    return {
      typeUrl: "/neutron.dex.PoolReservesKey",
      value: PoolReservesKey.encode(message).finish()
    };
  }
};
function createBasePoolReserves(): PoolReserves {
  return {
    key: undefined,
    reservesMakerDenom: "",
    priceTakerToMaker: "",
    priceOppositeTakerToMaker: ""
  };
}
export const PoolReserves = {
  typeUrl: "/neutron.dex.PoolReserves",
  encode(message: PoolReserves, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key !== undefined) {
      PoolReservesKey.encode(message.key, writer.uint32(10).fork()).ldelim();
    }
    if (message.reservesMakerDenom !== "") {
      writer.uint32(18).string(message.reservesMakerDenom);
    }
    if (message.priceTakerToMaker !== "") {
      writer.uint32(26).string(message.priceTakerToMaker);
    }
    if (message.priceOppositeTakerToMaker !== "") {
      writer.uint32(34).string(message.priceOppositeTakerToMaker);
    }
    return writer;
  },
  fromJSON(object: any): PoolReserves {
    return {
      key: isSet(object.key) ? PoolReservesKey.fromJSON(object.key) : undefined,
      reservesMakerDenom: isSet(object.reservesMakerDenom) ? String(object.reservesMakerDenom) : "",
      priceTakerToMaker: isSet(object.priceTakerToMaker) ? String(object.priceTakerToMaker) : "",
      priceOppositeTakerToMaker: isSet(object.priceOppositeTakerToMaker) ? String(object.priceOppositeTakerToMaker) : ""
    };
  },
  fromPartial(object: Partial<PoolReserves>): PoolReserves {
    const message = createBasePoolReserves();
    message.key = object.key !== undefined && object.key !== null ? PoolReservesKey.fromPartial(object.key) : undefined;
    message.reservesMakerDenom = object.reservesMakerDenom ?? "";
    message.priceTakerToMaker = object.priceTakerToMaker ?? "";
    message.priceOppositeTakerToMaker = object.priceOppositeTakerToMaker ?? "";
    return message;
  },
  fromAmino(object: PoolReservesAmino): PoolReserves {
    const message = createBasePoolReserves();
    if (object.key !== undefined && object.key !== null) {
      message.key = PoolReservesKey.fromAmino(object.key);
    }
    if (object.reserves_maker_denom !== undefined && object.reserves_maker_denom !== null) {
      message.reservesMakerDenom = object.reserves_maker_denom;
    }
    if (object.price_taker_to_maker !== undefined && object.price_taker_to_maker !== null) {
      message.priceTakerToMaker = object.price_taker_to_maker;
    }
    if (object.price_opposite_taker_to_maker !== undefined && object.price_opposite_taker_to_maker !== null) {
      message.priceOppositeTakerToMaker = object.price_opposite_taker_to_maker;
    }
    return message;
  },
  toAmino(message: PoolReserves): PoolReservesAmino {
    const obj: any = {};
    obj.key = message.key ? PoolReservesKey.toAmino(message.key) : undefined;
    obj.reserves_maker_denom = message.reservesMakerDenom;
    obj.price_taker_to_maker = message.priceTakerToMaker;
    obj.price_opposite_taker_to_maker = message.priceOppositeTakerToMaker;
    return obj;
  },
  fromAminoMsg(object: PoolReservesAminoMsg): PoolReserves {
    return PoolReserves.fromAmino(object.value);
  },
  fromProtoMsg(message: PoolReservesProtoMsg): PoolReserves {
    return PoolReserves.decode(message.value);
  },
  toProto(message: PoolReserves): Uint8Array {
    return PoolReserves.encode(message).finish();
  },
  toProtoMsg(message: PoolReserves): PoolReservesProtoMsg {
    return {
      typeUrl: "/neutron.dex.PoolReserves",
      value: PoolReserves.encode(message).finish()
    };
  }
};