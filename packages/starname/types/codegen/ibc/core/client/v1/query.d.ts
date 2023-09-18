import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../../cosmos/base/query/v1beta1/pagination";
import { Any, AnyAmino, AnySDKType } from "../../../../google/protobuf/any";
import { Height, HeightAmino, HeightSDKType, IdentifiedClientState, IdentifiedClientStateAmino, IdentifiedClientStateSDKType, ConsensusStateWithHeight, ConsensusStateWithHeightAmino, ConsensusStateWithHeightSDKType, Params, ParamsAmino, ParamsSDKType } from "./client";
import { BinaryWriter } from "../../../../binary";
/**
 * QueryClientStateRequest is the request type for the Query/ClientState RPC
 * method
 */
export interface QueryClientStateRequest {
    /** client state unique identifier */
    clientId: string;
}
export interface QueryClientStateRequestProtoMsg {
    typeUrl: "/ibc.core.client.v1.QueryClientStateRequest";
    value: Uint8Array;
}
/**
 * QueryClientStateRequest is the request type for the Query/ClientState RPC
 * method
 */
export interface QueryClientStateRequestAmino {
    /** client state unique identifier */
    client_id: string;
}
export interface QueryClientStateRequestAminoMsg {
    type: "cosmos-sdk/QueryClientStateRequest";
    value: QueryClientStateRequestAmino;
}
/**
 * QueryClientStateRequest is the request type for the Query/ClientState RPC
 * method
 */
export interface QueryClientStateRequestSDKType {
    client_id: string;
}
/**
 * QueryClientStateResponse is the response type for the Query/ClientState RPC
 * method. Besides the client state, it includes a proof and the height from
 * which the proof was retrieved.
 */
export interface QueryClientStateResponse {
    /** client state associated with the request identifier */
    clientState: Any;
    /** merkle proof of existence */
    proof: Uint8Array;
    /** height at which the proof was retrieved */
    proofHeight: Height;
}
export interface QueryClientStateResponseProtoMsg {
    typeUrl: "/ibc.core.client.v1.QueryClientStateResponse";
    value: Uint8Array;
}
/**
 * QueryClientStateResponse is the response type for the Query/ClientState RPC
 * method. Besides the client state, it includes a proof and the height from
 * which the proof was retrieved.
 */
export interface QueryClientStateResponseAmino {
    /** client state associated with the request identifier */
    client_state?: AnyAmino;
    /** merkle proof of existence */
    proof: Uint8Array;
    /** height at which the proof was retrieved */
    proof_height?: HeightAmino;
}
export interface QueryClientStateResponseAminoMsg {
    type: "cosmos-sdk/QueryClientStateResponse";
    value: QueryClientStateResponseAmino;
}
/**
 * QueryClientStateResponse is the response type for the Query/ClientState RPC
 * method. Besides the client state, it includes a proof and the height from
 * which the proof was retrieved.
 */
export interface QueryClientStateResponseSDKType {
    client_state: AnySDKType;
    proof: Uint8Array;
    proof_height: HeightSDKType;
}
/**
 * QueryClientStatesRequest is the request type for the Query/ClientStates RPC
 * method
 */
export interface QueryClientStatesRequest {
    /** pagination request */
    pagination: PageRequest;
}
export interface QueryClientStatesRequestProtoMsg {
    typeUrl: "/ibc.core.client.v1.QueryClientStatesRequest";
    value: Uint8Array;
}
/**
 * QueryClientStatesRequest is the request type for the Query/ClientStates RPC
 * method
 */
export interface QueryClientStatesRequestAmino {
    /** pagination request */
    pagination?: PageRequestAmino;
}
export interface QueryClientStatesRequestAminoMsg {
    type: "cosmos-sdk/QueryClientStatesRequest";
    value: QueryClientStatesRequestAmino;
}
/**
 * QueryClientStatesRequest is the request type for the Query/ClientStates RPC
 * method
 */
export interface QueryClientStatesRequestSDKType {
    pagination: PageRequestSDKType;
}
/**
 * QueryClientStatesResponse is the response type for the Query/ClientStates RPC
 * method.
 */
export interface QueryClientStatesResponse {
    /** list of stored ClientStates of the chain. */
    clientStates: IdentifiedClientState[];
    /** pagination response */
    pagination: PageResponse;
}
export interface QueryClientStatesResponseProtoMsg {
    typeUrl: "/ibc.core.client.v1.QueryClientStatesResponse";
    value: Uint8Array;
}
/**
 * QueryClientStatesResponse is the response type for the Query/ClientStates RPC
 * method.
 */
