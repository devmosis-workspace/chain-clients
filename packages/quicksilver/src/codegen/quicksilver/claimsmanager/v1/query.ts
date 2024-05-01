import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Claim, ClaimAmino, ClaimSDKType } from "./claimsmanager";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** QueryClaimsRequest is the request type for the Query/Claims RPC method. */
export interface QueryClaimsRequest {
  chainId: string;
  address: string;
  pagination?: PageRequest;
}
export interface QueryClaimsRequestProtoMsg {
  typeUrl: "/quicksilver.claimsmanager.v1.QueryClaimsRequest";
  value: Uint8Array;
}
/** QueryClaimsRequest is the request type for the Query/Claims RPC method. */
export interface QueryClaimsRequestAmino {
  chain_id?: string;
  address?: string;
  pagination?: PageRequestAmino;
}
export interface QueryClaimsRequestAminoMsg {
  type: "/quicksilver.claimsmanager.v1.QueryClaimsRequest";
  value: QueryClaimsRequestAmino;
}
/** QueryClaimsRequest is the request type for the Query/Claims RPC method. */
export interface QueryClaimsRequestSDKType {
  chain_id: string;
  address: string;
  pagination?: PageRequestSDKType;
}
/** QueryClaimsResponse is the response type for the Query/Claims RPC method. */
export interface QueryClaimsResponse {
  claims: Claim[];
  pagination?: PageResponse;
}
export interface QueryClaimsResponseProtoMsg {
  typeUrl: "/quicksilver.claimsmanager.v1.QueryClaimsResponse";
  value: Uint8Array;
}
/** QueryClaimsResponse is the response type for the Query/Claims RPC method. */
export interface QueryClaimsResponseAmino {
  claims?: ClaimAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryClaimsResponseAminoMsg {
  type: "/quicksilver.claimsmanager.v1.QueryClaimsResponse";
  value: QueryClaimsResponseAmino;
}
/** QueryClaimsResponse is the response type for the Query/Claims RPC method. */
export interface QueryClaimsResponseSDKType {
  claims: ClaimSDKType[];
  pagination?: PageResponseSDKType;
}
function createBaseQueryClaimsRequest(): QueryClaimsRequest {
  return {
    chainId: "",
    address: "",
    pagination: undefined
  };
}
export const QueryClaimsRequest = {
  typeUrl: "/quicksilver.claimsmanager.v1.QueryClaimsRequest",
  encode(message: QueryClaimsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryClaimsRequest {
    return {
      chainId: isSet(object.chainId) ? String(object.chainId) : "",
      address: isSet(object.address) ? String(object.address) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryClaimsRequest>): QueryClaimsRequest {
    const message = createBaseQueryClaimsRequest();
    message.chainId = object.chainId ?? "";
    message.address = object.address ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryClaimsRequestAmino): QueryClaimsRequest {
    const message = createBaseQueryClaimsRequest();
    if (object.chain_id !== undefined && object.chain_id !== null) {
      message.chainId = object.chain_id;
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryClaimsRequest): QueryClaimsRequestAmino {
    const obj: any = {};
    obj.chain_id = message.chainId;
    obj.address = message.address;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryClaimsRequestAminoMsg): QueryClaimsRequest {
    return QueryClaimsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryClaimsRequestProtoMsg): QueryClaimsRequest {
    return QueryClaimsRequest.decode(message.value);
  },
  toProto(message: QueryClaimsRequest): Uint8Array {
    return QueryClaimsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryClaimsRequest): QueryClaimsRequestProtoMsg {
    return {
      typeUrl: "/quicksilver.claimsmanager.v1.QueryClaimsRequest",
      value: QueryClaimsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryClaimsResponse(): QueryClaimsResponse {
  return {
    claims: [],
    pagination: undefined
  };
}
export const QueryClaimsResponse = {
  typeUrl: "/quicksilver.claimsmanager.v1.QueryClaimsResponse",
  encode(message: QueryClaimsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.claims) {
      Claim.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryClaimsResponse {
    return {
      claims: Array.isArray(object?.claims) ? object.claims.map((e: any) => Claim.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryClaimsResponse>): QueryClaimsResponse {
    const message = createBaseQueryClaimsResponse();
    message.claims = object.claims?.map(e => Claim.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryClaimsResponseAmino): QueryClaimsResponse {
    const message = createBaseQueryClaimsResponse();
    message.claims = object.claims?.map(e => Claim.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryClaimsResponse): QueryClaimsResponseAmino {
    const obj: any = {};
    if (message.claims) {
      obj.claims = message.claims.map(e => e ? Claim.toAmino(e) : undefined);
    } else {
      obj.claims = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryClaimsResponseAminoMsg): QueryClaimsResponse {
    return QueryClaimsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryClaimsResponseProtoMsg): QueryClaimsResponse {
    return QueryClaimsResponse.decode(message.value);
  },
  toProto(message: QueryClaimsResponse): Uint8Array {
    return QueryClaimsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryClaimsResponse): QueryClaimsResponseProtoMsg {
    return {
      typeUrl: "/quicksilver.claimsmanager.v1.QueryClaimsResponse",
      value: QueryClaimsResponse.encode(message).finish()
    };
  }
};