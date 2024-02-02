import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64, base64FromBytes, fromJsonTimestamp } from "../../../helpers";
/**
 * QueryInflationRateRequest is the request type for the Query/InflationRate RPC
 * method.
 */
export interface QueryInflationRateRequest {}
export interface QueryInflationRateRequestProtoMsg {
  typeUrl: "/celestia.mint.v1.QueryInflationRateRequest";
  value: Uint8Array;
}
/**
 * QueryInflationRateRequest is the request type for the Query/InflationRate RPC
 * method.
 */
export interface QueryInflationRateRequestAmino {}
export interface QueryInflationRateRequestAminoMsg {
  type: "/celestia.mint.v1.QueryInflationRateRequest";
  value: QueryInflationRateRequestAmino;
}
/**
 * QueryInflationRateRequest is the request type for the Query/InflationRate RPC
 * method.
 */
export interface QueryInflationRateRequestSDKType {}
/**
 * QueryInflationRateResponse is the response type for the Query/InflationRate
 * RPC method.
 */
export interface QueryInflationRateResponse {
  /** InflationRate is the current inflation rate. */
  inflationRate: Uint8Array;
}
export interface QueryInflationRateResponseProtoMsg {
  typeUrl: "/celestia.mint.v1.QueryInflationRateResponse";
  value: Uint8Array;
}
/**
 * QueryInflationRateResponse is the response type for the Query/InflationRate
 * RPC method.
 */
export interface QueryInflationRateResponseAmino {
  /** InflationRate is the current inflation rate. */
  inflation_rate?: string;
}
export interface QueryInflationRateResponseAminoMsg {
  type: "/celestia.mint.v1.QueryInflationRateResponse";
  value: QueryInflationRateResponseAmino;
}
/**
 * QueryInflationRateResponse is the response type for the Query/InflationRate
 * RPC method.
 */
export interface QueryInflationRateResponseSDKType {
  inflation_rate: Uint8Array;
}
/**
 * QueryAnnualProvisionsRequest is the request type for the
 * Query/AnnualProvisions RPC method.
 */
export interface QueryAnnualProvisionsRequest {}
export interface QueryAnnualProvisionsRequestProtoMsg {
  typeUrl: "/celestia.mint.v1.QueryAnnualProvisionsRequest";
  value: Uint8Array;
}
/**
 * QueryAnnualProvisionsRequest is the request type for the
 * Query/AnnualProvisions RPC method.
 */
export interface QueryAnnualProvisionsRequestAmino {}
export interface QueryAnnualProvisionsRequestAminoMsg {
  type: "/celestia.mint.v1.QueryAnnualProvisionsRequest";
  value: QueryAnnualProvisionsRequestAmino;
}
/**
 * QueryAnnualProvisionsRequest is the request type for the
 * Query/AnnualProvisions RPC method.
 */
export interface QueryAnnualProvisionsRequestSDKType {}
/**
 * QueryAnnualProvisionsResponse is the response type for the
 * Query/AnnualProvisions RPC method.
 */
export interface QueryAnnualProvisionsResponse {
  /** AnnualProvisions is the current annual provisions. */
  annualProvisions: Uint8Array;
}
export interface QueryAnnualProvisionsResponseProtoMsg {
  typeUrl: "/celestia.mint.v1.QueryAnnualProvisionsResponse";
  value: Uint8Array;
}
/**
 * QueryAnnualProvisionsResponse is the response type for the
 * Query/AnnualProvisions RPC method.
 */
export interface QueryAnnualProvisionsResponseAmino {
  /** AnnualProvisions is the current annual provisions. */
  annual_provisions?: string;
}
export interface QueryAnnualProvisionsResponseAminoMsg {
  type: "/celestia.mint.v1.QueryAnnualProvisionsResponse";
  value: QueryAnnualProvisionsResponseAmino;
}
/**
 * QueryAnnualProvisionsResponse is the response type for the
 * Query/AnnualProvisions RPC method.
 */
export interface QueryAnnualProvisionsResponseSDKType {
  annual_provisions: Uint8Array;
}
/**
 * QueryGenesisTimeRequest is the request type for the Query/GenesisTime RPC
 * method.
 */