export interface QueryClientStatesResponseAmino {
    /** list of stored ClientStates of the chain. */
    client_states: IdentifiedClientStateAmino[];
    /** pagination response */
    pagination?: PageResponseAmino;
}
export interface QueryClientStatesResponseAminoMsg {
    type: "cosmos-sdk/QueryClientStatesResponse";
    value: QueryClientStatesResponseAmino;
}
/**
 * QueryClientStatesResponse is the response type for the Query/ClientStates RPC
 * method.
 */
export interface QueryClientStatesResponseSDKType {
    client_states: IdentifiedClientStateSDKType[];
    pagination: PageResponseSDKType;
}
/**
 * QueryConsensusStateRequest is the request type for the Query/ConsensusState
 * RPC method. Besides the consensus state, it includes a proof and the height
 * from which the proof was retrieved.
 */
export interface QueryConsensusStateRequest {
    /** client identifier */
    clientId: string;
    /** consensus state revision number */
    revisionNumber: bigint;
    /** consensus state revision height */
    revisionHeight: bigint;
    /**
     * latest_height overrrides the height field and queries the latest stored
     * ConsensusState
     */
    latestHeight: boolean;
}
export interface QueryConsensusStateRequestProtoMsg {
    typeUrl: "/ibc.core.client.v1.QueryConsensusStateRequest";
    value: Uint8Array;
}
/**
 * QueryConsensusStateRequest is the request type for the Query/ConsensusState
 * RPC method. Besides the consensus state, it includes a proof and the height
 * from which the proof was retrieved.
 */
export interface QueryConsensusStateRequestAmino {
    /** client identifier */
    client_id: string;
    /** consensus state revision number */
    revision_number: string;
    /** consensus state revision height */
    revision_height: string;
    /**
     * latest_height overrrides the height field and queries the latest stored
     * ConsensusState
     */
    latest_height: boolean;
}
export interface QueryConsensusStateRequestAminoMsg {
    type: "cosmos-sdk/QueryConsensusStateRequest";
    value: QueryConsensusStateRequestAmino;
}
/**
 * QueryConsensusStateRequest is the request type for the Query/ConsensusState
 * RPC method. Besides the consensus state, it includes a proof and the height
 * from which the proof was retrieved.
 */
export interface QueryConsensusStateRequestSDKType {
    client_id: string;
    revision_number: bigint;
    revision_height: bigint;
    latest_height: boolean;
}
/**
 * QueryConsensusStateResponse is the response type for the Query/ConsensusState
 * RPC method
 */
export interface QueryConsensusStateResponse {
    /** consensus state associated with the client identifier at the given height */
    consensusState: Any;
    /** merkle proof of existence */
    proof: Uint8Array;
    /** height at which the proof was retrieved */
    proofHeight: Height;
}
export interface QueryConsensusStateResponseProtoMsg {
    typeUrl: "/ibc.core.client.v1.QueryConsensusStateResponse";
    value: Uint8Array;
}
/**
 * QueryConsensusStateResponse is the response type for the Query/ConsensusState
 * RPC method
 */
export interface QueryConsensusStateResponseAmino {
    /** consensus state associated with the client identifier at the given height */
    consensus_state?: AnyAmino;
    /** merkle proof of existence */
    proof: Uint8Array;
    /** height at which the proof was retrieved */
    proof_height?: HeightAmino;
}
export interface QueryConsensusStateResponseAminoMsg {
    type: "cosmos-sdk/QueryConsensusStateResponse";
    value: QueryConsensusStateResponseAmino;
}
/**
 * QueryConsensusStateResponse is the response type for the Query/ConsensusState
 * RPC method
 */
export interface QueryConsensusStateResponseSDKType {
    consensus_state: AnySDKType;
    proof: Uint8Array;
    proof_height: HeightSDKType;
}
/**
 * QueryConsensusStatesRequest is the request type for the Query/ConsensusStates
 * RPC method.
 */
export interface QueryConsensusStatesRequest {
    /** client identifier */
    clientId: string;
    /** pagination request */
    pagination: PageRequest;
}
export interface QueryConsensusStatesRequestProtoMsg {
    typeUrl: "/ibc.core.client.v1.QueryConsensusStatesRequest";
    value: Uint8Array;
}
/**
 * QueryConsensusStatesRequest is the request type for the Query/ConsensusStates
 * RPC method.
 */
