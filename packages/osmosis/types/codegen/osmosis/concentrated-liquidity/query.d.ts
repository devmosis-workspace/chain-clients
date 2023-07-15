import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { FullPositionBreakdown, FullPositionBreakdownSDKType, PositionWithPeriodLock, PositionWithPeriodLockSDKType } from "./position";
import { Any, AnySDKType } from "../../google/protobuf/any";
import { Params, ParamsSDKType } from "./params";
import { Coin, CoinSDKType, DecCoin, DecCoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { UptimeTracker, UptimeTrackerSDKType } from "./tickInfo";
import { IncentiveRecord, IncentiveRecordSDKType } from "./incentive_record";
import { Long } from "../../helpers";
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
export interface ParamsRequest {
}
/** =============================== ModuleParams */
export interface ParamsRequestSDKType {
}
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
export interface GetTotalLiquidityRequest {
}
/** =============================== GetTotalLiquidity */
export interface GetTotalLiquidityRequestSDKType {
}
export interface GetTotalLiquidityResponse {
    totalLiquidity: Coin[];
}
export interface GetTotalLiquidityResponseSDKType {
    total_liquidity: CoinSDKType[];
}
export declare const UserPositionsRequest: {
    encode(message: UserPositionsRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): UserPositionsRequest;
    fromPartial(object: Partial<UserPositionsRequest>): UserPositionsRequest;
};
export declare const UserPositionsResponse: {
    encode(message: UserPositionsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): UserPositionsResponse;
    fromPartial(object: Partial<UserPositionsResponse>): UserPositionsResponse;
};
export declare const PositionByIdRequest: {
    encode(message: PositionByIdRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): PositionByIdRequest;
    fromPartial(object: Partial<PositionByIdRequest>): PositionByIdRequest;
};
export declare const PositionByIdResponse: {
    encode(message: PositionByIdResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): PositionByIdResponse;
    fromPartial(object: Partial<PositionByIdResponse>): PositionByIdResponse;
};
export declare const PoolsRequest: {
    encode(message: PoolsRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): PoolsRequest;
    fromPartial(object: Partial<PoolsRequest>): PoolsRequest;
};
export declare const PoolsResponse: {
    encode(message: PoolsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): PoolsResponse;
    fromPartial(object: Partial<PoolsResponse>): PoolsResponse;
};
export declare const ParamsRequest: {
    encode(_: ParamsRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): ParamsRequest;
    fromPartial(_: Partial<ParamsRequest>): ParamsRequest;
};
export declare const ParamsResponse: {
    encode(message: ParamsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): ParamsResponse;
    fromPartial(object: Partial<ParamsResponse>): ParamsResponse;
};
export declare const TickLiquidityNet: {
    encode(message: TickLiquidityNet, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): TickLiquidityNet;
    fromPartial(object: Partial<TickLiquidityNet>): TickLiquidityNet;
};
export declare const LiquidityDepthWithRange: {
    encode(message: LiquidityDepthWithRange, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): LiquidityDepthWithRange;
    fromPartial(object: Partial<LiquidityDepthWithRange>): LiquidityDepthWithRange;
};
export declare const LiquidityNetInDirectionRequest: {
    encode(message: LiquidityNetInDirectionRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): LiquidityNetInDirectionRequest;
    fromPartial(object: Partial<LiquidityNetInDirectionRequest>): LiquidityNetInDirectionRequest;
};
export declare const LiquidityNetInDirectionResponse: {
    encode(message: LiquidityNetInDirectionResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): LiquidityNetInDirectionResponse;
    fromPartial(object: Partial<LiquidityNetInDirectionResponse>): LiquidityNetInDirectionResponse;
};
export declare const LiquidityPerTickRangeRequest: {
    encode(message: LiquidityPerTickRangeRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): LiquidityPerTickRangeRequest;
    fromPartial(object: Partial<LiquidityPerTickRangeRequest>): LiquidityPerTickRangeRequest;
};
export declare const LiquidityPerTickRangeResponse: {
    encode(message: LiquidityPerTickRangeResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): LiquidityPerTickRangeResponse;
    fromPartial(object: Partial<LiquidityPerTickRangeResponse>): LiquidityPerTickRangeResponse;
};
export declare const ClaimableSpreadRewardsRequest: {
    encode(message: ClaimableSpreadRewardsRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): ClaimableSpreadRewardsRequest;
    fromPartial(object: Partial<ClaimableSpreadRewardsRequest>): ClaimableSpreadRewardsRequest;
};
export declare const ClaimableSpreadRewardsResponse: {
    encode(message: ClaimableSpreadRewardsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): ClaimableSpreadRewardsResponse;
    fromPartial(object: Partial<ClaimableSpreadRewardsResponse>): ClaimableSpreadRewardsResponse;
};
export declare const ClaimableIncentivesRequest: {
    encode(message: ClaimableIncentivesRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): ClaimableIncentivesRequest;
    fromPartial(object: Partial<ClaimableIncentivesRequest>): ClaimableIncentivesRequest;
};
export declare const ClaimableIncentivesResponse: {
    encode(message: ClaimableIncentivesResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): ClaimableIncentivesResponse;
    fromPartial(object: Partial<ClaimableIncentivesResponse>): ClaimableIncentivesResponse;
};
export declare const PoolAccumulatorRewardsRequest: {
    encode(message: PoolAccumulatorRewardsRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): PoolAccumulatorRewardsRequest;
    fromPartial(object: Partial<PoolAccumulatorRewardsRequest>): PoolAccumulatorRewardsRequest;
};
export declare const PoolAccumulatorRewardsResponse: {
    encode(message: PoolAccumulatorRewardsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): PoolAccumulatorRewardsResponse;
    fromPartial(object: Partial<PoolAccumulatorRewardsResponse>): PoolAccumulatorRewardsResponse;
};
export declare const TickAccumulatorTrackersRequest: {
    encode(message: TickAccumulatorTrackersRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): TickAccumulatorTrackersRequest;
    fromPartial(object: Partial<TickAccumulatorTrackersRequest>): TickAccumulatorTrackersRequest;
};
export declare const TickAccumulatorTrackersResponse: {
    encode(message: TickAccumulatorTrackersResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): TickAccumulatorTrackersResponse;
    fromPartial(object: Partial<TickAccumulatorTrackersResponse>): TickAccumulatorTrackersResponse;
};
export declare const IncentiveRecordsRequest: {
    encode(message: IncentiveRecordsRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): IncentiveRecordsRequest;
    fromPartial(object: Partial<IncentiveRecordsRequest>): IncentiveRecordsRequest;
};
export declare const IncentiveRecordsResponse: {
    encode(message: IncentiveRecordsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): IncentiveRecordsResponse;
    fromPartial(object: Partial<IncentiveRecordsResponse>): IncentiveRecordsResponse;
};
export declare const CFMMPoolIdLinkFromConcentratedPoolIdRequest: {
    encode(message: CFMMPoolIdLinkFromConcentratedPoolIdRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): CFMMPoolIdLinkFromConcentratedPoolIdRequest;
    fromPartial(object: Partial<CFMMPoolIdLinkFromConcentratedPoolIdRequest>): CFMMPoolIdLinkFromConcentratedPoolIdRequest;
};
export declare const CFMMPoolIdLinkFromConcentratedPoolIdResponse: {
    encode(message: CFMMPoolIdLinkFromConcentratedPoolIdResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): CFMMPoolIdLinkFromConcentratedPoolIdResponse;
    fromPartial(object: Partial<CFMMPoolIdLinkFromConcentratedPoolIdResponse>): CFMMPoolIdLinkFromConcentratedPoolIdResponse;
};
export declare const UserUnbondingPositionsRequest: {
    encode(message: UserUnbondingPositionsRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): UserUnbondingPositionsRequest;
    fromPartial(object: Partial<UserUnbondingPositionsRequest>): UserUnbondingPositionsRequest;
};
export declare const UserUnbondingPositionsResponse: {
    encode(message: UserUnbondingPositionsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): UserUnbondingPositionsResponse;
    fromPartial(object: Partial<UserUnbondingPositionsResponse>): UserUnbondingPositionsResponse;
};
export declare const GetTotalLiquidityRequest: {
    encode(_: GetTotalLiquidityRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): GetTotalLiquidityRequest;
    fromPartial(_: Partial<GetTotalLiquidityRequest>): GetTotalLiquidityRequest;
};
export declare const GetTotalLiquidityResponse: {
    encode(message: GetTotalLiquidityResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): GetTotalLiquidityResponse;
    fromPartial(object: Partial<GetTotalLiquidityResponse>): GetTotalLiquidityResponse;
};
