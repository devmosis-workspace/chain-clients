import { Rpc } from "../../helpers";
import { BinaryReader } from "../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryAPYRequest, QueryAPYResponse } from "./query";
/** Query defines the gRPC query service for the cork module. */
export interface Query {
  /** QueryParams queries the allocation module parameters. */
  queryParams(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** QueryAPY queries the APY returned from the incentives module. */
  queryAPY(request?: QueryAPYRequest): Promise<QueryAPYResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.queryParams = this.queryParams.bind(this);
    this.queryAPY = this.queryAPY.bind(this);
  }
  queryParams(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("incentives.v1.Query", "QueryParams", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  queryAPY(request: QueryAPYRequest = {}): Promise<QueryAPYResponse> {
    const data = QueryAPYRequest.encode(request).finish();
    const promise = this.rpc.request("incentives.v1.Query", "QueryAPY", data);
    return promise.then(data => QueryAPYResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    queryParams(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.queryParams(request);
    },
    queryAPY(request?: QueryAPYRequest): Promise<QueryAPYResponse> {
      return queryService.queryAPY(request);
    }
  };
};