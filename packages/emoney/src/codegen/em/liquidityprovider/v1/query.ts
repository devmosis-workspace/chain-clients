import { LiquidityProviderAccount, LiquidityProviderAccountAmino, LiquidityProviderAccountSDKType } from "./liquidityprovider";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
export interface QueryListRequest {}
export interface QueryListRequestProtoMsg {
  typeUrl: "/em.liquidityprovider.v1.QueryListRequest";
  value: Uint8Array;
}
export interface QueryListRequestAmino {}
export interface QueryListRequestAminoMsg {
  type: "/em.liquidityprovider.v1.QueryListRequest";
  value: QueryListRequestAmino;
}
export interface QueryListRequestSDKType {}
export interface QueryListResponse {
  liquidityProviders: LiquidityProviderAccount[];
}
export interface QueryListResponseProtoMsg {
  typeUrl: "/em.liquidityprovider.v1.QueryListResponse";
  value: Uint8Array;
}
export interface QueryListResponseAmino {
  liquidity_providers: LiquidityProviderAccountAmino[];
}
export interface QueryListResponseAminoMsg {
  type: "/em.liquidityprovider.v1.QueryListResponse";
  value: QueryListResponseAmino;
}
export interface QueryListResponseSDKType {
  liquidity_providers: LiquidityProviderAccountSDKType[];
}
export interface QueryMintableRequest {
  /** address defines the liquidity provider address to query mintable. */
  address: string;
}
export interface QueryMintableRequestProtoMsg {
  typeUrl: "/em.liquidityprovider.v1.QueryMintableRequest";
  value: Uint8Array;
}
export interface QueryMintableRequestAmino {
  /** address defines the liquidity provider address to query mintable. */
  address: string;
}
export interface QueryMintableRequestAminoMsg {
  type: "/em.liquidityprovider.v1.QueryMintableRequest";
  value: QueryMintableRequestAmino;
}
export interface QueryMintableRequestSDKType {
  address: string;
}
export interface QueryMintableResponse {
  mintable: Coin[];
}
export interface QueryMintableResponseProtoMsg {
  typeUrl: "/em.liquidityprovider.v1.QueryMintableResponse";
  value: Uint8Array;
}
export interface QueryMintableResponseAmino {
  mintable: CoinAmino[];
}
export interface QueryMintableResponseAminoMsg {
  type: "/em.liquidityprovider.v1.QueryMintableResponse";
  value: QueryMintableResponseAmino;
}
export interface QueryMintableResponseSDKType {
  mintable: CoinSDKType[];
}
function createBaseQueryListRequest(): QueryListRequest {
  return {};
}
export const QueryListRequest = {
  typeUrl: "/em.liquidityprovider.v1.QueryListRequest",
  encode(_: QueryListRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryListRequest {
    return {};
  },
  fromPartial(_: Partial<QueryListRequest>): QueryListRequest {
    const message = createBaseQueryListRequest();
    return message;
  },
  fromAmino(_: QueryListRequestAmino): QueryListRequest {
    return {};
  },
  toAmino(_: QueryListRequest): QueryListRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryListRequestAminoMsg): QueryListRequest {
    return QueryListRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryListRequestProtoMsg): QueryListRequest {
    return QueryListRequest.decode(message.value);
  },
  toProto(message: QueryListRequest): Uint8Array {
    return QueryListRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryListRequest): QueryListRequestProtoMsg {
    return {
      typeUrl: "/em.liquidityprovider.v1.QueryListRequest",
      value: QueryListRequest.encode(message).finish()
    };
  }
};
function createBaseQueryListResponse(): QueryListResponse {
  return {
    liquidityProviders: []
  };
}
export const QueryListResponse = {
  typeUrl: "/em.liquidityprovider.v1.QueryListResponse",
  encode(message: QueryListResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.liquidityProviders) {
      LiquidityProviderAccount.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryListResponse {
    return {
      liquidityProviders: Array.isArray(object?.liquidityProviders) ? object.liquidityProviders.map((e: any) => LiquidityProviderAccount.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryListResponse>): QueryListResponse {
    const message = createBaseQueryListResponse();
    message.liquidityProviders = object.liquidityProviders?.map(e => LiquidityProviderAccount.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryListResponseAmino): QueryListResponse {
    return {
      liquidityProviders: Array.isArray(object?.liquidity_providers) ? object.liquidity_providers.map((e: any) => LiquidityProviderAccount.fromAmino(e)) : []
    };
  },
  toAmino(message: QueryListResponse): QueryListResponseAmino {
    const obj: any = {};
    if (message.liquidityProviders) {
      obj.liquidity_providers = message.liquidityProviders.map(e => e ? LiquidityProviderAccount.toAmino(e) : undefined);
    } else {
      obj.liquidity_providers = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryListResponseAminoMsg): QueryListResponse {
    return QueryListResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryListResponseProtoMsg): QueryListResponse {
    return QueryListResponse.decode(message.value);
  },
  toProto(message: QueryListResponse): Uint8Array {
    return QueryListResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryListResponse): QueryListResponseProtoMsg {
    return {
      typeUrl: "/em.liquidityprovider.v1.QueryListResponse",
      value: QueryListResponse.encode(message).finish()
    };
  }
};
function createBaseQueryMintableRequest(): QueryMintableRequest {
  return {
    address: ""
  };
}
export const QueryMintableRequest = {
  typeUrl: "/em.liquidityprovider.v1.QueryMintableRequest",
  encode(message: QueryMintableRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  fromJSON(object: any): QueryMintableRequest {
    return {
      address: isSet(object.address) ? String(object.address) : ""
    };
  },
  fromPartial(object: Partial<QueryMintableRequest>): QueryMintableRequest {
    const message = createBaseQueryMintableRequest();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: QueryMintableRequestAmino): QueryMintableRequest {
    return {
      address: object.address
    };
  },
  toAmino(message: QueryMintableRequest): QueryMintableRequestAmino {
    const obj: any = {};
    obj.address = message.address;
    return obj;
  },
  fromAminoMsg(object: QueryMintableRequestAminoMsg): QueryMintableRequest {
    return QueryMintableRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMintableRequestProtoMsg): QueryMintableRequest {
    return QueryMintableRequest.decode(message.value);
  },
  toProto(message: QueryMintableRequest): Uint8Array {
    return QueryMintableRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryMintableRequest): QueryMintableRequestProtoMsg {
    return {
      typeUrl: "/em.liquidityprovider.v1.QueryMintableRequest",
      value: QueryMintableRequest.encode(message).finish()
    };
  }
};
function createBaseQueryMintableResponse(): QueryMintableResponse {
  return {
    mintable: []
  };
}
export const QueryMintableResponse = {
  typeUrl: "/em.liquidityprovider.v1.QueryMintableResponse",
  encode(message: QueryMintableResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.mintable) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryMintableResponse {
    return {
      mintable: Array.isArray(object?.mintable) ? object.mintable.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryMintableResponse>): QueryMintableResponse {
    const message = createBaseQueryMintableResponse();
    message.mintable = object.mintable?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryMintableResponseAmino): QueryMintableResponse {
    return {
      mintable: Array.isArray(object?.mintable) ? object.mintable.map((e: any) => Coin.fromAmino(e)) : []
    };
  },
  toAmino(message: QueryMintableResponse): QueryMintableResponseAmino {
    const obj: any = {};
    if (message.mintable) {
      obj.mintable = message.mintable.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.mintable = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryMintableResponseAminoMsg): QueryMintableResponse {
    return QueryMintableResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMintableResponseProtoMsg): QueryMintableResponse {
    return QueryMintableResponse.decode(message.value);
  },
  toProto(message: QueryMintableResponse): Uint8Array {
    return QueryMintableResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryMintableResponse): QueryMintableResponseProtoMsg {
    return {
      typeUrl: "/em.liquidityprovider.v1.QueryMintableResponse",
      value: QueryMintableResponse.encode(message).finish()
    };
  }
};