export interface QueryConsensusStatesRequestAmino {
    /** client identifier */
    client_id: string;
    /** pagination request */
    pagination?: PageRequestAmino;
}
export interface QueryConsensusStatesRequestAminoMsg {
    type: "cosmos-sdk/QueryConsensusStatesRequest";
    value: QueryConsensusStatesRequestAmino;
}
/**
 * QueryConsensusStatesRequest is the request type for the Query/ConsensusStates
 * RPC method.
 */
export interface QueryConsensusStatesRequestSDKType {
    client_id: string;
    pagination: PageRequestSDKType;
}
/**
 * QueryConsensusStatesResponse is the response type for the
 * Query/ConsensusStates RPC method
 */
export interface QueryConsensusStatesResponse {
    /** consensus states associated with the identifier */
    consensusStates: ConsensusStateWithHeight[];
    /** pagination response */
    pagination: PageResponse;
}
export interface QueryConsensusStatesResponseProtoMsg {
    typeUrl: "/ibc.core.client.v1.QueryConsensusStatesResponse";
    value: Uint8Array;
}
/**
 * QueryConsensusStatesResponse is the response type for the
 * Query/ConsensusStates RPC method
 */
export interface QueryConsensusStatesResponseAmino {
    /** consensus states associated with the identifier */
    consensus_states: ConsensusStateWithHeightAmino[];
    /** pagination response */
    pagination?: PageResponseAmino;
}
export interface QueryConsensusStatesResponseAminoMsg {
    type: "cosmos-sdk/QueryConsensusStatesResponse";
    value: QueryConsensusStatesResponseAmino;
}
/**
 * QueryConsensusStatesResponse is the response type for the
 * Query/ConsensusStates RPC method
 */
