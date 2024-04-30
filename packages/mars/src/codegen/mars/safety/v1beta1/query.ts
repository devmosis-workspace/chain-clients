import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
/** QueBalancesRequest is the request type of the QuerBalancesRPC method */
export interface QueryBalancesRequest {}
export interface QueryBalancesRequestProtoMsg {
  typeUrl: "/mars.safety.v1beta1.QueryBalancesRequest";
  value: Uint8Array;
}
/** QueBalancesRequest is the request type of the QuerBalancesRPC method */
export interface QueryBalancesRequestAmino {}
export interface QueryBalancesRequestAminoMsg {
  type: "/mars.safety.v1beta1.QueryBalancesRequest";
  value: QueryBalancesRequestAmino;
}
/** QueBalancesRequest is the request type of the QuerBalancesRPC method */
export interface QueryBalancesRequestSDKType {}
/** QueBalancesResponse is the response type of the QuerBalancesRPC method */
export interface QueryBalancesResponse {
  /** Balances is the coins available in the safety fund */
  balances: Coin[];
}
export interface QueryBalancesResponseProtoMsg {
  typeUrl: "/mars.safety.v1beta1.QueryBalancesResponse";
  value: Uint8Array;
}
/** QueBalancesResponse is the response type of the QuerBalancesRPC method */
export interface QueryBalancesResponseAmino {
  /** Balances is the coins available in the safety fund */
  balances?: CoinAmino[];
}
export interface QueryBalancesResponseAminoMsg {
  type: "/mars.safety.v1beta1.QueryBalancesResponse";
  value: QueryBalancesResponseAmino;
}
/** QueBalancesResponse is the response type of the QuerBalancesRPC method */
export interface QueryBalancesResponseSDKType {
  balances: CoinSDKType[];
}
function createBaseQueryBalancesRequest(): QueryBalancesRequest {
  return {};
}
export const QueryBalancesRequest = {
  typeUrl: "/mars.safety.v1beta1.QueryBalancesRequest",
  encode(_: QueryBalancesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryBalancesRequest {
    return {};
  },
  fromPartial(_: Partial<QueryBalancesRequest>): QueryBalancesRequest {
    const message = createBaseQueryBalancesRequest();
    return message;
  },
  fromAmino(_: QueryBalancesRequestAmino): QueryBalancesRequest {
    const message = createBaseQueryBalancesRequest();
    return message;
  },
  toAmino(_: QueryBalancesRequest): QueryBalancesRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryBalancesRequestAminoMsg): QueryBalancesRequest {
    return QueryBalancesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBalancesRequestProtoMsg): QueryBalancesRequest {
    return QueryBalancesRequest.decode(message.value);
  },
  toProto(message: QueryBalancesRequest): Uint8Array {
    return QueryBalancesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryBalancesRequest): QueryBalancesRequestProtoMsg {
    return {
      typeUrl: "/mars.safety.v1beta1.QueryBalancesRequest",
      value: QueryBalancesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryBalancesResponse(): QueryBalancesResponse {
  return {
    balances: []
  };
}
export const QueryBalancesResponse = {
  typeUrl: "/mars.safety.v1beta1.QueryBalancesResponse",
  encode(message: QueryBalancesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.balances) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryBalancesResponse {
    return {
      balances: Array.isArray(object?.balances) ? object.balances.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryBalancesResponse>): QueryBalancesResponse {
    const message = createBaseQueryBalancesResponse();
    message.balances = object.balances?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryBalancesResponseAmino): QueryBalancesResponse {
    const message = createBaseQueryBalancesResponse();
    message.balances = object.balances?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryBalancesResponse): QueryBalancesResponseAmino {
    const obj: any = {};
    if (message.balances) {
      obj.balances = message.balances.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.balances = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryBalancesResponseAminoMsg): QueryBalancesResponse {
    return QueryBalancesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBalancesResponseProtoMsg): QueryBalancesResponse {
    return QueryBalancesResponse.decode(message.value);
  },
  toProto(message: QueryBalancesResponse): Uint8Array {
    return QueryBalancesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryBalancesResponse): QueryBalancesResponseProtoMsg {
    return {
      typeUrl: "/mars.safety.v1beta1.QueryBalancesResponse",
      value: QueryBalancesResponse.encode(message).finish()
    };
  }
};