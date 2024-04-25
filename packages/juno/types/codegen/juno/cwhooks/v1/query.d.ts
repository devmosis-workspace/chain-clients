import { Params, ParamsAmino, ParamsSDKType } from "./genesis";
import { BinaryWriter } from "../../../binary";
/** QueryParams is the request type to get all module params. */
export interface QueryParamsRequest {
}
export interface QueryParamsRequestProtoMsg {
    typeUrl: "/juno.cwhooks.v1.QueryParamsRequest";
    value: Uint8Array;
}
/** QueryParams is the request type to get all module params. */
export interface QueryParamsRequestAmino {
}
export interface QueryParamsRequestAminoMsg {
    type: "/juno.cwhooks.v1.QueryParamsRequest";
    value: QueryParamsRequestAmino;
}
/** QueryParams is the request type to get all module params. */
export interface QueryParamsRequestSDKType {
}
/** QueryClockContractsResponse is the response type for the Query/ClockContracts RPC method. */
export interface QueryParamsResponse {
    params?: Params;
}
export interface QueryParamsResponseProtoMsg {
    typeUrl: "/juno.cwhooks.v1.QueryParamsResponse";
    value: Uint8Array;
}
/** QueryClockContractsResponse is the response type for the Query/ClockContracts RPC method. */
export interface QueryParamsResponseAmino {
    params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
    type: "/juno.cwhooks.v1.QueryParamsResponse";
    value: QueryParamsResponseAmino;
}
/** QueryClockContractsResponse is the response type for the Query/ClockContracts RPC method. */
export interface QueryParamsResponseSDKType {
    params?: ParamsSDKType;
}
/** QueryStakingContractsRequest */
export interface QueryStakingContractsRequest {
}
export interface QueryStakingContractsRequestProtoMsg {
    typeUrl: "/juno.cwhooks.v1.QueryStakingContractsRequest";
    value: Uint8Array;
}
/** QueryStakingContractsRequest */
export interface QueryStakingContractsRequestAmino {
}
export interface QueryStakingContractsRequestAminoMsg {
    type: "/juno.cwhooks.v1.QueryStakingContractsRequest";
    value: QueryStakingContractsRequestAmino;
}
/** QueryStakingContractsRequest */
export interface QueryStakingContractsRequestSDKType {
}
/** QueryStakingContractsResponse */
export interface QueryStakingContractsResponse {
    contracts: string[];
}
export interface QueryStakingContractsResponseProtoMsg {
    typeUrl: "/juno.cwhooks.v1.QueryStakingContractsResponse";
    value: Uint8Array;
}
/** QueryStakingContractsResponse */
export interface QueryStakingContractsResponseAmino {
    contracts?: string[];
}
export interface QueryStakingContractsResponseAminoMsg {
    type: "/juno.cwhooks.v1.QueryStakingContractsResponse";
    value: QueryStakingContractsResponseAmino;
}
/** QueryStakingContractsResponse */
export interface QueryStakingContractsResponseSDKType {
    contracts: string[];
}
/** QueryStakingContractsRequest */
export interface QueryGovernanceContractsRequest {
}
export interface QueryGovernanceContractsRequestProtoMsg {
    typeUrl: "/juno.cwhooks.v1.QueryGovernanceContractsRequest";
    value: Uint8Array;
}
/** QueryStakingContractsRequest */
export interface QueryGovernanceContractsRequestAmino {
}
export interface QueryGovernanceContractsRequestAminoMsg {
    type: "/juno.cwhooks.v1.QueryGovernanceContractsRequest";
    value: QueryGovernanceContractsRequestAmino;
}
/** QueryStakingContractsRequest */
export interface QueryGovernanceContractsRequestSDKType {
}
/** QueryGovernanceContractsResponse */
export interface QueryGovernanceContractsResponse {
    contracts: string[];
}
export interface QueryGovernanceContractsResponseProtoMsg {
    typeUrl: "/juno.cwhooks.v1.QueryGovernanceContractsResponse";
    value: Uint8Array;
}
/** QueryGovernanceContractsResponse */
export interface QueryGovernanceContractsResponseAmino {
    contracts?: string[];
}
export interface QueryGovernanceContractsResponseAminoMsg {
    type: "/juno.cwhooks.v1.QueryGovernanceContractsResponse";
    value: QueryGovernanceContractsResponseAmino;
}
/** QueryGovernanceContractsResponse */
export interface QueryGovernanceContractsResponseSDKType {
    contracts: string[];
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
export declare const QueryStakingContractsRequest: {
    typeUrl: string;
    encode(_: QueryStakingContractsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryStakingContractsRequest;
    fromPartial(_: Partial<QueryStakingContractsRequest>): QueryStakingContractsRequest;
    fromAmino(_: QueryStakingContractsRequestAmino): QueryStakingContractsRequest;
    toAmino(_: QueryStakingContractsRequest): QueryStakingContractsRequestAmino;
    fromAminoMsg(object: QueryStakingContractsRequestAminoMsg): QueryStakingContractsRequest;
    fromProtoMsg(message: QueryStakingContractsRequestProtoMsg): QueryStakingContractsRequest;
    toProto(message: QueryStakingContractsRequest): Uint8Array;
    toProtoMsg(message: QueryStakingContractsRequest): QueryStakingContractsRequestProtoMsg;
};
export declare const QueryStakingContractsResponse: {
    typeUrl: string;
    encode(message: QueryStakingContractsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryStakingContractsResponse;
    fromPartial(object: Partial<QueryStakingContractsResponse>): QueryStakingContractsResponse;
    fromAmino(object: QueryStakingContractsResponseAmino): QueryStakingContractsResponse;
    toAmino(message: QueryStakingContractsResponse): QueryStakingContractsResponseAmino;
    fromAminoMsg(object: QueryStakingContractsResponseAminoMsg): QueryStakingContractsResponse;
    fromProtoMsg(message: QueryStakingContractsResponseProtoMsg): QueryStakingContractsResponse;
    toProto(message: QueryStakingContractsResponse): Uint8Array;
    toProtoMsg(message: QueryStakingContractsResponse): QueryStakingContractsResponseProtoMsg;
};
export declare const QueryGovernanceContractsRequest: {
    typeUrl: string;
    encode(_: QueryGovernanceContractsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryGovernanceContractsRequest;
    fromPartial(_: Partial<QueryGovernanceContractsRequest>): QueryGovernanceContractsRequest;
    fromAmino(_: QueryGovernanceContractsRequestAmino): QueryGovernanceContractsRequest;
    toAmino(_: QueryGovernanceContractsRequest): QueryGovernanceContractsRequestAmino;
    fromAminoMsg(object: QueryGovernanceContractsRequestAminoMsg): QueryGovernanceContractsRequest;
    fromProtoMsg(message: QueryGovernanceContractsRequestProtoMsg): QueryGovernanceContractsRequest;
    toProto(message: QueryGovernanceContractsRequest): Uint8Array;
    toProtoMsg(message: QueryGovernanceContractsRequest): QueryGovernanceContractsRequestProtoMsg;
};
export declare const QueryGovernanceContractsResponse: {
    typeUrl: string;
    encode(message: QueryGovernanceContractsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryGovernanceContractsResponse;
    fromPartial(object: Partial<QueryGovernanceContractsResponse>): QueryGovernanceContractsResponse;
    fromAmino(object: QueryGovernanceContractsResponseAmino): QueryGovernanceContractsResponse;
    toAmino(message: QueryGovernanceContractsResponse): QueryGovernanceContractsResponseAmino;
    fromAminoMsg(object: QueryGovernanceContractsResponseAminoMsg): QueryGovernanceContractsResponse;
    fromProtoMsg(message: QueryGovernanceContractsResponseProtoMsg): QueryGovernanceContractsResponse;
    toProto(message: QueryGovernanceContractsResponse): Uint8Array;
    toProtoMsg(message: QueryGovernanceContractsResponse): QueryGovernanceContractsResponseProtoMsg;
};
