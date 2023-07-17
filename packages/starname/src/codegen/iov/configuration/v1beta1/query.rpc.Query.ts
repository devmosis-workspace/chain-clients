import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryConfigRequest, QueryConfigResponse, QueryFeesRequest, QueryFeesResponse } from "./query";
/** Query provides defines the gRPC querier service. */
export interface Query {
  /** Config gets starname configuration. */
  config(request?: QueryConfigRequest): Promise<QueryConfigResponse>;
  /** Fees gets starname product fees. */
  fees(request?: QueryFeesRequest): Promise<QueryFeesResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.config = this.config.bind(this);
    this.fees = this.fees.bind(this);
  }
  config(request: QueryConfigRequest = {}): Promise<QueryConfigResponse> {
    const data = QueryConfigRequest.encode(request).finish();
    const promise = this.rpc.request("starnamed.x.configuration.v1beta1.Query", "Config", data);
    return promise.then(data => QueryConfigResponse.decode(new _m0.Reader(data)));
  }
  fees(request: QueryFeesRequest = {}): Promise<QueryFeesResponse> {
    const data = QueryFeesRequest.encode(request).finish();
    const promise = this.rpc.request("starnamed.x.configuration.v1beta1.Query", "Fees", data);
    return promise.then(data => QueryFeesResponse.decode(new _m0.Reader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    config(request?: QueryConfigRequest): Promise<QueryConfigResponse> {
      return queryService.config(request);
    },
    fees(request?: QueryFeesRequest): Promise<QueryFeesResponse> {
      return queryService.fees(request);
    }
  };
};