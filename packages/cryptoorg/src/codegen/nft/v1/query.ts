import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { Owner, OwnerAmino, OwnerSDKType, Collection, CollectionAmino, CollectionSDKType, Denom, DenomAmino, DenomSDKType, BaseNFT, BaseNFTAmino, BaseNFTSDKType } from "./nft";
import { BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
/** QuerySupplyRequest is the request type for the Query/HTLC RPC method */
export interface QuerySupplyRequest {
  denomId: string;
  owner: string;
}
export interface QuerySupplyRequestProtoMsg {
  typeUrl: "/chainmain.nft.v1.QuerySupplyRequest";
  value: Uint8Array;
}
/** QuerySupplyRequest is the request type for the Query/HTLC RPC method */
export interface QuerySupplyRequestAmino {
  denom_id: string;
  owner: string;
}
export interface QuerySupplyRequestAminoMsg {
  type: "/chainmain.nft.v1.QuerySupplyRequest";
  value: QuerySupplyRequestAmino;
}
/** QuerySupplyRequest is the request type for the Query/HTLC RPC method */
export interface QuerySupplyRequestSDKType {
  denom_id: string;
  owner: string;
}
/** QuerySupplyResponse is the response type for the Query/Supply RPC method */
export interface QuerySupplyResponse {
  amount: bigint;
}
export interface QuerySupplyResponseProtoMsg {
  typeUrl: "/chainmain.nft.v1.QuerySupplyResponse";
  value: Uint8Array;
}
/** QuerySupplyResponse is the response type for the Query/Supply RPC method */
export interface QuerySupplyResponseAmino {
  amount: string;
}
export interface QuerySupplyResponseAminoMsg {
  type: "/chainmain.nft.v1.QuerySupplyResponse";
  value: QuerySupplyResponseAmino;
}
/** QuerySupplyResponse is the response type for the Query/Supply RPC method */
export interface QuerySupplyResponseSDKType {
  amount: bigint;
}
/** QueryOwnerRequest is the request type for the Query/Owner RPC method */
export interface QueryOwnerRequest {
  denomId: string;
  owner: string;
  /** pagination defines an optional pagination for the request. */
  pagination: PageRequest;
}
export interface QueryOwnerRequestProtoMsg {
  typeUrl: "/chainmain.nft.v1.QueryOwnerRequest";
  value: Uint8Array;
}
/** QueryOwnerRequest is the request type for the Query/Owner RPC method */
export interface QueryOwnerRequestAmino {
  denom_id: string;
  owner: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryOwnerRequestAminoMsg {
  type: "/chainmain.nft.v1.QueryOwnerRequest";
  value: QueryOwnerRequestAmino;
}
/** QueryOwnerRequest is the request type for the Query/Owner RPC method */
export interface QueryOwnerRequestSDKType {
  denom_id: string;
  owner: string;
  pagination: PageRequestSDKType;
}
/** QueryOwnerResponse is the response type for the Query/Owner RPC method */
export interface QueryOwnerResponse {
  owner: Owner;
  pagination: PageResponse;
}
export interface QueryOwnerResponseProtoMsg {
  typeUrl: "/chainmain.nft.v1.QueryOwnerResponse";
  value: Uint8Array;
}
/** QueryOwnerResponse is the response type for the Query/Owner RPC method */
export interface QueryOwnerResponseAmino {
  owner?: OwnerAmino;
  pagination?: PageResponseAmino;
}
export interface QueryOwnerResponseAminoMsg {
  type: "/chainmain.nft.v1.QueryOwnerResponse";
  value: QueryOwnerResponseAmino;
}
/** QueryOwnerResponse is the response type for the Query/Owner RPC method */
export interface QueryOwnerResponseSDKType {
  owner: OwnerSDKType;
  pagination: PageResponseSDKType;
}
/** QueryCollectionRequest is the request type for the Query/Collection RPC method */
export interface QueryCollectionRequest {
  denomId: string;
  /** pagination defines an optional pagination for the request. */
  pagination: PageRequest;
}
export interface QueryCollectionRequestProtoMsg {
  typeUrl: "/chainmain.nft.v1.QueryCollectionRequest";
  value: Uint8Array;
}
/** QueryCollectionRequest is the request type for the Query/Collection RPC method */
export interface QueryCollectionRequestAmino {
  denom_id: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryCollectionRequestAminoMsg {
  type: "/chainmain.nft.v1.QueryCollectionRequest";
  value: QueryCollectionRequestAmino;
}
/** QueryCollectionRequest is the request type for the Query/Collection RPC method */
export interface QueryCollectionRequestSDKType {
  denom_id: string;
  pagination: PageRequestSDKType;
}
/** QueryCollectionResponse is the response type for the Query/Collection RPC method */
export interface QueryCollectionResponse {
  collection: Collection;
  pagination: PageResponse;
}
export interface QueryCollectionResponseProtoMsg {
  typeUrl: "/chainmain.nft.v1.QueryCollectionResponse";
  value: Uint8Array;
}
/** QueryCollectionResponse is the response type for the Query/Collection RPC method */
export interface QueryCollectionResponseAmino {
  collection?: CollectionAmino;
  pagination?: PageResponseAmino;
}
export interface QueryCollectionResponseAminoMsg {
  type: "/chainmain.nft.v1.QueryCollectionResponse";
  value: QueryCollectionResponseAmino;
}
/** QueryCollectionResponse is the response type for the Query/Collection RPC method */
export interface QueryCollectionResponseSDKType {
  collection: CollectionSDKType;
  pagination: PageResponseSDKType;
}
/** QueryDenomRequest is the request type for the Query/Denom RPC method */
export interface QueryDenomRequest {
  denomId: string;
}
export interface QueryDenomRequestProtoMsg {
  typeUrl: "/chainmain.nft.v1.QueryDenomRequest";
  value: Uint8Array;
}
/** QueryDenomRequest is the request type for the Query/Denom RPC method */
export interface QueryDenomRequestAmino {
  denom_id: string;
}
export interface QueryDenomRequestAminoMsg {
  type: "/chainmain.nft.v1.QueryDenomRequest";
  value: QueryDenomRequestAmino;
}
/** QueryDenomRequest is the request type for the Query/Denom RPC method */
export interface QueryDenomRequestSDKType {
  denom_id: string;
}
/** QueryDenomResponse is the response type for the Query/Denom RPC method */
export interface QueryDenomResponse {
  denom: Denom;
}
export interface QueryDenomResponseProtoMsg {
  typeUrl: "/chainmain.nft.v1.QueryDenomResponse";
  value: Uint8Array;
}
/** QueryDenomResponse is the response type for the Query/Denom RPC method */
export interface QueryDenomResponseAmino {
  denom?: DenomAmino;
}
export interface QueryDenomResponseAminoMsg {
  type: "/chainmain.nft.v1.QueryDenomResponse";
  value: QueryDenomResponseAmino;
}
/** QueryDenomResponse is the response type for the Query/Denom RPC method */
export interface QueryDenomResponseSDKType {
  denom: DenomSDKType;
}
/** QueryDenomByNameRequest is the request type for the Query/DenomByName RPC method */
export interface QueryDenomByNameRequest {
  denomName: string;
}
export interface QueryDenomByNameRequestProtoMsg {
  typeUrl: "/chainmain.nft.v1.QueryDenomByNameRequest";
  value: Uint8Array;
}
/** QueryDenomByNameRequest is the request type for the Query/DenomByName RPC method */
export interface QueryDenomByNameRequestAmino {
  denom_name: string;
}
export interface QueryDenomByNameRequestAminoMsg {
  type: "/chainmain.nft.v1.QueryDenomByNameRequest";
  value: QueryDenomByNameRequestAmino;
}
/** QueryDenomByNameRequest is the request type for the Query/DenomByName RPC method */
export interface QueryDenomByNameRequestSDKType {
  denom_name: string;
}
/** QueryDenomByNameResponse is the response type for the Query/DenomByName RPC method */
export interface QueryDenomByNameResponse {
  denom: Denom;
}
export interface QueryDenomByNameResponseProtoMsg {
  typeUrl: "/chainmain.nft.v1.QueryDenomByNameResponse";
  value: Uint8Array;
}
/** QueryDenomByNameResponse is the response type for the Query/DenomByName RPC method */
export interface QueryDenomByNameResponseAmino {
  denom?: DenomAmino;
}
export interface QueryDenomByNameResponseAminoMsg {
  type: "/chainmain.nft.v1.QueryDenomByNameResponse";
  value: QueryDenomByNameResponseAmino;
}
/** QueryDenomByNameResponse is the response type for the Query/DenomByName RPC method */
export interface QueryDenomByNameResponseSDKType {
  denom: DenomSDKType;
}
/** QueryDenomsRequest is the request type for the Query/Denoms RPC method */
export interface QueryDenomsRequest {
  /** pagination defines an optional pagination for the request. */
  pagination: PageRequest;
}
export interface QueryDenomsRequestProtoMsg {
  typeUrl: "/chainmain.nft.v1.QueryDenomsRequest";
  value: Uint8Array;
}
/** QueryDenomsRequest is the request type for the Query/Denoms RPC method */
export interface QueryDenomsRequestAmino {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryDenomsRequestAminoMsg {
  type: "/chainmain.nft.v1.QueryDenomsRequest";
  value: QueryDenomsRequestAmino;
}
/** QueryDenomsRequest is the request type for the Query/Denoms RPC method */
export interface QueryDenomsRequestSDKType {
  pagination: PageRequestSDKType;
}
/** QueryDenomsResponse is the response type for the Query/Denoms RPC method */
export interface QueryDenomsResponse {
  denoms: Denom[];
  pagination: PageResponse;
}
export interface QueryDenomsResponseProtoMsg {
  typeUrl: "/chainmain.nft.v1.QueryDenomsResponse";
  value: Uint8Array;
}
/** QueryDenomsResponse is the response type for the Query/Denoms RPC method */
export interface QueryDenomsResponseAmino {
  denoms: DenomAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryDenomsResponseAminoMsg {
  type: "/chainmain.nft.v1.QueryDenomsResponse";
  value: QueryDenomsResponseAmino;
}
/** QueryDenomsResponse is the response type for the Query/Denoms RPC method */
export interface QueryDenomsResponseSDKType {
  denoms: DenomSDKType[];
  pagination: PageResponseSDKType;
}
/** QueryNFTRequest is the request type for the Query/NFT RPC method */
export interface QueryNFTRequest {
  denomId: string;
  tokenId: string;
}
export interface QueryNFTRequestProtoMsg {
  typeUrl: "/chainmain.nft.v1.QueryNFTRequest";
  value: Uint8Array;
}
/** QueryNFTRequest is the request type for the Query/NFT RPC method */
export interface QueryNFTRequestAmino {
  denom_id: string;
  token_id: string;
}
export interface QueryNFTRequestAminoMsg {
  type: "/chainmain.nft.v1.QueryNFTRequest";
  value: QueryNFTRequestAmino;
}
/** QueryNFTRequest is the request type for the Query/NFT RPC method */
export interface QueryNFTRequestSDKType {
  denom_id: string;
  token_id: string;
}
/** QueryNFTResponse is the response type for the Query/NFT RPC method */
export interface QueryNFTResponse {
  nft: BaseNFT;
}
export interface QueryNFTResponseProtoMsg {
  typeUrl: "/chainmain.nft.v1.QueryNFTResponse";
  value: Uint8Array;
}
/** QueryNFTResponse is the response type for the Query/NFT RPC method */
export interface QueryNFTResponseAmino {
  nft?: BaseNFTAmino;
}
export interface QueryNFTResponseAminoMsg {
  type: "/chainmain.nft.v1.QueryNFTResponse";
  value: QueryNFTResponseAmino;
}
/** QueryNFTResponse is the response type for the Query/NFT RPC method */
export interface QueryNFTResponseSDKType {
  nft: BaseNFTSDKType;
}
function createBaseQuerySupplyRequest(): QuerySupplyRequest {
  return {
    denomId: "",
    owner: ""
  };
}
export const QuerySupplyRequest = {
  typeUrl: "/chainmain.nft.v1.QuerySupplyRequest",
  encode(message: QuerySupplyRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denomId !== "") {
      writer.uint32(10).string(message.denomId);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    return writer;
  },
  fromJSON(object: any): QuerySupplyRequest {
    return {
      denomId: isSet(object.denomId) ? String(object.denomId) : "",
      owner: isSet(object.owner) ? String(object.owner) : ""
    };
  },
  fromPartial(object: Partial<QuerySupplyRequest>): QuerySupplyRequest {
    const message = createBaseQuerySupplyRequest();
    message.denomId = object.denomId ?? "";
    message.owner = object.owner ?? "";
    return message;
  },
  fromAmino(object: QuerySupplyRequestAmino): QuerySupplyRequest {
    return {
      denomId: object.denom_id,
      owner: object.owner
    };
  },
  toAmino(message: QuerySupplyRequest): QuerySupplyRequestAmino {
    const obj: any = {};
    obj.denom_id = message.denomId;
    obj.owner = message.owner;
    return obj;
  },
  fromAminoMsg(object: QuerySupplyRequestAminoMsg): QuerySupplyRequest {
    return QuerySupplyRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySupplyRequestProtoMsg): QuerySupplyRequest {
    return QuerySupplyRequest.decode(message.value);
  },
  toProto(message: QuerySupplyRequest): Uint8Array {
    return QuerySupplyRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySupplyRequest): QuerySupplyRequestProtoMsg {
    return {
      typeUrl: "/chainmain.nft.v1.QuerySupplyRequest",
      value: QuerySupplyRequest.encode(message).finish()
    };
  }
};
function createBaseQuerySupplyResponse(): QuerySupplyResponse {
  return {
    amount: BigInt(0)
  };
}
export const QuerySupplyResponse = {
  typeUrl: "/chainmain.nft.v1.QuerySupplyResponse",
  encode(message: QuerySupplyResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.amount !== BigInt(0)) {
      writer.uint32(8).uint64(message.amount);
    }
    return writer;
  },
  fromJSON(object: any): QuerySupplyResponse {
    return {
      amount: isSet(object.amount) ? BigInt(object.amount.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<QuerySupplyResponse>): QuerySupplyResponse {
    const message = createBaseQuerySupplyResponse();
    message.amount = object.amount !== undefined && object.amount !== null ? BigInt(object.amount.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QuerySupplyResponseAmino): QuerySupplyResponse {
    return {
      amount: BigInt(object.amount)
    };
  },
  toAmino(message: QuerySupplyResponse): QuerySupplyResponseAmino {
    const obj: any = {};
    obj.amount = message.amount ? message.amount.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QuerySupplyResponseAminoMsg): QuerySupplyResponse {
    return QuerySupplyResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySupplyResponseProtoMsg): QuerySupplyResponse {
    return QuerySupplyResponse.decode(message.value);
  },
  toProto(message: QuerySupplyResponse): Uint8Array {
    return QuerySupplyResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySupplyResponse): QuerySupplyResponseProtoMsg {
    return {
      typeUrl: "/chainmain.nft.v1.QuerySupplyResponse",
      value: QuerySupplyResponse.encode(message).finish()
    };
  }
};
function createBaseQueryOwnerRequest(): QueryOwnerRequest {
  return {
    denomId: "",
    owner: "",
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryOwnerRequest = {
  typeUrl: "/chainmain.nft.v1.QueryOwnerRequest",
  encode(message: QueryOwnerRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denomId !== "") {
      writer.uint32(10).string(message.denomId);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryOwnerRequest {
    return {
      denomId: isSet(object.denomId) ? String(object.denomId) : "",
      owner: isSet(object.owner) ? String(object.owner) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryOwnerRequest>): QueryOwnerRequest {
    const message = createBaseQueryOwnerRequest();
    message.denomId = object.denomId ?? "";
    message.owner = object.owner ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryOwnerRequestAmino): QueryOwnerRequest {
    return {
      denomId: object.denom_id,
      owner: object.owner,
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryOwnerRequest): QueryOwnerRequestAmino {
    const obj: any = {};
    obj.denom_id = message.denomId;
    obj.owner = message.owner;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryOwnerRequestAminoMsg): QueryOwnerRequest {
    return QueryOwnerRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryOwnerRequestProtoMsg): QueryOwnerRequest {
    return QueryOwnerRequest.decode(message.value);
  },
  toProto(message: QueryOwnerRequest): Uint8Array {
    return QueryOwnerRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryOwnerRequest): QueryOwnerRequestProtoMsg {
    return {
      typeUrl: "/chainmain.nft.v1.QueryOwnerRequest",
      value: QueryOwnerRequest.encode(message).finish()
    };
  }
};
function createBaseQueryOwnerResponse(): QueryOwnerResponse {
  return {
    owner: Owner.fromPartial({}),
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryOwnerResponse = {
  typeUrl: "/chainmain.nft.v1.QueryOwnerResponse",
  encode(message: QueryOwnerResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== undefined) {
      Owner.encode(message.owner, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryOwnerResponse {
    return {
      owner: isSet(object.owner) ? Owner.fromJSON(object.owner) : undefined,
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryOwnerResponse>): QueryOwnerResponse {
    const message = createBaseQueryOwnerResponse();
    message.owner = object.owner !== undefined && object.owner !== null ? Owner.fromPartial(object.owner) : undefined;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryOwnerResponseAmino): QueryOwnerResponse {
    return {
      owner: object?.owner ? Owner.fromAmino(object.owner) : undefined,
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryOwnerResponse): QueryOwnerResponseAmino {
    const obj: any = {};
    obj.owner = message.owner ? Owner.toAmino(message.owner) : undefined;
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryOwnerResponseAminoMsg): QueryOwnerResponse {
    return QueryOwnerResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryOwnerResponseProtoMsg): QueryOwnerResponse {
    return QueryOwnerResponse.decode(message.value);
  },
  toProto(message: QueryOwnerResponse): Uint8Array {
    return QueryOwnerResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryOwnerResponse): QueryOwnerResponseProtoMsg {
    return {
      typeUrl: "/chainmain.nft.v1.QueryOwnerResponse",
      value: QueryOwnerResponse.encode(message).finish()
    };
  }
};
function createBaseQueryCollectionRequest(): QueryCollectionRequest {
  return {
    denomId: "",
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryCollectionRequest = {
  typeUrl: "/chainmain.nft.v1.QueryCollectionRequest",
  encode(message: QueryCollectionRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denomId !== "") {
      writer.uint32(10).string(message.denomId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryCollectionRequest {
    return {
      denomId: isSet(object.denomId) ? String(object.denomId) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryCollectionRequest>): QueryCollectionRequest {
    const message = createBaseQueryCollectionRequest();
    message.denomId = object.denomId ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryCollectionRequestAmino): QueryCollectionRequest {
    return {
      denomId: object.denom_id,
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryCollectionRequest): QueryCollectionRequestAmino {
    const obj: any = {};
    obj.denom_id = message.denomId;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryCollectionRequestAminoMsg): QueryCollectionRequest {
    return QueryCollectionRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCollectionRequestProtoMsg): QueryCollectionRequest {
    return QueryCollectionRequest.decode(message.value);
  },
  toProto(message: QueryCollectionRequest): Uint8Array {
    return QueryCollectionRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryCollectionRequest): QueryCollectionRequestProtoMsg {
    return {
      typeUrl: "/chainmain.nft.v1.QueryCollectionRequest",
      value: QueryCollectionRequest.encode(message).finish()
    };
  }
};
function createBaseQueryCollectionResponse(): QueryCollectionResponse {
  return {
    collection: Collection.fromPartial({}),
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryCollectionResponse = {
  typeUrl: "/chainmain.nft.v1.QueryCollectionResponse",
  encode(message: QueryCollectionResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.collection !== undefined) {
      Collection.encode(message.collection, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryCollectionResponse {
    return {
      collection: isSet(object.collection) ? Collection.fromJSON(object.collection) : undefined,
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryCollectionResponse>): QueryCollectionResponse {
    const message = createBaseQueryCollectionResponse();
    message.collection = object.collection !== undefined && object.collection !== null ? Collection.fromPartial(object.collection) : undefined;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryCollectionResponseAmino): QueryCollectionResponse {
    return {
      collection: object?.collection ? Collection.fromAmino(object.collection) : undefined,
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryCollectionResponse): QueryCollectionResponseAmino {
    const obj: any = {};
    obj.collection = message.collection ? Collection.toAmino(message.collection) : undefined;
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryCollectionResponseAminoMsg): QueryCollectionResponse {
    return QueryCollectionResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCollectionResponseProtoMsg): QueryCollectionResponse {
    return QueryCollectionResponse.decode(message.value);
  },
  toProto(message: QueryCollectionResponse): Uint8Array {
    return QueryCollectionResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryCollectionResponse): QueryCollectionResponseProtoMsg {
    return {
      typeUrl: "/chainmain.nft.v1.QueryCollectionResponse",
      value: QueryCollectionResponse.encode(message).finish()
    };
  }
};
function createBaseQueryDenomRequest(): QueryDenomRequest {
  return {
    denomId: ""
  };
}
export const QueryDenomRequest = {
  typeUrl: "/chainmain.nft.v1.QueryDenomRequest",
  encode(message: QueryDenomRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denomId !== "") {
      writer.uint32(10).string(message.denomId);
    }
    return writer;
  },
  fromJSON(object: any): QueryDenomRequest {
    return {
      denomId: isSet(object.denomId) ? String(object.denomId) : ""
    };
  },
  fromPartial(object: Partial<QueryDenomRequest>): QueryDenomRequest {
    const message = createBaseQueryDenomRequest();
    message.denomId = object.denomId ?? "";
    return message;
  },
  fromAmino(object: QueryDenomRequestAmino): QueryDenomRequest {
    return {
      denomId: object.denom_id
    };
  },
  toAmino(message: QueryDenomRequest): QueryDenomRequestAmino {
    const obj: any = {};
    obj.denom_id = message.denomId;
    return obj;
  },
  fromAminoMsg(object: QueryDenomRequestAminoMsg): QueryDenomRequest {
    return QueryDenomRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDenomRequestProtoMsg): QueryDenomRequest {
    return QueryDenomRequest.decode(message.value);
  },
  toProto(message: QueryDenomRequest): Uint8Array {
    return QueryDenomRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDenomRequest): QueryDenomRequestProtoMsg {
    return {
      typeUrl: "/chainmain.nft.v1.QueryDenomRequest",
      value: QueryDenomRequest.encode(message).finish()
    };
  }
};
function createBaseQueryDenomResponse(): QueryDenomResponse {
  return {
    denom: Denom.fromPartial({})
  };
}
export const QueryDenomResponse = {
  typeUrl: "/chainmain.nft.v1.QueryDenomResponse",
  encode(message: QueryDenomResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== undefined) {
      Denom.encode(message.denom, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryDenomResponse {
    return {
      denom: isSet(object.denom) ? Denom.fromJSON(object.denom) : undefined
    };
  },
  fromPartial(object: Partial<QueryDenomResponse>): QueryDenomResponse {
    const message = createBaseQueryDenomResponse();
    message.denom = object.denom !== undefined && object.denom !== null ? Denom.fromPartial(object.denom) : undefined;
    return message;
  },
  fromAmino(object: QueryDenomResponseAmino): QueryDenomResponse {
    return {
      denom: object?.denom ? Denom.fromAmino(object.denom) : undefined
    };
  },
  toAmino(message: QueryDenomResponse): QueryDenomResponseAmino {
    const obj: any = {};
    obj.denom = message.denom ? Denom.toAmino(message.denom) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDenomResponseAminoMsg): QueryDenomResponse {
    return QueryDenomResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDenomResponseProtoMsg): QueryDenomResponse {
    return QueryDenomResponse.decode(message.value);
  },
  toProto(message: QueryDenomResponse): Uint8Array {
    return QueryDenomResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDenomResponse): QueryDenomResponseProtoMsg {
    return {
      typeUrl: "/chainmain.nft.v1.QueryDenomResponse",
      value: QueryDenomResponse.encode(message).finish()
    };
  }
};
function createBaseQueryDenomByNameRequest(): QueryDenomByNameRequest {
  return {
    denomName: ""
  };
}
export const QueryDenomByNameRequest = {
  typeUrl: "/chainmain.nft.v1.QueryDenomByNameRequest",
  encode(message: QueryDenomByNameRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denomName !== "") {
      writer.uint32(10).string(message.denomName);
    }
    return writer;
  },
  fromJSON(object: any): QueryDenomByNameRequest {
    return {
      denomName: isSet(object.denomName) ? String(object.denomName) : ""
    };
  },
  fromPartial(object: Partial<QueryDenomByNameRequest>): QueryDenomByNameRequest {
    const message = createBaseQueryDenomByNameRequest();
    message.denomName = object.denomName ?? "";
    return message;
  },
  fromAmino(object: QueryDenomByNameRequestAmino): QueryDenomByNameRequest {
    return {
      denomName: object.denom_name
    };
  },
  toAmino(message: QueryDenomByNameRequest): QueryDenomByNameRequestAmino {
    const obj: any = {};
    obj.denom_name = message.denomName;
    return obj;
  },
  fromAminoMsg(object: QueryDenomByNameRequestAminoMsg): QueryDenomByNameRequest {
    return QueryDenomByNameRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDenomByNameRequestProtoMsg): QueryDenomByNameRequest {
    return QueryDenomByNameRequest.decode(message.value);
  },
  toProto(message: QueryDenomByNameRequest): Uint8Array {
    return QueryDenomByNameRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDenomByNameRequest): QueryDenomByNameRequestProtoMsg {
    return {
      typeUrl: "/chainmain.nft.v1.QueryDenomByNameRequest",
      value: QueryDenomByNameRequest.encode(message).finish()
    };
  }
};
function createBaseQueryDenomByNameResponse(): QueryDenomByNameResponse {
  return {
    denom: Denom.fromPartial({})
  };
}
export const QueryDenomByNameResponse = {
  typeUrl: "/chainmain.nft.v1.QueryDenomByNameResponse",
  encode(message: QueryDenomByNameResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== undefined) {
      Denom.encode(message.denom, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryDenomByNameResponse {
    return {
      denom: isSet(object.denom) ? Denom.fromJSON(object.denom) : undefined
    };
  },
  fromPartial(object: Partial<QueryDenomByNameResponse>): QueryDenomByNameResponse {
    const message = createBaseQueryDenomByNameResponse();
    message.denom = object.denom !== undefined && object.denom !== null ? Denom.fromPartial(object.denom) : undefined;
    return message;
  },
  fromAmino(object: QueryDenomByNameResponseAmino): QueryDenomByNameResponse {
    return {
      denom: object?.denom ? Denom.fromAmino(object.denom) : undefined
    };
  },
  toAmino(message: QueryDenomByNameResponse): QueryDenomByNameResponseAmino {
    const obj: any = {};
    obj.denom = message.denom ? Denom.toAmino(message.denom) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDenomByNameResponseAminoMsg): QueryDenomByNameResponse {
    return QueryDenomByNameResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDenomByNameResponseProtoMsg): QueryDenomByNameResponse {
    return QueryDenomByNameResponse.decode(message.value);
  },
  toProto(message: QueryDenomByNameResponse): Uint8Array {
    return QueryDenomByNameResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDenomByNameResponse): QueryDenomByNameResponseProtoMsg {
    return {
      typeUrl: "/chainmain.nft.v1.QueryDenomByNameResponse",
      value: QueryDenomByNameResponse.encode(message).finish()
    };
  }
};
function createBaseQueryDenomsRequest(): QueryDenomsRequest {
  return {
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryDenomsRequest = {
  typeUrl: "/chainmain.nft.v1.QueryDenomsRequest",
  encode(message: QueryDenomsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryDenomsRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryDenomsRequest>): QueryDenomsRequest {
    const message = createBaseQueryDenomsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryDenomsRequestAmino): QueryDenomsRequest {
    return {
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryDenomsRequest): QueryDenomsRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDenomsRequestAminoMsg): QueryDenomsRequest {
    return QueryDenomsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDenomsRequestProtoMsg): QueryDenomsRequest {
    return QueryDenomsRequest.decode(message.value);
  },
  toProto(message: QueryDenomsRequest): Uint8Array {
    return QueryDenomsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDenomsRequest): QueryDenomsRequestProtoMsg {
    return {
      typeUrl: "/chainmain.nft.v1.QueryDenomsRequest",
      value: QueryDenomsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryDenomsResponse(): QueryDenomsResponse {
  return {
    denoms: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryDenomsResponse = {
  typeUrl: "/chainmain.nft.v1.QueryDenomsResponse",
  encode(message: QueryDenomsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.denoms) {
      Denom.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryDenomsResponse {
    return {
      denoms: Array.isArray(object?.denoms) ? object.denoms.map((e: any) => Denom.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryDenomsResponse>): QueryDenomsResponse {
    const message = createBaseQueryDenomsResponse();
    message.denoms = object.denoms?.map(e => Denom.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryDenomsResponseAmino): QueryDenomsResponse {
    return {
      denoms: Array.isArray(object?.denoms) ? object.denoms.map((e: any) => Denom.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryDenomsResponse): QueryDenomsResponseAmino {
    const obj: any = {};
    if (message.denoms) {
      obj.denoms = message.denoms.map(e => e ? Denom.toAmino(e) : undefined);
    } else {
      obj.denoms = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDenomsResponseAminoMsg): QueryDenomsResponse {
    return QueryDenomsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDenomsResponseProtoMsg): QueryDenomsResponse {
    return QueryDenomsResponse.decode(message.value);
  },
  toProto(message: QueryDenomsResponse): Uint8Array {
    return QueryDenomsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDenomsResponse): QueryDenomsResponseProtoMsg {
    return {
      typeUrl: "/chainmain.nft.v1.QueryDenomsResponse",
      value: QueryDenomsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryNFTRequest(): QueryNFTRequest {
  return {
    denomId: "",
    tokenId: ""
  };
}
export const QueryNFTRequest = {
  typeUrl: "/chainmain.nft.v1.QueryNFTRequest",
  encode(message: QueryNFTRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denomId !== "") {
      writer.uint32(10).string(message.denomId);
    }
    if (message.tokenId !== "") {
      writer.uint32(18).string(message.tokenId);
    }
    return writer;
  },
  fromJSON(object: any): QueryNFTRequest {
    return {
      denomId: isSet(object.denomId) ? String(object.denomId) : "",
      tokenId: isSet(object.tokenId) ? String(object.tokenId) : ""
    };
  },
  fromPartial(object: Partial<QueryNFTRequest>): QueryNFTRequest {
    const message = createBaseQueryNFTRequest();
    message.denomId = object.denomId ?? "";
    message.tokenId = object.tokenId ?? "";
    return message;
  },
  fromAmino(object: QueryNFTRequestAmino): QueryNFTRequest {
    return {
      denomId: object.denom_id,
      tokenId: object.token_id
    };
  },
  toAmino(message: QueryNFTRequest): QueryNFTRequestAmino {
    const obj: any = {};
    obj.denom_id = message.denomId;
    obj.token_id = message.tokenId;
    return obj;
  },
  fromAminoMsg(object: QueryNFTRequestAminoMsg): QueryNFTRequest {
    return QueryNFTRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryNFTRequestProtoMsg): QueryNFTRequest {
    return QueryNFTRequest.decode(message.value);
  },
  toProto(message: QueryNFTRequest): Uint8Array {
    return QueryNFTRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryNFTRequest): QueryNFTRequestProtoMsg {
    return {
      typeUrl: "/chainmain.nft.v1.QueryNFTRequest",
      value: QueryNFTRequest.encode(message).finish()
    };
  }
};
function createBaseQueryNFTResponse(): QueryNFTResponse {
  return {
    nft: BaseNFT.fromPartial({})
  };
}
export const QueryNFTResponse = {
  typeUrl: "/chainmain.nft.v1.QueryNFTResponse",
  encode(message: QueryNFTResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.nft !== undefined) {
      BaseNFT.encode(message.nft, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryNFTResponse {
    return {
      nft: isSet(object.nft) ? BaseNFT.fromJSON(object.nft) : undefined
    };
  },
  fromPartial(object: Partial<QueryNFTResponse>): QueryNFTResponse {
    const message = createBaseQueryNFTResponse();
    message.nft = object.nft !== undefined && object.nft !== null ? BaseNFT.fromPartial(object.nft) : undefined;
    return message;
  },
  fromAmino(object: QueryNFTResponseAmino): QueryNFTResponse {
    return {
      nft: object?.nft ? BaseNFT.fromAmino(object.nft) : undefined
    };
  },
  toAmino(message: QueryNFTResponse): QueryNFTResponseAmino {
    const obj: any = {};
    obj.nft = message.nft ? BaseNFT.toAmino(message.nft) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryNFTResponseAminoMsg): QueryNFTResponse {
    return QueryNFTResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryNFTResponseProtoMsg): QueryNFTResponse {
    return QueryNFTResponse.decode(message.value);
  },
  toProto(message: QueryNFTResponse): Uint8Array {
    return QueryNFTResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryNFTResponse): QueryNFTResponseProtoMsg {
    return {
      typeUrl: "/chainmain.nft.v1.QueryNFTResponse",
      value: QueryNFTResponse.encode(message).finish()
    };
  }
};