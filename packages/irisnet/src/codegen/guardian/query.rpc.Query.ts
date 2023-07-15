import { Rpc } from "../helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QuerySupersRequest, QuerySupersResponse } from "./query";
/** Query creates service with guardian as RPC */
export interface Query {
  /** Supers returns all Supers */
  supers(request?: QuerySupersRequest): Promise<QuerySupersResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.supers = this.supers.bind(this);
  }
  supers(request: QuerySupersRequest = {
    pagination: undefined
  }): Promise<QuerySupersResponse> {
    const data = QuerySupersRequest.encode(request).finish();
    const promise = this.rpc.request("irishub.guardian.Query", "Supers", data);
    return promise.then(data => QuerySupersResponse.decode(new _m0.Reader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    supers(request?: QuerySupersRequest): Promise<QuerySupersResponse> {
      return queryService.supers(request);
    }
  };
};