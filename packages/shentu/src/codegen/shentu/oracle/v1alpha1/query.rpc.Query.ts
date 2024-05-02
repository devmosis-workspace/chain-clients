import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
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
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.operator = this.operator.bind(this);
    this.operators = this.operators.bind(this);
    this.withdraws = this.withdraws.bind(this);
    this.task = this.task.bind(this);
    this.txTask = this.txTask.bind(this);
    this.response = this.response.bind(this);
    this.txResponse = this.txResponse.bind(this);
    this.params = this.params.bind(this);
  }
  operator(request: QueryOperatorRequest): Promise<QueryOperatorResponse> {
    const data = QueryOperatorRequest.encode(request).finish();
    const promise = this.rpc.request("shentu.oracle.v1alpha1.Query", "Operator", data);
    return promise.then(data => QueryOperatorResponse.decode(new BinaryReader(data)));
  }
  operators(request: QueryOperatorsRequest = {}): Promise<QueryOperatorsResponse> {
    const data = QueryOperatorsRequest.encode(request).finish();
    const promise = this.rpc.request("shentu.oracle.v1alpha1.Query", "Operators", data);
    return promise.then(data => QueryOperatorsResponse.decode(new BinaryReader(data)));
  }
  withdraws(request: QueryWithdrawsRequest = {}): Promise<QueryWithdrawsResponse> {
    const data = QueryWithdrawsRequest.encode(request).finish();
    const promise = this.rpc.request("shentu.oracle.v1alpha1.Query", "Withdraws", data);
    return promise.then(data => QueryWithdrawsResponse.decode(new BinaryReader(data)));
  }
  task(request: QueryTaskRequest): Promise<QueryTaskResponse> {
    const data = QueryTaskRequest.encode(request).finish();
    const promise = this.rpc.request("shentu.oracle.v1alpha1.Query", "Task", data);
    return promise.then(data => QueryTaskResponse.decode(new BinaryReader(data)));
  }
  txTask(request: QueryTxTaskRequest): Promise<QueryTxTaskResponse> {
    const data = QueryTxTaskRequest.encode(request).finish();
    const promise = this.rpc.request("shentu.oracle.v1alpha1.Query", "TxTask", data);
    return promise.then(data => QueryTxTaskResponse.decode(new BinaryReader(data)));
  }
  response(request: QueryResponseRequest): Promise<QueryResponseResponse> {
    const data = QueryResponseRequest.encode(request).finish();
    const promise = this.rpc.request("shentu.oracle.v1alpha1.Query", "Response", data);
    return promise.then(data => QueryResponseResponse.decode(new BinaryReader(data)));
  }
  txResponse(request: QueryTxResponseRequest): Promise<QueryTxResponseResponse> {
    const data = QueryTxResponseRequest.encode(request).finish();
    const promise = this.rpc.request("shentu.oracle.v1alpha1.Query", "TxResponse", data);
    return promise.then(data => QueryTxResponseResponse.decode(new BinaryReader(data)));
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("shentu.oracle.v1alpha1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    operator(request: QueryOperatorRequest): Promise<QueryOperatorResponse> {
      return queryService.operator(request);
    },
    operators(request?: QueryOperatorsRequest): Promise<QueryOperatorsResponse> {
      return queryService.operators(request);
    },
    withdraws(request?: QueryWithdrawsRequest): Promise<QueryWithdrawsResponse> {
      return queryService.withdraws(request);
    },
    task(request: QueryTaskRequest): Promise<QueryTaskResponse> {
      return queryService.task(request);
    },
    txTask(request: QueryTxTaskRequest): Promise<QueryTxTaskResponse> {
      return queryService.txTask(request);
    },
    response(request: QueryResponseRequest): Promise<QueryResponseResponse> {
      return queryService.response(request);
    },
    txResponse(request: QueryTxResponseRequest): Promise<QueryTxResponseResponse> {
      return queryService.txResponse(request);
    },
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    }
  };
};