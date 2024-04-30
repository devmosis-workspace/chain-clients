import { LCDClient } from "@cosmology/lcd";
import { QueryAllExchangeRatesRequest, QueryAllExchangeRatesResponseSDKType, QueryExchangeRateRequest, QueryExchangeRateResponseSDKType, QueryActiveExchangeRatesRequest, QueryActiveExchangeRatesResponseSDKType, QueryFeederDelegationRequest, QueryFeederDelegationResponseSDKType, QueryMissCounterRequest, QueryMissCounterResponseSDKType, QueryAggregatePrevoteRequest, QueryAggregatePrevoteResponseSDKType, QueryAggregatePrevotesRequest, QueryAggregatePrevotesResponseSDKType, QueryAggregateVoteRequest, QueryAggregateVoteResponseSDKType, QueryAggregateVotesRequest, QueryAggregateVotesResponseSDKType, QueryParamsRequest, QueryParamsResponseSDKType, QueryRewardPoolBalanceRequest, QueryRewardPoolBalanceResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.allExchangeRates = this.allExchangeRates.bind(this);
    this.exchangeRate = this.exchangeRate.bind(this);
    this.activeExchangeRates = this.activeExchangeRates.bind(this);
    this.feederDelegation = this.feederDelegation.bind(this);
    this.missCounter = this.missCounter.bind(this);
    this.aggregatePrevote = this.aggregatePrevote.bind(this);
    this.aggregatePrevotes = this.aggregatePrevotes.bind(this);
    this.aggregateVote = this.aggregateVote.bind(this);
    this.aggregateVotes = this.aggregateVotes.bind(this);
    this.params = this.params.bind(this);
    this.queryRewardPoolBalance = this.queryRewardPoolBalance.bind(this);
  }
  /* ExchangeRates returns exchange rates of all denoms. */
  async allExchangeRates(_params: QueryAllExchangeRatesRequest = {}): Promise<QueryAllExchangeRatesResponseSDKType> {
    const endpoint = `persistence/oracle/v1beta1/denoms/all_exchange_rates`;
    return await this.req.get<QueryAllExchangeRatesResponseSDKType>(endpoint);
  }
  /* ExchangeRate returns exchange rates of a specified denom. */
  async exchangeRate(params: QueryExchangeRateRequest): Promise<QueryExchangeRateResponseSDKType> {
    const endpoint = `persistence/oracle/v1beta1/denoms/exchange_rate/${params.denom}`;
    return await this.req.get<QueryExchangeRateResponseSDKType>(endpoint);
  }
  /* ActiveExchangeRates returns all active denoms */
  async activeExchangeRates(_params: QueryActiveExchangeRatesRequest = {}): Promise<QueryActiveExchangeRatesResponseSDKType> {
    const endpoint = `persistence/oracle/v1beta1/denoms/active_exchange_rates`;
    return await this.req.get<QueryActiveExchangeRatesResponseSDKType>(endpoint);
  }
  /* FeederDelegation returns feeder delegation of a validator */
  async feederDelegation(params: QueryFeederDelegationRequest): Promise<QueryFeederDelegationResponseSDKType> {
    const endpoint = `persistence/oracle/v1beta1/validators/${params.validatorAddr}/feeder`;
    return await this.req.get<QueryFeederDelegationResponseSDKType>(endpoint);
  }
  /* MissCounter returns oracle miss counter of a validator */
  async missCounter(params: QueryMissCounterRequest): Promise<QueryMissCounterResponseSDKType> {
    const endpoint = `persistence/oracle/v1beta1/validators/${params.validatorAddr}/miss`;
    return await this.req.get<QueryMissCounterResponseSDKType>(endpoint);
  }
  /* AggregatePrevote returns an aggregate prevote of a validator */
  async aggregatePrevote(params: QueryAggregatePrevoteRequest): Promise<QueryAggregatePrevoteResponseSDKType> {
    const endpoint = `persistence/oracle/v1beta1/validators/${params.validatorAddr}/aggregate_prevote`;
    return await this.req.get<QueryAggregatePrevoteResponseSDKType>(endpoint);
  }
  /* AggregatePrevotes returns aggregate prevotes of all validators */
  async aggregatePrevotes(_params: QueryAggregatePrevotesRequest = {}): Promise<QueryAggregatePrevotesResponseSDKType> {
    const endpoint = `persistence/oracle/v1beta1/validators/aggregate_prevotes`;
    return await this.req.get<QueryAggregatePrevotesResponseSDKType>(endpoint);
  }
  /* AggregateVote returns an aggregate vote of a validator */
  async aggregateVote(params: QueryAggregateVoteRequest): Promise<QueryAggregateVoteResponseSDKType> {
    const endpoint = `persistence/oracle/v1beta1/valdiators/${params.validatorAddr}/aggregate_vote`;
    return await this.req.get<QueryAggregateVoteResponseSDKType>(endpoint);
  }
  /* AggregateVotes returns aggregate votes of all validators */
  async aggregateVotes(_params: QueryAggregateVotesRequest = {}): Promise<QueryAggregateVotesResponseSDKType> {
    const endpoint = `persistence/oracle/v1beta1/validators/aggregate_votes`;
    return await this.req.get<QueryAggregateVotesResponseSDKType>(endpoint);
  }
  /* Params queries all parameters. */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `persistence/oracle/v1beta1/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* QueryRewardPoolBalance queries funds left in the reward pool. */
  async queryRewardPoolBalance(_params: QueryRewardPoolBalanceRequest = {}): Promise<QueryRewardPoolBalanceResponseSDKType> {
    const endpoint = `persistence/oracle/v1beta/reward_pool_funds`;
    return await this.req.get<QueryRewardPoolBalanceResponseSDKType>(endpoint);
  }
}