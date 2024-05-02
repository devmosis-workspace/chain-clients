import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { ListAccountsRequest, ListAccountsResponse, GetParamsRequest, GetParamsResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  listAccounts(request?: ListAccountsRequest): Promise<ListAccountsResponse>;
  getParams(request?: GetParamsRequest): Promise<GetParamsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.listAccounts = this.listAccounts.bind(this);
    this.getParams = this.getParams.bind(this);
  }
  listAccounts(request: ListAccountsRequest = {}): Promise<ListAccountsResponse> {
    const data = ListAccountsRequest.encode(request).finish();
    const promise = this.rpc.request("sifnode.admin.v1.Query", "ListAccounts", data);
    return promise.then(data => ListAccountsResponse.decode(new BinaryReader(data)));
  }
  getParams(request: GetParamsRequest = {}): Promise<GetParamsResponse> {
    const data = GetParamsRequest.encode(request).finish();
    const promise = this.rpc.request("sifnode.admin.v1.Query", "GetParams", data);
    return promise.then(data => GetParamsResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    listAccounts(request?: ListAccountsRequest): Promise<ListAccountsResponse> {
      return queryService.listAccounts(request);
    },
    getParams(request?: GetParamsRequest): Promise<GetParamsResponse> {
      return queryService.getParams(request);
    }
  };
};