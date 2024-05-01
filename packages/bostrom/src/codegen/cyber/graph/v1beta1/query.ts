import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
export interface QueryGraphStatsRequest {}
export interface QueryGraphStatsRequestProtoMsg {
  typeUrl: "/cyber.graph.v1beta1.QueryGraphStatsRequest";
  value: Uint8Array;
}
export interface QueryGraphStatsRequestAmino {}
export interface QueryGraphStatsRequestAminoMsg {
  type: "/cyber.graph.v1beta1.QueryGraphStatsRequest";
  value: QueryGraphStatsRequestAmino;
}
export interface QueryGraphStatsRequestSDKType {}
export interface QueryGraphStatsResponse {
  cyberlinks: bigint;
  particles: bigint;
}
export interface QueryGraphStatsResponseProtoMsg {
  typeUrl: "/cyber.graph.v1beta1.QueryGraphStatsResponse";
  value: Uint8Array;
}
export interface QueryGraphStatsResponseAmino {
  cyberlinks?: string;
  particles?: string;
}
export interface QueryGraphStatsResponseAminoMsg {
  type: "/cyber.graph.v1beta1.QueryGraphStatsResponse";
  value: QueryGraphStatsResponseAmino;
}
export interface QueryGraphStatsResponseSDKType {
  cyberlinks: bigint;
  particles: bigint;
}
function createBaseQueryGraphStatsRequest(): QueryGraphStatsRequest {
  return {};
}
export const QueryGraphStatsRequest = {
  typeUrl: "/cyber.graph.v1beta1.QueryGraphStatsRequest",
  encode(_: QueryGraphStatsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryGraphStatsRequest {
    return {};
  },
  fromPartial(_: Partial<QueryGraphStatsRequest>): QueryGraphStatsRequest {
    const message = createBaseQueryGraphStatsRequest();
    return message;
  },
  fromAmino(_: QueryGraphStatsRequestAmino): QueryGraphStatsRequest {
    const message = createBaseQueryGraphStatsRequest();
    return message;
  },
  toAmino(_: QueryGraphStatsRequest): QueryGraphStatsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryGraphStatsRequestAminoMsg): QueryGraphStatsRequest {
    return QueryGraphStatsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGraphStatsRequestProtoMsg): QueryGraphStatsRequest {
    return QueryGraphStatsRequest.decode(message.value);
  },
  toProto(message: QueryGraphStatsRequest): Uint8Array {
    return QueryGraphStatsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGraphStatsRequest): QueryGraphStatsRequestProtoMsg {
    return {
      typeUrl: "/cyber.graph.v1beta1.QueryGraphStatsRequest",
      value: QueryGraphStatsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGraphStatsResponse(): QueryGraphStatsResponse {
  return {
    cyberlinks: BigInt(0),
    particles: BigInt(0)
  };
}
export const QueryGraphStatsResponse = {
  typeUrl: "/cyber.graph.v1beta1.QueryGraphStatsResponse",
  encode(message: QueryGraphStatsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.cyberlinks !== BigInt(0)) {
      writer.uint32(8).uint64(message.cyberlinks);
    }
    if (message.particles !== BigInt(0)) {
      writer.uint32(16).uint64(message.particles);
    }
    return writer;
  },
  fromJSON(object: any): QueryGraphStatsResponse {
    return {
      cyberlinks: isSet(object.cyberlinks) ? BigInt(object.cyberlinks.toString()) : BigInt(0),
      particles: isSet(object.particles) ? BigInt(object.particles.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<QueryGraphStatsResponse>): QueryGraphStatsResponse {
    const message = createBaseQueryGraphStatsResponse();
    message.cyberlinks = object.cyberlinks !== undefined && object.cyberlinks !== null ? BigInt(object.cyberlinks.toString()) : BigInt(0);
    message.particles = object.particles !== undefined && object.particles !== null ? BigInt(object.particles.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryGraphStatsResponseAmino): QueryGraphStatsResponse {
    const message = createBaseQueryGraphStatsResponse();
    if (object.cyberlinks !== undefined && object.cyberlinks !== null) {
      message.cyberlinks = BigInt(object.cyberlinks);
    }
    if (object.particles !== undefined && object.particles !== null) {
      message.particles = BigInt(object.particles);
    }
    return message;
  },
  toAmino(message: QueryGraphStatsResponse): QueryGraphStatsResponseAmino {
    const obj: any = {};
    obj.cyberlinks = message.cyberlinks !== BigInt(0) ? message.cyberlinks.toString() : undefined;
    obj.particles = message.particles !== BigInt(0) ? message.particles.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGraphStatsResponseAminoMsg): QueryGraphStatsResponse {
    return QueryGraphStatsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGraphStatsResponseProtoMsg): QueryGraphStatsResponse {
    return QueryGraphStatsResponse.decode(message.value);
  },
  toProto(message: QueryGraphStatsResponse): Uint8Array {
    return QueryGraphStatsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGraphStatsResponse): QueryGraphStatsResponseProtoMsg {
    return {
      typeUrl: "/cyber.graph.v1beta1.QueryGraphStatsResponse",
      value: QueryGraphStatsResponse.encode(message).finish()
    };
  }
};