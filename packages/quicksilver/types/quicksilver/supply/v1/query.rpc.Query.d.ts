import { Rpc } from "../../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QuerySupplyRequest, QuerySupplyResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
    /** Supply provide running epochInfos */
    supply(request?: QuerySupplyRequest): Promise<QuerySupplyResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    supply(request?: QuerySupplyRequest): Promise<QuerySupplyResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    supply(request?: QuerySupplyRequest): Promise<QuerySupplyResponse>;
};
