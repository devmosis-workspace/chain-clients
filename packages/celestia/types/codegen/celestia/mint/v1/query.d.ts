import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { BinaryWriter } from "../../../binary";
/**
 * QueryInflationRateRequest is the request type for the Query/InflationRate RPC
 * method.
 */
export interface QueryInflationRateRequest {
}
export interface QueryInflationRateRequestProtoMsg {
    typeUrl: "/celestia.mint.v1.QueryInflationRateRequest";
    value: Uint8Array;
}
/**
 * QueryInflationRateRequest is the request type for the Query/InflationRate RPC
 * method.
 */
export interface QueryInflationRateRequestAmino {
}
export interface QueryInflationRateRequestAminoMsg {
    type: "/celestia.mint.v1.QueryInflationRateRequest";
    value: QueryInflationRateRequestAmino;
}
/**
 * QueryInflationRateRequest is the request type for the Query/InflationRate RPC
 * method.
 */
export interface QueryInflationRateRequestSDKType {
}
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
export interface QueryAnnualProvisionsRequest {
}
export interface QueryAnnualProvisionsRequestProtoMsg {
    typeUrl: "/celestia.mint.v1.QueryAnnualProvisionsRequest";
    value: Uint8Array;
}
/**
 * QueryAnnualProvisionsRequest is the request type for the
 * Query/AnnualProvisions RPC method.
 */
export interface QueryAnnualProvisionsRequestAmino {
}
export interface QueryAnnualProvisionsRequestAminoMsg {
    type: "/celestia.mint.v1.QueryAnnualProvisionsRequest";
    value: QueryAnnualProvisionsRequestAmino;
}
/**
 * QueryAnnualProvisionsRequest is the request type for the
 * Query/AnnualProvisions RPC method.
 */
export interface QueryAnnualProvisionsRequestSDKType {
}
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
export interface QueryGenesisTimeRequest {
}
export interface QueryGenesisTimeRequestProtoMsg {
    typeUrl: "/celestia.mint.v1.QueryGenesisTimeRequest";
    value: Uint8Array;
}
/**
 * QueryGenesisTimeRequest is the request type for the Query/GenesisTime RPC
 * method.
 */
export interface QueryGenesisTimeRequestAmino {
}
export interface QueryGenesisTimeRequestAminoMsg {
    type: "/celestia.mint.v1.QueryGenesisTimeRequest";
    value: QueryGenesisTimeRequestAmino;
}
/**
 * QueryGenesisTimeRequest is the request type for the Query/GenesisTime RPC
 * method.
 */
