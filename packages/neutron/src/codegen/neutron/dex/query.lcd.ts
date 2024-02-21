import { setPaginationParams } from "../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryGetLimitOrderTrancheUserRequest, QueryGetLimitOrderTrancheUserResponseSDKType, QueryAllLimitOrderTrancheUserRequest, QueryAllLimitOrderTrancheUserResponseSDKType, QueryAllUserLimitOrdersRequest, QueryAllUserLimitOrdersResponseSDKType, QueryGetLimitOrderTrancheRequest, QueryGetLimitOrderTrancheResponseSDKType, QueryAllLimitOrderTrancheRequest, QueryAllLimitOrderTrancheResponseSDKType, QueryAllUserDepositsRequest, QueryAllUserDepositsResponseSDKType, QueryAllTickLiquidityRequest, QueryAllTickLiquidityResponseSDKType, QueryGetInactiveLimitOrderTrancheRequest, QueryGetInactiveLimitOrderTrancheResponseSDKType, QueryAllInactiveLimitOrderTrancheRequest, QueryAllInactiveLimitOrderTrancheResponseSDKType, QueryAllPoolReservesRequest, QueryAllPoolReservesResponseSDKType, QueryGetPoolReservesRequest, QueryGetPoolReservesResponseSDKType, QueryEstimateMultiHopSwapRequest, QueryEstimateMultiHopSwapResponseSDKType, QueryEstimatePlaceLimitOrderRequest, QueryEstimatePlaceLimitOrderResponseSDKType, QueryPoolRequest, QueryPoolResponseSDKType, QueryPoolByIDRequest, QueryGetPoolMetadataRequest, QueryGetPoolMetadataResponseSDKType, QueryAllPoolMetadataRequest, QueryAllPoolMetadataResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.limitOrderTrancheUser = this.limitOrderTrancheUser.bind(this);
    this.limitOrderTrancheUserAll = this.limitOrderTrancheUserAll.bind(this);
    this.limitOrderTrancheUserAllByAddress = this.limitOrderTrancheUserAllByAddress.bind(this);
    this.limitOrderTranche = this.limitOrderTranche.bind(this);
    this.limitOrderTrancheAll = this.limitOrderTrancheAll.bind(this);
    this.userDepositsAll = this.userDepositsAll.bind(this);
    this.tickLiquidityAll = this.tickLiquidityAll.bind(this);
    this.inactiveLimitOrderTranche = this.inactiveLimitOrderTranche.bind(this);
    this.inactiveLimitOrderTrancheAll = this.inactiveLimitOrderTrancheAll.bind(this);
    this.poolReservesAll = this.poolReservesAll.bind(this);
    this.poolReserves = this.poolReserves.bind(this);
    this.estimateMultiHopSwap = this.estimateMultiHopSwap.bind(this);
    this.estimatePlaceLimitOrder = this.estimatePlaceLimitOrder.bind(this);
    this.pool = this.pool.bind(this);
    this.poolByID = this.poolByID.bind(this);
    this.poolMetadata = this.poolMetadata.bind(this);
    this.poolMetadataAll = this.poolMetadataAll.bind(this);
  }
  /* Parameters queries the parameters of the module. */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `neutron/dex/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* Queries a LimitOrderTrancheUser by index. */
  async limitOrderTrancheUser(params: QueryGetLimitOrderTrancheUserRequest): Promise<QueryGetLimitOrderTrancheUserResponseSDKType> {
    const endpoint = `neutron/dex/limit_order_tranche_user/${params.address}/${params.trancheKey}`;
    return await this.req.get<QueryGetLimitOrderTrancheUserResponseSDKType>(endpoint);
  }
  /* Queries a list of LimitOrderTrancheMap items. */
  async limitOrderTrancheUserAll(params: QueryAllLimitOrderTrancheUserRequest = {
    pagination: undefined
  }): Promise<QueryAllLimitOrderTrancheUserResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `neutron/dex/limit_order_tranche_user`;
    return await this.req.get<QueryAllLimitOrderTrancheUserResponseSDKType>(endpoint, options);
  }
  /* Queries a list of LimitOrderTrancheUser items for a given address. */
  async limitOrderTrancheUserAllByAddress(params: QueryAllUserLimitOrdersRequest): Promise<QueryAllUserLimitOrdersResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `neutron/dex/user/limit_orders/${params.address}`;
    return await this.req.get<QueryAllUserLimitOrdersResponseSDKType>(endpoint, options);
  }
  /* Queries a LimitOrderTranche by index. */
  async limitOrderTranche(params: QueryGetLimitOrderTrancheRequest): Promise<QueryGetLimitOrderTrancheResponseSDKType> {
    const endpoint = `neutron/dex/limit_order_tranche/${params.pairId}/${params.tokenIn}/${params.tickIndex}/${params.trancheKey}`;
    return await this.req.get<QueryGetLimitOrderTrancheResponseSDKType>(endpoint);
  }
  /* Queries a list of LimitOrderTranche items for a given pairID / TokenIn combination. */
  async limitOrderTrancheAll(params: QueryAllLimitOrderTrancheRequest): Promise<QueryAllLimitOrderTrancheResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `neutron/dex/limit_order_tranche/${params.pairId}/${params.tokenIn}`;
    return await this.req.get<QueryAllLimitOrderTrancheResponseSDKType>(endpoint, options);
  }
  /* Queries a list of UserDeposits items. */
  async userDepositsAll(params: QueryAllUserDepositsRequest): Promise<QueryAllUserDepositsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `neutron/dex/user/deposits/${params.address}`;
    return await this.req.get<QueryAllUserDepositsResponseSDKType>(endpoint, options);
  }
  /* Queries a list of TickLiquidity items. */
  async tickLiquidityAll(params: QueryAllTickLiquidityRequest): Promise<QueryAllTickLiquidityResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `neutron/dex/tick_liquidity/${params.pairId}/${params.tokenIn}`;
    return await this.req.get<QueryAllTickLiquidityResponseSDKType>(endpoint, options);
  }
  /* Queries a InactiveLimitOrderTranche by index. */
  async inactiveLimitOrderTranche(params: QueryGetInactiveLimitOrderTrancheRequest): Promise<QueryGetInactiveLimitOrderTrancheResponseSDKType> {
    const endpoint = `neutron/dex/filled_limit_order_tranche/${params.pairId}/${params.tokenIn}/${params.tickIndex}/${params.trancheKey}`;
    return await this.req.get<QueryGetInactiveLimitOrderTrancheResponseSDKType>(endpoint);
  }
  /* Queries a list of InactiveLimitOrderTranche items. */
  async inactiveLimitOrderTrancheAll(params: QueryAllInactiveLimitOrderTrancheRequest = {
    pagination: undefined
  }): Promise<QueryAllInactiveLimitOrderTrancheResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `neutron/dex/filled_limit_order_tranche`;
    return await this.req.get<QueryAllInactiveLimitOrderTrancheResponseSDKType>(endpoint, options);
  }
  /* Queries a list of PoolReserves items. */
  async poolReservesAll(params: QueryAllPoolReservesRequest): Promise<QueryAllPoolReservesResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `neutron/dex/pool_reserves/${params.pairId}/${params.tokenIn}`;
    return await this.req.get<QueryAllPoolReservesResponseSDKType>(endpoint, options);
  }
  /* Queries a PoolReserve by index */
  async poolReserves(params: QueryGetPoolReservesRequest): Promise<QueryGetPoolReservesResponseSDKType> {
    const endpoint = `neutron/dex/pool_reserves/${params.pairId}/${params.tokenIn}/${params.tickIndex}/${params.fee}`;
    return await this.req.get<QueryGetPoolReservesResponseSDKType>(endpoint);
  }
  /* Queries the simulated result of a multihop swap */
  async estimateMultiHopSwap(params: QueryEstimateMultiHopSwapRequest): Promise<QueryEstimateMultiHopSwapResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.creator !== "undefined") {
      options.params.creator = params.creator;
    }
    if (typeof params?.receiver !== "undefined") {
      options.params.receiver = params.receiver;
    }
    if (typeof params?.routes !== "undefined") {
      options.params.routes = params.routes;
    }
    if (typeof params?.amountIn !== "undefined") {
      options.params.amount_in = params.amountIn;
    }
    if (typeof params?.exitLimitPrice !== "undefined") {
      options.params.exit_limit_price = params.exitLimitPrice;
    }
    if (typeof params?.pickBestRoute !== "undefined") {
      options.params.pick_best_route = params.pickBestRoute;
    }
    const endpoint = `neutron/dex/estimate_multi_hop_swap`;
    return await this.req.get<QueryEstimateMultiHopSwapResponseSDKType>(endpoint, options);
  }
  /* Queries the simulated result of a multihop swap */
  async estimatePlaceLimitOrder(params: QueryEstimatePlaceLimitOrderRequest): Promise<QueryEstimatePlaceLimitOrderResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.creator !== "undefined") {
      options.params.creator = params.creator;
    }
    if (typeof params?.receiver !== "undefined") {
      options.params.receiver = params.receiver;
    }
    if (typeof params?.tokenIn !== "undefined") {
      options.params.token_in = params.tokenIn;
    }
    if (typeof params?.tokenOut !== "undefined") {
      options.params.token_out = params.tokenOut;
    }
    if (typeof params?.tickIndexInToOut !== "undefined") {
      options.params.tick_index_in_to_out = params.tickIndexInToOut;
    }
    if (typeof params?.amountIn !== "undefined") {
      options.params.amount_in = params.amountIn;
    }
    if (typeof params?.orderType !== "undefined") {
      options.params.order_type = params.orderType;
    }
    if (typeof params?.expirationTime !== "undefined") {
      options.params.expiration_time = params.expirationTime;
    }
    if (typeof params?.maxAmountOut !== "undefined") {
      options.params.maxAmount_out = params.maxAmountOut;
    }
    const endpoint = `neutron/dex/estimate_place_limit_order`;
    return await this.req.get<QueryEstimatePlaceLimitOrderResponseSDKType>(endpoint, options);
  }
  /* Queries a pool by pair, tick and fee */
  async pool(params: QueryPoolRequest): Promise<QueryPoolResponseSDKType> {
    const endpoint = `neutron/dex/pool/${params.pairId}/${params.tickIndex}/${params.fee}`;
    return await this.req.get<QueryPoolResponseSDKType>(endpoint);
  }
  /* Queries a pool by ID */
  async poolByID(params: QueryPoolByIDRequest): Promise<QueryPoolResponseSDKType> {
    const endpoint = `neutron/dex/pool/${params.poolId}`;
    return await this.req.get<QueryPoolResponseSDKType>(endpoint);
  }
  /* Queries a PoolMetadata by ID */
  async poolMetadata(params: QueryGetPoolMetadataRequest): Promise<QueryGetPoolMetadataResponseSDKType> {
    const endpoint = `neutron/dex/pool_metadata/${params.id}`;
    return await this.req.get<QueryGetPoolMetadataResponseSDKType>(endpoint);
  }
  /* Queries a list of PoolMetadata items. */
  async poolMetadataAll(params: QueryAllPoolMetadataRequest = {
    pagination: undefined
  }): Promise<QueryAllPoolMetadataResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `neutron/dex/pool_metadata`;
    return await this.req.get<QueryAllPoolMetadataResponseSDKType>(endpoint, options);
  }
}