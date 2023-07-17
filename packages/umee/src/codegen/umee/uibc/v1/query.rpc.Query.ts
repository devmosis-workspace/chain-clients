import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParams, QueryParamsResponse, QueryOutflows, QueryOutflowsResponse, QueryAllOutflows, QueryAllOutflowsResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Params queries the parameters of the x/uibc module. */
  params(request?: QueryParams): Promise<QueryParamsResponse>;
  /**
   * Outflow returns IBC denom outflows in the current quota period.
   * If denom is not specified, returns sum of all registered outflows.
   */
  outflows(request: QueryOutflows): Promise<QueryOutflowsResponse>;
  /** AllOutflow returns outflows for each denom in the current quota period. */
  allOutflows(request?: QueryAllOutflows): Promise<QueryAllOutflowsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.outflows = this.outflows.bind(this);
    this.allOutflows = this.allOutflows.bind(this);
  }
  params(request: QueryParams = {}): Promise<QueryParamsResponse> {
    const data = QueryParams.encode(request).finish();
    const promise = this.rpc.request("umee.uibc.v1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }
  outflows(request: QueryOutflows): Promise<QueryOutflowsResponse> {
    const data = QueryOutflows.encode(request).finish();
    const promise = this.rpc.request("umee.uibc.v1.Query", "Outflows", data);
    return promise.then(data => QueryOutflowsResponse.decode(new _m0.Reader(data)));
  }
  allOutflows(request: QueryAllOutflows = {}): Promise<QueryAllOutflowsResponse> {
    const data = QueryAllOutflows.encode(request).finish();
    const promise = this.rpc.request("umee.uibc.v1.Query", "AllOutflows", data);
    return promise.then(data => QueryAllOutflowsResponse.decode(new _m0.Reader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParams): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    outflows(request: QueryOutflows): Promise<QueryOutflowsResponse> {
      return queryService.outflows(request);
    },
    allOutflows(request?: QueryAllOutflows): Promise<QueryAllOutflowsResponse> {
      return queryService.allOutflows(request);
    }
  };
};