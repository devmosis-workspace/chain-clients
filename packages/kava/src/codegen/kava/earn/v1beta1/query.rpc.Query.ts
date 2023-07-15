import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryVaultsRequest, QueryVaultsResponse, QueryVaultRequest, QueryVaultResponse, QueryDepositsRequest, QueryDepositsResponse, QueryTotalSupplyRequest, QueryTotalSupplyResponse } from "./query";
/** Query defines the gRPC querier service for earn module */
export interface Query {
  /** Params queries all parameters of the earn module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Vaults queries all vaults */
  vaults(request?: QueryVaultsRequest): Promise<QueryVaultsResponse>;
  /** Vault queries a single vault based on the vault denom */
  vault(request: QueryVaultRequest): Promise<QueryVaultResponse>;
  /** Deposits queries deposit details based on depositor address and vault */
  deposits(request: QueryDepositsRequest): Promise<QueryDepositsResponse>;
  /** TotalSupply returns the total sum of all coins currently locked into the earn module. */
  totalSupply(request?: QueryTotalSupplyRequest): Promise<QueryTotalSupplyResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.vaults = this.vaults.bind(this);
    this.vault = this.vault.bind(this);
    this.deposits = this.deposits.bind(this);
    this.totalSupply = this.totalSupply.bind(this);
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("kava.earn.v1beta1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }
  vaults(request: QueryVaultsRequest = {}): Promise<QueryVaultsResponse> {
    const data = QueryVaultsRequest.encode(request).finish();
    const promise = this.rpc.request("kava.earn.v1beta1.Query", "Vaults", data);
    return promise.then(data => QueryVaultsResponse.decode(new _m0.Reader(data)));
  }
  vault(request: QueryVaultRequest): Promise<QueryVaultResponse> {
    const data = QueryVaultRequest.encode(request).finish();
    const promise = this.rpc.request("kava.earn.v1beta1.Query", "Vault", data);
    return promise.then(data => QueryVaultResponse.decode(new _m0.Reader(data)));
  }
  deposits(request: QueryDepositsRequest): Promise<QueryDepositsResponse> {
    const data = QueryDepositsRequest.encode(request).finish();
    const promise = this.rpc.request("kava.earn.v1beta1.Query", "Deposits", data);
    return promise.then(data => QueryDepositsResponse.decode(new _m0.Reader(data)));
  }
  totalSupply(request: QueryTotalSupplyRequest = {}): Promise<QueryTotalSupplyResponse> {
    const data = QueryTotalSupplyRequest.encode(request).finish();
    const promise = this.rpc.request("kava.earn.v1beta1.Query", "TotalSupply", data);
    return promise.then(data => QueryTotalSupplyResponse.decode(new _m0.Reader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    vaults(request?: QueryVaultsRequest): Promise<QueryVaultsResponse> {
      return queryService.vaults(request);
    },
    vault(request: QueryVaultRequest): Promise<QueryVaultResponse> {
      return queryService.vault(request);
    },
    deposits(request: QueryDepositsRequest): Promise<QueryDepositsResponse> {
      return queryService.deposits(request);
    },
    totalSupply(request?: QueryTotalSupplyRequest): Promise<QueryTotalSupplyResponse> {
      return queryService.totalSupply(request);
    }
  };
};