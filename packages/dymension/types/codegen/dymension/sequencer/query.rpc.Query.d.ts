import { Rpc } from "../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryGetSequencerRequest, QueryGetSequencerResponse, QueryAllSequencerRequest, QueryAllSequencerResponse, QueryGetSequencersByRollappRequest, QueryGetSequencersByRollappResponse, QueryAllSequencersByRollappRequest, QueryAllSequencersByRollappResponse, QueryGetSchedulerRequest, QueryGetSchedulerResponse, QueryAllSchedulerRequest, QueryAllSchedulerResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
    /** Parameters queries the parameters of the module. */
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** Queries a Sequencer by index. */
    sequencer(request: QueryGetSequencerRequest): Promise<QueryGetSequencerResponse>;
    /** Queries a list of Sequencer items. */
    sequencerAll(request?: QueryAllSequencerRequest): Promise<QueryAllSequencerResponse>;
    /** Queries a SequencersByRollapp by index. */
    sequencersByRollapp(request: QueryGetSequencersByRollappRequest): Promise<QueryGetSequencersByRollappResponse>;
    /** Queries a list of SequencersByRollapp items. */
    sequencersByRollappAll(request?: QueryAllSequencersByRollappRequest): Promise<QueryAllSequencersByRollappResponse>;
    /** Queries a Scheduler by index. */
    scheduler(request: QueryGetSchedulerRequest): Promise<QueryGetSchedulerResponse>;
    /** Queries a list of Scheduler items. */
    schedulerAll(request?: QueryAllSchedulerRequest): Promise<QueryAllSchedulerResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    sequencer(request: QueryGetSequencerRequest): Promise<QueryGetSequencerResponse>;
    sequencerAll(request?: QueryAllSequencerRequest): Promise<QueryAllSequencerResponse>;
    sequencersByRollapp(request: QueryGetSequencersByRollappRequest): Promise<QueryGetSequencersByRollappResponse>;
    sequencersByRollappAll(request?: QueryAllSequencersByRollappRequest): Promise<QueryAllSequencersByRollappResponse>;
    scheduler(request: QueryGetSchedulerRequest): Promise<QueryGetSchedulerResponse>;
    schedulerAll(request?: QueryAllSchedulerRequest): Promise<QueryAllSchedulerResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    sequencer(request: QueryGetSequencerRequest): Promise<QueryGetSequencerResponse>;
    sequencerAll(request?: QueryAllSequencerRequest): Promise<QueryAllSequencerResponse>;
    sequencersByRollapp(request: QueryGetSequencersByRollappRequest): Promise<QueryGetSequencersByRollappResponse>;
    sequencersByRollappAll(request?: QueryAllSequencersByRollappRequest): Promise<QueryAllSequencersByRollappResponse>;
    scheduler(request: QueryGetSchedulerRequest): Promise<QueryGetSchedulerResponse>;
    schedulerAll(request?: QueryAllSchedulerRequest): Promise<QueryAllSchedulerResponse>;
};
