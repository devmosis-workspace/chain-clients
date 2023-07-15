import { Rpc } from "../../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryAccountsRequest, QueryAccountsResponse, QueryPaymentsRequest, QueryPaymentsResponse } from "./query";
/** Query defines the gRPC querier service */
export interface Query {
    /**
     * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
     * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
     * Accounts queries all accounts
     */
    accounts(request: QueryAccountsRequest): Promise<QueryAccountsResponse>;
    /**
     * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
     * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
     * Payments queries all payments
     */
    payments(request: QueryPaymentsRequest): Promise<QueryPaymentsResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    accounts(request: QueryAccountsRequest): Promise<QueryAccountsResponse>;
    payments(request: QueryPaymentsRequest): Promise<QueryPaymentsResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    accounts(request: QueryAccountsRequest): Promise<QueryAccountsResponse>;
    payments(request: QueryPaymentsRequest): Promise<QueryPaymentsResponse>;
};
