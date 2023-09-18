import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../../cosmos/base/query/v1beta1/pagination";
import { ConnectionEnd, ConnectionEndAmino, ConnectionEndSDKType, IdentifiedConnection, IdentifiedConnectionAmino, IdentifiedConnectionSDKType } from "./connection";
import { Height, HeightAmino, HeightSDKType, IdentifiedClientState, IdentifiedClientStateAmino, IdentifiedClientStateSDKType } from "../../client/v1/client";
import { Any, AnyAmino, AnySDKType } from "../../../../google/protobuf/any";
import { BinaryWriter } from "../../../../binary";
import { isSet, bytesFromBase64 } from "../../../../helpers";
/**
 * QueryConnectionRequest is the request type for the Query/Connection RPC
 * method
 */
export interface QueryConnectionRequest {
  /** connection unique identifier */
  connectionId: string;
}
export interface QueryConnectionRequestProtoMsg {
  typeUrl: "/ibc.core.connection.v1.QueryConnectionRequest";
  value: Uint8Array;
}
/**
 * QueryConnectionRequest is the request type for the Query/Connection RPC
 * method
 */
export interface QueryConnectionRequestAmino {
  /** connection unique identifier */
  connection_id: string;
}
export interface QueryConnectionRequestAminoMsg {
  type: "cosmos-sdk/QueryConnectionRequest";
  value: QueryConnectionRequestAmino;
}
/**
 * QueryConnectionRequest is the request type for the Query/Connection RPC
 * method
 */
export interface QueryConnectionRequestSDKType {
  connection_id: string;
}
/**
 * QueryConnectionResponse is the response type for the Query/Connection RPC
 * method. Besides the connection end, it includes a proof and the height from
 * which the proof was retrieved.
 */
export interface QueryConnectionResponse {
  /** connection associated with the request identifier */
  connection: ConnectionEnd;
  /** merkle proof of existence */
  proof: Uint8Array;
  /** height at which the proof was retrieved */
  proofHeight: Height;
}
export interface QueryConnectionResponseProtoMsg {
  typeUrl: "/ibc.core.connection.v1.QueryConnectionResponse";
  value: Uint8Array;
}
/**
 * QueryConnectionResponse is the response type for the Query/Connection RPC
 * method. Besides the connection end, it includes a proof and the height from
 * which the proof was retrieved.
 */
export interface QueryConnectionResponseAmino {
  /** connection associated with the request identifier */
  connection?: ConnectionEndAmino;
  /** merkle proof of existence */
  proof: Uint8Array;
  /** height at which the proof was retrieved */
  proof_height?: HeightAmino;
}
export interface QueryConnectionResponseAminoMsg {
  type: "cosmos-sdk/QueryConnectionResponse";
  value: QueryConnectionResponseAmino;
}
/**
 * QueryConnectionResponse is the response type for the Query/Connection RPC
 * method. Besides the connection end, it includes a proof and the height from
 * which the proof was retrieved.
 */
export interface QueryConnectionResponseSDKType {
  connection: ConnectionEndSDKType;
  proof: Uint8Array;
  proof_height: HeightSDKType;
}
/**
 * QueryConnectionsRequest is the request type for the Query/Connections RPC
 * method
 */
export interface QueryConnectionsRequest {
  pagination: PageRequest;
}
export interface QueryConnectionsRequestProtoMsg {
  typeUrl: "/ibc.core.connection.v1.QueryConnectionsRequest";
  value: Uint8Array;
}
/**
 * QueryConnectionsRequest is the request type for the Query/Connections RPC
 * method
 */
export interface QueryConnectionsRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryConnectionsRequestAminoMsg {
  type: "cosmos-sdk/QueryConnectionsRequest";
  value: QueryConnectionsRequestAmino;
}
/**
 * QueryConnectionsRequest is the request type for the Query/Connections RPC
 * method
 */
export interface QueryConnectionsRequestSDKType {
  pagination: PageRequestSDKType;
}
/**
 * QueryConnectionsResponse is the response type for the Query/Connections RPC
 * method.
 */
export interface QueryConnectionsResponse {
  /** list of stored connections of the chain. */
  connections: IdentifiedConnection[];
  /** pagination response */
  pagination: PageResponse;
  /** query block height */
  height: Height;
}
export interface QueryConnectionsResponseProtoMsg {
  typeUrl: "/ibc.core.connection.v1.QueryConnectionsResponse";
  value: Uint8Array;
}
/**
 * QueryConnectionsResponse is the response type for the Query/Connections RPC
 * method.
 */
export interface QueryConnectionsResponseAmino {
  /** list of stored connections of the chain. */
  connections: IdentifiedConnectionAmino[];
  /** pagination response */
  pagination?: PageResponseAmino;
  /** query block height */
  height?: HeightAmino;
}
export interface QueryConnectionsResponseAminoMsg {
  type: "cosmos-sdk/QueryConnectionsResponse";
  value: QueryConnectionsResponseAmino;
}
/**
 * QueryConnectionsResponse is the response type for the Query/Connections RPC
 * method.
 */
