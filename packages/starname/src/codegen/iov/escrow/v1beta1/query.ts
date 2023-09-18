import { Escrow, EscrowAmino, EscrowSDKType } from "./types";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** QueryEscrowRequest is the request type for the Query/Escrow RPC method */
export interface QueryEscrowRequest {
  /** QueryEscrowRequest is the request type for the Query/Escrow RPC method */
  id: string;
}
export interface QueryEscrowRequestProtoMsg {
  typeUrl: "/starnamed.x.escrow.v1beta1.QueryEscrowRequest";
  value: Uint8Array;
}
/** QueryEscrowRequest is the request type for the Query/Escrow RPC method */
export interface QueryEscrowRequestAmino {
  /** QueryEscrowRequest is the request type for the Query/Escrow RPC method */
  id: string;
}
export interface QueryEscrowRequestAminoMsg {
  type: "/starnamed.x.escrow.v1beta1.QueryEscrowRequest";
  value: QueryEscrowRequestAmino;
}
/** QueryEscrowRequest is the request type for the Query/Escrow RPC method */
export interface QueryEscrowRequestSDKType {
  id: string;
}
/** QueryEscrowResponse is the response type for the Query/Escrow RPC method */
export interface QueryEscrowResponse {
  /** QueryEscrowResponse is the response type for the Query/Escrow RPC method */
  escrow: Escrow;
}
export interface QueryEscrowResponseProtoMsg {
  typeUrl: "/starnamed.x.escrow.v1beta1.QueryEscrowResponse";
  value: Uint8Array;
}
/** QueryEscrowResponse is the response type for the Query/Escrow RPC method */
export interface QueryEscrowResponseAmino {
  /** QueryEscrowResponse is the response type for the Query/Escrow RPC method */
  escrow?: EscrowAmino;
}
export interface QueryEscrowResponseAminoMsg {
  type: "/starnamed.x.escrow.v1beta1.QueryEscrowResponse";
  value: QueryEscrowResponseAmino;
}
/** QueryEscrowResponse is the response type for the Query/Escrow RPC method */
export interface QueryEscrowResponseSDKType {
  escrow: EscrowSDKType;
}
/** QueryEscrowsRequest is the request type for the Query/Escrows RPC method */
export interface QueryEscrowsRequest {
  /** The4 seller address */
  seller: string;
  /** The state of the escrow object. It must be one of "open" or "expired". */
  state: string;
  /** All the escrows has a unique key, in the starname objects the domain_name will be the key, and the account_name*domain_name will be account name. */
  objectKey: string;
  paginationStart: bigint;
  paginationLength: bigint;
}
export interface QueryEscrowsRequestProtoMsg {
  typeUrl: "/starnamed.x.escrow.v1beta1.QueryEscrowsRequest";
  value: Uint8Array;
}
/** QueryEscrowsRequest is the request type for the Query/Escrows RPC method */
export interface QueryEscrowsRequestAmino {
  /** The4 seller address */
  seller: string;
  /** The state of the escrow object. It must be one of "open" or "expired". */
  state: string;
  /** All the escrows has a unique key, in the starname objects the domain_name will be the key, and the account_name*domain_name will be account name. */
  object_key: string;
  pagination_start: string;
  pagination_length: string;
}
export interface QueryEscrowsRequestAminoMsg {
  type: "/starnamed.x.escrow.v1beta1.QueryEscrowsRequest";
  value: QueryEscrowsRequestAmino;
}
/** QueryEscrowsRequest is the request type for the Query/Escrows RPC method */
export interface QueryEscrowsRequestSDKType {
  seller: string;
  state: string;
  object_key: string;
  pagination_start: bigint;
  pagination_length: bigint;
}
/** QueryEscrowsResponse is the response type for the Query/Escrows RPC method */
export interface QueryEscrowsResponse {
  escrows: Escrow[];
}
export interface QueryEscrowsResponseProtoMsg {
  typeUrl: "/starnamed.x.escrow.v1beta1.QueryEscrowsResponse";
  value: Uint8Array;
}
/** QueryEscrowsResponse is the response type for the Query/Escrows RPC method */
export interface QueryEscrowsResponseAmino {
  escrows: EscrowAmino[];
}
export interface QueryEscrowsResponseAminoMsg {
  type: "/starnamed.x.escrow.v1beta1.QueryEscrowsResponse";
  value: QueryEscrowsResponseAmino;
}
/** QueryEscrowsResponse is the response type for the Query/Escrows RPC method */
export interface QueryEscrowsResponseSDKType {
  escrows: EscrowSDKType[];
}
function createBaseQueryEscrowRequest(): QueryEscrowRequest {
  return {
    id: ""
  };
}
export const QueryEscrowRequest = {
  typeUrl: "/starnamed.x.escrow.v1beta1.QueryEscrowRequest",
  encode(message: QueryEscrowRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },
  fromJSON(object: any): QueryEscrowRequest {
    return {
      id: isSet(object.id) ? String(object.id) : ""
    };
  },
  fromPartial(object: Partial<QueryEscrowRequest>): QueryEscrowRequest {
    const message = createBaseQueryEscrowRequest();
    message.id = object.id ?? "";
    return message;
  },
  fromAmino(object: QueryEscrowRequestAmino): QueryEscrowRequest {
    return {
      id: object.id
    };
  },
  toAmino(message: QueryEscrowRequest): QueryEscrowRequestAmino {
    const obj: any = {};
    obj.id = message.id;
    return obj;
  },
  fromAminoMsg(object: QueryEscrowRequestAminoMsg): QueryEscrowRequest {
    return QueryEscrowRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryEscrowRequestProtoMsg): QueryEscrowRequest {
    return QueryEscrowRequest.decode(message.value);
  },
  toProto(message: QueryEscrowRequest): Uint8Array {
    return QueryEscrowRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryEscrowRequest): QueryEscrowRequestProtoMsg {
    return {
      typeUrl: "/starnamed.x.escrow.v1beta1.QueryEscrowRequest",
      value: QueryEscrowRequest.encode(message).finish()
    };
  }
};
function createBaseQueryEscrowResponse(): QueryEscrowResponse {
  return {
    escrow: Escrow.fromPartial({})
  };
}
export const QueryEscrowResponse = {
  typeUrl: "/starnamed.x.escrow.v1beta1.QueryEscrowResponse",
  encode(message: QueryEscrowResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.escrow !== undefined) {
      Escrow.encode(message.escrow, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryEscrowResponse {
    return {
      escrow: isSet(object.escrow) ? Escrow.fromJSON(object.escrow) : undefined
    };
  },
  fromPartial(object: Partial<QueryEscrowResponse>): QueryEscrowResponse {
    const message = createBaseQueryEscrowResponse();
    message.escrow = object.escrow !== undefined && object.escrow !== null ? Escrow.fromPartial(object.escrow) : undefined;
    return message;
  },
  fromAmino(object: QueryEscrowResponseAmino): QueryEscrowResponse {
    return {
      escrow: object?.escrow ? Escrow.fromAmino(object.escrow) : undefined
    };
  },
  toAmino(message: QueryEscrowResponse): QueryEscrowResponseAmino {
    const obj: any = {};
    obj.escrow = message.escrow ? Escrow.toAmino(message.escrow) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryEscrowResponseAminoMsg): QueryEscrowResponse {
    return QueryEscrowResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryEscrowResponseProtoMsg): QueryEscrowResponse {
    return QueryEscrowResponse.decode(message.value);
  },
  toProto(message: QueryEscrowResponse): Uint8Array {
    return QueryEscrowResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryEscrowResponse): QueryEscrowResponseProtoMsg {
    return {
      typeUrl: "/starnamed.x.escrow.v1beta1.QueryEscrowResponse",
      value: QueryEscrowResponse.encode(message).finish()
    };
  }
};
function createBaseQueryEscrowsRequest(): QueryEscrowsRequest {
  return {
    seller: "",
    state: "",
    objectKey: "",
    paginationStart: BigInt(0),
    paginationLength: BigInt(0)
  };
}
export const QueryEscrowsRequest = {
  typeUrl: "/starnamed.x.escrow.v1beta1.QueryEscrowsRequest",
  encode(message: QueryEscrowsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.seller !== "") {
      writer.uint32(10).string(message.seller);
    }
    if (message.state !== "") {
      writer.uint32(18).string(message.state);
    }
    if (message.objectKey !== "") {
      writer.uint32(26).string(message.objectKey);
    }
    if (message.paginationStart !== BigInt(0)) {
      writer.uint32(32).uint64(message.paginationStart);
    }
    if (message.paginationLength !== BigInt(0)) {
      writer.uint32(40).uint64(message.paginationLength);
    }
    return writer;
  },
  fromJSON(object: any): QueryEscrowsRequest {
    return {
      seller: isSet(object.seller) ? String(object.seller) : "",
      state: isSet(object.state) ? String(object.state) : "",
      objectKey: isSet(object.objectKey) ? String(object.objectKey) : "",
      paginationStart: isSet(object.paginationStart) ? BigInt(object.paginationStart.toString()) : BigInt(0),
      paginationLength: isSet(object.paginationLength) ? BigInt(object.paginationLength.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<QueryEscrowsRequest>): QueryEscrowsRequest {
    const message = createBaseQueryEscrowsRequest();
    message.seller = object.seller ?? "";
    message.state = object.state ?? "";
    message.objectKey = object.objectKey ?? "";
    message.paginationStart = object.paginationStart !== undefined && object.paginationStart !== null ? BigInt(object.paginationStart.toString()) : BigInt(0);
    message.paginationLength = object.paginationLength !== undefined && object.paginationLength !== null ? BigInt(object.paginationLength.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryEscrowsRequestAmino): QueryEscrowsRequest {
    return {
      seller: object.seller,
      state: object.state,
      objectKey: object.object_key,
      paginationStart: BigInt(object.pagination_start),
      paginationLength: BigInt(object.pagination_length)
    };
  },
  toAmino(message: QueryEscrowsRequest): QueryEscrowsRequestAmino {
    const obj: any = {};
    obj.seller = message.seller;
    obj.state = message.state;
    obj.object_key = message.objectKey;
    obj.pagination_start = message.paginationStart ? message.paginationStart.toString() : undefined;
    obj.pagination_length = message.paginationLength ? message.paginationLength.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryEscrowsRequestAminoMsg): QueryEscrowsRequest {
    return QueryEscrowsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryEscrowsRequestProtoMsg): QueryEscrowsRequest {
    return QueryEscrowsRequest.decode(message.value);
  },
  toProto(message: QueryEscrowsRequest): Uint8Array {
    return QueryEscrowsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryEscrowsRequest): QueryEscrowsRequestProtoMsg {
    return {
      typeUrl: "/starnamed.x.escrow.v1beta1.QueryEscrowsRequest",
      value: QueryEscrowsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryEscrowsResponse(): QueryEscrowsResponse {
  return {
    escrows: []
  };
}
export const QueryEscrowsResponse = {
  typeUrl: "/starnamed.x.escrow.v1beta1.QueryEscrowsResponse",
  encode(message: QueryEscrowsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.escrows) {
      Escrow.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryEscrowsResponse {
    return {
      escrows: Array.isArray(object?.escrows) ? object.escrows.map((e: any) => Escrow.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryEscrowsResponse>): QueryEscrowsResponse {
    const message = createBaseQueryEscrowsResponse();
    message.escrows = object.escrows?.map(e => Escrow.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryEscrowsResponseAmino): QueryEscrowsResponse {
    return {
      escrows: Array.isArray(object?.escrows) ? object.escrows.map((e: any) => Escrow.fromAmino(e)) : []
    };
  },
  toAmino(message: QueryEscrowsResponse): QueryEscrowsResponseAmino {
    const obj: any = {};
    if (message.escrows) {
      obj.escrows = message.escrows.map(e => e ? Escrow.toAmino(e) : undefined);
    } else {
      obj.escrows = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryEscrowsResponseAminoMsg): QueryEscrowsResponse {
    return QueryEscrowsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryEscrowsResponseProtoMsg): QueryEscrowsResponse {
    return QueryEscrowsResponse.decode(message.value);
  },
  toProto(message: QueryEscrowsResponse): Uint8Array {
    return QueryEscrowsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryEscrowsResponse): QueryEscrowsResponseProtoMsg {
    return {
      typeUrl: "/starnamed.x.escrow.v1beta1.QueryEscrowsResponse",
      value: QueryEscrowsResponse.encode(message).finish()
    };
  }
};