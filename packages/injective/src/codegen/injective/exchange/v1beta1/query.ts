import { SubaccountOrderData, SubaccountOrderDataAmino, SubaccountOrderDataSDKType, SubaccountOrderbookMetadata, SubaccountOrderbookMetadataAmino, SubaccountOrderbookMetadataSDKType, Params, ParamsAmino, ParamsSDKType, Deposit, DepositAmino, DepositSDKType, MarketVolume, MarketVolumeAmino, MarketVolumeSDKType, AggregateAccountVolumeRecord, AggregateAccountVolumeRecordAmino, AggregateAccountVolumeRecordSDKType, VolumeRecord, VolumeRecordAmino, VolumeRecordSDKType, DenomDecimals, DenomDecimalsAmino, DenomDecimalsSDKType, SpotMarket, SpotMarketAmino, SpotMarketSDKType, Level, LevelAmino, LevelSDKType, MidPriceAndTOB, MidPriceAndTOBAmino, MidPriceAndTOBSDKType, PerpetualMarketInfo, PerpetualMarketInfoAmino, PerpetualMarketInfoSDKType, PerpetualMarketFunding, PerpetualMarketFundingAmino, PerpetualMarketFundingSDKType, DerivativeMarket, DerivativeMarketAmino, DerivativeMarketSDKType, ExpiryFuturesMarketInfo, ExpiryFuturesMarketInfoAmino, ExpiryFuturesMarketInfoSDKType, Position, PositionAmino, PositionSDKType, TradingRewardCampaignInfo, TradingRewardCampaignInfoAmino, TradingRewardCampaignInfoSDKType, CampaignRewardPool, CampaignRewardPoolAmino, CampaignRewardPoolSDKType, FeeDiscountTierInfo, FeeDiscountTierInfoAmino, FeeDiscountTierInfoSDKType, FeeDiscountTierTTL, FeeDiscountTierTTLAmino, FeeDiscountTierTTLSDKType, FeeDiscountSchedule, FeeDiscountScheduleAmino, FeeDiscountScheduleSDKType, TradeRecords, TradeRecordsAmino, TradeRecordsSDKType, TradeRecord, TradeRecordAmino, TradeRecordSDKType, BinaryOptionsMarket, BinaryOptionsMarketAmino, BinaryOptionsMarketSDKType } from "./exchange";
import { Balance, BalanceAmino, BalanceSDKType, DerivativePosition, DerivativePositionAmino, DerivativePositionSDKType, GenesisState, GenesisStateAmino, GenesisStateSDKType } from "./genesis";
import { MetadataStatistics, MetadataStatisticsAmino, MetadataStatisticsSDKType } from "../../oracle/v1beta1/oracle";
import { BinaryWriter } from "../../../binary";
import { isSet, isObject } from "../../../helpers";
import { Decimal } from "@cosmjs/math";
export enum OrderSide {
  /** Side_Unspecified - will return both */
  Side_Unspecified = 0,
  Buy = 1,
  Sell = 2,
  UNRECOGNIZED = -1,
}
export const OrderSideSDKType = OrderSide;
export const OrderSideAmino = OrderSide;
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
export const CancellationStrategyAmino = CancellationStrategy;
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
export interface SubaccountProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.Subaccount";
  value: Uint8Array;
}
export interface SubaccountAmino {
  trader: string;
  subaccount_nonce: number;
}
export interface SubaccountAminoMsg {
  type: "/injective.exchange.v1beta1.Subaccount";
  value: SubaccountAmino;
}
export interface SubaccountSDKType {
  trader: string;
  subaccount_nonce: number;
}
export interface QuerySubaccountOrdersRequest {
  subaccountId: string;
  marketId: string;
}
export interface QuerySubaccountOrdersRequestProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QuerySubaccountOrdersRequest";
  value: Uint8Array;
}
export interface QuerySubaccountOrdersRequestAmino {
  subaccount_id: string;
  market_id: string;
}
export interface QuerySubaccountOrdersRequestAminoMsg {
  type: "/injective.exchange.v1beta1.QuerySubaccountOrdersRequest";
  value: QuerySubaccountOrdersRequestAmino;
}
export interface QuerySubaccountOrdersRequestSDKType {
  subaccount_id: string;
  market_id: string;
}
export interface QuerySubaccountOrdersResponse {
  buyOrders: SubaccountOrderData[];
  sellOrders: SubaccountOrderData[];
}
export interface QuerySubaccountOrdersResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QuerySubaccountOrdersResponse";
  value: Uint8Array;
}
export interface QuerySubaccountOrdersResponseAmino {
  buy_orders: SubaccountOrderDataAmino[];
  sell_orders: SubaccountOrderDataAmino[];
}
export interface QuerySubaccountOrdersResponseAminoMsg {
  type: "/injective.exchange.v1beta1.QuerySubaccountOrdersResponse";
  value: QuerySubaccountOrdersResponseAmino;
}
export interface QuerySubaccountOrdersResponseSDKType {
  buy_orders: SubaccountOrderDataSDKType[];
  sell_orders: SubaccountOrderDataSDKType[];
}
export interface SubaccountOrderbookMetadataWithMarket {
  metadata: SubaccountOrderbookMetadata;
  marketId: string;
  isBuy: boolean;
}
export interface SubaccountOrderbookMetadataWithMarketProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.SubaccountOrderbookMetadataWithMarket";
  value: Uint8Array;
}
export interface SubaccountOrderbookMetadataWithMarketAmino {
  metadata?: SubaccountOrderbookMetadataAmino;
  market_id: string;
  isBuy: boolean;
}
export interface SubaccountOrderbookMetadataWithMarketAminoMsg {
  type: "/injective.exchange.v1beta1.SubaccountOrderbookMetadataWithMarket";
  value: SubaccountOrderbookMetadataWithMarketAmino;
}
export interface SubaccountOrderbookMetadataWithMarketSDKType {
  metadata: SubaccountOrderbookMetadataSDKType;
  market_id: string;
  isBuy: boolean;
}
/**
 * QueryExchangeParamsRequest is the request type for the Query/ExchangeParams
 * RPC method.
 */
export interface QueryExchangeParamsRequest {}
export interface QueryExchangeParamsRequestProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryExchangeParamsRequest";
  value: Uint8Array;
}
/**
 * QueryExchangeParamsRequest is the request type for the Query/ExchangeParams
 * RPC method.
 */
export interface QueryExchangeParamsRequestAmino {}
export interface QueryExchangeParamsRequestAminoMsg {
  type: "/injective.exchange.v1beta1.QueryExchangeParamsRequest";
  value: QueryExchangeParamsRequestAmino;
}
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
  params: Params;
}
export interface QueryExchangeParamsResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryExchangeParamsResponse";
  value: Uint8Array;
}
/**
 * QueryExchangeParamsRequest is the response type for the Query/ExchangeParams
 * RPC method.
 */
export interface QueryExchangeParamsResponseAmino {
  params?: ParamsAmino;
}
export interface QueryExchangeParamsResponseAminoMsg {
  type: "/injective.exchange.v1beta1.QueryExchangeParamsResponse";
  value: QueryExchangeParamsResponseAmino;
}
/**
 * QueryExchangeParamsRequest is the response type for the Query/ExchangeParams
 * RPC method.
 */
export interface QueryExchangeParamsResponseSDKType {
  params: ParamsSDKType;
}
/**
 * QuerySubaccountDepositsRequest is the request type for the
 * Query/SubaccountDeposits RPC method.
 */
export interface QuerySubaccountDepositsRequest {
  subaccountId: string;
  subaccount?: Subaccount;
}
export interface QuerySubaccountDepositsRequestProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QuerySubaccountDepositsRequest";
  value: Uint8Array;
}
/**
 * QuerySubaccountDepositsRequest is the request type for the
 * Query/SubaccountDeposits RPC method.
 */
export interface QuerySubaccountDepositsRequestAmino {
  subaccount_id: string;
  subaccount?: SubaccountAmino;
}
export interface QuerySubaccountDepositsRequestAminoMsg {
  type: "/injective.exchange.v1beta1.QuerySubaccountDepositsRequest";
  value: QuerySubaccountDepositsRequestAmino;
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
  value: Deposit;
}
export interface QuerySubaccountDepositsResponse_DepositsEntryProtoMsg {
  typeUrl: string;
  value: Uint8Array;
}
export interface QuerySubaccountDepositsResponse_DepositsEntryAmino {
  key: string;
  value?: DepositAmino;
}
export interface QuerySubaccountDepositsResponse_DepositsEntryAminoMsg {
  type: string;
  value: QuerySubaccountDepositsResponse_DepositsEntryAmino;
}
export interface QuerySubaccountDepositsResponse_DepositsEntrySDKType {
  key: string;
  value: DepositSDKType;
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
  deposits: {
    [key: string]: Deposit;
  };
}
export interface QuerySubaccountDepositsResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QuerySubaccountDepositsResponse";
  value: Uint8Array;
}
/**
 * QuerySubaccountDepositsResponse is the response type for the
 * Query/SubaccountDeposits RPC method.
 */
export interface QuerySubaccountDepositsResponseAmino {
  /**
   * QuerySubaccountDepositsResponse is the response type for the
   * Query/SubaccountDeposits RPC method.
   */
  deposits?: {
    [key: string]: DepositAmino;
  };
}
export interface QuerySubaccountDepositsResponseAminoMsg {
  type: "/injective.exchange.v1beta1.QuerySubaccountDepositsResponse";
  value: QuerySubaccountDepositsResponseAmino;
}
/**
 * QuerySubaccountDepositsResponse is the response type for the
 * Query/SubaccountDeposits RPC method.
 */
export interface QuerySubaccountDepositsResponseSDKType {
  deposits: {
    [key: string]: DepositSDKType;
  };
}
/**
 * QueryExchangeBalancesRequest is the request type for the
 * Query/ExchangeBalances RPC method.
 */
export interface QueryExchangeBalancesRequest {}
export interface QueryExchangeBalancesRequestProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryExchangeBalancesRequest";
  value: Uint8Array;
}
/**
 * QueryExchangeBalancesRequest is the request type for the
 * Query/ExchangeBalances RPC method.
 */
export interface QueryExchangeBalancesRequestAmino {}
export interface QueryExchangeBalancesRequestAminoMsg {
  type: "/injective.exchange.v1beta1.QueryExchangeBalancesRequest";
  value: QueryExchangeBalancesRequestAmino;
}
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
export interface QueryExchangeBalancesResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryExchangeBalancesResponse";
  value: Uint8Array;
}
/**
 * QuerySubaccountDepositsResponse is the response type for the
 * Query/SubaccountDeposits RPC method.
 */
export interface QueryExchangeBalancesResponseAmino {
  balances: BalanceAmino[];
}
export interface QueryExchangeBalancesResponseAminoMsg {
  type: "/injective.exchange.v1beta1.QueryExchangeBalancesResponse";
  value: QueryExchangeBalancesResponseAmino;
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
export interface QueryAggregateVolumeRequestProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryAggregateVolumeRequest";
  value: Uint8Array;
}
/**
 * QueryAggregateVolumeRequest is the request type for the Query/AggregateVolume
 * RPC method.
 */
export interface QueryAggregateVolumeRequestAmino {
  /** can either be an address or a subaccount */
  account: string;
}
export interface QueryAggregateVolumeRequestAminoMsg {
  type: "/injective.exchange.v1beta1.QueryAggregateVolumeRequest";
  value: QueryAggregateVolumeRequestAmino;
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
export interface QueryAggregateVolumeResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryAggregateVolumeResponse";
  value: Uint8Array;
}
/**
 * QueryAggregateVolumeResponse is the response type for the
 * Query/AggregateVolume RPC method.
 */
export interface QueryAggregateVolumeResponseAmino {
  /**
   * if an address is specified, then the aggregate_volumes will aggregate the
   * volumes across all subaccounts for the address
   */
  aggregate_volumes: MarketVolumeAmino[];
}
export interface QueryAggregateVolumeResponseAminoMsg {
  type: "/injective.exchange.v1beta1.QueryAggregateVolumeResponse";
  value: QueryAggregateVolumeResponseAmino;
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
export interface QueryAggregateVolumesRequestProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryAggregateVolumesRequest";
  value: Uint8Array;
}
/**
 * QueryAggregateVolumesRequest is the request type for the
 * Query/AggregateVolumes RPC method.
 */
export interface QueryAggregateVolumesRequestAmino {
  accounts: string[];
  market_ids: string[];
}
export interface QueryAggregateVolumesRequestAminoMsg {
  type: "/injective.exchange.v1beta1.QueryAggregateVolumesRequest";
  value: QueryAggregateVolumesRequestAmino;
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
export interface QueryAggregateVolumesResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryAggregateVolumesResponse";
  value: Uint8Array;
}
/**
 * QueryAggregateVolumesResponse is the response type for the
 * Query/AggregateVolumes RPC method.
 */
export interface QueryAggregateVolumesResponseAmino {
  /** the aggregate volume records for the accounts specified */
  aggregate_account_volumes: AggregateAccountVolumeRecordAmino[];
  /** the aggregate volumes for the markets specified */
  aggregate_market_volumes: MarketVolumeAmino[];
}
export interface QueryAggregateVolumesResponseAminoMsg {
  type: "/injective.exchange.v1beta1.QueryAggregateVolumesResponse";
  value: QueryAggregateVolumesResponseAmino;
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
export interface QueryAggregateMarketVolumeRequestProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryAggregateMarketVolumeRequest";
  value: Uint8Array;
}
/**
 * QueryAggregateMarketVolumeRequest is the request type for the
 * Query/AggregateMarketVolume RPC method.
 */
export interface QueryAggregateMarketVolumeRequestAmino {
  /**
   * QueryAggregateMarketVolumeRequest is the request type for the
   * Query/AggregateMarketVolume RPC method.
   */
  market_id: string;
}
export interface QueryAggregateMarketVolumeRequestAminoMsg {
  type: "/injective.exchange.v1beta1.QueryAggregateMarketVolumeRequest";
  value: QueryAggregateMarketVolumeRequestAmino;
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
  volume: VolumeRecord;
}
export interface QueryAggregateMarketVolumeResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryAggregateMarketVolumeResponse";
  value: Uint8Array;
}
/**
 * QueryAggregateMarketVolumeResponse is the response type for the
 * Query/AggregateMarketVolume RPC method.
 */
export interface QueryAggregateMarketVolumeResponseAmino {
  volume?: VolumeRecordAmino;
}
export interface QueryAggregateMarketVolumeResponseAminoMsg {
  type: "/injective.exchange.v1beta1.QueryAggregateMarketVolumeResponse";
  value: QueryAggregateMarketVolumeResponseAmino;
}
/**
 * QueryAggregateMarketVolumeResponse is the response type for the
 * Query/AggregateMarketVolume RPC method.
 */
export interface QueryAggregateMarketVolumeResponseSDKType {
  volume: VolumeRecordSDKType;
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
export interface QueryDenomDecimalRequestProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryDenomDecimalRequest";
  value: Uint8Array;
}
/**
 * QueryDenomDecimalRequest is the request type for the Query/DenomDecimal RPC
 * method.
 */
export interface QueryDenomDecimalRequestAmino {
  /**
   * QueryDenomDecimalRequest is the request type for the Query/DenomDecimal RPC
   * method.
   */
  denom: string;
}
export interface QueryDenomDecimalRequestAminoMsg {
  type: "/injective.exchange.v1beta1.QueryDenomDecimalRequest";
  value: QueryDenomDecimalRequestAmino;
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
  decimal: bigint;
}
export interface QueryDenomDecimalResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryDenomDecimalResponse";
  value: Uint8Array;
}
/**
 * QueryDenomDecimalResponse is the response type for the Query/DenomDecimal RPC
 * method.
 */
export interface QueryDenomDecimalResponseAmino {
  /**
   * QueryDenomDecimalResponse is the response type for the Query/DenomDecimal RPC
   * method.
   */
  decimal: string;
}
export interface QueryDenomDecimalResponseAminoMsg {
  type: "/injective.exchange.v1beta1.QueryDenomDecimalResponse";
  value: QueryDenomDecimalResponseAmino;
}
/**
 * QueryDenomDecimalResponse is the response type for the Query/DenomDecimal RPC
 * method.
 */
export interface QueryDenomDecimalResponseSDKType {
  decimal: bigint;
}
/**
 * QueryDenomDecimalsRequest is the request type for the Query/DenomDecimals RPC
 * method.
 */
export interface QueryDenomDecimalsRequest {
  /** denoms can be empty to query all denom decimals */
  denoms: string[];
}
export interface QueryDenomDecimalsRequestProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryDenomDecimalsRequest";
  value: Uint8Array;
}
/**
 * QueryDenomDecimalsRequest is the request type for the Query/DenomDecimals RPC
 * method.
 */
export interface QueryDenomDecimalsRequestAmino {
  /** denoms can be empty to query all denom decimals */
  denoms: string[];
}
export interface QueryDenomDecimalsRequestAminoMsg {
  type: "/injective.exchange.v1beta1.QueryDenomDecimalsRequest";
  value: QueryDenomDecimalsRequestAmino;
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
export interface QueryDenomDecimalsResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryDenomDecimalsResponse";
  value: Uint8Array;
}
/**
 * QueryDenomDecimalsRequest is the response type for the Query/DenomDecimals
 * RPC method.
 */
export interface QueryDenomDecimalsResponseAmino {
  denom_decimals: DenomDecimalsAmino[];
}
export interface QueryDenomDecimalsResponseAminoMsg {
  type: "/injective.exchange.v1beta1.QueryDenomDecimalsResponse";
  value: QueryDenomDecimalsResponseAmino;
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
export interface QueryAggregateMarketVolumesRequestProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryAggregateMarketVolumesRequest";
  value: Uint8Array;
}
/**
 * QueryAggregateMarketVolumesRequest is the request type for the
 * Query/AggregateMarketVolumes RPC method.
 */
export interface QueryAggregateMarketVolumesRequestAmino {
  /**
   * QueryAggregateMarketVolumesRequest is the request type for the
   * Query/AggregateMarketVolumes RPC method.
   */
  market_ids: string[];
}
export interface QueryAggregateMarketVolumesRequestAminoMsg {
  type: "/injective.exchange.v1beta1.QueryAggregateMarketVolumesRequest";
  value: QueryAggregateMarketVolumesRequestAmino;
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
export interface QueryAggregateMarketVolumesResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryAggregateMarketVolumesResponse";
  value: Uint8Array;
}
/**
 * QueryAggregateMarketVolumesResponse is the response type for the
 * Query/AggregateMarketVolumes RPC method.
 */
export interface QueryAggregateMarketVolumesResponseAmino {
  /** the aggregate volumes for the entire market */
  volumes: MarketVolumeAmino[];
}
export interface QueryAggregateMarketVolumesResponseAminoMsg {
  type: "/injective.exchange.v1beta1.QueryAggregateMarketVolumesResponse";
  value: QueryAggregateMarketVolumesResponseAmino;
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
export interface QuerySubaccountDepositRequestProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QuerySubaccountDepositRequest";
  value: Uint8Array;
}
/**
 * QuerySubaccountDepositsRequest is the request type for the
 * Query/SubaccountDeposits RPC method.
 */
export interface QuerySubaccountDepositRequestAmino {
  subaccount_id: string;
  denom: string;
}
export interface QuerySubaccountDepositRequestAminoMsg {
  type: "/injective.exchange.v1beta1.QuerySubaccountDepositRequest";
  value: QuerySubaccountDepositRequestAmino;
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
  deposits: Deposit;
}
export interface QuerySubaccountDepositResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QuerySubaccountDepositResponse";
  value: Uint8Array;
}
/**
 * QuerySubaccountDepositsResponse is the response type for the
 * Query/SubaccountDeposits RPC method.
 */
export interface QuerySubaccountDepositResponseAmino {
  /**
   * QuerySubaccountDepositsResponse is the response type for the
   * Query/SubaccountDeposits RPC method.
   */
  deposits?: DepositAmino;
}
export interface QuerySubaccountDepositResponseAminoMsg {
  type: "/injective.exchange.v1beta1.QuerySubaccountDepositResponse";
  value: QuerySubaccountDepositResponseAmino;
}
/**
 * QuerySubaccountDepositsResponse is the response type for the
 * Query/SubaccountDeposits RPC method.
 */
export interface QuerySubaccountDepositResponseSDKType {
  deposits: DepositSDKType;
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
export interface QuerySpotMarketsRequestProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QuerySpotMarketsRequest";
  value: Uint8Array;
}
/**
 * QuerySpotMarketsRequest is the request type for the Query/SpotMarkets RPC
 * method.
 */
export interface QuerySpotMarketsRequestAmino {
  /** Status of the market, for convenience it is set to string - not enum */
  status: string;
  /** Filter by market IDs */
  market_ids: string[];
}
export interface QuerySpotMarketsRequestAminoMsg {
  type: "/injective.exchange.v1beta1.QuerySpotMarketsRequest";
  value: QuerySpotMarketsRequestAmino;
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
export interface QuerySpotMarketsResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QuerySpotMarketsResponse";
  value: Uint8Array;
}
/**
 * QuerySpotMarketsResponse is the response type for the Query/SpotMarkets RPC
 * method.
 */
export interface QuerySpotMarketsResponseAmino {
  /**
   * QuerySpotMarketsResponse is the response type for the Query/SpotMarkets RPC
   * method.
   */
  markets: SpotMarketAmino[];
}
export interface QuerySpotMarketsResponseAminoMsg {
  type: "/injective.exchange.v1beta1.QuerySpotMarketsResponse";
  value: QuerySpotMarketsResponseAmino;
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
export interface QuerySpotMarketRequestProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QuerySpotMarketRequest";
  value: Uint8Array;
}
/**
 * QuerySpotMarketRequest is the request type for the Query/SpotMarket RPC
 * method.
 */
export interface QuerySpotMarketRequestAmino {
  /** Market ID for the market */
  market_id: string;
}
export interface QuerySpotMarketRequestAminoMsg {
  type: "/injective.exchange.v1beta1.QuerySpotMarketRequest";
  value: QuerySpotMarketRequestAmino;
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
  market: SpotMarket;
}
export interface QuerySpotMarketResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QuerySpotMarketResponse";
  value: Uint8Array;
}
/**
 * QuerySpotMarketResponse is the response type for the Query/SpotMarket RPC
 * method.
 */
export interface QuerySpotMarketResponseAmino {
  /**
   * QuerySpotMarketResponse is the response type for the Query/SpotMarket RPC
   * method.
   */
  market?: SpotMarketAmino;
}
export interface QuerySpotMarketResponseAminoMsg {
  type: "/injective.exchange.v1beta1.QuerySpotMarketResponse";
  value: QuerySpotMarketResponseAmino;
}
/**
 * QuerySpotMarketResponse is the response type for the Query/SpotMarket RPC
 * method.
 */
export interface QuerySpotMarketResponseSDKType {
  market: SpotMarketSDKType;
}
/**
 * QuerySpotOrderbookRequest is the request type for the Query/SpotOrderbook RPC
 * method.
 */
export interface QuerySpotOrderbookRequest {
  /** Market ID for the market */
  marketId: string;
  limit: bigint;
  orderSide: OrderSide;
  limitCumulativeNotional?: string;
  limitCumulativeQuantity?: string;
}
export interface QuerySpotOrderbookRequestProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QuerySpotOrderbookRequest";
  value: Uint8Array;
}
/**
 * QuerySpotOrderbookRequest is the request type for the Query/SpotOrderbook RPC
 * method.
 */
export interface QuerySpotOrderbookRequestAmino {
  /** Market ID for the market */
  market_id: string;
  limit: string;
  order_side: OrderSide;
  limit_cumulative_notional: string;
  limit_cumulative_quantity: string;
}
export interface QuerySpotOrderbookRequestAminoMsg {
  type: "/injective.exchange.v1beta1.QuerySpotOrderbookRequest";
  value: QuerySpotOrderbookRequestAmino;
}
/**
 * QuerySpotOrderbookRequest is the request type for the Query/SpotOrderbook RPC
 * method.
 */
export interface QuerySpotOrderbookRequestSDKType {
  market_id: string;
  limit: bigint;
  order_side: OrderSide;
  limit_cumulative_notional?: string;
  limit_cumulative_quantity?: string;
}
/**
 * QuerySpotOrderbookResponse is the response type for the Query/SpotOrderbook
 * RPC method.
 */
export interface QuerySpotOrderbookResponse {
  buysPriceLevel: Level[];
  sellsPriceLevel: Level[];
}
export interface QuerySpotOrderbookResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QuerySpotOrderbookResponse";
  value: Uint8Array;
}
/**
 * QuerySpotOrderbookResponse is the response type for the Query/SpotOrderbook
 * RPC method.
 */
export interface QuerySpotOrderbookResponseAmino {
  buys_price_level: LevelAmino[];
  sells_price_level: LevelAmino[];
}
export interface QuerySpotOrderbookResponseAminoMsg {
  type: "/injective.exchange.v1beta1.QuerySpotOrderbookResponse";
  value: QuerySpotOrderbookResponseAmino;
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
  market: SpotMarket;
  /**
   * mid_price_and_tob defines the mid price for this market and the best ask
   * and bid orders
   */
  midPriceAndTob?: MidPriceAndTOB;
}
export interface FullSpotMarketProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.FullSpotMarket";
  value: Uint8Array;
}
export interface FullSpotMarketAmino {
  market?: SpotMarketAmino;
  /**
   * mid_price_and_tob defines the mid price for this market and the best ask
   * and bid orders
   */
  mid_price_and_tob?: MidPriceAndTOBAmino;
}
export interface FullSpotMarketAminoMsg {
  type: "/injective.exchange.v1beta1.FullSpotMarket";
  value: FullSpotMarketAmino;
}
export interface FullSpotMarketSDKType {
  market: SpotMarketSDKType;
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
export interface QueryFullSpotMarketsRequestProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryFullSpotMarketsRequest";
  value: Uint8Array;
}
/**
 * QueryFullSpotMarketsRequest is the request type for the Query/FullSpotMarkets
 * RPC method.
 */
export interface QueryFullSpotMarketsRequestAmino {
  /** Status of the market, for convenience it is set to string - not enum */
  status: string;
  /** Filter by market IDs */
  market_ids: string[];
  /**
   * Flag to return the markets mid price and top of the book buy and sell
   * orders.
   */
  with_mid_price_and_tob: boolean;
}
export interface QueryFullSpotMarketsRequestAminoMsg {
  type: "/injective.exchange.v1beta1.QueryFullSpotMarketsRequest";
  value: QueryFullSpotMarketsRequestAmino;
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
export interface QueryFullSpotMarketsResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryFullSpotMarketsResponse";
  value: Uint8Array;
}
/**
 * QueryFullSpotMarketsResponse is the response type for the
 * Query/FullSpotMarkets RPC method.
 */
export interface QueryFullSpotMarketsResponseAmino {
  /**
   * QueryFullSpotMarketsResponse is the response type for the
   * Query/FullSpotMarkets RPC method.
   */
  markets: FullSpotMarketAmino[];
}
export interface QueryFullSpotMarketsResponseAminoMsg {
  type: "/injective.exchange.v1beta1.QueryFullSpotMarketsResponse";
  value: QueryFullSpotMarketsResponseAmino;
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
export interface QueryFullSpotMarketRequestProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryFullSpotMarketRequest";
  value: Uint8Array;
}
/**
 * QuerySpotMarketRequest is the request type for the Query/SpotMarket RPC
 * method.
 */
export interface QueryFullSpotMarketRequestAmino {
  /** Market ID for the market */
  market_id: string;
  /**
   * Flag to return the markets mid price and top of the book buy and sell
   * orders.
   */
  with_mid_price_and_tob: boolean;
}
export interface QueryFullSpotMarketRequestAminoMsg {
  type: "/injective.exchange.v1beta1.QueryFullSpotMarketRequest";
  value: QueryFullSpotMarketRequestAmino;
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
  market: FullSpotMarket;
}
export interface QueryFullSpotMarketResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryFullSpotMarketResponse";
  value: Uint8Array;
}
/**
 * QuerySpotMarketResponse is the response type for the Query/SpotMarket RPC
 * method.
 */
export interface QueryFullSpotMarketResponseAmino {
  /**
   * QuerySpotMarketResponse is the response type for the Query/SpotMarket RPC
   * method.
   */
  market?: FullSpotMarketAmino;
}
export interface QueryFullSpotMarketResponseAminoMsg {
  type: "/injective.exchange.v1beta1.QueryFullSpotMarketResponse";
  value: QueryFullSpotMarketResponseAmino;
}
/**
 * QuerySpotMarketResponse is the response type for the Query/SpotMarket RPC
 * method.
 */
export interface QueryFullSpotMarketResponseSDKType {
  market: FullSpotMarketSDKType;
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
export interface QuerySpotOrdersByHashesRequestProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QuerySpotOrdersByHashesRequest";
  value: Uint8Array;
}
/**
 * QuerySpotOrdersByHashesRequest is the request type for the
 * Query/SpotOrdersByHashes RPC method.
 */
export interface QuerySpotOrdersByHashesRequestAmino {
  /** Market ID for the market */
  market_id: string;
  /** SubaccountID of the trader */
  subaccount_id: string;
  /** the order hashes */
  order_hashes: string[];
}
export interface QuerySpotOrdersByHashesRequestAminoMsg {
  type: "/injective.exchange.v1beta1.QuerySpotOrdersByHashesRequest";
  value: QuerySpotOrdersByHashesRequestAmino;
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
export interface QuerySpotOrdersByHashesResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QuerySpotOrdersByHashesResponse";
  value: Uint8Array;
}
/**
 * QuerySpotOrdersByHashesResponse is the response type for the
 * Query/SpotOrdersByHashes RPC method.
 */
export interface QuerySpotOrdersByHashesResponseAmino {
  orders: TrimmedSpotLimitOrderAmino[];
}
export interface QuerySpotOrdersByHashesResponseAminoMsg {
  type: "/injective.exchange.v1beta1.QuerySpotOrdersByHashesResponse";
  value: QuerySpotOrdersByHashesResponseAmino;
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
export interface QueryTraderSpotOrdersRequestProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryTraderSpotOrdersRequest";
  value: Uint8Array;
}
/**
 * QueryTraderSpotOrdersRequest is the request type for the
 * Query/TraderSpotOrders RPC method.
 */
export interface QueryTraderSpotOrdersRequestAmino {
  /** Market ID for the market */
  market_id: string;
  /** SubaccountID of the trader */
  subaccount_id: string;
}
export interface QueryTraderSpotOrdersRequestAminoMsg {
  type: "/injective.exchange.v1beta1.QueryTraderSpotOrdersRequest";
  value: QueryTraderSpotOrdersRequestAmino;
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
export interface QueryAccountAddressSpotOrdersRequestProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryAccountAddressSpotOrdersRequest";
  value: Uint8Array;
}
/**
 * QueryAccountAddressSpotOrdersRequest is the request type for the
 * Query/AccountAddressSpotOrders RPC method.
 */
export interface QueryAccountAddressSpotOrdersRequestAmino {
  /** Market ID for the market */
  market_id: string;
  /** Account address of the trader */
  account_address: string;
}
export interface QueryAccountAddressSpotOrdersRequestAminoMsg {
  type: "/injective.exchange.v1beta1.QueryAccountAddressSpotOrdersRequest";
  value: QueryAccountAddressSpotOrdersRequestAmino;
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
export interface TrimmedSpotLimitOrderProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.TrimmedSpotLimitOrder";
  value: Uint8Array;
}
export interface TrimmedSpotLimitOrderAmino {
  /** price of the order */
  price: string;
  /** quantity of the order */
  quantity: string;
  /** the amount of the quantity remaining fillable */
  fillable: string;
  /** true if the order is a buy */
  isBuy: boolean;
  order_hash: string;
}
export interface TrimmedSpotLimitOrderAminoMsg {
  type: "/injective.exchange.v1beta1.TrimmedSpotLimitOrder";
  value: TrimmedSpotLimitOrderAmino;
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
export interface QueryTraderSpotOrdersResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryTraderSpotOrdersResponse";
  value: Uint8Array;
}
/**
 * QueryTraderSpotOrdersResponse is the response type for the
 * Query/TraderSpotOrders RPC method.
 */
export interface QueryTraderSpotOrdersResponseAmino {
  orders: TrimmedSpotLimitOrderAmino[];
}
export interface QueryTraderSpotOrdersResponseAminoMsg {
  type: "/injective.exchange.v1beta1.QueryTraderSpotOrdersResponse";
  value: QueryTraderSpotOrdersResponseAmino;
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
export interface QueryAccountAddressSpotOrdersResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryAccountAddressSpotOrdersResponse";
  value: Uint8Array;
}
/**
 * QueryAccountAddressSpotOrdersResponse is the response type for the
 * Query/AccountAddressSpotOrders RPC method.
 */
export interface QueryAccountAddressSpotOrdersResponseAmino {
  orders: TrimmedSpotLimitOrderAmino[];
}
export interface QueryAccountAddressSpotOrdersResponseAminoMsg {
  type: "/injective.exchange.v1beta1.QueryAccountAddressSpotOrdersResponse";
  value: QueryAccountAddressSpotOrdersResponseAmino;
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
export interface QuerySpotMidPriceAndTOBRequestProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QuerySpotMidPriceAndTOBRequest";
  value: Uint8Array;
}
/**
 * QuerySpotMidPriceAndTOBRequest is the request type for the
 * Query/SpotMidPriceAndTOB RPC method.
 */
export interface QuerySpotMidPriceAndTOBRequestAmino {
  /** Market ID for the market */
  market_id: string;
}
export interface QuerySpotMidPriceAndTOBRequestAminoMsg {
  type: "/injective.exchange.v1beta1.QuerySpotMidPriceAndTOBRequest";
  value: QuerySpotMidPriceAndTOBRequestAmino;
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
  midPrice?: string;
  /** best buy price of the market */
  bestBuyPrice?: string;
  /** best sell price of the market */
  bestSellPrice?: string;
}
export interface QuerySpotMidPriceAndTOBResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QuerySpotMidPriceAndTOBResponse";
  value: Uint8Array;
}
/**
 * QuerySpotMidPriceAndTOBResponse is the response type for the
 * Query/SpotMidPriceAndTOB RPC method.
 */
export interface QuerySpotMidPriceAndTOBResponseAmino {
  /** mid price of the market */
  mid_price: string;
  /** best buy price of the market */
  best_buy_price: string;
  /** best sell price of the market */
  best_sell_price: string;
}
export interface QuerySpotMidPriceAndTOBResponseAminoMsg {
  type: "/injective.exchange.v1beta1.QuerySpotMidPriceAndTOBResponse";
  value: QuerySpotMidPriceAndTOBResponseAmino;
}
/**
 * QuerySpotMidPriceAndTOBResponse is the response type for the
 * Query/SpotMidPriceAndTOB RPC method.
 */
export interface QuerySpotMidPriceAndTOBResponseSDKType {
  mid_price?: string;
  best_buy_price?: string;
  best_sell_price?: string;
}
/**
 * QueryDerivativeMidPriceAndTOBRequest is the request type for the
 * Query/GetDerivativeMidPriceAndTOB RPC method.
 */
export interface QueryDerivativeMidPriceAndTOBRequest {
  /** Market ID for the market */
  marketId: string;
}
export interface QueryDerivativeMidPriceAndTOBRequestProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryDerivativeMidPriceAndTOBRequest";
  value: Uint8Array;
}
/**
 * QueryDerivativeMidPriceAndTOBRequest is the request type for the
 * Query/GetDerivativeMidPriceAndTOB RPC method.
 */
export interface QueryDerivativeMidPriceAndTOBRequestAmino {
  /** Market ID for the market */
  market_id: string;
}
export interface QueryDerivativeMidPriceAndTOBRequestAminoMsg {
  type: "/injective.exchange.v1beta1.QueryDerivativeMidPriceAndTOBRequest";
  value: QueryDerivativeMidPriceAndTOBRequestAmino;
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
  midPrice?: string;
  /** best buy price of the market */
  bestBuyPrice?: string;
  /** best sell price of the market */
  bestSellPrice?: string;
}
export interface QueryDerivativeMidPriceAndTOBResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryDerivativeMidPriceAndTOBResponse";
  value: Uint8Array;
}
/**
 * QueryDerivativeMidPriceAndTOBResponse is the response type for the
 * Query/GetDerivativeMidPriceAndTOB RPC method.
 */
export interface QueryDerivativeMidPriceAndTOBResponseAmino {
  /** mid price of the market */
  mid_price: string;
  /** best buy price of the market */
  best_buy_price: string;
  /** best sell price of the market */
  best_sell_price: string;
}
export interface QueryDerivativeMidPriceAndTOBResponseAminoMsg {
  type: "/injective.exchange.v1beta1.QueryDerivativeMidPriceAndTOBResponse";
  value: QueryDerivativeMidPriceAndTOBResponseAmino;
}
/**
 * QueryDerivativeMidPriceAndTOBResponse is the response type for the
 * Query/GetDerivativeMidPriceAndTOB RPC method.
 */
export interface QueryDerivativeMidPriceAndTOBResponseSDKType {
  mid_price?: string;
  best_buy_price?: string;
  best_sell_price?: string;
}
/**
 * QueryDerivativeOrderbookRequest is the request type for the
 * Query/DerivativeOrderbook RPC method.
 */
