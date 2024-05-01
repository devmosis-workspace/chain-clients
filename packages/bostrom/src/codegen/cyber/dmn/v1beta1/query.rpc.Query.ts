import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryThoughtParamsRequest, QueryThoughtResponse, QueryThoughtStatsResponse, QueryThoughtsRequest, QueryThoughtsResponse, QueryThoughtsStatsRequest, QueryThoughtsStatsResponse } from "./query";
export interface Query {
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  thought(request: QueryThoughtParamsRequest): Promise<QueryThoughtResponse>;
  thoughtStats(request: QueryThoughtParamsRequest): Promise<QueryThoughtStatsResponse>;
  thoughts(request?: QueryThoughtsRequest): Promise<QueryThoughtsResponse>;
  thoughtsStats(request?: QueryThoughtsStatsRequest): Promise<QueryThoughtsStatsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.thought = this.thought.bind(this);
    this.thoughtStats = this.thoughtStats.bind(this);
    this.thoughts = this.thoughts.bind(this);
    this.thoughtsStats = this.thoughtsStats.bind(this);
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("cyber.dmn.v1beta1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  thought(request: QueryThoughtParamsRequest): Promise<QueryThoughtResponse> {
    const data = QueryThoughtParamsRequest.encode(request).finish();
    const promise = this.rpc.request("cyber.dmn.v1beta1.Query", "Thought", data);
    return promise.then(data => QueryThoughtResponse.decode(new BinaryReader(data)));
  }
  thoughtStats(request: QueryThoughtParamsRequest): Promise<QueryThoughtStatsResponse> {
    const data = QueryThoughtParamsRequest.encode(request).finish();
    const promise = this.rpc.request("cyber.dmn.v1beta1.Query", "ThoughtStats", data);
    return promise.then(data => QueryThoughtStatsResponse.decode(new BinaryReader(data)));
  }
  thoughts(request: QueryThoughtsRequest = {}): Promise<QueryThoughtsResponse> {
    const data = QueryThoughtsRequest.encode(request).finish();
    const promise = this.rpc.request("cyber.dmn.v1beta1.Query", "Thoughts", data);
    return promise.then(data => QueryThoughtsResponse.decode(new BinaryReader(data)));
  }
  thoughtsStats(request: QueryThoughtsStatsRequest = {}): Promise<QueryThoughtsStatsResponse> {
    const data = QueryThoughtsStatsRequest.encode(request).finish();
    const promise = this.rpc.request("cyber.dmn.v1beta1.Query", "ThoughtsStats", data);
    return promise.then(data => QueryThoughtsStatsResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    thought(request: QueryThoughtParamsRequest): Promise<QueryThoughtResponse> {
      return queryService.thought(request);
    },
    thoughtStats(request: QueryThoughtParamsRequest): Promise<QueryThoughtStatsResponse> {
      return queryService.thoughtStats(request);
    },
    thoughts(request?: QueryThoughtsRequest): Promise<QueryThoughtsResponse> {
      return queryService.thoughts(request);
    },
    thoughtsStats(request?: QueryThoughtsStatsRequest): Promise<QueryThoughtsStatsResponse> {
      return queryService.thoughtsStats(request);
    }
  };
};