import { Rpc } from "../../helpers";
import { BinaryReader } from "../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryDataRequest, QueryDataResponse, QueryChildrenRequest, QueryChildrenResponse } from "./query";
/** Query defines the gRPC querier service */
export interface Query {
  /** Return an arbitrary vstorage datum. */
  data(request: QueryDataRequest): Promise<QueryDataResponse>;
  /** Return the children of a given vstorage path. */
  children(request: QueryChildrenRequest): Promise<QueryChildrenResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.data = this.data.bind(this);
    this.children = this.children.bind(this);
  }
  data(request: QueryDataRequest): Promise<QueryDataResponse> {
    const data = QueryDataRequest.encode(request).finish();
    const promise = this.rpc.request("agoric.vstorage.Query", "Data", data);
    return promise.then(data => QueryDataResponse.decode(new BinaryReader(data)));
  }
  children(request: QueryChildrenRequest): Promise<QueryChildrenResponse> {
    const data = QueryChildrenRequest.encode(request).finish();
    const promise = this.rpc.request("agoric.vstorage.Query", "Children", data);
    return promise.then(data => QueryChildrenResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    data(request: QueryDataRequest): Promise<QueryDataResponse> {
      return queryService.data(request);
    },
    children(request: QueryChildrenRequest): Promise<QueryChildrenResponse> {
      return queryService.children(request);
    }
  };
};