import { SubaccountOrderData, SubaccountOrderDataSDKType, SubaccountOrderbookMetadata, SubaccountOrderbookMetadataSDKType, Params, ParamsSDKType, Deposit, DepositSDKType, MarketVolume, MarketVolumeSDKType, AggregateAccountVolumeRecord, AggregateAccountVolumeRecordSDKType, VolumeRecord, VolumeRecordSDKType, DenomDecimals, DenomDecimalsSDKType, SpotMarket, SpotMarketSDKType, Level, LevelSDKType, MidPriceAndTOB, MidPriceAndTOBSDKType, PerpetualMarketInfo, PerpetualMarketInfoSDKType, PerpetualMarketFunding, PerpetualMarketFundingSDKType, DerivativeMarket, DerivativeMarketSDKType, ExpiryFuturesMarketInfo, ExpiryFuturesMarketInfoSDKType, Position, PositionSDKType, TradingRewardCampaignInfo, TradingRewardCampaignInfoSDKType, CampaignRewardPool, CampaignRewardPoolSDKType, FeeDiscountTierInfo, FeeDiscountTierInfoSDKType, FeeDiscountTierTTL, FeeDiscountTierTTLSDKType, FeeDiscountSchedule, FeeDiscountScheduleSDKType, TradeRecords, TradeRecordsSDKType, TradeRecord, TradeRecordSDKType, BinaryOptionsMarket, BinaryOptionsMarketSDKType } from "./exchange";
import { Balance, BalanceSDKType, DerivativePosition, DerivativePositionSDKType, GenesisState, GenesisStateSDKType } from "./genesis";
import { MetadataStatistics, MetadataStatisticsSDKType } from "../../oracle/v1beta1/oracle";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export declare enum OrderSide {
    /** Side_Unspecified - will return both */
    Side_Unspecified = 0,
    Buy = 1,
    Sell = 2,
    UNRECOGNIZED = -1
}
export declare const OrderSideSDKType: typeof OrderSide;
export declare function orderSideFromJSON(object: any): OrderSide;
export declare function orderSideToJSON(object: OrderSide): string;
/** CancellationStrategy is the list of cancellation strategies. */
export declare enum CancellationStrategy {
    /** UnspecifiedOrder - just cancelling in random order in most efficient way */
    UnspecifiedOrder = 0,
    /** FromWorstToBest - e.g. for buy orders from lowest to highest price */
    FromWorstToBest = 1,
    /** FromBestToWorst - e.g. for buy orders from higest to lowest price */
    FromBestToWorst = 2,
    UNRECOGNIZED = -1
}
export declare const CancellationStrategySDKType: typeof CancellationStrategy;
export declare function cancellationStrategyFromJSON(object: any): CancellationStrategy;
export declare function cancellationStrategyToJSON(object: CancellationStrategy): string;
export interface Subaccount {
    trader: string;
    subaccountNonce: number;
}
export interface SubaccountSDKType {
    trader: string;
    subaccount_nonce: number;
}
export interface QuerySubaccountOrdersRequest {
    subaccountId: string;
    marketId: string;
}
export interface QuerySubaccountOrdersRequestSDKType {
    subaccount_id: string;
    market_id: string;
}
export interface QuerySubaccountOrdersResponse {
    buyOrders: SubaccountOrderData[];
    sellOrders: SubaccountOrderData[];
}
export interface QuerySubaccountOrdersResponseSDKType {
    buy_orders: SubaccountOrderDataSDKType[];
    sell_orders: SubaccountOrderDataSDKType[];
}
export interface SubaccountOrderbookMetadataWithMarket {
    metadata?: SubaccountOrderbookMetadata;
    marketId: string;
    isBuy: boolean;
}
export interface SubaccountOrderbookMetadataWithMarketSDKType {
    metadata?: SubaccountOrderbookMetadataSDKType;
    market_id: string;
    isBuy: boolean;
}
/**
 * QueryExchangeParamsRequest is the request type for the Query/ExchangeParams
 * RPC method.
 */
export interface QueryExchangeParamsRequest {
}
/**
 * QueryExchangeParamsRequest is the request type for the Query/ExchangeParams
 * RPC method.
 */
export interface QueryExchangeParamsRequestSDKType {
}
/**
 * QueryExchangeParamsRequest is the response type for the Query/ExchangeParams
 * RPC method.
 */
export interface QueryExchangeParamsResponse {
    params?: Params;
}
/**
 * QueryExchangeParamsRequest is the response type for the Query/ExchangeParams
 * RPC method.
 */
export interface QueryExchangeParamsResponseSDKType {
    params?: ParamsSDKType;
}
/**
 * QuerySubaccountDepositsRequest is the request type for the
 * Query/SubaccountDeposits RPC method.
 */
export interface QuerySubaccountDepositsRequest {
    subaccountId: string;
    subaccount?: Subaccount;
}
/**
 * QuerySubaccountDepositsRequest is the request type for the
 * Query/SubaccountDeposits RPC method.
 */
export interface QuerySubaccountDepositsRequestSDKType {
    subaccount_id: string;
    subaccount?: SubaccountSDKType;
}
export interface QuerySubaccountDepositsResponse_DepositsEntry {
    key: string;
    value?: Deposit;
}
export interface QuerySubaccountDepositsResponse_DepositsEntrySDKType {
    key: string;
    value?: DepositSDKType;
}
/**
 * QuerySubaccountDepositsResponse is the response type for the
 * Query/SubaccountDeposits RPC method.
 */
export interface QuerySubaccountDepositsResponse {
    /**
     * QuerySubaccountDepositsResponse is the response type for the
     * Query/SubaccountDeposits RPC method.
     */
    deposits?: {
        [key: string]: Deposit;
    };
}
/**
 * QuerySubaccountDepositsResponse is the response type for the
 * Query/SubaccountDeposits RPC method.
 */
export interface QuerySubaccountDepositsResponseSDKType {
    deposits?: {
        [key: string]: DepositSDKType;
    };
}
/**
 * QueryExchangeBalancesRequest is the request type for the
 * Query/ExchangeBalances RPC method.
 */
export interface QueryExchangeBalancesRequest {
}
/**
 * QueryExchangeBalancesRequest is the request type for the
 * Query/ExchangeBalances RPC method.
 */
export interface QueryExchangeBalancesRequestSDKType {
}
/**
 * QuerySubaccountDepositsResponse is the response type for the
 * Query/SubaccountDeposits RPC method.
 */
export interface QueryExchangeBalancesResponse {
    balances: Balance[];
}
/**
 * QuerySubaccountDepositsResponse is the response type for the
 * Query/SubaccountDeposits RPC method.
 */
export interface QueryExchangeBalancesResponseSDKType {
    balances: BalanceSDKType[];
}
/**
 * QueryAggregateVolumeRequest is the request type for the Query/AggregateVolume
 * RPC method.
 */
export interface QueryAggregateVolumeRequest {
    /** can either be an address or a subaccount */
    account: string;
}
/**
 * QueryAggregateVolumeRequest is the request type for the Query/AggregateVolume
 * RPC method.
 */
export interface QueryAggregateVolumeRequestSDKType {
    account: string;
}
/**
 * QueryAggregateVolumeResponse is the response type for the
 * Query/AggregateVolume RPC method.
 */
export interface QueryAggregateVolumeResponse {
    /**
     * if an address is specified, then the aggregate_volumes will aggregate the
     * volumes across all subaccounts for the address
     */
    aggregateVolumes: MarketVolume[];
}
/**
 * QueryAggregateVolumeResponse is the response type for the
 * Query/AggregateVolume RPC method.
 */
export interface QueryAggregateVolumeResponseSDKType {
    aggregate_volumes: MarketVolumeSDKType[];
}
/**
 * QueryAggregateVolumesRequest is the request type for the
 * Query/AggregateVolumes RPC method.
 */
export interface QueryAggregateVolumesRequest {
    accounts: string[];
    marketIds: string[];
}
/**
 * QueryAggregateVolumesRequest is the request type for the
 * Query/AggregateVolumes RPC method.
 */
export interface QueryAggregateVolumesRequestSDKType {
    accounts: string[];
    market_ids: string[];
}
/**
 * QueryAggregateVolumesResponse is the response type for the
 * Query/AggregateVolumes RPC method.
 */
export interface QueryAggregateVolumesResponse {
    /** the aggregate volume records for the accounts specified */
    aggregateAccountVolumes: AggregateAccountVolumeRecord[];
    /** the aggregate volumes for the markets specified */
    aggregateMarketVolumes: MarketVolume[];
}
/**
 * QueryAggregateVolumesResponse is the response type for the
 * Query/AggregateVolumes RPC method.
 */
export interface QueryAggregateVolumesResponseSDKType {
    aggregate_account_volumes: AggregateAccountVolumeRecordSDKType[];
    aggregate_market_volumes: MarketVolumeSDKType[];
}
/**
 * QueryAggregateMarketVolumeRequest is the request type for the
 * Query/AggregateMarketVolume RPC method.
 */
export interface QueryAggregateMarketVolumeRequest {
    /**
     * QueryAggregateMarketVolumeRequest is the request type for the
     * Query/AggregateMarketVolume RPC method.
     */
    marketId: string;
}
/**
 * QueryAggregateMarketVolumeRequest is the request type for the
 * Query/AggregateMarketVolume RPC method.
 */
export interface QueryAggregateMarketVolumeRequestSDKType {
    market_id: string;
}
/**
 * QueryAggregateMarketVolumeResponse is the response type for the
 * Query/AggregateMarketVolume RPC method.
 */
export interface QueryAggregateMarketVolumeResponse {
    volume?: VolumeRecord;
}
/**
 * QueryAggregateMarketVolumeResponse is the response type for the
 * Query/AggregateMarketVolume RPC method.
 */
export interface QueryAggregateMarketVolumeResponseSDKType {
    volume?: VolumeRecordSDKType;
}
/**
 * QueryDenomDecimalRequest is the request type for the Query/DenomDecimal RPC
 * method.
 */
export interface QueryDenomDecimalRequest {
    /**
     * QueryDenomDecimalRequest is the request type for the Query/DenomDecimal RPC
     * method.
     */
    denom: string;
}
/**
 * QueryDenomDecimalRequest is the request type for the Query/DenomDecimal RPC
 * method.
 */
export interface QueryDenomDecimalRequestSDKType {
    denom: string;
}
/**
 * QueryDenomDecimalResponse is the response type for the Query/DenomDecimal RPC
 * method.
 */
export interface QueryDenomDecimalResponse {
    /**
     * QueryDenomDecimalResponse is the response type for the Query/DenomDecimal RPC
     * method.
     */
    decimal: Long;
}
/**
 * QueryDenomDecimalResponse is the response type for the Query/DenomDecimal RPC
 * method.
 */
export interface QueryDenomDecimalResponseSDKType {
    decimal: Long;
}
/**
 * QueryDenomDecimalsRequest is the request type for the Query/DenomDecimals RPC
 * method.
 */
export interface QueryDenomDecimalsRequest {
    /** denoms can be empty to query all denom decimals */
    denoms: string[];
}
/**
 * QueryDenomDecimalsRequest is the request type for the Query/DenomDecimals RPC
 * method.
 */
export interface QueryDenomDecimalsRequestSDKType {
    denoms: string[];
}
/**
 * QueryDenomDecimalsRequest is the response type for the Query/DenomDecimals
 * RPC method.
 */
export interface QueryDenomDecimalsResponse {
    denomDecimals: DenomDecimals[];
}
/**
 * QueryDenomDecimalsRequest is the response type for the Query/DenomDecimals
 * RPC method.
 */
export interface QueryDenomDecimalsResponseSDKType {
    denom_decimals: DenomDecimalsSDKType[];
}
/**
 * QueryAggregateMarketVolumesRequest is the request type for the
 * Query/AggregateMarketVolumes RPC method.
 */
export interface QueryAggregateMarketVolumesRequest {
    /**
     * QueryAggregateMarketVolumesRequest is the request type for the
     * Query/AggregateMarketVolumes RPC method.
     */
    marketIds: string[];
}
/**
 * QueryAggregateMarketVolumesRequest is the request type for the
 * Query/AggregateMarketVolumes RPC method.
 */
export interface QueryAggregateMarketVolumesRequestSDKType {
    market_ids: string[];
}
/**
 * QueryAggregateMarketVolumesResponse is the response type for the
 * Query/AggregateMarketVolumes RPC method.
 */
export interface QueryAggregateMarketVolumesResponse {
    /** the aggregate volumes for the entire market */
    volumes: MarketVolume[];
}
/**
 * QueryAggregateMarketVolumesResponse is the response type for the
 * Query/AggregateMarketVolumes RPC method.
 */