export interface QueryConnectionsResponseSDKType {
  connections: IdentifiedConnectionSDKType[];
  pagination: PageResponseSDKType;
  height: HeightSDKType;
}
/**
 * QueryClientConnectionsRequest is the request type for the
 * Query/ClientConnections RPC method
 */
export interface QueryClientConnectionsRequest {
  /** client identifier associated with a connection */
  clientId: string;
}
export interface QueryClientConnectionsRequestProtoMsg {
  typeUrl: "/ibc.core.connection.v1.QueryClientConnectionsRequest";
  value: Uint8Array;
}
/**
 * QueryClientConnectionsRequest is the request type for the
 * Query/ClientConnections RPC method
 */
export interface QueryClientConnectionsRequestAmino {
  /** client identifier associated with a connection */
  client_id: string;
}
export interface QueryClientConnectionsRequestAminoMsg {
  type: "cosmos-sdk/QueryClientConnectionsRequest";
  value: QueryClientConnectionsRequestAmino;
}
/**
 * QueryClientConnectionsRequest is the request type for the
 * Query/ClientConnections RPC method
 */
export interface QueryClientConnectionsRequestSDKType {
  client_id: string;
}
/**
 * QueryClientConnectionsResponse is the response type for the
 * Query/ClientConnections RPC method
 */
export interface QueryClientConnectionsResponse {
  /** slice of all the connection paths associated with a client. */
  connectionPaths: string[];
  /** merkle proof of existence */
  proof: Uint8Array;
  /** height at which the proof was generated */
  proofHeight: Height;
}
export interface QueryClientConnectionsResponseProtoMsg {
  typeUrl: "/ibc.core.connection.v1.QueryClientConnectionsResponse";
  value: Uint8Array;
}
/**
 * QueryClientConnectionsResponse is the response type for the
 * Query/ClientConnections RPC method
 */
export interface QueryClientConnectionsResponseAmino {
  /** slice of all the connection paths associated with a client. */
  connection_paths: string[];
  /** merkle proof of existence */
  proof: Uint8Array;
  /** height at which the proof was generated */
  proof_height?: HeightAmino;
}
export interface QueryClientConnectionsResponseAminoMsg {
  type: "cosmos-sdk/QueryClientConnectionsResponse";
  value: QueryClientConnectionsResponseAmino;
}
/**
 * QueryClientConnectionsResponse is the response type for the
 * Query/ClientConnections RPC method
 */
export interface QueryClientConnectionsResponseSDKType {
  connection_paths: string[];
  proof: Uint8Array;
  proof_height: HeightSDKType;
}
/**
 * QueryConnectionClientStateRequest is the request type for the
 * Query/ConnectionClientState RPC method
 */
export interface QueryConnectionClientStateRequest {
  /** connection identifier */
  connectionId: string;
}
export interface QueryConnectionClientStateRequestProtoMsg {
  typeUrl: "/ibc.core.connection.v1.QueryConnectionClientStateRequest";
  value: Uint8Array;
}
/**
 * QueryConnectionClientStateRequest is the request type for the
 * Query/ConnectionClientState RPC method
 */
export interface QueryConnectionClientStateRequestAmino {
  /** connection identifier */
  connection_id: string;
}
export interface QueryConnectionClientStateRequestAminoMsg {
  type: "cosmos-sdk/QueryConnectionClientStateRequest";
  value: QueryConnectionClientStateRequestAmino;
}
/**
 * QueryConnectionClientStateRequest is the request type for the
 * Query/ConnectionClientState RPC method
 */
export interface QueryConnectionClientStateRequestSDKType {
  connection_id: string;
}
/**
 * QueryConnectionClientStateResponse is the response type for the
 * Query/ConnectionClientState RPC method
 */
export interface QueryConnectionClientStateResponse {
  /** client state associated with the channel */
  identifiedClientState: IdentifiedClientState;
  /** merkle proof of existence */
  proof: Uint8Array;
  /** height at which the proof was retrieved */
  proofHeight: Height;
}
export interface QueryConnectionClientStateResponseProtoMsg {
  typeUrl: "/ibc.core.connection.v1.QueryConnectionClientStateResponse";
  value: Uint8Array;
}
/**
 * QueryConnectionClientStateResponse is the response type for the
 * Query/ConnectionClientState RPC method
 */
