import { Order, OrderAmino, OrderSDKType } from "./market";
import { Timestamp, TimestampAmino, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { BinaryWriter } from "../../../binary";
import { isSet, fromJsonTimestamp } from "../../../helpers";
import { Decimal } from "@cosmjs/math";
export interface QueryByAccountRequest {
  address: string;
}
export interface QueryByAccountRequestProtoMsg {
  typeUrl: "/em.market.v1.QueryByAccountRequest";
  value: Uint8Array;
}
export interface QueryByAccountRequestAmino {
  address: string;
}
export interface QueryByAccountRequestAminoMsg {
  type: "/em.market.v1.QueryByAccountRequest";
  value: QueryByAccountRequestAmino;
}
export interface QueryByAccountRequestSDKType {
  address: string;
}
export interface QueryByAccountResponse {
  orders?: Order[];
}
export interface QueryByAccountResponseProtoMsg {
  typeUrl: "/em.market.v1.QueryByAccountResponse";
  value: Uint8Array;
}
export interface QueryByAccountResponseAmino {
  orders: OrderAmino[];
}
export interface QueryByAccountResponseAminoMsg {
  type: "/em.market.v1.QueryByAccountResponse";
  value: QueryByAccountResponseAmino;
}
export interface QueryByAccountResponseSDKType {
  orders?: OrderSDKType[];
}
export interface QueryInstrumentsRequest {}
export interface QueryInstrumentsRequestProtoMsg {
  typeUrl: "/em.market.v1.QueryInstrumentsRequest";
  value: Uint8Array;
}
export interface QueryInstrumentsRequestAmino {}
export interface QueryInstrumentsRequestAminoMsg {
  type: "/em.market.v1.QueryInstrumentsRequest";
  value: QueryInstrumentsRequestAmino;
}
export interface QueryInstrumentsRequestSDKType {}
export interface QueryInstrumentsResponse {
  instruments: QueryInstrumentsResponse_Element[];
}
export interface QueryInstrumentsResponseProtoMsg {
  typeUrl: "/em.market.v1.QueryInstrumentsResponse";
  value: Uint8Array;
}
export interface QueryInstrumentsResponseAmino {
  instruments: QueryInstrumentsResponse_ElementAmino[];
}
export interface QueryInstrumentsResponseAminoMsg {
  type: "/em.market.v1.QueryInstrumentsResponse";
  value: QueryInstrumentsResponseAmino;
}
export interface QueryInstrumentsResponseSDKType {
  instruments: QueryInstrumentsResponse_ElementSDKType[];
}
export interface QueryInstrumentsResponse_Element {
  source: string;
  destination: string;
  lastPrice: string;
  bestPrice: string;
  lastTraded: Timestamp;
}
export interface QueryInstrumentsResponse_ElementProtoMsg {
  typeUrl: "/em.market.v1.Element";
  value: Uint8Array;
}
export interface QueryInstrumentsResponse_ElementAmino {
  source: string;
  destination: string;
  last_price: string;
  best_price: string;
  last_traded?: TimestampAmino;
}
export interface QueryInstrumentsResponse_ElementAminoMsg {
  type: "/em.market.v1.Element";
  value: QueryInstrumentsResponse_ElementAmino;
}
export interface QueryInstrumentsResponse_ElementSDKType {
  source: string;
  destination: string;
  last_price: string;
  best_price: string;
  last_traded: TimestampSDKType;
}
export interface QueryInstrumentRequest {
  source: string;
  destination: string;
}
export interface QueryInstrumentRequestProtoMsg {
  typeUrl: "/em.market.v1.QueryInstrumentRequest";
  value: Uint8Array;
}
export interface QueryInstrumentRequestAmino {
  source: string;
  destination: string;
}
export interface QueryInstrumentRequestAminoMsg {
  type: "/em.market.v1.QueryInstrumentRequest";
  value: QueryInstrumentRequestAmino;
}
export interface QueryInstrumentRequestSDKType {
  source: string;
  destination: string;
}
export interface QueryInstrumentResponse {
  source: string;
  destination: string;
  orders: QueryOrderResponse[];
}
export interface QueryInstrumentResponseProtoMsg {
  typeUrl: "/em.market.v1.QueryInstrumentResponse";
  value: Uint8Array;
}
export interface QueryInstrumentResponseAmino {
  source: string;
  destination: string;
  orders: QueryOrderResponseAmino[];
}
export interface QueryInstrumentResponseAminoMsg {
  type: "/em.market.v1.QueryInstrumentResponse";
  value: QueryInstrumentResponseAmino;
}
export interface QueryInstrumentResponseSDKType {
  source: string;
  destination: string;
  orders: QueryOrderResponseSDKType[];
}
export interface QueryOrderResponse {
  id: bigint;
  owner: string;
  sourceRemaining: string;
  clientOrderId?: string;
  price: string;
  created: Timestamp;
}
export interface QueryOrderResponseProtoMsg {
  typeUrl: "/em.market.v1.QueryOrderResponse";
  value: Uint8Array;
}
export interface QueryOrderResponseAmino {
  id: string;
  owner: string;
  source_remaining: string;
  client_order_id: string;
  price: string;
  created?: TimestampAmino;
}
export interface QueryOrderResponseAminoMsg {
  type: "/em.market.v1.QueryOrderResponse";
  value: QueryOrderResponseAmino;
}
export interface QueryOrderResponseSDKType {
  id: bigint;
  owner: string;
  source_remaining: string;
  client_order_id?: string;
  price: string;
  created: TimestampSDKType;
}
function createBaseQueryByAccountRequest(): QueryByAccountRequest {
  return {
    address: ""
  };
}
export const QueryByAccountRequest = {
  typeUrl: "/em.market.v1.QueryByAccountRequest",
  encode(message: QueryByAccountRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  fromJSON(object: any): QueryByAccountRequest {
    return {
      address: isSet(object.address) ? String(object.address) : ""
    };
  },
  fromPartial(object: Partial<QueryByAccountRequest>): QueryByAccountRequest {
    const message = createBaseQueryByAccountRequest();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: QueryByAccountRequestAmino): QueryByAccountRequest {
    return {
      address: object.address
    };
  },
  toAmino(message: QueryByAccountRequest): QueryByAccountRequestAmino {
    const obj: any = {};
    obj.address = message.address;
    return obj;
  },
  fromAminoMsg(object: QueryByAccountRequestAminoMsg): QueryByAccountRequest {
    return QueryByAccountRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryByAccountRequestProtoMsg): QueryByAccountRequest {
    return QueryByAccountRequest.decode(message.value);
  },
  toProto(message: QueryByAccountRequest): Uint8Array {
    return QueryByAccountRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryByAccountRequest): QueryByAccountRequestProtoMsg {
    return {
      typeUrl: "/em.market.v1.QueryByAccountRequest",
      value: QueryByAccountRequest.encode(message).finish()
    };
  }
};
function createBaseQueryByAccountResponse(): QueryByAccountResponse {
  return {
    orders: undefined
  };
}
export const QueryByAccountResponse = {
  typeUrl: "/em.market.v1.QueryByAccountResponse",
  encode(message: QueryByAccountResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.orders) {
      Order.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryByAccountResponse {
    return {
      orders: Array.isArray(object?.orders) ? object.orders.map((e: any) => Order.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryByAccountResponse>): QueryByAccountResponse {
    const message = createBaseQueryByAccountResponse();
    message.orders = object.orders?.map(e => Order.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryByAccountResponseAmino): QueryByAccountResponse {
    return {
      orders: Array.isArray(object?.orders) ? object.orders.map((e: any) => Order.fromAmino(e)) : []
    };
  },
  toAmino(message: QueryByAccountResponse): QueryByAccountResponseAmino {
    const obj: any = {};
    if (message.orders) {
      obj.orders = message.orders.map(e => e ? Order.toAmino(e) : undefined);
    } else {
      obj.orders = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryByAccountResponseAminoMsg): QueryByAccountResponse {
    return QueryByAccountResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryByAccountResponseProtoMsg): QueryByAccountResponse {
    return QueryByAccountResponse.decode(message.value);
  },
  toProto(message: QueryByAccountResponse): Uint8Array {
    return QueryByAccountResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryByAccountResponse): QueryByAccountResponseProtoMsg {
    return {
      typeUrl: "/em.market.v1.QueryByAccountResponse",
      value: QueryByAccountResponse.encode(message).finish()
    };
  }
};
function createBaseQueryInstrumentsRequest(): QueryInstrumentsRequest {
  return {};
}
export const QueryInstrumentsRequest = {
  typeUrl: "/em.market.v1.QueryInstrumentsRequest",
  encode(_: QueryInstrumentsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryInstrumentsRequest {
    return {};
  },
  fromPartial(_: Partial<QueryInstrumentsRequest>): QueryInstrumentsRequest {
    const message = createBaseQueryInstrumentsRequest();
    return message;
  },
  fromAmino(_: QueryInstrumentsRequestAmino): QueryInstrumentsRequest {
    return {};
  },
  toAmino(_: QueryInstrumentsRequest): QueryInstrumentsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryInstrumentsRequestAminoMsg): QueryInstrumentsRequest {
    return QueryInstrumentsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryInstrumentsRequestProtoMsg): QueryInstrumentsRequest {
    return QueryInstrumentsRequest.decode(message.value);
  },
  toProto(message: QueryInstrumentsRequest): Uint8Array {
    return QueryInstrumentsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryInstrumentsRequest): QueryInstrumentsRequestProtoMsg {
    return {
      typeUrl: "/em.market.v1.QueryInstrumentsRequest",
      value: QueryInstrumentsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryInstrumentsResponse(): QueryInstrumentsResponse {
  return {
    instruments: []
  };
}
export const QueryInstrumentsResponse = {
  typeUrl: "/em.market.v1.QueryInstrumentsResponse",
  encode(message: QueryInstrumentsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.instruments) {
      QueryInstrumentsResponse_Element.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryInstrumentsResponse {
    return {
      instruments: Array.isArray(object?.instruments) ? object.instruments.map((e: any) => QueryInstrumentsResponse_Element.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryInstrumentsResponse>): QueryInstrumentsResponse {
    const message = createBaseQueryInstrumentsResponse();
    message.instruments = object.instruments?.map(e => QueryInstrumentsResponse_Element.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryInstrumentsResponseAmino): QueryInstrumentsResponse {
    return {
      instruments: Array.isArray(object?.instruments) ? object.instruments.map((e: any) => QueryInstrumentsResponse_Element.fromAmino(e)) : []
    };
  },
  toAmino(message: QueryInstrumentsResponse): QueryInstrumentsResponseAmino {
    const obj: any = {};
    if (message.instruments) {
      obj.instruments = message.instruments.map(e => e ? QueryInstrumentsResponse_Element.toAmino(e) : undefined);
    } else {
      obj.instruments = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryInstrumentsResponseAminoMsg): QueryInstrumentsResponse {
    return QueryInstrumentsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryInstrumentsResponseProtoMsg): QueryInstrumentsResponse {
    return QueryInstrumentsResponse.decode(message.value);
  },
  toProto(message: QueryInstrumentsResponse): Uint8Array {
    return QueryInstrumentsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryInstrumentsResponse): QueryInstrumentsResponseProtoMsg {
    return {
      typeUrl: "/em.market.v1.QueryInstrumentsResponse",
      value: QueryInstrumentsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryInstrumentsResponse_Element(): QueryInstrumentsResponse_Element {
  return {
    source: "",
    destination: "",
    lastPrice: "",
    bestPrice: "",
    lastTraded: Timestamp.fromPartial({})
  };
}
export const QueryInstrumentsResponse_Element = {
  typeUrl: "/em.market.v1.Element",
  encode(message: QueryInstrumentsResponse_Element, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.source !== "") {
      writer.uint32(10).string(message.source);
    }
    if (message.destination !== "") {
      writer.uint32(18).string(message.destination);
    }
    if (message.lastPrice !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.lastPrice, 18).atomics);
    }
    if (message.bestPrice !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.bestPrice, 18).atomics);
    }
    if (message.lastTraded !== undefined) {
      Timestamp.encode(message.lastTraded, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryInstrumentsResponse_Element {
    return {
      source: isSet(object.source) ? String(object.source) : "",
      destination: isSet(object.destination) ? String(object.destination) : "",
      lastPrice: isSet(object.lastPrice) ? String(object.lastPrice) : "",
      bestPrice: isSet(object.bestPrice) ? String(object.bestPrice) : "",
      lastTraded: isSet(object.lastTraded) ? fromJsonTimestamp(object.lastTraded) : undefined
    };
  },
  fromPartial(object: Partial<QueryInstrumentsResponse_Element>): QueryInstrumentsResponse_Element {
    const message = createBaseQueryInstrumentsResponse_Element();
    message.source = object.source ?? "";
    message.destination = object.destination ?? "";
    message.lastPrice = object.lastPrice ?? "";
    message.bestPrice = object.bestPrice ?? "";
    message.lastTraded = object.lastTraded !== undefined && object.lastTraded !== null ? Timestamp.fromPartial(object.lastTraded) : undefined;
    return message;
  },
  fromAmino(object: QueryInstrumentsResponse_ElementAmino): QueryInstrumentsResponse_Element {
    return {
      source: object.source,
      destination: object.destination,
      lastPrice: object.last_price,
      bestPrice: object.best_price,
      lastTraded: object.last_traded
    };
  },
  toAmino(message: QueryInstrumentsResponse_Element): QueryInstrumentsResponse_ElementAmino {
    const obj: any = {};
    obj.source = message.source;
    obj.destination = message.destination;
    obj.last_price = message.lastPrice;
    obj.best_price = message.bestPrice;
    obj.last_traded = message.lastTraded;
    return obj;
  },
  fromAminoMsg(object: QueryInstrumentsResponse_ElementAminoMsg): QueryInstrumentsResponse_Element {
    return QueryInstrumentsResponse_Element.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryInstrumentsResponse_ElementProtoMsg): QueryInstrumentsResponse_Element {
    return QueryInstrumentsResponse_Element.decode(message.value);
  },
  toProto(message: QueryInstrumentsResponse_Element): Uint8Array {
    return QueryInstrumentsResponse_Element.encode(message).finish();
  },
  toProtoMsg(message: QueryInstrumentsResponse_Element): QueryInstrumentsResponse_ElementProtoMsg {
    return {
      typeUrl: "/em.market.v1.Element",
      value: QueryInstrumentsResponse_Element.encode(message).finish()
    };
  }
};
function createBaseQueryInstrumentRequest(): QueryInstrumentRequest {
  return {
    source: "",
    destination: ""
  };
}
export const QueryInstrumentRequest = {
  typeUrl: "/em.market.v1.QueryInstrumentRequest",
  encode(message: QueryInstrumentRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.source !== "") {
      writer.uint32(10).string(message.source);
    }
    if (message.destination !== "") {
      writer.uint32(18).string(message.destination);
    }
    return writer;
  },
  fromJSON(object: any): QueryInstrumentRequest {
    return {
      source: isSet(object.source) ? String(object.source) : "",
      destination: isSet(object.destination) ? String(object.destination) : ""
    };
  },
  fromPartial(object: Partial<QueryInstrumentRequest>): QueryInstrumentRequest {
    const message = createBaseQueryInstrumentRequest();
    message.source = object.source ?? "";
    message.destination = object.destination ?? "";
    return message;
  },
  fromAmino(object: QueryInstrumentRequestAmino): QueryInstrumentRequest {
    return {
      source: object.source,
      destination: object.destination
    };
  },
  toAmino(message: QueryInstrumentRequest): QueryInstrumentRequestAmino {
    const obj: any = {};
    obj.source = message.source;
    obj.destination = message.destination;
    return obj;
  },
  fromAminoMsg(object: QueryInstrumentRequestAminoMsg): QueryInstrumentRequest {
    return QueryInstrumentRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryInstrumentRequestProtoMsg): QueryInstrumentRequest {
    return QueryInstrumentRequest.decode(message.value);
  },
  toProto(message: QueryInstrumentRequest): Uint8Array {
    return QueryInstrumentRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryInstrumentRequest): QueryInstrumentRequestProtoMsg {
    return {
      typeUrl: "/em.market.v1.QueryInstrumentRequest",
      value: QueryInstrumentRequest.encode(message).finish()
    };
  }
};
function createBaseQueryInstrumentResponse(): QueryInstrumentResponse {
  return {
    source: "",
    destination: "",
    orders: []
  };
}
export const QueryInstrumentResponse = {
  typeUrl: "/em.market.v1.QueryInstrumentResponse",
  encode(message: QueryInstrumentResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.source !== "") {
      writer.uint32(10).string(message.source);
    }
    if (message.destination !== "") {
      writer.uint32(18).string(message.destination);
    }
    for (const v of message.orders) {
      QueryOrderResponse.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryInstrumentResponse {
    return {
      source: isSet(object.source) ? String(object.source) : "",
      destination: isSet(object.destination) ? String(object.destination) : "",
      orders: Array.isArray(object?.orders) ? object.orders.map((e: any) => QueryOrderResponse.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryInstrumentResponse>): QueryInstrumentResponse {
    const message = createBaseQueryInstrumentResponse();
    message.source = object.source ?? "";
    message.destination = object.destination ?? "";
    message.orders = object.orders?.map(e => QueryOrderResponse.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryInstrumentResponseAmino): QueryInstrumentResponse {
    return {
      source: object.source,
      destination: object.destination,
      orders: Array.isArray(object?.orders) ? object.orders.map((e: any) => QueryOrderResponse.fromAmino(e)) : []
    };
  },
  toAmino(message: QueryInstrumentResponse): QueryInstrumentResponseAmino {
    const obj: any = {};
    obj.source = message.source;
    obj.destination = message.destination;
    if (message.orders) {
      obj.orders = message.orders.map(e => e ? QueryOrderResponse.toAmino(e) : undefined);
    } else {
      obj.orders = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryInstrumentResponseAminoMsg): QueryInstrumentResponse {
    return QueryInstrumentResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryInstrumentResponseProtoMsg): QueryInstrumentResponse {
    return QueryInstrumentResponse.decode(message.value);
  },
  toProto(message: QueryInstrumentResponse): Uint8Array {
    return QueryInstrumentResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryInstrumentResponse): QueryInstrumentResponseProtoMsg {
    return {
      typeUrl: "/em.market.v1.QueryInstrumentResponse",
      value: QueryInstrumentResponse.encode(message).finish()
    };
  }
};
function createBaseQueryOrderResponse(): QueryOrderResponse {
  return {
    id: BigInt(0),
    owner: "",
    sourceRemaining: "",
    clientOrderId: undefined,
    price: "",
    created: Timestamp.fromPartial({})
  };
}
export const QueryOrderResponse = {
  typeUrl: "/em.market.v1.QueryOrderResponse",
  encode(message: QueryOrderResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    if (message.sourceRemaining !== "") {
      writer.uint32(26).string(message.sourceRemaining);
    }
    if (message.clientOrderId !== undefined) {
      writer.uint32(34).string(message.clientOrderId);
    }
    if (message.price !== "") {
      writer.uint32(42).string(Decimal.fromUserInput(message.price, 18).atomics);
    }
    if (message.created !== undefined) {
      Timestamp.encode(message.created, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryOrderResponse {
    return {
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
      owner: isSet(object.owner) ? String(object.owner) : "",
      sourceRemaining: isSet(object.sourceRemaining) ? String(object.sourceRemaining) : "",
      clientOrderId: isSet(object.clientOrderId) ? String(object.clientOrderId) : undefined,
      price: isSet(object.price) ? String(object.price) : "",
      created: isSet(object.created) ? fromJsonTimestamp(object.created) : undefined
    };
  },
  fromPartial(object: Partial<QueryOrderResponse>): QueryOrderResponse {
    const message = createBaseQueryOrderResponse();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.owner = object.owner ?? "";
    message.sourceRemaining = object.sourceRemaining ?? "";
    message.clientOrderId = object.clientOrderId ?? undefined;
    message.price = object.price ?? "";
    message.created = object.created !== undefined && object.created !== null ? Timestamp.fromPartial(object.created) : undefined;
    return message;
  },
  fromAmino(object: QueryOrderResponseAmino): QueryOrderResponse {
    return {
      id: BigInt(object.id),
      owner: object.owner,
      sourceRemaining: object.source_remaining,
      clientOrderId: object?.client_order_id,
      price: object.price,
      created: object.created
    };
  },
  toAmino(message: QueryOrderResponse): QueryOrderResponseAmino {
    const obj: any = {};
    obj.id = message.id ? message.id.toString() : undefined;
    obj.owner = message.owner;
    obj.source_remaining = message.sourceRemaining;
    obj.client_order_id = message.clientOrderId;
    obj.price = message.price;
    obj.created = message.created;
    return obj;
  },
  fromAminoMsg(object: QueryOrderResponseAminoMsg): QueryOrderResponse {
    return QueryOrderResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryOrderResponseProtoMsg): QueryOrderResponse {
    return QueryOrderResponse.decode(message.value);
  },
  toProto(message: QueryOrderResponse): Uint8Array {
    return QueryOrderResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryOrderResponse): QueryOrderResponseProtoMsg {
    return {
      typeUrl: "/em.market.v1.QueryOrderResponse",
      value: QueryOrderResponse.encode(message).finish()
    };
  }
};