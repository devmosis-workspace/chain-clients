import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Claim, ClaimAmino, ClaimSDKType } from "./claimsmanager";
import { BinaryWriter } from "../../../binary";
/** QueryClaimsRequest is the request type for the Query/Claims RPC method. */
export interface QueryClaimsRequest {
    chainId: string;
    address: string;
    pagination?: PageRequest;
}
export interface QueryClaimsRequestProtoMsg {
    typeUrl: "/quicksilver.claimsmanager.v1.QueryClaimsRequest";
    value: Uint8Array;
}
/** QueryClaimsRequest is the request type for the Query/Claims RPC method. */
export interface QueryClaimsRequestAmino {
    chain_id?: string;
    address?: string;
    pagination?: PageRequestAmino;
}
export interface QueryClaimsRequestAminoMsg {
    type: "/quicksilver.claimsmanager.v1.QueryClaimsRequest";
    value: QueryClaimsRequestAmino;
}
/** QueryClaimsRequest is the request type for the Query/Claims RPC method. */
export interface QueryClaimsRequestSDKType {
    chain_id: string;
    address: string;
    pagination?: PageRequestSDKType;
}
/** QueryClaimsResponse is the response type for the Query/Claims RPC method. */
export interface QueryClaimsResponse {
    claims: Claim[];
    pagination?: PageResponse;
}
export interface QueryClaimsResponseProtoMsg {
    typeUrl: "/quicksilver.claimsmanager.v1.QueryClaimsResponse";
    value: Uint8Array;
}
/** QueryClaimsResponse is the response type for the Query/Claims RPC method. */
export interface QueryClaimsResponseAmino {
    claims?: ClaimAmino[];
    pagination?: PageResponseAmino;
}
export interface QueryClaimsResponseAminoMsg {
    type: "/quicksilver.claimsmanager.v1.QueryClaimsResponse";
    value: QueryClaimsResponseAmino;
}
/** QueryClaimsResponse is the response type for the Query/Claims RPC method. */
export interface QueryClaimsResponseSDKType {
    claims: ClaimSDKType[];
    pagination?: PageResponseSDKType;
}
export declare const QueryClaimsRequest: {
    typeUrl: string;
    encode(message: QueryClaimsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryClaimsRequest;
    fromPartial(object: Partial<QueryClaimsRequest>): QueryClaimsRequest;
    fromAmino(object: QueryClaimsRequestAmino): QueryClaimsRequest;
    toAmino(message: QueryClaimsRequest): QueryClaimsRequestAmino;
    fromAminoMsg(object: QueryClaimsRequestAminoMsg): QueryClaimsRequest;
    fromProtoMsg(message: QueryClaimsRequestProtoMsg): QueryClaimsRequest;
    toProto(message: QueryClaimsRequest): Uint8Array;
    toProtoMsg(message: QueryClaimsRequest): QueryClaimsRequestProtoMsg;
};
export declare const QueryClaimsResponse: {
    typeUrl: string;
    encode(message: QueryClaimsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryClaimsResponse;
    fromPartial(object: Partial<QueryClaimsResponse>): QueryClaimsResponse;
    fromAmino(object: QueryClaimsResponseAmino): QueryClaimsResponse;
    toAmino(message: QueryClaimsResponse): QueryClaimsResponseAmino;
    fromAminoMsg(object: QueryClaimsResponseAminoMsg): QueryClaimsResponse;
    fromProtoMsg(message: QueryClaimsResponseProtoMsg): QueryClaimsResponse;
    toProto(message: QueryClaimsResponse): Uint8Array;
    toProtoMsg(message: QueryClaimsResponse): QueryClaimsResponseProtoMsg;
};
