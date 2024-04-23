import { LCDClient } from "@cosmology/lcd";
import { ModuleToDistributeCoinsRequest, ModuleToDistributeCoinsResponseSDKType, StreamByIDRequest, StreamByIDResponseSDKType, StreamsRequest, StreamsResponseSDKType, ActiveStreamsRequest, ActiveStreamsResponseSDKType, UpcomingStreamsRequest, UpcomingStreamsResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    moduleToDistributeCoins(_params?: ModuleToDistributeCoinsRequest): Promise<ModuleToDistributeCoinsResponseSDKType>;
    streamByID(params: StreamByIDRequest): Promise<StreamByIDResponseSDKType>;
    streams(params?: StreamsRequest): Promise<StreamsResponseSDKType>;
    activeStreams(params?: ActiveStreamsRequest): Promise<ActiveStreamsResponseSDKType>;
    upcomingStreams(params?: UpcomingStreamsRequest): Promise<UpcomingStreamsResponseSDKType>;
}