export interface QueryConnectionClientStateResponseAmino {
  /** client state associated with the channel */
  identified_client_state?: IdentifiedClientStateAmino;
  /** merkle proof of existence */
  proof: Uint8Array;
  /** height at which the proof was retrieved */
  proof_height?: HeightAmino;
}
export interface QueryConnectionClientStateResponseAminoMsg {
  type: "cosmos-sdk/QueryConnectionClientStateResponse";
  value: QueryConnectionClientStateResponseAmino;
}
/**
 * QueryConnectionClientStateResponse is the response type for the
 * Query/ConnectionClientState RPC method
 */
export interface QueryConnectionClientStateResponseSDKType {
  identified_client_state: IdentifiedClientStateSDKType;
  proof: Uint8Array;
  proof_height: HeightSDKType;
}
/**
 * QueryConnectionConsensusStateRequest is the request type for the
 * Query/ConnectionConsensusState RPC method
 */
export interface QueryConnectionConsensusStateRequest {
  /** connection identifier */
  connectionId: string;
  revisionNumber: bigint;
  revisionHeight: bigint;
}
export interface QueryConnectionConsensusStateRequestProtoMsg {
  typeUrl: "/ibc.core.connection.v1.QueryConnectionConsensusStateRequest";
  value: Uint8Array;
}
/**
 * QueryConnectionConsensusStateRequest is the request type for the
 * Query/ConnectionConsensusState RPC method
 */
export interface QueryConnectionConsensusStateRequestAmino {
  /** connection identifier */
  connection_id: string;
  revision_number: string;
  revision_height: string;
}
export interface QueryConnectionConsensusStateRequestAminoMsg {
  type: "cosmos-sdk/QueryConnectionConsensusStateRequest";
  value: QueryConnectionConsensusStateRequestAmino;
}
/**
 * QueryConnectionConsensusStateRequest is the request type for the
 * Query/ConnectionConsensusState RPC method
 */
export interface QueryConnectionConsensusStateRequestSDKType {
  connection_id: string;
  revision_number: bigint;
  revision_height: bigint;
}
/**
 * QueryConnectionConsensusStateResponse is the response type for the
 * Query/ConnectionConsensusState RPC method
 */
export interface QueryConnectionConsensusStateResponse {
  /** consensus state associated with the channel */
  consensusState: Any;
  /** client ID associated with the consensus state */
  clientId: string;
  /** merkle proof of existence */
  proof: Uint8Array;
  /** height at which the proof was retrieved */
  proofHeight: Height;
}
export interface QueryConnectionConsensusStateResponseProtoMsg {
  typeUrl: "/ibc.core.connection.v1.QueryConnectionConsensusStateResponse";
  value: Uint8Array;
}
/**
 * QueryConnectionConsensusStateResponse is the response type for the
 * Query/ConnectionConsensusState RPC method
 */
export interface QueryConnectionConsensusStateResponseAmino {
  /** consensus state associated with the channel */
  consensus_state?: AnyAmino;
  /** client ID associated with the consensus state */
  client_id: string;
  /** merkle proof of existence */
  proof: Uint8Array;
  /** height at which the proof was retrieved */
  proof_height?: HeightAmino;
}
export interface QueryConnectionConsensusStateResponseAminoMsg {
  type: "cosmos-sdk/QueryConnectionConsensusStateResponse";
  value: QueryConnectionConsensusStateResponseAmino;
}
/**
 * QueryConnectionConsensusStateResponse is the response type for the
 * Query/ConnectionConsensusState RPC method
 */
