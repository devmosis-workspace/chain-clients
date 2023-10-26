import { Rpc } from "../../helpers";
import { BinaryReader } from "../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryPerpetualRequest, QueryPerpetualResponse, QueryAllPerpetualsRequest, QueryAllPerpetualsResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Queries a Perpetual by id. */
  perpetual(request: QueryPerpetualRequest): Promise<QueryPerpetualResponse>;
  /** Queries a list of Perpetual items. */
  allPerpetuals(request?: QueryAllPerpetualsRequest): Promise<QueryAllPerpetualsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.perpetual = this.perpetual.bind(this);
    this.allPerpetuals = this.allPerpetuals.bind(this);
  }
  perpetual(request: QueryPerpetualRequest): Promise<QueryPerpetualResponse> {
    const data = QueryPerpetualRequest.encode(request).finish();
    const promise = this.rpc.request("dydxprotocol.perpetuals.Query", "Perpetual", data);
    return promise.then(data => QueryPerpetualResponse.decode(new BinaryReader(data)));
  }
  allPerpetuals(request: QueryAllPerpetualsRequest = {
    pagination: undefined
  }): Promise<QueryAllPerpetualsResponse> {
    const data = QueryAllPerpetualsRequest.encode(request).finish();
    const promise = this.rpc.request("dydxprotocol.perpetuals.Query", "AllPerpetuals", data);
    return promise.then(data => QueryAllPerpetualsResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    perpetual(request: QueryPerpetualRequest): Promise<QueryPerpetualResponse> {
      return queryService.perpetual(request);
    },
    allPerpetuals(request?: QueryAllPerpetualsRequest): Promise<QueryAllPerpetualsResponse> {
      return queryService.allPerpetuals(request);
    }
  };
};