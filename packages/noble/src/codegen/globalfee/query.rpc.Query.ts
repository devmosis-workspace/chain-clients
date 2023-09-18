import { Rpc } from "../helpers";
import { BinaryReader } from "../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest } from "./query";
import { Params } from "./genesis";
/** Query defines the gRPC querier service. */
export interface Query {
  params(request?: QueryParamsRequest): Promise<Params>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
  }
  params(request: QueryParamsRequest = {}): Promise<Params> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("noble.globalfee.Query", "Params", data);
    return promise.then(data => Params.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<Params> {
      return queryService.params(request);
    }
  };
};