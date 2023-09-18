import { Params, ParamsAmino, ParamsSDKType, InsuranceFund, InsuranceFundAmino, InsuranceFundSDKType } from "./insurance";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { GenesisState, GenesisStateAmino, GenesisStateSDKType } from "./genesis";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/**
 * QueryInsuranceParamsRequest is the request type for the Query/InsuranceParams
 * RPC method.
 */
export interface QueryInsuranceParamsRequest {}
export interface QueryInsuranceParamsRequestProtoMsg {
  typeUrl: "/injective.insurance.v1beta1.QueryInsuranceParamsRequest";
  value: Uint8Array;
}
/**
 * QueryInsuranceParamsRequest is the request type for the Query/InsuranceParams
 * RPC method.
 */
export interface QueryInsuranceParamsRequestAmino {}
export interface QueryInsuranceParamsRequestAminoMsg {
  type: "/injective.insurance.v1beta1.QueryInsuranceParamsRequest";
  value: QueryInsuranceParamsRequestAmino;
}
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
  params: Params;
}
export interface QueryInsuranceParamsResponseProtoMsg {
  typeUrl: "/injective.insurance.v1beta1.QueryInsuranceParamsResponse";
  value: Uint8Array;
}
/**
 * QueryInsuranceParamsRequest is the response type for the
 * Query/InsuranceParams RPC method.
 */
export interface QueryInsuranceParamsResponseAmino {
  params?: ParamsAmino;
}
export interface QueryInsuranceParamsResponseAminoMsg {
  type: "/injective.insurance.v1beta1.QueryInsuranceParamsResponse";
  value: QueryInsuranceParamsResponseAmino;
}
/**
 * QueryInsuranceParamsRequest is the response type for the
 * Query/InsuranceParams RPC method.
 */
export interface QueryInsuranceParamsResponseSDKType {
  params: ParamsSDKType;
}
/**
 * QueryInsuranceFundRequest is the request type for the Query/InsuranceFunds
 * RPC method.
 */
export interface QueryInsuranceFundRequest {
  /** Market ID for the market */
  marketId: string;
}
export interface QueryInsuranceFundRequestProtoMsg {
  typeUrl: "/injective.insurance.v1beta1.QueryInsuranceFundRequest";
  value: Uint8Array;
}
/**
 * QueryInsuranceFundRequest is the request type for the Query/InsuranceFunds
 * RPC method.
 */
export interface QueryInsuranceFundRequestAmino {
  /** Market ID for the market */
  market_id: string;
}
export interface QueryInsuranceFundRequestAminoMsg {
  type: "/injective.insurance.v1beta1.QueryInsuranceFundRequest";
  value: QueryInsuranceFundRequestAmino;
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
  fund: InsuranceFund;
}
export interface QueryInsuranceFundResponseProtoMsg {
  typeUrl: "/injective.insurance.v1beta1.QueryInsuranceFundResponse";
  value: Uint8Array;
}
/**
 * QueryInsuranceFundResponse is the response type for the Query/InsuranceFund
 * RPC method.
 */
export interface QueryInsuranceFundResponseAmino {
  /**
   * QueryInsuranceFundResponse is the response type for the Query/InsuranceFund
   * RPC method.
   */
  fund?: InsuranceFundAmino;
}
export interface QueryInsuranceFundResponseAminoMsg {
  type: "/injective.insurance.v1beta1.QueryInsuranceFundResponse";
  value: QueryInsuranceFundResponseAmino;
}
/**
 * QueryInsuranceFundResponse is the response type for the Query/InsuranceFund
 * RPC method.
 */
export interface QueryInsuranceFundResponseSDKType {
  fund: InsuranceFundSDKType;
}
/**
 * QueryInsuranceFundsRequest is the request type for the Query/InsuranceFunds
 * RPC method.
 */
export interface QueryInsuranceFundsRequest {}
export interface QueryInsuranceFundsRequestProtoMsg {
  typeUrl: "/injective.insurance.v1beta1.QueryInsuranceFundsRequest";
  value: Uint8Array;
}
/**
 * QueryInsuranceFundsRequest is the request type for the Query/InsuranceFunds
 * RPC method.
 */