export interface QueryDerivativeOrderbookRequest {
  /** Market ID for the market */
  marketId: string;
  limit: bigint;
  limitCumulativeNotional?: string;
}
export interface QueryDerivativeOrderbookRequestProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryDerivativeOrderbookRequest";
  value: Uint8Array;
}
/**
 * QueryDerivativeOrderbookRequest is the request type for the
 * Query/DerivativeOrderbook RPC method.
 */
export interface QueryDerivativeOrderbookRequestAmino {
  /** Market ID for the market */
  market_id: string;
  limit: string;
  limit_cumulative_notional: string;
}
export interface QueryDerivativeOrderbookRequestAminoMsg {
  type: "/injective.exchange.v1beta1.QueryDerivativeOrderbookRequest";
  value: QueryDerivativeOrderbookRequestAmino;
}
/**
 * QueryDerivativeOrderbookRequest is the request type for the
 * Query/DerivativeOrderbook RPC method.
 */
export interface QueryDerivativeOrderbookRequestSDKType {
  market_id: string;
  limit: bigint;
  limit_cumulative_notional?: string;
}
/**
 * QueryDerivativeOrderbookResponse is the response type for the
 * Query/DerivativeOrderbook RPC method.
 */
export interface QueryDerivativeOrderbookResponse {
  buysPriceLevel: Level[];
  sellsPriceLevel: Level[];
}
export interface QueryDerivativeOrderbookResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryDerivativeOrderbookResponse";
  value: Uint8Array;
}
/**
 * QueryDerivativeOrderbookResponse is the response type for the
 * Query/DerivativeOrderbook RPC method.
 */
export interface QueryDerivativeOrderbookResponseAmino {
  buys_price_level: LevelAmino[];
  sells_price_level: LevelAmino[];
}
export interface QueryDerivativeOrderbookResponseAminoMsg {
  type: "/injective.exchange.v1beta1.QueryDerivativeOrderbookResponse";
  value: QueryDerivativeOrderbookResponseAmino;
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
  referencePrice?: string;
}
export interface QueryTraderSpotOrdersToCancelUpToAmountRequestProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryTraderSpotOrdersToCancelUpToAmountRequest";
  value: Uint8Array;
}
/**
 * QueryTraderSpotOrdersToCancelUpToAmountRequest is the request type for the
 * Query/TraderSpotOrdersToCancelUpToAmountRequest RPC method.
 */
export interface QueryTraderSpotOrdersToCancelUpToAmountRequestAmino {
  /** Market ID for the market */
  market_id: string;
  /** SubaccountID of the trader */
  subaccount_id: string;
  /** the base amount to cancel (free up) */
  base_amount: string;
  /** the quote amount to cancel (free up) */
  quote_amount: string;
  /** The cancellation strategy */
  strategy: CancellationStrategy;
  /**
   * The reference price for the cancellation strategy, e.g. mid price or mark
   * price
   */
  reference_price: string;
}
export interface QueryTraderSpotOrdersToCancelUpToAmountRequestAminoMsg {
  type: "/injective.exchange.v1beta1.QueryTraderSpotOrdersToCancelUpToAmountRequest";
  value: QueryTraderSpotOrdersToCancelUpToAmountRequestAmino;
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
  reference_price?: string;
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
  referencePrice?: string;
}
export interface QueryTraderDerivativeOrdersToCancelUpToAmountRequestProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryTraderDerivativeOrdersToCancelUpToAmountRequest";
  value: Uint8Array;
}
/**
 * QueryTraderDerivativeOrdersToCancelUpToAmountRequest is the request type for
 * the Query/TraderDerivativeOrdersToCancelUpToAmountRequest RPC method.
 */
export interface QueryTraderDerivativeOrdersToCancelUpToAmountRequestAmino {
  /** Market ID for the market */
  market_id: string;
  /** SubaccountID of the trader */
  subaccount_id: string;
  /** the quote amount to cancel (free up) */
  quote_amount: string;
  /** The cancellation strategy */
  strategy: CancellationStrategy;
  /**
   * The reference price for the cancellation strategy, e.g. mid price or mark
   * price
   */
  reference_price: string;
}
export interface QueryTraderDerivativeOrdersToCancelUpToAmountRequestAminoMsg {
  type: "/injective.exchange.v1beta1.QueryTraderDerivativeOrdersToCancelUpToAmountRequest";
  value: QueryTraderDerivativeOrdersToCancelUpToAmountRequestAmino;
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
  reference_price?: string;
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
export interface QueryTraderDerivativeOrdersRequestProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryTraderDerivativeOrdersRequest";
  value: Uint8Array;
}
/**
 * QueryTraderDerivativeOrdersRequest is the request type for the
 * Query/TraderDerivativeOrders RPC method.
 */
export interface QueryTraderDerivativeOrdersRequestAmino {
  /** Market ID for the market */
  market_id: string;
  /** SubaccountID of the trader */
  subaccount_id: string;
}
export interface QueryTraderDerivativeOrdersRequestAminoMsg {
  type: "/injective.exchange.v1beta1.QueryTraderDerivativeOrdersRequest";
  value: QueryTraderDerivativeOrdersRequestAmino;
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
export interface QueryAccountAddressDerivativeOrdersRequestProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryAccountAddressDerivativeOrdersRequest";
  value: Uint8Array;
}
/**
 * QueryAccountAddressSpotOrdersRequest is the request type for the
 * Query/AccountAddressDerivativeOrders RPC method.
 */
export interface QueryAccountAddressDerivativeOrdersRequestAmino {
  /** Market ID for the market */
  market_id: string;
  /** Account address of the trader */
  account_address: string;
}
export interface QueryAccountAddressDerivativeOrdersRequestAminoMsg {
  type: "/injective.exchange.v1beta1.QueryAccountAddressDerivativeOrdersRequest";
  value: QueryAccountAddressDerivativeOrdersRequestAmino;
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
export interface TrimmedDerivativeLimitOrderProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.TrimmedDerivativeLimitOrder";
  value: Uint8Array;
}
export interface TrimmedDerivativeLimitOrderAmino {
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
  order_hash: string;
}
export interface TrimmedDerivativeLimitOrderAminoMsg {
  type: "/injective.exchange.v1beta1.TrimmedDerivativeLimitOrder";
  value: TrimmedDerivativeLimitOrderAmino;
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
export interface QueryTraderDerivativeOrdersResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryTraderDerivativeOrdersResponse";
  value: Uint8Array;
}
/**
 * QueryTraderDerivativeOrdersResponse is the response type for the
 * Query/TraderDerivativeOrders RPC method.
 */
export interface QueryTraderDerivativeOrdersResponseAmino {
  orders: TrimmedDerivativeLimitOrderAmino[];
}
export interface QueryTraderDerivativeOrdersResponseAminoMsg {
  type: "/injective.exchange.v1beta1.QueryTraderDerivativeOrdersResponse";
  value: QueryTraderDerivativeOrdersResponseAmino;
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
export interface QueryAccountAddressDerivativeOrdersResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryAccountAddressDerivativeOrdersResponse";
  value: Uint8Array;
}
/**
 * QueryAccountAddressDerivativeOrdersResponse is the response type for the
 * Query/AccountAddressDerivativeOrders RPC method.
 */
export interface QueryAccountAddressDerivativeOrdersResponseAmino {
  orders: TrimmedDerivativeLimitOrderAmino[];
}
export interface QueryAccountAddressDerivativeOrdersResponseAminoMsg {
  type: "/injective.exchange.v1beta1.QueryAccountAddressDerivativeOrdersResponse";
  value: QueryAccountAddressDerivativeOrdersResponseAmino;
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
export interface QueryDerivativeOrdersByHashesRequestProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryDerivativeOrdersByHashesRequest";
  value: Uint8Array;
}
/**
 * QueryTraderDerivativeOrdersRequest is the request type for the
 * Query/TraderDerivativeOrders RPC method.
 */
export interface QueryDerivativeOrdersByHashesRequestAmino {
  /** Market ID for the market */
  market_id: string;
  /** SubaccountID of the trader */
  subaccount_id: string;
  /** the order hashes */
  order_hashes: string[];
}
export interface QueryDerivativeOrdersByHashesRequestAminoMsg {
  type: "/injective.exchange.v1beta1.QueryDerivativeOrdersByHashesRequest";
  value: QueryDerivativeOrdersByHashesRequestAmino;
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
export interface QueryDerivativeOrdersByHashesResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryDerivativeOrdersByHashesResponse";
  value: Uint8Array;
}
/**
 * QueryDerivativeOrdersByHashesResponse is the response type for the
 * Query/DerivativeOrdersByHashes RPC method.
 */
export interface QueryDerivativeOrdersByHashesResponseAmino {
  orders: TrimmedDerivativeLimitOrderAmino[];
}
export interface QueryDerivativeOrdersByHashesResponseAminoMsg {
  type: "/injective.exchange.v1beta1.QueryDerivativeOrdersByHashesResponse";
  value: QueryDerivativeOrdersByHashesResponseAmino;
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
export interface QueryDerivativeMarketsRequestProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryDerivativeMarketsRequest";
  value: Uint8Array;
}
/**
 * QueryDerivativeMarketsRequest is the request type for the
 * Query/DerivativeMarkets RPC method.
 */
export interface QueryDerivativeMarketsRequestAmino {
  /** Status of the market, for convenience it is set to string - not enum */
  status: string;
  /** Filter by market IDs */
  market_ids: string[];
  /**
   * Flag to return the markets mid price and top of the book buy and sell
   * orders.
   */
  with_mid_price_and_tob: boolean;
}
export interface QueryDerivativeMarketsRequestAminoMsg {
  type: "/injective.exchange.v1beta1.QueryDerivativeMarketsRequest";
  value: QueryDerivativeMarketsRequestAmino;
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
export interface PriceLevelProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.PriceLevel";
  value: Uint8Array;
}
export interface PriceLevelAmino {
  price: string;
  /** quantity */
  quantity: string;
}
export interface PriceLevelAminoMsg {
  type: "/injective.exchange.v1beta1.PriceLevel";
  value: PriceLevelAmino;
}
export interface PriceLevelSDKType {
  price: string;
  quantity: string;
}
export interface PerpetualMarketState {
  marketInfo: PerpetualMarketInfo;
  fundingInfo: PerpetualMarketFunding;
}
export interface PerpetualMarketStateProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.PerpetualMarketState";
  value: Uint8Array;
}
export interface PerpetualMarketStateAmino {
  market_info?: PerpetualMarketInfoAmino;
  funding_info?: PerpetualMarketFundingAmino;
}
export interface PerpetualMarketStateAminoMsg {
  type: "/injective.exchange.v1beta1.PerpetualMarketState";
  value: PerpetualMarketStateAmino;
}
export interface PerpetualMarketStateSDKType {
  market_info: PerpetualMarketInfoSDKType;
  funding_info: PerpetualMarketFundingSDKType;
}
export interface FullDerivativeMarket {
  market: DerivativeMarket;
  perpetualInfo?: PerpetualMarketState;
  futuresInfo?: ExpiryFuturesMarketInfo;
  markPrice: string;
  /**
   * mid_price_and_tob defines the mid price for this market and the best ask
   * and bid orders
   */
  midPriceAndTob?: MidPriceAndTOB;
}
export interface FullDerivativeMarketProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.FullDerivativeMarket";
  value: Uint8Array;
}
export interface FullDerivativeMarketAmino {
  market?: DerivativeMarketAmino;
  perpetual_info?: PerpetualMarketStateAmino;
  futures_info?: ExpiryFuturesMarketInfoAmino;
  mark_price: string;
  /**
   * mid_price_and_tob defines the mid price for this market and the best ask
   * and bid orders
   */
  mid_price_and_tob?: MidPriceAndTOBAmino;
}
export interface FullDerivativeMarketAminoMsg {
  type: "/injective.exchange.v1beta1.FullDerivativeMarket";
  value: FullDerivativeMarketAmino;
}
export interface FullDerivativeMarketSDKType {
  market: DerivativeMarketSDKType;
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
export interface QueryDerivativeMarketsResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryDerivativeMarketsResponse";
  value: Uint8Array;
}
/**
 * QueryDerivativeMarketsResponse is the response type for the
 * Query/DerivativeMarkets RPC method.
 */
export interface QueryDerivativeMarketsResponseAmino {
  markets: FullDerivativeMarketAmino[];
}
export interface QueryDerivativeMarketsResponseAminoMsg {
  type: "/injective.exchange.v1beta1.QueryDerivativeMarketsResponse";
  value: QueryDerivativeMarketsResponseAmino;
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
export interface QueryDerivativeMarketRequestProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryDerivativeMarketRequest";
  value: Uint8Array;
}
/**
 * QueryDerivativeMarketRequest is the request type for the
 * Query/DerivativeMarket RPC method.
 */
export interface QueryDerivativeMarketRequestAmino {
  /** Market ID for the market */
  market_id: string;
}
export interface QueryDerivativeMarketRequestAminoMsg {
  type: "/injective.exchange.v1beta1.QueryDerivativeMarketRequest";
  value: QueryDerivativeMarketRequestAmino;
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
  market: FullDerivativeMarket;
}
export interface QueryDerivativeMarketResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryDerivativeMarketResponse";
  value: Uint8Array;
}
/**
 * QueryDerivativeMarketResponse is the response type for the
 * Query/DerivativeMarket RPC method.
 */
export interface QueryDerivativeMarketResponseAmino {
  /**
   * QueryDerivativeMarketResponse is the response type for the
   * Query/DerivativeMarket RPC method.
   */
  market?: FullDerivativeMarketAmino;
}
export interface QueryDerivativeMarketResponseAminoMsg {
  type: "/injective.exchange.v1beta1.QueryDerivativeMarketResponse";
  value: QueryDerivativeMarketResponseAmino;
}
/**
 * QueryDerivativeMarketResponse is the response type for the
 * Query/DerivativeMarket RPC method.
 */
export interface QueryDerivativeMarketResponseSDKType {
  market: FullDerivativeMarketSDKType;
}
/**
 * QueryDerivativeMarketAddressRequest is the request type for the
 * Query/DerivativeMarketAddress RPC method.
 */
export interface QueryDerivativeMarketAddressRequest {
  /** Market ID for the market */
  marketId: string;
}
export interface QueryDerivativeMarketAddressRequestProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryDerivativeMarketAddressRequest";
  value: Uint8Array;
}
/**
 * QueryDerivativeMarketAddressRequest is the request type for the
 * Query/DerivativeMarketAddress RPC method.
 */
export interface QueryDerivativeMarketAddressRequestAmino {
  /** Market ID for the market */
  market_id: string;
}
export interface QueryDerivativeMarketAddressRequestAminoMsg {
  type: "/injective.exchange.v1beta1.QueryDerivativeMarketAddressRequest";
  value: QueryDerivativeMarketAddressRequestAmino;
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
export interface QueryDerivativeMarketAddressResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryDerivativeMarketAddressResponse";
  value: Uint8Array;
}
/**
 * QueryDerivativeMarketAddressResponse is the response type for the
 * Query/DerivativeMarketAddress RPC method.
 */
export interface QueryDerivativeMarketAddressResponseAmino {
  /** address for the market */
  address: string;
  /** subaccountID for the market */
  subaccount_id: string;
}
export interface QueryDerivativeMarketAddressResponseAminoMsg {
  type: "/injective.exchange.v1beta1.QueryDerivativeMarketAddressResponse";
  value: QueryDerivativeMarketAddressResponseAmino;
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
export interface QuerySubaccountTradeNonceRequestProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QuerySubaccountTradeNonceRequest";
  value: Uint8Array;
}
/**
 * QuerySubaccountTradeNonceRequest is the request type for the
 * Query/SubaccountTradeNonce RPC method.
 */
export interface QuerySubaccountTradeNonceRequestAmino {
  /**
   * QuerySubaccountTradeNonceRequest is the request type for the
   * Query/SubaccountTradeNonce RPC method.
   */
  subaccount_id: string;
}
export interface QuerySubaccountTradeNonceRequestAminoMsg {
  type: "/injective.exchange.v1beta1.QuerySubaccountTradeNonceRequest";
  value: QuerySubaccountTradeNonceRequestAmino;
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
export interface QuerySubaccountPositionsRequestProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QuerySubaccountPositionsRequest";
  value: Uint8Array;
}
/**
 * QuerySubaccountPositionsRequest is the request type for the
 * Query/SubaccountPositions RPC method.
 */
export interface QuerySubaccountPositionsRequestAmino {
  /**
   * QuerySubaccountPositionsRequest is the request type for the
   * Query/SubaccountPositions RPC method.
   */
  subaccount_id: string;
}
export interface QuerySubaccountPositionsRequestAminoMsg {
  type: "/injective.exchange.v1beta1.QuerySubaccountPositionsRequest";
  value: QuerySubaccountPositionsRequestAmino;
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
export interface QuerySubaccountPositionInMarketRequestProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QuerySubaccountPositionInMarketRequest";
  value: Uint8Array;
}
/**
 * QuerySubaccountPositionInMarketRequest is the request type for the
 * Query/SubaccountPositionInMarket RPC method.
 */
export interface QuerySubaccountPositionInMarketRequestAmino {
  subaccount_id: string;
  market_id: string;
}
export interface QuerySubaccountPositionInMarketRequestAminoMsg {
  type: "/injective.exchange.v1beta1.QuerySubaccountPositionInMarketRequest";
  value: QuerySubaccountPositionInMarketRequestAmino;
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
export interface QuerySubaccountEffectivePositionInMarketRequestProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QuerySubaccountEffectivePositionInMarketRequest";
  value: Uint8Array;
}
/**
 * QuerySubaccountEffectivePositionInMarketRequest is the request type for the
 * Query/SubaccountEffectivePositionInMarket RPC method.
 */
export interface QuerySubaccountEffectivePositionInMarketRequestAmino {
  subaccount_id: string;
  market_id: string;
}
export interface QuerySubaccountEffectivePositionInMarketRequestAminoMsg {
  type: "/injective.exchange.v1beta1.QuerySubaccountEffectivePositionInMarketRequest";
  value: QuerySubaccountEffectivePositionInMarketRequestAmino;
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
export interface QuerySubaccountOrderMetadataRequestProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QuerySubaccountOrderMetadataRequest";
  value: Uint8Array;
}
/**
 * QuerySubaccountOrderMetadataRequest is the request type for the
 * Query/SubaccountOrderMetadata RPC method.
 */
export interface QuerySubaccountOrderMetadataRequestAmino {
  /**
   * QuerySubaccountOrderMetadataRequest is the request type for the
   * Query/SubaccountOrderMetadata RPC method.
   */
  subaccount_id: string;
}
export interface QuerySubaccountOrderMetadataRequestAminoMsg {
  type: "/injective.exchange.v1beta1.QuerySubaccountOrderMetadataRequest";
  value: QuerySubaccountOrderMetadataRequestAmino;
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
export interface QuerySubaccountPositionsResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QuerySubaccountPositionsResponse";
  value: Uint8Array;
}
/**
 * QuerySubaccountPositionsResponse is the response type for the
 * Query/SubaccountPositions RPC method.
 */
export interface QuerySubaccountPositionsResponseAmino {
  state: DerivativePositionAmino[];
}
export interface QuerySubaccountPositionsResponseAminoMsg {
  type: "/injective.exchange.v1beta1.QuerySubaccountPositionsResponse";
  value: QuerySubaccountPositionsResponseAmino;
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
export interface QuerySubaccountPositionInMarketResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QuerySubaccountPositionInMarketResponse";
  value: Uint8Array;
}
/**
 * QuerySubaccountPositionInMarketResponse is the response type for the
 * Query/SubaccountPositionInMarket RPC method.
 */
export interface QuerySubaccountPositionInMarketResponseAmino {
  state?: PositionAmino;
}
export interface QuerySubaccountPositionInMarketResponseAminoMsg {
  type: "/injective.exchange.v1beta1.QuerySubaccountPositionInMarketResponse";
  value: QuerySubaccountPositionInMarketResponseAmino;
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
export interface EffectivePositionProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.EffectivePosition";
  value: Uint8Array;
}
export interface EffectivePositionAmino {
  is_long: boolean;
  quantity: string;
  entry_price: string;
  effective_margin: string;
}
export interface EffectivePositionAminoMsg {
  type: "/injective.exchange.v1beta1.EffectivePosition";
  value: EffectivePositionAmino;
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
export interface QuerySubaccountEffectivePositionInMarketResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QuerySubaccountEffectivePositionInMarketResponse";
  value: Uint8Array;
}
/**
 * QuerySubaccountEffectivePositionInMarketResponse is the response type for the
 * Query/SubaccountEffectivePositionInMarket RPC method.
 */
export interface QuerySubaccountEffectivePositionInMarketResponseAmino {
  state?: EffectivePositionAmino;
}
export interface QuerySubaccountEffectivePositionInMarketResponseAminoMsg {
  type: "/injective.exchange.v1beta1.QuerySubaccountEffectivePositionInMarketResponse";
  value: QuerySubaccountEffectivePositionInMarketResponseAmino;
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
export interface QueryPerpetualMarketInfoRequestProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryPerpetualMarketInfoRequest";
  value: Uint8Array;
}
/**
 * QueryPerpetualMarketInfoRequest is the request type for the
 * Query/PerpetualMarketInfo RPC method.
 */
export interface QueryPerpetualMarketInfoRequestAmino {
  /**
   * QueryPerpetualMarketInfoRequest is the request type for the
   * Query/PerpetualMarketInfo RPC method.
   */
  market_id: string;
}
export interface QueryPerpetualMarketInfoRequestAminoMsg {
  type: "/injective.exchange.v1beta1.QueryPerpetualMarketInfoRequest";
  value: QueryPerpetualMarketInfoRequestAmino;
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
  info: PerpetualMarketInfo;
}
export interface QueryPerpetualMarketInfoResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryPerpetualMarketInfoResponse";
  value: Uint8Array;
}
/**
 * QueryPerpetualMarketInfoResponse is the response type for the
 * Query/PerpetualMarketInfo RPC method.
 */
export interface QueryPerpetualMarketInfoResponseAmino {
  info?: PerpetualMarketInfoAmino;
}
export interface QueryPerpetualMarketInfoResponseAminoMsg {
  type: "/injective.exchange.v1beta1.QueryPerpetualMarketInfoResponse";
  value: QueryPerpetualMarketInfoResponseAmino;
}
/**
 * QueryPerpetualMarketInfoResponse is the response type for the
 * Query/PerpetualMarketInfo RPC method.
 */
export interface QueryPerpetualMarketInfoResponseSDKType {
  info: PerpetualMarketInfoSDKType;
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
export interface QueryExpiryFuturesMarketInfoRequestProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryExpiryFuturesMarketInfoRequest";
  value: Uint8Array;
}
/**
 * QueryExpiryFuturesMarketInfoRequest is the request type for the Query/
 * ExpiryFuturesMarketInfo RPC method.
 */
export interface QueryExpiryFuturesMarketInfoRequestAmino {
  /**
   * QueryExpiryFuturesMarketInfoRequest is the request type for the Query/
   * ExpiryFuturesMarketInfo RPC method.
   */
  market_id: string;
}
export interface QueryExpiryFuturesMarketInfoRequestAminoMsg {
  type: "/injective.exchange.v1beta1.QueryExpiryFuturesMarketInfoRequest";
  value: QueryExpiryFuturesMarketInfoRequestAmino;
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
  info: ExpiryFuturesMarketInfo;
}
export interface QueryExpiryFuturesMarketInfoResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryExpiryFuturesMarketInfoResponse";
  value: Uint8Array;
}
/**
 * QueryExpiryFuturesMarketInfoResponse is the response type for the Query/
 * ExpiryFuturesMarketInfo RPC method.
 */
export interface QueryExpiryFuturesMarketInfoResponseAmino {
  info?: ExpiryFuturesMarketInfoAmino;
}
export interface QueryExpiryFuturesMarketInfoResponseAminoMsg {
  type: "/injective.exchange.v1beta1.QueryExpiryFuturesMarketInfoResponse";
  value: QueryExpiryFuturesMarketInfoResponseAmino;
}
/**
 * QueryExpiryFuturesMarketInfoResponse is the response type for the Query/
 * ExpiryFuturesMarketInfo RPC method.
 */
export interface QueryExpiryFuturesMarketInfoResponseSDKType {
  info: ExpiryFuturesMarketInfoSDKType;
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
export interface QueryPerpetualMarketFundingRequestProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryPerpetualMarketFundingRequest";
  value: Uint8Array;
}
/**
 * QueryPerpetualMarketFundingRequest is the request type for the
 * Query/PerpetualMarketFunding RPC method.
 */
export interface QueryPerpetualMarketFundingRequestAmino {
  /**
   * QueryPerpetualMarketFundingRequest is the request type for the
   * Query/PerpetualMarketFunding RPC method.
   */
  market_id: string;
}
export interface QueryPerpetualMarketFundingRequestAminoMsg {
  type: "/injective.exchange.v1beta1.QueryPerpetualMarketFundingRequest";
  value: QueryPerpetualMarketFundingRequestAmino;
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
  state: PerpetualMarketFunding;
}
export interface QueryPerpetualMarketFundingResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryPerpetualMarketFundingResponse";
  value: Uint8Array;
}
/**
 * QueryPerpetualMarketFundingResponse is the response type for the
 * Query/PerpetualMarketFunding RPC method.
 */
export interface QueryPerpetualMarketFundingResponseAmino {
  state?: PerpetualMarketFundingAmino;
}
export interface QueryPerpetualMarketFundingResponseAminoMsg {
  type: "/injective.exchange.v1beta1.QueryPerpetualMarketFundingResponse";
  value: QueryPerpetualMarketFundingResponseAmino;
}
/**
 * QueryPerpetualMarketFundingResponse is the response type for the
 * Query/PerpetualMarketFunding RPC method.
 */
export interface QueryPerpetualMarketFundingResponseSDKType {
  state: PerpetualMarketFundingSDKType;
}
/**
 * QuerySubaccountOrderMetadataResponse is the response type for the
 * Query/SubaccountOrderMetadata RPC method.
 */
export interface QuerySubaccountOrderMetadataResponse {
  metadata: SubaccountOrderbookMetadataWithMarket[];
}
export interface QuerySubaccountOrderMetadataResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QuerySubaccountOrderMetadataResponse";
  value: Uint8Array;
}
/**
 * QuerySubaccountOrderMetadataResponse is the response type for the
 * Query/SubaccountOrderMetadata RPC method.
 */
export interface QuerySubaccountOrderMetadataResponseAmino {
  metadata: SubaccountOrderbookMetadataWithMarketAmino[];
}
export interface QuerySubaccountOrderMetadataResponseAminoMsg {
  type: "/injective.exchange.v1beta1.QuerySubaccountOrderMetadataResponse";
  value: QuerySubaccountOrderMetadataResponseAmino;
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
export interface QuerySubaccountTradeNonceResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QuerySubaccountTradeNonceResponse";
  value: Uint8Array;
}
/**
 * QuerySubaccountTradeNonceResponse is the response type for the
 * Query/SubaccountTradeNonce RPC method.
 */
export interface QuerySubaccountTradeNonceResponseAmino {
  /**
   * QuerySubaccountTradeNonceResponse is the response type for the
   * Query/SubaccountTradeNonce RPC method.
   */
  nonce: number;
}
export interface QuerySubaccountTradeNonceResponseAminoMsg {
  type: "/injective.exchange.v1beta1.QuerySubaccountTradeNonceResponse";
  value: QuerySubaccountTradeNonceResponseAmino;
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
export interface QueryModuleStateRequestProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryModuleStateRequest";
  value: Uint8Array;
}
/**
 * QueryModuleStateRequest is the request type for the Query/ExchangeModuleState
 * RPC method.
 */
export interface QueryModuleStateRequestAmino {}
export interface QueryModuleStateRequestAminoMsg {
  type: "/injective.exchange.v1beta1.QueryModuleStateRequest";
  value: QueryModuleStateRequestAmino;
}
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
  state: GenesisState;
}
export interface QueryModuleStateResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryModuleStateResponse";
  value: Uint8Array;
}
/**
 * QueryModuleStateResponse is the response type for the
 * Query/ExchangeModuleState RPC method.
 */
export interface QueryModuleStateResponseAmino {
  /**
   * QueryModuleStateResponse is the response type for the
   * Query/ExchangeModuleState RPC method.
   */
  state?: GenesisStateAmino;
}
export interface QueryModuleStateResponseAminoMsg {
  type: "/injective.exchange.v1beta1.QueryModuleStateResponse";
  value: QueryModuleStateResponseAmino;
}
/**
 * QueryModuleStateResponse is the response type for the
 * Query/ExchangeModuleState RPC method.
 */
export interface QueryModuleStateResponseSDKType {
  state: GenesisStateSDKType;
}
/** QueryPositionsRequest is the request type for the Query/Positions RPC method. */
export interface QueryPositionsRequest {}
export interface QueryPositionsRequestProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryPositionsRequest";
  value: Uint8Array;
}
/** QueryPositionsRequest is the request type for the Query/Positions RPC method. */
export interface QueryPositionsRequestAmino {}
export interface QueryPositionsRequestAminoMsg {
  type: "/injective.exchange.v1beta1.QueryPositionsRequest";
  value: QueryPositionsRequestAmino;
}
/** QueryPositionsRequest is the request type for the Query/Positions RPC method. */
export interface QueryPositionsRequestSDKType {}
/**
 * QueryPositionsResponse is the response type for the Query/Positions RPC
 * method.
 */
export interface QueryPositionsResponse {
  state: DerivativePosition[];
}
export interface QueryPositionsResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryPositionsResponse";
  value: Uint8Array;
}
/**
 * QueryPositionsResponse is the response type for the Query/Positions RPC
 * method.
 */
export interface QueryPositionsResponseAmino {
  state: DerivativePositionAmino[];
}
export interface QueryPositionsResponseAminoMsg {
  type: "/injective.exchange.v1beta1.QueryPositionsResponse";
  value: QueryPositionsResponseAmino;
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
  pendingPoolTimestamp: bigint;
}
export interface QueryTradeRewardPointsRequestProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryTradeRewardPointsRequest";
  value: Uint8Array;
}
/**
 * QueryTradeRewardPointsRequest is the request type for the
 * Query/TradeRewardPoints RPC method.
 */
export interface QueryTradeRewardPointsRequestAmino {
  accounts: string[];
  pending_pool_timestamp: string;
}
export interface QueryTradeRewardPointsRequestAminoMsg {
  type: "/injective.exchange.v1beta1.QueryTradeRewardPointsRequest";
  value: QueryTradeRewardPointsRequestAmino;
}
/**
 * QueryTradeRewardPointsRequest is the request type for the
 * Query/TradeRewardPoints RPC method.
 */
export interface QueryTradeRewardPointsRequestSDKType {
  accounts: string[];
  pending_pool_timestamp: bigint;
}
/**
 * QueryTradeRewardPointsResponse is the response type for the
 * Query/TradeRewardPoints RPC method.
 */
export interface QueryTradeRewardPointsResponse {
  accountTradeRewardPoints: string[];
}
export interface QueryTradeRewardPointsResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryTradeRewardPointsResponse";
  value: Uint8Array;
}
/**
 * QueryTradeRewardPointsResponse is the response type for the
 * Query/TradeRewardPoints RPC method.
 */
export interface QueryTradeRewardPointsResponseAmino {
  account_trade_reward_points: string[];
}
export interface QueryTradeRewardPointsResponseAminoMsg {
  type: "/injective.exchange.v1beta1.QueryTradeRewardPointsResponse";
  value: QueryTradeRewardPointsResponseAmino;
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
export interface QueryTradeRewardCampaignRequestProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryTradeRewardCampaignRequest";
  value: Uint8Array;
}
/**
 * QueryTradeRewardCampaignRequest is the request type for the
 * Query/TradeRewardCampaign RPC method.
 */
export interface QueryTradeRewardCampaignRequestAmino {}
export interface QueryTradeRewardCampaignRequestAminoMsg {
  type: "/injective.exchange.v1beta1.QueryTradeRewardCampaignRequest";
  value: QueryTradeRewardCampaignRequestAmino;
}
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
  tradingRewardCampaignInfo: TradingRewardCampaignInfo;
  tradingRewardPoolCampaignSchedule: CampaignRewardPool[];
  totalTradeRewardPoints: string;
  pendingTradingRewardPoolCampaignSchedule: CampaignRewardPool[];
  pendingTotalTradeRewardPoints: string[];
}
export interface QueryTradeRewardCampaignResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryTradeRewardCampaignResponse";
  value: Uint8Array;
}
/**
 * QueryTradeRewardCampaignResponse is the response type for the
 * Query/TradeRewardCampaign RPC method.
 */
export interface QueryTradeRewardCampaignResponseAmino {
  trading_reward_campaign_info?: TradingRewardCampaignInfoAmino;
  trading_reward_pool_campaign_schedule: CampaignRewardPoolAmino[];
  total_trade_reward_points: string;
  pending_trading_reward_pool_campaign_schedule: CampaignRewardPoolAmino[];
  pending_total_trade_reward_points: string[];
}
export interface QueryTradeRewardCampaignResponseAminoMsg {
  type: "/injective.exchange.v1beta1.QueryTradeRewardCampaignResponse";
  value: QueryTradeRewardCampaignResponseAmino;
}
/**
 * QueryTradeRewardCampaignResponse is the response type for the
 * Query/TradeRewardCampaign RPC method.
 */
export interface QueryTradeRewardCampaignResponseSDKType {
  trading_reward_campaign_info: TradingRewardCampaignInfoSDKType;
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
export interface QueryIsOptedOutOfRewardsRequestProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryIsOptedOutOfRewardsRequest";
  value: Uint8Array;
}
/**
 * QueryIsRegisteredDMMRequest is the request type for the Query/IsRegisteredDMM
 * RPC method.
 */
export interface QueryIsOptedOutOfRewardsRequestAmino {
  /**
   * QueryIsRegisteredDMMRequest is the request type for the Query/IsRegisteredDMM
   * RPC method.
   */
  account: string;
}
export interface QueryIsOptedOutOfRewardsRequestAminoMsg {
  type: "/injective.exchange.v1beta1.QueryIsOptedOutOfRewardsRequest";
  value: QueryIsOptedOutOfRewardsRequestAmino;
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
export interface QueryIsOptedOutOfRewardsResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryIsOptedOutOfRewardsResponse";
  value: Uint8Array;
}
/**
 * QueryIsRegisteredDMMResponse is the response type for the
 * Query/IsRegisteredDMM RPC method.
 */
export interface QueryIsOptedOutOfRewardsResponseAmino {
  /**
   * QueryIsRegisteredDMMResponse is the response type for the
   * Query/IsRegisteredDMM RPC method.
   */
  is_opted_out: boolean;
}
export interface QueryIsOptedOutOfRewardsResponseAminoMsg {
  type: "/injective.exchange.v1beta1.QueryIsOptedOutOfRewardsResponse";
  value: QueryIsOptedOutOfRewardsResponseAmino;
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
export interface QueryOptedOutOfRewardsAccountsRequestProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryOptedOutOfRewardsAccountsRequest";
  value: Uint8Array;
}
/**
 * QueryRegisteredDMMsRequest is the request type for the Query/RegisteredDMMs
 * RPC method.
 */
export interface QueryOptedOutOfRewardsAccountsRequestAmino {}
export interface QueryOptedOutOfRewardsAccountsRequestAminoMsg {
  type: "/injective.exchange.v1beta1.QueryOptedOutOfRewardsAccountsRequest";
  value: QueryOptedOutOfRewardsAccountsRequestAmino;
}
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
export interface QueryOptedOutOfRewardsAccountsResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryOptedOutOfRewardsAccountsResponse";
  value: Uint8Array;
}
/**
 * QueryRegisteredDMMsResponse is the response type for the Query/RegisteredDMMs
 * RPC method.
 */
export interface QueryOptedOutOfRewardsAccountsResponseAmino {
  /**
   * QueryRegisteredDMMsResponse is the response type for the Query/RegisteredDMMs
   * RPC method.
   */
  accounts: string[];
}
export interface QueryOptedOutOfRewardsAccountsResponseAminoMsg {
  type: "/injective.exchange.v1beta1.QueryOptedOutOfRewardsAccountsResponse";
  value: QueryOptedOutOfRewardsAccountsResponseAmino;
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
export interface QueryFeeDiscountAccountInfoRequestProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryFeeDiscountAccountInfoRequest";
  value: Uint8Array;
}
/**
 * QueryFeeDiscountAccountInfoRequest is the request type for the
 * Query/FeeDiscountAccountInfo RPC method.
 */
export interface QueryFeeDiscountAccountInfoRequestAmino {
  /**
   * QueryFeeDiscountAccountInfoRequest is the request type for the
   * Query/FeeDiscountAccountInfo RPC method.
   */
  account: string;
}
export interface QueryFeeDiscountAccountInfoRequestAminoMsg {
  type: "/injective.exchange.v1beta1.QueryFeeDiscountAccountInfoRequest";
  value: QueryFeeDiscountAccountInfoRequestAmino;
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
  tierLevel: bigint;
  accountInfo: FeeDiscountTierInfo;
  accountTtl: FeeDiscountTierTTL;
}
export interface QueryFeeDiscountAccountInfoResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryFeeDiscountAccountInfoResponse";
  value: Uint8Array;
}
/**
 * QueryFeeDiscountAccountInfoResponse is the response type for the
 * Query/FeeDiscountAccountInfo RPC method.
 */