export interface QueryGenesisTimeRequest {}
export interface QueryGenesisTimeRequestProtoMsg {
  typeUrl: "/celestia.mint.v1.QueryGenesisTimeRequest";
  value: Uint8Array;
}
/**
 * QueryGenesisTimeRequest is the request type for the Query/GenesisTime RPC
 * method.
 */
export interface QueryGenesisTimeRequestAmino {}
export interface QueryGenesisTimeRequestAminoMsg {
  type: "/celestia.mint.v1.QueryGenesisTimeRequest";
  value: QueryGenesisTimeRequestAmino;
}
/**
 * QueryGenesisTimeRequest is the request type for the Query/GenesisTime RPC
 * method.
 */
export interface QueryGenesisTimeRequestSDKType {}
/**
 * QueryGenesisTimeResponse is the response type for the Query/GenesisTime RPC
 * method.
 */
export interface QueryGenesisTimeResponse {
  /** GenesisTime is the timestamp associated with the first block. */
  genesisTime?: Timestamp;
}
export interface QueryGenesisTimeResponseProtoMsg {
  typeUrl: "/celestia.mint.v1.QueryGenesisTimeResponse";
  value: Uint8Array;
}
/**
 * QueryGenesisTimeResponse is the response type for the Query/GenesisTime RPC
 * method.
 */
export interface QueryGenesisTimeResponseAmino {
  /** GenesisTime is the timestamp associated with the first block. */
  genesis_time?: string;
}
export interface QueryGenesisTimeResponseAminoMsg {
  type: "/celestia.mint.v1.QueryGenesisTimeResponse";
  value: QueryGenesisTimeResponseAmino;
}
/**
 * QueryGenesisTimeResponse is the response type for the Query/GenesisTime RPC
 * method.
 */
