import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Params, ParamsAmino, ParamsSDKType } from "./types";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/cyber.resources.v1beta1.QueryParamsRequest";
  value: Uint8Array;
}
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/cyber.resources.v1beta1.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
export interface QueryParamsRequestSDKType {}
export interface QueryParamsResponse {
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/cyber.resources.v1beta1.QueryParamsResponse";
  value: Uint8Array;
}
export interface QueryParamsResponseAmino {
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/cyber.resources.v1beta1.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
export interface QueryInvestmintRequest {
  amount: Coin;
  resource: string;
  length: bigint;
}
export interface QueryInvestmintRequestProtoMsg {
  typeUrl: "/cyber.resources.v1beta1.QueryInvestmintRequest";
  value: Uint8Array;
}
export interface QueryInvestmintRequestAmino {
  amount?: CoinAmino;
  resource?: string;
  length?: string;
}
export interface QueryInvestmintRequestAminoMsg {
  type: "/cyber.resources.v1beta1.QueryInvestmintRequest";
  value: QueryInvestmintRequestAmino;
}
export interface QueryInvestmintRequestSDKType {
  amount: CoinSDKType;
  resource: string;
  length: bigint;
}
export interface QueryInvestmintResponse {
  amount: Coin;
}
export interface QueryInvestmintResponseProtoMsg {
  typeUrl: "/cyber.resources.v1beta1.QueryInvestmintResponse";
  value: Uint8Array;
}
export interface QueryInvestmintResponseAmino {
  amount?: CoinAmino;
}
export interface QueryInvestmintResponseAminoMsg {
  type: "/cyber.resources.v1beta1.QueryInvestmintResponse";
  value: QueryInvestmintResponseAmino;
}
export interface QueryInvestmintResponseSDKType {
  amount: CoinSDKType;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/cyber.resources.v1beta1.QueryParamsRequest",
  encode(_: QueryParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryParamsRequest {
    return {};
  },
  fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  toAmino(_: QueryParamsRequest): QueryParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest {
    return QueryParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: "/cyber.resources.v1beta1.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryParamsResponse = {
  typeUrl: "/cyber.resources.v1beta1.QueryParamsResponse",
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
      typeUrl: "/cyber.resources.v1beta1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryInvestmintRequest(): QueryInvestmintRequest {
  return {
    amount: Coin.fromPartial({}),
    resource: "",
    length: BigInt(0)
  };
}
export const QueryInvestmintRequest = {
  typeUrl: "/cyber.resources.v1beta1.QueryInvestmintRequest",
  encode(message: QueryInvestmintRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(10).fork()).ldelim();
    }
    if (message.resource !== "") {
      writer.uint32(18).string(message.resource);
    }
    if (message.length !== BigInt(0)) {
      writer.uint32(24).uint64(message.length);
    }
    return writer;
  },
  fromJSON(object: any): QueryInvestmintRequest {
    return {
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
      resource: isSet(object.resource) ? String(object.resource) : "",
      length: isSet(object.length) ? BigInt(object.length.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<QueryInvestmintRequest>): QueryInvestmintRequest {
    const message = createBaseQueryInvestmintRequest();
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    message.resource = object.resource ?? "";
    message.length = object.length !== undefined && object.length !== null ? BigInt(object.length.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryInvestmintRequestAmino): QueryInvestmintRequest {
    const message = createBaseQueryInvestmintRequest();
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    if (object.resource !== undefined && object.resource !== null) {
      message.resource = object.resource;
    }
    if (object.length !== undefined && object.length !== null) {
      message.length = BigInt(object.length);
    }
    return message;
  },
  toAmino(message: QueryInvestmintRequest): QueryInvestmintRequestAmino {
    const obj: any = {};
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    obj.resource = message.resource === "" ? undefined : message.resource;
    obj.length = message.length !== BigInt(0) ? message.length.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryInvestmintRequestAminoMsg): QueryInvestmintRequest {
    return QueryInvestmintRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryInvestmintRequestProtoMsg): QueryInvestmintRequest {
    return QueryInvestmintRequest.decode(message.value);
  },
  toProto(message: QueryInvestmintRequest): Uint8Array {
    return QueryInvestmintRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryInvestmintRequest): QueryInvestmintRequestProtoMsg {
    return {
      typeUrl: "/cyber.resources.v1beta1.QueryInvestmintRequest",
      value: QueryInvestmintRequest.encode(message).finish()
    };
  }
};
function createBaseQueryInvestmintResponse(): QueryInvestmintResponse {
  return {
    amount: Coin.fromPartial({})
  };
}
export const QueryInvestmintResponse = {
  typeUrl: "/cyber.resources.v1beta1.QueryInvestmintResponse",
  encode(message: QueryInvestmintResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryInvestmintResponse {
    return {
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined
    };
  },
  fromPartial(object: Partial<QueryInvestmintResponse>): QueryInvestmintResponse {
    const message = createBaseQueryInvestmintResponse();
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  },
  fromAmino(object: QueryInvestmintResponseAmino): QueryInvestmintResponse {
    const message = createBaseQueryInvestmintResponse();
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    return message;
  },
  toAmino(message: QueryInvestmintResponse): QueryInvestmintResponseAmino {
    const obj: any = {};
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryInvestmintResponseAminoMsg): QueryInvestmintResponse {
    return QueryInvestmintResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryInvestmintResponseProtoMsg): QueryInvestmintResponse {
    return QueryInvestmintResponse.decode(message.value);
  },
  toProto(message: QueryInvestmintResponse): Uint8Array {
    return QueryInvestmintResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryInvestmintResponse): QueryInvestmintResponseProtoMsg {
    return {
      typeUrl: "/cyber.resources.v1beta1.QueryInvestmintResponse",
      value: QueryInvestmintResponse.encode(message).finish()
    };
  }
};