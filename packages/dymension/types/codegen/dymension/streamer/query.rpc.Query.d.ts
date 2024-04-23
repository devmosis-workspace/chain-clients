import { Rpc } from "../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { ModuleToDistributeCoinsRequest, ModuleToDistributeCoinsResponse, StreamByIDRequest, StreamByIDResponse, StreamsRequest, StreamsResponse, ActiveStreamsRequest, ActiveStreamsResponse, UpcomingStreamsRequest, UpcomingStreamsResponse } from "./query";
/** Query defines the gRPC querier service */
export interface Query {
    /** ModuleToDistributeCoins returns coins that are going to be distributed */
    moduleToDistributeCoins(request?: ModuleToDistributeCoinsRequest): Promise<ModuleToDistributeCoinsResponse>;
    /** StreamByID returns streams by their respective ID */
    streamByID(request: StreamByIDRequest): Promise<StreamByIDResponse>;
    /** Streams returns both upcoming and active streams */
    streams(request?: StreamsRequest): Promise<StreamsResponse>;
    /** ActiveStreams returns active streams */
    activeStreams(request?: ActiveStreamsRequest): Promise<ActiveStreamsResponse>;
    /** Returns scheduled streams that have not yet occurred */
    upcomingStreams(request?: UpcomingStreamsRequest): Promise<UpcomingStreamsResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    moduleToDistributeCoins(request?: ModuleToDistributeCoinsRequest): Promise<ModuleToDistributeCoinsResponse>;
    streamByID(request: StreamByIDRequest): Promise<StreamByIDResponse>;
    streams(request?: StreamsRequest): Promise<StreamsResponse>;
    activeStreams(request?: ActiveStreamsRequest): Promise<ActiveStreamsResponse>;
    upcomingStreams(request?: UpcomingStreamsRequest): Promise<UpcomingStreamsResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    moduleToDistributeCoins(request?: ModuleToDistributeCoinsRequest): Promise<ModuleToDistributeCoinsResponse>;
    streamByID(request: StreamByIDRequest): Promise<StreamByIDResponse>;
    streams(request?: StreamsRequest): Promise<StreamsResponse>;
    activeStreams(request?: ActiveStreamsRequest): Promise<ActiveStreamsResponse>;
    upcomingStreams(request?: UpcomingStreamsRequest): Promise<UpcomingStreamsResponse>;
};
