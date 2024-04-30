import { Rpc } from "../helpers";
import { BinaryReader } from "../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QuerySpendableBalancesRequest, QuerySpendableBalancesResponse, QueryVestingAccountsRequest, QueryVestingAccountsResponse, QueryVestingLockedSupplyRequest, QueryVestingLockedSupplyResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** SpendableBalances queries the spenable balance of all coins for a single account. */
  spendableBalances(request: QuerySpendableBalancesRequest): Promise<QuerySpendableBalancesResponse>;
  /** VestingAccounts returns all the existing vesting accounts */
  vestingAccounts(request?: QueryVestingAccountsRequest): Promise<QueryVestingAccountsResponse>;
  /** VestingAccounts returns all the existing vesting accounts */
  vestingLockedSupply(request: QueryVestingLockedSupplyRequest): Promise<QueryVestingLockedSupplyResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.spendableBalances = this.spendableBalances.bind(this);
    this.vestingAccounts = this.vestingAccounts.bind(this);
    this.vestingLockedSupply = this.vestingLockedSupply.bind(this);
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("quasarlabs.quasarnode.qvesting.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  spendableBalances(request: QuerySpendableBalancesRequest): Promise<QuerySpendableBalancesResponse> {
    const data = QuerySpendableBalancesRequest.encode(request).finish();
    const promise = this.rpc.request("quasarlabs.quasarnode.qvesting.Query", "SpendableBalances", data);
    return promise.then(data => QuerySpendableBalancesResponse.decode(new BinaryReader(data)));
  }
  vestingAccounts(request: QueryVestingAccountsRequest = {
    pagination: undefined
  }): Promise<QueryVestingAccountsResponse> {
    const data = QueryVestingAccountsRequest.encode(request).finish();
    const promise = this.rpc.request("quasarlabs.quasarnode.qvesting.Query", "VestingAccounts", data);
    return promise.then(data => QueryVestingAccountsResponse.decode(new BinaryReader(data)));
  }
  vestingLockedSupply(request: QueryVestingLockedSupplyRequest): Promise<QueryVestingLockedSupplyResponse> {
    const data = QueryVestingLockedSupplyRequest.encode(request).finish();
    const promise = this.rpc.request("quasarlabs.quasarnode.qvesting.Query", "VestingLockedSupply", data);
    return promise.then(data => QueryVestingLockedSupplyResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    spendableBalances(request: QuerySpendableBalancesRequest): Promise<QuerySpendableBalancesResponse> {
      return queryService.spendableBalances(request);
    },
    vestingAccounts(request?: QueryVestingAccountsRequest): Promise<QueryVestingAccountsResponse> {
      return queryService.vestingAccounts(request);
    },
    vestingLockedSupply(request: QueryVestingLockedSupplyRequest): Promise<QueryVestingLockedSupplyResponse> {
      return queryService.vestingLockedSupply(request);
    }
  };
};