export interface QueryFeeDiscountAccountInfoResponseAmino {
  tier_level: string;
  account_info?: FeeDiscountTierInfoAmino;
  account_ttl?: FeeDiscountTierTTLAmino;
}
export interface QueryFeeDiscountAccountInfoResponseAminoMsg {
  type: "/injective.exchange.v1beta1.QueryFeeDiscountAccountInfoResponse";
  value: QueryFeeDiscountAccountInfoResponseAmino;
}
/**
 * QueryFeeDiscountAccountInfoResponse is the response type for the
 * Query/FeeDiscountAccountInfo RPC method.
 */
export interface QueryFeeDiscountAccountInfoResponseSDKType {
  tier_level: bigint;
  account_info: FeeDiscountTierInfoSDKType;
  account_ttl: FeeDiscountTierTTLSDKType;
}
/**
 * QueryFeeDiscountScheduleRequest is the request type for the
 * Query/FeeDiscountSchedule RPC method.
 */
export interface QueryFeeDiscountScheduleRequest {}
export interface QueryFeeDiscountScheduleRequestProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryFeeDiscountScheduleRequest";
  value: Uint8Array;
}
/**
 * QueryFeeDiscountScheduleRequest is the request type for the
 * Query/FeeDiscountSchedule RPC method.
 */
export interface QueryFeeDiscountScheduleRequestAmino {}
export interface QueryFeeDiscountScheduleRequestAminoMsg {
  type: "/injective.exchange.v1beta1.QueryFeeDiscountScheduleRequest";
  value: QueryFeeDiscountScheduleRequestAmino;
}
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
  feeDiscountSchedule: FeeDiscountSchedule;
}
export interface QueryFeeDiscountScheduleResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryFeeDiscountScheduleResponse";
  value: Uint8Array;
}
/**
 * QueryFeeDiscountScheduleResponse is the response type for the
 * Query/FeeDiscountSchedule RPC method.
 */
export interface QueryFeeDiscountScheduleResponseAmino {
  fee_discount_schedule?: FeeDiscountScheduleAmino;
}
export interface QueryFeeDiscountScheduleResponseAminoMsg {
  type: "/injective.exchange.v1beta1.QueryFeeDiscountScheduleResponse";
  value: QueryFeeDiscountScheduleResponseAmino;
}
/**
 * QueryFeeDiscountScheduleResponse is the response type for the
 * Query/FeeDiscountSchedule RPC method.
 */
export interface QueryFeeDiscountScheduleResponseSDKType {
  fee_discount_schedule: FeeDiscountScheduleSDKType;
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
  dustFactor: bigint;
}
export interface QueryBalanceMismatchesRequestProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryBalanceMismatchesRequest";
  value: Uint8Array;
}
/**
 * QueryBalanceMismatchesRequest is the request type for the
 * Query/QueryBalanceMismatches RPC method.
 */
export interface QueryBalanceMismatchesRequestAmino {
  /**
   * QueryBalanceMismatchesRequest is the request type for the
   * Query/QueryBalanceMismatches RPC method.
   */
  dust_factor: string;
}
export interface QueryBalanceMismatchesRequestAminoMsg {
  type: "/injective.exchange.v1beta1.QueryBalanceMismatchesRequest";
  value: QueryBalanceMismatchesRequestAmino;
}
/**
 * QueryBalanceMismatchesRequest is the request type for the
 * Query/QueryBalanceMismatches RPC method.
 */
export interface QueryBalanceMismatchesRequestSDKType {
  dust_factor: bigint;
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
export interface BalanceMismatchProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.BalanceMismatch";
  value: Uint8Array;
}
export interface BalanceMismatchAmino {
  subaccountId: string;
  denom: string;
  available: string;
  total: string;
  balance_hold: string;
  expected_total: string;
  difference: string;
}
export interface BalanceMismatchAminoMsg {
  type: "/injective.exchange.v1beta1.BalanceMismatch";
  value: BalanceMismatchAmino;
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
export interface QueryBalanceMismatchesResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryBalanceMismatchesResponse";
  value: Uint8Array;
}
/**
 * QueryBalanceMismatchesResponse is the response type for the
 * Query/QueryBalanceMismatches RPC method.
 */
export interface QueryBalanceMismatchesResponseAmino {
  balance_mismatches: BalanceMismatchAmino[];
}
export interface QueryBalanceMismatchesResponseAminoMsg {
  type: "/injective.exchange.v1beta1.QueryBalanceMismatchesResponse";
  value: QueryBalanceMismatchesResponseAmino;
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
export interface QueryBalanceWithBalanceHoldsRequestProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryBalanceWithBalanceHoldsRequest";
  value: Uint8Array;
}
/**
 * QueryBalanceWithBalanceHoldsRequest is the request type for the
 * Query/QueryBalanceWithBalanceHolds RPC method.
 */
export interface QueryBalanceWithBalanceHoldsRequestAmino {}
export interface QueryBalanceWithBalanceHoldsRequestAminoMsg {
  type: "/injective.exchange.v1beta1.QueryBalanceWithBalanceHoldsRequest";
  value: QueryBalanceWithBalanceHoldsRequestAmino;
}
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
export interface BalanceWithMarginHoldProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.BalanceWithMarginHold";
  value: Uint8Array;
}
export interface BalanceWithMarginHoldAmino {
  subaccountId: string;
  denom: string;
  available: string;
  total: string;
  balance_hold: string;
}
export interface BalanceWithMarginHoldAminoMsg {
  type: "/injective.exchange.v1beta1.BalanceWithMarginHold";
  value: BalanceWithMarginHoldAmino;
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
export interface QueryBalanceWithBalanceHoldsResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryBalanceWithBalanceHoldsResponse";
  value: Uint8Array;
}
/**
 * QueryBalanceWithBalanceHoldsResponse is the response type for the
 * Query/QueryBalanceWithBalanceHolds RPC method.
 */
export interface QueryBalanceWithBalanceHoldsResponseAmino {
  balance_with_balance_holds: BalanceWithMarginHoldAmino[];
}
export interface QueryBalanceWithBalanceHoldsResponseAminoMsg {
  type: "/injective.exchange.v1beta1.QueryBalanceWithBalanceHoldsResponse";
  value: QueryBalanceWithBalanceHoldsResponseAmino;
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
export interface QueryFeeDiscountTierStatisticsRequestProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryFeeDiscountTierStatisticsRequest";
  value: Uint8Array;
}
/**
 * QueryFeeDiscountTierStatisticsRequest is the request type for the
 * Query/QueryFeeDiscountTierStatistics RPC method.
 */
export interface QueryFeeDiscountTierStatisticsRequestAmino {}
export interface QueryFeeDiscountTierStatisticsRequestAminoMsg {
  type: "/injective.exchange.v1beta1.QueryFeeDiscountTierStatisticsRequest";
  value: QueryFeeDiscountTierStatisticsRequestAmino;
}
/**
 * QueryFeeDiscountTierStatisticsRequest is the request type for the
 * Query/QueryFeeDiscountTierStatistics RPC method.
 */
export interface QueryFeeDiscountTierStatisticsRequestSDKType {}
export interface TierStatistic {
  tier: bigint;
  count: bigint;
}
export interface TierStatisticProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.TierStatistic";
  value: Uint8Array;
}
export interface TierStatisticAmino {
  tier: string;
  count: string;
}
export interface TierStatisticAminoMsg {
  type: "/injective.exchange.v1beta1.TierStatistic";
  value: TierStatisticAmino;
}
export interface TierStatisticSDKType {
  tier: bigint;
  count: bigint;
}
/**
 * QueryFeeDiscountTierStatisticsResponse is the response type for the
 * Query/QueryFeeDiscountTierStatistics RPC method.
 */
export interface QueryFeeDiscountTierStatisticsResponse {
  statistics: TierStatistic[];
}
export interface QueryFeeDiscountTierStatisticsResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryFeeDiscountTierStatisticsResponse";
  value: Uint8Array;
}
/**
 * QueryFeeDiscountTierStatisticsResponse is the response type for the
 * Query/QueryFeeDiscountTierStatistics RPC method.
 */
export interface QueryFeeDiscountTierStatisticsResponseAmino {
  statistics: TierStatisticAmino[];
}
export interface QueryFeeDiscountTierStatisticsResponseAminoMsg {
  type: "/injective.exchange.v1beta1.QueryFeeDiscountTierStatisticsResponse";
  value: QueryFeeDiscountTierStatisticsResponseAmino;
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
export interface MitoVaultInfosRequestProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.MitoVaultInfosRequest";
  value: Uint8Array;
}
/**
 * MitoVaultInfosRequest is the request type for the Query/MitoVaultInfos RPC
 * method.
 */
export interface MitoVaultInfosRequestAmino {}
export interface MitoVaultInfosRequestAminoMsg {
  type: "/injective.exchange.v1beta1.MitoVaultInfosRequest";
  value: MitoVaultInfosRequestAmino;
}
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
export interface MitoVaultInfosResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.MitoVaultInfosResponse";
  value: Uint8Array;
}
/**
 * MitoVaultInfosResponse is the response type for the Query/MitoVaultInfos RPC
 * method.
 */
export interface MitoVaultInfosResponseAmino {
  master_addresses: string[];
  derivative_addresses: string[];
  spot_addresses: string[];
  cw20_addresses: string[];
}
export interface MitoVaultInfosResponseAminoMsg {
  type: "/injective.exchange.v1beta1.MitoVaultInfosResponse";
  value: MitoVaultInfosResponseAmino;
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
export interface QueryMarketIDFromVaultRequestProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryMarketIDFromVaultRequest";
  value: Uint8Array;
}
/** QueryMarketIDFromVaultRequest is the request type for the Query/QueryMarketIDFromVault RPC method. */
export interface QueryMarketIDFromVaultRequestAmino {
  vault_address: string;
}
export interface QueryMarketIDFromVaultRequestAminoMsg {
  type: "/injective.exchange.v1beta1.QueryMarketIDFromVaultRequest";
  value: QueryMarketIDFromVaultRequestAmino;
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
export interface QueryMarketIDFromVaultResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryMarketIDFromVaultResponse";
  value: Uint8Array;
}
/**
 * QueryMarketIDFromVaultResponse is the response type for the
 * Query/QueryMarketIDFromVault RPC method.
 */
export interface QueryMarketIDFromVaultResponseAmino {
  /**
   * QueryMarketIDFromVaultResponse is the response type for the
   * Query/QueryMarketIDFromVault RPC method.
   */
  market_id: string;
}
export interface QueryMarketIDFromVaultResponseAminoMsg {
  type: "/injective.exchange.v1beta1.QueryMarketIDFromVaultResponse";
  value: QueryMarketIDFromVaultResponseAmino;
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
export interface QueryHistoricalTradeRecordsRequestProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryHistoricalTradeRecordsRequest";
  value: Uint8Array;
}
export interface QueryHistoricalTradeRecordsRequestAmino {
  market_id: string;
}
export interface QueryHistoricalTradeRecordsRequestAminoMsg {
  type: "/injective.exchange.v1beta1.QueryHistoricalTradeRecordsRequest";
  value: QueryHistoricalTradeRecordsRequestAmino;
}
export interface QueryHistoricalTradeRecordsRequestSDKType {
  market_id: string;
}
export interface QueryHistoricalTradeRecordsResponse {
  tradeRecords: TradeRecords[];
}
export interface QueryHistoricalTradeRecordsResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryHistoricalTradeRecordsResponse";
  value: Uint8Array;
}
export interface QueryHistoricalTradeRecordsResponseAmino {
  trade_records: TradeRecordsAmino[];
}
export interface QueryHistoricalTradeRecordsResponseAminoMsg {
  type: "/injective.exchange.v1beta1.QueryHistoricalTradeRecordsResponse";
  value: QueryHistoricalTradeRecordsResponseAmino;
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
  tradeGroupingSec: bigint;
  /**
   * MaxAge restricts the trade records oldest age in seconds from the current block time to consider.
   * A value of 0 means use all the records present on the chain.
   */
  maxAge: bigint;
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
export interface TradeHistoryOptionsProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.TradeHistoryOptions";
  value: Uint8Array;
}
/**
 * TradeHistoryOptions are the optional params for Query/MarketVolatility RPC
 * method.
 */
export interface TradeHistoryOptionsAmino {
  /** TradeGroupingSec of 0 means use the chain's default grouping */
  trade_grouping_sec: string;
  /**
   * MaxAge restricts the trade records oldest age in seconds from the current block time to consider.
   * A value of 0 means use all the records present on the chain.
   */
  max_age: string;
  /**
   * If IncludeRawHistory is true, the raw underlying data used for the
   * computation is included in the response
   */
  include_raw_history: boolean;
  /**
   * If IncludeMetadata is true, metadata on the computation is included in the
   * response
   */
  include_metadata: boolean;
}
export interface TradeHistoryOptionsAminoMsg {
  type: "/injective.exchange.v1beta1.TradeHistoryOptions";
  value: TradeHistoryOptionsAmino;
}
/**
 * TradeHistoryOptions are the optional params for Query/MarketVolatility RPC
 * method.
 */
export interface TradeHistoryOptionsSDKType {
  trade_grouping_sec: bigint;
  max_age: bigint;
  include_raw_history: boolean;
  include_metadata: boolean;
}
/**
 * QueryMarketVolatilityRequest are the request params for the
 * Query/MarketVolatility RPC method.
 */
export interface QueryMarketVolatilityRequest {
  marketId: string;
  tradeHistoryOptions: TradeHistoryOptions;
}
export interface QueryMarketVolatilityRequestProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryMarketVolatilityRequest";
  value: Uint8Array;
}
/**
 * QueryMarketVolatilityRequest are the request params for the
 * Query/MarketVolatility RPC method.
 */
export interface QueryMarketVolatilityRequestAmino {
  market_id: string;
  trade_history_options?: TradeHistoryOptionsAmino;
}
export interface QueryMarketVolatilityRequestAminoMsg {
  type: "/injective.exchange.v1beta1.QueryMarketVolatilityRequest";
  value: QueryMarketVolatilityRequestAmino;
}
/**
 * QueryMarketVolatilityRequest are the request params for the
 * Query/MarketVolatility RPC method.
 */
export interface QueryMarketVolatilityRequestSDKType {
  market_id: string;
  trade_history_options: TradeHistoryOptionsSDKType;
}
/**
 * QueryMarketVolatilityResponse is the response type for the
 * Query/MarketVolatility RPC method.
 */
export interface QueryMarketVolatilityResponse {
  volatility: string;
  historyMetadata: MetadataStatistics;
  rawHistory: TradeRecord[];
}
export interface QueryMarketVolatilityResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryMarketVolatilityResponse";
  value: Uint8Array;
}
/**
 * QueryMarketVolatilityResponse is the response type for the
 * Query/MarketVolatility RPC method.
 */
export interface QueryMarketVolatilityResponseAmino {
  volatility: string;
  history_metadata?: MetadataStatisticsAmino;
  raw_history: TradeRecordAmino[];
}
export interface QueryMarketVolatilityResponseAminoMsg {
  type: "/injective.exchange.v1beta1.QueryMarketVolatilityResponse";
  value: QueryMarketVolatilityResponseAmino;
}
/**
 * QueryMarketVolatilityResponse is the response type for the
 * Query/MarketVolatility RPC method.
 */
export interface QueryMarketVolatilityResponseSDKType {
  volatility: string;
  history_metadata: MetadataStatisticsSDKType;
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
export interface QueryBinaryMarketsRequestProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryBinaryMarketsRequest";
  value: Uint8Array;
}
/**
 * QuerBinaryMarketsRequest is the request type for the Query/BinaryMarkets RPC
 * method.
 */
export interface QueryBinaryMarketsRequestAmino {
  /** Status of the market, for convenience it is set to string - not enum */
  status: string;
}
export interface QueryBinaryMarketsRequestAminoMsg {
  type: "/injective.exchange.v1beta1.QueryBinaryMarketsRequest";
  value: QueryBinaryMarketsRequestAmino;
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
export interface QueryBinaryMarketsResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryBinaryMarketsResponse";
  value: Uint8Array;
}
/**
 * QueryBinaryMarketsResponse is the response type for the Query/BinaryMarkets
 * RPC method.
 */
export interface QueryBinaryMarketsResponseAmino {
  /**
   * QueryBinaryMarketsResponse is the response type for the Query/BinaryMarkets
   * RPC method.
   */
  markets: BinaryOptionsMarketAmino[];
}
export interface QueryBinaryMarketsResponseAminoMsg {
  type: "/injective.exchange.v1beta1.QueryBinaryMarketsResponse";
  value: QueryBinaryMarketsResponseAmino;
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
export interface QueryTraderDerivativeConditionalOrdersRequestProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryTraderDerivativeConditionalOrdersRequest";
  value: Uint8Array;
}
/**
 * QueryConditionalOrdersRequest is the request type for the
 * Query/ConditionalOrders RPC method.
 */
export interface QueryTraderDerivativeConditionalOrdersRequestAmino {
  subaccount_id: string;
  market_id: string;
}
export interface QueryTraderDerivativeConditionalOrdersRequestAminoMsg {
  type: "/injective.exchange.v1beta1.QueryTraderDerivativeConditionalOrdersRequest";
  value: QueryTraderDerivativeConditionalOrdersRequestAmino;
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
export interface TrimmedDerivativeConditionalOrderProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.TrimmedDerivativeConditionalOrder";
  value: Uint8Array;
}
export interface TrimmedDerivativeConditionalOrderAmino {
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
  order_hash: string;
}
export interface TrimmedDerivativeConditionalOrderAminoMsg {
  type: "/injective.exchange.v1beta1.TrimmedDerivativeConditionalOrder";
  value: TrimmedDerivativeConditionalOrderAmino;
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
export interface QueryTraderDerivativeConditionalOrdersResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryTraderDerivativeConditionalOrdersResponse";
  value: Uint8Array;
}
/**
 * QueryTraderDerivativeOrdersResponse is the response type for the
 * Query/TraderDerivativeOrders RPC method.
 */
