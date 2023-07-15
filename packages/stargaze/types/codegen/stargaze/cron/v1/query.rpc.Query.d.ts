import { Rpc } from "../../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryListPrivilegedRequest, QueryListPrivilegedResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
    /** ListPrivileged queries the contracts which have the priviledge status */
    listPrivileged(request?: QueryListPrivilegedRequest): Promise<QueryListPrivilegedResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    listPrivileged(request?: QueryListPrivilegedRequest): Promise<QueryListPrivilegedResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    listPrivileged(request?: QueryListPrivilegedRequest): Promise<QueryListPrivilegedResponse>;
};