export interface QueryGenesisTimeResponseSDKType {
  genesis_time?: TimestampSDKType;
}
function createBaseQueryInflationRateRequest(): QueryInflationRateRequest {
  return {};
}
export const QueryInflationRateRequest = {
  typeUrl: "/celestia.mint.v1.QueryInflationRateRequest",
  encode(_: QueryInflationRateRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryInflationRateRequest {
    return {};
  },
  fromPartial(_: Partial<QueryInflationRateRequest>): QueryInflationRateRequest {
    const message = createBaseQueryInflationRateRequest();
    return message;
  },
  fromAmino(_: QueryInflationRateRequestAmino): QueryInflationRateRequest {
    const message = createBaseQueryInflationRateRequest();
    return message;
  },
  toAmino(_: QueryInflationRateRequest): QueryInflationRateRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryInflationRateRequestAminoMsg): QueryInflationRateRequest {
    return QueryInflationRateRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryInflationRateRequestProtoMsg): QueryInflationRateRequest {
    return QueryInflationRateRequest.decode(message.value);
  },
  toProto(message: QueryInflationRateRequest): Uint8Array {
    return QueryInflationRateRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryInflationRateRequest): QueryInflationRateRequestProtoMsg {
    return {
      typeUrl: "/celestia.mint.v1.QueryInflationRateRequest",
      value: QueryInflationRateRequest.encode(message).finish()
    };
  }
};
function createBaseQueryInflationRateResponse(): QueryInflationRateResponse {
  return {
    inflationRate: new Uint8Array()
  };
}
export const QueryInflationRateResponse = {
  typeUrl: "/celestia.mint.v1.QueryInflationRateResponse",
  encode(message: QueryInflationRateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.inflationRate.length !== 0) {
      writer.uint32(10).bytes(message.inflationRate);
    }
    return writer;
  },
  fromJSON(object: any): QueryInflationRateResponse {
    return {
      inflationRate: isSet(object.inflationRate) ? bytesFromBase64(object.inflationRate) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<QueryInflationRateResponse>): QueryInflationRateResponse {
    const message = createBaseQueryInflationRateResponse();
    message.inflationRate = object.inflationRate ?? new Uint8Array();
    return message;
  },
  fromAmino(object: QueryInflationRateResponseAmino): QueryInflationRateResponse {
    const message = createBaseQueryInflationRateResponse();
    if (object.inflation_rate !== undefined && object.inflation_rate !== null) {
      message.inflationRate = bytesFromBase64(object.inflation_rate);
    }
    return message;
  },
  toAmino(message: QueryInflationRateResponse): QueryInflationRateResponseAmino {
    const obj: any = {};
    obj.inflation_rate = message.inflationRate ? base64FromBytes(message.inflationRate) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryInflationRateResponseAminoMsg): QueryInflationRateResponse {
    return QueryInflationRateResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryInflationRateResponseProtoMsg): QueryInflationRateResponse {
    return QueryInflationRateResponse.decode(message.value);
  },
  toProto(message: QueryInflationRateResponse): Uint8Array {
    return QueryInflationRateResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryInflationRateResponse): QueryInflationRateResponseProtoMsg {
    return {
      typeUrl: "/celestia.mint.v1.QueryInflationRateResponse",
      value: QueryInflationRateResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAnnualProvisionsRequest(): QueryAnnualProvisionsRequest {
  return {};
}
export const QueryAnnualProvisionsRequest = {
  typeUrl: "/celestia.mint.v1.QueryAnnualProvisionsRequest",
  encode(_: QueryAnnualProvisionsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryAnnualProvisionsRequest {
    return {};
  },
  fromPartial(_: Partial<QueryAnnualProvisionsRequest>): QueryAnnualProvisionsRequest {
    const message = createBaseQueryAnnualProvisionsRequest();
    return message;
  },
  fromAmino(_: QueryAnnualProvisionsRequestAmino): QueryAnnualProvisionsRequest {
    const message = createBaseQueryAnnualProvisionsRequest();
    return message;
  },
  toAmino(_: QueryAnnualProvisionsRequest): QueryAnnualProvisionsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryAnnualProvisionsRequestAminoMsg): QueryAnnualProvisionsRequest {
    return QueryAnnualProvisionsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAnnualProvisionsRequestProtoMsg): QueryAnnualProvisionsRequest {
    return QueryAnnualProvisionsRequest.decode(message.value);
  },
  toProto(message: QueryAnnualProvisionsRequest): Uint8Array {
    return QueryAnnualProvisionsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAnnualProvisionsRequest): QueryAnnualProvisionsRequestProtoMsg {
    return {
      typeUrl: "/celestia.mint.v1.QueryAnnualProvisionsRequest",
      value: QueryAnnualProvisionsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAnnualProvisionsResponse(): QueryAnnualProvisionsResponse {
  return {
    annualProvisions: new Uint8Array()
  };
}
export const QueryAnnualProvisionsResponse = {
  typeUrl: "/celestia.mint.v1.QueryAnnualProvisionsResponse",
  encode(message: QueryAnnualProvisionsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.annualProvisions.length !== 0) {
      writer.uint32(10).bytes(message.annualProvisions);
    }
    return writer;
  },
  fromJSON(object: any): QueryAnnualProvisionsResponse {
    return {
      annualProvisions: isSet(object.annualProvisions) ? bytesFromBase64(object.annualProvisions) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<QueryAnnualProvisionsResponse>): QueryAnnualProvisionsResponse {
    const message = createBaseQueryAnnualProvisionsResponse();
    message.annualProvisions = object.annualProvisions ?? new Uint8Array();
    return message;
  },
  fromAmino(object: QueryAnnualProvisionsResponseAmino): QueryAnnualProvisionsResponse {
    const message = createBaseQueryAnnualProvisionsResponse();
    if (object.annual_provisions !== undefined && object.annual_provisions !== null) {
      message.annualProvisions = bytesFromBase64(object.annual_provisions);
    }
    return message;
  },
  toAmino(message: QueryAnnualProvisionsResponse): QueryAnnualProvisionsResponseAmino {
    const obj: any = {};
    obj.annual_provisions = message.annualProvisions ? base64FromBytes(message.annualProvisions) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAnnualProvisionsResponseAminoMsg): QueryAnnualProvisionsResponse {
    return QueryAnnualProvisionsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAnnualProvisionsResponseProtoMsg): QueryAnnualProvisionsResponse {
    return QueryAnnualProvisionsResponse.decode(message.value);
  },
  toProto(message: QueryAnnualProvisionsResponse): Uint8Array {
    return QueryAnnualProvisionsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAnnualProvisionsResponse): QueryAnnualProvisionsResponseProtoMsg {
    return {
      typeUrl: "/celestia.mint.v1.QueryAnnualProvisionsResponse",
      value: QueryAnnualProvisionsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGenesisTimeRequest(): QueryGenesisTimeRequest {
  return {};
}
export const QueryGenesisTimeRequest = {
  typeUrl: "/celestia.mint.v1.QueryGenesisTimeRequest",
  encode(_: QueryGenesisTimeRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryGenesisTimeRequest {
    return {};
  },
  fromPartial(_: Partial<QueryGenesisTimeRequest>): QueryGenesisTimeRequest {
    const message = createBaseQueryGenesisTimeRequest();
    return message;
  },
  fromAmino(_: QueryGenesisTimeRequestAmino): QueryGenesisTimeRequest {
    const message = createBaseQueryGenesisTimeRequest();
    return message;
  },
  toAmino(_: QueryGenesisTimeRequest): QueryGenesisTimeRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryGenesisTimeRequestAminoMsg): QueryGenesisTimeRequest {
    return QueryGenesisTimeRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGenesisTimeRequestProtoMsg): QueryGenesisTimeRequest {
    return QueryGenesisTimeRequest.decode(message.value);
  },
  toProto(message: QueryGenesisTimeRequest): Uint8Array {
    return QueryGenesisTimeRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGenesisTimeRequest): QueryGenesisTimeRequestProtoMsg {
    return {
      typeUrl: "/celestia.mint.v1.QueryGenesisTimeRequest",
      value: QueryGenesisTimeRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGenesisTimeResponse(): QueryGenesisTimeResponse {
  return {
    genesisTime: undefined
  };
}
export const QueryGenesisTimeResponse = {
  typeUrl: "/celestia.mint.v1.QueryGenesisTimeResponse",
  encode(message: QueryGenesisTimeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.genesisTime !== undefined) {
      Timestamp.encode(message.genesisTime, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryGenesisTimeResponse {
    return {
      genesisTime: isSet(object.genesisTime) ? fromJsonTimestamp(object.genesisTime) : undefined
    };
  },
  fromPartial(object: Partial<QueryGenesisTimeResponse>): QueryGenesisTimeResponse {
    const message = createBaseQueryGenesisTimeResponse();
    message.genesisTime = object.genesisTime !== undefined && object.genesisTime !== null ? Timestamp.fromPartial(object.genesisTime) : undefined;
    return message;
  },
  fromAmino(object: QueryGenesisTimeResponseAmino): QueryGenesisTimeResponse {
    const message = createBaseQueryGenesisTimeResponse();
    if (object.genesis_time !== undefined && object.genesis_time !== null) {
      message.genesisTime = Timestamp.fromAmino(object.genesis_time);
    }
    return message;
  },
  toAmino(message: QueryGenesisTimeResponse): QueryGenesisTimeResponseAmino {
    const obj: any = {};
    obj.genesis_time = message.genesisTime ? Timestamp.toAmino(message.genesisTime) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGenesisTimeResponseAminoMsg): QueryGenesisTimeResponse {
    return QueryGenesisTimeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGenesisTimeResponseProtoMsg): QueryGenesisTimeResponse {
    return QueryGenesisTimeResponse.decode(message.value);
  },
  toProto(message: QueryGenesisTimeResponse): Uint8Array {
    return QueryGenesisTimeResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGenesisTimeResponse): QueryGenesisTimeResponseProtoMsg {
    return {
      typeUrl: "/celestia.mint.v1.QueryGenesisTimeResponse",
      value: QueryGenesisTimeResponse.encode(message).finish()
    };
  }
};