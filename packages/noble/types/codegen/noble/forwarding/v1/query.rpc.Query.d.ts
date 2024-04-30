import { Rpc } from "../../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryAddress, QueryAddressResponse, QueryStatsByChannel, QueryStatsByChannelResponse } from "./query";
export interface Query {
    address(request: QueryAddress): Promise<QueryAddressResponse>;
    statsByChannel(request: QueryStatsByChannel): Promise<QueryStatsByChannelResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    address(request: QueryAddress): Promise<QueryAddressResponse>;
    statsByChannel(request: QueryStatsByChannel): Promise<QueryStatsByChannelResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    address(request: QueryAddress): Promise<QueryAddressResponse>;
    statsByChannel(request: QueryStatsByChannel): Promise<QueryStatsByChannelResponse>;
};
