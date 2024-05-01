import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { DecCoinSymbol, DecCoinSymbolAmino, DecCoinSymbolSDKType } from "./uibc";
import { Params, ParamsAmino, ParamsSDKType } from "./quota";
import { BinaryWriter } from "../../../binary";
import { isSet, fromJsonTimestamp } from "../../../helpers";
import { Decimal } from "@cosmjs/math";
/** QueryAllInflows defines request type for query the inflow quota of registered denoms. */
export interface QueryQuotaExpires {}
export interface QueryQuotaExpiresProtoMsg {
  typeUrl: "/umee.uibc.v1.QueryQuotaExpires";
  value: Uint8Array;
}
/** QueryAllInflows defines request type for query the inflow quota of registered denoms. */
export interface QueryQuotaExpiresAmino {}
export interface QueryQuotaExpiresAminoMsg {
  type: "/umee.uibc.v1.QueryQuotaExpires";
  value: QueryQuotaExpiresAmino;
}
/** QueryAllInflows defines request type for query the inflow quota of registered denoms. */
export interface QueryQuotaExpiresSDKType {}
/** QueryAllInflowsResponse defines response type of Query/AllInflows */
export interface QueryQuotaExpiresResponse {
  endTime: Timestamp;
}
export interface QueryQuotaExpiresResponseProtoMsg {
  typeUrl: "/umee.uibc.v1.QueryQuotaExpiresResponse";
  value: Uint8Array;
}
/** QueryAllInflowsResponse defines response type of Query/AllInflows */
export interface QueryQuotaExpiresResponseAmino {
  end_time?: string;
}
export interface QueryQuotaExpiresResponseAminoMsg {
  type: "/umee.uibc.v1.QueryQuotaExpiresResponse";
  value: QueryQuotaExpiresResponseAmino;
}
/** QueryAllInflowsResponse defines response type of Query/AllInflows */
export interface QueryQuotaExpiresResponseSDKType {
  end_time: TimestampSDKType;
}
/** QueryInflows defines request type for query the inflow quota of denoms */
export interface QueryInflows {
  denom: string;
}
export interface QueryInflowsProtoMsg {
  typeUrl: "/umee.uibc.v1.QueryInflows";
  value: Uint8Array;
}
/** QueryInflows defines request type for query the inflow quota of denoms */
export interface QueryInflowsAmino {
  denom?: string;
}
export interface QueryInflowsAminoMsg {
  type: "/umee.uibc.v1.QueryInflows";
  value: QueryInflowsAmino;
}
/** QueryInflows defines request type for query the inflow quota of denoms */
export interface QueryInflowsSDKType {
  denom: string;
}
/** QueryInflowsResponse defines response type of Query/Inflows */
export interface QueryInflowsResponse {
  sum: string;
  inflows: DecCoinSymbol[];
}
export interface QueryInflowsResponseProtoMsg {
  typeUrl: "/umee.uibc.v1.QueryInflowsResponse";
  value: Uint8Array;
}
/** QueryInflowsResponse defines response type of Query/Inflows */
export interface QueryInflowsResponseAmino {
  sum?: string;
  inflows?: DecCoinSymbolAmino[];
}
export interface QueryInflowsResponseAminoMsg {
  type: "/umee.uibc.v1.QueryInflowsResponse";
  value: QueryInflowsResponseAmino;
}
/** QueryInflowsResponse defines response type of Query/Inflows */
export interface QueryInflowsResponseSDKType {
  sum: string;
  inflows: DecCoinSymbolSDKType[];
}
/**
 * QueryParams defines the request structure for the Params gRPC service
 * handler.
 */
export interface QueryParams {}
export interface QueryParamsProtoMsg {
  typeUrl: "/umee.uibc.v1.QueryParams";
  value: Uint8Array;
}
/**
 * QueryParams defines the request structure for the Params gRPC service
 * handler.
 */
export interface QueryParamsAmino {}
export interface QueryParamsAminoMsg {
  type: "/umee.uibc.v1.QueryParams";
  value: QueryParamsAmino;
}
/**
 * QueryParams defines the request structure for the Params gRPC service
 * handler.
 */
export interface QueryParamsSDKType {}
/**
 * QueryParamsResponse defines the response structure for the Params gRPC
 * service handler.
 */
