import { SubaccountOrderData, SubaccountOrderDataAmino, SubaccountOrderDataSDKType, SubaccountOrderbookMetadata, SubaccountOrderbookMetadataAmino, SubaccountOrderbookMetadataSDKType, Params, ParamsAmino, ParamsSDKType, Deposit, DepositAmino, DepositSDKType, MarketVolume, MarketVolumeAmino, MarketVolumeSDKType, AggregateAccountVolumeRecord, AggregateAccountVolumeRecordAmino, AggregateAccountVolumeRecordSDKType, VolumeRecord, VolumeRecordAmino, VolumeRecordSDKType, DenomDecimals, DenomDecimalsAmino, DenomDecimalsSDKType, SpotMarket, SpotMarketAmino, SpotMarketSDKType, Level, LevelAmino, LevelSDKType, MidPriceAndTOB, MidPriceAndTOBAmino, MidPriceAndTOBSDKType, PerpetualMarketInfo, PerpetualMarketInfoAmino, PerpetualMarketInfoSDKType, PerpetualMarketFunding, PerpetualMarketFundingAmino, PerpetualMarketFundingSDKType, DerivativeMarket, DerivativeMarketAmino, DerivativeMarketSDKType, ExpiryFuturesMarketInfo, ExpiryFuturesMarketInfoAmino, ExpiryFuturesMarketInfoSDKType, Position, PositionAmino, PositionSDKType, TradingRewardCampaignInfo, TradingRewardCampaignInfoAmino, TradingRewardCampaignInfoSDKType, CampaignRewardPool, CampaignRewardPoolAmino, CampaignRewardPoolSDKType, FeeDiscountTierInfo, FeeDiscountTierInfoAmino, FeeDiscountTierInfoSDKType, FeeDiscountTierTTL, FeeDiscountTierTTLAmino, FeeDiscountTierTTLSDKType, FeeDiscountSchedule, FeeDiscountScheduleAmino, FeeDiscountScheduleSDKType, TradeRecords, TradeRecordsAmino, TradeRecordsSDKType, TradeRecord, TradeRecordAmino, TradeRecordSDKType, BinaryOptionsMarket, BinaryOptionsMarketAmino, BinaryOptionsMarketSDKType } from "./exchange";
import { Balance, BalanceAmino, BalanceSDKType, DerivativePosition, DerivativePositionAmino, DerivativePositionSDKType, GenesisState, GenesisStateAmino, GenesisStateSDKType } from "./genesis";
import { MetadataStatistics, MetadataStatisticsAmino, MetadataStatisticsSDKType } from "../../oracle/v1beta1/oracle";
import { BinaryWriter } from "../../../binary";
export declare enum OrderSide {
    /** Side_Unspecified - will return both */
    Side_Unspecified = 0,
    Buy = 1,
    Sell = 2,
    UNRECOGNIZED = -1
}
export declare const OrderSideSDKType: typeof OrderSide;
export declare const OrderSideAmino: typeof OrderSide;
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
export declare const CancellationStrategyAmino: typeof CancellationStrategy;
export declare function cancellationStrategyFromJSON(object: any): CancellationStrategy;
export declare function cancellationStrategyToJSON(object: CancellationStrategy): string;
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
export interface QueryExchangeParamsRequest {
}
export interface QueryExchangeParamsRequestProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.QueryExchangeParamsRequest";
    value: Uint8Array;
}
/**
 * QueryExchangeParamsRequest is the request type for the Query/ExchangeParams
 * RPC method.
 */
export interface QueryExchangeParamsRequestAmino {
}
export interface QueryExchangeParamsRequestAminoMsg {
    type: "/injective.exchange.v1beta1.QueryExchangeParamsRequest";
    value: QueryExchangeParamsRequestAmino;
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
export interface QueryExchangeBalancesRequest {
}
export interface QueryExchangeBalancesRequestProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.QueryExchangeBalancesRequest";
    value: Uint8Array;
}
/**
 * QueryExchangeBalancesRequest is the request type for the
 * Query/ExchangeBalances RPC method.
 */
export interface QueryExchangeBalancesRequestAmino {
}
export interface QueryExchangeBalancesRequestAminoMsg {
    type: "/injective.exchange.v1beta1.QueryExchangeBalancesRequest";
    value: QueryExchangeBalancesRequestAmino;
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
export interface QueryModuleStateRequest {
}
export interface QueryModuleStateRequestProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.QueryModuleStateRequest";
    value: Uint8Array;
}
/**
 * QueryModuleStateRequest is the request type for the Query/ExchangeModuleState
 * RPC method.
 */
export interface QueryModuleStateRequestAmino {
}
export interface QueryModuleStateRequestAminoMsg {
    type: "/injective.exchange.v1beta1.QueryModuleStateRequest";
    value: QueryModuleStateRequestAmino;
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
export interface QueryPositionsRequest {
}
export interface QueryPositionsRequestProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.QueryPositionsRequest";
    value: Uint8Array;
}
/** QueryPositionsRequest is the request type for the Query/Positions RPC method. */
export interface QueryPositionsRequestAmino {
}
export interface QueryPositionsRequestAminoMsg {
    type: "/injective.exchange.v1beta1.QueryPositionsRequest";
    value: QueryPositionsRequestAmino;
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
export interface QueryTradeRewardCampaignRequest {
}
export interface QueryTradeRewardCampaignRequestProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.QueryTradeRewardCampaignRequest";
    value: Uint8Array;
}
/**
 * QueryTradeRewardCampaignRequest is the request type for the
 * Query/TradeRewardCampaign RPC method.
 */
export interface QueryTradeRewardCampaignRequestAmino {
}
export interface QueryTradeRewardCampaignRequestAminoMsg {
    type: "/injective.exchange.v1beta1.QueryTradeRewardCampaignRequest";
    value: QueryTradeRewardCampaignRequestAmino;
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
export interface QueryOptedOutOfRewardsAccountsRequest {
}
export interface QueryOptedOutOfRewardsAccountsRequestProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.QueryOptedOutOfRewardsAccountsRequest";
    value: Uint8Array;
}
/**
 * QueryRegisteredDMMsRequest is the request type for the Query/RegisteredDMMs
 * RPC method.
 */
export interface QueryOptedOutOfRewardsAccountsRequestAmino {
}
export interface QueryOptedOutOfRewardsAccountsRequestAminoMsg {
    type: "/injective.exchange.v1beta1.QueryOptedOutOfRewardsAccountsRequest";
    value: QueryOptedOutOfRewardsAccountsRequestAmino;
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
export interface QueryFeeDiscountScheduleRequest {
}
export interface QueryFeeDiscountScheduleRequestProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.QueryFeeDiscountScheduleRequest";
    value: Uint8Array;
}
/**
 * QueryFeeDiscountScheduleRequest is the request type for the
 * Query/FeeDiscountSchedule RPC method.
 */
export interface QueryFeeDiscountScheduleRequestAmino {
}
export interface QueryFeeDiscountScheduleRequestAminoMsg {
    type: "/injective.exchange.v1beta1.QueryFeeDiscountScheduleRequest";
    value: QueryFeeDiscountScheduleRequestAmino;
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
export interface QueryBalanceWithBalanceHoldsRequest {
}
export interface QueryBalanceWithBalanceHoldsRequestProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.QueryBalanceWithBalanceHoldsRequest";
    value: Uint8Array;
}
/**
 * QueryBalanceWithBalanceHoldsRequest is the request type for the
 * Query/QueryBalanceWithBalanceHolds RPC method.
 */
export interface QueryBalanceWithBalanceHoldsRequestAmino {
}
export interface QueryBalanceWithBalanceHoldsRequestAminoMsg {
    type: "/injective.exchange.v1beta1.QueryBalanceWithBalanceHoldsRequest";
    value: QueryBalanceWithBalanceHoldsRequestAmino;
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
export interface QueryFeeDiscountTierStatisticsRequest {
}
export interface QueryFeeDiscountTierStatisticsRequestProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.QueryFeeDiscountTierStatisticsRequest";
    value: Uint8Array;
}
/**
 * QueryFeeDiscountTierStatisticsRequest is the request type for the
 * Query/QueryFeeDiscountTierStatistics RPC method.
 */
export interface QueryFeeDiscountTierStatisticsRequestAmino {
}
export interface QueryFeeDiscountTierStatisticsRequestAminoMsg {
    type: "/injective.exchange.v1beta1.QueryFeeDiscountTierStatisticsRequest";
    value: QueryFeeDiscountTierStatisticsRequestAmino;
}
/**
 * QueryFeeDiscountTierStatisticsRequest is the request type for the
 * Query/QueryFeeDiscountTierStatistics RPC method.
 */
export interface QueryFeeDiscountTierStatisticsRequestSDKType {
}
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
export interface MitoVaultInfosRequest {
}
export interface MitoVaultInfosRequestProtoMsg {
    typeUrl: "/injective.exchange.v1beta1.MitoVaultInfosRequest";
    value: Uint8Array;
}
/**
 * MitoVaultInfosRequest is the request type for the Query/MitoVaultInfos RPC
 * method.
 */
