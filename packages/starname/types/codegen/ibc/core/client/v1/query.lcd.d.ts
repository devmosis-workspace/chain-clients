import { LCDClient } from "@osmonauts/lcd";
import { QueryClientStateRequest, QueryClientStateResponseSDKType, QueryClientStatesRequest, QueryClientStatesResponseSDKType, QueryConsensusStateRequest, QueryConsensusStateResponseSDKType, QueryConsensusStatesRequest, QueryConsensusStatesResponseSDKType, QueryClientParamsRequest, QueryClientParamsResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    clientState(params: QueryClientStateRequest): Promise<QueryClientStateResponseSDKType>;
    clientStates(params?: QueryClientStatesRequest): Promise<QueryClientStatesResponseSDKType>;
    consensusState(params: QueryConsensusStateRequest): Promise<QueryConsensusStateResponseSDKType>;
    consensusStates(params: QueryConsensusStatesRequest): Promise<QueryConsensusStatesResponseSDKType>;
    clientParams(_params?: QueryClientParamsRequest): Promise<QueryClientParamsResponseSDKType>;
}
