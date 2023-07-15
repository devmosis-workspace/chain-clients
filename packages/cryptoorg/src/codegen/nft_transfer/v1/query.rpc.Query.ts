import { Rpc } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryClassTraceRequest, QueryClassTraceResponse, QueryClassTracesRequest, QueryClassTracesResponse, QueryClassHashRequest, QueryClassHashResponse, QueryEscrowAddressRequest, QueryEscrowAddressResponse } from "./query";
/** Query provides defines the gRPC querier service. */
export interface Query {
  /** ClassTrace queries a class trace information. */
  classTrace(request: QueryClassTraceRequest): Promise<QueryClassTraceResponse>;
  /** ClassTraces queries all class traces. */
  classTraces(request?: QueryClassTracesRequest): Promise<QueryClassTracesResponse>;
  /** ClassHash queries a class hash information. */
  classHash(request: QueryClassHashRequest): Promise<QueryClassHashResponse>;
  /** EscrowAddress returns the escrow address for a particular port and channel id. */
  escrowAddress(request: QueryEscrowAddressRequest): Promise<QueryEscrowAddressResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.classTrace = this.classTrace.bind(this);
    this.classTraces = this.classTraces.bind(this);
    this.classHash = this.classHash.bind(this);
    this.escrowAddress = this.escrowAddress.bind(this);
  }
  classTrace(request: QueryClassTraceRequest): Promise<QueryClassTraceResponse> {
    const data = QueryClassTraceRequest.encode(request).finish();
    const promise = this.rpc.request("chainmain.nft_transfer.v1.Query", "ClassTrace", data);
    return promise.then(data => QueryClassTraceResponse.decode(new _m0.Reader(data)));
  }
  classTraces(request: QueryClassTracesRequest = {
    pagination: undefined
  }): Promise<QueryClassTracesResponse> {
    const data = QueryClassTracesRequest.encode(request).finish();
    const promise = this.rpc.request("chainmain.nft_transfer.v1.Query", "ClassTraces", data);
    return promise.then(data => QueryClassTracesResponse.decode(new _m0.Reader(data)));
  }
  classHash(request: QueryClassHashRequest): Promise<QueryClassHashResponse> {
    const data = QueryClassHashRequest.encode(request).finish();
    const promise = this.rpc.request("chainmain.nft_transfer.v1.Query", "ClassHash", data);
    return promise.then(data => QueryClassHashResponse.decode(new _m0.Reader(data)));
  }
  escrowAddress(request: QueryEscrowAddressRequest): Promise<QueryEscrowAddressResponse> {
    const data = QueryEscrowAddressRequest.encode(request).finish();
    const promise = this.rpc.request("chainmain.nft_transfer.v1.Query", "EscrowAddress", data);
    return promise.then(data => QueryEscrowAddressResponse.decode(new _m0.Reader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    classTrace(request: QueryClassTraceRequest): Promise<QueryClassTraceResponse> {
      return queryService.classTrace(request);
    },
    classTraces(request?: QueryClassTracesRequest): Promise<QueryClassTracesResponse> {
      return queryService.classTraces(request);
    },
    classHash(request: QueryClassHashRequest): Promise<QueryClassHashResponse> {
      return queryService.classHash(request);
    },
    escrowAddress(request: QueryEscrowAddressRequest): Promise<QueryEscrowAddressResponse> {
      return queryService.escrowAddress(request);
    }
  };
};