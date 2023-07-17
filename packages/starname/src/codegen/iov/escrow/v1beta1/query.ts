import { Escrow, EscrowSDKType } from "./types";
import { Long, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** QueryEscrowRequest is the request type for the Query/Escrow RPC method */
export interface QueryEscrowRequest {
  /** QueryEscrowRequest is the request type for the Query/Escrow RPC method */
  id: string;
}
/** QueryEscrowRequest is the request type for the Query/Escrow RPC method */
export interface QueryEscrowRequestSDKType {
  id: string;
}
/** QueryEscrowResponse is the response type for the Query/Escrow RPC method */
export interface QueryEscrowResponse {
  /** QueryEscrowResponse is the response type for the Query/Escrow RPC method */
  escrow?: Escrow;
}
/** QueryEscrowResponse is the response type for the Query/Escrow RPC method */
export interface QueryEscrowResponseSDKType {
  escrow?: EscrowSDKType;
}
/** QueryEscrowsRequest is the request type for the Query/Escrows RPC method */
export interface QueryEscrowsRequest {
  /** The4 seller address */
  seller: string;
  /** The state of the escrow object. It must be one of "open" or "expired". */
  state: string;
  /** All the escrows has a unique key, in the starname objects the domain_name will be the key, and the account_name*domain_name will be account name. */
  objectKey: string;
  paginationStart: Long;
  paginationLength: Long;
}
/** QueryEscrowsRequest is the request type for the Query/Escrows RPC method */
export interface QueryEscrowsRequestSDKType {
  seller: string;
  state: string;
  object_key: string;
  pagination_start: Long;
  pagination_length: Long;
}
/** QueryEscrowsResponse is the response type for the Query/Escrows RPC method */
export interface QueryEscrowsResponse {
  escrows: Escrow[];
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
  encode(message: QueryEscrowRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseQueryEscrowResponse(): QueryEscrowResponse {
  return {
    escrow: undefined
  };
}
export const QueryEscrowResponse = {
  encode(message: QueryEscrowResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseQueryEscrowsRequest(): QueryEscrowsRequest {
  return {
    seller: "",
    state: "",
    objectKey: "",
    paginationStart: Long.UZERO,
    paginationLength: Long.UZERO
  };
}
export const QueryEscrowsRequest = {
  encode(message: QueryEscrowsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.seller !== "") {
      writer.uint32(10).string(message.seller);
    }
    if (message.state !== "") {
      writer.uint32(18).string(message.state);
    }
    if (message.objectKey !== "") {
      writer.uint32(26).string(message.objectKey);
    }
    if (!message.paginationStart.isZero()) {
      writer.uint32(32).uint64(message.paginationStart);
    }
    if (!message.paginationLength.isZero()) {
      writer.uint32(40).uint64(message.paginationLength);
    }
    return writer;
  },
  fromJSON(object: any): QueryEscrowsRequest {
    return {
      seller: isSet(object.seller) ? String(object.seller) : "",
      state: isSet(object.state) ? String(object.state) : "",
      objectKey: isSet(object.objectKey) ? String(object.objectKey) : "",
      paginationStart: isSet(object.paginationStart) ? Long.fromValue(object.paginationStart) : Long.UZERO,
      paginationLength: isSet(object.paginationLength) ? Long.fromValue(object.paginationLength) : Long.UZERO
    };
  },
  fromPartial(object: Partial<QueryEscrowsRequest>): QueryEscrowsRequest {
    const message = createBaseQueryEscrowsRequest();
    message.seller = object.seller ?? "";
    message.state = object.state ?? "";
    message.objectKey = object.objectKey ?? "";
    message.paginationStart = object.paginationStart !== undefined && object.paginationStart !== null ? Long.fromValue(object.paginationStart) : Long.UZERO;
    message.paginationLength = object.paginationLength !== undefined && object.paginationLength !== null ? Long.fromValue(object.paginationLength) : Long.UZERO;
    return message;
  }
};
function createBaseQueryEscrowsResponse(): QueryEscrowsResponse {
  return {
    escrows: []
  };
}
export const QueryEscrowsResponse = {
  encode(message: QueryEscrowsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};