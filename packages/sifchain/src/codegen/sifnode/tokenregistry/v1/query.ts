import { SifnodeTokenRegistry, SifnodeTokenRegistryAmino, SifnodeTokenRegistrySDKType } from "./types";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
export interface QueryEntriesResponse {
  registry?: SifnodeTokenRegistry;
}
export interface QueryEntriesResponseProtoMsg {
  typeUrl: "/sifnode.tokenregistry.v1.QueryEntriesResponse";
  value: Uint8Array;
}
export interface QueryEntriesResponseAmino {
  registry?: SifnodeTokenRegistryAmino;
}
export interface QueryEntriesResponseAminoMsg {
  type: "/sifnode.tokenregistry.v1.QueryEntriesResponse";
  value: QueryEntriesResponseAmino;
}
export interface QueryEntriesResponseSDKType {
  registry?: SifnodeTokenRegistrySDKType;
}
export interface QueryEntriesRequest {}
export interface QueryEntriesRequestProtoMsg {
  typeUrl: "/sifnode.tokenregistry.v1.QueryEntriesRequest";
  value: Uint8Array;
}
export interface QueryEntriesRequestAmino {}
export interface QueryEntriesRequestAminoMsg {
  type: "/sifnode.tokenregistry.v1.QueryEntriesRequest";
  value: QueryEntriesRequestAmino;
}
export interface QueryEntriesRequestSDKType {}
function createBaseQueryEntriesResponse(): QueryEntriesResponse {
  return {
    registry: undefined
  };
}
export const QueryEntriesResponse = {
  typeUrl: "/sifnode.tokenregistry.v1.QueryEntriesResponse",
  encode(message: QueryEntriesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.registry !== undefined) {
      SifnodeTokenRegistry.encode(message.registry, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryEntriesResponse {
    return {
      registry: isSet(object.registry) ? SifnodeTokenRegistry.fromJSON(object.registry) : undefined
    };
  },
  fromPartial(object: Partial<QueryEntriesResponse>): QueryEntriesResponse {
    const message = createBaseQueryEntriesResponse();
    message.registry = object.registry !== undefined && object.registry !== null ? SifnodeTokenRegistry.fromPartial(object.registry) : undefined;
    return message;
  },
  fromAmino(object: QueryEntriesResponseAmino): QueryEntriesResponse {
    const message = createBaseQueryEntriesResponse();
    if (object.registry !== undefined && object.registry !== null) {
      message.registry = SifnodeTokenRegistry.fromAmino(object.registry);
    }
    return message;
  },
  toAmino(message: QueryEntriesResponse): QueryEntriesResponseAmino {
    const obj: any = {};
    obj.registry = message.registry ? SifnodeTokenRegistry.toAmino(message.registry) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryEntriesResponseAminoMsg): QueryEntriesResponse {
    return QueryEntriesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryEntriesResponseProtoMsg): QueryEntriesResponse {
    return QueryEntriesResponse.decode(message.value);
  },
  toProto(message: QueryEntriesResponse): Uint8Array {
    return QueryEntriesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryEntriesResponse): QueryEntriesResponseProtoMsg {
    return {
      typeUrl: "/sifnode.tokenregistry.v1.QueryEntriesResponse",
      value: QueryEntriesResponse.encode(message).finish()
    };
  }
};
function createBaseQueryEntriesRequest(): QueryEntriesRequest {
  return {};
}
export const QueryEntriesRequest = {
  typeUrl: "/sifnode.tokenregistry.v1.QueryEntriesRequest",
  encode(_: QueryEntriesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryEntriesRequest {
    return {};
  },
  fromPartial(_: Partial<QueryEntriesRequest>): QueryEntriesRequest {
    const message = createBaseQueryEntriesRequest();
    return message;
  },
  fromAmino(_: QueryEntriesRequestAmino): QueryEntriesRequest {
    const message = createBaseQueryEntriesRequest();
    return message;
  },
  toAmino(_: QueryEntriesRequest): QueryEntriesRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryEntriesRequestAminoMsg): QueryEntriesRequest {
    return QueryEntriesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryEntriesRequestProtoMsg): QueryEntriesRequest {
    return QueryEntriesRequest.decode(message.value);
  },
  toProto(message: QueryEntriesRequest): Uint8Array {
    return QueryEntriesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryEntriesRequest): QueryEntriesRequestProtoMsg {
    return {
      typeUrl: "/sifnode.tokenregistry.v1.QueryEntriesRequest",
      value: QueryEntriesRequest.encode(message).finish()
    };
  }
};