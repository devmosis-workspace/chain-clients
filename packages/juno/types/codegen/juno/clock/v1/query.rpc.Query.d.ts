import { Rpc } from "../../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryClockContracts, QueryClockContractsResponse, QueryClockContract, QueryClockContractResponse, QueryParamsRequest, QueryParamsResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
    /** ClockContracts */
    clockContracts(request?: QueryClockContracts): Promise<QueryClockContractsResponse>;
    /** ClockContract */
    clockContract(request: QueryClockContract): Promise<QueryClockContractResponse>;
    /** Params */
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    clockContracts(request?: QueryClockContracts): Promise<QueryClockContractsResponse>;
    clockContract(request: QueryClockContract): Promise<QueryClockContractResponse>;
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    clockContracts(request?: QueryClockContracts): Promise<QueryClockContractsResponse>;
    clockContract(request: QueryClockContract): Promise<QueryClockContractResponse>;
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
};
