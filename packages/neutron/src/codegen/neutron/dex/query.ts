import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { MultiHopRoute, MultiHopRouteAmino, MultiHopRouteSDKType, LimitOrderType, limitOrderTypeFromJSON } from "./tx";
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
import { isSet, fromJsonTimestamp } from "../../helpers";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/neutron.dex.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/neutron.dex.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {}
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
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/neutron.dex.QueryParamsRequest",
  encode(_: QueryParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryParamsRequest {
    return {};
  },
  fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  toAmino(_: QueryParamsRequest): QueryParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest {
    return QueryParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: "/neutron.dex.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryParamsResponse = {
  typeUrl: "/neutron.dex.QueryParamsResponse",
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryParamsResponse {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: QueryParamsResponse): QueryParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse {
    return QueryParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/neutron.dex.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetLimitOrderTrancheUserRequest(): QueryGetLimitOrderTrancheUserRequest {
  return {
    address: "",
    trancheKey: ""
  };
}
export const QueryGetLimitOrderTrancheUserRequest = {
  typeUrl: "/neutron.dex.QueryGetLimitOrderTrancheUserRequest",
  encode(message: QueryGetLimitOrderTrancheUserRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.trancheKey !== "") {
      writer.uint32(18).string(message.trancheKey);
    }
    return writer;
  },
  fromJSON(object: any): QueryGetLimitOrderTrancheUserRequest {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      trancheKey: isSet(object.trancheKey) ? String(object.trancheKey) : ""
    };
  },
  fromPartial(object: Partial<QueryGetLimitOrderTrancheUserRequest>): QueryGetLimitOrderTrancheUserRequest {
    const message = createBaseQueryGetLimitOrderTrancheUserRequest();
    message.address = object.address ?? "";
    message.trancheKey = object.trancheKey ?? "";
    return message;
  },
  fromAmino(object: QueryGetLimitOrderTrancheUserRequestAmino): QueryGetLimitOrderTrancheUserRequest {
    const message = createBaseQueryGetLimitOrderTrancheUserRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.tranche_key !== undefined && object.tranche_key !== null) {
      message.trancheKey = object.tranche_key;
    }
    return message;
  },
  toAmino(message: QueryGetLimitOrderTrancheUserRequest): QueryGetLimitOrderTrancheUserRequestAmino {
    const obj: any = {};
    obj.address = message.address;
    obj.tranche_key = message.trancheKey;
    return obj;
  },
  fromAminoMsg(object: QueryGetLimitOrderTrancheUserRequestAminoMsg): QueryGetLimitOrderTrancheUserRequest {
    return QueryGetLimitOrderTrancheUserRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetLimitOrderTrancheUserRequestProtoMsg): QueryGetLimitOrderTrancheUserRequest {
    return QueryGetLimitOrderTrancheUserRequest.decode(message.value);
  },
  toProto(message: QueryGetLimitOrderTrancheUserRequest): Uint8Array {
    return QueryGetLimitOrderTrancheUserRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetLimitOrderTrancheUserRequest): QueryGetLimitOrderTrancheUserRequestProtoMsg {
    return {
      typeUrl: "/neutron.dex.QueryGetLimitOrderTrancheUserRequest",
      value: QueryGetLimitOrderTrancheUserRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetLimitOrderTrancheUserResponse(): QueryGetLimitOrderTrancheUserResponse {
  return {
    limitOrderTrancheUser: undefined
  };
}
export const QueryGetLimitOrderTrancheUserResponse = {
  typeUrl: "/neutron.dex.QueryGetLimitOrderTrancheUserResponse",
  encode(message: QueryGetLimitOrderTrancheUserResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.limitOrderTrancheUser !== undefined) {
      LimitOrderTrancheUser.encode(message.limitOrderTrancheUser, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryGetLimitOrderTrancheUserResponse {
    return {
      limitOrderTrancheUser: isSet(object.limitOrderTrancheUser) ? LimitOrderTrancheUser.fromJSON(object.limitOrderTrancheUser) : undefined
    };
  },
  fromPartial(object: Partial<QueryGetLimitOrderTrancheUserResponse>): QueryGetLimitOrderTrancheUserResponse {
    const message = createBaseQueryGetLimitOrderTrancheUserResponse();
    message.limitOrderTrancheUser = object.limitOrderTrancheUser !== undefined && object.limitOrderTrancheUser !== null ? LimitOrderTrancheUser.fromPartial(object.limitOrderTrancheUser) : undefined;
    return message;
  },
  fromAmino(object: QueryGetLimitOrderTrancheUserResponseAmino): QueryGetLimitOrderTrancheUserResponse {
    const message = createBaseQueryGetLimitOrderTrancheUserResponse();
    if (object.limit_order_tranche_user !== undefined && object.limit_order_tranche_user !== null) {
      message.limitOrderTrancheUser = LimitOrderTrancheUser.fromAmino(object.limit_order_tranche_user);
    }
    return message;
  },
  toAmino(message: QueryGetLimitOrderTrancheUserResponse): QueryGetLimitOrderTrancheUserResponseAmino {
    const obj: any = {};
    obj.limit_order_tranche_user = message.limitOrderTrancheUser ? LimitOrderTrancheUser.toAmino(message.limitOrderTrancheUser) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetLimitOrderTrancheUserResponseAminoMsg): QueryGetLimitOrderTrancheUserResponse {
    return QueryGetLimitOrderTrancheUserResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetLimitOrderTrancheUserResponseProtoMsg): QueryGetLimitOrderTrancheUserResponse {
    return QueryGetLimitOrderTrancheUserResponse.decode(message.value);
  },
  toProto(message: QueryGetLimitOrderTrancheUserResponse): Uint8Array {
    return QueryGetLimitOrderTrancheUserResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetLimitOrderTrancheUserResponse): QueryGetLimitOrderTrancheUserResponseProtoMsg {
    return {
      typeUrl: "/neutron.dex.QueryGetLimitOrderTrancheUserResponse",
      value: QueryGetLimitOrderTrancheUserResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllLimitOrderTrancheUserRequest(): QueryAllLimitOrderTrancheUserRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllLimitOrderTrancheUserRequest = {
  typeUrl: "/neutron.dex.QueryAllLimitOrderTrancheUserRequest",
  encode(message: QueryAllLimitOrderTrancheUserRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryAllLimitOrderTrancheUserRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryAllLimitOrderTrancheUserRequest>): QueryAllLimitOrderTrancheUserRequest {
    const message = createBaseQueryAllLimitOrderTrancheUserRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllLimitOrderTrancheUserRequestAmino): QueryAllLimitOrderTrancheUserRequest {
    const message = createBaseQueryAllLimitOrderTrancheUserRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllLimitOrderTrancheUserRequest): QueryAllLimitOrderTrancheUserRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllLimitOrderTrancheUserRequestAminoMsg): QueryAllLimitOrderTrancheUserRequest {
    return QueryAllLimitOrderTrancheUserRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllLimitOrderTrancheUserRequestProtoMsg): QueryAllLimitOrderTrancheUserRequest {
    return QueryAllLimitOrderTrancheUserRequest.decode(message.value);
  },
  toProto(message: QueryAllLimitOrderTrancheUserRequest): Uint8Array {
    return QueryAllLimitOrderTrancheUserRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllLimitOrderTrancheUserRequest): QueryAllLimitOrderTrancheUserRequestProtoMsg {
    return {
      typeUrl: "/neutron.dex.QueryAllLimitOrderTrancheUserRequest",
      value: QueryAllLimitOrderTrancheUserRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllLimitOrderTrancheUserResponse(): QueryAllLimitOrderTrancheUserResponse {
  return {
    limitOrderTrancheUser: [],
    pagination: undefined
  };
}
export const QueryAllLimitOrderTrancheUserResponse = {
  typeUrl: "/neutron.dex.QueryAllLimitOrderTrancheUserResponse",
  encode(message: QueryAllLimitOrderTrancheUserResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.limitOrderTrancheUser) {
      LimitOrderTrancheUser.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryAllLimitOrderTrancheUserResponse {
    return {
      limitOrderTrancheUser: Array.isArray(object?.limitOrderTrancheUser) ? object.limitOrderTrancheUser.map((e: any) => LimitOrderTrancheUser.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryAllLimitOrderTrancheUserResponse>): QueryAllLimitOrderTrancheUserResponse {
    const message = createBaseQueryAllLimitOrderTrancheUserResponse();
    message.limitOrderTrancheUser = object.limitOrderTrancheUser?.map(e => LimitOrderTrancheUser.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllLimitOrderTrancheUserResponseAmino): QueryAllLimitOrderTrancheUserResponse {
    const message = createBaseQueryAllLimitOrderTrancheUserResponse();
    message.limitOrderTrancheUser = object.limit_order_tranche_user?.map(e => LimitOrderTrancheUser.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllLimitOrderTrancheUserResponse): QueryAllLimitOrderTrancheUserResponseAmino {
    const obj: any = {};
    if (message.limitOrderTrancheUser) {
      obj.limit_order_tranche_user = message.limitOrderTrancheUser.map(e => e ? LimitOrderTrancheUser.toAmino(e) : undefined);
    } else {
      obj.limit_order_tranche_user = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllLimitOrderTrancheUserResponseAminoMsg): QueryAllLimitOrderTrancheUserResponse {
    return QueryAllLimitOrderTrancheUserResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllLimitOrderTrancheUserResponseProtoMsg): QueryAllLimitOrderTrancheUserResponse {
    return QueryAllLimitOrderTrancheUserResponse.decode(message.value);
  },
  toProto(message: QueryAllLimitOrderTrancheUserResponse): Uint8Array {
    return QueryAllLimitOrderTrancheUserResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllLimitOrderTrancheUserResponse): QueryAllLimitOrderTrancheUserResponseProtoMsg {
    return {
      typeUrl: "/neutron.dex.QueryAllLimitOrderTrancheUserResponse",
      value: QueryAllLimitOrderTrancheUserResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetLimitOrderTrancheRequest(): QueryGetLimitOrderTrancheRequest {
  return {
    pairId: "",
    tickIndex: BigInt(0),
    tokenIn: "",
    trancheKey: ""
  };
}
export const QueryGetLimitOrderTrancheRequest = {
  typeUrl: "/neutron.dex.QueryGetLimitOrderTrancheRequest",
  encode(message: QueryGetLimitOrderTrancheRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pairId !== "") {
      writer.uint32(10).string(message.pairId);
    }
    if (message.tickIndex !== BigInt(0)) {
      writer.uint32(16).int64(message.tickIndex);
    }
    if (message.tokenIn !== "") {
      writer.uint32(26).string(message.tokenIn);
    }
    if (message.trancheKey !== "") {
      writer.uint32(34).string(message.trancheKey);
    }
    return writer;
  },
  fromJSON(object: any): QueryGetLimitOrderTrancheRequest {
    return {
      pairId: isSet(object.pairId) ? String(object.pairId) : "",
      tickIndex: isSet(object.tickIndex) ? BigInt(object.tickIndex.toString()) : BigInt(0),
      tokenIn: isSet(object.tokenIn) ? String(object.tokenIn) : "",
      trancheKey: isSet(object.trancheKey) ? String(object.trancheKey) : ""
    };
  },
  fromPartial(object: Partial<QueryGetLimitOrderTrancheRequest>): QueryGetLimitOrderTrancheRequest {
    const message = createBaseQueryGetLimitOrderTrancheRequest();
    message.pairId = object.pairId ?? "";
    message.tickIndex = object.tickIndex !== undefined && object.tickIndex !== null ? BigInt(object.tickIndex.toString()) : BigInt(0);
    message.tokenIn = object.tokenIn ?? "";
    message.trancheKey = object.trancheKey ?? "";
    return message;
  },
  fromAmino(object: QueryGetLimitOrderTrancheRequestAmino): QueryGetLimitOrderTrancheRequest {
    const message = createBaseQueryGetLimitOrderTrancheRequest();
    if (object.pair_id !== undefined && object.pair_id !== null) {
      message.pairId = object.pair_id;
    }
    if (object.tick_index !== undefined && object.tick_index !== null) {
      message.tickIndex = BigInt(object.tick_index);
    }
    if (object.token_in !== undefined && object.token_in !== null) {
      message.tokenIn = object.token_in;
    }
    if (object.tranche_key !== undefined && object.tranche_key !== null) {
      message.trancheKey = object.tranche_key;
    }
    return message;
  },
  toAmino(message: QueryGetLimitOrderTrancheRequest): QueryGetLimitOrderTrancheRequestAmino {
    const obj: any = {};
    obj.pair_id = message.pairId;
    obj.tick_index = message.tickIndex ? message.tickIndex.toString() : undefined;
    obj.token_in = message.tokenIn;
    obj.tranche_key = message.trancheKey;
    return obj;
  },
  fromAminoMsg(object: QueryGetLimitOrderTrancheRequestAminoMsg): QueryGetLimitOrderTrancheRequest {
    return QueryGetLimitOrderTrancheRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetLimitOrderTrancheRequestProtoMsg): QueryGetLimitOrderTrancheRequest {
    return QueryGetLimitOrderTrancheRequest.decode(message.value);
  },
  toProto(message: QueryGetLimitOrderTrancheRequest): Uint8Array {
    return QueryGetLimitOrderTrancheRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetLimitOrderTrancheRequest): QueryGetLimitOrderTrancheRequestProtoMsg {
    return {
      typeUrl: "/neutron.dex.QueryGetLimitOrderTrancheRequest",
      value: QueryGetLimitOrderTrancheRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetLimitOrderTrancheResponse(): QueryGetLimitOrderTrancheResponse {
  return {
    limitOrderTranche: undefined
  };
}
export const QueryGetLimitOrderTrancheResponse = {
  typeUrl: "/neutron.dex.QueryGetLimitOrderTrancheResponse",
  encode(message: QueryGetLimitOrderTrancheResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.limitOrderTranche !== undefined) {
      LimitOrderTranche.encode(message.limitOrderTranche, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryGetLimitOrderTrancheResponse {
    return {
      limitOrderTranche: isSet(object.limitOrderTranche) ? LimitOrderTranche.fromJSON(object.limitOrderTranche) : undefined
    };
  },
  fromPartial(object: Partial<QueryGetLimitOrderTrancheResponse>): QueryGetLimitOrderTrancheResponse {
    const message = createBaseQueryGetLimitOrderTrancheResponse();
    message.limitOrderTranche = object.limitOrderTranche !== undefined && object.limitOrderTranche !== null ? LimitOrderTranche.fromPartial(object.limitOrderTranche) : undefined;
    return message;
  },
  fromAmino(object: QueryGetLimitOrderTrancheResponseAmino): QueryGetLimitOrderTrancheResponse {
    const message = createBaseQueryGetLimitOrderTrancheResponse();
    if (object.limit_order_tranche !== undefined && object.limit_order_tranche !== null) {
      message.limitOrderTranche = LimitOrderTranche.fromAmino(object.limit_order_tranche);
    }
    return message;
  },
  toAmino(message: QueryGetLimitOrderTrancheResponse): QueryGetLimitOrderTrancheResponseAmino {
    const obj: any = {};
    obj.limit_order_tranche = message.limitOrderTranche ? LimitOrderTranche.toAmino(message.limitOrderTranche) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetLimitOrderTrancheResponseAminoMsg): QueryGetLimitOrderTrancheResponse {
    return QueryGetLimitOrderTrancheResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetLimitOrderTrancheResponseProtoMsg): QueryGetLimitOrderTrancheResponse {
    return QueryGetLimitOrderTrancheResponse.decode(message.value);
  },
  toProto(message: QueryGetLimitOrderTrancheResponse): Uint8Array {
    return QueryGetLimitOrderTrancheResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetLimitOrderTrancheResponse): QueryGetLimitOrderTrancheResponseProtoMsg {
    return {
      typeUrl: "/neutron.dex.QueryGetLimitOrderTrancheResponse",
      value: QueryGetLimitOrderTrancheResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllLimitOrderTrancheRequest(): QueryAllLimitOrderTrancheRequest {
  return {
    pairId: "",
    tokenIn: "",
    pagination: undefined
  };
}
export const QueryAllLimitOrderTrancheRequest = {
  typeUrl: "/neutron.dex.QueryAllLimitOrderTrancheRequest",
  encode(message: QueryAllLimitOrderTrancheRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pairId !== "") {
      writer.uint32(10).string(message.pairId);
    }
    if (message.tokenIn !== "") {
      writer.uint32(18).string(message.tokenIn);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryAllLimitOrderTrancheRequest {
    return {
      pairId: isSet(object.pairId) ? String(object.pairId) : "",
      tokenIn: isSet(object.tokenIn) ? String(object.tokenIn) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryAllLimitOrderTrancheRequest>): QueryAllLimitOrderTrancheRequest {
    const message = createBaseQueryAllLimitOrderTrancheRequest();
    message.pairId = object.pairId ?? "";
    message.tokenIn = object.tokenIn ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllLimitOrderTrancheRequestAmino): QueryAllLimitOrderTrancheRequest {
    const message = createBaseQueryAllLimitOrderTrancheRequest();
    if (object.pair_id !== undefined && object.pair_id !== null) {
      message.pairId = object.pair_id;
    }
    if (object.token_in !== undefined && object.token_in !== null) {
      message.tokenIn = object.token_in;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllLimitOrderTrancheRequest): QueryAllLimitOrderTrancheRequestAmino {
    const obj: any = {};
    obj.pair_id = message.pairId;
    obj.token_in = message.tokenIn;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllLimitOrderTrancheRequestAminoMsg): QueryAllLimitOrderTrancheRequest {
    return QueryAllLimitOrderTrancheRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllLimitOrderTrancheRequestProtoMsg): QueryAllLimitOrderTrancheRequest {
    return QueryAllLimitOrderTrancheRequest.decode(message.value);
  },
  toProto(message: QueryAllLimitOrderTrancheRequest): Uint8Array {
    return QueryAllLimitOrderTrancheRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllLimitOrderTrancheRequest): QueryAllLimitOrderTrancheRequestProtoMsg {
    return {
      typeUrl: "/neutron.dex.QueryAllLimitOrderTrancheRequest",
      value: QueryAllLimitOrderTrancheRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllLimitOrderTrancheResponse(): QueryAllLimitOrderTrancheResponse {
  return {
    limitOrderTranche: [],
    pagination: undefined
  };
}
export const QueryAllLimitOrderTrancheResponse = {
  typeUrl: "/neutron.dex.QueryAllLimitOrderTrancheResponse",
  encode(message: QueryAllLimitOrderTrancheResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.limitOrderTranche) {
      LimitOrderTranche.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryAllLimitOrderTrancheResponse {
    return {
      limitOrderTranche: Array.isArray(object?.limitOrderTranche) ? object.limitOrderTranche.map((e: any) => LimitOrderTranche.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryAllLimitOrderTrancheResponse>): QueryAllLimitOrderTrancheResponse {
    const message = createBaseQueryAllLimitOrderTrancheResponse();
    message.limitOrderTranche = object.limitOrderTranche?.map(e => LimitOrderTranche.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllLimitOrderTrancheResponseAmino): QueryAllLimitOrderTrancheResponse {
    const message = createBaseQueryAllLimitOrderTrancheResponse();
    message.limitOrderTranche = object.limit_order_tranche?.map(e => LimitOrderTranche.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllLimitOrderTrancheResponse): QueryAllLimitOrderTrancheResponseAmino {
    const obj: any = {};
    if (message.limitOrderTranche) {
      obj.limit_order_tranche = message.limitOrderTranche.map(e => e ? LimitOrderTranche.toAmino(e) : undefined);
    } else {
      obj.limit_order_tranche = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllLimitOrderTrancheResponseAminoMsg): QueryAllLimitOrderTrancheResponse {
    return QueryAllLimitOrderTrancheResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllLimitOrderTrancheResponseProtoMsg): QueryAllLimitOrderTrancheResponse {
    return QueryAllLimitOrderTrancheResponse.decode(message.value);
  },
  toProto(message: QueryAllLimitOrderTrancheResponse): Uint8Array {
    return QueryAllLimitOrderTrancheResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllLimitOrderTrancheResponse): QueryAllLimitOrderTrancheResponseProtoMsg {
    return {
      typeUrl: "/neutron.dex.QueryAllLimitOrderTrancheResponse",
      value: QueryAllLimitOrderTrancheResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllUserDepositsRequest(): QueryAllUserDepositsRequest {
  return {
    address: "",
    pagination: undefined
  };
}
export const QueryAllUserDepositsRequest = {
  typeUrl: "/neutron.dex.QueryAllUserDepositsRequest",
  encode(message: QueryAllUserDepositsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryAllUserDepositsRequest {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryAllUserDepositsRequest>): QueryAllUserDepositsRequest {
    const message = createBaseQueryAllUserDepositsRequest();
    message.address = object.address ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllUserDepositsRequestAmino): QueryAllUserDepositsRequest {
    const message = createBaseQueryAllUserDepositsRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllUserDepositsRequest): QueryAllUserDepositsRequestAmino {
    const obj: any = {};
    obj.address = message.address;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllUserDepositsRequestAminoMsg): QueryAllUserDepositsRequest {
    return QueryAllUserDepositsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllUserDepositsRequestProtoMsg): QueryAllUserDepositsRequest {
    return QueryAllUserDepositsRequest.decode(message.value);
  },
  toProto(message: QueryAllUserDepositsRequest): Uint8Array {
    return QueryAllUserDepositsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllUserDepositsRequest): QueryAllUserDepositsRequestProtoMsg {
    return {
      typeUrl: "/neutron.dex.QueryAllUserDepositsRequest",
      value: QueryAllUserDepositsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllUserDepositsResponse(): QueryAllUserDepositsResponse {
  return {
    deposits: [],
    pagination: undefined
  };
}
export const QueryAllUserDepositsResponse = {
  typeUrl: "/neutron.dex.QueryAllUserDepositsResponse",
  encode(message: QueryAllUserDepositsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.deposits) {
      DepositRecord.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryAllUserDepositsResponse {
    return {
      deposits: Array.isArray(object?.deposits) ? object.deposits.map((e: any) => DepositRecord.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryAllUserDepositsResponse>): QueryAllUserDepositsResponse {
    const message = createBaseQueryAllUserDepositsResponse();
    message.deposits = object.deposits?.map(e => DepositRecord.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllUserDepositsResponseAmino): QueryAllUserDepositsResponse {
    const message = createBaseQueryAllUserDepositsResponse();
    message.deposits = object.deposits?.map(e => DepositRecord.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllUserDepositsResponse): QueryAllUserDepositsResponseAmino {
    const obj: any = {};
    if (message.deposits) {
      obj.deposits = message.deposits.map(e => e ? DepositRecord.toAmino(e) : undefined);
    } else {
      obj.deposits = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllUserDepositsResponseAminoMsg): QueryAllUserDepositsResponse {
    return QueryAllUserDepositsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllUserDepositsResponseProtoMsg): QueryAllUserDepositsResponse {
    return QueryAllUserDepositsResponse.decode(message.value);
  },
  toProto(message: QueryAllUserDepositsResponse): Uint8Array {
    return QueryAllUserDepositsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllUserDepositsResponse): QueryAllUserDepositsResponseProtoMsg {
    return {
      typeUrl: "/neutron.dex.QueryAllUserDepositsResponse",
      value: QueryAllUserDepositsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllUserLimitOrdersRequest(): QueryAllUserLimitOrdersRequest {
  return {
    address: "",
    pagination: undefined
  };
}
export const QueryAllUserLimitOrdersRequest = {
  typeUrl: "/neutron.dex.QueryAllUserLimitOrdersRequest",
  encode(message: QueryAllUserLimitOrdersRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryAllUserLimitOrdersRequest {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryAllUserLimitOrdersRequest>): QueryAllUserLimitOrdersRequest {
    const message = createBaseQueryAllUserLimitOrdersRequest();
    message.address = object.address ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllUserLimitOrdersRequestAmino): QueryAllUserLimitOrdersRequest {
    const message = createBaseQueryAllUserLimitOrdersRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllUserLimitOrdersRequest): QueryAllUserLimitOrdersRequestAmino {
    const obj: any = {};
    obj.address = message.address;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllUserLimitOrdersRequestAminoMsg): QueryAllUserLimitOrdersRequest {
    return QueryAllUserLimitOrdersRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllUserLimitOrdersRequestProtoMsg): QueryAllUserLimitOrdersRequest {
    return QueryAllUserLimitOrdersRequest.decode(message.value);
  },
  toProto(message: QueryAllUserLimitOrdersRequest): Uint8Array {
    return QueryAllUserLimitOrdersRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllUserLimitOrdersRequest): QueryAllUserLimitOrdersRequestProtoMsg {
    return {
      typeUrl: "/neutron.dex.QueryAllUserLimitOrdersRequest",
      value: QueryAllUserLimitOrdersRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllUserLimitOrdersResponse(): QueryAllUserLimitOrdersResponse {
  return {
    limitOrders: [],
    pagination: undefined
  };
}
export const QueryAllUserLimitOrdersResponse = {
  typeUrl: "/neutron.dex.QueryAllUserLimitOrdersResponse",
  encode(message: QueryAllUserLimitOrdersResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.limitOrders) {
      LimitOrderTrancheUser.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryAllUserLimitOrdersResponse {
    return {
      limitOrders: Array.isArray(object?.limitOrders) ? object.limitOrders.map((e: any) => LimitOrderTrancheUser.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryAllUserLimitOrdersResponse>): QueryAllUserLimitOrdersResponse {
    const message = createBaseQueryAllUserLimitOrdersResponse();
    message.limitOrders = object.limitOrders?.map(e => LimitOrderTrancheUser.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllUserLimitOrdersResponseAmino): QueryAllUserLimitOrdersResponse {
    const message = createBaseQueryAllUserLimitOrdersResponse();
    message.limitOrders = object.limit_orders?.map(e => LimitOrderTrancheUser.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllUserLimitOrdersResponse): QueryAllUserLimitOrdersResponseAmino {
    const obj: any = {};
    if (message.limitOrders) {
      obj.limit_orders = message.limitOrders.map(e => e ? LimitOrderTrancheUser.toAmino(e) : undefined);
    } else {
      obj.limit_orders = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllUserLimitOrdersResponseAminoMsg): QueryAllUserLimitOrdersResponse {
    return QueryAllUserLimitOrdersResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllUserLimitOrdersResponseProtoMsg): QueryAllUserLimitOrdersResponse {
    return QueryAllUserLimitOrdersResponse.decode(message.value);
  },
  toProto(message: QueryAllUserLimitOrdersResponse): Uint8Array {
    return QueryAllUserLimitOrdersResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllUserLimitOrdersResponse): QueryAllUserLimitOrdersResponseProtoMsg {
    return {
      typeUrl: "/neutron.dex.QueryAllUserLimitOrdersResponse",
      value: QueryAllUserLimitOrdersResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllTickLiquidityRequest(): QueryAllTickLiquidityRequest {
  return {
    pairId: "",
    tokenIn: "",
    pagination: undefined
  };
}
export const QueryAllTickLiquidityRequest = {
  typeUrl: "/neutron.dex.QueryAllTickLiquidityRequest",
  encode(message: QueryAllTickLiquidityRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pairId !== "") {
      writer.uint32(10).string(message.pairId);
    }
    if (message.tokenIn !== "") {
      writer.uint32(18).string(message.tokenIn);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryAllTickLiquidityRequest {
    return {
      pairId: isSet(object.pairId) ? String(object.pairId) : "",
      tokenIn: isSet(object.tokenIn) ? String(object.tokenIn) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryAllTickLiquidityRequest>): QueryAllTickLiquidityRequest {
    const message = createBaseQueryAllTickLiquidityRequest();
    message.pairId = object.pairId ?? "";
    message.tokenIn = object.tokenIn ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllTickLiquidityRequestAmino): QueryAllTickLiquidityRequest {
    const message = createBaseQueryAllTickLiquidityRequest();
    if (object.pair_id !== undefined && object.pair_id !== null) {
      message.pairId = object.pair_id;
    }
    if (object.token_in !== undefined && object.token_in !== null) {
      message.tokenIn = object.token_in;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllTickLiquidityRequest): QueryAllTickLiquidityRequestAmino {
    const obj: any = {};
    obj.pair_id = message.pairId;
    obj.token_in = message.tokenIn;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllTickLiquidityRequestAminoMsg): QueryAllTickLiquidityRequest {
    return QueryAllTickLiquidityRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllTickLiquidityRequestProtoMsg): QueryAllTickLiquidityRequest {
    return QueryAllTickLiquidityRequest.decode(message.value);
  },
  toProto(message: QueryAllTickLiquidityRequest): Uint8Array {
    return QueryAllTickLiquidityRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllTickLiquidityRequest): QueryAllTickLiquidityRequestProtoMsg {
    return {
      typeUrl: "/neutron.dex.QueryAllTickLiquidityRequest",
      value: QueryAllTickLiquidityRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllTickLiquidityResponse(): QueryAllTickLiquidityResponse {
  return {
    tickLiquidity: [],
    pagination: undefined
  };
}
export const QueryAllTickLiquidityResponse = {
  typeUrl: "/neutron.dex.QueryAllTickLiquidityResponse",
  encode(message: QueryAllTickLiquidityResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.tickLiquidity) {
      TickLiquidity.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryAllTickLiquidityResponse {
    return {
      tickLiquidity: Array.isArray(object?.tickLiquidity) ? object.tickLiquidity.map((e: any) => TickLiquidity.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryAllTickLiquidityResponse>): QueryAllTickLiquidityResponse {
    const message = createBaseQueryAllTickLiquidityResponse();
    message.tickLiquidity = object.tickLiquidity?.map(e => TickLiquidity.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllTickLiquidityResponseAmino): QueryAllTickLiquidityResponse {
    const message = createBaseQueryAllTickLiquidityResponse();
    message.tickLiquidity = object.tick_liquidity?.map(e => TickLiquidity.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllTickLiquidityResponse): QueryAllTickLiquidityResponseAmino {
    const obj: any = {};
    if (message.tickLiquidity) {
      obj.tick_liquidity = message.tickLiquidity.map(e => e ? TickLiquidity.toAmino(e) : undefined);
    } else {
      obj.tick_liquidity = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllTickLiquidityResponseAminoMsg): QueryAllTickLiquidityResponse {
    return QueryAllTickLiquidityResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllTickLiquidityResponseProtoMsg): QueryAllTickLiquidityResponse {
    return QueryAllTickLiquidityResponse.decode(message.value);
  },
  toProto(message: QueryAllTickLiquidityResponse): Uint8Array {
    return QueryAllTickLiquidityResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllTickLiquidityResponse): QueryAllTickLiquidityResponseProtoMsg {
    return {
      typeUrl: "/neutron.dex.QueryAllTickLiquidityResponse",
      value: QueryAllTickLiquidityResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetInactiveLimitOrderTrancheRequest(): QueryGetInactiveLimitOrderTrancheRequest {
  return {
    pairId: "",
    tokenIn: "",
    tickIndex: BigInt(0),
    trancheKey: ""
  };
}
export const QueryGetInactiveLimitOrderTrancheRequest = {
  typeUrl: "/neutron.dex.QueryGetInactiveLimitOrderTrancheRequest",
  encode(message: QueryGetInactiveLimitOrderTrancheRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pairId !== "") {
      writer.uint32(10).string(message.pairId);
    }
    if (message.tokenIn !== "") {
      writer.uint32(18).string(message.tokenIn);
    }
    if (message.tickIndex !== BigInt(0)) {
      writer.uint32(24).int64(message.tickIndex);
    }
    if (message.trancheKey !== "") {
      writer.uint32(34).string(message.trancheKey);
    }
    return writer;
  },
  fromJSON(object: any): QueryGetInactiveLimitOrderTrancheRequest {
    return {
      pairId: isSet(object.pairId) ? String(object.pairId) : "",
      tokenIn: isSet(object.tokenIn) ? String(object.tokenIn) : "",
      tickIndex: isSet(object.tickIndex) ? BigInt(object.tickIndex.toString()) : BigInt(0),
      trancheKey: isSet(object.trancheKey) ? String(object.trancheKey) : ""
    };
  },
  fromPartial(object: Partial<QueryGetInactiveLimitOrderTrancheRequest>): QueryGetInactiveLimitOrderTrancheRequest {
    const message = createBaseQueryGetInactiveLimitOrderTrancheRequest();
    message.pairId = object.pairId ?? "";
    message.tokenIn = object.tokenIn ?? "";
    message.tickIndex = object.tickIndex !== undefined && object.tickIndex !== null ? BigInt(object.tickIndex.toString()) : BigInt(0);
    message.trancheKey = object.trancheKey ?? "";
    return message;
  },
  fromAmino(object: QueryGetInactiveLimitOrderTrancheRequestAmino): QueryGetInactiveLimitOrderTrancheRequest {
    const message = createBaseQueryGetInactiveLimitOrderTrancheRequest();
    if (object.pair_id !== undefined && object.pair_id !== null) {
      message.pairId = object.pair_id;
    }
    if (object.token_in !== undefined && object.token_in !== null) {
      message.tokenIn = object.token_in;
    }
    if (object.tick_index !== undefined && object.tick_index !== null) {
      message.tickIndex = BigInt(object.tick_index);
    }
    if (object.tranche_key !== undefined && object.tranche_key !== null) {
      message.trancheKey = object.tranche_key;
    }
    return message;
  },
  toAmino(message: QueryGetInactiveLimitOrderTrancheRequest): QueryGetInactiveLimitOrderTrancheRequestAmino {
    const obj: any = {};
    obj.pair_id = message.pairId;
    obj.token_in = message.tokenIn;
    obj.tick_index = message.tickIndex ? message.tickIndex.toString() : undefined;
    obj.tranche_key = message.trancheKey;
    return obj;
  },
  fromAminoMsg(object: QueryGetInactiveLimitOrderTrancheRequestAminoMsg): QueryGetInactiveLimitOrderTrancheRequest {
    return QueryGetInactiveLimitOrderTrancheRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetInactiveLimitOrderTrancheRequestProtoMsg): QueryGetInactiveLimitOrderTrancheRequest {
    return QueryGetInactiveLimitOrderTrancheRequest.decode(message.value);
  },
  toProto(message: QueryGetInactiveLimitOrderTrancheRequest): Uint8Array {
    return QueryGetInactiveLimitOrderTrancheRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetInactiveLimitOrderTrancheRequest): QueryGetInactiveLimitOrderTrancheRequestProtoMsg {
    return {
      typeUrl: "/neutron.dex.QueryGetInactiveLimitOrderTrancheRequest",
      value: QueryGetInactiveLimitOrderTrancheRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetInactiveLimitOrderTrancheResponse(): QueryGetInactiveLimitOrderTrancheResponse {
  return {
    inactiveLimitOrderTranche: undefined
  };
}
export const QueryGetInactiveLimitOrderTrancheResponse = {
  typeUrl: "/neutron.dex.QueryGetInactiveLimitOrderTrancheResponse",
  encode(message: QueryGetInactiveLimitOrderTrancheResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.inactiveLimitOrderTranche !== undefined) {
      LimitOrderTranche.encode(message.inactiveLimitOrderTranche, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryGetInactiveLimitOrderTrancheResponse {
    return {
      inactiveLimitOrderTranche: isSet(object.inactiveLimitOrderTranche) ? LimitOrderTranche.fromJSON(object.inactiveLimitOrderTranche) : undefined
    };
  },
  fromPartial(object: Partial<QueryGetInactiveLimitOrderTrancheResponse>): QueryGetInactiveLimitOrderTrancheResponse {
    const message = createBaseQueryGetInactiveLimitOrderTrancheResponse();
    message.inactiveLimitOrderTranche = object.inactiveLimitOrderTranche !== undefined && object.inactiveLimitOrderTranche !== null ? LimitOrderTranche.fromPartial(object.inactiveLimitOrderTranche) : undefined;
    return message;
  },
  fromAmino(object: QueryGetInactiveLimitOrderTrancheResponseAmino): QueryGetInactiveLimitOrderTrancheResponse {
    const message = createBaseQueryGetInactiveLimitOrderTrancheResponse();
    if (object.inactive_limit_order_tranche !== undefined && object.inactive_limit_order_tranche !== null) {
      message.inactiveLimitOrderTranche = LimitOrderTranche.fromAmino(object.inactive_limit_order_tranche);
    }
    return message;
  },
  toAmino(message: QueryGetInactiveLimitOrderTrancheResponse): QueryGetInactiveLimitOrderTrancheResponseAmino {
    const obj: any = {};
    obj.inactive_limit_order_tranche = message.inactiveLimitOrderTranche ? LimitOrderTranche.toAmino(message.inactiveLimitOrderTranche) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetInactiveLimitOrderTrancheResponseAminoMsg): QueryGetInactiveLimitOrderTrancheResponse {
    return QueryGetInactiveLimitOrderTrancheResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetInactiveLimitOrderTrancheResponseProtoMsg): QueryGetInactiveLimitOrderTrancheResponse {
    return QueryGetInactiveLimitOrderTrancheResponse.decode(message.value);
  },
  toProto(message: QueryGetInactiveLimitOrderTrancheResponse): Uint8Array {
    return QueryGetInactiveLimitOrderTrancheResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetInactiveLimitOrderTrancheResponse): QueryGetInactiveLimitOrderTrancheResponseProtoMsg {
    return {
      typeUrl: "/neutron.dex.QueryGetInactiveLimitOrderTrancheResponse",
      value: QueryGetInactiveLimitOrderTrancheResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllInactiveLimitOrderTrancheRequest(): QueryAllInactiveLimitOrderTrancheRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllInactiveLimitOrderTrancheRequest = {
  typeUrl: "/neutron.dex.QueryAllInactiveLimitOrderTrancheRequest",
  encode(message: QueryAllInactiveLimitOrderTrancheRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryAllInactiveLimitOrderTrancheRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryAllInactiveLimitOrderTrancheRequest>): QueryAllInactiveLimitOrderTrancheRequest {
    const message = createBaseQueryAllInactiveLimitOrderTrancheRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllInactiveLimitOrderTrancheRequestAmino): QueryAllInactiveLimitOrderTrancheRequest {
    const message = createBaseQueryAllInactiveLimitOrderTrancheRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllInactiveLimitOrderTrancheRequest): QueryAllInactiveLimitOrderTrancheRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllInactiveLimitOrderTrancheRequestAminoMsg): QueryAllInactiveLimitOrderTrancheRequest {
    return QueryAllInactiveLimitOrderTrancheRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllInactiveLimitOrderTrancheRequestProtoMsg): QueryAllInactiveLimitOrderTrancheRequest {
    return QueryAllInactiveLimitOrderTrancheRequest.decode(message.value);
  },
  toProto(message: QueryAllInactiveLimitOrderTrancheRequest): Uint8Array {
    return QueryAllInactiveLimitOrderTrancheRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllInactiveLimitOrderTrancheRequest): QueryAllInactiveLimitOrderTrancheRequestProtoMsg {
    return {
      typeUrl: "/neutron.dex.QueryAllInactiveLimitOrderTrancheRequest",
      value: QueryAllInactiveLimitOrderTrancheRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllInactiveLimitOrderTrancheResponse(): QueryAllInactiveLimitOrderTrancheResponse {
  return {
    inactiveLimitOrderTranche: [],
    pagination: undefined
  };
}
export const QueryAllInactiveLimitOrderTrancheResponse = {
  typeUrl: "/neutron.dex.QueryAllInactiveLimitOrderTrancheResponse",
  encode(message: QueryAllInactiveLimitOrderTrancheResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.inactiveLimitOrderTranche) {
      LimitOrderTranche.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryAllInactiveLimitOrderTrancheResponse {
    return {
      inactiveLimitOrderTranche: Array.isArray(object?.inactiveLimitOrderTranche) ? object.inactiveLimitOrderTranche.map((e: any) => LimitOrderTranche.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryAllInactiveLimitOrderTrancheResponse>): QueryAllInactiveLimitOrderTrancheResponse {
    const message = createBaseQueryAllInactiveLimitOrderTrancheResponse();
    message.inactiveLimitOrderTranche = object.inactiveLimitOrderTranche?.map(e => LimitOrderTranche.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllInactiveLimitOrderTrancheResponseAmino): QueryAllInactiveLimitOrderTrancheResponse {
    const message = createBaseQueryAllInactiveLimitOrderTrancheResponse();
    message.inactiveLimitOrderTranche = object.inactive_limit_order_tranche?.map(e => LimitOrderTranche.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllInactiveLimitOrderTrancheResponse): QueryAllInactiveLimitOrderTrancheResponseAmino {
    const obj: any = {};
    if (message.inactiveLimitOrderTranche) {
      obj.inactive_limit_order_tranche = message.inactiveLimitOrderTranche.map(e => e ? LimitOrderTranche.toAmino(e) : undefined);
    } else {
      obj.inactive_limit_order_tranche = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllInactiveLimitOrderTrancheResponseAminoMsg): QueryAllInactiveLimitOrderTrancheResponse {
    return QueryAllInactiveLimitOrderTrancheResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllInactiveLimitOrderTrancheResponseProtoMsg): QueryAllInactiveLimitOrderTrancheResponse {
    return QueryAllInactiveLimitOrderTrancheResponse.decode(message.value);
  },
  toProto(message: QueryAllInactiveLimitOrderTrancheResponse): Uint8Array {
    return QueryAllInactiveLimitOrderTrancheResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllInactiveLimitOrderTrancheResponse): QueryAllInactiveLimitOrderTrancheResponseProtoMsg {
    return {
      typeUrl: "/neutron.dex.QueryAllInactiveLimitOrderTrancheResponse",
      value: QueryAllInactiveLimitOrderTrancheResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllPoolReservesRequest(): QueryAllPoolReservesRequest {
  return {
    pairId: "",
    tokenIn: "",
    pagination: undefined
  };
}
export const QueryAllPoolReservesRequest = {
  typeUrl: "/neutron.dex.QueryAllPoolReservesRequest",
  encode(message: QueryAllPoolReservesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pairId !== "") {
      writer.uint32(10).string(message.pairId);
    }
    if (message.tokenIn !== "") {
      writer.uint32(18).string(message.tokenIn);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryAllPoolReservesRequest {
    return {
      pairId: isSet(object.pairId) ? String(object.pairId) : "",
      tokenIn: isSet(object.tokenIn) ? String(object.tokenIn) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryAllPoolReservesRequest>): QueryAllPoolReservesRequest {
    const message = createBaseQueryAllPoolReservesRequest();
    message.pairId = object.pairId ?? "";
    message.tokenIn = object.tokenIn ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllPoolReservesRequestAmino): QueryAllPoolReservesRequest {
    const message = createBaseQueryAllPoolReservesRequest();
    if (object.pair_id !== undefined && object.pair_id !== null) {
      message.pairId = object.pair_id;
    }
    if (object.token_in !== undefined && object.token_in !== null) {
      message.tokenIn = object.token_in;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllPoolReservesRequest): QueryAllPoolReservesRequestAmino {
    const obj: any = {};
    obj.pair_id = message.pairId;
    obj.token_in = message.tokenIn;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllPoolReservesRequestAminoMsg): QueryAllPoolReservesRequest {
    return QueryAllPoolReservesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllPoolReservesRequestProtoMsg): QueryAllPoolReservesRequest {
    return QueryAllPoolReservesRequest.decode(message.value);
  },
  toProto(message: QueryAllPoolReservesRequest): Uint8Array {
    return QueryAllPoolReservesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllPoolReservesRequest): QueryAllPoolReservesRequestProtoMsg {
    return {
      typeUrl: "/neutron.dex.QueryAllPoolReservesRequest",
      value: QueryAllPoolReservesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllPoolReservesResponse(): QueryAllPoolReservesResponse {
  return {
    poolReserves: [],
    pagination: undefined
  };
}
export const QueryAllPoolReservesResponse = {
  typeUrl: "/neutron.dex.QueryAllPoolReservesResponse",
  encode(message: QueryAllPoolReservesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.poolReserves) {
      PoolReserves.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryAllPoolReservesResponse {
    return {
      poolReserves: Array.isArray(object?.poolReserves) ? object.poolReserves.map((e: any) => PoolReserves.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryAllPoolReservesResponse>): QueryAllPoolReservesResponse {
    const message = createBaseQueryAllPoolReservesResponse();
    message.poolReserves = object.poolReserves?.map(e => PoolReserves.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllPoolReservesResponseAmino): QueryAllPoolReservesResponse {
    const message = createBaseQueryAllPoolReservesResponse();
    message.poolReserves = object.pool_reserves?.map(e => PoolReserves.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllPoolReservesResponse): QueryAllPoolReservesResponseAmino {
    const obj: any = {};
    if (message.poolReserves) {
      obj.pool_reserves = message.poolReserves.map(e => e ? PoolReserves.toAmino(e) : undefined);
    } else {
      obj.pool_reserves = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllPoolReservesResponseAminoMsg): QueryAllPoolReservesResponse {
    return QueryAllPoolReservesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllPoolReservesResponseProtoMsg): QueryAllPoolReservesResponse {
    return QueryAllPoolReservesResponse.decode(message.value);
  },
  toProto(message: QueryAllPoolReservesResponse): Uint8Array {
    return QueryAllPoolReservesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllPoolReservesResponse): QueryAllPoolReservesResponseProtoMsg {
    return {
      typeUrl: "/neutron.dex.QueryAllPoolReservesResponse",
      value: QueryAllPoolReservesResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetPoolReservesRequest(): QueryGetPoolReservesRequest {
  return {
    pairId: "",
    tokenIn: "",
    tickIndex: BigInt(0),
    fee: BigInt(0)
  };
}
export const QueryGetPoolReservesRequest = {
  typeUrl: "/neutron.dex.QueryGetPoolReservesRequest",
  encode(message: QueryGetPoolReservesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pairId !== "") {
      writer.uint32(10).string(message.pairId);
    }
    if (message.tokenIn !== "") {
      writer.uint32(18).string(message.tokenIn);
    }
    if (message.tickIndex !== BigInt(0)) {
      writer.uint32(24).int64(message.tickIndex);
    }
    if (message.fee !== BigInt(0)) {
      writer.uint32(32).uint64(message.fee);
    }
    return writer;
  },
  fromJSON(object: any): QueryGetPoolReservesRequest {
    return {
      pairId: isSet(object.pairId) ? String(object.pairId) : "",
      tokenIn: isSet(object.tokenIn) ? String(object.tokenIn) : "",
      tickIndex: isSet(object.tickIndex) ? BigInt(object.tickIndex.toString()) : BigInt(0),
      fee: isSet(object.fee) ? BigInt(object.fee.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<QueryGetPoolReservesRequest>): QueryGetPoolReservesRequest {
    const message = createBaseQueryGetPoolReservesRequest();
    message.pairId = object.pairId ?? "";
    message.tokenIn = object.tokenIn ?? "";
    message.tickIndex = object.tickIndex !== undefined && object.tickIndex !== null ? BigInt(object.tickIndex.toString()) : BigInt(0);
    message.fee = object.fee !== undefined && object.fee !== null ? BigInt(object.fee.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryGetPoolReservesRequestAmino): QueryGetPoolReservesRequest {
    const message = createBaseQueryGetPoolReservesRequest();
    if (object.pair_id !== undefined && object.pair_id !== null) {
      message.pairId = object.pair_id;
    }
    if (object.token_in !== undefined && object.token_in !== null) {
      message.tokenIn = object.token_in;
    }
    if (object.tick_index !== undefined && object.tick_index !== null) {
      message.tickIndex = BigInt(object.tick_index);
    }
    if (object.fee !== undefined && object.fee !== null) {
      message.fee = BigInt(object.fee);
    }
    return message;
  },
  toAmino(message: QueryGetPoolReservesRequest): QueryGetPoolReservesRequestAmino {
    const obj: any = {};
    obj.pair_id = message.pairId;
    obj.token_in = message.tokenIn;
    obj.tick_index = message.tickIndex ? message.tickIndex.toString() : undefined;
    obj.fee = message.fee ? message.fee.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetPoolReservesRequestAminoMsg): QueryGetPoolReservesRequest {
    return QueryGetPoolReservesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetPoolReservesRequestProtoMsg): QueryGetPoolReservesRequest {
    return QueryGetPoolReservesRequest.decode(message.value);
  },
  toProto(message: QueryGetPoolReservesRequest): Uint8Array {
    return QueryGetPoolReservesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetPoolReservesRequest): QueryGetPoolReservesRequestProtoMsg {
    return {
      typeUrl: "/neutron.dex.QueryGetPoolReservesRequest",
      value: QueryGetPoolReservesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetPoolReservesResponse(): QueryGetPoolReservesResponse {
  return {
    poolReserves: undefined
  };
}
export const QueryGetPoolReservesResponse = {
  typeUrl: "/neutron.dex.QueryGetPoolReservesResponse",
  encode(message: QueryGetPoolReservesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolReserves !== undefined) {
      PoolReserves.encode(message.poolReserves, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryGetPoolReservesResponse {
    return {
      poolReserves: isSet(object.poolReserves) ? PoolReserves.fromJSON(object.poolReserves) : undefined
    };
  },
  fromPartial(object: Partial<QueryGetPoolReservesResponse>): QueryGetPoolReservesResponse {
    const message = createBaseQueryGetPoolReservesResponse();
    message.poolReserves = object.poolReserves !== undefined && object.poolReserves !== null ? PoolReserves.fromPartial(object.poolReserves) : undefined;
    return message;
  },
  fromAmino(object: QueryGetPoolReservesResponseAmino): QueryGetPoolReservesResponse {
    const message = createBaseQueryGetPoolReservesResponse();
    if (object.pool_reserves !== undefined && object.pool_reserves !== null) {
      message.poolReserves = PoolReserves.fromAmino(object.pool_reserves);
    }
    return message;
  },
  toAmino(message: QueryGetPoolReservesResponse): QueryGetPoolReservesResponseAmino {
    const obj: any = {};
    obj.pool_reserves = message.poolReserves ? PoolReserves.toAmino(message.poolReserves) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetPoolReservesResponseAminoMsg): QueryGetPoolReservesResponse {
    return QueryGetPoolReservesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetPoolReservesResponseProtoMsg): QueryGetPoolReservesResponse {
    return QueryGetPoolReservesResponse.decode(message.value);
  },
  toProto(message: QueryGetPoolReservesResponse): Uint8Array {
    return QueryGetPoolReservesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetPoolReservesResponse): QueryGetPoolReservesResponseProtoMsg {
    return {
      typeUrl: "/neutron.dex.QueryGetPoolReservesResponse",
      value: QueryGetPoolReservesResponse.encode(message).finish()
    };
  }
};
function createBaseQueryEstimateMultiHopSwapRequest(): QueryEstimateMultiHopSwapRequest {
  return {
    creator: "",
    receiver: "",
    routes: [],
    amountIn: "",
    exitLimitPrice: "",
    pickBestRoute: false
  };
}
export const QueryEstimateMultiHopSwapRequest = {
  typeUrl: "/neutron.dex.QueryEstimateMultiHopSwapRequest",
  encode(message: QueryEstimateMultiHopSwapRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.receiver !== "") {
      writer.uint32(18).string(message.receiver);
    }
    for (const v of message.routes) {
      MultiHopRoute.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.amountIn !== "") {
      writer.uint32(34).string(message.amountIn);
    }
    if (message.exitLimitPrice !== "") {
      writer.uint32(42).string(message.exitLimitPrice);
    }
    if (message.pickBestRoute === true) {
      writer.uint32(48).bool(message.pickBestRoute);
    }
    return writer;
  },
  fromJSON(object: any): QueryEstimateMultiHopSwapRequest {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      receiver: isSet(object.receiver) ? String(object.receiver) : "",
      routes: Array.isArray(object?.routes) ? object.routes.map((e: any) => MultiHopRoute.fromJSON(e)) : [],
      amountIn: isSet(object.amountIn) ? String(object.amountIn) : "",
      exitLimitPrice: isSet(object.exitLimitPrice) ? String(object.exitLimitPrice) : "",
      pickBestRoute: isSet(object.pickBestRoute) ? Boolean(object.pickBestRoute) : false
    };
  },
  fromPartial(object: Partial<QueryEstimateMultiHopSwapRequest>): QueryEstimateMultiHopSwapRequest {
    const message = createBaseQueryEstimateMultiHopSwapRequest();
    message.creator = object.creator ?? "";
    message.receiver = object.receiver ?? "";
    message.routes = object.routes?.map(e => MultiHopRoute.fromPartial(e)) || [];
    message.amountIn = object.amountIn ?? "";
    message.exitLimitPrice = object.exitLimitPrice ?? "";
    message.pickBestRoute = object.pickBestRoute ?? false;
    return message;
  },
  fromAmino(object: QueryEstimateMultiHopSwapRequestAmino): QueryEstimateMultiHopSwapRequest {
    const message = createBaseQueryEstimateMultiHopSwapRequest();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.receiver !== undefined && object.receiver !== null) {
      message.receiver = object.receiver;
    }
    message.routes = object.routes?.map(e => MultiHopRoute.fromAmino(e)) || [];
    if (object.amount_in !== undefined && object.amount_in !== null) {
      message.amountIn = object.amount_in;
    }
    if (object.exit_limit_price !== undefined && object.exit_limit_price !== null) {
      message.exitLimitPrice = object.exit_limit_price;
    }
    if (object.pick_best_route !== undefined && object.pick_best_route !== null) {
      message.pickBestRoute = object.pick_best_route;
    }
    return message;
  },
  toAmino(message: QueryEstimateMultiHopSwapRequest): QueryEstimateMultiHopSwapRequestAmino {
    const obj: any = {};
    obj.creator = message.creator;
    obj.receiver = message.receiver;
    if (message.routes) {
      obj.routes = message.routes.map(e => e ? MultiHopRoute.toAmino(e) : undefined);
    } else {
      obj.routes = [];
    }
    obj.amount_in = message.amountIn;
    obj.exit_limit_price = message.exitLimitPrice;
    obj.pick_best_route = message.pickBestRoute;
    return obj;
  },
  fromAminoMsg(object: QueryEstimateMultiHopSwapRequestAminoMsg): QueryEstimateMultiHopSwapRequest {
    return QueryEstimateMultiHopSwapRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryEstimateMultiHopSwapRequestProtoMsg): QueryEstimateMultiHopSwapRequest {
    return QueryEstimateMultiHopSwapRequest.decode(message.value);
  },
  toProto(message: QueryEstimateMultiHopSwapRequest): Uint8Array {
    return QueryEstimateMultiHopSwapRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryEstimateMultiHopSwapRequest): QueryEstimateMultiHopSwapRequestProtoMsg {
    return {
      typeUrl: "/neutron.dex.QueryEstimateMultiHopSwapRequest",
      value: QueryEstimateMultiHopSwapRequest.encode(message).finish()
    };
  }
};
function createBaseQueryEstimateMultiHopSwapResponse(): QueryEstimateMultiHopSwapResponse {
  return {
    coinOut: Coin.fromPartial({})
  };
}
export const QueryEstimateMultiHopSwapResponse = {
  typeUrl: "/neutron.dex.QueryEstimateMultiHopSwapResponse",
  encode(message: QueryEstimateMultiHopSwapResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.coinOut !== undefined) {
      Coin.encode(message.coinOut, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryEstimateMultiHopSwapResponse {
    return {
      coinOut: isSet(object.coinOut) ? Coin.fromJSON(object.coinOut) : undefined
    };
  },
  fromPartial(object: Partial<QueryEstimateMultiHopSwapResponse>): QueryEstimateMultiHopSwapResponse {
    const message = createBaseQueryEstimateMultiHopSwapResponse();
    message.coinOut = object.coinOut !== undefined && object.coinOut !== null ? Coin.fromPartial(object.coinOut) : undefined;
    return message;
  },
  fromAmino(object: QueryEstimateMultiHopSwapResponseAmino): QueryEstimateMultiHopSwapResponse {
    const message = createBaseQueryEstimateMultiHopSwapResponse();
    if (object.coin_out !== undefined && object.coin_out !== null) {
      message.coinOut = Coin.fromAmino(object.coin_out);
    }
    return message;
  },
  toAmino(message: QueryEstimateMultiHopSwapResponse): QueryEstimateMultiHopSwapResponseAmino {
    const obj: any = {};
    obj.coin_out = message.coinOut ? Coin.toAmino(message.coinOut) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryEstimateMultiHopSwapResponseAminoMsg): QueryEstimateMultiHopSwapResponse {
    return QueryEstimateMultiHopSwapResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryEstimateMultiHopSwapResponseProtoMsg): QueryEstimateMultiHopSwapResponse {
    return QueryEstimateMultiHopSwapResponse.decode(message.value);
  },
  toProto(message: QueryEstimateMultiHopSwapResponse): Uint8Array {
    return QueryEstimateMultiHopSwapResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryEstimateMultiHopSwapResponse): QueryEstimateMultiHopSwapResponseProtoMsg {
    return {
      typeUrl: "/neutron.dex.QueryEstimateMultiHopSwapResponse",
      value: QueryEstimateMultiHopSwapResponse.encode(message).finish()
    };
  }
};
function createBaseQueryEstimatePlaceLimitOrderRequest(): QueryEstimatePlaceLimitOrderRequest {
  return {
    creator: "",
    receiver: "",
    tokenIn: "",
    tokenOut: "",
    tickIndexInToOut: BigInt(0),
    amountIn: "",
    orderType: 0,
    expirationTime: undefined,
    maxAmountOut: undefined
  };
}
export const QueryEstimatePlaceLimitOrderRequest = {
  typeUrl: "/neutron.dex.QueryEstimatePlaceLimitOrderRequest",
  encode(message: QueryEstimatePlaceLimitOrderRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.receiver !== "") {
      writer.uint32(18).string(message.receiver);
    }
    if (message.tokenIn !== "") {
      writer.uint32(26).string(message.tokenIn);
    }
    if (message.tokenOut !== "") {
      writer.uint32(34).string(message.tokenOut);
    }
    if (message.tickIndexInToOut !== BigInt(0)) {
      writer.uint32(40).int64(message.tickIndexInToOut);
    }
    if (message.amountIn !== "") {
      writer.uint32(50).string(message.amountIn);
    }
    if (message.orderType !== 0) {
      writer.uint32(56).int32(message.orderType);
    }
    if (message.expirationTime !== undefined) {
      Timestamp.encode(message.expirationTime, writer.uint32(66).fork()).ldelim();
    }
    if (message.maxAmountOut !== undefined) {
      writer.uint32(74).string(message.maxAmountOut);
    }
    return writer;
  },
  fromJSON(object: any): QueryEstimatePlaceLimitOrderRequest {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      receiver: isSet(object.receiver) ? String(object.receiver) : "",
      tokenIn: isSet(object.tokenIn) ? String(object.tokenIn) : "",
      tokenOut: isSet(object.tokenOut) ? String(object.tokenOut) : "",
      tickIndexInToOut: isSet(object.tickIndexInToOut) ? BigInt(object.tickIndexInToOut.toString()) : BigInt(0),
      amountIn: isSet(object.amountIn) ? String(object.amountIn) : "",
      orderType: isSet(object.orderType) ? limitOrderTypeFromJSON(object.orderType) : -1,
      expirationTime: isSet(object.expirationTime) ? fromJsonTimestamp(object.expirationTime) : undefined,
      maxAmountOut: isSet(object.maxAmountOut) ? String(object.maxAmountOut) : undefined
    };
  },
  fromPartial(object: Partial<QueryEstimatePlaceLimitOrderRequest>): QueryEstimatePlaceLimitOrderRequest {
    const message = createBaseQueryEstimatePlaceLimitOrderRequest();
    message.creator = object.creator ?? "";
    message.receiver = object.receiver ?? "";
    message.tokenIn = object.tokenIn ?? "";
    message.tokenOut = object.tokenOut ?? "";
    message.tickIndexInToOut = object.tickIndexInToOut !== undefined && object.tickIndexInToOut !== null ? BigInt(object.tickIndexInToOut.toString()) : BigInt(0);
    message.amountIn = object.amountIn ?? "";
    message.orderType = object.orderType ?? 0;
    message.expirationTime = object.expirationTime !== undefined && object.expirationTime !== null ? Timestamp.fromPartial(object.expirationTime) : undefined;
    message.maxAmountOut = object.maxAmountOut ?? undefined;
    return message;
  },
  fromAmino(object: QueryEstimatePlaceLimitOrderRequestAmino): QueryEstimatePlaceLimitOrderRequest {
    const message = createBaseQueryEstimatePlaceLimitOrderRequest();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.receiver !== undefined && object.receiver !== null) {
      message.receiver = object.receiver;
    }
    if (object.token_in !== undefined && object.token_in !== null) {
      message.tokenIn = object.token_in;
    }
    if (object.token_out !== undefined && object.token_out !== null) {
      message.tokenOut = object.token_out;
    }
    if (object.tick_index_in_to_out !== undefined && object.tick_index_in_to_out !== null) {
      message.tickIndexInToOut = BigInt(object.tick_index_in_to_out);
    }
    if (object.amount_in !== undefined && object.amount_in !== null) {
      message.amountIn = object.amount_in;
    }
    if (object.order_type !== undefined && object.order_type !== null) {
      message.orderType = limitOrderTypeFromJSON(object.order_type);
    }
    if (object.expiration_time !== undefined && object.expiration_time !== null) {
      message.expirationTime = Timestamp.fromAmino(object.expiration_time);
    }
    if (object.maxAmount_out !== undefined && object.maxAmount_out !== null) {
      message.maxAmountOut = object.maxAmount_out;
    }
    return message;
  },
  toAmino(message: QueryEstimatePlaceLimitOrderRequest): QueryEstimatePlaceLimitOrderRequestAmino {
    const obj: any = {};
    obj.creator = message.creator;
    obj.receiver = message.receiver;
    obj.token_in = message.tokenIn;
    obj.token_out = message.tokenOut;
    obj.tick_index_in_to_out = message.tickIndexInToOut ? message.tickIndexInToOut.toString() : undefined;
    obj.amount_in = message.amountIn;
    obj.order_type = message.orderType;
    obj.expiration_time = message.expirationTime ? Timestamp.toAmino(message.expirationTime) : undefined;
    obj.maxAmount_out = message.maxAmountOut;
    return obj;
  },
  fromAminoMsg(object: QueryEstimatePlaceLimitOrderRequestAminoMsg): QueryEstimatePlaceLimitOrderRequest {
    return QueryEstimatePlaceLimitOrderRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryEstimatePlaceLimitOrderRequestProtoMsg): QueryEstimatePlaceLimitOrderRequest {
    return QueryEstimatePlaceLimitOrderRequest.decode(message.value);
  },
  toProto(message: QueryEstimatePlaceLimitOrderRequest): Uint8Array {
    return QueryEstimatePlaceLimitOrderRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryEstimatePlaceLimitOrderRequest): QueryEstimatePlaceLimitOrderRequestProtoMsg {
    return {
      typeUrl: "/neutron.dex.QueryEstimatePlaceLimitOrderRequest",
      value: QueryEstimatePlaceLimitOrderRequest.encode(message).finish()
    };
  }
};
function createBaseQueryEstimatePlaceLimitOrderResponse(): QueryEstimatePlaceLimitOrderResponse {
  return {
    totalInCoin: Coin.fromPartial({}),
    swapInCoin: Coin.fromPartial({}),
    swapOutCoin: Coin.fromPartial({})
  };
}
export const QueryEstimatePlaceLimitOrderResponse = {
  typeUrl: "/neutron.dex.QueryEstimatePlaceLimitOrderResponse",
  encode(message: QueryEstimatePlaceLimitOrderResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.totalInCoin !== undefined) {
      Coin.encode(message.totalInCoin, writer.uint32(10).fork()).ldelim();
    }
    if (message.swapInCoin !== undefined) {
      Coin.encode(message.swapInCoin, writer.uint32(18).fork()).ldelim();
    }
    if (message.swapOutCoin !== undefined) {
      Coin.encode(message.swapOutCoin, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryEstimatePlaceLimitOrderResponse {
    return {
      totalInCoin: isSet(object.totalInCoin) ? Coin.fromJSON(object.totalInCoin) : undefined,
      swapInCoin: isSet(object.swapInCoin) ? Coin.fromJSON(object.swapInCoin) : undefined,
      swapOutCoin: isSet(object.swapOutCoin) ? Coin.fromJSON(object.swapOutCoin) : undefined
    };
  },
  fromPartial(object: Partial<QueryEstimatePlaceLimitOrderResponse>): QueryEstimatePlaceLimitOrderResponse {
    const message = createBaseQueryEstimatePlaceLimitOrderResponse();
    message.totalInCoin = object.totalInCoin !== undefined && object.totalInCoin !== null ? Coin.fromPartial(object.totalInCoin) : undefined;
    message.swapInCoin = object.swapInCoin !== undefined && object.swapInCoin !== null ? Coin.fromPartial(object.swapInCoin) : undefined;
    message.swapOutCoin = object.swapOutCoin !== undefined && object.swapOutCoin !== null ? Coin.fromPartial(object.swapOutCoin) : undefined;
    return message;
  },
  fromAmino(object: QueryEstimatePlaceLimitOrderResponseAmino): QueryEstimatePlaceLimitOrderResponse {
    const message = createBaseQueryEstimatePlaceLimitOrderResponse();
    if (object.total_in_coin !== undefined && object.total_in_coin !== null) {
      message.totalInCoin = Coin.fromAmino(object.total_in_coin);
    }
    if (object.swap_in_coin !== undefined && object.swap_in_coin !== null) {
      message.swapInCoin = Coin.fromAmino(object.swap_in_coin);
    }
    if (object.swap_out_coin !== undefined && object.swap_out_coin !== null) {
      message.swapOutCoin = Coin.fromAmino(object.swap_out_coin);
    }
    return message;
  },
  toAmino(message: QueryEstimatePlaceLimitOrderResponse): QueryEstimatePlaceLimitOrderResponseAmino {
    const obj: any = {};
    obj.total_in_coin = message.totalInCoin ? Coin.toAmino(message.totalInCoin) : undefined;
    obj.swap_in_coin = message.swapInCoin ? Coin.toAmino(message.swapInCoin) : undefined;
    obj.swap_out_coin = message.swapOutCoin ? Coin.toAmino(message.swapOutCoin) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryEstimatePlaceLimitOrderResponseAminoMsg): QueryEstimatePlaceLimitOrderResponse {
    return QueryEstimatePlaceLimitOrderResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryEstimatePlaceLimitOrderResponseProtoMsg): QueryEstimatePlaceLimitOrderResponse {
    return QueryEstimatePlaceLimitOrderResponse.decode(message.value);
  },
  toProto(message: QueryEstimatePlaceLimitOrderResponse): Uint8Array {
    return QueryEstimatePlaceLimitOrderResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryEstimatePlaceLimitOrderResponse): QueryEstimatePlaceLimitOrderResponseProtoMsg {
    return {
      typeUrl: "/neutron.dex.QueryEstimatePlaceLimitOrderResponse",
      value: QueryEstimatePlaceLimitOrderResponse.encode(message).finish()
    };
  }
};
function createBaseQueryPoolRequest(): QueryPoolRequest {
  return {
    pairId: "",
    tickIndex: BigInt(0),
    fee: BigInt(0)
  };
}
export const QueryPoolRequest = {
  typeUrl: "/neutron.dex.QueryPoolRequest",
  encode(message: QueryPoolRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pairId !== "") {
      writer.uint32(10).string(message.pairId);
    }
    if (message.tickIndex !== BigInt(0)) {
      writer.uint32(16).int64(message.tickIndex);
    }
    if (message.fee !== BigInt(0)) {
      writer.uint32(24).uint64(message.fee);
    }
    return writer;
  },
  fromJSON(object: any): QueryPoolRequest {
    return {
      pairId: isSet(object.pairId) ? String(object.pairId) : "",
      tickIndex: isSet(object.tickIndex) ? BigInt(object.tickIndex.toString()) : BigInt(0),
      fee: isSet(object.fee) ? BigInt(object.fee.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<QueryPoolRequest>): QueryPoolRequest {
    const message = createBaseQueryPoolRequest();
    message.pairId = object.pairId ?? "";
    message.tickIndex = object.tickIndex !== undefined && object.tickIndex !== null ? BigInt(object.tickIndex.toString()) : BigInt(0);
    message.fee = object.fee !== undefined && object.fee !== null ? BigInt(object.fee.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryPoolRequestAmino): QueryPoolRequest {
    const message = createBaseQueryPoolRequest();
    if (object.pair_id !== undefined && object.pair_id !== null) {
      message.pairId = object.pair_id;
    }
    if (object.tick_index !== undefined && object.tick_index !== null) {
      message.tickIndex = BigInt(object.tick_index);
    }
    if (object.fee !== undefined && object.fee !== null) {
      message.fee = BigInt(object.fee);
    }
    return message;
  },
  toAmino(message: QueryPoolRequest): QueryPoolRequestAmino {
    const obj: any = {};
    obj.pair_id = message.pairId;
    obj.tick_index = message.tickIndex ? message.tickIndex.toString() : undefined;
    obj.fee = message.fee ? message.fee.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPoolRequestAminoMsg): QueryPoolRequest {
    return QueryPoolRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPoolRequestProtoMsg): QueryPoolRequest {
    return QueryPoolRequest.decode(message.value);
  },
  toProto(message: QueryPoolRequest): Uint8Array {
    return QueryPoolRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPoolRequest): QueryPoolRequestProtoMsg {
    return {
      typeUrl: "/neutron.dex.QueryPoolRequest",
      value: QueryPoolRequest.encode(message).finish()
    };
  }
};
function createBaseQueryPoolByIDRequest(): QueryPoolByIDRequest {
  return {
    poolId: BigInt(0)
  };
}
export const QueryPoolByIDRequest = {
  typeUrl: "/neutron.dex.QueryPoolByIDRequest",
  encode(message: QueryPoolByIDRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    return writer;
  },
  fromJSON(object: any): QueryPoolByIDRequest {
    return {
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<QueryPoolByIDRequest>): QueryPoolByIDRequest {
    const message = createBaseQueryPoolByIDRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryPoolByIDRequestAmino): QueryPoolByIDRequest {
    const message = createBaseQueryPoolByIDRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    return message;
  },
  toAmino(message: QueryPoolByIDRequest): QueryPoolByIDRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPoolByIDRequestAminoMsg): QueryPoolByIDRequest {
    return QueryPoolByIDRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPoolByIDRequestProtoMsg): QueryPoolByIDRequest {
    return QueryPoolByIDRequest.decode(message.value);
  },
  toProto(message: QueryPoolByIDRequest): Uint8Array {
    return QueryPoolByIDRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPoolByIDRequest): QueryPoolByIDRequestProtoMsg {
    return {
      typeUrl: "/neutron.dex.QueryPoolByIDRequest",
      value: QueryPoolByIDRequest.encode(message).finish()
    };
  }
};
function createBaseQueryPoolResponse(): QueryPoolResponse {
  return {
    pool: undefined
  };
}
export const QueryPoolResponse = {
  typeUrl: "/neutron.dex.QueryPoolResponse",
  encode(message: QueryPoolResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pool !== undefined) {
      Pool.encode(message.pool, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryPoolResponse {
    return {
      pool: isSet(object.pool) ? Pool.fromJSON(object.pool) : undefined
    };
  },
  fromPartial(object: Partial<QueryPoolResponse>): QueryPoolResponse {
    const message = createBaseQueryPoolResponse();
    message.pool = object.pool !== undefined && object.pool !== null ? Pool.fromPartial(object.pool) : undefined;
    return message;
  },
  fromAmino(object: QueryPoolResponseAmino): QueryPoolResponse {
    const message = createBaseQueryPoolResponse();
    if (object.pool !== undefined && object.pool !== null) {
      message.pool = Pool.fromAmino(object.pool);
    }
    return message;
  },
  toAmino(message: QueryPoolResponse): QueryPoolResponseAmino {
    const obj: any = {};
    obj.pool = message.pool ? Pool.toAmino(message.pool) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPoolResponseAminoMsg): QueryPoolResponse {
    return QueryPoolResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPoolResponseProtoMsg): QueryPoolResponse {
    return QueryPoolResponse.decode(message.value);
  },
  toProto(message: QueryPoolResponse): Uint8Array {
    return QueryPoolResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPoolResponse): QueryPoolResponseProtoMsg {
    return {
      typeUrl: "/neutron.dex.QueryPoolResponse",
      value: QueryPoolResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetPoolMetadataRequest(): QueryGetPoolMetadataRequest {
  return {
    id: BigInt(0)
  };
}
export const QueryGetPoolMetadataRequest = {
  typeUrl: "/neutron.dex.QueryGetPoolMetadataRequest",
  encode(message: QueryGetPoolMetadataRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  fromJSON(object: any): QueryGetPoolMetadataRequest {
    return {
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<QueryGetPoolMetadataRequest>): QueryGetPoolMetadataRequest {
    const message = createBaseQueryGetPoolMetadataRequest();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryGetPoolMetadataRequestAmino): QueryGetPoolMetadataRequest {
    const message = createBaseQueryGetPoolMetadataRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: QueryGetPoolMetadataRequest): QueryGetPoolMetadataRequestAmino {
    const obj: any = {};
    obj.id = message.id ? message.id.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetPoolMetadataRequestAminoMsg): QueryGetPoolMetadataRequest {
    return QueryGetPoolMetadataRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetPoolMetadataRequestProtoMsg): QueryGetPoolMetadataRequest {
    return QueryGetPoolMetadataRequest.decode(message.value);
  },
  toProto(message: QueryGetPoolMetadataRequest): Uint8Array {
    return QueryGetPoolMetadataRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetPoolMetadataRequest): QueryGetPoolMetadataRequestProtoMsg {
    return {
      typeUrl: "/neutron.dex.QueryGetPoolMetadataRequest",
      value: QueryGetPoolMetadataRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetPoolMetadataResponse(): QueryGetPoolMetadataResponse {
  return {
    PoolMetadata: PoolMetadata.fromPartial({})
  };
}
export const QueryGetPoolMetadataResponse = {
  typeUrl: "/neutron.dex.QueryGetPoolMetadataResponse",
  encode(message: QueryGetPoolMetadataResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.PoolMetadata !== undefined) {
      PoolMetadata.encode(message.PoolMetadata, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryGetPoolMetadataResponse {
    return {
      PoolMetadata: isSet(object.PoolMetadata) ? PoolMetadata.fromJSON(object.PoolMetadata) : undefined
    };
  },
  fromPartial(object: Partial<QueryGetPoolMetadataResponse>): QueryGetPoolMetadataResponse {
    const message = createBaseQueryGetPoolMetadataResponse();
    message.PoolMetadata = object.PoolMetadata !== undefined && object.PoolMetadata !== null ? PoolMetadata.fromPartial(object.PoolMetadata) : undefined;
    return message;
  },
  fromAmino(object: QueryGetPoolMetadataResponseAmino): QueryGetPoolMetadataResponse {
    const message = createBaseQueryGetPoolMetadataResponse();
    if (object.Pool_metadata !== undefined && object.Pool_metadata !== null) {
      message.PoolMetadata = PoolMetadata.fromAmino(object.Pool_metadata);
    }
    return message;
  },
  toAmino(message: QueryGetPoolMetadataResponse): QueryGetPoolMetadataResponseAmino {
    const obj: any = {};
    obj.Pool_metadata = message.PoolMetadata ? PoolMetadata.toAmino(message.PoolMetadata) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetPoolMetadataResponseAminoMsg): QueryGetPoolMetadataResponse {
    return QueryGetPoolMetadataResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetPoolMetadataResponseProtoMsg): QueryGetPoolMetadataResponse {
    return QueryGetPoolMetadataResponse.decode(message.value);
  },
  toProto(message: QueryGetPoolMetadataResponse): Uint8Array {
    return QueryGetPoolMetadataResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetPoolMetadataResponse): QueryGetPoolMetadataResponseProtoMsg {
    return {
      typeUrl: "/neutron.dex.QueryGetPoolMetadataResponse",
      value: QueryGetPoolMetadataResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllPoolMetadataRequest(): QueryAllPoolMetadataRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllPoolMetadataRequest = {
  typeUrl: "/neutron.dex.QueryAllPoolMetadataRequest",
  encode(message: QueryAllPoolMetadataRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryAllPoolMetadataRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryAllPoolMetadataRequest>): QueryAllPoolMetadataRequest {
    const message = createBaseQueryAllPoolMetadataRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllPoolMetadataRequestAmino): QueryAllPoolMetadataRequest {
    const message = createBaseQueryAllPoolMetadataRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllPoolMetadataRequest): QueryAllPoolMetadataRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllPoolMetadataRequestAminoMsg): QueryAllPoolMetadataRequest {
    return QueryAllPoolMetadataRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllPoolMetadataRequestProtoMsg): QueryAllPoolMetadataRequest {
    return QueryAllPoolMetadataRequest.decode(message.value);
  },
  toProto(message: QueryAllPoolMetadataRequest): Uint8Array {
    return QueryAllPoolMetadataRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllPoolMetadataRequest): QueryAllPoolMetadataRequestProtoMsg {
    return {
      typeUrl: "/neutron.dex.QueryAllPoolMetadataRequest",
      value: QueryAllPoolMetadataRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllPoolMetadataResponse(): QueryAllPoolMetadataResponse {
  return {
    poolMetadata: [],
    pagination: undefined
  };
}
export const QueryAllPoolMetadataResponse = {
  typeUrl: "/neutron.dex.QueryAllPoolMetadataResponse",
  encode(message: QueryAllPoolMetadataResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.poolMetadata) {
      PoolMetadata.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryAllPoolMetadataResponse {
    return {
      poolMetadata: Array.isArray(object?.poolMetadata) ? object.poolMetadata.map((e: any) => PoolMetadata.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryAllPoolMetadataResponse>): QueryAllPoolMetadataResponse {
    const message = createBaseQueryAllPoolMetadataResponse();
    message.poolMetadata = object.poolMetadata?.map(e => PoolMetadata.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllPoolMetadataResponseAmino): QueryAllPoolMetadataResponse {
    const message = createBaseQueryAllPoolMetadataResponse();
    message.poolMetadata = object.pool_metadata?.map(e => PoolMetadata.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllPoolMetadataResponse): QueryAllPoolMetadataResponseAmino {
    const obj: any = {};
    if (message.poolMetadata) {
      obj.pool_metadata = message.poolMetadata.map(e => e ? PoolMetadata.toAmino(e) : undefined);
    } else {
      obj.pool_metadata = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllPoolMetadataResponseAminoMsg): QueryAllPoolMetadataResponse {
    return QueryAllPoolMetadataResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllPoolMetadataResponseProtoMsg): QueryAllPoolMetadataResponse {
    return QueryAllPoolMetadataResponse.decode(message.value);
  },
  toProto(message: QueryAllPoolMetadataResponse): Uint8Array {
    return QueryAllPoolMetadataResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllPoolMetadataResponse): QueryAllPoolMetadataResponseProtoMsg {
    return {
      typeUrl: "/neutron.dex.QueryAllPoolMetadataResponse",
      value: QueryAllPoolMetadataResponse.encode(message).finish()
    };
  }
};