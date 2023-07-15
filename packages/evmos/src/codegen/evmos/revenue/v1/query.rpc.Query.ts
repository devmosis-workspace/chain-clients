import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryRevenuesRequest, QueryRevenuesResponse, QueryRevenueRequest, QueryRevenueResponse, QueryParamsRequest, QueryParamsResponse, QueryDeployerRevenuesRequest, QueryDeployerRevenuesResponse, QueryWithdrawerRevenuesRequest, QueryWithdrawerRevenuesResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Revenues retrieves all registered revenues */
  revenues(request?: QueryRevenuesRequest): Promise<QueryRevenuesResponse>;
  /** Revenue retrieves a registered revenue for a given contract address */
  revenue(request: QueryRevenueRequest): Promise<QueryRevenueResponse>;
  /** Params retrieves the revenue module params */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /**
   * DeployerRevenues retrieves all revenues that a given deployer has
   * registered
   */
  deployerRevenues(request: QueryDeployerRevenuesRequest): Promise<QueryDeployerRevenuesResponse>;
  /**
   * WithdrawerRevenues retrieves all revenues with a given withdrawer
   * address
   */
  withdrawerRevenues(request: QueryWithdrawerRevenuesRequest): Promise<QueryWithdrawerRevenuesResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.revenues = this.revenues.bind(this);
    this.revenue = this.revenue.bind(this);
    this.params = this.params.bind(this);
    this.deployerRevenues = this.deployerRevenues.bind(this);
    this.withdrawerRevenues = this.withdrawerRevenues.bind(this);
  }
  revenues(request: QueryRevenuesRequest = {
    pagination: undefined
  }): Promise<QueryRevenuesResponse> {
    const data = QueryRevenuesRequest.encode(request).finish();
    const promise = this.rpc.request("evmos.revenue.v1.Query", "Revenues", data);
    return promise.then(data => QueryRevenuesResponse.decode(new _m0.Reader(data)));
  }
  revenue(request: QueryRevenueRequest): Promise<QueryRevenueResponse> {
    const data = QueryRevenueRequest.encode(request).finish();
    const promise = this.rpc.request("evmos.revenue.v1.Query", "Revenue", data);
    return promise.then(data => QueryRevenueResponse.decode(new _m0.Reader(data)));
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("evmos.revenue.v1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }
  deployerRevenues(request: QueryDeployerRevenuesRequest): Promise<QueryDeployerRevenuesResponse> {
    const data = QueryDeployerRevenuesRequest.encode(request).finish();
    const promise = this.rpc.request("evmos.revenue.v1.Query", "DeployerRevenues", data);
    return promise.then(data => QueryDeployerRevenuesResponse.decode(new _m0.Reader(data)));
  }
  withdrawerRevenues(request: QueryWithdrawerRevenuesRequest): Promise<QueryWithdrawerRevenuesResponse> {
    const data = QueryWithdrawerRevenuesRequest.encode(request).finish();
    const promise = this.rpc.request("evmos.revenue.v1.Query", "WithdrawerRevenues", data);
    return promise.then(data => QueryWithdrawerRevenuesResponse.decode(new _m0.Reader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    revenues(request?: QueryRevenuesRequest): Promise<QueryRevenuesResponse> {
      return queryService.revenues(request);
    },
    revenue(request: QueryRevenueRequest): Promise<QueryRevenueResponse> {
      return queryService.revenue(request);
    },
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    deployerRevenues(request: QueryDeployerRevenuesRequest): Promise<QueryDeployerRevenuesResponse> {
      return queryService.deployerRevenues(request);
    },
    withdrawerRevenues(request: QueryWithdrawerRevenuesRequest): Promise<QueryWithdrawerRevenuesResponse> {
      return queryService.withdrawerRevenues(request);
    }
  };
};