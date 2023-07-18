import { LCDClient } from "@osmonauts/lcd";
import { QueryExchangeParamsRequest, QueryExchangeParamsResponseSDKType, QuerySubaccountDepositsRequest, QuerySubaccountDepositsResponseSDKType, QuerySubaccountDepositRequest, QuerySubaccountDepositResponseSDKType, QueryExchangeBalancesRequest, QueryExchangeBalancesResponseSDKType, QueryAggregateVolumeRequest, QueryAggregateVolumeResponseSDKType, QueryAggregateVolumesRequest, QueryAggregateVolumesResponseSDKType, QueryAggregateMarketVolumeRequest, QueryAggregateMarketVolumeResponseSDKType, QueryAggregateMarketVolumesRequest, QueryAggregateMarketVolumesResponseSDKType, QueryDenomDecimalRequest, QueryDenomDecimalResponseSDKType, QueryDenomDecimalsRequest, QueryDenomDecimalsResponseSDKType, QuerySpotMarketsRequest, QuerySpotMarketsResponseSDKType, QuerySpotMarketRequest, QuerySpotMarketResponseSDKType, QueryFullSpotMarketsRequest, QueryFullSpotMarketsResponseSDKType, QueryFullSpotMarketRequest, QueryFullSpotMarketResponseSDKType, QuerySpotOrderbookRequest, QuerySpotOrderbookResponseSDKType, QueryTraderSpotOrdersRequest, QueryTraderSpotOrdersResponseSDKType, QueryAccountAddressSpotOrdersRequest, QueryAccountAddressSpotOrdersResponseSDKType, QuerySpotOrdersByHashesRequest, QuerySpotOrdersByHashesResponseSDKType, QuerySubaccountOrdersRequest, QuerySubaccountOrdersResponseSDKType, QuerySpotMidPriceAndTOBRequest, QuerySpotMidPriceAndTOBResponseSDKType, QueryDerivativeMidPriceAndTOBRequest, QueryDerivativeMidPriceAndTOBResponseSDKType, QueryDerivativeOrderbookRequest, QueryDerivativeOrderbookResponseSDKType, QueryTraderDerivativeOrdersRequest, QueryTraderDerivativeOrdersResponseSDKType, QueryAccountAddressDerivativeOrdersRequest, QueryAccountAddressDerivativeOrdersResponseSDKType, QueryDerivativeOrdersByHashesRequest, QueryDerivativeOrdersByHashesResponseSDKType, QueryDerivativeMarketsRequest, QueryDerivativeMarketsResponseSDKType, QueryDerivativeMarketRequest, QueryDerivativeMarketResponseSDKType, QueryDerivativeMarketAddressRequest, QueryDerivativeMarketAddressResponseSDKType, QuerySubaccountTradeNonceRequest, QuerySubaccountTradeNonceResponseSDKType, QueryModuleStateRequest, QueryModuleStateResponseSDKType, QueryPositionsRequest, QueryPositionsResponseSDKType, QuerySubaccountPositionsRequest, QuerySubaccountPositionsResponseSDKType, QuerySubaccountPositionInMarketRequest, QuerySubaccountPositionInMarketResponseSDKType, QuerySubaccountEffectivePositionInMarketRequest, QuerySubaccountEffectivePositionInMarketResponseSDKType, QueryPerpetualMarketInfoRequest, QueryPerpetualMarketInfoResponseSDKType, QueryExpiryFuturesMarketInfoRequest, QueryExpiryFuturesMarketInfoResponseSDKType, QueryPerpetualMarketFundingRequest, QueryPerpetualMarketFundingResponseSDKType, QuerySubaccountOrderMetadataRequest, QuerySubaccountOrderMetadataResponseSDKType, QueryTradeRewardPointsRequest, QueryTradeRewardPointsResponseSDKType, QueryTradeRewardCampaignRequest, QueryTradeRewardCampaignResponseSDKType, QueryFeeDiscountAccountInfoRequest, QueryFeeDiscountAccountInfoResponseSDKType, QueryFeeDiscountScheduleRequest, QueryFeeDiscountScheduleResponseSDKType, QueryBalanceMismatchesRequest, QueryBalanceMismatchesResponseSDKType, QueryBalanceWithBalanceHoldsRequest, QueryBalanceWithBalanceHoldsResponseSDKType, QueryFeeDiscountTierStatisticsRequest, QueryFeeDiscountTierStatisticsResponseSDKType, MitoVaultInfosRequest, MitoVaultInfosResponseSDKType, QueryMarketIDFromVaultRequest, QueryMarketIDFromVaultResponseSDKType, QueryHistoricalTradeRecordsRequest, QueryHistoricalTradeRecordsResponseSDKType, QueryIsOptedOutOfRewardsRequest, QueryIsOptedOutOfRewardsResponseSDKType, QueryOptedOutOfRewardsAccountsRequest, QueryOptedOutOfRewardsAccountsResponseSDKType, QueryMarketVolatilityRequest, QueryMarketVolatilityResponseSDKType, QueryBinaryMarketsRequest, QueryBinaryMarketsResponseSDKType, QueryTraderDerivativeConditionalOrdersRequest, QueryTraderDerivativeConditionalOrdersResponseSDKType, QueryMarketAtomicExecutionFeeMultiplierRequest, QueryMarketAtomicExecutionFeeMultiplierResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.queryExchangeParams = this.queryExchangeParams.bind(this);
    this.subaccountDeposits = this.subaccountDeposits.bind(this);
    this.subaccountDeposit = this.subaccountDeposit.bind(this);
    this.exchangeBalances = this.exchangeBalances.bind(this);
    this.aggregateVolume = this.aggregateVolume.bind(this);
    this.aggregateVolumes = this.aggregateVolumes.bind(this);
    this.aggregateMarketVolume = this.aggregateMarketVolume.bind(this);
    this.aggregateMarketVolumes = this.aggregateMarketVolumes.bind(this);
    this.denomDecimal = this.denomDecimal.bind(this);
    this.denomDecimals = this.denomDecimals.bind(this);
    this.spotMarkets = this.spotMarkets.bind(this);
    this.spotMarket = this.spotMarket.bind(this);
    this.fullSpotMarkets = this.fullSpotMarkets.bind(this);
    this.fullSpotMarket = this.fullSpotMarket.bind(this);
    this.spotOrderbook = this.spotOrderbook.bind(this);
    this.traderSpotOrders = this.traderSpotOrders.bind(this);
    this.accountAddressSpotOrders = this.accountAddressSpotOrders.bind(this);
    this.spotOrdersByHashes = this.spotOrdersByHashes.bind(this);
    this.subaccountOrders = this.subaccountOrders.bind(this);
    this.traderSpotTransientOrders = this.traderSpotTransientOrders.bind(this);
    this.spotMidPriceAndTOB = this.spotMidPriceAndTOB.bind(this);
    this.derivativeMidPriceAndTOB = this.derivativeMidPriceAndTOB.bind(this);
    this.derivativeOrderbook = this.derivativeOrderbook.bind(this);
    this.traderDerivativeOrders = this.traderDerivativeOrders.bind(this);
    this.accountAddressDerivativeOrders = this.accountAddressDerivativeOrders.bind(this);
    this.derivativeOrdersByHashes = this.derivativeOrdersByHashes.bind(this);
    this.traderDerivativeTransientOrders = this.traderDerivativeTransientOrders.bind(this);
    this.derivativeMarkets = this.derivativeMarkets.bind(this);
    this.derivativeMarket = this.derivativeMarket.bind(this);
    this.derivativeMarketAddress = this.derivativeMarketAddress.bind(this);
    this.subaccountTradeNonce = this.subaccountTradeNonce.bind(this);
    this.exchangeModuleState = this.exchangeModuleState.bind(this);
    this.positions = this.positions.bind(this);
    this.subaccountPositions = this.subaccountPositions.bind(this);
    this.subaccountPositionInMarket = this.subaccountPositionInMarket.bind(this);
    this.subaccountEffectivePositionInMarket = this.subaccountEffectivePositionInMarket.bind(this);
    this.perpetualMarketInfo = this.perpetualMarketInfo.bind(this);
    this.expiryFuturesMarketInfo = this.expiryFuturesMarketInfo.bind(this);
    this.perpetualMarketFunding = this.perpetualMarketFunding.bind(this);
    this.subaccountOrderMetadata = this.subaccountOrderMetadata.bind(this);
    this.tradeRewardPoints = this.tradeRewardPoints.bind(this);
    this.pendingTradeRewardPoints = this.pendingTradeRewardPoints.bind(this);
    this.tradeRewardCampaign = this.tradeRewardCampaign.bind(this);
    this.feeDiscountAccountInfo = this.feeDiscountAccountInfo.bind(this);
    this.feeDiscountSchedule = this.feeDiscountSchedule.bind(this);
    this.balanceMismatches = this.balanceMismatches.bind(this);
    this.balanceWithBalanceHolds = this.balanceWithBalanceHolds.bind(this);
    this.feeDiscountTierStatistics = this.feeDiscountTierStatistics.bind(this);
    this.mitoVaultInfos = this.mitoVaultInfos.bind(this);
    this.queryMarketIDFromVault = this.queryMarketIDFromVault.bind(this);
    this.historicalTradeRecords = this.historicalTradeRecords.bind(this);
    this.isOptedOutOfRewards = this.isOptedOutOfRewards.bind(this);
    this.optedOutOfRewardsAccounts = this.optedOutOfRewardsAccounts.bind(this);
    this.marketVolatility = this.marketVolatility.bind(this);
    this.binaryOptionsMarkets = this.binaryOptionsMarkets.bind(this);
    this.traderDerivativeConditionalOrders = this.traderDerivativeConditionalOrders.bind(this);
    this.marketAtomicExecutionFeeMultiplier = this.marketAtomicExecutionFeeMultiplier.bind(this);
  }
  /* Retrieves exchange params */
  async queryExchangeParams(_params: QueryExchangeParamsRequest = {}): Promise<QueryExchangeParamsResponseSDKType> {
    const endpoint = `injective/exchange/v1beta1/exchangeParams`;
    return await this.req.get<QueryExchangeParamsResponseSDKType>(endpoint);
  }
  /* Retrieves a Subaccount's Deposits */
  async subaccountDeposits(params: QuerySubaccountDepositsRequest): Promise<QuerySubaccountDepositsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.subaccountId !== "undefined") {
      options.params.subaccount_id = params.subaccountId;
    }
    if (typeof params?.subaccount !== "undefined") {
      options.params.subaccount = params.subaccount;
    }
    const endpoint = `injective/exchange/v1beta1/exchange/subaccountDeposits`;
    return await this.req.get<QuerySubaccountDepositsResponseSDKType>(endpoint, options);
  }
  /* Retrieves a Subaccount's Deposits */
  async subaccountDeposit(params: QuerySubaccountDepositRequest): Promise<QuerySubaccountDepositResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.subaccountId !== "undefined") {
      options.params.subaccount_id = params.subaccountId;
    }
    if (typeof params?.denom !== "undefined") {
      options.params.denom = params.denom;
    }
    const endpoint = `injective/exchange/v1beta1/exchange/subaccountDeposit`;
    return await this.req.get<QuerySubaccountDepositResponseSDKType>(endpoint, options);
  }
  /* Retrieves all of the balances of all users on the exchange. */
  async exchangeBalances(_params: QueryExchangeBalancesRequest = {}): Promise<QueryExchangeBalancesResponseSDKType> {
    const endpoint = `injective/exchange/v1beta1/exchange/exchangeBalances`;
    return await this.req.get<QueryExchangeBalancesResponseSDKType>(endpoint);
  }
  /* Retrieves the aggregate volumes for the specified account or subaccount */
  async aggregateVolume(params: QueryAggregateVolumeRequest): Promise<QueryAggregateVolumeResponseSDKType> {
    const endpoint = `injective/exchange/v1beta1/exchange/aggregateVolume/${params.account}`;
    return await this.req.get<QueryAggregateVolumeResponseSDKType>(endpoint);
  }
  /* Retrieves the aggregate volumes for specified accounts */
  async aggregateVolumes(params: QueryAggregateVolumesRequest): Promise<QueryAggregateVolumesResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.accounts !== "undefined") {
      options.params.accounts = params.accounts;
    }
    if (typeof params?.marketIds !== "undefined") {
      options.params.market_ids = params.marketIds;
    }
    const endpoint = `injective/exchange/v1beta1/exchange/aggregateVolumes`;
    return await this.req.get<QueryAggregateVolumesResponseSDKType>(endpoint, options);
  }
  /* Retrieves the aggregate volume for the specified market */
  async aggregateMarketVolume(params: QueryAggregateMarketVolumeRequest): Promise<QueryAggregateMarketVolumeResponseSDKType> {
    const endpoint = `injective/exchange/v1beta1/exchange/aggregateMarketVolume/${params.marketId}`;
    return await this.req.get<QueryAggregateMarketVolumeResponseSDKType>(endpoint);
  }
  /* Retrieves the aggregate market volumes for specified markets */
  async aggregateMarketVolumes(params: QueryAggregateMarketVolumesRequest): Promise<QueryAggregateMarketVolumesResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.marketIds !== "undefined") {
      options.params.market_ids = params.marketIds;
    }
    const endpoint = `injective/exchange/v1beta1/exchange/aggregateMarketVolumes`;
    return await this.req.get<QueryAggregateMarketVolumesResponseSDKType>(endpoint, options);
  }
  /* Retrieves the denom decimals for a denom. */
  async denomDecimal(params: QueryDenomDecimalRequest): Promise<QueryDenomDecimalResponseSDKType> {
    const endpoint = `injective/exchange/v1beta1/exchange/denom_decimal/${params.denom}`;
    return await this.req.get<QueryDenomDecimalResponseSDKType>(endpoint);
  }
  /* Retrieves the denom decimals for multiple denoms. Returns all denom
   decimals if unspecified. */
  async denomDecimals(params: QueryDenomDecimalsRequest): Promise<QueryDenomDecimalsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.denoms !== "undefined") {
      options.params.denoms = params.denoms;
    }
    const endpoint = `injective/exchange/v1beta1/exchange/denom_decimals`;
    return await this.req.get<QueryDenomDecimalsResponseSDKType>(endpoint, options);
  }
  /* Retrieves a list of spot markets. */
  async spotMarkets(params: QuerySpotMarketsRequest): Promise<QuerySpotMarketsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.status !== "undefined") {
      options.params.status = params.status;
    }
    if (typeof params?.marketIds !== "undefined") {
      options.params.market_ids = params.marketIds;
    }
    const endpoint = `injective/exchange/v1beta1/spot/markets`;
    return await this.req.get<QuerySpotMarketsResponseSDKType>(endpoint, options);
  }
  /* Retrieves a spot market by ticker */
  async spotMarket(params: QuerySpotMarketRequest): Promise<QuerySpotMarketResponseSDKType> {
    const endpoint = `injective/exchange/v1beta1/spot/markets/${params.marketId}`;
    return await this.req.get<QuerySpotMarketResponseSDKType>(endpoint);
  }
  /* Retrieves a list of spot markets with extra information. */
  async fullSpotMarkets(params: QueryFullSpotMarketsRequest): Promise<QueryFullSpotMarketsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.status !== "undefined") {
      options.params.status = params.status;
    }
    if (typeof params?.marketIds !== "undefined") {
      options.params.market_ids = params.marketIds;
    }
    if (typeof params?.withMidPriceAndTob !== "undefined") {
      options.params.with_mid_price_and_tob = params.withMidPriceAndTob;
    }
    const endpoint = `injective/exchange/v1beta1/spot/full_markets`;
    return await this.req.get<QueryFullSpotMarketsResponseSDKType>(endpoint, options);
  }
  /* Retrieves a spot market with extra information. */
  async fullSpotMarket(params: QueryFullSpotMarketRequest): Promise<QueryFullSpotMarketResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.withMidPriceAndTob !== "undefined") {
      options.params.with_mid_price_and_tob = params.withMidPriceAndTob;
    }
    const endpoint = `injective/exchange/v1beta1/spot/full_market/${params.marketId}`;
    return await this.req.get<QueryFullSpotMarketResponseSDKType>(endpoint, options);
  }
  /* Retrieves a spot market's orderbook by marketID */
  async spotOrderbook(params: QuerySpotOrderbookRequest): Promise<QuerySpotOrderbookResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.limit !== "undefined") {
      options.params.limit = params.limit;
    }
    if (typeof params?.orderSide !== "undefined") {
      options.params.order_side = params.orderSide;
    }
    if (typeof params?.limitCumulativeNotional !== "undefined") {
      options.params.limit_cumulative_notional = params.limitCumulativeNotional;
    }
    if (typeof params?.limitCumulativeQuantity !== "undefined") {
      options.params.limit_cumulative_quantity = params.limitCumulativeQuantity;
    }
    const endpoint = `injective/exchange/v1beta1/spot/orderbook/${params.marketId}`;
    return await this.req.get<QuerySpotOrderbookResponseSDKType>(endpoint, options);
  }
  /* Retrieves a trader's spot orders */
  async traderSpotOrders(params: QueryTraderSpotOrdersRequest): Promise<QueryTraderSpotOrdersResponseSDKType> {
    const endpoint = `injective/exchange/v1beta1/spot/orders/${params.marketId}/${params.subaccountId}`;
    return await this.req.get<QueryTraderSpotOrdersResponseSDKType>(endpoint);
  }
  /* Retrieves all account address spot orders */
  async accountAddressSpotOrders(params: QueryAccountAddressSpotOrdersRequest): Promise<QueryAccountAddressSpotOrdersResponseSDKType> {
    const endpoint = `injective/exchange/v1beta1/spot/orders/${params.marketId}/account/${params.accountAddress}`;
    return await this.req.get<QueryAccountAddressSpotOrdersResponseSDKType>(endpoint);
  }
  /* Retrieves spot orders corresponding to specified order hashes for a given
   subaccountID and marketID */
  async spotOrdersByHashes(params: QuerySpotOrdersByHashesRequest): Promise<QuerySpotOrdersByHashesResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.orderHashes !== "undefined") {
      options.params.order_hashes = params.orderHashes;
    }
    const endpoint = `injective/exchange/v1beta1/spot/orders_by_hashes/${params.marketId}/${params.subaccountId}`;
    return await this.req.get<QuerySpotOrdersByHashesResponseSDKType>(endpoint, options);
  }
  /* Retrieves subaccount's orders */
  async subaccountOrders(params: QuerySubaccountOrdersRequest): Promise<QuerySubaccountOrdersResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.marketId !== "undefined") {
      options.params.market_id = params.marketId;
    }
    const endpoint = `injective/exchange/v1beta1/orders/${params.subaccountId}`;
    return await this.req.get<QuerySubaccountOrdersResponseSDKType>(endpoint, options);
  }
  /* Retrieves a trader's transient spot orders */
  async traderSpotTransientOrders(params: QueryTraderSpotOrdersRequest): Promise<QueryTraderSpotOrdersResponseSDKType> {
    const endpoint = `injective/exchange/v1beta1/spot/transient_orders/${params.marketId}/${params.subaccountId}`;
    return await this.req.get<QueryTraderSpotOrdersResponseSDKType>(endpoint);
  }
  /* Retrieves a spot market's mid-price */
  async spotMidPriceAndTOB(params: QuerySpotMidPriceAndTOBRequest): Promise<QuerySpotMidPriceAndTOBResponseSDKType> {
    const endpoint = `injective/exchange/v1beta1/spot/mid_price_and_tob/${params.marketId}`;
    return await this.req.get<QuerySpotMidPriceAndTOBResponseSDKType>(endpoint);
  }
  /* Retrieves a derivative market's mid-price */
  async derivativeMidPriceAndTOB(params: QueryDerivativeMidPriceAndTOBRequest): Promise<QueryDerivativeMidPriceAndTOBResponseSDKType> {
    const endpoint = `injective/exchange/v1beta1/derivative/mid_price_and_tob/${params.marketId}`;
    return await this.req.get<QueryDerivativeMidPriceAndTOBResponseSDKType>(endpoint);
  }
  /* Retrieves a derivative market's orderbook by marketID */
  async derivativeOrderbook(params: QueryDerivativeOrderbookRequest): Promise<QueryDerivativeOrderbookResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.limit !== "undefined") {
      options.params.limit = params.limit;
    }
    if (typeof params?.limitCumulativeNotional !== "undefined") {
      options.params.limit_cumulative_notional = params.limitCumulativeNotional;
    }
    const endpoint = `injective/exchange/v1beta1/derivative/orderbook/${params.marketId}`;
    return await this.req.get<QueryDerivativeOrderbookResponseSDKType>(endpoint, options);
  }
  /* Retrieves a trader's derivative orders */
  async traderDerivativeOrders(params: QueryTraderDerivativeOrdersRequest): Promise<QueryTraderDerivativeOrdersResponseSDKType> {
    const endpoint = `injective/exchange/v1beta1/derivative/orders/${params.marketId}/${params.subaccountId}`;
    return await this.req.get<QueryTraderDerivativeOrdersResponseSDKType>(endpoint);
  }
  /* Retrieves all account address derivative orders */
  async accountAddressDerivativeOrders(params: QueryAccountAddressDerivativeOrdersRequest): Promise<QueryAccountAddressDerivativeOrdersResponseSDKType> {
    const endpoint = `injective/exchange/v1beta1/derivative/orders/${params.marketId}/account/${params.accountAddress}`;
    return await this.req.get<QueryAccountAddressDerivativeOrdersResponseSDKType>(endpoint);
  }
  /* Retrieves a trader's derivative orders */
  async derivativeOrdersByHashes(params: QueryDerivativeOrdersByHashesRequest): Promise<QueryDerivativeOrdersByHashesResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.orderHashes !== "undefined") {
      options.params.order_hashes = params.orderHashes;
    }
    const endpoint = `injective/exchange/v1beta1/derivative/orders_by_hashes/${params.marketId}/${params.subaccountId}`;
    return await this.req.get<QueryDerivativeOrdersByHashesResponseSDKType>(endpoint, options);
  }
  /* Retrieves a trader's transient derivative orders */
  async traderDerivativeTransientOrders(params: QueryTraderDerivativeOrdersRequest): Promise<QueryTraderDerivativeOrdersResponseSDKType> {
    const endpoint = `injective/exchange/v1beta1/derivative/transient_orders/${params.marketId}/${params.subaccountId}`;
    return await this.req.get<QueryTraderDerivativeOrdersResponseSDKType>(endpoint);
  }
  /* Retrieves a list of derivative markets. */
  async derivativeMarkets(params: QueryDerivativeMarketsRequest): Promise<QueryDerivativeMarketsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.status !== "undefined") {
      options.params.status = params.status;
    }
    if (typeof params?.marketIds !== "undefined") {
      options.params.market_ids = params.marketIds;
    }
    if (typeof params?.withMidPriceAndTob !== "undefined") {
      options.params.with_mid_price_and_tob = params.withMidPriceAndTob;
    }
    const endpoint = `injective/exchange/v1beta1/derivative/markets`;
    return await this.req.get<QueryDerivativeMarketsResponseSDKType>(endpoint, options);
  }
  /* Retrieves a derivative market by ticker */
  async derivativeMarket(params: QueryDerivativeMarketRequest): Promise<QueryDerivativeMarketResponseSDKType> {
    const endpoint = `injective/exchange/v1beta1/derivative/markets/${params.marketId}`;
    return await this.req.get<QueryDerivativeMarketResponseSDKType>(endpoint);
  }
  /* Retrieves a derivative market's corresponding address for fees that
   contribute to the market's insurance fund */
  async derivativeMarketAddress(params: QueryDerivativeMarketAddressRequest): Promise<QueryDerivativeMarketAddressResponseSDKType> {
    const endpoint = `injective/exchange/v1beta1/derivative/market_address/${params.marketId}`;
    return await this.req.get<QueryDerivativeMarketAddressResponseSDKType>(endpoint);
  }
  /* Retrieves a subaccount's trade nonce */
  async subaccountTradeNonce(params: QuerySubaccountTradeNonceRequest): Promise<QuerySubaccountTradeNonceResponseSDKType> {
    const endpoint = `injective/exchange/v1beta1/exchange/${params.subaccountId}`;
    return await this.req.get<QuerySubaccountTradeNonceResponseSDKType>(endpoint);
  }
  /* Retrieves the entire exchange module's state */
  async exchangeModuleState(_params: QueryModuleStateRequest = {}): Promise<QueryModuleStateResponseSDKType> {
    const endpoint = `injective/exchange/v1beta1/module_state`;
    return await this.req.get<QueryModuleStateResponseSDKType>(endpoint);
  }
  /* Retrieves the entire exchange module's positions */
  async positions(_params: QueryPositionsRequest = {}): Promise<QueryPositionsResponseSDKType> {
    const endpoint = `injective/exchange/v1beta1/positions`;
    return await this.req.get<QueryPositionsResponseSDKType>(endpoint);
  }
  /* Retrieves subaccount's positions */
  async subaccountPositions(params: QuerySubaccountPositionsRequest): Promise<QuerySubaccountPositionsResponseSDKType> {
    const endpoint = `injective/exchange/v1beta1/positions/${params.subaccountId}`;
    return await this.req.get<QuerySubaccountPositionsResponseSDKType>(endpoint);
  }
  /* Retrieves subaccount's position in market */
  async subaccountPositionInMarket(params: QuerySubaccountPositionInMarketRequest): Promise<QuerySubaccountPositionInMarketResponseSDKType> {
    const endpoint = `injective/exchange/v1beta1/positions/${params.subaccountId}/${params.marketId}`;
    return await this.req.get<QuerySubaccountPositionInMarketResponseSDKType>(endpoint);
  }
  /* Retrieves subaccount's position in market */
  async subaccountEffectivePositionInMarket(params: QuerySubaccountEffectivePositionInMarketRequest): Promise<QuerySubaccountEffectivePositionInMarketResponseSDKType> {
    const endpoint = `injective/exchange/v1beta1/effective_positions/${params.subaccountId}/${params.marketId}`;
    return await this.req.get<QuerySubaccountEffectivePositionInMarketResponseSDKType>(endpoint);
  }
  /* Retrieves perpetual market info */
  async perpetualMarketInfo(params: QueryPerpetualMarketInfoRequest): Promise<QueryPerpetualMarketInfoResponseSDKType> {
    const endpoint = `injective/exchange/v1beta1/perpetual_market_info/${params.marketId}`;
    return await this.req.get<QueryPerpetualMarketInfoResponseSDKType>(endpoint);
  }
  /* Retrieves expiry market info */
  async expiryFuturesMarketInfo(params: QueryExpiryFuturesMarketInfoRequest): Promise<QueryExpiryFuturesMarketInfoResponseSDKType> {
    const endpoint = `injective/exchange/v1beta1/expiry_market_info/${params.marketId}`;
    return await this.req.get<QueryExpiryFuturesMarketInfoResponseSDKType>(endpoint);
  }
  /* Retrieves perpetual market funding */
  async perpetualMarketFunding(params: QueryPerpetualMarketFundingRequest): Promise<QueryPerpetualMarketFundingResponseSDKType> {
    const endpoint = `injective/exchange/v1beta1/perpetual_market_funding/${params.marketId}`;
    return await this.req.get<QueryPerpetualMarketFundingResponseSDKType>(endpoint);
  }
  /* Retrieves subaccount's order metadata */
  async subaccountOrderMetadata(params: QuerySubaccountOrderMetadataRequest): Promise<QuerySubaccountOrderMetadataResponseSDKType> {
    const endpoint = `injective/exchange/v1beta1/order_metadata/${params.subaccountId}`;
    return await this.req.get<QuerySubaccountOrderMetadataResponseSDKType>(endpoint);
  }
  /* Retrieves the account and total trade rewards points */
  async tradeRewardPoints(params: QueryTradeRewardPointsRequest): Promise<QueryTradeRewardPointsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.accounts !== "undefined") {
      options.params.accounts = params.accounts;
    }
    if (typeof params?.pendingPoolTimestamp !== "undefined") {
      options.params.pending_pool_timestamp = params.pendingPoolTimestamp;
    }
    const endpoint = `injective/exchange/v1beta1/trade_reward_points`;
    return await this.req.get<QueryTradeRewardPointsResponseSDKType>(endpoint, options);
  }
  /* Retrieves the pending account and total trade rewards points */
  async pendingTradeRewardPoints(params: QueryTradeRewardPointsRequest): Promise<QueryTradeRewardPointsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.accounts !== "undefined") {
      options.params.accounts = params.accounts;
    }
    if (typeof params?.pendingPoolTimestamp !== "undefined") {
      options.params.pending_pool_timestamp = params.pendingPoolTimestamp;
    }
    const endpoint = `injective/exchange/v1beta1/pending_trade_reward_points`;
    return await this.req.get<QueryTradeRewardPointsResponseSDKType>(endpoint, options);
  }
  /* Retrieves the trade reward campaign */
  async tradeRewardCampaign(_params: QueryTradeRewardCampaignRequest = {}): Promise<QueryTradeRewardCampaignResponseSDKType> {
    const endpoint = `injective/exchange/v1beta1/trade_reward_campaign`;
    return await this.req.get<QueryTradeRewardCampaignResponseSDKType>(endpoint);
  }
  /* Retrieves the account's fee discount info */
  async feeDiscountAccountInfo(params: QueryFeeDiscountAccountInfoRequest): Promise<QueryFeeDiscountAccountInfoResponseSDKType> {
    const endpoint = `injective/exchange/v1beta1/fee_discount_account_info/${params.account}`;
    return await this.req.get<QueryFeeDiscountAccountInfoResponseSDKType>(endpoint);
  }
  /* Retrieves the fee discount schedule */
  async feeDiscountSchedule(_params: QueryFeeDiscountScheduleRequest = {}): Promise<QueryFeeDiscountScheduleResponseSDKType> {
    const endpoint = `injective/exchange/v1beta1/fee_discount_schedule`;
    return await this.req.get<QueryFeeDiscountScheduleResponseSDKType>(endpoint);
  }
  /* Retrieves mismatches between available vs. total balance */
  async balanceMismatches(params: QueryBalanceMismatchesRequest): Promise<QueryBalanceMismatchesResponseSDKType> {
    const endpoint = `injective/exchange/v1beta1/balance_mismatches/${params.dustFactor}`;
    return await this.req.get<QueryBalanceMismatchesResponseSDKType>(endpoint);
  }
  /* Retrieves available and total balances with balance holds */
  async balanceWithBalanceHolds(_params: QueryBalanceWithBalanceHoldsRequest = {}): Promise<QueryBalanceWithBalanceHoldsResponseSDKType> {
    const endpoint = `injective/exchange/v1beta1/balances_with_balance_holds`;
    return await this.req.get<QueryBalanceWithBalanceHoldsResponseSDKType>(endpoint);
  }
  /* Retrieves fee discount tier stats */
  async feeDiscountTierStatistics(_params: QueryFeeDiscountTierStatisticsRequest = {}): Promise<QueryFeeDiscountTierStatisticsResponseSDKType> {
    const endpoint = `injective/exchange/v1beta1/fee_discount_tier_stats`;
    return await this.req.get<QueryFeeDiscountTierStatisticsResponseSDKType>(endpoint);
  }
  /* Retrieves market making pool info */
  async mitoVaultInfos(_params: MitoVaultInfosRequest = {}): Promise<MitoVaultInfosResponseSDKType> {
    const endpoint = `injective/exchange/v1beta1/mito_vault_infos`;
    return await this.req.get<MitoVaultInfosResponseSDKType>(endpoint);
  }
  /* QueryMarketIDFromVault returns the market ID for a given vault subaccount ID */
  async queryMarketIDFromVault(params: QueryMarketIDFromVaultRequest): Promise<QueryMarketIDFromVaultResponseSDKType> {
    const endpoint = `injective/exchange/v1beta1/vault_market_id/${params.vaultAddress}`;
    return await this.req.get<QueryMarketIDFromVaultResponseSDKType>(endpoint);
  }
  /* Retrieves historical trade records for a given market ID */
  async historicalTradeRecords(params: QueryHistoricalTradeRecordsRequest): Promise<QueryHistoricalTradeRecordsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.marketId !== "undefined") {
      options.params.market_id = params.marketId;
    }
    const endpoint = `injective/exchange/v1beta1/historical_trade_records`;
    return await this.req.get<QueryHistoricalTradeRecordsResponseSDKType>(endpoint, options);
  }
  /* Retrieves if the account is opted out of rewards */
  async isOptedOutOfRewards(params: QueryIsOptedOutOfRewardsRequest): Promise<QueryIsOptedOutOfRewardsResponseSDKType> {
    const endpoint = `injective/exchange/v1beta1/is_opted_out_of_rewards/${params.account}`;
    return await this.req.get<QueryIsOptedOutOfRewardsResponseSDKType>(endpoint);
  }
  /* Retrieves all accounts opted out of rewards */
  async optedOutOfRewardsAccounts(_params: QueryOptedOutOfRewardsAccountsRequest = {}): Promise<QueryOptedOutOfRewardsAccountsResponseSDKType> {
    const endpoint = `injective/exchange/v1beta1/opted_out_of_rewards_accounts`;
    return await this.req.get<QueryOptedOutOfRewardsAccountsResponseSDKType>(endpoint);
  }
  /* MarketVolatility computes the volatility for spot and derivative markets
   trading history. */
  async marketVolatility(params: QueryMarketVolatilityRequest): Promise<QueryMarketVolatilityResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.tradeHistoryOptions !== "undefined") {
      options.params.trade_history_options = params.tradeHistoryOptions;
    }
    const endpoint = `injective/exchange/v1beta1/market_volatility/${params.marketId}`;
    return await this.req.get<QueryMarketVolatilityResponseSDKType>(endpoint, options);
  }
  /* Retrieves a spot market's orderbook by marketID */
  async binaryOptionsMarkets(params: QueryBinaryMarketsRequest): Promise<QueryBinaryMarketsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.status !== "undefined") {
      options.params.status = params.status;
    }
    const endpoint = `injective/exchange/v1beta1/binary_options/markets`;
    return await this.req.get<QueryBinaryMarketsResponseSDKType>(endpoint, options);
  }
  /* Retrieves a trader's derivative conditional orders */
  async traderDerivativeConditionalOrders(params: QueryTraderDerivativeConditionalOrdersRequest): Promise<QueryTraderDerivativeConditionalOrdersResponseSDKType> {
    const endpoint = `injective/exchange/v1beta1/derivative/orders/conditional/${params.marketId}/${params.subaccountId}`;
    return await this.req.get<QueryTraderDerivativeConditionalOrdersResponseSDKType>(endpoint);
  }
  /* MarketAtomicExecutionFeeMultiplier */
  async marketAtomicExecutionFeeMultiplier(params: QueryMarketAtomicExecutionFeeMultiplierRequest): Promise<QueryMarketAtomicExecutionFeeMultiplierResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.marketId !== "undefined") {
      options.params.market_id = params.marketId;
    }
    const endpoint = `injective/exchange/v1beta1/atomic_order_fee_multiplier`;
    return await this.req.get<QueryMarketAtomicExecutionFeeMultiplierResponseSDKType>(endpoint, options);
  }
}