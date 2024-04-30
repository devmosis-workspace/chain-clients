import { Rpc } from "../../helpers";
import { BinaryReader } from "../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryStateRequest, QueryStateResponse, QueryChainParamsRequest, QueryChainParamsResponse, QueryIncentivizedPoolsRequest, QueryIncentivizedPoolsResponse, QueryPoolsRequest, QueryPoolsResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries the state of oracle requests. */
  state(request?: QueryStateRequest): Promise<QueryStateResponse>;
  /** Queries latest fetched params from osmosis chain. */
  chainParams(request?: QueryChainParamsRequest): Promise<QueryChainParamsResponse>;
  /** Queries latest fetched list of incentivized pools from osmosis. */
  incentivizedPools(request?: QueryIncentivizedPoolsRequest): Promise<QueryIncentivizedPoolsResponse>;
  /** Queries latest fetched list of pool details from osmosis. */
  pools(request?: QueryPoolsRequest): Promise<QueryPoolsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.state = this.state.bind(this);
    this.chainParams = this.chainParams.bind(this);
    this.incentivizedPools = this.incentivizedPools.bind(this);
    this.pools = this.pools.bind(this);
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("quasarlabs.quasarnode.qoracle.osmosis.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  state(request: QueryStateRequest = {}): Promise<QueryStateResponse> {
    const data = QueryStateRequest.encode(request).finish();
    const promise = this.rpc.request("quasarlabs.quasarnode.qoracle.osmosis.Query", "State", data);
    return promise.then(data => QueryStateResponse.decode(new BinaryReader(data)));
  }
  chainParams(request: QueryChainParamsRequest = {}): Promise<QueryChainParamsResponse> {
    const data = QueryChainParamsRequest.encode(request).finish();
    const promise = this.rpc.request("quasarlabs.quasarnode.qoracle.osmosis.Query", "ChainParams", data);
    return promise.then(data => QueryChainParamsResponse.decode(new BinaryReader(data)));
  }
  incentivizedPools(request: QueryIncentivizedPoolsRequest = {}): Promise<QueryIncentivizedPoolsResponse> {
    const data = QueryIncentivizedPoolsRequest.encode(request).finish();
    const promise = this.rpc.request("quasarlabs.quasarnode.qoracle.osmosis.Query", "IncentivizedPools", data);
    return promise.then(data => QueryIncentivizedPoolsResponse.decode(new BinaryReader(data)));
  }
  pools(request: QueryPoolsRequest = {
    pagination: undefined
  }): Promise<QueryPoolsResponse> {
    const data = QueryPoolsRequest.encode(request).finish();
    const promise = this.rpc.request("quasarlabs.quasarnode.qoracle.osmosis.Query", "Pools", data);
    return promise.then(data => QueryPoolsResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    state(request?: QueryStateRequest): Promise<QueryStateResponse> {
      return queryService.state(request);
    },
    chainParams(request?: QueryChainParamsRequest): Promise<QueryChainParamsResponse> {
      return queryService.chainParams(request);
    },
    incentivizedPools(request?: QueryIncentivizedPoolsRequest): Promise<QueryIncentivizedPoolsResponse> {
      return queryService.incentivizedPools(request);
    },
    pools(request?: QueryPoolsRequest): Promise<QueryPoolsResponse> {
      return queryService.pools(request);
    }
  };
};