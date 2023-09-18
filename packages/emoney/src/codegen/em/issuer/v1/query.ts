import { Issuer, IssuerAmino, IssuerSDKType } from "./issuer";
import { BinaryWriter } from "../../../binary";
export interface QueryIssuersRequest {}
export interface QueryIssuersRequestProtoMsg {
  typeUrl: "/em.issuer.v1.QueryIssuersRequest";
  value: Uint8Array;
}
export interface QueryIssuersRequestAmino {}
export interface QueryIssuersRequestAminoMsg {
  type: "/em.issuer.v1.QueryIssuersRequest";
  value: QueryIssuersRequestAmino;
}
export interface QueryIssuersRequestSDKType {}
export interface QueryIssuersResponse {
  issuers: Issuer[];
}
export interface QueryIssuersResponseProtoMsg {
  typeUrl: "/em.issuer.v1.QueryIssuersResponse";
  value: Uint8Array;
}
export interface QueryIssuersResponseAmino {
  issuers: IssuerAmino[];
}
export interface QueryIssuersResponseAminoMsg {
  type: "/em.issuer.v1.QueryIssuersResponse";
  value: QueryIssuersResponseAmino;
}
export interface QueryIssuersResponseSDKType {
  issuers: IssuerSDKType[];
}
function createBaseQueryIssuersRequest(): QueryIssuersRequest {
  return {};
}
export const QueryIssuersRequest = {
  typeUrl: "/em.issuer.v1.QueryIssuersRequest",
  encode(_: QueryIssuersRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryIssuersRequest {
    return {};
  },
  fromPartial(_: Partial<QueryIssuersRequest>): QueryIssuersRequest {
    const message = createBaseQueryIssuersRequest();
    return message;
  },
  fromAmino(_: QueryIssuersRequestAmino): QueryIssuersRequest {
    return {};
  },
  toAmino(_: QueryIssuersRequest): QueryIssuersRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryIssuersRequestAminoMsg): QueryIssuersRequest {
    return QueryIssuersRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryIssuersRequestProtoMsg): QueryIssuersRequest {
    return QueryIssuersRequest.decode(message.value);
  },
  toProto(message: QueryIssuersRequest): Uint8Array {
    return QueryIssuersRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryIssuersRequest): QueryIssuersRequestProtoMsg {
    return {
      typeUrl: "/em.issuer.v1.QueryIssuersRequest",
      value: QueryIssuersRequest.encode(message).finish()
    };
  }
};
function createBaseQueryIssuersResponse(): QueryIssuersResponse {
  return {
    issuers: []
  };
}
export const QueryIssuersResponse = {
  typeUrl: "/em.issuer.v1.QueryIssuersResponse",
  encode(message: QueryIssuersResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.issuers) {
      Issuer.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryIssuersResponse {
    return {
      issuers: Array.isArray(object?.issuers) ? object.issuers.map((e: any) => Issuer.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryIssuersResponse>): QueryIssuersResponse {
    const message = createBaseQueryIssuersResponse();
    message.issuers = object.issuers?.map(e => Issuer.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryIssuersResponseAmino): QueryIssuersResponse {
    return {
      issuers: Array.isArray(object?.issuers) ? object.issuers.map((e: any) => Issuer.fromAmino(e)) : []
    };
  },
  toAmino(message: QueryIssuersResponse): QueryIssuersResponseAmino {
    const obj: any = {};
    if (message.issuers) {
      obj.issuers = message.issuers.map(e => e ? Issuer.toAmino(e) : undefined);
    } else {
      obj.issuers = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryIssuersResponseAminoMsg): QueryIssuersResponse {
    return QueryIssuersResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryIssuersResponseProtoMsg): QueryIssuersResponse {
    return QueryIssuersResponse.decode(message.value);
  },
  toProto(message: QueryIssuersResponse): Uint8Array {
    return QueryIssuersResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryIssuersResponse): QueryIssuersResponseProtoMsg {
    return {
      typeUrl: "/em.issuer.v1.QueryIssuersResponse",
      value: QueryIssuersResponse.encode(message).finish()
    };
  }
};