export interface QueryAggregateMarketVolumesResponseSDKType {
    volumes: MarketVolumeSDKType[];
}
/**
 * QuerySubaccountDepositsRequest is the request type for the
 * Query/SubaccountDeposits RPC method.
 */
export interface QuerySubaccountDepositRequest {
    subaccountId: string;
    denom: string;
}
/**
 * QuerySubaccountDepositsRequest is the request type for the
 * Query/SubaccountDeposits RPC method.
 */
export interface QuerySubaccountDepositRequestSDKType {
    subaccount_id: string;
    denom: string;
}
/**
 * QuerySubaccountDepositsResponse is the response type for the
 * Query/SubaccountDeposits RPC method.
 */
export interface QuerySubaccountDepositResponse {
    /**
     * QuerySubaccountDepositsResponse is the response type for the
     * Query/SubaccountDeposits RPC method.
     */
    deposits?: Deposit;
}
/**
 * QuerySubaccountDepositsResponse is the response type for the
 * Query/SubaccountDeposits RPC method.
 */
export interface QuerySubaccountDepositResponseSDKType {
    deposits?: DepositSDKType;
}
/**
 * QuerySpotMarketsRequest is the request type for the Query/SpotMarkets RPC
 * method.
 */
export interface QuerySpotMarketsRequest {
    /** Status of the market, for convenience it is set to string - not enum */
    status: string;
    /** Filter by market IDs */
    marketIds: string[];
}
/**
 * QuerySpotMarketsRequest is the request type for the Query/SpotMarkets RPC
 * method.
 */
export interface QuerySpotMarketsRequestSDKType {
    status: string;
    market_ids: string[];
}
/**
 * QuerySpotMarketsResponse is the response type for the Query/SpotMarkets RPC
 * method.
 */
export interface QuerySpotMarketsResponse {
    /**
     * QuerySpotMarketsResponse is the response type for the Query/SpotMarkets RPC
     * method.
     */
    markets: SpotMarket[];
}
/**
 * QuerySpotMarketsResponse is the response type for the Query/SpotMarkets RPC
 * method.
 */
export interface QuerySpotMarketsResponseSDKType {
    markets: SpotMarketSDKType[];
}
/**
 * QuerySpotMarketRequest is the request type for the Query/SpotMarket RPC
 * method.
 */
export interface QuerySpotMarketRequest {
    /** Market ID for the market */
    marketId: string;
}
/**
 * QuerySpotMarketRequest is the request type for the Query/SpotMarket RPC
 * method.
 */
export interface QuerySpotMarketRequestSDKType {
    market_id: string;
}
/**
 * QuerySpotMarketResponse is the response type for the Query/SpotMarket RPC
 * method.
 */
export interface QuerySpotMarketResponse {
    /**
     * QuerySpotMarketResponse is the response type for the Query/SpotMarket RPC
     * method.
     */
    market?: SpotMarket;
}
/**
 * QuerySpotMarketResponse is the response type for the Query/SpotMarket RPC
 * method.
 */
export interface QuerySpotMarketResponseSDKType {
    market?: SpotMarketSDKType;
}
/**
 * QuerySpotOrderbookRequest is the request type for the Query/SpotOrderbook RPC
 * method.
 */
export interface QuerySpotOrderbookRequest {
    /** Market ID for the market */
    marketId: string;
    limit: Long;
    orderSide: OrderSide;
    limitCumulativeNotional: string;
    limitCumulativeQuantity: string;
}
/**
 * QuerySpotOrderbookRequest is the request type for the Query/SpotOrderbook RPC
 * method.
 */
export interface QuerySpotOrderbookRequestSDKType {
    market_id: string;
    limit: Long;
    order_side: OrderSide;
    limit_cumulative_notional: string;
    limit_cumulative_quantity: string;
}
/**
 * QuerySpotOrderbookResponse is the response type for the Query/SpotOrderbook
 * RPC method.
 */
export interface QuerySpotOrderbookResponse {
    buysPriceLevel: Level[];
    sellsPriceLevel: Level[];
}
/**
 * QuerySpotOrderbookResponse is the response type for the Query/SpotOrderbook
 * RPC method.
 */
export interface QuerySpotOrderbookResponseSDKType {
    buys_price_level: LevelSDKType[];
    sells_price_level: LevelSDKType[];
}
export interface FullSpotMarket {
    market?: SpotMarket;
    /**
     * mid_price_and_tob defines the mid price for this market and the best ask
     * and bid orders
     */
    midPriceAndTob?: MidPriceAndTOB;
}
export interface FullSpotMarketSDKType {
    market?: SpotMarketSDKType;
    mid_price_and_tob?: MidPriceAndTOBSDKType;
}
/**
 * QueryFullSpotMarketsRequest is the request type for the Query/FullSpotMarkets
 * RPC method.
 */
export interface QueryFullSpotMarketsRequest {
    /** Status of the market, for convenience it is set to string - not enum */
    status: string;
    /** Filter by market IDs */
    marketIds: string[];
    /**
     * Flag to return the markets mid price and top of the book buy and sell
     * orders.
     */
    withMidPriceAndTob: boolean;
}
/**
 * QueryFullSpotMarketsRequest is the request type for the Query/FullSpotMarkets
 * RPC method.
 */
export interface QueryFullSpotMarketsRequestSDKType {
    status: string;
    market_ids: string[];
    with_mid_price_and_tob: boolean;
}
/**
 * QueryFullSpotMarketsResponse is the response type for the
 * Query/FullSpotMarkets RPC method.
 */
export interface QueryFullSpotMarketsResponse {
    /**
     * QueryFullSpotMarketsResponse is the response type for the
     * Query/FullSpotMarkets RPC method.
     */
    markets: FullSpotMarket[];
}
/**
 * QueryFullSpotMarketsResponse is the response type for the
 * Query/FullSpotMarkets RPC method.
 */
export interface QueryFullSpotMarketsResponseSDKType {
    markets: FullSpotMarketSDKType[];
}
/**
 * QuerySpotMarketRequest is the request type for the Query/SpotMarket RPC
 * method.
 */
export interface QueryFullSpotMarketRequest {
    /** Market ID for the market */
    marketId: string;
    /**
     * Flag to return the markets mid price and top of the book buy and sell
     * orders.
     */
    withMidPriceAndTob: boolean;
}
/**
 * QuerySpotMarketRequest is the request type for the Query/SpotMarket RPC
 * method.
 */
export interface QueryFullSpotMarketRequestSDKType {
    market_id: string;
    with_mid_price_and_tob: boolean;
}
/**
 * QuerySpotMarketResponse is the response type for the Query/SpotMarket RPC
 * method.
 */
export interface QueryFullSpotMarketResponse {
    /**
     * QuerySpotMarketResponse is the response type for the Query/SpotMarket RPC
     * method.
     */
    market?: FullSpotMarket;
}
/**
 * QuerySpotMarketResponse is the response type for the Query/SpotMarket RPC
 * method.
 */
export interface QueryFullSpotMarketResponseSDKType {
    market?: FullSpotMarketSDKType;
}
/**
 * QuerySpotOrdersByHashesRequest is the request type for the
 * Query/SpotOrdersByHashes RPC method.
 */
export interface QuerySpotOrdersByHashesRequest {
    /** Market ID for the market */
    marketId: string;
    /** SubaccountID of the trader */
    subaccountId: string;
    /** the order hashes */
    orderHashes: string[];
}
/**
 * QuerySpotOrdersByHashesRequest is the request type for the
 * Query/SpotOrdersByHashes RPC method.
 */
export interface QuerySpotOrdersByHashesRequestSDKType {
    market_id: string;
    subaccount_id: string;
    order_hashes: string[];
}
/**
 * QuerySpotOrdersByHashesResponse is the response type for the
 * Query/SpotOrdersByHashes RPC method.
 */
export interface QuerySpotOrdersByHashesResponse {
    orders: TrimmedSpotLimitOrder[];
}
/**
 * QuerySpotOrdersByHashesResponse is the response type for the
 * Query/SpotOrdersByHashes RPC method.
 */
export interface QuerySpotOrdersByHashesResponseSDKType {
    orders: TrimmedSpotLimitOrderSDKType[];
}
/**
 * QueryTraderSpotOrdersRequest is the request type for the
 * Query/TraderSpotOrders RPC method.
 */
export interface QueryTraderSpotOrdersRequest {
    /** Market ID for the market */
    marketId: string;
    /** SubaccountID of the trader */
    subaccountId: string;
}
/**
 * QueryTraderSpotOrdersRequest is the request type for the
 * Query/TraderSpotOrders RPC method.
 */
export interface QueryTraderSpotOrdersRequestSDKType {
    market_id: string;
    subaccount_id: string;
}
/**
 * QueryAccountAddressSpotOrdersRequest is the request type for the
 * Query/AccountAddressSpotOrders RPC method.
 */
export interface QueryAccountAddressSpotOrdersRequest {
    /** Market ID for the market */
    marketId: string;
    /** Account address of the trader */
    accountAddress: string;
}
/**
 * QueryAccountAddressSpotOrdersRequest is the request type for the
 * Query/AccountAddressSpotOrders RPC method.
 */
export interface QueryAccountAddressSpotOrdersRequestSDKType {
    market_id: string;
    account_address: string;
}
export interface TrimmedSpotLimitOrder {
    /** price of the order */
    price: string;
    /** quantity of the order */
    quantity: string;
    /** the amount of the quantity remaining fillable */
    fillable: string;
    /** true if the order is a buy */
    isBuy: boolean;
    orderHash: string;
}
export interface TrimmedSpotLimitOrderSDKType {
    price: string;
    quantity: string;
    fillable: string;
    isBuy: boolean;
    order_hash: string;
}
/**
 * QueryTraderSpotOrdersResponse is the response type for the
 * Query/TraderSpotOrders RPC method.
 */
export interface QueryTraderSpotOrdersResponse {
    orders: TrimmedSpotLimitOrder[];
}
/**
 * QueryTraderSpotOrdersResponse is the response type for the
 * Query/TraderSpotOrders RPC method.
 */
export interface QueryTraderSpotOrdersResponseSDKType {
    orders: TrimmedSpotLimitOrderSDKType[];
}
/**
 * QueryAccountAddressSpotOrdersResponse is the response type for the
 * Query/AccountAddressSpotOrders RPC method.
 */
export interface QueryAccountAddressSpotOrdersResponse {
    orders: TrimmedSpotLimitOrder[];
}
/**
 * QueryAccountAddressSpotOrdersResponse is the response type for the
 * Query/AccountAddressSpotOrders RPC method.
 */
export interface QueryAccountAddressSpotOrdersResponseSDKType {
    orders: TrimmedSpotLimitOrderSDKType[];
}
/**
 * QuerySpotMidPriceAndTOBRequest is the request type for the
 * Query/SpotMidPriceAndTOB RPC method.
 */
export interface QuerySpotMidPriceAndTOBRequest {
    /** Market ID for the market */
    marketId: string;
}
/**
 * QuerySpotMidPriceAndTOBRequest is the request type for the
 * Query/SpotMidPriceAndTOB RPC method.
 */
export interface QuerySpotMidPriceAndTOBRequestSDKType {
    market_id: string;
}
/**
 * QuerySpotMidPriceAndTOBResponse is the response type for the
 * Query/SpotMidPriceAndTOB RPC method.
 */
export interface QuerySpotMidPriceAndTOBResponse {
    /** mid price of the market */
    midPrice: string;
    /** best buy price of the market */
    bestBuyPrice: string;
    /** best sell price of the market */
    bestSellPrice: string;
}
/**
 * QuerySpotMidPriceAndTOBResponse is the response type for the
 * Query/SpotMidPriceAndTOB RPC method.
 */
export interface QuerySpotMidPriceAndTOBResponseSDKType {
    mid_price: string;
    best_buy_price: string;
    best_sell_price: string;
}
/**
 * QueryDerivativeMidPriceAndTOBRequest is the request type for the
 * Query/GetDerivativeMidPriceAndTOB RPC method.
 */
export interface QueryDerivativeMidPriceAndTOBRequest {
    /** Market ID for the market */
    marketId: string;
}
/**
 * QueryDerivativeMidPriceAndTOBRequest is the request type for the
 * Query/GetDerivativeMidPriceAndTOB RPC method.
 */
export interface QueryDerivativeMidPriceAndTOBRequestSDKType {
    market_id: string;
}
/**
 * QueryDerivativeMidPriceAndTOBResponse is the response type for the
 * Query/GetDerivativeMidPriceAndTOB RPC method.
 */
