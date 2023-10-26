import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { Perpetual, PerpetualAmino, PerpetualSDKType } from "./perpetual";
import { BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
/** Queries a Perpetual by id. */
export interface QueryPerpetualRequest {
  /** Queries a Perpetual by id. */
  id: number;
}
export interface QueryPerpetualRequestProtoMsg {
  typeUrl: "/dydxprotocol.perpetuals.QueryPerpetualRequest";
  value: Uint8Array;
}
/** Queries a Perpetual by id. */
export interface QueryPerpetualRequestAmino {
  /** Queries a Perpetual by id. */
  id: number;
}
export interface QueryPerpetualRequestAminoMsg {
  type: "/dydxprotocol.perpetuals.QueryPerpetualRequest";
  value: QueryPerpetualRequestAmino;
}
/** Queries a Perpetual by id. */
export interface QueryPerpetualRequestSDKType {
  id: number;
}
/** QueryPerpetualResponse is response type for the Perpetual RPC method. */
export interface QueryPerpetualResponse {
  perpetual: Perpetual;
}
export interface QueryPerpetualResponseProtoMsg {
  typeUrl: "/dydxprotocol.perpetuals.QueryPerpetualResponse";
  value: Uint8Array;
}
/** QueryPerpetualResponse is response type for the Perpetual RPC method. */
export interface QueryPerpetualResponseAmino {
  perpetual?: PerpetualAmino;
}
export interface QueryPerpetualResponseAminoMsg {
  type: "/dydxprotocol.perpetuals.QueryPerpetualResponse";
  value: QueryPerpetualResponseAmino;
}
/** QueryPerpetualResponse is response type for the Perpetual RPC method. */
export interface QueryPerpetualResponseSDKType {
  perpetual: PerpetualSDKType;
}
/** Queries a list of Perpetual items. */
export interface QueryAllPerpetualsRequest {
  pagination: PageRequest;
}
export interface QueryAllPerpetualsRequestProtoMsg {
  typeUrl: "/dydxprotocol.perpetuals.QueryAllPerpetualsRequest";
  value: Uint8Array;
}
/** Queries a list of Perpetual items. */
export interface QueryAllPerpetualsRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllPerpetualsRequestAminoMsg {
  type: "/dydxprotocol.perpetuals.QueryAllPerpetualsRequest";
  value: QueryAllPerpetualsRequestAmino;
}
/** Queries a list of Perpetual items. */
export interface QueryAllPerpetualsRequestSDKType {
  pagination: PageRequestSDKType;
}
/** QueryAllPerpetualsResponse is response type for the AllPerpetuals RPC method. */
export interface QueryAllPerpetualsResponse {
  perpetual: Perpetual[];
  pagination: PageResponse;
}
export interface QueryAllPerpetualsResponseProtoMsg {
  typeUrl: "/dydxprotocol.perpetuals.QueryAllPerpetualsResponse";
  value: Uint8Array;
}
/** QueryAllPerpetualsResponse is response type for the AllPerpetuals RPC method. */
export interface QueryAllPerpetualsResponseAmino {
  perpetual: PerpetualAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllPerpetualsResponseAminoMsg {
  type: "/dydxprotocol.perpetuals.QueryAllPerpetualsResponse";
  value: QueryAllPerpetualsResponseAmino;
}
/** QueryAllPerpetualsResponse is response type for the AllPerpetuals RPC method. */
export interface QueryAllPerpetualsResponseSDKType {
  perpetual: PerpetualSDKType[];
  pagination: PageResponseSDKType;
}
function createBaseQueryPerpetualRequest(): QueryPerpetualRequest {
  return {
    id: 0
  };
}
export const QueryPerpetualRequest = {
  typeUrl: "/dydxprotocol.perpetuals.QueryPerpetualRequest",
  encode(message: QueryPerpetualRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    return writer;
  },
  fromJSON(object: any): QueryPerpetualRequest {
    return {
      id: isSet(object.id) ? Number(object.id) : 0
    };
  },
  fromPartial(object: Partial<QueryPerpetualRequest>): QueryPerpetualRequest {
    const message = createBaseQueryPerpetualRequest();
    message.id = object.id ?? 0;
    return message;
  },
  fromAmino(object: QueryPerpetualRequestAmino): QueryPerpetualRequest {
    return {
      id: object.id
    };
  },
  toAmino(message: QueryPerpetualRequest): QueryPerpetualRequestAmino {
    const obj: any = {};
    obj.id = message.id;
    return obj;
  },
  fromAminoMsg(object: QueryPerpetualRequestAminoMsg): QueryPerpetualRequest {
    return QueryPerpetualRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPerpetualRequestProtoMsg): QueryPerpetualRequest {
    return QueryPerpetualRequest.decode(message.value);
  },
  toProto(message: QueryPerpetualRequest): Uint8Array {
    return QueryPerpetualRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPerpetualRequest): QueryPerpetualRequestProtoMsg {
    return {
      typeUrl: "/dydxprotocol.perpetuals.QueryPerpetualRequest",
      value: QueryPerpetualRequest.encode(message).finish()
    };
  }
};
function createBaseQueryPerpetualResponse(): QueryPerpetualResponse {
  return {
    perpetual: Perpetual.fromPartial({})
  };
}
export const QueryPerpetualResponse = {
  typeUrl: "/dydxprotocol.perpetuals.QueryPerpetualResponse",
  encode(message: QueryPerpetualResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.perpetual !== undefined) {
      Perpetual.encode(message.perpetual, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryPerpetualResponse {
    return {
      perpetual: isSet(object.perpetual) ? Perpetual.fromJSON(object.perpetual) : undefined
    };
  },
  fromPartial(object: Partial<QueryPerpetualResponse>): QueryPerpetualResponse {
    const message = createBaseQueryPerpetualResponse();
    message.perpetual = object.perpetual !== undefined && object.perpetual !== null ? Perpetual.fromPartial(object.perpetual) : undefined;
    return message;
  },
  fromAmino(object: QueryPerpetualResponseAmino): QueryPerpetualResponse {
    return {
      perpetual: object?.perpetual ? Perpetual.fromAmino(object.perpetual) : undefined
    };
  },
  toAmino(message: QueryPerpetualResponse): QueryPerpetualResponseAmino {
    const obj: any = {};
    obj.perpetual = message.perpetual ? Perpetual.toAmino(message.perpetual) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPerpetualResponseAminoMsg): QueryPerpetualResponse {
    return QueryPerpetualResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPerpetualResponseProtoMsg): QueryPerpetualResponse {
    return QueryPerpetualResponse.decode(message.value);
  },
  toProto(message: QueryPerpetualResponse): Uint8Array {
    return QueryPerpetualResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPerpetualResponse): QueryPerpetualResponseProtoMsg {
    return {
      typeUrl: "/dydxprotocol.perpetuals.QueryPerpetualResponse",
      value: QueryPerpetualResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllPerpetualsRequest(): QueryAllPerpetualsRequest {
  return {
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryAllPerpetualsRequest = {
  typeUrl: "/dydxprotocol.perpetuals.QueryAllPerpetualsRequest",
  encode(message: QueryAllPerpetualsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryAllPerpetualsRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryAllPerpetualsRequest>): QueryAllPerpetualsRequest {
    const message = createBaseQueryAllPerpetualsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllPerpetualsRequestAmino): QueryAllPerpetualsRequest {
    return {
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryAllPerpetualsRequest): QueryAllPerpetualsRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllPerpetualsRequestAminoMsg): QueryAllPerpetualsRequest {
    return QueryAllPerpetualsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllPerpetualsRequestProtoMsg): QueryAllPerpetualsRequest {
    return QueryAllPerpetualsRequest.decode(message.value);
  },
  toProto(message: QueryAllPerpetualsRequest): Uint8Array {
    return QueryAllPerpetualsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllPerpetualsRequest): QueryAllPerpetualsRequestProtoMsg {
    return {
      typeUrl: "/dydxprotocol.perpetuals.QueryAllPerpetualsRequest",
      value: QueryAllPerpetualsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllPerpetualsResponse(): QueryAllPerpetualsResponse {
  return {
    perpetual: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryAllPerpetualsResponse = {
  typeUrl: "/dydxprotocol.perpetuals.QueryAllPerpetualsResponse",
  encode(message: QueryAllPerpetualsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.perpetual) {
      Perpetual.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryAllPerpetualsResponse {
    return {
      perpetual: Array.isArray(object?.perpetual) ? object.perpetual.map((e: any) => Perpetual.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryAllPerpetualsResponse>): QueryAllPerpetualsResponse {
    const message = createBaseQueryAllPerpetualsResponse();
    message.perpetual = object.perpetual?.map(e => Perpetual.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllPerpetualsResponseAmino): QueryAllPerpetualsResponse {
    return {
      perpetual: Array.isArray(object?.perpetual) ? object.perpetual.map((e: any) => Perpetual.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryAllPerpetualsResponse): QueryAllPerpetualsResponseAmino {
    const obj: any = {};
    if (message.perpetual) {
      obj.perpetual = message.perpetual.map(e => e ? Perpetual.toAmino(e) : undefined);
    } else {
      obj.perpetual = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllPerpetualsResponseAminoMsg): QueryAllPerpetualsResponse {
    return QueryAllPerpetualsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllPerpetualsResponseProtoMsg): QueryAllPerpetualsResponse {
    return QueryAllPerpetualsResponse.decode(message.value);
  },
  toProto(message: QueryAllPerpetualsResponse): Uint8Array {
    return QueryAllPerpetualsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllPerpetualsResponse): QueryAllPerpetualsResponseProtoMsg {
    return {
      typeUrl: "/dydxprotocol.perpetuals.QueryAllPerpetualsResponse",
      value: QueryAllPerpetualsResponse.encode(message).finish()
    };
  }
};