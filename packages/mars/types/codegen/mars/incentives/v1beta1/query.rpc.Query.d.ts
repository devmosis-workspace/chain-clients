import { Rpc } from "../../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryScheduleRequest, QueryScheduleResponse, QuerySchedulesRequest, QuerySchedulesResponse } from "./query";
/** Query defines the gRPC querier service for the incentives module */
export interface Query {
    /** Schedule queries an incentives schedule by identifier */
    schedule(request: QueryScheduleRequest): Promise<QueryScheduleResponse>;
    /** Schedules queries all incentives schedules */
    schedules(request?: QuerySchedulesRequest): Promise<QuerySchedulesResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    schedule(request: QueryScheduleRequest): Promise<QueryScheduleResponse>;
    schedules(request?: QuerySchedulesRequest): Promise<QuerySchedulesResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    schedule(request: QueryScheduleRequest): Promise<QueryScheduleResponse>;
    schedules(request?: QuerySchedulesRequest): Promise<QuerySchedulesResponse>;
};
