import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryListRequest, QueryListResponse, QueryMintableRequest, QueryMintableResponse } from "./query";
export interface Query {
  list(request?: QueryListRequest): Promise<QueryListResponse>;
  mintable(request: QueryMintableRequest): Promise<QueryMintableResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.list = this.list.bind(this);
    this.mintable = this.mintable.bind(this);
  }
  list(request: QueryListRequest = {}): Promise<QueryListResponse> {
    const data = QueryListRequest.encode(request).finish();
    const promise = this.rpc.request("em.liquidityprovider.v1.Query", "List", data);
    return promise.then(data => QueryListResponse.decode(new BinaryReader(data)));
  }
  mintable(request: QueryMintableRequest): Promise<QueryMintableResponse> {
    const data = QueryMintableRequest.encode(request).finish();
    const promise = this.rpc.request("em.liquidityprovider.v1.Query", "Mintable", data);
    return promise.then(data => QueryMintableResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    list(request?: QueryListRequest): Promise<QueryListResponse> {
      return queryService.list(request);
    },
    mintable(request: QueryMintableRequest): Promise<QueryMintableResponse> {
      return queryService.mintable(request);
    }
  };
};