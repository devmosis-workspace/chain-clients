import { Rpc } from "../../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryListRequest, QueryListResponse, QueryMintableRequest, QueryMintableResponse } from "./query";
export interface Query {
    list(request?: QueryListRequest): Promise<QueryListResponse>;
    mintable(request: QueryMintableRequest): Promise<QueryMintableResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    list(request?: QueryListRequest): Promise<QueryListResponse>;
    mintable(request: QueryMintableRequest): Promise<QueryMintableResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    list(request?: QueryListRequest): Promise<QueryListResponse>;
    mintable(request: QueryMintableRequest): Promise<QueryMintableResponse>;
};