export interface QueryTraderDerivativeConditionalOrdersResponseAmino {
  orders: TrimmedDerivativeConditionalOrderAmino[];
}
export interface QueryTraderDerivativeConditionalOrdersResponseAminoMsg {
  type: "/injective.exchange.v1beta1.QueryTraderDerivativeConditionalOrdersResponse";
  value: QueryTraderDerivativeConditionalOrdersResponseAmino;
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
export interface QueryMarketAtomicExecutionFeeMultiplierRequestProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryMarketAtomicExecutionFeeMultiplierRequest";
  value: Uint8Array;
}
export interface QueryMarketAtomicExecutionFeeMultiplierRequestAmino {
  market_id: string;
}
export interface QueryMarketAtomicExecutionFeeMultiplierRequestAminoMsg {
  type: "/injective.exchange.v1beta1.QueryMarketAtomicExecutionFeeMultiplierRequest";
  value: QueryMarketAtomicExecutionFeeMultiplierRequestAmino;
}
export interface QueryMarketAtomicExecutionFeeMultiplierRequestSDKType {
  market_id: string;
}
export interface QueryMarketAtomicExecutionFeeMultiplierResponse {
  multiplier: string;
}
export interface QueryMarketAtomicExecutionFeeMultiplierResponseProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.QueryMarketAtomicExecutionFeeMultiplierResponse";
  value: Uint8Array;
}
export interface QueryMarketAtomicExecutionFeeMultiplierResponseAmino {
  multiplier: string;
}
export interface QueryMarketAtomicExecutionFeeMultiplierResponseAminoMsg {
  type: "/injective.exchange.v1beta1.QueryMarketAtomicExecutionFeeMultiplierResponse";
  value: QueryMarketAtomicExecutionFeeMultiplierResponseAmino;
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
  typeUrl: "/injective.exchange.v1beta1.Subaccount",
  encode(message: Subaccount, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: SubaccountAmino): Subaccount {
    return {
      trader: object.trader,
      subaccountNonce: object.subaccount_nonce
    };
  },
  toAmino(message: Subaccount): SubaccountAmino {
    const obj: any = {};
    obj.trader = message.trader;
    obj.subaccount_nonce = message.subaccountNonce;
    return obj;
  },
  fromAminoMsg(object: SubaccountAminoMsg): Subaccount {
    return Subaccount.fromAmino(object.value);
  },
  fromProtoMsg(message: SubaccountProtoMsg): Subaccount {
    return Subaccount.decode(message.value);
  },
  toProto(message: Subaccount): Uint8Array {
    return Subaccount.encode(message).finish();
  },
  toProtoMsg(message: Subaccount): SubaccountProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.Subaccount",
      value: Subaccount.encode(message).finish()
    };
  }
};
function createBaseQuerySubaccountOrdersRequest(): QuerySubaccountOrdersRequest {
  return {
    subaccountId: "",
    marketId: ""
  };
}
export const QuerySubaccountOrdersRequest = {
  typeUrl: "/injective.exchange.v1beta1.QuerySubaccountOrdersRequest",
  encode(message: QuerySubaccountOrdersRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QuerySubaccountOrdersRequestAmino): QuerySubaccountOrdersRequest {
    return {
      subaccountId: object.subaccount_id,
      marketId: object.market_id
    };
  },
  toAmino(message: QuerySubaccountOrdersRequest): QuerySubaccountOrdersRequestAmino {
    const obj: any = {};
    obj.subaccount_id = message.subaccountId;
    obj.market_id = message.marketId;
    return obj;
  },
  fromAminoMsg(object: QuerySubaccountOrdersRequestAminoMsg): QuerySubaccountOrdersRequest {
    return QuerySubaccountOrdersRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySubaccountOrdersRequestProtoMsg): QuerySubaccountOrdersRequest {
    return QuerySubaccountOrdersRequest.decode(message.value);
  },
  toProto(message: QuerySubaccountOrdersRequest): Uint8Array {
    return QuerySubaccountOrdersRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySubaccountOrdersRequest): QuerySubaccountOrdersRequestProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QuerySubaccountOrdersRequest",
      value: QuerySubaccountOrdersRequest.encode(message).finish()
    };
  }
};
function createBaseQuerySubaccountOrdersResponse(): QuerySubaccountOrdersResponse {
  return {
    buyOrders: [],
    sellOrders: []
  };
}
export const QuerySubaccountOrdersResponse = {
  typeUrl: "/injective.exchange.v1beta1.QuerySubaccountOrdersResponse",
  encode(message: QuerySubaccountOrdersResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QuerySubaccountOrdersResponseAmino): QuerySubaccountOrdersResponse {
    return {
      buyOrders: Array.isArray(object?.buy_orders) ? object.buy_orders.map((e: any) => SubaccountOrderData.fromAmino(e)) : [],
      sellOrders: Array.isArray(object?.sell_orders) ? object.sell_orders.map((e: any) => SubaccountOrderData.fromAmino(e)) : []
    };
  },
  toAmino(message: QuerySubaccountOrdersResponse): QuerySubaccountOrdersResponseAmino {
    const obj: any = {};
    if (message.buyOrders) {
      obj.buy_orders = message.buyOrders.map(e => e ? SubaccountOrderData.toAmino(e) : undefined);
    } else {
      obj.buy_orders = [];
    }
    if (message.sellOrders) {
      obj.sell_orders = message.sellOrders.map(e => e ? SubaccountOrderData.toAmino(e) : undefined);
    } else {
      obj.sell_orders = [];
    }
    return obj;
  },
  fromAminoMsg(object: QuerySubaccountOrdersResponseAminoMsg): QuerySubaccountOrdersResponse {
    return QuerySubaccountOrdersResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySubaccountOrdersResponseProtoMsg): QuerySubaccountOrdersResponse {
    return QuerySubaccountOrdersResponse.decode(message.value);
  },
  toProto(message: QuerySubaccountOrdersResponse): Uint8Array {
    return QuerySubaccountOrdersResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySubaccountOrdersResponse): QuerySubaccountOrdersResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QuerySubaccountOrdersResponse",
      value: QuerySubaccountOrdersResponse.encode(message).finish()
    };
  }
};
function createBaseSubaccountOrderbookMetadataWithMarket(): SubaccountOrderbookMetadataWithMarket {
  return {
    metadata: SubaccountOrderbookMetadata.fromPartial({}),
    marketId: "",
    isBuy: false
  };
}
export const SubaccountOrderbookMetadataWithMarket = {
  typeUrl: "/injective.exchange.v1beta1.SubaccountOrderbookMetadataWithMarket",
  encode(message: SubaccountOrderbookMetadataWithMarket, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: SubaccountOrderbookMetadataWithMarketAmino): SubaccountOrderbookMetadataWithMarket {
    return {
      metadata: object?.metadata ? SubaccountOrderbookMetadata.fromAmino(object.metadata) : undefined,
      marketId: object.market_id,
      isBuy: object.isBuy
    };
  },
  toAmino(message: SubaccountOrderbookMetadataWithMarket): SubaccountOrderbookMetadataWithMarketAmino {
    const obj: any = {};
    obj.metadata = message.metadata ? SubaccountOrderbookMetadata.toAmino(message.metadata) : undefined;
    obj.market_id = message.marketId;
    obj.isBuy = message.isBuy;
    return obj;
  },
  fromAminoMsg(object: SubaccountOrderbookMetadataWithMarketAminoMsg): SubaccountOrderbookMetadataWithMarket {
    return SubaccountOrderbookMetadataWithMarket.fromAmino(object.value);
  },
  fromProtoMsg(message: SubaccountOrderbookMetadataWithMarketProtoMsg): SubaccountOrderbookMetadataWithMarket {
    return SubaccountOrderbookMetadataWithMarket.decode(message.value);
  },
  toProto(message: SubaccountOrderbookMetadataWithMarket): Uint8Array {
    return SubaccountOrderbookMetadataWithMarket.encode(message).finish();
  },
  toProtoMsg(message: SubaccountOrderbookMetadataWithMarket): SubaccountOrderbookMetadataWithMarketProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.SubaccountOrderbookMetadataWithMarket",
      value: SubaccountOrderbookMetadataWithMarket.encode(message).finish()
    };
  }
};
function createBaseQueryExchangeParamsRequest(): QueryExchangeParamsRequest {
  return {};
}
export const QueryExchangeParamsRequest = {
  typeUrl: "/injective.exchange.v1beta1.QueryExchangeParamsRequest",
  encode(_: QueryExchangeParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryExchangeParamsRequest {
    return {};
  },
  fromPartial(_: Partial<QueryExchangeParamsRequest>): QueryExchangeParamsRequest {
    const message = createBaseQueryExchangeParamsRequest();
    return message;
  },
  fromAmino(_: QueryExchangeParamsRequestAmino): QueryExchangeParamsRequest {
    return {};
  },
  toAmino(_: QueryExchangeParamsRequest): QueryExchangeParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryExchangeParamsRequestAminoMsg): QueryExchangeParamsRequest {
    return QueryExchangeParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryExchangeParamsRequestProtoMsg): QueryExchangeParamsRequest {
    return QueryExchangeParamsRequest.decode(message.value);
  },
  toProto(message: QueryExchangeParamsRequest): Uint8Array {
    return QueryExchangeParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryExchangeParamsRequest): QueryExchangeParamsRequestProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryExchangeParamsRequest",
      value: QueryExchangeParamsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryExchangeParamsResponse(): QueryExchangeParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryExchangeParamsResponse = {
  typeUrl: "/injective.exchange.v1beta1.QueryExchangeParamsResponse",
  encode(message: QueryExchangeParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueryExchangeParamsResponseAmino): QueryExchangeParamsResponse {
    return {
      params: object?.params ? Params.fromAmino(object.params) : undefined
    };
  },
  toAmino(message: QueryExchangeParamsResponse): QueryExchangeParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryExchangeParamsResponseAminoMsg): QueryExchangeParamsResponse {
    return QueryExchangeParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryExchangeParamsResponseProtoMsg): QueryExchangeParamsResponse {
    return QueryExchangeParamsResponse.decode(message.value);
  },
  toProto(message: QueryExchangeParamsResponse): Uint8Array {
    return QueryExchangeParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryExchangeParamsResponse): QueryExchangeParamsResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryExchangeParamsResponse",
      value: QueryExchangeParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQuerySubaccountDepositsRequest(): QuerySubaccountDepositsRequest {
  return {
    subaccountId: "",
    subaccount: undefined
  };
}
export const QuerySubaccountDepositsRequest = {
  typeUrl: "/injective.exchange.v1beta1.QuerySubaccountDepositsRequest",
  encode(message: QuerySubaccountDepositsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QuerySubaccountDepositsRequestAmino): QuerySubaccountDepositsRequest {
    return {
      subaccountId: object.subaccount_id,
      subaccount: object?.subaccount ? Subaccount.fromAmino(object.subaccount) : undefined
    };
  },
  toAmino(message: QuerySubaccountDepositsRequest): QuerySubaccountDepositsRequestAmino {
    const obj: any = {};
    obj.subaccount_id = message.subaccountId;
    obj.subaccount = message.subaccount ? Subaccount.toAmino(message.subaccount) : undefined;
    return obj;
  },
  fromAminoMsg(object: QuerySubaccountDepositsRequestAminoMsg): QuerySubaccountDepositsRequest {
    return QuerySubaccountDepositsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySubaccountDepositsRequestProtoMsg): QuerySubaccountDepositsRequest {
    return QuerySubaccountDepositsRequest.decode(message.value);
  },
  toProto(message: QuerySubaccountDepositsRequest): Uint8Array {
    return QuerySubaccountDepositsRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySubaccountDepositsRequest): QuerySubaccountDepositsRequestProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QuerySubaccountDepositsRequest",
      value: QuerySubaccountDepositsRequest.encode(message).finish()
    };
  }
};
function createBaseQuerySubaccountDepositsResponse_DepositsEntry(): QuerySubaccountDepositsResponse_DepositsEntry {
  return {
    key: "",
    value: Deposit.fromPartial({})
  };
}
export const QuerySubaccountDepositsResponse_DepositsEntry = {
  encode(message: QuerySubaccountDepositsResponse_DepositsEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QuerySubaccountDepositsResponse_DepositsEntryAmino): QuerySubaccountDepositsResponse_DepositsEntry {
    return {
      key: object.key,
      value: object?.value ? Deposit.fromAmino(object.value) : undefined
    };
  },
  toAmino(message: QuerySubaccountDepositsResponse_DepositsEntry): QuerySubaccountDepositsResponse_DepositsEntryAmino {
    const obj: any = {};
    obj.key = message.key;
    obj.value = message.value ? Deposit.toAmino(message.value) : undefined;
    return obj;
  },
  fromAminoMsg(object: QuerySubaccountDepositsResponse_DepositsEntryAminoMsg): QuerySubaccountDepositsResponse_DepositsEntry {
    return QuerySubaccountDepositsResponse_DepositsEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySubaccountDepositsResponse_DepositsEntryProtoMsg): QuerySubaccountDepositsResponse_DepositsEntry {
    return QuerySubaccountDepositsResponse_DepositsEntry.decode(message.value);
  },
  toProto(message: QuerySubaccountDepositsResponse_DepositsEntry): Uint8Array {
    return QuerySubaccountDepositsResponse_DepositsEntry.encode(message).finish();
  }
};
function createBaseQuerySubaccountDepositsResponse(): QuerySubaccountDepositsResponse {
  return {
    deposits: {}
  };
}
export const QuerySubaccountDepositsResponse = {
  typeUrl: "/injective.exchange.v1beta1.QuerySubaccountDepositsResponse",
  encode(message: QuerySubaccountDepositsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QuerySubaccountDepositsResponseAmino): QuerySubaccountDepositsResponse {
    return {
      deposits: isObject(object.deposits) ? Object.entries(object.deposits).reduce<{
        [key: string]: Deposit;
      }>((acc, [key, value]) => {
        acc[key] = Deposit.fromAmino(value);
        return acc;
      }, {}) : {}
    };
  },
  toAmino(message: QuerySubaccountDepositsResponse): QuerySubaccountDepositsResponseAmino {
    const obj: any = {};
    obj.deposits = {};
    if (message.deposits) {
      Object.entries(message.deposits).forEach(([k, v]) => {
        obj.deposits[k] = Deposit.toAmino(v);
      });
    }
    return obj;
  },
  fromAminoMsg(object: QuerySubaccountDepositsResponseAminoMsg): QuerySubaccountDepositsResponse {
    return QuerySubaccountDepositsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySubaccountDepositsResponseProtoMsg): QuerySubaccountDepositsResponse {
    return QuerySubaccountDepositsResponse.decode(message.value);
  },
  toProto(message: QuerySubaccountDepositsResponse): Uint8Array {
    return QuerySubaccountDepositsResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySubaccountDepositsResponse): QuerySubaccountDepositsResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QuerySubaccountDepositsResponse",
      value: QuerySubaccountDepositsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryExchangeBalancesRequest(): QueryExchangeBalancesRequest {
  return {};
}
export const QueryExchangeBalancesRequest = {
  typeUrl: "/injective.exchange.v1beta1.QueryExchangeBalancesRequest",
  encode(_: QueryExchangeBalancesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryExchangeBalancesRequest {
    return {};
  },
  fromPartial(_: Partial<QueryExchangeBalancesRequest>): QueryExchangeBalancesRequest {
    const message = createBaseQueryExchangeBalancesRequest();
    return message;
  },
  fromAmino(_: QueryExchangeBalancesRequestAmino): QueryExchangeBalancesRequest {
    return {};
  },
  toAmino(_: QueryExchangeBalancesRequest): QueryExchangeBalancesRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryExchangeBalancesRequestAminoMsg): QueryExchangeBalancesRequest {
    return QueryExchangeBalancesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryExchangeBalancesRequestProtoMsg): QueryExchangeBalancesRequest {
    return QueryExchangeBalancesRequest.decode(message.value);
  },
  toProto(message: QueryExchangeBalancesRequest): Uint8Array {
    return QueryExchangeBalancesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryExchangeBalancesRequest): QueryExchangeBalancesRequestProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryExchangeBalancesRequest",
      value: QueryExchangeBalancesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryExchangeBalancesResponse(): QueryExchangeBalancesResponse {
  return {
    balances: []
  };
}
export const QueryExchangeBalancesResponse = {
  typeUrl: "/injective.exchange.v1beta1.QueryExchangeBalancesResponse",
  encode(message: QueryExchangeBalancesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueryExchangeBalancesResponseAmino): QueryExchangeBalancesResponse {
    return {
      balances: Array.isArray(object?.balances) ? object.balances.map((e: any) => Balance.fromAmino(e)) : []
    };
  },
  toAmino(message: QueryExchangeBalancesResponse): QueryExchangeBalancesResponseAmino {
    const obj: any = {};
    if (message.balances) {
      obj.balances = message.balances.map(e => e ? Balance.toAmino(e) : undefined);
    } else {
      obj.balances = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryExchangeBalancesResponseAminoMsg): QueryExchangeBalancesResponse {
    return QueryExchangeBalancesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryExchangeBalancesResponseProtoMsg): QueryExchangeBalancesResponse {
    return QueryExchangeBalancesResponse.decode(message.value);
  },
  toProto(message: QueryExchangeBalancesResponse): Uint8Array {
    return QueryExchangeBalancesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryExchangeBalancesResponse): QueryExchangeBalancesResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryExchangeBalancesResponse",
      value: QueryExchangeBalancesResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAggregateVolumeRequest(): QueryAggregateVolumeRequest {
  return {
    account: ""
  };
}
export const QueryAggregateVolumeRequest = {
  typeUrl: "/injective.exchange.v1beta1.QueryAggregateVolumeRequest",
  encode(message: QueryAggregateVolumeRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueryAggregateVolumeRequestAmino): QueryAggregateVolumeRequest {
    return {
      account: object.account
    };
  },
  toAmino(message: QueryAggregateVolumeRequest): QueryAggregateVolumeRequestAmino {
    const obj: any = {};
    obj.account = message.account;
    return obj;
  },
  fromAminoMsg(object: QueryAggregateVolumeRequestAminoMsg): QueryAggregateVolumeRequest {
    return QueryAggregateVolumeRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAggregateVolumeRequestProtoMsg): QueryAggregateVolumeRequest {
    return QueryAggregateVolumeRequest.decode(message.value);
  },
  toProto(message: QueryAggregateVolumeRequest): Uint8Array {
    return QueryAggregateVolumeRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAggregateVolumeRequest): QueryAggregateVolumeRequestProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryAggregateVolumeRequest",
      value: QueryAggregateVolumeRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAggregateVolumeResponse(): QueryAggregateVolumeResponse {
  return {
    aggregateVolumes: []
  };
}
export const QueryAggregateVolumeResponse = {
  typeUrl: "/injective.exchange.v1beta1.QueryAggregateVolumeResponse",
  encode(message: QueryAggregateVolumeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueryAggregateVolumeResponseAmino): QueryAggregateVolumeResponse {
    return {
      aggregateVolumes: Array.isArray(object?.aggregate_volumes) ? object.aggregate_volumes.map((e: any) => MarketVolume.fromAmino(e)) : []
    };
  },
  toAmino(message: QueryAggregateVolumeResponse): QueryAggregateVolumeResponseAmino {
    const obj: any = {};
    if (message.aggregateVolumes) {
      obj.aggregate_volumes = message.aggregateVolumes.map(e => e ? MarketVolume.toAmino(e) : undefined);
    } else {
      obj.aggregate_volumes = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryAggregateVolumeResponseAminoMsg): QueryAggregateVolumeResponse {
    return QueryAggregateVolumeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAggregateVolumeResponseProtoMsg): QueryAggregateVolumeResponse {
    return QueryAggregateVolumeResponse.decode(message.value);
  },
  toProto(message: QueryAggregateVolumeResponse): Uint8Array {
    return QueryAggregateVolumeResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAggregateVolumeResponse): QueryAggregateVolumeResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryAggregateVolumeResponse",
      value: QueryAggregateVolumeResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAggregateVolumesRequest(): QueryAggregateVolumesRequest {
  return {
    accounts: [],
    marketIds: []
  };
}
export const QueryAggregateVolumesRequest = {
  typeUrl: "/injective.exchange.v1beta1.QueryAggregateVolumesRequest",
  encode(message: QueryAggregateVolumesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueryAggregateVolumesRequestAmino): QueryAggregateVolumesRequest {
    return {
      accounts: Array.isArray(object?.accounts) ? object.accounts.map((e: any) => e) : [],
      marketIds: Array.isArray(object?.market_ids) ? object.market_ids.map((e: any) => e) : []
    };
  },
  toAmino(message: QueryAggregateVolumesRequest): QueryAggregateVolumesRequestAmino {
    const obj: any = {};
    if (message.accounts) {
      obj.accounts = message.accounts.map(e => e);
    } else {
      obj.accounts = [];
    }
    if (message.marketIds) {
      obj.market_ids = message.marketIds.map(e => e);
    } else {
      obj.market_ids = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryAggregateVolumesRequestAminoMsg): QueryAggregateVolumesRequest {
    return QueryAggregateVolumesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAggregateVolumesRequestProtoMsg): QueryAggregateVolumesRequest {
    return QueryAggregateVolumesRequest.decode(message.value);
  },
  toProto(message: QueryAggregateVolumesRequest): Uint8Array {
    return QueryAggregateVolumesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAggregateVolumesRequest): QueryAggregateVolumesRequestProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryAggregateVolumesRequest",
      value: QueryAggregateVolumesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAggregateVolumesResponse(): QueryAggregateVolumesResponse {
  return {
    aggregateAccountVolumes: [],
    aggregateMarketVolumes: []
  };
}
export const QueryAggregateVolumesResponse = {
  typeUrl: "/injective.exchange.v1beta1.QueryAggregateVolumesResponse",
  encode(message: QueryAggregateVolumesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueryAggregateVolumesResponseAmino): QueryAggregateVolumesResponse {
    return {
      aggregateAccountVolumes: Array.isArray(object?.aggregate_account_volumes) ? object.aggregate_account_volumes.map((e: any) => AggregateAccountVolumeRecord.fromAmino(e)) : [],
      aggregateMarketVolumes: Array.isArray(object?.aggregate_market_volumes) ? object.aggregate_market_volumes.map((e: any) => MarketVolume.fromAmino(e)) : []
    };
  },
  toAmino(message: QueryAggregateVolumesResponse): QueryAggregateVolumesResponseAmino {
    const obj: any = {};
    if (message.aggregateAccountVolumes) {
      obj.aggregate_account_volumes = message.aggregateAccountVolumes.map(e => e ? AggregateAccountVolumeRecord.toAmino(e) : undefined);
    } else {
      obj.aggregate_account_volumes = [];
    }
    if (message.aggregateMarketVolumes) {
      obj.aggregate_market_volumes = message.aggregateMarketVolumes.map(e => e ? MarketVolume.toAmino(e) : undefined);
    } else {
      obj.aggregate_market_volumes = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryAggregateVolumesResponseAminoMsg): QueryAggregateVolumesResponse {
    return QueryAggregateVolumesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAggregateVolumesResponseProtoMsg): QueryAggregateVolumesResponse {
    return QueryAggregateVolumesResponse.decode(message.value);
  },
  toProto(message: QueryAggregateVolumesResponse): Uint8Array {
    return QueryAggregateVolumesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAggregateVolumesResponse): QueryAggregateVolumesResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryAggregateVolumesResponse",
      value: QueryAggregateVolumesResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAggregateMarketVolumeRequest(): QueryAggregateMarketVolumeRequest {
  return {
    marketId: ""
  };
}
export const QueryAggregateMarketVolumeRequest = {
  typeUrl: "/injective.exchange.v1beta1.QueryAggregateMarketVolumeRequest",
  encode(message: QueryAggregateMarketVolumeRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueryAggregateMarketVolumeRequestAmino): QueryAggregateMarketVolumeRequest {
    return {
      marketId: object.market_id
    };
  },
  toAmino(message: QueryAggregateMarketVolumeRequest): QueryAggregateMarketVolumeRequestAmino {
    const obj: any = {};
    obj.market_id = message.marketId;
    return obj;
  },
  fromAminoMsg(object: QueryAggregateMarketVolumeRequestAminoMsg): QueryAggregateMarketVolumeRequest {
    return QueryAggregateMarketVolumeRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAggregateMarketVolumeRequestProtoMsg): QueryAggregateMarketVolumeRequest {
    return QueryAggregateMarketVolumeRequest.decode(message.value);
  },
  toProto(message: QueryAggregateMarketVolumeRequest): Uint8Array {
    return QueryAggregateMarketVolumeRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAggregateMarketVolumeRequest): QueryAggregateMarketVolumeRequestProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryAggregateMarketVolumeRequest",
      value: QueryAggregateMarketVolumeRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAggregateMarketVolumeResponse(): QueryAggregateMarketVolumeResponse {
  return {
    volume: VolumeRecord.fromPartial({})
  };
}
export const QueryAggregateMarketVolumeResponse = {
  typeUrl: "/injective.exchange.v1beta1.QueryAggregateMarketVolumeResponse",
  encode(message: QueryAggregateMarketVolumeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueryAggregateMarketVolumeResponseAmino): QueryAggregateMarketVolumeResponse {
    return {
      volume: object?.volume ? VolumeRecord.fromAmino(object.volume) : undefined
    };
  },
  toAmino(message: QueryAggregateMarketVolumeResponse): QueryAggregateMarketVolumeResponseAmino {
    const obj: any = {};
    obj.volume = message.volume ? VolumeRecord.toAmino(message.volume) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAggregateMarketVolumeResponseAminoMsg): QueryAggregateMarketVolumeResponse {
    return QueryAggregateMarketVolumeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAggregateMarketVolumeResponseProtoMsg): QueryAggregateMarketVolumeResponse {
    return QueryAggregateMarketVolumeResponse.decode(message.value);
  },
  toProto(message: QueryAggregateMarketVolumeResponse): Uint8Array {
    return QueryAggregateMarketVolumeResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAggregateMarketVolumeResponse): QueryAggregateMarketVolumeResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryAggregateMarketVolumeResponse",
      value: QueryAggregateMarketVolumeResponse.encode(message).finish()
    };
  }
};
function createBaseQueryDenomDecimalRequest(): QueryDenomDecimalRequest {
  return {
    denom: ""
  };
}
export const QueryDenomDecimalRequest = {
  typeUrl: "/injective.exchange.v1beta1.QueryDenomDecimalRequest",
  encode(message: QueryDenomDecimalRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueryDenomDecimalRequestAmino): QueryDenomDecimalRequest {
    return {
      denom: object.denom
    };
  },
  toAmino(message: QueryDenomDecimalRequest): QueryDenomDecimalRequestAmino {
    const obj: any = {};
    obj.denom = message.denom;
    return obj;
  },
  fromAminoMsg(object: QueryDenomDecimalRequestAminoMsg): QueryDenomDecimalRequest {
    return QueryDenomDecimalRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDenomDecimalRequestProtoMsg): QueryDenomDecimalRequest {
    return QueryDenomDecimalRequest.decode(message.value);
  },
  toProto(message: QueryDenomDecimalRequest): Uint8Array {
    return QueryDenomDecimalRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDenomDecimalRequest): QueryDenomDecimalRequestProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryDenomDecimalRequest",
      value: QueryDenomDecimalRequest.encode(message).finish()
    };
  }
};
function createBaseQueryDenomDecimalResponse(): QueryDenomDecimalResponse {
  return {
    decimal: BigInt(0)
  };
}
export const QueryDenomDecimalResponse = {
  typeUrl: "/injective.exchange.v1beta1.QueryDenomDecimalResponse",
  encode(message: QueryDenomDecimalResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.decimal !== BigInt(0)) {
      writer.uint32(8).uint64(message.decimal);
    }
    return writer;
  },
  fromJSON(object: any): QueryDenomDecimalResponse {
    return {
      decimal: isSet(object.decimal) ? BigInt(object.decimal.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<QueryDenomDecimalResponse>): QueryDenomDecimalResponse {
    const message = createBaseQueryDenomDecimalResponse();
    message.decimal = object.decimal !== undefined && object.decimal !== null ? BigInt(object.decimal.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryDenomDecimalResponseAmino): QueryDenomDecimalResponse {
    return {
      decimal: BigInt(object.decimal)
    };
  },
  toAmino(message: QueryDenomDecimalResponse): QueryDenomDecimalResponseAmino {
    const obj: any = {};
    obj.decimal = message.decimal ? message.decimal.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDenomDecimalResponseAminoMsg): QueryDenomDecimalResponse {
    return QueryDenomDecimalResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDenomDecimalResponseProtoMsg): QueryDenomDecimalResponse {
    return QueryDenomDecimalResponse.decode(message.value);
  },
  toProto(message: QueryDenomDecimalResponse): Uint8Array {
    return QueryDenomDecimalResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDenomDecimalResponse): QueryDenomDecimalResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryDenomDecimalResponse",
      value: QueryDenomDecimalResponse.encode(message).finish()
    };
  }
};
function createBaseQueryDenomDecimalsRequest(): QueryDenomDecimalsRequest {
  return {
    denoms: []
  };
}
export const QueryDenomDecimalsRequest = {
  typeUrl: "/injective.exchange.v1beta1.QueryDenomDecimalsRequest",
  encode(message: QueryDenomDecimalsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueryDenomDecimalsRequestAmino): QueryDenomDecimalsRequest {
    return {
      denoms: Array.isArray(object?.denoms) ? object.denoms.map((e: any) => e) : []
    };
  },
  toAmino(message: QueryDenomDecimalsRequest): QueryDenomDecimalsRequestAmino {
    const obj: any = {};
    if (message.denoms) {
      obj.denoms = message.denoms.map(e => e);
    } else {
      obj.denoms = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryDenomDecimalsRequestAminoMsg): QueryDenomDecimalsRequest {
    return QueryDenomDecimalsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDenomDecimalsRequestProtoMsg): QueryDenomDecimalsRequest {
    return QueryDenomDecimalsRequest.decode(message.value);
  },
  toProto(message: QueryDenomDecimalsRequest): Uint8Array {
    return QueryDenomDecimalsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDenomDecimalsRequest): QueryDenomDecimalsRequestProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryDenomDecimalsRequest",
      value: QueryDenomDecimalsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryDenomDecimalsResponse(): QueryDenomDecimalsResponse {
  return {
    denomDecimals: []
  };
}
export const QueryDenomDecimalsResponse = {
  typeUrl: "/injective.exchange.v1beta1.QueryDenomDecimalsResponse",
  encode(message: QueryDenomDecimalsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueryDenomDecimalsResponseAmino): QueryDenomDecimalsResponse {
    return {
      denomDecimals: Array.isArray(object?.denom_decimals) ? object.denom_decimals.map((e: any) => DenomDecimals.fromAmino(e)) : []
    };
  },
  toAmino(message: QueryDenomDecimalsResponse): QueryDenomDecimalsResponseAmino {
    const obj: any = {};
    if (message.denomDecimals) {
      obj.denom_decimals = message.denomDecimals.map(e => e ? DenomDecimals.toAmino(e) : undefined);
    } else {
      obj.denom_decimals = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryDenomDecimalsResponseAminoMsg): QueryDenomDecimalsResponse {
    return QueryDenomDecimalsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDenomDecimalsResponseProtoMsg): QueryDenomDecimalsResponse {
    return QueryDenomDecimalsResponse.decode(message.value);
  },
  toProto(message: QueryDenomDecimalsResponse): Uint8Array {
    return QueryDenomDecimalsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDenomDecimalsResponse): QueryDenomDecimalsResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryDenomDecimalsResponse",
      value: QueryDenomDecimalsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAggregateMarketVolumesRequest(): QueryAggregateMarketVolumesRequest {
  return {
    marketIds: []
  };
}
export const QueryAggregateMarketVolumesRequest = {
  typeUrl: "/injective.exchange.v1beta1.QueryAggregateMarketVolumesRequest",
  encode(message: QueryAggregateMarketVolumesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueryAggregateMarketVolumesRequestAmino): QueryAggregateMarketVolumesRequest {
    return {
      marketIds: Array.isArray(object?.market_ids) ? object.market_ids.map((e: any) => e) : []
    };
  },
  toAmino(message: QueryAggregateMarketVolumesRequest): QueryAggregateMarketVolumesRequestAmino {
    const obj: any = {};
    if (message.marketIds) {
      obj.market_ids = message.marketIds.map(e => e);
    } else {
      obj.market_ids = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryAggregateMarketVolumesRequestAminoMsg): QueryAggregateMarketVolumesRequest {
    return QueryAggregateMarketVolumesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAggregateMarketVolumesRequestProtoMsg): QueryAggregateMarketVolumesRequest {
    return QueryAggregateMarketVolumesRequest.decode(message.value);
  },
  toProto(message: QueryAggregateMarketVolumesRequest): Uint8Array {
    return QueryAggregateMarketVolumesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAggregateMarketVolumesRequest): QueryAggregateMarketVolumesRequestProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryAggregateMarketVolumesRequest",
      value: QueryAggregateMarketVolumesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAggregateMarketVolumesResponse(): QueryAggregateMarketVolumesResponse {
  return {
    volumes: []
  };
}
export const QueryAggregateMarketVolumesResponse = {
  typeUrl: "/injective.exchange.v1beta1.QueryAggregateMarketVolumesResponse",
  encode(message: QueryAggregateMarketVolumesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueryAggregateMarketVolumesResponseAmino): QueryAggregateMarketVolumesResponse {
    return {
      volumes: Array.isArray(object?.volumes) ? object.volumes.map((e: any) => MarketVolume.fromAmino(e)) : []
    };
  },
  toAmino(message: QueryAggregateMarketVolumesResponse): QueryAggregateMarketVolumesResponseAmino {
    const obj: any = {};
    if (message.volumes) {
      obj.volumes = message.volumes.map(e => e ? MarketVolume.toAmino(e) : undefined);
    } else {
      obj.volumes = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryAggregateMarketVolumesResponseAminoMsg): QueryAggregateMarketVolumesResponse {
    return QueryAggregateMarketVolumesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAggregateMarketVolumesResponseProtoMsg): QueryAggregateMarketVolumesResponse {
    return QueryAggregateMarketVolumesResponse.decode(message.value);
  },
  toProto(message: QueryAggregateMarketVolumesResponse): Uint8Array {
    return QueryAggregateMarketVolumesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAggregateMarketVolumesResponse): QueryAggregateMarketVolumesResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryAggregateMarketVolumesResponse",
      value: QueryAggregateMarketVolumesResponse.encode(message).finish()
    };
  }
};
function createBaseQuerySubaccountDepositRequest(): QuerySubaccountDepositRequest {
  return {
    subaccountId: "",
    denom: ""
  };
}
export const QuerySubaccountDepositRequest = {
  typeUrl: "/injective.exchange.v1beta1.QuerySubaccountDepositRequest",
  encode(message: QuerySubaccountDepositRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QuerySubaccountDepositRequestAmino): QuerySubaccountDepositRequest {
    return {
      subaccountId: object.subaccount_id,
      denom: object.denom
    };
  },
  toAmino(message: QuerySubaccountDepositRequest): QuerySubaccountDepositRequestAmino {
    const obj: any = {};
    obj.subaccount_id = message.subaccountId;
    obj.denom = message.denom;
    return obj;
  },
  fromAminoMsg(object: QuerySubaccountDepositRequestAminoMsg): QuerySubaccountDepositRequest {
    return QuerySubaccountDepositRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySubaccountDepositRequestProtoMsg): QuerySubaccountDepositRequest {
    return QuerySubaccountDepositRequest.decode(message.value);
  },
  toProto(message: QuerySubaccountDepositRequest): Uint8Array {
    return QuerySubaccountDepositRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySubaccountDepositRequest): QuerySubaccountDepositRequestProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QuerySubaccountDepositRequest",
      value: QuerySubaccountDepositRequest.encode(message).finish()
    };
  }
};
function createBaseQuerySubaccountDepositResponse(): QuerySubaccountDepositResponse {
  return {
    deposits: Deposit.fromPartial({})
  };
}
export const QuerySubaccountDepositResponse = {
  typeUrl: "/injective.exchange.v1beta1.QuerySubaccountDepositResponse",
  encode(message: QuerySubaccountDepositResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QuerySubaccountDepositResponseAmino): QuerySubaccountDepositResponse {
    return {
      deposits: object?.deposits ? Deposit.fromAmino(object.deposits) : undefined
    };
  },
  toAmino(message: QuerySubaccountDepositResponse): QuerySubaccountDepositResponseAmino {
    const obj: any = {};
    obj.deposits = message.deposits ? Deposit.toAmino(message.deposits) : undefined;
    return obj;
  },
  fromAminoMsg(object: QuerySubaccountDepositResponseAminoMsg): QuerySubaccountDepositResponse {
    return QuerySubaccountDepositResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySubaccountDepositResponseProtoMsg): QuerySubaccountDepositResponse {
    return QuerySubaccountDepositResponse.decode(message.value);
  },
  toProto(message: QuerySubaccountDepositResponse): Uint8Array {
    return QuerySubaccountDepositResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySubaccountDepositResponse): QuerySubaccountDepositResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QuerySubaccountDepositResponse",
      value: QuerySubaccountDepositResponse.encode(message).finish()
    };
  }
};
function createBaseQuerySpotMarketsRequest(): QuerySpotMarketsRequest {
  return {
    status: "",
    marketIds: []
  };
}
export const QuerySpotMarketsRequest = {
  typeUrl: "/injective.exchange.v1beta1.QuerySpotMarketsRequest",
  encode(message: QuerySpotMarketsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QuerySpotMarketsRequestAmino): QuerySpotMarketsRequest {
    return {
      status: object.status,
      marketIds: Array.isArray(object?.market_ids) ? object.market_ids.map((e: any) => e) : []
    };
  },
  toAmino(message: QuerySpotMarketsRequest): QuerySpotMarketsRequestAmino {
    const obj: any = {};
    obj.status = message.status;
    if (message.marketIds) {
      obj.market_ids = message.marketIds.map(e => e);
    } else {
      obj.market_ids = [];
    }
    return obj;
  },
  fromAminoMsg(object: QuerySpotMarketsRequestAminoMsg): QuerySpotMarketsRequest {
    return QuerySpotMarketsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySpotMarketsRequestProtoMsg): QuerySpotMarketsRequest {
    return QuerySpotMarketsRequest.decode(message.value);
  },
  toProto(message: QuerySpotMarketsRequest): Uint8Array {
    return QuerySpotMarketsRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySpotMarketsRequest): QuerySpotMarketsRequestProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QuerySpotMarketsRequest",
      value: QuerySpotMarketsRequest.encode(message).finish()
    };
  }
};
function createBaseQuerySpotMarketsResponse(): QuerySpotMarketsResponse {
  return {
    markets: []
  };
}
export const QuerySpotMarketsResponse = {
  typeUrl: "/injective.exchange.v1beta1.QuerySpotMarketsResponse",
  encode(message: QuerySpotMarketsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QuerySpotMarketsResponseAmino): QuerySpotMarketsResponse {
    return {
      markets: Array.isArray(object?.markets) ? object.markets.map((e: any) => SpotMarket.fromAmino(e)) : []
    };
  },
  toAmino(message: QuerySpotMarketsResponse): QuerySpotMarketsResponseAmino {
    const obj: any = {};
    if (message.markets) {
      obj.markets = message.markets.map(e => e ? SpotMarket.toAmino(e) : undefined);
    } else {
      obj.markets = [];
    }
    return obj;
  },
  fromAminoMsg(object: QuerySpotMarketsResponseAminoMsg): QuerySpotMarketsResponse {
    return QuerySpotMarketsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySpotMarketsResponseProtoMsg): QuerySpotMarketsResponse {
    return QuerySpotMarketsResponse.decode(message.value);
  },
  toProto(message: QuerySpotMarketsResponse): Uint8Array {
    return QuerySpotMarketsResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySpotMarketsResponse): QuerySpotMarketsResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QuerySpotMarketsResponse",
      value: QuerySpotMarketsResponse.encode(message).finish()
    };
  }
};
function createBaseQuerySpotMarketRequest(): QuerySpotMarketRequest {
  return {
    marketId: ""
  };
}
export const QuerySpotMarketRequest = {
  typeUrl: "/injective.exchange.v1beta1.QuerySpotMarketRequest",
  encode(message: QuerySpotMarketRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QuerySpotMarketRequestAmino): QuerySpotMarketRequest {
    return {
      marketId: object.market_id
    };
  },
  toAmino(message: QuerySpotMarketRequest): QuerySpotMarketRequestAmino {
    const obj: any = {};
    obj.market_id = message.marketId;
    return obj;
  },
  fromAminoMsg(object: QuerySpotMarketRequestAminoMsg): QuerySpotMarketRequest {
    return QuerySpotMarketRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySpotMarketRequestProtoMsg): QuerySpotMarketRequest {
    return QuerySpotMarketRequest.decode(message.value);
  },
  toProto(message: QuerySpotMarketRequest): Uint8Array {
    return QuerySpotMarketRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySpotMarketRequest): QuerySpotMarketRequestProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QuerySpotMarketRequest",
      value: QuerySpotMarketRequest.encode(message).finish()
    };
  }
};
function createBaseQuerySpotMarketResponse(): QuerySpotMarketResponse {
  return {
    market: SpotMarket.fromPartial({})
  };
}
export const QuerySpotMarketResponse = {
  typeUrl: "/injective.exchange.v1beta1.QuerySpotMarketResponse",
  encode(message: QuerySpotMarketResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QuerySpotMarketResponseAmino): QuerySpotMarketResponse {
    return {
      market: object?.market ? SpotMarket.fromAmino(object.market) : undefined
    };
  },
  toAmino(message: QuerySpotMarketResponse): QuerySpotMarketResponseAmino {
    const obj: any = {};
    obj.market = message.market ? SpotMarket.toAmino(message.market) : undefined;
    return obj;
  },
  fromAminoMsg(object: QuerySpotMarketResponseAminoMsg): QuerySpotMarketResponse {
    return QuerySpotMarketResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySpotMarketResponseProtoMsg): QuerySpotMarketResponse {
    return QuerySpotMarketResponse.decode(message.value);
  },
  toProto(message: QuerySpotMarketResponse): Uint8Array {
    return QuerySpotMarketResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySpotMarketResponse): QuerySpotMarketResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QuerySpotMarketResponse",
      value: QuerySpotMarketResponse.encode(message).finish()
    };
  }
};
function createBaseQuerySpotOrderbookRequest(): QuerySpotOrderbookRequest {
  return {
    marketId: "",
    limit: BigInt(0),
    orderSide: 0,
    limitCumulativeNotional: undefined,
    limitCumulativeQuantity: undefined
  };
}
export const QuerySpotOrderbookRequest = {
  typeUrl: "/injective.exchange.v1beta1.QuerySpotOrderbookRequest",
  encode(message: QuerySpotOrderbookRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    if (message.limit !== BigInt(0)) {
      writer.uint32(16).uint64(message.limit);
    }
    if (message.orderSide !== 0) {
      writer.uint32(24).int32(message.orderSide);
    }
    if (message.limitCumulativeNotional !== undefined) {
      writer.uint32(34).string(Decimal.fromUserInput(message.limitCumulativeNotional, 18).atomics);
    }
    if (message.limitCumulativeQuantity !== undefined) {
      writer.uint32(42).string(Decimal.fromUserInput(message.limitCumulativeQuantity, 18).atomics);
    }
    return writer;
  },
  fromJSON(object: any): QuerySpotOrderbookRequest {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      limit: isSet(object.limit) ? BigInt(object.limit.toString()) : BigInt(0),
      orderSide: isSet(object.orderSide) ? orderSideFromJSON(object.orderSide) : -1,
      limitCumulativeNotional: isSet(object.limitCumulativeNotional) ? String(object.limitCumulativeNotional) : undefined,
      limitCumulativeQuantity: isSet(object.limitCumulativeQuantity) ? String(object.limitCumulativeQuantity) : undefined
    };
  },
  fromPartial(object: Partial<QuerySpotOrderbookRequest>): QuerySpotOrderbookRequest {
    const message = createBaseQuerySpotOrderbookRequest();
    message.marketId = object.marketId ?? "";
    message.limit = object.limit !== undefined && object.limit !== null ? BigInt(object.limit.toString()) : BigInt(0);
    message.orderSide = object.orderSide ?? 0;
    message.limitCumulativeNotional = object.limitCumulativeNotional ?? undefined;
    message.limitCumulativeQuantity = object.limitCumulativeQuantity ?? undefined;
    return message;
  },
  fromAmino(object: QuerySpotOrderbookRequestAmino): QuerySpotOrderbookRequest {
    return {
      marketId: object.market_id,
      limit: BigInt(object.limit),
      orderSide: isSet(object.order_side) ? orderSideFromJSON(object.order_side) : -1,
      limitCumulativeNotional: object?.limit_cumulative_notional,
      limitCumulativeQuantity: object?.limit_cumulative_quantity
    };
  },
  toAmino(message: QuerySpotOrderbookRequest): QuerySpotOrderbookRequestAmino {
    const obj: any = {};
    obj.market_id = message.marketId;
    obj.limit = message.limit ? message.limit.toString() : undefined;
    obj.order_side = message.orderSide;
    obj.limit_cumulative_notional = message.limitCumulativeNotional;
    obj.limit_cumulative_quantity = message.limitCumulativeQuantity;
    return obj;
  },
  fromAminoMsg(object: QuerySpotOrderbookRequestAminoMsg): QuerySpotOrderbookRequest {
    return QuerySpotOrderbookRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySpotOrderbookRequestProtoMsg): QuerySpotOrderbookRequest {
    return QuerySpotOrderbookRequest.decode(message.value);
  },
  toProto(message: QuerySpotOrderbookRequest): Uint8Array {
    return QuerySpotOrderbookRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySpotOrderbookRequest): QuerySpotOrderbookRequestProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QuerySpotOrderbookRequest",
      value: QuerySpotOrderbookRequest.encode(message).finish()
    };
  }
};
function createBaseQuerySpotOrderbookResponse(): QuerySpotOrderbookResponse {
  return {
    buysPriceLevel: [],
    sellsPriceLevel: []
  };
}
export const QuerySpotOrderbookResponse = {
  typeUrl: "/injective.exchange.v1beta1.QuerySpotOrderbookResponse",
  encode(message: QuerySpotOrderbookResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QuerySpotOrderbookResponseAmino): QuerySpotOrderbookResponse {
    return {
      buysPriceLevel: Array.isArray(object?.buys_price_level) ? object.buys_price_level.map((e: any) => Level.fromAmino(e)) : [],
      sellsPriceLevel: Array.isArray(object?.sells_price_level) ? object.sells_price_level.map((e: any) => Level.fromAmino(e)) : []
    };
  },
  toAmino(message: QuerySpotOrderbookResponse): QuerySpotOrderbookResponseAmino {
    const obj: any = {};
    if (message.buysPriceLevel) {
      obj.buys_price_level = message.buysPriceLevel.map(e => e ? Level.toAmino(e) : undefined);
    } else {
      obj.buys_price_level = [];
    }
    if (message.sellsPriceLevel) {
      obj.sells_price_level = message.sellsPriceLevel.map(e => e ? Level.toAmino(e) : undefined);
    } else {
      obj.sells_price_level = [];
    }
    return obj;
  },
  fromAminoMsg(object: QuerySpotOrderbookResponseAminoMsg): QuerySpotOrderbookResponse {
    return QuerySpotOrderbookResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySpotOrderbookResponseProtoMsg): QuerySpotOrderbookResponse {
    return QuerySpotOrderbookResponse.decode(message.value);
  },
  toProto(message: QuerySpotOrderbookResponse): Uint8Array {
    return QuerySpotOrderbookResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySpotOrderbookResponse): QuerySpotOrderbookResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QuerySpotOrderbookResponse",
      value: QuerySpotOrderbookResponse.encode(message).finish()
    };
  }
};
function createBaseFullSpotMarket(): FullSpotMarket {
  return {
    market: SpotMarket.fromPartial({}),
    midPriceAndTob: undefined
  };
}
export const FullSpotMarket = {
  typeUrl: "/injective.exchange.v1beta1.FullSpotMarket",
  encode(message: FullSpotMarket, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: FullSpotMarketAmino): FullSpotMarket {
    return {
      market: object?.market ? SpotMarket.fromAmino(object.market) : undefined,
      midPriceAndTob: object?.mid_price_and_tob ? MidPriceAndTOB.fromAmino(object.mid_price_and_tob) : undefined
    };
  },
  toAmino(message: FullSpotMarket): FullSpotMarketAmino {
    const obj: any = {};
    obj.market = message.market ? SpotMarket.toAmino(message.market) : undefined;
    obj.mid_price_and_tob = message.midPriceAndTob ? MidPriceAndTOB.toAmino(message.midPriceAndTob) : undefined;
    return obj;
  },
  fromAminoMsg(object: FullSpotMarketAminoMsg): FullSpotMarket {
    return FullSpotMarket.fromAmino(object.value);
  },
  fromProtoMsg(message: FullSpotMarketProtoMsg): FullSpotMarket {
    return FullSpotMarket.decode(message.value);
  },
  toProto(message: FullSpotMarket): Uint8Array {
    return FullSpotMarket.encode(message).finish();
  },
  toProtoMsg(message: FullSpotMarket): FullSpotMarketProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.FullSpotMarket",
      value: FullSpotMarket.encode(message).finish()
    };
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
  typeUrl: "/injective.exchange.v1beta1.QueryFullSpotMarketsRequest",
  encode(message: QueryFullSpotMarketsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueryFullSpotMarketsRequestAmino): QueryFullSpotMarketsRequest {
    return {
      status: object.status,
      marketIds: Array.isArray(object?.market_ids) ? object.market_ids.map((e: any) => e) : [],
      withMidPriceAndTob: object.with_mid_price_and_tob
    };
  },
  toAmino(message: QueryFullSpotMarketsRequest): QueryFullSpotMarketsRequestAmino {
    const obj: any = {};
    obj.status = message.status;
    if (message.marketIds) {
      obj.market_ids = message.marketIds.map(e => e);
    } else {
      obj.market_ids = [];
    }
    obj.with_mid_price_and_tob = message.withMidPriceAndTob;
    return obj;
  },
  fromAminoMsg(object: QueryFullSpotMarketsRequestAminoMsg): QueryFullSpotMarketsRequest {
    return QueryFullSpotMarketsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryFullSpotMarketsRequestProtoMsg): QueryFullSpotMarketsRequest {
    return QueryFullSpotMarketsRequest.decode(message.value);
  },
  toProto(message: QueryFullSpotMarketsRequest): Uint8Array {
    return QueryFullSpotMarketsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryFullSpotMarketsRequest): QueryFullSpotMarketsRequestProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryFullSpotMarketsRequest",
      value: QueryFullSpotMarketsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryFullSpotMarketsResponse(): QueryFullSpotMarketsResponse {
  return {
    markets: []
  };
}
export const QueryFullSpotMarketsResponse = {
  typeUrl: "/injective.exchange.v1beta1.QueryFullSpotMarketsResponse",
  encode(message: QueryFullSpotMarketsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueryFullSpotMarketsResponseAmino): QueryFullSpotMarketsResponse {
    return {
      markets: Array.isArray(object?.markets) ? object.markets.map((e: any) => FullSpotMarket.fromAmino(e)) : []
    };
  },
  toAmino(message: QueryFullSpotMarketsResponse): QueryFullSpotMarketsResponseAmino {
    const obj: any = {};
    if (message.markets) {
      obj.markets = message.markets.map(e => e ? FullSpotMarket.toAmino(e) : undefined);
    } else {
      obj.markets = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryFullSpotMarketsResponseAminoMsg): QueryFullSpotMarketsResponse {
    return QueryFullSpotMarketsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryFullSpotMarketsResponseProtoMsg): QueryFullSpotMarketsResponse {
    return QueryFullSpotMarketsResponse.decode(message.value);
  },
  toProto(message: QueryFullSpotMarketsResponse): Uint8Array {
    return QueryFullSpotMarketsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryFullSpotMarketsResponse): QueryFullSpotMarketsResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryFullSpotMarketsResponse",
      value: QueryFullSpotMarketsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryFullSpotMarketRequest(): QueryFullSpotMarketRequest {
  return {
    marketId: "",
    withMidPriceAndTob: false
  };
}
export const QueryFullSpotMarketRequest = {
  typeUrl: "/injective.exchange.v1beta1.QueryFullSpotMarketRequest",
  encode(message: QueryFullSpotMarketRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueryFullSpotMarketRequestAmino): QueryFullSpotMarketRequest {
    return {
      marketId: object.market_id,
      withMidPriceAndTob: object.with_mid_price_and_tob
    };
  },
  toAmino(message: QueryFullSpotMarketRequest): QueryFullSpotMarketRequestAmino {
    const obj: any = {};
    obj.market_id = message.marketId;
    obj.with_mid_price_and_tob = message.withMidPriceAndTob;
    return obj;
  },
  fromAminoMsg(object: QueryFullSpotMarketRequestAminoMsg): QueryFullSpotMarketRequest {
    return QueryFullSpotMarketRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryFullSpotMarketRequestProtoMsg): QueryFullSpotMarketRequest {
    return QueryFullSpotMarketRequest.decode(message.value);
  },
  toProto(message: QueryFullSpotMarketRequest): Uint8Array {
    return QueryFullSpotMarketRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryFullSpotMarketRequest): QueryFullSpotMarketRequestProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryFullSpotMarketRequest",
      value: QueryFullSpotMarketRequest.encode(message).finish()
    };
  }
};
function createBaseQueryFullSpotMarketResponse(): QueryFullSpotMarketResponse {
  return {
    market: FullSpotMarket.fromPartial({})
  };
}
export const QueryFullSpotMarketResponse = {
  typeUrl: "/injective.exchange.v1beta1.QueryFullSpotMarketResponse",
  encode(message: QueryFullSpotMarketResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueryFullSpotMarketResponseAmino): QueryFullSpotMarketResponse {
    return {
      market: object?.market ? FullSpotMarket.fromAmino(object.market) : undefined
    };
  },
  toAmino(message: QueryFullSpotMarketResponse): QueryFullSpotMarketResponseAmino {
    const obj: any = {};
    obj.market = message.market ? FullSpotMarket.toAmino(message.market) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryFullSpotMarketResponseAminoMsg): QueryFullSpotMarketResponse {
    return QueryFullSpotMarketResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryFullSpotMarketResponseProtoMsg): QueryFullSpotMarketResponse {
    return QueryFullSpotMarketResponse.decode(message.value);
  },
  toProto(message: QueryFullSpotMarketResponse): Uint8Array {
    return QueryFullSpotMarketResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryFullSpotMarketResponse): QueryFullSpotMarketResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryFullSpotMarketResponse",
      value: QueryFullSpotMarketResponse.encode(message).finish()
    };
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
  typeUrl: "/injective.exchange.v1beta1.QuerySpotOrdersByHashesRequest",
  encode(message: QuerySpotOrdersByHashesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QuerySpotOrdersByHashesRequestAmino): QuerySpotOrdersByHashesRequest {
    return {
      marketId: object.market_id,
      subaccountId: object.subaccount_id,
      orderHashes: Array.isArray(object?.order_hashes) ? object.order_hashes.map((e: any) => e) : []
    };
  },
  toAmino(message: QuerySpotOrdersByHashesRequest): QuerySpotOrdersByHashesRequestAmino {
    const obj: any = {};
    obj.market_id = message.marketId;
    obj.subaccount_id = message.subaccountId;
    if (message.orderHashes) {
      obj.order_hashes = message.orderHashes.map(e => e);
    } else {
      obj.order_hashes = [];
    }
    return obj;
  },
  fromAminoMsg(object: QuerySpotOrdersByHashesRequestAminoMsg): QuerySpotOrdersByHashesRequest {
    return QuerySpotOrdersByHashesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySpotOrdersByHashesRequestProtoMsg): QuerySpotOrdersByHashesRequest {
    return QuerySpotOrdersByHashesRequest.decode(message.value);
  },
  toProto(message: QuerySpotOrdersByHashesRequest): Uint8Array {
    return QuerySpotOrdersByHashesRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySpotOrdersByHashesRequest): QuerySpotOrdersByHashesRequestProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QuerySpotOrdersByHashesRequest",
      value: QuerySpotOrdersByHashesRequest.encode(message).finish()
    };
  }
};
function createBaseQuerySpotOrdersByHashesResponse(): QuerySpotOrdersByHashesResponse {
  return {
    orders: []
  };
}
export const QuerySpotOrdersByHashesResponse = {
  typeUrl: "/injective.exchange.v1beta1.QuerySpotOrdersByHashesResponse",
  encode(message: QuerySpotOrdersByHashesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QuerySpotOrdersByHashesResponseAmino): QuerySpotOrdersByHashesResponse {
    return {
      orders: Array.isArray(object?.orders) ? object.orders.map((e: any) => TrimmedSpotLimitOrder.fromAmino(e)) : []
    };
  },
  toAmino(message: QuerySpotOrdersByHashesResponse): QuerySpotOrdersByHashesResponseAmino {
    const obj: any = {};
    if (message.orders) {
      obj.orders = message.orders.map(e => e ? TrimmedSpotLimitOrder.toAmino(e) : undefined);
    } else {
      obj.orders = [];
    }
    return obj;
  },
  fromAminoMsg(object: QuerySpotOrdersByHashesResponseAminoMsg): QuerySpotOrdersByHashesResponse {
    return QuerySpotOrdersByHashesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySpotOrdersByHashesResponseProtoMsg): QuerySpotOrdersByHashesResponse {
    return QuerySpotOrdersByHashesResponse.decode(message.value);
  },
  toProto(message: QuerySpotOrdersByHashesResponse): Uint8Array {
    return QuerySpotOrdersByHashesResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySpotOrdersByHashesResponse): QuerySpotOrdersByHashesResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QuerySpotOrdersByHashesResponse",
      value: QuerySpotOrdersByHashesResponse.encode(message).finish()
    };
  }
};
function createBaseQueryTraderSpotOrdersRequest(): QueryTraderSpotOrdersRequest {
  return {
    marketId: "",
    subaccountId: ""
  };
}
export const QueryTraderSpotOrdersRequest = {
  typeUrl: "/injective.exchange.v1beta1.QueryTraderSpotOrdersRequest",
  encode(message: QueryTraderSpotOrdersRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueryTraderSpotOrdersRequestAmino): QueryTraderSpotOrdersRequest {
    return {
      marketId: object.market_id,
      subaccountId: object.subaccount_id
    };
  },
  toAmino(message: QueryTraderSpotOrdersRequest): QueryTraderSpotOrdersRequestAmino {
    const obj: any = {};
    obj.market_id = message.marketId;
    obj.subaccount_id = message.subaccountId;
    return obj;
  },
  fromAminoMsg(object: QueryTraderSpotOrdersRequestAminoMsg): QueryTraderSpotOrdersRequest {
    return QueryTraderSpotOrdersRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTraderSpotOrdersRequestProtoMsg): QueryTraderSpotOrdersRequest {
    return QueryTraderSpotOrdersRequest.decode(message.value);
  },
  toProto(message: QueryTraderSpotOrdersRequest): Uint8Array {
    return QueryTraderSpotOrdersRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTraderSpotOrdersRequest): QueryTraderSpotOrdersRequestProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryTraderSpotOrdersRequest",
      value: QueryTraderSpotOrdersRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAccountAddressSpotOrdersRequest(): QueryAccountAddressSpotOrdersRequest {
  return {
    marketId: "",
    accountAddress: ""
  };
}
export const QueryAccountAddressSpotOrdersRequest = {
  typeUrl: "/injective.exchange.v1beta1.QueryAccountAddressSpotOrdersRequest",
  encode(message: QueryAccountAddressSpotOrdersRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueryAccountAddressSpotOrdersRequestAmino): QueryAccountAddressSpotOrdersRequest {
    return {
      marketId: object.market_id,
      accountAddress: object.account_address
    };
  },
  toAmino(message: QueryAccountAddressSpotOrdersRequest): QueryAccountAddressSpotOrdersRequestAmino {
    const obj: any = {};
    obj.market_id = message.marketId;
    obj.account_address = message.accountAddress;
    return obj;
  },
  fromAminoMsg(object: QueryAccountAddressSpotOrdersRequestAminoMsg): QueryAccountAddressSpotOrdersRequest {
    return QueryAccountAddressSpotOrdersRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAccountAddressSpotOrdersRequestProtoMsg): QueryAccountAddressSpotOrdersRequest {
    return QueryAccountAddressSpotOrdersRequest.decode(message.value);
  },
  toProto(message: QueryAccountAddressSpotOrdersRequest): Uint8Array {
    return QueryAccountAddressSpotOrdersRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAccountAddressSpotOrdersRequest): QueryAccountAddressSpotOrdersRequestProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryAccountAddressSpotOrdersRequest",
      value: QueryAccountAddressSpotOrdersRequest.encode(message).finish()
    };
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
  typeUrl: "/injective.exchange.v1beta1.TrimmedSpotLimitOrder",
  encode(message: TrimmedSpotLimitOrder, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.price !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.price, 18).atomics);
    }
    if (message.quantity !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.quantity, 18).atomics);
    }
    if (message.fillable !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.fillable, 18).atomics);
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
  },
  fromAmino(object: TrimmedSpotLimitOrderAmino): TrimmedSpotLimitOrder {
    return {
      price: object.price,
      quantity: object.quantity,
      fillable: object.fillable,
      isBuy: object.isBuy,
      orderHash: object.order_hash
    };
  },
  toAmino(message: TrimmedSpotLimitOrder): TrimmedSpotLimitOrderAmino {
    const obj: any = {};
    obj.price = message.price;
    obj.quantity = message.quantity;
    obj.fillable = message.fillable;
    obj.isBuy = message.isBuy;
    obj.order_hash = message.orderHash;
    return obj;
  },
  fromAminoMsg(object: TrimmedSpotLimitOrderAminoMsg): TrimmedSpotLimitOrder {
    return TrimmedSpotLimitOrder.fromAmino(object.value);
  },
  fromProtoMsg(message: TrimmedSpotLimitOrderProtoMsg): TrimmedSpotLimitOrder {
    return TrimmedSpotLimitOrder.decode(message.value);
  },
  toProto(message: TrimmedSpotLimitOrder): Uint8Array {
    return TrimmedSpotLimitOrder.encode(message).finish();
  },
  toProtoMsg(message: TrimmedSpotLimitOrder): TrimmedSpotLimitOrderProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.TrimmedSpotLimitOrder",
      value: TrimmedSpotLimitOrder.encode(message).finish()
    };
  }
};
function createBaseQueryTraderSpotOrdersResponse(): QueryTraderSpotOrdersResponse {
  return {
    orders: []
  };
}
export const QueryTraderSpotOrdersResponse = {
  typeUrl: "/injective.exchange.v1beta1.QueryTraderSpotOrdersResponse",
  encode(message: QueryTraderSpotOrdersResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueryTraderSpotOrdersResponseAmino): QueryTraderSpotOrdersResponse {
    return {
      orders: Array.isArray(object?.orders) ? object.orders.map((e: any) => TrimmedSpotLimitOrder.fromAmino(e)) : []
    };
  },
  toAmino(message: QueryTraderSpotOrdersResponse): QueryTraderSpotOrdersResponseAmino {
    const obj: any = {};
    if (message.orders) {
      obj.orders = message.orders.map(e => e ? TrimmedSpotLimitOrder.toAmino(e) : undefined);
    } else {
      obj.orders = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryTraderSpotOrdersResponseAminoMsg): QueryTraderSpotOrdersResponse {
    return QueryTraderSpotOrdersResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTraderSpotOrdersResponseProtoMsg): QueryTraderSpotOrdersResponse {
    return QueryTraderSpotOrdersResponse.decode(message.value);
  },
  toProto(message: QueryTraderSpotOrdersResponse): Uint8Array {
    return QueryTraderSpotOrdersResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTraderSpotOrdersResponse): QueryTraderSpotOrdersResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryTraderSpotOrdersResponse",
      value: QueryTraderSpotOrdersResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAccountAddressSpotOrdersResponse(): QueryAccountAddressSpotOrdersResponse {
  return {
    orders: []
  };
}
export const QueryAccountAddressSpotOrdersResponse = {
  typeUrl: "/injective.exchange.v1beta1.QueryAccountAddressSpotOrdersResponse",
  encode(message: QueryAccountAddressSpotOrdersResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueryAccountAddressSpotOrdersResponseAmino): QueryAccountAddressSpotOrdersResponse {
    return {
      orders: Array.isArray(object?.orders) ? object.orders.map((e: any) => TrimmedSpotLimitOrder.fromAmino(e)) : []
    };
  },
  toAmino(message: QueryAccountAddressSpotOrdersResponse): QueryAccountAddressSpotOrdersResponseAmino {
    const obj: any = {};
    if (message.orders) {
      obj.orders = message.orders.map(e => e ? TrimmedSpotLimitOrder.toAmino(e) : undefined);
    } else {
      obj.orders = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryAccountAddressSpotOrdersResponseAminoMsg): QueryAccountAddressSpotOrdersResponse {
    return QueryAccountAddressSpotOrdersResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAccountAddressSpotOrdersResponseProtoMsg): QueryAccountAddressSpotOrdersResponse {
    return QueryAccountAddressSpotOrdersResponse.decode(message.value);
  },
  toProto(message: QueryAccountAddressSpotOrdersResponse): Uint8Array {
    return QueryAccountAddressSpotOrdersResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAccountAddressSpotOrdersResponse): QueryAccountAddressSpotOrdersResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryAccountAddressSpotOrdersResponse",
      value: QueryAccountAddressSpotOrdersResponse.encode(message).finish()
    };
  }
};
function createBaseQuerySpotMidPriceAndTOBRequest(): QuerySpotMidPriceAndTOBRequest {
  return {
    marketId: ""
  };
}
export const QuerySpotMidPriceAndTOBRequest = {
  typeUrl: "/injective.exchange.v1beta1.QuerySpotMidPriceAndTOBRequest",
  encode(message: QuerySpotMidPriceAndTOBRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QuerySpotMidPriceAndTOBRequestAmino): QuerySpotMidPriceAndTOBRequest {
    return {
      marketId: object.market_id
    };
  },
  toAmino(message: QuerySpotMidPriceAndTOBRequest): QuerySpotMidPriceAndTOBRequestAmino {
    const obj: any = {};
    obj.market_id = message.marketId;
    return obj;
  },
  fromAminoMsg(object: QuerySpotMidPriceAndTOBRequestAminoMsg): QuerySpotMidPriceAndTOBRequest {
    return QuerySpotMidPriceAndTOBRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySpotMidPriceAndTOBRequestProtoMsg): QuerySpotMidPriceAndTOBRequest {
    return QuerySpotMidPriceAndTOBRequest.decode(message.value);
  },
  toProto(message: QuerySpotMidPriceAndTOBRequest): Uint8Array {
    return QuerySpotMidPriceAndTOBRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySpotMidPriceAndTOBRequest): QuerySpotMidPriceAndTOBRequestProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QuerySpotMidPriceAndTOBRequest",
      value: QuerySpotMidPriceAndTOBRequest.encode(message).finish()
    };
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
  typeUrl: "/injective.exchange.v1beta1.QuerySpotMidPriceAndTOBResponse",
  encode(message: QuerySpotMidPriceAndTOBResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.midPrice !== undefined) {
      writer.uint32(10).string(Decimal.fromUserInput(message.midPrice, 18).atomics);
    }
    if (message.bestBuyPrice !== undefined) {
      writer.uint32(18).string(Decimal.fromUserInput(message.bestBuyPrice, 18).atomics);
    }
    if (message.bestSellPrice !== undefined) {
      writer.uint32(26).string(Decimal.fromUserInput(message.bestSellPrice, 18).atomics);
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
  },
  fromAmino(object: QuerySpotMidPriceAndTOBResponseAmino): QuerySpotMidPriceAndTOBResponse {
    return {
      midPrice: object?.mid_price,
      bestBuyPrice: object?.best_buy_price,
      bestSellPrice: object?.best_sell_price
    };
  },
  toAmino(message: QuerySpotMidPriceAndTOBResponse): QuerySpotMidPriceAndTOBResponseAmino {
    const obj: any = {};
    obj.mid_price = message.midPrice;
    obj.best_buy_price = message.bestBuyPrice;
    obj.best_sell_price = message.bestSellPrice;
    return obj;
  },
  fromAminoMsg(object: QuerySpotMidPriceAndTOBResponseAminoMsg): QuerySpotMidPriceAndTOBResponse {
    return QuerySpotMidPriceAndTOBResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySpotMidPriceAndTOBResponseProtoMsg): QuerySpotMidPriceAndTOBResponse {
    return QuerySpotMidPriceAndTOBResponse.decode(message.value);
  },
  toProto(message: QuerySpotMidPriceAndTOBResponse): Uint8Array {
    return QuerySpotMidPriceAndTOBResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySpotMidPriceAndTOBResponse): QuerySpotMidPriceAndTOBResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QuerySpotMidPriceAndTOBResponse",
      value: QuerySpotMidPriceAndTOBResponse.encode(message).finish()
    };
  }
};
function createBaseQueryDerivativeMidPriceAndTOBRequest(): QueryDerivativeMidPriceAndTOBRequest {
  return {
    marketId: ""
  };
}
export const QueryDerivativeMidPriceAndTOBRequest = {
  typeUrl: "/injective.exchange.v1beta1.QueryDerivativeMidPriceAndTOBRequest",
  encode(message: QueryDerivativeMidPriceAndTOBRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueryDerivativeMidPriceAndTOBRequestAmino): QueryDerivativeMidPriceAndTOBRequest {
    return {
      marketId: object.market_id
    };
  },
  toAmino(message: QueryDerivativeMidPriceAndTOBRequest): QueryDerivativeMidPriceAndTOBRequestAmino {
    const obj: any = {};
    obj.market_id = message.marketId;
    return obj;
  },
  fromAminoMsg(object: QueryDerivativeMidPriceAndTOBRequestAminoMsg): QueryDerivativeMidPriceAndTOBRequest {
    return QueryDerivativeMidPriceAndTOBRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDerivativeMidPriceAndTOBRequestProtoMsg): QueryDerivativeMidPriceAndTOBRequest {
    return QueryDerivativeMidPriceAndTOBRequest.decode(message.value);
  },
  toProto(message: QueryDerivativeMidPriceAndTOBRequest): Uint8Array {
    return QueryDerivativeMidPriceAndTOBRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDerivativeMidPriceAndTOBRequest): QueryDerivativeMidPriceAndTOBRequestProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryDerivativeMidPriceAndTOBRequest",
      value: QueryDerivativeMidPriceAndTOBRequest.encode(message).finish()
    };
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
  typeUrl: "/injective.exchange.v1beta1.QueryDerivativeMidPriceAndTOBResponse",
  encode(message: QueryDerivativeMidPriceAndTOBResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.midPrice !== undefined) {
      writer.uint32(10).string(Decimal.fromUserInput(message.midPrice, 18).atomics);
    }
    if (message.bestBuyPrice !== undefined) {
      writer.uint32(18).string(Decimal.fromUserInput(message.bestBuyPrice, 18).atomics);
    }
    if (message.bestSellPrice !== undefined) {
      writer.uint32(26).string(Decimal.fromUserInput(message.bestSellPrice, 18).atomics);
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
  },
  fromAmino(object: QueryDerivativeMidPriceAndTOBResponseAmino): QueryDerivativeMidPriceAndTOBResponse {
    return {
      midPrice: object?.mid_price,
      bestBuyPrice: object?.best_buy_price,
      bestSellPrice: object?.best_sell_price
    };
  },
  toAmino(message: QueryDerivativeMidPriceAndTOBResponse): QueryDerivativeMidPriceAndTOBResponseAmino {
    const obj: any = {};
    obj.mid_price = message.midPrice;
    obj.best_buy_price = message.bestBuyPrice;
    obj.best_sell_price = message.bestSellPrice;
    return obj;
  },
  fromAminoMsg(object: QueryDerivativeMidPriceAndTOBResponseAminoMsg): QueryDerivativeMidPriceAndTOBResponse {
    return QueryDerivativeMidPriceAndTOBResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDerivativeMidPriceAndTOBResponseProtoMsg): QueryDerivativeMidPriceAndTOBResponse {
    return QueryDerivativeMidPriceAndTOBResponse.decode(message.value);
  },
  toProto(message: QueryDerivativeMidPriceAndTOBResponse): Uint8Array {
    return QueryDerivativeMidPriceAndTOBResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDerivativeMidPriceAndTOBResponse): QueryDerivativeMidPriceAndTOBResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryDerivativeMidPriceAndTOBResponse",
      value: QueryDerivativeMidPriceAndTOBResponse.encode(message).finish()
    };
  }
};
function createBaseQueryDerivativeOrderbookRequest(): QueryDerivativeOrderbookRequest {
  return {
    marketId: "",
    limit: BigInt(0),
    limitCumulativeNotional: undefined
  };
}
export const QueryDerivativeOrderbookRequest = {
  typeUrl: "/injective.exchange.v1beta1.QueryDerivativeOrderbookRequest",
  encode(message: QueryDerivativeOrderbookRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    if (message.limit !== BigInt(0)) {
      writer.uint32(16).uint64(message.limit);
    }
    if (message.limitCumulativeNotional !== undefined) {
      writer.uint32(26).string(Decimal.fromUserInput(message.limitCumulativeNotional, 18).atomics);
    }
    return writer;
  },
  fromJSON(object: any): QueryDerivativeOrderbookRequest {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      limit: isSet(object.limit) ? BigInt(object.limit.toString()) : BigInt(0),
      limitCumulativeNotional: isSet(object.limitCumulativeNotional) ? String(object.limitCumulativeNotional) : undefined
    };
  },
  fromPartial(object: Partial<QueryDerivativeOrderbookRequest>): QueryDerivativeOrderbookRequest {
    const message = createBaseQueryDerivativeOrderbookRequest();
    message.marketId = object.marketId ?? "";
    message.limit = object.limit !== undefined && object.limit !== null ? BigInt(object.limit.toString()) : BigInt(0);
    message.limitCumulativeNotional = object.limitCumulativeNotional ?? undefined;
    return message;
  },
  fromAmino(object: QueryDerivativeOrderbookRequestAmino): QueryDerivativeOrderbookRequest {
    return {
      marketId: object.market_id,
      limit: BigInt(object.limit),
      limitCumulativeNotional: object?.limit_cumulative_notional
    };
  },
  toAmino(message: QueryDerivativeOrderbookRequest): QueryDerivativeOrderbookRequestAmino {
    const obj: any = {};
    obj.market_id = message.marketId;
    obj.limit = message.limit ? message.limit.toString() : undefined;
    obj.limit_cumulative_notional = message.limitCumulativeNotional;
    return obj;
  },
  fromAminoMsg(object: QueryDerivativeOrderbookRequestAminoMsg): QueryDerivativeOrderbookRequest {
    return QueryDerivativeOrderbookRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDerivativeOrderbookRequestProtoMsg): QueryDerivativeOrderbookRequest {
    return QueryDerivativeOrderbookRequest.decode(message.value);
  },
  toProto(message: QueryDerivativeOrderbookRequest): Uint8Array {
    return QueryDerivativeOrderbookRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDerivativeOrderbookRequest): QueryDerivativeOrderbookRequestProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryDerivativeOrderbookRequest",
      value: QueryDerivativeOrderbookRequest.encode(message).finish()
    };
  }
};
function createBaseQueryDerivativeOrderbookResponse(): QueryDerivativeOrderbookResponse {
  return {
    buysPriceLevel: [],
    sellsPriceLevel: []
  };
}
export const QueryDerivativeOrderbookResponse = {
  typeUrl: "/injective.exchange.v1beta1.QueryDerivativeOrderbookResponse",
  encode(message: QueryDerivativeOrderbookResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueryDerivativeOrderbookResponseAmino): QueryDerivativeOrderbookResponse {
    return {
      buysPriceLevel: Array.isArray(object?.buys_price_level) ? object.buys_price_level.map((e: any) => Level.fromAmino(e)) : [],
      sellsPriceLevel: Array.isArray(object?.sells_price_level) ? object.sells_price_level.map((e: any) => Level.fromAmino(e)) : []
    };
  },
  toAmino(message: QueryDerivativeOrderbookResponse): QueryDerivativeOrderbookResponseAmino {
    const obj: any = {};
    if (message.buysPriceLevel) {
      obj.buys_price_level = message.buysPriceLevel.map(e => e ? Level.toAmino(e) : undefined);
    } else {
      obj.buys_price_level = [];
    }
    if (message.sellsPriceLevel) {
      obj.sells_price_level = message.sellsPriceLevel.map(e => e ? Level.toAmino(e) : undefined);
    } else {
      obj.sells_price_level = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryDerivativeOrderbookResponseAminoMsg): QueryDerivativeOrderbookResponse {
    return QueryDerivativeOrderbookResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDerivativeOrderbookResponseProtoMsg): QueryDerivativeOrderbookResponse {
    return QueryDerivativeOrderbookResponse.decode(message.value);
  },
  toProto(message: QueryDerivativeOrderbookResponse): Uint8Array {
    return QueryDerivativeOrderbookResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDerivativeOrderbookResponse): QueryDerivativeOrderbookResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryDerivativeOrderbookResponse",
      value: QueryDerivativeOrderbookResponse.encode(message).finish()
    };
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
  typeUrl: "/injective.exchange.v1beta1.QueryTraderSpotOrdersToCancelUpToAmountRequest",
  encode(message: QueryTraderSpotOrdersToCancelUpToAmountRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    if (message.subaccountId !== "") {
      writer.uint32(18).string(message.subaccountId);
    }
    if (message.baseAmount !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.baseAmount, 18).atomics);
    }
    if (message.quoteAmount !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.quoteAmount, 18).atomics);
    }
    if (message.strategy !== 0) {
      writer.uint32(40).int32(message.strategy);
    }
    if (message.referencePrice !== undefined) {
      writer.uint32(50).string(Decimal.fromUserInput(message.referencePrice, 18).atomics);
    }
    return writer;
  },
  fromJSON(object: any): QueryTraderSpotOrdersToCancelUpToAmountRequest {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      subaccountId: isSet(object.subaccountId) ? String(object.subaccountId) : "",
      baseAmount: isSet(object.baseAmount) ? String(object.baseAmount) : "",
      quoteAmount: isSet(object.quoteAmount) ? String(object.quoteAmount) : "",
      strategy: isSet(object.strategy) ? cancellationStrategyFromJSON(object.strategy) : -1,
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
  },
  fromAmino(object: QueryTraderSpotOrdersToCancelUpToAmountRequestAmino): QueryTraderSpotOrdersToCancelUpToAmountRequest {
    return {
      marketId: object.market_id,
      subaccountId: object.subaccount_id,
      baseAmount: object.base_amount,
      quoteAmount: object.quote_amount,
      strategy: isSet(object.strategy) ? cancellationStrategyFromJSON(object.strategy) : -1,
      referencePrice: object?.reference_price
    };
  },
  toAmino(message: QueryTraderSpotOrdersToCancelUpToAmountRequest): QueryTraderSpotOrdersToCancelUpToAmountRequestAmino {
    const obj: any = {};
    obj.market_id = message.marketId;
    obj.subaccount_id = message.subaccountId;
    obj.base_amount = message.baseAmount;
    obj.quote_amount = message.quoteAmount;
    obj.strategy = message.strategy;
    obj.reference_price = message.referencePrice;
    return obj;
  },
  fromAminoMsg(object: QueryTraderSpotOrdersToCancelUpToAmountRequestAminoMsg): QueryTraderSpotOrdersToCancelUpToAmountRequest {
    return QueryTraderSpotOrdersToCancelUpToAmountRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTraderSpotOrdersToCancelUpToAmountRequestProtoMsg): QueryTraderSpotOrdersToCancelUpToAmountRequest {
    return QueryTraderSpotOrdersToCancelUpToAmountRequest.decode(message.value);
  },
  toProto(message: QueryTraderSpotOrdersToCancelUpToAmountRequest): Uint8Array {
    return QueryTraderSpotOrdersToCancelUpToAmountRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTraderSpotOrdersToCancelUpToAmountRequest): QueryTraderSpotOrdersToCancelUpToAmountRequestProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryTraderSpotOrdersToCancelUpToAmountRequest",
      value: QueryTraderSpotOrdersToCancelUpToAmountRequest.encode(message).finish()
    };
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
  typeUrl: "/injective.exchange.v1beta1.QueryTraderDerivativeOrdersToCancelUpToAmountRequest",
  encode(message: QueryTraderDerivativeOrdersToCancelUpToAmountRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    if (message.subaccountId !== "") {
      writer.uint32(18).string(message.subaccountId);
    }
    if (message.quoteAmount !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.quoteAmount, 18).atomics);
    }
    if (message.strategy !== 0) {
      writer.uint32(32).int32(message.strategy);
    }
    if (message.referencePrice !== undefined) {
      writer.uint32(42).string(Decimal.fromUserInput(message.referencePrice, 18).atomics);
    }
    return writer;
  },
  fromJSON(object: any): QueryTraderDerivativeOrdersToCancelUpToAmountRequest {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      subaccountId: isSet(object.subaccountId) ? String(object.subaccountId) : "",
      quoteAmount: isSet(object.quoteAmount) ? String(object.quoteAmount) : "",
      strategy: isSet(object.strategy) ? cancellationStrategyFromJSON(object.strategy) : -1,
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
  },
  fromAmino(object: QueryTraderDerivativeOrdersToCancelUpToAmountRequestAmino): QueryTraderDerivativeOrdersToCancelUpToAmountRequest {
    return {
      marketId: object.market_id,
      subaccountId: object.subaccount_id,
      quoteAmount: object.quote_amount,
      strategy: isSet(object.strategy) ? cancellationStrategyFromJSON(object.strategy) : -1,
      referencePrice: object?.reference_price
    };
  },
  toAmino(message: QueryTraderDerivativeOrdersToCancelUpToAmountRequest): QueryTraderDerivativeOrdersToCancelUpToAmountRequestAmino {
    const obj: any = {};
    obj.market_id = message.marketId;
    obj.subaccount_id = message.subaccountId;
    obj.quote_amount = message.quoteAmount;
    obj.strategy = message.strategy;
    obj.reference_price = message.referencePrice;
    return obj;
  },
  fromAminoMsg(object: QueryTraderDerivativeOrdersToCancelUpToAmountRequestAminoMsg): QueryTraderDerivativeOrdersToCancelUpToAmountRequest {
    return QueryTraderDerivativeOrdersToCancelUpToAmountRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTraderDerivativeOrdersToCancelUpToAmountRequestProtoMsg): QueryTraderDerivativeOrdersToCancelUpToAmountRequest {
    return QueryTraderDerivativeOrdersToCancelUpToAmountRequest.decode(message.value);
  },
  toProto(message: QueryTraderDerivativeOrdersToCancelUpToAmountRequest): Uint8Array {
    return QueryTraderDerivativeOrdersToCancelUpToAmountRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTraderDerivativeOrdersToCancelUpToAmountRequest): QueryTraderDerivativeOrdersToCancelUpToAmountRequestProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryTraderDerivativeOrdersToCancelUpToAmountRequest",
      value: QueryTraderDerivativeOrdersToCancelUpToAmountRequest.encode(message).finish()
    };
  }
};
function createBaseQueryTraderDerivativeOrdersRequest(): QueryTraderDerivativeOrdersRequest {
  return {
    marketId: "",
    subaccountId: ""
  };
}
export const QueryTraderDerivativeOrdersRequest = {
  typeUrl: "/injective.exchange.v1beta1.QueryTraderDerivativeOrdersRequest",
  encode(message: QueryTraderDerivativeOrdersRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueryTraderDerivativeOrdersRequestAmino): QueryTraderDerivativeOrdersRequest {
    return {
      marketId: object.market_id,
      subaccountId: object.subaccount_id
    };
  },
  toAmino(message: QueryTraderDerivativeOrdersRequest): QueryTraderDerivativeOrdersRequestAmino {
    const obj: any = {};
    obj.market_id = message.marketId;
    obj.subaccount_id = message.subaccountId;
    return obj;
  },
  fromAminoMsg(object: QueryTraderDerivativeOrdersRequestAminoMsg): QueryTraderDerivativeOrdersRequest {
    return QueryTraderDerivativeOrdersRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTraderDerivativeOrdersRequestProtoMsg): QueryTraderDerivativeOrdersRequest {
    return QueryTraderDerivativeOrdersRequest.decode(message.value);
  },
  toProto(message: QueryTraderDerivativeOrdersRequest): Uint8Array {
    return QueryTraderDerivativeOrdersRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTraderDerivativeOrdersRequest): QueryTraderDerivativeOrdersRequestProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryTraderDerivativeOrdersRequest",
      value: QueryTraderDerivativeOrdersRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAccountAddressDerivativeOrdersRequest(): QueryAccountAddressDerivativeOrdersRequest {
  return {
    marketId: "",
    accountAddress: ""
  };
}
export const QueryAccountAddressDerivativeOrdersRequest = {
  typeUrl: "/injective.exchange.v1beta1.QueryAccountAddressDerivativeOrdersRequest",
  encode(message: QueryAccountAddressDerivativeOrdersRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueryAccountAddressDerivativeOrdersRequestAmino): QueryAccountAddressDerivativeOrdersRequest {
    return {
      marketId: object.market_id,
      accountAddress: object.account_address
    };
  },
  toAmino(message: QueryAccountAddressDerivativeOrdersRequest): QueryAccountAddressDerivativeOrdersRequestAmino {
    const obj: any = {};
    obj.market_id = message.marketId;
    obj.account_address = message.accountAddress;
    return obj;
  },
  fromAminoMsg(object: QueryAccountAddressDerivativeOrdersRequestAminoMsg): QueryAccountAddressDerivativeOrdersRequest {
    return QueryAccountAddressDerivativeOrdersRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAccountAddressDerivativeOrdersRequestProtoMsg): QueryAccountAddressDerivativeOrdersRequest {
    return QueryAccountAddressDerivativeOrdersRequest.decode(message.value);
  },
  toProto(message: QueryAccountAddressDerivativeOrdersRequest): Uint8Array {
    return QueryAccountAddressDerivativeOrdersRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAccountAddressDerivativeOrdersRequest): QueryAccountAddressDerivativeOrdersRequestProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryAccountAddressDerivativeOrdersRequest",
      value: QueryAccountAddressDerivativeOrdersRequest.encode(message).finish()
    };
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
  typeUrl: "/injective.exchange.v1beta1.TrimmedDerivativeLimitOrder",
  encode(message: TrimmedDerivativeLimitOrder, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.price !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.price, 18).atomics);
    }
    if (message.quantity !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.quantity, 18).atomics);
    }
    if (message.margin !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.margin, 18).atomics);
    }
    if (message.fillable !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.fillable, 18).atomics);
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
  },
  fromAmino(object: TrimmedDerivativeLimitOrderAmino): TrimmedDerivativeLimitOrder {
    return {
      price: object.price,
      quantity: object.quantity,
      margin: object.margin,
      fillable: object.fillable,
      isBuy: object.isBuy,
      orderHash: object.order_hash
    };
  },
  toAmino(message: TrimmedDerivativeLimitOrder): TrimmedDerivativeLimitOrderAmino {
    const obj: any = {};
    obj.price = message.price;
    obj.quantity = message.quantity;
    obj.margin = message.margin;
    obj.fillable = message.fillable;
    obj.isBuy = message.isBuy;
    obj.order_hash = message.orderHash;
    return obj;
  },
  fromAminoMsg(object: TrimmedDerivativeLimitOrderAminoMsg): TrimmedDerivativeLimitOrder {
    return TrimmedDerivativeLimitOrder.fromAmino(object.value);
  },
  fromProtoMsg(message: TrimmedDerivativeLimitOrderProtoMsg): TrimmedDerivativeLimitOrder {
    return TrimmedDerivativeLimitOrder.decode(message.value);
  },
  toProto(message: TrimmedDerivativeLimitOrder): Uint8Array {
    return TrimmedDerivativeLimitOrder.encode(message).finish();
  },
  toProtoMsg(message: TrimmedDerivativeLimitOrder): TrimmedDerivativeLimitOrderProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.TrimmedDerivativeLimitOrder",
      value: TrimmedDerivativeLimitOrder.encode(message).finish()
    };
  }
};
function createBaseQueryTraderDerivativeOrdersResponse(): QueryTraderDerivativeOrdersResponse {
  return {
    orders: []
  };
}
export const QueryTraderDerivativeOrdersResponse = {
  typeUrl: "/injective.exchange.v1beta1.QueryTraderDerivativeOrdersResponse",
  encode(message: QueryTraderDerivativeOrdersResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueryTraderDerivativeOrdersResponseAmino): QueryTraderDerivativeOrdersResponse {
    return {
      orders: Array.isArray(object?.orders) ? object.orders.map((e: any) => TrimmedDerivativeLimitOrder.fromAmino(e)) : []
    };
  },
  toAmino(message: QueryTraderDerivativeOrdersResponse): QueryTraderDerivativeOrdersResponseAmino {
    const obj: any = {};
    if (message.orders) {
      obj.orders = message.orders.map(e => e ? TrimmedDerivativeLimitOrder.toAmino(e) : undefined);
    } else {
      obj.orders = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryTraderDerivativeOrdersResponseAminoMsg): QueryTraderDerivativeOrdersResponse {
    return QueryTraderDerivativeOrdersResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTraderDerivativeOrdersResponseProtoMsg): QueryTraderDerivativeOrdersResponse {
    return QueryTraderDerivativeOrdersResponse.decode(message.value);
  },
  toProto(message: QueryTraderDerivativeOrdersResponse): Uint8Array {
    return QueryTraderDerivativeOrdersResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTraderDerivativeOrdersResponse): QueryTraderDerivativeOrdersResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryTraderDerivativeOrdersResponse",
      value: QueryTraderDerivativeOrdersResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAccountAddressDerivativeOrdersResponse(): QueryAccountAddressDerivativeOrdersResponse {
  return {
    orders: []
  };
}
export const QueryAccountAddressDerivativeOrdersResponse = {
  typeUrl: "/injective.exchange.v1beta1.QueryAccountAddressDerivativeOrdersResponse",
  encode(message: QueryAccountAddressDerivativeOrdersResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueryAccountAddressDerivativeOrdersResponseAmino): QueryAccountAddressDerivativeOrdersResponse {
    return {
      orders: Array.isArray(object?.orders) ? object.orders.map((e: any) => TrimmedDerivativeLimitOrder.fromAmino(e)) : []
    };
  },
  toAmino(message: QueryAccountAddressDerivativeOrdersResponse): QueryAccountAddressDerivativeOrdersResponseAmino {
    const obj: any = {};
    if (message.orders) {
      obj.orders = message.orders.map(e => e ? TrimmedDerivativeLimitOrder.toAmino(e) : undefined);
    } else {
      obj.orders = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryAccountAddressDerivativeOrdersResponseAminoMsg): QueryAccountAddressDerivativeOrdersResponse {
    return QueryAccountAddressDerivativeOrdersResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAccountAddressDerivativeOrdersResponseProtoMsg): QueryAccountAddressDerivativeOrdersResponse {
    return QueryAccountAddressDerivativeOrdersResponse.decode(message.value);
  },
  toProto(message: QueryAccountAddressDerivativeOrdersResponse): Uint8Array {
    return QueryAccountAddressDerivativeOrdersResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAccountAddressDerivativeOrdersResponse): QueryAccountAddressDerivativeOrdersResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryAccountAddressDerivativeOrdersResponse",
      value: QueryAccountAddressDerivativeOrdersResponse.encode(message).finish()
    };
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
  typeUrl: "/injective.exchange.v1beta1.QueryDerivativeOrdersByHashesRequest",
  encode(message: QueryDerivativeOrdersByHashesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueryDerivativeOrdersByHashesRequestAmino): QueryDerivativeOrdersByHashesRequest {
    return {
      marketId: object.market_id,
      subaccountId: object.subaccount_id,
      orderHashes: Array.isArray(object?.order_hashes) ? object.order_hashes.map((e: any) => e) : []
    };
  },
  toAmino(message: QueryDerivativeOrdersByHashesRequest): QueryDerivativeOrdersByHashesRequestAmino {
    const obj: any = {};
    obj.market_id = message.marketId;
    obj.subaccount_id = message.subaccountId;
    if (message.orderHashes) {
      obj.order_hashes = message.orderHashes.map(e => e);
    } else {
      obj.order_hashes = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryDerivativeOrdersByHashesRequestAminoMsg): QueryDerivativeOrdersByHashesRequest {
    return QueryDerivativeOrdersByHashesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDerivativeOrdersByHashesRequestProtoMsg): QueryDerivativeOrdersByHashesRequest {
    return QueryDerivativeOrdersByHashesRequest.decode(message.value);
  },
  toProto(message: QueryDerivativeOrdersByHashesRequest): Uint8Array {
    return QueryDerivativeOrdersByHashesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDerivativeOrdersByHashesRequest): QueryDerivativeOrdersByHashesRequestProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryDerivativeOrdersByHashesRequest",
      value: QueryDerivativeOrdersByHashesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryDerivativeOrdersByHashesResponse(): QueryDerivativeOrdersByHashesResponse {
  return {
    orders: []
  };
}
export const QueryDerivativeOrdersByHashesResponse = {
  typeUrl: "/injective.exchange.v1beta1.QueryDerivativeOrdersByHashesResponse",
  encode(message: QueryDerivativeOrdersByHashesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueryDerivativeOrdersByHashesResponseAmino): QueryDerivativeOrdersByHashesResponse {
    return {
      orders: Array.isArray(object?.orders) ? object.orders.map((e: any) => TrimmedDerivativeLimitOrder.fromAmino(e)) : []
    };
  },
  toAmino(message: QueryDerivativeOrdersByHashesResponse): QueryDerivativeOrdersByHashesResponseAmino {
    const obj: any = {};
    if (message.orders) {
      obj.orders = message.orders.map(e => e ? TrimmedDerivativeLimitOrder.toAmino(e) : undefined);
    } else {
      obj.orders = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryDerivativeOrdersByHashesResponseAminoMsg): QueryDerivativeOrdersByHashesResponse {
    return QueryDerivativeOrdersByHashesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDerivativeOrdersByHashesResponseProtoMsg): QueryDerivativeOrdersByHashesResponse {
    return QueryDerivativeOrdersByHashesResponse.decode(message.value);
  },
  toProto(message: QueryDerivativeOrdersByHashesResponse): Uint8Array {
    return QueryDerivativeOrdersByHashesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDerivativeOrdersByHashesResponse): QueryDerivativeOrdersByHashesResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryDerivativeOrdersByHashesResponse",
      value: QueryDerivativeOrdersByHashesResponse.encode(message).finish()
    };
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
  typeUrl: "/injective.exchange.v1beta1.QueryDerivativeMarketsRequest",
  encode(message: QueryDerivativeMarketsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueryDerivativeMarketsRequestAmino): QueryDerivativeMarketsRequest {
    return {
      status: object.status,
      marketIds: Array.isArray(object?.market_ids) ? object.market_ids.map((e: any) => e) : [],
      withMidPriceAndTob: object.with_mid_price_and_tob
    };
  },
  toAmino(message: QueryDerivativeMarketsRequest): QueryDerivativeMarketsRequestAmino {
    const obj: any = {};
    obj.status = message.status;
    if (message.marketIds) {
      obj.market_ids = message.marketIds.map(e => e);
    } else {
      obj.market_ids = [];
    }
    obj.with_mid_price_and_tob = message.withMidPriceAndTob;
    return obj;
  },
  fromAminoMsg(object: QueryDerivativeMarketsRequestAminoMsg): QueryDerivativeMarketsRequest {
    return QueryDerivativeMarketsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDerivativeMarketsRequestProtoMsg): QueryDerivativeMarketsRequest {
    return QueryDerivativeMarketsRequest.decode(message.value);
  },
  toProto(message: QueryDerivativeMarketsRequest): Uint8Array {
    return QueryDerivativeMarketsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDerivativeMarketsRequest): QueryDerivativeMarketsRequestProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryDerivativeMarketsRequest",
      value: QueryDerivativeMarketsRequest.encode(message).finish()
    };
  }
};
function createBasePriceLevel(): PriceLevel {
  return {
    price: "",
    quantity: ""
  };
}
export const PriceLevel = {
  typeUrl: "/injective.exchange.v1beta1.PriceLevel",
  encode(message: PriceLevel, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.price !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.price, 18).atomics);
    }
    if (message.quantity !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.quantity, 18).atomics);
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
  },
  fromAmino(object: PriceLevelAmino): PriceLevel {
    return {
      price: object.price,
      quantity: object.quantity
    };
  },
  toAmino(message: PriceLevel): PriceLevelAmino {
    const obj: any = {};
    obj.price = message.price;
    obj.quantity = message.quantity;
    return obj;
  },
  fromAminoMsg(object: PriceLevelAminoMsg): PriceLevel {
    return PriceLevel.fromAmino(object.value);
  },
  fromProtoMsg(message: PriceLevelProtoMsg): PriceLevel {
    return PriceLevel.decode(message.value);
  },
  toProto(message: PriceLevel): Uint8Array {
    return PriceLevel.encode(message).finish();
  },
  toProtoMsg(message: PriceLevel): PriceLevelProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.PriceLevel",
      value: PriceLevel.encode(message).finish()
    };
  }
};
function createBasePerpetualMarketState(): PerpetualMarketState {
  return {
    marketInfo: PerpetualMarketInfo.fromPartial({}),
    fundingInfo: PerpetualMarketFunding.fromPartial({})
  };
}
export const PerpetualMarketState = {
  typeUrl: "/injective.exchange.v1beta1.PerpetualMarketState",
  encode(message: PerpetualMarketState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: PerpetualMarketStateAmino): PerpetualMarketState {
    return {
      marketInfo: object?.market_info ? PerpetualMarketInfo.fromAmino(object.market_info) : undefined,
      fundingInfo: object?.funding_info ? PerpetualMarketFunding.fromAmino(object.funding_info) : undefined
    };
  },
  toAmino(message: PerpetualMarketState): PerpetualMarketStateAmino {
    const obj: any = {};
    obj.market_info = message.marketInfo ? PerpetualMarketInfo.toAmino(message.marketInfo) : undefined;
    obj.funding_info = message.fundingInfo ? PerpetualMarketFunding.toAmino(message.fundingInfo) : undefined;
    return obj;
  },
  fromAminoMsg(object: PerpetualMarketStateAminoMsg): PerpetualMarketState {
    return PerpetualMarketState.fromAmino(object.value);
  },
  fromProtoMsg(message: PerpetualMarketStateProtoMsg): PerpetualMarketState {
    return PerpetualMarketState.decode(message.value);
  },
  toProto(message: PerpetualMarketState): Uint8Array {
    return PerpetualMarketState.encode(message).finish();
  },
  toProtoMsg(message: PerpetualMarketState): PerpetualMarketStateProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.PerpetualMarketState",
      value: PerpetualMarketState.encode(message).finish()
    };
  }
};
function createBaseFullDerivativeMarket(): FullDerivativeMarket {
  return {
    market: DerivativeMarket.fromPartial({}),
    perpetualInfo: undefined,
    futuresInfo: undefined,
    markPrice: "",
    midPriceAndTob: undefined
  };
}
export const FullDerivativeMarket = {
  typeUrl: "/injective.exchange.v1beta1.FullDerivativeMarket",
  encode(message: FullDerivativeMarket, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
      writer.uint32(34).string(Decimal.fromUserInput(message.markPrice, 18).atomics);
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
  },
  fromAmino(object: FullDerivativeMarketAmino): FullDerivativeMarket {
    return {
      market: object?.market ? DerivativeMarket.fromAmino(object.market) : undefined,
      perpetualInfo: object?.perpetual_info ? PerpetualMarketState.fromAmino(object.perpetual_info) : undefined,
      futuresInfo: object?.futures_info ? ExpiryFuturesMarketInfo.fromAmino(object.futures_info) : undefined,
      markPrice: object.mark_price,
      midPriceAndTob: object?.mid_price_and_tob ? MidPriceAndTOB.fromAmino(object.mid_price_and_tob) : undefined
    };
  },
  toAmino(message: FullDerivativeMarket): FullDerivativeMarketAmino {
    const obj: any = {};
    obj.market = message.market ? DerivativeMarket.toAmino(message.market) : undefined;
    obj.perpetual_info = message.perpetualInfo ? PerpetualMarketState.toAmino(message.perpetualInfo) : undefined;
    obj.futures_info = message.futuresInfo ? ExpiryFuturesMarketInfo.toAmino(message.futuresInfo) : undefined;
    obj.mark_price = message.markPrice;
    obj.mid_price_and_tob = message.midPriceAndTob ? MidPriceAndTOB.toAmino(message.midPriceAndTob) : undefined;
    return obj;
  },
  fromAminoMsg(object: FullDerivativeMarketAminoMsg): FullDerivativeMarket {
    return FullDerivativeMarket.fromAmino(object.value);
  },
  fromProtoMsg(message: FullDerivativeMarketProtoMsg): FullDerivativeMarket {
    return FullDerivativeMarket.decode(message.value);
  },
  toProto(message: FullDerivativeMarket): Uint8Array {
    return FullDerivativeMarket.encode(message).finish();
  },
  toProtoMsg(message: FullDerivativeMarket): FullDerivativeMarketProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.FullDerivativeMarket",
      value: FullDerivativeMarket.encode(message).finish()
    };
  }
};
function createBaseQueryDerivativeMarketsResponse(): QueryDerivativeMarketsResponse {
  return {
    markets: []
  };
}
export const QueryDerivativeMarketsResponse = {
  typeUrl: "/injective.exchange.v1beta1.QueryDerivativeMarketsResponse",
  encode(message: QueryDerivativeMarketsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueryDerivativeMarketsResponseAmino): QueryDerivativeMarketsResponse {
    return {
      markets: Array.isArray(object?.markets) ? object.markets.map((e: any) => FullDerivativeMarket.fromAmino(e)) : []
    };
  },
  toAmino(message: QueryDerivativeMarketsResponse): QueryDerivativeMarketsResponseAmino {
    const obj: any = {};
    if (message.markets) {
      obj.markets = message.markets.map(e => e ? FullDerivativeMarket.toAmino(e) : undefined);
    } else {
      obj.markets = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryDerivativeMarketsResponseAminoMsg): QueryDerivativeMarketsResponse {
    return QueryDerivativeMarketsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDerivativeMarketsResponseProtoMsg): QueryDerivativeMarketsResponse {
    return QueryDerivativeMarketsResponse.decode(message.value);
  },
  toProto(message: QueryDerivativeMarketsResponse): Uint8Array {
    return QueryDerivativeMarketsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDerivativeMarketsResponse): QueryDerivativeMarketsResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryDerivativeMarketsResponse",
      value: QueryDerivativeMarketsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryDerivativeMarketRequest(): QueryDerivativeMarketRequest {
  return {
    marketId: ""
  };
}
export const QueryDerivativeMarketRequest = {
  typeUrl: "/injective.exchange.v1beta1.QueryDerivativeMarketRequest",
  encode(message: QueryDerivativeMarketRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueryDerivativeMarketRequestAmino): QueryDerivativeMarketRequest {
    return {
      marketId: object.market_id
    };
  },
  toAmino(message: QueryDerivativeMarketRequest): QueryDerivativeMarketRequestAmino {
    const obj: any = {};
    obj.market_id = message.marketId;
    return obj;
  },
  fromAminoMsg(object: QueryDerivativeMarketRequestAminoMsg): QueryDerivativeMarketRequest {
    return QueryDerivativeMarketRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDerivativeMarketRequestProtoMsg): QueryDerivativeMarketRequest {
    return QueryDerivativeMarketRequest.decode(message.value);
  },
  toProto(message: QueryDerivativeMarketRequest): Uint8Array {
    return QueryDerivativeMarketRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDerivativeMarketRequest): QueryDerivativeMarketRequestProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryDerivativeMarketRequest",
      value: QueryDerivativeMarketRequest.encode(message).finish()
    };
  }
};
function createBaseQueryDerivativeMarketResponse(): QueryDerivativeMarketResponse {
  return {
    market: FullDerivativeMarket.fromPartial({})
  };
}
export const QueryDerivativeMarketResponse = {
  typeUrl: "/injective.exchange.v1beta1.QueryDerivativeMarketResponse",
  encode(message: QueryDerivativeMarketResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueryDerivativeMarketResponseAmino): QueryDerivativeMarketResponse {
    return {
      market: object?.market ? FullDerivativeMarket.fromAmino(object.market) : undefined
    };
  },
  toAmino(message: QueryDerivativeMarketResponse): QueryDerivativeMarketResponseAmino {
    const obj: any = {};
    obj.market = message.market ? FullDerivativeMarket.toAmino(message.market) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDerivativeMarketResponseAminoMsg): QueryDerivativeMarketResponse {
    return QueryDerivativeMarketResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDerivativeMarketResponseProtoMsg): QueryDerivativeMarketResponse {
    return QueryDerivativeMarketResponse.decode(message.value);
  },
  toProto(message: QueryDerivativeMarketResponse): Uint8Array {
    return QueryDerivativeMarketResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDerivativeMarketResponse): QueryDerivativeMarketResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryDerivativeMarketResponse",
      value: QueryDerivativeMarketResponse.encode(message).finish()
    };
  }
};
function createBaseQueryDerivativeMarketAddressRequest(): QueryDerivativeMarketAddressRequest {
  return {
    marketId: ""
  };
}
export const QueryDerivativeMarketAddressRequest = {
  typeUrl: "/injective.exchange.v1beta1.QueryDerivativeMarketAddressRequest",
  encode(message: QueryDerivativeMarketAddressRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueryDerivativeMarketAddressRequestAmino): QueryDerivativeMarketAddressRequest {
    return {
      marketId: object.market_id
    };
  },
  toAmino(message: QueryDerivativeMarketAddressRequest): QueryDerivativeMarketAddressRequestAmino {
    const obj: any = {};
    obj.market_id = message.marketId;
    return obj;
  },
  fromAminoMsg(object: QueryDerivativeMarketAddressRequestAminoMsg): QueryDerivativeMarketAddressRequest {
    return QueryDerivativeMarketAddressRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDerivativeMarketAddressRequestProtoMsg): QueryDerivativeMarketAddressRequest {
    return QueryDerivativeMarketAddressRequest.decode(message.value);
  },
  toProto(message: QueryDerivativeMarketAddressRequest): Uint8Array {
    return QueryDerivativeMarketAddressRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDerivativeMarketAddressRequest): QueryDerivativeMarketAddressRequestProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryDerivativeMarketAddressRequest",
      value: QueryDerivativeMarketAddressRequest.encode(message).finish()
    };
  }
};
function createBaseQueryDerivativeMarketAddressResponse(): QueryDerivativeMarketAddressResponse {
  return {
    address: "",
    subaccountId: ""
  };
}
export const QueryDerivativeMarketAddressResponse = {
  typeUrl: "/injective.exchange.v1beta1.QueryDerivativeMarketAddressResponse",
  encode(message: QueryDerivativeMarketAddressResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueryDerivativeMarketAddressResponseAmino): QueryDerivativeMarketAddressResponse {
    return {
      address: object.address,
      subaccountId: object.subaccount_id
    };
  },
  toAmino(message: QueryDerivativeMarketAddressResponse): QueryDerivativeMarketAddressResponseAmino {
    const obj: any = {};
    obj.address = message.address;
    obj.subaccount_id = message.subaccountId;
    return obj;
  },
  fromAminoMsg(object: QueryDerivativeMarketAddressResponseAminoMsg): QueryDerivativeMarketAddressResponse {
    return QueryDerivativeMarketAddressResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDerivativeMarketAddressResponseProtoMsg): QueryDerivativeMarketAddressResponse {
    return QueryDerivativeMarketAddressResponse.decode(message.value);
  },
  toProto(message: QueryDerivativeMarketAddressResponse): Uint8Array {
    return QueryDerivativeMarketAddressResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDerivativeMarketAddressResponse): QueryDerivativeMarketAddressResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryDerivativeMarketAddressResponse",
      value: QueryDerivativeMarketAddressResponse.encode(message).finish()
    };
  }
};
function createBaseQuerySubaccountTradeNonceRequest(): QuerySubaccountTradeNonceRequest {
  return {
    subaccountId: ""
  };
}
export const QuerySubaccountTradeNonceRequest = {
  typeUrl: "/injective.exchange.v1beta1.QuerySubaccountTradeNonceRequest",
  encode(message: QuerySubaccountTradeNonceRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QuerySubaccountTradeNonceRequestAmino): QuerySubaccountTradeNonceRequest {
    return {
      subaccountId: object.subaccount_id
    };
  },
  toAmino(message: QuerySubaccountTradeNonceRequest): QuerySubaccountTradeNonceRequestAmino {
    const obj: any = {};
    obj.subaccount_id = message.subaccountId;
    return obj;
  },
  fromAminoMsg(object: QuerySubaccountTradeNonceRequestAminoMsg): QuerySubaccountTradeNonceRequest {
    return QuerySubaccountTradeNonceRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySubaccountTradeNonceRequestProtoMsg): QuerySubaccountTradeNonceRequest {
    return QuerySubaccountTradeNonceRequest.decode(message.value);
  },
  toProto(message: QuerySubaccountTradeNonceRequest): Uint8Array {
    return QuerySubaccountTradeNonceRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySubaccountTradeNonceRequest): QuerySubaccountTradeNonceRequestProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QuerySubaccountTradeNonceRequest",
      value: QuerySubaccountTradeNonceRequest.encode(message).finish()
    };
  }
};
function createBaseQuerySubaccountPositionsRequest(): QuerySubaccountPositionsRequest {
  return {
    subaccountId: ""
  };
}
export const QuerySubaccountPositionsRequest = {
  typeUrl: "/injective.exchange.v1beta1.QuerySubaccountPositionsRequest",
  encode(message: QuerySubaccountPositionsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QuerySubaccountPositionsRequestAmino): QuerySubaccountPositionsRequest {
    return {
      subaccountId: object.subaccount_id
    };
  },
  toAmino(message: QuerySubaccountPositionsRequest): QuerySubaccountPositionsRequestAmino {
    const obj: any = {};
    obj.subaccount_id = message.subaccountId;
    return obj;
  },
  fromAminoMsg(object: QuerySubaccountPositionsRequestAminoMsg): QuerySubaccountPositionsRequest {
    return QuerySubaccountPositionsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySubaccountPositionsRequestProtoMsg): QuerySubaccountPositionsRequest {
    return QuerySubaccountPositionsRequest.decode(message.value);
  },
  toProto(message: QuerySubaccountPositionsRequest): Uint8Array {
    return QuerySubaccountPositionsRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySubaccountPositionsRequest): QuerySubaccountPositionsRequestProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QuerySubaccountPositionsRequest",
      value: QuerySubaccountPositionsRequest.encode(message).finish()
    };
  }
};
function createBaseQuerySubaccountPositionInMarketRequest(): QuerySubaccountPositionInMarketRequest {
  return {
    subaccountId: "",
    marketId: ""
  };
}
export const QuerySubaccountPositionInMarketRequest = {
  typeUrl: "/injective.exchange.v1beta1.QuerySubaccountPositionInMarketRequest",
  encode(message: QuerySubaccountPositionInMarketRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QuerySubaccountPositionInMarketRequestAmino): QuerySubaccountPositionInMarketRequest {
    return {
      subaccountId: object.subaccount_id,
      marketId: object.market_id
    };
  },
  toAmino(message: QuerySubaccountPositionInMarketRequest): QuerySubaccountPositionInMarketRequestAmino {
    const obj: any = {};
    obj.subaccount_id = message.subaccountId;
    obj.market_id = message.marketId;
    return obj;
  },
  fromAminoMsg(object: QuerySubaccountPositionInMarketRequestAminoMsg): QuerySubaccountPositionInMarketRequest {
    return QuerySubaccountPositionInMarketRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySubaccountPositionInMarketRequestProtoMsg): QuerySubaccountPositionInMarketRequest {
    return QuerySubaccountPositionInMarketRequest.decode(message.value);
  },
  toProto(message: QuerySubaccountPositionInMarketRequest): Uint8Array {
    return QuerySubaccountPositionInMarketRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySubaccountPositionInMarketRequest): QuerySubaccountPositionInMarketRequestProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QuerySubaccountPositionInMarketRequest",
      value: QuerySubaccountPositionInMarketRequest.encode(message).finish()
    };
  }
};
function createBaseQuerySubaccountEffectivePositionInMarketRequest(): QuerySubaccountEffectivePositionInMarketRequest {
  return {
    subaccountId: "",
    marketId: ""
  };
}
export const QuerySubaccountEffectivePositionInMarketRequest = {
  typeUrl: "/injective.exchange.v1beta1.QuerySubaccountEffectivePositionInMarketRequest",
  encode(message: QuerySubaccountEffectivePositionInMarketRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QuerySubaccountEffectivePositionInMarketRequestAmino): QuerySubaccountEffectivePositionInMarketRequest {
    return {
      subaccountId: object.subaccount_id,
      marketId: object.market_id
    };
  },
  toAmino(message: QuerySubaccountEffectivePositionInMarketRequest): QuerySubaccountEffectivePositionInMarketRequestAmino {
    const obj: any = {};
    obj.subaccount_id = message.subaccountId;
    obj.market_id = message.marketId;
    return obj;
  },
  fromAminoMsg(object: QuerySubaccountEffectivePositionInMarketRequestAminoMsg): QuerySubaccountEffectivePositionInMarketRequest {
    return QuerySubaccountEffectivePositionInMarketRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySubaccountEffectivePositionInMarketRequestProtoMsg): QuerySubaccountEffectivePositionInMarketRequest {
    return QuerySubaccountEffectivePositionInMarketRequest.decode(message.value);
  },
  toProto(message: QuerySubaccountEffectivePositionInMarketRequest): Uint8Array {
    return QuerySubaccountEffectivePositionInMarketRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySubaccountEffectivePositionInMarketRequest): QuerySubaccountEffectivePositionInMarketRequestProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QuerySubaccountEffectivePositionInMarketRequest",
      value: QuerySubaccountEffectivePositionInMarketRequest.encode(message).finish()
    };
  }
};
function createBaseQuerySubaccountOrderMetadataRequest(): QuerySubaccountOrderMetadataRequest {
  return {
    subaccountId: ""
  };
}
export const QuerySubaccountOrderMetadataRequest = {
  typeUrl: "/injective.exchange.v1beta1.QuerySubaccountOrderMetadataRequest",
  encode(message: QuerySubaccountOrderMetadataRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QuerySubaccountOrderMetadataRequestAmino): QuerySubaccountOrderMetadataRequest {
    return {
      subaccountId: object.subaccount_id
    };
  },
  toAmino(message: QuerySubaccountOrderMetadataRequest): QuerySubaccountOrderMetadataRequestAmino {
    const obj: any = {};
    obj.subaccount_id = message.subaccountId;
    return obj;
  },
  fromAminoMsg(object: QuerySubaccountOrderMetadataRequestAminoMsg): QuerySubaccountOrderMetadataRequest {
    return QuerySubaccountOrderMetadataRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySubaccountOrderMetadataRequestProtoMsg): QuerySubaccountOrderMetadataRequest {
    return QuerySubaccountOrderMetadataRequest.decode(message.value);
  },
  toProto(message: QuerySubaccountOrderMetadataRequest): Uint8Array {
    return QuerySubaccountOrderMetadataRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySubaccountOrderMetadataRequest): QuerySubaccountOrderMetadataRequestProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QuerySubaccountOrderMetadataRequest",
      value: QuerySubaccountOrderMetadataRequest.encode(message).finish()
    };
  }
};
function createBaseQuerySubaccountPositionsResponse(): QuerySubaccountPositionsResponse {
  return {
    state: []
  };
}
export const QuerySubaccountPositionsResponse = {
  typeUrl: "/injective.exchange.v1beta1.QuerySubaccountPositionsResponse",
  encode(message: QuerySubaccountPositionsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QuerySubaccountPositionsResponseAmino): QuerySubaccountPositionsResponse {
    return {
      state: Array.isArray(object?.state) ? object.state.map((e: any) => DerivativePosition.fromAmino(e)) : []
    };
  },
  toAmino(message: QuerySubaccountPositionsResponse): QuerySubaccountPositionsResponseAmino {
    const obj: any = {};
    if (message.state) {
      obj.state = message.state.map(e => e ? DerivativePosition.toAmino(e) : undefined);
    } else {
      obj.state = [];
    }
    return obj;
  },
  fromAminoMsg(object: QuerySubaccountPositionsResponseAminoMsg): QuerySubaccountPositionsResponse {
    return QuerySubaccountPositionsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySubaccountPositionsResponseProtoMsg): QuerySubaccountPositionsResponse {
    return QuerySubaccountPositionsResponse.decode(message.value);
  },
  toProto(message: QuerySubaccountPositionsResponse): Uint8Array {
    return QuerySubaccountPositionsResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySubaccountPositionsResponse): QuerySubaccountPositionsResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QuerySubaccountPositionsResponse",
      value: QuerySubaccountPositionsResponse.encode(message).finish()
    };
  }
};
function createBaseQuerySubaccountPositionInMarketResponse(): QuerySubaccountPositionInMarketResponse {
  return {
    state: undefined
  };
}
export const QuerySubaccountPositionInMarketResponse = {
  typeUrl: "/injective.exchange.v1beta1.QuerySubaccountPositionInMarketResponse",
  encode(message: QuerySubaccountPositionInMarketResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QuerySubaccountPositionInMarketResponseAmino): QuerySubaccountPositionInMarketResponse {
    return {
      state: object?.state ? Position.fromAmino(object.state) : undefined
    };
  },
  toAmino(message: QuerySubaccountPositionInMarketResponse): QuerySubaccountPositionInMarketResponseAmino {
    const obj: any = {};
    obj.state = message.state ? Position.toAmino(message.state) : undefined;
    return obj;
  },
  fromAminoMsg(object: QuerySubaccountPositionInMarketResponseAminoMsg): QuerySubaccountPositionInMarketResponse {
    return QuerySubaccountPositionInMarketResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySubaccountPositionInMarketResponseProtoMsg): QuerySubaccountPositionInMarketResponse {
    return QuerySubaccountPositionInMarketResponse.decode(message.value);
  },
  toProto(message: QuerySubaccountPositionInMarketResponse): Uint8Array {
    return QuerySubaccountPositionInMarketResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySubaccountPositionInMarketResponse): QuerySubaccountPositionInMarketResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QuerySubaccountPositionInMarketResponse",
      value: QuerySubaccountPositionInMarketResponse.encode(message).finish()
    };
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
  typeUrl: "/injective.exchange.v1beta1.EffectivePosition",
  encode(message: EffectivePosition, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.isLong === true) {
      writer.uint32(8).bool(message.isLong);
    }
    if (message.quantity !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.quantity, 18).atomics);
    }
    if (message.entryPrice !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.entryPrice, 18).atomics);
    }
    if (message.effectiveMargin !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.effectiveMargin, 18).atomics);
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
  },
  fromAmino(object: EffectivePositionAmino): EffectivePosition {
    return {
      isLong: object.is_long,
      quantity: object.quantity,
      entryPrice: object.entry_price,
      effectiveMargin: object.effective_margin
    };
  },
  toAmino(message: EffectivePosition): EffectivePositionAmino {
    const obj: any = {};
    obj.is_long = message.isLong;
    obj.quantity = message.quantity;
    obj.entry_price = message.entryPrice;
    obj.effective_margin = message.effectiveMargin;
    return obj;
  },
  fromAminoMsg(object: EffectivePositionAminoMsg): EffectivePosition {
    return EffectivePosition.fromAmino(object.value);
  },
  fromProtoMsg(message: EffectivePositionProtoMsg): EffectivePosition {
    return EffectivePosition.decode(message.value);
  },
  toProto(message: EffectivePosition): Uint8Array {
    return EffectivePosition.encode(message).finish();
  },
  toProtoMsg(message: EffectivePosition): EffectivePositionProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.EffectivePosition",
      value: EffectivePosition.encode(message).finish()
    };
  }
};
function createBaseQuerySubaccountEffectivePositionInMarketResponse(): QuerySubaccountEffectivePositionInMarketResponse {
  return {
    state: undefined
  };
}
export const QuerySubaccountEffectivePositionInMarketResponse = {
  typeUrl: "/injective.exchange.v1beta1.QuerySubaccountEffectivePositionInMarketResponse",
  encode(message: QuerySubaccountEffectivePositionInMarketResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QuerySubaccountEffectivePositionInMarketResponseAmino): QuerySubaccountEffectivePositionInMarketResponse {
    return {
      state: object?.state ? EffectivePosition.fromAmino(object.state) : undefined
    };
  },
  toAmino(message: QuerySubaccountEffectivePositionInMarketResponse): QuerySubaccountEffectivePositionInMarketResponseAmino {
    const obj: any = {};
    obj.state = message.state ? EffectivePosition.toAmino(message.state) : undefined;
    return obj;
  },
  fromAminoMsg(object: QuerySubaccountEffectivePositionInMarketResponseAminoMsg): QuerySubaccountEffectivePositionInMarketResponse {
    return QuerySubaccountEffectivePositionInMarketResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySubaccountEffectivePositionInMarketResponseProtoMsg): QuerySubaccountEffectivePositionInMarketResponse {
    return QuerySubaccountEffectivePositionInMarketResponse.decode(message.value);
  },
  toProto(message: QuerySubaccountEffectivePositionInMarketResponse): Uint8Array {
    return QuerySubaccountEffectivePositionInMarketResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySubaccountEffectivePositionInMarketResponse): QuerySubaccountEffectivePositionInMarketResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QuerySubaccountEffectivePositionInMarketResponse",
      value: QuerySubaccountEffectivePositionInMarketResponse.encode(message).finish()
    };
  }
};
function createBaseQueryPerpetualMarketInfoRequest(): QueryPerpetualMarketInfoRequest {
  return {
    marketId: ""
  };
}
export const QueryPerpetualMarketInfoRequest = {
  typeUrl: "/injective.exchange.v1beta1.QueryPerpetualMarketInfoRequest",
  encode(message: QueryPerpetualMarketInfoRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueryPerpetualMarketInfoRequestAmino): QueryPerpetualMarketInfoRequest {
    return {
      marketId: object.market_id
    };
  },
  toAmino(message: QueryPerpetualMarketInfoRequest): QueryPerpetualMarketInfoRequestAmino {
    const obj: any = {};
    obj.market_id = message.marketId;
    return obj;
  },
  fromAminoMsg(object: QueryPerpetualMarketInfoRequestAminoMsg): QueryPerpetualMarketInfoRequest {
    return QueryPerpetualMarketInfoRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPerpetualMarketInfoRequestProtoMsg): QueryPerpetualMarketInfoRequest {
    return QueryPerpetualMarketInfoRequest.decode(message.value);
  },
  toProto(message: QueryPerpetualMarketInfoRequest): Uint8Array {
    return QueryPerpetualMarketInfoRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPerpetualMarketInfoRequest): QueryPerpetualMarketInfoRequestProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryPerpetualMarketInfoRequest",
      value: QueryPerpetualMarketInfoRequest.encode(message).finish()
    };
  }
};
function createBaseQueryPerpetualMarketInfoResponse(): QueryPerpetualMarketInfoResponse {
  return {
    info: PerpetualMarketInfo.fromPartial({})
  };
}
export const QueryPerpetualMarketInfoResponse = {
  typeUrl: "/injective.exchange.v1beta1.QueryPerpetualMarketInfoResponse",
  encode(message: QueryPerpetualMarketInfoResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueryPerpetualMarketInfoResponseAmino): QueryPerpetualMarketInfoResponse {
    return {
      info: object?.info ? PerpetualMarketInfo.fromAmino(object.info) : undefined
    };
  },
  toAmino(message: QueryPerpetualMarketInfoResponse): QueryPerpetualMarketInfoResponseAmino {
    const obj: any = {};
    obj.info = message.info ? PerpetualMarketInfo.toAmino(message.info) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPerpetualMarketInfoResponseAminoMsg): QueryPerpetualMarketInfoResponse {
    return QueryPerpetualMarketInfoResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPerpetualMarketInfoResponseProtoMsg): QueryPerpetualMarketInfoResponse {
    return QueryPerpetualMarketInfoResponse.decode(message.value);
  },
  toProto(message: QueryPerpetualMarketInfoResponse): Uint8Array {
    return QueryPerpetualMarketInfoResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPerpetualMarketInfoResponse): QueryPerpetualMarketInfoResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryPerpetualMarketInfoResponse",
      value: QueryPerpetualMarketInfoResponse.encode(message).finish()
    };
  }
};
function createBaseQueryExpiryFuturesMarketInfoRequest(): QueryExpiryFuturesMarketInfoRequest {
  return {
    marketId: ""
  };
}
export const QueryExpiryFuturesMarketInfoRequest = {
  typeUrl: "/injective.exchange.v1beta1.QueryExpiryFuturesMarketInfoRequest",
  encode(message: QueryExpiryFuturesMarketInfoRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueryExpiryFuturesMarketInfoRequestAmino): QueryExpiryFuturesMarketInfoRequest {
    return {
      marketId: object.market_id
    };
  },
  toAmino(message: QueryExpiryFuturesMarketInfoRequest): QueryExpiryFuturesMarketInfoRequestAmino {
    const obj: any = {};
    obj.market_id = message.marketId;
    return obj;
  },
  fromAminoMsg(object: QueryExpiryFuturesMarketInfoRequestAminoMsg): QueryExpiryFuturesMarketInfoRequest {
    return QueryExpiryFuturesMarketInfoRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryExpiryFuturesMarketInfoRequestProtoMsg): QueryExpiryFuturesMarketInfoRequest {
    return QueryExpiryFuturesMarketInfoRequest.decode(message.value);
  },
  toProto(message: QueryExpiryFuturesMarketInfoRequest): Uint8Array {
    return QueryExpiryFuturesMarketInfoRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryExpiryFuturesMarketInfoRequest): QueryExpiryFuturesMarketInfoRequestProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryExpiryFuturesMarketInfoRequest",
      value: QueryExpiryFuturesMarketInfoRequest.encode(message).finish()
    };
  }
};
function createBaseQueryExpiryFuturesMarketInfoResponse(): QueryExpiryFuturesMarketInfoResponse {
  return {
    info: ExpiryFuturesMarketInfo.fromPartial({})
  };
}
export const QueryExpiryFuturesMarketInfoResponse = {
  typeUrl: "/injective.exchange.v1beta1.QueryExpiryFuturesMarketInfoResponse",
  encode(message: QueryExpiryFuturesMarketInfoResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueryExpiryFuturesMarketInfoResponseAmino): QueryExpiryFuturesMarketInfoResponse {
    return {
      info: object?.info ? ExpiryFuturesMarketInfo.fromAmino(object.info) : undefined
    };
  },
  toAmino(message: QueryExpiryFuturesMarketInfoResponse): QueryExpiryFuturesMarketInfoResponseAmino {
    const obj: any = {};
    obj.info = message.info ? ExpiryFuturesMarketInfo.toAmino(message.info) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryExpiryFuturesMarketInfoResponseAminoMsg): QueryExpiryFuturesMarketInfoResponse {
    return QueryExpiryFuturesMarketInfoResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryExpiryFuturesMarketInfoResponseProtoMsg): QueryExpiryFuturesMarketInfoResponse {
    return QueryExpiryFuturesMarketInfoResponse.decode(message.value);
  },
  toProto(message: QueryExpiryFuturesMarketInfoResponse): Uint8Array {
    return QueryExpiryFuturesMarketInfoResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryExpiryFuturesMarketInfoResponse): QueryExpiryFuturesMarketInfoResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryExpiryFuturesMarketInfoResponse",
      value: QueryExpiryFuturesMarketInfoResponse.encode(message).finish()
    };
  }
};
function createBaseQueryPerpetualMarketFundingRequest(): QueryPerpetualMarketFundingRequest {
  return {
    marketId: ""
  };
}
export const QueryPerpetualMarketFundingRequest = {
  typeUrl: "/injective.exchange.v1beta1.QueryPerpetualMarketFundingRequest",
  encode(message: QueryPerpetualMarketFundingRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueryPerpetualMarketFundingRequestAmino): QueryPerpetualMarketFundingRequest {
    return {
      marketId: object.market_id
    };
  },
  toAmino(message: QueryPerpetualMarketFundingRequest): QueryPerpetualMarketFundingRequestAmino {
    const obj: any = {};
    obj.market_id = message.marketId;
    return obj;
  },
  fromAminoMsg(object: QueryPerpetualMarketFundingRequestAminoMsg): QueryPerpetualMarketFundingRequest {
    return QueryPerpetualMarketFundingRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPerpetualMarketFundingRequestProtoMsg): QueryPerpetualMarketFundingRequest {
    return QueryPerpetualMarketFundingRequest.decode(message.value);
  },
  toProto(message: QueryPerpetualMarketFundingRequest): Uint8Array {
    return QueryPerpetualMarketFundingRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPerpetualMarketFundingRequest): QueryPerpetualMarketFundingRequestProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryPerpetualMarketFundingRequest",
      value: QueryPerpetualMarketFundingRequest.encode(message).finish()
    };
  }
};
function createBaseQueryPerpetualMarketFundingResponse(): QueryPerpetualMarketFundingResponse {
  return {
    state: PerpetualMarketFunding.fromPartial({})
  };
}
export const QueryPerpetualMarketFundingResponse = {
  typeUrl: "/injective.exchange.v1beta1.QueryPerpetualMarketFundingResponse",
  encode(message: QueryPerpetualMarketFundingResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueryPerpetualMarketFundingResponseAmino): QueryPerpetualMarketFundingResponse {
    return {
      state: object?.state ? PerpetualMarketFunding.fromAmino(object.state) : undefined
    };
  },
  toAmino(message: QueryPerpetualMarketFundingResponse): QueryPerpetualMarketFundingResponseAmino {
    const obj: any = {};
    obj.state = message.state ? PerpetualMarketFunding.toAmino(message.state) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPerpetualMarketFundingResponseAminoMsg): QueryPerpetualMarketFundingResponse {
    return QueryPerpetualMarketFundingResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPerpetualMarketFundingResponseProtoMsg): QueryPerpetualMarketFundingResponse {
    return QueryPerpetualMarketFundingResponse.decode(message.value);
  },
  toProto(message: QueryPerpetualMarketFundingResponse): Uint8Array {
    return QueryPerpetualMarketFundingResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPerpetualMarketFundingResponse): QueryPerpetualMarketFundingResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryPerpetualMarketFundingResponse",
      value: QueryPerpetualMarketFundingResponse.encode(message).finish()
    };
  }
};
function createBaseQuerySubaccountOrderMetadataResponse(): QuerySubaccountOrderMetadataResponse {
  return {
    metadata: []
  };
}
export const QuerySubaccountOrderMetadataResponse = {
  typeUrl: "/injective.exchange.v1beta1.QuerySubaccountOrderMetadataResponse",
  encode(message: QuerySubaccountOrderMetadataResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QuerySubaccountOrderMetadataResponseAmino): QuerySubaccountOrderMetadataResponse {
    return {
      metadata: Array.isArray(object?.metadata) ? object.metadata.map((e: any) => SubaccountOrderbookMetadataWithMarket.fromAmino(e)) : []
    };
  },
  toAmino(message: QuerySubaccountOrderMetadataResponse): QuerySubaccountOrderMetadataResponseAmino {
    const obj: any = {};
    if (message.metadata) {
      obj.metadata = message.metadata.map(e => e ? SubaccountOrderbookMetadataWithMarket.toAmino(e) : undefined);
    } else {
      obj.metadata = [];
    }
    return obj;
  },
  fromAminoMsg(object: QuerySubaccountOrderMetadataResponseAminoMsg): QuerySubaccountOrderMetadataResponse {
    return QuerySubaccountOrderMetadataResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySubaccountOrderMetadataResponseProtoMsg): QuerySubaccountOrderMetadataResponse {
    return QuerySubaccountOrderMetadataResponse.decode(message.value);
  },
  toProto(message: QuerySubaccountOrderMetadataResponse): Uint8Array {
    return QuerySubaccountOrderMetadataResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySubaccountOrderMetadataResponse): QuerySubaccountOrderMetadataResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QuerySubaccountOrderMetadataResponse",
      value: QuerySubaccountOrderMetadataResponse.encode(message).finish()
    };
  }
};
function createBaseQuerySubaccountTradeNonceResponse(): QuerySubaccountTradeNonceResponse {
  return {
    nonce: 0
  };
}
export const QuerySubaccountTradeNonceResponse = {
  typeUrl: "/injective.exchange.v1beta1.QuerySubaccountTradeNonceResponse",
  encode(message: QuerySubaccountTradeNonceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QuerySubaccountTradeNonceResponseAmino): QuerySubaccountTradeNonceResponse {
    return {
      nonce: object.nonce
    };
  },
  toAmino(message: QuerySubaccountTradeNonceResponse): QuerySubaccountTradeNonceResponseAmino {
    const obj: any = {};
    obj.nonce = message.nonce;
    return obj;
  },
  fromAminoMsg(object: QuerySubaccountTradeNonceResponseAminoMsg): QuerySubaccountTradeNonceResponse {
    return QuerySubaccountTradeNonceResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySubaccountTradeNonceResponseProtoMsg): QuerySubaccountTradeNonceResponse {
    return QuerySubaccountTradeNonceResponse.decode(message.value);
  },
  toProto(message: QuerySubaccountTradeNonceResponse): Uint8Array {
    return QuerySubaccountTradeNonceResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySubaccountTradeNonceResponse): QuerySubaccountTradeNonceResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QuerySubaccountTradeNonceResponse",
      value: QuerySubaccountTradeNonceResponse.encode(message).finish()
    };
  }
};
function createBaseQueryModuleStateRequest(): QueryModuleStateRequest {
  return {};
}
export const QueryModuleStateRequest = {
  typeUrl: "/injective.exchange.v1beta1.QueryModuleStateRequest",
  encode(_: QueryModuleStateRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryModuleStateRequest {
    return {};
  },
  fromPartial(_: Partial<QueryModuleStateRequest>): QueryModuleStateRequest {
    const message = createBaseQueryModuleStateRequest();
    return message;
  },
  fromAmino(_: QueryModuleStateRequestAmino): QueryModuleStateRequest {
    return {};
  },
  toAmino(_: QueryModuleStateRequest): QueryModuleStateRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryModuleStateRequestAminoMsg): QueryModuleStateRequest {
    return QueryModuleStateRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryModuleStateRequestProtoMsg): QueryModuleStateRequest {
    return QueryModuleStateRequest.decode(message.value);
  },
  toProto(message: QueryModuleStateRequest): Uint8Array {
    return QueryModuleStateRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryModuleStateRequest): QueryModuleStateRequestProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryModuleStateRequest",
      value: QueryModuleStateRequest.encode(message).finish()
    };
  }
};
function createBaseQueryModuleStateResponse(): QueryModuleStateResponse {
  return {
    state: GenesisState.fromPartial({})
  };
}
export const QueryModuleStateResponse = {
  typeUrl: "/injective.exchange.v1beta1.QueryModuleStateResponse",
  encode(message: QueryModuleStateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueryModuleStateResponseAmino): QueryModuleStateResponse {
    return {
      state: object?.state ? GenesisState.fromAmino(object.state) : undefined
    };
  },
  toAmino(message: QueryModuleStateResponse): QueryModuleStateResponseAmino {
    const obj: any = {};
    obj.state = message.state ? GenesisState.toAmino(message.state) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryModuleStateResponseAminoMsg): QueryModuleStateResponse {
    return QueryModuleStateResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryModuleStateResponseProtoMsg): QueryModuleStateResponse {
    return QueryModuleStateResponse.decode(message.value);
  },
  toProto(message: QueryModuleStateResponse): Uint8Array {
    return QueryModuleStateResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryModuleStateResponse): QueryModuleStateResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryModuleStateResponse",
      value: QueryModuleStateResponse.encode(message).finish()
    };
  }
};
function createBaseQueryPositionsRequest(): QueryPositionsRequest {
  return {};
}
export const QueryPositionsRequest = {
  typeUrl: "/injective.exchange.v1beta1.QueryPositionsRequest",
  encode(_: QueryPositionsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryPositionsRequest {
    return {};
  },
  fromPartial(_: Partial<QueryPositionsRequest>): QueryPositionsRequest {
    const message = createBaseQueryPositionsRequest();
    return message;
  },
  fromAmino(_: QueryPositionsRequestAmino): QueryPositionsRequest {
    return {};
  },
  toAmino(_: QueryPositionsRequest): QueryPositionsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryPositionsRequestAminoMsg): QueryPositionsRequest {
    return QueryPositionsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPositionsRequestProtoMsg): QueryPositionsRequest {
    return QueryPositionsRequest.decode(message.value);
  },
  toProto(message: QueryPositionsRequest): Uint8Array {
    return QueryPositionsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPositionsRequest): QueryPositionsRequestProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryPositionsRequest",
      value: QueryPositionsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryPositionsResponse(): QueryPositionsResponse {
  return {
    state: []
  };
}
export const QueryPositionsResponse = {
  typeUrl: "/injective.exchange.v1beta1.QueryPositionsResponse",
  encode(message: QueryPositionsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueryPositionsResponseAmino): QueryPositionsResponse {
    return {
      state: Array.isArray(object?.state) ? object.state.map((e: any) => DerivativePosition.fromAmino(e)) : []
    };
  },
  toAmino(message: QueryPositionsResponse): QueryPositionsResponseAmino {
    const obj: any = {};
    if (message.state) {
      obj.state = message.state.map(e => e ? DerivativePosition.toAmino(e) : undefined);
    } else {
      obj.state = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryPositionsResponseAminoMsg): QueryPositionsResponse {
    return QueryPositionsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPositionsResponseProtoMsg): QueryPositionsResponse {
    return QueryPositionsResponse.decode(message.value);
  },
  toProto(message: QueryPositionsResponse): Uint8Array {
    return QueryPositionsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPositionsResponse): QueryPositionsResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryPositionsResponse",
      value: QueryPositionsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryTradeRewardPointsRequest(): QueryTradeRewardPointsRequest {
  return {
    accounts: [],
    pendingPoolTimestamp: BigInt(0)
  };
}
export const QueryTradeRewardPointsRequest = {
  typeUrl: "/injective.exchange.v1beta1.QueryTradeRewardPointsRequest",
  encode(message: QueryTradeRewardPointsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.accounts) {
      writer.uint32(10).string(v!);
    }
    if (message.pendingPoolTimestamp !== BigInt(0)) {
      writer.uint32(16).int64(message.pendingPoolTimestamp);
    }
    return writer;
  },
  fromJSON(object: any): QueryTradeRewardPointsRequest {
    return {
      accounts: Array.isArray(object?.accounts) ? object.accounts.map((e: any) => String(e)) : [],
      pendingPoolTimestamp: isSet(object.pendingPoolTimestamp) ? BigInt(object.pendingPoolTimestamp.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<QueryTradeRewardPointsRequest>): QueryTradeRewardPointsRequest {
    const message = createBaseQueryTradeRewardPointsRequest();
    message.accounts = object.accounts?.map(e => e) || [];
    message.pendingPoolTimestamp = object.pendingPoolTimestamp !== undefined && object.pendingPoolTimestamp !== null ? BigInt(object.pendingPoolTimestamp.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryTradeRewardPointsRequestAmino): QueryTradeRewardPointsRequest {
    return {
      accounts: Array.isArray(object?.accounts) ? object.accounts.map((e: any) => e) : [],
      pendingPoolTimestamp: BigInt(object.pending_pool_timestamp)
    };
  },
  toAmino(message: QueryTradeRewardPointsRequest): QueryTradeRewardPointsRequestAmino {
    const obj: any = {};
    if (message.accounts) {
      obj.accounts = message.accounts.map(e => e);
    } else {
      obj.accounts = [];
    }
    obj.pending_pool_timestamp = message.pendingPoolTimestamp ? message.pendingPoolTimestamp.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTradeRewardPointsRequestAminoMsg): QueryTradeRewardPointsRequest {
    return QueryTradeRewardPointsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTradeRewardPointsRequestProtoMsg): QueryTradeRewardPointsRequest {
    return QueryTradeRewardPointsRequest.decode(message.value);
  },
  toProto(message: QueryTradeRewardPointsRequest): Uint8Array {
    return QueryTradeRewardPointsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTradeRewardPointsRequest): QueryTradeRewardPointsRequestProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryTradeRewardPointsRequest",
      value: QueryTradeRewardPointsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryTradeRewardPointsResponse(): QueryTradeRewardPointsResponse {
  return {
    accountTradeRewardPoints: []
  };
}
export const QueryTradeRewardPointsResponse = {
  typeUrl: "/injective.exchange.v1beta1.QueryTradeRewardPointsResponse",
  encode(message: QueryTradeRewardPointsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.accountTradeRewardPoints) {
      writer.uint32(10).string(Decimal.fromUserInput(v!, 18).atomics);
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
  },
  fromAmino(object: QueryTradeRewardPointsResponseAmino): QueryTradeRewardPointsResponse {
    return {
      accountTradeRewardPoints: Array.isArray(object?.account_trade_reward_points) ? object.account_trade_reward_points.map((e: any) => e) : []
    };
  },
  toAmino(message: QueryTradeRewardPointsResponse): QueryTradeRewardPointsResponseAmino {
    const obj: any = {};
    if (message.accountTradeRewardPoints) {
      obj.account_trade_reward_points = message.accountTradeRewardPoints.map(e => e);
    } else {
      obj.account_trade_reward_points = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryTradeRewardPointsResponseAminoMsg): QueryTradeRewardPointsResponse {
    return QueryTradeRewardPointsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTradeRewardPointsResponseProtoMsg): QueryTradeRewardPointsResponse {
    return QueryTradeRewardPointsResponse.decode(message.value);
  },
  toProto(message: QueryTradeRewardPointsResponse): Uint8Array {
    return QueryTradeRewardPointsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTradeRewardPointsResponse): QueryTradeRewardPointsResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryTradeRewardPointsResponse",
      value: QueryTradeRewardPointsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryTradeRewardCampaignRequest(): QueryTradeRewardCampaignRequest {
  return {};
}
export const QueryTradeRewardCampaignRequest = {
  typeUrl: "/injective.exchange.v1beta1.QueryTradeRewardCampaignRequest",
  encode(_: QueryTradeRewardCampaignRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryTradeRewardCampaignRequest {
    return {};
  },
  fromPartial(_: Partial<QueryTradeRewardCampaignRequest>): QueryTradeRewardCampaignRequest {
    const message = createBaseQueryTradeRewardCampaignRequest();
    return message;
  },
  fromAmino(_: QueryTradeRewardCampaignRequestAmino): QueryTradeRewardCampaignRequest {
    return {};
  },
  toAmino(_: QueryTradeRewardCampaignRequest): QueryTradeRewardCampaignRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryTradeRewardCampaignRequestAminoMsg): QueryTradeRewardCampaignRequest {
    return QueryTradeRewardCampaignRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTradeRewardCampaignRequestProtoMsg): QueryTradeRewardCampaignRequest {
    return QueryTradeRewardCampaignRequest.decode(message.value);
  },
  toProto(message: QueryTradeRewardCampaignRequest): Uint8Array {
    return QueryTradeRewardCampaignRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTradeRewardCampaignRequest): QueryTradeRewardCampaignRequestProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryTradeRewardCampaignRequest",
      value: QueryTradeRewardCampaignRequest.encode(message).finish()
    };
  }
};
function createBaseQueryTradeRewardCampaignResponse(): QueryTradeRewardCampaignResponse {
  return {
    tradingRewardCampaignInfo: TradingRewardCampaignInfo.fromPartial({}),
    tradingRewardPoolCampaignSchedule: [],
    totalTradeRewardPoints: "",
    pendingTradingRewardPoolCampaignSchedule: [],
    pendingTotalTradeRewardPoints: []
  };
}
export const QueryTradeRewardCampaignResponse = {
  typeUrl: "/injective.exchange.v1beta1.QueryTradeRewardCampaignResponse",
  encode(message: QueryTradeRewardCampaignResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tradingRewardCampaignInfo !== undefined) {
      TradingRewardCampaignInfo.encode(message.tradingRewardCampaignInfo, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.tradingRewardPoolCampaignSchedule) {
      CampaignRewardPool.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.totalTradeRewardPoints !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.totalTradeRewardPoints, 18).atomics);
    }
    for (const v of message.pendingTradingRewardPoolCampaignSchedule) {
      CampaignRewardPool.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.pendingTotalTradeRewardPoints) {
      writer.uint32(42).string(Decimal.fromUserInput(v!, 18).atomics);
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
  },
  fromAmino(object: QueryTradeRewardCampaignResponseAmino): QueryTradeRewardCampaignResponse {
    return {
      tradingRewardCampaignInfo: object?.trading_reward_campaign_info ? TradingRewardCampaignInfo.fromAmino(object.trading_reward_campaign_info) : undefined,
      tradingRewardPoolCampaignSchedule: Array.isArray(object?.trading_reward_pool_campaign_schedule) ? object.trading_reward_pool_campaign_schedule.map((e: any) => CampaignRewardPool.fromAmino(e)) : [],
      totalTradeRewardPoints: object.total_trade_reward_points,
      pendingTradingRewardPoolCampaignSchedule: Array.isArray(object?.pending_trading_reward_pool_campaign_schedule) ? object.pending_trading_reward_pool_campaign_schedule.map((e: any) => CampaignRewardPool.fromAmino(e)) : [],
      pendingTotalTradeRewardPoints: Array.isArray(object?.pending_total_trade_reward_points) ? object.pending_total_trade_reward_points.map((e: any) => e) : []
    };
  },
  toAmino(message: QueryTradeRewardCampaignResponse): QueryTradeRewardCampaignResponseAmino {
    const obj: any = {};
    obj.trading_reward_campaign_info = message.tradingRewardCampaignInfo ? TradingRewardCampaignInfo.toAmino(message.tradingRewardCampaignInfo) : undefined;
    if (message.tradingRewardPoolCampaignSchedule) {
      obj.trading_reward_pool_campaign_schedule = message.tradingRewardPoolCampaignSchedule.map(e => e ? CampaignRewardPool.toAmino(e) : undefined);
    } else {
      obj.trading_reward_pool_campaign_schedule = [];
    }
    obj.total_trade_reward_points = message.totalTradeRewardPoints;
    if (message.pendingTradingRewardPoolCampaignSchedule) {
      obj.pending_trading_reward_pool_campaign_schedule = message.pendingTradingRewardPoolCampaignSchedule.map(e => e ? CampaignRewardPool.toAmino(e) : undefined);
    } else {
      obj.pending_trading_reward_pool_campaign_schedule = [];
    }
    if (message.pendingTotalTradeRewardPoints) {
      obj.pending_total_trade_reward_points = message.pendingTotalTradeRewardPoints.map(e => e);
    } else {
      obj.pending_total_trade_reward_points = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryTradeRewardCampaignResponseAminoMsg): QueryTradeRewardCampaignResponse {
    return QueryTradeRewardCampaignResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTradeRewardCampaignResponseProtoMsg): QueryTradeRewardCampaignResponse {
    return QueryTradeRewardCampaignResponse.decode(message.value);
  },
  toProto(message: QueryTradeRewardCampaignResponse): Uint8Array {
    return QueryTradeRewardCampaignResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTradeRewardCampaignResponse): QueryTradeRewardCampaignResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryTradeRewardCampaignResponse",
      value: QueryTradeRewardCampaignResponse.encode(message).finish()
    };
  }
};
function createBaseQueryIsOptedOutOfRewardsRequest(): QueryIsOptedOutOfRewardsRequest {
  return {
    account: ""
  };
}
export const QueryIsOptedOutOfRewardsRequest = {
  typeUrl: "/injective.exchange.v1beta1.QueryIsOptedOutOfRewardsRequest",
  encode(message: QueryIsOptedOutOfRewardsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueryIsOptedOutOfRewardsRequestAmino): QueryIsOptedOutOfRewardsRequest {
    return {
      account: object.account
    };
  },
  toAmino(message: QueryIsOptedOutOfRewardsRequest): QueryIsOptedOutOfRewardsRequestAmino {
    const obj: any = {};
    obj.account = message.account;
    return obj;
  },
  fromAminoMsg(object: QueryIsOptedOutOfRewardsRequestAminoMsg): QueryIsOptedOutOfRewardsRequest {
    return QueryIsOptedOutOfRewardsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryIsOptedOutOfRewardsRequestProtoMsg): QueryIsOptedOutOfRewardsRequest {
    return QueryIsOptedOutOfRewardsRequest.decode(message.value);
  },
  toProto(message: QueryIsOptedOutOfRewardsRequest): Uint8Array {
    return QueryIsOptedOutOfRewardsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryIsOptedOutOfRewardsRequest): QueryIsOptedOutOfRewardsRequestProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryIsOptedOutOfRewardsRequest",
      value: QueryIsOptedOutOfRewardsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryIsOptedOutOfRewardsResponse(): QueryIsOptedOutOfRewardsResponse {
  return {
    isOptedOut: false
  };
}
export const QueryIsOptedOutOfRewardsResponse = {
  typeUrl: "/injective.exchange.v1beta1.QueryIsOptedOutOfRewardsResponse",
  encode(message: QueryIsOptedOutOfRewardsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueryIsOptedOutOfRewardsResponseAmino): QueryIsOptedOutOfRewardsResponse {
    return {
      isOptedOut: object.is_opted_out
    };
  },
  toAmino(message: QueryIsOptedOutOfRewardsResponse): QueryIsOptedOutOfRewardsResponseAmino {
    const obj: any = {};
    obj.is_opted_out = message.isOptedOut;
    return obj;
  },
  fromAminoMsg(object: QueryIsOptedOutOfRewardsResponseAminoMsg): QueryIsOptedOutOfRewardsResponse {
    return QueryIsOptedOutOfRewardsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryIsOptedOutOfRewardsResponseProtoMsg): QueryIsOptedOutOfRewardsResponse {
    return QueryIsOptedOutOfRewardsResponse.decode(message.value);
  },
  toProto(message: QueryIsOptedOutOfRewardsResponse): Uint8Array {
    return QueryIsOptedOutOfRewardsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryIsOptedOutOfRewardsResponse): QueryIsOptedOutOfRewardsResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryIsOptedOutOfRewardsResponse",
      value: QueryIsOptedOutOfRewardsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryOptedOutOfRewardsAccountsRequest(): QueryOptedOutOfRewardsAccountsRequest {
  return {};
}
export const QueryOptedOutOfRewardsAccountsRequest = {
  typeUrl: "/injective.exchange.v1beta1.QueryOptedOutOfRewardsAccountsRequest",
  encode(_: QueryOptedOutOfRewardsAccountsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryOptedOutOfRewardsAccountsRequest {
    return {};
  },
  fromPartial(_: Partial<QueryOptedOutOfRewardsAccountsRequest>): QueryOptedOutOfRewardsAccountsRequest {
    const message = createBaseQueryOptedOutOfRewardsAccountsRequest();
    return message;
  },
  fromAmino(_: QueryOptedOutOfRewardsAccountsRequestAmino): QueryOptedOutOfRewardsAccountsRequest {
    return {};
  },
  toAmino(_: QueryOptedOutOfRewardsAccountsRequest): QueryOptedOutOfRewardsAccountsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryOptedOutOfRewardsAccountsRequestAminoMsg): QueryOptedOutOfRewardsAccountsRequest {
    return QueryOptedOutOfRewardsAccountsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryOptedOutOfRewardsAccountsRequestProtoMsg): QueryOptedOutOfRewardsAccountsRequest {
    return QueryOptedOutOfRewardsAccountsRequest.decode(message.value);
  },
  toProto(message: QueryOptedOutOfRewardsAccountsRequest): Uint8Array {
    return QueryOptedOutOfRewardsAccountsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryOptedOutOfRewardsAccountsRequest): QueryOptedOutOfRewardsAccountsRequestProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryOptedOutOfRewardsAccountsRequest",
      value: QueryOptedOutOfRewardsAccountsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryOptedOutOfRewardsAccountsResponse(): QueryOptedOutOfRewardsAccountsResponse {
  return {
    accounts: []
  };
}
export const QueryOptedOutOfRewardsAccountsResponse = {
  typeUrl: "/injective.exchange.v1beta1.QueryOptedOutOfRewardsAccountsResponse",
  encode(message: QueryOptedOutOfRewardsAccountsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueryOptedOutOfRewardsAccountsResponseAmino): QueryOptedOutOfRewardsAccountsResponse {
    return {
      accounts: Array.isArray(object?.accounts) ? object.accounts.map((e: any) => e) : []
    };
  },
  toAmino(message: QueryOptedOutOfRewardsAccountsResponse): QueryOptedOutOfRewardsAccountsResponseAmino {
    const obj: any = {};
    if (message.accounts) {
      obj.accounts = message.accounts.map(e => e);
    } else {
      obj.accounts = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryOptedOutOfRewardsAccountsResponseAminoMsg): QueryOptedOutOfRewardsAccountsResponse {
    return QueryOptedOutOfRewardsAccountsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryOptedOutOfRewardsAccountsResponseProtoMsg): QueryOptedOutOfRewardsAccountsResponse {
    return QueryOptedOutOfRewardsAccountsResponse.decode(message.value);
  },
  toProto(message: QueryOptedOutOfRewardsAccountsResponse): Uint8Array {
    return QueryOptedOutOfRewardsAccountsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryOptedOutOfRewardsAccountsResponse): QueryOptedOutOfRewardsAccountsResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryOptedOutOfRewardsAccountsResponse",
      value: QueryOptedOutOfRewardsAccountsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryFeeDiscountAccountInfoRequest(): QueryFeeDiscountAccountInfoRequest {
  return {
    account: ""
  };
}
export const QueryFeeDiscountAccountInfoRequest = {
  typeUrl: "/injective.exchange.v1beta1.QueryFeeDiscountAccountInfoRequest",
  encode(message: QueryFeeDiscountAccountInfoRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueryFeeDiscountAccountInfoRequestAmino): QueryFeeDiscountAccountInfoRequest {
    return {
      account: object.account
    };
  },
  toAmino(message: QueryFeeDiscountAccountInfoRequest): QueryFeeDiscountAccountInfoRequestAmino {
    const obj: any = {};
    obj.account = message.account;
    return obj;
  },
  fromAminoMsg(object: QueryFeeDiscountAccountInfoRequestAminoMsg): QueryFeeDiscountAccountInfoRequest {
    return QueryFeeDiscountAccountInfoRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryFeeDiscountAccountInfoRequestProtoMsg): QueryFeeDiscountAccountInfoRequest {
    return QueryFeeDiscountAccountInfoRequest.decode(message.value);
  },
  toProto(message: QueryFeeDiscountAccountInfoRequest): Uint8Array {
    return QueryFeeDiscountAccountInfoRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryFeeDiscountAccountInfoRequest): QueryFeeDiscountAccountInfoRequestProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryFeeDiscountAccountInfoRequest",
      value: QueryFeeDiscountAccountInfoRequest.encode(message).finish()
    };
  }
};
function createBaseQueryFeeDiscountAccountInfoResponse(): QueryFeeDiscountAccountInfoResponse {
  return {
    tierLevel: BigInt(0),
    accountInfo: FeeDiscountTierInfo.fromPartial({}),
    accountTtl: FeeDiscountTierTTL.fromPartial({})
  };
}
export const QueryFeeDiscountAccountInfoResponse = {
  typeUrl: "/injective.exchange.v1beta1.QueryFeeDiscountAccountInfoResponse",
  encode(message: QueryFeeDiscountAccountInfoResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tierLevel !== BigInt(0)) {
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
      tierLevel: isSet(object.tierLevel) ? BigInt(object.tierLevel.toString()) : BigInt(0),
      accountInfo: isSet(object.accountInfo) ? FeeDiscountTierInfo.fromJSON(object.accountInfo) : undefined,
      accountTtl: isSet(object.accountTtl) ? FeeDiscountTierTTL.fromJSON(object.accountTtl) : undefined
    };
  },
  fromPartial(object: Partial<QueryFeeDiscountAccountInfoResponse>): QueryFeeDiscountAccountInfoResponse {
    const message = createBaseQueryFeeDiscountAccountInfoResponse();
    message.tierLevel = object.tierLevel !== undefined && object.tierLevel !== null ? BigInt(object.tierLevel.toString()) : BigInt(0);
    message.accountInfo = object.accountInfo !== undefined && object.accountInfo !== null ? FeeDiscountTierInfo.fromPartial(object.accountInfo) : undefined;
    message.accountTtl = object.accountTtl !== undefined && object.accountTtl !== null ? FeeDiscountTierTTL.fromPartial(object.accountTtl) : undefined;
    return message;
  },
  fromAmino(object: QueryFeeDiscountAccountInfoResponseAmino): QueryFeeDiscountAccountInfoResponse {
    return {
      tierLevel: BigInt(object.tier_level),
      accountInfo: object?.account_info ? FeeDiscountTierInfo.fromAmino(object.account_info) : undefined,
      accountTtl: object?.account_ttl ? FeeDiscountTierTTL.fromAmino(object.account_ttl) : undefined
    };
  },
  toAmino(message: QueryFeeDiscountAccountInfoResponse): QueryFeeDiscountAccountInfoResponseAmino {
    const obj: any = {};
    obj.tier_level = message.tierLevel ? message.tierLevel.toString() : undefined;
    obj.account_info = message.accountInfo ? FeeDiscountTierInfo.toAmino(message.accountInfo) : undefined;
    obj.account_ttl = message.accountTtl ? FeeDiscountTierTTL.toAmino(message.accountTtl) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryFeeDiscountAccountInfoResponseAminoMsg): QueryFeeDiscountAccountInfoResponse {
    return QueryFeeDiscountAccountInfoResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryFeeDiscountAccountInfoResponseProtoMsg): QueryFeeDiscountAccountInfoResponse {
    return QueryFeeDiscountAccountInfoResponse.decode(message.value);
  },
  toProto(message: QueryFeeDiscountAccountInfoResponse): Uint8Array {
    return QueryFeeDiscountAccountInfoResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryFeeDiscountAccountInfoResponse): QueryFeeDiscountAccountInfoResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryFeeDiscountAccountInfoResponse",
      value: QueryFeeDiscountAccountInfoResponse.encode(message).finish()
    };
  }
};
function createBaseQueryFeeDiscountScheduleRequest(): QueryFeeDiscountScheduleRequest {
  return {};
}
export const QueryFeeDiscountScheduleRequest = {
  typeUrl: "/injective.exchange.v1beta1.QueryFeeDiscountScheduleRequest",
  encode(_: QueryFeeDiscountScheduleRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryFeeDiscountScheduleRequest {
    return {};
  },
  fromPartial(_: Partial<QueryFeeDiscountScheduleRequest>): QueryFeeDiscountScheduleRequest {
    const message = createBaseQueryFeeDiscountScheduleRequest();
    return message;
  },
  fromAmino(_: QueryFeeDiscountScheduleRequestAmino): QueryFeeDiscountScheduleRequest {
    return {};
  },
  toAmino(_: QueryFeeDiscountScheduleRequest): QueryFeeDiscountScheduleRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryFeeDiscountScheduleRequestAminoMsg): QueryFeeDiscountScheduleRequest {
    return QueryFeeDiscountScheduleRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryFeeDiscountScheduleRequestProtoMsg): QueryFeeDiscountScheduleRequest {
    return QueryFeeDiscountScheduleRequest.decode(message.value);
  },
  toProto(message: QueryFeeDiscountScheduleRequest): Uint8Array {
    return QueryFeeDiscountScheduleRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryFeeDiscountScheduleRequest): QueryFeeDiscountScheduleRequestProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryFeeDiscountScheduleRequest",
      value: QueryFeeDiscountScheduleRequest.encode(message).finish()
    };
  }
};
function createBaseQueryFeeDiscountScheduleResponse(): QueryFeeDiscountScheduleResponse {
  return {
    feeDiscountSchedule: FeeDiscountSchedule.fromPartial({})
  };
}
export const QueryFeeDiscountScheduleResponse = {
  typeUrl: "/injective.exchange.v1beta1.QueryFeeDiscountScheduleResponse",
  encode(message: QueryFeeDiscountScheduleResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueryFeeDiscountScheduleResponseAmino): QueryFeeDiscountScheduleResponse {
    return {
      feeDiscountSchedule: object?.fee_discount_schedule ? FeeDiscountSchedule.fromAmino(object.fee_discount_schedule) : undefined
    };
  },
  toAmino(message: QueryFeeDiscountScheduleResponse): QueryFeeDiscountScheduleResponseAmino {
    const obj: any = {};
    obj.fee_discount_schedule = message.feeDiscountSchedule ? FeeDiscountSchedule.toAmino(message.feeDiscountSchedule) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryFeeDiscountScheduleResponseAminoMsg): QueryFeeDiscountScheduleResponse {
    return QueryFeeDiscountScheduleResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryFeeDiscountScheduleResponseProtoMsg): QueryFeeDiscountScheduleResponse {
    return QueryFeeDiscountScheduleResponse.decode(message.value);
  },
  toProto(message: QueryFeeDiscountScheduleResponse): Uint8Array {
    return QueryFeeDiscountScheduleResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryFeeDiscountScheduleResponse): QueryFeeDiscountScheduleResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryFeeDiscountScheduleResponse",
      value: QueryFeeDiscountScheduleResponse.encode(message).finish()
    };
  }
};
function createBaseQueryBalanceMismatchesRequest(): QueryBalanceMismatchesRequest {
  return {
    dustFactor: BigInt(0)
  };
}
export const QueryBalanceMismatchesRequest = {
  typeUrl: "/injective.exchange.v1beta1.QueryBalanceMismatchesRequest",
  encode(message: QueryBalanceMismatchesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.dustFactor !== BigInt(0)) {
      writer.uint32(8).int64(message.dustFactor);
    }
    return writer;
  },
  fromJSON(object: any): QueryBalanceMismatchesRequest {
    return {
      dustFactor: isSet(object.dustFactor) ? BigInt(object.dustFactor.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<QueryBalanceMismatchesRequest>): QueryBalanceMismatchesRequest {
    const message = createBaseQueryBalanceMismatchesRequest();
    message.dustFactor = object.dustFactor !== undefined && object.dustFactor !== null ? BigInt(object.dustFactor.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryBalanceMismatchesRequestAmino): QueryBalanceMismatchesRequest {
    return {
      dustFactor: BigInt(object.dust_factor)
    };
  },
  toAmino(message: QueryBalanceMismatchesRequest): QueryBalanceMismatchesRequestAmino {
    const obj: any = {};
    obj.dust_factor = message.dustFactor ? message.dustFactor.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryBalanceMismatchesRequestAminoMsg): QueryBalanceMismatchesRequest {
    return QueryBalanceMismatchesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBalanceMismatchesRequestProtoMsg): QueryBalanceMismatchesRequest {
    return QueryBalanceMismatchesRequest.decode(message.value);
  },
  toProto(message: QueryBalanceMismatchesRequest): Uint8Array {
    return QueryBalanceMismatchesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryBalanceMismatchesRequest): QueryBalanceMismatchesRequestProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryBalanceMismatchesRequest",
      value: QueryBalanceMismatchesRequest.encode(message).finish()
    };
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
  typeUrl: "/injective.exchange.v1beta1.BalanceMismatch",
  encode(message: BalanceMismatch, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.subaccountId !== "") {
      writer.uint32(10).string(message.subaccountId);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.available !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.available, 18).atomics);
    }
    if (message.total !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.total, 18).atomics);
    }
    if (message.balanceHold !== "") {
      writer.uint32(42).string(Decimal.fromUserInput(message.balanceHold, 18).atomics);
    }
    if (message.expectedTotal !== "") {
      writer.uint32(50).string(Decimal.fromUserInput(message.expectedTotal, 18).atomics);
    }
    if (message.difference !== "") {
      writer.uint32(58).string(Decimal.fromUserInput(message.difference, 18).atomics);
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
  },
  fromAmino(object: BalanceMismatchAmino): BalanceMismatch {
    return {
      subaccountId: object.subaccountId,
      denom: object.denom,
      available: object.available,
      total: object.total,
      balanceHold: object.balance_hold,
      expectedTotal: object.expected_total,
      difference: object.difference
    };
  },
  toAmino(message: BalanceMismatch): BalanceMismatchAmino {
    const obj: any = {};
    obj.subaccountId = message.subaccountId;
    obj.denom = message.denom;
    obj.available = message.available;
    obj.total = message.total;
    obj.balance_hold = message.balanceHold;
    obj.expected_total = message.expectedTotal;
    obj.difference = message.difference;
    return obj;
  },
  fromAminoMsg(object: BalanceMismatchAminoMsg): BalanceMismatch {
    return BalanceMismatch.fromAmino(object.value);
  },
  fromProtoMsg(message: BalanceMismatchProtoMsg): BalanceMismatch {
    return BalanceMismatch.decode(message.value);
  },
  toProto(message: BalanceMismatch): Uint8Array {
    return BalanceMismatch.encode(message).finish();
  },
  toProtoMsg(message: BalanceMismatch): BalanceMismatchProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.BalanceMismatch",
      value: BalanceMismatch.encode(message).finish()
    };
  }
};
function createBaseQueryBalanceMismatchesResponse(): QueryBalanceMismatchesResponse {
  return {
    balanceMismatches: []
  };
}
export const QueryBalanceMismatchesResponse = {
  typeUrl: "/injective.exchange.v1beta1.QueryBalanceMismatchesResponse",
  encode(message: QueryBalanceMismatchesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueryBalanceMismatchesResponseAmino): QueryBalanceMismatchesResponse {
    return {
      balanceMismatches: Array.isArray(object?.balance_mismatches) ? object.balance_mismatches.map((e: any) => BalanceMismatch.fromAmino(e)) : []
    };
  },
  toAmino(message: QueryBalanceMismatchesResponse): QueryBalanceMismatchesResponseAmino {
    const obj: any = {};
    if (message.balanceMismatches) {
      obj.balance_mismatches = message.balanceMismatches.map(e => e ? BalanceMismatch.toAmino(e) : undefined);
    } else {
      obj.balance_mismatches = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryBalanceMismatchesResponseAminoMsg): QueryBalanceMismatchesResponse {
    return QueryBalanceMismatchesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBalanceMismatchesResponseProtoMsg): QueryBalanceMismatchesResponse {
    return QueryBalanceMismatchesResponse.decode(message.value);
  },
  toProto(message: QueryBalanceMismatchesResponse): Uint8Array {
    return QueryBalanceMismatchesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryBalanceMismatchesResponse): QueryBalanceMismatchesResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryBalanceMismatchesResponse",
      value: QueryBalanceMismatchesResponse.encode(message).finish()
    };
  }
};
function createBaseQueryBalanceWithBalanceHoldsRequest(): QueryBalanceWithBalanceHoldsRequest {
  return {};
}
export const QueryBalanceWithBalanceHoldsRequest = {
  typeUrl: "/injective.exchange.v1beta1.QueryBalanceWithBalanceHoldsRequest",
  encode(_: QueryBalanceWithBalanceHoldsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryBalanceWithBalanceHoldsRequest {
    return {};
  },
  fromPartial(_: Partial<QueryBalanceWithBalanceHoldsRequest>): QueryBalanceWithBalanceHoldsRequest {
    const message = createBaseQueryBalanceWithBalanceHoldsRequest();
    return message;
  },
  fromAmino(_: QueryBalanceWithBalanceHoldsRequestAmino): QueryBalanceWithBalanceHoldsRequest {
    return {};
  },
  toAmino(_: QueryBalanceWithBalanceHoldsRequest): QueryBalanceWithBalanceHoldsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryBalanceWithBalanceHoldsRequestAminoMsg): QueryBalanceWithBalanceHoldsRequest {
    return QueryBalanceWithBalanceHoldsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBalanceWithBalanceHoldsRequestProtoMsg): QueryBalanceWithBalanceHoldsRequest {
    return QueryBalanceWithBalanceHoldsRequest.decode(message.value);
  },
  toProto(message: QueryBalanceWithBalanceHoldsRequest): Uint8Array {
    return QueryBalanceWithBalanceHoldsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryBalanceWithBalanceHoldsRequest): QueryBalanceWithBalanceHoldsRequestProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryBalanceWithBalanceHoldsRequest",
      value: QueryBalanceWithBalanceHoldsRequest.encode(message).finish()
    };
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
  typeUrl: "/injective.exchange.v1beta1.BalanceWithMarginHold",
  encode(message: BalanceWithMarginHold, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.subaccountId !== "") {
      writer.uint32(10).string(message.subaccountId);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.available !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.available, 18).atomics);
    }
    if (message.total !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.total, 18).atomics);
    }
    if (message.balanceHold !== "") {
      writer.uint32(42).string(Decimal.fromUserInput(message.balanceHold, 18).atomics);
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
  },
  fromAmino(object: BalanceWithMarginHoldAmino): BalanceWithMarginHold {
    return {
      subaccountId: object.subaccountId,
      denom: object.denom,
      available: object.available,
      total: object.total,
      balanceHold: object.balance_hold
    };
  },
  toAmino(message: BalanceWithMarginHold): BalanceWithMarginHoldAmino {
    const obj: any = {};
    obj.subaccountId = message.subaccountId;
    obj.denom = message.denom;
    obj.available = message.available;
    obj.total = message.total;
    obj.balance_hold = message.balanceHold;
    return obj;
  },
  fromAminoMsg(object: BalanceWithMarginHoldAminoMsg): BalanceWithMarginHold {
    return BalanceWithMarginHold.fromAmino(object.value);
  },
  fromProtoMsg(message: BalanceWithMarginHoldProtoMsg): BalanceWithMarginHold {
    return BalanceWithMarginHold.decode(message.value);
  },
  toProto(message: BalanceWithMarginHold): Uint8Array {
    return BalanceWithMarginHold.encode(message).finish();
  },
  toProtoMsg(message: BalanceWithMarginHold): BalanceWithMarginHoldProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.BalanceWithMarginHold",
      value: BalanceWithMarginHold.encode(message).finish()
    };
  }
};
function createBaseQueryBalanceWithBalanceHoldsResponse(): QueryBalanceWithBalanceHoldsResponse {
  return {
    balanceWithBalanceHolds: []
  };
}
export const QueryBalanceWithBalanceHoldsResponse = {
  typeUrl: "/injective.exchange.v1beta1.QueryBalanceWithBalanceHoldsResponse",
  encode(message: QueryBalanceWithBalanceHoldsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueryBalanceWithBalanceHoldsResponseAmino): QueryBalanceWithBalanceHoldsResponse {
    return {
      balanceWithBalanceHolds: Array.isArray(object?.balance_with_balance_holds) ? object.balance_with_balance_holds.map((e: any) => BalanceWithMarginHold.fromAmino(e)) : []
    };
  },
  toAmino(message: QueryBalanceWithBalanceHoldsResponse): QueryBalanceWithBalanceHoldsResponseAmino {
    const obj: any = {};
    if (message.balanceWithBalanceHolds) {
      obj.balance_with_balance_holds = message.balanceWithBalanceHolds.map(e => e ? BalanceWithMarginHold.toAmino(e) : undefined);
    } else {
      obj.balance_with_balance_holds = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryBalanceWithBalanceHoldsResponseAminoMsg): QueryBalanceWithBalanceHoldsResponse {
    return QueryBalanceWithBalanceHoldsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBalanceWithBalanceHoldsResponseProtoMsg): QueryBalanceWithBalanceHoldsResponse {
    return QueryBalanceWithBalanceHoldsResponse.decode(message.value);
  },
  toProto(message: QueryBalanceWithBalanceHoldsResponse): Uint8Array {
    return QueryBalanceWithBalanceHoldsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryBalanceWithBalanceHoldsResponse): QueryBalanceWithBalanceHoldsResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryBalanceWithBalanceHoldsResponse",
      value: QueryBalanceWithBalanceHoldsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryFeeDiscountTierStatisticsRequest(): QueryFeeDiscountTierStatisticsRequest {
  return {};
}
export const QueryFeeDiscountTierStatisticsRequest = {
  typeUrl: "/injective.exchange.v1beta1.QueryFeeDiscountTierStatisticsRequest",
  encode(_: QueryFeeDiscountTierStatisticsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryFeeDiscountTierStatisticsRequest {
    return {};
  },
  fromPartial(_: Partial<QueryFeeDiscountTierStatisticsRequest>): QueryFeeDiscountTierStatisticsRequest {
    const message = createBaseQueryFeeDiscountTierStatisticsRequest();
    return message;
  },
  fromAmino(_: QueryFeeDiscountTierStatisticsRequestAmino): QueryFeeDiscountTierStatisticsRequest {
    return {};
  },
  toAmino(_: QueryFeeDiscountTierStatisticsRequest): QueryFeeDiscountTierStatisticsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryFeeDiscountTierStatisticsRequestAminoMsg): QueryFeeDiscountTierStatisticsRequest {
    return QueryFeeDiscountTierStatisticsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryFeeDiscountTierStatisticsRequestProtoMsg): QueryFeeDiscountTierStatisticsRequest {
    return QueryFeeDiscountTierStatisticsRequest.decode(message.value);
  },
  toProto(message: QueryFeeDiscountTierStatisticsRequest): Uint8Array {
    return QueryFeeDiscountTierStatisticsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryFeeDiscountTierStatisticsRequest): QueryFeeDiscountTierStatisticsRequestProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryFeeDiscountTierStatisticsRequest",
      value: QueryFeeDiscountTierStatisticsRequest.encode(message).finish()
    };
  }
};
function createBaseTierStatistic(): TierStatistic {
  return {
    tier: BigInt(0),
    count: BigInt(0)
  };
}
export const TierStatistic = {
  typeUrl: "/injective.exchange.v1beta1.TierStatistic",
  encode(message: TierStatistic, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tier !== BigInt(0)) {
      writer.uint32(8).uint64(message.tier);
    }
    if (message.count !== BigInt(0)) {
      writer.uint32(16).uint64(message.count);
    }
    return writer;
  },
  fromJSON(object: any): TierStatistic {
    return {
      tier: isSet(object.tier) ? BigInt(object.tier.toString()) : BigInt(0),
      count: isSet(object.count) ? BigInt(object.count.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<TierStatistic>): TierStatistic {
    const message = createBaseTierStatistic();
    message.tier = object.tier !== undefined && object.tier !== null ? BigInt(object.tier.toString()) : BigInt(0);
    message.count = object.count !== undefined && object.count !== null ? BigInt(object.count.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: TierStatisticAmino): TierStatistic {
    return {
      tier: BigInt(object.tier),
      count: BigInt(object.count)
    };
  },
  toAmino(message: TierStatistic): TierStatisticAmino {
    const obj: any = {};
    obj.tier = message.tier ? message.tier.toString() : undefined;
    obj.count = message.count ? message.count.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: TierStatisticAminoMsg): TierStatistic {
    return TierStatistic.fromAmino(object.value);
  },
  fromProtoMsg(message: TierStatisticProtoMsg): TierStatistic {
    return TierStatistic.decode(message.value);
  },
  toProto(message: TierStatistic): Uint8Array {
    return TierStatistic.encode(message).finish();
  },
  toProtoMsg(message: TierStatistic): TierStatisticProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.TierStatistic",
      value: TierStatistic.encode(message).finish()
    };
  }
};
function createBaseQueryFeeDiscountTierStatisticsResponse(): QueryFeeDiscountTierStatisticsResponse {
  return {
    statistics: []
  };
}
export const QueryFeeDiscountTierStatisticsResponse = {
  typeUrl: "/injective.exchange.v1beta1.QueryFeeDiscountTierStatisticsResponse",
  encode(message: QueryFeeDiscountTierStatisticsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueryFeeDiscountTierStatisticsResponseAmino): QueryFeeDiscountTierStatisticsResponse {
    return {
      statistics: Array.isArray(object?.statistics) ? object.statistics.map((e: any) => TierStatistic.fromAmino(e)) : []
    };
  },
  toAmino(message: QueryFeeDiscountTierStatisticsResponse): QueryFeeDiscountTierStatisticsResponseAmino {
    const obj: any = {};
    if (message.statistics) {
      obj.statistics = message.statistics.map(e => e ? TierStatistic.toAmino(e) : undefined);
    } else {
      obj.statistics = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryFeeDiscountTierStatisticsResponseAminoMsg): QueryFeeDiscountTierStatisticsResponse {
    return QueryFeeDiscountTierStatisticsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryFeeDiscountTierStatisticsResponseProtoMsg): QueryFeeDiscountTierStatisticsResponse {
    return QueryFeeDiscountTierStatisticsResponse.decode(message.value);
  },
  toProto(message: QueryFeeDiscountTierStatisticsResponse): Uint8Array {
    return QueryFeeDiscountTierStatisticsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryFeeDiscountTierStatisticsResponse): QueryFeeDiscountTierStatisticsResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryFeeDiscountTierStatisticsResponse",
      value: QueryFeeDiscountTierStatisticsResponse.encode(message).finish()
    };
  }
};
function createBaseMitoVaultInfosRequest(): MitoVaultInfosRequest {
  return {};
}
export const MitoVaultInfosRequest = {
  typeUrl: "/injective.exchange.v1beta1.MitoVaultInfosRequest",
  encode(_: MitoVaultInfosRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MitoVaultInfosRequest {
    return {};
  },
  fromPartial(_: Partial<MitoVaultInfosRequest>): MitoVaultInfosRequest {
    const message = createBaseMitoVaultInfosRequest();
    return message;
  },
  fromAmino(_: MitoVaultInfosRequestAmino): MitoVaultInfosRequest {
    return {};
  },
  toAmino(_: MitoVaultInfosRequest): MitoVaultInfosRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MitoVaultInfosRequestAminoMsg): MitoVaultInfosRequest {
    return MitoVaultInfosRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: MitoVaultInfosRequestProtoMsg): MitoVaultInfosRequest {
    return MitoVaultInfosRequest.decode(message.value);
  },
  toProto(message: MitoVaultInfosRequest): Uint8Array {
    return MitoVaultInfosRequest.encode(message).finish();
  },
  toProtoMsg(message: MitoVaultInfosRequest): MitoVaultInfosRequestProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.MitoVaultInfosRequest",
      value: MitoVaultInfosRequest.encode(message).finish()
    };
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
  typeUrl: "/injective.exchange.v1beta1.MitoVaultInfosResponse",
  encode(message: MitoVaultInfosResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: MitoVaultInfosResponseAmino): MitoVaultInfosResponse {
    return {
      masterAddresses: Array.isArray(object?.master_addresses) ? object.master_addresses.map((e: any) => e) : [],
      derivativeAddresses: Array.isArray(object?.derivative_addresses) ? object.derivative_addresses.map((e: any) => e) : [],
      spotAddresses: Array.isArray(object?.spot_addresses) ? object.spot_addresses.map((e: any) => e) : [],
      cw20Addresses: Array.isArray(object?.cw20_addresses) ? object.cw20_addresses.map((e: any) => e) : []
    };
  },
  toAmino(message: MitoVaultInfosResponse): MitoVaultInfosResponseAmino {
    const obj: any = {};
    if (message.masterAddresses) {
      obj.master_addresses = message.masterAddresses.map(e => e);
    } else {
      obj.master_addresses = [];
    }
    if (message.derivativeAddresses) {
      obj.derivative_addresses = message.derivativeAddresses.map(e => e);
    } else {
      obj.derivative_addresses = [];
    }
    if (message.spotAddresses) {
      obj.spot_addresses = message.spotAddresses.map(e => e);
    } else {
      obj.spot_addresses = [];
    }
    if (message.cw20Addresses) {
      obj.cw20_addresses = message.cw20Addresses.map(e => e);
    } else {
      obj.cw20_addresses = [];
    }
    return obj;
  },
  fromAminoMsg(object: MitoVaultInfosResponseAminoMsg): MitoVaultInfosResponse {
    return MitoVaultInfosResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MitoVaultInfosResponseProtoMsg): MitoVaultInfosResponse {
    return MitoVaultInfosResponse.decode(message.value);
  },
  toProto(message: MitoVaultInfosResponse): Uint8Array {
    return MitoVaultInfosResponse.encode(message).finish();
  },
  toProtoMsg(message: MitoVaultInfosResponse): MitoVaultInfosResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.MitoVaultInfosResponse",
      value: MitoVaultInfosResponse.encode(message).finish()
    };
  }
};
function createBaseQueryMarketIDFromVaultRequest(): QueryMarketIDFromVaultRequest {
  return {
    vaultAddress: ""
  };
}
export const QueryMarketIDFromVaultRequest = {
  typeUrl: "/injective.exchange.v1beta1.QueryMarketIDFromVaultRequest",
  encode(message: QueryMarketIDFromVaultRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueryMarketIDFromVaultRequestAmino): QueryMarketIDFromVaultRequest {
    return {
      vaultAddress: object.vault_address
    };
  },
  toAmino(message: QueryMarketIDFromVaultRequest): QueryMarketIDFromVaultRequestAmino {
    const obj: any = {};
    obj.vault_address = message.vaultAddress;
    return obj;
  },
  fromAminoMsg(object: QueryMarketIDFromVaultRequestAminoMsg): QueryMarketIDFromVaultRequest {
    return QueryMarketIDFromVaultRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMarketIDFromVaultRequestProtoMsg): QueryMarketIDFromVaultRequest {
    return QueryMarketIDFromVaultRequest.decode(message.value);
  },
  toProto(message: QueryMarketIDFromVaultRequest): Uint8Array {
    return QueryMarketIDFromVaultRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryMarketIDFromVaultRequest): QueryMarketIDFromVaultRequestProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryMarketIDFromVaultRequest",
      value: QueryMarketIDFromVaultRequest.encode(message).finish()
    };
  }
};
function createBaseQueryMarketIDFromVaultResponse(): QueryMarketIDFromVaultResponse {
  return {
    marketId: ""
  };
}
export const QueryMarketIDFromVaultResponse = {
  typeUrl: "/injective.exchange.v1beta1.QueryMarketIDFromVaultResponse",
  encode(message: QueryMarketIDFromVaultResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueryMarketIDFromVaultResponseAmino): QueryMarketIDFromVaultResponse {
    return {
      marketId: object.market_id
    };
  },
  toAmino(message: QueryMarketIDFromVaultResponse): QueryMarketIDFromVaultResponseAmino {
    const obj: any = {};
    obj.market_id = message.marketId;
    return obj;
  },
  fromAminoMsg(object: QueryMarketIDFromVaultResponseAminoMsg): QueryMarketIDFromVaultResponse {
    return QueryMarketIDFromVaultResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMarketIDFromVaultResponseProtoMsg): QueryMarketIDFromVaultResponse {
    return QueryMarketIDFromVaultResponse.decode(message.value);
  },
  toProto(message: QueryMarketIDFromVaultResponse): Uint8Array {
    return QueryMarketIDFromVaultResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryMarketIDFromVaultResponse): QueryMarketIDFromVaultResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryMarketIDFromVaultResponse",
      value: QueryMarketIDFromVaultResponse.encode(message).finish()
    };
  }
};
function createBaseQueryHistoricalTradeRecordsRequest(): QueryHistoricalTradeRecordsRequest {
  return {
    marketId: ""
  };
}
export const QueryHistoricalTradeRecordsRequest = {
  typeUrl: "/injective.exchange.v1beta1.QueryHistoricalTradeRecordsRequest",
  encode(message: QueryHistoricalTradeRecordsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueryHistoricalTradeRecordsRequestAmino): QueryHistoricalTradeRecordsRequest {
    return {
      marketId: object.market_id
    };
  },
  toAmino(message: QueryHistoricalTradeRecordsRequest): QueryHistoricalTradeRecordsRequestAmino {
    const obj: any = {};
    obj.market_id = message.marketId;
    return obj;
  },
  fromAminoMsg(object: QueryHistoricalTradeRecordsRequestAminoMsg): QueryHistoricalTradeRecordsRequest {
    return QueryHistoricalTradeRecordsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryHistoricalTradeRecordsRequestProtoMsg): QueryHistoricalTradeRecordsRequest {
    return QueryHistoricalTradeRecordsRequest.decode(message.value);
  },
  toProto(message: QueryHistoricalTradeRecordsRequest): Uint8Array {
    return QueryHistoricalTradeRecordsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryHistoricalTradeRecordsRequest): QueryHistoricalTradeRecordsRequestProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryHistoricalTradeRecordsRequest",
      value: QueryHistoricalTradeRecordsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryHistoricalTradeRecordsResponse(): QueryHistoricalTradeRecordsResponse {
  return {
    tradeRecords: []
  };
}
export const QueryHistoricalTradeRecordsResponse = {
  typeUrl: "/injective.exchange.v1beta1.QueryHistoricalTradeRecordsResponse",
  encode(message: QueryHistoricalTradeRecordsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueryHistoricalTradeRecordsResponseAmino): QueryHistoricalTradeRecordsResponse {
    return {
      tradeRecords: Array.isArray(object?.trade_records) ? object.trade_records.map((e: any) => TradeRecords.fromAmino(e)) : []
    };
  },
  toAmino(message: QueryHistoricalTradeRecordsResponse): QueryHistoricalTradeRecordsResponseAmino {
    const obj: any = {};
    if (message.tradeRecords) {
      obj.trade_records = message.tradeRecords.map(e => e ? TradeRecords.toAmino(e) : undefined);
    } else {
      obj.trade_records = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryHistoricalTradeRecordsResponseAminoMsg): QueryHistoricalTradeRecordsResponse {
    return QueryHistoricalTradeRecordsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryHistoricalTradeRecordsResponseProtoMsg): QueryHistoricalTradeRecordsResponse {
    return QueryHistoricalTradeRecordsResponse.decode(message.value);
  },
  toProto(message: QueryHistoricalTradeRecordsResponse): Uint8Array {
    return QueryHistoricalTradeRecordsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryHistoricalTradeRecordsResponse): QueryHistoricalTradeRecordsResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryHistoricalTradeRecordsResponse",
      value: QueryHistoricalTradeRecordsResponse.encode(message).finish()
    };
  }
};
function createBaseTradeHistoryOptions(): TradeHistoryOptions {
  return {
    tradeGroupingSec: BigInt(0),
    maxAge: BigInt(0),
    includeRawHistory: false,
    includeMetadata: false
  };
}
export const TradeHistoryOptions = {
  typeUrl: "/injective.exchange.v1beta1.TradeHistoryOptions",
  encode(message: TradeHistoryOptions, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tradeGroupingSec !== BigInt(0)) {
      writer.uint32(8).uint64(message.tradeGroupingSec);
    }
    if (message.maxAge !== BigInt(0)) {
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
      tradeGroupingSec: isSet(object.tradeGroupingSec) ? BigInt(object.tradeGroupingSec.toString()) : BigInt(0),
      maxAge: isSet(object.maxAge) ? BigInt(object.maxAge.toString()) : BigInt(0),
      includeRawHistory: isSet(object.includeRawHistory) ? Boolean(object.includeRawHistory) : false,
      includeMetadata: isSet(object.includeMetadata) ? Boolean(object.includeMetadata) : false
    };
  },
  fromPartial(object: Partial<TradeHistoryOptions>): TradeHistoryOptions {
    const message = createBaseTradeHistoryOptions();
    message.tradeGroupingSec = object.tradeGroupingSec !== undefined && object.tradeGroupingSec !== null ? BigInt(object.tradeGroupingSec.toString()) : BigInt(0);
    message.maxAge = object.maxAge !== undefined && object.maxAge !== null ? BigInt(object.maxAge.toString()) : BigInt(0);
    message.includeRawHistory = object.includeRawHistory ?? false;
    message.includeMetadata = object.includeMetadata ?? false;
    return message;
  },
  fromAmino(object: TradeHistoryOptionsAmino): TradeHistoryOptions {
    return {
      tradeGroupingSec: BigInt(object.trade_grouping_sec),
      maxAge: BigInt(object.max_age),
      includeRawHistory: object.include_raw_history,
      includeMetadata: object.include_metadata
    };
  },
  toAmino(message: TradeHistoryOptions): TradeHistoryOptionsAmino {
    const obj: any = {};
    obj.trade_grouping_sec = message.tradeGroupingSec ? message.tradeGroupingSec.toString() : undefined;
    obj.max_age = message.maxAge ? message.maxAge.toString() : undefined;
    obj.include_raw_history = message.includeRawHistory;
    obj.include_metadata = message.includeMetadata;
    return obj;
  },
  fromAminoMsg(object: TradeHistoryOptionsAminoMsg): TradeHistoryOptions {
    return TradeHistoryOptions.fromAmino(object.value);
  },
  fromProtoMsg(message: TradeHistoryOptionsProtoMsg): TradeHistoryOptions {
    return TradeHistoryOptions.decode(message.value);
  },
  toProto(message: TradeHistoryOptions): Uint8Array {
    return TradeHistoryOptions.encode(message).finish();
  },
  toProtoMsg(message: TradeHistoryOptions): TradeHistoryOptionsProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.TradeHistoryOptions",
      value: TradeHistoryOptions.encode(message).finish()
    };
  }
};
function createBaseQueryMarketVolatilityRequest(): QueryMarketVolatilityRequest {
  return {
    marketId: "",
    tradeHistoryOptions: TradeHistoryOptions.fromPartial({})
  };
}
export const QueryMarketVolatilityRequest = {
  typeUrl: "/injective.exchange.v1beta1.QueryMarketVolatilityRequest",
  encode(message: QueryMarketVolatilityRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueryMarketVolatilityRequestAmino): QueryMarketVolatilityRequest {
    return {
      marketId: object.market_id,
      tradeHistoryOptions: object?.trade_history_options ? TradeHistoryOptions.fromAmino(object.trade_history_options) : undefined
    };
  },
  toAmino(message: QueryMarketVolatilityRequest): QueryMarketVolatilityRequestAmino {
    const obj: any = {};
    obj.market_id = message.marketId;
    obj.trade_history_options = message.tradeHistoryOptions ? TradeHistoryOptions.toAmino(message.tradeHistoryOptions) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryMarketVolatilityRequestAminoMsg): QueryMarketVolatilityRequest {
    return QueryMarketVolatilityRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMarketVolatilityRequestProtoMsg): QueryMarketVolatilityRequest {
    return QueryMarketVolatilityRequest.decode(message.value);
  },
  toProto(message: QueryMarketVolatilityRequest): Uint8Array {
    return QueryMarketVolatilityRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryMarketVolatilityRequest): QueryMarketVolatilityRequestProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryMarketVolatilityRequest",
      value: QueryMarketVolatilityRequest.encode(message).finish()
    };
  }
};
function createBaseQueryMarketVolatilityResponse(): QueryMarketVolatilityResponse {
  return {
    volatility: "",
    historyMetadata: MetadataStatistics.fromPartial({}),
    rawHistory: []
  };
}
export const QueryMarketVolatilityResponse = {
  typeUrl: "/injective.exchange.v1beta1.QueryMarketVolatilityResponse",
  encode(message: QueryMarketVolatilityResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.volatility !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.volatility, 18).atomics);
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
  },
  fromAmino(object: QueryMarketVolatilityResponseAmino): QueryMarketVolatilityResponse {
    return {
      volatility: object.volatility,
      historyMetadata: object?.history_metadata ? MetadataStatistics.fromAmino(object.history_metadata) : undefined,
      rawHistory: Array.isArray(object?.raw_history) ? object.raw_history.map((e: any) => TradeRecord.fromAmino(e)) : []
    };
  },
  toAmino(message: QueryMarketVolatilityResponse): QueryMarketVolatilityResponseAmino {
    const obj: any = {};
    obj.volatility = message.volatility;
    obj.history_metadata = message.historyMetadata ? MetadataStatistics.toAmino(message.historyMetadata) : undefined;
    if (message.rawHistory) {
      obj.raw_history = message.rawHistory.map(e => e ? TradeRecord.toAmino(e) : undefined);
    } else {
      obj.raw_history = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryMarketVolatilityResponseAminoMsg): QueryMarketVolatilityResponse {
    return QueryMarketVolatilityResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMarketVolatilityResponseProtoMsg): QueryMarketVolatilityResponse {
    return QueryMarketVolatilityResponse.decode(message.value);
  },
  toProto(message: QueryMarketVolatilityResponse): Uint8Array {
    return QueryMarketVolatilityResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryMarketVolatilityResponse): QueryMarketVolatilityResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryMarketVolatilityResponse",
      value: QueryMarketVolatilityResponse.encode(message).finish()
    };
  }
};
function createBaseQueryBinaryMarketsRequest(): QueryBinaryMarketsRequest {
  return {
    status: ""
  };
}
export const QueryBinaryMarketsRequest = {
  typeUrl: "/injective.exchange.v1beta1.QueryBinaryMarketsRequest",
  encode(message: QueryBinaryMarketsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueryBinaryMarketsRequestAmino): QueryBinaryMarketsRequest {
    return {
      status: object.status
    };
  },
  toAmino(message: QueryBinaryMarketsRequest): QueryBinaryMarketsRequestAmino {
    const obj: any = {};
    obj.status = message.status;
    return obj;
  },
  fromAminoMsg(object: QueryBinaryMarketsRequestAminoMsg): QueryBinaryMarketsRequest {
    return QueryBinaryMarketsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBinaryMarketsRequestProtoMsg): QueryBinaryMarketsRequest {
    return QueryBinaryMarketsRequest.decode(message.value);
  },
  toProto(message: QueryBinaryMarketsRequest): Uint8Array {
    return QueryBinaryMarketsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryBinaryMarketsRequest): QueryBinaryMarketsRequestProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryBinaryMarketsRequest",
      value: QueryBinaryMarketsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryBinaryMarketsResponse(): QueryBinaryMarketsResponse {
  return {
    markets: []
  };
}
export const QueryBinaryMarketsResponse = {
  typeUrl: "/injective.exchange.v1beta1.QueryBinaryMarketsResponse",
  encode(message: QueryBinaryMarketsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueryBinaryMarketsResponseAmino): QueryBinaryMarketsResponse {
    return {
      markets: Array.isArray(object?.markets) ? object.markets.map((e: any) => BinaryOptionsMarket.fromAmino(e)) : []
    };
  },
  toAmino(message: QueryBinaryMarketsResponse): QueryBinaryMarketsResponseAmino {
    const obj: any = {};
    if (message.markets) {
      obj.markets = message.markets.map(e => e ? BinaryOptionsMarket.toAmino(e) : undefined);
    } else {
      obj.markets = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryBinaryMarketsResponseAminoMsg): QueryBinaryMarketsResponse {
    return QueryBinaryMarketsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBinaryMarketsResponseProtoMsg): QueryBinaryMarketsResponse {
    return QueryBinaryMarketsResponse.decode(message.value);
  },
  toProto(message: QueryBinaryMarketsResponse): Uint8Array {
    return QueryBinaryMarketsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryBinaryMarketsResponse): QueryBinaryMarketsResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryBinaryMarketsResponse",
      value: QueryBinaryMarketsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryTraderDerivativeConditionalOrdersRequest(): QueryTraderDerivativeConditionalOrdersRequest {
  return {
    subaccountId: "",
    marketId: ""
  };
}
export const QueryTraderDerivativeConditionalOrdersRequest = {
  typeUrl: "/injective.exchange.v1beta1.QueryTraderDerivativeConditionalOrdersRequest",
  encode(message: QueryTraderDerivativeConditionalOrdersRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueryTraderDerivativeConditionalOrdersRequestAmino): QueryTraderDerivativeConditionalOrdersRequest {
    return {
      subaccountId: object.subaccount_id,
      marketId: object.market_id
    };
  },
  toAmino(message: QueryTraderDerivativeConditionalOrdersRequest): QueryTraderDerivativeConditionalOrdersRequestAmino {
    const obj: any = {};
    obj.subaccount_id = message.subaccountId;
    obj.market_id = message.marketId;
    return obj;
  },
  fromAminoMsg(object: QueryTraderDerivativeConditionalOrdersRequestAminoMsg): QueryTraderDerivativeConditionalOrdersRequest {
    return QueryTraderDerivativeConditionalOrdersRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTraderDerivativeConditionalOrdersRequestProtoMsg): QueryTraderDerivativeConditionalOrdersRequest {
    return QueryTraderDerivativeConditionalOrdersRequest.decode(message.value);
  },
  toProto(message: QueryTraderDerivativeConditionalOrdersRequest): Uint8Array {
    return QueryTraderDerivativeConditionalOrdersRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTraderDerivativeConditionalOrdersRequest): QueryTraderDerivativeConditionalOrdersRequestProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryTraderDerivativeConditionalOrdersRequest",
      value: QueryTraderDerivativeConditionalOrdersRequest.encode(message).finish()
    };
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
  typeUrl: "/injective.exchange.v1beta1.TrimmedDerivativeConditionalOrder",
  encode(message: TrimmedDerivativeConditionalOrder, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.price !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.price, 18).atomics);
    }
    if (message.quantity !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.quantity, 18).atomics);
    }
    if (message.margin !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.margin, 18).atomics);
    }
    if (message.triggerPrice !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.triggerPrice, 18).atomics);
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
  },
  fromAmino(object: TrimmedDerivativeConditionalOrderAmino): TrimmedDerivativeConditionalOrder {
    return {
      price: object.price,
      quantity: object.quantity,
      margin: object.margin,
      triggerPrice: object.triggerPrice,
      isBuy: object.isBuy,
      isLimit: object.isLimit,
      orderHash: object.order_hash
    };
  },
  toAmino(message: TrimmedDerivativeConditionalOrder): TrimmedDerivativeConditionalOrderAmino {
    const obj: any = {};
    obj.price = message.price;
    obj.quantity = message.quantity;
    obj.margin = message.margin;
    obj.triggerPrice = message.triggerPrice;
    obj.isBuy = message.isBuy;
    obj.isLimit = message.isLimit;
    obj.order_hash = message.orderHash;
    return obj;
  },
  fromAminoMsg(object: TrimmedDerivativeConditionalOrderAminoMsg): TrimmedDerivativeConditionalOrder {
    return TrimmedDerivativeConditionalOrder.fromAmino(object.value);
  },
  fromProtoMsg(message: TrimmedDerivativeConditionalOrderProtoMsg): TrimmedDerivativeConditionalOrder {
    return TrimmedDerivativeConditionalOrder.decode(message.value);
  },
  toProto(message: TrimmedDerivativeConditionalOrder): Uint8Array {
    return TrimmedDerivativeConditionalOrder.encode(message).finish();
  },
  toProtoMsg(message: TrimmedDerivativeConditionalOrder): TrimmedDerivativeConditionalOrderProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.TrimmedDerivativeConditionalOrder",
      value: TrimmedDerivativeConditionalOrder.encode(message).finish()
    };
  }
};
function createBaseQueryTraderDerivativeConditionalOrdersResponse(): QueryTraderDerivativeConditionalOrdersResponse {
  return {
    orders: []
  };
}
export const QueryTraderDerivativeConditionalOrdersResponse = {
  typeUrl: "/injective.exchange.v1beta1.QueryTraderDerivativeConditionalOrdersResponse",
  encode(message: QueryTraderDerivativeConditionalOrdersResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueryTraderDerivativeConditionalOrdersResponseAmino): QueryTraderDerivativeConditionalOrdersResponse {
    return {
      orders: Array.isArray(object?.orders) ? object.orders.map((e: any) => TrimmedDerivativeConditionalOrder.fromAmino(e)) : []
    };
  },
  toAmino(message: QueryTraderDerivativeConditionalOrdersResponse): QueryTraderDerivativeConditionalOrdersResponseAmino {
    const obj: any = {};
    if (message.orders) {
      obj.orders = message.orders.map(e => e ? TrimmedDerivativeConditionalOrder.toAmino(e) : undefined);
    } else {
      obj.orders = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryTraderDerivativeConditionalOrdersResponseAminoMsg): QueryTraderDerivativeConditionalOrdersResponse {
    return QueryTraderDerivativeConditionalOrdersResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTraderDerivativeConditionalOrdersResponseProtoMsg): QueryTraderDerivativeConditionalOrdersResponse {
    return QueryTraderDerivativeConditionalOrdersResponse.decode(message.value);
  },
  toProto(message: QueryTraderDerivativeConditionalOrdersResponse): Uint8Array {
    return QueryTraderDerivativeConditionalOrdersResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTraderDerivativeConditionalOrdersResponse): QueryTraderDerivativeConditionalOrdersResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryTraderDerivativeConditionalOrdersResponse",
      value: QueryTraderDerivativeConditionalOrdersResponse.encode(message).finish()
    };
  }
};
function createBaseQueryMarketAtomicExecutionFeeMultiplierRequest(): QueryMarketAtomicExecutionFeeMultiplierRequest {
  return {
    marketId: ""
  };
}
export const QueryMarketAtomicExecutionFeeMultiplierRequest = {
  typeUrl: "/injective.exchange.v1beta1.QueryMarketAtomicExecutionFeeMultiplierRequest",
  encode(message: QueryMarketAtomicExecutionFeeMultiplierRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueryMarketAtomicExecutionFeeMultiplierRequestAmino): QueryMarketAtomicExecutionFeeMultiplierRequest {
    return {
      marketId: object.market_id
    };
  },
  toAmino(message: QueryMarketAtomicExecutionFeeMultiplierRequest): QueryMarketAtomicExecutionFeeMultiplierRequestAmino {
    const obj: any = {};
    obj.market_id = message.marketId;
    return obj;
  },
  fromAminoMsg(object: QueryMarketAtomicExecutionFeeMultiplierRequestAminoMsg): QueryMarketAtomicExecutionFeeMultiplierRequest {
    return QueryMarketAtomicExecutionFeeMultiplierRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMarketAtomicExecutionFeeMultiplierRequestProtoMsg): QueryMarketAtomicExecutionFeeMultiplierRequest {
    return QueryMarketAtomicExecutionFeeMultiplierRequest.decode(message.value);
  },
  toProto(message: QueryMarketAtomicExecutionFeeMultiplierRequest): Uint8Array {
    return QueryMarketAtomicExecutionFeeMultiplierRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryMarketAtomicExecutionFeeMultiplierRequest): QueryMarketAtomicExecutionFeeMultiplierRequestProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryMarketAtomicExecutionFeeMultiplierRequest",
      value: QueryMarketAtomicExecutionFeeMultiplierRequest.encode(message).finish()
    };
  }
};
function createBaseQueryMarketAtomicExecutionFeeMultiplierResponse(): QueryMarketAtomicExecutionFeeMultiplierResponse {
  return {
    multiplier: ""
  };
}
export const QueryMarketAtomicExecutionFeeMultiplierResponse = {
  typeUrl: "/injective.exchange.v1beta1.QueryMarketAtomicExecutionFeeMultiplierResponse",
  encode(message: QueryMarketAtomicExecutionFeeMultiplierResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.multiplier !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.multiplier, 18).atomics);
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
  },
  fromAmino(object: QueryMarketAtomicExecutionFeeMultiplierResponseAmino): QueryMarketAtomicExecutionFeeMultiplierResponse {
    return {
      multiplier: object.multiplier
    };
  },
  toAmino(message: QueryMarketAtomicExecutionFeeMultiplierResponse): QueryMarketAtomicExecutionFeeMultiplierResponseAmino {
    const obj: any = {};
    obj.multiplier = message.multiplier;
    return obj;
  },
  fromAminoMsg(object: QueryMarketAtomicExecutionFeeMultiplierResponseAminoMsg): QueryMarketAtomicExecutionFeeMultiplierResponse {
    return QueryMarketAtomicExecutionFeeMultiplierResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMarketAtomicExecutionFeeMultiplierResponseProtoMsg): QueryMarketAtomicExecutionFeeMultiplierResponse {
    return QueryMarketAtomicExecutionFeeMultiplierResponse.decode(message.value);
  },
  toProto(message: QueryMarketAtomicExecutionFeeMultiplierResponse): Uint8Array {
    return QueryMarketAtomicExecutionFeeMultiplierResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryMarketAtomicExecutionFeeMultiplierResponse): QueryMarketAtomicExecutionFeeMultiplierResponseProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.QueryMarketAtomicExecutionFeeMultiplierResponse",
      value: QueryMarketAtomicExecutionFeeMultiplierResponse.encode(message).finish()
    };
  }
};