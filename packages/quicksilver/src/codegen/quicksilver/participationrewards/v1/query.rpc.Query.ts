import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryProtocolDataRequest, QueryProtocolDataResponse } from "./query";
/** Query provides defines the gRPC querier service. */
export interface Query {
  /** Params returns the total set of participation rewards parameters. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** ProtocolData returns the requested protocol data. */
  protocolData(request: QueryProtocolDataRequest): Promise<QueryProtocolDataResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.protocolData = this.protocolData.bind(this);
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("quicksilver.participationrewards.v1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  protocolData(request: QueryProtocolDataRequest): Promise<QueryProtocolDataResponse> {
    const data = QueryProtocolDataRequest.encode(request).finish();
    const promise = this.rpc.request("quicksilver.participationrewards.v1.Query", "ProtocolData", data);
    return promise.then(data => QueryProtocolDataResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    protocolData(request: QueryProtocolDataRequest): Promise<QueryProtocolDataResponse> {
      return queryService.protocolData(request);
    }
  };
};