export interface QueryDerivativeMidPriceAndTOBResponse {
    /** mid price of the market */
    midPrice: string;
    /** best buy price of the market */
    bestBuyPrice: string;
    /** best sell price of the market */
    bestSellPrice: string;
}
/**
 * QueryDerivativeMidPriceAndTOBResponse is the response type for the
 * Query/GetDerivativeMidPriceAndTOB RPC method.
 */
export interface QueryDerivativeMidPriceAndTOBResponseSDKType {
    mid_price: string;
    best_buy_price: string;
    best_sell_price: string;
}
/**
 * QueryDerivativeOrderbookRequest is the request type for the
 * Query/DerivativeOrderbook RPC method.
 */
export interface QueryDerivativeOrderbookRequest {
    /** Market ID for the market */
    marketId: string;
    limit: Long;
    limitCumulativeNotional: string;
}
/**
 * QueryDerivativeOrderbookRequest is the request type for the
 * Query/DerivativeOrderbook RPC method.
 */
export interface QueryDerivativeOrderbookRequestSDKType {
    market_id: string;
    limit: Long;
    limit_cumulative_notional: string;
}
/**
 * QueryDerivativeOrderbookResponse is the response type for the
 * Query/DerivativeOrderbook RPC method.
 */
export interface QueryDerivativeOrderbookResponse {
    buysPriceLevel: Level[];
    sellsPriceLevel: Level[];
}
/**
 * QueryDerivativeOrderbookResponse is the response type for the
 * Query/DerivativeOrderbook RPC method.
 */
export interface QueryDerivativeOrderbookResponseSDKType {
    buys_price_level: LevelSDKType[];
    sells_price_level: LevelSDKType[];
}
/**
 * QueryTraderSpotOrdersToCancelUpToAmountRequest is the request type for the
 * Query/TraderSpotOrdersToCancelUpToAmountRequest RPC method.
 */
export interface QueryTraderSpotOrdersToCancelUpToAmountRequest {
    /** Market ID for the market */
    marketId: string;
    /** SubaccountID of the trader */
    subaccountId: string;
    /** the base amount to cancel (free up) */
    baseAmount: string;
    /** the quote amount to cancel (free up) */
    quoteAmount: string;
    /** The cancellation strategy */
    strategy: CancellationStrategy;
    /**
     * The reference price for the cancellation strategy, e.g. mid price or mark
     * price
     */
    referencePrice: string;
}
/**
 * QueryTraderSpotOrdersToCancelUpToAmountRequest is the request type for the
 * Query/TraderSpotOrdersToCancelUpToAmountRequest RPC method.
 */
export interface QueryTraderSpotOrdersToCancelUpToAmountRequestSDKType {
    market_id: string;
    subaccount_id: string;
    base_amount: string;
    quote_amount: string;
    strategy: CancellationStrategy;
    reference_price: string;
}
/**
 * QueryTraderDerivativeOrdersToCancelUpToAmountRequest is the request type for
 * the Query/TraderDerivativeOrdersToCancelUpToAmountRequest RPC method.
 */
export interface QueryTraderDerivativeOrdersToCancelUpToAmountRequest {
    /** Market ID for the market */
    marketId: string;
    /** SubaccountID of the trader */
    subaccountId: string;
    /** the quote amount to cancel (free up) */
    quoteAmount: string;
    /** The cancellation strategy */
    strategy: CancellationStrategy;
    /**
     * The reference price for the cancellation strategy, e.g. mid price or mark
     * price
     */
    referencePrice: string;
}
/**
 * QueryTraderDerivativeOrdersToCancelUpToAmountRequest is the request type for
 * the Query/TraderDerivativeOrdersToCancelUpToAmountRequest RPC method.
 */
export interface QueryTraderDerivativeOrdersToCancelUpToAmountRequestSDKType {
    market_id: string;
    subaccount_id: string;
    quote_amount: string;
    strategy: CancellationStrategy;
    reference_price: string;
}
/**
 * QueryTraderDerivativeOrdersRequest is the request type for the
 * Query/TraderDerivativeOrders RPC method.
 */
export interface QueryTraderDerivativeOrdersRequest {
    /** Market ID for the market */
    marketId: string;
    /** SubaccountID of the trader */
    subaccountId: string;
}
/**
 * QueryTraderDerivativeOrdersRequest is the request type for the
 * Query/TraderDerivativeOrders RPC method.
 */
export interface QueryTraderDerivativeOrdersRequestSDKType {
    market_id: string;
    subaccount_id: string;
}
/**
 * QueryAccountAddressSpotOrdersRequest is the request type for the
 * Query/AccountAddressDerivativeOrders RPC method.
 */
export interface QueryAccountAddressDerivativeOrdersRequest {
    /** Market ID for the market */
    marketId: string;
    /** Account address of the trader */
    accountAddress: string;
}
/**
 * QueryAccountAddressSpotOrdersRequest is the request type for the
 * Query/AccountAddressDerivativeOrders RPC method.
 */
export interface QueryAccountAddressDerivativeOrdersRequestSDKType {
    market_id: string;
    account_address: string;
}
export interface TrimmedDerivativeLimitOrder {
    /** price of the order */
    price: string;
    /** quantity of the order */
    quantity: string;
    /** margin of the order */
    margin: string;
    /** the amount of the quantity remaining fillable */
    fillable: string;
    /** true if the order is a buy */
    isBuy: boolean;
    orderHash: string;
}
export interface TrimmedDerivativeLimitOrderSDKType {
    price: string;
    quantity: string;
    margin: string;
    fillable: string;
    isBuy: boolean;
    order_hash: string;
}
/**
 * QueryTraderDerivativeOrdersResponse is the response type for the
 * Query/TraderDerivativeOrders RPC method.
 */
export interface QueryTraderDerivativeOrdersResponse {
    orders: TrimmedDerivativeLimitOrder[];
}
/**
 * QueryTraderDerivativeOrdersResponse is the response type for the
 * Query/TraderDerivativeOrders RPC method.
 */
export interface QueryTraderDerivativeOrdersResponseSDKType {
    orders: TrimmedDerivativeLimitOrderSDKType[];
}
/**
 * QueryAccountAddressDerivativeOrdersResponse is the response type for the
 * Query/AccountAddressDerivativeOrders RPC method.
 */
export interface QueryAccountAddressDerivativeOrdersResponse {
    orders: TrimmedDerivativeLimitOrder[];
}
/**
 * QueryAccountAddressDerivativeOrdersResponse is the response type for the
 * Query/AccountAddressDerivativeOrders RPC method.
 */
export interface QueryAccountAddressDerivativeOrdersResponseSDKType {
    orders: TrimmedDerivativeLimitOrderSDKType[];
}
/**
 * QueryTraderDerivativeOrdersRequest is the request type for the
 * Query/TraderDerivativeOrders RPC method.
 */
export interface QueryDerivativeOrdersByHashesRequest {
    /** Market ID for the market */
    marketId: string;
    /** SubaccountID of the trader */
    subaccountId: string;
    /** the order hashes */
    orderHashes: string[];
}
/**
 * QueryTraderDerivativeOrdersRequest is the request type for the
 * Query/TraderDerivativeOrders RPC method.
 */
export interface QueryDerivativeOrdersByHashesRequestSDKType {
    market_id: string;
    subaccount_id: string;
    order_hashes: string[];
}
/**
 * QueryDerivativeOrdersByHashesResponse is the response type for the
 * Query/DerivativeOrdersByHashes RPC method.
 */
export interface QueryDerivativeOrdersByHashesResponse {
    orders: TrimmedDerivativeLimitOrder[];
}
/**
 * QueryDerivativeOrdersByHashesResponse is the response type for the
 * Query/DerivativeOrdersByHashes RPC method.
 */
export interface QueryDerivativeOrdersByHashesResponseSDKType {
    orders: TrimmedDerivativeLimitOrderSDKType[];
}
/**
 * QueryDerivativeMarketsRequest is the request type for the
 * Query/DerivativeMarkets RPC method.
 */
export interface QueryDerivativeMarketsRequest {
    /** Status of the market, for convenience it is set to string - not enum */
    status: string;
    /** Filter by market IDs */
    marketIds: string[];
    /**
     * Flag to return the markets mid price and top of the book buy and sell
     * orders.
     */
    withMidPriceAndTob: boolean;
}
/**
 * QueryDerivativeMarketsRequest is the request type for the
 * Query/DerivativeMarkets RPC method.
 */
export interface QueryDerivativeMarketsRequestSDKType {
    status: string;
    market_ids: string[];
    with_mid_price_and_tob: boolean;
}
export interface PriceLevel {
    price: string;
    /** quantity */
    quantity: string;
}
export interface PriceLevelSDKType {
    price: string;
    quantity: string;
}
export interface PerpetualMarketState {
    marketInfo?: PerpetualMarketInfo;
    fundingInfo?: PerpetualMarketFunding;
}
export interface PerpetualMarketStateSDKType {
    market_info?: PerpetualMarketInfoSDKType;
    funding_info?: PerpetualMarketFundingSDKType;
}
export interface FullDerivativeMarket {
    market?: DerivativeMarket;
    perpetualInfo?: PerpetualMarketState;
    futuresInfo?: ExpiryFuturesMarketInfo;
    markPrice: string;
    /**
     * mid_price_and_tob defines the mid price for this market and the best ask
     * and bid orders
     */
    midPriceAndTob?: MidPriceAndTOB;
}
export interface FullDerivativeMarketSDKType {
    market?: DerivativeMarketSDKType;
    perpetual_info?: PerpetualMarketStateSDKType;
    futures_info?: ExpiryFuturesMarketInfoSDKType;
    mark_price: string;
    mid_price_and_tob?: MidPriceAndTOBSDKType;
}
/**
 * QueryDerivativeMarketsResponse is the response type for the
 * Query/DerivativeMarkets RPC method.
 */
export interface QueryDerivativeMarketsResponse {
    markets: FullDerivativeMarket[];
}
/**
 * QueryDerivativeMarketsResponse is the response type for the
 * Query/DerivativeMarkets RPC method.
 */
export interface QueryDerivativeMarketsResponseSDKType {
    markets: FullDerivativeMarketSDKType[];
}
/**
 * QueryDerivativeMarketRequest is the request type for the
 * Query/DerivativeMarket RPC method.
 */
export interface QueryDerivativeMarketRequest {
    /** Market ID for the market */
    marketId: string;
}
/**
 * QueryDerivativeMarketRequest is the request type for the
 * Query/DerivativeMarket RPC method.
 */
export interface QueryDerivativeMarketRequestSDKType {
    market_id: string;
}
/**
 * QueryDerivativeMarketResponse is the response type for the
 * Query/DerivativeMarket RPC method.
 */
export interface QueryDerivativeMarketResponse {
    /**
     * QueryDerivativeMarketResponse is the response type for the
     * Query/DerivativeMarket RPC method.
     */
    market?: FullDerivativeMarket;
}
/**
 * QueryDerivativeMarketResponse is the response type for the
 * Query/DerivativeMarket RPC method.
 */
export interface QueryDerivativeMarketResponseSDKType {
    market?: FullDerivativeMarketSDKType;
}
/**
 * QueryDerivativeMarketAddressRequest is the request type for the
 * Query/DerivativeMarketAddress RPC method.
 */
export interface QueryDerivativeMarketAddressRequest {
    /** Market ID for the market */
    marketId: string;
}
/**
 * QueryDerivativeMarketAddressRequest is the request type for the
 * Query/DerivativeMarketAddress RPC method.
 */
export interface QueryDerivativeMarketAddressRequestSDKType {
    market_id: string;
}
/**
 * QueryDerivativeMarketAddressResponse is the response type for the
 * Query/DerivativeMarketAddress RPC method.
 */
export interface QueryDerivativeMarketAddressResponse {
    /** address for the market */
    address: string;
    /** subaccountID for the market */
    subaccountId: string;
}
/**
 * QueryDerivativeMarketAddressResponse is the response type for the
 * Query/DerivativeMarketAddress RPC method.
 */
export interface QueryDerivativeMarketAddressResponseSDKType {
    address: string;
    subaccount_id: string;
}
/**
 * QuerySubaccountTradeNonceRequest is the request type for the
 * Query/SubaccountTradeNonce RPC method.
 */
export interface QuerySubaccountTradeNonceRequest {
    /**
     * QuerySubaccountTradeNonceRequest is the request type for the
     * Query/SubaccountTradeNonce RPC method.
     */
    subaccountId: string;
}
/**
 * QuerySubaccountTradeNonceRequest is the request type for the
 * Query/SubaccountTradeNonce RPC method.
 */
