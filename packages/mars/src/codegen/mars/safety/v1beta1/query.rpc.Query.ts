import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryBalancesRequest, QueryBalancesResponse } from "./query";
/** Query defines the gRPC querier service for the safety fund module */
export interface Query {
  /** Balances queries coins available in the safety fund */
  balances(request?: QueryBalancesRequest): Promise<QueryBalancesResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.balances = this.balances.bind(this);
  }
  balances(request: QueryBalancesRequest = {}): Promise<QueryBalancesResponse> {
    const data = QueryBalancesRequest.encode(request).finish();
    const promise = this.rpc.request("mars.safety.v1beta1.Query", "Balances", data);
    return promise.then(data => QueryBalancesResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    balances(request?: QueryBalancesRequest): Promise<QueryBalancesResponse> {
      return queryService.balances(request);
    }
  };
};