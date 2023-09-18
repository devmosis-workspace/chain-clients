import { LCDClient } from "@cosmology/lcd";
import { QueryDelegatedBalanceRequest, QueryDelegatedBalanceResponseSDKType, QueryTotalSupplyRequest, QueryTotalSupplyResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.delegatedBalance = this.delegatedBalance.bind(this);
    this.totalSupply = this.totalSupply.bind(this);
  }
  /* DelegatedBalance returns an account's vesting and vested coins currently delegated to validators.
   It ignores coins in unbonding delegations. */
  async delegatedBalance(params: QueryDelegatedBalanceRequest): Promise<QueryDelegatedBalanceResponseSDKType> {
    const endpoint = `kava/liquid/v1beta1/delegated_balance/${params.delegator}`;
    return await this.req.get<QueryDelegatedBalanceResponseSDKType>(endpoint);
  }
  /* TotalSupply returns the total sum of all coins currently locked into the liquid module. */
  async totalSupply(_params: QueryTotalSupplyRequest = {}): Promise<QueryTotalSupplyResponseSDKType> {
    const endpoint = `kava/liquid/v1beta1/total_supply`;
    return await this.req.get<QueryTotalSupplyResponseSDKType>(endpoint);
  }
}