export interface QueryConnectionConsensusStateResponseSDKType {
  consensus_state: AnySDKType;
  client_id: string;
  proof: Uint8Array;
  proof_height: HeightSDKType;
}
function createBaseQueryConnectionRequest(): QueryConnectionRequest {
  return {
    connectionId: ""
  };
}
export const QueryConnectionRequest = {
  typeUrl: "/ibc.core.connection.v1.QueryConnectionRequest",
  encode(message: QueryConnectionRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.connectionId !== "") {
      writer.uint32(10).string(message.connectionId);
    }
    return writer;
  },
  fromJSON(object: any): QueryConnectionRequest {
    return {
      connectionId: isSet(object.connectionId) ? String(object.connectionId) : ""
    };
  },
  fromPartial(object: Partial<QueryConnectionRequest>): QueryConnectionRequest {
    const message = createBaseQueryConnectionRequest();
    message.connectionId = object.connectionId ?? "";
    return message;
  },
  fromAmino(object: QueryConnectionRequestAmino): QueryConnectionRequest {
    return {
      connectionId: object.connection_id
    };
  },
  toAmino(message: QueryConnectionRequest): QueryConnectionRequestAmino {
    const obj: any = {};
    obj.connection_id = message.connectionId;
    return obj;
  },
  fromAminoMsg(object: QueryConnectionRequestAminoMsg): QueryConnectionRequest {
    return QueryConnectionRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryConnectionRequest): QueryConnectionRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryConnectionRequest",
      value: QueryConnectionRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryConnectionRequestProtoMsg): QueryConnectionRequest {
    return QueryConnectionRequest.decode(message.value);
  },
  toProto(message: QueryConnectionRequest): Uint8Array {
    return QueryConnectionRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryConnectionRequest): QueryConnectionRequestProtoMsg {
    return {
      typeUrl: "/ibc.core.connection.v1.QueryConnectionRequest",
      value: QueryConnectionRequest.encode(message).finish()
    };
  }
};
function createBaseQueryConnectionResponse(): QueryConnectionResponse {
  return {
    connection: ConnectionEnd.fromPartial({}),
    proof: new Uint8Array(),
    proofHeight: Height.fromPartial({})
  };
}
export const QueryConnectionResponse = {
  typeUrl: "/ibc.core.connection.v1.QueryConnectionResponse",
  encode(message: QueryConnectionResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.connection !== undefined) {
      ConnectionEnd.encode(message.connection, writer.uint32(10).fork()).ldelim();
    }
    if (message.proof.length !== 0) {
      writer.uint32(18).bytes(message.proof);
    }
    if (message.proofHeight !== undefined) {
      Height.encode(message.proofHeight, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryConnectionResponse {
    return {
      connection: isSet(object.connection) ? ConnectionEnd.fromJSON(object.connection) : undefined,
      proof: isSet(object.proof) ? bytesFromBase64(object.proof) : new Uint8Array(),
      proofHeight: isSet(object.proofHeight) ? Height.fromJSON(object.proofHeight) : undefined
    };
  },
  fromPartial(object: Partial<QueryConnectionResponse>): QueryConnectionResponse {
    const message = createBaseQueryConnectionResponse();
    message.connection = object.connection !== undefined && object.connection !== null ? ConnectionEnd.fromPartial(object.connection) : undefined;
    message.proof = object.proof ?? new Uint8Array();
    message.proofHeight = object.proofHeight !== undefined && object.proofHeight !== null ? Height.fromPartial(object.proofHeight) : undefined;
    return message;
  },
  fromAmino(object: QueryConnectionResponseAmino): QueryConnectionResponse {
    return {
      connection: object?.connection ? ConnectionEnd.fromAmino(object.connection) : undefined,
      proof: object.proof,
      proofHeight: object?.proof_height ? Height.fromAmino(object.proof_height) : undefined
    };
  },
  toAmino(message: QueryConnectionResponse): QueryConnectionResponseAmino {
    const obj: any = {};
    obj.connection = message.connection ? ConnectionEnd.toAmino(message.connection) : undefined;
    obj.proof = message.proof;
    obj.proof_height = message.proofHeight ? Height.toAmino(message.proofHeight) : {};
    return obj;
  },
  fromAminoMsg(object: QueryConnectionResponseAminoMsg): QueryConnectionResponse {
    return QueryConnectionResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryConnectionResponse): QueryConnectionResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryConnectionResponse",
      value: QueryConnectionResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryConnectionResponseProtoMsg): QueryConnectionResponse {
    return QueryConnectionResponse.decode(message.value);
  },
  toProto(message: QueryConnectionResponse): Uint8Array {
    return QueryConnectionResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryConnectionResponse): QueryConnectionResponseProtoMsg {
    return {
      typeUrl: "/ibc.core.connection.v1.QueryConnectionResponse",
      value: QueryConnectionResponse.encode(message).finish()
    };
  }
};
function createBaseQueryConnectionsRequest(): QueryConnectionsRequest {
  return {
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryConnectionsRequest = {
  typeUrl: "/ibc.core.connection.v1.QueryConnectionsRequest",
  encode(message: QueryConnectionsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryConnectionsRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryConnectionsRequest>): QueryConnectionsRequest {
    const message = createBaseQueryConnectionsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryConnectionsRequestAmino): QueryConnectionsRequest {
    return {
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryConnectionsRequest): QueryConnectionsRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryConnectionsRequestAminoMsg): QueryConnectionsRequest {
    return QueryConnectionsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryConnectionsRequest): QueryConnectionsRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryConnectionsRequest",
      value: QueryConnectionsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryConnectionsRequestProtoMsg): QueryConnectionsRequest {
    return QueryConnectionsRequest.decode(message.value);
  },
  toProto(message: QueryConnectionsRequest): Uint8Array {
    return QueryConnectionsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryConnectionsRequest): QueryConnectionsRequestProtoMsg {
    return {
      typeUrl: "/ibc.core.connection.v1.QueryConnectionsRequest",
      value: QueryConnectionsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryConnectionsResponse(): QueryConnectionsResponse {
  return {
    connections: [],
    pagination: PageResponse.fromPartial({}),
    height: Height.fromPartial({})
  };
}
export const QueryConnectionsResponse = {
  typeUrl: "/ibc.core.connection.v1.QueryConnectionsResponse",
  encode(message: QueryConnectionsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.connections) {
      IdentifiedConnection.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    if (message.height !== undefined) {
      Height.encode(message.height, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryConnectionsResponse {
    return {
      connections: Array.isArray(object?.connections) ? object.connections.map((e: any) => IdentifiedConnection.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
      height: isSet(object.height) ? Height.fromJSON(object.height) : undefined
    };
  },
  fromPartial(object: Partial<QueryConnectionsResponse>): QueryConnectionsResponse {
    const message = createBaseQueryConnectionsResponse();
    message.connections = object.connections?.map(e => IdentifiedConnection.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    message.height = object.height !== undefined && object.height !== null ? Height.fromPartial(object.height) : undefined;
    return message;
  },
  fromAmino(object: QueryConnectionsResponseAmino): QueryConnectionsResponse {
    return {
      connections: Array.isArray(object?.connections) ? object.connections.map((e: any) => IdentifiedConnection.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined,
      height: object?.height ? Height.fromAmino(object.height) : undefined
    };
  },
  toAmino(message: QueryConnectionsResponse): QueryConnectionsResponseAmino {
    const obj: any = {};
    if (message.connections) {
      obj.connections = message.connections.map(e => e ? IdentifiedConnection.toAmino(e) : undefined);
    } else {
      obj.connections = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    obj.height = message.height ? Height.toAmino(message.height) : {};
    return obj;
  },
  fromAminoMsg(object: QueryConnectionsResponseAminoMsg): QueryConnectionsResponse {
    return QueryConnectionsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryConnectionsResponse): QueryConnectionsResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryConnectionsResponse",
      value: QueryConnectionsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryConnectionsResponseProtoMsg): QueryConnectionsResponse {
    return QueryConnectionsResponse.decode(message.value);
  },
  toProto(message: QueryConnectionsResponse): Uint8Array {
    return QueryConnectionsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryConnectionsResponse): QueryConnectionsResponseProtoMsg {
    return {
      typeUrl: "/ibc.core.connection.v1.QueryConnectionsResponse",
      value: QueryConnectionsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryClientConnectionsRequest(): QueryClientConnectionsRequest {
  return {
    clientId: ""
  };
}
export const QueryClientConnectionsRequest = {
  typeUrl: "/ibc.core.connection.v1.QueryClientConnectionsRequest",
  encode(message: QueryClientConnectionsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    return writer;
  },
  fromJSON(object: any): QueryClientConnectionsRequest {
    return {
      clientId: isSet(object.clientId) ? String(object.clientId) : ""
    };
  },
  fromPartial(object: Partial<QueryClientConnectionsRequest>): QueryClientConnectionsRequest {
    const message = createBaseQueryClientConnectionsRequest();
    message.clientId = object.clientId ?? "";
    return message;
  },
  fromAmino(object: QueryClientConnectionsRequestAmino): QueryClientConnectionsRequest {
    return {
      clientId: object.client_id
    };
  },
  toAmino(message: QueryClientConnectionsRequest): QueryClientConnectionsRequestAmino {
    const obj: any = {};
    obj.client_id = message.clientId;
    return obj;
  },
  fromAminoMsg(object: QueryClientConnectionsRequestAminoMsg): QueryClientConnectionsRequest {
    return QueryClientConnectionsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryClientConnectionsRequest): QueryClientConnectionsRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryClientConnectionsRequest",
      value: QueryClientConnectionsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryClientConnectionsRequestProtoMsg): QueryClientConnectionsRequest {
    return QueryClientConnectionsRequest.decode(message.value);
  },
  toProto(message: QueryClientConnectionsRequest): Uint8Array {
    return QueryClientConnectionsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryClientConnectionsRequest): QueryClientConnectionsRequestProtoMsg {
    return {
      typeUrl: "/ibc.core.connection.v1.QueryClientConnectionsRequest",
      value: QueryClientConnectionsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryClientConnectionsResponse(): QueryClientConnectionsResponse {
  return {
    connectionPaths: [],
    proof: new Uint8Array(),
    proofHeight: Height.fromPartial({})
  };
}
export const QueryClientConnectionsResponse = {
  typeUrl: "/ibc.core.connection.v1.QueryClientConnectionsResponse",
  encode(message: QueryClientConnectionsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.connectionPaths) {
      writer.uint32(10).string(v!);
    }
    if (message.proof.length !== 0) {
      writer.uint32(18).bytes(message.proof);
    }
    if (message.proofHeight !== undefined) {
      Height.encode(message.proofHeight, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryClientConnectionsResponse {
    return {
      connectionPaths: Array.isArray(object?.connectionPaths) ? object.connectionPaths.map((e: any) => String(e)) : [],
      proof: isSet(object.proof) ? bytesFromBase64(object.proof) : new Uint8Array(),
      proofHeight: isSet(object.proofHeight) ? Height.fromJSON(object.proofHeight) : undefined
    };
  },
  fromPartial(object: Partial<QueryClientConnectionsResponse>): QueryClientConnectionsResponse {
    const message = createBaseQueryClientConnectionsResponse();
    message.connectionPaths = object.connectionPaths?.map(e => e) || [];
    message.proof = object.proof ?? new Uint8Array();
    message.proofHeight = object.proofHeight !== undefined && object.proofHeight !== null ? Height.fromPartial(object.proofHeight) : undefined;
    return message;
  },
  fromAmino(object: QueryClientConnectionsResponseAmino): QueryClientConnectionsResponse {
    return {
      connectionPaths: Array.isArray(object?.connection_paths) ? object.connection_paths.map((e: any) => e) : [],
      proof: object.proof,
      proofHeight: object?.proof_height ? Height.fromAmino(object.proof_height) : undefined
    };
  },
  toAmino(message: QueryClientConnectionsResponse): QueryClientConnectionsResponseAmino {
    const obj: any = {};
    if (message.connectionPaths) {
      obj.connection_paths = message.connectionPaths.map(e => e);
    } else {
      obj.connection_paths = [];
    }
    obj.proof = message.proof;
    obj.proof_height = message.proofHeight ? Height.toAmino(message.proofHeight) : {};
    return obj;
  },
  fromAminoMsg(object: QueryClientConnectionsResponseAminoMsg): QueryClientConnectionsResponse {
    return QueryClientConnectionsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryClientConnectionsResponse): QueryClientConnectionsResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryClientConnectionsResponse",
      value: QueryClientConnectionsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryClientConnectionsResponseProtoMsg): QueryClientConnectionsResponse {
    return QueryClientConnectionsResponse.decode(message.value);
  },
  toProto(message: QueryClientConnectionsResponse): Uint8Array {
    return QueryClientConnectionsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryClientConnectionsResponse): QueryClientConnectionsResponseProtoMsg {
    return {
      typeUrl: "/ibc.core.connection.v1.QueryClientConnectionsResponse",
      value: QueryClientConnectionsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryConnectionClientStateRequest(): QueryConnectionClientStateRequest {
  return {
    connectionId: ""
  };
}
export const QueryConnectionClientStateRequest = {
  typeUrl: "/ibc.core.connection.v1.QueryConnectionClientStateRequest",
  encode(message: QueryConnectionClientStateRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.connectionId !== "") {
      writer.uint32(10).string(message.connectionId);
    }
    return writer;
  },
  fromJSON(object: any): QueryConnectionClientStateRequest {
    return {
      connectionId: isSet(object.connectionId) ? String(object.connectionId) : ""
    };
  },
  fromPartial(object: Partial<QueryConnectionClientStateRequest>): QueryConnectionClientStateRequest {
    const message = createBaseQueryConnectionClientStateRequest();
    message.connectionId = object.connectionId ?? "";
    return message;
  },
  fromAmino(object: QueryConnectionClientStateRequestAmino): QueryConnectionClientStateRequest {
    return {
      connectionId: object.connection_id
    };
  },
  toAmino(message: QueryConnectionClientStateRequest): QueryConnectionClientStateRequestAmino {
    const obj: any = {};
    obj.connection_id = message.connectionId;
    return obj;
  },
  fromAminoMsg(object: QueryConnectionClientStateRequestAminoMsg): QueryConnectionClientStateRequest {
    return QueryConnectionClientStateRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryConnectionClientStateRequest): QueryConnectionClientStateRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryConnectionClientStateRequest",
      value: QueryConnectionClientStateRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryConnectionClientStateRequestProtoMsg): QueryConnectionClientStateRequest {
    return QueryConnectionClientStateRequest.decode(message.value);
  },
  toProto(message: QueryConnectionClientStateRequest): Uint8Array {
    return QueryConnectionClientStateRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryConnectionClientStateRequest): QueryConnectionClientStateRequestProtoMsg {
    return {
      typeUrl: "/ibc.core.connection.v1.QueryConnectionClientStateRequest",
      value: QueryConnectionClientStateRequest.encode(message).finish()
    };
  }
};
function createBaseQueryConnectionClientStateResponse(): QueryConnectionClientStateResponse {
  return {
    identifiedClientState: IdentifiedClientState.fromPartial({}),
    proof: new Uint8Array(),
    proofHeight: Height.fromPartial({})
  };
}
export const QueryConnectionClientStateResponse = {
  typeUrl: "/ibc.core.connection.v1.QueryConnectionClientStateResponse",
  encode(message: QueryConnectionClientStateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.identifiedClientState !== undefined) {
      IdentifiedClientState.encode(message.identifiedClientState, writer.uint32(10).fork()).ldelim();
    }
    if (message.proof.length !== 0) {
      writer.uint32(18).bytes(message.proof);
    }
    if (message.proofHeight !== undefined) {
      Height.encode(message.proofHeight, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryConnectionClientStateResponse {
    return {
      identifiedClientState: isSet(object.identifiedClientState) ? IdentifiedClientState.fromJSON(object.identifiedClientState) : undefined,
      proof: isSet(object.proof) ? bytesFromBase64(object.proof) : new Uint8Array(),
      proofHeight: isSet(object.proofHeight) ? Height.fromJSON(object.proofHeight) : undefined
    };
  },
  fromPartial(object: Partial<QueryConnectionClientStateResponse>): QueryConnectionClientStateResponse {
    const message = createBaseQueryConnectionClientStateResponse();
    message.identifiedClientState = object.identifiedClientState !== undefined && object.identifiedClientState !== null ? IdentifiedClientState.fromPartial(object.identifiedClientState) : undefined;
    message.proof = object.proof ?? new Uint8Array();
    message.proofHeight = object.proofHeight !== undefined && object.proofHeight !== null ? Height.fromPartial(object.proofHeight) : undefined;
    return message;
  },
  fromAmino(object: QueryConnectionClientStateResponseAmino): QueryConnectionClientStateResponse {
    return {
      identifiedClientState: object?.identified_client_state ? IdentifiedClientState.fromAmino(object.identified_client_state) : undefined,
      proof: object.proof,
      proofHeight: object?.proof_height ? Height.fromAmino(object.proof_height) : undefined
    };
  },
  toAmino(message: QueryConnectionClientStateResponse): QueryConnectionClientStateResponseAmino {
    const obj: any = {};
    obj.identified_client_state = message.identifiedClientState ? IdentifiedClientState.toAmino(message.identifiedClientState) : undefined;
    obj.proof = message.proof;
    obj.proof_height = message.proofHeight ? Height.toAmino(message.proofHeight) : {};
    return obj;
  },
  fromAminoMsg(object: QueryConnectionClientStateResponseAminoMsg): QueryConnectionClientStateResponse {
    return QueryConnectionClientStateResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryConnectionClientStateResponse): QueryConnectionClientStateResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryConnectionClientStateResponse",
      value: QueryConnectionClientStateResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryConnectionClientStateResponseProtoMsg): QueryConnectionClientStateResponse {
    return QueryConnectionClientStateResponse.decode(message.value);
  },
  toProto(message: QueryConnectionClientStateResponse): Uint8Array {
    return QueryConnectionClientStateResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryConnectionClientStateResponse): QueryConnectionClientStateResponseProtoMsg {
    return {
      typeUrl: "/ibc.core.connection.v1.QueryConnectionClientStateResponse",
      value: QueryConnectionClientStateResponse.encode(message).finish()
    };
  }
};
function createBaseQueryConnectionConsensusStateRequest(): QueryConnectionConsensusStateRequest {
  return {
    connectionId: "",
    revisionNumber: BigInt(0),
    revisionHeight: BigInt(0)
  };
}
export const QueryConnectionConsensusStateRequest = {
  typeUrl: "/ibc.core.connection.v1.QueryConnectionConsensusStateRequest",
  encode(message: QueryConnectionConsensusStateRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.connectionId !== "") {
      writer.uint32(10).string(message.connectionId);
    }
    if (message.revisionNumber !== BigInt(0)) {
      writer.uint32(16).uint64(message.revisionNumber);
    }
    if (message.revisionHeight !== BigInt(0)) {
      writer.uint32(24).uint64(message.revisionHeight);
    }
    return writer;
  },
  fromJSON(object: any): QueryConnectionConsensusStateRequest {
    return {
      connectionId: isSet(object.connectionId) ? String(object.connectionId) : "",
      revisionNumber: isSet(object.revisionNumber) ? BigInt(object.revisionNumber.toString()) : BigInt(0),
      revisionHeight: isSet(object.revisionHeight) ? BigInt(object.revisionHeight.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<QueryConnectionConsensusStateRequest>): QueryConnectionConsensusStateRequest {
    const message = createBaseQueryConnectionConsensusStateRequest();
    message.connectionId = object.connectionId ?? "";
    message.revisionNumber = object.revisionNumber !== undefined && object.revisionNumber !== null ? BigInt(object.revisionNumber.toString()) : BigInt(0);
    message.revisionHeight = object.revisionHeight !== undefined && object.revisionHeight !== null ? BigInt(object.revisionHeight.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryConnectionConsensusStateRequestAmino): QueryConnectionConsensusStateRequest {
    return {
      connectionId: object.connection_id,
      revisionNumber: BigInt(object.revision_number),
      revisionHeight: BigInt(object.revision_height)
    };
  },
  toAmino(message: QueryConnectionConsensusStateRequest): QueryConnectionConsensusStateRequestAmino {
    const obj: any = {};
    obj.connection_id = message.connectionId;
    obj.revision_number = message.revisionNumber ? message.revisionNumber.toString() : undefined;
    obj.revision_height = message.revisionHeight ? message.revisionHeight.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryConnectionConsensusStateRequestAminoMsg): QueryConnectionConsensusStateRequest {
    return QueryConnectionConsensusStateRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryConnectionConsensusStateRequest): QueryConnectionConsensusStateRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryConnectionConsensusStateRequest",
      value: QueryConnectionConsensusStateRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryConnectionConsensusStateRequestProtoMsg): QueryConnectionConsensusStateRequest {
    return QueryConnectionConsensusStateRequest.decode(message.value);
  },
  toProto(message: QueryConnectionConsensusStateRequest): Uint8Array {
    return QueryConnectionConsensusStateRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryConnectionConsensusStateRequest): QueryConnectionConsensusStateRequestProtoMsg {
    return {
      typeUrl: "/ibc.core.connection.v1.QueryConnectionConsensusStateRequest",
      value: QueryConnectionConsensusStateRequest.encode(message).finish()
    };
  }
};
function createBaseQueryConnectionConsensusStateResponse(): QueryConnectionConsensusStateResponse {
  return {
    consensusState: Any.fromPartial({}),
    clientId: "",
    proof: new Uint8Array(),
    proofHeight: Height.fromPartial({})
  };
}
export const QueryConnectionConsensusStateResponse = {
  typeUrl: "/ibc.core.connection.v1.QueryConnectionConsensusStateResponse",
  encode(message: QueryConnectionConsensusStateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.consensusState !== undefined) {
      Any.encode(message.consensusState, writer.uint32(10).fork()).ldelim();
    }
    if (message.clientId !== "") {
      writer.uint32(18).string(message.clientId);
    }
    if (message.proof.length !== 0) {
      writer.uint32(26).bytes(message.proof);
    }
    if (message.proofHeight !== undefined) {
      Height.encode(message.proofHeight, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryConnectionConsensusStateResponse {
    return {
      consensusState: isSet(object.consensusState) ? Any.fromJSON(object.consensusState) : undefined,
      clientId: isSet(object.clientId) ? String(object.clientId) : "",
      proof: isSet(object.proof) ? bytesFromBase64(object.proof) : new Uint8Array(),
      proofHeight: isSet(object.proofHeight) ? Height.fromJSON(object.proofHeight) : undefined
    };
  },
  fromPartial(object: Partial<QueryConnectionConsensusStateResponse>): QueryConnectionConsensusStateResponse {
    const message = createBaseQueryConnectionConsensusStateResponse();
    message.consensusState = object.consensusState !== undefined && object.consensusState !== null ? Any.fromPartial(object.consensusState) : undefined;
    message.clientId = object.clientId ?? "";
    message.proof = object.proof ?? new Uint8Array();
    message.proofHeight = object.proofHeight !== undefined && object.proofHeight !== null ? Height.fromPartial(object.proofHeight) : undefined;
    return message;
  },
  fromAmino(object: QueryConnectionConsensusStateResponseAmino): QueryConnectionConsensusStateResponse {
    return {
      consensusState: object?.consensus_state ? Any.fromAmino(object.consensus_state) : undefined,
      clientId: object.client_id,
      proof: object.proof,
      proofHeight: object?.proof_height ? Height.fromAmino(object.proof_height) : undefined
    };
  },
  toAmino(message: QueryConnectionConsensusStateResponse): QueryConnectionConsensusStateResponseAmino {
    const obj: any = {};
    obj.consensus_state = message.consensusState ? Any.toAmino(message.consensusState) : undefined;
    obj.client_id = message.clientId;
    obj.proof = message.proof;
    obj.proof_height = message.proofHeight ? Height.toAmino(message.proofHeight) : {};
    return obj;
  },
  fromAminoMsg(object: QueryConnectionConsensusStateResponseAminoMsg): QueryConnectionConsensusStateResponse {
    return QueryConnectionConsensusStateResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryConnectionConsensusStateResponse): QueryConnectionConsensusStateResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryConnectionConsensusStateResponse",
      value: QueryConnectionConsensusStateResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryConnectionConsensusStateResponseProtoMsg): QueryConnectionConsensusStateResponse {
    return QueryConnectionConsensusStateResponse.decode(message.value);
  },
  toProto(message: QueryConnectionConsensusStateResponse): Uint8Array {
    return QueryConnectionConsensusStateResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryConnectionConsensusStateResponse): QueryConnectionConsensusStateResponseProtoMsg {
    return {
      typeUrl: "/ibc.core.connection.v1.QueryConnectionConsensusStateResponse",
      value: QueryConnectionConsensusStateResponse.encode(message).finish()
    };
  }
};