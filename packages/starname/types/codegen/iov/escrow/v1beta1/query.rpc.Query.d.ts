import { Rpc } from "../../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryEscrowRequest, QueryEscrowResponse, QueryEscrowsRequest, QueryEscrowsResponse } from "./query";
/** Query provides defines the gRPC querier service */
export interface Query {
    /** Escrow queries the escrow by the specified id */
    escrow(request: QueryEscrowRequest): Promise<QueryEscrowResponse>;
    /** Escrows queries escrows by the specified key-value pairs */
    escrows(request: QueryEscrowsRequest): Promise<QueryEscrowsResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    escrow(request: QueryEscrowRequest): Promise<QueryEscrowResponse>;
    escrows(request: QueryEscrowsRequest): Promise<QueryEscrowsResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    escrow(request: QueryEscrowRequest): Promise<QueryEscrowResponse>;
    escrows(request: QueryEscrowsRequest): Promise<QueryEscrowsResponse>;
};
