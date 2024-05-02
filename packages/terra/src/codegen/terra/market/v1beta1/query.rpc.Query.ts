import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QuerySwapRequest, QuerySwapResponse, QueryTerraPoolDeltaRequest, QueryTerraPoolDeltaResponse, QueryParamsRequest, QueryParamsResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Swap returns simulated swap amount. */
  swap(request: QuerySwapRequest): Promise<QuerySwapResponse>;
  /** TerraPoolDelta returns terra_pool_delta amount. */
  terraPoolDelta(request?: QueryTerraPoolDeltaRequest): Promise<QueryTerraPoolDeltaResponse>;
  /** Params queries all parameters. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.swap = this.swap.bind(this);
    this.terraPoolDelta = this.terraPoolDelta.bind(this);
    this.params = this.params.bind(this);
  }
  swap(request: QuerySwapRequest): Promise<QuerySwapResponse> {
    const data = QuerySwapRequest.encode(request).finish();
    const promise = this.rpc.request("terra.market.v1beta1.Query", "Swap", data);
    return promise.then(data => QuerySwapResponse.decode(new BinaryReader(data)));
  }
  terraPoolDelta(request: QueryTerraPoolDeltaRequest = {}): Promise<QueryTerraPoolDeltaResponse> {
    const data = QueryTerraPoolDeltaRequest.encode(request).finish();
    const promise = this.rpc.request("terra.market.v1beta1.Query", "TerraPoolDelta", data);
    return promise.then(data => QueryTerraPoolDeltaResponse.decode(new BinaryReader(data)));
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("terra.market.v1beta1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    swap(request: QuerySwapRequest): Promise<QuerySwapResponse> {
      return queryService.swap(request);
    },
    terraPoolDelta(request?: QueryTerraPoolDeltaRequest): Promise<QueryTerraPoolDeltaResponse> {
      return queryService.terraPoolDelta(request);
    },
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    }
  };
};