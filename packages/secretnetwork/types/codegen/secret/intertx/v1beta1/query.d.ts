import * as _m0 from "protobufjs/minimal";
/** QueryInterchainAccountFromAddressRequest is the request type for the Query/InterchainAccountAddress RPC */
export interface QueryInterchainAccountFromAddressRequest {
    owner: string;
    connectionId: string;
}
/** QueryInterchainAccountFromAddressRequest is the request type for the Query/InterchainAccountAddress RPC */
export interface QueryInterchainAccountFromAddressRequestSDKType {
    owner: string;
    connection_id: string;
}
/** QueryInterchainAccountFromAddressResponse the response type for the Query/InterchainAccountAddress RPC */
export interface QueryInterchainAccountFromAddressResponse {
    interchainAccountAddress: string;
}
/** QueryInterchainAccountFromAddressResponse the response type for the Query/InterchainAccountAddress RPC */
export interface QueryInterchainAccountFromAddressResponseSDKType {
    interchain_account_address: string;
}
export declare const QueryInterchainAccountFromAddressRequest: {
    encode(message: QueryInterchainAccountFromAddressRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryInterchainAccountFromAddressRequest;
    fromPartial(object: Partial<QueryInterchainAccountFromAddressRequest>): QueryInterchainAccountFromAddressRequest;
};
export declare const QueryInterchainAccountFromAddressResponse: {
    encode(message: QueryInterchainAccountFromAddressResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryInterchainAccountFromAddressResponse;
    fromPartial(object: Partial<QueryInterchainAccountFromAddressResponse>): QueryInterchainAccountFromAddressResponse;
};
