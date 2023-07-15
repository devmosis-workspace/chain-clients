import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { Long, isSet, fromJsonTimestamp } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export enum TimeInForce {
  TIME_IN_FORCE_UNSPECIFIED = 0,
  TIME_IN_FORCE_GOOD_TILL_CANCEL = 1,
  TIME_IN_FORCE_IMMEDIATE_OR_CANCEL = 2,
  TIME_IN_FORCE_FILL_OR_KILL = 3,
  UNRECOGNIZED = -1,
}
export const TimeInForceSDKType = TimeInForce;
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
export interface InstrumentSDKType {
  source: string;
  destination: string;
}
export interface Order {
  orderId: Long;
  timeInForce: TimeInForce;
  owner: string;
  clientOrderId: string;
  source?: Coin;
  sourceRemaining: string;
  sourceFilled: string;
  destination?: Coin;
  destinationFilled: string;
  created?: Timestamp;
}
export interface OrderSDKType {
  order_id: Long;
  time_in_force: TimeInForce;
  owner: string;
  client_order_id: string;
  source?: CoinSDKType;
  source_remaining: string;
  source_filled: string;
  destination?: CoinSDKType;
  destination_filled: string;
  created?: TimestampSDKType;
}
export interface ExecutionPlan {
  price: string;
  firstOrder?: Order;
  secondOrder?: Order;
}
export interface ExecutionPlanSDKType {
  price: string;
  first_order?: OrderSDKType;
  second_order?: OrderSDKType;
}
export interface MarketData {
  source: string;
  destination: string;
  lastPrice: string;
  timestamp?: Timestamp;
}
export interface MarketDataSDKType {
  source: string;
  destination: string;
  last_price: string;
  timestamp?: TimestampSDKType;
}
function createBaseInstrument(): Instrument {
  return {
    source: "",
    destination: ""
  };
}
export const Instrument = {
  encode(message: Instrument, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseOrder(): Order {
  return {
    orderId: Long.UZERO,
    timeInForce: 0,
    owner: "",
    clientOrderId: "",
    source: undefined,
    sourceRemaining: "",
    sourceFilled: "",
    destination: undefined,
    destinationFilled: "",
    created: undefined
  };
}
export const Order = {
  encode(message: Order, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.orderId.isZero()) {
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
      orderId: isSet(object.orderId) ? Long.fromValue(object.orderId) : Long.UZERO,
      timeInForce: isSet(object.timeInForce) ? timeInForceFromJSON(object.timeInForce) : 0,
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
    message.orderId = object.orderId !== undefined && object.orderId !== null ? Long.fromValue(object.orderId) : Long.UZERO;
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
  }
};
function createBaseExecutionPlan(): ExecutionPlan {
  return {
    price: "",
    firstOrder: undefined,
    secondOrder: undefined
  };
}
export const ExecutionPlan = {
  encode(message: ExecutionPlan, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.price !== "") {
      writer.uint32(10).string(message.price);
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
  }
};
function createBaseMarketData(): MarketData {
  return {
    source: "",
    destination: "",
    lastPrice: "",
    timestamp: undefined
  };
}
export const MarketData = {
  encode(message: MarketData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.source !== "") {
      writer.uint32(10).string(message.source);
    }
    if (message.destination !== "") {
      writer.uint32(18).string(message.destination);
    }
    if (message.lastPrice !== "") {
      writer.uint32(26).string(message.lastPrice);
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
  }
};