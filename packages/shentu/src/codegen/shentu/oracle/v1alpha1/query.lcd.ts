import { LCDClient } from "@cosmology/lcd";
import { QueryOperatorRequest, QueryOperatorResponseSDKType, QueryOperatorsRequest, QueryOperatorsResponseSDKType, QueryWithdrawsRequest, QueryWithdrawsResponseSDKType, QueryTaskRequest, QueryTaskResponseSDKType, QueryTxTaskRequest, QueryTxTaskResponseSDKType, QueryResponseRequest, QueryResponseResponseSDKType, QueryTxResponseRequest, QueryTxResponseResponseSDKType, QueryParamsRequest, QueryParamsResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.operator = this.operator.bind(this);
    this.operators = this.operators.bind(this);
    this.withdraws = this.withdraws.bind(this);
    this.task = this.task.bind(this);
    this.txTask = this.txTask.bind(this);
    this.response = this.response.bind(this);
    this.txResponse = this.txResponse.bind(this);
    this.params = this.params.bind(this);
  }
  /* Operator */
  async operator(params: QueryOperatorRequest): Promise<QueryOperatorResponseSDKType> {
    const endpoint = `shentu/oracle/v1alpha1/operator/${params.address}`;
    return await this.req.get<QueryOperatorResponseSDKType>(endpoint);
  }
  /* Operators */
  async operators(_params: QueryOperatorsRequest = {}): Promise<QueryOperatorsResponseSDKType> {
    const endpoint = `shentu/oracle/v1alpha1/operators`;
    return await this.req.get<QueryOperatorsResponseSDKType>(endpoint);
  }
  /* Withdraws */
  async withdraws(_params: QueryWithdrawsRequest = {}): Promise<QueryWithdrawsResponseSDKType> {
    const endpoint = `shentu/oracle/v1alpha1/withdraws`;
    return await this.req.get<QueryWithdrawsResponseSDKType>(endpoint);
  }
  /* Task */
  async task(params: QueryTaskRequest): Promise<QueryTaskResponseSDKType> {
    const endpoint = `shentu/oracle/v1alpha1/contract/${params.contract}/function/${params.function}/task`;
    return await this.req.get<QueryTaskResponseSDKType>(endpoint);
  }
  /* TxTask */
  async txTask(params: QueryTxTaskRequest): Promise<QueryTxTaskResponseSDKType> {
    const endpoint = `shentu/oracle/v1alpha1/txhash/${params.atxHash}/txtask`;
    return await this.req.get<QueryTxTaskResponseSDKType>(endpoint);
  }
  /* Response */
  async response(params: QueryResponseRequest): Promise<QueryResponseResponseSDKType> {
    const endpoint = `shentu/oracle/v1alpha1/contract/${params.contract}/function/${params.function}/operator/${params.operatorAddress}/Response`;
    return await this.req.get<QueryResponseResponseSDKType>(endpoint);
  }
  /* TxResponse */
  async txResponse(params: QueryTxResponseRequest): Promise<QueryTxResponseResponseSDKType> {
    const endpoint = `shentu/oracle/v1alpha1/txhash/${params.atxHash}/operator/${params.operatorAddress}/Response`;
    return await this.req.get<QueryTxResponseResponseSDKType>(endpoint);
  }
  /* Params queries all parameters of the oracle module. */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `shentu/oracle/v1alpha1/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
}