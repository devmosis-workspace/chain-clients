import { Rpc } from "../../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryIssuersRequest, QueryIssuersResponse } from "./query";
export interface Query {
    issuers(request?: QueryIssuersRequest): Promise<QueryIssuersResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    issuers(request?: QueryIssuersRequest): Promise<QueryIssuersResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    issuers(request?: QueryIssuersRequest): Promise<QueryIssuersResponse>;
};
