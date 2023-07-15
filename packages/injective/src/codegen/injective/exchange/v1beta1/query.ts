import { SubaccountOrderData, SubaccountOrderDataSDKType, SubaccountOrderbookMetadata, SubaccountOrderbookMetadataSDKType, Params, ParamsSDKType, Deposit, DepositSDKType, MarketVolume, MarketVolumeSDKType, AggregateAccountVolumeRecord, AggregateAccountVolumeRecordSDKType, VolumeRecord, VolumeRecordSDKType, DenomDecimals, DenomDecimalsSDKType, SpotMarket, SpotMarketSDKType, Level, LevelSDKType, MidPriceAndTOB, MidPriceAndTOBSDKType, PerpetualMarketInfo, PerpetualMarketInfoSDKType, PerpetualMarketFunding, PerpetualMarketFundingSDKType, DerivativeMarket, DerivativeMarketSDKType, ExpiryFuturesMarketInfo, ExpiryFuturesMarketInfoSDKType, Position, PositionSDKType, TradingRewardCampaignInfo, TradingRewardCampaignInfoSDKType, CampaignRewardPool, CampaignRewardPoolSDKType, FeeDiscountTierInfo, FeeDiscountTierInfoSDKType, FeeDiscountTierTTL, FeeDiscountTierTTLSDKType, FeeDiscountSchedule, FeeDiscountScheduleSDKType, TradeRecords, TradeRecordsSDKType, TradeRecord, TradeRecordSDKType, BinaryOptionsMarket, BinaryOptionsMarketSDKType } from "./exchange";
import { Balance, BalanceSDKType, DerivativePosition, DerivativePositionSDKType, GenesisState, GenesisStateSDKType } from "./genesis";
import { MetadataStatistics, MetadataStatisticsSDKType } from "../../oracle/v1beta1/oracle";
import { Long, isSet, isObject } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export enum OrderSide {
  /** Side_Unspecified - will return both */
  Side_Unspecified = 0,
  Buy = 1,
  Sell = 2,
  UNRECOGNIZED = -1,
}
export const OrderSideSDKType = OrderSide;
export function orderSideFromJSON(object: any): OrderSide {
  switch (object) {
    case 0:
    case "Side_Unspecified":
      return OrderSide.Side_Unspecified;
    case 1:
    case "Buy":
      return OrderSide.Buy;
    case 2:
    case "Sell":
      return OrderSide.Sell;
    case -1:
    case "UNRECOGNIZED":
    default:
      return OrderSide.UNRECOGNIZED;
  }
}
export function orderSideToJSON(object: OrderSide): string {
  switch (object) {
    case OrderSide.Side_Unspecified:
      return "Side_Unspecified";
    case OrderSide.Buy:
      return "Buy";
    case OrderSide.Sell:
      return "Sell";
    case OrderSide.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** CancellationStrategy is the list of cancellation strategies. */
export enum CancellationStrategy {
  /** UnspecifiedOrder - just cancelling in random order in most efficient way */
  UnspecifiedOrder = 0,
  /** FromWorstToBest - e.g. for buy orders from lowest to highest price */
  FromWorstToBest = 1,
  /** FromBestToWorst - e.g. for buy orders from higest to lowest price */
  FromBestToWorst = 2,
  UNRECOGNIZED = -1,
}
export const CancellationStrategySDKType = CancellationStrategy;
export function cancellationStrategyFromJSON(object: any): CancellationStrategy {
  switch (object) {
    case 0:
    case "UnspecifiedOrder":
      return CancellationStrategy.UnspecifiedOrder;
    case 1:
    case "FromWorstToBest":
      return CancellationStrategy.FromWorstToBest;
    case 2:
    case "FromBestToWorst":
      return CancellationStrategy.FromBestToWorst;
    case -1:
    case "UNRECOGNIZED":
    default:
      return CancellationStrategy.UNRECOGNIZED;
  }
}
export function cancellationStrategyToJSON(object: CancellationStrategy): string {
  switch (object) {
    case CancellationStrategy.UnspecifiedOrder:
      return "UnspecifiedOrder";
    case CancellationStrategy.FromWorstToBest:
      return "FromWorstToBest";
    case CancellationStrategy.FromBestToWorst:
      return "FromBestToWorst";
    case CancellationStrategy.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
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
export interface QueryExchangeParamsRequest {}
/**
 * QueryExchangeParamsRequest is the request type for the Query/ExchangeParams
 * RPC method.
 */
export interface QueryExchangeParamsRequestSDKType {}
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
export interface QueryExchangeBalancesRequest {}
/**
 * QueryExchangeBalancesRequest is the request type for the
 * Query/ExchangeBalances RPC method.
 */
export interface QueryExchangeBalancesRequestSDKType {}
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
export interface QueryModuleStateRequest {}
/**
 * QueryModuleStateRequest is the request type for the Query/ExchangeModuleState
 * RPC method.
 */
export interface QueryModuleStateRequestSDKType {}
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
export interface QueryPositionsRequest {}
/** QueryPositionsRequest is the request type for the Query/Positions RPC method. */
export interface QueryPositionsRequestSDKType {}
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
export interface QueryTradeRewardCampaignRequest {}
/**
 * QueryTradeRewardCampaignRequest is the request type for the
 * Query/TradeRewardCampaign RPC method.
 */
export interface QueryTradeRewardCampaignRequestSDKType {}
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
export interface QueryOptedOutOfRewardsAccountsRequest {}
/**
 * QueryRegisteredDMMsRequest is the request type for the Query/RegisteredDMMs
 * RPC method.
 */
export interface QueryOptedOutOfRewardsAccountsRequestSDKType {}
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
export interface QueryFeeDiscountScheduleRequest {}
/**
 * QueryFeeDiscountScheduleRequest is the request type for the
 * Query/FeeDiscountSchedule RPC method.
 */
export interface QueryFeeDiscountScheduleRequestSDKType {}
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
export interface QueryBalanceWithBalanceHoldsRequest {}
/**
 * QueryBalanceWithBalanceHoldsRequest is the request type for the
 * Query/QueryBalanceWithBalanceHolds RPC method.
 */
export interface QueryBalanceWithBalanceHoldsRequestSDKType {}
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
export interface QueryFeeDiscountTierStatisticsRequest {}
/**
 * QueryFeeDiscountTierStatisticsRequest is the request type for the
 * Query/QueryFeeDiscountTierStatistics RPC method.
 */
export interface QueryFeeDiscountTierStatisticsRequestSDKType {}
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
export interface MitoVaultInfosRequest {}
/**
 * MitoVaultInfosRequest is the request type for the Query/MitoVaultInfos RPC
 * method.
 */
export interface MitoVaultInfosRequestSDKType {}
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
function createBaseSubaccount(): Subaccount {
  return {
    trader: "",
    subaccountNonce: 0
  };
}
export const Subaccount = {
  encode(message: Subaccount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.trader !== "") {
      writer.uint32(10).string(message.trader);
    }
    if (message.subaccountNonce !== 0) {
      writer.uint32(16).uint32(message.subaccountNonce);
    }
    return writer;
  },
  fromJSON(object: any): Subaccount {
    return {
      trader: isSet(object.trader) ? String(object.trader) : "",
      subaccountNonce: isSet(object.subaccountNonce) ? Number(object.subaccountNonce) : 0
    };
  },
  fromPartial(object: Partial<Subaccount>): Subaccount {
    const message = createBaseSubaccount();
    message.trader = object.trader ?? "";
    message.subaccountNonce = object.subaccountNonce ?? 0;
    return message;
  }
};
function createBaseQuerySubaccountOrdersRequest(): QuerySubaccountOrdersRequest {
  return {
    subaccountId: "",
    marketId: ""
  };
}
export const QuerySubaccountOrdersRequest = {
  encode(message: QuerySubaccountOrdersRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.subaccountId !== "") {
      writer.uint32(10).string(message.subaccountId);
    }
    if (message.marketId !== "") {
      writer.uint32(18).string(message.marketId);
    }
    return writer;
  },
  fromJSON(object: any): QuerySubaccountOrdersRequest {
    return {
      subaccountId: isSet(object.subaccountId) ? String(object.subaccountId) : "",
      marketId: isSet(object.marketId) ? String(object.marketId) : ""
    };
  },
  fromPartial(object: Partial<QuerySubaccountOrdersRequest>): QuerySubaccountOrdersRequest {
    const message = createBaseQuerySubaccountOrdersRequest();
    message.subaccountId = object.subaccountId ?? "";
    message.marketId = object.marketId ?? "";
    return message;
  }
};
function createBaseQuerySubaccountOrdersResponse(): QuerySubaccountOrdersResponse {
  return {
    buyOrders: [],
    sellOrders: []
  };
}
export const QuerySubaccountOrdersResponse = {
  encode(message: QuerySubaccountOrdersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.buyOrders) {
      SubaccountOrderData.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.sellOrders) {
      SubaccountOrderData.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QuerySubaccountOrdersResponse {
    return {
      buyOrders: Array.isArray(object?.buyOrders) ? object.buyOrders.map((e: any) => SubaccountOrderData.fromJSON(e)) : [],
      sellOrders: Array.isArray(object?.sellOrders) ? object.sellOrders.map((e: any) => SubaccountOrderData.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QuerySubaccountOrdersResponse>): QuerySubaccountOrdersResponse {
    const message = createBaseQuerySubaccountOrdersResponse();
    message.buyOrders = object.buyOrders?.map(e => SubaccountOrderData.fromPartial(e)) || [];
    message.sellOrders = object.sellOrders?.map(e => SubaccountOrderData.fromPartial(e)) || [];
    return message;
  }
};
function createBaseSubaccountOrderbookMetadataWithMarket(): SubaccountOrderbookMetadataWithMarket {
  return {
    metadata: undefined,
    marketId: "",
    isBuy: false
  };
}
export const SubaccountOrderbookMetadataWithMarket = {
  encode(message: SubaccountOrderbookMetadataWithMarket, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.metadata !== undefined) {
      SubaccountOrderbookMetadata.encode(message.metadata, writer.uint32(10).fork()).ldelim();
    }
    if (message.marketId !== "") {
      writer.uint32(18).string(message.marketId);
    }
    if (message.isBuy === true) {
      writer.uint32(24).bool(message.isBuy);
    }
    return writer;
  },
  fromJSON(object: any): SubaccountOrderbookMetadataWithMarket {
    return {
      metadata: isSet(object.metadata) ? SubaccountOrderbookMetadata.fromJSON(object.metadata) : undefined,
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      isBuy: isSet(object.isBuy) ? Boolean(object.isBuy) : false
    };
  },
  fromPartial(object: Partial<SubaccountOrderbookMetadataWithMarket>): SubaccountOrderbookMetadataWithMarket {
    const message = createBaseSubaccountOrderbookMetadataWithMarket();
    message.metadata = object.metadata !== undefined && object.metadata !== null ? SubaccountOrderbookMetadata.fromPartial(object.metadata) : undefined;
    message.marketId = object.marketId ?? "";
    message.isBuy = object.isBuy ?? false;
    return message;
  }
};
function createBaseQueryExchangeParamsRequest(): QueryExchangeParamsRequest {
  return {};
}
export const QueryExchangeParamsRequest = {
  encode(_: QueryExchangeParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): QueryExchangeParamsRequest {
    return {};
  },
  fromPartial(_: Partial<QueryExchangeParamsRequest>): QueryExchangeParamsRequest {
    const message = createBaseQueryExchangeParamsRequest();
    return message;
  }
};
function createBaseQueryExchangeParamsResponse(): QueryExchangeParamsResponse {
  return {
    params: undefined
  };
}
export const QueryExchangeParamsResponse = {
  encode(message: QueryExchangeParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryExchangeParamsResponse {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  fromPartial(object: Partial<QueryExchangeParamsResponse>): QueryExchangeParamsResponse {
    const message = createBaseQueryExchangeParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  }
};
function createBaseQuerySubaccountDepositsRequest(): QuerySubaccountDepositsRequest {
  return {
    subaccountId: "",
    subaccount: undefined
  };
}
export const QuerySubaccountDepositsRequest = {
  encode(message: QuerySubaccountDepositsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.subaccountId !== "") {
      writer.uint32(10).string(message.subaccountId);
    }
    if (message.subaccount !== undefined) {
      Subaccount.encode(message.subaccount, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QuerySubaccountDepositsRequest {
    return {
      subaccountId: isSet(object.subaccountId) ? String(object.subaccountId) : "",
      subaccount: isSet(object.subaccount) ? Subaccount.fromJSON(object.subaccount) : undefined
    };
  },
  fromPartial(object: Partial<QuerySubaccountDepositsRequest>): QuerySubaccountDepositsRequest {
    const message = createBaseQuerySubaccountDepositsRequest();
    message.subaccountId = object.subaccountId ?? "";
    message.subaccount = object.subaccount !== undefined && object.subaccount !== null ? Subaccount.fromPartial(object.subaccount) : undefined;
    return message;
  }
};
function createBaseQuerySubaccountDepositsResponse_DepositsEntry(): QuerySubaccountDepositsResponse_DepositsEntry {
  return {
    key: "",
    value: undefined
  };
}
export const QuerySubaccountDepositsResponse_DepositsEntry = {
  encode(message: QuerySubaccountDepositsResponse_DepositsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      Deposit.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QuerySubaccountDepositsResponse_DepositsEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? Deposit.fromJSON(object.value) : undefined
    };
  },
  fromPartial(object: Partial<QuerySubaccountDepositsResponse_DepositsEntry>): QuerySubaccountDepositsResponse_DepositsEntry {
    const message = createBaseQuerySubaccountDepositsResponse_DepositsEntry();
    message.key = object.key ?? "";
    message.value = object.value !== undefined && object.value !== null ? Deposit.fromPartial(object.value) : undefined;
    return message;
  }
};
function createBaseQuerySubaccountDepositsResponse(): QuerySubaccountDepositsResponse {
  return {
    deposits: {}
  };
}
export const QuerySubaccountDepositsResponse = {
  encode(message: QuerySubaccountDepositsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    Object.entries(message.deposits).forEach(([key, value]) => {
      QuerySubaccountDepositsResponse_DepositsEntry.encode({
        key: (key as any),
        value
      }, writer.uint32(10).fork()).ldelim();
    });
    return writer;
  },
  fromJSON(object: any): QuerySubaccountDepositsResponse {
    return {
      deposits: isObject(object.deposits) ? Object.entries(object.deposits).reduce<{
        [key: string]: Deposit;
      }>((acc, [key, value]) => {
        acc[key] = Deposit.fromJSON(value);
        return acc;
      }, {}) : {}
    };
  },
  fromPartial(object: Partial<QuerySubaccountDepositsResponse>): QuerySubaccountDepositsResponse {
    const message = createBaseQuerySubaccountDepositsResponse();
    message.deposits = Object.entries(object.deposits ?? {}).reduce<{
      [key: string]: Deposit;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = Deposit.fromPartial(value);
      }
      return acc;
    }, {});
    return message;
  }
};
function createBaseQueryExchangeBalancesRequest(): QueryExchangeBalancesRequest {
  return {};
}
export const QueryExchangeBalancesRequest = {
  encode(_: QueryExchangeBalancesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): QueryExchangeBalancesRequest {
    return {};
  },
  fromPartial(_: Partial<QueryExchangeBalancesRequest>): QueryExchangeBalancesRequest {
    const message = createBaseQueryExchangeBalancesRequest();
    return message;
  }
};
function createBaseQueryExchangeBalancesResponse(): QueryExchangeBalancesResponse {
  return {
    balances: []
  };
}
export const QueryExchangeBalancesResponse = {
  encode(message: QueryExchangeBalancesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.balances) {
      Balance.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryExchangeBalancesResponse {
    return {
      balances: Array.isArray(object?.balances) ? object.balances.map((e: any) => Balance.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryExchangeBalancesResponse>): QueryExchangeBalancesResponse {
    const message = createBaseQueryExchangeBalancesResponse();
    message.balances = object.balances?.map(e => Balance.fromPartial(e)) || [];
    return message;
  }
};
function createBaseQueryAggregateVolumeRequest(): QueryAggregateVolumeRequest {
  return {
    account: ""
  };
}
export const QueryAggregateVolumeRequest = {
  encode(message: QueryAggregateVolumeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.account !== "") {
      writer.uint32(10).string(message.account);
    }
    return writer;
  },
  fromJSON(object: any): QueryAggregateVolumeRequest {
    return {
      account: isSet(object.account) ? String(object.account) : ""
    };
  },
  fromPartial(object: Partial<QueryAggregateVolumeRequest>): QueryAggregateVolumeRequest {
    const message = createBaseQueryAggregateVolumeRequest();
    message.account = object.account ?? "";
    return message;
  }
};
function createBaseQueryAggregateVolumeResponse(): QueryAggregateVolumeResponse {
  return {
    aggregateVolumes: []
  };
}
export const QueryAggregateVolumeResponse = {
  encode(message: QueryAggregateVolumeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.aggregateVolumes) {
      MarketVolume.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryAggregateVolumeResponse {
    return {
      aggregateVolumes: Array.isArray(object?.aggregateVolumes) ? object.aggregateVolumes.map((e: any) => MarketVolume.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryAggregateVolumeResponse>): QueryAggregateVolumeResponse {
    const message = createBaseQueryAggregateVolumeResponse();
    message.aggregateVolumes = object.aggregateVolumes?.map(e => MarketVolume.fromPartial(e)) || [];
    return message;
  }
};
function createBaseQueryAggregateVolumesRequest(): QueryAggregateVolumesRequest {
  return {
    accounts: [],
    marketIds: []
  };
}
export const QueryAggregateVolumesRequest = {
  encode(message: QueryAggregateVolumesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.accounts) {
      writer.uint32(10).string(v!);
    }
    for (const v of message.marketIds) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  fromJSON(object: any): QueryAggregateVolumesRequest {
    return {
      accounts: Array.isArray(object?.accounts) ? object.accounts.map((e: any) => String(e)) : [],
      marketIds: Array.isArray(object?.marketIds) ? object.marketIds.map((e: any) => String(e)) : []
    };
  },
  fromPartial(object: Partial<QueryAggregateVolumesRequest>): QueryAggregateVolumesRequest {
    const message = createBaseQueryAggregateVolumesRequest();
    message.accounts = object.accounts?.map(e => e) || [];
    message.marketIds = object.marketIds?.map(e => e) || [];
    return message;
  }
};
function createBaseQueryAggregateVolumesResponse(): QueryAggregateVolumesResponse {
  return {
    aggregateAccountVolumes: [],
    aggregateMarketVolumes: []
  };
}
export const QueryAggregateVolumesResponse = {
  encode(message: QueryAggregateVolumesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.aggregateAccountVolumes) {
      AggregateAccountVolumeRecord.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.aggregateMarketVolumes) {
      MarketVolume.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryAggregateVolumesResponse {
    return {
      aggregateAccountVolumes: Array.isArray(object?.aggregateAccountVolumes) ? object.aggregateAccountVolumes.map((e: any) => AggregateAccountVolumeRecord.fromJSON(e)) : [],
      aggregateMarketVolumes: Array.isArray(object?.aggregateMarketVolumes) ? object.aggregateMarketVolumes.map((e: any) => MarketVolume.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryAggregateVolumesResponse>): QueryAggregateVolumesResponse {
    const message = createBaseQueryAggregateVolumesResponse();
    message.aggregateAccountVolumes = object.aggregateAccountVolumes?.map(e => AggregateAccountVolumeRecord.fromPartial(e)) || [];
    message.aggregateMarketVolumes = object.aggregateMarketVolumes?.map(e => MarketVolume.fromPartial(e)) || [];
    return message;
  }
};
function createBaseQueryAggregateMarketVolumeRequest(): QueryAggregateMarketVolumeRequest {
  return {
    marketId: ""
  };
}
export const QueryAggregateMarketVolumeRequest = {
  encode(message: QueryAggregateMarketVolumeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    return writer;
  },
  fromJSON(object: any): QueryAggregateMarketVolumeRequest {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : ""
    };
  },
  fromPartial(object: Partial<QueryAggregateMarketVolumeRequest>): QueryAggregateMarketVolumeRequest {
    const message = createBaseQueryAggregateMarketVolumeRequest();
    message.marketId = object.marketId ?? "";
    return message;
  }
};
function createBaseQueryAggregateMarketVolumeResponse(): QueryAggregateMarketVolumeResponse {
  return {
    volume: undefined
  };
}
export const QueryAggregateMarketVolumeResponse = {
  encode(message: QueryAggregateMarketVolumeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.volume !== undefined) {
      VolumeRecord.encode(message.volume, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryAggregateMarketVolumeResponse {
    return {
      volume: isSet(object.volume) ? VolumeRecord.fromJSON(object.volume) : undefined
    };
  },
  fromPartial(object: Partial<QueryAggregateMarketVolumeResponse>): QueryAggregateMarketVolumeResponse {
    const message = createBaseQueryAggregateMarketVolumeResponse();
    message.volume = object.volume !== undefined && object.volume !== null ? VolumeRecord.fromPartial(object.volume) : undefined;
    return message;
  }
};
function createBaseQueryDenomDecimalRequest(): QueryDenomDecimalRequest {
  return {
    denom: ""
  };
}
export const QueryDenomDecimalRequest = {
  encode(message: QueryDenomDecimalRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },
  fromJSON(object: any): QueryDenomDecimalRequest {
    return {
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },
  fromPartial(object: Partial<QueryDenomDecimalRequest>): QueryDenomDecimalRequest {
    const message = createBaseQueryDenomDecimalRequest();
    message.denom = object.denom ?? "";
    return message;
  }
};
function createBaseQueryDenomDecimalResponse(): QueryDenomDecimalResponse {
  return {
    decimal: Long.UZERO
  };
}
export const QueryDenomDecimalResponse = {
  encode(message: QueryDenomDecimalResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.decimal.isZero()) {
      writer.uint32(8).uint64(message.decimal);
    }
    return writer;
  },
  fromJSON(object: any): QueryDenomDecimalResponse {
    return {
      decimal: isSet(object.decimal) ? Long.fromValue(object.decimal) : Long.UZERO
    };
  },
  fromPartial(object: Partial<QueryDenomDecimalResponse>): QueryDenomDecimalResponse {
    const message = createBaseQueryDenomDecimalResponse();
    message.decimal = object.decimal !== undefined && object.decimal !== null ? Long.fromValue(object.decimal) : Long.UZERO;
    return message;
  }
};
function createBaseQueryDenomDecimalsRequest(): QueryDenomDecimalsRequest {
  return {
    denoms: []
  };
}
export const QueryDenomDecimalsRequest = {
  encode(message: QueryDenomDecimalsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.denoms) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  fromJSON(object: any): QueryDenomDecimalsRequest {
    return {
      denoms: Array.isArray(object?.denoms) ? object.denoms.map((e: any) => String(e)) : []
    };
  },
  fromPartial(object: Partial<QueryDenomDecimalsRequest>): QueryDenomDecimalsRequest {
    const message = createBaseQueryDenomDecimalsRequest();
    message.denoms = object.denoms?.map(e => e) || [];
    return message;
  }
};
function createBaseQueryDenomDecimalsResponse(): QueryDenomDecimalsResponse {
  return {
    denomDecimals: []
  };
}
export const QueryDenomDecimalsResponse = {
  encode(message: QueryDenomDecimalsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.denomDecimals) {
      DenomDecimals.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryDenomDecimalsResponse {
    return {
      denomDecimals: Array.isArray(object?.denomDecimals) ? object.denomDecimals.map((e: any) => DenomDecimals.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryDenomDecimalsResponse>): QueryDenomDecimalsResponse {
    const message = createBaseQueryDenomDecimalsResponse();
    message.denomDecimals = object.denomDecimals?.map(e => DenomDecimals.fromPartial(e)) || [];
    return message;
  }
};
function createBaseQueryAggregateMarketVolumesRequest(): QueryAggregateMarketVolumesRequest {
  return {
    marketIds: []
  };
}
export const QueryAggregateMarketVolumesRequest = {
  encode(message: QueryAggregateMarketVolumesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.marketIds) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  fromJSON(object: any): QueryAggregateMarketVolumesRequest {
    return {
      marketIds: Array.isArray(object?.marketIds) ? object.marketIds.map((e: any) => String(e)) : []
    };
  },
  fromPartial(object: Partial<QueryAggregateMarketVolumesRequest>): QueryAggregateMarketVolumesRequest {
    const message = createBaseQueryAggregateMarketVolumesRequest();
    message.marketIds = object.marketIds?.map(e => e) || [];
    return message;
  }
};
function createBaseQueryAggregateMarketVolumesResponse(): QueryAggregateMarketVolumesResponse {
  return {
    volumes: []
  };
}
export const QueryAggregateMarketVolumesResponse = {
  encode(message: QueryAggregateMarketVolumesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.volumes) {
      MarketVolume.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryAggregateMarketVolumesResponse {
    return {
      volumes: Array.isArray(object?.volumes) ? object.volumes.map((e: any) => MarketVolume.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryAggregateMarketVolumesResponse>): QueryAggregateMarketVolumesResponse {
    const message = createBaseQueryAggregateMarketVolumesResponse();
    message.volumes = object.volumes?.map(e => MarketVolume.fromPartial(e)) || [];
    return message;
  }
};
function createBaseQuerySubaccountDepositRequest(): QuerySubaccountDepositRequest {
  return {
    subaccountId: "",
    denom: ""
  };
}
export const QuerySubaccountDepositRequest = {
  encode(message: QuerySubaccountDepositRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.subaccountId !== "") {
      writer.uint32(10).string(message.subaccountId);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },
  fromJSON(object: any): QuerySubaccountDepositRequest {
    return {
      subaccountId: isSet(object.subaccountId) ? String(object.subaccountId) : "",
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },
  fromPartial(object: Partial<QuerySubaccountDepositRequest>): QuerySubaccountDepositRequest {
    const message = createBaseQuerySubaccountDepositRequest();
    message.subaccountId = object.subaccountId ?? "";
    message.denom = object.denom ?? "";
    return message;
  }
};
function createBaseQuerySubaccountDepositResponse(): QuerySubaccountDepositResponse {
  return {
    deposits: undefined
  };
}
export const QuerySubaccountDepositResponse = {
  encode(message: QuerySubaccountDepositResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.deposits !== undefined) {
      Deposit.encode(message.deposits, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QuerySubaccountDepositResponse {
    return {
      deposits: isSet(object.deposits) ? Deposit.fromJSON(object.deposits) : undefined
    };
  },
  fromPartial(object: Partial<QuerySubaccountDepositResponse>): QuerySubaccountDepositResponse {
    const message = createBaseQuerySubaccountDepositResponse();
    message.deposits = object.deposits !== undefined && object.deposits !== null ? Deposit.fromPartial(object.deposits) : undefined;
    return message;
  }
};
function createBaseQuerySpotMarketsRequest(): QuerySpotMarketsRequest {
  return {
    status: "",
    marketIds: []
  };
}
export const QuerySpotMarketsRequest = {
  encode(message: QuerySpotMarketsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.status !== "") {
      writer.uint32(10).string(message.status);
    }
    for (const v of message.marketIds) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  fromJSON(object: any): QuerySpotMarketsRequest {
    return {
      status: isSet(object.status) ? String(object.status) : "",
      marketIds: Array.isArray(object?.marketIds) ? object.marketIds.map((e: any) => String(e)) : []
    };
  },
  fromPartial(object: Partial<QuerySpotMarketsRequest>): QuerySpotMarketsRequest {
    const message = createBaseQuerySpotMarketsRequest();
    message.status = object.status ?? "";
    message.marketIds = object.marketIds?.map(e => e) || [];
    return message;
  }
};
function createBaseQuerySpotMarketsResponse(): QuerySpotMarketsResponse {
  return {
    markets: []
  };
}
export const QuerySpotMarketsResponse = {
  encode(message: QuerySpotMarketsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.markets) {
      SpotMarket.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QuerySpotMarketsResponse {
    return {
      markets: Array.isArray(object?.markets) ? object.markets.map((e: any) => SpotMarket.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QuerySpotMarketsResponse>): QuerySpotMarketsResponse {
    const message = createBaseQuerySpotMarketsResponse();
    message.markets = object.markets?.map(e => SpotMarket.fromPartial(e)) || [];
    return message;
  }
};
function createBaseQuerySpotMarketRequest(): QuerySpotMarketRequest {
  return {
    marketId: ""
  };
}
export const QuerySpotMarketRequest = {
  encode(message: QuerySpotMarketRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    return writer;
  },
  fromJSON(object: any): QuerySpotMarketRequest {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : ""
    };
  },
  fromPartial(object: Partial<QuerySpotMarketRequest>): QuerySpotMarketRequest {
    const message = createBaseQuerySpotMarketRequest();
    message.marketId = object.marketId ?? "";
    return message;
  }
};
function createBaseQuerySpotMarketResponse(): QuerySpotMarketResponse {
  return {
    market: undefined
  };
}
export const QuerySpotMarketResponse = {
  encode(message: QuerySpotMarketResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.market !== undefined) {
      SpotMarket.encode(message.market, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QuerySpotMarketResponse {
    return {
      market: isSet(object.market) ? SpotMarket.fromJSON(object.market) : undefined
    };
  },
  fromPartial(object: Partial<QuerySpotMarketResponse>): QuerySpotMarketResponse {
    const message = createBaseQuerySpotMarketResponse();
    message.market = object.market !== undefined && object.market !== null ? SpotMarket.fromPartial(object.market) : undefined;
    return message;
  }
};
function createBaseQuerySpotOrderbookRequest(): QuerySpotOrderbookRequest {
  return {
    marketId: "",
    limit: Long.UZERO,
    orderSide: 0,
    limitCumulativeNotional: undefined,
    limitCumulativeQuantity: undefined
  };
}
export const QuerySpotOrderbookRequest = {
  encode(message: QuerySpotOrderbookRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    if (!message.limit.isZero()) {
      writer.uint32(16).uint64(message.limit);
    }
    if (message.orderSide !== 0) {
      writer.uint32(24).int32(message.orderSide);
    }
    if (message.limitCumulativeNotional !== undefined) {
      writer.uint32(34).string(message.limitCumulativeNotional);
    }
    if (message.limitCumulativeQuantity !== undefined) {
      writer.uint32(42).string(message.limitCumulativeQuantity);
    }
    return writer;
  },
  fromJSON(object: any): QuerySpotOrderbookRequest {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      limit: isSet(object.limit) ? Long.fromValue(object.limit) : Long.UZERO,
      orderSide: isSet(object.orderSide) ? orderSideFromJSON(object.orderSide) : 0,
      limitCumulativeNotional: isSet(object.limitCumulativeNotional) ? String(object.limitCumulativeNotional) : undefined,
      limitCumulativeQuantity: isSet(object.limitCumulativeQuantity) ? String(object.limitCumulativeQuantity) : undefined
    };
  },
  fromPartial(object: Partial<QuerySpotOrderbookRequest>): QuerySpotOrderbookRequest {
    const message = createBaseQuerySpotOrderbookRequest();
    message.marketId = object.marketId ?? "";
    message.limit = object.limit !== undefined && object.limit !== null ? Long.fromValue(object.limit) : Long.UZERO;
    message.orderSide = object.orderSide ?? 0;
    message.limitCumulativeNotional = object.limitCumulativeNotional ?? undefined;
    message.limitCumulativeQuantity = object.limitCumulativeQuantity ?? undefined;
    return message;
  }
};
function createBaseQuerySpotOrderbookResponse(): QuerySpotOrderbookResponse {
  return {
    buysPriceLevel: [],
    sellsPriceLevel: []
  };
}
export const QuerySpotOrderbookResponse = {
  encode(message: QuerySpotOrderbookResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.buysPriceLevel) {
      Level.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.sellsPriceLevel) {
      Level.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QuerySpotOrderbookResponse {
    return {
      buysPriceLevel: Array.isArray(object?.buysPriceLevel) ? object.buysPriceLevel.map((e: any) => Level.fromJSON(e)) : [],
      sellsPriceLevel: Array.isArray(object?.sellsPriceLevel) ? object.sellsPriceLevel.map((e: any) => Level.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QuerySpotOrderbookResponse>): QuerySpotOrderbookResponse {
    const message = createBaseQuerySpotOrderbookResponse();
    message.buysPriceLevel = object.buysPriceLevel?.map(e => Level.fromPartial(e)) || [];
    message.sellsPriceLevel = object.sellsPriceLevel?.map(e => Level.fromPartial(e)) || [];
    return message;
  }
};
function createBaseFullSpotMarket(): FullSpotMarket {
  return {
    market: undefined,
    midPriceAndTob: undefined
  };
}
export const FullSpotMarket = {
  encode(message: FullSpotMarket, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.market !== undefined) {
      SpotMarket.encode(message.market, writer.uint32(10).fork()).ldelim();
    }
    if (message.midPriceAndTob !== undefined) {
      MidPriceAndTOB.encode(message.midPriceAndTob, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): FullSpotMarket {
    return {
      market: isSet(object.market) ? SpotMarket.fromJSON(object.market) : undefined,
      midPriceAndTob: isSet(object.midPriceAndTob) ? MidPriceAndTOB.fromJSON(object.midPriceAndTob) : undefined
    };
  },
  fromPartial(object: Partial<FullSpotMarket>): FullSpotMarket {
    const message = createBaseFullSpotMarket();
    message.market = object.market !== undefined && object.market !== null ? SpotMarket.fromPartial(object.market) : undefined;
    message.midPriceAndTob = object.midPriceAndTob !== undefined && object.midPriceAndTob !== null ? MidPriceAndTOB.fromPartial(object.midPriceAndTob) : undefined;
    return message;
  }
};
function createBaseQueryFullSpotMarketsRequest(): QueryFullSpotMarketsRequest {
  return {
    status: "",
    marketIds: [],
    withMidPriceAndTob: false
  };
}
export const QueryFullSpotMarketsRequest = {
  encode(message: QueryFullSpotMarketsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.status !== "") {
      writer.uint32(10).string(message.status);
    }
    for (const v of message.marketIds) {
      writer.uint32(18).string(v!);
    }
    if (message.withMidPriceAndTob === true) {
      writer.uint32(24).bool(message.withMidPriceAndTob);
    }
    return writer;
  },
  fromJSON(object: any): QueryFullSpotMarketsRequest {
    return {
      status: isSet(object.status) ? String(object.status) : "",
      marketIds: Array.isArray(object?.marketIds) ? object.marketIds.map((e: any) => String(e)) : [],
      withMidPriceAndTob: isSet(object.withMidPriceAndTob) ? Boolean(object.withMidPriceAndTob) : false
    };
  },
  fromPartial(object: Partial<QueryFullSpotMarketsRequest>): QueryFullSpotMarketsRequest {
    const message = createBaseQueryFullSpotMarketsRequest();
    message.status = object.status ?? "";
    message.marketIds = object.marketIds?.map(e => e) || [];
    message.withMidPriceAndTob = object.withMidPriceAndTob ?? false;
    return message;
  }
};
function createBaseQueryFullSpotMarketsResponse(): QueryFullSpotMarketsResponse {
  return {
    markets: []
  };
}
export const QueryFullSpotMarketsResponse = {
  encode(message: QueryFullSpotMarketsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.markets) {
      FullSpotMarket.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryFullSpotMarketsResponse {
    return {
      markets: Array.isArray(object?.markets) ? object.markets.map((e: any) => FullSpotMarket.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryFullSpotMarketsResponse>): QueryFullSpotMarketsResponse {
    const message = createBaseQueryFullSpotMarketsResponse();
    message.markets = object.markets?.map(e => FullSpotMarket.fromPartial(e)) || [];
    return message;
  }
};
function createBaseQueryFullSpotMarketRequest(): QueryFullSpotMarketRequest {
  return {
    marketId: "",
    withMidPriceAndTob: false
  };
}
export const QueryFullSpotMarketRequest = {
  encode(message: QueryFullSpotMarketRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    if (message.withMidPriceAndTob === true) {
      writer.uint32(16).bool(message.withMidPriceAndTob);
    }
    return writer;
  },
  fromJSON(object: any): QueryFullSpotMarketRequest {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      withMidPriceAndTob: isSet(object.withMidPriceAndTob) ? Boolean(object.withMidPriceAndTob) : false
    };
  },
  fromPartial(object: Partial<QueryFullSpotMarketRequest>): QueryFullSpotMarketRequest {
    const message = createBaseQueryFullSpotMarketRequest();
    message.marketId = object.marketId ?? "";
    message.withMidPriceAndTob = object.withMidPriceAndTob ?? false;
    return message;
  }
};
function createBaseQueryFullSpotMarketResponse(): QueryFullSpotMarketResponse {
  return {
    market: undefined
  };
}
export const QueryFullSpotMarketResponse = {
  encode(message: QueryFullSpotMarketResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.market !== undefined) {
      FullSpotMarket.encode(message.market, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryFullSpotMarketResponse {
    return {
      market: isSet(object.market) ? FullSpotMarket.fromJSON(object.market) : undefined
    };
  },
  fromPartial(object: Partial<QueryFullSpotMarketResponse>): QueryFullSpotMarketResponse {
    const message = createBaseQueryFullSpotMarketResponse();
    message.market = object.market !== undefined && object.market !== null ? FullSpotMarket.fromPartial(object.market) : undefined;
    return message;
  }
};
function createBaseQuerySpotOrdersByHashesRequest(): QuerySpotOrdersByHashesRequest {
  return {
    marketId: "",
    subaccountId: "",
    orderHashes: []
  };
}
export const QuerySpotOrdersByHashesRequest = {
  encode(message: QuerySpotOrdersByHashesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    if (message.subaccountId !== "") {
      writer.uint32(18).string(message.subaccountId);
    }
    for (const v of message.orderHashes) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },
  fromJSON(object: any): QuerySpotOrdersByHashesRequest {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      subaccountId: isSet(object.subaccountId) ? String(object.subaccountId) : "",
      orderHashes: Array.isArray(object?.orderHashes) ? object.orderHashes.map((e: any) => String(e)) : []
    };
  },
  fromPartial(object: Partial<QuerySpotOrdersByHashesRequest>): QuerySpotOrdersByHashesRequest {
    const message = createBaseQuerySpotOrdersByHashesRequest();
    message.marketId = object.marketId ?? "";
    message.subaccountId = object.subaccountId ?? "";
    message.orderHashes = object.orderHashes?.map(e => e) || [];
    return message;
  }
};
function createBaseQuerySpotOrdersByHashesResponse(): QuerySpotOrdersByHashesResponse {
  return {
    orders: []
  };
}
export const QuerySpotOrdersByHashesResponse = {
  encode(message: QuerySpotOrdersByHashesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.orders) {
      TrimmedSpotLimitOrder.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QuerySpotOrdersByHashesResponse {
    return {
      orders: Array.isArray(object?.orders) ? object.orders.map((e: any) => TrimmedSpotLimitOrder.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QuerySpotOrdersByHashesResponse>): QuerySpotOrdersByHashesResponse {
    const message = createBaseQuerySpotOrdersByHashesResponse();
    message.orders = object.orders?.map(e => TrimmedSpotLimitOrder.fromPartial(e)) || [];
    return message;
  }
};
function createBaseQueryTraderSpotOrdersRequest(): QueryTraderSpotOrdersRequest {
  return {
    marketId: "",
    subaccountId: ""
  };
}
export const QueryTraderSpotOrdersRequest = {
  encode(message: QueryTraderSpotOrdersRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    if (message.subaccountId !== "") {
      writer.uint32(18).string(message.subaccountId);
    }
    return writer;
  },
  fromJSON(object: any): QueryTraderSpotOrdersRequest {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      subaccountId: isSet(object.subaccountId) ? String(object.subaccountId) : ""
    };
  },
  fromPartial(object: Partial<QueryTraderSpotOrdersRequest>): QueryTraderSpotOrdersRequest {
    const message = createBaseQueryTraderSpotOrdersRequest();
    message.marketId = object.marketId ?? "";
    message.subaccountId = object.subaccountId ?? "";
    return message;
  }
};
function createBaseQueryAccountAddressSpotOrdersRequest(): QueryAccountAddressSpotOrdersRequest {
  return {
    marketId: "",
    accountAddress: ""
  };
}
export const QueryAccountAddressSpotOrdersRequest = {
  encode(message: QueryAccountAddressSpotOrdersRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    if (message.accountAddress !== "") {
      writer.uint32(18).string(message.accountAddress);
    }
    return writer;
  },
  fromJSON(object: any): QueryAccountAddressSpotOrdersRequest {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      accountAddress: isSet(object.accountAddress) ? String(object.accountAddress) : ""
    };
  },
  fromPartial(object: Partial<QueryAccountAddressSpotOrdersRequest>): QueryAccountAddressSpotOrdersRequest {
    const message = createBaseQueryAccountAddressSpotOrdersRequest();
    message.marketId = object.marketId ?? "";
    message.accountAddress = object.accountAddress ?? "";
    return message;
  }
};
function createBaseTrimmedSpotLimitOrder(): TrimmedSpotLimitOrder {
  return {
    price: "",
    quantity: "",
    fillable: "",
    isBuy: false,
    orderHash: ""
  };
}
export const TrimmedSpotLimitOrder = {
  encode(message: TrimmedSpotLimitOrder, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.price !== "") {
      writer.uint32(10).string(message.price);
    }
    if (message.quantity !== "") {
      writer.uint32(18).string(message.quantity);
    }
    if (message.fillable !== "") {
      writer.uint32(26).string(message.fillable);
    }
    if (message.isBuy === true) {
      writer.uint32(32).bool(message.isBuy);
    }
    if (message.orderHash !== "") {
      writer.uint32(42).string(message.orderHash);
    }
    return writer;
  },
  fromJSON(object: any): TrimmedSpotLimitOrder {
    return {
      price: isSet(object.price) ? String(object.price) : "",
      quantity: isSet(object.quantity) ? String(object.quantity) : "",
      fillable: isSet(object.fillable) ? String(object.fillable) : "",
      isBuy: isSet(object.isBuy) ? Boolean(object.isBuy) : false,
      orderHash: isSet(object.orderHash) ? String(object.orderHash) : ""
    };
  },
  fromPartial(object: Partial<TrimmedSpotLimitOrder>): TrimmedSpotLimitOrder {
    const message = createBaseTrimmedSpotLimitOrder();
    message.price = object.price ?? "";
    message.quantity = object.quantity ?? "";
    message.fillable = object.fillable ?? "";
    message.isBuy = object.isBuy ?? false;
    message.orderHash = object.orderHash ?? "";
    return message;
  }
};
function createBaseQueryTraderSpotOrdersResponse(): QueryTraderSpotOrdersResponse {
  return {
    orders: []
  };
}
export const QueryTraderSpotOrdersResponse = {
  encode(message: QueryTraderSpotOrdersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.orders) {
      TrimmedSpotLimitOrder.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryTraderSpotOrdersResponse {
    return {
      orders: Array.isArray(object?.orders) ? object.orders.map((e: any) => TrimmedSpotLimitOrder.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryTraderSpotOrdersResponse>): QueryTraderSpotOrdersResponse {
    const message = createBaseQueryTraderSpotOrdersResponse();
    message.orders = object.orders?.map(e => TrimmedSpotLimitOrder.fromPartial(e)) || [];
    return message;
  }
};
function createBaseQueryAccountAddressSpotOrdersResponse(): QueryAccountAddressSpotOrdersResponse {
  return {
    orders: []
  };
}
export const QueryAccountAddressSpotOrdersResponse = {
  encode(message: QueryAccountAddressSpotOrdersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.orders) {
      TrimmedSpotLimitOrder.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryAccountAddressSpotOrdersResponse {
    return {
      orders: Array.isArray(object?.orders) ? object.orders.map((e: any) => TrimmedSpotLimitOrder.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryAccountAddressSpotOrdersResponse>): QueryAccountAddressSpotOrdersResponse {
    const message = createBaseQueryAccountAddressSpotOrdersResponse();
    message.orders = object.orders?.map(e => TrimmedSpotLimitOrder.fromPartial(e)) || [];
    return message;
  }
};
function createBaseQuerySpotMidPriceAndTOBRequest(): QuerySpotMidPriceAndTOBRequest {
  return {
    marketId: ""
  };
}
export const QuerySpotMidPriceAndTOBRequest = {
  encode(message: QuerySpotMidPriceAndTOBRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    return writer;
  },
  fromJSON(object: any): QuerySpotMidPriceAndTOBRequest {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : ""
    };
  },
  fromPartial(object: Partial<QuerySpotMidPriceAndTOBRequest>): QuerySpotMidPriceAndTOBRequest {
    const message = createBaseQuerySpotMidPriceAndTOBRequest();
    message.marketId = object.marketId ?? "";
    return message;
  }
};
function createBaseQuerySpotMidPriceAndTOBResponse(): QuerySpotMidPriceAndTOBResponse {
  return {
    midPrice: undefined,
    bestBuyPrice: undefined,
    bestSellPrice: undefined
  };
}
export const QuerySpotMidPriceAndTOBResponse = {
  encode(message: QuerySpotMidPriceAndTOBResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.midPrice !== undefined) {
      writer.uint32(10).string(message.midPrice);
    }
    if (message.bestBuyPrice !== undefined) {
      writer.uint32(18).string(message.bestBuyPrice);
    }
    if (message.bestSellPrice !== undefined) {
      writer.uint32(26).string(message.bestSellPrice);
    }
    return writer;
  },
  fromJSON(object: any): QuerySpotMidPriceAndTOBResponse {
    return {
      midPrice: isSet(object.midPrice) ? String(object.midPrice) : undefined,
      bestBuyPrice: isSet(object.bestBuyPrice) ? String(object.bestBuyPrice) : undefined,
      bestSellPrice: isSet(object.bestSellPrice) ? String(object.bestSellPrice) : undefined
    };
  },
  fromPartial(object: Partial<QuerySpotMidPriceAndTOBResponse>): QuerySpotMidPriceAndTOBResponse {
    const message = createBaseQuerySpotMidPriceAndTOBResponse();
    message.midPrice = object.midPrice ?? undefined;
    message.bestBuyPrice = object.bestBuyPrice ?? undefined;
    message.bestSellPrice = object.bestSellPrice ?? undefined;
    return message;
  }
};
function createBaseQueryDerivativeMidPriceAndTOBRequest(): QueryDerivativeMidPriceAndTOBRequest {
  return {
    marketId: ""
  };
}
export const QueryDerivativeMidPriceAndTOBRequest = {
  encode(message: QueryDerivativeMidPriceAndTOBRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    return writer;
  },
  fromJSON(object: any): QueryDerivativeMidPriceAndTOBRequest {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : ""
    };
  },
  fromPartial(object: Partial<QueryDerivativeMidPriceAndTOBRequest>): QueryDerivativeMidPriceAndTOBRequest {
    const message = createBaseQueryDerivativeMidPriceAndTOBRequest();
    message.marketId = object.marketId ?? "";
    return message;
  }
};
function createBaseQueryDerivativeMidPriceAndTOBResponse(): QueryDerivativeMidPriceAndTOBResponse {
  return {
    midPrice: undefined,
    bestBuyPrice: undefined,
    bestSellPrice: undefined
  };
}
export const QueryDerivativeMidPriceAndTOBResponse = {
  encode(message: QueryDerivativeMidPriceAndTOBResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.midPrice !== undefined) {
      writer.uint32(10).string(message.midPrice);
    }
    if (message.bestBuyPrice !== undefined) {
      writer.uint32(18).string(message.bestBuyPrice);
    }
    if (message.bestSellPrice !== undefined) {
      writer.uint32(26).string(message.bestSellPrice);
    }
    return writer;
  },
  fromJSON(object: any): QueryDerivativeMidPriceAndTOBResponse {
    return {
      midPrice: isSet(object.midPrice) ? String(object.midPrice) : undefined,
      bestBuyPrice: isSet(object.bestBuyPrice) ? String(object.bestBuyPrice) : undefined,
      bestSellPrice: isSet(object.bestSellPrice) ? String(object.bestSellPrice) : undefined
    };
  },
  fromPartial(object: Partial<QueryDerivativeMidPriceAndTOBResponse>): QueryDerivativeMidPriceAndTOBResponse {
    const message = createBaseQueryDerivativeMidPriceAndTOBResponse();
    message.midPrice = object.midPrice ?? undefined;
    message.bestBuyPrice = object.bestBuyPrice ?? undefined;
    message.bestSellPrice = object.bestSellPrice ?? undefined;
    return message;
  }
};
function createBaseQueryDerivativeOrderbookRequest(): QueryDerivativeOrderbookRequest {
  return {
    marketId: "",
    limit: Long.UZERO,
    limitCumulativeNotional: undefined
  };
}
export const QueryDerivativeOrderbookRequest = {
  encode(message: QueryDerivativeOrderbookRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    if (!message.limit.isZero()) {
      writer.uint32(16).uint64(message.limit);
    }
    if (message.limitCumulativeNotional !== undefined) {
      writer.uint32(26).string(message.limitCumulativeNotional);
    }
    return writer;
  },
  fromJSON(object: any): QueryDerivativeOrderbookRequest {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      limit: isSet(object.limit) ? Long.fromValue(object.limit) : Long.UZERO,
      limitCumulativeNotional: isSet(object.limitCumulativeNotional) ? String(object.limitCumulativeNotional) : undefined
    };
  },
  fromPartial(object: Partial<QueryDerivativeOrderbookRequest>): QueryDerivativeOrderbookRequest {
    const message = createBaseQueryDerivativeOrderbookRequest();
    message.marketId = object.marketId ?? "";
    message.limit = object.limit !== undefined && object.limit !== null ? Long.fromValue(object.limit) : Long.UZERO;
    message.limitCumulativeNotional = object.limitCumulativeNotional ?? undefined;
    return message;
  }
};
function createBaseQueryDerivativeOrderbookResponse(): QueryDerivativeOrderbookResponse {
  return {
    buysPriceLevel: [],
    sellsPriceLevel: []
  };
}
export const QueryDerivativeOrderbookResponse = {
  encode(message: QueryDerivativeOrderbookResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.buysPriceLevel) {
      Level.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.sellsPriceLevel) {
      Level.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryDerivativeOrderbookResponse {
    return {
      buysPriceLevel: Array.isArray(object?.buysPriceLevel) ? object.buysPriceLevel.map((e: any) => Level.fromJSON(e)) : [],
      sellsPriceLevel: Array.isArray(object?.sellsPriceLevel) ? object.sellsPriceLevel.map((e: any) => Level.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryDerivativeOrderbookResponse>): QueryDerivativeOrderbookResponse {
    const message = createBaseQueryDerivativeOrderbookResponse();
    message.buysPriceLevel = object.buysPriceLevel?.map(e => Level.fromPartial(e)) || [];
    message.sellsPriceLevel = object.sellsPriceLevel?.map(e => Level.fromPartial(e)) || [];
    return message;
  }
};
function createBaseQueryTraderSpotOrdersToCancelUpToAmountRequest(): QueryTraderSpotOrdersToCancelUpToAmountRequest {
  return {
    marketId: "",
    subaccountId: "",
    baseAmount: "",
    quoteAmount: "",
    strategy: 0,
    referencePrice: undefined
  };
}
export const QueryTraderSpotOrdersToCancelUpToAmountRequest = {
  encode(message: QueryTraderSpotOrdersToCancelUpToAmountRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    if (message.subaccountId !== "") {
      writer.uint32(18).string(message.subaccountId);
    }
    if (message.baseAmount !== "") {
      writer.uint32(26).string(message.baseAmount);
    }
    if (message.quoteAmount !== "") {
      writer.uint32(34).string(message.quoteAmount);
    }
    if (message.strategy !== 0) {
      writer.uint32(40).int32(message.strategy);
    }
    if (message.referencePrice !== undefined) {
      writer.uint32(50).string(message.referencePrice);
    }
    return writer;
  },
  fromJSON(object: any): QueryTraderSpotOrdersToCancelUpToAmountRequest {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      subaccountId: isSet(object.subaccountId) ? String(object.subaccountId) : "",
      baseAmount: isSet(object.baseAmount) ? String(object.baseAmount) : "",
      quoteAmount: isSet(object.quoteAmount) ? String(object.quoteAmount) : "",
      strategy: isSet(object.strategy) ? cancellationStrategyFromJSON(object.strategy) : 0,
      referencePrice: isSet(object.referencePrice) ? String(object.referencePrice) : undefined
    };
  },
  fromPartial(object: Partial<QueryTraderSpotOrdersToCancelUpToAmountRequest>): QueryTraderSpotOrdersToCancelUpToAmountRequest {
    const message = createBaseQueryTraderSpotOrdersToCancelUpToAmountRequest();
    message.marketId = object.marketId ?? "";
    message.subaccountId = object.subaccountId ?? "";
    message.baseAmount = object.baseAmount ?? "";
    message.quoteAmount = object.quoteAmount ?? "";
    message.strategy = object.strategy ?? 0;
    message.referencePrice = object.referencePrice ?? undefined;
    return message;
  }
};
function createBaseQueryTraderDerivativeOrdersToCancelUpToAmountRequest(): QueryTraderDerivativeOrdersToCancelUpToAmountRequest {
  return {
    marketId: "",
    subaccountId: "",
    quoteAmount: "",
    strategy: 0,
    referencePrice: undefined
  };
}
export const QueryTraderDerivativeOrdersToCancelUpToAmountRequest = {
  encode(message: QueryTraderDerivativeOrdersToCancelUpToAmountRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    if (message.subaccountId !== "") {
      writer.uint32(18).string(message.subaccountId);
    }
    if (message.quoteAmount !== "") {
      writer.uint32(26).string(message.quoteAmount);
    }
    if (message.strategy !== 0) {
      writer.uint32(32).int32(message.strategy);
    }
    if (message.referencePrice !== undefined) {
      writer.uint32(42).string(message.referencePrice);
    }
    return writer;
  },
  fromJSON(object: any): QueryTraderDerivativeOrdersToCancelUpToAmountRequest {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      subaccountId: isSet(object.subaccountId) ? String(object.subaccountId) : "",
      quoteAmount: isSet(object.quoteAmount) ? String(object.quoteAmount) : "",
      strategy: isSet(object.strategy) ? cancellationStrategyFromJSON(object.strategy) : 0,
      referencePrice: isSet(object.referencePrice) ? String(object.referencePrice) : undefined
    };
  },
  fromPartial(object: Partial<QueryTraderDerivativeOrdersToCancelUpToAmountRequest>): QueryTraderDerivativeOrdersToCancelUpToAmountRequest {
    const message = createBaseQueryTraderDerivativeOrdersToCancelUpToAmountRequest();
    message.marketId = object.marketId ?? "";
    message.subaccountId = object.subaccountId ?? "";
    message.quoteAmount = object.quoteAmount ?? "";
    message.strategy = object.strategy ?? 0;
    message.referencePrice = object.referencePrice ?? undefined;
    return message;
  }
};
function createBaseQueryTraderDerivativeOrdersRequest(): QueryTraderDerivativeOrdersRequest {
  return {
    marketId: "",
    subaccountId: ""
  };
}
export const QueryTraderDerivativeOrdersRequest = {
  encode(message: QueryTraderDerivativeOrdersRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    if (message.subaccountId !== "") {
      writer.uint32(18).string(message.subaccountId);
    }
    return writer;
  },
  fromJSON(object: any): QueryTraderDerivativeOrdersRequest {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      subaccountId: isSet(object.subaccountId) ? String(object.subaccountId) : ""
    };
  },
  fromPartial(object: Partial<QueryTraderDerivativeOrdersRequest>): QueryTraderDerivativeOrdersRequest {
    const message = createBaseQueryTraderDerivativeOrdersRequest();
    message.marketId = object.marketId ?? "";
    message.subaccountId = object.subaccountId ?? "";
    return message;
  }
};
function createBaseQueryAccountAddressDerivativeOrdersRequest(): QueryAccountAddressDerivativeOrdersRequest {
  return {
    marketId: "",
    accountAddress: ""
  };
}
export const QueryAccountAddressDerivativeOrdersRequest = {
  encode(message: QueryAccountAddressDerivativeOrdersRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    if (message.accountAddress !== "") {
      writer.uint32(18).string(message.accountAddress);
    }
    return writer;
  },
  fromJSON(object: any): QueryAccountAddressDerivativeOrdersRequest {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      accountAddress: isSet(object.accountAddress) ? String(object.accountAddress) : ""
    };
  },
  fromPartial(object: Partial<QueryAccountAddressDerivativeOrdersRequest>): QueryAccountAddressDerivativeOrdersRequest {
    const message = createBaseQueryAccountAddressDerivativeOrdersRequest();
    message.marketId = object.marketId ?? "";
    message.accountAddress = object.accountAddress ?? "";
    return message;
  }
};
function createBaseTrimmedDerivativeLimitOrder(): TrimmedDerivativeLimitOrder {
  return {
    price: "",
    quantity: "",
    margin: "",
    fillable: "",
    isBuy: false,
    orderHash: ""
  };
}
export const TrimmedDerivativeLimitOrder = {
  encode(message: TrimmedDerivativeLimitOrder, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.price !== "") {
      writer.uint32(10).string(message.price);
    }
    if (message.quantity !== "") {
      writer.uint32(18).string(message.quantity);
    }
    if (message.margin !== "") {
      writer.uint32(26).string(message.margin);
    }
    if (message.fillable !== "") {
      writer.uint32(34).string(message.fillable);
    }
    if (message.isBuy === true) {
      writer.uint32(40).bool(message.isBuy);
    }
    if (message.orderHash !== "") {
      writer.uint32(50).string(message.orderHash);
    }
    return writer;
  },
  fromJSON(object: any): TrimmedDerivativeLimitOrder {
    return {
      price: isSet(object.price) ? String(object.price) : "",
      quantity: isSet(object.quantity) ? String(object.quantity) : "",
      margin: isSet(object.margin) ? String(object.margin) : "",
      fillable: isSet(object.fillable) ? String(object.fillable) : "",
      isBuy: isSet(object.isBuy) ? Boolean(object.isBuy) : false,
      orderHash: isSet(object.orderHash) ? String(object.orderHash) : ""
    };
  },
  fromPartial(object: Partial<TrimmedDerivativeLimitOrder>): TrimmedDerivativeLimitOrder {
    const message = createBaseTrimmedDerivativeLimitOrder();
    message.price = object.price ?? "";
    message.quantity = object.quantity ?? "";
    message.margin = object.margin ?? "";
    message.fillable = object.fillable ?? "";
    message.isBuy = object.isBuy ?? false;
    message.orderHash = object.orderHash ?? "";
    return message;
  }
};
function createBaseQueryTraderDerivativeOrdersResponse(): QueryTraderDerivativeOrdersResponse {
  return {
    orders: []
  };
}
export const QueryTraderDerivativeOrdersResponse = {
  encode(message: QueryTraderDerivativeOrdersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.orders) {
      TrimmedDerivativeLimitOrder.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryTraderDerivativeOrdersResponse {
    return {
      orders: Array.isArray(object?.orders) ? object.orders.map((e: any) => TrimmedDerivativeLimitOrder.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryTraderDerivativeOrdersResponse>): QueryTraderDerivativeOrdersResponse {
    const message = createBaseQueryTraderDerivativeOrdersResponse();
    message.orders = object.orders?.map(e => TrimmedDerivativeLimitOrder.fromPartial(e)) || [];
    return message;
  }
};
function createBaseQueryAccountAddressDerivativeOrdersResponse(): QueryAccountAddressDerivativeOrdersResponse {
  return {
    orders: []
  };
}
export const QueryAccountAddressDerivativeOrdersResponse = {
  encode(message: QueryAccountAddressDerivativeOrdersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.orders) {
      TrimmedDerivativeLimitOrder.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryAccountAddressDerivativeOrdersResponse {
    return {
      orders: Array.isArray(object?.orders) ? object.orders.map((e: any) => TrimmedDerivativeLimitOrder.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryAccountAddressDerivativeOrdersResponse>): QueryAccountAddressDerivativeOrdersResponse {
    const message = createBaseQueryAccountAddressDerivativeOrdersResponse();
    message.orders = object.orders?.map(e => TrimmedDerivativeLimitOrder.fromPartial(e)) || [];
    return message;
  }
};
function createBaseQueryDerivativeOrdersByHashesRequest(): QueryDerivativeOrdersByHashesRequest {
  return {
    marketId: "",
    subaccountId: "",
    orderHashes: []
  };
}
export const QueryDerivativeOrdersByHashesRequest = {
  encode(message: QueryDerivativeOrdersByHashesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    if (message.subaccountId !== "") {
      writer.uint32(18).string(message.subaccountId);
    }
    for (const v of message.orderHashes) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },
  fromJSON(object: any): QueryDerivativeOrdersByHashesRequest {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      subaccountId: isSet(object.subaccountId) ? String(object.subaccountId) : "",
      orderHashes: Array.isArray(object?.orderHashes) ? object.orderHashes.map((e: any) => String(e)) : []
    };
  },
  fromPartial(object: Partial<QueryDerivativeOrdersByHashesRequest>): QueryDerivativeOrdersByHashesRequest {
    const message = createBaseQueryDerivativeOrdersByHashesRequest();
    message.marketId = object.marketId ?? "";
    message.subaccountId = object.subaccountId ?? "";
    message.orderHashes = object.orderHashes?.map(e => e) || [];
    return message;
  }
};
function createBaseQueryDerivativeOrdersByHashesResponse(): QueryDerivativeOrdersByHashesResponse {
  return {
    orders: []
  };
}
export const QueryDerivativeOrdersByHashesResponse = {
  encode(message: QueryDerivativeOrdersByHashesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.orders) {
      TrimmedDerivativeLimitOrder.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryDerivativeOrdersByHashesResponse {
    return {
      orders: Array.isArray(object?.orders) ? object.orders.map((e: any) => TrimmedDerivativeLimitOrder.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryDerivativeOrdersByHashesResponse>): QueryDerivativeOrdersByHashesResponse {
    const message = createBaseQueryDerivativeOrdersByHashesResponse();
    message.orders = object.orders?.map(e => TrimmedDerivativeLimitOrder.fromPartial(e)) || [];
    return message;
  }
};
function createBaseQueryDerivativeMarketsRequest(): QueryDerivativeMarketsRequest {
  return {
    status: "",
    marketIds: [],
    withMidPriceAndTob: false
  };
}
export const QueryDerivativeMarketsRequest = {
  encode(message: QueryDerivativeMarketsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.status !== "") {
      writer.uint32(10).string(message.status);
    }
    for (const v of message.marketIds) {
      writer.uint32(18).string(v!);
    }
    if (message.withMidPriceAndTob === true) {
      writer.uint32(24).bool(message.withMidPriceAndTob);
    }
    return writer;
  },
  fromJSON(object: any): QueryDerivativeMarketsRequest {
    return {
      status: isSet(object.status) ? String(object.status) : "",
      marketIds: Array.isArray(object?.marketIds) ? object.marketIds.map((e: any) => String(e)) : [],
      withMidPriceAndTob: isSet(object.withMidPriceAndTob) ? Boolean(object.withMidPriceAndTob) : false
    };
  },
  fromPartial(object: Partial<QueryDerivativeMarketsRequest>): QueryDerivativeMarketsRequest {
    const message = createBaseQueryDerivativeMarketsRequest();
    message.status = object.status ?? "";
    message.marketIds = object.marketIds?.map(e => e) || [];
    message.withMidPriceAndTob = object.withMidPriceAndTob ?? false;
    return message;
  }
};
function createBasePriceLevel(): PriceLevel {
  return {
    price: "",
    quantity: ""
  };
}
export const PriceLevel = {
  encode(message: PriceLevel, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.price !== "") {
      writer.uint32(10).string(message.price);
    }
    if (message.quantity !== "") {
      writer.uint32(18).string(message.quantity);
    }
    return writer;
  },
  fromJSON(object: any): PriceLevel {
    return {
      price: isSet(object.price) ? String(object.price) : "",
      quantity: isSet(object.quantity) ? String(object.quantity) : ""
    };
  },
  fromPartial(object: Partial<PriceLevel>): PriceLevel {
    const message = createBasePriceLevel();
    message.price = object.price ?? "";
    message.quantity = object.quantity ?? "";
    return message;
  }
};
function createBasePerpetualMarketState(): PerpetualMarketState {
  return {
    marketInfo: undefined,
    fundingInfo: undefined
  };
}
export const PerpetualMarketState = {
  encode(message: PerpetualMarketState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.marketInfo !== undefined) {
      PerpetualMarketInfo.encode(message.marketInfo, writer.uint32(10).fork()).ldelim();
    }
    if (message.fundingInfo !== undefined) {
      PerpetualMarketFunding.encode(message.fundingInfo, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): PerpetualMarketState {
    return {
      marketInfo: isSet(object.marketInfo) ? PerpetualMarketInfo.fromJSON(object.marketInfo) : undefined,
      fundingInfo: isSet(object.fundingInfo) ? PerpetualMarketFunding.fromJSON(object.fundingInfo) : undefined
    };
  },
  fromPartial(object: Partial<PerpetualMarketState>): PerpetualMarketState {
    const message = createBasePerpetualMarketState();
    message.marketInfo = object.marketInfo !== undefined && object.marketInfo !== null ? PerpetualMarketInfo.fromPartial(object.marketInfo) : undefined;
    message.fundingInfo = object.fundingInfo !== undefined && object.fundingInfo !== null ? PerpetualMarketFunding.fromPartial(object.fundingInfo) : undefined;
    return message;
  }
};
function createBaseFullDerivativeMarket(): FullDerivativeMarket {
  return {
    market: undefined,
    perpetualInfo: undefined,
    futuresInfo: undefined,
    markPrice: "",
    midPriceAndTob: undefined
  };
}
export const FullDerivativeMarket = {
  encode(message: FullDerivativeMarket, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.market !== undefined) {
      DerivativeMarket.encode(message.market, writer.uint32(10).fork()).ldelim();
    }
    if (message.perpetualInfo !== undefined) {
      PerpetualMarketState.encode(message.perpetualInfo, writer.uint32(18).fork()).ldelim();
    }
    if (message.futuresInfo !== undefined) {
      ExpiryFuturesMarketInfo.encode(message.futuresInfo, writer.uint32(26).fork()).ldelim();
    }
    if (message.markPrice !== "") {
      writer.uint32(34).string(message.markPrice);
    }
    if (message.midPriceAndTob !== undefined) {
      MidPriceAndTOB.encode(message.midPriceAndTob, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): FullDerivativeMarket {
    return {
      market: isSet(object.market) ? DerivativeMarket.fromJSON(object.market) : undefined,
      perpetualInfo: isSet(object.perpetualInfo) ? PerpetualMarketState.fromJSON(object.perpetualInfo) : undefined,
      futuresInfo: isSet(object.futuresInfo) ? ExpiryFuturesMarketInfo.fromJSON(object.futuresInfo) : undefined,
      markPrice: isSet(object.markPrice) ? String(object.markPrice) : "",
      midPriceAndTob: isSet(object.midPriceAndTob) ? MidPriceAndTOB.fromJSON(object.midPriceAndTob) : undefined
    };
  },
  fromPartial(object: Partial<FullDerivativeMarket>): FullDerivativeMarket {
    const message = createBaseFullDerivativeMarket();
    message.market = object.market !== undefined && object.market !== null ? DerivativeMarket.fromPartial(object.market) : undefined;
    message.perpetualInfo = object.perpetualInfo !== undefined && object.perpetualInfo !== null ? PerpetualMarketState.fromPartial(object.perpetualInfo) : undefined;
    message.futuresInfo = object.futuresInfo !== undefined && object.futuresInfo !== null ? ExpiryFuturesMarketInfo.fromPartial(object.futuresInfo) : undefined;
    message.markPrice = object.markPrice ?? "";
    message.midPriceAndTob = object.midPriceAndTob !== undefined && object.midPriceAndTob !== null ? MidPriceAndTOB.fromPartial(object.midPriceAndTob) : undefined;
    return message;
  }
};
function createBaseQueryDerivativeMarketsResponse(): QueryDerivativeMarketsResponse {
  return {
    markets: []
  };
}
export const QueryDerivativeMarketsResponse = {
  encode(message: QueryDerivativeMarketsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.markets) {
      FullDerivativeMarket.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryDerivativeMarketsResponse {
    return {
      markets: Array.isArray(object?.markets) ? object.markets.map((e: any) => FullDerivativeMarket.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryDerivativeMarketsResponse>): QueryDerivativeMarketsResponse {
    const message = createBaseQueryDerivativeMarketsResponse();
    message.markets = object.markets?.map(e => FullDerivativeMarket.fromPartial(e)) || [];
    return message;
  }
};
function createBaseQueryDerivativeMarketRequest(): QueryDerivativeMarketRequest {
  return {
    marketId: ""
  };
}
export const QueryDerivativeMarketRequest = {
  encode(message: QueryDerivativeMarketRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    return writer;
  },
  fromJSON(object: any): QueryDerivativeMarketRequest {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : ""
    };
  },
  fromPartial(object: Partial<QueryDerivativeMarketRequest>): QueryDerivativeMarketRequest {
    const message = createBaseQueryDerivativeMarketRequest();
    message.marketId = object.marketId ?? "";
    return message;
  }
};
function createBaseQueryDerivativeMarketResponse(): QueryDerivativeMarketResponse {
  return {
    market: undefined
  };
}
export const QueryDerivativeMarketResponse = {
  encode(message: QueryDerivativeMarketResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.market !== undefined) {
      FullDerivativeMarket.encode(message.market, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryDerivativeMarketResponse {
    return {
      market: isSet(object.market) ? FullDerivativeMarket.fromJSON(object.market) : undefined
    };
  },
  fromPartial(object: Partial<QueryDerivativeMarketResponse>): QueryDerivativeMarketResponse {
    const message = createBaseQueryDerivativeMarketResponse();
    message.market = object.market !== undefined && object.market !== null ? FullDerivativeMarket.fromPartial(object.market) : undefined;
    return message;
  }
};
function createBaseQueryDerivativeMarketAddressRequest(): QueryDerivativeMarketAddressRequest {
  return {
    marketId: ""
  };
}
export const QueryDerivativeMarketAddressRequest = {
  encode(message: QueryDerivativeMarketAddressRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    return writer;
  },
  fromJSON(object: any): QueryDerivativeMarketAddressRequest {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : ""
    };
  },
  fromPartial(object: Partial<QueryDerivativeMarketAddressRequest>): QueryDerivativeMarketAddressRequest {
    const message = createBaseQueryDerivativeMarketAddressRequest();
    message.marketId = object.marketId ?? "";
    return message;
  }
};
function createBaseQueryDerivativeMarketAddressResponse(): QueryDerivativeMarketAddressResponse {
  return {
    address: "",
    subaccountId: ""
  };
}
export const QueryDerivativeMarketAddressResponse = {
  encode(message: QueryDerivativeMarketAddressResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.subaccountId !== "") {
      writer.uint32(18).string(message.subaccountId);
    }
    return writer;
  },
  fromJSON(object: any): QueryDerivativeMarketAddressResponse {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      subaccountId: isSet(object.subaccountId) ? String(object.subaccountId) : ""
    };
  },
  fromPartial(object: Partial<QueryDerivativeMarketAddressResponse>): QueryDerivativeMarketAddressResponse {
    const message = createBaseQueryDerivativeMarketAddressResponse();
    message.address = object.address ?? "";
    message.subaccountId = object.subaccountId ?? "";
    return message;
  }
};
function createBaseQuerySubaccountTradeNonceRequest(): QuerySubaccountTradeNonceRequest {
  return {
    subaccountId: ""
  };
}
export const QuerySubaccountTradeNonceRequest = {
  encode(message: QuerySubaccountTradeNonceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.subaccountId !== "") {
      writer.uint32(10).string(message.subaccountId);
    }
    return writer;
  },
  fromJSON(object: any): QuerySubaccountTradeNonceRequest {
    return {
      subaccountId: isSet(object.subaccountId) ? String(object.subaccountId) : ""
    };
  },
  fromPartial(object: Partial<QuerySubaccountTradeNonceRequest>): QuerySubaccountTradeNonceRequest {
    const message = createBaseQuerySubaccountTradeNonceRequest();
    message.subaccountId = object.subaccountId ?? "";
    return message;
  }
};
function createBaseQuerySubaccountPositionsRequest(): QuerySubaccountPositionsRequest {
  return {
    subaccountId: ""
  };
}
export const QuerySubaccountPositionsRequest = {
  encode(message: QuerySubaccountPositionsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.subaccountId !== "") {
      writer.uint32(10).string(message.subaccountId);
    }
    return writer;
  },
  fromJSON(object: any): QuerySubaccountPositionsRequest {
    return {
      subaccountId: isSet(object.subaccountId) ? String(object.subaccountId) : ""
    };
  },
  fromPartial(object: Partial<QuerySubaccountPositionsRequest>): QuerySubaccountPositionsRequest {
    const message = createBaseQuerySubaccountPositionsRequest();
    message.subaccountId = object.subaccountId ?? "";
    return message;
  }
};
function createBaseQuerySubaccountPositionInMarketRequest(): QuerySubaccountPositionInMarketRequest {
  return {
    subaccountId: "",
    marketId: ""
  };
}
export const QuerySubaccountPositionInMarketRequest = {
  encode(message: QuerySubaccountPositionInMarketRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.subaccountId !== "") {
      writer.uint32(10).string(message.subaccountId);
    }
    if (message.marketId !== "") {
      writer.uint32(18).string(message.marketId);
    }
    return writer;
  },
  fromJSON(object: any): QuerySubaccountPositionInMarketRequest {
    return {
      subaccountId: isSet(object.subaccountId) ? String(object.subaccountId) : "",
      marketId: isSet(object.marketId) ? String(object.marketId) : ""
    };
  },
  fromPartial(object: Partial<QuerySubaccountPositionInMarketRequest>): QuerySubaccountPositionInMarketRequest {
    const message = createBaseQuerySubaccountPositionInMarketRequest();
    message.subaccountId = object.subaccountId ?? "";
    message.marketId = object.marketId ?? "";
    return message;
  }
};
function createBaseQuerySubaccountEffectivePositionInMarketRequest(): QuerySubaccountEffectivePositionInMarketRequest {
  return {
    subaccountId: "",
    marketId: ""
  };
}
export const QuerySubaccountEffectivePositionInMarketRequest = {
  encode(message: QuerySubaccountEffectivePositionInMarketRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.subaccountId !== "") {
      writer.uint32(10).string(message.subaccountId);
    }
    if (message.marketId !== "") {
      writer.uint32(18).string(message.marketId);
    }
    return writer;
  },
  fromJSON(object: any): QuerySubaccountEffectivePositionInMarketRequest {
    return {
      subaccountId: isSet(object.subaccountId) ? String(object.subaccountId) : "",
      marketId: isSet(object.marketId) ? String(object.marketId) : ""
    };
  },
  fromPartial(object: Partial<QuerySubaccountEffectivePositionInMarketRequest>): QuerySubaccountEffectivePositionInMarketRequest {
    const message = createBaseQuerySubaccountEffectivePositionInMarketRequest();
    message.subaccountId = object.subaccountId ?? "";
    message.marketId = object.marketId ?? "";
    return message;
  }
};
function createBaseQuerySubaccountOrderMetadataRequest(): QuerySubaccountOrderMetadataRequest {
  return {
    subaccountId: ""
  };
}
export const QuerySubaccountOrderMetadataRequest = {
  encode(message: QuerySubaccountOrderMetadataRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.subaccountId !== "") {
      writer.uint32(10).string(message.subaccountId);
    }
    return writer;
  },
  fromJSON(object: any): QuerySubaccountOrderMetadataRequest {
    return {
      subaccountId: isSet(object.subaccountId) ? String(object.subaccountId) : ""
    };
  },
  fromPartial(object: Partial<QuerySubaccountOrderMetadataRequest>): QuerySubaccountOrderMetadataRequest {
    const message = createBaseQuerySubaccountOrderMetadataRequest();
    message.subaccountId = object.subaccountId ?? "";
    return message;
  }
};
function createBaseQuerySubaccountPositionsResponse(): QuerySubaccountPositionsResponse {
  return {
    state: []
  };
}
export const QuerySubaccountPositionsResponse = {
  encode(message: QuerySubaccountPositionsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.state) {
      DerivativePosition.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QuerySubaccountPositionsResponse {
    return {
      state: Array.isArray(object?.state) ? object.state.map((e: any) => DerivativePosition.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QuerySubaccountPositionsResponse>): QuerySubaccountPositionsResponse {
    const message = createBaseQuerySubaccountPositionsResponse();
    message.state = object.state?.map(e => DerivativePosition.fromPartial(e)) || [];
    return message;
  }
};
function createBaseQuerySubaccountPositionInMarketResponse(): QuerySubaccountPositionInMarketResponse {
  return {
    state: undefined
  };
}
export const QuerySubaccountPositionInMarketResponse = {
  encode(message: QuerySubaccountPositionInMarketResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.state !== undefined) {
      Position.encode(message.state, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QuerySubaccountPositionInMarketResponse {
    return {
      state: isSet(object.state) ? Position.fromJSON(object.state) : undefined
    };
  },
  fromPartial(object: Partial<QuerySubaccountPositionInMarketResponse>): QuerySubaccountPositionInMarketResponse {
    const message = createBaseQuerySubaccountPositionInMarketResponse();
    message.state = object.state !== undefined && object.state !== null ? Position.fromPartial(object.state) : undefined;
    return message;
  }
};
function createBaseEffectivePosition(): EffectivePosition {
  return {
    isLong: false,
    quantity: "",
    entryPrice: "",
    effectiveMargin: ""
  };
}
export const EffectivePosition = {
  encode(message: EffectivePosition, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.isLong === true) {
      writer.uint32(8).bool(message.isLong);
    }
    if (message.quantity !== "") {
      writer.uint32(18).string(message.quantity);
    }
    if (message.entryPrice !== "") {
      writer.uint32(26).string(message.entryPrice);
    }
    if (message.effectiveMargin !== "") {
      writer.uint32(34).string(message.effectiveMargin);
    }
    return writer;
  },
  fromJSON(object: any): EffectivePosition {
    return {
      isLong: isSet(object.isLong) ? Boolean(object.isLong) : false,
      quantity: isSet(object.quantity) ? String(object.quantity) : "",
      entryPrice: isSet(object.entryPrice) ? String(object.entryPrice) : "",
      effectiveMargin: isSet(object.effectiveMargin) ? String(object.effectiveMargin) : ""
    };
  },
  fromPartial(object: Partial<EffectivePosition>): EffectivePosition {
    const message = createBaseEffectivePosition();
    message.isLong = object.isLong ?? false;
    message.quantity = object.quantity ?? "";
    message.entryPrice = object.entryPrice ?? "";
    message.effectiveMargin = object.effectiveMargin ?? "";
    return message;
  }
};
function createBaseQuerySubaccountEffectivePositionInMarketResponse(): QuerySubaccountEffectivePositionInMarketResponse {
  return {
    state: undefined
  };
}
export const QuerySubaccountEffectivePositionInMarketResponse = {
  encode(message: QuerySubaccountEffectivePositionInMarketResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.state !== undefined) {
      EffectivePosition.encode(message.state, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QuerySubaccountEffectivePositionInMarketResponse {
    return {
      state: isSet(object.state) ? EffectivePosition.fromJSON(object.state) : undefined
    };
  },
  fromPartial(object: Partial<QuerySubaccountEffectivePositionInMarketResponse>): QuerySubaccountEffectivePositionInMarketResponse {
    const message = createBaseQuerySubaccountEffectivePositionInMarketResponse();
    message.state = object.state !== undefined && object.state !== null ? EffectivePosition.fromPartial(object.state) : undefined;
    return message;
  }
};
function createBaseQueryPerpetualMarketInfoRequest(): QueryPerpetualMarketInfoRequest {
  return {
    marketId: ""
  };
}
export const QueryPerpetualMarketInfoRequest = {
  encode(message: QueryPerpetualMarketInfoRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    return writer;
  },
  fromJSON(object: any): QueryPerpetualMarketInfoRequest {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : ""
    };
  },
  fromPartial(object: Partial<QueryPerpetualMarketInfoRequest>): QueryPerpetualMarketInfoRequest {
    const message = createBaseQueryPerpetualMarketInfoRequest();
    message.marketId = object.marketId ?? "";
    return message;
  }
};
function createBaseQueryPerpetualMarketInfoResponse(): QueryPerpetualMarketInfoResponse {
  return {
    info: undefined
  };
}
export const QueryPerpetualMarketInfoResponse = {
  encode(message: QueryPerpetualMarketInfoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.info !== undefined) {
      PerpetualMarketInfo.encode(message.info, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryPerpetualMarketInfoResponse {
    return {
      info: isSet(object.info) ? PerpetualMarketInfo.fromJSON(object.info) : undefined
    };
  },
  fromPartial(object: Partial<QueryPerpetualMarketInfoResponse>): QueryPerpetualMarketInfoResponse {
    const message = createBaseQueryPerpetualMarketInfoResponse();
    message.info = object.info !== undefined && object.info !== null ? PerpetualMarketInfo.fromPartial(object.info) : undefined;
    return message;
  }
};
function createBaseQueryExpiryFuturesMarketInfoRequest(): QueryExpiryFuturesMarketInfoRequest {
  return {
    marketId: ""
  };
}
export const QueryExpiryFuturesMarketInfoRequest = {
  encode(message: QueryExpiryFuturesMarketInfoRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    return writer;
  },
  fromJSON(object: any): QueryExpiryFuturesMarketInfoRequest {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : ""
    };
  },
  fromPartial(object: Partial<QueryExpiryFuturesMarketInfoRequest>): QueryExpiryFuturesMarketInfoRequest {
    const message = createBaseQueryExpiryFuturesMarketInfoRequest();
    message.marketId = object.marketId ?? "";
    return message;
  }
};
function createBaseQueryExpiryFuturesMarketInfoResponse(): QueryExpiryFuturesMarketInfoResponse {
  return {
    info: undefined
  };
}
export const QueryExpiryFuturesMarketInfoResponse = {
  encode(message: QueryExpiryFuturesMarketInfoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.info !== undefined) {
      ExpiryFuturesMarketInfo.encode(message.info, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryExpiryFuturesMarketInfoResponse {
    return {
      info: isSet(object.info) ? ExpiryFuturesMarketInfo.fromJSON(object.info) : undefined
    };
  },
  fromPartial(object: Partial<QueryExpiryFuturesMarketInfoResponse>): QueryExpiryFuturesMarketInfoResponse {
    const message = createBaseQueryExpiryFuturesMarketInfoResponse();
    message.info = object.info !== undefined && object.info !== null ? ExpiryFuturesMarketInfo.fromPartial(object.info) : undefined;
    return message;
  }
};
function createBaseQueryPerpetualMarketFundingRequest(): QueryPerpetualMarketFundingRequest {
  return {
    marketId: ""
  };
}
export const QueryPerpetualMarketFundingRequest = {
  encode(message: QueryPerpetualMarketFundingRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    return writer;
  },
  fromJSON(object: any): QueryPerpetualMarketFundingRequest {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : ""
    };
  },
  fromPartial(object: Partial<QueryPerpetualMarketFundingRequest>): QueryPerpetualMarketFundingRequest {
    const message = createBaseQueryPerpetualMarketFundingRequest();
    message.marketId = object.marketId ?? "";
    return message;
  }
};
function createBaseQueryPerpetualMarketFundingResponse(): QueryPerpetualMarketFundingResponse {
  return {
    state: undefined
  };
}
export const QueryPerpetualMarketFundingResponse = {
  encode(message: QueryPerpetualMarketFundingResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.state !== undefined) {
      PerpetualMarketFunding.encode(message.state, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryPerpetualMarketFundingResponse {
    return {
      state: isSet(object.state) ? PerpetualMarketFunding.fromJSON(object.state) : undefined
    };
  },
  fromPartial(object: Partial<QueryPerpetualMarketFundingResponse>): QueryPerpetualMarketFundingResponse {
    const message = createBaseQueryPerpetualMarketFundingResponse();
    message.state = object.state !== undefined && object.state !== null ? PerpetualMarketFunding.fromPartial(object.state) : undefined;
    return message;
  }
};
function createBaseQuerySubaccountOrderMetadataResponse(): QuerySubaccountOrderMetadataResponse {
  return {
    metadata: []
  };
}
export const QuerySubaccountOrderMetadataResponse = {
  encode(message: QuerySubaccountOrderMetadataResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.metadata) {
      SubaccountOrderbookMetadataWithMarket.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QuerySubaccountOrderMetadataResponse {
    return {
      metadata: Array.isArray(object?.metadata) ? object.metadata.map((e: any) => SubaccountOrderbookMetadataWithMarket.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QuerySubaccountOrderMetadataResponse>): QuerySubaccountOrderMetadataResponse {
    const message = createBaseQuerySubaccountOrderMetadataResponse();
    message.metadata = object.metadata?.map(e => SubaccountOrderbookMetadataWithMarket.fromPartial(e)) || [];
    return message;
  }
};
function createBaseQuerySubaccountTradeNonceResponse(): QuerySubaccountTradeNonceResponse {
  return {
    nonce: 0
  };
}
export const QuerySubaccountTradeNonceResponse = {
  encode(message: QuerySubaccountTradeNonceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nonce !== 0) {
      writer.uint32(8).uint32(message.nonce);
    }
    return writer;
  },
  fromJSON(object: any): QuerySubaccountTradeNonceResponse {
    return {
      nonce: isSet(object.nonce) ? Number(object.nonce) : 0
    };
  },
  fromPartial(object: Partial<QuerySubaccountTradeNonceResponse>): QuerySubaccountTradeNonceResponse {
    const message = createBaseQuerySubaccountTradeNonceResponse();
    message.nonce = object.nonce ?? 0;
    return message;
  }
};
function createBaseQueryModuleStateRequest(): QueryModuleStateRequest {
  return {};
}
export const QueryModuleStateRequest = {
  encode(_: QueryModuleStateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): QueryModuleStateRequest {
    return {};
  },
  fromPartial(_: Partial<QueryModuleStateRequest>): QueryModuleStateRequest {
    const message = createBaseQueryModuleStateRequest();
    return message;
  }
};
function createBaseQueryModuleStateResponse(): QueryModuleStateResponse {
  return {
    state: undefined
  };
}
export const QueryModuleStateResponse = {
  encode(message: QueryModuleStateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.state !== undefined) {
      GenesisState.encode(message.state, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryModuleStateResponse {
    return {
      state: isSet(object.state) ? GenesisState.fromJSON(object.state) : undefined
    };
  },
  fromPartial(object: Partial<QueryModuleStateResponse>): QueryModuleStateResponse {
    const message = createBaseQueryModuleStateResponse();
    message.state = object.state !== undefined && object.state !== null ? GenesisState.fromPartial(object.state) : undefined;
    return message;
  }
};
function createBaseQueryPositionsRequest(): QueryPositionsRequest {
  return {};
}
export const QueryPositionsRequest = {
  encode(_: QueryPositionsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): QueryPositionsRequest {
    return {};
  },
  fromPartial(_: Partial<QueryPositionsRequest>): QueryPositionsRequest {
    const message = createBaseQueryPositionsRequest();
    return message;
  }
};
function createBaseQueryPositionsResponse(): QueryPositionsResponse {
  return {
    state: []
  };
}
export const QueryPositionsResponse = {
  encode(message: QueryPositionsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.state) {
      DerivativePosition.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryPositionsResponse {
    return {
      state: Array.isArray(object?.state) ? object.state.map((e: any) => DerivativePosition.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryPositionsResponse>): QueryPositionsResponse {
    const message = createBaseQueryPositionsResponse();
    message.state = object.state?.map(e => DerivativePosition.fromPartial(e)) || [];
    return message;
  }
};
function createBaseQueryTradeRewardPointsRequest(): QueryTradeRewardPointsRequest {
  return {
    accounts: [],
    pendingPoolTimestamp: Long.ZERO
  };
}
export const QueryTradeRewardPointsRequest = {
  encode(message: QueryTradeRewardPointsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.accounts) {
      writer.uint32(10).string(v!);
    }
    if (!message.pendingPoolTimestamp.isZero()) {
      writer.uint32(16).int64(message.pendingPoolTimestamp);
    }
    return writer;
  },
  fromJSON(object: any): QueryTradeRewardPointsRequest {
    return {
      accounts: Array.isArray(object?.accounts) ? object.accounts.map((e: any) => String(e)) : [],
      pendingPoolTimestamp: isSet(object.pendingPoolTimestamp) ? Long.fromValue(object.pendingPoolTimestamp) : Long.ZERO
    };
  },
  fromPartial(object: Partial<QueryTradeRewardPointsRequest>): QueryTradeRewardPointsRequest {
    const message = createBaseQueryTradeRewardPointsRequest();
    message.accounts = object.accounts?.map(e => e) || [];
    message.pendingPoolTimestamp = object.pendingPoolTimestamp !== undefined && object.pendingPoolTimestamp !== null ? Long.fromValue(object.pendingPoolTimestamp) : Long.ZERO;
    return message;
  }
};
function createBaseQueryTradeRewardPointsResponse(): QueryTradeRewardPointsResponse {
  return {
    accountTradeRewardPoints: []
  };
}
export const QueryTradeRewardPointsResponse = {
  encode(message: QueryTradeRewardPointsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.accountTradeRewardPoints) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  fromJSON(object: any): QueryTradeRewardPointsResponse {
    return {
      accountTradeRewardPoints: Array.isArray(object?.accountTradeRewardPoints) ? object.accountTradeRewardPoints.map((e: any) => String(e)) : []
    };
  },
  fromPartial(object: Partial<QueryTradeRewardPointsResponse>): QueryTradeRewardPointsResponse {
    const message = createBaseQueryTradeRewardPointsResponse();
    message.accountTradeRewardPoints = object.accountTradeRewardPoints?.map(e => e) || [];
    return message;
  }
};
function createBaseQueryTradeRewardCampaignRequest(): QueryTradeRewardCampaignRequest {
  return {};
}
export const QueryTradeRewardCampaignRequest = {
  encode(_: QueryTradeRewardCampaignRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): QueryTradeRewardCampaignRequest {
    return {};
  },
  fromPartial(_: Partial<QueryTradeRewardCampaignRequest>): QueryTradeRewardCampaignRequest {
    const message = createBaseQueryTradeRewardCampaignRequest();
    return message;
  }
};
function createBaseQueryTradeRewardCampaignResponse(): QueryTradeRewardCampaignResponse {
  return {
    tradingRewardCampaignInfo: undefined,
    tradingRewardPoolCampaignSchedule: [],
    totalTradeRewardPoints: "",
    pendingTradingRewardPoolCampaignSchedule: [],
    pendingTotalTradeRewardPoints: []
  };
}
export const QueryTradeRewardCampaignResponse = {
  encode(message: QueryTradeRewardCampaignResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tradingRewardCampaignInfo !== undefined) {
      TradingRewardCampaignInfo.encode(message.tradingRewardCampaignInfo, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.tradingRewardPoolCampaignSchedule) {
      CampaignRewardPool.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.totalTradeRewardPoints !== "") {
      writer.uint32(26).string(message.totalTradeRewardPoints);
    }
    for (const v of message.pendingTradingRewardPoolCampaignSchedule) {
      CampaignRewardPool.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.pendingTotalTradeRewardPoints) {
      writer.uint32(42).string(v!);
    }
    return writer;
  },
  fromJSON(object: any): QueryTradeRewardCampaignResponse {
    return {
      tradingRewardCampaignInfo: isSet(object.tradingRewardCampaignInfo) ? TradingRewardCampaignInfo.fromJSON(object.tradingRewardCampaignInfo) : undefined,
      tradingRewardPoolCampaignSchedule: Array.isArray(object?.tradingRewardPoolCampaignSchedule) ? object.tradingRewardPoolCampaignSchedule.map((e: any) => CampaignRewardPool.fromJSON(e)) : [],
      totalTradeRewardPoints: isSet(object.totalTradeRewardPoints) ? String(object.totalTradeRewardPoints) : "",
      pendingTradingRewardPoolCampaignSchedule: Array.isArray(object?.pendingTradingRewardPoolCampaignSchedule) ? object.pendingTradingRewardPoolCampaignSchedule.map((e: any) => CampaignRewardPool.fromJSON(e)) : [],
      pendingTotalTradeRewardPoints: Array.isArray(object?.pendingTotalTradeRewardPoints) ? object.pendingTotalTradeRewardPoints.map((e: any) => String(e)) : []
    };
  },
  fromPartial(object: Partial<QueryTradeRewardCampaignResponse>): QueryTradeRewardCampaignResponse {
    const message = createBaseQueryTradeRewardCampaignResponse();
    message.tradingRewardCampaignInfo = object.tradingRewardCampaignInfo !== undefined && object.tradingRewardCampaignInfo !== null ? TradingRewardCampaignInfo.fromPartial(object.tradingRewardCampaignInfo) : undefined;
    message.tradingRewardPoolCampaignSchedule = object.tradingRewardPoolCampaignSchedule?.map(e => CampaignRewardPool.fromPartial(e)) || [];
    message.totalTradeRewardPoints = object.totalTradeRewardPoints ?? "";
    message.pendingTradingRewardPoolCampaignSchedule = object.pendingTradingRewardPoolCampaignSchedule?.map(e => CampaignRewardPool.fromPartial(e)) || [];
    message.pendingTotalTradeRewardPoints = object.pendingTotalTradeRewardPoints?.map(e => e) || [];
    return message;
  }
};
function createBaseQueryIsOptedOutOfRewardsRequest(): QueryIsOptedOutOfRewardsRequest {
  return {
    account: ""
  };
}
export const QueryIsOptedOutOfRewardsRequest = {
  encode(message: QueryIsOptedOutOfRewardsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.account !== "") {
      writer.uint32(10).string(message.account);
    }
    return writer;
  },
  fromJSON(object: any): QueryIsOptedOutOfRewardsRequest {
    return {
      account: isSet(object.account) ? String(object.account) : ""
    };
  },
  fromPartial(object: Partial<QueryIsOptedOutOfRewardsRequest>): QueryIsOptedOutOfRewardsRequest {
    const message = createBaseQueryIsOptedOutOfRewardsRequest();
    message.account = object.account ?? "";
    return message;
  }
};
function createBaseQueryIsOptedOutOfRewardsResponse(): QueryIsOptedOutOfRewardsResponse {
  return {
    isOptedOut: false
  };
}
export const QueryIsOptedOutOfRewardsResponse = {
  encode(message: QueryIsOptedOutOfRewardsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.isOptedOut === true) {
      writer.uint32(8).bool(message.isOptedOut);
    }
    return writer;
  },
  fromJSON(object: any): QueryIsOptedOutOfRewardsResponse {
    return {
      isOptedOut: isSet(object.isOptedOut) ? Boolean(object.isOptedOut) : false
    };
  },
  fromPartial(object: Partial<QueryIsOptedOutOfRewardsResponse>): QueryIsOptedOutOfRewardsResponse {
    const message = createBaseQueryIsOptedOutOfRewardsResponse();
    message.isOptedOut = object.isOptedOut ?? false;
    return message;
  }
};
function createBaseQueryOptedOutOfRewardsAccountsRequest(): QueryOptedOutOfRewardsAccountsRequest {
  return {};
}
export const QueryOptedOutOfRewardsAccountsRequest = {
  encode(_: QueryOptedOutOfRewardsAccountsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): QueryOptedOutOfRewardsAccountsRequest {
    return {};
  },
  fromPartial(_: Partial<QueryOptedOutOfRewardsAccountsRequest>): QueryOptedOutOfRewardsAccountsRequest {
    const message = createBaseQueryOptedOutOfRewardsAccountsRequest();
    return message;
  }
};
function createBaseQueryOptedOutOfRewardsAccountsResponse(): QueryOptedOutOfRewardsAccountsResponse {
  return {
    accounts: []
  };
}
export const QueryOptedOutOfRewardsAccountsResponse = {
  encode(message: QueryOptedOutOfRewardsAccountsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.accounts) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  fromJSON(object: any): QueryOptedOutOfRewardsAccountsResponse {
    return {
      accounts: Array.isArray(object?.accounts) ? object.accounts.map((e: any) => String(e)) : []
    };
  },
  fromPartial(object: Partial<QueryOptedOutOfRewardsAccountsResponse>): QueryOptedOutOfRewardsAccountsResponse {
    const message = createBaseQueryOptedOutOfRewardsAccountsResponse();
    message.accounts = object.accounts?.map(e => e) || [];
    return message;
  }
};
function createBaseQueryFeeDiscountAccountInfoRequest(): QueryFeeDiscountAccountInfoRequest {
  return {
    account: ""
  };
}
export const QueryFeeDiscountAccountInfoRequest = {
  encode(message: QueryFeeDiscountAccountInfoRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.account !== "") {
      writer.uint32(10).string(message.account);
    }
    return writer;
  },
  fromJSON(object: any): QueryFeeDiscountAccountInfoRequest {
    return {
      account: isSet(object.account) ? String(object.account) : ""
    };
  },
  fromPartial(object: Partial<QueryFeeDiscountAccountInfoRequest>): QueryFeeDiscountAccountInfoRequest {
    const message = createBaseQueryFeeDiscountAccountInfoRequest();
    message.account = object.account ?? "";
    return message;
  }
};
function createBaseQueryFeeDiscountAccountInfoResponse(): QueryFeeDiscountAccountInfoResponse {
  return {
    tierLevel: Long.UZERO,
    accountInfo: undefined,
    accountTtl: undefined
  };
}
export const QueryFeeDiscountAccountInfoResponse = {
  encode(message: QueryFeeDiscountAccountInfoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.tierLevel.isZero()) {
      writer.uint32(8).uint64(message.tierLevel);
    }
    if (message.accountInfo !== undefined) {
      FeeDiscountTierInfo.encode(message.accountInfo, writer.uint32(18).fork()).ldelim();
    }
    if (message.accountTtl !== undefined) {
      FeeDiscountTierTTL.encode(message.accountTtl, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryFeeDiscountAccountInfoResponse {
    return {
      tierLevel: isSet(object.tierLevel) ? Long.fromValue(object.tierLevel) : Long.UZERO,
      accountInfo: isSet(object.accountInfo) ? FeeDiscountTierInfo.fromJSON(object.accountInfo) : undefined,
      accountTtl: isSet(object.accountTtl) ? FeeDiscountTierTTL.fromJSON(object.accountTtl) : undefined
    };
  },
  fromPartial(object: Partial<QueryFeeDiscountAccountInfoResponse>): QueryFeeDiscountAccountInfoResponse {
    const message = createBaseQueryFeeDiscountAccountInfoResponse();
    message.tierLevel = object.tierLevel !== undefined && object.tierLevel !== null ? Long.fromValue(object.tierLevel) : Long.UZERO;
    message.accountInfo = object.accountInfo !== undefined && object.accountInfo !== null ? FeeDiscountTierInfo.fromPartial(object.accountInfo) : undefined;
    message.accountTtl = object.accountTtl !== undefined && object.accountTtl !== null ? FeeDiscountTierTTL.fromPartial(object.accountTtl) : undefined;
    return message;
  }
};
function createBaseQueryFeeDiscountScheduleRequest(): QueryFeeDiscountScheduleRequest {
  return {};
}
export const QueryFeeDiscountScheduleRequest = {
  encode(_: QueryFeeDiscountScheduleRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): QueryFeeDiscountScheduleRequest {
    return {};
  },
  fromPartial(_: Partial<QueryFeeDiscountScheduleRequest>): QueryFeeDiscountScheduleRequest {
    const message = createBaseQueryFeeDiscountScheduleRequest();
    return message;
  }
};
function createBaseQueryFeeDiscountScheduleResponse(): QueryFeeDiscountScheduleResponse {
  return {
    feeDiscountSchedule: undefined
  };
}
export const QueryFeeDiscountScheduleResponse = {
  encode(message: QueryFeeDiscountScheduleResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.feeDiscountSchedule !== undefined) {
      FeeDiscountSchedule.encode(message.feeDiscountSchedule, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryFeeDiscountScheduleResponse {
    return {
      feeDiscountSchedule: isSet(object.feeDiscountSchedule) ? FeeDiscountSchedule.fromJSON(object.feeDiscountSchedule) : undefined
    };
  },
  fromPartial(object: Partial<QueryFeeDiscountScheduleResponse>): QueryFeeDiscountScheduleResponse {
    const message = createBaseQueryFeeDiscountScheduleResponse();
    message.feeDiscountSchedule = object.feeDiscountSchedule !== undefined && object.feeDiscountSchedule !== null ? FeeDiscountSchedule.fromPartial(object.feeDiscountSchedule) : undefined;
    return message;
  }
};
function createBaseQueryBalanceMismatchesRequest(): QueryBalanceMismatchesRequest {
  return {
    dustFactor: Long.ZERO
  };
}
export const QueryBalanceMismatchesRequest = {
  encode(message: QueryBalanceMismatchesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.dustFactor.isZero()) {
      writer.uint32(8).int64(message.dustFactor);
    }
    return writer;
  },
  fromJSON(object: any): QueryBalanceMismatchesRequest {
    return {
      dustFactor: isSet(object.dustFactor) ? Long.fromValue(object.dustFactor) : Long.ZERO
    };
  },
  fromPartial(object: Partial<QueryBalanceMismatchesRequest>): QueryBalanceMismatchesRequest {
    const message = createBaseQueryBalanceMismatchesRequest();
    message.dustFactor = object.dustFactor !== undefined && object.dustFactor !== null ? Long.fromValue(object.dustFactor) : Long.ZERO;
    return message;
  }
};
function createBaseBalanceMismatch(): BalanceMismatch {
  return {
    subaccountId: "",
    denom: "",
    available: "",
    total: "",
    balanceHold: "",
    expectedTotal: "",
    difference: ""
  };
}
export const BalanceMismatch = {
  encode(message: BalanceMismatch, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.subaccountId !== "") {
      writer.uint32(10).string(message.subaccountId);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.available !== "") {
      writer.uint32(26).string(message.available);
    }
    if (message.total !== "") {
      writer.uint32(34).string(message.total);
    }
    if (message.balanceHold !== "") {
      writer.uint32(42).string(message.balanceHold);
    }
    if (message.expectedTotal !== "") {
      writer.uint32(50).string(message.expectedTotal);
    }
    if (message.difference !== "") {
      writer.uint32(58).string(message.difference);
    }
    return writer;
  },
  fromJSON(object: any): BalanceMismatch {
    return {
      subaccountId: isSet(object.subaccountId) ? String(object.subaccountId) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
      available: isSet(object.available) ? String(object.available) : "",
      total: isSet(object.total) ? String(object.total) : "",
      balanceHold: isSet(object.balanceHold) ? String(object.balanceHold) : "",
      expectedTotal: isSet(object.expectedTotal) ? String(object.expectedTotal) : "",
      difference: isSet(object.difference) ? String(object.difference) : ""
    };
  },
  fromPartial(object: Partial<BalanceMismatch>): BalanceMismatch {
    const message = createBaseBalanceMismatch();
    message.subaccountId = object.subaccountId ?? "";
    message.denom = object.denom ?? "";
    message.available = object.available ?? "";
    message.total = object.total ?? "";
    message.balanceHold = object.balanceHold ?? "";
    message.expectedTotal = object.expectedTotal ?? "";
    message.difference = object.difference ?? "";
    return message;
  }
};
function createBaseQueryBalanceMismatchesResponse(): QueryBalanceMismatchesResponse {
  return {
    balanceMismatches: []
  };
}
export const QueryBalanceMismatchesResponse = {
  encode(message: QueryBalanceMismatchesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.balanceMismatches) {
      BalanceMismatch.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryBalanceMismatchesResponse {
    return {
      balanceMismatches: Array.isArray(object?.balanceMismatches) ? object.balanceMismatches.map((e: any) => BalanceMismatch.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryBalanceMismatchesResponse>): QueryBalanceMismatchesResponse {
    const message = createBaseQueryBalanceMismatchesResponse();
    message.balanceMismatches = object.balanceMismatches?.map(e => BalanceMismatch.fromPartial(e)) || [];
    return message;
  }
};
function createBaseQueryBalanceWithBalanceHoldsRequest(): QueryBalanceWithBalanceHoldsRequest {
  return {};
}
export const QueryBalanceWithBalanceHoldsRequest = {
  encode(_: QueryBalanceWithBalanceHoldsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): QueryBalanceWithBalanceHoldsRequest {
    return {};
  },
  fromPartial(_: Partial<QueryBalanceWithBalanceHoldsRequest>): QueryBalanceWithBalanceHoldsRequest {
    const message = createBaseQueryBalanceWithBalanceHoldsRequest();
    return message;
  }
};
function createBaseBalanceWithMarginHold(): BalanceWithMarginHold {
  return {
    subaccountId: "",
    denom: "",
    available: "",
    total: "",
    balanceHold: ""
  };
}
export const BalanceWithMarginHold = {
  encode(message: BalanceWithMarginHold, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.subaccountId !== "") {
      writer.uint32(10).string(message.subaccountId);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.available !== "") {
      writer.uint32(26).string(message.available);
    }
    if (message.total !== "") {
      writer.uint32(34).string(message.total);
    }
    if (message.balanceHold !== "") {
      writer.uint32(42).string(message.balanceHold);
    }
    return writer;
  },
  fromJSON(object: any): BalanceWithMarginHold {
    return {
      subaccountId: isSet(object.subaccountId) ? String(object.subaccountId) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
      available: isSet(object.available) ? String(object.available) : "",
      total: isSet(object.total) ? String(object.total) : "",
      balanceHold: isSet(object.balanceHold) ? String(object.balanceHold) : ""
    };
  },
  fromPartial(object: Partial<BalanceWithMarginHold>): BalanceWithMarginHold {
    const message = createBaseBalanceWithMarginHold();
    message.subaccountId = object.subaccountId ?? "";
    message.denom = object.denom ?? "";
    message.available = object.available ?? "";
    message.total = object.total ?? "";
    message.balanceHold = object.balanceHold ?? "";
    return message;
  }
};
function createBaseQueryBalanceWithBalanceHoldsResponse(): QueryBalanceWithBalanceHoldsResponse {
  return {
    balanceWithBalanceHolds: []
  };
}
export const QueryBalanceWithBalanceHoldsResponse = {
  encode(message: QueryBalanceWithBalanceHoldsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.balanceWithBalanceHolds) {
      BalanceWithMarginHold.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryBalanceWithBalanceHoldsResponse {
    return {
      balanceWithBalanceHolds: Array.isArray(object?.balanceWithBalanceHolds) ? object.balanceWithBalanceHolds.map((e: any) => BalanceWithMarginHold.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryBalanceWithBalanceHoldsResponse>): QueryBalanceWithBalanceHoldsResponse {
    const message = createBaseQueryBalanceWithBalanceHoldsResponse();
    message.balanceWithBalanceHolds = object.balanceWithBalanceHolds?.map(e => BalanceWithMarginHold.fromPartial(e)) || [];
    return message;
  }
};
function createBaseQueryFeeDiscountTierStatisticsRequest(): QueryFeeDiscountTierStatisticsRequest {
  return {};
}
export const QueryFeeDiscountTierStatisticsRequest = {
  encode(_: QueryFeeDiscountTierStatisticsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): QueryFeeDiscountTierStatisticsRequest {
    return {};
  },
  fromPartial(_: Partial<QueryFeeDiscountTierStatisticsRequest>): QueryFeeDiscountTierStatisticsRequest {
    const message = createBaseQueryFeeDiscountTierStatisticsRequest();
    return message;
  }
};
function createBaseTierStatistic(): TierStatistic {
  return {
    tier: Long.UZERO,
    count: Long.UZERO
  };
}
export const TierStatistic = {
  encode(message: TierStatistic, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.tier.isZero()) {
      writer.uint32(8).uint64(message.tier);
    }
    if (!message.count.isZero()) {
      writer.uint32(16).uint64(message.count);
    }
    return writer;
  },
  fromJSON(object: any): TierStatistic {
    return {
      tier: isSet(object.tier) ? Long.fromValue(object.tier) : Long.UZERO,
      count: isSet(object.count) ? Long.fromValue(object.count) : Long.UZERO
    };
  },
  fromPartial(object: Partial<TierStatistic>): TierStatistic {
    const message = createBaseTierStatistic();
    message.tier = object.tier !== undefined && object.tier !== null ? Long.fromValue(object.tier) : Long.UZERO;
    message.count = object.count !== undefined && object.count !== null ? Long.fromValue(object.count) : Long.UZERO;
    return message;
  }
};
function createBaseQueryFeeDiscountTierStatisticsResponse(): QueryFeeDiscountTierStatisticsResponse {
  return {
    statistics: []
  };
}
export const QueryFeeDiscountTierStatisticsResponse = {
  encode(message: QueryFeeDiscountTierStatisticsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.statistics) {
      TierStatistic.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryFeeDiscountTierStatisticsResponse {
    return {
      statistics: Array.isArray(object?.statistics) ? object.statistics.map((e: any) => TierStatistic.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryFeeDiscountTierStatisticsResponse>): QueryFeeDiscountTierStatisticsResponse {
    const message = createBaseQueryFeeDiscountTierStatisticsResponse();
    message.statistics = object.statistics?.map(e => TierStatistic.fromPartial(e)) || [];
    return message;
  }
};
function createBaseMitoVaultInfosRequest(): MitoVaultInfosRequest {
  return {};
}
export const MitoVaultInfosRequest = {
  encode(_: MitoVaultInfosRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MitoVaultInfosRequest {
    return {};
  },
  fromPartial(_: Partial<MitoVaultInfosRequest>): MitoVaultInfosRequest {
    const message = createBaseMitoVaultInfosRequest();
    return message;
  }
};
function createBaseMitoVaultInfosResponse(): MitoVaultInfosResponse {
  return {
    masterAddresses: [],
    derivativeAddresses: [],
    spotAddresses: [],
    cw20Addresses: []
  };
}
export const MitoVaultInfosResponse = {
  encode(message: MitoVaultInfosResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.masterAddresses) {
      writer.uint32(10).string(v!);
    }
    for (const v of message.derivativeAddresses) {
      writer.uint32(18).string(v!);
    }
    for (const v of message.spotAddresses) {
      writer.uint32(26).string(v!);
    }
    for (const v of message.cw20Addresses) {
      writer.uint32(34).string(v!);
    }
    return writer;
  },
  fromJSON(object: any): MitoVaultInfosResponse {
    return {
      masterAddresses: Array.isArray(object?.masterAddresses) ? object.masterAddresses.map((e: any) => String(e)) : [],
      derivativeAddresses: Array.isArray(object?.derivativeAddresses) ? object.derivativeAddresses.map((e: any) => String(e)) : [],
      spotAddresses: Array.isArray(object?.spotAddresses) ? object.spotAddresses.map((e: any) => String(e)) : [],
      cw20Addresses: Array.isArray(object?.cw20Addresses) ? object.cw20Addresses.map((e: any) => String(e)) : []
    };
  },
  fromPartial(object: Partial<MitoVaultInfosResponse>): MitoVaultInfosResponse {
    const message = createBaseMitoVaultInfosResponse();
    message.masterAddresses = object.masterAddresses?.map(e => e) || [];
    message.derivativeAddresses = object.derivativeAddresses?.map(e => e) || [];
    message.spotAddresses = object.spotAddresses?.map(e => e) || [];
    message.cw20Addresses = object.cw20Addresses?.map(e => e) || [];
    return message;
  }
};
function createBaseQueryMarketIDFromVaultRequest(): QueryMarketIDFromVaultRequest {
  return {
    vaultAddress: ""
  };
}
export const QueryMarketIDFromVaultRequest = {
  encode(message: QueryMarketIDFromVaultRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.vaultAddress !== "") {
      writer.uint32(10).string(message.vaultAddress);
    }
    return writer;
  },
  fromJSON(object: any): QueryMarketIDFromVaultRequest {
    return {
      vaultAddress: isSet(object.vaultAddress) ? String(object.vaultAddress) : ""
    };
  },
  fromPartial(object: Partial<QueryMarketIDFromVaultRequest>): QueryMarketIDFromVaultRequest {
    const message = createBaseQueryMarketIDFromVaultRequest();
    message.vaultAddress = object.vaultAddress ?? "";
    return message;
  }
};
function createBaseQueryMarketIDFromVaultResponse(): QueryMarketIDFromVaultResponse {
  return {
    marketId: ""
  };
}
export const QueryMarketIDFromVaultResponse = {
  encode(message: QueryMarketIDFromVaultResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    return writer;
  },
  fromJSON(object: any): QueryMarketIDFromVaultResponse {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : ""
    };
  },
  fromPartial(object: Partial<QueryMarketIDFromVaultResponse>): QueryMarketIDFromVaultResponse {
    const message = createBaseQueryMarketIDFromVaultResponse();
    message.marketId = object.marketId ?? "";
    return message;
  }
};
function createBaseQueryHistoricalTradeRecordsRequest(): QueryHistoricalTradeRecordsRequest {
  return {
    marketId: ""
  };
}
export const QueryHistoricalTradeRecordsRequest = {
  encode(message: QueryHistoricalTradeRecordsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    return writer;
  },
  fromJSON(object: any): QueryHistoricalTradeRecordsRequest {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : ""
    };
  },
  fromPartial(object: Partial<QueryHistoricalTradeRecordsRequest>): QueryHistoricalTradeRecordsRequest {
    const message = createBaseQueryHistoricalTradeRecordsRequest();
    message.marketId = object.marketId ?? "";
    return message;
  }
};
function createBaseQueryHistoricalTradeRecordsResponse(): QueryHistoricalTradeRecordsResponse {
  return {
    tradeRecords: []
  };
}
export const QueryHistoricalTradeRecordsResponse = {
  encode(message: QueryHistoricalTradeRecordsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.tradeRecords) {
      TradeRecords.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryHistoricalTradeRecordsResponse {
    return {
      tradeRecords: Array.isArray(object?.tradeRecords) ? object.tradeRecords.map((e: any) => TradeRecords.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryHistoricalTradeRecordsResponse>): QueryHistoricalTradeRecordsResponse {
    const message = createBaseQueryHistoricalTradeRecordsResponse();
    message.tradeRecords = object.tradeRecords?.map(e => TradeRecords.fromPartial(e)) || [];
    return message;
  }
};
function createBaseTradeHistoryOptions(): TradeHistoryOptions {
  return {
    tradeGroupingSec: Long.UZERO,
    maxAge: Long.UZERO,
    includeRawHistory: false,
    includeMetadata: false
  };
}
export const TradeHistoryOptions = {
  encode(message: TradeHistoryOptions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.tradeGroupingSec.isZero()) {
      writer.uint32(8).uint64(message.tradeGroupingSec);
    }
    if (!message.maxAge.isZero()) {
      writer.uint32(16).uint64(message.maxAge);
    }
    if (message.includeRawHistory === true) {
      writer.uint32(32).bool(message.includeRawHistory);
    }
    if (message.includeMetadata === true) {
      writer.uint32(40).bool(message.includeMetadata);
    }
    return writer;
  },
  fromJSON(object: any): TradeHistoryOptions {
    return {
      tradeGroupingSec: isSet(object.tradeGroupingSec) ? Long.fromValue(object.tradeGroupingSec) : Long.UZERO,
      maxAge: isSet(object.maxAge) ? Long.fromValue(object.maxAge) : Long.UZERO,
      includeRawHistory: isSet(object.includeRawHistory) ? Boolean(object.includeRawHistory) : false,
      includeMetadata: isSet(object.includeMetadata) ? Boolean(object.includeMetadata) : false
    };
  },
  fromPartial(object: Partial<TradeHistoryOptions>): TradeHistoryOptions {
    const message = createBaseTradeHistoryOptions();
    message.tradeGroupingSec = object.tradeGroupingSec !== undefined && object.tradeGroupingSec !== null ? Long.fromValue(object.tradeGroupingSec) : Long.UZERO;
    message.maxAge = object.maxAge !== undefined && object.maxAge !== null ? Long.fromValue(object.maxAge) : Long.UZERO;
    message.includeRawHistory = object.includeRawHistory ?? false;
    message.includeMetadata = object.includeMetadata ?? false;
    return message;
  }
};
function createBaseQueryMarketVolatilityRequest(): QueryMarketVolatilityRequest {
  return {
    marketId: "",
    tradeHistoryOptions: undefined
  };
}
export const QueryMarketVolatilityRequest = {
  encode(message: QueryMarketVolatilityRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    if (message.tradeHistoryOptions !== undefined) {
      TradeHistoryOptions.encode(message.tradeHistoryOptions, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryMarketVolatilityRequest {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      tradeHistoryOptions: isSet(object.tradeHistoryOptions) ? TradeHistoryOptions.fromJSON(object.tradeHistoryOptions) : undefined
    };
  },
  fromPartial(object: Partial<QueryMarketVolatilityRequest>): QueryMarketVolatilityRequest {
    const message = createBaseQueryMarketVolatilityRequest();
    message.marketId = object.marketId ?? "";
    message.tradeHistoryOptions = object.tradeHistoryOptions !== undefined && object.tradeHistoryOptions !== null ? TradeHistoryOptions.fromPartial(object.tradeHistoryOptions) : undefined;
    return message;
  }
};
function createBaseQueryMarketVolatilityResponse(): QueryMarketVolatilityResponse {
  return {
    volatility: "",
    historyMetadata: undefined,
    rawHistory: []
  };
}
export const QueryMarketVolatilityResponse = {
  encode(message: QueryMarketVolatilityResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.volatility !== "") {
      writer.uint32(10).string(message.volatility);
    }
    if (message.historyMetadata !== undefined) {
      MetadataStatistics.encode(message.historyMetadata, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.rawHistory) {
      TradeRecord.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryMarketVolatilityResponse {
    return {
      volatility: isSet(object.volatility) ? String(object.volatility) : "",
      historyMetadata: isSet(object.historyMetadata) ? MetadataStatistics.fromJSON(object.historyMetadata) : undefined,
      rawHistory: Array.isArray(object?.rawHistory) ? object.rawHistory.map((e: any) => TradeRecord.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryMarketVolatilityResponse>): QueryMarketVolatilityResponse {
    const message = createBaseQueryMarketVolatilityResponse();
    message.volatility = object.volatility ?? "";
    message.historyMetadata = object.historyMetadata !== undefined && object.historyMetadata !== null ? MetadataStatistics.fromPartial(object.historyMetadata) : undefined;
    message.rawHistory = object.rawHistory?.map(e => TradeRecord.fromPartial(e)) || [];
    return message;
  }
};
function createBaseQueryBinaryMarketsRequest(): QueryBinaryMarketsRequest {
  return {
    status: ""
  };
}
export const QueryBinaryMarketsRequest = {
  encode(message: QueryBinaryMarketsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.status !== "") {
      writer.uint32(10).string(message.status);
    }
    return writer;
  },
  fromJSON(object: any): QueryBinaryMarketsRequest {
    return {
      status: isSet(object.status) ? String(object.status) : ""
    };
  },
  fromPartial(object: Partial<QueryBinaryMarketsRequest>): QueryBinaryMarketsRequest {
    const message = createBaseQueryBinaryMarketsRequest();
    message.status = object.status ?? "";
    return message;
  }
};
function createBaseQueryBinaryMarketsResponse(): QueryBinaryMarketsResponse {
  return {
    markets: []
  };
}
export const QueryBinaryMarketsResponse = {
  encode(message: QueryBinaryMarketsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.markets) {
      BinaryOptionsMarket.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryBinaryMarketsResponse {
    return {
      markets: Array.isArray(object?.markets) ? object.markets.map((e: any) => BinaryOptionsMarket.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryBinaryMarketsResponse>): QueryBinaryMarketsResponse {
    const message = createBaseQueryBinaryMarketsResponse();
    message.markets = object.markets?.map(e => BinaryOptionsMarket.fromPartial(e)) || [];
    return message;
  }
};
function createBaseQueryTraderDerivativeConditionalOrdersRequest(): QueryTraderDerivativeConditionalOrdersRequest {
  return {
    subaccountId: "",
    marketId: ""
  };
}
export const QueryTraderDerivativeConditionalOrdersRequest = {
  encode(message: QueryTraderDerivativeConditionalOrdersRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.subaccountId !== "") {
      writer.uint32(10).string(message.subaccountId);
    }
    if (message.marketId !== "") {
      writer.uint32(18).string(message.marketId);
    }
    return writer;
  },
  fromJSON(object: any): QueryTraderDerivativeConditionalOrdersRequest {
    return {
      subaccountId: isSet(object.subaccountId) ? String(object.subaccountId) : "",
      marketId: isSet(object.marketId) ? String(object.marketId) : ""
    };
  },
  fromPartial(object: Partial<QueryTraderDerivativeConditionalOrdersRequest>): QueryTraderDerivativeConditionalOrdersRequest {
    const message = createBaseQueryTraderDerivativeConditionalOrdersRequest();
    message.subaccountId = object.subaccountId ?? "";
    message.marketId = object.marketId ?? "";
    return message;
  }
};
function createBaseTrimmedDerivativeConditionalOrder(): TrimmedDerivativeConditionalOrder {
  return {
    price: "",
    quantity: "",
    margin: "",
    triggerPrice: "",
    isBuy: false,
    isLimit: false,
    orderHash: ""
  };
}
export const TrimmedDerivativeConditionalOrder = {
  encode(message: TrimmedDerivativeConditionalOrder, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.price !== "") {
      writer.uint32(10).string(message.price);
    }
    if (message.quantity !== "") {
      writer.uint32(18).string(message.quantity);
    }
    if (message.margin !== "") {
      writer.uint32(26).string(message.margin);
    }
    if (message.triggerPrice !== "") {
      writer.uint32(34).string(message.triggerPrice);
    }
    if (message.isBuy === true) {
      writer.uint32(40).bool(message.isBuy);
    }
    if (message.isLimit === true) {
      writer.uint32(48).bool(message.isLimit);
    }
    if (message.orderHash !== "") {
      writer.uint32(58).string(message.orderHash);
    }
    return writer;
  },
  fromJSON(object: any): TrimmedDerivativeConditionalOrder {
    return {
      price: isSet(object.price) ? String(object.price) : "",
      quantity: isSet(object.quantity) ? String(object.quantity) : "",
      margin: isSet(object.margin) ? String(object.margin) : "",
      triggerPrice: isSet(object.triggerPrice) ? String(object.triggerPrice) : "",
      isBuy: isSet(object.isBuy) ? Boolean(object.isBuy) : false,
      isLimit: isSet(object.isLimit) ? Boolean(object.isLimit) : false,
      orderHash: isSet(object.orderHash) ? String(object.orderHash) : ""
    };
  },
  fromPartial(object: Partial<TrimmedDerivativeConditionalOrder>): TrimmedDerivativeConditionalOrder {
    const message = createBaseTrimmedDerivativeConditionalOrder();
    message.price = object.price ?? "";
    message.quantity = object.quantity ?? "";
    message.margin = object.margin ?? "";
    message.triggerPrice = object.triggerPrice ?? "";
    message.isBuy = object.isBuy ?? false;
    message.isLimit = object.isLimit ?? false;
    message.orderHash = object.orderHash ?? "";
    return message;
  }
};
function createBaseQueryTraderDerivativeConditionalOrdersResponse(): QueryTraderDerivativeConditionalOrdersResponse {
  return {
    orders: []
  };
}
export const QueryTraderDerivativeConditionalOrdersResponse = {
  encode(message: QueryTraderDerivativeConditionalOrdersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.orders) {
      TrimmedDerivativeConditionalOrder.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryTraderDerivativeConditionalOrdersResponse {
    return {
      orders: Array.isArray(object?.orders) ? object.orders.map((e: any) => TrimmedDerivativeConditionalOrder.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryTraderDerivativeConditionalOrdersResponse>): QueryTraderDerivativeConditionalOrdersResponse {
    const message = createBaseQueryTraderDerivativeConditionalOrdersResponse();
    message.orders = object.orders?.map(e => TrimmedDerivativeConditionalOrder.fromPartial(e)) || [];
    return message;
  }
};
function createBaseQueryMarketAtomicExecutionFeeMultiplierRequest(): QueryMarketAtomicExecutionFeeMultiplierRequest {
  return {
    marketId: ""
  };
}
export const QueryMarketAtomicExecutionFeeMultiplierRequest = {
  encode(message: QueryMarketAtomicExecutionFeeMultiplierRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    return writer;
  },
  fromJSON(object: any): QueryMarketAtomicExecutionFeeMultiplierRequest {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : ""
    };
  },
  fromPartial(object: Partial<QueryMarketAtomicExecutionFeeMultiplierRequest>): QueryMarketAtomicExecutionFeeMultiplierRequest {
    const message = createBaseQueryMarketAtomicExecutionFeeMultiplierRequest();
    message.marketId = object.marketId ?? "";
    return message;
  }
};
function createBaseQueryMarketAtomicExecutionFeeMultiplierResponse(): QueryMarketAtomicExecutionFeeMultiplierResponse {
  return {
    multiplier: ""
  };
}
export const QueryMarketAtomicExecutionFeeMultiplierResponse = {
  encode(message: QueryMarketAtomicExecutionFeeMultiplierResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.multiplier !== "") {
      writer.uint32(10).string(message.multiplier);
    }
    return writer;
  },
  fromJSON(object: any): QueryMarketAtomicExecutionFeeMultiplierResponse {
    return {
      multiplier: isSet(object.multiplier) ? String(object.multiplier) : ""
    };
  },
  fromPartial(object: Partial<QueryMarketAtomicExecutionFeeMultiplierResponse>): QueryMarketAtomicExecutionFeeMultiplierResponse {
    const message = createBaseQueryMarketAtomicExecutionFeeMultiplierResponse();
    message.multiplier = object.multiplier ?? "";
    return message;
  }
};