import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryEntriesRequest, QueryEntriesResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  entries(request?: QueryEntriesRequest): Promise<QueryEntriesResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.entries = this.entries.bind(this);
  }
  entries(request: QueryEntriesRequest = {}): Promise<QueryEntriesResponse> {
    const data = QueryEntriesRequest.encode(request).finish();
    const promise = this.rpc.request("sifnode.tokenregistry.v1.Query", "Entries", data);
    return promise.then(data => QueryEntriesResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    entries(request?: QueryEntriesRequest): Promise<QueryEntriesResponse> {
      return queryService.entries(request);
    }
  };
};