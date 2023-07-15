import { Params, ParamsSDKType, InsuranceFund, InsuranceFundSDKType } from "./insurance";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { GenesisState, GenesisStateSDKType } from "./genesis";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
/**
 * QueryInsuranceParamsRequest is the request type for the Query/InsuranceParams
 * RPC method.
 */
export interface QueryInsuranceParamsRequest {}
/**
 * QueryInsuranceParamsRequest is the request type for the Query/InsuranceParams
 * RPC method.
 */
export interface QueryInsuranceParamsRequestSDKType {}
/**
 * QueryInsuranceParamsRequest is the response type for the
 * Query/InsuranceParams RPC method.
 */
export interface QueryInsuranceParamsResponse {
  params?: Params;
}
/**
 * QueryInsuranceParamsRequest is the response type for the
 * Query/InsuranceParams RPC method.
 */
export interface QueryInsuranceParamsResponseSDKType {
  params?: ParamsSDKType;
}
/**
 * QueryInsuranceFundRequest is the request type for the Query/InsuranceFunds
 * RPC method.
 */
export interface QueryInsuranceFundRequest {
  /** Market ID for the market */
  marketId: string;
}
/**
 * QueryInsuranceFundRequest is the request type for the Query/InsuranceFunds
 * RPC method.
 */
export interface QueryInsuranceFundRequestSDKType {
  market_id: string;
}
/**
 * QueryInsuranceFundResponse is the response type for the Query/InsuranceFund
 * RPC method.
 */
export interface QueryInsuranceFundResponse {
  /**
   * QueryInsuranceFundResponse is the response type for the Query/InsuranceFund
   * RPC method.
   */
  fund?: InsuranceFund;
}
/**
 * QueryInsuranceFundResponse is the response type for the Query/InsuranceFund
 * RPC method.
 */
export interface QueryInsuranceFundResponseSDKType {
  fund?: InsuranceFundSDKType;
}
/**
 * QueryInsuranceFundsRequest is the request type for the Query/InsuranceFunds
 * RPC method.
 */
export interface QueryInsuranceFundsRequest {}
/**
 * QueryInsuranceFundsRequest is the request type for the Query/InsuranceFunds
 * RPC method.
 */
export interface QueryInsuranceFundsRequestSDKType {}
/**
 * QueryInsuranceFundsResponse is the response type for the Query/InsuranceFunds
 * RPC method.
 */
export interface QueryInsuranceFundsResponse {
  funds: InsuranceFund[];
}
/**
 * QueryInsuranceFundsResponse is the response type for the Query/InsuranceFunds
 * RPC method.
 */
export interface QueryInsuranceFundsResponseSDKType {
  funds: InsuranceFundSDKType[];
}
/**
 * QueryEstimatedRedemptionsRequest is the request type for the
 * Query/EstimatedRedemptions RPC method.
 */
export interface QueryEstimatedRedemptionsRequest {
  marketId: string;
  address: string;
}
/**
 * QueryEstimatedRedemptionsRequest is the request type for the
 * Query/EstimatedRedemptions RPC method.
 */
export interface QueryEstimatedRedemptionsRequestSDKType {
  marketId: string;
  address: string;
}
/**
 * QueryEstimatedRedemptionsResponse is the response type for the
 * Query/EstimatedRedemptions RPC method.
 */
export interface QueryEstimatedRedemptionsResponse {
  amount: Coin[];
}
/**
 * QueryEstimatedRedemptionsResponse is the response type for the
 * Query/EstimatedRedemptions RPC method.
 */
export interface QueryEstimatedRedemptionsResponseSDKType {
  amount: CoinSDKType[];
}
/**
 * QueryPendingRedemptionsRequest is the request type for the
 * Query/PendingRedemptions RPC method.
 */
export interface QueryPendingRedemptionsRequest {
  marketId: string;
  address: string;
}
/**
 * QueryPendingRedemptionsRequest is the request type for the
 * Query/PendingRedemptions RPC method.
 */
