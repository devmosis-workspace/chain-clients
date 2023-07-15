import * as _m0 from "protobufjs/minimal";
/**
 * QueryListPrivilegedRequest is request type for the Query/ListPrivileged RPC
 * method.
 */
export interface QueryListPrivilegedRequest {
}
/**
 * QueryListPrivilegedRequest is request type for the Query/ListPrivileged RPC
 * method.
 */
export interface QueryListPrivilegedRequestSDKType {
}
/**
 * QueryListPrivilegedResponse is response type for the Query/ListPrivileged RPC
 * method.
 */
export interface QueryListPrivilegedResponse {
    /**
     * contract_addresses holds all the smart contract addresses which have
     * privilege status.
     */
    contractAddresses: string[];
}
/**
 * QueryListPrivilegedResponse is response type for the Query/ListPrivileged RPC
 * method.
 */
export interface QueryListPrivilegedResponseSDKType {
    contract_addresses: string[];
}
export declare const QueryListPrivilegedRequest: {
    encode(_: QueryListPrivilegedRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): QueryListPrivilegedRequest;
    fromPartial(_: Partial<QueryListPrivilegedRequest>): QueryListPrivilegedRequest;
};
export declare const QueryListPrivilegedResponse: {
    encode(message: QueryListPrivilegedResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryListPrivilegedResponse;
    fromPartial(object: Partial<QueryListPrivilegedResponse>): QueryListPrivilegedResponse;
};
