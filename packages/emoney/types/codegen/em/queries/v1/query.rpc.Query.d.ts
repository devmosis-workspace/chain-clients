import { Rpc } from "../../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryCirculatingRequest, QueryCirculatingResponse, QueryMissedBlocksRequest, QueryMissedBlocksResponse, QuerySpendableRequest, QuerySpendableResponse } from "./query";
export interface Query {
    circulating(request?: QueryCirculatingRequest): Promise<QueryCirculatingResponse>;
    missedBlocks(request: QueryMissedBlocksRequest): Promise<QueryMissedBlocksResponse>;
    spendable(request: QuerySpendableRequest): Promise<QuerySpendableResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    circulating(request?: QueryCirculatingRequest): Promise<QueryCirculatingResponse>;
    missedBlocks(request: QueryMissedBlocksRequest): Promise<QueryMissedBlocksResponse>;
    spendable(request: QuerySpendableRequest): Promise<QuerySpendableResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    circulating(request?: QueryCirculatingRequest): Promise<QueryCirculatingResponse>;
    missedBlocks(request: QueryMissedBlocksRequest): Promise<QueryMissedBlocksResponse>;
    spendable(request: QuerySpendableRequest): Promise<QuerySpendableResponse>;
};
