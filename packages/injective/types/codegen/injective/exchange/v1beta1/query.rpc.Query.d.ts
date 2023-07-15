import { Rpc } from "../../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryExchangeParamsRequest, QueryExchangeParamsResponse, QuerySubaccountDepositsRequest, QuerySubaccountDepositsResponse, QuerySubaccountDepositRequest, QuerySubaccountDepositResponse, QueryExchangeBalancesRequest, QueryExchangeBalancesResponse, QueryAggregateVolumeRequest, QueryAggregateVolumeResponse, QueryAggregateVolumesRequest, QueryAggregateVolumesResponse, QueryAggregateMarketVolumeRequest, QueryAggregateMarketVolumeResponse, QueryAggregateMarketVolumesRequest, QueryAggregateMarketVolumesResponse, QueryDenomDecimalRequest, QueryDenomDecimalResponse, QueryDenomDecimalsRequest, QueryDenomDecimalsResponse, QuerySpotMarketsRequest, QuerySpotMarketsResponse, QuerySpotMarketRequest, QuerySpotMarketResponse, QueryFullSpotMarketsRequest, QueryFullSpotMarketsResponse, QueryFullSpotMarketRequest, QueryFullSpotMarketResponse, QuerySpotOrderbookRequest, QuerySpotOrderbookResponse, QueryTraderSpotOrdersRequest, QueryTraderSpotOrdersResponse, QueryAccountAddressSpotOrdersRequest, QueryAccountAddressSpotOrdersResponse, QuerySpotOrdersByHashesRequest, QuerySpotOrdersByHashesResponse, QuerySubaccountOrdersRequest, QuerySubaccountOrdersResponse, QuerySpotMidPriceAndTOBRequest, QuerySpotMidPriceAndTOBResponse, QueryDerivativeMidPriceAndTOBRequest, QueryDerivativeMidPriceAndTOBResponse, QueryDerivativeOrderbookRequest, QueryDerivativeOrderbookResponse, QueryTraderDerivativeOrdersRequest, QueryTraderDerivativeOrdersResponse, QueryAccountAddressDerivativeOrdersRequest, QueryAccountAddressDerivativeOrdersResponse, QueryDerivativeOrdersByHashesRequest, QueryDerivativeOrdersByHashesResponse, QueryDerivativeMarketsRequest, QueryDerivativeMarketsResponse, QueryDerivativeMarketRequest, QueryDerivativeMarketResponse, QueryDerivativeMarketAddressRequest, QueryDerivativeMarketAddressResponse, QuerySubaccountTradeNonceRequest, QuerySubaccountTradeNonceResponse, QueryModuleStateRequest, QueryModuleStateResponse, QueryPositionsRequest, QueryPositionsResponse, QuerySubaccountPositionsRequest, QuerySubaccountPositionsResponse, QuerySubaccountPositionInMarketRequest, QuerySubaccountPositionInMarketResponse, QuerySubaccountEffectivePositionInMarketRequest, QuerySubaccountEffectivePositionInMarketResponse, QueryPerpetualMarketInfoRequest, QueryPerpetualMarketInfoResponse, QueryExpiryFuturesMarketInfoRequest, QueryExpiryFuturesMarketInfoResponse, QueryPerpetualMarketFundingRequest, QueryPerpetualMarketFundingResponse, QuerySubaccountOrderMetadataRequest, QuerySubaccountOrderMetadataResponse, QueryTradeRewardPointsRequest, QueryTradeRewardPointsResponse, QueryTradeRewardCampaignRequest, QueryTradeRewardCampaignResponse, QueryFeeDiscountAccountInfoRequest, QueryFeeDiscountAccountInfoResponse, QueryFeeDiscountScheduleRequest, QueryFeeDiscountScheduleResponse, QueryBalanceMismatchesRequest, QueryBalanceMismatchesResponse, QueryBalanceWithBalanceHoldsRequest, QueryBalanceWithBalanceHoldsResponse, QueryFeeDiscountTierStatisticsRequest, QueryFeeDiscountTierStatisticsResponse, MitoVaultInfosRequest, MitoVaultInfosResponse, QueryMarketIDFromVaultRequest, QueryMarketIDFromVaultResponse, QueryHistoricalTradeRecordsRequest, QueryHistoricalTradeRecordsResponse, QueryIsOptedOutOfRewardsRequest, QueryIsOptedOutOfRewardsResponse, QueryOptedOutOfRewardsAccountsRequest, QueryOptedOutOfRewardsAccountsResponse, QueryMarketVolatilityRequest, QueryMarketVolatilityResponse, QueryBinaryMarketsRequest, QueryBinaryMarketsResponse, QueryTraderDerivativeConditionalOrdersRequest, QueryTraderDerivativeConditionalOrdersResponse, QueryMarketAtomicExecutionFeeMultiplierRequest, QueryMarketAtomicExecutionFeeMultiplierResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
    /** Retrieves exchange params */
    queryExchangeParams(request?: QueryExchangeParamsRequest): Promise<QueryExchangeParamsResponse>;
    /** Retrieves a Subaccount's Deposits */
    subaccountDeposits(request: QuerySubaccountDepositsRequest): Promise<QuerySubaccountDepositsResponse>;
    /** Retrieves a Subaccount's Deposits */
    subaccountDeposit(request: QuerySubaccountDepositRequest): Promise<QuerySubaccountDepositResponse>;
    /** Retrieves all of the balances of all users on the exchange. */
    exchangeBalances(request?: QueryExchangeBalancesRequest): Promise<QueryExchangeBalancesResponse>;
    /** Retrieves the aggregate volumes for the specified account or subaccount */
    aggregateVolume(request: QueryAggregateVolumeRequest): Promise<QueryAggregateVolumeResponse>;
    /** Retrieves the aggregate volumes for specified accounts */
    aggregateVolumes(request: QueryAggregateVolumesRequest): Promise<QueryAggregateVolumesResponse>;
    /** Retrieves the aggregate volume for the specified market */
    aggregateMarketVolume(request: QueryAggregateMarketVolumeRequest): Promise<QueryAggregateMarketVolumeResponse>;
    /** Retrieves the aggregate market volumes for specified markets */
    aggregateMarketVolumes(request: QueryAggregateMarketVolumesRequest): Promise<QueryAggregateMarketVolumesResponse>;
    /** Retrieves the denom decimals for a denom. */
    denomDecimal(request: QueryDenomDecimalRequest): Promise<QueryDenomDecimalResponse>;
    /**
     * Retrieves the denom decimals for multiple denoms. Returns all denom
     * decimals if unspecified.
     */
    denomDecimals(request: QueryDenomDecimalsRequest): Promise<QueryDenomDecimalsResponse>;
    /** Retrieves a list of spot markets. */
    spotMarkets(request: QuerySpotMarketsRequest): Promise<QuerySpotMarketsResponse>;
    /** Retrieves a spot market by ticker */
    spotMarket(request: QuerySpotMarketRequest): Promise<QuerySpotMarketResponse>;
    /** Retrieves a list of spot markets with extra information. */
    fullSpotMarkets(request: QueryFullSpotMarketsRequest): Promise<QueryFullSpotMarketsResponse>;
    /** Retrieves a spot market with extra information. */
    fullSpotMarket(request: QueryFullSpotMarketRequest): Promise<QueryFullSpotMarketResponse>;
    /** Retrieves a spot market's orderbook by marketID */
    spotOrderbook(request: QuerySpotOrderbookRequest): Promise<QuerySpotOrderbookResponse>;
    /** Retrieves a trader's spot orders */
    traderSpotOrders(request: QueryTraderSpotOrdersRequest): Promise<QueryTraderSpotOrdersResponse>;
    /** Retrieves all account address spot orders */
    accountAddressSpotOrders(request: QueryAccountAddressSpotOrdersRequest): Promise<QueryAccountAddressSpotOrdersResponse>;
    /**
     * Retrieves spot orders corresponding to specified order hashes for a given
     * subaccountID and marketID
     */
    spotOrdersByHashes(request: QuerySpotOrdersByHashesRequest): Promise<QuerySpotOrdersByHashesResponse>;
    /** Retrieves subaccount's orders */
    subaccountOrders(request: QuerySubaccountOrdersRequest): Promise<QuerySubaccountOrdersResponse>;
    /** Retrieves a trader's transient spot orders */
    traderSpotTransientOrders(request: QueryTraderSpotOrdersRequest): Promise<QueryTraderSpotOrdersResponse>;
    /** Retrieves a spot market's mid-price */
    spotMidPriceAndTOB(request: QuerySpotMidPriceAndTOBRequest): Promise<QuerySpotMidPriceAndTOBResponse>;
    /** Retrieves a derivative market's mid-price */
    derivativeMidPriceAndTOB(request: QueryDerivativeMidPriceAndTOBRequest): Promise<QueryDerivativeMidPriceAndTOBResponse>;
    /** Retrieves a derivative market's orderbook by marketID */
    derivativeOrderbook(request: QueryDerivativeOrderbookRequest): Promise<QueryDerivativeOrderbookResponse>;
    /** Retrieves a trader's derivative orders */
    traderDerivativeOrders(request: QueryTraderDerivativeOrdersRequest): Promise<QueryTraderDerivativeOrdersResponse>;
    /** Retrieves all account address derivative orders */
    accountAddressDerivativeOrders(request: QueryAccountAddressDerivativeOrdersRequest): Promise<QueryAccountAddressDerivativeOrdersResponse>;
    /** Retrieves a trader's derivative orders */
    derivativeOrdersByHashes(request: QueryDerivativeOrdersByHashesRequest): Promise<QueryDerivativeOrdersByHashesResponse>;
    /** Retrieves a trader's transient derivative orders */
    traderDerivativeTransientOrders(request: QueryTraderDerivativeOrdersRequest): Promise<QueryTraderDerivativeOrdersResponse>;
    /** Retrieves a list of derivative markets. */
    derivativeMarkets(request: QueryDerivativeMarketsRequest): Promise<QueryDerivativeMarketsResponse>;
    /** Retrieves a derivative market by ticker */
    derivativeMarket(request: QueryDerivativeMarketRequest): Promise<QueryDerivativeMarketResponse>;
    /**
     * Retrieves a derivative market's corresponding address for fees that
     * contribute to the market's insurance fund
     */
    derivativeMarketAddress(request: QueryDerivativeMarketAddressRequest): Promise<QueryDerivativeMarketAddressResponse>;
    /** Retrieves a subaccount's trade nonce */
    subaccountTradeNonce(request: QuerySubaccountTradeNonceRequest): Promise<QuerySubaccountTradeNonceResponse>;
    /** Retrieves the entire exchange module's state */
    exchangeModuleState(request?: QueryModuleStateRequest): Promise<QueryModuleStateResponse>;
    /** Retrieves the entire exchange module's positions */
    positions(request?: QueryPositionsRequest): Promise<QueryPositionsResponse>;
    /** Retrieves subaccount's positions */
    subaccountPositions(request: QuerySubaccountPositionsRequest): Promise<QuerySubaccountPositionsResponse>;
    /** Retrieves subaccount's position in market */
    subaccountPositionInMarket(request: QuerySubaccountPositionInMarketRequest): Promise<QuerySubaccountPositionInMarketResponse>;
    /** Retrieves subaccount's position in market */
    subaccountEffectivePositionInMarket(request: QuerySubaccountEffectivePositionInMarketRequest): Promise<QuerySubaccountEffectivePositionInMarketResponse>;
    /** Retrieves perpetual market info */
    perpetualMarketInfo(request: QueryPerpetualMarketInfoRequest): Promise<QueryPerpetualMarketInfoResponse>;
    /** Retrieves expiry market info */
    expiryFuturesMarketInfo(request: QueryExpiryFuturesMarketInfoRequest): Promise<QueryExpiryFuturesMarketInfoResponse>;
    /** Retrieves perpetual market funding */
    perpetualMarketFunding(request: QueryPerpetualMarketFundingRequest): Promise<QueryPerpetualMarketFundingResponse>;
    /** Retrieves subaccount's order metadata */
    subaccountOrderMetadata(request: QuerySubaccountOrderMetadataRequest): Promise<QuerySubaccountOrderMetadataResponse>;
    /** Retrieves the account and total trade rewards points */
    tradeRewardPoints(request: QueryTradeRewardPointsRequest): Promise<QueryTradeRewardPointsResponse>;
    /** Retrieves the pending account and total trade rewards points */
    pendingTradeRewardPoints(request: QueryTradeRewardPointsRequest): Promise<QueryTradeRewardPointsResponse>;
    /** Retrieves the trade reward campaign */
    tradeRewardCampaign(request?: QueryTradeRewardCampaignRequest): Promise<QueryTradeRewardCampaignResponse>;
    /** Retrieves the account's fee discount info */
    feeDiscountAccountInfo(request: QueryFeeDiscountAccountInfoRequest): Promise<QueryFeeDiscountAccountInfoResponse>;
    /** Retrieves the fee discount schedule */
    feeDiscountSchedule(request?: QueryFeeDiscountScheduleRequest): Promise<QueryFeeDiscountScheduleResponse>;
    /** Retrieves mismatches between available vs. total balance */
    balanceMismatches(request: QueryBalanceMismatchesRequest): Promise<QueryBalanceMismatchesResponse>;
    /** Retrieves available and total balances with balance holds */
    balanceWithBalanceHolds(request?: QueryBalanceWithBalanceHoldsRequest): Promise<QueryBalanceWithBalanceHoldsResponse>;
    /** Retrieves fee discount tier stats */
    feeDiscountTierStatistics(request?: QueryFeeDiscountTierStatisticsRequest): Promise<QueryFeeDiscountTierStatisticsResponse>;
    /** Retrieves market making pool info */
    mitoVaultInfos(request?: MitoVaultInfosRequest): Promise<MitoVaultInfosResponse>;
    /** QueryMarketIDFromVault returns the market ID for a given vault subaccount ID */
    queryMarketIDFromVault(request: QueryMarketIDFromVaultRequest): Promise<QueryMarketIDFromVaultResponse>;
    /** Retrieves historical trade records for a given market ID */
    historicalTradeRecords(request: QueryHistoricalTradeRecordsRequest): Promise<QueryHistoricalTradeRecordsResponse>;
    /** Retrieves if the account is opted out of rewards */
    isOptedOutOfRewards(request: QueryIsOptedOutOfRewardsRequest): Promise<QueryIsOptedOutOfRewardsResponse>;
    /** Retrieves all accounts opted out of rewards */
    optedOutOfRewardsAccounts(request?: QueryOptedOutOfRewardsAccountsRequest): Promise<QueryOptedOutOfRewardsAccountsResponse>;
    /**
     * MarketVolatility computes the volatility for spot and derivative markets
     * trading history.
     */
    marketVolatility(request: QueryMarketVolatilityRequest): Promise<QueryMarketVolatilityResponse>;
    /** Retrieves a spot market's orderbook by marketID */
    binaryOptionsMarkets(request: QueryBinaryMarketsRequest): Promise<QueryBinaryMarketsResponse>;
    /** Retrieves a trader's derivative conditional orders */
    traderDerivativeConditionalOrders(request: QueryTraderDerivativeConditionalOrdersRequest): Promise<QueryTraderDerivativeConditionalOrdersResponse>;
    marketAtomicExecutionFeeMultiplier(request: QueryMarketAtomicExecutionFeeMultiplierRequest): Promise<QueryMarketAtomicExecutionFeeMultiplierResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    queryExchangeParams(request?: QueryExchangeParamsRequest): Promise<QueryExchangeParamsResponse>;
    subaccountDeposits(request: QuerySubaccountDepositsRequest): Promise<QuerySubaccountDepositsResponse>;
    subaccountDeposit(request: QuerySubaccountDepositRequest): Promise<QuerySubaccountDepositResponse>;
    exchangeBalances(request?: QueryExchangeBalancesRequest): Promise<QueryExchangeBalancesResponse>;
    aggregateVolume(request: QueryAggregateVolumeRequest): Promise<QueryAggregateVolumeResponse>;
    aggregateVolumes(request: QueryAggregateVolumesRequest): Promise<QueryAggregateVolumesResponse>;
    aggregateMarketVolume(request: QueryAggregateMarketVolumeRequest): Promise<QueryAggregateMarketVolumeResponse>;
    aggregateMarketVolumes(request: QueryAggregateMarketVolumesRequest): Promise<QueryAggregateMarketVolumesResponse>;
    denomDecimal(request: QueryDenomDecimalRequest): Promise<QueryDenomDecimalResponse>;
    denomDecimals(request: QueryDenomDecimalsRequest): Promise<QueryDenomDecimalsResponse>;
    spotMarkets(request: QuerySpotMarketsRequest): Promise<QuerySpotMarketsResponse>;
    spotMarket(request: QuerySpotMarketRequest): Promise<QuerySpotMarketResponse>;
    fullSpotMarkets(request: QueryFullSpotMarketsRequest): Promise<QueryFullSpotMarketsResponse>;
    fullSpotMarket(request: QueryFullSpotMarketRequest): Promise<QueryFullSpotMarketResponse>;
    spotOrderbook(request: QuerySpotOrderbookRequest): Promise<QuerySpotOrderbookResponse>;
    traderSpotOrders(request: QueryTraderSpotOrdersRequest): Promise<QueryTraderSpotOrdersResponse>;
    accountAddressSpotOrders(request: QueryAccountAddressSpotOrdersRequest): Promise<QueryAccountAddressSpotOrdersResponse>;
    spotOrdersByHashes(request: QuerySpotOrdersByHashesRequest): Promise<QuerySpotOrdersByHashesResponse>;
    subaccountOrders(request: QuerySubaccountOrdersRequest): Promise<QuerySubaccountOrdersResponse>;
    traderSpotTransientOrders(request: QueryTraderSpotOrdersRequest): Promise<QueryTraderSpotOrdersResponse>;
    spotMidPriceAndTOB(request: QuerySpotMidPriceAndTOBRequest): Promise<QuerySpotMidPriceAndTOBResponse>;
    derivativeMidPriceAndTOB(request: QueryDerivativeMidPriceAndTOBRequest): Promise<QueryDerivativeMidPriceAndTOBResponse>;
    derivativeOrderbook(request: QueryDerivativeOrderbookRequest): Promise<QueryDerivativeOrderbookResponse>;
    traderDerivativeOrders(request: QueryTraderDerivativeOrdersRequest): Promise<QueryTraderDerivativeOrdersResponse>;
    accountAddressDerivativeOrders(request: QueryAccountAddressDerivativeOrdersRequest): Promise<QueryAccountAddressDerivativeOrdersResponse>;
    derivativeOrdersByHashes(request: QueryDerivativeOrdersByHashesRequest): Promise<QueryDerivativeOrdersByHashesResponse>;
    traderDerivativeTransientOrders(request: QueryTraderDerivativeOrdersRequest): Promise<QueryTraderDerivativeOrdersResponse>;
    derivativeMarkets(request: QueryDerivativeMarketsRequest): Promise<QueryDerivativeMarketsResponse>;
    derivativeMarket(request: QueryDerivativeMarketRequest): Promise<QueryDerivativeMarketResponse>;
    derivativeMarketAddress(request: QueryDerivativeMarketAddressRequest): Promise<QueryDerivativeMarketAddressResponse>;
    subaccountTradeNonce(request: QuerySubaccountTradeNonceRequest): Promise<QuerySubaccountTradeNonceResponse>;
    exchangeModuleState(request?: QueryModuleStateRequest): Promise<QueryModuleStateResponse>;
    positions(request?: QueryPositionsRequest): Promise<QueryPositionsResponse>;
    subaccountPositions(request: QuerySubaccountPositionsRequest): Promise<QuerySubaccountPositionsResponse>;
    subaccountPositionInMarket(request: QuerySubaccountPositionInMarketRequest): Promise<QuerySubaccountPositionInMarketResponse>;
    subaccountEffectivePositionInMarket(request: QuerySubaccountEffectivePositionInMarketRequest): Promise<QuerySubaccountEffectivePositionInMarketResponse>;
    perpetualMarketInfo(request: QueryPerpetualMarketInfoRequest): Promise<QueryPerpetualMarketInfoResponse>;
    expiryFuturesMarketInfo(request: QueryExpiryFuturesMarketInfoRequest): Promise<QueryExpiryFuturesMarketInfoResponse>;
    perpetualMarketFunding(request: QueryPerpetualMarketFundingRequest): Promise<QueryPerpetualMarketFundingResponse>;
    subaccountOrderMetadata(request: QuerySubaccountOrderMetadataRequest): Promise<QuerySubaccountOrderMetadataResponse>;
    tradeRewardPoints(request: QueryTradeRewardPointsRequest): Promise<QueryTradeRewardPointsResponse>;
    pendingTradeRewardPoints(request: QueryTradeRewardPointsRequest): Promise<QueryTradeRewardPointsResponse>;
    tradeRewardCampaign(request?: QueryTradeRewardCampaignRequest): Promise<QueryTradeRewardCampaignResponse>;
    feeDiscountAccountInfo(request: QueryFeeDiscountAccountInfoRequest): Promise<QueryFeeDiscountAccountInfoResponse>;
    feeDiscountSchedule(request?: QueryFeeDiscountScheduleRequest): Promise<QueryFeeDiscountScheduleResponse>;
    balanceMismatches(request: QueryBalanceMismatchesRequest): Promise<QueryBalanceMismatchesResponse>;
    balanceWithBalanceHolds(request?: QueryBalanceWithBalanceHoldsRequest): Promise<QueryBalanceWithBalanceHoldsResponse>;
    feeDiscountTierStatistics(request?: QueryFeeDiscountTierStatisticsRequest): Promise<QueryFeeDiscountTierStatisticsResponse>;
    mitoVaultInfos(request?: MitoVaultInfosRequest): Promise<MitoVaultInfosResponse>;
    queryMarketIDFromVault(request: QueryMarketIDFromVaultRequest): Promise<QueryMarketIDFromVaultResponse>;
    historicalTradeRecords(request: QueryHistoricalTradeRecordsRequest): Promise<QueryHistoricalTradeRecordsResponse>;
    isOptedOutOfRewards(request: QueryIsOptedOutOfRewardsRequest): Promise<QueryIsOptedOutOfRewardsResponse>;
    optedOutOfRewardsAccounts(request?: QueryOptedOutOfRewardsAccountsRequest): Promise<QueryOptedOutOfRewardsAccountsResponse>;
    marketVolatility(request: QueryMarketVolatilityRequest): Promise<QueryMarketVolatilityResponse>;
    binaryOptionsMarkets(request: QueryBinaryMarketsRequest): Promise<QueryBinaryMarketsResponse>;
    traderDerivativeConditionalOrders(request: QueryTraderDerivativeConditionalOrdersRequest): Promise<QueryTraderDerivativeConditionalOrdersResponse>;
    marketAtomicExecutionFeeMultiplier(request: QueryMarketAtomicExecutionFeeMultiplierRequest): Promise<QueryMarketAtomicExecutionFeeMultiplierResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    queryExchangeParams(request?: QueryExchangeParamsRequest): Promise<QueryExchangeParamsResponse>;
    subaccountDeposits(request: QuerySubaccountDepositsRequest): Promise<QuerySubaccountDepositsResponse>;
    subaccountDeposit(request: QuerySubaccountDepositRequest): Promise<QuerySubaccountDepositResponse>;
    exchangeBalances(request?: QueryExchangeBalancesRequest): Promise<QueryExchangeBalancesResponse>;
    aggregateVolume(request: QueryAggregateVolumeRequest): Promise<QueryAggregateVolumeResponse>;
    aggregateVolumes(request: QueryAggregateVolumesRequest): Promise<QueryAggregateVolumesResponse>;
    aggregateMarketVolume(request: QueryAggregateMarketVolumeRequest): Promise<QueryAggregateMarketVolumeResponse>;
    aggregateMarketVolumes(request: QueryAggregateMarketVolumesRequest): Promise<QueryAggregateMarketVolumesResponse>;
    denomDecimal(request: QueryDenomDecimalRequest): Promise<QueryDenomDecimalResponse>;
    denomDecimals(request: QueryDenomDecimalsRequest): Promise<QueryDenomDecimalsResponse>;
    spotMarkets(request: QuerySpotMarketsRequest): Promise<QuerySpotMarketsResponse>;
    spotMarket(request: QuerySpotMarketRequest): Promise<QuerySpotMarketResponse>;
    fullSpotMarkets(request: QueryFullSpotMarketsRequest): Promise<QueryFullSpotMarketsResponse>;
    fullSpotMarket(request: QueryFullSpotMarketRequest): Promise<QueryFullSpotMarketResponse>;
    spotOrderbook(request: QuerySpotOrderbookRequest): Promise<QuerySpotOrderbookResponse>;
    traderSpotOrders(request: QueryTraderSpotOrdersRequest): Promise<QueryTraderSpotOrdersResponse>;
    accountAddressSpotOrders(request: QueryAccountAddressSpotOrdersRequest): Promise<QueryAccountAddressSpotOrdersResponse>;
    spotOrdersByHashes(request: QuerySpotOrdersByHashesRequest): Promise<QuerySpotOrdersByHashesResponse>;
    subaccountOrders(request: QuerySubaccountOrdersRequest): Promise<QuerySubaccountOrdersResponse>;
    traderSpotTransientOrders(request: QueryTraderSpotOrdersRequest): Promise<QueryTraderSpotOrdersResponse>;
    spotMidPriceAndTOB(request: QuerySpotMidPriceAndTOBRequest): Promise<QuerySpotMidPriceAndTOBResponse>;
    derivativeMidPriceAndTOB(request: QueryDerivativeMidPriceAndTOBRequest): Promise<QueryDerivativeMidPriceAndTOBResponse>;
    derivativeOrderbook(request: QueryDerivativeOrderbookRequest): Promise<QueryDerivativeOrderbookResponse>;
    traderDerivativeOrders(request: QueryTraderDerivativeOrdersRequest): Promise<QueryTraderDerivativeOrdersResponse>;
    accountAddressDerivativeOrders(request: QueryAccountAddressDerivativeOrdersRequest): Promise<QueryAccountAddressDerivativeOrdersResponse>;
    derivativeOrdersByHashes(request: QueryDerivativeOrdersByHashesRequest): Promise<QueryDerivativeOrdersByHashesResponse>;
    traderDerivativeTransientOrders(request: QueryTraderDerivativeOrdersRequest): Promise<QueryTraderDerivativeOrdersResponse>;
    derivativeMarkets(request: QueryDerivativeMarketsRequest): Promise<QueryDerivativeMarketsResponse>;
    derivativeMarket(request: QueryDerivativeMarketRequest): Promise<QueryDerivativeMarketResponse>;
    derivativeMarketAddress(request: QueryDerivativeMarketAddressRequest): Promise<QueryDerivativeMarketAddressResponse>;
    subaccountTradeNonce(request: QuerySubaccountTradeNonceRequest): Promise<QuerySubaccountTradeNonceResponse>;
    exchangeModuleState(request?: QueryModuleStateRequest): Promise<QueryModuleStateResponse>;
    positions(request?: QueryPositionsRequest): Promise<QueryPositionsResponse>;
    subaccountPositions(request: QuerySubaccountPositionsRequest): Promise<QuerySubaccountPositionsResponse>;
    subaccountPositionInMarket(request: QuerySubaccountPositionInMarketRequest): Promise<QuerySubaccountPositionInMarketResponse>;
    subaccountEffectivePositionInMarket(request: QuerySubaccountEffectivePositionInMarketRequest): Promise<QuerySubaccountEffectivePositionInMarketResponse>;
    perpetualMarketInfo(request: QueryPerpetualMarketInfoRequest): Promise<QueryPerpetualMarketInfoResponse>;
    expiryFuturesMarketInfo(request: QueryExpiryFuturesMarketInfoRequest): Promise<QueryExpiryFuturesMarketInfoResponse>;
    perpetualMarketFunding(request: QueryPerpetualMarketFundingRequest): Promise<QueryPerpetualMarketFundingResponse>;
    subaccountOrderMetadata(request: QuerySubaccountOrderMetadataRequest): Promise<QuerySubaccountOrderMetadataResponse>;
    tradeRewardPoints(request: QueryTradeRewardPointsRequest): Promise<QueryTradeRewardPointsResponse>;
    pendingTradeRewardPoints(request: QueryTradeRewardPointsRequest): Promise<QueryTradeRewardPointsResponse>;
    tradeRewardCampaign(request?: QueryTradeRewardCampaignRequest): Promise<QueryTradeRewardCampaignResponse>;
    feeDiscountAccountInfo(request: QueryFeeDiscountAccountInfoRequest): Promise<QueryFeeDiscountAccountInfoResponse>;
    feeDiscountSchedule(request?: QueryFeeDiscountScheduleRequest): Promise<QueryFeeDiscountScheduleResponse>;
    balanceMismatches(request: QueryBalanceMismatchesRequest): Promise<QueryBalanceMismatchesResponse>;
    balanceWithBalanceHolds(request?: QueryBalanceWithBalanceHoldsRequest): Promise<QueryBalanceWithBalanceHoldsResponse>;
    feeDiscountTierStatistics(request?: QueryFeeDiscountTierStatisticsRequest): Promise<QueryFeeDiscountTierStatisticsResponse>;
    mitoVaultInfos(request?: MitoVaultInfosRequest): Promise<MitoVaultInfosResponse>;
    queryMarketIDFromVault(request: QueryMarketIDFromVaultRequest): Promise<QueryMarketIDFromVaultResponse>;
    historicalTradeRecords(request: QueryHistoricalTradeRecordsRequest): Promise<QueryHistoricalTradeRecordsResponse>;
    isOptedOutOfRewards(request: QueryIsOptedOutOfRewardsRequest): Promise<QueryIsOptedOutOfRewardsResponse>;
    optedOutOfRewardsAccounts(request?: QueryOptedOutOfRewardsAccountsRequest): Promise<QueryOptedOutOfRewardsAccountsResponse>;
    marketVolatility(request: QueryMarketVolatilityRequest): Promise<QueryMarketVolatilityResponse>;
    binaryOptionsMarkets(request: QueryBinaryMarketsRequest): Promise<QueryBinaryMarketsResponse>;
    traderDerivativeConditionalOrders(request: QueryTraderDerivativeConditionalOrdersRequest): Promise<QueryTraderDerivativeConditionalOrdersResponse>;
    marketAtomicExecutionFeeMultiplier(request: QueryMarketAtomicExecutionFeeMultiplierRequest): Promise<QueryMarketAtomicExecutionFeeMultiplierResponse>;
};
