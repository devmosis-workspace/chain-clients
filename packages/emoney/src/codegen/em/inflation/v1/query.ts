import { InflationState, InflationStateAmino, InflationStateSDKType } from "./inflation";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
export interface QueryInflationRequest {}
export interface QueryInflationRequestProtoMsg {
  typeUrl: "/em.inflation.v1.QueryInflationRequest";
  value: Uint8Array;
}
export interface QueryInflationRequestAmino {}
export interface QueryInflationRequestAminoMsg {
  type: "/em.inflation.v1.QueryInflationRequest";
  value: QueryInflationRequestAmino;
}
export interface QueryInflationRequestSDKType {}
export interface QueryInflationResponse {
  state: InflationState;
}
export interface QueryInflationResponseProtoMsg {
  typeUrl: "/em.inflation.v1.QueryInflationResponse";
  value: Uint8Array;
}
export interface QueryInflationResponseAmino {
  state?: InflationStateAmino;
}
export interface QueryInflationResponseAminoMsg {
  type: "/em.inflation.v1.QueryInflationResponse";
  value: QueryInflationResponseAmino;
}
export interface QueryInflationResponseSDKType {
  state: InflationStateSDKType;
}
function createBaseQueryInflationRequest(): QueryInflationRequest {
  return {};
}
export const QueryInflationRequest = {
  typeUrl: "/em.inflation.v1.QueryInflationRequest",
  encode(_: QueryInflationRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryInflationRequest {
    return {};
  },
  fromPartial(_: Partial<QueryInflationRequest>): QueryInflationRequest {
    const message = createBaseQueryInflationRequest();
    return message;
  },
  fromAmino(_: QueryInflationRequestAmino): QueryInflationRequest {
    return {};
  },
  toAmino(_: QueryInflationRequest): QueryInflationRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryInflationRequestAminoMsg): QueryInflationRequest {
    return QueryInflationRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryInflationRequestProtoMsg): QueryInflationRequest {
    return QueryInflationRequest.decode(message.value);
  },
  toProto(message: QueryInflationRequest): Uint8Array {
    return QueryInflationRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryInflationRequest): QueryInflationRequestProtoMsg {
    return {
      typeUrl: "/em.inflation.v1.QueryInflationRequest",
      value: QueryInflationRequest.encode(message).finish()
    };
  }
};
function createBaseQueryInflationResponse(): QueryInflationResponse {
  return {
    state: InflationState.fromPartial({})
  };
}
export const QueryInflationResponse = {
  typeUrl: "/em.inflation.v1.QueryInflationResponse",
  encode(message: QueryInflationResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.state !== undefined) {
      InflationState.encode(message.state, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryInflationResponse {
    return {
      state: isSet(object.state) ? InflationState.fromJSON(object.state) : undefined
    };
  },
  fromPartial(object: Partial<QueryInflationResponse>): QueryInflationResponse {
    const message = createBaseQueryInflationResponse();
    message.state = object.state !== undefined && object.state !== null ? InflationState.fromPartial(object.state) : undefined;
    return message;
  },
  fromAmino(object: QueryInflationResponseAmino): QueryInflationResponse {
    return {
      state: object?.state ? InflationState.fromAmino(object.state) : undefined
    };
  },
  toAmino(message: QueryInflationResponse): QueryInflationResponseAmino {
    const obj: any = {};
    obj.state = message.state ? InflationState.toAmino(message.state) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryInflationResponseAminoMsg): QueryInflationResponse {
    return QueryInflationResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryInflationResponseProtoMsg): QueryInflationResponse {
    return QueryInflationResponse.decode(message.value);
  },
  toProto(message: QueryInflationResponse): Uint8Array {
    return QueryInflationResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryInflationResponse): QueryInflationResponseProtoMsg {
    return {
      typeUrl: "/em.inflation.v1.QueryInflationResponse",
      value: QueryInflationResponse.encode(message).finish()
    };
  }
};