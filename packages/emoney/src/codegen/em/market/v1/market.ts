import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp, TimestampAmino, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { BinaryWriter } from "../../../binary";
import { isSet, fromJsonTimestamp } from "../../../helpers";
import { Decimal } from "@cosmjs/math";
export enum TimeInForce {
  TIME_IN_FORCE_UNSPECIFIED = 0,
  TIME_IN_FORCE_GOOD_TILL_CANCEL = 1,
  TIME_IN_FORCE_IMMEDIATE_OR_CANCEL = 2,
  TIME_IN_FORCE_FILL_OR_KILL = 3,
  UNRECOGNIZED = -1,
}
export const TimeInForceSDKType = TimeInForce;
export const TimeInForceAmino = TimeInForce;
export function timeInForceFromJSON(object: any): TimeInForce {
  switch (object) {
    case 0:
    case "TIME_IN_FORCE_UNSPECIFIED":
      return TimeInForce.TIME_IN_FORCE_UNSPECIFIED;
    case 1:
    case "TIME_IN_FORCE_GOOD_TILL_CANCEL":
      return TimeInForce.TIME_IN_FORCE_GOOD_TILL_CANCEL;
    case 2:
    case "TIME_IN_FORCE_IMMEDIATE_OR_CANCEL":
      return TimeInForce.TIME_IN_FORCE_IMMEDIATE_OR_CANCEL;
    case 3:
    case "TIME_IN_FORCE_FILL_OR_KILL":
      return TimeInForce.TIME_IN_FORCE_FILL_OR_KILL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return TimeInForce.UNRECOGNIZED;
  }
}
export function timeInForceToJSON(object: TimeInForce): string {
  switch (object) {
    case TimeInForce.TIME_IN_FORCE_UNSPECIFIED:
      return "TIME_IN_FORCE_UNSPECIFIED";
    case TimeInForce.TIME_IN_FORCE_GOOD_TILL_CANCEL:
      return "TIME_IN_FORCE_GOOD_TILL_CANCEL";
    case TimeInForce.TIME_IN_FORCE_IMMEDIATE_OR_CANCEL:
      return "TIME_IN_FORCE_IMMEDIATE_OR_CANCEL";
    case TimeInForce.TIME_IN_FORCE_FILL_OR_KILL:
      return "TIME_IN_FORCE_FILL_OR_KILL";
    case TimeInForce.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export interface Instrument {
  source: string;
  destination: string;
}
export interface InstrumentProtoMsg {
  typeUrl: "/em.market.v1.Instrument";
  value: Uint8Array;
}
export interface InstrumentAmino {
  source: string;
  destination: string;
}
export interface InstrumentAminoMsg {
  type: "/em.market.v1.Instrument";
  value: InstrumentAmino;
}
export interface InstrumentSDKType {
  source: string;
  destination: string;
}
export interface Order {
  orderId: bigint;
  timeInForce: TimeInForce;
  owner: string;
  clientOrderId: string;
  source: Coin;
  sourceRemaining: string;
  sourceFilled: string;
  destination: Coin;
  destinationFilled: string;
  created: Timestamp;
}
export interface OrderProtoMsg {
  typeUrl: "/em.market.v1.Order";
  value: Uint8Array;
}
export interface OrderAmino {
  order_id: string;
  time_in_force: TimeInForce;
  owner: string;
  client_order_id: string;
  source?: CoinAmino;
  source_remaining: string;
  source_filled: string;
  destination?: CoinAmino;
  destination_filled: string;
  created?: TimestampAmino;
}
export interface OrderAminoMsg {
  type: "/em.market.v1.Order";
  value: OrderAmino;
}
export interface OrderSDKType {
  order_id: bigint;
  time_in_force: TimeInForce;
  owner: string;
  client_order_id: string;
  source: CoinSDKType;
  source_remaining: string;
  source_filled: string;
  destination: CoinSDKType;
  destination_filled: string;
  created: TimestampSDKType;
}
export interface ExecutionPlan {
  price: string;
  firstOrder: Order;
  secondOrder: Order;
}
export interface ExecutionPlanProtoMsg {
  typeUrl: "/em.market.v1.ExecutionPlan";
  value: Uint8Array;
}
export interface ExecutionPlanAmino {
  price: string;
  first_order?: OrderAmino;
  second_order?: OrderAmino;
}
export interface ExecutionPlanAminoMsg {
  type: "/em.market.v1.ExecutionPlan";
  value: ExecutionPlanAmino;
}
export interface ExecutionPlanSDKType {
  price: string;
  first_order: OrderSDKType;
  second_order: OrderSDKType;
}
export interface MarketData {
  source: string;
  destination: string;
  lastPrice: string;
  timestamp: Timestamp;
}
export interface MarketDataProtoMsg {
  typeUrl: "/em.market.v1.MarketData";
  value: Uint8Array;
}
export interface MarketDataAmino {
  source: string;
  destination: string;
  last_price: string;
  timestamp?: TimestampAmino;
}
export interface MarketDataAminoMsg {
  type: "/em.market.v1.MarketData";
  value: MarketDataAmino;
}
export interface MarketDataSDKType {
  source: string;
  destination: string;
  last_price: string;
  timestamp: TimestampSDKType;
}
function createBaseInstrument(): Instrument {
  return {
    source: "",
    destination: ""
  };
}
export const Instrument = {
  typeUrl: "/em.market.v1.Instrument",
  encode(message: Instrument, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.source !== "") {
      writer.uint32(10).string(message.source);
    }
    if (message.destination !== "") {
      writer.uint32(18).string(message.destination);
    }
    return writer;
  },
  fromJSON(object: any): Instrument {
    return {
      source: isSet(object.source) ? String(object.source) : "",
      destination: isSet(object.destination) ? String(object.destination) : ""
    };
  },
  fromPartial(object: Partial<Instrument>): Instrument {
    const message = createBaseInstrument();
    message.source = object.source ?? "";
    message.destination = object.destination ?? "";
    return message;
  },
  fromAmino(object: InstrumentAmino): Instrument {
    return {
      source: object.source,
      destination: object.destination
    };
  },
  toAmino(message: Instrument): InstrumentAmino {
    const obj: any = {};
    obj.source = message.source;
    obj.destination = message.destination;
    return obj;
  },
  fromAminoMsg(object: InstrumentAminoMsg): Instrument {
    return Instrument.fromAmino(object.value);
  },
  fromProtoMsg(message: InstrumentProtoMsg): Instrument {
    return Instrument.decode(message.value);
  },
  toProto(message: Instrument): Uint8Array {
    return Instrument.encode(message).finish();
  },
  toProtoMsg(message: Instrument): InstrumentProtoMsg {
    return {
      typeUrl: "/em.market.v1.Instrument",
      value: Instrument.encode(message).finish()
    };
  }
};
function createBaseOrder(): Order {
  return {
    orderId: BigInt(0),
    timeInForce: 0,
    owner: "",
    clientOrderId: "",
    source: Coin.fromPartial({}),
    sourceRemaining: "",
    sourceFilled: "",
    destination: Coin.fromPartial({}),
    destinationFilled: "",
    created: Timestamp.fromPartial({})
  };
}
export const Order = {
  typeUrl: "/em.market.v1.Order",
  encode(message: Order, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.orderId !== BigInt(0)) {
      writer.uint32(8).uint64(message.orderId);
    }
    if (message.timeInForce !== 0) {
      writer.uint32(16).int32(message.timeInForce);
    }
    if (message.owner !== "") {
      writer.uint32(26).string(message.owner);
    }
    if (message.clientOrderId !== "") {
      writer.uint32(34).string(message.clientOrderId);
    }
    if (message.source !== undefined) {
      Coin.encode(message.source, writer.uint32(42).fork()).ldelim();
    }
    if (message.sourceRemaining !== "") {
      writer.uint32(50).string(message.sourceRemaining);
    }
    if (message.sourceFilled !== "") {
      writer.uint32(58).string(message.sourceFilled);
    }
    if (message.destination !== undefined) {
      Coin.encode(message.destination, writer.uint32(66).fork()).ldelim();
    }
    if (message.destinationFilled !== "") {
      writer.uint32(74).string(message.destinationFilled);
    }
    if (message.created !== undefined) {
      Timestamp.encode(message.created, writer.uint32(82).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): Order {
    return {
      orderId: isSet(object.orderId) ? BigInt(object.orderId.toString()) : BigInt(0),
      timeInForce: isSet(object.timeInForce) ? timeInForceFromJSON(object.timeInForce) : -1,
      owner: isSet(object.owner) ? String(object.owner) : "",
      clientOrderId: isSet(object.clientOrderId) ? String(object.clientOrderId) : "",
      source: isSet(object.source) ? Coin.fromJSON(object.source) : undefined,
      sourceRemaining: isSet(object.sourceRemaining) ? String(object.sourceRemaining) : "",
      sourceFilled: isSet(object.sourceFilled) ? String(object.sourceFilled) : "",
      destination: isSet(object.destination) ? Coin.fromJSON(object.destination) : undefined,
      destinationFilled: isSet(object.destinationFilled) ? String(object.destinationFilled) : "",
      created: isSet(object.created) ? fromJsonTimestamp(object.created) : undefined
    };
  },
  fromPartial(object: Partial<Order>): Order {
    const message = createBaseOrder();
    message.orderId = object.orderId !== undefined && object.orderId !== null ? BigInt(object.orderId.toString()) : BigInt(0);
    message.timeInForce = object.timeInForce ?? 0;
    message.owner = object.owner ?? "";
    message.clientOrderId = object.clientOrderId ?? "";
    message.source = object.source !== undefined && object.source !== null ? Coin.fromPartial(object.source) : undefined;
    message.sourceRemaining = object.sourceRemaining ?? "";
    message.sourceFilled = object.sourceFilled ?? "";
    message.destination = object.destination !== undefined && object.destination !== null ? Coin.fromPartial(object.destination) : undefined;
    message.destinationFilled = object.destinationFilled ?? "";
    message.created = object.created !== undefined && object.created !== null ? Timestamp.fromPartial(object.created) : undefined;
    return message;
  },
  fromAmino(object: OrderAmino): Order {
    return {
      orderId: BigInt(object.order_id),
      timeInForce: isSet(object.time_in_force) ? timeInForceFromJSON(object.time_in_force) : -1,
      owner: object.owner,
      clientOrderId: object.client_order_id,
      source: object?.source ? Coin.fromAmino(object.source) : undefined,
      sourceRemaining: object.source_remaining,
      sourceFilled: object.source_filled,
      destination: object?.destination ? Coin.fromAmino(object.destination) : undefined,
      destinationFilled: object.destination_filled,
      created: object.created
    };
  },
  toAmino(message: Order): OrderAmino {
    const obj: any = {};
    obj.order_id = message.orderId ? message.orderId.toString() : undefined;
    obj.time_in_force = message.timeInForce;
    obj.owner = message.owner;
    obj.client_order_id = message.clientOrderId;
    obj.source = message.source ? Coin.toAmino(message.source) : undefined;
    obj.source_remaining = message.sourceRemaining;
    obj.source_filled = message.sourceFilled;
    obj.destination = message.destination ? Coin.toAmino(message.destination) : undefined;
    obj.destination_filled = message.destinationFilled;
    obj.created = message.created;
    return obj;
  },
  fromAminoMsg(object: OrderAminoMsg): Order {
    return Order.fromAmino(object.value);
  },
  fromProtoMsg(message: OrderProtoMsg): Order {
    return Order.decode(message.value);
  },
  toProto(message: Order): Uint8Array {
    return Order.encode(message).finish();
  },
  toProtoMsg(message: Order): OrderProtoMsg {
    return {
      typeUrl: "/em.market.v1.Order",
      value: Order.encode(message).finish()
    };
  }
};
function createBaseExecutionPlan(): ExecutionPlan {
  return {
    price: "",
    firstOrder: Order.fromPartial({}),
    secondOrder: Order.fromPartial({})
  };
}
export const ExecutionPlan = {
  typeUrl: "/em.market.v1.ExecutionPlan",
  encode(message: ExecutionPlan, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.price !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.price, 18).atomics);
    }
    if (message.firstOrder !== undefined) {
      Order.encode(message.firstOrder, writer.uint32(18).fork()).ldelim();
    }
    if (message.secondOrder !== undefined) {
      Order.encode(message.secondOrder, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): ExecutionPlan {
    return {
      price: isSet(object.price) ? String(object.price) : "",
      firstOrder: isSet(object.firstOrder) ? Order.fromJSON(object.firstOrder) : undefined,
      secondOrder: isSet(object.secondOrder) ? Order.fromJSON(object.secondOrder) : undefined
    };
  },
  fromPartial(object: Partial<ExecutionPlan>): ExecutionPlan {
    const message = createBaseExecutionPlan();
    message.price = object.price ?? "";
    message.firstOrder = object.firstOrder !== undefined && object.firstOrder !== null ? Order.fromPartial(object.firstOrder) : undefined;
    message.secondOrder = object.secondOrder !== undefined && object.secondOrder !== null ? Order.fromPartial(object.secondOrder) : undefined;
    return message;
  },
  fromAmino(object: ExecutionPlanAmino): ExecutionPlan {
    return {
      price: object.price,
      firstOrder: object?.first_order ? Order.fromAmino(object.first_order) : undefined,
      secondOrder: object?.second_order ? Order.fromAmino(object.second_order) : undefined
    };
  },
  toAmino(message: ExecutionPlan): ExecutionPlanAmino {
    const obj: any = {};
    obj.price = message.price;
    obj.first_order = message.firstOrder ? Order.toAmino(message.firstOrder) : undefined;
    obj.second_order = message.secondOrder ? Order.toAmino(message.secondOrder) : undefined;
    return obj;
  },
  fromAminoMsg(object: ExecutionPlanAminoMsg): ExecutionPlan {
    return ExecutionPlan.fromAmino(object.value);
  },
  fromProtoMsg(message: ExecutionPlanProtoMsg): ExecutionPlan {
    return ExecutionPlan.decode(message.value);
  },
  toProto(message: ExecutionPlan): Uint8Array {
    return ExecutionPlan.encode(message).finish();
  },
  toProtoMsg(message: ExecutionPlan): ExecutionPlanProtoMsg {
    return {
      typeUrl: "/em.market.v1.ExecutionPlan",
      value: ExecutionPlan.encode(message).finish()
    };
  }
};
function createBaseMarketData(): MarketData {
  return {
    source: "",
    destination: "",
    lastPrice: "",
    timestamp: Timestamp.fromPartial({})
  };
}
export const MarketData = {
  typeUrl: "/em.market.v1.MarketData",
  encode(message: MarketData, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.source !== "") {
      writer.uint32(10).string(message.source);
    }
    if (message.destination !== "") {
      writer.uint32(18).string(message.destination);
    }
    if (message.lastPrice !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.lastPrice, 18).atomics);
    }
    if (message.timestamp !== undefined) {
      Timestamp.encode(message.timestamp, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MarketData {
    return {
      source: isSet(object.source) ? String(object.source) : "",
      destination: isSet(object.destination) ? String(object.destination) : "",
      lastPrice: isSet(object.lastPrice) ? String(object.lastPrice) : "",
      timestamp: isSet(object.timestamp) ? fromJsonTimestamp(object.timestamp) : undefined
    };
  },
  fromPartial(object: Partial<MarketData>): MarketData {
    const message = createBaseMarketData();
    message.source = object.source ?? "";
    message.destination = object.destination ?? "";
    message.lastPrice = object.lastPrice ?? "";
    message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? Timestamp.fromPartial(object.timestamp) : undefined;
    return message;
  },
  fromAmino(object: MarketDataAmino): MarketData {
    return {
      source: object.source,
      destination: object.destination,
      lastPrice: object.last_price,
      timestamp: object.timestamp
    };
  },
  toAmino(message: MarketData): MarketDataAmino {
    const obj: any = {};
    obj.source = message.source;
    obj.destination = message.destination;
    obj.last_price = message.lastPrice;
    obj.timestamp = message.timestamp;
    return obj;
  },
  fromAminoMsg(object: MarketDataAminoMsg): MarketData {
    return MarketData.fromAmino(object.value);
  },
  fromProtoMsg(message: MarketDataProtoMsg): MarketData {
    return MarketData.decode(message.value);
  },
  toProto(message: MarketData): Uint8Array {
    return MarketData.encode(message).finish();
  },
  toProtoMsg(message: MarketData): MarketDataProtoMsg {
    return {
      typeUrl: "/em.market.v1.MarketData",
      value: MarketData.encode(message).finish()
    };
  }
};