export interface QueryParamsResponse {
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/umee.uibc.v1.QueryParamsResponse";
  value: Uint8Array;
}
/**
 * QueryParamsResponse defines the response structure for the Params gRPC
 * service handler.
 */
export interface QueryParamsResponseAmino {
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/umee.uibc.v1.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/**
 * QueryParamsResponse defines the response structure for the Params gRPC
 * service handler.
 */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
/** QueryOutflow defines request type for query the quota of denoms */
export interface QueryOutflows {
  denom: string;
}
export interface QueryOutflowsProtoMsg {
  typeUrl: "/umee.uibc.v1.QueryOutflows";
  value: Uint8Array;
}
/** QueryOutflow defines request type for query the quota of denoms */
export interface QueryOutflowsAmino {
  denom?: string;
}
export interface QueryOutflowsAminoMsg {
  type: "/umee.uibc.v1.QueryOutflows";
  value: QueryOutflowsAmino;
}
/** QueryOutflow defines request type for query the quota of denoms */
export interface QueryOutflowsSDKType {
  denom: string;
}
/** QueryOutflowResponse defines response type of Query/Outflow */
export interface QueryOutflowsResponse {
  amount: string;
}
export interface QueryOutflowsResponseProtoMsg {
  typeUrl: "/umee.uibc.v1.QueryOutflowsResponse";
  value: Uint8Array;
}
/** QueryOutflowResponse defines response type of Query/Outflow */
export interface QueryOutflowsResponseAmino {
  amount?: string;
}
export interface QueryOutflowsResponseAminoMsg {
  type: "/umee.uibc.v1.QueryOutflowsResponse";
  value: QueryOutflowsResponseAmino;
}
/** QueryOutflowResponse defines response type of Query/Outflow */
export interface QueryOutflowsResponseSDKType {
  amount: string;
}
/** QueryOutflow defines request type for query the quota of denoms */
export interface QueryAllOutflows {}
export interface QueryAllOutflowsProtoMsg {
  typeUrl: "/umee.uibc.v1.QueryAllOutflows";
  value: Uint8Array;
}
/** QueryOutflow defines request type for query the quota of denoms */
export interface QueryAllOutflowsAmino {}
export interface QueryAllOutflowsAminoMsg {
  type: "/umee.uibc.v1.QueryAllOutflows";
  value: QueryAllOutflowsAmino;
}
/** QueryOutflow defines request type for query the quota of denoms */
export interface QueryAllOutflowsSDKType {}
/** QueryOutflowResponse defines response type of Query/Outflow */
export interface QueryAllOutflowsResponse {
  outflows: DecCoinSymbol[];
}
export interface QueryAllOutflowsResponseProtoMsg {
  typeUrl: "/umee.uibc.v1.QueryAllOutflowsResponse";
  value: Uint8Array;
}
/** QueryOutflowResponse defines response type of Query/Outflow */
export interface QueryAllOutflowsResponseAmino {
  outflows?: DecCoinSymbolAmino[];
}
export interface QueryAllOutflowsResponseAminoMsg {
  type: "/umee.uibc.v1.QueryAllOutflowsResponse";
  value: QueryAllOutflowsResponseAmino;
}
/** QueryOutflowResponse defines response type of Query/Outflow */
export interface QueryAllOutflowsResponseSDKType {
  outflows: DecCoinSymbolSDKType[];
}
function createBaseQueryQuotaExpires(): QueryQuotaExpires {
  return {};
}
export const QueryQuotaExpires = {
  typeUrl: "/umee.uibc.v1.QueryQuotaExpires",
  encode(_: QueryQuotaExpires, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryQuotaExpires {
    return {};
  },
  fromPartial(_: Partial<QueryQuotaExpires>): QueryQuotaExpires {
    const message = createBaseQueryQuotaExpires();
    return message;
  },
  fromAmino(_: QueryQuotaExpiresAmino): QueryQuotaExpires {
    const message = createBaseQueryQuotaExpires();
    return message;
  },
  toAmino(_: QueryQuotaExpires): QueryQuotaExpiresAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryQuotaExpiresAminoMsg): QueryQuotaExpires {
    return QueryQuotaExpires.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryQuotaExpiresProtoMsg): QueryQuotaExpires {
    return QueryQuotaExpires.decode(message.value);
  },
  toProto(message: QueryQuotaExpires): Uint8Array {
    return QueryQuotaExpires.encode(message).finish();
  },
  toProtoMsg(message: QueryQuotaExpires): QueryQuotaExpiresProtoMsg {
    return {
      typeUrl: "/umee.uibc.v1.QueryQuotaExpires",
      value: QueryQuotaExpires.encode(message).finish()
    };
  }
};
function createBaseQueryQuotaExpiresResponse(): QueryQuotaExpiresResponse {
  return {
    endTime: Timestamp.fromPartial({})
  };
}
export const QueryQuotaExpiresResponse = {
  typeUrl: "/umee.uibc.v1.QueryQuotaExpiresResponse",
  encode(message: QueryQuotaExpiresResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.endTime !== undefined) {
      Timestamp.encode(message.endTime, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryQuotaExpiresResponse {
    return {
      endTime: isSet(object.endTime) ? fromJsonTimestamp(object.endTime) : undefined
    };
  },
  fromPartial(object: Partial<QueryQuotaExpiresResponse>): QueryQuotaExpiresResponse {
    const message = createBaseQueryQuotaExpiresResponse();
    message.endTime = object.endTime !== undefined && object.endTime !== null ? Timestamp.fromPartial(object.endTime) : undefined;
    return message;
  },
  fromAmino(object: QueryQuotaExpiresResponseAmino): QueryQuotaExpiresResponse {
    const message = createBaseQueryQuotaExpiresResponse();
    if (object.end_time !== undefined && object.end_time !== null) {
      message.endTime = Timestamp.fromAmino(object.end_time);
    }
    return message;
  },
  toAmino(message: QueryQuotaExpiresResponse): QueryQuotaExpiresResponseAmino {
    const obj: any = {};
    obj.end_time = message.endTime ? Timestamp.toAmino(message.endTime) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryQuotaExpiresResponseAminoMsg): QueryQuotaExpiresResponse {
    return QueryQuotaExpiresResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryQuotaExpiresResponseProtoMsg): QueryQuotaExpiresResponse {
    return QueryQuotaExpiresResponse.decode(message.value);
  },
  toProto(message: QueryQuotaExpiresResponse): Uint8Array {
    return QueryQuotaExpiresResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryQuotaExpiresResponse): QueryQuotaExpiresResponseProtoMsg {
    return {
      typeUrl: "/umee.uibc.v1.QueryQuotaExpiresResponse",
      value: QueryQuotaExpiresResponse.encode(message).finish()
    };
  }
};
function createBaseQueryInflows(): QueryInflows {
  return {
    denom: ""
  };
}
export const QueryInflows = {
  typeUrl: "/umee.uibc.v1.QueryInflows",
  encode(message: QueryInflows, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },
  fromJSON(object: any): QueryInflows {
    return {
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },
  fromPartial(object: Partial<QueryInflows>): QueryInflows {
    const message = createBaseQueryInflows();
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: QueryInflowsAmino): QueryInflows {
    const message = createBaseQueryInflows();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: QueryInflows): QueryInflowsAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    return obj;
  },
  fromAminoMsg(object: QueryInflowsAminoMsg): QueryInflows {
    return QueryInflows.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryInflowsProtoMsg): QueryInflows {
    return QueryInflows.decode(message.value);
  },
  toProto(message: QueryInflows): Uint8Array {
    return QueryInflows.encode(message).finish();
  },
  toProtoMsg(message: QueryInflows): QueryInflowsProtoMsg {
    return {
      typeUrl: "/umee.uibc.v1.QueryInflows",
      value: QueryInflows.encode(message).finish()
    };
  }
};
function createBaseQueryInflowsResponse(): QueryInflowsResponse {
  return {
    sum: "",
    inflows: []
  };
}
export const QueryInflowsResponse = {
  typeUrl: "/umee.uibc.v1.QueryInflowsResponse",
  encode(message: QueryInflowsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sum !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.sum, 18).atomics);
    }
    for (const v of message.inflows) {
      DecCoinSymbol.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryInflowsResponse {
    return {
      sum: isSet(object.sum) ? String(object.sum) : "",
      inflows: Array.isArray(object?.inflows) ? object.inflows.map((e: any) => DecCoinSymbol.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryInflowsResponse>): QueryInflowsResponse {
    const message = createBaseQueryInflowsResponse();
    message.sum = object.sum ?? "";
    message.inflows = object.inflows?.map(e => DecCoinSymbol.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryInflowsResponseAmino): QueryInflowsResponse {
    const message = createBaseQueryInflowsResponse();
    if (object.sum !== undefined && object.sum !== null) {
      message.sum = object.sum;
    }
    message.inflows = object.inflows?.map(e => DecCoinSymbol.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryInflowsResponse): QueryInflowsResponseAmino {
    const obj: any = {};
    obj.sum = message.sum === "" ? undefined : message.sum;
    if (message.inflows) {
      obj.inflows = message.inflows.map(e => e ? DecCoinSymbol.toAmino(e) : undefined);
    } else {
      obj.inflows = message.inflows;
    }
    return obj;
  },
  fromAminoMsg(object: QueryInflowsResponseAminoMsg): QueryInflowsResponse {
    return QueryInflowsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryInflowsResponseProtoMsg): QueryInflowsResponse {
    return QueryInflowsResponse.decode(message.value);
  },
  toProto(message: QueryInflowsResponse): Uint8Array {
    return QueryInflowsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryInflowsResponse): QueryInflowsResponseProtoMsg {
    return {
      typeUrl: "/umee.uibc.v1.QueryInflowsResponse",
      value: QueryInflowsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryParams(): QueryParams {
  return {};
}
export const QueryParams = {
  typeUrl: "/umee.uibc.v1.QueryParams",
  encode(_: QueryParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryParams {
    return {};
  },
  fromPartial(_: Partial<QueryParams>): QueryParams {
    const message = createBaseQueryParams();
    return message;
  },
  fromAmino(_: QueryParamsAmino): QueryParams {
    const message = createBaseQueryParams();
    return message;
  },
  toAmino(_: QueryParams): QueryParamsAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryParamsAminoMsg): QueryParams {
    return QueryParams.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsProtoMsg): QueryParams {
    return QueryParams.decode(message.value);
  },
  toProto(message: QueryParams): Uint8Array {
    return QueryParams.encode(message).finish();
  },
  toProtoMsg(message: QueryParams): QueryParamsProtoMsg {
    return {
      typeUrl: "/umee.uibc.v1.QueryParams",
      value: QueryParams.encode(message).finish()
    };
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryParamsResponse = {
  typeUrl: "/umee.uibc.v1.QueryParamsResponse",
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryParamsResponse {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: QueryParamsResponse): QueryParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse {
    return QueryParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/umee.uibc.v1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryOutflows(): QueryOutflows {
  return {
    denom: ""
  };
}
export const QueryOutflows = {
  typeUrl: "/umee.uibc.v1.QueryOutflows",
  encode(message: QueryOutflows, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },
  fromJSON(object: any): QueryOutflows {
    return {
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },
  fromPartial(object: Partial<QueryOutflows>): QueryOutflows {
    const message = createBaseQueryOutflows();
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: QueryOutflowsAmino): QueryOutflows {
    const message = createBaseQueryOutflows();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: QueryOutflows): QueryOutflowsAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    return obj;
  },
  fromAminoMsg(object: QueryOutflowsAminoMsg): QueryOutflows {
    return QueryOutflows.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryOutflowsProtoMsg): QueryOutflows {
    return QueryOutflows.decode(message.value);
  },
  toProto(message: QueryOutflows): Uint8Array {
    return QueryOutflows.encode(message).finish();
  },
  toProtoMsg(message: QueryOutflows): QueryOutflowsProtoMsg {
    return {
      typeUrl: "/umee.uibc.v1.QueryOutflows",
      value: QueryOutflows.encode(message).finish()
    };
  }
};
function createBaseQueryOutflowsResponse(): QueryOutflowsResponse {
  return {
    amount: ""
  };
}
export const QueryOutflowsResponse = {
  typeUrl: "/umee.uibc.v1.QueryOutflowsResponse",
  encode(message: QueryOutflowsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.amount !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.amount, 18).atomics);
    }
    return writer;
  },
  fromJSON(object: any): QueryOutflowsResponse {
    return {
      amount: isSet(object.amount) ? String(object.amount) : ""
    };
  },
  fromPartial(object: Partial<QueryOutflowsResponse>): QueryOutflowsResponse {
    const message = createBaseQueryOutflowsResponse();
    message.amount = object.amount ?? "";
    return message;
  },
  fromAmino(object: QueryOutflowsResponseAmino): QueryOutflowsResponse {
    const message = createBaseQueryOutflowsResponse();
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    return message;
  },
  toAmino(message: QueryOutflowsResponse): QueryOutflowsResponseAmino {
    const obj: any = {};
    obj.amount = message.amount === "" ? undefined : message.amount;
    return obj;
  },
  fromAminoMsg(object: QueryOutflowsResponseAminoMsg): QueryOutflowsResponse {
    return QueryOutflowsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryOutflowsResponseProtoMsg): QueryOutflowsResponse {
    return QueryOutflowsResponse.decode(message.value);
  },
  toProto(message: QueryOutflowsResponse): Uint8Array {
    return QueryOutflowsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryOutflowsResponse): QueryOutflowsResponseProtoMsg {
    return {
      typeUrl: "/umee.uibc.v1.QueryOutflowsResponse",
      value: QueryOutflowsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllOutflows(): QueryAllOutflows {
  return {};
}
export const QueryAllOutflows = {
  typeUrl: "/umee.uibc.v1.QueryAllOutflows",
  encode(_: QueryAllOutflows, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryAllOutflows {
    return {};
  },
  fromPartial(_: Partial<QueryAllOutflows>): QueryAllOutflows {
    const message = createBaseQueryAllOutflows();
    return message;
  },
  fromAmino(_: QueryAllOutflowsAmino): QueryAllOutflows {
    const message = createBaseQueryAllOutflows();
    return message;
  },
  toAmino(_: QueryAllOutflows): QueryAllOutflowsAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryAllOutflowsAminoMsg): QueryAllOutflows {
    return QueryAllOutflows.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllOutflowsProtoMsg): QueryAllOutflows {
    return QueryAllOutflows.decode(message.value);
  },
  toProto(message: QueryAllOutflows): Uint8Array {
    return QueryAllOutflows.encode(message).finish();
  },
  toProtoMsg(message: QueryAllOutflows): QueryAllOutflowsProtoMsg {
    return {
      typeUrl: "/umee.uibc.v1.QueryAllOutflows",
      value: QueryAllOutflows.encode(message).finish()
    };
  }
};
function createBaseQueryAllOutflowsResponse(): QueryAllOutflowsResponse {
  return {
    outflows: []
  };
}
export const QueryAllOutflowsResponse = {
  typeUrl: "/umee.uibc.v1.QueryAllOutflowsResponse",
  encode(message: QueryAllOutflowsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.outflows) {
      DecCoinSymbol.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryAllOutflowsResponse {
    return {
      outflows: Array.isArray(object?.outflows) ? object.outflows.map((e: any) => DecCoinSymbol.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryAllOutflowsResponse>): QueryAllOutflowsResponse {
    const message = createBaseQueryAllOutflowsResponse();
    message.outflows = object.outflows?.map(e => DecCoinSymbol.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryAllOutflowsResponseAmino): QueryAllOutflowsResponse {
    const message = createBaseQueryAllOutflowsResponse();
    message.outflows = object.outflows?.map(e => DecCoinSymbol.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryAllOutflowsResponse): QueryAllOutflowsResponseAmino {
    const obj: any = {};
    if (message.outflows) {
      obj.outflows = message.outflows.map(e => e ? DecCoinSymbol.toAmino(e) : undefined);
    } else {
      obj.outflows = message.outflows;
    }
    return obj;
  },
  fromAminoMsg(object: QueryAllOutflowsResponseAminoMsg): QueryAllOutflowsResponse {
    return QueryAllOutflowsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllOutflowsResponseProtoMsg): QueryAllOutflowsResponse {
    return QueryAllOutflowsResponse.decode(message.value);
  },
  toProto(message: QueryAllOutflowsResponse): Uint8Array {
    return QueryAllOutflowsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllOutflowsResponse): QueryAllOutflowsResponseProtoMsg {
    return {
      typeUrl: "/umee.uibc.v1.QueryAllOutflowsResponse",
      value: QueryAllOutflowsResponse.encode(message).finish()
    };
  }
};