import { Rpc } from "../../../helpers";
import { ListAccountsRequest, ListAccountsResponse, GetParamsRequest, GetParamsResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
    listAccounts(request?: ListAccountsRequest): Promise<ListAccountsResponse>;
    getParams(request?: GetParamsRequest): Promise<GetParamsResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    listAccounts(request?: ListAccountsRequest): Promise<ListAccountsResponse>;
    getParams(request?: GetParamsRequest): Promise<GetParamsResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    listAccounts(request?: ListAccountsRequest): Promise<ListAccountsResponse>;
    getParams(request?: GetParamsRequest): Promise<GetParamsResponse>;
};
