import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** QueryDelegatedBalanceRequest defines the request type for Query/DelegatedBalance method. */
export interface QueryDelegatedBalanceRequest {
  /** delegator is the address of the account to query */
  delegator: string;
}
export interface QueryDelegatedBalanceRequestProtoMsg {
  typeUrl: "/kava.liquid.v1beta1.QueryDelegatedBalanceRequest";
  value: Uint8Array;
}
/** QueryDelegatedBalanceRequest defines the request type for Query/DelegatedBalance method. */
export interface QueryDelegatedBalanceRequestAmino {
  /** delegator is the address of the account to query */
  delegator?: string;
}
export interface QueryDelegatedBalanceRequestAminoMsg {
  type: "/kava.liquid.v1beta1.QueryDelegatedBalanceRequest";
  value: QueryDelegatedBalanceRequestAmino;
}
/** QueryDelegatedBalanceRequest defines the request type for Query/DelegatedBalance method. */
export interface QueryDelegatedBalanceRequestSDKType {
  delegator: string;
}
/** DelegatedBalanceResponse defines the response type for the Query/DelegatedBalance method. */
export interface QueryDelegatedBalanceResponse {
  /** vested is the amount of all delegated coins that have vested (ie not locked) */
  vested: Coin;
  /** vesting is the amount of all delegated coins that are still vesting (ie locked) */
  vesting: Coin;
}
export interface QueryDelegatedBalanceResponseProtoMsg {
  typeUrl: "/kava.liquid.v1beta1.QueryDelegatedBalanceResponse";
  value: Uint8Array;
}
/** DelegatedBalanceResponse defines the response type for the Query/DelegatedBalance method. */
export interface QueryDelegatedBalanceResponseAmino {
  /** vested is the amount of all delegated coins that have vested (ie not locked) */
  vested?: CoinAmino;
  /** vesting is the amount of all delegated coins that are still vesting (ie locked) */
  vesting?: CoinAmino;
}
export interface QueryDelegatedBalanceResponseAminoMsg {
  type: "/kava.liquid.v1beta1.QueryDelegatedBalanceResponse";
  value: QueryDelegatedBalanceResponseAmino;
}
/** DelegatedBalanceResponse defines the response type for the Query/DelegatedBalance method. */
export interface QueryDelegatedBalanceResponseSDKType {
  vested: CoinSDKType;
  vesting: CoinSDKType;
}
/** QueryTotalSupplyRequest defines the request type for Query/TotalSupply method. */
export interface QueryTotalSupplyRequest {}
export interface QueryTotalSupplyRequestProtoMsg {
  typeUrl: "/kava.liquid.v1beta1.QueryTotalSupplyRequest";
  value: Uint8Array;
}
/** QueryTotalSupplyRequest defines the request type for Query/TotalSupply method. */
export interface QueryTotalSupplyRequestAmino {}
export interface QueryTotalSupplyRequestAminoMsg {
  type: "/kava.liquid.v1beta1.QueryTotalSupplyRequest";
  value: QueryTotalSupplyRequestAmino;
}
/** QueryTotalSupplyRequest defines the request type for Query/TotalSupply method. */
export interface QueryTotalSupplyRequestSDKType {}
/** TotalSupplyResponse defines the response type for the Query/TotalSupply method. */
export interface QueryTotalSupplyResponse {
  /** Height is the block height at which these totals apply */
  height: bigint;
  /** Result is a list of coins supplied to liquid */
  result: Coin[];
}
export interface QueryTotalSupplyResponseProtoMsg {
  typeUrl: "/kava.liquid.v1beta1.QueryTotalSupplyResponse";
  value: Uint8Array;
}
/** TotalSupplyResponse defines the response type for the Query/TotalSupply method. */
export interface QueryTotalSupplyResponseAmino {
  /** Height is the block height at which these totals apply */
  height?: string;
  /** Result is a list of coins supplied to liquid */
  result?: CoinAmino[];
}
export interface QueryTotalSupplyResponseAminoMsg {
  type: "/kava.liquid.v1beta1.QueryTotalSupplyResponse";
  value: QueryTotalSupplyResponseAmino;
}
/** TotalSupplyResponse defines the response type for the Query/TotalSupply method. */
export interface QueryTotalSupplyResponseSDKType {
  height: bigint;
  result: CoinSDKType[];
}
function createBaseQueryDelegatedBalanceRequest(): QueryDelegatedBalanceRequest {
  return {
    delegator: ""
  };
}
export const QueryDelegatedBalanceRequest = {
  typeUrl: "/kava.liquid.v1beta1.QueryDelegatedBalanceRequest",
  encode(message: QueryDelegatedBalanceRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegator !== "") {
      writer.uint32(10).string(message.delegator);
    }
    return writer;
  },
  fromJSON(object: any): QueryDelegatedBalanceRequest {
    return {
      delegator: isSet(object.delegator) ? String(object.delegator) : ""
    };
  },
  fromPartial(object: Partial<QueryDelegatedBalanceRequest>): QueryDelegatedBalanceRequest {
    const message = createBaseQueryDelegatedBalanceRequest();
    message.delegator = object.delegator ?? "";
    return message;
  },
  fromAmino(object: QueryDelegatedBalanceRequestAmino): QueryDelegatedBalanceRequest {
    const message = createBaseQueryDelegatedBalanceRequest();
    if (object.delegator !== undefined && object.delegator !== null) {
      message.delegator = object.delegator;
    }
    return message;
  },
  toAmino(message: QueryDelegatedBalanceRequest): QueryDelegatedBalanceRequestAmino {
    const obj: any = {};
    obj.delegator = message.delegator;
    return obj;
  },
  fromAminoMsg(object: QueryDelegatedBalanceRequestAminoMsg): QueryDelegatedBalanceRequest {
    return QueryDelegatedBalanceRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDelegatedBalanceRequestProtoMsg): QueryDelegatedBalanceRequest {
    return QueryDelegatedBalanceRequest.decode(message.value);
  },
  toProto(message: QueryDelegatedBalanceRequest): Uint8Array {
    return QueryDelegatedBalanceRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDelegatedBalanceRequest): QueryDelegatedBalanceRequestProtoMsg {
    return {
      typeUrl: "/kava.liquid.v1beta1.QueryDelegatedBalanceRequest",
      value: QueryDelegatedBalanceRequest.encode(message).finish()
    };
  }
};
function createBaseQueryDelegatedBalanceResponse(): QueryDelegatedBalanceResponse {
  return {
    vested: Coin.fromPartial({}),
    vesting: Coin.fromPartial({})
  };
}
export const QueryDelegatedBalanceResponse = {
  typeUrl: "/kava.liquid.v1beta1.QueryDelegatedBalanceResponse",
  encode(message: QueryDelegatedBalanceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.vested !== undefined) {
      Coin.encode(message.vested, writer.uint32(10).fork()).ldelim();
    }
    if (message.vesting !== undefined) {
      Coin.encode(message.vesting, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryDelegatedBalanceResponse {
    return {
      vested: isSet(object.vested) ? Coin.fromJSON(object.vested) : undefined,
      vesting: isSet(object.vesting) ? Coin.fromJSON(object.vesting) : undefined
    };
  },
  fromPartial(object: Partial<QueryDelegatedBalanceResponse>): QueryDelegatedBalanceResponse {
    const message = createBaseQueryDelegatedBalanceResponse();
    message.vested = object.vested !== undefined && object.vested !== null ? Coin.fromPartial(object.vested) : undefined;
    message.vesting = object.vesting !== undefined && object.vesting !== null ? Coin.fromPartial(object.vesting) : undefined;
    return message;
  },
  fromAmino(object: QueryDelegatedBalanceResponseAmino): QueryDelegatedBalanceResponse {
    const message = createBaseQueryDelegatedBalanceResponse();
    if (object.vested !== undefined && object.vested !== null) {
      message.vested = Coin.fromAmino(object.vested);
    }
    if (object.vesting !== undefined && object.vesting !== null) {
      message.vesting = Coin.fromAmino(object.vesting);
    }
    return message;
  },
  toAmino(message: QueryDelegatedBalanceResponse): QueryDelegatedBalanceResponseAmino {
    const obj: any = {};
    obj.vested = message.vested ? Coin.toAmino(message.vested) : undefined;
    obj.vesting = message.vesting ? Coin.toAmino(message.vesting) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDelegatedBalanceResponseAminoMsg): QueryDelegatedBalanceResponse {
    return QueryDelegatedBalanceResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDelegatedBalanceResponseProtoMsg): QueryDelegatedBalanceResponse {
    return QueryDelegatedBalanceResponse.decode(message.value);
  },
  toProto(message: QueryDelegatedBalanceResponse): Uint8Array {
    return QueryDelegatedBalanceResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDelegatedBalanceResponse): QueryDelegatedBalanceResponseProtoMsg {
    return {
      typeUrl: "/kava.liquid.v1beta1.QueryDelegatedBalanceResponse",
      value: QueryDelegatedBalanceResponse.encode(message).finish()
    };
  }
};
function createBaseQueryTotalSupplyRequest(): QueryTotalSupplyRequest {
  return {};
}
export const QueryTotalSupplyRequest = {
  typeUrl: "/kava.liquid.v1beta1.QueryTotalSupplyRequest",
  encode(_: QueryTotalSupplyRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryTotalSupplyRequest {
    return {};
  },
  fromPartial(_: Partial<QueryTotalSupplyRequest>): QueryTotalSupplyRequest {
    const message = createBaseQueryTotalSupplyRequest();
    return message;
  },
  fromAmino(_: QueryTotalSupplyRequestAmino): QueryTotalSupplyRequest {
    const message = createBaseQueryTotalSupplyRequest();
    return message;
  },
  toAmino(_: QueryTotalSupplyRequest): QueryTotalSupplyRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryTotalSupplyRequestAminoMsg): QueryTotalSupplyRequest {
    return QueryTotalSupplyRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTotalSupplyRequestProtoMsg): QueryTotalSupplyRequest {
    return QueryTotalSupplyRequest.decode(message.value);
  },
  toProto(message: QueryTotalSupplyRequest): Uint8Array {
    return QueryTotalSupplyRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTotalSupplyRequest): QueryTotalSupplyRequestProtoMsg {
    return {
      typeUrl: "/kava.liquid.v1beta1.QueryTotalSupplyRequest",
      value: QueryTotalSupplyRequest.encode(message).finish()
    };
  }
};
function createBaseQueryTotalSupplyResponse(): QueryTotalSupplyResponse {
  return {
    height: BigInt(0),
    result: []
  };
}
export const QueryTotalSupplyResponse = {
  typeUrl: "/kava.liquid.v1beta1.QueryTotalSupplyResponse",
  encode(message: QueryTotalSupplyResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.height !== BigInt(0)) {
      writer.uint32(8).int64(message.height);
    }
    for (const v of message.result) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryTotalSupplyResponse {
    return {
      height: isSet(object.height) ? BigInt(object.height.toString()) : BigInt(0),
      result: Array.isArray(object?.result) ? object.result.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryTotalSupplyResponse>): QueryTotalSupplyResponse {
    const message = createBaseQueryTotalSupplyResponse();
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    message.result = object.result?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryTotalSupplyResponseAmino): QueryTotalSupplyResponse {
    const message = createBaseQueryTotalSupplyResponse();
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height);
    }
    message.result = object.result?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryTotalSupplyResponse): QueryTotalSupplyResponseAmino {
    const obj: any = {};
    obj.height = message.height ? message.height.toString() : undefined;
    if (message.result) {
      obj.result = message.result.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.result = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryTotalSupplyResponseAminoMsg): QueryTotalSupplyResponse {
    return QueryTotalSupplyResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTotalSupplyResponseProtoMsg): QueryTotalSupplyResponse {
    return QueryTotalSupplyResponse.decode(message.value);
  },
  toProto(message: QueryTotalSupplyResponse): Uint8Array {
    return QueryTotalSupplyResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTotalSupplyResponse): QueryTotalSupplyResponseProtoMsg {
    return {
      typeUrl: "/kava.liquid.v1beta1.QueryTotalSupplyResponse",
      value: QueryTotalSupplyResponse.encode(message).finish()
    };
  }
};