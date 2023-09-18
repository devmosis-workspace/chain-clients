import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** EventFeeMarket is the event type for the fee market module */
export interface EventFeeMarket {
  /** base_fee for EIP-1559 blocks */
  baseFee: string;
}
export interface EventFeeMarketProtoMsg {
  typeUrl: "/ethermint.feemarket.v1.EventFeeMarket";
  value: Uint8Array;
}
/** EventFeeMarket is the event type for the fee market module */
export interface EventFeeMarketAmino {
  /** base_fee for EIP-1559 blocks */
  base_fee: string;
}
export interface EventFeeMarketAminoMsg {
  type: "/ethermint.feemarket.v1.EventFeeMarket";
  value: EventFeeMarketAmino;
}
/** EventFeeMarket is the event type for the fee market module */
export interface EventFeeMarketSDKType {
  base_fee: string;
}
/** EventBlockGas defines an Ethereum block gas event */
export interface EventBlockGas {
  /** height of the block */
  height: string;
  /** amount of gas wanted by the block */
  amount: string;
}
export interface EventBlockGasProtoMsg {
  typeUrl: "/ethermint.feemarket.v1.EventBlockGas";
  value: Uint8Array;
}
/** EventBlockGas defines an Ethereum block gas event */
export interface EventBlockGasAmino {
  /** height of the block */
  height: string;
  /** amount of gas wanted by the block */
  amount: string;
}
export interface EventBlockGasAminoMsg {
  type: "/ethermint.feemarket.v1.EventBlockGas";
  value: EventBlockGasAmino;
}
/** EventBlockGas defines an Ethereum block gas event */
export interface EventBlockGasSDKType {
  height: string;
  amount: string;
}
function createBaseEventFeeMarket(): EventFeeMarket {
  return {
    baseFee: ""
  };
}
export const EventFeeMarket = {
  typeUrl: "/ethermint.feemarket.v1.EventFeeMarket",
  encode(message: EventFeeMarket, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.baseFee !== "") {
      writer.uint32(10).string(message.baseFee);
    }
    return writer;
  },
  fromJSON(object: any): EventFeeMarket {
    return {
      baseFee: isSet(object.baseFee) ? String(object.baseFee) : ""
    };
  },
  fromPartial(object: Partial<EventFeeMarket>): EventFeeMarket {
    const message = createBaseEventFeeMarket();
    message.baseFee = object.baseFee ?? "";
    return message;
  },
  fromAmino(object: EventFeeMarketAmino): EventFeeMarket {
    return {
      baseFee: object.base_fee
    };
  },
  toAmino(message: EventFeeMarket): EventFeeMarketAmino {
    const obj: any = {};
    obj.base_fee = message.baseFee;
    return obj;
  },
  fromAminoMsg(object: EventFeeMarketAminoMsg): EventFeeMarket {
    return EventFeeMarket.fromAmino(object.value);
  },
  fromProtoMsg(message: EventFeeMarketProtoMsg): EventFeeMarket {
    return EventFeeMarket.decode(message.value);
  },
  toProto(message: EventFeeMarket): Uint8Array {
    return EventFeeMarket.encode(message).finish();
  },
  toProtoMsg(message: EventFeeMarket): EventFeeMarketProtoMsg {
    return {
      typeUrl: "/ethermint.feemarket.v1.EventFeeMarket",
      value: EventFeeMarket.encode(message).finish()
    };
  }
};
function createBaseEventBlockGas(): EventBlockGas {
  return {
    height: "",
    amount: ""
  };
}
export const EventBlockGas = {
  typeUrl: "/ethermint.feemarket.v1.EventBlockGas",
  encode(message: EventBlockGas, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.height !== "") {
      writer.uint32(10).string(message.height);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    return writer;
  },
  fromJSON(object: any): EventBlockGas {
    return {
      height: isSet(object.height) ? String(object.height) : "",
      amount: isSet(object.amount) ? String(object.amount) : ""
    };
  },
  fromPartial(object: Partial<EventBlockGas>): EventBlockGas {
    const message = createBaseEventBlockGas();
    message.height = object.height ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
  fromAmino(object: EventBlockGasAmino): EventBlockGas {
    return {
      height: object.height,
      amount: object.amount
    };
  },
  toAmino(message: EventBlockGas): EventBlockGasAmino {
    const obj: any = {};
    obj.height = message.height;
    obj.amount = message.amount;
    return obj;
  },
  fromAminoMsg(object: EventBlockGasAminoMsg): EventBlockGas {
    return EventBlockGas.fromAmino(object.value);
  },
  fromProtoMsg(message: EventBlockGasProtoMsg): EventBlockGas {
    return EventBlockGas.decode(message.value);
  },
  toProto(message: EventBlockGas): Uint8Array {
    return EventBlockGas.encode(message).finish();
  },
  toProtoMsg(message: EventBlockGas): EventBlockGasProtoMsg {
    return {
      typeUrl: "/ethermint.feemarket.v1.EventBlockGas",
      value: EventBlockGas.encode(message).finish()
    };
  }
};