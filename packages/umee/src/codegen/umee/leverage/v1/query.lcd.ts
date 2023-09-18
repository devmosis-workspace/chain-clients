import { LCDClient } from "@cosmology/lcd";
import { QueryParams, QueryParamsResponseSDKType, QueryRegisteredTokens, QueryRegisteredTokensResponseSDKType, QueryMarketSummary, QueryMarketSummaryResponseSDKType, QueryAccountBalances, QueryAccountBalancesResponseSDKType, QueryAccountSummary, QueryAccountSummaryResponseSDKType, QueryLiquidationTargets, QueryLiquidationTargetsResponseSDKType, QueryBadDebts, QueryBadDebtsResponseSDKType, QueryMaxWithdraw, QueryMaxWithdrawResponseSDKType, QueryMaxBorrow, QueryMaxBorrowResponseSDKType, QueryInspect, QueryInspectResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.registeredTokens = this.registeredTokens.bind(this);
    this.marketSummary = this.marketSummary.bind(this);
    this.accountBalances = this.accountBalances.bind(this);
    this.accountSummary = this.accountSummary.bind(this);
    this.liquidationTargets = this.liquidationTargets.bind(this);
    this.badDebts = this.badDebts.bind(this);
    this.maxWithdraw = this.maxWithdraw.bind(this);
    this.maxBorrow = this.maxBorrow.bind(this);
    this.inspect = this.inspect.bind(this);
  }
  /* Params queries the parameters of the x/leverage module. */
  async params(_params: QueryParams = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `umee/leverage/v1/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* RegisteredTokens queries for all the registered tokens. */
  async registeredTokens(params: QueryRegisteredTokens): Promise<QueryRegisteredTokensResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.baseDenom !== "undefined") {
      options.params.base_denom = params.baseDenom;
    }
    const endpoint = `umee/leverage/v1/registered_tokens`;
    return await this.req.get<QueryRegisteredTokensResponseSDKType>(endpoint, options);
  }
  /* MarketSummary queries a base asset's current borrowing and supplying conditions. */
  async marketSummary(params: QueryMarketSummary): Promise<QueryMarketSummaryResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.denom !== "undefined") {
      options.params.denom = params.denom;
    }
    const endpoint = `umee/leverage/v1/market_summary`;
    return await this.req.get<QueryMarketSummaryResponseSDKType>(endpoint, options);
  }
  /* AccountBalances queries an account's current supply, collateral, and borrow positions. */
  async accountBalances(params: QueryAccountBalances): Promise<QueryAccountBalancesResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.address !== "undefined") {
      options.params.address = params.address;
    }
    const endpoint = `umee/leverage/v1/account_balances`;
    return await this.req.get<QueryAccountBalancesResponseSDKType>(endpoint, options);
  }
  /* AccountSummary queries USD values representing an account's total positions and borrowing limits. It requires oracle prices to return successfully. */
  async accountSummary(params: QueryAccountSummary): Promise<QueryAccountSummaryResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.address !== "undefined") {
      options.params.address = params.address;
    }
    const endpoint = `umee/leverage/v1/account_summary`;
    return await this.req.get<QueryAccountSummaryResponseSDKType>(endpoint, options);
  }
  /* LiquidationTargets queries a list of all borrower account addresses eligible for liquidation. */
  async liquidationTargets(_params: QueryLiquidationTargets = {}): Promise<QueryLiquidationTargetsResponseSDKType> {
    const endpoint = `umee/leverage/v1/liquidation_targets`;
    return await this.req.get<QueryLiquidationTargetsResponseSDKType>(endpoint);
  }
  /* BadDebts queries a list of borrow positions that have been marked for bad debt repayment. */
  async badDebts(_params: QueryBadDebts = {}): Promise<QueryBadDebtsResponseSDKType> {
    const endpoint = `umee/leverage/v1/bad_debts`;
    return await this.req.get<QueryBadDebtsResponseSDKType>(endpoint);
  }
  /* MaxWithdraw queries the maximum amount of a given token an address can withdraw. */
  async maxWithdraw(params: QueryMaxWithdraw): Promise<QueryMaxWithdrawResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.address !== "undefined") {
      options.params.address = params.address;
    }
    if (typeof params?.denom !== "undefined") {
      options.params.denom = params.denom;
    }
    const endpoint = `umee/leverage/v1/max_withdraw`;
    return await this.req.get<QueryMaxWithdrawResponseSDKType>(endpoint, options);
  }
  /* MaxBorrow queries the maximum amount of a given token an address can borrow. */
  async maxBorrow(params: QueryMaxBorrow): Promise<QueryMaxBorrowResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.address !== "undefined") {
      options.params.address = params.address;
    }
    if (typeof params?.denom !== "undefined") {
      options.params.denom = params.denom;
    }
    const endpoint = `umee/leverage/v1/max_borrow`;
    return await this.req.get<QueryMaxBorrowResponseSDKType>(endpoint, options);
  }
  /* Inspect is the customizable inspector query. It returns a list of all borrowers,
   starting from the highest borrowed value, filtered by any combination of: minimum
   borrowed value (optionally of a specified token), minimum collateral value, minimum
   progress toward liquidation threshold, and minimum LTV. Each account is displayed
   with its address and borrowed/liquidation/collateral USD values, as well as its
   actual token positions in human-readable symbol denoms instead of uTokens or ibc denoms. */
  async inspect(params: QueryInspect): Promise<QueryInspectResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.symbol !== "undefined") {
      options.params.symbol = params.symbol;
    }
    if (typeof params?.borrowed !== "undefined") {
      options.params.borrowed = params.borrowed;
    }
    if (typeof params?.collateral !== "undefined") {
      options.params.collateral = params.collateral;
    }
    if (typeof params?.danger !== "undefined") {
      options.params.danger = params.danger;
    }
    if (typeof params?.ltv !== "undefined") {
      options.params.ltv = params.ltv;
    }
    const endpoint = `umee/leverage/v1/inspect`;
    return await this.req.get<QueryInspectResponseSDKType>(endpoint, options);
  }
}