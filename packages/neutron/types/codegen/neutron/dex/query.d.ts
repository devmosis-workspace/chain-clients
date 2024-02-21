import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { MultiHopRoute, MultiHopRouteAmino, MultiHopRouteSDKType, LimitOrderType } from "./tx";
import { Timestamp, TimestampSDKType } from "../../google/protobuf/timestamp";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { LimitOrderTrancheUser, LimitOrderTrancheUserAmino, LimitOrderTrancheUserSDKType } from "./limit_order_tranche_user";
import { LimitOrderTranche, LimitOrderTrancheAmino, LimitOrderTrancheSDKType } from "./limit_order_tranche";
import { DepositRecord, DepositRecordAmino, DepositRecordSDKType } from "./deposit_record";
import { TickLiquidity, TickLiquidityAmino, TickLiquiditySDKType } from "./tick_liquidity";
import { PoolReserves, PoolReservesAmino, PoolReservesSDKType } from "./pool_reserves";
import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { Pool, PoolAmino, PoolSDKType } from "./pool";
import { PoolMetadata, PoolMetadataAmino, PoolMetadataSDKType } from "./pool_metadata";
import { BinaryWriter } from "../../binary";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
export interface QueryParamsRequestProtoMsg {
    typeUrl: "/neutron.dex.QueryParamsRequest";
    value: Uint8Array;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {
}
export interface QueryParamsRequestAminoMsg {
    type: "/neutron.dex.QueryParamsRequest";
    value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params holds all the parameters of this module. */
    params: Params;
}
export interface QueryParamsResponseProtoMsg {
    typeUrl: "/neutron.dex.QueryParamsResponse";
    value: Uint8Array;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
    /** params holds all the parameters of this module. */
    params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
    type: "/neutron.dex.QueryParamsResponse";
    value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
    params: ParamsSDKType;
}
export interface QueryGetLimitOrderTrancheUserRequest {
    address: string;
    trancheKey: string;
}
export interface QueryGetLimitOrderTrancheUserRequestProtoMsg {
    typeUrl: "/neutron.dex.QueryGetLimitOrderTrancheUserRequest";
    value: Uint8Array;
}
export interface QueryGetLimitOrderTrancheUserRequestAmino {
    address?: string;
    tranche_key?: string;
}
export interface QueryGetLimitOrderTrancheUserRequestAminoMsg {
    type: "/neutron.dex.QueryGetLimitOrderTrancheUserRequest";
    value: QueryGetLimitOrderTrancheUserRequestAmino;
}
export interface QueryGetLimitOrderTrancheUserRequestSDKType {
    address: string;
    tranche_key: string;
}
export interface QueryGetLimitOrderTrancheUserResponse {
    limitOrderTrancheUser?: LimitOrderTrancheUser;
}
export interface QueryGetLimitOrderTrancheUserResponseProtoMsg {
    typeUrl: "/neutron.dex.QueryGetLimitOrderTrancheUserResponse";
    value: Uint8Array;
}
export interface QueryGetLimitOrderTrancheUserResponseAmino {
    limit_order_tranche_user?: LimitOrderTrancheUserAmino;
}
export interface QueryGetLimitOrderTrancheUserResponseAminoMsg {
    type: "/neutron.dex.QueryGetLimitOrderTrancheUserResponse";
    value: QueryGetLimitOrderTrancheUserResponseAmino;
}
export interface QueryGetLimitOrderTrancheUserResponseSDKType {
    limit_order_tranche_user?: LimitOrderTrancheUserSDKType;
}
export interface QueryAllLimitOrderTrancheUserRequest {
    pagination?: PageRequest;
}
export interface QueryAllLimitOrderTrancheUserRequestProtoMsg {
    typeUrl: "/neutron.dex.QueryAllLimitOrderTrancheUserRequest";
    value: Uint8Array;
}
export interface QueryAllLimitOrderTrancheUserRequestAmino {
    pagination?: PageRequestAmino;
}
export interface QueryAllLimitOrderTrancheUserRequestAminoMsg {
    type: "/neutron.dex.QueryAllLimitOrderTrancheUserRequest";
    value: QueryAllLimitOrderTrancheUserRequestAmino;
}
export interface QueryAllLimitOrderTrancheUserRequestSDKType {
    pagination?: PageRequestSDKType;
}
export interface QueryAllLimitOrderTrancheUserResponse {
    limitOrderTrancheUser?: LimitOrderTrancheUser[];
    pagination?: PageResponse;
}
export interface QueryAllLimitOrderTrancheUserResponseProtoMsg {
    typeUrl: "/neutron.dex.QueryAllLimitOrderTrancheUserResponse";
    value: Uint8Array;
}
export interface QueryAllLimitOrderTrancheUserResponseAmino {
    limit_order_tranche_user?: LimitOrderTrancheUserAmino[];
    pagination?: PageResponseAmino;
}
export interface QueryAllLimitOrderTrancheUserResponseAminoMsg {
    type: "/neutron.dex.QueryAllLimitOrderTrancheUserResponse";
    value: QueryAllLimitOrderTrancheUserResponseAmino;
}
export interface QueryAllLimitOrderTrancheUserResponseSDKType {
    limit_order_tranche_user?: LimitOrderTrancheUserSDKType[];
    pagination?: PageResponseSDKType;
}
export interface QueryGetLimitOrderTrancheRequest {
    pairId: string;
    tickIndex: bigint;
    tokenIn: string;
    trancheKey: string;
}
export interface QueryGetLimitOrderTrancheRequestProtoMsg {
    typeUrl: "/neutron.dex.QueryGetLimitOrderTrancheRequest";
    value: Uint8Array;
}
export interface QueryGetLimitOrderTrancheRequestAmino {
    pair_id?: string;
    tick_index?: string;
    token_in?: string;
    tranche_key?: string;
}
export interface QueryGetLimitOrderTrancheRequestAminoMsg {
    type: "/neutron.dex.QueryGetLimitOrderTrancheRequest";
    value: QueryGetLimitOrderTrancheRequestAmino;
}
export interface QueryGetLimitOrderTrancheRequestSDKType {
    pair_id: string;
    tick_index: bigint;
    token_in: string;
    tranche_key: string;
}
export interface QueryGetLimitOrderTrancheResponse {
    limitOrderTranche?: LimitOrderTranche;
}
export interface QueryGetLimitOrderTrancheResponseProtoMsg {
    typeUrl: "/neutron.dex.QueryGetLimitOrderTrancheResponse";
    value: Uint8Array;
}
export interface QueryGetLimitOrderTrancheResponseAmino {
    limit_order_tranche?: LimitOrderTrancheAmino;
}
export interface QueryGetLimitOrderTrancheResponseAminoMsg {
    type: "/neutron.dex.QueryGetLimitOrderTrancheResponse";
    value: QueryGetLimitOrderTrancheResponseAmino;
}
export interface QueryGetLimitOrderTrancheResponseSDKType {
    limit_order_tranche?: LimitOrderTrancheSDKType;
}
export interface QueryAllLimitOrderTrancheRequest {
    pairId: string;
    tokenIn: string;
    pagination?: PageRequest;
}
export interface QueryAllLimitOrderTrancheRequestProtoMsg {
    typeUrl: "/neutron.dex.QueryAllLimitOrderTrancheRequest";
    value: Uint8Array;
}
export interface QueryAllLimitOrderTrancheRequestAmino {
    pair_id?: string;
    token_in?: string;
    pagination?: PageRequestAmino;
}
export interface QueryAllLimitOrderTrancheRequestAminoMsg {
    type: "/neutron.dex.QueryAllLimitOrderTrancheRequest";
    value: QueryAllLimitOrderTrancheRequestAmino;
}
export interface QueryAllLimitOrderTrancheRequestSDKType {
    pair_id: string;
    token_in: string;
    pagination?: PageRequestSDKType;
}
export interface QueryAllLimitOrderTrancheResponse {
    limitOrderTranche?: LimitOrderTranche[];
    pagination?: PageResponse;
}
export interface QueryAllLimitOrderTrancheResponseProtoMsg {
    typeUrl: "/neutron.dex.QueryAllLimitOrderTrancheResponse";
    value: Uint8Array;
}
export interface QueryAllLimitOrderTrancheResponseAmino {
    limit_order_tranche?: LimitOrderTrancheAmino[];
    pagination?: PageResponseAmino;
}
export interface QueryAllLimitOrderTrancheResponseAminoMsg {
    type: "/neutron.dex.QueryAllLimitOrderTrancheResponse";
    value: QueryAllLimitOrderTrancheResponseAmino;
}
export interface QueryAllLimitOrderTrancheResponseSDKType {
    limit_order_tranche?: LimitOrderTrancheSDKType[];
    pagination?: PageResponseSDKType;
}
export interface QueryAllUserDepositsRequest {
    address: string;
    pagination?: PageRequest;
}
export interface QueryAllUserDepositsRequestProtoMsg {
    typeUrl: "/neutron.dex.QueryAllUserDepositsRequest";
    value: Uint8Array;
}
export interface QueryAllUserDepositsRequestAmino {
    address?: string;
    pagination?: PageRequestAmino;
}
export interface QueryAllUserDepositsRequestAminoMsg {
    type: "/neutron.dex.QueryAllUserDepositsRequest";
    value: QueryAllUserDepositsRequestAmino;
}
export interface QueryAllUserDepositsRequestSDKType {
    address: string;
    pagination?: PageRequestSDKType;
}
export interface QueryAllUserDepositsResponse {
    deposits?: DepositRecord[];
    pagination?: PageResponse;
}
export interface QueryAllUserDepositsResponseProtoMsg {
    typeUrl: "/neutron.dex.QueryAllUserDepositsResponse";
    value: Uint8Array;
}
export interface QueryAllUserDepositsResponseAmino {
    deposits?: DepositRecordAmino[];
    pagination?: PageResponseAmino;
}
export interface QueryAllUserDepositsResponseAminoMsg {
    type: "/neutron.dex.QueryAllUserDepositsResponse";
    value: QueryAllUserDepositsResponseAmino;
}
export interface QueryAllUserDepositsResponseSDKType {
    deposits?: DepositRecordSDKType[];
    pagination?: PageResponseSDKType;
}
export interface QueryAllUserLimitOrdersRequest {
    address: string;
    pagination?: PageRequest;
}
export interface QueryAllUserLimitOrdersRequestProtoMsg {
    typeUrl: "/neutron.dex.QueryAllUserLimitOrdersRequest";
    value: Uint8Array;
}
export interface QueryAllUserLimitOrdersRequestAmino {
    address?: string;
    pagination?: PageRequestAmino;
}
export interface QueryAllUserLimitOrdersRequestAminoMsg {
    type: "/neutron.dex.QueryAllUserLimitOrdersRequest";
    value: QueryAllUserLimitOrdersRequestAmino;
}
export interface QueryAllUserLimitOrdersRequestSDKType {
    address: string;
    pagination?: PageRequestSDKType;
}
export interface QueryAllUserLimitOrdersResponse {
    limitOrders?: LimitOrderTrancheUser[];
    pagination?: PageResponse;
}
export interface QueryAllUserLimitOrdersResponseProtoMsg {
    typeUrl: "/neutron.dex.QueryAllUserLimitOrdersResponse";
    value: Uint8Array;
}
export interface QueryAllUserLimitOrdersResponseAmino {
    limit_orders?: LimitOrderTrancheUserAmino[];
    pagination?: PageResponseAmino;
}
export interface QueryAllUserLimitOrdersResponseAminoMsg {
    type: "/neutron.dex.QueryAllUserLimitOrdersResponse";
    value: QueryAllUserLimitOrdersResponseAmino;
}
export interface QueryAllUserLimitOrdersResponseSDKType {
    limit_orders?: LimitOrderTrancheUserSDKType[];
    pagination?: PageResponseSDKType;
}
export interface QueryAllTickLiquidityRequest {
    pairId: string;
    tokenIn: string;
    pagination?: PageRequest;
}
export interface QueryAllTickLiquidityRequestProtoMsg {
    typeUrl: "/neutron.dex.QueryAllTickLiquidityRequest";
    value: Uint8Array;
}
export interface QueryAllTickLiquidityRequestAmino {
    pair_id?: string;
    token_in?: string;
    pagination?: PageRequestAmino;
}
export interface QueryAllTickLiquidityRequestAminoMsg {
    type: "/neutron.dex.QueryAllTickLiquidityRequest";
    value: QueryAllTickLiquidityRequestAmino;
}
export interface QueryAllTickLiquidityRequestSDKType {
    pair_id: string;
    token_in: string;
    pagination?: PageRequestSDKType;
}
export interface QueryAllTickLiquidityResponse {
    tickLiquidity?: TickLiquidity[];
    pagination?: PageResponse;
}
export interface QueryAllTickLiquidityResponseProtoMsg {
    typeUrl: "/neutron.dex.QueryAllTickLiquidityResponse";
    value: Uint8Array;
}
export interface QueryAllTickLiquidityResponseAmino {
    tick_liquidity?: TickLiquidityAmino[];
    pagination?: PageResponseAmino;
}
export interface QueryAllTickLiquidityResponseAminoMsg {
    type: "/neutron.dex.QueryAllTickLiquidityResponse";
    value: QueryAllTickLiquidityResponseAmino;
}
export interface QueryAllTickLiquidityResponseSDKType {
    tick_liquidity?: TickLiquiditySDKType[];
    pagination?: PageResponseSDKType;
}
export interface QueryGetInactiveLimitOrderTrancheRequest {
    pairId: string;
    tokenIn: string;
    tickIndex: bigint;
    trancheKey: string;
}
export interface QueryGetInactiveLimitOrderTrancheRequestProtoMsg {
    typeUrl: "/neutron.dex.QueryGetInactiveLimitOrderTrancheRequest";
    value: Uint8Array;
}
export interface QueryGetInactiveLimitOrderTrancheRequestAmino {
    pair_id?: string;
    token_in?: string;
    tick_index?: string;
    tranche_key?: string;
}
export interface QueryGetInactiveLimitOrderTrancheRequestAminoMsg {
    type: "/neutron.dex.QueryGetInactiveLimitOrderTrancheRequest";
    value: QueryGetInactiveLimitOrderTrancheRequestAmino;
}
export interface QueryGetInactiveLimitOrderTrancheRequestSDKType {
    pair_id: string;
    token_in: string;
    tick_index: bigint;
    tranche_key: string;
}
export interface QueryGetInactiveLimitOrderTrancheResponse {
    inactiveLimitOrderTranche?: LimitOrderTranche;
}
export interface QueryGetInactiveLimitOrderTrancheResponseProtoMsg {
    typeUrl: "/neutron.dex.QueryGetInactiveLimitOrderTrancheResponse";
    value: Uint8Array;
}
export interface QueryGetInactiveLimitOrderTrancheResponseAmino {
    inactive_limit_order_tranche?: LimitOrderTrancheAmino;
}
export interface QueryGetInactiveLimitOrderTrancheResponseAminoMsg {
    type: "/neutron.dex.QueryGetInactiveLimitOrderTrancheResponse";
    value: QueryGetInactiveLimitOrderTrancheResponseAmino;
}
export interface QueryGetInactiveLimitOrderTrancheResponseSDKType {
    inactive_limit_order_tranche?: LimitOrderTrancheSDKType;
}
export interface QueryAllInactiveLimitOrderTrancheRequest {
    pagination?: PageRequest;
}
export interface QueryAllInactiveLimitOrderTrancheRequestProtoMsg {
    typeUrl: "/neutron.dex.QueryAllInactiveLimitOrderTrancheRequest";
    value: Uint8Array;
}
export interface QueryAllInactiveLimitOrderTrancheRequestAmino {
    pagination?: PageRequestAmino;
}
export interface QueryAllInactiveLimitOrderTrancheRequestAminoMsg {
    type: "/neutron.dex.QueryAllInactiveLimitOrderTrancheRequest";
    value: QueryAllInactiveLimitOrderTrancheRequestAmino;
}
export interface QueryAllInactiveLimitOrderTrancheRequestSDKType {
    pagination?: PageRequestSDKType;
}
export interface QueryAllInactiveLimitOrderTrancheResponse {
    inactiveLimitOrderTranche?: LimitOrderTranche[];
    pagination?: PageResponse;
}
export interface QueryAllInactiveLimitOrderTrancheResponseProtoMsg {
    typeUrl: "/neutron.dex.QueryAllInactiveLimitOrderTrancheResponse";
    value: Uint8Array;
}
export interface QueryAllInactiveLimitOrderTrancheResponseAmino {
    inactive_limit_order_tranche?: LimitOrderTrancheAmino[];
    pagination?: PageResponseAmino;
}
export interface QueryAllInactiveLimitOrderTrancheResponseAminoMsg {
    type: "/neutron.dex.QueryAllInactiveLimitOrderTrancheResponse";
    value: QueryAllInactiveLimitOrderTrancheResponseAmino;
}
export interface QueryAllInactiveLimitOrderTrancheResponseSDKType {
    inactive_limit_order_tranche?: LimitOrderTrancheSDKType[];
    pagination?: PageResponseSDKType;
}
export interface QueryAllPoolReservesRequest {
    pairId: string;
    tokenIn: string;
    pagination?: PageRequest;
}
export interface QueryAllPoolReservesRequestProtoMsg {
    typeUrl: "/neutron.dex.QueryAllPoolReservesRequest";
    value: Uint8Array;
}
export interface QueryAllPoolReservesRequestAmino {
    pair_id?: string;
    token_in?: string;
    pagination?: PageRequestAmino;
}
export interface QueryAllPoolReservesRequestAminoMsg {
    type: "/neutron.dex.QueryAllPoolReservesRequest";
    value: QueryAllPoolReservesRequestAmino;
}
export interface QueryAllPoolReservesRequestSDKType {
    pair_id: string;
    token_in: string;
    pagination?: PageRequestSDKType;
}
export interface QueryAllPoolReservesResponse {
    poolReserves?: PoolReserves[];
    pagination?: PageResponse;
}
export interface QueryAllPoolReservesResponseProtoMsg {
    typeUrl: "/neutron.dex.QueryAllPoolReservesResponse";
    value: Uint8Array;
}
export interface QueryAllPoolReservesResponseAmino {
    pool_reserves?: PoolReservesAmino[];
    pagination?: PageResponseAmino;
}
export interface QueryAllPoolReservesResponseAminoMsg {
    type: "/neutron.dex.QueryAllPoolReservesResponse";
    value: QueryAllPoolReservesResponseAmino;
}
export interface QueryAllPoolReservesResponseSDKType {
    pool_reserves?: PoolReservesSDKType[];
    pagination?: PageResponseSDKType;
}
export interface QueryGetPoolReservesRequest {
    pairId: string;
    tokenIn: string;
    tickIndex: bigint;
    fee: bigint;
}
export interface QueryGetPoolReservesRequestProtoMsg {
    typeUrl: "/neutron.dex.QueryGetPoolReservesRequest";
    value: Uint8Array;
}
export interface QueryGetPoolReservesRequestAmino {
    pair_id?: string;
    token_in?: string;
    tick_index?: string;
    fee?: string;
}
export interface QueryGetPoolReservesRequestAminoMsg {
    type: "/neutron.dex.QueryGetPoolReservesRequest";
    value: QueryGetPoolReservesRequestAmino;
}
export interface QueryGetPoolReservesRequestSDKType {
    pair_id: string;
    token_in: string;
    tick_index: bigint;
    fee: bigint;
}
export interface QueryGetPoolReservesResponse {
    poolReserves?: PoolReserves;
}
export interface QueryGetPoolReservesResponseProtoMsg {
    typeUrl: "/neutron.dex.QueryGetPoolReservesResponse";
    value: Uint8Array;
}
export interface QueryGetPoolReservesResponseAmino {
    pool_reserves?: PoolReservesAmino;
}
export interface QueryGetPoolReservesResponseAminoMsg {
    type: "/neutron.dex.QueryGetPoolReservesResponse";
    value: QueryGetPoolReservesResponseAmino;
}
export interface QueryGetPoolReservesResponseSDKType {
    pool_reserves?: PoolReservesSDKType;
}
export interface QueryEstimateMultiHopSwapRequest {
    creator: string;
    receiver: string;
    routes: MultiHopRoute[];
    amountIn: string;
    exitLimitPrice: string;
    /**
     * If pickBestRoute == true then all routes are run and the route with the best price is chosen
     * otherwise, the first succesful route is used.
     */
    pickBestRoute: boolean;
}
export interface QueryEstimateMultiHopSwapRequestProtoMsg {
    typeUrl: "/neutron.dex.QueryEstimateMultiHopSwapRequest";
    value: Uint8Array;
}
export interface QueryEstimateMultiHopSwapRequestAmino {
    creator?: string;
    receiver?: string;
    routes?: MultiHopRouteAmino[];
    amount_in?: string;
    exit_limit_price?: string;
    /**
     * If pickBestRoute == true then all routes are run and the route with the best price is chosen
     * otherwise, the first succesful route is used.
     */
    pick_best_route?: boolean;
}
export interface QueryEstimateMultiHopSwapRequestAminoMsg {
    type: "/neutron.dex.QueryEstimateMultiHopSwapRequest";
    value: QueryEstimateMultiHopSwapRequestAmino;
}
export interface QueryEstimateMultiHopSwapRequestSDKType {
    creator: string;
    receiver: string;
    routes: MultiHopRouteSDKType[];
    amount_in: string;
    exit_limit_price: string;
    pick_best_route: boolean;
}
export interface QueryEstimateMultiHopSwapResponse {
    coinOut: Coin;
}
export interface QueryEstimateMultiHopSwapResponseProtoMsg {
    typeUrl: "/neutron.dex.QueryEstimateMultiHopSwapResponse";
    value: Uint8Array;
}
export interface QueryEstimateMultiHopSwapResponseAmino {
    coin_out?: CoinAmino;
}
export interface QueryEstimateMultiHopSwapResponseAminoMsg {
    type: "/neutron.dex.QueryEstimateMultiHopSwapResponse";
    value: QueryEstimateMultiHopSwapResponseAmino;
}
export interface QueryEstimateMultiHopSwapResponseSDKType {
    coin_out: CoinSDKType;
}
export interface QueryEstimatePlaceLimitOrderRequest {
    creator: string;
    receiver: string;
    tokenIn: string;
    tokenOut: string;
    tickIndexInToOut: bigint;
    amountIn: string;
    orderType: LimitOrderType;
    /** expirationTime is only valid iff orderType == GOOD_TIL_TIME. */
    expirationTime?: Timestamp;
    maxAmountOut?: string;
}
export interface QueryEstimatePlaceLimitOrderRequestProtoMsg {
    typeUrl: "/neutron.dex.QueryEstimatePlaceLimitOrderRequest";
    value: Uint8Array;
}
export interface QueryEstimatePlaceLimitOrderRequestAmino {
    creator?: string;
    receiver?: string;
    token_in?: string;
    token_out?: string;
    tick_index_in_to_out?: string;
    amount_in?: string;
    order_type?: LimitOrderType;
    /** expirationTime is only valid iff orderType == GOOD_TIL_TIME. */
    expiration_time?: string;
    maxAmount_out?: string;
}
export interface QueryEstimatePlaceLimitOrderRequestAminoMsg {
    type: "/neutron.dex.QueryEstimatePlaceLimitOrderRequest";
    value: QueryEstimatePlaceLimitOrderRequestAmino;
}
export interface QueryEstimatePlaceLimitOrderRequestSDKType {
    creator: string;
    receiver: string;
    token_in: string;
    token_out: string;
    tick_index_in_to_out: bigint;
    amount_in: string;
    order_type: LimitOrderType;
    expiration_time?: TimestampSDKType;
    maxAmount_out?: string;
}
export interface QueryEstimatePlaceLimitOrderResponse {
    /**
     * Total amount of coin used for the limit order
     * You can derive makerLimitInCoin using the equation: totalInCoin = swapInCoin + makerLimitInCoin
     */
    totalInCoin: Coin;
    /** Total amount of the token in that was immediately swapped for swapOutCoin */
    swapInCoin: Coin;
    /**
     * Total amount of coin received from the taker portion of the limit order
     * This is the amount of coin immediately available in the users account after executing the
     * limit order. It does not include any future proceeds from the maker portion which will have withdrawn in the future
     */
    swapOutCoin: Coin;
}
export interface QueryEstimatePlaceLimitOrderResponseProtoMsg {
    typeUrl: "/neutron.dex.QueryEstimatePlaceLimitOrderResponse";
    value: Uint8Array;
}
export interface QueryEstimatePlaceLimitOrderResponseAmino {
    /**
     * Total amount of coin used for the limit order
     * You can derive makerLimitInCoin using the equation: totalInCoin = swapInCoin + makerLimitInCoin
     */
    total_in_coin?: CoinAmino;
    /** Total amount of the token in that was immediately swapped for swapOutCoin */
    swap_in_coin?: CoinAmino;
    /**
     * Total amount of coin received from the taker portion of the limit order
     * This is the amount of coin immediately available in the users account after executing the
     * limit order. It does not include any future proceeds from the maker portion which will have withdrawn in the future
     */
    swap_out_coin?: CoinAmino;
}
export interface QueryEstimatePlaceLimitOrderResponseAminoMsg {
    type: "/neutron.dex.QueryEstimatePlaceLimitOrderResponse";
    value: QueryEstimatePlaceLimitOrderResponseAmino;
}
export interface QueryEstimatePlaceLimitOrderResponseSDKType {
    total_in_coin: CoinSDKType;
    swap_in_coin: CoinSDKType;
    swap_out_coin: CoinSDKType;
}
export interface QueryPoolRequest {
    pairId: string;
    tickIndex: bigint;
    fee: bigint;
}
export interface QueryPoolRequestProtoMsg {
    typeUrl: "/neutron.dex.QueryPoolRequest";
    value: Uint8Array;
}
export interface QueryPoolRequestAmino {
    pair_id?: string;
    tick_index?: string;
    fee?: string;
}
export interface QueryPoolRequestAminoMsg {
    type: "/neutron.dex.QueryPoolRequest";
    value: QueryPoolRequestAmino;
}
export interface QueryPoolRequestSDKType {
    pair_id: string;
    tick_index: bigint;
    fee: bigint;
}
export interface QueryPoolByIDRequest {
    poolId: bigint;
}
export interface QueryPoolByIDRequestProtoMsg {
    typeUrl: "/neutron.dex.QueryPoolByIDRequest";
    value: Uint8Array;
}
export interface QueryPoolByIDRequestAmino {
    pool_id?: string;
}
export interface QueryPoolByIDRequestAminoMsg {
    type: "/neutron.dex.QueryPoolByIDRequest";
    value: QueryPoolByIDRequestAmino;
}
export interface QueryPoolByIDRequestSDKType {
    pool_id: bigint;
}
export interface QueryPoolResponse {
    pool?: Pool;
}
export interface QueryPoolResponseProtoMsg {
    typeUrl: "/neutron.dex.QueryPoolResponse";
    value: Uint8Array;
}
export interface QueryPoolResponseAmino {
    pool?: PoolAmino;
}
export interface QueryPoolResponseAminoMsg {
    type: "/neutron.dex.QueryPoolResponse";
    value: QueryPoolResponseAmino;
}
export interface QueryPoolResponseSDKType {
    pool?: PoolSDKType;
}
export interface QueryGetPoolMetadataRequest {
    id: bigint;
}
export interface QueryGetPoolMetadataRequestProtoMsg {
    typeUrl: "/neutron.dex.QueryGetPoolMetadataRequest";
    value: Uint8Array;
}
export interface QueryGetPoolMetadataRequestAmino {
    id?: string;
}
export interface QueryGetPoolMetadataRequestAminoMsg {
    type: "/neutron.dex.QueryGetPoolMetadataRequest";
    value: QueryGetPoolMetadataRequestAmino;
}
export interface QueryGetPoolMetadataRequestSDKType {
    id: bigint;
}
export interface QueryGetPoolMetadataResponse {
    PoolMetadata: PoolMetadata;
}
export interface QueryGetPoolMetadataResponseProtoMsg {
    typeUrl: "/neutron.dex.QueryGetPoolMetadataResponse";
    value: Uint8Array;
}
export interface QueryGetPoolMetadataResponseAmino {
    Pool_metadata?: PoolMetadataAmino;
}
export interface QueryGetPoolMetadataResponseAminoMsg {
    type: "/neutron.dex.QueryGetPoolMetadataResponse";
    value: QueryGetPoolMetadataResponseAmino;
}
export interface QueryGetPoolMetadataResponseSDKType {
    Pool_metadata: PoolMetadataSDKType;
}
export interface QueryAllPoolMetadataRequest {
    pagination?: PageRequest;
}
export interface QueryAllPoolMetadataRequestProtoMsg {
    typeUrl: "/neutron.dex.QueryAllPoolMetadataRequest";
    value: Uint8Array;
}
export interface QueryAllPoolMetadataRequestAmino {
    pagination?: PageRequestAmino;
}
export interface QueryAllPoolMetadataRequestAminoMsg {
    type: "/neutron.dex.QueryAllPoolMetadataRequest";
    value: QueryAllPoolMetadataRequestAmino;
}
export interface QueryAllPoolMetadataRequestSDKType {
    pagination?: PageRequestSDKType;
}
export interface QueryAllPoolMetadataResponse {
    poolMetadata: PoolMetadata[];
    pagination?: PageResponse;
}
export interface QueryAllPoolMetadataResponseProtoMsg {
    typeUrl: "/neutron.dex.QueryAllPoolMetadataResponse";
    value: Uint8Array;
}
export interface QueryAllPoolMetadataResponseAmino {
    pool_metadata?: PoolMetadataAmino[];
    pagination?: PageResponseAmino;
}
export interface QueryAllPoolMetadataResponseAminoMsg {
    type: "/neutron.dex.QueryAllPoolMetadataResponse";
    value: QueryAllPoolMetadataResponseAmino;
}
export interface QueryAllPoolMetadataResponseSDKType {
    pool_metadata: PoolMetadataSDKType[];
    pagination?: PageResponseSDKType;
}
export declare const QueryParamsRequest: {
    typeUrl: string;
    encode(_: QueryParamsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryParamsRequest;
    fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest;
    fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest;
    toAmino(_: QueryParamsRequest): QueryParamsRequestAmino;
    fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest;
    fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest;
    toProto(message: QueryParamsRequest): Uint8Array;
    toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg;
};
export declare const QueryParamsResponse: {
    typeUrl: string;
    encode(message: QueryParamsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryParamsResponse;
    fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse;
    fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse;
    toAmino(message: QueryParamsResponse): QueryParamsResponseAmino;
    fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse;
    fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse;
    toProto(message: QueryParamsResponse): Uint8Array;
    toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg;
};
export declare const QueryGetLimitOrderTrancheUserRequest: {
    typeUrl: string;
    encode(message: QueryGetLimitOrderTrancheUserRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryGetLimitOrderTrancheUserRequest;
    fromPartial(object: Partial<QueryGetLimitOrderTrancheUserRequest>): QueryGetLimitOrderTrancheUserRequest;
    fromAmino(object: QueryGetLimitOrderTrancheUserRequestAmino): QueryGetLimitOrderTrancheUserRequest;
    toAmino(message: QueryGetLimitOrderTrancheUserRequest): QueryGetLimitOrderTrancheUserRequestAmino;
    fromAminoMsg(object: QueryGetLimitOrderTrancheUserRequestAminoMsg): QueryGetLimitOrderTrancheUserRequest;
    fromProtoMsg(message: QueryGetLimitOrderTrancheUserRequestProtoMsg): QueryGetLimitOrderTrancheUserRequest;
    toProto(message: QueryGetLimitOrderTrancheUserRequest): Uint8Array;
    toProtoMsg(message: QueryGetLimitOrderTrancheUserRequest): QueryGetLimitOrderTrancheUserRequestProtoMsg;
};
export declare const QueryGetLimitOrderTrancheUserResponse: {
    typeUrl: string;
    encode(message: QueryGetLimitOrderTrancheUserResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryGetLimitOrderTrancheUserResponse;
    fromPartial(object: Partial<QueryGetLimitOrderTrancheUserResponse>): QueryGetLimitOrderTrancheUserResponse;
    fromAmino(object: QueryGetLimitOrderTrancheUserResponseAmino): QueryGetLimitOrderTrancheUserResponse;
    toAmino(message: QueryGetLimitOrderTrancheUserResponse): QueryGetLimitOrderTrancheUserResponseAmino;
    fromAminoMsg(object: QueryGetLimitOrderTrancheUserResponseAminoMsg): QueryGetLimitOrderTrancheUserResponse;
    fromProtoMsg(message: QueryGetLimitOrderTrancheUserResponseProtoMsg): QueryGetLimitOrderTrancheUserResponse;
    toProto(message: QueryGetLimitOrderTrancheUserResponse): Uint8Array;
    toProtoMsg(message: QueryGetLimitOrderTrancheUserResponse): QueryGetLimitOrderTrancheUserResponseProtoMsg;
};
export declare const QueryAllLimitOrderTrancheUserRequest: {
    typeUrl: string;
    encode(message: QueryAllLimitOrderTrancheUserRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAllLimitOrderTrancheUserRequest;
    fromPartial(object: Partial<QueryAllLimitOrderTrancheUserRequest>): QueryAllLimitOrderTrancheUserRequest;
    fromAmino(object: QueryAllLimitOrderTrancheUserRequestAmino): QueryAllLimitOrderTrancheUserRequest;
    toAmino(message: QueryAllLimitOrderTrancheUserRequest): QueryAllLimitOrderTrancheUserRequestAmino;
    fromAminoMsg(object: QueryAllLimitOrderTrancheUserRequestAminoMsg): QueryAllLimitOrderTrancheUserRequest;
    fromProtoMsg(message: QueryAllLimitOrderTrancheUserRequestProtoMsg): QueryAllLimitOrderTrancheUserRequest;
    toProto(message: QueryAllLimitOrderTrancheUserRequest): Uint8Array;
    toProtoMsg(message: QueryAllLimitOrderTrancheUserRequest): QueryAllLimitOrderTrancheUserRequestProtoMsg;
};
export declare const QueryAllLimitOrderTrancheUserResponse: {
    typeUrl: string;
    encode(message: QueryAllLimitOrderTrancheUserResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAllLimitOrderTrancheUserResponse;
    fromPartial(object: Partial<QueryAllLimitOrderTrancheUserResponse>): QueryAllLimitOrderTrancheUserResponse;
    fromAmino(object: QueryAllLimitOrderTrancheUserResponseAmino): QueryAllLimitOrderTrancheUserResponse;
    toAmino(message: QueryAllLimitOrderTrancheUserResponse): QueryAllLimitOrderTrancheUserResponseAmino;
    fromAminoMsg(object: QueryAllLimitOrderTrancheUserResponseAminoMsg): QueryAllLimitOrderTrancheUserResponse;
    fromProtoMsg(message: QueryAllLimitOrderTrancheUserResponseProtoMsg): QueryAllLimitOrderTrancheUserResponse;
    toProto(message: QueryAllLimitOrderTrancheUserResponse): Uint8Array;
    toProtoMsg(message: QueryAllLimitOrderTrancheUserResponse): QueryAllLimitOrderTrancheUserResponseProtoMsg;
};
export declare const QueryGetLimitOrderTrancheRequest: {
    typeUrl: string;
    encode(message: QueryGetLimitOrderTrancheRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryGetLimitOrderTrancheRequest;
    fromPartial(object: Partial<QueryGetLimitOrderTrancheRequest>): QueryGetLimitOrderTrancheRequest;
    fromAmino(object: QueryGetLimitOrderTrancheRequestAmino): QueryGetLimitOrderTrancheRequest;
    toAmino(message: QueryGetLimitOrderTrancheRequest): QueryGetLimitOrderTrancheRequestAmino;
    fromAminoMsg(object: QueryGetLimitOrderTrancheRequestAminoMsg): QueryGetLimitOrderTrancheRequest;
    fromProtoMsg(message: QueryGetLimitOrderTrancheRequestProtoMsg): QueryGetLimitOrderTrancheRequest;
    toProto(message: QueryGetLimitOrderTrancheRequest): Uint8Array;
    toProtoMsg(message: QueryGetLimitOrderTrancheRequest): QueryGetLimitOrderTrancheRequestProtoMsg;
};
export declare const QueryGetLimitOrderTrancheResponse: {
    typeUrl: string;
    encode(message: QueryGetLimitOrderTrancheResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryGetLimitOrderTrancheResponse;
    fromPartial(object: Partial<QueryGetLimitOrderTrancheResponse>): QueryGetLimitOrderTrancheResponse;
    fromAmino(object: QueryGetLimitOrderTrancheResponseAmino): QueryGetLimitOrderTrancheResponse;
    toAmino(message: QueryGetLimitOrderTrancheResponse): QueryGetLimitOrderTrancheResponseAmino;
    fromAminoMsg(object: QueryGetLimitOrderTrancheResponseAminoMsg): QueryGetLimitOrderTrancheResponse;
    fromProtoMsg(message: QueryGetLimitOrderTrancheResponseProtoMsg): QueryGetLimitOrderTrancheResponse;
    toProto(message: QueryGetLimitOrderTrancheResponse): Uint8Array;
    toProtoMsg(message: QueryGetLimitOrderTrancheResponse): QueryGetLimitOrderTrancheResponseProtoMsg;
};
export declare const QueryAllLimitOrderTrancheRequest: {
    typeUrl: string;
    encode(message: QueryAllLimitOrderTrancheRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAllLimitOrderTrancheRequest;
    fromPartial(object: Partial<QueryAllLimitOrderTrancheRequest>): QueryAllLimitOrderTrancheRequest;
    fromAmino(object: QueryAllLimitOrderTrancheRequestAmino): QueryAllLimitOrderTrancheRequest;
    toAmino(message: QueryAllLimitOrderTrancheRequest): QueryAllLimitOrderTrancheRequestAmino;
    fromAminoMsg(object: QueryAllLimitOrderTrancheRequestAminoMsg): QueryAllLimitOrderTrancheRequest;
    fromProtoMsg(message: QueryAllLimitOrderTrancheRequestProtoMsg): QueryAllLimitOrderTrancheRequest;
    toProto(message: QueryAllLimitOrderTrancheRequest): Uint8Array;
    toProtoMsg(message: QueryAllLimitOrderTrancheRequest): QueryAllLimitOrderTrancheRequestProtoMsg;
};
export declare const QueryAllLimitOrderTrancheResponse: {
    typeUrl: string;
    encode(message: QueryAllLimitOrderTrancheResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAllLimitOrderTrancheResponse;
    fromPartial(object: Partial<QueryAllLimitOrderTrancheResponse>): QueryAllLimitOrderTrancheResponse;
    fromAmino(object: QueryAllLimitOrderTrancheResponseAmino): QueryAllLimitOrderTrancheResponse;
    toAmino(message: QueryAllLimitOrderTrancheResponse): QueryAllLimitOrderTrancheResponseAmino;
    fromAminoMsg(object: QueryAllLimitOrderTrancheResponseAminoMsg): QueryAllLimitOrderTrancheResponse;
    fromProtoMsg(message: QueryAllLimitOrderTrancheResponseProtoMsg): QueryAllLimitOrderTrancheResponse;
    toProto(message: QueryAllLimitOrderTrancheResponse): Uint8Array;
    toProtoMsg(message: QueryAllLimitOrderTrancheResponse): QueryAllLimitOrderTrancheResponseProtoMsg;
};
export declare const QueryAllUserDepositsRequest: {
    typeUrl: string;
    encode(message: QueryAllUserDepositsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAllUserDepositsRequest;
    fromPartial(object: Partial<QueryAllUserDepositsRequest>): QueryAllUserDepositsRequest;
    fromAmino(object: QueryAllUserDepositsRequestAmino): QueryAllUserDepositsRequest;
    toAmino(message: QueryAllUserDepositsRequest): QueryAllUserDepositsRequestAmino;
    fromAminoMsg(object: QueryAllUserDepositsRequestAminoMsg): QueryAllUserDepositsRequest;
    fromProtoMsg(message: QueryAllUserDepositsRequestProtoMsg): QueryAllUserDepositsRequest;
    toProto(message: QueryAllUserDepositsRequest): Uint8Array;
    toProtoMsg(message: QueryAllUserDepositsRequest): QueryAllUserDepositsRequestProtoMsg;
};
export declare const QueryAllUserDepositsResponse: {
    typeUrl: string;
    encode(message: QueryAllUserDepositsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAllUserDepositsResponse;
    fromPartial(object: Partial<QueryAllUserDepositsResponse>): QueryAllUserDepositsResponse;
    fromAmino(object: QueryAllUserDepositsResponseAmino): QueryAllUserDepositsResponse;
    toAmino(message: QueryAllUserDepositsResponse): QueryAllUserDepositsResponseAmino;
    fromAminoMsg(object: QueryAllUserDepositsResponseAminoMsg): QueryAllUserDepositsResponse;
    fromProtoMsg(message: QueryAllUserDepositsResponseProtoMsg): QueryAllUserDepositsResponse;
    toProto(message: QueryAllUserDepositsResponse): Uint8Array;
    toProtoMsg(message: QueryAllUserDepositsResponse): QueryAllUserDepositsResponseProtoMsg;
};
export declare const QueryAllUserLimitOrdersRequest: {
    typeUrl: string;
    encode(message: QueryAllUserLimitOrdersRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAllUserLimitOrdersRequest;
    fromPartial(object: Partial<QueryAllUserLimitOrdersRequest>): QueryAllUserLimitOrdersRequest;
    fromAmino(object: QueryAllUserLimitOrdersRequestAmino): QueryAllUserLimitOrdersRequest;
    toAmino(message: QueryAllUserLimitOrdersRequest): QueryAllUserLimitOrdersRequestAmino;
    fromAminoMsg(object: QueryAllUserLimitOrdersRequestAminoMsg): QueryAllUserLimitOrdersRequest;
    fromProtoMsg(message: QueryAllUserLimitOrdersRequestProtoMsg): QueryAllUserLimitOrdersRequest;
    toProto(message: QueryAllUserLimitOrdersRequest): Uint8Array;
    toProtoMsg(message: QueryAllUserLimitOrdersRequest): QueryAllUserLimitOrdersRequestProtoMsg;
};
export declare const QueryAllUserLimitOrdersResponse: {
    typeUrl: string;
    encode(message: QueryAllUserLimitOrdersResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAllUserLimitOrdersResponse;
    fromPartial(object: Partial<QueryAllUserLimitOrdersResponse>): QueryAllUserLimitOrdersResponse;
    fromAmino(object: QueryAllUserLimitOrdersResponseAmino): QueryAllUserLimitOrdersResponse;
    toAmino(message: QueryAllUserLimitOrdersResponse): QueryAllUserLimitOrdersResponseAmino;
    fromAminoMsg(object: QueryAllUserLimitOrdersResponseAminoMsg): QueryAllUserLimitOrdersResponse;
    fromProtoMsg(message: QueryAllUserLimitOrdersResponseProtoMsg): QueryAllUserLimitOrdersResponse;
    toProto(message: QueryAllUserLimitOrdersResponse): Uint8Array;
    toProtoMsg(message: QueryAllUserLimitOrdersResponse): QueryAllUserLimitOrdersResponseProtoMsg;
};
export declare const QueryAllTickLiquidityRequest: {
    typeUrl: string;
    encode(message: QueryAllTickLiquidityRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAllTickLiquidityRequest;
    fromPartial(object: Partial<QueryAllTickLiquidityRequest>): QueryAllTickLiquidityRequest;
    fromAmino(object: QueryAllTickLiquidityRequestAmino): QueryAllTickLiquidityRequest;
    toAmino(message: QueryAllTickLiquidityRequest): QueryAllTickLiquidityRequestAmino;
    fromAminoMsg(object: QueryAllTickLiquidityRequestAminoMsg): QueryAllTickLiquidityRequest;
    fromProtoMsg(message: QueryAllTickLiquidityRequestProtoMsg): QueryAllTickLiquidityRequest;
    toProto(message: QueryAllTickLiquidityRequest): Uint8Array;
    toProtoMsg(message: QueryAllTickLiquidityRequest): QueryAllTickLiquidityRequestProtoMsg;
};
export declare const QueryAllTickLiquidityResponse: {
    typeUrl: string;
    encode(message: QueryAllTickLiquidityResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAllTickLiquidityResponse;
    fromPartial(object: Partial<QueryAllTickLiquidityResponse>): QueryAllTickLiquidityResponse;
    fromAmino(object: QueryAllTickLiquidityResponseAmino): QueryAllTickLiquidityResponse;
    toAmino(message: QueryAllTickLiquidityResponse): QueryAllTickLiquidityResponseAmino;
    fromAminoMsg(object: QueryAllTickLiquidityResponseAminoMsg): QueryAllTickLiquidityResponse;
    fromProtoMsg(message: QueryAllTickLiquidityResponseProtoMsg): QueryAllTickLiquidityResponse;
    toProto(message: QueryAllTickLiquidityResponse): Uint8Array;
    toProtoMsg(message: QueryAllTickLiquidityResponse): QueryAllTickLiquidityResponseProtoMsg;
};
export declare const QueryGetInactiveLimitOrderTrancheRequest: {
    typeUrl: string;
    encode(message: QueryGetInactiveLimitOrderTrancheRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryGetInactiveLimitOrderTrancheRequest;
    fromPartial(object: Partial<QueryGetInactiveLimitOrderTrancheRequest>): QueryGetInactiveLimitOrderTrancheRequest;
    fromAmino(object: QueryGetInactiveLimitOrderTrancheRequestAmino): QueryGetInactiveLimitOrderTrancheRequest;
    toAmino(message: QueryGetInactiveLimitOrderTrancheRequest): QueryGetInactiveLimitOrderTrancheRequestAmino;
    fromAminoMsg(object: QueryGetInactiveLimitOrderTrancheRequestAminoMsg): QueryGetInactiveLimitOrderTrancheRequest;
    fromProtoMsg(message: QueryGetInactiveLimitOrderTrancheRequestProtoMsg): QueryGetInactiveLimitOrderTrancheRequest;
    toProto(message: QueryGetInactiveLimitOrderTrancheRequest): Uint8Array;
    toProtoMsg(message: QueryGetInactiveLimitOrderTrancheRequest): QueryGetInactiveLimitOrderTrancheRequestProtoMsg;
};
export declare const QueryGetInactiveLimitOrderTrancheResponse: {
    typeUrl: string;
    encode(message: QueryGetInactiveLimitOrderTrancheResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryGetInactiveLimitOrderTrancheResponse;
    fromPartial(object: Partial<QueryGetInactiveLimitOrderTrancheResponse>): QueryGetInactiveLimitOrderTrancheResponse;
    fromAmino(object: QueryGetInactiveLimitOrderTrancheResponseAmino): QueryGetInactiveLimitOrderTrancheResponse;
    toAmino(message: QueryGetInactiveLimitOrderTrancheResponse): QueryGetInactiveLimitOrderTrancheResponseAmino;
    fromAminoMsg(object: QueryGetInactiveLimitOrderTrancheResponseAminoMsg): QueryGetInactiveLimitOrderTrancheResponse;
    fromProtoMsg(message: QueryGetInactiveLimitOrderTrancheResponseProtoMsg): QueryGetInactiveLimitOrderTrancheResponse;
    toProto(message: QueryGetInactiveLimitOrderTrancheResponse): Uint8Array;
    toProtoMsg(message: QueryGetInactiveLimitOrderTrancheResponse): QueryGetInactiveLimitOrderTrancheResponseProtoMsg;
};
export declare const QueryAllInactiveLimitOrderTrancheRequest: {
    typeUrl: string;
    encode(message: QueryAllInactiveLimitOrderTrancheRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAllInactiveLimitOrderTrancheRequest;
    fromPartial(object: Partial<QueryAllInactiveLimitOrderTrancheRequest>): QueryAllInactiveLimitOrderTrancheRequest;
    fromAmino(object: QueryAllInactiveLimitOrderTrancheRequestAmino): QueryAllInactiveLimitOrderTrancheRequest;
    toAmino(message: QueryAllInactiveLimitOrderTrancheRequest): QueryAllInactiveLimitOrderTrancheRequestAmino;
    fromAminoMsg(object: QueryAllInactiveLimitOrderTrancheRequestAminoMsg): QueryAllInactiveLimitOrderTrancheRequest;
    fromProtoMsg(message: QueryAllInactiveLimitOrderTrancheRequestProtoMsg): QueryAllInactiveLimitOrderTrancheRequest;
    toProto(message: QueryAllInactiveLimitOrderTrancheRequest): Uint8Array;
    toProtoMsg(message: QueryAllInactiveLimitOrderTrancheRequest): QueryAllInactiveLimitOrderTrancheRequestProtoMsg;
};
export declare const QueryAllInactiveLimitOrderTrancheResponse: {
    typeUrl: string;
    encode(message: QueryAllInactiveLimitOrderTrancheResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAllInactiveLimitOrderTrancheResponse;
    fromPartial(object: Partial<QueryAllInactiveLimitOrderTrancheResponse>): QueryAllInactiveLimitOrderTrancheResponse;
    fromAmino(object: QueryAllInactiveLimitOrderTrancheResponseAmino): QueryAllInactiveLimitOrderTrancheResponse;
    toAmino(message: QueryAllInactiveLimitOrderTrancheResponse): QueryAllInactiveLimitOrderTrancheResponseAmino;
    fromAminoMsg(object: QueryAllInactiveLimitOrderTrancheResponseAminoMsg): QueryAllInactiveLimitOrderTrancheResponse;
    fromProtoMsg(message: QueryAllInactiveLimitOrderTrancheResponseProtoMsg): QueryAllInactiveLimitOrderTrancheResponse;
    toProto(message: QueryAllInactiveLimitOrderTrancheResponse): Uint8Array;
    toProtoMsg(message: QueryAllInactiveLimitOrderTrancheResponse): QueryAllInactiveLimitOrderTrancheResponseProtoMsg;
};
export declare const QueryAllPoolReservesRequest: {
    typeUrl: string;
    encode(message: QueryAllPoolReservesRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAllPoolReservesRequest;
    fromPartial(object: Partial<QueryAllPoolReservesRequest>): QueryAllPoolReservesRequest;
    fromAmino(object: QueryAllPoolReservesRequestAmino): QueryAllPoolReservesRequest;
    toAmino(message: QueryAllPoolReservesRequest): QueryAllPoolReservesRequestAmino;
    fromAminoMsg(object: QueryAllPoolReservesRequestAminoMsg): QueryAllPoolReservesRequest;
    fromProtoMsg(message: QueryAllPoolReservesRequestProtoMsg): QueryAllPoolReservesRequest;
    toProto(message: QueryAllPoolReservesRequest): Uint8Array;
    toProtoMsg(message: QueryAllPoolReservesRequest): QueryAllPoolReservesRequestProtoMsg;
};
export declare const QueryAllPoolReservesResponse: {
    typeUrl: string;
    encode(message: QueryAllPoolReservesResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAllPoolReservesResponse;
    fromPartial(object: Partial<QueryAllPoolReservesResponse>): QueryAllPoolReservesResponse;
    fromAmino(object: QueryAllPoolReservesResponseAmino): QueryAllPoolReservesResponse;
    toAmino(message: QueryAllPoolReservesResponse): QueryAllPoolReservesResponseAmino;
    fromAminoMsg(object: QueryAllPoolReservesResponseAminoMsg): QueryAllPoolReservesResponse;
    fromProtoMsg(message: QueryAllPoolReservesResponseProtoMsg): QueryAllPoolReservesResponse;
    toProto(message: QueryAllPoolReservesResponse): Uint8Array;
    toProtoMsg(message: QueryAllPoolReservesResponse): QueryAllPoolReservesResponseProtoMsg;
};
export declare const QueryGetPoolReservesRequest: {
    typeUrl: string;
    encode(message: QueryGetPoolReservesRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryGetPoolReservesRequest;
    fromPartial(object: Partial<QueryGetPoolReservesRequest>): QueryGetPoolReservesRequest;
    fromAmino(object: QueryGetPoolReservesRequestAmino): QueryGetPoolReservesRequest;
    toAmino(message: QueryGetPoolReservesRequest): QueryGetPoolReservesRequestAmino;
    fromAminoMsg(object: QueryGetPoolReservesRequestAminoMsg): QueryGetPoolReservesRequest;
    fromProtoMsg(message: QueryGetPoolReservesRequestProtoMsg): QueryGetPoolReservesRequest;
    toProto(message: QueryGetPoolReservesRequest): Uint8Array;
    toProtoMsg(message: QueryGetPoolReservesRequest): QueryGetPoolReservesRequestProtoMsg;
};
export declare const QueryGetPoolReservesResponse: {
    typeUrl: string;
    encode(message: QueryGetPoolReservesResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryGetPoolReservesResponse;
    fromPartial(object: Partial<QueryGetPoolReservesResponse>): QueryGetPoolReservesResponse;
    fromAmino(object: QueryGetPoolReservesResponseAmino): QueryGetPoolReservesResponse;
    toAmino(message: QueryGetPoolReservesResponse): QueryGetPoolReservesResponseAmino;
    fromAminoMsg(object: QueryGetPoolReservesResponseAminoMsg): QueryGetPoolReservesResponse;
    fromProtoMsg(message: QueryGetPoolReservesResponseProtoMsg): QueryGetPoolReservesResponse;
    toProto(message: QueryGetPoolReservesResponse): Uint8Array;
    toProtoMsg(message: QueryGetPoolReservesResponse): QueryGetPoolReservesResponseProtoMsg;
};
export declare const QueryEstimateMultiHopSwapRequest: {
    typeUrl: string;
    encode(message: QueryEstimateMultiHopSwapRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryEstimateMultiHopSwapRequest;
    fromPartial(object: Partial<QueryEstimateMultiHopSwapRequest>): QueryEstimateMultiHopSwapRequest;
    fromAmino(object: QueryEstimateMultiHopSwapRequestAmino): QueryEstimateMultiHopSwapRequest;
    toAmino(message: QueryEstimateMultiHopSwapRequest): QueryEstimateMultiHopSwapRequestAmino;
    fromAminoMsg(object: QueryEstimateMultiHopSwapRequestAminoMsg): QueryEstimateMultiHopSwapRequest;
    fromProtoMsg(message: QueryEstimateMultiHopSwapRequestProtoMsg): QueryEstimateMultiHopSwapRequest;
    toProto(message: QueryEstimateMultiHopSwapRequest): Uint8Array;
    toProtoMsg(message: QueryEstimateMultiHopSwapRequest): QueryEstimateMultiHopSwapRequestProtoMsg;
};
export declare const QueryEstimateMultiHopSwapResponse: {
    typeUrl: string;
    encode(message: QueryEstimateMultiHopSwapResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryEstimateMultiHopSwapResponse;
    fromPartial(object: Partial<QueryEstimateMultiHopSwapResponse>): QueryEstimateMultiHopSwapResponse;
    fromAmino(object: QueryEstimateMultiHopSwapResponseAmino): QueryEstimateMultiHopSwapResponse;
    toAmino(message: QueryEstimateMultiHopSwapResponse): QueryEstimateMultiHopSwapResponseAmino;
    fromAminoMsg(object: QueryEstimateMultiHopSwapResponseAminoMsg): QueryEstimateMultiHopSwapResponse;
    fromProtoMsg(message: QueryEstimateMultiHopSwapResponseProtoMsg): QueryEstimateMultiHopSwapResponse;
    toProto(message: QueryEstimateMultiHopSwapResponse): Uint8Array;
    toProtoMsg(message: QueryEstimateMultiHopSwapResponse): QueryEstimateMultiHopSwapResponseProtoMsg;
};
export declare const QueryEstimatePlaceLimitOrderRequest: {
    typeUrl: string;
    encode(message: QueryEstimatePlaceLimitOrderRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryEstimatePlaceLimitOrderRequest;
    fromPartial(object: Partial<QueryEstimatePlaceLimitOrderRequest>): QueryEstimatePlaceLimitOrderRequest;
    fromAmino(object: QueryEstimatePlaceLimitOrderRequestAmino): QueryEstimatePlaceLimitOrderRequest;
    toAmino(message: QueryEstimatePlaceLimitOrderRequest): QueryEstimatePlaceLimitOrderRequestAmino;
    fromAminoMsg(object: QueryEstimatePlaceLimitOrderRequestAminoMsg): QueryEstimatePlaceLimitOrderRequest;
    fromProtoMsg(message: QueryEstimatePlaceLimitOrderRequestProtoMsg): QueryEstimatePlaceLimitOrderRequest;
    toProto(message: QueryEstimatePlaceLimitOrderRequest): Uint8Array;
    toProtoMsg(message: QueryEstimatePlaceLimitOrderRequest): QueryEstimatePlaceLimitOrderRequestProtoMsg;
};
export declare const QueryEstimatePlaceLimitOrderResponse: {
    typeUrl: string;
    encode(message: QueryEstimatePlaceLimitOrderResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryEstimatePlaceLimitOrderResponse;
    fromPartial(object: Partial<QueryEstimatePlaceLimitOrderResponse>): QueryEstimatePlaceLimitOrderResponse;
    fromAmino(object: QueryEstimatePlaceLimitOrderResponseAmino): QueryEstimatePlaceLimitOrderResponse;
    toAmino(message: QueryEstimatePlaceLimitOrderResponse): QueryEstimatePlaceLimitOrderResponseAmino;
    fromAminoMsg(object: QueryEstimatePlaceLimitOrderResponseAminoMsg): QueryEstimatePlaceLimitOrderResponse;
    fromProtoMsg(message: QueryEstimatePlaceLimitOrderResponseProtoMsg): QueryEstimatePlaceLimitOrderResponse;
    toProto(message: QueryEstimatePlaceLimitOrderResponse): Uint8Array;
    toProtoMsg(message: QueryEstimatePlaceLimitOrderResponse): QueryEstimatePlaceLimitOrderResponseProtoMsg;
};
export declare const QueryPoolRequest: {
    typeUrl: string;
    encode(message: QueryPoolRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryPoolRequest;
    fromPartial(object: Partial<QueryPoolRequest>): QueryPoolRequest;
    fromAmino(object: QueryPoolRequestAmino): QueryPoolRequest;
    toAmino(message: QueryPoolRequest): QueryPoolRequestAmino;
    fromAminoMsg(object: QueryPoolRequestAminoMsg): QueryPoolRequest;
    fromProtoMsg(message: QueryPoolRequestProtoMsg): QueryPoolRequest;
    toProto(message: QueryPoolRequest): Uint8Array;
    toProtoMsg(message: QueryPoolRequest): QueryPoolRequestProtoMsg;
};
export declare const QueryPoolByIDRequest: {
    typeUrl: string;
    encode(message: QueryPoolByIDRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryPoolByIDRequest;
    fromPartial(object: Partial<QueryPoolByIDRequest>): QueryPoolByIDRequest;
    fromAmino(object: QueryPoolByIDRequestAmino): QueryPoolByIDRequest;
    toAmino(message: QueryPoolByIDRequest): QueryPoolByIDRequestAmino;
    fromAminoMsg(object: QueryPoolByIDRequestAminoMsg): QueryPoolByIDRequest;
    fromProtoMsg(message: QueryPoolByIDRequestProtoMsg): QueryPoolByIDRequest;
    toProto(message: QueryPoolByIDRequest): Uint8Array;
    toProtoMsg(message: QueryPoolByIDRequest): QueryPoolByIDRequestProtoMsg;
};
export declare const QueryPoolResponse: {
    typeUrl: string;
    encode(message: QueryPoolResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryPoolResponse;
    fromPartial(object: Partial<QueryPoolResponse>): QueryPoolResponse;
    fromAmino(object: QueryPoolResponseAmino): QueryPoolResponse;
    toAmino(message: QueryPoolResponse): QueryPoolResponseAmino;
    fromAminoMsg(object: QueryPoolResponseAminoMsg): QueryPoolResponse;
    fromProtoMsg(message: QueryPoolResponseProtoMsg): QueryPoolResponse;
    toProto(message: QueryPoolResponse): Uint8Array;
    toProtoMsg(message: QueryPoolResponse): QueryPoolResponseProtoMsg;
};
export declare const QueryGetPoolMetadataRequest: {
    typeUrl: string;
    encode(message: QueryGetPoolMetadataRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryGetPoolMetadataRequest;
    fromPartial(object: Partial<QueryGetPoolMetadataRequest>): QueryGetPoolMetadataRequest;
    fromAmino(object: QueryGetPoolMetadataRequestAmino): QueryGetPoolMetadataRequest;
    toAmino(message: QueryGetPoolMetadataRequest): QueryGetPoolMetadataRequestAmino;
    fromAminoMsg(object: QueryGetPoolMetadataRequestAminoMsg): QueryGetPoolMetadataRequest;
    fromProtoMsg(message: QueryGetPoolMetadataRequestProtoMsg): QueryGetPoolMetadataRequest;
    toProto(message: QueryGetPoolMetadataRequest): Uint8Array;
    toProtoMsg(message: QueryGetPoolMetadataRequest): QueryGetPoolMetadataRequestProtoMsg;
};
export declare const QueryGetPoolMetadataResponse: {
    typeUrl: string;
    encode(message: QueryGetPoolMetadataResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryGetPoolMetadataResponse;
    fromPartial(object: Partial<QueryGetPoolMetadataResponse>): QueryGetPoolMetadataResponse;
    fromAmino(object: QueryGetPoolMetadataResponseAmino): QueryGetPoolMetadataResponse;
    toAmino(message: QueryGetPoolMetadataResponse): QueryGetPoolMetadataResponseAmino;
    fromAminoMsg(object: QueryGetPoolMetadataResponseAminoMsg): QueryGetPoolMetadataResponse;
    fromProtoMsg(message: QueryGetPoolMetadataResponseProtoMsg): QueryGetPoolMetadataResponse;
    toProto(message: QueryGetPoolMetadataResponse): Uint8Array;
    toProtoMsg(message: QueryGetPoolMetadataResponse): QueryGetPoolMetadataResponseProtoMsg;
};
export declare const QueryAllPoolMetadataRequest: {
    typeUrl: string;
    encode(message: QueryAllPoolMetadataRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAllPoolMetadataRequest;
    fromPartial(object: Partial<QueryAllPoolMetadataRequest>): QueryAllPoolMetadataRequest;
    fromAmino(object: QueryAllPoolMetadataRequestAmino): QueryAllPoolMetadataRequest;
    toAmino(message: QueryAllPoolMetadataRequest): QueryAllPoolMetadataRequestAmino;
    fromAminoMsg(object: QueryAllPoolMetadataRequestAminoMsg): QueryAllPoolMetadataRequest;
    fromProtoMsg(message: QueryAllPoolMetadataRequestProtoMsg): QueryAllPoolMetadataRequest;
    toProto(message: QueryAllPoolMetadataRequest): Uint8Array;
    toProtoMsg(message: QueryAllPoolMetadataRequest): QueryAllPoolMetadataRequestProtoMsg;
};
export declare const QueryAllPoolMetadataResponse: {
    typeUrl: string;
    encode(message: QueryAllPoolMetadataResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAllPoolMetadataResponse;
    fromPartial(object: Partial<QueryAllPoolMetadataResponse>): QueryAllPoolMetadataResponse;
    fromAmino(object: QueryAllPoolMetadataResponseAmino): QueryAllPoolMetadataResponse;
    toAmino(message: QueryAllPoolMetadataResponse): QueryAllPoolMetadataResponseAmino;
    fromAminoMsg(object: QueryAllPoolMetadataResponseAminoMsg): QueryAllPoolMetadataResponse;
    fromProtoMsg(message: QueryAllPoolMetadataResponseProtoMsg): QueryAllPoolMetadataResponse;
    toProto(message: QueryAllPoolMetadataResponse): Uint8Array;
    toProtoMsg(message: QueryAllPoolMetadataResponse): QueryAllPoolMetadataResponseProtoMsg;
};
