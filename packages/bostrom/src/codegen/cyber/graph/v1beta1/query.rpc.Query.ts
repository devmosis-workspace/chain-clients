import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryGraphStatsRequest, QueryGraphStatsResponse } from "./query";
export interface Query {
  graphStats(request?: QueryGraphStatsRequest): Promise<QueryGraphStatsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.graphStats = this.graphStats.bind(this);
  }
  graphStats(request: QueryGraphStatsRequest = {}): Promise<QueryGraphStatsResponse> {
    const data = QueryGraphStatsRequest.encode(request).finish();
    const promise = this.rpc.request("cyber.graph.v1beta1.Query", "GraphStats", data);
    return promise.then(data => QueryGraphStatsResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    graphStats(request?: QueryGraphStatsRequest): Promise<QueryGraphStatsResponse> {
      return queryService.graphStats(request);
    }
  };
};