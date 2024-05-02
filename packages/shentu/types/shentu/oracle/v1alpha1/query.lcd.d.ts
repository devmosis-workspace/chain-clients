import { LCDClient } from "@cosmology/lcd";
import { QueryOperatorRequest, QueryOperatorResponseSDKType, QueryOperatorsRequest, QueryOperatorsResponseSDKType, QueryWithdrawsRequest, QueryWithdrawsResponseSDKType, QueryTaskRequest, QueryTaskResponseSDKType, QueryTxTaskRequest, QueryTxTaskResponseSDKType, QueryResponseRequest, QueryResponseResponseSDKType, QueryTxResponseRequest, QueryTxResponseResponseSDKType, QueryParamsRequest, QueryParamsResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    operator(params: QueryOperatorRequest): Promise<QueryOperatorResponseSDKType>;
    operators(_params?: QueryOperatorsRequest): Promise<QueryOperatorsResponseSDKType>;
    withdraws(_params?: QueryWithdrawsRequest): Promise<QueryWithdrawsResponseSDKType>;
    task(params: QueryTaskRequest): Promise<QueryTaskResponseSDKType>;
    txTask(params: QueryTxTaskRequest): Promise<QueryTxTaskResponseSDKType>;
    response(params: QueryResponseRequest): Promise<QueryResponseResponseSDKType>;
    txResponse(params: QueryTxResponseRequest): Promise<QueryTxResponseResponseSDKType>;
    params(_params?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
}
