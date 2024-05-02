import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryCodeRequest, QueryCodeResponse, QueryAbiRequest, QueryAbiResponse, QueryStorageRequest, QueryStorageResponse, QueryAddressMetaRequest, QueryAddressMetaResponse, QueryMetaRequest, QueryMetaResponse, QueryAccountRequest, QueryViewRequest, QueryViewResponse } from "./query";
import { Account } from "../../../burrow/acm";
export interface Query {
  code(request: QueryCodeRequest): Promise<QueryCodeResponse>;
  abi(request: QueryAbiRequest): Promise<QueryAbiResponse>;
  storage(request: QueryStorageRequest): Promise<QueryStorageResponse>;
  addressMeta(request: QueryAddressMetaRequest): Promise<QueryAddressMetaResponse>;
  meta(request: QueryMetaRequest): Promise<QueryMetaResponse>;
  account(request: QueryAccountRequest): Promise<Account>;
  view(request: QueryViewRequest): Promise<QueryViewResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.code = this.code.bind(this);
    this.abi = this.abi.bind(this);
    this.storage = this.storage.bind(this);
    this.addressMeta = this.addressMeta.bind(this);
    this.meta = this.meta.bind(this);
    this.account = this.account.bind(this);
    this.view = this.view.bind(this);
  }
  code(request: QueryCodeRequest): Promise<QueryCodeResponse> {
    const data = QueryCodeRequest.encode(request).finish();
    const promise = this.rpc.request("shentu.cvm.v1alpha1.Query", "Code", data);
    return promise.then(data => QueryCodeResponse.decode(new BinaryReader(data)));
  }
  abi(request: QueryAbiRequest): Promise<QueryAbiResponse> {
    const data = QueryAbiRequest.encode(request).finish();
    const promise = this.rpc.request("shentu.cvm.v1alpha1.Query", "Abi", data);
    return promise.then(data => QueryAbiResponse.decode(new BinaryReader(data)));
  }
  storage(request: QueryStorageRequest): Promise<QueryStorageResponse> {
    const data = QueryStorageRequest.encode(request).finish();
    const promise = this.rpc.request("shentu.cvm.v1alpha1.Query", "Storage", data);
    return promise.then(data => QueryStorageResponse.decode(new BinaryReader(data)));
  }
  addressMeta(request: QueryAddressMetaRequest): Promise<QueryAddressMetaResponse> {
    const data = QueryAddressMetaRequest.encode(request).finish();
    const promise = this.rpc.request("shentu.cvm.v1alpha1.Query", "AddressMeta", data);
    return promise.then(data => QueryAddressMetaResponse.decode(new BinaryReader(data)));
  }
  meta(request: QueryMetaRequest): Promise<QueryMetaResponse> {
    const data = QueryMetaRequest.encode(request).finish();
    const promise = this.rpc.request("shentu.cvm.v1alpha1.Query", "Meta", data);
    return promise.then(data => QueryMetaResponse.decode(new BinaryReader(data)));
  }
  account(request: QueryAccountRequest): Promise<Account> {
    const data = QueryAccountRequest.encode(request).finish();
    const promise = this.rpc.request("shentu.cvm.v1alpha1.Query", "Account", data);
    return promise.then(data => Account.decode(new BinaryReader(data)));
  }
  view(request: QueryViewRequest): Promise<QueryViewResponse> {
    const data = QueryViewRequest.encode(request).finish();
    const promise = this.rpc.request("shentu.cvm.v1alpha1.Query", "View", data);
    return promise.then(data => QueryViewResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    code(request: QueryCodeRequest): Promise<QueryCodeResponse> {
      return queryService.code(request);
    },
    abi(request: QueryAbiRequest): Promise<QueryAbiResponse> {
      return queryService.abi(request);
    },
    storage(request: QueryStorageRequest): Promise<QueryStorageResponse> {
      return queryService.storage(request);
    },
    addressMeta(request: QueryAddressMetaRequest): Promise<QueryAddressMetaResponse> {
      return queryService.addressMeta(request);
    },
    meta(request: QueryMetaRequest): Promise<QueryMetaResponse> {
      return queryService.meta(request);
    },
    account(request: QueryAccountRequest): Promise<acm.Account> {
      return queryService.account(request);
    },
    view(request: QueryViewRequest): Promise<QueryViewResponse> {
      return queryService.view(request);
    }
  };
};