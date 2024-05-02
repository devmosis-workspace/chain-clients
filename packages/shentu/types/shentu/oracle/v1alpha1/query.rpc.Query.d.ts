import { Rpc } from "../../../helpers";
import { QueryOperatorRequest, QueryOperatorResponse, QueryOperatorsRequest, QueryOperatorsResponse, QueryWithdrawsRequest, QueryWithdrawsResponse, QueryTaskRequest, QueryTaskResponse, QueryTxTaskRequest, QueryTxTaskResponse, QueryResponseRequest, QueryResponseResponse, QueryTxResponseRequest, QueryTxResponseResponse, QueryParamsRequest, QueryParamsResponse } from "./query";
/** Query defines the gRPC querier service for oracle module. */
export interface Query {
    operator(request: QueryOperatorRequest): Promise<QueryOperatorResponse>;
    operators(request?: QueryOperatorsRequest): Promise<QueryOperatorsResponse>;
    withdraws(request?: QueryWithdrawsRequest): Promise<QueryWithdrawsResponse>;
    task(request: QueryTaskRequest): Promise<QueryTaskResponse>;
    txTask(request: QueryTxTaskRequest): Promise<QueryTxTaskResponse>;
    response(request: QueryResponseRequest): Promise<QueryResponseResponse>;
    txResponse(request: QueryTxResponseRequest): Promise<QueryTxResponseResponse>;
    /** Params queries all parameters of the oracle module. */
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    operator(request: QueryOperatorRequest): Promise<QueryOperatorResponse>;
    operators(request?: QueryOperatorsRequest): Promise<QueryOperatorsResponse>;
    withdraws(request?: QueryWithdrawsRequest): Promise<QueryWithdrawsResponse>;
    task(request: QueryTaskRequest): Promise<QueryTaskResponse>;
    txTask(request: QueryTxTaskRequest): Promise<QueryTxTaskResponse>;
    response(request: QueryResponseRequest): Promise<QueryResponseResponse>;
    txResponse(request: QueryTxResponseRequest): Promise<QueryTxResponseResponse>;
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    operator(request: QueryOperatorRequest): Promise<QueryOperatorResponse>;
    operators(request?: QueryOperatorsRequest): Promise<QueryOperatorsResponse>;
    withdraws(request?: QueryWithdrawsRequest): Promise<QueryWithdrawsResponse>;
    task(request: QueryTaskRequest): Promise<QueryTaskResponse>;
    txTask(request: QueryTxTaskRequest): Promise<QueryTxTaskResponse>;
    response(request: QueryResponseRequest): Promise<QueryResponseResponse>;
    txResponse(request: QueryTxResponseRequest): Promise<QueryTxResponseResponse>;
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
};
