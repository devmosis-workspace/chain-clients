import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Account, AccountAmino, AccountSDKType, FractionalPayment, FractionalPaymentAmino, FractionalPaymentSDKType } from "./types";
import { BinaryWriter } from "../../../binary";
/** QueryAccountRequest is request type for the Query/Account RPC method */
export interface QueryAccountsRequest {
    scope: string;
    xid: string;
    owner: string;
    state: string;
    pagination?: PageRequest;
}
export interface QueryAccountsRequestProtoMsg {
    typeUrl: "/akash.escrow.v1beta3.QueryAccountsRequest";
    value: Uint8Array;
}
/** QueryAccountRequest is request type for the Query/Account RPC method */
export interface QueryAccountsRequestAmino {
    scope?: string;
    xid?: string;
    owner?: string;
    state?: string;
    pagination?: PageRequestAmino;
}
export interface QueryAccountsRequestAminoMsg {
    type: "/akash.escrow.v1beta3.QueryAccountsRequest";
    value: QueryAccountsRequestAmino;
}
/** QueryAccountRequest is request type for the Query/Account RPC method */
export interface QueryAccountsRequestSDKType {
    scope: string;
    xid: string;
    owner: string;
    state: string;
    pagination?: PageRequestSDKType;
}
/** QueryProvidersResponse is response type for the Query/Providers RPC method */
export interface QueryAccountsResponse {
    accounts: Account[];
    pagination?: PageResponse;
}
export interface QueryAccountsResponseProtoMsg {
    typeUrl: "/akash.escrow.v1beta3.QueryAccountsResponse";
    value: Uint8Array;
}
/** QueryProvidersResponse is response type for the Query/Providers RPC method */
export interface QueryAccountsResponseAmino {
    accounts?: AccountAmino[];
    pagination?: PageResponseAmino;
}
export interface QueryAccountsResponseAminoMsg {
    type: "/akash.escrow.v1beta3.QueryAccountsResponse";
    value: QueryAccountsResponseAmino;
}
/** QueryProvidersResponse is response type for the Query/Providers RPC method */
export interface QueryAccountsResponseSDKType {
    accounts: AccountSDKType[];
    pagination?: PageResponseSDKType;
}
/** QueryPaymentRequest is request type for the Query/Payment RPC method */
export interface QueryPaymentsRequest {
    scope: string;
    xid: string;
    id: string;
    owner: string;
    state: string;
    pagination?: PageRequest;
}
export interface QueryPaymentsRequestProtoMsg {
    typeUrl: "/akash.escrow.v1beta3.QueryPaymentsRequest";
    value: Uint8Array;
}
/** QueryPaymentRequest is request type for the Query/Payment RPC method */
export interface QueryPaymentsRequestAmino {
    scope?: string;
    xid?: string;
    id?: string;
    owner?: string;
    state?: string;
    pagination?: PageRequestAmino;
}
export interface QueryPaymentsRequestAminoMsg {
    type: "/akash.escrow.v1beta3.QueryPaymentsRequest";
    value: QueryPaymentsRequestAmino;
}
/** QueryPaymentRequest is request type for the Query/Payment RPC method */
export interface QueryPaymentsRequestSDKType {
    scope: string;
    xid: string;
    id: string;
    owner: string;
    state: string;
    pagination?: PageRequestSDKType;
}
/** QueryProvidersResponse is response type for the Query/Providers RPC method */
export interface QueryPaymentsResponse {
    payments: FractionalPayment[];
    pagination?: PageResponse;
}
export interface QueryPaymentsResponseProtoMsg {
    typeUrl: "/akash.escrow.v1beta3.QueryPaymentsResponse";
    value: Uint8Array;
}
/** QueryProvidersResponse is response type for the Query/Providers RPC method */
export interface QueryPaymentsResponseAmino {
    payments?: FractionalPaymentAmino[];
    pagination?: PageResponseAmino;
}
export interface QueryPaymentsResponseAminoMsg {
    type: "/akash.escrow.v1beta3.QueryPaymentsResponse";
    value: QueryPaymentsResponseAmino;
}
/** QueryProvidersResponse is response type for the Query/Providers RPC method */
export interface QueryPaymentsResponseSDKType {
    payments: FractionalPaymentSDKType[];
    pagination?: PageResponseSDKType;
}
export declare const QueryAccountsRequest: {
    typeUrl: string;
    encode(message: QueryAccountsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAccountsRequest;
    fromPartial(object: Partial<QueryAccountsRequest>): QueryAccountsRequest;
    fromAmino(object: QueryAccountsRequestAmino): QueryAccountsRequest;
    toAmino(message: QueryAccountsRequest): QueryAccountsRequestAmino;
    fromAminoMsg(object: QueryAccountsRequestAminoMsg): QueryAccountsRequest;
    fromProtoMsg(message: QueryAccountsRequestProtoMsg): QueryAccountsRequest;
    toProto(message: QueryAccountsRequest): Uint8Array;
    toProtoMsg(message: QueryAccountsRequest): QueryAccountsRequestProtoMsg;
};
export declare const QueryAccountsResponse: {
    typeUrl: string;
    encode(message: QueryAccountsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAccountsResponse;
    fromPartial(object: Partial<QueryAccountsResponse>): QueryAccountsResponse;
    fromAmino(object: QueryAccountsResponseAmino): QueryAccountsResponse;
    toAmino(message: QueryAccountsResponse): QueryAccountsResponseAmino;
    fromAminoMsg(object: QueryAccountsResponseAminoMsg): QueryAccountsResponse;
    fromProtoMsg(message: QueryAccountsResponseProtoMsg): QueryAccountsResponse;
    toProto(message: QueryAccountsResponse): Uint8Array;
    toProtoMsg(message: QueryAccountsResponse): QueryAccountsResponseProtoMsg;
};
export declare const QueryPaymentsRequest: {
    typeUrl: string;
    encode(message: QueryPaymentsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryPaymentsRequest;
    fromPartial(object: Partial<QueryPaymentsRequest>): QueryPaymentsRequest;
    fromAmino(object: QueryPaymentsRequestAmino): QueryPaymentsRequest;
    toAmino(message: QueryPaymentsRequest): QueryPaymentsRequestAmino;
    fromAminoMsg(object: QueryPaymentsRequestAminoMsg): QueryPaymentsRequest;
    fromProtoMsg(message: QueryPaymentsRequestProtoMsg): QueryPaymentsRequest;
    toProto(message: QueryPaymentsRequest): Uint8Array;
    toProtoMsg(message: QueryPaymentsRequest): QueryPaymentsRequestProtoMsg;
};
export declare const QueryPaymentsResponse: {
    typeUrl: string;
    encode(message: QueryPaymentsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryPaymentsResponse;
    fromPartial(object: Partial<QueryPaymentsResponse>): QueryPaymentsResponse;
    fromAmino(object: QueryPaymentsResponseAmino): QueryPaymentsResponse;
    toAmino(message: QueryPaymentsResponse): QueryPaymentsResponseAmino;
    fromAminoMsg(object: QueryPaymentsResponseAminoMsg): QueryPaymentsResponse;
    fromProtoMsg(message: QueryPaymentsResponseProtoMsg): QueryPaymentsResponse;
    toProto(message: QueryPaymentsResponse): Uint8Array;
    toProtoMsg(message: QueryPaymentsResponse): QueryPaymentsResponseProtoMsg;
};
