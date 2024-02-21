import { Rpc } from "../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryGetScheduleRequest, QueryGetScheduleResponse, QuerySchedulesRequest, QuerySchedulesResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
    /** Queries the parameters of the module. */
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** Queries a Schedule by name. */
    schedule(request: QueryGetScheduleRequest): Promise<QueryGetScheduleResponse>;
    /** Queries a list of Schedule items. */
    schedules(request?: QuerySchedulesRequest): Promise<QuerySchedulesResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    schedule(request: QueryGetScheduleRequest): Promise<QueryGetScheduleResponse>;
    schedules(request?: QuerySchedulesRequest): Promise<QuerySchedulesResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    schedule(request: QueryGetScheduleRequest): Promise<QueryGetScheduleResponse>;
    schedules(request?: QuerySchedulesRequest): Promise<QuerySchedulesResponse>;
};
