import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { FullPositionBreakdown, FullPositionBreakdownSDKType, PositionWithPeriodLock, PositionWithPeriodLockSDKType } from "./position";
import { Any, AnySDKType } from "../../google/protobuf/any";
import { Params, ParamsSDKType } from "./params";
import { Coin, CoinSDKType, DecCoin, DecCoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { UptimeTracker, UptimeTrackerSDKType } from "./tickInfo";
import { IncentiveRecord, IncentiveRecordSDKType } from "./incentive_record";
import { Long, isSet } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
/** =============================== UserPositions */
export interface UserPositionsRequest {
  address: string;
  poolId: Long;
  pagination?: PageRequest;
}
/** =============================== UserPositions */
export interface UserPositionsRequestSDKType {
  address: string;
  pool_id: Long;
  pagination?: PageRequestSDKType;
}
export interface UserPositionsResponse {
  positions: FullPositionBreakdown[];
  pagination?: PageResponse;
}
export interface UserPositionsResponseSDKType {
  positions: FullPositionBreakdownSDKType[];
  pagination?: PageResponseSDKType;
}
/** =============================== PositionById */
export interface PositionByIdRequest {
  positionId: Long;
}
/** =============================== PositionById */
export interface PositionByIdRequestSDKType {
  position_id: Long;
}
export interface PositionByIdResponse {
  position?: FullPositionBreakdown;
}
export interface PositionByIdResponseSDKType {
  position?: FullPositionBreakdownSDKType;
}
/** =============================== Pools */
export interface PoolsRequest {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
/** =============================== Pools */
export interface PoolsRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface PoolsResponse {
  pools: Any[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
export interface PoolsResponseSDKType {
  pools: AnySDKType[];
  pagination?: PageResponseSDKType;
}
/** =============================== ModuleParams */
export interface ParamsRequest {}
/** =============================== ModuleParams */
export interface ParamsRequestSDKType {}
export interface ParamsResponse {
  params?: Params;
}
export interface ParamsResponseSDKType {
  params?: ParamsSDKType;
}
export interface TickLiquidityNet {
  liquidityNet: string;
  tickIndex: Long;
}
export interface TickLiquidityNetSDKType {
  liquidity_net: string;
  tick_index: Long;
}
export interface LiquidityDepthWithRange {
  liquidityAmount: string;
  lowerTick: Long;
  upperTick: Long;
}
export interface LiquidityDepthWithRangeSDKType {
  liquidity_amount: string;
  lower_tick: Long;
  upper_tick: Long;
}
/** =============================== LiquidityNetInDirection */
export interface LiquidityNetInDirectionRequest {
  poolId: Long;
  tokenIn: string;
  startTick: Long;
  useCurTick: boolean;
  boundTick: Long;
  useNoBound: boolean;
}
/** =============================== LiquidityNetInDirection */
export interface LiquidityNetInDirectionRequestSDKType {
  pool_id: Long;
  token_in: string;
  start_tick: Long;
  use_cur_tick: boolean;
  bound_tick: Long;
  use_no_bound: boolean;
}
export interface LiquidityNetInDirectionResponse {
  liquidityDepths: TickLiquidityNet[];
  currentTick: Long;
  currentLiquidity: string;
}
export interface LiquidityNetInDirectionResponseSDKType {
  liquidity_depths: TickLiquidityNetSDKType[];
  current_tick: Long;
  current_liquidity: string;
}
/** =============================== LiquidityPerTickRange */
export interface LiquidityPerTickRangeRequest {
  poolId: Long;
}
/** =============================== LiquidityPerTickRange */
export interface LiquidityPerTickRangeRequestSDKType {
  pool_id: Long;
}
export interface LiquidityPerTickRangeResponse {
  liquidity: LiquidityDepthWithRange[];
}
export interface LiquidityPerTickRangeResponseSDKType {
  liquidity: LiquidityDepthWithRangeSDKType[];
}
/** ===================== QueryClaimableSpreadRewards */
export interface ClaimableSpreadRewardsRequest {
  positionId: Long;
}
/** ===================== QueryClaimableSpreadRewards */
export interface ClaimableSpreadRewardsRequestSDKType {
  position_id: Long;
}
export interface ClaimableSpreadRewardsResponse {
  claimableSpreadRewards: Coin[];
}
export interface ClaimableSpreadRewardsResponseSDKType {
  claimable_spread_rewards: CoinSDKType[];
}
/** ===================== QueryClaimableIncentives */
export interface ClaimableIncentivesRequest {
  positionId: Long;
}
/** ===================== QueryClaimableIncentives */
export interface ClaimableIncentivesRequestSDKType {
  position_id: Long;
}
export interface ClaimableIncentivesResponse {
  claimableIncentives: Coin[];
  forfeitedIncentives: Coin[];
}
export interface ClaimableIncentivesResponseSDKType {
  claimable_incentives: CoinSDKType[];
  forfeited_incentives: CoinSDKType[];
}
/** ===================== QueryPoolAccumulatorRewards */
export interface PoolAccumulatorRewardsRequest {
  poolId: Long;
}
/** ===================== QueryPoolAccumulatorRewards */
export interface PoolAccumulatorRewardsRequestSDKType {
  pool_id: Long;
}
export interface PoolAccumulatorRewardsResponse {
  spreadRewardGrowthGlobal: DecCoin[];
  uptimeGrowthGlobal: UptimeTracker[];
}
export interface PoolAccumulatorRewardsResponseSDKType {
  spread_reward_growth_global: DecCoinSDKType[];
  uptime_growth_global: UptimeTrackerSDKType[];
}
/** ===================== QueryTickAccumulatorTrackers */
export interface TickAccumulatorTrackersRequest {
  poolId: Long;
  tickIndex: Long;
}
/** ===================== QueryTickAccumulatorTrackers */
export interface TickAccumulatorTrackersRequestSDKType {
  pool_id: Long;
  tick_index: Long;
}
export interface TickAccumulatorTrackersResponse {
  spreadRewardGrowthOppositeDirectionOfLastTraversal: DecCoin[];
  uptimeTrackers: UptimeTracker[];
}
export interface TickAccumulatorTrackersResponseSDKType {
  spread_reward_growth_opposite_direction_of_last_traversal: DecCoinSDKType[];
  uptime_trackers: UptimeTrackerSDKType[];
}
/** ===================== QueryIncentiveRecords */
export interface IncentiveRecordsRequest {
  poolId: Long;
  pagination?: PageRequest;
}
/** ===================== QueryIncentiveRecords */
export interface IncentiveRecordsRequestSDKType {
  pool_id: Long;
  pagination?: PageRequestSDKType;
}
export interface IncentiveRecordsResponse {
  incentiveRecords: IncentiveRecord[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
export interface IncentiveRecordsResponseSDKType {
  incentive_records: IncentiveRecordSDKType[];
  pagination?: PageResponseSDKType;
}
/** =============================== CFMMPoolIdLinkFromConcentratedPoolId */
export interface CFMMPoolIdLinkFromConcentratedPoolIdRequest {
  concentratedPoolId: Long;
}
/** =============================== CFMMPoolIdLinkFromConcentratedPoolId */
export interface CFMMPoolIdLinkFromConcentratedPoolIdRequestSDKType {
  concentrated_pool_id: Long;
}
export interface CFMMPoolIdLinkFromConcentratedPoolIdResponse {
  cfmmPoolId: Long;
}
export interface CFMMPoolIdLinkFromConcentratedPoolIdResponseSDKType {
  cfmm_pool_id: Long;
}
/** =============================== UserUnbondingPositions */
export interface UserUnbondingPositionsRequest {
  address: string;
}
/** =============================== UserUnbondingPositions */
export interface UserUnbondingPositionsRequestSDKType {
  address: string;
}
export interface UserUnbondingPositionsResponse {
  positionsWithPeriodLock: PositionWithPeriodLock[];
}
export interface UserUnbondingPositionsResponseSDKType {
  positions_with_period_lock: PositionWithPeriodLockSDKType[];
}
/** =============================== GetTotalLiquidity */
export interface GetTotalLiquidityRequest {}
/** =============================== GetTotalLiquidity */
export interface GetTotalLiquidityRequestSDKType {}
export interface GetTotalLiquidityResponse {
  totalLiquidity: Coin[];
}
export interface GetTotalLiquidityResponseSDKType {
  total_liquidity: CoinSDKType[];
}
function createBaseUserPositionsRequest(): UserPositionsRequest {
  return {
    address: "",
    poolId: Long.UZERO,
    pagination: undefined
  };
}
export const UserPositionsRequest = {
  encode(message: UserPositionsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (!message.poolId.isZero()) {
      writer.uint32(16).uint64(message.poolId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): UserPositionsRequest {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<UserPositionsRequest>): UserPositionsRequest {
    const message = createBaseUserPositionsRequest();
    message.address = object.address ?? "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseUserPositionsResponse(): UserPositionsResponse {
  return {
    positions: [],
    pagination: undefined
  };
}
export const UserPositionsResponse = {
  encode(message: UserPositionsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.positions) {
      FullPositionBreakdown.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): UserPositionsResponse {
    return {
      positions: Array.isArray(object?.positions) ? object.positions.map((e: any) => FullPositionBreakdown.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<UserPositionsResponse>): UserPositionsResponse {
    const message = createBaseUserPositionsResponse();
    message.positions = object.positions?.map(e => FullPositionBreakdown.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBasePositionByIdRequest(): PositionByIdRequest {
  return {
    positionId: Long.UZERO
  };
}
export const PositionByIdRequest = {
  encode(message: PositionByIdRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.positionId.isZero()) {
      writer.uint32(8).uint64(message.positionId);
    }
    return writer;
  },
  fromJSON(object: any): PositionByIdRequest {
    return {
      positionId: isSet(object.positionId) ? Long.fromValue(object.positionId) : Long.UZERO
    };
  },
  fromPartial(object: Partial<PositionByIdRequest>): PositionByIdRequest {
    const message = createBasePositionByIdRequest();
    message.positionId = object.positionId !== undefined && object.positionId !== null ? Long.fromValue(object.positionId) : Long.UZERO;
    return message;
  }
};
function createBasePositionByIdResponse(): PositionByIdResponse {
  return {
    position: undefined
  };
}
export const PositionByIdResponse = {
  encode(message: PositionByIdResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.position !== undefined) {
      FullPositionBreakdown.encode(message.position, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): PositionByIdResponse {
    return {
      position: isSet(object.position) ? FullPositionBreakdown.fromJSON(object.position) : undefined
    };
  },
  fromPartial(object: Partial<PositionByIdResponse>): PositionByIdResponse {
    const message = createBasePositionByIdResponse();
    message.position = object.position !== undefined && object.position !== null ? FullPositionBreakdown.fromPartial(object.position) : undefined;
    return message;
  }
};
function createBasePoolsRequest(): PoolsRequest {
  return {
    pagination: undefined
  };
}
export const PoolsRequest = {
  encode(message: PoolsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): PoolsRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<PoolsRequest>): PoolsRequest {
    const message = createBasePoolsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBasePoolsResponse(): PoolsResponse {
  return {
    pools: [],
    pagination: undefined
  };
}
export const PoolsResponse = {
  encode(message: PoolsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.pools) {
      Any.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): PoolsResponse {
    return {
      pools: Array.isArray(object?.pools) ? object.pools.map((e: any) => Any.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<PoolsResponse>): PoolsResponse {
    const message = createBasePoolsResponse();
    message.pools = object.pools?.map(e => Any.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseParamsRequest(): ParamsRequest {
  return {};
}
export const ParamsRequest = {
  encode(_: ParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): ParamsRequest {
    return {};
  },
  fromPartial(_: Partial<ParamsRequest>): ParamsRequest {
    const message = createBaseParamsRequest();
    return message;
  }
};
function createBaseParamsResponse(): ParamsResponse {
  return {
    params: undefined
  };
}
export const ParamsResponse = {
  encode(message: ParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): ParamsResponse {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  fromPartial(object: Partial<ParamsResponse>): ParamsResponse {
    const message = createBaseParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  }
};
function createBaseTickLiquidityNet(): TickLiquidityNet {
  return {
    liquidityNet: "",
    tickIndex: Long.ZERO
  };
}
export const TickLiquidityNet = {
  encode(message: TickLiquidityNet, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.liquidityNet !== "") {
      writer.uint32(10).string(message.liquidityNet);
    }
    if (!message.tickIndex.isZero()) {
      writer.uint32(16).int64(message.tickIndex);
    }
    return writer;
  },
  fromJSON(object: any): TickLiquidityNet {
    return {
      liquidityNet: isSet(object.liquidityNet) ? String(object.liquidityNet) : "",
      tickIndex: isSet(object.tickIndex) ? Long.fromValue(object.tickIndex) : Long.ZERO
    };
  },
  fromPartial(object: Partial<TickLiquidityNet>): TickLiquidityNet {
    const message = createBaseTickLiquidityNet();
    message.liquidityNet = object.liquidityNet ?? "";
    message.tickIndex = object.tickIndex !== undefined && object.tickIndex !== null ? Long.fromValue(object.tickIndex) : Long.ZERO;
    return message;
  }
};
function createBaseLiquidityDepthWithRange(): LiquidityDepthWithRange {
  return {
    liquidityAmount: "",
    lowerTick: Long.ZERO,
    upperTick: Long.ZERO
  };
}
export const LiquidityDepthWithRange = {
  encode(message: LiquidityDepthWithRange, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.liquidityAmount !== "") {
      writer.uint32(10).string(message.liquidityAmount);
    }
    if (!message.lowerTick.isZero()) {
      writer.uint32(16).int64(message.lowerTick);
    }
    if (!message.upperTick.isZero()) {
      writer.uint32(24).int64(message.upperTick);
    }
    return writer;
  },
  fromJSON(object: any): LiquidityDepthWithRange {
    return {
      liquidityAmount: isSet(object.liquidityAmount) ? String(object.liquidityAmount) : "",
      lowerTick: isSet(object.lowerTick) ? Long.fromValue(object.lowerTick) : Long.ZERO,
      upperTick: isSet(object.upperTick) ? Long.fromValue(object.upperTick) : Long.ZERO
    };
  },
  fromPartial(object: Partial<LiquidityDepthWithRange>): LiquidityDepthWithRange {
    const message = createBaseLiquidityDepthWithRange();
    message.liquidityAmount = object.liquidityAmount ?? "";
    message.lowerTick = object.lowerTick !== undefined && object.lowerTick !== null ? Long.fromValue(object.lowerTick) : Long.ZERO;
    message.upperTick = object.upperTick !== undefined && object.upperTick !== null ? Long.fromValue(object.upperTick) : Long.ZERO;
    return message;
  }
};
function createBaseLiquidityNetInDirectionRequest(): LiquidityNetInDirectionRequest {
  return {
    poolId: Long.UZERO,
    tokenIn: "",
    startTick: Long.ZERO,
    useCurTick: false,
    boundTick: Long.ZERO,
    useNoBound: false
  };
}
export const LiquidityNetInDirectionRequest = {
  encode(message: LiquidityNetInDirectionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.tokenIn !== "") {
      writer.uint32(18).string(message.tokenIn);
    }
    if (!message.startTick.isZero()) {
      writer.uint32(24).int64(message.startTick);
    }
    if (message.useCurTick === true) {
      writer.uint32(32).bool(message.useCurTick);
    }
    if (!message.boundTick.isZero()) {
      writer.uint32(40).int64(message.boundTick);
    }
    if (message.useNoBound === true) {
      writer.uint32(48).bool(message.useNoBound);
    }
    return writer;
  },
  fromJSON(object: any): LiquidityNetInDirectionRequest {
    return {
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      tokenIn: isSet(object.tokenIn) ? String(object.tokenIn) : "",
      startTick: isSet(object.startTick) ? Long.fromValue(object.startTick) : Long.ZERO,
      useCurTick: isSet(object.useCurTick) ? Boolean(object.useCurTick) : false,
      boundTick: isSet(object.boundTick) ? Long.fromValue(object.boundTick) : Long.ZERO,
      useNoBound: isSet(object.useNoBound) ? Boolean(object.useNoBound) : false
    };
  },
  fromPartial(object: Partial<LiquidityNetInDirectionRequest>): LiquidityNetInDirectionRequest {
    const message = createBaseLiquidityNetInDirectionRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.tokenIn = object.tokenIn ?? "";
    message.startTick = object.startTick !== undefined && object.startTick !== null ? Long.fromValue(object.startTick) : Long.ZERO;
    message.useCurTick = object.useCurTick ?? false;
    message.boundTick = object.boundTick !== undefined && object.boundTick !== null ? Long.fromValue(object.boundTick) : Long.ZERO;
    message.useNoBound = object.useNoBound ?? false;
    return message;
  }
};
function createBaseLiquidityNetInDirectionResponse(): LiquidityNetInDirectionResponse {
  return {
    liquidityDepths: [],
    currentTick: Long.ZERO,
    currentLiquidity: ""
  };
}
export const LiquidityNetInDirectionResponse = {
  encode(message: LiquidityNetInDirectionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.liquidityDepths) {
      TickLiquidityNet.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (!message.currentTick.isZero()) {
      writer.uint32(16).int64(message.currentTick);
    }
    if (message.currentLiquidity !== "") {
      writer.uint32(26).string(message.currentLiquidity);
    }
    return writer;
  },
  fromJSON(object: any): LiquidityNetInDirectionResponse {
    return {
      liquidityDepths: Array.isArray(object?.liquidityDepths) ? object.liquidityDepths.map((e: any) => TickLiquidityNet.fromJSON(e)) : [],
      currentTick: isSet(object.currentTick) ? Long.fromValue(object.currentTick) : Long.ZERO,
      currentLiquidity: isSet(object.currentLiquidity) ? String(object.currentLiquidity) : ""
    };
  },
  fromPartial(object: Partial<LiquidityNetInDirectionResponse>): LiquidityNetInDirectionResponse {
    const message = createBaseLiquidityNetInDirectionResponse();
    message.liquidityDepths = object.liquidityDepths?.map(e => TickLiquidityNet.fromPartial(e)) || [];
    message.currentTick = object.currentTick !== undefined && object.currentTick !== null ? Long.fromValue(object.currentTick) : Long.ZERO;
    message.currentLiquidity = object.currentLiquidity ?? "";
    return message;
  }
};
function createBaseLiquidityPerTickRangeRequest(): LiquidityPerTickRangeRequest {
  return {
    poolId: Long.UZERO
  };
}
export const LiquidityPerTickRangeRequest = {
  encode(message: LiquidityPerTickRangeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    return writer;
  },
  fromJSON(object: any): LiquidityPerTickRangeRequest {
    return {
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO
    };
  },
  fromPartial(object: Partial<LiquidityPerTickRangeRequest>): LiquidityPerTickRangeRequest {
    const message = createBaseLiquidityPerTickRangeRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    return message;
  }
};
function createBaseLiquidityPerTickRangeResponse(): LiquidityPerTickRangeResponse {
  return {
    liquidity: []
  };
}
export const LiquidityPerTickRangeResponse = {
  encode(message: LiquidityPerTickRangeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.liquidity) {
      LiquidityDepthWithRange.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): LiquidityPerTickRangeResponse {
    return {
      liquidity: Array.isArray(object?.liquidity) ? object.liquidity.map((e: any) => LiquidityDepthWithRange.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<LiquidityPerTickRangeResponse>): LiquidityPerTickRangeResponse {
    const message = createBaseLiquidityPerTickRangeResponse();
    message.liquidity = object.liquidity?.map(e => LiquidityDepthWithRange.fromPartial(e)) || [];
    return message;
  }
};
function createBaseClaimableSpreadRewardsRequest(): ClaimableSpreadRewardsRequest {
  return {
    positionId: Long.UZERO
  };
}
export const ClaimableSpreadRewardsRequest = {
  encode(message: ClaimableSpreadRewardsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.positionId.isZero()) {
      writer.uint32(8).uint64(message.positionId);
    }
    return writer;
  },
  fromJSON(object: any): ClaimableSpreadRewardsRequest {
    return {
      positionId: isSet(object.positionId) ? Long.fromValue(object.positionId) : Long.UZERO
    };
  },
  fromPartial(object: Partial<ClaimableSpreadRewardsRequest>): ClaimableSpreadRewardsRequest {
    const message = createBaseClaimableSpreadRewardsRequest();
    message.positionId = object.positionId !== undefined && object.positionId !== null ? Long.fromValue(object.positionId) : Long.UZERO;
    return message;
  }
};
function createBaseClaimableSpreadRewardsResponse(): ClaimableSpreadRewardsResponse {
  return {
    claimableSpreadRewards: []
  };
}
export const ClaimableSpreadRewardsResponse = {
  encode(message: ClaimableSpreadRewardsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.claimableSpreadRewards) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): ClaimableSpreadRewardsResponse {
    return {
      claimableSpreadRewards: Array.isArray(object?.claimableSpreadRewards) ? object.claimableSpreadRewards.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<ClaimableSpreadRewardsResponse>): ClaimableSpreadRewardsResponse {
    const message = createBaseClaimableSpreadRewardsResponse();
    message.claimableSpreadRewards = object.claimableSpreadRewards?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }
};
function createBaseClaimableIncentivesRequest(): ClaimableIncentivesRequest {
  return {
    positionId: Long.UZERO
  };
}
export const ClaimableIncentivesRequest = {
  encode(message: ClaimableIncentivesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.positionId.isZero()) {
      writer.uint32(8).uint64(message.positionId);
    }
    return writer;
  },
  fromJSON(object: any): ClaimableIncentivesRequest {
    return {
      positionId: isSet(object.positionId) ? Long.fromValue(object.positionId) : Long.UZERO
    };
  },
  fromPartial(object: Partial<ClaimableIncentivesRequest>): ClaimableIncentivesRequest {
    const message = createBaseClaimableIncentivesRequest();
    message.positionId = object.positionId !== undefined && object.positionId !== null ? Long.fromValue(object.positionId) : Long.UZERO;
    return message;
  }
};
function createBaseClaimableIncentivesResponse(): ClaimableIncentivesResponse {
  return {
    claimableIncentives: [],
    forfeitedIncentives: []
  };
}
export const ClaimableIncentivesResponse = {
  encode(message: ClaimableIncentivesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.claimableIncentives) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.forfeitedIncentives) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): ClaimableIncentivesResponse {
    return {
      claimableIncentives: Array.isArray(object?.claimableIncentives) ? object.claimableIncentives.map((e: any) => Coin.fromJSON(e)) : [],
      forfeitedIncentives: Array.isArray(object?.forfeitedIncentives) ? object.forfeitedIncentives.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<ClaimableIncentivesResponse>): ClaimableIncentivesResponse {
    const message = createBaseClaimableIncentivesResponse();
    message.claimableIncentives = object.claimableIncentives?.map(e => Coin.fromPartial(e)) || [];
    message.forfeitedIncentives = object.forfeitedIncentives?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }
};
function createBasePoolAccumulatorRewardsRequest(): PoolAccumulatorRewardsRequest {
  return {
    poolId: Long.UZERO
  };
}
export const PoolAccumulatorRewardsRequest = {
  encode(message: PoolAccumulatorRewardsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    return writer;
  },
  fromJSON(object: any): PoolAccumulatorRewardsRequest {
    return {
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO
    };
  },
  fromPartial(object: Partial<PoolAccumulatorRewardsRequest>): PoolAccumulatorRewardsRequest {
    const message = createBasePoolAccumulatorRewardsRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    return message;
  }
};
function createBasePoolAccumulatorRewardsResponse(): PoolAccumulatorRewardsResponse {
  return {
    spreadRewardGrowthGlobal: [],
    uptimeGrowthGlobal: []
  };
}
export const PoolAccumulatorRewardsResponse = {
  encode(message: PoolAccumulatorRewardsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.spreadRewardGrowthGlobal) {
      DecCoin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.uptimeGrowthGlobal) {
      UptimeTracker.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): PoolAccumulatorRewardsResponse {
    return {
      spreadRewardGrowthGlobal: Array.isArray(object?.spreadRewardGrowthGlobal) ? object.spreadRewardGrowthGlobal.map((e: any) => DecCoin.fromJSON(e)) : [],
      uptimeGrowthGlobal: Array.isArray(object?.uptimeGrowthGlobal) ? object.uptimeGrowthGlobal.map((e: any) => UptimeTracker.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<PoolAccumulatorRewardsResponse>): PoolAccumulatorRewardsResponse {
    const message = createBasePoolAccumulatorRewardsResponse();
    message.spreadRewardGrowthGlobal = object.spreadRewardGrowthGlobal?.map(e => DecCoin.fromPartial(e)) || [];
    message.uptimeGrowthGlobal = object.uptimeGrowthGlobal?.map(e => UptimeTracker.fromPartial(e)) || [];
    return message;
  }
};
function createBaseTickAccumulatorTrackersRequest(): TickAccumulatorTrackersRequest {
  return {
    poolId: Long.UZERO,
    tickIndex: Long.ZERO
  };
}
export const TickAccumulatorTrackersRequest = {
  encode(message: TickAccumulatorTrackersRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (!message.tickIndex.isZero()) {
      writer.uint32(16).int64(message.tickIndex);
    }
    return writer;
  },
  fromJSON(object: any): TickAccumulatorTrackersRequest {
    return {
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      tickIndex: isSet(object.tickIndex) ? Long.fromValue(object.tickIndex) : Long.ZERO
    };
  },
  fromPartial(object: Partial<TickAccumulatorTrackersRequest>): TickAccumulatorTrackersRequest {
    const message = createBaseTickAccumulatorTrackersRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.tickIndex = object.tickIndex !== undefined && object.tickIndex !== null ? Long.fromValue(object.tickIndex) : Long.ZERO;
    return message;
  }
};
function createBaseTickAccumulatorTrackersResponse(): TickAccumulatorTrackersResponse {
  return {
    spreadRewardGrowthOppositeDirectionOfLastTraversal: [],
    uptimeTrackers: []
  };
}
export const TickAccumulatorTrackersResponse = {
  encode(message: TickAccumulatorTrackersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.spreadRewardGrowthOppositeDirectionOfLastTraversal) {
      DecCoin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.uptimeTrackers) {
      UptimeTracker.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): TickAccumulatorTrackersResponse {
    return {
      spreadRewardGrowthOppositeDirectionOfLastTraversal: Array.isArray(object?.spreadRewardGrowthOppositeDirectionOfLastTraversal) ? object.spreadRewardGrowthOppositeDirectionOfLastTraversal.map((e: any) => DecCoin.fromJSON(e)) : [],
      uptimeTrackers: Array.isArray(object?.uptimeTrackers) ? object.uptimeTrackers.map((e: any) => UptimeTracker.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<TickAccumulatorTrackersResponse>): TickAccumulatorTrackersResponse {
    const message = createBaseTickAccumulatorTrackersResponse();
    message.spreadRewardGrowthOppositeDirectionOfLastTraversal = object.spreadRewardGrowthOppositeDirectionOfLastTraversal?.map(e => DecCoin.fromPartial(e)) || [];
    message.uptimeTrackers = object.uptimeTrackers?.map(e => UptimeTracker.fromPartial(e)) || [];
    return message;
  }
};
function createBaseIncentiveRecordsRequest(): IncentiveRecordsRequest {
  return {
    poolId: Long.UZERO,
    pagination: undefined
  };
}
export const IncentiveRecordsRequest = {
  encode(message: IncentiveRecordsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): IncentiveRecordsRequest {
    return {
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<IncentiveRecordsRequest>): IncentiveRecordsRequest {
    const message = createBaseIncentiveRecordsRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseIncentiveRecordsResponse(): IncentiveRecordsResponse {
  return {
    incentiveRecords: [],
    pagination: undefined
  };
}
export const IncentiveRecordsResponse = {
  encode(message: IncentiveRecordsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.incentiveRecords) {
      IncentiveRecord.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): IncentiveRecordsResponse {
    return {
      incentiveRecords: Array.isArray(object?.incentiveRecords) ? object.incentiveRecords.map((e: any) => IncentiveRecord.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<IncentiveRecordsResponse>): IncentiveRecordsResponse {
    const message = createBaseIncentiveRecordsResponse();
    message.incentiveRecords = object.incentiveRecords?.map(e => IncentiveRecord.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseCFMMPoolIdLinkFromConcentratedPoolIdRequest(): CFMMPoolIdLinkFromConcentratedPoolIdRequest {
  return {
    concentratedPoolId: Long.UZERO
  };
}
export const CFMMPoolIdLinkFromConcentratedPoolIdRequest = {
  encode(message: CFMMPoolIdLinkFromConcentratedPoolIdRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.concentratedPoolId.isZero()) {
      writer.uint32(8).uint64(message.concentratedPoolId);
    }
    return writer;
  },
  fromJSON(object: any): CFMMPoolIdLinkFromConcentratedPoolIdRequest {
    return {
      concentratedPoolId: isSet(object.concentratedPoolId) ? Long.fromValue(object.concentratedPoolId) : Long.UZERO
    };
  },
  fromPartial(object: Partial<CFMMPoolIdLinkFromConcentratedPoolIdRequest>): CFMMPoolIdLinkFromConcentratedPoolIdRequest {
    const message = createBaseCFMMPoolIdLinkFromConcentratedPoolIdRequest();
    message.concentratedPoolId = object.concentratedPoolId !== undefined && object.concentratedPoolId !== null ? Long.fromValue(object.concentratedPoolId) : Long.UZERO;
    return message;
  }
};
function createBaseCFMMPoolIdLinkFromConcentratedPoolIdResponse(): CFMMPoolIdLinkFromConcentratedPoolIdResponse {
  return {
    cfmmPoolId: Long.UZERO
  };
}
export const CFMMPoolIdLinkFromConcentratedPoolIdResponse = {
  encode(message: CFMMPoolIdLinkFromConcentratedPoolIdResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.cfmmPoolId.isZero()) {
      writer.uint32(8).uint64(message.cfmmPoolId);
    }
    return writer;
  },
  fromJSON(object: any): CFMMPoolIdLinkFromConcentratedPoolIdResponse {
    return {
      cfmmPoolId: isSet(object.cfmmPoolId) ? Long.fromValue(object.cfmmPoolId) : Long.UZERO
    };
  },
  fromPartial(object: Partial<CFMMPoolIdLinkFromConcentratedPoolIdResponse>): CFMMPoolIdLinkFromConcentratedPoolIdResponse {
    const message = createBaseCFMMPoolIdLinkFromConcentratedPoolIdResponse();
    message.cfmmPoolId = object.cfmmPoolId !== undefined && object.cfmmPoolId !== null ? Long.fromValue(object.cfmmPoolId) : Long.UZERO;
    return message;
  }
};
function createBaseUserUnbondingPositionsRequest(): UserUnbondingPositionsRequest {
  return {
    address: ""
  };
}
export const UserUnbondingPositionsRequest = {
  encode(message: UserUnbondingPositionsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  fromJSON(object: any): UserUnbondingPositionsRequest {
    return {
      address: isSet(object.address) ? String(object.address) : ""
    };
  },
  fromPartial(object: Partial<UserUnbondingPositionsRequest>): UserUnbondingPositionsRequest {
    const message = createBaseUserUnbondingPositionsRequest();
    message.address = object.address ?? "";
    return message;
  }
};
function createBaseUserUnbondingPositionsResponse(): UserUnbondingPositionsResponse {
  return {
    positionsWithPeriodLock: []
  };
}
export const UserUnbondingPositionsResponse = {
  encode(message: UserUnbondingPositionsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.positionsWithPeriodLock) {
      PositionWithPeriodLock.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): UserUnbondingPositionsResponse {
    return {
      positionsWithPeriodLock: Array.isArray(object?.positionsWithPeriodLock) ? object.positionsWithPeriodLock.map((e: any) => PositionWithPeriodLock.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<UserUnbondingPositionsResponse>): UserUnbondingPositionsResponse {
    const message = createBaseUserUnbondingPositionsResponse();
    message.positionsWithPeriodLock = object.positionsWithPeriodLock?.map(e => PositionWithPeriodLock.fromPartial(e)) || [];
    return message;
  }
};
function createBaseGetTotalLiquidityRequest(): GetTotalLiquidityRequest {
  return {};
}
export const GetTotalLiquidityRequest = {
  encode(_: GetTotalLiquidityRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): GetTotalLiquidityRequest {
    return {};
  },
  fromPartial(_: Partial<GetTotalLiquidityRequest>): GetTotalLiquidityRequest {
    const message = createBaseGetTotalLiquidityRequest();
    return message;
  }
};
function createBaseGetTotalLiquidityResponse(): GetTotalLiquidityResponse {
  return {
    totalLiquidity: []
  };
}
export const GetTotalLiquidityResponse = {
  encode(message: GetTotalLiquidityResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.totalLiquidity) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GetTotalLiquidityResponse {
    return {
      totalLiquidity: Array.isArray(object?.totalLiquidity) ? object.totalLiquidity.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<GetTotalLiquidityResponse>): GetTotalLiquidityResponse {
    const message = createBaseGetTotalLiquidityResponse();
    message.totalLiquidity = object.totalLiquidity?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }
};