export interface QueryInsuranceFundsRequestAmino {}
export interface QueryInsuranceFundsRequestAminoMsg {
  type: "/injective.insurance.v1beta1.QueryInsuranceFundsRequest";
  value: QueryInsuranceFundsRequestAmino;
}
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
export interface QueryInsuranceFundsResponseProtoMsg {
  typeUrl: "/injective.insurance.v1beta1.QueryInsuranceFundsResponse";
  value: Uint8Array;
}
/**
 * QueryInsuranceFundsResponse is the response type for the Query/InsuranceFunds
 * RPC method.
 */
export interface QueryInsuranceFundsResponseAmino {
  funds: InsuranceFundAmino[];
}
export interface QueryInsuranceFundsResponseAminoMsg {
  type: "/injective.insurance.v1beta1.QueryInsuranceFundsResponse";
  value: QueryInsuranceFundsResponseAmino;
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
export interface QueryEstimatedRedemptionsRequestProtoMsg {
  typeUrl: "/injective.insurance.v1beta1.QueryEstimatedRedemptionsRequest";
  value: Uint8Array;
}
/**
 * QueryEstimatedRedemptionsRequest is the request type for the
 * Query/EstimatedRedemptions RPC method.
 */
export interface QueryEstimatedRedemptionsRequestAmino {
  marketId: string;
  address: string;
}
export interface QueryEstimatedRedemptionsRequestAminoMsg {
  type: "/injective.insurance.v1beta1.QueryEstimatedRedemptionsRequest";
  value: QueryEstimatedRedemptionsRequestAmino;
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
export interface QueryEstimatedRedemptionsResponseProtoMsg {
  typeUrl: "/injective.insurance.v1beta1.QueryEstimatedRedemptionsResponse";
  value: Uint8Array;
}
/**
 * QueryEstimatedRedemptionsResponse is the response type for the
 * Query/EstimatedRedemptions RPC method.
 */
export interface QueryEstimatedRedemptionsResponseAmino {
  amount: CoinAmino[];
}
export interface QueryEstimatedRedemptionsResponseAminoMsg {
  type: "/injective.insurance.v1beta1.QueryEstimatedRedemptionsResponse";
  value: QueryEstimatedRedemptionsResponseAmino;
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
export interface QueryPendingRedemptionsRequestProtoMsg {
  typeUrl: "/injective.insurance.v1beta1.QueryPendingRedemptionsRequest";
  value: Uint8Array;
}
/**
 * QueryPendingRedemptionsRequest is the request type for the
 * Query/PendingRedemptions RPC method.
 */
export interface QueryPendingRedemptionsRequestAmino {
  marketId: string;
  address: string;
}
export interface QueryPendingRedemptionsRequestAminoMsg {
  type: "/injective.insurance.v1beta1.QueryPendingRedemptionsRequest";
  value: QueryPendingRedemptionsRequestAmino;
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
export interface QueryPendingRedemptionsResponseProtoMsg {
  typeUrl: "/injective.insurance.v1beta1.QueryPendingRedemptionsResponse";
  value: Uint8Array;
}
/**
 * QueryPendingRedemptionsResponse is the response type for the
 * Query/PendingRedemptions RPC method.
 */
export interface QueryPendingRedemptionsResponseAmino {
  amount: CoinAmino[];
}
export interface QueryPendingRedemptionsResponseAminoMsg {
  type: "/injective.insurance.v1beta1.QueryPendingRedemptionsResponse";
  value: QueryPendingRedemptionsResponseAmino;
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
export interface QueryModuleStateRequestProtoMsg {
  typeUrl: "/injective.insurance.v1beta1.QueryModuleStateRequest";
  value: Uint8Array;
}
/**
 * QueryModuleStateRequest is the request type for the
 * Query/InsuranceModuleState RPC method.
 */
export interface QueryModuleStateRequestAmino {}
export interface QueryModuleStateRequestAminoMsg {
  type: "/injective.insurance.v1beta1.QueryModuleStateRequest";
  value: QueryModuleStateRequestAmino;
}
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
  state: GenesisState;
}
export interface QueryModuleStateResponseProtoMsg {
  typeUrl: "/injective.insurance.v1beta1.QueryModuleStateResponse";
  value: Uint8Array;
}
/**
 * QueryModuleStateResponse is the response type for the
 * Query/InsuranceModuleState RPC method.
 */
export interface QueryModuleStateResponseAmino {
  /**
   * QueryModuleStateResponse is the response type for the
   * Query/InsuranceModuleState RPC method.
   */
  state?: GenesisStateAmino;
}
export interface QueryModuleStateResponseAminoMsg {
  type: "/injective.insurance.v1beta1.QueryModuleStateResponse";
  value: QueryModuleStateResponseAmino;
}
/**
 * QueryModuleStateResponse is the response type for the
 * Query/InsuranceModuleState RPC method.
 */
export interface QueryModuleStateResponseSDKType {
  state: GenesisStateSDKType;
}
function createBaseQueryInsuranceParamsRequest(): QueryInsuranceParamsRequest {
  return {};
}
export const QueryInsuranceParamsRequest = {
  typeUrl: "/injective.insurance.v1beta1.QueryInsuranceParamsRequest",
  encode(_: QueryInsuranceParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryInsuranceParamsRequest {
    return {};
  },
  fromPartial(_: Partial<QueryInsuranceParamsRequest>): QueryInsuranceParamsRequest {
    const message = createBaseQueryInsuranceParamsRequest();
    return message;
  },
  fromAmino(_: QueryInsuranceParamsRequestAmino): QueryInsuranceParamsRequest {
    return {};
  },
  toAmino(_: QueryInsuranceParamsRequest): QueryInsuranceParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryInsuranceParamsRequestAminoMsg): QueryInsuranceParamsRequest {
    return QueryInsuranceParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryInsuranceParamsRequestProtoMsg): QueryInsuranceParamsRequest {
    return QueryInsuranceParamsRequest.decode(message.value);
  },
  toProto(message: QueryInsuranceParamsRequest): Uint8Array {
    return QueryInsuranceParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryInsuranceParamsRequest): QueryInsuranceParamsRequestProtoMsg {
    return {
      typeUrl: "/injective.insurance.v1beta1.QueryInsuranceParamsRequest",
      value: QueryInsuranceParamsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryInsuranceParamsResponse(): QueryInsuranceParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryInsuranceParamsResponse = {
  typeUrl: "/injective.insurance.v1beta1.QueryInsuranceParamsResponse",
  encode(message: QueryInsuranceParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueryInsuranceParamsResponseAmino): QueryInsuranceParamsResponse {
    return {
      params: object?.params ? Params.fromAmino(object.params) : undefined
    };
  },
  toAmino(message: QueryInsuranceParamsResponse): QueryInsuranceParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryInsuranceParamsResponseAminoMsg): QueryInsuranceParamsResponse {
    return QueryInsuranceParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryInsuranceParamsResponseProtoMsg): QueryInsuranceParamsResponse {
    return QueryInsuranceParamsResponse.decode(message.value);
  },
  toProto(message: QueryInsuranceParamsResponse): Uint8Array {
    return QueryInsuranceParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryInsuranceParamsResponse): QueryInsuranceParamsResponseProtoMsg {
    return {
      typeUrl: "/injective.insurance.v1beta1.QueryInsuranceParamsResponse",
      value: QueryInsuranceParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryInsuranceFundRequest(): QueryInsuranceFundRequest {
  return {
    marketId: ""
  };
}
export const QueryInsuranceFundRequest = {
  typeUrl: "/injective.insurance.v1beta1.QueryInsuranceFundRequest",
  encode(message: QueryInsuranceFundRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueryInsuranceFundRequestAmino): QueryInsuranceFundRequest {
    return {
      marketId: object.market_id
    };
  },
  toAmino(message: QueryInsuranceFundRequest): QueryInsuranceFundRequestAmino {
    const obj: any = {};
    obj.market_id = message.marketId;
    return obj;
  },
  fromAminoMsg(object: QueryInsuranceFundRequestAminoMsg): QueryInsuranceFundRequest {
    return QueryInsuranceFundRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryInsuranceFundRequestProtoMsg): QueryInsuranceFundRequest {
    return QueryInsuranceFundRequest.decode(message.value);
  },
  toProto(message: QueryInsuranceFundRequest): Uint8Array {
    return QueryInsuranceFundRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryInsuranceFundRequest): QueryInsuranceFundRequestProtoMsg {
    return {
      typeUrl: "/injective.insurance.v1beta1.QueryInsuranceFundRequest",
      value: QueryInsuranceFundRequest.encode(message).finish()
    };
  }
};
function createBaseQueryInsuranceFundResponse(): QueryInsuranceFundResponse {
  return {
    fund: InsuranceFund.fromPartial({})
  };
}
export const QueryInsuranceFundResponse = {
  typeUrl: "/injective.insurance.v1beta1.QueryInsuranceFundResponse",
  encode(message: QueryInsuranceFundResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueryInsuranceFundResponseAmino): QueryInsuranceFundResponse {
    return {
      fund: object?.fund ? InsuranceFund.fromAmino(object.fund) : undefined
    };
  },
  toAmino(message: QueryInsuranceFundResponse): QueryInsuranceFundResponseAmino {
    const obj: any = {};
    obj.fund = message.fund ? InsuranceFund.toAmino(message.fund) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryInsuranceFundResponseAminoMsg): QueryInsuranceFundResponse {
    return QueryInsuranceFundResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryInsuranceFundResponseProtoMsg): QueryInsuranceFundResponse {
    return QueryInsuranceFundResponse.decode(message.value);
  },
  toProto(message: QueryInsuranceFundResponse): Uint8Array {
    return QueryInsuranceFundResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryInsuranceFundResponse): QueryInsuranceFundResponseProtoMsg {
    return {
      typeUrl: "/injective.insurance.v1beta1.QueryInsuranceFundResponse",
      value: QueryInsuranceFundResponse.encode(message).finish()
    };
  }
};
function createBaseQueryInsuranceFundsRequest(): QueryInsuranceFundsRequest {
  return {};
}
export const QueryInsuranceFundsRequest = {
  typeUrl: "/injective.insurance.v1beta1.QueryInsuranceFundsRequest",
  encode(_: QueryInsuranceFundsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryInsuranceFundsRequest {
    return {};
  },
  fromPartial(_: Partial<QueryInsuranceFundsRequest>): QueryInsuranceFundsRequest {
    const message = createBaseQueryInsuranceFundsRequest();
    return message;
  },
  fromAmino(_: QueryInsuranceFundsRequestAmino): QueryInsuranceFundsRequest {
    return {};
  },
  toAmino(_: QueryInsuranceFundsRequest): QueryInsuranceFundsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryInsuranceFundsRequestAminoMsg): QueryInsuranceFundsRequest {
    return QueryInsuranceFundsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryInsuranceFundsRequestProtoMsg): QueryInsuranceFundsRequest {
    return QueryInsuranceFundsRequest.decode(message.value);
  },
  toProto(message: QueryInsuranceFundsRequest): Uint8Array {
    return QueryInsuranceFundsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryInsuranceFundsRequest): QueryInsuranceFundsRequestProtoMsg {
    return {
      typeUrl: "/injective.insurance.v1beta1.QueryInsuranceFundsRequest",
      value: QueryInsuranceFundsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryInsuranceFundsResponse(): QueryInsuranceFundsResponse {
  return {
    funds: []
  };
}
export const QueryInsuranceFundsResponse = {
  typeUrl: "/injective.insurance.v1beta1.QueryInsuranceFundsResponse",
  encode(message: QueryInsuranceFundsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueryInsuranceFundsResponseAmino): QueryInsuranceFundsResponse {
    return {
      funds: Array.isArray(object?.funds) ? object.funds.map((e: any) => InsuranceFund.fromAmino(e)) : []
    };
  },
  toAmino(message: QueryInsuranceFundsResponse): QueryInsuranceFundsResponseAmino {
    const obj: any = {};
    if (message.funds) {
      obj.funds = message.funds.map(e => e ? InsuranceFund.toAmino(e) : undefined);
    } else {
      obj.funds = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryInsuranceFundsResponseAminoMsg): QueryInsuranceFundsResponse {
    return QueryInsuranceFundsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryInsuranceFundsResponseProtoMsg): QueryInsuranceFundsResponse {
    return QueryInsuranceFundsResponse.decode(message.value);
  },
  toProto(message: QueryInsuranceFundsResponse): Uint8Array {
    return QueryInsuranceFundsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryInsuranceFundsResponse): QueryInsuranceFundsResponseProtoMsg {
    return {
      typeUrl: "/injective.insurance.v1beta1.QueryInsuranceFundsResponse",
      value: QueryInsuranceFundsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryEstimatedRedemptionsRequest(): QueryEstimatedRedemptionsRequest {
  return {
    marketId: "",
    address: ""
  };
}
export const QueryEstimatedRedemptionsRequest = {
  typeUrl: "/injective.insurance.v1beta1.QueryEstimatedRedemptionsRequest",
  encode(message: QueryEstimatedRedemptionsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueryEstimatedRedemptionsRequestAmino): QueryEstimatedRedemptionsRequest {
    return {
      marketId: object.marketId,
      address: object.address
    };
  },
  toAmino(message: QueryEstimatedRedemptionsRequest): QueryEstimatedRedemptionsRequestAmino {
    const obj: any = {};
    obj.marketId = message.marketId;
    obj.address = message.address;
    return obj;
  },
  fromAminoMsg(object: QueryEstimatedRedemptionsRequestAminoMsg): QueryEstimatedRedemptionsRequest {
    return QueryEstimatedRedemptionsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryEstimatedRedemptionsRequestProtoMsg): QueryEstimatedRedemptionsRequest {
    return QueryEstimatedRedemptionsRequest.decode(message.value);
  },
  toProto(message: QueryEstimatedRedemptionsRequest): Uint8Array {
    return QueryEstimatedRedemptionsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryEstimatedRedemptionsRequest): QueryEstimatedRedemptionsRequestProtoMsg {
    return {
      typeUrl: "/injective.insurance.v1beta1.QueryEstimatedRedemptionsRequest",
      value: QueryEstimatedRedemptionsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryEstimatedRedemptionsResponse(): QueryEstimatedRedemptionsResponse {
  return {
    amount: []
  };
}
export const QueryEstimatedRedemptionsResponse = {
  typeUrl: "/injective.insurance.v1beta1.QueryEstimatedRedemptionsResponse",
  encode(message: QueryEstimatedRedemptionsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueryEstimatedRedemptionsResponseAmino): QueryEstimatedRedemptionsResponse {
    return {
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromAmino(e)) : []
    };
  },
  toAmino(message: QueryEstimatedRedemptionsResponse): QueryEstimatedRedemptionsResponseAmino {
    const obj: any = {};
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.amount = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryEstimatedRedemptionsResponseAminoMsg): QueryEstimatedRedemptionsResponse {
    return QueryEstimatedRedemptionsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryEstimatedRedemptionsResponseProtoMsg): QueryEstimatedRedemptionsResponse {
    return QueryEstimatedRedemptionsResponse.decode(message.value);
  },
  toProto(message: QueryEstimatedRedemptionsResponse): Uint8Array {
    return QueryEstimatedRedemptionsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryEstimatedRedemptionsResponse): QueryEstimatedRedemptionsResponseProtoMsg {
    return {
      typeUrl: "/injective.insurance.v1beta1.QueryEstimatedRedemptionsResponse",
      value: QueryEstimatedRedemptionsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryPendingRedemptionsRequest(): QueryPendingRedemptionsRequest {
  return {
    marketId: "",
    address: ""
  };
}
export const QueryPendingRedemptionsRequest = {
  typeUrl: "/injective.insurance.v1beta1.QueryPendingRedemptionsRequest",
  encode(message: QueryPendingRedemptionsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueryPendingRedemptionsRequestAmino): QueryPendingRedemptionsRequest {
    return {
      marketId: object.marketId,
      address: object.address
    };
  },
  toAmino(message: QueryPendingRedemptionsRequest): QueryPendingRedemptionsRequestAmino {
    const obj: any = {};
    obj.marketId = message.marketId;
    obj.address = message.address;
    return obj;
  },
  fromAminoMsg(object: QueryPendingRedemptionsRequestAminoMsg): QueryPendingRedemptionsRequest {
    return QueryPendingRedemptionsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPendingRedemptionsRequestProtoMsg): QueryPendingRedemptionsRequest {
    return QueryPendingRedemptionsRequest.decode(message.value);
  },
  toProto(message: QueryPendingRedemptionsRequest): Uint8Array {
    return QueryPendingRedemptionsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPendingRedemptionsRequest): QueryPendingRedemptionsRequestProtoMsg {
    return {
      typeUrl: "/injective.insurance.v1beta1.QueryPendingRedemptionsRequest",
      value: QueryPendingRedemptionsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryPendingRedemptionsResponse(): QueryPendingRedemptionsResponse {
  return {
    amount: []
  };
}
export const QueryPendingRedemptionsResponse = {
  typeUrl: "/injective.insurance.v1beta1.QueryPendingRedemptionsResponse",
  encode(message: QueryPendingRedemptionsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueryPendingRedemptionsResponseAmino): QueryPendingRedemptionsResponse {
    return {
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromAmino(e)) : []
    };
  },
  toAmino(message: QueryPendingRedemptionsResponse): QueryPendingRedemptionsResponseAmino {
    const obj: any = {};
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.amount = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryPendingRedemptionsResponseAminoMsg): QueryPendingRedemptionsResponse {
    return QueryPendingRedemptionsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPendingRedemptionsResponseProtoMsg): QueryPendingRedemptionsResponse {
    return QueryPendingRedemptionsResponse.decode(message.value);
  },
  toProto(message: QueryPendingRedemptionsResponse): Uint8Array {
    return QueryPendingRedemptionsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPendingRedemptionsResponse): QueryPendingRedemptionsResponseProtoMsg {
    return {
      typeUrl: "/injective.insurance.v1beta1.QueryPendingRedemptionsResponse",
      value: QueryPendingRedemptionsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryModuleStateRequest(): QueryModuleStateRequest {
  return {};
}
export const QueryModuleStateRequest = {
  typeUrl: "/injective.insurance.v1beta1.QueryModuleStateRequest",
  encode(_: QueryModuleStateRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryModuleStateRequest {
    return {};
  },
  fromPartial(_: Partial<QueryModuleStateRequest>): QueryModuleStateRequest {
    const message = createBaseQueryModuleStateRequest();
    return message;
  },
  fromAmino(_: QueryModuleStateRequestAmino): QueryModuleStateRequest {
    return {};
  },
  toAmino(_: QueryModuleStateRequest): QueryModuleStateRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryModuleStateRequestAminoMsg): QueryModuleStateRequest {
    return QueryModuleStateRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryModuleStateRequestProtoMsg): QueryModuleStateRequest {
    return QueryModuleStateRequest.decode(message.value);
  },
  toProto(message: QueryModuleStateRequest): Uint8Array {
    return QueryModuleStateRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryModuleStateRequest): QueryModuleStateRequestProtoMsg {
    return {
      typeUrl: "/injective.insurance.v1beta1.QueryModuleStateRequest",
      value: QueryModuleStateRequest.encode(message).finish()
    };
  }
};
function createBaseQueryModuleStateResponse(): QueryModuleStateResponse {
  return {
    state: GenesisState.fromPartial({})
  };
}
export const QueryModuleStateResponse = {
  typeUrl: "/injective.insurance.v1beta1.QueryModuleStateResponse",
  encode(message: QueryModuleStateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueryModuleStateResponseAmino): QueryModuleStateResponse {
    return {
      state: object?.state ? GenesisState.fromAmino(object.state) : undefined
    };
  },
  toAmino(message: QueryModuleStateResponse): QueryModuleStateResponseAmino {
    const obj: any = {};
    obj.state = message.state ? GenesisState.toAmino(message.state) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryModuleStateResponseAminoMsg): QueryModuleStateResponse {
    return QueryModuleStateResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryModuleStateResponseProtoMsg): QueryModuleStateResponse {
    return QueryModuleStateResponse.decode(message.value);
  },
  toProto(message: QueryModuleStateResponse): Uint8Array {
    return QueryModuleStateResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryModuleStateResponse): QueryModuleStateResponseProtoMsg {
    return {
      typeUrl: "/injective.insurance.v1beta1.QueryModuleStateResponse",
      value: QueryModuleStateResponse.encode(message).finish()
    };
  }
};