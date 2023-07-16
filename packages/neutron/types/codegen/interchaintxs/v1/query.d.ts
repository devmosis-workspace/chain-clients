import { Params, ParamsSDKType } from "./params";
import * as _m0 from "protobufjs/minimal";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params holds all the parameters of this module. */
    params?: Params;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
    params?: ParamsSDKType;
}
export interface QueryInterchainAccountAddressRequest {
    /**
     * owner_address is the owner of the interchain account on the controller
     * chain
     */
    ownerAddress: string;
    /**
     * interchain_account_id is an identifier of your interchain account from
     * which you want to execute msgs
     */
    interchainAccountId: string;
    /**
     * connection_id is an IBC connection identifier between Neutron and remote
     * chain
     */
    connectionId: string;
}
export interface QueryInterchainAccountAddressRequestSDKType {
    owner_address: string;
    interchain_account_id: string;
    connection_id: string;
}
/** Query response for an interchain account address */
export interface QueryInterchainAccountAddressResponse {
    /** The corresponding interchain account address on the host chain */
    interchainAccountAddress: string;
}
/** Query response for an interchain account address */
export interface QueryInterchainAccountAddressResponseSDKType {
    interchain_account_address: string;
}
export declare const QueryParamsRequest: {
    encode(_: QueryParamsRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): QueryParamsRequest;
    fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryParamsResponse;
    fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse;
};
export declare const QueryInterchainAccountAddressRequest: {
    encode(message: QueryInterchainAccountAddressRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryInterchainAccountAddressRequest;
    fromPartial(object: Partial<QueryInterchainAccountAddressRequest>): QueryInterchainAccountAddressRequest;
};
export declare const QueryInterchainAccountAddressResponse: {
    encode(message: QueryInterchainAccountAddressResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryInterchainAccountAddressResponse;
    fromPartial(object: Partial<QueryInterchainAccountAddressResponse>): QueryInterchainAccountAddressResponse;
};
