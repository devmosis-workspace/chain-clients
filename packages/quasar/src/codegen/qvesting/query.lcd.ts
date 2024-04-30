import { setPaginationParams } from "../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QuerySpendableBalancesRequest, QuerySpendableBalancesResponseSDKType, QueryVestingAccountsRequest, QueryVestingAccountsResponseSDKType, QueryVestingLockedSupplyRequest, QueryVestingLockedSupplyResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.spendableBalances = this.spendableBalances.bind(this);
    this.vestingAccounts = this.vestingAccounts.bind(this);
    this.vestingLockedSupply = this.vestingLockedSupply.bind(this);
  }
  /* Parameters queries the parameters of the module. */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `quasarlabs/quasarnode/qvesting/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* SpendableBalances queries the spenable balance of all coins for a single account. */
  async spendableBalances(params: QuerySpendableBalancesRequest): Promise<QuerySpendableBalancesResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `quasarlabs/quasarnode/qvesting/spendable_balances/${params.address}`;
    return await this.req.get<QuerySpendableBalancesResponseSDKType>(endpoint, options);
  }
  /* VestingAccounts returns all the existing vesting accounts */
  async vestingAccounts(params: QueryVestingAccountsRequest = {
    pagination: undefined
  }): Promise<QueryVestingAccountsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `quasarlabs/quasarnode/qvesting/accounts`;
    return await this.req.get<QueryVestingAccountsResponseSDKType>(endpoint, options);
  }
  /* VestingAccounts returns all the existing vesting accounts */
  async vestingLockedSupply(params: QueryVestingLockedSupplyRequest): Promise<QueryVestingLockedSupplyResponseSDKType> {
    const endpoint = `quasarlabs/quasarnode/qvesting/locked_supply/${params.denom}`;
    return await this.req.get<QueryVestingLockedSupplyResponseSDKType>(endpoint);
  }
}