export interface QuerySubaccountTradeNonceRequestSDKType {
    subaccount_id: string;
}
/**
 * QuerySubaccountPositionsRequest is the request type for the
 * Query/SubaccountPositions RPC method.
 */
export interface QuerySubaccountPositionsRequest {
    /**
     * QuerySubaccountPositionsRequest is the request type for the
     * Query/SubaccountPositions RPC method.
     */
    subaccountId: string;
}
/**
 * QuerySubaccountPositionsRequest is the request type for the
 * Query/SubaccountPositions RPC method.
 */
export interface QuerySubaccountPositionsRequestSDKType {
    subaccount_id: string;
}
/**
 * QuerySubaccountPositionInMarketRequest is the request type for the
 * Query/SubaccountPositionInMarket RPC method.
 */
export interface QuerySubaccountPositionInMarketRequest {
    subaccountId: string;
    marketId: string;
}
/**
 * QuerySubaccountPositionInMarketRequest is the request type for the
 * Query/SubaccountPositionInMarket RPC method.
 */
export interface QuerySubaccountPositionInMarketRequestSDKType {
    subaccount_id: string;
    market_id: string;
}
/**
 * QuerySubaccountEffectivePositionInMarketRequest is the request type for the
 * Query/SubaccountEffectivePositionInMarket RPC method.
 */
export interface QuerySubaccountEffectivePositionInMarketRequest {
    subaccountId: string;
    marketId: string;
}
/**
 * QuerySubaccountEffectivePositionInMarketRequest is the request type for the
 * Query/SubaccountEffectivePositionInMarket RPC method.
 */
export interface QuerySubaccountEffectivePositionInMarketRequestSDKType {
    subaccount_id: string;
    market_id: string;
}
/**
 * QuerySubaccountOrderMetadataRequest is the request type for the
 * Query/SubaccountOrderMetadata RPC method.
 */
export interface QuerySubaccountOrderMetadataRequest {
    /**
     * QuerySubaccountOrderMetadataRequest is the request type for the
     * Query/SubaccountOrderMetadata RPC method.
     */
    subaccountId: string;
}
/**
 * QuerySubaccountOrderMetadataRequest is the request type for the
 * Query/SubaccountOrderMetadata RPC method.
 */
export interface QuerySubaccountOrderMetadataRequestSDKType {
    subaccount_id: string;
}
/**
 * QuerySubaccountPositionsResponse is the response type for the
 * Query/SubaccountPositions RPC method.
 */
export interface QuerySubaccountPositionsResponse {
    state: DerivativePosition[];
}
/**
 * QuerySubaccountPositionsResponse is the response type for the
 * Query/SubaccountPositions RPC method.
 */
export interface QuerySubaccountPositionsResponseSDKType {
    state: DerivativePositionSDKType[];
}
/**
 * QuerySubaccountPositionInMarketResponse is the response type for the
 * Query/SubaccountPositionInMarket RPC method.
 */
export interface QuerySubaccountPositionInMarketResponse {
    state?: Position;
}
/**
 * QuerySubaccountPositionInMarketResponse is the response type for the
 * Query/SubaccountPositionInMarket RPC method.
 */
export interface QuerySubaccountPositionInMarketResponseSDKType {
    state?: PositionSDKType;
}
export interface EffectivePosition {
    isLong: boolean;
    quantity: string;
    entryPrice: string;
    effectiveMargin: string;
}
export interface EffectivePositionSDKType {
    is_long: boolean;
    quantity: string;
    entry_price: string;
    effective_margin: string;
}
/**
 * QuerySubaccountEffectivePositionInMarketResponse is the response type for the
 * Query/SubaccountEffectivePositionInMarket RPC method.
 */
export interface QuerySubaccountEffectivePositionInMarketResponse {
    state?: EffectivePosition;
}
/**
 * QuerySubaccountEffectivePositionInMarketResponse is the response type for the
 * Query/SubaccountEffectivePositionInMarket RPC method.
 */
export interface QuerySubaccountEffectivePositionInMarketResponseSDKType {
    state?: EffectivePositionSDKType;
}
/**
 * QueryPerpetualMarketInfoRequest is the request type for the
 * Query/PerpetualMarketInfo RPC method.
 */
export interface QueryPerpetualMarketInfoRequest {
    /**
     * QueryPerpetualMarketInfoRequest is the request type for the
     * Query/PerpetualMarketInfo RPC method.
     */
    marketId: string;
}
/**
 * QueryPerpetualMarketInfoRequest is the request type for the
 * Query/PerpetualMarketInfo RPC method.
 */
export interface QueryPerpetualMarketInfoRequestSDKType {
    market_id: string;
}
/**
 * QueryPerpetualMarketInfoResponse is the response type for the
 * Query/PerpetualMarketInfo RPC method.
 */
export interface QueryPerpetualMarketInfoResponse {
    info?: PerpetualMarketInfo;
}
/**
 * QueryPerpetualMarketInfoResponse is the response type for the
 * Query/PerpetualMarketInfo RPC method.
 */
export interface QueryPerpetualMarketInfoResponseSDKType {
    info?: PerpetualMarketInfoSDKType;
}
/**
 * QueryExpiryFuturesMarketInfoRequest is the request type for the Query/
 * ExpiryFuturesMarketInfo RPC method.
 */
export interface QueryExpiryFuturesMarketInfoRequest {
    /**
     * QueryExpiryFuturesMarketInfoRequest is the request type for the Query/
     * ExpiryFuturesMarketInfo RPC method.
     */
    marketId: string;
}
/**
 * QueryExpiryFuturesMarketInfoRequest is the request type for the Query/
 * ExpiryFuturesMarketInfo RPC method.
 */
export interface QueryExpiryFuturesMarketInfoRequestSDKType {
    market_id: string;
}
/**
 * QueryExpiryFuturesMarketInfoResponse is the response type for the Query/
 * ExpiryFuturesMarketInfo RPC method.
 */
export interface QueryExpiryFuturesMarketInfoResponse {
    info?: ExpiryFuturesMarketInfo;
}
/**
 * QueryExpiryFuturesMarketInfoResponse is the response type for the Query/
 * ExpiryFuturesMarketInfo RPC method.
 */
export interface QueryExpiryFuturesMarketInfoResponseSDKType {
    info?: ExpiryFuturesMarketInfoSDKType;
}
/**
 * QueryPerpetualMarketFundingRequest is the request type for the
 * Query/PerpetualMarketFunding RPC method.
 */
export interface QueryPerpetualMarketFundingRequest {
    /**
     * QueryPerpetualMarketFundingRequest is the request type for the
     * Query/PerpetualMarketFunding RPC method.
     */
    marketId: string;
}
/**
 * QueryPerpetualMarketFundingRequest is the request type for the
 * Query/PerpetualMarketFunding RPC method.
 */
export interface QueryPerpetualMarketFundingRequestSDKType {
    market_id: string;
}
/**
 * QueryPerpetualMarketFundingResponse is the response type for the
 * Query/PerpetualMarketFunding RPC method.
 */
export interface QueryPerpetualMarketFundingResponse {
    state?: PerpetualMarketFunding;
}
/**
 * QueryPerpetualMarketFundingResponse is the response type for the
 * Query/PerpetualMarketFunding RPC method.
 */
export interface QueryPerpetualMarketFundingResponseSDKType {
    state?: PerpetualMarketFundingSDKType;
}
/**
 * QuerySubaccountOrderMetadataResponse is the response type for the
 * Query/SubaccountOrderMetadata RPC method.
 */
export interface QuerySubaccountOrderMetadataResponse {
    metadata: SubaccountOrderbookMetadataWithMarket[];
}
/**
 * QuerySubaccountOrderMetadataResponse is the response type for the
 * Query/SubaccountOrderMetadata RPC method.
 */
export interface QuerySubaccountOrderMetadataResponseSDKType {
    metadata: SubaccountOrderbookMetadataWithMarketSDKType[];
}
/**
 * QuerySubaccountTradeNonceResponse is the response type for the
 * Query/SubaccountTradeNonce RPC method.
 */
export interface QuerySubaccountTradeNonceResponse {
    /**
     * QuerySubaccountTradeNonceResponse is the response type for the
     * Query/SubaccountTradeNonce RPC method.
     */
    nonce: number;
}
/**
 * QuerySubaccountTradeNonceResponse is the response type for the
 * Query/SubaccountTradeNonce RPC method.
 */
export interface QuerySubaccountTradeNonceResponseSDKType {
    nonce: number;
}
/**
 * QueryModuleStateRequest is the request type for the Query/ExchangeModuleState
 * RPC method.
 */
export interface QueryModuleStateRequest {
}
/**
 * QueryModuleStateRequest is the request type for the Query/ExchangeModuleState
 * RPC method.
 */
export interface QueryModuleStateRequestSDKType {
}
/**
 * QueryModuleStateResponse is the response type for the
 * Query/ExchangeModuleState RPC method.
 */
export interface QueryModuleStateResponse {
    /**
     * QueryModuleStateResponse is the response type for the
     * Query/ExchangeModuleState RPC method.
     */
    state?: GenesisState;
}
/**
 * QueryModuleStateResponse is the response type for the
 * Query/ExchangeModuleState RPC method.
 */
export interface QueryModuleStateResponseSDKType {
    state?: GenesisStateSDKType;
}
/** QueryPositionsRequest is the request type for the Query/Positions RPC method. */
export interface QueryPositionsRequest {
}
/** QueryPositionsRequest is the request type for the Query/Positions RPC method. */
export interface QueryPositionsRequestSDKType {
}
/**
 * QueryPositionsResponse is the response type for the Query/Positions RPC
 * method.
 */
export interface QueryPositionsResponse {
    state: DerivativePosition[];
}
/**
 * QueryPositionsResponse is the response type for the Query/Positions RPC
 * method.
 */
export interface QueryPositionsResponseSDKType {
    state: DerivativePositionSDKType[];
}
/**
 * QueryTradeRewardPointsRequest is the request type for the
 * Query/TradeRewardPoints RPC method.
 */
export interface QueryTradeRewardPointsRequest {
    accounts: string[];
    pendingPoolTimestamp: Long;
}
/**
 * QueryTradeRewardPointsRequest is the request type for the
 * Query/TradeRewardPoints RPC method.
 */
export interface QueryTradeRewardPointsRequestSDKType {
    accounts: string[];
    pending_pool_timestamp: Long;
}
/**
 * QueryTradeRewardPointsResponse is the response type for the
 * Query/TradeRewardPoints RPC method.
 */
export interface QueryTradeRewardPointsResponse {
    accountTradeRewardPoints: string[];
}
/**
 * QueryTradeRewardPointsResponse is the response type for the
 * Query/TradeRewardPoints RPC method.
 */
export interface QueryTradeRewardPointsResponseSDKType {
    account_trade_reward_points: string[];
}
/**
 * QueryTradeRewardCampaignRequest is the request type for the
 * Query/TradeRewardCampaign RPC method.
 */
export interface QueryTradeRewardCampaignRequest {
}
/**
 * QueryTradeRewardCampaignRequest is the request type for the
 * Query/TradeRewardCampaign RPC method.
 */
export interface QueryTradeRewardCampaignRequestSDKType {
}
/**
 * QueryTradeRewardCampaignResponse is the response type for the
 * Query/TradeRewardCampaign RPC method.
 */
export interface QueryTradeRewardCampaignResponse {
    tradingRewardCampaignInfo?: TradingRewardCampaignInfo;
    tradingRewardPoolCampaignSchedule: CampaignRewardPool[];
    totalTradeRewardPoints: string;
    pendingTradingRewardPoolCampaignSchedule: CampaignRewardPool[];
    pendingTotalTradeRewardPoints: string[];
}
/**
 * QueryTradeRewardCampaignResponse is the response type for the
 * Query/TradeRewardCampaign RPC method.
 */
export interface QueryTradeRewardCampaignResponseSDKType {
    trading_reward_campaign_info?: TradingRewardCampaignInfoSDKType;
    trading_reward_pool_campaign_schedule: CampaignRewardPoolSDKType[];
    total_trade_reward_points: string;
    pending_trading_reward_pool_campaign_schedule: CampaignRewardPoolSDKType[];
    pending_total_trade_reward_points: string[];
}
/**
 * QueryIsRegisteredDMMRequest is the request type for the Query/IsRegisteredDMM
 * RPC method.
 */
