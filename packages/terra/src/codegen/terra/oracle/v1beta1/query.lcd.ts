import { LCDClient } from "@cosmology/lcd";
import { QueryExchangeRateRequest, QueryExchangeRateResponseSDKType, QueryExchangeRatesRequest, QueryExchangeRatesResponseSDKType, QueryTobinTaxRequest, QueryTobinTaxResponseSDKType, QueryTobinTaxesRequest, QueryTobinTaxesResponseSDKType, QueryActivesRequest, QueryActivesResponseSDKType, QueryVoteTargetsRequest, QueryVoteTargetsResponseSDKType, QueryFeederDelegationRequest, QueryFeederDelegationResponseSDKType, QueryMissCounterRequest, QueryMissCounterResponseSDKType, QueryAggregatePrevoteRequest, QueryAggregatePrevoteResponseSDKType, QueryAggregatePrevotesRequest, QueryAggregatePrevotesResponseSDKType, QueryAggregateVoteRequest, QueryAggregateVoteResponseSDKType, QueryAggregateVotesRequest, QueryAggregateVotesResponseSDKType, QueryParamsRequest, QueryParamsResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.exchangeRate = this.exchangeRate.bind(this);
    this.exchangeRates = this.exchangeRates.bind(this);
    this.tobinTax = this.tobinTax.bind(this);
    this.tobinTaxes = this.tobinTaxes.bind(this);
    this.actives = this.actives.bind(this);
    this.voteTargets = this.voteTargets.bind(this);
    this.feederDelegation = this.feederDelegation.bind(this);
    this.missCounter = this.missCounter.bind(this);
    this.aggregatePrevote = this.aggregatePrevote.bind(this);
    this.aggregatePrevotes = this.aggregatePrevotes.bind(this);
    this.aggregateVote = this.aggregateVote.bind(this);
    this.aggregateVotes = this.aggregateVotes.bind(this);
    this.params = this.params.bind(this);
  }
  /* ExchangeRate returns exchange rate of a denom */
  async exchangeRate(params: QueryExchangeRateRequest): Promise<QueryExchangeRateResponseSDKType> {
    const endpoint = `terra/oracle/v1beta1/denoms/${params.denom}/exchange_rate`;
    return await this.req.get<QueryExchangeRateResponseSDKType>(endpoint);
  }
  /* ExchangeRates returns exchange rates of all denoms */
  async exchangeRates(_params: QueryExchangeRatesRequest = {}): Promise<QueryExchangeRatesResponseSDKType> {
    const endpoint = `terra/oracle/v1beta1/denoms/exchange_rates`;
    return await this.req.get<QueryExchangeRatesResponseSDKType>(endpoint);
  }
  /* TobinTax returns tobin tax of a denom */
  async tobinTax(params: QueryTobinTaxRequest): Promise<QueryTobinTaxResponseSDKType> {
    const endpoint = `terra/oracle/v1beta1/denoms/${params.denom}/tobin_tax`;
    return await this.req.get<QueryTobinTaxResponseSDKType>(endpoint);
  }
  /* TobinTaxes returns tobin taxes of all denoms */
  async tobinTaxes(_params: QueryTobinTaxesRequest = {}): Promise<QueryTobinTaxesResponseSDKType> {
    const endpoint = `terra/oracle/v1beta1/denoms/tobin_taxes`;
    return await this.req.get<QueryTobinTaxesResponseSDKType>(endpoint);
  }
  /* Actives returns all active denoms */
  async actives(_params: QueryActivesRequest = {}): Promise<QueryActivesResponseSDKType> {
    const endpoint = `terra/oracle/v1beta1/denoms/actives`;
    return await this.req.get<QueryActivesResponseSDKType>(endpoint);
  }
  /* VoteTargets returns all vote target denoms */
  async voteTargets(_params: QueryVoteTargetsRequest = {}): Promise<QueryVoteTargetsResponseSDKType> {
    const endpoint = `terra/oracle/v1beta1/denoms/vote_targets`;
    return await this.req.get<QueryVoteTargetsResponseSDKType>(endpoint);
  }
  /* FeederDelegation returns feeder delegation of a validator */
  async feederDelegation(params: QueryFeederDelegationRequest): Promise<QueryFeederDelegationResponseSDKType> {
    const endpoint = `terra/oracle/v1beta1/validators/${params.validatorAddr}/feeder`;
    return await this.req.get<QueryFeederDelegationResponseSDKType>(endpoint);
  }
  /* MissCounter returns oracle miss counter of a validator */
  async missCounter(params: QueryMissCounterRequest): Promise<QueryMissCounterResponseSDKType> {
    const endpoint = `terra/oracle/v1beta1/validators/${params.validatorAddr}/miss`;
    return await this.req.get<QueryMissCounterResponseSDKType>(endpoint);
  }
  /* AggregatePrevote returns an aggregate prevote of a validator */
  async aggregatePrevote(params: QueryAggregatePrevoteRequest): Promise<QueryAggregatePrevoteResponseSDKType> {
    const endpoint = `terra/oracle/v1beta1/validators/${params.validatorAddr}/aggregate_prevote`;
    return await this.req.get<QueryAggregatePrevoteResponseSDKType>(endpoint);
  }
  /* AggregatePrevotes returns aggregate prevotes of all validators */
  async aggregatePrevotes(_params: QueryAggregatePrevotesRequest = {}): Promise<QueryAggregatePrevotesResponseSDKType> {
    const endpoint = `terra/oracle/v1beta1/validators/aggregate_prevotes`;
    return await this.req.get<QueryAggregatePrevotesResponseSDKType>(endpoint);
  }
  /* AggregateVote returns an aggregate vote of a validator */
  async aggregateVote(params: QueryAggregateVoteRequest): Promise<QueryAggregateVoteResponseSDKType> {
    const endpoint = `terra/oracle/v1beta1/valdiators/${params.validatorAddr}/aggregate_vote`;
    return await this.req.get<QueryAggregateVoteResponseSDKType>(endpoint);
  }
  /* AggregateVotes returns aggregate votes of all validators */
  async aggregateVotes(_params: QueryAggregateVotesRequest = {}): Promise<QueryAggregateVotesResponseSDKType> {
    const endpoint = `terra/oracle/v1beta1/validators/aggregate_votes`;
    return await this.req.get<QueryAggregateVotesResponseSDKType>(endpoint);
  }
  /* Params queries all parameters. */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `terra/oracle/v1beta1/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
}