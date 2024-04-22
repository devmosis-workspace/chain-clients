import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../../cosmos/base/query/v1beta1/pagination";
import { ConnectionEnd, ConnectionEndAmino, ConnectionEndSDKType, IdentifiedConnection, IdentifiedConnectionAmino, IdentifiedConnectionSDKType } from "./connection";
import { Height, HeightAmino, HeightSDKType, IdentifiedClientState, IdentifiedClientStateAmino, IdentifiedClientStateSDKType } from "../../client/v1/client";
import { Any, AnyAmino, AnySDKType } from "../../../../google/protobuf/any";
import { BinaryWriter } from "../../../../binary";
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
    connection_id?: string;
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
    connection?: ConnectionEnd;
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
    proof?: string;
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
    connection?: ConnectionEndSDKType;
    proof: Uint8Array;
    proof_height: HeightSDKType;
}
/**
 * QueryConnectionsRequest is the request type for the Query/Connections RPC
 * method
 */
export interface QueryConnectionsRequest {
    pagination?: PageRequest;
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
    pagination?: PageRequestSDKType;
}
/**
 * QueryConnectionsResponse is the response type for the Query/Connections RPC
 * method.
 */
export interface QueryConnectionsResponse {
    /** list of stored connections of the chain. */
    connections: IdentifiedConnection[];
    /** pagination response */
    pagination?: PageResponse;
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
    connections?: IdentifiedConnectionAmino[];
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
    pagination?: PageResponseSDKType;
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
    client_id?: string;
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
    connection_paths?: string[];
    /** merkle proof of existence */
    proof?: string;
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
    connection_id?: string;
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
    identifiedClientState?: IdentifiedClientState;
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
    proof?: string;
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
    identified_client_state?: IdentifiedClientStateSDKType;
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
    connection_id?: string;
    revision_number?: string;
    revision_height?: string;
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
    consensusState?: Any;
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
    client_id?: string;
    /** merkle proof of existence */
    proof?: string;
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
    consensus_state?: AnySDKType;
    client_id: string;
    proof: Uint8Array;
    proof_height: HeightSDKType;
}
export declare const QueryConnectionRequest: {
    typeUrl: string;
    encode(message: QueryConnectionRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryConnectionRequest;
    fromPartial(object: Partial<QueryConnectionRequest>): QueryConnectionRequest;
    fromAmino(object: QueryConnectionRequestAmino): QueryConnectionRequest;
    toAmino(message: QueryConnectionRequest): QueryConnectionRequestAmino;
    fromAminoMsg(object: QueryConnectionRequestAminoMsg): QueryConnectionRequest;
    toAminoMsg(message: QueryConnectionRequest): QueryConnectionRequestAminoMsg;
    fromProtoMsg(message: QueryConnectionRequestProtoMsg): QueryConnectionRequest;
    toProto(message: QueryConnectionRequest): Uint8Array;
    toProtoMsg(message: QueryConnectionRequest): QueryConnectionRequestProtoMsg;
};
export declare const QueryConnectionResponse: {
    typeUrl: string;
    encode(message: QueryConnectionResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryConnectionResponse;
    fromPartial(object: Partial<QueryConnectionResponse>): QueryConnectionResponse;
    fromAmino(object: QueryConnectionResponseAmino): QueryConnectionResponse;
    toAmino(message: QueryConnectionResponse): QueryConnectionResponseAmino;
    fromAminoMsg(object: QueryConnectionResponseAminoMsg): QueryConnectionResponse;
    toAminoMsg(message: QueryConnectionResponse): QueryConnectionResponseAminoMsg;
    fromProtoMsg(message: QueryConnectionResponseProtoMsg): QueryConnectionResponse;
    toProto(message: QueryConnectionResponse): Uint8Array;
    toProtoMsg(message: QueryConnectionResponse): QueryConnectionResponseProtoMsg;
};
export declare const QueryConnectionsRequest: {
    typeUrl: string;
    encode(message: QueryConnectionsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryConnectionsRequest;
    fromPartial(object: Partial<QueryConnectionsRequest>): QueryConnectionsRequest;
    fromAmino(object: QueryConnectionsRequestAmino): QueryConnectionsRequest;
    toAmino(message: QueryConnectionsRequest): QueryConnectionsRequestAmino;
    fromAminoMsg(object: QueryConnectionsRequestAminoMsg): QueryConnectionsRequest;
    toAminoMsg(message: QueryConnectionsRequest): QueryConnectionsRequestAminoMsg;
    fromProtoMsg(message: QueryConnectionsRequestProtoMsg): QueryConnectionsRequest;
    toProto(message: QueryConnectionsRequest): Uint8Array;
    toProtoMsg(message: QueryConnectionsRequest): QueryConnectionsRequestProtoMsg;
};
export declare const QueryConnectionsResponse: {
    typeUrl: string;
    encode(message: QueryConnectionsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryConnectionsResponse;
    fromPartial(object: Partial<QueryConnectionsResponse>): QueryConnectionsResponse;
    fromAmino(object: QueryConnectionsResponseAmino): QueryConnectionsResponse;
    toAmino(message: QueryConnectionsResponse): QueryConnectionsResponseAmino;
    fromAminoMsg(object: QueryConnectionsResponseAminoMsg): QueryConnectionsResponse;
    toAminoMsg(message: QueryConnectionsResponse): QueryConnectionsResponseAminoMsg;
    fromProtoMsg(message: QueryConnectionsResponseProtoMsg): QueryConnectionsResponse;
    toProto(message: QueryConnectionsResponse): Uint8Array;
    toProtoMsg(message: QueryConnectionsResponse): QueryConnectionsResponseProtoMsg;
};
export declare const QueryClientConnectionsRequest: {
    typeUrl: string;
    encode(message: QueryClientConnectionsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryClientConnectionsRequest;
    fromPartial(object: Partial<QueryClientConnectionsRequest>): QueryClientConnectionsRequest;
    fromAmino(object: QueryClientConnectionsRequestAmino): QueryClientConnectionsRequest;
    toAmino(message: QueryClientConnectionsRequest): QueryClientConnectionsRequestAmino;
    fromAminoMsg(object: QueryClientConnectionsRequestAminoMsg): QueryClientConnectionsRequest;
    toAminoMsg(message: QueryClientConnectionsRequest): QueryClientConnectionsRequestAminoMsg;
    fromProtoMsg(message: QueryClientConnectionsRequestProtoMsg): QueryClientConnectionsRequest;
    toProto(message: QueryClientConnectionsRequest): Uint8Array;
    toProtoMsg(message: QueryClientConnectionsRequest): QueryClientConnectionsRequestProtoMsg;
};
export declare const QueryClientConnectionsResponse: {
    typeUrl: string;
    encode(message: QueryClientConnectionsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryClientConnectionsResponse;
    fromPartial(object: Partial<QueryClientConnectionsResponse>): QueryClientConnectionsResponse;
    fromAmino(object: QueryClientConnectionsResponseAmino): QueryClientConnectionsResponse;
    toAmino(message: QueryClientConnectionsResponse): QueryClientConnectionsResponseAmino;
    fromAminoMsg(object: QueryClientConnectionsResponseAminoMsg): QueryClientConnectionsResponse;
    toAminoMsg(message: QueryClientConnectionsResponse): QueryClientConnectionsResponseAminoMsg;
    fromProtoMsg(message: QueryClientConnectionsResponseProtoMsg): QueryClientConnectionsResponse;
    toProto(message: QueryClientConnectionsResponse): Uint8Array;
    toProtoMsg(message: QueryClientConnectionsResponse): QueryClientConnectionsResponseProtoMsg;
};
export declare const QueryConnectionClientStateRequest: {
    typeUrl: string;
    encode(message: QueryConnectionClientStateRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryConnectionClientStateRequest;
    fromPartial(object: Partial<QueryConnectionClientStateRequest>): QueryConnectionClientStateRequest;
    fromAmino(object: QueryConnectionClientStateRequestAmino): QueryConnectionClientStateRequest;
    toAmino(message: QueryConnectionClientStateRequest): QueryConnectionClientStateRequestAmino;
    fromAminoMsg(object: QueryConnectionClientStateRequestAminoMsg): QueryConnectionClientStateRequest;
    toAminoMsg(message: QueryConnectionClientStateRequest): QueryConnectionClientStateRequestAminoMsg;
    fromProtoMsg(message: QueryConnectionClientStateRequestProtoMsg): QueryConnectionClientStateRequest;
    toProto(message: QueryConnectionClientStateRequest): Uint8Array;
    toProtoMsg(message: QueryConnectionClientStateRequest): QueryConnectionClientStateRequestProtoMsg;
};
export declare const QueryConnectionClientStateResponse: {
    typeUrl: string;
    encode(message: QueryConnectionClientStateResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryConnectionClientStateResponse;
    fromPartial(object: Partial<QueryConnectionClientStateResponse>): QueryConnectionClientStateResponse;
    fromAmino(object: QueryConnectionClientStateResponseAmino): QueryConnectionClientStateResponse;
    toAmino(message: QueryConnectionClientStateResponse): QueryConnectionClientStateResponseAmino;
    fromAminoMsg(object: QueryConnectionClientStateResponseAminoMsg): QueryConnectionClientStateResponse;
    toAminoMsg(message: QueryConnectionClientStateResponse): QueryConnectionClientStateResponseAminoMsg;
    fromProtoMsg(message: QueryConnectionClientStateResponseProtoMsg): QueryConnectionClientStateResponse;
    toProto(message: QueryConnectionClientStateResponse): Uint8Array;
    toProtoMsg(message: QueryConnectionClientStateResponse): QueryConnectionClientStateResponseProtoMsg;
};
export declare const QueryConnectionConsensusStateRequest: {
    typeUrl: string;
    encode(message: QueryConnectionConsensusStateRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryConnectionConsensusStateRequest;
    fromPartial(object: Partial<QueryConnectionConsensusStateRequest>): QueryConnectionConsensusStateRequest;
    fromAmino(object: QueryConnectionConsensusStateRequestAmino): QueryConnectionConsensusStateRequest;
    toAmino(message: QueryConnectionConsensusStateRequest): QueryConnectionConsensusStateRequestAmino;
    fromAminoMsg(object: QueryConnectionConsensusStateRequestAminoMsg): QueryConnectionConsensusStateRequest;
    toAminoMsg(message: QueryConnectionConsensusStateRequest): QueryConnectionConsensusStateRequestAminoMsg;
    fromProtoMsg(message: QueryConnectionConsensusStateRequestProtoMsg): QueryConnectionConsensusStateRequest;
    toProto(message: QueryConnectionConsensusStateRequest): Uint8Array;
    toProtoMsg(message: QueryConnectionConsensusStateRequest): QueryConnectionConsensusStateRequestProtoMsg;
};
export declare const QueryConnectionConsensusStateResponse: {
    typeUrl: string;
    encode(message: QueryConnectionConsensusStateResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryConnectionConsensusStateResponse;
    fromPartial(object: Partial<QueryConnectionConsensusStateResponse>): QueryConnectionConsensusStateResponse;
    fromAmino(object: QueryConnectionConsensusStateResponseAmino): QueryConnectionConsensusStateResponse;
    toAmino(message: QueryConnectionConsensusStateResponse): QueryConnectionConsensusStateResponseAmino;
    fromAminoMsg(object: QueryConnectionConsensusStateResponseAminoMsg): QueryConnectionConsensusStateResponse;
    toAminoMsg(message: QueryConnectionConsensusStateResponse): QueryConnectionConsensusStateResponseAminoMsg;
    fromProtoMsg(message: QueryConnectionConsensusStateResponseProtoMsg): QueryConnectionConsensusStateResponse;
    toProto(message: QueryConnectionConsensusStateResponse): Uint8Array;
    toProtoMsg(message: QueryConnectionConsensusStateResponse): QueryConnectionConsensusStateResponseProtoMsg;
};
