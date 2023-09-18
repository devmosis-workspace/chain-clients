import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryIssuersRequest, QueryIssuersResponse } from "./query";
export interface Query {
  issuers(request?: QueryIssuersRequest): Promise<QueryIssuersResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.issuers = this.issuers.bind(this);
  }
  issuers(request: QueryIssuersRequest = {}): Promise<QueryIssuersResponse> {
    const data = QueryIssuersRequest.encode(request).finish();
    const promise = this.rpc.request("em.issuer.v1.Query", "Issuers", data);
    return promise.then(data => QueryIssuersResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    issuers(request?: QueryIssuersRequest): Promise<QueryIssuersResponse> {
      return queryService.issuers(request);
    }
  };
};