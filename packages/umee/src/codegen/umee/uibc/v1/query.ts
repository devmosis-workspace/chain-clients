import { Params, ParamsSDKType } from "./quota";
import { DecCoin, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
/**
 * QueryParams defines the request structure for the Params gRPC service
 * handler.
 */
export interface QueryParams {}
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
  params?: Params;
}
/**
 * QueryParamsResponse defines the response structure for the Params gRPC
 * service handler.
 */
export interface QueryParamsResponseSDKType {
  params?: ParamsSDKType;
}
/** QueryOutflow defines request type for query the quota of denoms */
export interface QueryOutflows {
  denom: string;
}
/** QueryOutflow defines request type for query the quota of denoms */
export interface QueryOutflowsSDKType {
  denom: string;
}
/** QueryOutflowResponse defines response type of Query/Outflow */
export interface QueryOutflowsResponse {
  amount: string;
}
/** QueryOutflowResponse defines response type of Query/Outflow */
export interface QueryOutflowsResponseSDKType {
  amount: string;
}
/** QueryOutflow defines request type for query the quota of denoms */
export interface QueryAllOutflows {}
/** QueryOutflow defines request type for query the quota of denoms */
export interface QueryAllOutflowsSDKType {}
/** QueryOutflowResponse defines response type of Query/Outflow */
export interface QueryAllOutflowsResponse {
  outflows: DecCoin[];
}
/** QueryOutflowResponse defines response type of Query/Outflow */
export interface QueryAllOutflowsResponseSDKType {
  outflows: DecCoinSDKType[];
}
function createBaseQueryParams(): QueryParams {
  return {};
}
export const QueryParams = {
  encode(_: QueryParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): QueryParams {
    return {};
  },
  fromPartial(_: Partial<QueryParams>): QueryParams {
    const message = createBaseQueryParams();
    return message;
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: undefined
  };
}
export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseQueryOutflows(): QueryOutflows {
  return {
    denom: ""
  };
}
export const QueryOutflows = {
  encode(message: QueryOutflows, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseQueryOutflowsResponse(): QueryOutflowsResponse {
  return {
    amount: ""
  };
}
export const QueryOutflowsResponse = {
  encode(message: QueryOutflowsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.amount !== "") {
      writer.uint32(10).string(message.amount);
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
  }
};
function createBaseQueryAllOutflows(): QueryAllOutflows {
  return {};
}
export const QueryAllOutflows = {
  encode(_: QueryAllOutflows, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): QueryAllOutflows {
    return {};
  },
  fromPartial(_: Partial<QueryAllOutflows>): QueryAllOutflows {
    const message = createBaseQueryAllOutflows();
    return message;
  }
};
function createBaseQueryAllOutflowsResponse(): QueryAllOutflowsResponse {
  return {
    outflows: []
  };
}
export const QueryAllOutflowsResponse = {
  encode(message: QueryAllOutflowsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};