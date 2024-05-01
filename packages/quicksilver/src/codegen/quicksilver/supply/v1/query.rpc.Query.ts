import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QuerySupplyRequest, QuerySupplyResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Supply provide running epochInfos */
  supply(request?: QuerySupplyRequest): Promise<QuerySupplyResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.supply = this.supply.bind(this);
  }
  supply(request: QuerySupplyRequest = {}): Promise<QuerySupplyResponse> {
    const data = QuerySupplyRequest.encode(request).finish();
    const promise = this.rpc.request("quicksilver.supply.v1.Query", "Supply", data);
    return promise.then(data => QuerySupplyResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    supply(request?: QuerySupplyRequest): Promise<QuerySupplyResponse> {
      return queryService.supply(request);
    }
  };
};