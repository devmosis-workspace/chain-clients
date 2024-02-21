import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryDenomTraceRequest, QueryDenomTraceResponse, QueryDenomTracesRequest, QueryDenomTracesResponse, QueryParamsRequest, QueryParamsResponse, QueryDenomHashRequest, QueryDenomHashResponse } from "../../../ibc/applications/transfer/v1/query";
/** Query provides defines the gRPC querier service. */
export interface Query {
  /** DenomTrace queries a denomination trace information. */
  denomTrace(request: ibc.applications.transfer.v1.QueryDenomTraceRequest): Promise<QueryDenomTraceResponse>;
  /** DenomTraces queries all denomination traces. */
  denomTraces(request?: ibc.applications.transfer.v1.QueryDenomTracesRequest): Promise<QueryDenomTracesResponse>;
  /** Params queries all parameters of the ibc-transfer module. */
  params(request?: ibc.applications.transfer.v1.QueryParamsRequest): Promise<QueryParamsResponse>;
  /** DenomHash queries a denomination hash information. */
  denomHash(request: ibc.applications.transfer.v1.QueryDenomHashRequest): Promise<QueryDenomHashResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.denomTrace = this.denomTrace.bind(this);
    this.denomTraces = this.denomTraces.bind(this);
    this.params = this.params.bind(this);
    this.denomHash = this.denomHash.bind(this);
  }
  denomTrace(request: ibc.applications.transfer.v1.QueryDenomTraceRequest): Promise<QueryDenomTraceResponse> {
    const data = ibc.applications.transfer.v1.QueryDenomTraceRequest.encode(request).finish();
    const promise = this.rpc.request("neutron.transfer.Query", "DenomTrace", data);
    return promise.then(data => QueryDenomTraceResponse.decode(new BinaryReader(data)));
  }
  denomTraces(request: ibc.applications.transfer.v1.QueryDenomTracesRequest = {
    pagination: undefined
  }): Promise<QueryDenomTracesResponse> {
    const data = ibc.applications.transfer.v1.QueryDenomTracesRequest.encode(request).finish();
    const promise = this.rpc.request("neutron.transfer.Query", "DenomTraces", data);
    return promise.then(data => QueryDenomTracesResponse.decode(new BinaryReader(data)));
  }
  params(request: ibc.applications.transfer.v1.QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = ibc.applications.transfer.v1.QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("neutron.transfer.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  denomHash(request: ibc.applications.transfer.v1.QueryDenomHashRequest): Promise<QueryDenomHashResponse> {
    const data = ibc.applications.transfer.v1.QueryDenomHashRequest.encode(request).finish();
    const promise = this.rpc.request("neutron.transfer.Query", "DenomHash", data);
    return promise.then(data => QueryDenomHashResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    denomTrace(request: ibc.applications.transfer.v1.QueryDenomTraceRequest): Promise<ibc.applications.transfer.v1.QueryDenomTraceResponse> {
      return queryService.denomTrace(request);
    },
    denomTraces(request?: ibc.applications.transfer.v1.QueryDenomTracesRequest): Promise<ibc.applications.transfer.v1.QueryDenomTracesResponse> {
      return queryService.denomTraces(request);
    },
    params(request?: ibc.applications.transfer.v1.QueryParamsRequest): Promise<ibc.applications.transfer.v1.QueryParamsResponse> {
      return queryService.params(request);
    },
    denomHash(request: ibc.applications.transfer.v1.QueryDenomHashRequest): Promise<ibc.applications.transfer.v1.QueryDenomHashResponse> {
      return queryService.denomHash(request);
    }
  };
};