export interface QueryIsOptedOutOfRewardsRequest {
    /**
     * QueryIsRegisteredDMMRequest is the request type for the Query/IsRegisteredDMM
     * RPC method.
     */
    account: string;
}
/**
 * QueryIsRegisteredDMMRequest is the request type for the Query/IsRegisteredDMM
 * RPC method.
 */
export interface QueryIsOptedOutOfRewardsRequestSDKType {
    account: string;
}
/**
 * QueryIsRegisteredDMMResponse is the response type for the
 * Query/IsRegisteredDMM RPC method.
 */
export interface QueryIsOptedOutOfRewardsResponse {
    /**
     * QueryIsRegisteredDMMResponse is the response type for the
     * Query/IsRegisteredDMM RPC method.
     */
    isOptedOut: boolean;
}
/**
 * QueryIsRegisteredDMMResponse is the response type for the
 * Query/IsRegisteredDMM RPC method.
 */
export interface QueryIsOptedOutOfRewardsResponseSDKType {
    is_opted_out: boolean;
}
/**
 * QueryRegisteredDMMsRequest is the request type for the Query/RegisteredDMMs
 * RPC method.
 */
export interface QueryOptedOutOfRewardsAccountsRequest {
}
/**
 * QueryRegisteredDMMsRequest is the request type for the Query/RegisteredDMMs
 * RPC method.
 */
export interface QueryOptedOutOfRewardsAccountsRequestSDKType {
}
/**
 * QueryRegisteredDMMsResponse is the response type for the Query/RegisteredDMMs
 * RPC method.
 */
export interface QueryOptedOutOfRewardsAccountsResponse {
    /**
     * QueryRegisteredDMMsResponse is the response type for the Query/RegisteredDMMs
     * RPC method.
     */
    accounts: string[];
}
/**
 * QueryRegisteredDMMsResponse is the response type for the Query/RegisteredDMMs
 * RPC method.
 */
export interface QueryOptedOutOfRewardsAccountsResponseSDKType {
    accounts: string[];
}
/**
 * QueryFeeDiscountAccountInfoRequest is the request type for the
 * Query/FeeDiscountAccountInfo RPC method.
 */
export interface QueryFeeDiscountAccountInfoRequest {
    /**
     * QueryFeeDiscountAccountInfoRequest is the request type for the
     * Query/FeeDiscountAccountInfo RPC method.
     */
    account: string;
}
/**
 * QueryFeeDiscountAccountInfoRequest is the request type for the
 * Query/FeeDiscountAccountInfo RPC method.
 */
export interface QueryFeeDiscountAccountInfoRequestSDKType {
    account: string;
}
/**
 * QueryFeeDiscountAccountInfoResponse is the response type for the
 * Query/FeeDiscountAccountInfo RPC method.
 */
export interface QueryFeeDiscountAccountInfoResponse {
    tierLevel: Long;
    accountInfo?: FeeDiscountTierInfo;
    accountTtl?: FeeDiscountTierTTL;
}
/**
 * QueryFeeDiscountAccountInfoResponse is the response type for the
 * Query/FeeDiscountAccountInfo RPC method.
 */
export interface QueryFeeDiscountAccountInfoResponseSDKType {
    tier_level: Long;
    account_info?: FeeDiscountTierInfoSDKType;
    account_ttl?: FeeDiscountTierTTLSDKType;
}
/**
 * QueryFeeDiscountScheduleRequest is the request type for the
 * Query/FeeDiscountSchedule RPC method.
 */
export interface QueryFeeDiscountScheduleRequest {
}
/**
 * QueryFeeDiscountScheduleRequest is the request type for the
 * Query/FeeDiscountSchedule RPC method.
 */
export interface QueryFeeDiscountScheduleRequestSDKType {
}
/**
 * QueryFeeDiscountScheduleResponse is the response type for the
 * Query/FeeDiscountSchedule RPC method.
 */
export interface QueryFeeDiscountScheduleResponse {
    feeDiscountSchedule?: FeeDiscountSchedule;
}
/**
 * QueryFeeDiscountScheduleResponse is the response type for the
 * Query/FeeDiscountSchedule RPC method.
 */
export interface QueryFeeDiscountScheduleResponseSDKType {
    fee_discount_schedule?: FeeDiscountScheduleSDKType;
}
/**
 * QueryBalanceMismatchesRequest is the request type for the
 * Query/QueryBalanceMismatches RPC method.
 */
export interface QueryBalanceMismatchesRequest {
    /**
     * QueryBalanceMismatchesRequest is the request type for the
     * Query/QueryBalanceMismatches RPC method.
     */
    dustFactor: Long;
}
/**
 * QueryBalanceMismatchesRequest is the request type for the
 * Query/QueryBalanceMismatches RPC method.
 */
export interface QueryBalanceMismatchesRequestSDKType {
    dust_factor: Long;
}
export interface BalanceMismatch {
    subaccountId: string;
    denom: string;
    available: string;
    total: string;
    balanceHold: string;
    expectedTotal: string;
    difference: string;
}
export interface BalanceMismatchSDKType {
    subaccountId: string;
    denom: string;
    available: string;
    total: string;
    balance_hold: string;
    expected_total: string;
    difference: string;
}
/**
 * QueryBalanceMismatchesResponse is the response type for the
 * Query/QueryBalanceMismatches RPC method.
 */
export interface QueryBalanceMismatchesResponse {
    balanceMismatches: BalanceMismatch[];
}
/**
 * QueryBalanceMismatchesResponse is the response type for the
 * Query/QueryBalanceMismatches RPC method.
 */
export interface QueryBalanceMismatchesResponseSDKType {
    balance_mismatches: BalanceMismatchSDKType[];
}
/**
 * QueryBalanceWithBalanceHoldsRequest is the request type for the
 * Query/QueryBalanceWithBalanceHolds RPC method.
 */
export interface QueryBalanceWithBalanceHoldsRequest {
}
/**
 * QueryBalanceWithBalanceHoldsRequest is the request type for the
 * Query/QueryBalanceWithBalanceHolds RPC method.
 */
export interface QueryBalanceWithBalanceHoldsRequestSDKType {
}
export interface BalanceWithMarginHold {
    subaccountId: string;
    denom: string;
    available: string;
    total: string;
    balanceHold: string;
}
export interface BalanceWithMarginHoldSDKType {
    subaccountId: string;
    denom: string;
    available: string;
    total: string;
    balance_hold: string;
}
/**
 * QueryBalanceWithBalanceHoldsResponse is the response type for the
 * Query/QueryBalanceWithBalanceHolds RPC method.
 */
export interface QueryBalanceWithBalanceHoldsResponse {
    balanceWithBalanceHolds: BalanceWithMarginHold[];
}
/**
 * QueryBalanceWithBalanceHoldsResponse is the response type for the
 * Query/QueryBalanceWithBalanceHolds RPC method.
 */
export interface QueryBalanceWithBalanceHoldsResponseSDKType {
    balance_with_balance_holds: BalanceWithMarginHoldSDKType[];
}
/**
 * QueryFeeDiscountTierStatisticsRequest is the request type for the
 * Query/QueryFeeDiscountTierStatistics RPC method.
 */
export interface QueryFeeDiscountTierStatisticsRequest {
}
/**
 * QueryFeeDiscountTierStatisticsRequest is the request type for the
 * Query/QueryFeeDiscountTierStatistics RPC method.
 */
export interface QueryFeeDiscountTierStatisticsRequestSDKType {
}
export interface TierStatistic {
    tier: Long;
    count: Long;
}
export interface TierStatisticSDKType {
    tier: Long;
    count: Long;
}
/**
 * QueryFeeDiscountTierStatisticsResponse is the response type for the
 * Query/QueryFeeDiscountTierStatistics RPC method.
 */
export interface QueryFeeDiscountTierStatisticsResponse {
    statistics: TierStatistic[];
}
/**
 * QueryFeeDiscountTierStatisticsResponse is the response type for the
 * Query/QueryFeeDiscountTierStatistics RPC method.
 */
export interface QueryFeeDiscountTierStatisticsResponseSDKType {
    statistics: TierStatisticSDKType[];
}
/**
 * MitoVaultInfosRequest is the request type for the Query/MitoVaultInfos RPC
 * method.
 */
export interface MitoVaultInfosRequest {
}
/**
 * MitoVaultInfosRequest is the request type for the Query/MitoVaultInfos RPC
 * method.
 */
export interface MitoVaultInfosRequestSDKType {
}
/**
 * MitoVaultInfosResponse is the response type for the Query/MitoVaultInfos RPC
 * method.
 */
export interface MitoVaultInfosResponse {
    masterAddresses: string[];
    derivativeAddresses: string[];
    spotAddresses: string[];
    cw20Addresses: string[];
}
/**
 * MitoVaultInfosResponse is the response type for the Query/MitoVaultInfos RPC
 * method.
 */
export interface MitoVaultInfosResponseSDKType {
    master_addresses: string[];
    derivative_addresses: string[];
    spot_addresses: string[];
    cw20_addresses: string[];
}
/** QueryMarketIDFromVaultRequest is the request type for the Query/QueryMarketIDFromVault RPC method. */
export interface QueryMarketIDFromVaultRequest {
    vaultAddress: string;
}
/** QueryMarketIDFromVaultRequest is the request type for the Query/QueryMarketIDFromVault RPC method. */
export interface QueryMarketIDFromVaultRequestSDKType {
    vault_address: string;
}
/**
 * QueryMarketIDFromVaultResponse is the response type for the
 * Query/QueryMarketIDFromVault RPC method.
 */
export interface QueryMarketIDFromVaultResponse {
    /**
     * QueryMarketIDFromVaultResponse is the response type for the
     * Query/QueryMarketIDFromVault RPC method.
     */
    marketId: string;
}
/**
 * QueryMarketIDFromVaultResponse is the response type for the
 * Query/QueryMarketIDFromVault RPC method.
 */
export interface QueryMarketIDFromVaultResponseSDKType {
    market_id: string;
}
export interface QueryHistoricalTradeRecordsRequest {
    marketId: string;
}
export interface QueryHistoricalTradeRecordsRequestSDKType {
    market_id: string;
}
export interface QueryHistoricalTradeRecordsResponse {
    tradeRecords: TradeRecords[];
}
export interface QueryHistoricalTradeRecordsResponseSDKType {
    trade_records: TradeRecordsSDKType[];
}
/**
 * TradeHistoryOptions are the optional params for Query/MarketVolatility RPC
 * method.
 */
export interface TradeHistoryOptions {
    /** TradeGroupingSec of 0 means use the chain's default grouping */
    tradeGroupingSec: Long;
    /**
     * MaxAge restricts the trade records oldest age in seconds from the current block time to consider.
     * A value of 0 means use all the records present on the chain.
     */
    maxAge: Long;
    /**
     * If IncludeRawHistory is true, the raw underlying data used for the
     * computation is included in the response
     */
    includeRawHistory: boolean;
    /**
     * If IncludeMetadata is true, metadata on the computation is included in the
     * response
     */
    includeMetadata: boolean;
}
/**
 * TradeHistoryOptions are the optional params for Query/MarketVolatility RPC
 * method.
 */
export interface TradeHistoryOptionsSDKType {
    trade_grouping_sec: Long;
    max_age: Long;
    include_raw_history: boolean;
    include_metadata: boolean;
}
/**
 * QueryMarketVolatilityRequest are the request params for the
 * Query/MarketVolatility RPC method.
 */
export interface QueryMarketVolatilityRequest {
    marketId: string;
    tradeHistoryOptions?: TradeHistoryOptions;
}
/**
 * QueryMarketVolatilityRequest are the request params for the
 * Query/MarketVolatility RPC method.
 */
export interface QueryMarketVolatilityRequestSDKType {
    market_id: string;
    trade_history_options?: TradeHistoryOptionsSDKType;
}
/**
 * QueryMarketVolatilityResponse is the response type for the
 * Query/MarketVolatility RPC method.
 */
export interface QueryMarketVolatilityResponse {
    volatility: string;
    historyMetadata?: MetadataStatistics;
    rawHistory: TradeRecord[];
}
/**
 * QueryMarketVolatilityResponse is the response type for the
 * Query/MarketVolatility RPC method.
 */
export interface QueryMarketVolatilityResponseSDKType {
    volatility: string;
    history_metadata?: MetadataStatisticsSDKType;
    raw_history: TradeRecordSDKType[];
}
/**
 * QuerBinaryMarketsRequest is the request type for the Query/BinaryMarkets RPC
 * method.
 */
