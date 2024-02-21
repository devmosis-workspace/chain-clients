import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Failure, FailureAmino, FailureSDKType } from "./failure";
import { BinaryWriter } from "../../binary";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
export interface QueryParamsRequestProtoMsg {
    typeUrl: "/neutron.contractmanager.QueryParamsRequest";
    value: Uint8Array;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {
}
export interface QueryParamsRequestAminoMsg {
    type: "/neutron.contractmanager.QueryParamsRequest";
    value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params holds all the parameters of this module. */
    params: Params;
}
export interface QueryParamsResponseProtoMsg {
    typeUrl: "/neutron.contractmanager.QueryParamsResponse";
    value: Uint8Array;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
    /** params holds all the parameters of this module. */
    params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
    type: "/neutron.contractmanager.QueryParamsResponse";
    value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
    params: ParamsSDKType;
}
/** QueryFailuresRequest is request type for the Query/Failures RPC method. */
export interface QueryFailuresRequest {
    /** address of the contract which Sudo call failed. */
    address: string;
    /** ID of the failure for the given contract. */
    failureId: bigint;
    pagination?: PageRequest;
}
export interface QueryFailuresRequestProtoMsg {
    typeUrl: "/neutron.contractmanager.QueryFailuresRequest";
    value: Uint8Array;
}
/** QueryFailuresRequest is request type for the Query/Failures RPC method. */
export interface QueryFailuresRequestAmino {
    /** address of the contract which Sudo call failed. */
    address?: string;
    /** ID of the failure for the given contract. */
    failure_id?: string;
    pagination?: PageRequestAmino;
}
export interface QueryFailuresRequestAminoMsg {
    type: "/neutron.contractmanager.QueryFailuresRequest";
    value: QueryFailuresRequestAmino;
}
/** QueryFailuresRequest is request type for the Query/Failures RPC method. */
export interface QueryFailuresRequestSDKType {
    address: string;
    failure_id: bigint;
    pagination?: PageRequestSDKType;
}
/** QueryFailuresResponse is response type for the Query/Failures RPC method. */
export interface QueryFailuresResponse {
    failures: Failure[];
    pagination?: PageResponse;
}
export interface QueryFailuresResponseProtoMsg {
    typeUrl: "/neutron.contractmanager.QueryFailuresResponse";
    value: Uint8Array;
}
/** QueryFailuresResponse is response type for the Query/Failures RPC method. */
export interface QueryFailuresResponseAmino {
    failures?: FailureAmino[];
    pagination?: PageResponseAmino;
}
export interface QueryFailuresResponseAminoMsg {
    type: "/neutron.contractmanager.QueryFailuresResponse";
    value: QueryFailuresResponseAmino;
}
/** QueryFailuresResponse is response type for the Query/Failures RPC method. */
export interface QueryFailuresResponseSDKType {
    failures: FailureSDKType[];
    pagination?: PageResponseSDKType;
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
export declare const QueryFailuresRequest: {
    typeUrl: string;
    encode(message: QueryFailuresRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryFailuresRequest;
    fromPartial(object: Partial<QueryFailuresRequest>): QueryFailuresRequest;
    fromAmino(object: QueryFailuresRequestAmino): QueryFailuresRequest;
    toAmino(message: QueryFailuresRequest): QueryFailuresRequestAmino;
    fromAminoMsg(object: QueryFailuresRequestAminoMsg): QueryFailuresRequest;
    fromProtoMsg(message: QueryFailuresRequestProtoMsg): QueryFailuresRequest;
    toProto(message: QueryFailuresRequest): Uint8Array;
    toProtoMsg(message: QueryFailuresRequest): QueryFailuresRequestProtoMsg;
};
export declare const QueryFailuresResponse: {
    typeUrl: string;
    encode(message: QueryFailuresResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryFailuresResponse;
    fromPartial(object: Partial<QueryFailuresResponse>): QueryFailuresResponse;
    fromAmino(object: QueryFailuresResponseAmino): QueryFailuresResponse;
    toAmino(message: QueryFailuresResponse): QueryFailuresResponseAmino;
    fromAminoMsg(object: QueryFailuresResponseAminoMsg): QueryFailuresResponse;
    fromProtoMsg(message: QueryFailuresResponseProtoMsg): QueryFailuresResponse;
    toProto(message: QueryFailuresResponse): Uint8Array;
    toProtoMsg(message: QueryFailuresResponse): QueryFailuresResponseProtoMsg;
};
