import { Order, OrderSDKType } from "./market";
import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { Long, isSet, fromJsonTimestamp } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface QueryByAccountRequest {
  address: string;
}
export interface QueryByAccountRequestSDKType {
  address: string;
}
export interface QueryByAccountResponse {
  orders: Order[];
}
export interface QueryByAccountResponseSDKType {
  orders: OrderSDKType[];
}
export interface QueryInstrumentsRequest {}
export interface QueryInstrumentsRequestSDKType {}
export interface QueryInstrumentsResponse {
  instruments: QueryInstrumentsResponse_Element[];
}
export interface QueryInstrumentsResponseSDKType {
  instruments: QueryInstrumentsResponse_ElementSDKType[];
}
export interface QueryInstrumentsResponse_Element {
  source: string;
  destination: string;
  lastPrice: string;
  bestPrice: string;
  lastTraded?: Timestamp;
}
export interface QueryInstrumentsResponse_ElementSDKType {
  source: string;
  destination: string;
  last_price: string;
  best_price: string;
  last_traded?: TimestampSDKType;
}
export interface QueryInstrumentRequest {
  source: string;
  destination: string;
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
export interface QueryInstrumentResponseSDKType {
  source: string;
  destination: string;
  orders: QueryOrderResponseSDKType[];
}
export interface QueryOrderResponse {
  id: Long;
  owner: string;
  sourceRemaining: string;
  clientOrderId: string;
  price: string;
  created?: Timestamp;
}
export interface QueryOrderResponseSDKType {
  id: Long;
  owner: string;
  source_remaining: string;
  client_order_id: string;
  price: string;
  created?: TimestampSDKType;
}
function createBaseQueryByAccountRequest(): QueryByAccountRequest {
  return {
    address: ""
  };
}
export const QueryByAccountRequest = {
  encode(message: QueryByAccountRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseQueryByAccountResponse(): QueryByAccountResponse {
  return {
    orders: undefined
  };
}
export const QueryByAccountResponse = {
  encode(message: QueryByAccountResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseQueryInstrumentsRequest(): QueryInstrumentsRequest {
  return {};
}
export const QueryInstrumentsRequest = {
  encode(_: QueryInstrumentsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): QueryInstrumentsRequest {
    return {};
  },
  fromPartial(_: Partial<QueryInstrumentsRequest>): QueryInstrumentsRequest {
    const message = createBaseQueryInstrumentsRequest();
    return message;
  }
};
function createBaseQueryInstrumentsResponse(): QueryInstrumentsResponse {
  return {
    instruments: []
  };
}
export const QueryInstrumentsResponse = {
  encode(message: QueryInstrumentsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseQueryInstrumentsResponse_Element(): QueryInstrumentsResponse_Element {
  return {
    source: "",
    destination: "",
    lastPrice: "",
    bestPrice: "",
    lastTraded: undefined
  };
}
export const QueryInstrumentsResponse_Element = {
  encode(message: QueryInstrumentsResponse_Element, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.source !== "") {
      writer.uint32(10).string(message.source);
    }
    if (message.destination !== "") {
      writer.uint32(18).string(message.destination);
    }
    if (message.lastPrice !== "") {
      writer.uint32(26).string(message.lastPrice);
    }
    if (message.bestPrice !== "") {
      writer.uint32(34).string(message.bestPrice);
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
  }
};
function createBaseQueryInstrumentRequest(): QueryInstrumentRequest {
  return {
    source: "",
    destination: ""
  };
}
export const QueryInstrumentRequest = {
  encode(message: QueryInstrumentRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  encode(message: QueryInstrumentResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseQueryOrderResponse(): QueryOrderResponse {
  return {
    id: Long.UZERO,
    owner: "",
    sourceRemaining: "",
    clientOrderId: undefined,
    price: "",
    created: undefined
  };
}
export const QueryOrderResponse = {
  encode(message: QueryOrderResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
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
      writer.uint32(42).string(message.price);
    }
    if (message.created !== undefined) {
      Timestamp.encode(message.created, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryOrderResponse {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      owner: isSet(object.owner) ? String(object.owner) : "",
      sourceRemaining: isSet(object.sourceRemaining) ? String(object.sourceRemaining) : "",
      clientOrderId: isSet(object.clientOrderId) ? String(object.clientOrderId) : undefined,
      price: isSet(object.price) ? String(object.price) : "",
      created: isSet(object.created) ? fromJsonTimestamp(object.created) : undefined
    };
  },
  fromPartial(object: Partial<QueryOrderResponse>): QueryOrderResponse {
    const message = createBaseQueryOrderResponse();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.owner = object.owner ?? "";
    message.sourceRemaining = object.sourceRemaining ?? "";
    message.clientOrderId = object.clientOrderId ?? undefined;
    message.price = object.price ?? "";
    message.created = object.created !== undefined && object.created !== null ? Timestamp.fromPartial(object.created) : undefined;
    return message;
  }
};