export interface QueryBinaryMarketsRequest {
    /** Status of the market, for convenience it is set to string - not enum */
    status: string;
}
/**
 * QuerBinaryMarketsRequest is the request type for the Query/BinaryMarkets RPC
 * method.
 */
export interface QueryBinaryMarketsRequestSDKType {
    status: string;
}
/**
 * QueryBinaryMarketsResponse is the response type for the Query/BinaryMarkets
 * RPC method.
 */
export interface QueryBinaryMarketsResponse {
    /**
     * QueryBinaryMarketsResponse is the response type for the Query/BinaryMarkets
     * RPC method.
     */
    markets: BinaryOptionsMarket[];
}
/**
 * QueryBinaryMarketsResponse is the response type for the Query/BinaryMarkets
 * RPC method.
 */
export interface QueryBinaryMarketsResponseSDKType {
    markets: BinaryOptionsMarketSDKType[];
}
/**
 * QueryConditionalOrdersRequest is the request type for the
 * Query/ConditionalOrders RPC method.
 */
export interface QueryTraderDerivativeConditionalOrdersRequest {
    subaccountId: string;
    marketId: string;
}
/**
 * QueryConditionalOrdersRequest is the request type for the
 * Query/ConditionalOrders RPC method.
 */
export interface QueryTraderDerivativeConditionalOrdersRequestSDKType {
    subaccount_id: string;
    market_id: string;
}
export interface TrimmedDerivativeConditionalOrder {
    /** price of the order */
    price: string;
    /** quantity of the order */
    quantity: string;
    /** margin of the order */
    margin: string;
    /** price to trigger the order */
    triggerPrice: string;
    /** true if the order is a buy */
    isBuy: boolean;
    isLimit: boolean;
    orderHash: string;
}
export interface TrimmedDerivativeConditionalOrderSDKType {
    price: string;
    quantity: string;
    margin: string;
    triggerPrice: string;
    isBuy: boolean;
    isLimit: boolean;
    order_hash: string;
}
/**
 * QueryTraderDerivativeOrdersResponse is the response type for the
 * Query/TraderDerivativeOrders RPC method.
 */
export interface QueryTraderDerivativeConditionalOrdersResponse {
    orders: TrimmedDerivativeConditionalOrder[];
}
/**
 * QueryTraderDerivativeOrdersResponse is the response type for the
 * Query/TraderDerivativeOrders RPC method.
 */
