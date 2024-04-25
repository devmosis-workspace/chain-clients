import { DecCoin, DecCoinAmino, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
/**
 * QueryMinimumGasPricesRequest is the request type for the
 * Query/MinimumGasPrices RPC method.
 */
export interface QueryMinimumGasPricesRequest {}
export interface QueryMinimumGasPricesRequestProtoMsg {
  typeUrl: "/gaia.globalfee.v1beta1.QueryMinimumGasPricesRequest";
  value: Uint8Array;
}
/**
 * QueryMinimumGasPricesRequest is the request type for the
 * Query/MinimumGasPrices RPC method.
 */
export interface QueryMinimumGasPricesRequestAmino {}
export interface QueryMinimumGasPricesRequestAminoMsg {
  type: "/gaia.globalfee.v1beta1.QueryMinimumGasPricesRequest";
  value: QueryMinimumGasPricesRequestAmino;
}
/**
 * QueryMinimumGasPricesRequest is the request type for the
 * Query/MinimumGasPrices RPC method.
 */
export interface QueryMinimumGasPricesRequestSDKType {}
/**
 * QueryMinimumGasPricesResponse is the response type for the
 * Query/MinimumGasPrices RPC method.
 */
export interface QueryMinimumGasPricesResponse {
  minimumGasPrices: DecCoin[];
}
export interface QueryMinimumGasPricesResponseProtoMsg {
  typeUrl: "/gaia.globalfee.v1beta1.QueryMinimumGasPricesResponse";
  value: Uint8Array;
}
/**
 * QueryMinimumGasPricesResponse is the response type for the
 * Query/MinimumGasPrices RPC method.
 */
export interface QueryMinimumGasPricesResponseAmino {
  minimum_gas_prices?: DecCoinAmino[];
}
export interface QueryMinimumGasPricesResponseAminoMsg {
  type: "/gaia.globalfee.v1beta1.QueryMinimumGasPricesResponse";
  value: QueryMinimumGasPricesResponseAmino;
}
/**
 * QueryMinimumGasPricesResponse is the response type for the
 * Query/MinimumGasPrices RPC method.
 */
export interface QueryMinimumGasPricesResponseSDKType {
  minimum_gas_prices: DecCoinSDKType[];
}
function createBaseQueryMinimumGasPricesRequest(): QueryMinimumGasPricesRequest {
  return {};
}
export const QueryMinimumGasPricesRequest = {
  typeUrl: "/gaia.globalfee.v1beta1.QueryMinimumGasPricesRequest",
  encode(_: QueryMinimumGasPricesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryMinimumGasPricesRequest {
    return {};
  },
  fromPartial(_: Partial<QueryMinimumGasPricesRequest>): QueryMinimumGasPricesRequest {
    const message = createBaseQueryMinimumGasPricesRequest();
    return message;
  },
  fromAmino(_: QueryMinimumGasPricesRequestAmino): QueryMinimumGasPricesRequest {
    const message = createBaseQueryMinimumGasPricesRequest();
    return message;
  },
  toAmino(_: QueryMinimumGasPricesRequest): QueryMinimumGasPricesRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryMinimumGasPricesRequestAminoMsg): QueryMinimumGasPricesRequest {
    return QueryMinimumGasPricesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMinimumGasPricesRequestProtoMsg): QueryMinimumGasPricesRequest {
    return QueryMinimumGasPricesRequest.decode(message.value);
  },
  toProto(message: QueryMinimumGasPricesRequest): Uint8Array {
    return QueryMinimumGasPricesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryMinimumGasPricesRequest): QueryMinimumGasPricesRequestProtoMsg {
    return {
      typeUrl: "/gaia.globalfee.v1beta1.QueryMinimumGasPricesRequest",
      value: QueryMinimumGasPricesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryMinimumGasPricesResponse(): QueryMinimumGasPricesResponse {
  return {
    minimumGasPrices: []
  };
}
export const QueryMinimumGasPricesResponse = {
  typeUrl: "/gaia.globalfee.v1beta1.QueryMinimumGasPricesResponse",
  encode(message: QueryMinimumGasPricesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.minimumGasPrices) {
      DecCoin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryMinimumGasPricesResponse {
    return {
      minimumGasPrices: Array.isArray(object?.minimumGasPrices) ? object.minimumGasPrices.map((e: any) => DecCoin.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryMinimumGasPricesResponse>): QueryMinimumGasPricesResponse {
    const message = createBaseQueryMinimumGasPricesResponse();
    message.minimumGasPrices = object.minimumGasPrices?.map(e => DecCoin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryMinimumGasPricesResponseAmino): QueryMinimumGasPricesResponse {
    const message = createBaseQueryMinimumGasPricesResponse();
    message.minimumGasPrices = object.minimum_gas_prices?.map(e => DecCoin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryMinimumGasPricesResponse): QueryMinimumGasPricesResponseAmino {
    const obj: any = {};
    if (message.minimumGasPrices) {
      obj.minimum_gas_prices = message.minimumGasPrices.map(e => e ? DecCoin.toAmino(e) : undefined);
    } else {
      obj.minimum_gas_prices = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryMinimumGasPricesResponseAminoMsg): QueryMinimumGasPricesResponse {
    return QueryMinimumGasPricesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMinimumGasPricesResponseProtoMsg): QueryMinimumGasPricesResponse {
    return QueryMinimumGasPricesResponse.decode(message.value);
  },
  toProto(message: QueryMinimumGasPricesResponse): Uint8Array {
    return QueryMinimumGasPricesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryMinimumGasPricesResponse): QueryMinimumGasPricesResponseProtoMsg {
    return {
      typeUrl: "/gaia.globalfee.v1beta1.QueryMinimumGasPricesResponse",
      value: QueryMinimumGasPricesResponse.encode(message).finish()
    };
  }
};