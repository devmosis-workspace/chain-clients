import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryEscrowRequest, QueryEscrowResponse, QueryEscrowsRequest, QueryEscrowsResponse } from "./query";
/** Query provides defines the gRPC querier service */
export interface Query {
  /** Escrow queries the escrow by the specified id */
  escrow(request: QueryEscrowRequest): Promise<QueryEscrowResponse>;
  /** Escrows queries escrows by the specified key-value pairs */
  escrows(request: QueryEscrowsRequest): Promise<QueryEscrowsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.escrow = this.escrow.bind(this);
    this.escrows = this.escrows.bind(this);
  }
  escrow(request: QueryEscrowRequest): Promise<QueryEscrowResponse> {
    const data = QueryEscrowRequest.encode(request).finish();
    const promise = this.rpc.request("starnamed.x.escrow.v1beta1.Query", "Escrow", data);
    return promise.then(data => QueryEscrowResponse.decode(new _m0.Reader(data)));
  }
  escrows(request: QueryEscrowsRequest): Promise<QueryEscrowsResponse> {
    const data = QueryEscrowsRequest.encode(request).finish();
    const promise = this.rpc.request("starnamed.x.escrow.v1beta1.Query", "Escrows", data);
    return promise.then(data => QueryEscrowsResponse.decode(new _m0.Reader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    escrow(request: QueryEscrowRequest): Promise<QueryEscrowResponse> {
      return queryService.escrow(request);
    },
    escrows(request: QueryEscrowsRequest): Promise<QueryEscrowsResponse> {
      return queryService.escrows(request);
    }
  };
};