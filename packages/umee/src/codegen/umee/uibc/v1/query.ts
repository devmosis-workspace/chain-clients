import { Params, ParamsAmino, ParamsSDKType } from "./quota";
import { DecCoin, DecCoinAmino, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { Decimal } from "@cosmjs/math";
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
  denom: string;
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
  amount: string;
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
  outflows: DecCoin[];
}
export interface QueryAllOutflowsResponseProtoMsg {
  typeUrl: "/umee.uibc.v1.QueryAllOutflowsResponse";
  value: Uint8Array;
}
/** QueryOutflowResponse defines response type of Query/Outflow */
export interface QueryAllOutflowsResponseAmino {
  outflows: DecCoinAmino[];
}
export interface QueryAllOutflowsResponseAminoMsg {
  type: "/umee.uibc.v1.QueryAllOutflowsResponse";
  value: QueryAllOutflowsResponseAmino;
}
/** QueryOutflowResponse defines response type of Query/Outflow */
export interface QueryAllOutflowsResponseSDKType {
  outflows: DecCoinSDKType[];
}
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
    return {};
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
    return {
      params: object?.params ? Params.fromAmino(object.params) : undefined
    };
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
    return {
      denom: object.denom
    };
  },
  toAmino(message: QueryOutflows): QueryOutflowsAmino {
    const obj: any = {};
    obj.denom = message.denom;
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
    return {
      amount: object.amount
    };
  },
  toAmino(message: QueryOutflowsResponse): QueryOutflowsResponseAmino {
    const obj: any = {};
    obj.amount = message.amount;
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
    return {};
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
      DecCoin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryAllOutflowsResponse {
    return {
      outflows: Array.isArray(object?.outflows) ? object.outflows.map((e: any) => DecCoin.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryAllOutflowsResponse>): QueryAllOutflowsResponse {
    const message = createBaseQueryAllOutflowsResponse();
    message.outflows = object.outflows?.map(e => DecCoin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryAllOutflowsResponseAmino): QueryAllOutflowsResponse {
    return {
      outflows: Array.isArray(object?.outflows) ? object.outflows.map((e: any) => DecCoin.fromAmino(e)) : []
    };
  },
  toAmino(message: QueryAllOutflowsResponse): QueryAllOutflowsResponseAmino {
    const obj: any = {};
    if (message.outflows) {
      obj.outflows = message.outflows.map(e => e ? DecCoin.toAmino(e) : undefined);
    } else {
      obj.outflows = [];
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