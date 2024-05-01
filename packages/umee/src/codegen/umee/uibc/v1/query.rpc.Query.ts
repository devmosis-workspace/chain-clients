import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParams, QueryParamsResponse, QueryOutflows, QueryOutflowsResponse, QueryAllOutflows, QueryAllOutflowsResponse, QueryInflows, QueryInflowsResponse, QueryQuotaExpires, QueryQuotaExpiresResponse } from "./query";
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
  /**
   * Inflows returns registered IBC denoms inflows in the current quota period.
   * If denom is not specified, returns sum of all registered inflows.
   */
  inflows(request: QueryInflows): Promise<QueryInflowsResponse>;
  /** QuotaExpires returns when current ibc quota will end. */
  quotaExpires(request?: QueryQuotaExpires): Promise<QueryQuotaExpiresResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.outflows = this.outflows.bind(this);
    this.allOutflows = this.allOutflows.bind(this);
    this.inflows = this.inflows.bind(this);
    this.quotaExpires = this.quotaExpires.bind(this);
  }
  params(request: QueryParams = {}): Promise<QueryParamsResponse> {
    const data = QueryParams.encode(request).finish();
    const promise = this.rpc.request("umee.uibc.v1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  outflows(request: QueryOutflows): Promise<QueryOutflowsResponse> {
    const data = QueryOutflows.encode(request).finish();
    const promise = this.rpc.request("umee.uibc.v1.Query", "Outflows", data);
    return promise.then(data => QueryOutflowsResponse.decode(new BinaryReader(data)));
  }
  allOutflows(request: QueryAllOutflows = {}): Promise<QueryAllOutflowsResponse> {
    const data = QueryAllOutflows.encode(request).finish();
    const promise = this.rpc.request("umee.uibc.v1.Query", "AllOutflows", data);
    return promise.then(data => QueryAllOutflowsResponse.decode(new BinaryReader(data)));
  }
  inflows(request: QueryInflows): Promise<QueryInflowsResponse> {
    const data = QueryInflows.encode(request).finish();
    const promise = this.rpc.request("umee.uibc.v1.Query", "Inflows", data);
    return promise.then(data => QueryInflowsResponse.decode(new BinaryReader(data)));
  }
  quotaExpires(request: QueryQuotaExpires = {}): Promise<QueryQuotaExpiresResponse> {
    const data = QueryQuotaExpires.encode(request).finish();
    const promise = this.rpc.request("umee.uibc.v1.Query", "QuotaExpires", data);
    return promise.then(data => QueryQuotaExpiresResponse.decode(new BinaryReader(data)));
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
    },
    inflows(request: QueryInflows): Promise<QueryInflowsResponse> {
      return queryService.inflows(request);
    },
    quotaExpires(request?: QueryQuotaExpires): Promise<QueryQuotaExpiresResponse> {
      return queryService.quotaExpires(request);
    }
  };
};