export interface QueryPendingRedemptionsRequestSDKType {
  marketId: string;
  address: string;
}
/**
 * QueryPendingRedemptionsResponse is the response type for the
 * Query/PendingRedemptions RPC method.
 */
export interface QueryPendingRedemptionsResponse {
  amount: Coin[];
}
/**
 * QueryPendingRedemptionsResponse is the response type for the
 * Query/PendingRedemptions RPC method.
 */
export interface QueryPendingRedemptionsResponseSDKType {
  amount: CoinSDKType[];
}
/**
 * QueryModuleStateRequest is the request type for the
 * Query/InsuranceModuleState RPC method.
 */
export interface QueryModuleStateRequest {}
/**
 * QueryModuleStateRequest is the request type for the
 * Query/InsuranceModuleState RPC method.
 */
export interface QueryModuleStateRequestSDKType {}
/**
 * QueryModuleStateResponse is the response type for the
 * Query/InsuranceModuleState RPC method.
 */
export interface QueryModuleStateResponse {
  /**
   * QueryModuleStateResponse is the response type for the
   * Query/InsuranceModuleState RPC method.
   */
  state?: GenesisState;
}
/**
 * QueryModuleStateResponse is the response type for the
 * Query/InsuranceModuleState RPC method.
 */
export interface QueryModuleStateResponseSDKType {
  state?: GenesisStateSDKType;
}
function createBaseQueryInsuranceParamsRequest(): QueryInsuranceParamsRequest {
  return {};
}
export const QueryInsuranceParamsRequest = {
  encode(_: QueryInsuranceParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): QueryInsuranceParamsRequest {
    return {};
  },
  fromPartial(_: Partial<QueryInsuranceParamsRequest>): QueryInsuranceParamsRequest {
    const message = createBaseQueryInsuranceParamsRequest();
    return message;
  }
};
function createBaseQueryInsuranceParamsResponse(): QueryInsuranceParamsResponse {
  return {
    params: undefined
  };
}
export const QueryInsuranceParamsResponse = {
  encode(message: QueryInsuranceParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryInsuranceParamsResponse {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  fromPartial(object: Partial<QueryInsuranceParamsResponse>): QueryInsuranceParamsResponse {
    const message = createBaseQueryInsuranceParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  }
};
function createBaseQueryInsuranceFundRequest(): QueryInsuranceFundRequest {
  return {
    marketId: ""
  };
}
export const QueryInsuranceFundRequest = {
  encode(message: QueryInsuranceFundRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    return writer;
  },
  fromJSON(object: any): QueryInsuranceFundRequest {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : ""
    };
  },
  fromPartial(object: Partial<QueryInsuranceFundRequest>): QueryInsuranceFundRequest {
    const message = createBaseQueryInsuranceFundRequest();
    message.marketId = object.marketId ?? "";
    return message;
  }
};
function createBaseQueryInsuranceFundResponse(): QueryInsuranceFundResponse {
  return {
    fund: undefined
  };
}
export const QueryInsuranceFundResponse = {
  encode(message: QueryInsuranceFundResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fund !== undefined) {
      InsuranceFund.encode(message.fund, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryInsuranceFundResponse {
    return {
      fund: isSet(object.fund) ? InsuranceFund.fromJSON(object.fund) : undefined
    };
  },
  fromPartial(object: Partial<QueryInsuranceFundResponse>): QueryInsuranceFundResponse {
    const message = createBaseQueryInsuranceFundResponse();
    message.fund = object.fund !== undefined && object.fund !== null ? InsuranceFund.fromPartial(object.fund) : undefined;
    return message;
  }
};
function createBaseQueryInsuranceFundsRequest(): QueryInsuranceFundsRequest {
  return {};
}
export const QueryInsuranceFundsRequest = {
  encode(_: QueryInsuranceFundsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): QueryInsuranceFundsRequest {
    return {};
  },
  fromPartial(_: Partial<QueryInsuranceFundsRequest>): QueryInsuranceFundsRequest {
    const message = createBaseQueryInsuranceFundsRequest();
    return message;
  }
};
function createBaseQueryInsuranceFundsResponse(): QueryInsuranceFundsResponse {
  return {
    funds: []
  };
}
export const QueryInsuranceFundsResponse = {
  encode(message: QueryInsuranceFundsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.funds) {
      InsuranceFund.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryInsuranceFundsResponse {
    return {
      funds: Array.isArray(object?.funds) ? object.funds.map((e: any) => InsuranceFund.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryInsuranceFundsResponse>): QueryInsuranceFundsResponse {
    const message = createBaseQueryInsuranceFundsResponse();
    message.funds = object.funds?.map(e => InsuranceFund.fromPartial(e)) || [];
    return message;
  }
};
function createBaseQueryEstimatedRedemptionsRequest(): QueryEstimatedRedemptionsRequest {
  return {
    marketId: "",
    address: ""
  };
}
export const QueryEstimatedRedemptionsRequest = {
  encode(message: QueryEstimatedRedemptionsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    return writer;
  },
  fromJSON(object: any): QueryEstimatedRedemptionsRequest {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      address: isSet(object.address) ? String(object.address) : ""
    };
  },
  fromPartial(object: Partial<QueryEstimatedRedemptionsRequest>): QueryEstimatedRedemptionsRequest {
    const message = createBaseQueryEstimatedRedemptionsRequest();
    message.marketId = object.marketId ?? "";
    message.address = object.address ?? "";
    return message;
  }
};
function createBaseQueryEstimatedRedemptionsResponse(): QueryEstimatedRedemptionsResponse {
  return {
    amount: []
  };
}
export const QueryEstimatedRedemptionsResponse = {
  encode(message: QueryEstimatedRedemptionsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryEstimatedRedemptionsResponse {
    return {
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryEstimatedRedemptionsResponse>): QueryEstimatedRedemptionsResponse {
    const message = createBaseQueryEstimatedRedemptionsResponse();
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }
};
function createBaseQueryPendingRedemptionsRequest(): QueryPendingRedemptionsRequest {
  return {
    marketId: "",
    address: ""
  };
}
export const QueryPendingRedemptionsRequest = {
  encode(message: QueryPendingRedemptionsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    return writer;
  },
  fromJSON(object: any): QueryPendingRedemptionsRequest {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      address: isSet(object.address) ? String(object.address) : ""
    };
  },
  fromPartial(object: Partial<QueryPendingRedemptionsRequest>): QueryPendingRedemptionsRequest {
    const message = createBaseQueryPendingRedemptionsRequest();
    message.marketId = object.marketId ?? "";
    message.address = object.address ?? "";
    return message;
  }
};
function createBaseQueryPendingRedemptionsResponse(): QueryPendingRedemptionsResponse {
  return {
    amount: []
  };
}
export const QueryPendingRedemptionsResponse = {
  encode(message: QueryPendingRedemptionsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryPendingRedemptionsResponse {
    return {
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryPendingRedemptionsResponse>): QueryPendingRedemptionsResponse {
    const message = createBaseQueryPendingRedemptionsResponse();
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }
};
function createBaseQueryModuleStateRequest(): QueryModuleStateRequest {
  return {};
}
export const QueryModuleStateRequest = {
  encode(_: QueryModuleStateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): QueryModuleStateRequest {
    return {};
  },
  fromPartial(_: Partial<QueryModuleStateRequest>): QueryModuleStateRequest {
    const message = createBaseQueryModuleStateRequest();
    return message;
  }
};
function createBaseQueryModuleStateResponse(): QueryModuleStateResponse {
  return {
    state: undefined
  };
}
export const QueryModuleStateResponse = {
  encode(message: QueryModuleStateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.state !== undefined) {
      GenesisState.encode(message.state, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryModuleStateResponse {
    return {
      state: isSet(object.state) ? GenesisState.fromJSON(object.state) : undefined
    };
  },
  fromPartial(object: Partial<QueryModuleStateResponse>): QueryModuleStateResponse {
    const message = createBaseQueryModuleStateResponse();
    message.state = object.state !== undefined && object.state !== null ? GenesisState.fromPartial(object.state) : undefined;
    return message;
  }
};