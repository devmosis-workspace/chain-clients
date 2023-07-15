import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryListPrivilegedRequest, QueryListPrivilegedResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** ListPrivileged queries the contracts which have the priviledge status */
  listPrivileged(request?: QueryListPrivilegedRequest): Promise<QueryListPrivilegedResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.listPrivileged = this.listPrivileged.bind(this);
  }
  listPrivileged(request: QueryListPrivilegedRequest = {}): Promise<QueryListPrivilegedResponse> {
    const data = QueryListPrivilegedRequest.encode(request).finish();
    const promise = this.rpc.request("publicawesome.stargaze.cron.v1.Query", "ListPrivileged", data);
    return promise.then(data => QueryListPrivilegedResponse.decode(new _m0.Reader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    listPrivileged(request?: QueryListPrivilegedRequest): Promise<QueryListPrivilegedResponse> {
      return queryService.listPrivileged(request);
    }
  };
};