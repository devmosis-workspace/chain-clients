import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryGetSequencerRequest, QueryGetSequencerResponseSDKType, QueryAllSequencerRequest, QueryAllSequencerResponseSDKType, QueryGetSequencersByRollappRequest, QueryGetSequencersByRollappResponseSDKType, QueryAllSequencersByRollappRequest, QueryAllSequencersByRollappResponseSDKType, QueryGetSchedulerRequest, QueryGetSchedulerResponseSDKType, QueryAllSchedulerRequest, QueryAllSchedulerResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    params(_params?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
    sequencer(params: QueryGetSequencerRequest): Promise<QueryGetSequencerResponseSDKType>;
    sequencerAll(params?: QueryAllSequencerRequest): Promise<QueryAllSequencerResponseSDKType>;
    sequencersByRollapp(params: QueryGetSequencersByRollappRequest): Promise<QueryGetSequencersByRollappResponseSDKType>;
    sequencersByRollappAll(params?: QueryAllSequencersByRollappRequest): Promise<QueryAllSequencersByRollappResponseSDKType>;
    scheduler(params: QueryGetSchedulerRequest): Promise<QueryGetSchedulerResponseSDKType>;
    schedulerAll(params?: QueryAllSchedulerRequest): Promise<QueryAllSchedulerResponseSDKType>;
}