export interface QueryGenesisTimeRequestSDKType {
}
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
export declare const QueryInflationRateRequest: {
    typeUrl: string;
    encode(_: QueryInflationRateRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryInflationRateRequest;
    fromPartial(_: Partial<QueryInflationRateRequest>): QueryInflationRateRequest;
    fromAmino(_: QueryInflationRateRequestAmino): QueryInflationRateRequest;
    toAmino(_: QueryInflationRateRequest): QueryInflationRateRequestAmino;
    fromAminoMsg(object: QueryInflationRateRequestAminoMsg): QueryInflationRateRequest;
    fromProtoMsg(message: QueryInflationRateRequestProtoMsg): QueryInflationRateRequest;
    toProto(message: QueryInflationRateRequest): Uint8Array;
    toProtoMsg(message: QueryInflationRateRequest): QueryInflationRateRequestProtoMsg;
};
export declare const QueryInflationRateResponse: {
    typeUrl: string;
    encode(message: QueryInflationRateResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryInflationRateResponse;
    fromPartial(object: Partial<QueryInflationRateResponse>): QueryInflationRateResponse;
    fromAmino(object: QueryInflationRateResponseAmino): QueryInflationRateResponse;
    toAmino(message: QueryInflationRateResponse): QueryInflationRateResponseAmino;
    fromAminoMsg(object: QueryInflationRateResponseAminoMsg): QueryInflationRateResponse;
    fromProtoMsg(message: QueryInflationRateResponseProtoMsg): QueryInflationRateResponse;
    toProto(message: QueryInflationRateResponse): Uint8Array;
    toProtoMsg(message: QueryInflationRateResponse): QueryInflationRateResponseProtoMsg;
};
export declare const QueryAnnualProvisionsRequest: {
    typeUrl: string;
    encode(_: QueryAnnualProvisionsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryAnnualProvisionsRequest;
    fromPartial(_: Partial<QueryAnnualProvisionsRequest>): QueryAnnualProvisionsRequest;
    fromAmino(_: QueryAnnualProvisionsRequestAmino): QueryAnnualProvisionsRequest;
    toAmino(_: QueryAnnualProvisionsRequest): QueryAnnualProvisionsRequestAmino;
    fromAminoMsg(object: QueryAnnualProvisionsRequestAminoMsg): QueryAnnualProvisionsRequest;
    fromProtoMsg(message: QueryAnnualProvisionsRequestProtoMsg): QueryAnnualProvisionsRequest;
    toProto(message: QueryAnnualProvisionsRequest): Uint8Array;
    toProtoMsg(message: QueryAnnualProvisionsRequest): QueryAnnualProvisionsRequestProtoMsg;
};
export declare const QueryAnnualProvisionsResponse: {
    typeUrl: string;
    encode(message: QueryAnnualProvisionsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAnnualProvisionsResponse;
    fromPartial(object: Partial<QueryAnnualProvisionsResponse>): QueryAnnualProvisionsResponse;
    fromAmino(object: QueryAnnualProvisionsResponseAmino): QueryAnnualProvisionsResponse;
    toAmino(message: QueryAnnualProvisionsResponse): QueryAnnualProvisionsResponseAmino;
    fromAminoMsg(object: QueryAnnualProvisionsResponseAminoMsg): QueryAnnualProvisionsResponse;
    fromProtoMsg(message: QueryAnnualProvisionsResponseProtoMsg): QueryAnnualProvisionsResponse;
    toProto(message: QueryAnnualProvisionsResponse): Uint8Array;
    toProtoMsg(message: QueryAnnualProvisionsResponse): QueryAnnualProvisionsResponseProtoMsg;
};
export declare const QueryGenesisTimeRequest: {
    typeUrl: string;
    encode(_: QueryGenesisTimeRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryGenesisTimeRequest;
    fromPartial(_: Partial<QueryGenesisTimeRequest>): QueryGenesisTimeRequest;
    fromAmino(_: QueryGenesisTimeRequestAmino): QueryGenesisTimeRequest;
    toAmino(_: QueryGenesisTimeRequest): QueryGenesisTimeRequestAmino;
    fromAminoMsg(object: QueryGenesisTimeRequestAminoMsg): QueryGenesisTimeRequest;
    fromProtoMsg(message: QueryGenesisTimeRequestProtoMsg): QueryGenesisTimeRequest;
    toProto(message: QueryGenesisTimeRequest): Uint8Array;
    toProtoMsg(message: QueryGenesisTimeRequest): QueryGenesisTimeRequestProtoMsg;
};
export declare const QueryGenesisTimeResponse: {
    typeUrl: string;
    encode(message: QueryGenesisTimeResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryGenesisTimeResponse;
    fromPartial(object: Partial<QueryGenesisTimeResponse>): QueryGenesisTimeResponse;
    fromAmino(object: QueryGenesisTimeResponseAmino): QueryGenesisTimeResponse;
    toAmino(message: QueryGenesisTimeResponse): QueryGenesisTimeResponseAmino;
    fromAminoMsg(object: QueryGenesisTimeResponseAminoMsg): QueryGenesisTimeResponse;
    fromProtoMsg(message: QueryGenesisTimeResponseProtoMsg): QueryGenesisTimeResponse;
    toProto(message: QueryGenesisTimeResponse): Uint8Array;
    toProtoMsg(message: QueryGenesisTimeResponse): QueryGenesisTimeResponseProtoMsg;
};
