import { Params, ParamsAmino, ParamsSDKType, Egress, EgressAmino, EgressSDKType } from "./swingset";
import { BinaryWriter } from "../../binary";
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
export interface QueryParamsRequestProtoMsg {
    typeUrl: "/agoric.swingset.QueryParamsRequest";
    value: Uint8Array;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {
}
export interface QueryParamsRequestAminoMsg {
    type: "/agoric.swingset.QueryParamsRequest";
    value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params defines the parameters of the module. */
    params: Params;
}
export interface QueryParamsResponseProtoMsg {
    typeUrl: "/agoric.swingset.QueryParamsResponse";
    value: Uint8Array;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
    /** params defines the parameters of the module. */
    params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
    type: "/agoric.swingset.QueryParamsResponse";
    value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
    params: ParamsSDKType;
}
/** QueryEgressRequest is the request type for the Query/Egress RPC method */
export interface QueryEgressRequest {
    peer: Uint8Array;
}
export interface QueryEgressRequestProtoMsg {
    typeUrl: "/agoric.swingset.QueryEgressRequest";
    value: Uint8Array;
}
/** QueryEgressRequest is the request type for the Query/Egress RPC method */
export interface QueryEgressRequestAmino {
    peer?: string;
}
export interface QueryEgressRequestAminoMsg {
    type: "/agoric.swingset.QueryEgressRequest";
    value: QueryEgressRequestAmino;
}
/** QueryEgressRequest is the request type for the Query/Egress RPC method */
export interface QueryEgressRequestSDKType {
    peer: Uint8Array;
}
/** QueryEgressResponse is the egress response. */
export interface QueryEgressResponse {
    egress?: Egress;
}
export interface QueryEgressResponseProtoMsg {
    typeUrl: "/agoric.swingset.QueryEgressResponse";
    value: Uint8Array;
}
/** QueryEgressResponse is the egress response. */
export interface QueryEgressResponseAmino {
    egress?: EgressAmino;
}
export interface QueryEgressResponseAminoMsg {
    type: "/agoric.swingset.QueryEgressResponse";
    value: QueryEgressResponseAmino;
}
/** QueryEgressResponse is the egress response. */
export interface QueryEgressResponseSDKType {
    egress?: EgressSDKType;
}
/** QueryMailboxRequest is the mailbox query. */
export interface QueryMailboxRequest {
    peer: Uint8Array;
}
export interface QueryMailboxRequestProtoMsg {
    typeUrl: "/agoric.swingset.QueryMailboxRequest";
    value: Uint8Array;
}
/** QueryMailboxRequest is the mailbox query. */
export interface QueryMailboxRequestAmino {
    peer?: string;
}
export interface QueryMailboxRequestAminoMsg {
    type: "/agoric.swingset.QueryMailboxRequest";
    value: QueryMailboxRequestAmino;
}
/** QueryMailboxRequest is the mailbox query. */
export interface QueryMailboxRequestSDKType {
    peer: Uint8Array;
}
/** QueryMailboxResponse is the mailbox response. */
export interface QueryMailboxResponse {
    value: string;
}
export interface QueryMailboxResponseProtoMsg {
    typeUrl: "/agoric.swingset.QueryMailboxResponse";
    value: Uint8Array;
}
/** QueryMailboxResponse is the mailbox response. */
export interface QueryMailboxResponseAmino {
    value?: string;
}
export interface QueryMailboxResponseAminoMsg {
    type: "/agoric.swingset.QueryMailboxResponse";
    value: QueryMailboxResponseAmino;
}
/** QueryMailboxResponse is the mailbox response. */
export interface QueryMailboxResponseSDKType {
    value: string;
}
export declare const QueryParamsRequest: {
    typeUrl: string;
    encode(_: QueryParamsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryParamsRequest;
    fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest;
    fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest;
    toAmino(_: QueryParamsRequest): QueryParamsRequestAmino;
    fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest;
    fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest;
    toProto(message: QueryParamsRequest): Uint8Array;
    toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg;
};
export declare const QueryParamsResponse: {
    typeUrl: string;
    encode(message: QueryParamsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryParamsResponse;
    fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse;
    fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse;
    toAmino(message: QueryParamsResponse): QueryParamsResponseAmino;
    fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse;
    fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse;
    toProto(message: QueryParamsResponse): Uint8Array;
    toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg;
};
export declare const QueryEgressRequest: {
    typeUrl: string;
    encode(message: QueryEgressRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryEgressRequest;
    fromPartial(object: Partial<QueryEgressRequest>): QueryEgressRequest;
    fromAmino(object: QueryEgressRequestAmino): QueryEgressRequest;
    toAmino(message: QueryEgressRequest): QueryEgressRequestAmino;
    fromAminoMsg(object: QueryEgressRequestAminoMsg): QueryEgressRequest;
    fromProtoMsg(message: QueryEgressRequestProtoMsg): QueryEgressRequest;
    toProto(message: QueryEgressRequest): Uint8Array;
    toProtoMsg(message: QueryEgressRequest): QueryEgressRequestProtoMsg;
};
export declare const QueryEgressResponse: {
    typeUrl: string;
    encode(message: QueryEgressResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryEgressResponse;
    fromPartial(object: Partial<QueryEgressResponse>): QueryEgressResponse;
    fromAmino(object: QueryEgressResponseAmino): QueryEgressResponse;
    toAmino(message: QueryEgressResponse): QueryEgressResponseAmino;
    fromAminoMsg(object: QueryEgressResponseAminoMsg): QueryEgressResponse;
    fromProtoMsg(message: QueryEgressResponseProtoMsg): QueryEgressResponse;
    toProto(message: QueryEgressResponse): Uint8Array;
    toProtoMsg(message: QueryEgressResponse): QueryEgressResponseProtoMsg;
};
export declare const QueryMailboxRequest: {
    typeUrl: string;
    encode(message: QueryMailboxRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryMailboxRequest;
    fromPartial(object: Partial<QueryMailboxRequest>): QueryMailboxRequest;
    fromAmino(object: QueryMailboxRequestAmino): QueryMailboxRequest;
    toAmino(message: QueryMailboxRequest): QueryMailboxRequestAmino;
    fromAminoMsg(object: QueryMailboxRequestAminoMsg): QueryMailboxRequest;
    fromProtoMsg(message: QueryMailboxRequestProtoMsg): QueryMailboxRequest;
    toProto(message: QueryMailboxRequest): Uint8Array;
    toProtoMsg(message: QueryMailboxRequest): QueryMailboxRequestProtoMsg;
};
export declare const QueryMailboxResponse: {
    typeUrl: string;
    encode(message: QueryMailboxResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryMailboxResponse;
    fromPartial(object: Partial<QueryMailboxResponse>): QueryMailboxResponse;
    fromAmino(object: QueryMailboxResponseAmino): QueryMailboxResponse;
    toAmino(message: QueryMailboxResponse): QueryMailboxResponseAmino;
    fromAminoMsg(object: QueryMailboxResponseAminoMsg): QueryMailboxResponse;
    fromProtoMsg(message: QueryMailboxResponseProtoMsg): QueryMailboxResponse;
    toProto(message: QueryMailboxResponse): Uint8Array;
    toProtoMsg(message: QueryMailboxResponse): QueryMailboxResponseProtoMsg;
};