export interface QueryTraderDerivativeConditionalOrdersResponseSDKType {
    orders: TrimmedDerivativeConditionalOrderSDKType[];
}
export interface QueryMarketAtomicExecutionFeeMultiplierRequest {
    marketId: string;
}
export interface QueryMarketAtomicExecutionFeeMultiplierRequestSDKType {
    market_id: string;
}
export interface QueryMarketAtomicExecutionFeeMultiplierResponse {
    multiplier: string;
}
export interface QueryMarketAtomicExecutionFeeMultiplierResponseSDKType {
    multiplier: string;
}
export declare const Subaccount: {
    encode(message: Subaccount, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Subaccount;
    fromPartial(object: Partial<Subaccount>): Subaccount;
};
export declare const QuerySubaccountOrdersRequest: {
    encode(message: QuerySubaccountOrdersRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QuerySubaccountOrdersRequest;
    fromPartial(object: Partial<QuerySubaccountOrdersRequest>): QuerySubaccountOrdersRequest;
};
export declare const QuerySubaccountOrdersResponse: {
    encode(message: QuerySubaccountOrdersResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QuerySubaccountOrdersResponse;
    fromPartial(object: Partial<QuerySubaccountOrdersResponse>): QuerySubaccountOrdersResponse;
};
export declare const SubaccountOrderbookMetadataWithMarket: {
    encode(message: SubaccountOrderbookMetadataWithMarket, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): SubaccountOrderbookMetadataWithMarket;
    fromPartial(object: Partial<SubaccountOrderbookMetadataWithMarket>): SubaccountOrderbookMetadataWithMarket;
};
export declare const QueryExchangeParamsRequest: {
    encode(_: QueryExchangeParamsRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): QueryExchangeParamsRequest;
    fromPartial(_: Partial<QueryExchangeParamsRequest>): QueryExchangeParamsRequest;
};
export declare const QueryExchangeParamsResponse: {
    encode(message: QueryExchangeParamsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryExchangeParamsResponse;
    fromPartial(object: Partial<QueryExchangeParamsResponse>): QueryExchangeParamsResponse;
};
export declare const QuerySubaccountDepositsRequest: {
    encode(message: QuerySubaccountDepositsRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QuerySubaccountDepositsRequest;
    fromPartial(object: Partial<QuerySubaccountDepositsRequest>): QuerySubaccountDepositsRequest;
};
export declare const QuerySubaccountDepositsResponse_DepositsEntry: {
    encode(message: QuerySubaccountDepositsResponse_DepositsEntry, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QuerySubaccountDepositsResponse_DepositsEntry;
    fromPartial(object: Partial<QuerySubaccountDepositsResponse_DepositsEntry>): QuerySubaccountDepositsResponse_DepositsEntry;
};
export declare const QuerySubaccountDepositsResponse: {
    encode(message: QuerySubaccountDepositsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QuerySubaccountDepositsResponse;
    fromPartial(object: Partial<QuerySubaccountDepositsResponse>): QuerySubaccountDepositsResponse;
};
export declare const QueryExchangeBalancesRequest: {
    encode(_: QueryExchangeBalancesRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): QueryExchangeBalancesRequest;
    fromPartial(_: Partial<QueryExchangeBalancesRequest>): QueryExchangeBalancesRequest;
};
export declare const QueryExchangeBalancesResponse: {
    encode(message: QueryExchangeBalancesResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryExchangeBalancesResponse;
    fromPartial(object: Partial<QueryExchangeBalancesResponse>): QueryExchangeBalancesResponse;
};
export declare const QueryAggregateVolumeRequest: {
    encode(message: QueryAggregateVolumeRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryAggregateVolumeRequest;
    fromPartial(object: Partial<QueryAggregateVolumeRequest>): QueryAggregateVolumeRequest;
};
export declare const QueryAggregateVolumeResponse: {
    encode(message: QueryAggregateVolumeResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryAggregateVolumeResponse;
    fromPartial(object: Partial<QueryAggregateVolumeResponse>): QueryAggregateVolumeResponse;
};
export declare const QueryAggregateVolumesRequest: {
    encode(message: QueryAggregateVolumesRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryAggregateVolumesRequest;
    fromPartial(object: Partial<QueryAggregateVolumesRequest>): QueryAggregateVolumesRequest;
};
export declare const QueryAggregateVolumesResponse: {
    encode(message: QueryAggregateVolumesResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryAggregateVolumesResponse;
    fromPartial(object: Partial<QueryAggregateVolumesResponse>): QueryAggregateVolumesResponse;
};
export declare const QueryAggregateMarketVolumeRequest: {
    encode(message: QueryAggregateMarketVolumeRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryAggregateMarketVolumeRequest;
    fromPartial(object: Partial<QueryAggregateMarketVolumeRequest>): QueryAggregateMarketVolumeRequest;
};
export declare const QueryAggregateMarketVolumeResponse: {
    encode(message: QueryAggregateMarketVolumeResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryAggregateMarketVolumeResponse;
    fromPartial(object: Partial<QueryAggregateMarketVolumeResponse>): QueryAggregateMarketVolumeResponse;
};
export declare const QueryDenomDecimalRequest: {
    encode(message: QueryDenomDecimalRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryDenomDecimalRequest;
    fromPartial(object: Partial<QueryDenomDecimalRequest>): QueryDenomDecimalRequest;
};
export declare const QueryDenomDecimalResponse: {
    encode(message: QueryDenomDecimalResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryDenomDecimalResponse;
    fromPartial(object: Partial<QueryDenomDecimalResponse>): QueryDenomDecimalResponse;
};
export declare const QueryDenomDecimalsRequest: {
    encode(message: QueryDenomDecimalsRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryDenomDecimalsRequest;
    fromPartial(object: Partial<QueryDenomDecimalsRequest>): QueryDenomDecimalsRequest;
};
export declare const QueryDenomDecimalsResponse: {
    encode(message: QueryDenomDecimalsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryDenomDecimalsResponse;
    fromPartial(object: Partial<QueryDenomDecimalsResponse>): QueryDenomDecimalsResponse;
};
export declare const QueryAggregateMarketVolumesRequest: {
    encode(message: QueryAggregateMarketVolumesRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryAggregateMarketVolumesRequest;
    fromPartial(object: Partial<QueryAggregateMarketVolumesRequest>): QueryAggregateMarketVolumesRequest;
};
export declare const QueryAggregateMarketVolumesResponse: {
    encode(message: QueryAggregateMarketVolumesResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryAggregateMarketVolumesResponse;
    fromPartial(object: Partial<QueryAggregateMarketVolumesResponse>): QueryAggregateMarketVolumesResponse;
};
export declare const QuerySubaccountDepositRequest: {
    encode(message: QuerySubaccountDepositRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QuerySubaccountDepositRequest;
    fromPartial(object: Partial<QuerySubaccountDepositRequest>): QuerySubaccountDepositRequest;
};
export declare const QuerySubaccountDepositResponse: {
    encode(message: QuerySubaccountDepositResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QuerySubaccountDepositResponse;
    fromPartial(object: Partial<QuerySubaccountDepositResponse>): QuerySubaccountDepositResponse;
};
export declare const QuerySpotMarketsRequest: {
    encode(message: QuerySpotMarketsRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QuerySpotMarketsRequest;
    fromPartial(object: Partial<QuerySpotMarketsRequest>): QuerySpotMarketsRequest;
};
export declare const QuerySpotMarketsResponse: {
    encode(message: QuerySpotMarketsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QuerySpotMarketsResponse;
    fromPartial(object: Partial<QuerySpotMarketsResponse>): QuerySpotMarketsResponse;
};
export declare const QuerySpotMarketRequest: {
    encode(message: QuerySpotMarketRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QuerySpotMarketRequest;
    fromPartial(object: Partial<QuerySpotMarketRequest>): QuerySpotMarketRequest;
};
export declare const QuerySpotMarketResponse: {
    encode(message: QuerySpotMarketResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QuerySpotMarketResponse;
    fromPartial(object: Partial<QuerySpotMarketResponse>): QuerySpotMarketResponse;
};
export declare const QuerySpotOrderbookRequest: {
    encode(message: QuerySpotOrderbookRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QuerySpotOrderbookRequest;
    fromPartial(object: Partial<QuerySpotOrderbookRequest>): QuerySpotOrderbookRequest;
};
export declare const QuerySpotOrderbookResponse: {
    encode(message: QuerySpotOrderbookResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QuerySpotOrderbookResponse;
    fromPartial(object: Partial<QuerySpotOrderbookResponse>): QuerySpotOrderbookResponse;
};
export declare const FullSpotMarket: {
    encode(message: FullSpotMarket, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): FullSpotMarket;
    fromPartial(object: Partial<FullSpotMarket>): FullSpotMarket;
};
export declare const QueryFullSpotMarketsRequest: {
    encode(message: QueryFullSpotMarketsRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryFullSpotMarketsRequest;
    fromPartial(object: Partial<QueryFullSpotMarketsRequest>): QueryFullSpotMarketsRequest;
};
export declare const QueryFullSpotMarketsResponse: {
    encode(message: QueryFullSpotMarketsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryFullSpotMarketsResponse;
    fromPartial(object: Partial<QueryFullSpotMarketsResponse>): QueryFullSpotMarketsResponse;
};
export declare const QueryFullSpotMarketRequest: {
    encode(message: QueryFullSpotMarketRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryFullSpotMarketRequest;
    fromPartial(object: Partial<QueryFullSpotMarketRequest>): QueryFullSpotMarketRequest;
};
export declare const QueryFullSpotMarketResponse: {
    encode(message: QueryFullSpotMarketResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryFullSpotMarketResponse;
    fromPartial(object: Partial<QueryFullSpotMarketResponse>): QueryFullSpotMarketResponse;
};
export declare const QuerySpotOrdersByHashesRequest: {
    encode(message: QuerySpotOrdersByHashesRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QuerySpotOrdersByHashesRequest;
    fromPartial(object: Partial<QuerySpotOrdersByHashesRequest>): QuerySpotOrdersByHashesRequest;
};
export declare const QuerySpotOrdersByHashesResponse: {
    encode(message: QuerySpotOrdersByHashesResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QuerySpotOrdersByHashesResponse;
    fromPartial(object: Partial<QuerySpotOrdersByHashesResponse>): QuerySpotOrdersByHashesResponse;
};
export declare const QueryTraderSpotOrdersRequest: {
    encode(message: QueryTraderSpotOrdersRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryTraderSpotOrdersRequest;
    fromPartial(object: Partial<QueryTraderSpotOrdersRequest>): QueryTraderSpotOrdersRequest;
};
export declare const QueryAccountAddressSpotOrdersRequest: {
    encode(message: QueryAccountAddressSpotOrdersRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryAccountAddressSpotOrdersRequest;
    fromPartial(object: Partial<QueryAccountAddressSpotOrdersRequest>): QueryAccountAddressSpotOrdersRequest;
};
export declare const TrimmedSpotLimitOrder: {
    encode(message: TrimmedSpotLimitOrder, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): TrimmedSpotLimitOrder;
    fromPartial(object: Partial<TrimmedSpotLimitOrder>): TrimmedSpotLimitOrder;
};
export declare const QueryTraderSpotOrdersResponse: {
    encode(message: QueryTraderSpotOrdersResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryTraderSpotOrdersResponse;
    fromPartial(object: Partial<QueryTraderSpotOrdersResponse>): QueryTraderSpotOrdersResponse;
};
export declare const QueryAccountAddressSpotOrdersResponse: {
    encode(message: QueryAccountAddressSpotOrdersResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryAccountAddressSpotOrdersResponse;
    fromPartial(object: Partial<QueryAccountAddressSpotOrdersResponse>): QueryAccountAddressSpotOrdersResponse;
};
export declare const QuerySpotMidPriceAndTOBRequest: {
    encode(message: QuerySpotMidPriceAndTOBRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QuerySpotMidPriceAndTOBRequest;
    fromPartial(object: Partial<QuerySpotMidPriceAndTOBRequest>): QuerySpotMidPriceAndTOBRequest;
};
export declare const QuerySpotMidPriceAndTOBResponse: {
    encode(message: QuerySpotMidPriceAndTOBResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QuerySpotMidPriceAndTOBResponse;
    fromPartial(object: Partial<QuerySpotMidPriceAndTOBResponse>): QuerySpotMidPriceAndTOBResponse;
};
export declare const QueryDerivativeMidPriceAndTOBRequest: {
    encode(message: QueryDerivativeMidPriceAndTOBRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryDerivativeMidPriceAndTOBRequest;
    fromPartial(object: Partial<QueryDerivativeMidPriceAndTOBRequest>): QueryDerivativeMidPriceAndTOBRequest;
};
export declare const QueryDerivativeMidPriceAndTOBResponse: {
    encode(message: QueryDerivativeMidPriceAndTOBResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryDerivativeMidPriceAndTOBResponse;
    fromPartial(object: Partial<QueryDerivativeMidPriceAndTOBResponse>): QueryDerivativeMidPriceAndTOBResponse;
};
export declare const QueryDerivativeOrderbookRequest: {
    encode(message: QueryDerivativeOrderbookRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryDerivativeOrderbookRequest;
    fromPartial(object: Partial<QueryDerivativeOrderbookRequest>): QueryDerivativeOrderbookRequest;
};
export declare const QueryDerivativeOrderbookResponse: {
    encode(message: QueryDerivativeOrderbookResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryDerivativeOrderbookResponse;
    fromPartial(object: Partial<QueryDerivativeOrderbookResponse>): QueryDerivativeOrderbookResponse;
};
export declare const QueryTraderSpotOrdersToCancelUpToAmountRequest: {
    encode(message: QueryTraderSpotOrdersToCancelUpToAmountRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryTraderSpotOrdersToCancelUpToAmountRequest;
    fromPartial(object: Partial<QueryTraderSpotOrdersToCancelUpToAmountRequest>): QueryTraderSpotOrdersToCancelUpToAmountRequest;
};
export declare const QueryTraderDerivativeOrdersToCancelUpToAmountRequest: {
    encode(message: QueryTraderDerivativeOrdersToCancelUpToAmountRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryTraderDerivativeOrdersToCancelUpToAmountRequest;
    fromPartial(object: Partial<QueryTraderDerivativeOrdersToCancelUpToAmountRequest>): QueryTraderDerivativeOrdersToCancelUpToAmountRequest;
};
export declare const QueryTraderDerivativeOrdersRequest: {
    encode(message: QueryTraderDerivativeOrdersRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryTraderDerivativeOrdersRequest;
    fromPartial(object: Partial<QueryTraderDerivativeOrdersRequest>): QueryTraderDerivativeOrdersRequest;
};
export declare const QueryAccountAddressDerivativeOrdersRequest: {
    encode(message: QueryAccountAddressDerivativeOrdersRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryAccountAddressDerivativeOrdersRequest;
    fromPartial(object: Partial<QueryAccountAddressDerivativeOrdersRequest>): QueryAccountAddressDerivativeOrdersRequest;
};
export declare const TrimmedDerivativeLimitOrder: {
    encode(message: TrimmedDerivativeLimitOrder, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): TrimmedDerivativeLimitOrder;
    fromPartial(object: Partial<TrimmedDerivativeLimitOrder>): TrimmedDerivativeLimitOrder;
};
export declare const QueryTraderDerivativeOrdersResponse: {
    encode(message: QueryTraderDerivativeOrdersResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryTraderDerivativeOrdersResponse;
    fromPartial(object: Partial<QueryTraderDerivativeOrdersResponse>): QueryTraderDerivativeOrdersResponse;
};
export declare const QueryAccountAddressDerivativeOrdersResponse: {
    encode(message: QueryAccountAddressDerivativeOrdersResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryAccountAddressDerivativeOrdersResponse;
    fromPartial(object: Partial<QueryAccountAddressDerivativeOrdersResponse>): QueryAccountAddressDerivativeOrdersResponse;
};
export declare const QueryDerivativeOrdersByHashesRequest: {
    encode(message: QueryDerivativeOrdersByHashesRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryDerivativeOrdersByHashesRequest;
    fromPartial(object: Partial<QueryDerivativeOrdersByHashesRequest>): QueryDerivativeOrdersByHashesRequest;
};
export declare const QueryDerivativeOrdersByHashesResponse: {
    encode(message: QueryDerivativeOrdersByHashesResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryDerivativeOrdersByHashesResponse;
    fromPartial(object: Partial<QueryDerivativeOrdersByHashesResponse>): QueryDerivativeOrdersByHashesResponse;
};
export declare const QueryDerivativeMarketsRequest: {
    encode(message: QueryDerivativeMarketsRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryDerivativeMarketsRequest;
    fromPartial(object: Partial<QueryDerivativeMarketsRequest>): QueryDerivativeMarketsRequest;
};
export declare const PriceLevel: {
    encode(message: PriceLevel, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): PriceLevel;
    fromPartial(object: Partial<PriceLevel>): PriceLevel;
};
export declare const PerpetualMarketState: {
    encode(message: PerpetualMarketState, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): PerpetualMarketState;
    fromPartial(object: Partial<PerpetualMarketState>): PerpetualMarketState;
};
export declare const FullDerivativeMarket: {
    encode(message: FullDerivativeMarket, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): FullDerivativeMarket;
    fromPartial(object: Partial<FullDerivativeMarket>): FullDerivativeMarket;
};
export declare const QueryDerivativeMarketsResponse: {
    encode(message: QueryDerivativeMarketsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryDerivativeMarketsResponse;
    fromPartial(object: Partial<QueryDerivativeMarketsResponse>): QueryDerivativeMarketsResponse;
};
export declare const QueryDerivativeMarketRequest: {
    encode(message: QueryDerivativeMarketRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryDerivativeMarketRequest;
    fromPartial(object: Partial<QueryDerivativeMarketRequest>): QueryDerivativeMarketRequest;
};
export declare const QueryDerivativeMarketResponse: {
    encode(message: QueryDerivativeMarketResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryDerivativeMarketResponse;
    fromPartial(object: Partial<QueryDerivativeMarketResponse>): QueryDerivativeMarketResponse;
};
export declare const QueryDerivativeMarketAddressRequest: {
    encode(message: QueryDerivativeMarketAddressRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryDerivativeMarketAddressRequest;
    fromPartial(object: Partial<QueryDerivativeMarketAddressRequest>): QueryDerivativeMarketAddressRequest;
};
export declare const QueryDerivativeMarketAddressResponse: {
    encode(message: QueryDerivativeMarketAddressResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryDerivativeMarketAddressResponse;
    fromPartial(object: Partial<QueryDerivativeMarketAddressResponse>): QueryDerivativeMarketAddressResponse;
};
export declare const QuerySubaccountTradeNonceRequest: {
    encode(message: QuerySubaccountTradeNonceRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QuerySubaccountTradeNonceRequest;
    fromPartial(object: Partial<QuerySubaccountTradeNonceRequest>): QuerySubaccountTradeNonceRequest;
};
export declare const QuerySubaccountPositionsRequest: {
    encode(message: QuerySubaccountPositionsRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QuerySubaccountPositionsRequest;
    fromPartial(object: Partial<QuerySubaccountPositionsRequest>): QuerySubaccountPositionsRequest;
};
export declare const QuerySubaccountPositionInMarketRequest: {
    encode(message: QuerySubaccountPositionInMarketRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QuerySubaccountPositionInMarketRequest;
    fromPartial(object: Partial<QuerySubaccountPositionInMarketRequest>): QuerySubaccountPositionInMarketRequest;
};
export declare const QuerySubaccountEffectivePositionInMarketRequest: {
    encode(message: QuerySubaccountEffectivePositionInMarketRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QuerySubaccountEffectivePositionInMarketRequest;
    fromPartial(object: Partial<QuerySubaccountEffectivePositionInMarketRequest>): QuerySubaccountEffectivePositionInMarketRequest;
};
export declare const QuerySubaccountOrderMetadataRequest: {
    encode(message: QuerySubaccountOrderMetadataRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QuerySubaccountOrderMetadataRequest;
    fromPartial(object: Partial<QuerySubaccountOrderMetadataRequest>): QuerySubaccountOrderMetadataRequest;
};
export declare const QuerySubaccountPositionsResponse: {
    encode(message: QuerySubaccountPositionsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QuerySubaccountPositionsResponse;
    fromPartial(object: Partial<QuerySubaccountPositionsResponse>): QuerySubaccountPositionsResponse;
};
export declare const QuerySubaccountPositionInMarketResponse: {
    encode(message: QuerySubaccountPositionInMarketResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QuerySubaccountPositionInMarketResponse;
    fromPartial(object: Partial<QuerySubaccountPositionInMarketResponse>): QuerySubaccountPositionInMarketResponse;
};
export declare const EffectivePosition: {
    encode(message: EffectivePosition, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EffectivePosition;
    fromPartial(object: Partial<EffectivePosition>): EffectivePosition;
};
export declare const QuerySubaccountEffectivePositionInMarketResponse: {
    encode(message: QuerySubaccountEffectivePositionInMarketResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QuerySubaccountEffectivePositionInMarketResponse;
    fromPartial(object: Partial<QuerySubaccountEffectivePositionInMarketResponse>): QuerySubaccountEffectivePositionInMarketResponse;
};
export declare const QueryPerpetualMarketInfoRequest: {
    encode(message: QueryPerpetualMarketInfoRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryPerpetualMarketInfoRequest;
    fromPartial(object: Partial<QueryPerpetualMarketInfoRequest>): QueryPerpetualMarketInfoRequest;
};
export declare const QueryPerpetualMarketInfoResponse: {
    encode(message: QueryPerpetualMarketInfoResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryPerpetualMarketInfoResponse;
    fromPartial(object: Partial<QueryPerpetualMarketInfoResponse>): QueryPerpetualMarketInfoResponse;
};
export declare const QueryExpiryFuturesMarketInfoRequest: {
    encode(message: QueryExpiryFuturesMarketInfoRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryExpiryFuturesMarketInfoRequest;
    fromPartial(object: Partial<QueryExpiryFuturesMarketInfoRequest>): QueryExpiryFuturesMarketInfoRequest;
};
export declare const QueryExpiryFuturesMarketInfoResponse: {
    encode(message: QueryExpiryFuturesMarketInfoResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryExpiryFuturesMarketInfoResponse;
    fromPartial(object: Partial<QueryExpiryFuturesMarketInfoResponse>): QueryExpiryFuturesMarketInfoResponse;
};
export declare const QueryPerpetualMarketFundingRequest: {
    encode(message: QueryPerpetualMarketFundingRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryPerpetualMarketFundingRequest;
    fromPartial(object: Partial<QueryPerpetualMarketFundingRequest>): QueryPerpetualMarketFundingRequest;
};
export declare const QueryPerpetualMarketFundingResponse: {
    encode(message: QueryPerpetualMarketFundingResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryPerpetualMarketFundingResponse;
    fromPartial(object: Partial<QueryPerpetualMarketFundingResponse>): QueryPerpetualMarketFundingResponse;
};
export declare const QuerySubaccountOrderMetadataResponse: {
    encode(message: QuerySubaccountOrderMetadataResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QuerySubaccountOrderMetadataResponse;
    fromPartial(object: Partial<QuerySubaccountOrderMetadataResponse>): QuerySubaccountOrderMetadataResponse;
};
export declare const QuerySubaccountTradeNonceResponse: {
    encode(message: QuerySubaccountTradeNonceResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QuerySubaccountTradeNonceResponse;
    fromPartial(object: Partial<QuerySubaccountTradeNonceResponse>): QuerySubaccountTradeNonceResponse;
};
export declare const QueryModuleStateRequest: {
    encode(_: QueryModuleStateRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): QueryModuleStateRequest;
    fromPartial(_: Partial<QueryModuleStateRequest>): QueryModuleStateRequest;
};
export declare const QueryModuleStateResponse: {
    encode(message: QueryModuleStateResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryModuleStateResponse;
    fromPartial(object: Partial<QueryModuleStateResponse>): QueryModuleStateResponse;
};
export declare const QueryPositionsRequest: {
    encode(_: QueryPositionsRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): QueryPositionsRequest;
    fromPartial(_: Partial<QueryPositionsRequest>): QueryPositionsRequest;
};
export declare const QueryPositionsResponse: {
    encode(message: QueryPositionsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryPositionsResponse;
    fromPartial(object: Partial<QueryPositionsResponse>): QueryPositionsResponse;
};
export declare const QueryTradeRewardPointsRequest: {
    encode(message: QueryTradeRewardPointsRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryTradeRewardPointsRequest;
    fromPartial(object: Partial<QueryTradeRewardPointsRequest>): QueryTradeRewardPointsRequest;
};
export declare const QueryTradeRewardPointsResponse: {
    encode(message: QueryTradeRewardPointsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryTradeRewardPointsResponse;
    fromPartial(object: Partial<QueryTradeRewardPointsResponse>): QueryTradeRewardPointsResponse;
};
export declare const QueryTradeRewardCampaignRequest: {
    encode(_: QueryTradeRewardCampaignRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): QueryTradeRewardCampaignRequest;
    fromPartial(_: Partial<QueryTradeRewardCampaignRequest>): QueryTradeRewardCampaignRequest;
};
export declare const QueryTradeRewardCampaignResponse: {
    encode(message: QueryTradeRewardCampaignResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryTradeRewardCampaignResponse;
    fromPartial(object: Partial<QueryTradeRewardCampaignResponse>): QueryTradeRewardCampaignResponse;
};
export declare const QueryIsOptedOutOfRewardsRequest: {
    encode(message: QueryIsOptedOutOfRewardsRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryIsOptedOutOfRewardsRequest;
    fromPartial(object: Partial<QueryIsOptedOutOfRewardsRequest>): QueryIsOptedOutOfRewardsRequest;
};
export declare const QueryIsOptedOutOfRewardsResponse: {
    encode(message: QueryIsOptedOutOfRewardsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryIsOptedOutOfRewardsResponse;
    fromPartial(object: Partial<QueryIsOptedOutOfRewardsResponse>): QueryIsOptedOutOfRewardsResponse;
};
export declare const QueryOptedOutOfRewardsAccountsRequest: {
    encode(_: QueryOptedOutOfRewardsAccountsRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): QueryOptedOutOfRewardsAccountsRequest;
    fromPartial(_: Partial<QueryOptedOutOfRewardsAccountsRequest>): QueryOptedOutOfRewardsAccountsRequest;
};
export declare const QueryOptedOutOfRewardsAccountsResponse: {
    encode(message: QueryOptedOutOfRewardsAccountsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryOptedOutOfRewardsAccountsResponse;
    fromPartial(object: Partial<QueryOptedOutOfRewardsAccountsResponse>): QueryOptedOutOfRewardsAccountsResponse;
};
export declare const QueryFeeDiscountAccountInfoRequest: {
    encode(message: QueryFeeDiscountAccountInfoRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryFeeDiscountAccountInfoRequest;
    fromPartial(object: Partial<QueryFeeDiscountAccountInfoRequest>): QueryFeeDiscountAccountInfoRequest;
};
export declare const QueryFeeDiscountAccountInfoResponse: {
    encode(message: QueryFeeDiscountAccountInfoResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryFeeDiscountAccountInfoResponse;
    fromPartial(object: Partial<QueryFeeDiscountAccountInfoResponse>): QueryFeeDiscountAccountInfoResponse;
};
export declare const QueryFeeDiscountScheduleRequest: {
    encode(_: QueryFeeDiscountScheduleRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): QueryFeeDiscountScheduleRequest;
    fromPartial(_: Partial<QueryFeeDiscountScheduleRequest>): QueryFeeDiscountScheduleRequest;
};
export declare const QueryFeeDiscountScheduleResponse: {
    encode(message: QueryFeeDiscountScheduleResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryFeeDiscountScheduleResponse;
    fromPartial(object: Partial<QueryFeeDiscountScheduleResponse>): QueryFeeDiscountScheduleResponse;
};
export declare const QueryBalanceMismatchesRequest: {
    encode(message: QueryBalanceMismatchesRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryBalanceMismatchesRequest;
    fromPartial(object: Partial<QueryBalanceMismatchesRequest>): QueryBalanceMismatchesRequest;
};
export declare const BalanceMismatch: {
    encode(message: BalanceMismatch, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): BalanceMismatch;
    fromPartial(object: Partial<BalanceMismatch>): BalanceMismatch;
};
export declare const QueryBalanceMismatchesResponse: {
    encode(message: QueryBalanceMismatchesResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryBalanceMismatchesResponse;
    fromPartial(object: Partial<QueryBalanceMismatchesResponse>): QueryBalanceMismatchesResponse;
};
export declare const QueryBalanceWithBalanceHoldsRequest: {
    encode(_: QueryBalanceWithBalanceHoldsRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): QueryBalanceWithBalanceHoldsRequest;
    fromPartial(_: Partial<QueryBalanceWithBalanceHoldsRequest>): QueryBalanceWithBalanceHoldsRequest;
};
export declare const BalanceWithMarginHold: {
    encode(message: BalanceWithMarginHold, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): BalanceWithMarginHold;
    fromPartial(object: Partial<BalanceWithMarginHold>): BalanceWithMarginHold;
};
export declare const QueryBalanceWithBalanceHoldsResponse: {
    encode(message: QueryBalanceWithBalanceHoldsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryBalanceWithBalanceHoldsResponse;
    fromPartial(object: Partial<QueryBalanceWithBalanceHoldsResponse>): QueryBalanceWithBalanceHoldsResponse;
};
export declare const QueryFeeDiscountTierStatisticsRequest: {
    encode(_: QueryFeeDiscountTierStatisticsRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): QueryFeeDiscountTierStatisticsRequest;
    fromPartial(_: Partial<QueryFeeDiscountTierStatisticsRequest>): QueryFeeDiscountTierStatisticsRequest;
};
export declare const TierStatistic: {
    encode(message: TierStatistic, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): TierStatistic;
    fromPartial(object: Partial<TierStatistic>): TierStatistic;
};
export declare const QueryFeeDiscountTierStatisticsResponse: {
    encode(message: QueryFeeDiscountTierStatisticsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryFeeDiscountTierStatisticsResponse;
    fromPartial(object: Partial<QueryFeeDiscountTierStatisticsResponse>): QueryFeeDiscountTierStatisticsResponse;
};
export declare const MitoVaultInfosRequest: {
    encode(_: MitoVaultInfosRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MitoVaultInfosRequest;
    fromPartial(_: Partial<MitoVaultInfosRequest>): MitoVaultInfosRequest;
};
export declare const MitoVaultInfosResponse: {
    encode(message: MitoVaultInfosResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MitoVaultInfosResponse;
    fromPartial(object: Partial<MitoVaultInfosResponse>): MitoVaultInfosResponse;
};
export declare const QueryMarketIDFromVaultRequest: {
    encode(message: QueryMarketIDFromVaultRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryMarketIDFromVaultRequest;
    fromPartial(object: Partial<QueryMarketIDFromVaultRequest>): QueryMarketIDFromVaultRequest;
};
export declare const QueryMarketIDFromVaultResponse: {
    encode(message: QueryMarketIDFromVaultResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryMarketIDFromVaultResponse;
    fromPartial(object: Partial<QueryMarketIDFromVaultResponse>): QueryMarketIDFromVaultResponse;
};
export declare const QueryHistoricalTradeRecordsRequest: {
    encode(message: QueryHistoricalTradeRecordsRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryHistoricalTradeRecordsRequest;
    fromPartial(object: Partial<QueryHistoricalTradeRecordsRequest>): QueryHistoricalTradeRecordsRequest;
};
export declare const QueryHistoricalTradeRecordsResponse: {
    encode(message: QueryHistoricalTradeRecordsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryHistoricalTradeRecordsResponse;
    fromPartial(object: Partial<QueryHistoricalTradeRecordsResponse>): QueryHistoricalTradeRecordsResponse;
};
export declare const TradeHistoryOptions: {
    encode(message: TradeHistoryOptions, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): TradeHistoryOptions;
    fromPartial(object: Partial<TradeHistoryOptions>): TradeHistoryOptions;
};
export declare const QueryMarketVolatilityRequest: {
    encode(message: QueryMarketVolatilityRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryMarketVolatilityRequest;
    fromPartial(object: Partial<QueryMarketVolatilityRequest>): QueryMarketVolatilityRequest;
};
export declare const QueryMarketVolatilityResponse: {
    encode(message: QueryMarketVolatilityResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryMarketVolatilityResponse;
    fromPartial(object: Partial<QueryMarketVolatilityResponse>): QueryMarketVolatilityResponse;
};
export declare const QueryBinaryMarketsRequest: {
    encode(message: QueryBinaryMarketsRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryBinaryMarketsRequest;
    fromPartial(object: Partial<QueryBinaryMarketsRequest>): QueryBinaryMarketsRequest;
};
export declare const QueryBinaryMarketsResponse: {
    encode(message: QueryBinaryMarketsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryBinaryMarketsResponse;
    fromPartial(object: Partial<QueryBinaryMarketsResponse>): QueryBinaryMarketsResponse;
};
export declare const QueryTraderDerivativeConditionalOrdersRequest: {
    encode(message: QueryTraderDerivativeConditionalOrdersRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryTraderDerivativeConditionalOrdersRequest;
    fromPartial(object: Partial<QueryTraderDerivativeConditionalOrdersRequest>): QueryTraderDerivativeConditionalOrdersRequest;
};
export declare const TrimmedDerivativeConditionalOrder: {
    encode(message: TrimmedDerivativeConditionalOrder, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): TrimmedDerivativeConditionalOrder;
    fromPartial(object: Partial<TrimmedDerivativeConditionalOrder>): TrimmedDerivativeConditionalOrder;
};
export declare const QueryTraderDerivativeConditionalOrdersResponse: {
    encode(message: QueryTraderDerivativeConditionalOrdersResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryTraderDerivativeConditionalOrdersResponse;
    fromPartial(object: Partial<QueryTraderDerivativeConditionalOrdersResponse>): QueryTraderDerivativeConditionalOrdersResponse;
};
export declare const QueryMarketAtomicExecutionFeeMultiplierRequest: {
    encode(message: QueryMarketAtomicExecutionFeeMultiplierRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryMarketAtomicExecutionFeeMultiplierRequest;
    fromPartial(object: Partial<QueryMarketAtomicExecutionFeeMultiplierRequest>): QueryMarketAtomicExecutionFeeMultiplierRequest;
};
export declare const QueryMarketAtomicExecutionFeeMultiplierResponse: {
    encode(message: QueryMarketAtomicExecutionFeeMultiplierResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryMarketAtomicExecutionFeeMultiplierResponse;
    fromPartial(object: Partial<QueryMarketAtomicExecutionFeeMultiplierResponse>): QueryMarketAtomicExecutionFeeMultiplierResponse;
};
