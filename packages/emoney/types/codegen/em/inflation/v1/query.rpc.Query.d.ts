import { Rpc } from "../../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryInflationRequest, QueryInflationResponse } from "./query";
export interface Query {
    inflation(request?: QueryInflationRequest): Promise<QueryInflationResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    inflation(request?: QueryInflationRequest): Promise<QueryInflationResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    inflation(request?: QueryInflationRequest): Promise<QueryInflationResponse>;
};
