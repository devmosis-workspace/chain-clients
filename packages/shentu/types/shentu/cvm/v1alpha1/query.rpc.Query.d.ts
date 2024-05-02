import { Rpc } from "../../../helpers";
import { QueryCodeRequest, QueryCodeResponse, QueryAbiRequest, QueryAbiResponse, QueryStorageRequest, QueryStorageResponse, QueryAddressMetaRequest, QueryAddressMetaResponse, QueryMetaRequest, QueryMetaResponse, QueryAccountRequest, QueryViewRequest, QueryViewResponse } from "./query";
import { Account } from "../../../burrow/acm";
export interface Query {
    code(request: QueryCodeRequest): Promise<QueryCodeResponse>;
    abi(request: QueryAbiRequest): Promise<QueryAbiResponse>;
    storage(request: QueryStorageRequest): Promise<QueryStorageResponse>;
    addressMeta(request: QueryAddressMetaRequest): Promise<QueryAddressMetaResponse>;
    meta(request: QueryMetaRequest): Promise<QueryMetaResponse>;
    account(request: QueryAccountRequest): Promise<Account>;
    view(request: QueryViewRequest): Promise<QueryViewResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    code(request: QueryCodeRequest): Promise<QueryCodeResponse>;
    abi(request: QueryAbiRequest): Promise<QueryAbiResponse>;
    storage(request: QueryStorageRequest): Promise<QueryStorageResponse>;
    addressMeta(request: QueryAddressMetaRequest): Promise<QueryAddressMetaResponse>;
    meta(request: QueryMetaRequest): Promise<QueryMetaResponse>;
    account(request: QueryAccountRequest): Promise<Account>;
    view(request: QueryViewRequest): Promise<QueryViewResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    code(request: QueryCodeRequest): Promise<QueryCodeResponse>;
    abi(request: QueryAbiRequest): Promise<QueryAbiResponse>;
    storage(request: QueryStorageRequest): Promise<QueryStorageResponse>;
    addressMeta(request: QueryAddressMetaRequest): Promise<QueryAddressMetaResponse>;
    meta(request: QueryMetaRequest): Promise<QueryMetaResponse>;
    account(request: QueryAccountRequest): Promise<acm.Account>;
    view(request: QueryViewRequest): Promise<QueryViewResponse>;
};
