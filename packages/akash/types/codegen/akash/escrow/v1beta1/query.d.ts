import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Account, AccountSDKType, Payment, PaymentSDKType } from "./types";
import * as _m0 from "protobufjs/minimal";
/** QueryAccountRequest is request type for the Query/Account RPC method */
export interface QueryAccountsRequest {
    scope: string;
    xid: string;
    owner: string;
    state: string;
    pagination?: PageRequest;
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
    payments: Payment[];
    pagination?: PageResponse;
}
/** QueryProvidersResponse is response type for the Query/Providers RPC method */
export interface QueryPaymentsResponseSDKType {
    payments: PaymentSDKType[];
    pagination?: PageResponseSDKType;
}
export declare const QueryAccountsRequest: {
    encode(message: QueryAccountsRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryAccountsRequest;
    fromPartial(object: Partial<QueryAccountsRequest>): QueryAccountsRequest;
};
export declare const QueryAccountsResponse: {
    encode(message: QueryAccountsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryAccountsResponse;
    fromPartial(object: Partial<QueryAccountsResponse>): QueryAccountsResponse;
};
export declare const QueryPaymentsRequest: {
    encode(message: QueryPaymentsRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryPaymentsRequest;
    fromPartial(object: Partial<QueryPaymentsRequest>): QueryPaymentsRequest;
};
export declare const QueryPaymentsResponse: {
    encode(message: QueryPaymentsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryPaymentsResponse;
    fromPartial(object: Partial<QueryPaymentsResponse>): QueryPaymentsResponse;
};
