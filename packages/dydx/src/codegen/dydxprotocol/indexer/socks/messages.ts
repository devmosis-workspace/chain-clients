import { IndexerSubaccountId, IndexerSubaccountIdSDKType } from "../protocol/v1/subaccount";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** TODO(IND-210): Make this proto conform and update downstream indexer logic */
export enum CandleMessage_Resolution {
  /**
   * ONE_MINUTE - buf:lint:ignore ENUM_VALUE_PREFIX
   * buf:lint:ignore ENUM_ZERO_VALUE_SUFFIX
   */
  ONE_MINUTE = 0,
  /** FIVE_MINUTES - buf:lint:ignore ENUM_VALUE_PREFIX */
  FIVE_MINUTES = 1,
  /** FIFTEEN_MINUTES - buf:lint:ignore ENUM_VALUE_PREFIX */
  FIFTEEN_MINUTES = 2,
  /** THIRTY_MINUTES - buf:lint:ignore ENUM_VALUE_PREFIX */
  THIRTY_MINUTES = 3,
  /** ONE_HOUR - buf:lint:ignore ENUM_VALUE_PREFIX */
  ONE_HOUR = 4,
  /** FOUR_HOURS - buf:lint:ignore ENUM_VALUE_PREFIX */
  FOUR_HOURS = 5,
  /** ONE_DAY - buf:lint:ignore ENUM_VALUE_PREFIX */
  ONE_DAY = 6,
  UNRECOGNIZED = -1,
}
export const CandleMessage_ResolutionSDKType = CandleMessage_Resolution;
export function candleMessage_ResolutionFromJSON(object: any): CandleMessage_Resolution {
  switch (object) {
    case 0:
    case "ONE_MINUTE":
      return CandleMessage_Resolution.ONE_MINUTE;
    case 1:
    case "FIVE_MINUTES":
      return CandleMessage_Resolution.FIVE_MINUTES;
    case 2:
    case "FIFTEEN_MINUTES":
      return CandleMessage_Resolution.FIFTEEN_MINUTES;
    case 3:
    case "THIRTY_MINUTES":
      return CandleMessage_Resolution.THIRTY_MINUTES;
    case 4:
    case "ONE_HOUR":
      return CandleMessage_Resolution.ONE_HOUR;
    case 5:
    case "FOUR_HOURS":
      return CandleMessage_Resolution.FOUR_HOURS;
    case 6:
    case "ONE_DAY":
      return CandleMessage_Resolution.ONE_DAY;
    case -1:
    case "UNRECOGNIZED":
    default:
      return CandleMessage_Resolution.UNRECOGNIZED;
  }
}
export function candleMessage_ResolutionToJSON(object: CandleMessage_Resolution): string {
  switch (object) {
    case CandleMessage_Resolution.ONE_MINUTE:
      return "ONE_MINUTE";
    case CandleMessage_Resolution.FIVE_MINUTES:
      return "FIVE_MINUTES";
    case CandleMessage_Resolution.FIFTEEN_MINUTES:
      return "FIFTEEN_MINUTES";
    case CandleMessage_Resolution.THIRTY_MINUTES:
      return "THIRTY_MINUTES";
    case CandleMessage_Resolution.ONE_HOUR:
      return "ONE_HOUR";
    case CandleMessage_Resolution.FOUR_HOURS:
      return "FOUR_HOURS";
    case CandleMessage_Resolution.ONE_DAY:
      return "ONE_DAY";
    case CandleMessage_Resolution.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** Message to be sent through the 'to-websockets-orderbooks` kafka topic. */
export interface OrderbookMessage {
  /** Stringified JSON object of all events to be streamed. */
  contents: string;
  /** Clob pair id of the Orderbook message. */
  clobPairId: string;
  /** Version of the websocket message. */
  version: string;
}
export interface OrderbookMessageProtoMsg {
  typeUrl: "/dydxprotocol.indexer.socks.OrderbookMessage";
  value: Uint8Array;
}
/** Message to be sent through the 'to-websockets-orderbooks` kafka topic. */
export interface OrderbookMessageSDKType {
  contents: string;
  clob_pair_id: string;
  version: string;
}
/** Message to be sent through the 'to-websockets-subaccounts` kafka topic. */
export interface SubaccountMessage {
  /** Block height where the contents occur. */
  blockHeight: string;
  /** Transaction index where the contents occur. */
  transactionIndex: number;
  /** Event index where the contents occur. */
  eventIndex: number;
  /** Stringified JSON object of all events to be streamed. */
  contents: string;
  /** Subaccount id that the content corresponds to. */
  subaccountId?: IndexerSubaccountId;
  /** Version of the websocket message. */
  version: string;
}
export interface SubaccountMessageProtoMsg {
  typeUrl: "/dydxprotocol.indexer.socks.SubaccountMessage";
  value: Uint8Array;
}
/** Message to be sent through the 'to-websockets-subaccounts` kafka topic. */
export interface SubaccountMessageSDKType {
  block_height: string;
  transaction_index: number;
  event_index: number;
  contents: string;
  subaccount_id?: IndexerSubaccountIdSDKType;
  version: string;
}
/** Message to be sent through the 'to-websockets-trades` kafka topic. */
export interface TradeMessage {
  /** Block height where the contents occur. */
  blockHeight: string;
  /** Stringified JSON object of all events to be streamed. */
  contents: string;
  /** Clob pair id of the Trade message. */
  clobPairId: string;
  /** Version of the websocket message. */
  version: string;
}
export interface TradeMessageProtoMsg {
  typeUrl: "/dydxprotocol.indexer.socks.TradeMessage";
  value: Uint8Array;
}
/** Message to be sent through the 'to-websockets-trades` kafka topic. */
export interface TradeMessageSDKType {
  block_height: string;
  contents: string;
  clob_pair_id: string;
  version: string;
}
/** Message to be sent through the 'to-websockets-markets` kafka topic. */
export interface MarketMessage {
  /** Stringified JSON object of all events to be streamed. */
  contents: string;
  /** Version of the websocket message. */
  version: string;
}
export interface MarketMessageProtoMsg {
  typeUrl: "/dydxprotocol.indexer.socks.MarketMessage";
  value: Uint8Array;
}
/** Message to be sent through the 'to-websockets-markets` kafka topic. */
export interface MarketMessageSDKType {
  contents: string;
  version: string;
}
/** Message to be sent through the 'to-websockets-candles` kafka topic. */
export interface CandleMessage {
  /** Stringified JSON object of all events to be streamed. */
  contents: string;
  /** Clob pair id of the Candle message. */
  clobPairId: string;
  /** Resolution of the candle update. */
  resolution: CandleMessage_Resolution;
  /** Version of the websocket message. */
  version: string;
}
export interface CandleMessageProtoMsg {
  typeUrl: "/dydxprotocol.indexer.socks.CandleMessage";
  value: Uint8Array;
}
/** Message to be sent through the 'to-websockets-candles` kafka topic. */
export interface CandleMessageSDKType {
  contents: string;
  clob_pair_id: string;
  resolution: CandleMessage_Resolution;
  version: string;
}
function createBaseOrderbookMessage(): OrderbookMessage {
  return {
    contents: "",
    clobPairId: "",
    version: ""
  };
}
export const OrderbookMessage = {
  typeUrl: "/dydxprotocol.indexer.socks.OrderbookMessage",
  encode(message: OrderbookMessage, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contents !== "") {
      writer.uint32(10).string(message.contents);
    }
    if (message.clobPairId !== "") {
      writer.uint32(18).string(message.clobPairId);
    }
    if (message.version !== "") {
      writer.uint32(26).string(message.version);
    }
    return writer;
  },
  fromJSON(object: any): OrderbookMessage {
    return {
      contents: isSet(object.contents) ? String(object.contents) : "",
      clobPairId: isSet(object.clobPairId) ? String(object.clobPairId) : "",
      version: isSet(object.version) ? String(object.version) : ""
    };
  },
  fromPartial(object: Partial<OrderbookMessage>): OrderbookMessage {
    const message = createBaseOrderbookMessage();
    message.contents = object.contents ?? "";
    message.clobPairId = object.clobPairId ?? "";
    message.version = object.version ?? "";
    return message;
  },
  fromAmino(object: OrderbookMessageAmino): OrderbookMessage {
    const message = createBaseOrderbookMessage();
    if (object.contents !== undefined && object.contents !== null) {
      message.contents = object.contents;
    }
    if (object.clob_pair_id !== undefined && object.clob_pair_id !== null) {
      message.clobPairId = object.clob_pair_id;
    }
    if (object.version !== undefined && object.version !== null) {
      message.version = object.version;
    }
    return message;
  },
  toAmino(message: OrderbookMessage): OrderbookMessageAmino {
    const obj: any = {};
    obj.contents = message.contents;
    obj.clob_pair_id = message.clobPairId;
    obj.version = message.version;
    return obj;
  },
  fromAminoMsg(object: OrderbookMessageAminoMsg): OrderbookMessage {
    return OrderbookMessage.fromAmino(object.value);
  },
  fromProtoMsg(message: OrderbookMessageProtoMsg): OrderbookMessage {
    return OrderbookMessage.decode(message.value);
  },
  toProto(message: OrderbookMessage): Uint8Array {
    return OrderbookMessage.encode(message).finish();
  },
  toProtoMsg(message: OrderbookMessage): OrderbookMessageProtoMsg {
    return {
      typeUrl: "/dydxprotocol.indexer.socks.OrderbookMessage",
      value: OrderbookMessage.encode(message).finish()
    };
  }
};
function createBaseSubaccountMessage(): SubaccountMessage {
  return {
    blockHeight: "",
    transactionIndex: 0,
    eventIndex: 0,
    contents: "",
    subaccountId: undefined,
    version: ""
  };
}
export const SubaccountMessage = {
  typeUrl: "/dydxprotocol.indexer.socks.SubaccountMessage",
  encode(message: SubaccountMessage, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.blockHeight !== "") {
      writer.uint32(10).string(message.blockHeight);
    }
    if (message.transactionIndex !== 0) {
      writer.uint32(16).int32(message.transactionIndex);
    }
    if (message.eventIndex !== 0) {
      writer.uint32(24).uint32(message.eventIndex);
    }
    if (message.contents !== "") {
      writer.uint32(34).string(message.contents);
    }
    if (message.subaccountId !== undefined) {
      IndexerSubaccountId.encode(message.subaccountId, writer.uint32(42).fork()).ldelim();
    }
    if (message.version !== "") {
      writer.uint32(50).string(message.version);
    }
    return writer;
  },
  fromJSON(object: any): SubaccountMessage {
    return {
      blockHeight: isSet(object.blockHeight) ? String(object.blockHeight) : "",
      transactionIndex: isSet(object.transactionIndex) ? Number(object.transactionIndex) : 0,
      eventIndex: isSet(object.eventIndex) ? Number(object.eventIndex) : 0,
      contents: isSet(object.contents) ? String(object.contents) : "",
      subaccountId: isSet(object.subaccountId) ? IndexerSubaccountId.fromJSON(object.subaccountId) : undefined,
      version: isSet(object.version) ? String(object.version) : ""
    };
  },
  fromPartial(object: Partial<SubaccountMessage>): SubaccountMessage {
    const message = createBaseSubaccountMessage();
    message.blockHeight = object.blockHeight ?? "";
    message.transactionIndex = object.transactionIndex ?? 0;
    message.eventIndex = object.eventIndex ?? 0;
    message.contents = object.contents ?? "";
    message.subaccountId = object.subaccountId !== undefined && object.subaccountId !== null ? IndexerSubaccountId.fromPartial(object.subaccountId) : undefined;
    message.version = object.version ?? "";
    return message;
  },
  fromAmino(object: SubaccountMessageAmino): SubaccountMessage {
    const message = createBaseSubaccountMessage();
    if (object.block_height !== undefined && object.block_height !== null) {
      message.blockHeight = object.block_height;
    }
    if (object.transaction_index !== undefined && object.transaction_index !== null) {
      message.transactionIndex = object.transaction_index;
    }
    if (object.event_index !== undefined && object.event_index !== null) {
      message.eventIndex = object.event_index;
    }
    if (object.contents !== undefined && object.contents !== null) {
      message.contents = object.contents;
    }
    if (object.subaccount_id !== undefined && object.subaccount_id !== null) {
      message.subaccountId = IndexerSubaccountId.fromAmino(object.subaccount_id);
    }
    if (object.version !== undefined && object.version !== null) {
      message.version = object.version;
    }
    return message;
  },
  toAmino(message: SubaccountMessage): SubaccountMessageAmino {
    const obj: any = {};
    obj.block_height = message.blockHeight;
    obj.transaction_index = message.transactionIndex;
    obj.event_index = message.eventIndex;
    obj.contents = message.contents;
    obj.subaccount_id = message.subaccountId ? IndexerSubaccountId.toAmino(message.subaccountId) : undefined;
    obj.version = message.version;
    return obj;
  },
  fromAminoMsg(object: SubaccountMessageAminoMsg): SubaccountMessage {
    return SubaccountMessage.fromAmino(object.value);
  },
  fromProtoMsg(message: SubaccountMessageProtoMsg): SubaccountMessage {
    return SubaccountMessage.decode(message.value);
  },
  toProto(message: SubaccountMessage): Uint8Array {
    return SubaccountMessage.encode(message).finish();
  },
  toProtoMsg(message: SubaccountMessage): SubaccountMessageProtoMsg {
    return {
      typeUrl: "/dydxprotocol.indexer.socks.SubaccountMessage",
      value: SubaccountMessage.encode(message).finish()
    };
  }
};
function createBaseTradeMessage(): TradeMessage {
  return {
    blockHeight: "",
    contents: "",
    clobPairId: "",
    version: ""
  };
}
export const TradeMessage = {
  typeUrl: "/dydxprotocol.indexer.socks.TradeMessage",
  encode(message: TradeMessage, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.blockHeight !== "") {
      writer.uint32(10).string(message.blockHeight);
    }
    if (message.contents !== "") {
      writer.uint32(34).string(message.contents);
    }
    if (message.clobPairId !== "") {
      writer.uint32(42).string(message.clobPairId);
    }
    if (message.version !== "") {
      writer.uint32(50).string(message.version);
    }
    return writer;
  },
  fromJSON(object: any): TradeMessage {
    return {
      blockHeight: isSet(object.blockHeight) ? String(object.blockHeight) : "",
      contents: isSet(object.contents) ? String(object.contents) : "",
      clobPairId: isSet(object.clobPairId) ? String(object.clobPairId) : "",
      version: isSet(object.version) ? String(object.version) : ""
    };
  },
  fromPartial(object: Partial<TradeMessage>): TradeMessage {
    const message = createBaseTradeMessage();
    message.blockHeight = object.blockHeight ?? "";
    message.contents = object.contents ?? "";
    message.clobPairId = object.clobPairId ?? "";
    message.version = object.version ?? "";
    return message;
  },
  fromAmino(object: TradeMessageAmino): TradeMessage {
    const message = createBaseTradeMessage();
    if (object.block_height !== undefined && object.block_height !== null) {
      message.blockHeight = object.block_height;
    }
    if (object.contents !== undefined && object.contents !== null) {
      message.contents = object.contents;
    }
    if (object.clob_pair_id !== undefined && object.clob_pair_id !== null) {
      message.clobPairId = object.clob_pair_id;
    }
    if (object.version !== undefined && object.version !== null) {
      message.version = object.version;
    }
    return message;
  },
  toAmino(message: TradeMessage): TradeMessageAmino {
    const obj: any = {};
    obj.block_height = message.blockHeight;
    obj.contents = message.contents;
    obj.clob_pair_id = message.clobPairId;
    obj.version = message.version;
    return obj;
  },
  fromAminoMsg(object: TradeMessageAminoMsg): TradeMessage {
    return TradeMessage.fromAmino(object.value);
  },
  fromProtoMsg(message: TradeMessageProtoMsg): TradeMessage {
    return TradeMessage.decode(message.value);
  },
  toProto(message: TradeMessage): Uint8Array {
    return TradeMessage.encode(message).finish();
  },
  toProtoMsg(message: TradeMessage): TradeMessageProtoMsg {
    return {
      typeUrl: "/dydxprotocol.indexer.socks.TradeMessage",
      value: TradeMessage.encode(message).finish()
    };
  }
};
function createBaseMarketMessage(): MarketMessage {
  return {
    contents: "",
    version: ""
  };
}
export const MarketMessage = {
  typeUrl: "/dydxprotocol.indexer.socks.MarketMessage",
  encode(message: MarketMessage, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contents !== "") {
      writer.uint32(10).string(message.contents);
    }
    if (message.version !== "") {
      writer.uint32(18).string(message.version);
    }
    return writer;
  },
  fromJSON(object: any): MarketMessage {
    return {
      contents: isSet(object.contents) ? String(object.contents) : "",
      version: isSet(object.version) ? String(object.version) : ""
    };
  },
  fromPartial(object: Partial<MarketMessage>): MarketMessage {
    const message = createBaseMarketMessage();
    message.contents = object.contents ?? "";
    message.version = object.version ?? "";
    return message;
  },
  fromAmino(object: MarketMessageAmino): MarketMessage {
    const message = createBaseMarketMessage();
    if (object.contents !== undefined && object.contents !== null) {
      message.contents = object.contents;
    }
    if (object.version !== undefined && object.version !== null) {
      message.version = object.version;
    }
    return message;
  },
  toAmino(message: MarketMessage): MarketMessageAmino {
    const obj: any = {};
    obj.contents = message.contents;
    obj.version = message.version;
    return obj;
  },
  fromAminoMsg(object: MarketMessageAminoMsg): MarketMessage {
    return MarketMessage.fromAmino(object.value);
  },
  fromProtoMsg(message: MarketMessageProtoMsg): MarketMessage {
    return MarketMessage.decode(message.value);
  },
  toProto(message: MarketMessage): Uint8Array {
    return MarketMessage.encode(message).finish();
  },
  toProtoMsg(message: MarketMessage): MarketMessageProtoMsg {
    return {
      typeUrl: "/dydxprotocol.indexer.socks.MarketMessage",
      value: MarketMessage.encode(message).finish()
    };
  }
};
function createBaseCandleMessage(): CandleMessage {
  return {
    contents: "",
    clobPairId: "",
    resolution: 0,
    version: ""
  };
}
export const CandleMessage = {
  typeUrl: "/dydxprotocol.indexer.socks.CandleMessage",
  encode(message: CandleMessage, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contents !== "") {
      writer.uint32(10).string(message.contents);
    }
    if (message.clobPairId !== "") {
      writer.uint32(18).string(message.clobPairId);
    }
    if (message.resolution !== 0) {
      writer.uint32(24).int32(message.resolution);
    }
    if (message.version !== "") {
      writer.uint32(34).string(message.version);
    }
    return writer;
  },
  fromJSON(object: any): CandleMessage {
    return {
      contents: isSet(object.contents) ? String(object.contents) : "",
      clobPairId: isSet(object.clobPairId) ? String(object.clobPairId) : "",
      resolution: isSet(object.resolution) ? candleMessage_ResolutionFromJSON(object.resolution) : -1,
      version: isSet(object.version) ? String(object.version) : ""
    };
  },
  fromPartial(object: Partial<CandleMessage>): CandleMessage {
    const message = createBaseCandleMessage();
    message.contents = object.contents ?? "";
    message.clobPairId = object.clobPairId ?? "";
    message.resolution = object.resolution ?? 0;
    message.version = object.version ?? "";
    return message;
  },
  fromAmino(object: CandleMessageAmino): CandleMessage {
    const message = createBaseCandleMessage();
    if (object.contents !== undefined && object.contents !== null) {
      message.contents = object.contents;
    }
    if (object.clob_pair_id !== undefined && object.clob_pair_id !== null) {
      message.clobPairId = object.clob_pair_id;
    }
    if (object.resolution !== undefined && object.resolution !== null) {
      message.resolution = candleMessage_ResolutionFromJSON(object.resolution);
    }
    if (object.version !== undefined && object.version !== null) {
      message.version = object.version;
    }
    return message;
  },
  toAmino(message: CandleMessage): CandleMessageAmino {
    const obj: any = {};
    obj.contents = message.contents;
    obj.clob_pair_id = message.clobPairId;
    obj.resolution = message.resolution;
    obj.version = message.version;
    return obj;
  },
  fromAminoMsg(object: CandleMessageAminoMsg): CandleMessage {
    return CandleMessage.fromAmino(object.value);
  },
  fromProtoMsg(message: CandleMessageProtoMsg): CandleMessage {
    return CandleMessage.decode(message.value);
  },
  toProto(message: CandleMessage): Uint8Array {
    return CandleMessage.encode(message).finish();
  },
  toProtoMsg(message: CandleMessage): CandleMessageProtoMsg {
    return {
      typeUrl: "/dydxprotocol.indexer.socks.CandleMessage",
      value: CandleMessage.encode(message).finish()
    };
  }
};