export interface QueryConsensusStatesResponseSDKType {
    consensus_states: ConsensusStateWithHeightSDKType[];
    pagination: PageResponseSDKType;
}
/** QueryClientParamsRequest is the request type for the Query/ClientParams RPC method. */
export interface QueryClientParamsRequest {
}
export interface QueryClientParamsRequestProtoMsg {
    typeUrl: "/ibc.core.client.v1.QueryClientParamsRequest";
    value: Uint8Array;
}
/** QueryClientParamsRequest is the request type for the Query/ClientParams RPC method. */
export interface QueryClientParamsRequestAmino {
}
export interface QueryClientParamsRequestAminoMsg {
    type: "cosmos-sdk/QueryClientParamsRequest";
    value: QueryClientParamsRequestAmino;
}
/** QueryClientParamsRequest is the request type for the Query/ClientParams RPC method. */
export interface QueryClientParamsRequestSDKType {
}
/** QueryClientParamsResponse is the response type for the Query/ClientParams RPC method. */
export interface QueryClientParamsResponse {
    /** params defines the parameters of the module. */
    params: Params;
}
export interface QueryClientParamsResponseProtoMsg {
    typeUrl: "/ibc.core.client.v1.QueryClientParamsResponse";
    value: Uint8Array;
}
/** QueryClientParamsResponse is the response type for the Query/ClientParams RPC method. */
export interface QueryClientParamsResponseAmino {
    /** params defines the parameters of the module. */
    params?: ParamsAmino;
}
export interface QueryClientParamsResponseAminoMsg {
    type: "cosmos-sdk/QueryClientParamsResponse";
    value: QueryClientParamsResponseAmino;
}
/** QueryClientParamsResponse is the response type for the Query/ClientParams RPC method. */
export interface QueryClientParamsResponseSDKType {
    params: ParamsSDKType;
}
export declare const QueryClientStateRequest: {
    typeUrl: string;
    encode(message: QueryClientStateRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryClientStateRequest;
    fromPartial(object: Partial<QueryClientStateRequest>): QueryClientStateRequest;
    fromAmino(object: QueryClientStateRequestAmino): QueryClientStateRequest;
    toAmino(message: QueryClientStateRequest): QueryClientStateRequestAmino;
    fromAminoMsg(object: QueryClientStateRequestAminoMsg): QueryClientStateRequest;
    toAminoMsg(message: QueryClientStateRequest): QueryClientStateRequestAminoMsg;
    fromProtoMsg(message: QueryClientStateRequestProtoMsg): QueryClientStateRequest;
    toProto(message: QueryClientStateRequest): Uint8Array;
    toProtoMsg(message: QueryClientStateRequest): QueryClientStateRequestProtoMsg;
};
export declare const QueryClientStateResponse: {
    typeUrl: string;
    encode(message: QueryClientStateResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryClientStateResponse;
    fromPartial(object: Partial<QueryClientStateResponse>): QueryClientStateResponse;
    fromAmino(object: QueryClientStateResponseAmino): QueryClientStateResponse;
    toAmino(message: QueryClientStateResponse): QueryClientStateResponseAmino;
    fromAminoMsg(object: QueryClientStateResponseAminoMsg): QueryClientStateResponse;
    toAminoMsg(message: QueryClientStateResponse): QueryClientStateResponseAminoMsg;
    fromProtoMsg(message: QueryClientStateResponseProtoMsg): QueryClientStateResponse;
    toProto(message: QueryClientStateResponse): Uint8Array;
    toProtoMsg(message: QueryClientStateResponse): QueryClientStateResponseProtoMsg;
};
export declare const QueryClientStatesRequest: {
    typeUrl: string;
    encode(message: QueryClientStatesRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryClientStatesRequest;
    fromPartial(object: Partial<QueryClientStatesRequest>): QueryClientStatesRequest;
    fromAmino(object: QueryClientStatesRequestAmino): QueryClientStatesRequest;
    toAmino(message: QueryClientStatesRequest): QueryClientStatesRequestAmino;
    fromAminoMsg(object: QueryClientStatesRequestAminoMsg): QueryClientStatesRequest;
    toAminoMsg(message: QueryClientStatesRequest): QueryClientStatesRequestAminoMsg;
    fromProtoMsg(message: QueryClientStatesRequestProtoMsg): QueryClientStatesRequest;
    toProto(message: QueryClientStatesRequest): Uint8Array;
    toProtoMsg(message: QueryClientStatesRequest): QueryClientStatesRequestProtoMsg;
};
export declare const QueryClientStatesResponse: {
    typeUrl: string;
    encode(message: QueryClientStatesResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryClientStatesResponse;
    fromPartial(object: Partial<QueryClientStatesResponse>): QueryClientStatesResponse;
    fromAmino(object: QueryClientStatesResponseAmino): QueryClientStatesResponse;
    toAmino(message: QueryClientStatesResponse): QueryClientStatesResponseAmino;
    fromAminoMsg(object: QueryClientStatesResponseAminoMsg): QueryClientStatesResponse;
    toAminoMsg(message: QueryClientStatesResponse): QueryClientStatesResponseAminoMsg;
    fromProtoMsg(message: QueryClientStatesResponseProtoMsg): QueryClientStatesResponse;
    toProto(message: QueryClientStatesResponse): Uint8Array;
    toProtoMsg(message: QueryClientStatesResponse): QueryClientStatesResponseProtoMsg;
};
export declare const QueryConsensusStateRequest: {
    typeUrl: string;
    encode(message: QueryConsensusStateRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryConsensusStateRequest;
    fromPartial(object: Partial<QueryConsensusStateRequest>): QueryConsensusStateRequest;
    fromAmino(object: QueryConsensusStateRequestAmino): QueryConsensusStateRequest;
    toAmino(message: QueryConsensusStateRequest): QueryConsensusStateRequestAmino;
    fromAminoMsg(object: QueryConsensusStateRequestAminoMsg): QueryConsensusStateRequest;
    toAminoMsg(message: QueryConsensusStateRequest): QueryConsensusStateRequestAminoMsg;
    fromProtoMsg(message: QueryConsensusStateRequestProtoMsg): QueryConsensusStateRequest;
    toProto(message: QueryConsensusStateRequest): Uint8Array;
    toProtoMsg(message: QueryConsensusStateRequest): QueryConsensusStateRequestProtoMsg;
};
export declare const QueryConsensusStateResponse: {
    typeUrl: string;
    encode(message: QueryConsensusStateResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryConsensusStateResponse;
    fromPartial(object: Partial<QueryConsensusStateResponse>): QueryConsensusStateResponse;
    fromAmino(object: QueryConsensusStateResponseAmino): QueryConsensusStateResponse;
    toAmino(message: QueryConsensusStateResponse): QueryConsensusStateResponseAmino;
    fromAminoMsg(object: QueryConsensusStateResponseAminoMsg): QueryConsensusStateResponse;
    toAminoMsg(message: QueryConsensusStateResponse): QueryConsensusStateResponseAminoMsg;
    fromProtoMsg(message: QueryConsensusStateResponseProtoMsg): QueryConsensusStateResponse;
    toProto(message: QueryConsensusStateResponse): Uint8Array;
    toProtoMsg(message: QueryConsensusStateResponse): QueryConsensusStateResponseProtoMsg;
};
export declare const QueryConsensusStatesRequest: {
    typeUrl: string;
    encode(message: QueryConsensusStatesRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryConsensusStatesRequest;
    fromPartial(object: Partial<QueryConsensusStatesRequest>): QueryConsensusStatesRequest;
    fromAmino(object: QueryConsensusStatesRequestAmino): QueryConsensusStatesRequest;
    toAmino(message: QueryConsensusStatesRequest): QueryConsensusStatesRequestAmino;
    fromAminoMsg(object: QueryConsensusStatesRequestAminoMsg): QueryConsensusStatesRequest;
    toAminoMsg(message: QueryConsensusStatesRequest): QueryConsensusStatesRequestAminoMsg;
    fromProtoMsg(message: QueryConsensusStatesRequestProtoMsg): QueryConsensusStatesRequest;
    toProto(message: QueryConsensusStatesRequest): Uint8Array;
    toProtoMsg(message: QueryConsensusStatesRequest): QueryConsensusStatesRequestProtoMsg;
};
export declare const QueryConsensusStatesResponse: {
    typeUrl: string;
    encode(message: QueryConsensusStatesResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryConsensusStatesResponse;
    fromPartial(object: Partial<QueryConsensusStatesResponse>): QueryConsensusStatesResponse;
    fromAmino(object: QueryConsensusStatesResponseAmino): QueryConsensusStatesResponse;
    toAmino(message: QueryConsensusStatesResponse): QueryConsensusStatesResponseAmino;
    fromAminoMsg(object: QueryConsensusStatesResponseAminoMsg): QueryConsensusStatesResponse;
    toAminoMsg(message: QueryConsensusStatesResponse): QueryConsensusStatesResponseAminoMsg;
    fromProtoMsg(message: QueryConsensusStatesResponseProtoMsg): QueryConsensusStatesResponse;
    toProto(message: QueryConsensusStatesResponse): Uint8Array;
    toProtoMsg(message: QueryConsensusStatesResponse): QueryConsensusStatesResponseProtoMsg;
};
export declare const QueryClientParamsRequest: {
    typeUrl: string;
    encode(_: QueryClientParamsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryClientParamsRequest;
    fromPartial(_: Partial<QueryClientParamsRequest>): QueryClientParamsRequest;
    fromAmino(_: QueryClientParamsRequestAmino): QueryClientParamsRequest;
    toAmino(_: QueryClientParamsRequest): QueryClientParamsRequestAmino;
    fromAminoMsg(object: QueryClientParamsRequestAminoMsg): QueryClientParamsRequest;
    toAminoMsg(message: QueryClientParamsRequest): QueryClientParamsRequestAminoMsg;
    fromProtoMsg(message: QueryClientParamsRequestProtoMsg): QueryClientParamsRequest;
    toProto(message: QueryClientParamsRequest): Uint8Array;
    toProtoMsg(message: QueryClientParamsRequest): QueryClientParamsRequestProtoMsg;
};
export declare const QueryClientParamsResponse: {
    typeUrl: string;
    encode(message: QueryClientParamsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryClientParamsResponse;
    fromPartial(object: Partial<QueryClientParamsResponse>): QueryClientParamsResponse;
    fromAmino(object: QueryClientParamsResponseAmino): QueryClientParamsResponse;
    toAmino(message: QueryClientParamsResponse): QueryClientParamsResponseAmino;
    fromAminoMsg(object: QueryClientParamsResponseAminoMsg): QueryClientParamsResponse;
    toAminoMsg(message: QueryClientParamsResponse): QueryClientParamsResponseAminoMsg;
    fromProtoMsg(message: QueryClientParamsResponseProtoMsg): QueryClientParamsResponse;
    toProto(message: QueryClientParamsResponse): Uint8Array;
    toProtoMsg(message: QueryClientParamsResponse): QueryClientParamsResponseProtoMsg;
};
