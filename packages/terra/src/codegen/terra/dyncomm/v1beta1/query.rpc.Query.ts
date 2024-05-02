import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryRateRequest, QueryRateResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Params queries all parameters. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  rate(request: QueryRateRequest): Promise<QueryRateResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.rate = this.rate.bind(this);
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("terra.dyncomm.v1beta1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  rate(request: QueryRateRequest): Promise<QueryRateResponse> {
    const data = QueryRateRequest.encode(request).finish();
    const promise = this.rpc.request("terra.dyncomm.v1beta1.Query", "Rate", data);
    return promise.then(data => QueryRateResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    rate(request: QueryRateRequest): Promise<QueryRateResponse> {
      return queryService.rate(request);
    }
  };
};