export interface MitoVaultInfosRequestAmino {
}
export interface MitoVaultInfosRequestAminoMsg {
    type: "/injective.exchange.v1beta1.MitoVaultInfosRequest";
    value: MitoVaultInfosRequestAmino;
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
export declare const Subaccount: {
    typeUrl: string;
    encode(message: Subaccount, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Subaccount;
    fromPartial(object: Partial<Subaccount>): Subaccount;
    fromAmino(object: SubaccountAmino): Subaccount;
    toAmino(message: Subaccount): SubaccountAmino;
    fromAminoMsg(object: SubaccountAminoMsg): Subaccount;
    fromProtoMsg(message: SubaccountProtoMsg): Subaccount;
    toProto(message: Subaccount): Uint8Array;
    toProtoMsg(message: Subaccount): SubaccountProtoMsg;
};
export declare const QuerySubaccountOrdersRequest: {
    typeUrl: string;
    encode(message: QuerySubaccountOrdersRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QuerySubaccountOrdersRequest;
    fromPartial(object: Partial<QuerySubaccountOrdersRequest>): QuerySubaccountOrdersRequest;
    fromAmino(object: QuerySubaccountOrdersRequestAmino): QuerySubaccountOrdersRequest;
    toAmino(message: QuerySubaccountOrdersRequest): QuerySubaccountOrdersRequestAmino;
    fromAminoMsg(object: QuerySubaccountOrdersRequestAminoMsg): QuerySubaccountOrdersRequest;
    fromProtoMsg(message: QuerySubaccountOrdersRequestProtoMsg): QuerySubaccountOrdersRequest;
    toProto(message: QuerySubaccountOrdersRequest): Uint8Array;
    toProtoMsg(message: QuerySubaccountOrdersRequest): QuerySubaccountOrdersRequestProtoMsg;
};
export declare const QuerySubaccountOrdersResponse: {
    typeUrl: string;
    encode(message: QuerySubaccountOrdersResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QuerySubaccountOrdersResponse;
    fromPartial(object: Partial<QuerySubaccountOrdersResponse>): QuerySubaccountOrdersResponse;
    fromAmino(object: QuerySubaccountOrdersResponseAmino): QuerySubaccountOrdersResponse;
    toAmino(message: QuerySubaccountOrdersResponse): QuerySubaccountOrdersResponseAmino;
    fromAminoMsg(object: QuerySubaccountOrdersResponseAminoMsg): QuerySubaccountOrdersResponse;
    fromProtoMsg(message: QuerySubaccountOrdersResponseProtoMsg): QuerySubaccountOrdersResponse;
    toProto(message: QuerySubaccountOrdersResponse): Uint8Array;
    toProtoMsg(message: QuerySubaccountOrdersResponse): QuerySubaccountOrdersResponseProtoMsg;
};
export declare const SubaccountOrderbookMetadataWithMarket: {
    typeUrl: string;
    encode(message: SubaccountOrderbookMetadataWithMarket, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): SubaccountOrderbookMetadataWithMarket;
    fromPartial(object: Partial<SubaccountOrderbookMetadataWithMarket>): SubaccountOrderbookMetadataWithMarket;
    fromAmino(object: SubaccountOrderbookMetadataWithMarketAmino): SubaccountOrderbookMetadataWithMarket;
    toAmino(message: SubaccountOrderbookMetadataWithMarket): SubaccountOrderbookMetadataWithMarketAmino;
    fromAminoMsg(object: SubaccountOrderbookMetadataWithMarketAminoMsg): SubaccountOrderbookMetadataWithMarket;
    fromProtoMsg(message: SubaccountOrderbookMetadataWithMarketProtoMsg): SubaccountOrderbookMetadataWithMarket;
    toProto(message: SubaccountOrderbookMetadataWithMarket): Uint8Array;
    toProtoMsg(message: SubaccountOrderbookMetadataWithMarket): SubaccountOrderbookMetadataWithMarketProtoMsg;
};
export declare const QueryExchangeParamsRequest: {
    typeUrl: string;
    encode(_: QueryExchangeParamsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryExchangeParamsRequest;
    fromPartial(_: Partial<QueryExchangeParamsRequest>): QueryExchangeParamsRequest;
    fromAmino(_: QueryExchangeParamsRequestAmino): QueryExchangeParamsRequest;
    toAmino(_: QueryExchangeParamsRequest): QueryExchangeParamsRequestAmino;
    fromAminoMsg(object: QueryExchangeParamsRequestAminoMsg): QueryExchangeParamsRequest;
    fromProtoMsg(message: QueryExchangeParamsRequestProtoMsg): QueryExchangeParamsRequest;
    toProto(message: QueryExchangeParamsRequest): Uint8Array;
    toProtoMsg(message: QueryExchangeParamsRequest): QueryExchangeParamsRequestProtoMsg;
};
export declare const QueryExchangeParamsResponse: {
    typeUrl: string;
    encode(message: QueryExchangeParamsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryExchangeParamsResponse;
    fromPartial(object: Partial<QueryExchangeParamsResponse>): QueryExchangeParamsResponse;
    fromAmino(object: QueryExchangeParamsResponseAmino): QueryExchangeParamsResponse;
    toAmino(message: QueryExchangeParamsResponse): QueryExchangeParamsResponseAmino;
    fromAminoMsg(object: QueryExchangeParamsResponseAminoMsg): QueryExchangeParamsResponse;
    fromProtoMsg(message: QueryExchangeParamsResponseProtoMsg): QueryExchangeParamsResponse;
    toProto(message: QueryExchangeParamsResponse): Uint8Array;
    toProtoMsg(message: QueryExchangeParamsResponse): QueryExchangeParamsResponseProtoMsg;
};
export declare const QuerySubaccountDepositsRequest: {
    typeUrl: string;
    encode(message: QuerySubaccountDepositsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QuerySubaccountDepositsRequest;
    fromPartial(object: Partial<QuerySubaccountDepositsRequest>): QuerySubaccountDepositsRequest;
    fromAmino(object: QuerySubaccountDepositsRequestAmino): QuerySubaccountDepositsRequest;
    toAmino(message: QuerySubaccountDepositsRequest): QuerySubaccountDepositsRequestAmino;
    fromAminoMsg(object: QuerySubaccountDepositsRequestAminoMsg): QuerySubaccountDepositsRequest;
    fromProtoMsg(message: QuerySubaccountDepositsRequestProtoMsg): QuerySubaccountDepositsRequest;
    toProto(message: QuerySubaccountDepositsRequest): Uint8Array;
    toProtoMsg(message: QuerySubaccountDepositsRequest): QuerySubaccountDepositsRequestProtoMsg;
};
export declare const QuerySubaccountDepositsResponse_DepositsEntry: {
    encode(message: QuerySubaccountDepositsResponse_DepositsEntry, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QuerySubaccountDepositsResponse_DepositsEntry;
    fromPartial(object: Partial<QuerySubaccountDepositsResponse_DepositsEntry>): QuerySubaccountDepositsResponse_DepositsEntry;
    fromAmino(object: QuerySubaccountDepositsResponse_DepositsEntryAmino): QuerySubaccountDepositsResponse_DepositsEntry;
    toAmino(message: QuerySubaccountDepositsResponse_DepositsEntry): QuerySubaccountDepositsResponse_DepositsEntryAmino;
    fromAminoMsg(object: QuerySubaccountDepositsResponse_DepositsEntryAminoMsg): QuerySubaccountDepositsResponse_DepositsEntry;
    fromProtoMsg(message: QuerySubaccountDepositsResponse_DepositsEntryProtoMsg): QuerySubaccountDepositsResponse_DepositsEntry;
    toProto(message: QuerySubaccountDepositsResponse_DepositsEntry): Uint8Array;
};
export declare const QuerySubaccountDepositsResponse: {
    typeUrl: string;
    encode(message: QuerySubaccountDepositsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QuerySubaccountDepositsResponse;
    fromPartial(object: Partial<QuerySubaccountDepositsResponse>): QuerySubaccountDepositsResponse;
    fromAmino(object: QuerySubaccountDepositsResponseAmino): QuerySubaccountDepositsResponse;
    toAmino(message: QuerySubaccountDepositsResponse): QuerySubaccountDepositsResponseAmino;
    fromAminoMsg(object: QuerySubaccountDepositsResponseAminoMsg): QuerySubaccountDepositsResponse;
    fromProtoMsg(message: QuerySubaccountDepositsResponseProtoMsg): QuerySubaccountDepositsResponse;
    toProto(message: QuerySubaccountDepositsResponse): Uint8Array;
    toProtoMsg(message: QuerySubaccountDepositsResponse): QuerySubaccountDepositsResponseProtoMsg;
};
export declare const QueryExchangeBalancesRequest: {
    typeUrl: string;
    encode(_: QueryExchangeBalancesRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryExchangeBalancesRequest;
    fromPartial(_: Partial<QueryExchangeBalancesRequest>): QueryExchangeBalancesRequest;
    fromAmino(_: QueryExchangeBalancesRequestAmino): QueryExchangeBalancesRequest;
    toAmino(_: QueryExchangeBalancesRequest): QueryExchangeBalancesRequestAmino;
    fromAminoMsg(object: QueryExchangeBalancesRequestAminoMsg): QueryExchangeBalancesRequest;
    fromProtoMsg(message: QueryExchangeBalancesRequestProtoMsg): QueryExchangeBalancesRequest;
    toProto(message: QueryExchangeBalancesRequest): Uint8Array;
    toProtoMsg(message: QueryExchangeBalancesRequest): QueryExchangeBalancesRequestProtoMsg;
};
export declare const QueryExchangeBalancesResponse: {
    typeUrl: string;
    encode(message: QueryExchangeBalancesResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryExchangeBalancesResponse;
    fromPartial(object: Partial<QueryExchangeBalancesResponse>): QueryExchangeBalancesResponse;
    fromAmino(object: QueryExchangeBalancesResponseAmino): QueryExchangeBalancesResponse;
    toAmino(message: QueryExchangeBalancesResponse): QueryExchangeBalancesResponseAmino;
    fromAminoMsg(object: QueryExchangeBalancesResponseAminoMsg): QueryExchangeBalancesResponse;
    fromProtoMsg(message: QueryExchangeBalancesResponseProtoMsg): QueryExchangeBalancesResponse;
    toProto(message: QueryExchangeBalancesResponse): Uint8Array;
    toProtoMsg(message: QueryExchangeBalancesResponse): QueryExchangeBalancesResponseProtoMsg;
};
export declare const QueryAggregateVolumeRequest: {
    typeUrl: string;
    encode(message: QueryAggregateVolumeRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAggregateVolumeRequest;
    fromPartial(object: Partial<QueryAggregateVolumeRequest>): QueryAggregateVolumeRequest;
    fromAmino(object: QueryAggregateVolumeRequestAmino): QueryAggregateVolumeRequest;
    toAmino(message: QueryAggregateVolumeRequest): QueryAggregateVolumeRequestAmino;
    fromAminoMsg(object: QueryAggregateVolumeRequestAminoMsg): QueryAggregateVolumeRequest;
    fromProtoMsg(message: QueryAggregateVolumeRequestProtoMsg): QueryAggregateVolumeRequest;
    toProto(message: QueryAggregateVolumeRequest): Uint8Array;
    toProtoMsg(message: QueryAggregateVolumeRequest): QueryAggregateVolumeRequestProtoMsg;
};
export declare const QueryAggregateVolumeResponse: {
    typeUrl: string;
    encode(message: QueryAggregateVolumeResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAggregateVolumeResponse;
    fromPartial(object: Partial<QueryAggregateVolumeResponse>): QueryAggregateVolumeResponse;
    fromAmino(object: QueryAggregateVolumeResponseAmino): QueryAggregateVolumeResponse;
    toAmino(message: QueryAggregateVolumeResponse): QueryAggregateVolumeResponseAmino;
    fromAminoMsg(object: QueryAggregateVolumeResponseAminoMsg): QueryAggregateVolumeResponse;
    fromProtoMsg(message: QueryAggregateVolumeResponseProtoMsg): QueryAggregateVolumeResponse;
    toProto(message: QueryAggregateVolumeResponse): Uint8Array;
    toProtoMsg(message: QueryAggregateVolumeResponse): QueryAggregateVolumeResponseProtoMsg;
};
export declare const QueryAggregateVolumesRequest: {
    typeUrl: string;
    encode(message: QueryAggregateVolumesRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAggregateVolumesRequest;
    fromPartial(object: Partial<QueryAggregateVolumesRequest>): QueryAggregateVolumesRequest;
    fromAmino(object: QueryAggregateVolumesRequestAmino): QueryAggregateVolumesRequest;
    toAmino(message: QueryAggregateVolumesRequest): QueryAggregateVolumesRequestAmino;
    fromAminoMsg(object: QueryAggregateVolumesRequestAminoMsg): QueryAggregateVolumesRequest;
    fromProtoMsg(message: QueryAggregateVolumesRequestProtoMsg): QueryAggregateVolumesRequest;
    toProto(message: QueryAggregateVolumesRequest): Uint8Array;
    toProtoMsg(message: QueryAggregateVolumesRequest): QueryAggregateVolumesRequestProtoMsg;
};
export declare const QueryAggregateVolumesResponse: {
    typeUrl: string;
    encode(message: QueryAggregateVolumesResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAggregateVolumesResponse;
    fromPartial(object: Partial<QueryAggregateVolumesResponse>): QueryAggregateVolumesResponse;
    fromAmino(object: QueryAggregateVolumesResponseAmino): QueryAggregateVolumesResponse;
    toAmino(message: QueryAggregateVolumesResponse): QueryAggregateVolumesResponseAmino;
    fromAminoMsg(object: QueryAggregateVolumesResponseAminoMsg): QueryAggregateVolumesResponse;
    fromProtoMsg(message: QueryAggregateVolumesResponseProtoMsg): QueryAggregateVolumesResponse;
    toProto(message: QueryAggregateVolumesResponse): Uint8Array;
    toProtoMsg(message: QueryAggregateVolumesResponse): QueryAggregateVolumesResponseProtoMsg;
};
export declare const QueryAggregateMarketVolumeRequest: {
    typeUrl: string;
    encode(message: QueryAggregateMarketVolumeRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAggregateMarketVolumeRequest;
    fromPartial(object: Partial<QueryAggregateMarketVolumeRequest>): QueryAggregateMarketVolumeRequest;
    fromAmino(object: QueryAggregateMarketVolumeRequestAmino): QueryAggregateMarketVolumeRequest;
    toAmino(message: QueryAggregateMarketVolumeRequest): QueryAggregateMarketVolumeRequestAmino;
    fromAminoMsg(object: QueryAggregateMarketVolumeRequestAminoMsg): QueryAggregateMarketVolumeRequest;
    fromProtoMsg(message: QueryAggregateMarketVolumeRequestProtoMsg): QueryAggregateMarketVolumeRequest;
    toProto(message: QueryAggregateMarketVolumeRequest): Uint8Array;
    toProtoMsg(message: QueryAggregateMarketVolumeRequest): QueryAggregateMarketVolumeRequestProtoMsg;
};
export declare const QueryAggregateMarketVolumeResponse: {
    typeUrl: string;
    encode(message: QueryAggregateMarketVolumeResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAggregateMarketVolumeResponse;
    fromPartial(object: Partial<QueryAggregateMarketVolumeResponse>): QueryAggregateMarketVolumeResponse;
    fromAmino(object: QueryAggregateMarketVolumeResponseAmino): QueryAggregateMarketVolumeResponse;
    toAmino(message: QueryAggregateMarketVolumeResponse): QueryAggregateMarketVolumeResponseAmino;
    fromAminoMsg(object: QueryAggregateMarketVolumeResponseAminoMsg): QueryAggregateMarketVolumeResponse;
    fromProtoMsg(message: QueryAggregateMarketVolumeResponseProtoMsg): QueryAggregateMarketVolumeResponse;
    toProto(message: QueryAggregateMarketVolumeResponse): Uint8Array;
    toProtoMsg(message: QueryAggregateMarketVolumeResponse): QueryAggregateMarketVolumeResponseProtoMsg;
};
export declare const QueryDenomDecimalRequest: {
    typeUrl: string;
    encode(message: QueryDenomDecimalRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryDenomDecimalRequest;
    fromPartial(object: Partial<QueryDenomDecimalRequest>): QueryDenomDecimalRequest;
    fromAmino(object: QueryDenomDecimalRequestAmino): QueryDenomDecimalRequest;
    toAmino(message: QueryDenomDecimalRequest): QueryDenomDecimalRequestAmino;
    fromAminoMsg(object: QueryDenomDecimalRequestAminoMsg): QueryDenomDecimalRequest;
    fromProtoMsg(message: QueryDenomDecimalRequestProtoMsg): QueryDenomDecimalRequest;
    toProto(message: QueryDenomDecimalRequest): Uint8Array;
    toProtoMsg(message: QueryDenomDecimalRequest): QueryDenomDecimalRequestProtoMsg;
};
export declare const QueryDenomDecimalResponse: {
    typeUrl: string;
    encode(message: QueryDenomDecimalResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryDenomDecimalResponse;
    fromPartial(object: Partial<QueryDenomDecimalResponse>): QueryDenomDecimalResponse;
    fromAmino(object: QueryDenomDecimalResponseAmino): QueryDenomDecimalResponse;
    toAmino(message: QueryDenomDecimalResponse): QueryDenomDecimalResponseAmino;
    fromAminoMsg(object: QueryDenomDecimalResponseAminoMsg): QueryDenomDecimalResponse;
    fromProtoMsg(message: QueryDenomDecimalResponseProtoMsg): QueryDenomDecimalResponse;
    toProto(message: QueryDenomDecimalResponse): Uint8Array;
    toProtoMsg(message: QueryDenomDecimalResponse): QueryDenomDecimalResponseProtoMsg;
};
export declare const QueryDenomDecimalsRequest: {
    typeUrl: string;
    encode(message: QueryDenomDecimalsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryDenomDecimalsRequest;
    fromPartial(object: Partial<QueryDenomDecimalsRequest>): QueryDenomDecimalsRequest;
    fromAmino(object: QueryDenomDecimalsRequestAmino): QueryDenomDecimalsRequest;
    toAmino(message: QueryDenomDecimalsRequest): QueryDenomDecimalsRequestAmino;
    fromAminoMsg(object: QueryDenomDecimalsRequestAminoMsg): QueryDenomDecimalsRequest;
    fromProtoMsg(message: QueryDenomDecimalsRequestProtoMsg): QueryDenomDecimalsRequest;
    toProto(message: QueryDenomDecimalsRequest): Uint8Array;
    toProtoMsg(message: QueryDenomDecimalsRequest): QueryDenomDecimalsRequestProtoMsg;
};
export declare const QueryDenomDecimalsResponse: {
    typeUrl: string;
    encode(message: QueryDenomDecimalsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryDenomDecimalsResponse;
    fromPartial(object: Partial<QueryDenomDecimalsResponse>): QueryDenomDecimalsResponse;
    fromAmino(object: QueryDenomDecimalsResponseAmino): QueryDenomDecimalsResponse;
    toAmino(message: QueryDenomDecimalsResponse): QueryDenomDecimalsResponseAmino;
    fromAminoMsg(object: QueryDenomDecimalsResponseAminoMsg): QueryDenomDecimalsResponse;
    fromProtoMsg(message: QueryDenomDecimalsResponseProtoMsg): QueryDenomDecimalsResponse;
    toProto(message: QueryDenomDecimalsResponse): Uint8Array;
    toProtoMsg(message: QueryDenomDecimalsResponse): QueryDenomDecimalsResponseProtoMsg;
};
export declare const QueryAggregateMarketVolumesRequest: {
    typeUrl: string;
    encode(message: QueryAggregateMarketVolumesRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAggregateMarketVolumesRequest;
    fromPartial(object: Partial<QueryAggregateMarketVolumesRequest>): QueryAggregateMarketVolumesRequest;
    fromAmino(object: QueryAggregateMarketVolumesRequestAmino): QueryAggregateMarketVolumesRequest;
    toAmino(message: QueryAggregateMarketVolumesRequest): QueryAggregateMarketVolumesRequestAmino;
    fromAminoMsg(object: QueryAggregateMarketVolumesRequestAminoMsg): QueryAggregateMarketVolumesRequest;
    fromProtoMsg(message: QueryAggregateMarketVolumesRequestProtoMsg): QueryAggregateMarketVolumesRequest;
    toProto(message: QueryAggregateMarketVolumesRequest): Uint8Array;
    toProtoMsg(message: QueryAggregateMarketVolumesRequest): QueryAggregateMarketVolumesRequestProtoMsg;
};
export declare const QueryAggregateMarketVolumesResponse: {
    typeUrl: string;
    encode(message: QueryAggregateMarketVolumesResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAggregateMarketVolumesResponse;
    fromPartial(object: Partial<QueryAggregateMarketVolumesResponse>): QueryAggregateMarketVolumesResponse;
    fromAmino(object: QueryAggregateMarketVolumesResponseAmino): QueryAggregateMarketVolumesResponse;
    toAmino(message: QueryAggregateMarketVolumesResponse): QueryAggregateMarketVolumesResponseAmino;
    fromAminoMsg(object: QueryAggregateMarketVolumesResponseAminoMsg): QueryAggregateMarketVolumesResponse;
    fromProtoMsg(message: QueryAggregateMarketVolumesResponseProtoMsg): QueryAggregateMarketVolumesResponse;
    toProto(message: QueryAggregateMarketVolumesResponse): Uint8Array;
    toProtoMsg(message: QueryAggregateMarketVolumesResponse): QueryAggregateMarketVolumesResponseProtoMsg;
};
export declare const QuerySubaccountDepositRequest: {
    typeUrl: string;
    encode(message: QuerySubaccountDepositRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QuerySubaccountDepositRequest;
    fromPartial(object: Partial<QuerySubaccountDepositRequest>): QuerySubaccountDepositRequest;
    fromAmino(object: QuerySubaccountDepositRequestAmino): QuerySubaccountDepositRequest;
    toAmino(message: QuerySubaccountDepositRequest): QuerySubaccountDepositRequestAmino;
    fromAminoMsg(object: QuerySubaccountDepositRequestAminoMsg): QuerySubaccountDepositRequest;
    fromProtoMsg(message: QuerySubaccountDepositRequestProtoMsg): QuerySubaccountDepositRequest;
    toProto(message: QuerySubaccountDepositRequest): Uint8Array;
    toProtoMsg(message: QuerySubaccountDepositRequest): QuerySubaccountDepositRequestProtoMsg;
};
export declare const QuerySubaccountDepositResponse: {
    typeUrl: string;
    encode(message: QuerySubaccountDepositResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QuerySubaccountDepositResponse;
    fromPartial(object: Partial<QuerySubaccountDepositResponse>): QuerySubaccountDepositResponse;
    fromAmino(object: QuerySubaccountDepositResponseAmino): QuerySubaccountDepositResponse;
    toAmino(message: QuerySubaccountDepositResponse): QuerySubaccountDepositResponseAmino;
    fromAminoMsg(object: QuerySubaccountDepositResponseAminoMsg): QuerySubaccountDepositResponse;
    fromProtoMsg(message: QuerySubaccountDepositResponseProtoMsg): QuerySubaccountDepositResponse;
    toProto(message: QuerySubaccountDepositResponse): Uint8Array;
    toProtoMsg(message: QuerySubaccountDepositResponse): QuerySubaccountDepositResponseProtoMsg;
};
export declare const QuerySpotMarketsRequest: {
    typeUrl: string;
    encode(message: QuerySpotMarketsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QuerySpotMarketsRequest;
    fromPartial(object: Partial<QuerySpotMarketsRequest>): QuerySpotMarketsRequest;
    fromAmino(object: QuerySpotMarketsRequestAmino): QuerySpotMarketsRequest;
    toAmino(message: QuerySpotMarketsRequest): QuerySpotMarketsRequestAmino;
    fromAminoMsg(object: QuerySpotMarketsRequestAminoMsg): QuerySpotMarketsRequest;
    fromProtoMsg(message: QuerySpotMarketsRequestProtoMsg): QuerySpotMarketsRequest;
    toProto(message: QuerySpotMarketsRequest): Uint8Array;
    toProtoMsg(message: QuerySpotMarketsRequest): QuerySpotMarketsRequestProtoMsg;
};
export declare const QuerySpotMarketsResponse: {
    typeUrl: string;
    encode(message: QuerySpotMarketsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QuerySpotMarketsResponse;
    fromPartial(object: Partial<QuerySpotMarketsResponse>): QuerySpotMarketsResponse;
    fromAmino(object: QuerySpotMarketsResponseAmino): QuerySpotMarketsResponse;
    toAmino(message: QuerySpotMarketsResponse): QuerySpotMarketsResponseAmino;
    fromAminoMsg(object: QuerySpotMarketsResponseAminoMsg): QuerySpotMarketsResponse;
    fromProtoMsg(message: QuerySpotMarketsResponseProtoMsg): QuerySpotMarketsResponse;
    toProto(message: QuerySpotMarketsResponse): Uint8Array;
    toProtoMsg(message: QuerySpotMarketsResponse): QuerySpotMarketsResponseProtoMsg;
};
export declare const QuerySpotMarketRequest: {
    typeUrl: string;
    encode(message: QuerySpotMarketRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QuerySpotMarketRequest;
    fromPartial(object: Partial<QuerySpotMarketRequest>): QuerySpotMarketRequest;
    fromAmino(object: QuerySpotMarketRequestAmino): QuerySpotMarketRequest;
    toAmino(message: QuerySpotMarketRequest): QuerySpotMarketRequestAmino;
    fromAminoMsg(object: QuerySpotMarketRequestAminoMsg): QuerySpotMarketRequest;
    fromProtoMsg(message: QuerySpotMarketRequestProtoMsg): QuerySpotMarketRequest;
    toProto(message: QuerySpotMarketRequest): Uint8Array;
    toProtoMsg(message: QuerySpotMarketRequest): QuerySpotMarketRequestProtoMsg;
};
export declare const QuerySpotMarketResponse: {
    typeUrl: string;
    encode(message: QuerySpotMarketResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QuerySpotMarketResponse;
    fromPartial(object: Partial<QuerySpotMarketResponse>): QuerySpotMarketResponse;
    fromAmino(object: QuerySpotMarketResponseAmino): QuerySpotMarketResponse;
    toAmino(message: QuerySpotMarketResponse): QuerySpotMarketResponseAmino;
    fromAminoMsg(object: QuerySpotMarketResponseAminoMsg): QuerySpotMarketResponse;
    fromProtoMsg(message: QuerySpotMarketResponseProtoMsg): QuerySpotMarketResponse;
    toProto(message: QuerySpotMarketResponse): Uint8Array;
    toProtoMsg(message: QuerySpotMarketResponse): QuerySpotMarketResponseProtoMsg;
};
export declare const QuerySpotOrderbookRequest: {
    typeUrl: string;
    encode(message: QuerySpotOrderbookRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QuerySpotOrderbookRequest;
    fromPartial(object: Partial<QuerySpotOrderbookRequest>): QuerySpotOrderbookRequest;
    fromAmino(object: QuerySpotOrderbookRequestAmino): QuerySpotOrderbookRequest;
    toAmino(message: QuerySpotOrderbookRequest): QuerySpotOrderbookRequestAmino;
    fromAminoMsg(object: QuerySpotOrderbookRequestAminoMsg): QuerySpotOrderbookRequest;
    fromProtoMsg(message: QuerySpotOrderbookRequestProtoMsg): QuerySpotOrderbookRequest;
    toProto(message: QuerySpotOrderbookRequest): Uint8Array;
    toProtoMsg(message: QuerySpotOrderbookRequest): QuerySpotOrderbookRequestProtoMsg;
};
export declare const QuerySpotOrderbookResponse: {
    typeUrl: string;
    encode(message: QuerySpotOrderbookResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QuerySpotOrderbookResponse;
    fromPartial(object: Partial<QuerySpotOrderbookResponse>): QuerySpotOrderbookResponse;
    fromAmino(object: QuerySpotOrderbookResponseAmino): QuerySpotOrderbookResponse;
    toAmino(message: QuerySpotOrderbookResponse): QuerySpotOrderbookResponseAmino;
    fromAminoMsg(object: QuerySpotOrderbookResponseAminoMsg): QuerySpotOrderbookResponse;
    fromProtoMsg(message: QuerySpotOrderbookResponseProtoMsg): QuerySpotOrderbookResponse;
    toProto(message: QuerySpotOrderbookResponse): Uint8Array;
    toProtoMsg(message: QuerySpotOrderbookResponse): QuerySpotOrderbookResponseProtoMsg;
};
export declare const FullSpotMarket: {
    typeUrl: string;
    encode(message: FullSpotMarket, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): FullSpotMarket;
    fromPartial(object: Partial<FullSpotMarket>): FullSpotMarket;
    fromAmino(object: FullSpotMarketAmino): FullSpotMarket;
    toAmino(message: FullSpotMarket): FullSpotMarketAmino;
    fromAminoMsg(object: FullSpotMarketAminoMsg): FullSpotMarket;
    fromProtoMsg(message: FullSpotMarketProtoMsg): FullSpotMarket;
    toProto(message: FullSpotMarket): Uint8Array;
    toProtoMsg(message: FullSpotMarket): FullSpotMarketProtoMsg;
};
export declare const QueryFullSpotMarketsRequest: {
    typeUrl: string;
    encode(message: QueryFullSpotMarketsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryFullSpotMarketsRequest;
    fromPartial(object: Partial<QueryFullSpotMarketsRequest>): QueryFullSpotMarketsRequest;
    fromAmino(object: QueryFullSpotMarketsRequestAmino): QueryFullSpotMarketsRequest;
    toAmino(message: QueryFullSpotMarketsRequest): QueryFullSpotMarketsRequestAmino;
    fromAminoMsg(object: QueryFullSpotMarketsRequestAminoMsg): QueryFullSpotMarketsRequest;
    fromProtoMsg(message: QueryFullSpotMarketsRequestProtoMsg): QueryFullSpotMarketsRequest;
    toProto(message: QueryFullSpotMarketsRequest): Uint8Array;
    toProtoMsg(message: QueryFullSpotMarketsRequest): QueryFullSpotMarketsRequestProtoMsg;
};
export declare const QueryFullSpotMarketsResponse: {
    typeUrl: string;
    encode(message: QueryFullSpotMarketsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryFullSpotMarketsResponse;
    fromPartial(object: Partial<QueryFullSpotMarketsResponse>): QueryFullSpotMarketsResponse;
    fromAmino(object: QueryFullSpotMarketsResponseAmino): QueryFullSpotMarketsResponse;
    toAmino(message: QueryFullSpotMarketsResponse): QueryFullSpotMarketsResponseAmino;
    fromAminoMsg(object: QueryFullSpotMarketsResponseAminoMsg): QueryFullSpotMarketsResponse;
    fromProtoMsg(message: QueryFullSpotMarketsResponseProtoMsg): QueryFullSpotMarketsResponse;
    toProto(message: QueryFullSpotMarketsResponse): Uint8Array;
    toProtoMsg(message: QueryFullSpotMarketsResponse): QueryFullSpotMarketsResponseProtoMsg;
};
export declare const QueryFullSpotMarketRequest: {
    typeUrl: string;
    encode(message: QueryFullSpotMarketRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryFullSpotMarketRequest;
    fromPartial(object: Partial<QueryFullSpotMarketRequest>): QueryFullSpotMarketRequest;
    fromAmino(object: QueryFullSpotMarketRequestAmino): QueryFullSpotMarketRequest;
    toAmino(message: QueryFullSpotMarketRequest): QueryFullSpotMarketRequestAmino;
    fromAminoMsg(object: QueryFullSpotMarketRequestAminoMsg): QueryFullSpotMarketRequest;
    fromProtoMsg(message: QueryFullSpotMarketRequestProtoMsg): QueryFullSpotMarketRequest;
    toProto(message: QueryFullSpotMarketRequest): Uint8Array;
    toProtoMsg(message: QueryFullSpotMarketRequest): QueryFullSpotMarketRequestProtoMsg;
};
export declare const QueryFullSpotMarketResponse: {
    typeUrl: string;
    encode(message: QueryFullSpotMarketResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryFullSpotMarketResponse;
    fromPartial(object: Partial<QueryFullSpotMarketResponse>): QueryFullSpotMarketResponse;
    fromAmino(object: QueryFullSpotMarketResponseAmino): QueryFullSpotMarketResponse;
    toAmino(message: QueryFullSpotMarketResponse): QueryFullSpotMarketResponseAmino;
    fromAminoMsg(object: QueryFullSpotMarketResponseAminoMsg): QueryFullSpotMarketResponse;
    fromProtoMsg(message: QueryFullSpotMarketResponseProtoMsg): QueryFullSpotMarketResponse;
    toProto(message: QueryFullSpotMarketResponse): Uint8Array;
    toProtoMsg(message: QueryFullSpotMarketResponse): QueryFullSpotMarketResponseProtoMsg;
};
export declare const QuerySpotOrdersByHashesRequest: {
    typeUrl: string;
    encode(message: QuerySpotOrdersByHashesRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QuerySpotOrdersByHashesRequest;
    fromPartial(object: Partial<QuerySpotOrdersByHashesRequest>): QuerySpotOrdersByHashesRequest;
    fromAmino(object: QuerySpotOrdersByHashesRequestAmino): QuerySpotOrdersByHashesRequest;
    toAmino(message: QuerySpotOrdersByHashesRequest): QuerySpotOrdersByHashesRequestAmino;
    fromAminoMsg(object: QuerySpotOrdersByHashesRequestAminoMsg): QuerySpotOrdersByHashesRequest;
    fromProtoMsg(message: QuerySpotOrdersByHashesRequestProtoMsg): QuerySpotOrdersByHashesRequest;
    toProto(message: QuerySpotOrdersByHashesRequest): Uint8Array;
    toProtoMsg(message: QuerySpotOrdersByHashesRequest): QuerySpotOrdersByHashesRequestProtoMsg;
};
export declare const QuerySpotOrdersByHashesResponse: {
    typeUrl: string;
    encode(message: QuerySpotOrdersByHashesResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QuerySpotOrdersByHashesResponse;
    fromPartial(object: Partial<QuerySpotOrdersByHashesResponse>): QuerySpotOrdersByHashesResponse;
    fromAmino(object: QuerySpotOrdersByHashesResponseAmino): QuerySpotOrdersByHashesResponse;
    toAmino(message: QuerySpotOrdersByHashesResponse): QuerySpotOrdersByHashesResponseAmino;
    fromAminoMsg(object: QuerySpotOrdersByHashesResponseAminoMsg): QuerySpotOrdersByHashesResponse;
    fromProtoMsg(message: QuerySpotOrdersByHashesResponseProtoMsg): QuerySpotOrdersByHashesResponse;
    toProto(message: QuerySpotOrdersByHashesResponse): Uint8Array;
    toProtoMsg(message: QuerySpotOrdersByHashesResponse): QuerySpotOrdersByHashesResponseProtoMsg;
};
export declare const QueryTraderSpotOrdersRequest: {
    typeUrl: string;
    encode(message: QueryTraderSpotOrdersRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryTraderSpotOrdersRequest;
    fromPartial(object: Partial<QueryTraderSpotOrdersRequest>): QueryTraderSpotOrdersRequest;
    fromAmino(object: QueryTraderSpotOrdersRequestAmino): QueryTraderSpotOrdersRequest;
    toAmino(message: QueryTraderSpotOrdersRequest): QueryTraderSpotOrdersRequestAmino;
    fromAminoMsg(object: QueryTraderSpotOrdersRequestAminoMsg): QueryTraderSpotOrdersRequest;
    fromProtoMsg(message: QueryTraderSpotOrdersRequestProtoMsg): QueryTraderSpotOrdersRequest;
    toProto(message: QueryTraderSpotOrdersRequest): Uint8Array;
    toProtoMsg(message: QueryTraderSpotOrdersRequest): QueryTraderSpotOrdersRequestProtoMsg;
};
export declare const QueryAccountAddressSpotOrdersRequest: {
    typeUrl: string;
    encode(message: QueryAccountAddressSpotOrdersRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAccountAddressSpotOrdersRequest;
    fromPartial(object: Partial<QueryAccountAddressSpotOrdersRequest>): QueryAccountAddressSpotOrdersRequest;
    fromAmino(object: QueryAccountAddressSpotOrdersRequestAmino): QueryAccountAddressSpotOrdersRequest;
    toAmino(message: QueryAccountAddressSpotOrdersRequest): QueryAccountAddressSpotOrdersRequestAmino;
    fromAminoMsg(object: QueryAccountAddressSpotOrdersRequestAminoMsg): QueryAccountAddressSpotOrdersRequest;
    fromProtoMsg(message: QueryAccountAddressSpotOrdersRequestProtoMsg): QueryAccountAddressSpotOrdersRequest;
    toProto(message: QueryAccountAddressSpotOrdersRequest): Uint8Array;
    toProtoMsg(message: QueryAccountAddressSpotOrdersRequest): QueryAccountAddressSpotOrdersRequestProtoMsg;
};
export declare const TrimmedSpotLimitOrder: {
    typeUrl: string;
    encode(message: TrimmedSpotLimitOrder, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): TrimmedSpotLimitOrder;
    fromPartial(object: Partial<TrimmedSpotLimitOrder>): TrimmedSpotLimitOrder;
    fromAmino(object: TrimmedSpotLimitOrderAmino): TrimmedSpotLimitOrder;
    toAmino(message: TrimmedSpotLimitOrder): TrimmedSpotLimitOrderAmino;
    fromAminoMsg(object: TrimmedSpotLimitOrderAminoMsg): TrimmedSpotLimitOrder;
    fromProtoMsg(message: TrimmedSpotLimitOrderProtoMsg): TrimmedSpotLimitOrder;
    toProto(message: TrimmedSpotLimitOrder): Uint8Array;
    toProtoMsg(message: TrimmedSpotLimitOrder): TrimmedSpotLimitOrderProtoMsg;
};
export declare const QueryTraderSpotOrdersResponse: {
    typeUrl: string;
    encode(message: QueryTraderSpotOrdersResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryTraderSpotOrdersResponse;
    fromPartial(object: Partial<QueryTraderSpotOrdersResponse>): QueryTraderSpotOrdersResponse;
    fromAmino(object: QueryTraderSpotOrdersResponseAmino): QueryTraderSpotOrdersResponse;
    toAmino(message: QueryTraderSpotOrdersResponse): QueryTraderSpotOrdersResponseAmino;
    fromAminoMsg(object: QueryTraderSpotOrdersResponseAminoMsg): QueryTraderSpotOrdersResponse;
    fromProtoMsg(message: QueryTraderSpotOrdersResponseProtoMsg): QueryTraderSpotOrdersResponse;
    toProto(message: QueryTraderSpotOrdersResponse): Uint8Array;
    toProtoMsg(message: QueryTraderSpotOrdersResponse): QueryTraderSpotOrdersResponseProtoMsg;
};
export declare const QueryAccountAddressSpotOrdersResponse: {
    typeUrl: string;
    encode(message: QueryAccountAddressSpotOrdersResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAccountAddressSpotOrdersResponse;
    fromPartial(object: Partial<QueryAccountAddressSpotOrdersResponse>): QueryAccountAddressSpotOrdersResponse;
    fromAmino(object: QueryAccountAddressSpotOrdersResponseAmino): QueryAccountAddressSpotOrdersResponse;
    toAmino(message: QueryAccountAddressSpotOrdersResponse): QueryAccountAddressSpotOrdersResponseAmino;
    fromAminoMsg(object: QueryAccountAddressSpotOrdersResponseAminoMsg): QueryAccountAddressSpotOrdersResponse;
    fromProtoMsg(message: QueryAccountAddressSpotOrdersResponseProtoMsg): QueryAccountAddressSpotOrdersResponse;
    toProto(message: QueryAccountAddressSpotOrdersResponse): Uint8Array;
    toProtoMsg(message: QueryAccountAddressSpotOrdersResponse): QueryAccountAddressSpotOrdersResponseProtoMsg;
};
export declare const QuerySpotMidPriceAndTOBRequest: {
    typeUrl: string;
    encode(message: QuerySpotMidPriceAndTOBRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QuerySpotMidPriceAndTOBRequest;
    fromPartial(object: Partial<QuerySpotMidPriceAndTOBRequest>): QuerySpotMidPriceAndTOBRequest;
    fromAmino(object: QuerySpotMidPriceAndTOBRequestAmino): QuerySpotMidPriceAndTOBRequest;
    toAmino(message: QuerySpotMidPriceAndTOBRequest): QuerySpotMidPriceAndTOBRequestAmino;
    fromAminoMsg(object: QuerySpotMidPriceAndTOBRequestAminoMsg): QuerySpotMidPriceAndTOBRequest;
    fromProtoMsg(message: QuerySpotMidPriceAndTOBRequestProtoMsg): QuerySpotMidPriceAndTOBRequest;
    toProto(message: QuerySpotMidPriceAndTOBRequest): Uint8Array;
    toProtoMsg(message: QuerySpotMidPriceAndTOBRequest): QuerySpotMidPriceAndTOBRequestProtoMsg;
};
export declare const QuerySpotMidPriceAndTOBResponse: {
    typeUrl: string;
    encode(message: QuerySpotMidPriceAndTOBResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QuerySpotMidPriceAndTOBResponse;
    fromPartial(object: Partial<QuerySpotMidPriceAndTOBResponse>): QuerySpotMidPriceAndTOBResponse;
    fromAmino(object: QuerySpotMidPriceAndTOBResponseAmino): QuerySpotMidPriceAndTOBResponse;
    toAmino(message: QuerySpotMidPriceAndTOBResponse): QuerySpotMidPriceAndTOBResponseAmino;
    fromAminoMsg(object: QuerySpotMidPriceAndTOBResponseAminoMsg): QuerySpotMidPriceAndTOBResponse;
    fromProtoMsg(message: QuerySpotMidPriceAndTOBResponseProtoMsg): QuerySpotMidPriceAndTOBResponse;
    toProto(message: QuerySpotMidPriceAndTOBResponse): Uint8Array;
    toProtoMsg(message: QuerySpotMidPriceAndTOBResponse): QuerySpotMidPriceAndTOBResponseProtoMsg;
};
export declare const QueryDerivativeMidPriceAndTOBRequest: {
    typeUrl: string;
    encode(message: QueryDerivativeMidPriceAndTOBRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryDerivativeMidPriceAndTOBRequest;
    fromPartial(object: Partial<QueryDerivativeMidPriceAndTOBRequest>): QueryDerivativeMidPriceAndTOBRequest;
    fromAmino(object: QueryDerivativeMidPriceAndTOBRequestAmino): QueryDerivativeMidPriceAndTOBRequest;
    toAmino(message: QueryDerivativeMidPriceAndTOBRequest): QueryDerivativeMidPriceAndTOBRequestAmino;
    fromAminoMsg(object: QueryDerivativeMidPriceAndTOBRequestAminoMsg): QueryDerivativeMidPriceAndTOBRequest;
    fromProtoMsg(message: QueryDerivativeMidPriceAndTOBRequestProtoMsg): QueryDerivativeMidPriceAndTOBRequest;
    toProto(message: QueryDerivativeMidPriceAndTOBRequest): Uint8Array;
    toProtoMsg(message: QueryDerivativeMidPriceAndTOBRequest): QueryDerivativeMidPriceAndTOBRequestProtoMsg;
};
export declare const QueryDerivativeMidPriceAndTOBResponse: {
    typeUrl: string;
    encode(message: QueryDerivativeMidPriceAndTOBResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryDerivativeMidPriceAndTOBResponse;
    fromPartial(object: Partial<QueryDerivativeMidPriceAndTOBResponse>): QueryDerivativeMidPriceAndTOBResponse;
    fromAmino(object: QueryDerivativeMidPriceAndTOBResponseAmino): QueryDerivativeMidPriceAndTOBResponse;
    toAmino(message: QueryDerivativeMidPriceAndTOBResponse): QueryDerivativeMidPriceAndTOBResponseAmino;
    fromAminoMsg(object: QueryDerivativeMidPriceAndTOBResponseAminoMsg): QueryDerivativeMidPriceAndTOBResponse;
    fromProtoMsg(message: QueryDerivativeMidPriceAndTOBResponseProtoMsg): QueryDerivativeMidPriceAndTOBResponse;
    toProto(message: QueryDerivativeMidPriceAndTOBResponse): Uint8Array;
    toProtoMsg(message: QueryDerivativeMidPriceAndTOBResponse): QueryDerivativeMidPriceAndTOBResponseProtoMsg;
};
export declare const QueryDerivativeOrderbookRequest: {
    typeUrl: string;
    encode(message: QueryDerivativeOrderbookRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryDerivativeOrderbookRequest;
    fromPartial(object: Partial<QueryDerivativeOrderbookRequest>): QueryDerivativeOrderbookRequest;
    fromAmino(object: QueryDerivativeOrderbookRequestAmino): QueryDerivativeOrderbookRequest;
    toAmino(message: QueryDerivativeOrderbookRequest): QueryDerivativeOrderbookRequestAmino;
    fromAminoMsg(object: QueryDerivativeOrderbookRequestAminoMsg): QueryDerivativeOrderbookRequest;
    fromProtoMsg(message: QueryDerivativeOrderbookRequestProtoMsg): QueryDerivativeOrderbookRequest;
    toProto(message: QueryDerivativeOrderbookRequest): Uint8Array;
    toProtoMsg(message: QueryDerivativeOrderbookRequest): QueryDerivativeOrderbookRequestProtoMsg;
};
export declare const QueryDerivativeOrderbookResponse: {
    typeUrl: string;
    encode(message: QueryDerivativeOrderbookResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryDerivativeOrderbookResponse;
    fromPartial(object: Partial<QueryDerivativeOrderbookResponse>): QueryDerivativeOrderbookResponse;
    fromAmino(object: QueryDerivativeOrderbookResponseAmino): QueryDerivativeOrderbookResponse;
    toAmino(message: QueryDerivativeOrderbookResponse): QueryDerivativeOrderbookResponseAmino;
    fromAminoMsg(object: QueryDerivativeOrderbookResponseAminoMsg): QueryDerivativeOrderbookResponse;
    fromProtoMsg(message: QueryDerivativeOrderbookResponseProtoMsg): QueryDerivativeOrderbookResponse;
    toProto(message: QueryDerivativeOrderbookResponse): Uint8Array;
    toProtoMsg(message: QueryDerivativeOrderbookResponse): QueryDerivativeOrderbookResponseProtoMsg;
};
export declare const QueryTraderSpotOrdersToCancelUpToAmountRequest: {
    typeUrl: string;
    encode(message: QueryTraderSpotOrdersToCancelUpToAmountRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryTraderSpotOrdersToCancelUpToAmountRequest;
    fromPartial(object: Partial<QueryTraderSpotOrdersToCancelUpToAmountRequest>): QueryTraderSpotOrdersToCancelUpToAmountRequest;
    fromAmino(object: QueryTraderSpotOrdersToCancelUpToAmountRequestAmino): QueryTraderSpotOrdersToCancelUpToAmountRequest;
    toAmino(message: QueryTraderSpotOrdersToCancelUpToAmountRequest): QueryTraderSpotOrdersToCancelUpToAmountRequestAmino;
    fromAminoMsg(object: QueryTraderSpotOrdersToCancelUpToAmountRequestAminoMsg): QueryTraderSpotOrdersToCancelUpToAmountRequest;
    fromProtoMsg(message: QueryTraderSpotOrdersToCancelUpToAmountRequestProtoMsg): QueryTraderSpotOrdersToCancelUpToAmountRequest;
    toProto(message: QueryTraderSpotOrdersToCancelUpToAmountRequest): Uint8Array;
    toProtoMsg(message: QueryTraderSpotOrdersToCancelUpToAmountRequest): QueryTraderSpotOrdersToCancelUpToAmountRequestProtoMsg;
};
export declare const QueryTraderDerivativeOrdersToCancelUpToAmountRequest: {
    typeUrl: string;
    encode(message: QueryTraderDerivativeOrdersToCancelUpToAmountRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryTraderDerivativeOrdersToCancelUpToAmountRequest;
    fromPartial(object: Partial<QueryTraderDerivativeOrdersToCancelUpToAmountRequest>): QueryTraderDerivativeOrdersToCancelUpToAmountRequest;
    fromAmino(object: QueryTraderDerivativeOrdersToCancelUpToAmountRequestAmino): QueryTraderDerivativeOrdersToCancelUpToAmountRequest;
    toAmino(message: QueryTraderDerivativeOrdersToCancelUpToAmountRequest): QueryTraderDerivativeOrdersToCancelUpToAmountRequestAmino;
    fromAminoMsg(object: QueryTraderDerivativeOrdersToCancelUpToAmountRequestAminoMsg): QueryTraderDerivativeOrdersToCancelUpToAmountRequest;
    fromProtoMsg(message: QueryTraderDerivativeOrdersToCancelUpToAmountRequestProtoMsg): QueryTraderDerivativeOrdersToCancelUpToAmountRequest;
    toProto(message: QueryTraderDerivativeOrdersToCancelUpToAmountRequest): Uint8Array;
    toProtoMsg(message: QueryTraderDerivativeOrdersToCancelUpToAmountRequest): QueryTraderDerivativeOrdersToCancelUpToAmountRequestProtoMsg;
};
export declare const QueryTraderDerivativeOrdersRequest: {
    typeUrl: string;
    encode(message: QueryTraderDerivativeOrdersRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryTraderDerivativeOrdersRequest;
    fromPartial(object: Partial<QueryTraderDerivativeOrdersRequest>): QueryTraderDerivativeOrdersRequest;
    fromAmino(object: QueryTraderDerivativeOrdersRequestAmino): QueryTraderDerivativeOrdersRequest;
    toAmino(message: QueryTraderDerivativeOrdersRequest): QueryTraderDerivativeOrdersRequestAmino;
    fromAminoMsg(object: QueryTraderDerivativeOrdersRequestAminoMsg): QueryTraderDerivativeOrdersRequest;
    fromProtoMsg(message: QueryTraderDerivativeOrdersRequestProtoMsg): QueryTraderDerivativeOrdersRequest;
    toProto(message: QueryTraderDerivativeOrdersRequest): Uint8Array;
    toProtoMsg(message: QueryTraderDerivativeOrdersRequest): QueryTraderDerivativeOrdersRequestProtoMsg;
};
export declare const QueryAccountAddressDerivativeOrdersRequest: {
    typeUrl: string;
    encode(message: QueryAccountAddressDerivativeOrdersRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAccountAddressDerivativeOrdersRequest;
    fromPartial(object: Partial<QueryAccountAddressDerivativeOrdersRequest>): QueryAccountAddressDerivativeOrdersRequest;
    fromAmino(object: QueryAccountAddressDerivativeOrdersRequestAmino): QueryAccountAddressDerivativeOrdersRequest;
    toAmino(message: QueryAccountAddressDerivativeOrdersRequest): QueryAccountAddressDerivativeOrdersRequestAmino;
    fromAminoMsg(object: QueryAccountAddressDerivativeOrdersRequestAminoMsg): QueryAccountAddressDerivativeOrdersRequest;
    fromProtoMsg(message: QueryAccountAddressDerivativeOrdersRequestProtoMsg): QueryAccountAddressDerivativeOrdersRequest;
    toProto(message: QueryAccountAddressDerivativeOrdersRequest): Uint8Array;
    toProtoMsg(message: QueryAccountAddressDerivativeOrdersRequest): QueryAccountAddressDerivativeOrdersRequestProtoMsg;
};
export declare const TrimmedDerivativeLimitOrder: {
    typeUrl: string;
    encode(message: TrimmedDerivativeLimitOrder, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): TrimmedDerivativeLimitOrder;
    fromPartial(object: Partial<TrimmedDerivativeLimitOrder>): TrimmedDerivativeLimitOrder;
    fromAmino(object: TrimmedDerivativeLimitOrderAmino): TrimmedDerivativeLimitOrder;
    toAmino(message: TrimmedDerivativeLimitOrder): TrimmedDerivativeLimitOrderAmino;
    fromAminoMsg(object: TrimmedDerivativeLimitOrderAminoMsg): TrimmedDerivativeLimitOrder;
    fromProtoMsg(message: TrimmedDerivativeLimitOrderProtoMsg): TrimmedDerivativeLimitOrder;
    toProto(message: TrimmedDerivativeLimitOrder): Uint8Array;
    toProtoMsg(message: TrimmedDerivativeLimitOrder): TrimmedDerivativeLimitOrderProtoMsg;
};
export declare const QueryTraderDerivativeOrdersResponse: {
    typeUrl: string;
    encode(message: QueryTraderDerivativeOrdersResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryTraderDerivativeOrdersResponse;
    fromPartial(object: Partial<QueryTraderDerivativeOrdersResponse>): QueryTraderDerivativeOrdersResponse;
    fromAmino(object: QueryTraderDerivativeOrdersResponseAmino): QueryTraderDerivativeOrdersResponse;
    toAmino(message: QueryTraderDerivativeOrdersResponse): QueryTraderDerivativeOrdersResponseAmino;
    fromAminoMsg(object: QueryTraderDerivativeOrdersResponseAminoMsg): QueryTraderDerivativeOrdersResponse;
    fromProtoMsg(message: QueryTraderDerivativeOrdersResponseProtoMsg): QueryTraderDerivativeOrdersResponse;
    toProto(message: QueryTraderDerivativeOrdersResponse): Uint8Array;
    toProtoMsg(message: QueryTraderDerivativeOrdersResponse): QueryTraderDerivativeOrdersResponseProtoMsg;
};
export declare const QueryAccountAddressDerivativeOrdersResponse: {
    typeUrl: string;
    encode(message: QueryAccountAddressDerivativeOrdersResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAccountAddressDerivativeOrdersResponse;
    fromPartial(object: Partial<QueryAccountAddressDerivativeOrdersResponse>): QueryAccountAddressDerivativeOrdersResponse;
    fromAmino(object: QueryAccountAddressDerivativeOrdersResponseAmino): QueryAccountAddressDerivativeOrdersResponse;
    toAmino(message: QueryAccountAddressDerivativeOrdersResponse): QueryAccountAddressDerivativeOrdersResponseAmino;
    fromAminoMsg(object: QueryAccountAddressDerivativeOrdersResponseAminoMsg): QueryAccountAddressDerivativeOrdersResponse;
    fromProtoMsg(message: QueryAccountAddressDerivativeOrdersResponseProtoMsg): QueryAccountAddressDerivativeOrdersResponse;
    toProto(message: QueryAccountAddressDerivativeOrdersResponse): Uint8Array;
    toProtoMsg(message: QueryAccountAddressDerivativeOrdersResponse): QueryAccountAddressDerivativeOrdersResponseProtoMsg;
};
export declare const QueryDerivativeOrdersByHashesRequest: {
    typeUrl: string;
    encode(message: QueryDerivativeOrdersByHashesRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryDerivativeOrdersByHashesRequest;
    fromPartial(object: Partial<QueryDerivativeOrdersByHashesRequest>): QueryDerivativeOrdersByHashesRequest;
    fromAmino(object: QueryDerivativeOrdersByHashesRequestAmino): QueryDerivativeOrdersByHashesRequest;
    toAmino(message: QueryDerivativeOrdersByHashesRequest): QueryDerivativeOrdersByHashesRequestAmino;
    fromAminoMsg(object: QueryDerivativeOrdersByHashesRequestAminoMsg): QueryDerivativeOrdersByHashesRequest;
    fromProtoMsg(message: QueryDerivativeOrdersByHashesRequestProtoMsg): QueryDerivativeOrdersByHashesRequest;
    toProto(message: QueryDerivativeOrdersByHashesRequest): Uint8Array;
    toProtoMsg(message: QueryDerivativeOrdersByHashesRequest): QueryDerivativeOrdersByHashesRequestProtoMsg;
};
export declare const QueryDerivativeOrdersByHashesResponse: {
    typeUrl: string;
    encode(message: QueryDerivativeOrdersByHashesResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryDerivativeOrdersByHashesResponse;
    fromPartial(object: Partial<QueryDerivativeOrdersByHashesResponse>): QueryDerivativeOrdersByHashesResponse;
    fromAmino(object: QueryDerivativeOrdersByHashesResponseAmino): QueryDerivativeOrdersByHashesResponse;
    toAmino(message: QueryDerivativeOrdersByHashesResponse): QueryDerivativeOrdersByHashesResponseAmino;
    fromAminoMsg(object: QueryDerivativeOrdersByHashesResponseAminoMsg): QueryDerivativeOrdersByHashesResponse;
    fromProtoMsg(message: QueryDerivativeOrdersByHashesResponseProtoMsg): QueryDerivativeOrdersByHashesResponse;
    toProto(message: QueryDerivativeOrdersByHashesResponse): Uint8Array;
    toProtoMsg(message: QueryDerivativeOrdersByHashesResponse): QueryDerivativeOrdersByHashesResponseProtoMsg;
};
export declare const QueryDerivativeMarketsRequest: {
    typeUrl: string;
    encode(message: QueryDerivativeMarketsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryDerivativeMarketsRequest;
    fromPartial(object: Partial<QueryDerivativeMarketsRequest>): QueryDerivativeMarketsRequest;
    fromAmino(object: QueryDerivativeMarketsRequestAmino): QueryDerivativeMarketsRequest;
    toAmino(message: QueryDerivativeMarketsRequest): QueryDerivativeMarketsRequestAmino;
    fromAminoMsg(object: QueryDerivativeMarketsRequestAminoMsg): QueryDerivativeMarketsRequest;
    fromProtoMsg(message: QueryDerivativeMarketsRequestProtoMsg): QueryDerivativeMarketsRequest;
    toProto(message: QueryDerivativeMarketsRequest): Uint8Array;
    toProtoMsg(message: QueryDerivativeMarketsRequest): QueryDerivativeMarketsRequestProtoMsg;
};
export declare const PriceLevel: {
    typeUrl: string;
    encode(message: PriceLevel, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): PriceLevel;
    fromPartial(object: Partial<PriceLevel>): PriceLevel;
    fromAmino(object: PriceLevelAmino): PriceLevel;
    toAmino(message: PriceLevel): PriceLevelAmino;
    fromAminoMsg(object: PriceLevelAminoMsg): PriceLevel;
    fromProtoMsg(message: PriceLevelProtoMsg): PriceLevel;
    toProto(message: PriceLevel): Uint8Array;
    toProtoMsg(message: PriceLevel): PriceLevelProtoMsg;
};
export declare const PerpetualMarketState: {
    typeUrl: string;
    encode(message: PerpetualMarketState, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): PerpetualMarketState;
    fromPartial(object: Partial<PerpetualMarketState>): PerpetualMarketState;
    fromAmino(object: PerpetualMarketStateAmino): PerpetualMarketState;
    toAmino(message: PerpetualMarketState): PerpetualMarketStateAmino;
    fromAminoMsg(object: PerpetualMarketStateAminoMsg): PerpetualMarketState;
    fromProtoMsg(message: PerpetualMarketStateProtoMsg): PerpetualMarketState;
    toProto(message: PerpetualMarketState): Uint8Array;
    toProtoMsg(message: PerpetualMarketState): PerpetualMarketStateProtoMsg;
};
export declare const FullDerivativeMarket: {
    typeUrl: string;
    encode(message: FullDerivativeMarket, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): FullDerivativeMarket;
    fromPartial(object: Partial<FullDerivativeMarket>): FullDerivativeMarket;
    fromAmino(object: FullDerivativeMarketAmino): FullDerivativeMarket;
    toAmino(message: FullDerivativeMarket): FullDerivativeMarketAmino;
    fromAminoMsg(object: FullDerivativeMarketAminoMsg): FullDerivativeMarket;
    fromProtoMsg(message: FullDerivativeMarketProtoMsg): FullDerivativeMarket;
    toProto(message: FullDerivativeMarket): Uint8Array;
    toProtoMsg(message: FullDerivativeMarket): FullDerivativeMarketProtoMsg;
};
export declare const QueryDerivativeMarketsResponse: {
    typeUrl: string;
    encode(message: QueryDerivativeMarketsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryDerivativeMarketsResponse;
    fromPartial(object: Partial<QueryDerivativeMarketsResponse>): QueryDerivativeMarketsResponse;
    fromAmino(object: QueryDerivativeMarketsResponseAmino): QueryDerivativeMarketsResponse;
    toAmino(message: QueryDerivativeMarketsResponse): QueryDerivativeMarketsResponseAmino;
    fromAminoMsg(object: QueryDerivativeMarketsResponseAminoMsg): QueryDerivativeMarketsResponse;
    fromProtoMsg(message: QueryDerivativeMarketsResponseProtoMsg): QueryDerivativeMarketsResponse;
    toProto(message: QueryDerivativeMarketsResponse): Uint8Array;
    toProtoMsg(message: QueryDerivativeMarketsResponse): QueryDerivativeMarketsResponseProtoMsg;
};
export declare const QueryDerivativeMarketRequest: {
    typeUrl: string;
    encode(message: QueryDerivativeMarketRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryDerivativeMarketRequest;
    fromPartial(object: Partial<QueryDerivativeMarketRequest>): QueryDerivativeMarketRequest;
    fromAmino(object: QueryDerivativeMarketRequestAmino): QueryDerivativeMarketRequest;
    toAmino(message: QueryDerivativeMarketRequest): QueryDerivativeMarketRequestAmino;
    fromAminoMsg(object: QueryDerivativeMarketRequestAminoMsg): QueryDerivativeMarketRequest;
    fromProtoMsg(message: QueryDerivativeMarketRequestProtoMsg): QueryDerivativeMarketRequest;
    toProto(message: QueryDerivativeMarketRequest): Uint8Array;
    toProtoMsg(message: QueryDerivativeMarketRequest): QueryDerivativeMarketRequestProtoMsg;
};
export declare const QueryDerivativeMarketResponse: {
    typeUrl: string;
    encode(message: QueryDerivativeMarketResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryDerivativeMarketResponse;
    fromPartial(object: Partial<QueryDerivativeMarketResponse>): QueryDerivativeMarketResponse;
    fromAmino(object: QueryDerivativeMarketResponseAmino): QueryDerivativeMarketResponse;
    toAmino(message: QueryDerivativeMarketResponse): QueryDerivativeMarketResponseAmino;
    fromAminoMsg(object: QueryDerivativeMarketResponseAminoMsg): QueryDerivativeMarketResponse;
    fromProtoMsg(message: QueryDerivativeMarketResponseProtoMsg): QueryDerivativeMarketResponse;
    toProto(message: QueryDerivativeMarketResponse): Uint8Array;
    toProtoMsg(message: QueryDerivativeMarketResponse): QueryDerivativeMarketResponseProtoMsg;
};
export declare const QueryDerivativeMarketAddressRequest: {
    typeUrl: string;
    encode(message: QueryDerivativeMarketAddressRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryDerivativeMarketAddressRequest;
    fromPartial(object: Partial<QueryDerivativeMarketAddressRequest>): QueryDerivativeMarketAddressRequest;
    fromAmino(object: QueryDerivativeMarketAddressRequestAmino): QueryDerivativeMarketAddressRequest;
    toAmino(message: QueryDerivativeMarketAddressRequest): QueryDerivativeMarketAddressRequestAmino;
    fromAminoMsg(object: QueryDerivativeMarketAddressRequestAminoMsg): QueryDerivativeMarketAddressRequest;
    fromProtoMsg(message: QueryDerivativeMarketAddressRequestProtoMsg): QueryDerivativeMarketAddressRequest;
    toProto(message: QueryDerivativeMarketAddressRequest): Uint8Array;
    toProtoMsg(message: QueryDerivativeMarketAddressRequest): QueryDerivativeMarketAddressRequestProtoMsg;
};
export declare const QueryDerivativeMarketAddressResponse: {
    typeUrl: string;
    encode(message: QueryDerivativeMarketAddressResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryDerivativeMarketAddressResponse;
    fromPartial(object: Partial<QueryDerivativeMarketAddressResponse>): QueryDerivativeMarketAddressResponse;
    fromAmino(object: QueryDerivativeMarketAddressResponseAmino): QueryDerivativeMarketAddressResponse;
    toAmino(message: QueryDerivativeMarketAddressResponse): QueryDerivativeMarketAddressResponseAmino;
    fromAminoMsg(object: QueryDerivativeMarketAddressResponseAminoMsg): QueryDerivativeMarketAddressResponse;
    fromProtoMsg(message: QueryDerivativeMarketAddressResponseProtoMsg): QueryDerivativeMarketAddressResponse;
    toProto(message: QueryDerivativeMarketAddressResponse): Uint8Array;
    toProtoMsg(message: QueryDerivativeMarketAddressResponse): QueryDerivativeMarketAddressResponseProtoMsg;
};
export declare const QuerySubaccountTradeNonceRequest: {
    typeUrl: string;
    encode(message: QuerySubaccountTradeNonceRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QuerySubaccountTradeNonceRequest;
    fromPartial(object: Partial<QuerySubaccountTradeNonceRequest>): QuerySubaccountTradeNonceRequest;
    fromAmino(object: QuerySubaccountTradeNonceRequestAmino): QuerySubaccountTradeNonceRequest;
    toAmino(message: QuerySubaccountTradeNonceRequest): QuerySubaccountTradeNonceRequestAmino;
    fromAminoMsg(object: QuerySubaccountTradeNonceRequestAminoMsg): QuerySubaccountTradeNonceRequest;
    fromProtoMsg(message: QuerySubaccountTradeNonceRequestProtoMsg): QuerySubaccountTradeNonceRequest;
    toProto(message: QuerySubaccountTradeNonceRequest): Uint8Array;
    toProtoMsg(message: QuerySubaccountTradeNonceRequest): QuerySubaccountTradeNonceRequestProtoMsg;
};
export declare const QuerySubaccountPositionsRequest: {
    typeUrl: string;
    encode(message: QuerySubaccountPositionsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QuerySubaccountPositionsRequest;
    fromPartial(object: Partial<QuerySubaccountPositionsRequest>): QuerySubaccountPositionsRequest;
    fromAmino(object: QuerySubaccountPositionsRequestAmino): QuerySubaccountPositionsRequest;
    toAmino(message: QuerySubaccountPositionsRequest): QuerySubaccountPositionsRequestAmino;
    fromAminoMsg(object: QuerySubaccountPositionsRequestAminoMsg): QuerySubaccountPositionsRequest;
    fromProtoMsg(message: QuerySubaccountPositionsRequestProtoMsg): QuerySubaccountPositionsRequest;
    toProto(message: QuerySubaccountPositionsRequest): Uint8Array;
    toProtoMsg(message: QuerySubaccountPositionsRequest): QuerySubaccountPositionsRequestProtoMsg;
};
export declare const QuerySubaccountPositionInMarketRequest: {
    typeUrl: string;
    encode(message: QuerySubaccountPositionInMarketRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QuerySubaccountPositionInMarketRequest;
    fromPartial(object: Partial<QuerySubaccountPositionInMarketRequest>): QuerySubaccountPositionInMarketRequest;
    fromAmino(object: QuerySubaccountPositionInMarketRequestAmino): QuerySubaccountPositionInMarketRequest;
    toAmino(message: QuerySubaccountPositionInMarketRequest): QuerySubaccountPositionInMarketRequestAmino;
    fromAminoMsg(object: QuerySubaccountPositionInMarketRequestAminoMsg): QuerySubaccountPositionInMarketRequest;
    fromProtoMsg(message: QuerySubaccountPositionInMarketRequestProtoMsg): QuerySubaccountPositionInMarketRequest;
    toProto(message: QuerySubaccountPositionInMarketRequest): Uint8Array;
    toProtoMsg(message: QuerySubaccountPositionInMarketRequest): QuerySubaccountPositionInMarketRequestProtoMsg;
};
export declare const QuerySubaccountEffectivePositionInMarketRequest: {
    typeUrl: string;
    encode(message: QuerySubaccountEffectivePositionInMarketRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QuerySubaccountEffectivePositionInMarketRequest;
    fromPartial(object: Partial<QuerySubaccountEffectivePositionInMarketRequest>): QuerySubaccountEffectivePositionInMarketRequest;
    fromAmino(object: QuerySubaccountEffectivePositionInMarketRequestAmino): QuerySubaccountEffectivePositionInMarketRequest;
    toAmino(message: QuerySubaccountEffectivePositionInMarketRequest): QuerySubaccountEffectivePositionInMarketRequestAmino;
    fromAminoMsg(object: QuerySubaccountEffectivePositionInMarketRequestAminoMsg): QuerySubaccountEffectivePositionInMarketRequest;
    fromProtoMsg(message: QuerySubaccountEffectivePositionInMarketRequestProtoMsg): QuerySubaccountEffectivePositionInMarketRequest;
    toProto(message: QuerySubaccountEffectivePositionInMarketRequest): Uint8Array;
    toProtoMsg(message: QuerySubaccountEffectivePositionInMarketRequest): QuerySubaccountEffectivePositionInMarketRequestProtoMsg;
};
export declare const QuerySubaccountOrderMetadataRequest: {
    typeUrl: string;
    encode(message: QuerySubaccountOrderMetadataRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QuerySubaccountOrderMetadataRequest;
    fromPartial(object: Partial<QuerySubaccountOrderMetadataRequest>): QuerySubaccountOrderMetadataRequest;
    fromAmino(object: QuerySubaccountOrderMetadataRequestAmino): QuerySubaccountOrderMetadataRequest;
    toAmino(message: QuerySubaccountOrderMetadataRequest): QuerySubaccountOrderMetadataRequestAmino;
    fromAminoMsg(object: QuerySubaccountOrderMetadataRequestAminoMsg): QuerySubaccountOrderMetadataRequest;
    fromProtoMsg(message: QuerySubaccountOrderMetadataRequestProtoMsg): QuerySubaccountOrderMetadataRequest;
    toProto(message: QuerySubaccountOrderMetadataRequest): Uint8Array;
    toProtoMsg(message: QuerySubaccountOrderMetadataRequest): QuerySubaccountOrderMetadataRequestProtoMsg;
};
export declare const QuerySubaccountPositionsResponse: {
    typeUrl: string;
    encode(message: QuerySubaccountPositionsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QuerySubaccountPositionsResponse;
    fromPartial(object: Partial<QuerySubaccountPositionsResponse>): QuerySubaccountPositionsResponse;
    fromAmino(object: QuerySubaccountPositionsResponseAmino): QuerySubaccountPositionsResponse;
    toAmino(message: QuerySubaccountPositionsResponse): QuerySubaccountPositionsResponseAmino;
    fromAminoMsg(object: QuerySubaccountPositionsResponseAminoMsg): QuerySubaccountPositionsResponse;
    fromProtoMsg(message: QuerySubaccountPositionsResponseProtoMsg): QuerySubaccountPositionsResponse;
    toProto(message: QuerySubaccountPositionsResponse): Uint8Array;
    toProtoMsg(message: QuerySubaccountPositionsResponse): QuerySubaccountPositionsResponseProtoMsg;
};
export declare const QuerySubaccountPositionInMarketResponse: {
    typeUrl: string;
    encode(message: QuerySubaccountPositionInMarketResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QuerySubaccountPositionInMarketResponse;
    fromPartial(object: Partial<QuerySubaccountPositionInMarketResponse>): QuerySubaccountPositionInMarketResponse;
    fromAmino(object: QuerySubaccountPositionInMarketResponseAmino): QuerySubaccountPositionInMarketResponse;
    toAmino(message: QuerySubaccountPositionInMarketResponse): QuerySubaccountPositionInMarketResponseAmino;
    fromAminoMsg(object: QuerySubaccountPositionInMarketResponseAminoMsg): QuerySubaccountPositionInMarketResponse;
    fromProtoMsg(message: QuerySubaccountPositionInMarketResponseProtoMsg): QuerySubaccountPositionInMarketResponse;
    toProto(message: QuerySubaccountPositionInMarketResponse): Uint8Array;
    toProtoMsg(message: QuerySubaccountPositionInMarketResponse): QuerySubaccountPositionInMarketResponseProtoMsg;
};
export declare const EffectivePosition: {
    typeUrl: string;
    encode(message: EffectivePosition, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EffectivePosition;
    fromPartial(object: Partial<EffectivePosition>): EffectivePosition;
    fromAmino(object: EffectivePositionAmino): EffectivePosition;
    toAmino(message: EffectivePosition): EffectivePositionAmino;
    fromAminoMsg(object: EffectivePositionAminoMsg): EffectivePosition;
    fromProtoMsg(message: EffectivePositionProtoMsg): EffectivePosition;
    toProto(message: EffectivePosition): Uint8Array;
    toProtoMsg(message: EffectivePosition): EffectivePositionProtoMsg;
};
export declare const QuerySubaccountEffectivePositionInMarketResponse: {
    typeUrl: string;
    encode(message: QuerySubaccountEffectivePositionInMarketResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QuerySubaccountEffectivePositionInMarketResponse;
    fromPartial(object: Partial<QuerySubaccountEffectivePositionInMarketResponse>): QuerySubaccountEffectivePositionInMarketResponse;
    fromAmino(object: QuerySubaccountEffectivePositionInMarketResponseAmino): QuerySubaccountEffectivePositionInMarketResponse;
    toAmino(message: QuerySubaccountEffectivePositionInMarketResponse): QuerySubaccountEffectivePositionInMarketResponseAmino;
    fromAminoMsg(object: QuerySubaccountEffectivePositionInMarketResponseAminoMsg): QuerySubaccountEffectivePositionInMarketResponse;
    fromProtoMsg(message: QuerySubaccountEffectivePositionInMarketResponseProtoMsg): QuerySubaccountEffectivePositionInMarketResponse;
    toProto(message: QuerySubaccountEffectivePositionInMarketResponse): Uint8Array;
    toProtoMsg(message: QuerySubaccountEffectivePositionInMarketResponse): QuerySubaccountEffectivePositionInMarketResponseProtoMsg;
};
export declare const QueryPerpetualMarketInfoRequest: {
    typeUrl: string;
    encode(message: QueryPerpetualMarketInfoRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryPerpetualMarketInfoRequest;
    fromPartial(object: Partial<QueryPerpetualMarketInfoRequest>): QueryPerpetualMarketInfoRequest;
    fromAmino(object: QueryPerpetualMarketInfoRequestAmino): QueryPerpetualMarketInfoRequest;
    toAmino(message: QueryPerpetualMarketInfoRequest): QueryPerpetualMarketInfoRequestAmino;
    fromAminoMsg(object: QueryPerpetualMarketInfoRequestAminoMsg): QueryPerpetualMarketInfoRequest;
    fromProtoMsg(message: QueryPerpetualMarketInfoRequestProtoMsg): QueryPerpetualMarketInfoRequest;
    toProto(message: QueryPerpetualMarketInfoRequest): Uint8Array;
    toProtoMsg(message: QueryPerpetualMarketInfoRequest): QueryPerpetualMarketInfoRequestProtoMsg;
};
export declare const QueryPerpetualMarketInfoResponse: {
    typeUrl: string;
    encode(message: QueryPerpetualMarketInfoResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryPerpetualMarketInfoResponse;
    fromPartial(object: Partial<QueryPerpetualMarketInfoResponse>): QueryPerpetualMarketInfoResponse;
    fromAmino(object: QueryPerpetualMarketInfoResponseAmino): QueryPerpetualMarketInfoResponse;
    toAmino(message: QueryPerpetualMarketInfoResponse): QueryPerpetualMarketInfoResponseAmino;
    fromAminoMsg(object: QueryPerpetualMarketInfoResponseAminoMsg): QueryPerpetualMarketInfoResponse;
    fromProtoMsg(message: QueryPerpetualMarketInfoResponseProtoMsg): QueryPerpetualMarketInfoResponse;
    toProto(message: QueryPerpetualMarketInfoResponse): Uint8Array;
    toProtoMsg(message: QueryPerpetualMarketInfoResponse): QueryPerpetualMarketInfoResponseProtoMsg;
};
export declare const QueryExpiryFuturesMarketInfoRequest: {
    typeUrl: string;
    encode(message: QueryExpiryFuturesMarketInfoRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryExpiryFuturesMarketInfoRequest;
    fromPartial(object: Partial<QueryExpiryFuturesMarketInfoRequest>): QueryExpiryFuturesMarketInfoRequest;
    fromAmino(object: QueryExpiryFuturesMarketInfoRequestAmino): QueryExpiryFuturesMarketInfoRequest;
    toAmino(message: QueryExpiryFuturesMarketInfoRequest): QueryExpiryFuturesMarketInfoRequestAmino;
    fromAminoMsg(object: QueryExpiryFuturesMarketInfoRequestAminoMsg): QueryExpiryFuturesMarketInfoRequest;
    fromProtoMsg(message: QueryExpiryFuturesMarketInfoRequestProtoMsg): QueryExpiryFuturesMarketInfoRequest;
    toProto(message: QueryExpiryFuturesMarketInfoRequest): Uint8Array;
    toProtoMsg(message: QueryExpiryFuturesMarketInfoRequest): QueryExpiryFuturesMarketInfoRequestProtoMsg;
};
export declare const QueryExpiryFuturesMarketInfoResponse: {
    typeUrl: string;
    encode(message: QueryExpiryFuturesMarketInfoResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryExpiryFuturesMarketInfoResponse;
    fromPartial(object: Partial<QueryExpiryFuturesMarketInfoResponse>): QueryExpiryFuturesMarketInfoResponse;
    fromAmino(object: QueryExpiryFuturesMarketInfoResponseAmino): QueryExpiryFuturesMarketInfoResponse;
    toAmino(message: QueryExpiryFuturesMarketInfoResponse): QueryExpiryFuturesMarketInfoResponseAmino;
    fromAminoMsg(object: QueryExpiryFuturesMarketInfoResponseAminoMsg): QueryExpiryFuturesMarketInfoResponse;
    fromProtoMsg(message: QueryExpiryFuturesMarketInfoResponseProtoMsg): QueryExpiryFuturesMarketInfoResponse;
    toProto(message: QueryExpiryFuturesMarketInfoResponse): Uint8Array;
    toProtoMsg(message: QueryExpiryFuturesMarketInfoResponse): QueryExpiryFuturesMarketInfoResponseProtoMsg;
};
export declare const QueryPerpetualMarketFundingRequest: {
    typeUrl: string;
    encode(message: QueryPerpetualMarketFundingRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryPerpetualMarketFundingRequest;
    fromPartial(object: Partial<QueryPerpetualMarketFundingRequest>): QueryPerpetualMarketFundingRequest;
    fromAmino(object: QueryPerpetualMarketFundingRequestAmino): QueryPerpetualMarketFundingRequest;
    toAmino(message: QueryPerpetualMarketFundingRequest): QueryPerpetualMarketFundingRequestAmino;
    fromAminoMsg(object: QueryPerpetualMarketFundingRequestAminoMsg): QueryPerpetualMarketFundingRequest;
    fromProtoMsg(message: QueryPerpetualMarketFundingRequestProtoMsg): QueryPerpetualMarketFundingRequest;
    toProto(message: QueryPerpetualMarketFundingRequest): Uint8Array;
    toProtoMsg(message: QueryPerpetualMarketFundingRequest): QueryPerpetualMarketFundingRequestProtoMsg;
};
export declare const QueryPerpetualMarketFundingResponse: {
    typeUrl: string;
    encode(message: QueryPerpetualMarketFundingResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryPerpetualMarketFundingResponse;
    fromPartial(object: Partial<QueryPerpetualMarketFundingResponse>): QueryPerpetualMarketFundingResponse;
    fromAmino(object: QueryPerpetualMarketFundingResponseAmino): QueryPerpetualMarketFundingResponse;
    toAmino(message: QueryPerpetualMarketFundingResponse): QueryPerpetualMarketFundingResponseAmino;
    fromAminoMsg(object: QueryPerpetualMarketFundingResponseAminoMsg): QueryPerpetualMarketFundingResponse;
    fromProtoMsg(message: QueryPerpetualMarketFundingResponseProtoMsg): QueryPerpetualMarketFundingResponse;
    toProto(message: QueryPerpetualMarketFundingResponse): Uint8Array;
    toProtoMsg(message: QueryPerpetualMarketFundingResponse): QueryPerpetualMarketFundingResponseProtoMsg;
};
export declare const QuerySubaccountOrderMetadataResponse: {
    typeUrl: string;
    encode(message: QuerySubaccountOrderMetadataResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QuerySubaccountOrderMetadataResponse;
    fromPartial(object: Partial<QuerySubaccountOrderMetadataResponse>): QuerySubaccountOrderMetadataResponse;
    fromAmino(object: QuerySubaccountOrderMetadataResponseAmino): QuerySubaccountOrderMetadataResponse;
    toAmino(message: QuerySubaccountOrderMetadataResponse): QuerySubaccountOrderMetadataResponseAmino;
    fromAminoMsg(object: QuerySubaccountOrderMetadataResponseAminoMsg): QuerySubaccountOrderMetadataResponse;
    fromProtoMsg(message: QuerySubaccountOrderMetadataResponseProtoMsg): QuerySubaccountOrderMetadataResponse;
    toProto(message: QuerySubaccountOrderMetadataResponse): Uint8Array;
    toProtoMsg(message: QuerySubaccountOrderMetadataResponse): QuerySubaccountOrderMetadataResponseProtoMsg;
};
export declare const QuerySubaccountTradeNonceResponse: {
    typeUrl: string;
    encode(message: QuerySubaccountTradeNonceResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QuerySubaccountTradeNonceResponse;
    fromPartial(object: Partial<QuerySubaccountTradeNonceResponse>): QuerySubaccountTradeNonceResponse;
    fromAmino(object: QuerySubaccountTradeNonceResponseAmino): QuerySubaccountTradeNonceResponse;
    toAmino(message: QuerySubaccountTradeNonceResponse): QuerySubaccountTradeNonceResponseAmino;
    fromAminoMsg(object: QuerySubaccountTradeNonceResponseAminoMsg): QuerySubaccountTradeNonceResponse;
    fromProtoMsg(message: QuerySubaccountTradeNonceResponseProtoMsg): QuerySubaccountTradeNonceResponse;
    toProto(message: QuerySubaccountTradeNonceResponse): Uint8Array;
    toProtoMsg(message: QuerySubaccountTradeNonceResponse): QuerySubaccountTradeNonceResponseProtoMsg;
};
export declare const QueryModuleStateRequest: {
    typeUrl: string;
    encode(_: QueryModuleStateRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryModuleStateRequest;
    fromPartial(_: Partial<QueryModuleStateRequest>): QueryModuleStateRequest;
    fromAmino(_: QueryModuleStateRequestAmino): QueryModuleStateRequest;
    toAmino(_: QueryModuleStateRequest): QueryModuleStateRequestAmino;
    fromAminoMsg(object: QueryModuleStateRequestAminoMsg): QueryModuleStateRequest;
    fromProtoMsg(message: QueryModuleStateRequestProtoMsg): QueryModuleStateRequest;
    toProto(message: QueryModuleStateRequest): Uint8Array;
    toProtoMsg(message: QueryModuleStateRequest): QueryModuleStateRequestProtoMsg;
};
export declare const QueryModuleStateResponse: {
    typeUrl: string;
    encode(message: QueryModuleStateResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryModuleStateResponse;
    fromPartial(object: Partial<QueryModuleStateResponse>): QueryModuleStateResponse;
    fromAmino(object: QueryModuleStateResponseAmino): QueryModuleStateResponse;
    toAmino(message: QueryModuleStateResponse): QueryModuleStateResponseAmino;
    fromAminoMsg(object: QueryModuleStateResponseAminoMsg): QueryModuleStateResponse;
    fromProtoMsg(message: QueryModuleStateResponseProtoMsg): QueryModuleStateResponse;
    toProto(message: QueryModuleStateResponse): Uint8Array;
    toProtoMsg(message: QueryModuleStateResponse): QueryModuleStateResponseProtoMsg;
};
export declare const QueryPositionsRequest: {
    typeUrl: string;
    encode(_: QueryPositionsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryPositionsRequest;
    fromPartial(_: Partial<QueryPositionsRequest>): QueryPositionsRequest;
    fromAmino(_: QueryPositionsRequestAmino): QueryPositionsRequest;
    toAmino(_: QueryPositionsRequest): QueryPositionsRequestAmino;
    fromAminoMsg(object: QueryPositionsRequestAminoMsg): QueryPositionsRequest;
    fromProtoMsg(message: QueryPositionsRequestProtoMsg): QueryPositionsRequest;
    toProto(message: QueryPositionsRequest): Uint8Array;
    toProtoMsg(message: QueryPositionsRequest): QueryPositionsRequestProtoMsg;
};
export declare const QueryPositionsResponse: {
    typeUrl: string;
    encode(message: QueryPositionsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryPositionsResponse;
    fromPartial(object: Partial<QueryPositionsResponse>): QueryPositionsResponse;
    fromAmino(object: QueryPositionsResponseAmino): QueryPositionsResponse;
    toAmino(message: QueryPositionsResponse): QueryPositionsResponseAmino;
    fromAminoMsg(object: QueryPositionsResponseAminoMsg): QueryPositionsResponse;
    fromProtoMsg(message: QueryPositionsResponseProtoMsg): QueryPositionsResponse;
    toProto(message: QueryPositionsResponse): Uint8Array;
    toProtoMsg(message: QueryPositionsResponse): QueryPositionsResponseProtoMsg;
};
export declare const QueryTradeRewardPointsRequest: {
    typeUrl: string;
    encode(message: QueryTradeRewardPointsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryTradeRewardPointsRequest;
    fromPartial(object: Partial<QueryTradeRewardPointsRequest>): QueryTradeRewardPointsRequest;
    fromAmino(object: QueryTradeRewardPointsRequestAmino): QueryTradeRewardPointsRequest;
    toAmino(message: QueryTradeRewardPointsRequest): QueryTradeRewardPointsRequestAmino;
    fromAminoMsg(object: QueryTradeRewardPointsRequestAminoMsg): QueryTradeRewardPointsRequest;
    fromProtoMsg(message: QueryTradeRewardPointsRequestProtoMsg): QueryTradeRewardPointsRequest;
    toProto(message: QueryTradeRewardPointsRequest): Uint8Array;
    toProtoMsg(message: QueryTradeRewardPointsRequest): QueryTradeRewardPointsRequestProtoMsg;
};
export declare const QueryTradeRewardPointsResponse: {
    typeUrl: string;
    encode(message: QueryTradeRewardPointsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryTradeRewardPointsResponse;
    fromPartial(object: Partial<QueryTradeRewardPointsResponse>): QueryTradeRewardPointsResponse;
    fromAmino(object: QueryTradeRewardPointsResponseAmino): QueryTradeRewardPointsResponse;
    toAmino(message: QueryTradeRewardPointsResponse): QueryTradeRewardPointsResponseAmino;
    fromAminoMsg(object: QueryTradeRewardPointsResponseAminoMsg): QueryTradeRewardPointsResponse;
    fromProtoMsg(message: QueryTradeRewardPointsResponseProtoMsg): QueryTradeRewardPointsResponse;
    toProto(message: QueryTradeRewardPointsResponse): Uint8Array;
    toProtoMsg(message: QueryTradeRewardPointsResponse): QueryTradeRewardPointsResponseProtoMsg;
};
export declare const QueryTradeRewardCampaignRequest: {
    typeUrl: string;
    encode(_: QueryTradeRewardCampaignRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryTradeRewardCampaignRequest;
    fromPartial(_: Partial<QueryTradeRewardCampaignRequest>): QueryTradeRewardCampaignRequest;
    fromAmino(_: QueryTradeRewardCampaignRequestAmino): QueryTradeRewardCampaignRequest;
    toAmino(_: QueryTradeRewardCampaignRequest): QueryTradeRewardCampaignRequestAmino;
    fromAminoMsg(object: QueryTradeRewardCampaignRequestAminoMsg): QueryTradeRewardCampaignRequest;
    fromProtoMsg(message: QueryTradeRewardCampaignRequestProtoMsg): QueryTradeRewardCampaignRequest;
    toProto(message: QueryTradeRewardCampaignRequest): Uint8Array;
    toProtoMsg(message: QueryTradeRewardCampaignRequest): QueryTradeRewardCampaignRequestProtoMsg;
};
export declare const QueryTradeRewardCampaignResponse: {
    typeUrl: string;
    encode(message: QueryTradeRewardCampaignResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryTradeRewardCampaignResponse;
    fromPartial(object: Partial<QueryTradeRewardCampaignResponse>): QueryTradeRewardCampaignResponse;
    fromAmino(object: QueryTradeRewardCampaignResponseAmino): QueryTradeRewardCampaignResponse;
    toAmino(message: QueryTradeRewardCampaignResponse): QueryTradeRewardCampaignResponseAmino;
    fromAminoMsg(object: QueryTradeRewardCampaignResponseAminoMsg): QueryTradeRewardCampaignResponse;
    fromProtoMsg(message: QueryTradeRewardCampaignResponseProtoMsg): QueryTradeRewardCampaignResponse;
    toProto(message: QueryTradeRewardCampaignResponse): Uint8Array;
    toProtoMsg(message: QueryTradeRewardCampaignResponse): QueryTradeRewardCampaignResponseProtoMsg;
};
export declare const QueryIsOptedOutOfRewardsRequest: {
    typeUrl: string;
    encode(message: QueryIsOptedOutOfRewardsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryIsOptedOutOfRewardsRequest;
    fromPartial(object: Partial<QueryIsOptedOutOfRewardsRequest>): QueryIsOptedOutOfRewardsRequest;
    fromAmino(object: QueryIsOptedOutOfRewardsRequestAmino): QueryIsOptedOutOfRewardsRequest;
    toAmino(message: QueryIsOptedOutOfRewardsRequest): QueryIsOptedOutOfRewardsRequestAmino;
    fromAminoMsg(object: QueryIsOptedOutOfRewardsRequestAminoMsg): QueryIsOptedOutOfRewardsRequest;
    fromProtoMsg(message: QueryIsOptedOutOfRewardsRequestProtoMsg): QueryIsOptedOutOfRewardsRequest;
    toProto(message: QueryIsOptedOutOfRewardsRequest): Uint8Array;
    toProtoMsg(message: QueryIsOptedOutOfRewardsRequest): QueryIsOptedOutOfRewardsRequestProtoMsg;
};
export declare const QueryIsOptedOutOfRewardsResponse: {
    typeUrl: string;
    encode(message: QueryIsOptedOutOfRewardsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryIsOptedOutOfRewardsResponse;
    fromPartial(object: Partial<QueryIsOptedOutOfRewardsResponse>): QueryIsOptedOutOfRewardsResponse;
    fromAmino(object: QueryIsOptedOutOfRewardsResponseAmino): QueryIsOptedOutOfRewardsResponse;
    toAmino(message: QueryIsOptedOutOfRewardsResponse): QueryIsOptedOutOfRewardsResponseAmino;
    fromAminoMsg(object: QueryIsOptedOutOfRewardsResponseAminoMsg): QueryIsOptedOutOfRewardsResponse;
    fromProtoMsg(message: QueryIsOptedOutOfRewardsResponseProtoMsg): QueryIsOptedOutOfRewardsResponse;
    toProto(message: QueryIsOptedOutOfRewardsResponse): Uint8Array;
    toProtoMsg(message: QueryIsOptedOutOfRewardsResponse): QueryIsOptedOutOfRewardsResponseProtoMsg;
};
export declare const QueryOptedOutOfRewardsAccountsRequest: {
    typeUrl: string;
    encode(_: QueryOptedOutOfRewardsAccountsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryOptedOutOfRewardsAccountsRequest;
    fromPartial(_: Partial<QueryOptedOutOfRewardsAccountsRequest>): QueryOptedOutOfRewardsAccountsRequest;
    fromAmino(_: QueryOptedOutOfRewardsAccountsRequestAmino): QueryOptedOutOfRewardsAccountsRequest;
    toAmino(_: QueryOptedOutOfRewardsAccountsRequest): QueryOptedOutOfRewardsAccountsRequestAmino;
    fromAminoMsg(object: QueryOptedOutOfRewardsAccountsRequestAminoMsg): QueryOptedOutOfRewardsAccountsRequest;
    fromProtoMsg(message: QueryOptedOutOfRewardsAccountsRequestProtoMsg): QueryOptedOutOfRewardsAccountsRequest;
    toProto(message: QueryOptedOutOfRewardsAccountsRequest): Uint8Array;
    toProtoMsg(message: QueryOptedOutOfRewardsAccountsRequest): QueryOptedOutOfRewardsAccountsRequestProtoMsg;
};
export declare const QueryOptedOutOfRewardsAccountsResponse: {
    typeUrl: string;
    encode(message: QueryOptedOutOfRewardsAccountsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryOptedOutOfRewardsAccountsResponse;
    fromPartial(object: Partial<QueryOptedOutOfRewardsAccountsResponse>): QueryOptedOutOfRewardsAccountsResponse;
    fromAmino(object: QueryOptedOutOfRewardsAccountsResponseAmino): QueryOptedOutOfRewardsAccountsResponse;
    toAmino(message: QueryOptedOutOfRewardsAccountsResponse): QueryOptedOutOfRewardsAccountsResponseAmino;
    fromAminoMsg(object: QueryOptedOutOfRewardsAccountsResponseAminoMsg): QueryOptedOutOfRewardsAccountsResponse;
    fromProtoMsg(message: QueryOptedOutOfRewardsAccountsResponseProtoMsg): QueryOptedOutOfRewardsAccountsResponse;
    toProto(message: QueryOptedOutOfRewardsAccountsResponse): Uint8Array;
    toProtoMsg(message: QueryOptedOutOfRewardsAccountsResponse): QueryOptedOutOfRewardsAccountsResponseProtoMsg;
};
export declare const QueryFeeDiscountAccountInfoRequest: {
    typeUrl: string;
    encode(message: QueryFeeDiscountAccountInfoRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryFeeDiscountAccountInfoRequest;
    fromPartial(object: Partial<QueryFeeDiscountAccountInfoRequest>): QueryFeeDiscountAccountInfoRequest;
    fromAmino(object: QueryFeeDiscountAccountInfoRequestAmino): QueryFeeDiscountAccountInfoRequest;
    toAmino(message: QueryFeeDiscountAccountInfoRequest): QueryFeeDiscountAccountInfoRequestAmino;
    fromAminoMsg(object: QueryFeeDiscountAccountInfoRequestAminoMsg): QueryFeeDiscountAccountInfoRequest;
    fromProtoMsg(message: QueryFeeDiscountAccountInfoRequestProtoMsg): QueryFeeDiscountAccountInfoRequest;
    toProto(message: QueryFeeDiscountAccountInfoRequest): Uint8Array;
    toProtoMsg(message: QueryFeeDiscountAccountInfoRequest): QueryFeeDiscountAccountInfoRequestProtoMsg;
};
export declare const QueryFeeDiscountAccountInfoResponse: {
    typeUrl: string;
    encode(message: QueryFeeDiscountAccountInfoResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryFeeDiscountAccountInfoResponse;
    fromPartial(object: Partial<QueryFeeDiscountAccountInfoResponse>): QueryFeeDiscountAccountInfoResponse;
    fromAmino(object: QueryFeeDiscountAccountInfoResponseAmino): QueryFeeDiscountAccountInfoResponse;
    toAmino(message: QueryFeeDiscountAccountInfoResponse): QueryFeeDiscountAccountInfoResponseAmino;
    fromAminoMsg(object: QueryFeeDiscountAccountInfoResponseAminoMsg): QueryFeeDiscountAccountInfoResponse;
    fromProtoMsg(message: QueryFeeDiscountAccountInfoResponseProtoMsg): QueryFeeDiscountAccountInfoResponse;
    toProto(message: QueryFeeDiscountAccountInfoResponse): Uint8Array;
    toProtoMsg(message: QueryFeeDiscountAccountInfoResponse): QueryFeeDiscountAccountInfoResponseProtoMsg;
};
export declare const QueryFeeDiscountScheduleRequest: {
    typeUrl: string;
    encode(_: QueryFeeDiscountScheduleRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryFeeDiscountScheduleRequest;
    fromPartial(_: Partial<QueryFeeDiscountScheduleRequest>): QueryFeeDiscountScheduleRequest;
    fromAmino(_: QueryFeeDiscountScheduleRequestAmino): QueryFeeDiscountScheduleRequest;
    toAmino(_: QueryFeeDiscountScheduleRequest): QueryFeeDiscountScheduleRequestAmino;
    fromAminoMsg(object: QueryFeeDiscountScheduleRequestAminoMsg): QueryFeeDiscountScheduleRequest;
    fromProtoMsg(message: QueryFeeDiscountScheduleRequestProtoMsg): QueryFeeDiscountScheduleRequest;
    toProto(message: QueryFeeDiscountScheduleRequest): Uint8Array;
    toProtoMsg(message: QueryFeeDiscountScheduleRequest): QueryFeeDiscountScheduleRequestProtoMsg;
};
export declare const QueryFeeDiscountScheduleResponse: {
    typeUrl: string;
    encode(message: QueryFeeDiscountScheduleResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryFeeDiscountScheduleResponse;
    fromPartial(object: Partial<QueryFeeDiscountScheduleResponse>): QueryFeeDiscountScheduleResponse;
    fromAmino(object: QueryFeeDiscountScheduleResponseAmino): QueryFeeDiscountScheduleResponse;
    toAmino(message: QueryFeeDiscountScheduleResponse): QueryFeeDiscountScheduleResponseAmino;
    fromAminoMsg(object: QueryFeeDiscountScheduleResponseAminoMsg): QueryFeeDiscountScheduleResponse;
    fromProtoMsg(message: QueryFeeDiscountScheduleResponseProtoMsg): QueryFeeDiscountScheduleResponse;
    toProto(message: QueryFeeDiscountScheduleResponse): Uint8Array;
    toProtoMsg(message: QueryFeeDiscountScheduleResponse): QueryFeeDiscountScheduleResponseProtoMsg;
};
export declare const QueryBalanceMismatchesRequest: {
    typeUrl: string;
    encode(message: QueryBalanceMismatchesRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryBalanceMismatchesRequest;
    fromPartial(object: Partial<QueryBalanceMismatchesRequest>): QueryBalanceMismatchesRequest;
    fromAmino(object: QueryBalanceMismatchesRequestAmino): QueryBalanceMismatchesRequest;
    toAmino(message: QueryBalanceMismatchesRequest): QueryBalanceMismatchesRequestAmino;
    fromAminoMsg(object: QueryBalanceMismatchesRequestAminoMsg): QueryBalanceMismatchesRequest;
    fromProtoMsg(message: QueryBalanceMismatchesRequestProtoMsg): QueryBalanceMismatchesRequest;
    toProto(message: QueryBalanceMismatchesRequest): Uint8Array;
    toProtoMsg(message: QueryBalanceMismatchesRequest): QueryBalanceMismatchesRequestProtoMsg;
};
export declare const BalanceMismatch: {
    typeUrl: string;
    encode(message: BalanceMismatch, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): BalanceMismatch;
    fromPartial(object: Partial<BalanceMismatch>): BalanceMismatch;
    fromAmino(object: BalanceMismatchAmino): BalanceMismatch;
    toAmino(message: BalanceMismatch): BalanceMismatchAmino;
    fromAminoMsg(object: BalanceMismatchAminoMsg): BalanceMismatch;
    fromProtoMsg(message: BalanceMismatchProtoMsg): BalanceMismatch;
    toProto(message: BalanceMismatch): Uint8Array;
    toProtoMsg(message: BalanceMismatch): BalanceMismatchProtoMsg;
};
export declare const QueryBalanceMismatchesResponse: {
    typeUrl: string;
    encode(message: QueryBalanceMismatchesResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryBalanceMismatchesResponse;
    fromPartial(object: Partial<QueryBalanceMismatchesResponse>): QueryBalanceMismatchesResponse;
    fromAmino(object: QueryBalanceMismatchesResponseAmino): QueryBalanceMismatchesResponse;
    toAmino(message: QueryBalanceMismatchesResponse): QueryBalanceMismatchesResponseAmino;
    fromAminoMsg(object: QueryBalanceMismatchesResponseAminoMsg): QueryBalanceMismatchesResponse;
    fromProtoMsg(message: QueryBalanceMismatchesResponseProtoMsg): QueryBalanceMismatchesResponse;
    toProto(message: QueryBalanceMismatchesResponse): Uint8Array;
    toProtoMsg(message: QueryBalanceMismatchesResponse): QueryBalanceMismatchesResponseProtoMsg;
};
export declare const QueryBalanceWithBalanceHoldsRequest: {
    typeUrl: string;
    encode(_: QueryBalanceWithBalanceHoldsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryBalanceWithBalanceHoldsRequest;
    fromPartial(_: Partial<QueryBalanceWithBalanceHoldsRequest>): QueryBalanceWithBalanceHoldsRequest;
    fromAmino(_: QueryBalanceWithBalanceHoldsRequestAmino): QueryBalanceWithBalanceHoldsRequest;
    toAmino(_: QueryBalanceWithBalanceHoldsRequest): QueryBalanceWithBalanceHoldsRequestAmino;
    fromAminoMsg(object: QueryBalanceWithBalanceHoldsRequestAminoMsg): QueryBalanceWithBalanceHoldsRequest;
    fromProtoMsg(message: QueryBalanceWithBalanceHoldsRequestProtoMsg): QueryBalanceWithBalanceHoldsRequest;
    toProto(message: QueryBalanceWithBalanceHoldsRequest): Uint8Array;
    toProtoMsg(message: QueryBalanceWithBalanceHoldsRequest): QueryBalanceWithBalanceHoldsRequestProtoMsg;
};
export declare const BalanceWithMarginHold: {
    typeUrl: string;
    encode(message: BalanceWithMarginHold, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): BalanceWithMarginHold;
    fromPartial(object: Partial<BalanceWithMarginHold>): BalanceWithMarginHold;
    fromAmino(object: BalanceWithMarginHoldAmino): BalanceWithMarginHold;
    toAmino(message: BalanceWithMarginHold): BalanceWithMarginHoldAmino;
    fromAminoMsg(object: BalanceWithMarginHoldAminoMsg): BalanceWithMarginHold;
    fromProtoMsg(message: BalanceWithMarginHoldProtoMsg): BalanceWithMarginHold;
    toProto(message: BalanceWithMarginHold): Uint8Array;
    toProtoMsg(message: BalanceWithMarginHold): BalanceWithMarginHoldProtoMsg;
};
export declare const QueryBalanceWithBalanceHoldsResponse: {
    typeUrl: string;
    encode(message: QueryBalanceWithBalanceHoldsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryBalanceWithBalanceHoldsResponse;
    fromPartial(object: Partial<QueryBalanceWithBalanceHoldsResponse>): QueryBalanceWithBalanceHoldsResponse;
    fromAmino(object: QueryBalanceWithBalanceHoldsResponseAmino): QueryBalanceWithBalanceHoldsResponse;
    toAmino(message: QueryBalanceWithBalanceHoldsResponse): QueryBalanceWithBalanceHoldsResponseAmino;
    fromAminoMsg(object: QueryBalanceWithBalanceHoldsResponseAminoMsg): QueryBalanceWithBalanceHoldsResponse;
    fromProtoMsg(message: QueryBalanceWithBalanceHoldsResponseProtoMsg): QueryBalanceWithBalanceHoldsResponse;
    toProto(message: QueryBalanceWithBalanceHoldsResponse): Uint8Array;
    toProtoMsg(message: QueryBalanceWithBalanceHoldsResponse): QueryBalanceWithBalanceHoldsResponseProtoMsg;
};
export declare const QueryFeeDiscountTierStatisticsRequest: {
    typeUrl: string;
    encode(_: QueryFeeDiscountTierStatisticsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryFeeDiscountTierStatisticsRequest;
    fromPartial(_: Partial<QueryFeeDiscountTierStatisticsRequest>): QueryFeeDiscountTierStatisticsRequest;
    fromAmino(_: QueryFeeDiscountTierStatisticsRequestAmino): QueryFeeDiscountTierStatisticsRequest;
    toAmino(_: QueryFeeDiscountTierStatisticsRequest): QueryFeeDiscountTierStatisticsRequestAmino;
    fromAminoMsg(object: QueryFeeDiscountTierStatisticsRequestAminoMsg): QueryFeeDiscountTierStatisticsRequest;
    fromProtoMsg(message: QueryFeeDiscountTierStatisticsRequestProtoMsg): QueryFeeDiscountTierStatisticsRequest;
    toProto(message: QueryFeeDiscountTierStatisticsRequest): Uint8Array;
    toProtoMsg(message: QueryFeeDiscountTierStatisticsRequest): QueryFeeDiscountTierStatisticsRequestProtoMsg;
};
export declare const TierStatistic: {
    typeUrl: string;
    encode(message: TierStatistic, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): TierStatistic;
    fromPartial(object: Partial<TierStatistic>): TierStatistic;
    fromAmino(object: TierStatisticAmino): TierStatistic;
    toAmino(message: TierStatistic): TierStatisticAmino;
    fromAminoMsg(object: TierStatisticAminoMsg): TierStatistic;
    fromProtoMsg(message: TierStatisticProtoMsg): TierStatistic;
    toProto(message: TierStatistic): Uint8Array;
    toProtoMsg(message: TierStatistic): TierStatisticProtoMsg;
};
export declare const QueryFeeDiscountTierStatisticsResponse: {
    typeUrl: string;
    encode(message: QueryFeeDiscountTierStatisticsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryFeeDiscountTierStatisticsResponse;
    fromPartial(object: Partial<QueryFeeDiscountTierStatisticsResponse>): QueryFeeDiscountTierStatisticsResponse;
    fromAmino(object: QueryFeeDiscountTierStatisticsResponseAmino): QueryFeeDiscountTierStatisticsResponse;
    toAmino(message: QueryFeeDiscountTierStatisticsResponse): QueryFeeDiscountTierStatisticsResponseAmino;
    fromAminoMsg(object: QueryFeeDiscountTierStatisticsResponseAminoMsg): QueryFeeDiscountTierStatisticsResponse;
    fromProtoMsg(message: QueryFeeDiscountTierStatisticsResponseProtoMsg): QueryFeeDiscountTierStatisticsResponse;
    toProto(message: QueryFeeDiscountTierStatisticsResponse): Uint8Array;
    toProtoMsg(message: QueryFeeDiscountTierStatisticsResponse): QueryFeeDiscountTierStatisticsResponseProtoMsg;
};
export declare const MitoVaultInfosRequest: {
    typeUrl: string;
    encode(_: MitoVaultInfosRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MitoVaultInfosRequest;
    fromPartial(_: Partial<MitoVaultInfosRequest>): MitoVaultInfosRequest;
    fromAmino(_: MitoVaultInfosRequestAmino): MitoVaultInfosRequest;
    toAmino(_: MitoVaultInfosRequest): MitoVaultInfosRequestAmino;
    fromAminoMsg(object: MitoVaultInfosRequestAminoMsg): MitoVaultInfosRequest;
    fromProtoMsg(message: MitoVaultInfosRequestProtoMsg): MitoVaultInfosRequest;
    toProto(message: MitoVaultInfosRequest): Uint8Array;
    toProtoMsg(message: MitoVaultInfosRequest): MitoVaultInfosRequestProtoMsg;
};
export declare const MitoVaultInfosResponse: {
    typeUrl: string;
    encode(message: MitoVaultInfosResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MitoVaultInfosResponse;
    fromPartial(object: Partial<MitoVaultInfosResponse>): MitoVaultInfosResponse;
    fromAmino(object: MitoVaultInfosResponseAmino): MitoVaultInfosResponse;
    toAmino(message: MitoVaultInfosResponse): MitoVaultInfosResponseAmino;
    fromAminoMsg(object: MitoVaultInfosResponseAminoMsg): MitoVaultInfosResponse;
    fromProtoMsg(message: MitoVaultInfosResponseProtoMsg): MitoVaultInfosResponse;
    toProto(message: MitoVaultInfosResponse): Uint8Array;
    toProtoMsg(message: MitoVaultInfosResponse): MitoVaultInfosResponseProtoMsg;
};
export declare const QueryMarketIDFromVaultRequest: {
    typeUrl: string;
    encode(message: QueryMarketIDFromVaultRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryMarketIDFromVaultRequest;
    fromPartial(object: Partial<QueryMarketIDFromVaultRequest>): QueryMarketIDFromVaultRequest;
    fromAmino(object: QueryMarketIDFromVaultRequestAmino): QueryMarketIDFromVaultRequest;
    toAmino(message: QueryMarketIDFromVaultRequest): QueryMarketIDFromVaultRequestAmino;
    fromAminoMsg(object: QueryMarketIDFromVaultRequestAminoMsg): QueryMarketIDFromVaultRequest;
    fromProtoMsg(message: QueryMarketIDFromVaultRequestProtoMsg): QueryMarketIDFromVaultRequest;
    toProto(message: QueryMarketIDFromVaultRequest): Uint8Array;
    toProtoMsg(message: QueryMarketIDFromVaultRequest): QueryMarketIDFromVaultRequestProtoMsg;
};
export declare const QueryMarketIDFromVaultResponse: {
    typeUrl: string;
    encode(message: QueryMarketIDFromVaultResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryMarketIDFromVaultResponse;
    fromPartial(object: Partial<QueryMarketIDFromVaultResponse>): QueryMarketIDFromVaultResponse;
    fromAmino(object: QueryMarketIDFromVaultResponseAmino): QueryMarketIDFromVaultResponse;
    toAmino(message: QueryMarketIDFromVaultResponse): QueryMarketIDFromVaultResponseAmino;
    fromAminoMsg(object: QueryMarketIDFromVaultResponseAminoMsg): QueryMarketIDFromVaultResponse;
    fromProtoMsg(message: QueryMarketIDFromVaultResponseProtoMsg): QueryMarketIDFromVaultResponse;
    toProto(message: QueryMarketIDFromVaultResponse): Uint8Array;
    toProtoMsg(message: QueryMarketIDFromVaultResponse): QueryMarketIDFromVaultResponseProtoMsg;
};
export declare const QueryHistoricalTradeRecordsRequest: {
    typeUrl: string;
    encode(message: QueryHistoricalTradeRecordsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryHistoricalTradeRecordsRequest;
    fromPartial(object: Partial<QueryHistoricalTradeRecordsRequest>): QueryHistoricalTradeRecordsRequest;
    fromAmino(object: QueryHistoricalTradeRecordsRequestAmino): QueryHistoricalTradeRecordsRequest;
    toAmino(message: QueryHistoricalTradeRecordsRequest): QueryHistoricalTradeRecordsRequestAmino;
    fromAminoMsg(object: QueryHistoricalTradeRecordsRequestAminoMsg): QueryHistoricalTradeRecordsRequest;
    fromProtoMsg(message: QueryHistoricalTradeRecordsRequestProtoMsg): QueryHistoricalTradeRecordsRequest;
    toProto(message: QueryHistoricalTradeRecordsRequest): Uint8Array;
    toProtoMsg(message: QueryHistoricalTradeRecordsRequest): QueryHistoricalTradeRecordsRequestProtoMsg;
};
export declare const QueryHistoricalTradeRecordsResponse: {
    typeUrl: string;
    encode(message: QueryHistoricalTradeRecordsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryHistoricalTradeRecordsResponse;
    fromPartial(object: Partial<QueryHistoricalTradeRecordsResponse>): QueryHistoricalTradeRecordsResponse;
    fromAmino(object: QueryHistoricalTradeRecordsResponseAmino): QueryHistoricalTradeRecordsResponse;
    toAmino(message: QueryHistoricalTradeRecordsResponse): QueryHistoricalTradeRecordsResponseAmino;
    fromAminoMsg(object: QueryHistoricalTradeRecordsResponseAminoMsg): QueryHistoricalTradeRecordsResponse;
    fromProtoMsg(message: QueryHistoricalTradeRecordsResponseProtoMsg): QueryHistoricalTradeRecordsResponse;
    toProto(message: QueryHistoricalTradeRecordsResponse): Uint8Array;
    toProtoMsg(message: QueryHistoricalTradeRecordsResponse): QueryHistoricalTradeRecordsResponseProtoMsg;
};
export declare const TradeHistoryOptions: {
    typeUrl: string;
    encode(message: TradeHistoryOptions, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): TradeHistoryOptions;
    fromPartial(object: Partial<TradeHistoryOptions>): TradeHistoryOptions;
    fromAmino(object: TradeHistoryOptionsAmino): TradeHistoryOptions;
    toAmino(message: TradeHistoryOptions): TradeHistoryOptionsAmino;
    fromAminoMsg(object: TradeHistoryOptionsAminoMsg): TradeHistoryOptions;
    fromProtoMsg(message: TradeHistoryOptionsProtoMsg): TradeHistoryOptions;
    toProto(message: TradeHistoryOptions): Uint8Array;
    toProtoMsg(message: TradeHistoryOptions): TradeHistoryOptionsProtoMsg;
};
export declare const QueryMarketVolatilityRequest: {
    typeUrl: string;
    encode(message: QueryMarketVolatilityRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryMarketVolatilityRequest;
    fromPartial(object: Partial<QueryMarketVolatilityRequest>): QueryMarketVolatilityRequest;
    fromAmino(object: QueryMarketVolatilityRequestAmino): QueryMarketVolatilityRequest;
    toAmino(message: QueryMarketVolatilityRequest): QueryMarketVolatilityRequestAmino;
    fromAminoMsg(object: QueryMarketVolatilityRequestAminoMsg): QueryMarketVolatilityRequest;
    fromProtoMsg(message: QueryMarketVolatilityRequestProtoMsg): QueryMarketVolatilityRequest;
    toProto(message: QueryMarketVolatilityRequest): Uint8Array;
    toProtoMsg(message: QueryMarketVolatilityRequest): QueryMarketVolatilityRequestProtoMsg;
};
export declare const QueryMarketVolatilityResponse: {
    typeUrl: string;
    encode(message: QueryMarketVolatilityResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryMarketVolatilityResponse;
    fromPartial(object: Partial<QueryMarketVolatilityResponse>): QueryMarketVolatilityResponse;
    fromAmino(object: QueryMarketVolatilityResponseAmino): QueryMarketVolatilityResponse;
    toAmino(message: QueryMarketVolatilityResponse): QueryMarketVolatilityResponseAmino;
    fromAminoMsg(object: QueryMarketVolatilityResponseAminoMsg): QueryMarketVolatilityResponse;
    fromProtoMsg(message: QueryMarketVolatilityResponseProtoMsg): QueryMarketVolatilityResponse;
    toProto(message: QueryMarketVolatilityResponse): Uint8Array;
    toProtoMsg(message: QueryMarketVolatilityResponse): QueryMarketVolatilityResponseProtoMsg;
};
export declare const QueryBinaryMarketsRequest: {
    typeUrl: string;
    encode(message: QueryBinaryMarketsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryBinaryMarketsRequest;
    fromPartial(object: Partial<QueryBinaryMarketsRequest>): QueryBinaryMarketsRequest;
    fromAmino(object: QueryBinaryMarketsRequestAmino): QueryBinaryMarketsRequest;
    toAmino(message: QueryBinaryMarketsRequest): QueryBinaryMarketsRequestAmino;
    fromAminoMsg(object: QueryBinaryMarketsRequestAminoMsg): QueryBinaryMarketsRequest;
    fromProtoMsg(message: QueryBinaryMarketsRequestProtoMsg): QueryBinaryMarketsRequest;
    toProto(message: QueryBinaryMarketsRequest): Uint8Array;
    toProtoMsg(message: QueryBinaryMarketsRequest): QueryBinaryMarketsRequestProtoMsg;
};
export declare const QueryBinaryMarketsResponse: {
    typeUrl: string;
    encode(message: QueryBinaryMarketsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryBinaryMarketsResponse;
    fromPartial(object: Partial<QueryBinaryMarketsResponse>): QueryBinaryMarketsResponse;
    fromAmino(object: QueryBinaryMarketsResponseAmino): QueryBinaryMarketsResponse;
    toAmino(message: QueryBinaryMarketsResponse): QueryBinaryMarketsResponseAmino;
    fromAminoMsg(object: QueryBinaryMarketsResponseAminoMsg): QueryBinaryMarketsResponse;
    fromProtoMsg(message: QueryBinaryMarketsResponseProtoMsg): QueryBinaryMarketsResponse;
    toProto(message: QueryBinaryMarketsResponse): Uint8Array;
    toProtoMsg(message: QueryBinaryMarketsResponse): QueryBinaryMarketsResponseProtoMsg;
};
export declare const QueryTraderDerivativeConditionalOrdersRequest: {
    typeUrl: string;
    encode(message: QueryTraderDerivativeConditionalOrdersRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryTraderDerivativeConditionalOrdersRequest;
    fromPartial(object: Partial<QueryTraderDerivativeConditionalOrdersRequest>): QueryTraderDerivativeConditionalOrdersRequest;
    fromAmino(object: QueryTraderDerivativeConditionalOrdersRequestAmino): QueryTraderDerivativeConditionalOrdersRequest;
    toAmino(message: QueryTraderDerivativeConditionalOrdersRequest): QueryTraderDerivativeConditionalOrdersRequestAmino;
    fromAminoMsg(object: QueryTraderDerivativeConditionalOrdersRequestAminoMsg): QueryTraderDerivativeConditionalOrdersRequest;
    fromProtoMsg(message: QueryTraderDerivativeConditionalOrdersRequestProtoMsg): QueryTraderDerivativeConditionalOrdersRequest;
    toProto(message: QueryTraderDerivativeConditionalOrdersRequest): Uint8Array;
    toProtoMsg(message: QueryTraderDerivativeConditionalOrdersRequest): QueryTraderDerivativeConditionalOrdersRequestProtoMsg;
};
export declare const TrimmedDerivativeConditionalOrder: {
    typeUrl: string;
    encode(message: TrimmedDerivativeConditionalOrder, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): TrimmedDerivativeConditionalOrder;
    fromPartial(object: Partial<TrimmedDerivativeConditionalOrder>): TrimmedDerivativeConditionalOrder;
    fromAmino(object: TrimmedDerivativeConditionalOrderAmino): TrimmedDerivativeConditionalOrder;
    toAmino(message: TrimmedDerivativeConditionalOrder): TrimmedDerivativeConditionalOrderAmino;
    fromAminoMsg(object: TrimmedDerivativeConditionalOrderAminoMsg): TrimmedDerivativeConditionalOrder;
    fromProtoMsg(message: TrimmedDerivativeConditionalOrderProtoMsg): TrimmedDerivativeConditionalOrder;
    toProto(message: TrimmedDerivativeConditionalOrder): Uint8Array;
    toProtoMsg(message: TrimmedDerivativeConditionalOrder): TrimmedDerivativeConditionalOrderProtoMsg;
};
export declare const QueryTraderDerivativeConditionalOrdersResponse: {
    typeUrl: string;
    encode(message: QueryTraderDerivativeConditionalOrdersResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryTraderDerivativeConditionalOrdersResponse;
    fromPartial(object: Partial<QueryTraderDerivativeConditionalOrdersResponse>): QueryTraderDerivativeConditionalOrdersResponse;
    fromAmino(object: QueryTraderDerivativeConditionalOrdersResponseAmino): QueryTraderDerivativeConditionalOrdersResponse;
    toAmino(message: QueryTraderDerivativeConditionalOrdersResponse): QueryTraderDerivativeConditionalOrdersResponseAmino;
    fromAminoMsg(object: QueryTraderDerivativeConditionalOrdersResponseAminoMsg): QueryTraderDerivativeConditionalOrdersResponse;
    fromProtoMsg(message: QueryTraderDerivativeConditionalOrdersResponseProtoMsg): QueryTraderDerivativeConditionalOrdersResponse;
    toProto(message: QueryTraderDerivativeConditionalOrdersResponse): Uint8Array;
    toProtoMsg(message: QueryTraderDerivativeConditionalOrdersResponse): QueryTraderDerivativeConditionalOrdersResponseProtoMsg;
};
export declare const QueryMarketAtomicExecutionFeeMultiplierRequest: {
    typeUrl: string;
    encode(message: QueryMarketAtomicExecutionFeeMultiplierRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryMarketAtomicExecutionFeeMultiplierRequest;
    fromPartial(object: Partial<QueryMarketAtomicExecutionFeeMultiplierRequest>): QueryMarketAtomicExecutionFeeMultiplierRequest;
    fromAmino(object: QueryMarketAtomicExecutionFeeMultiplierRequestAmino): QueryMarketAtomicExecutionFeeMultiplierRequest;
    toAmino(message: QueryMarketAtomicExecutionFeeMultiplierRequest): QueryMarketAtomicExecutionFeeMultiplierRequestAmino;
    fromAminoMsg(object: QueryMarketAtomicExecutionFeeMultiplierRequestAminoMsg): QueryMarketAtomicExecutionFeeMultiplierRequest;
    fromProtoMsg(message: QueryMarketAtomicExecutionFeeMultiplierRequestProtoMsg): QueryMarketAtomicExecutionFeeMultiplierRequest;
    toProto(message: QueryMarketAtomicExecutionFeeMultiplierRequest): Uint8Array;
    toProtoMsg(message: QueryMarketAtomicExecutionFeeMultiplierRequest): QueryMarketAtomicExecutionFeeMultiplierRequestProtoMsg;
};
export declare const QueryMarketAtomicExecutionFeeMultiplierResponse: {
    typeUrl: string;
    encode(message: QueryMarketAtomicExecutionFeeMultiplierResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryMarketAtomicExecutionFeeMultiplierResponse;
    fromPartial(object: Partial<QueryMarketAtomicExecutionFeeMultiplierResponse>): QueryMarketAtomicExecutionFeeMultiplierResponse;
    fromAmino(object: QueryMarketAtomicExecutionFeeMultiplierResponseAmino): QueryMarketAtomicExecutionFeeMultiplierResponse;
    toAmino(message: QueryMarketAtomicExecutionFeeMultiplierResponse): QueryMarketAtomicExecutionFeeMultiplierResponseAmino;
    fromAminoMsg(object: QueryMarketAtomicExecutionFeeMultiplierResponseAminoMsg): QueryMarketAtomicExecutionFeeMultiplierResponse;
    fromProtoMsg(message: QueryMarketAtomicExecutionFeeMultiplierResponseProtoMsg): QueryMarketAtomicExecutionFeeMultiplierResponse;
    toProto(message: QueryMarketAtomicExecutionFeeMultiplierResponse): Uint8Array;
    toProtoMsg(message: QueryMarketAtomicExecutionFeeMultiplierResponse): QueryMarketAtomicExecutionFeeMultiplierResponseProtoMsg;
};
