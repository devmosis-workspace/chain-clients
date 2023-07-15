import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { Long } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
/** ===================== MsgCreatePosition */
export interface MsgCreatePosition {
    poolId: Long;
    sender: string;
    lowerTick: Long;
    upperTick: Long;
    /**
     * tokens_provided is the amount of tokens provided for the position.
     * It must at a minimum be of length 1 (for a single sided position)
     * and at a maximum be of length 2 (for a position that straddles the current
     * tick).
     */
    tokensProvided: Coin[];
    tokenMinAmount0: string;
    tokenMinAmount1: string;
}
/** ===================== MsgCreatePosition */
export interface MsgCreatePositionSDKType {
    pool_id: Long;
    sender: string;
    lower_tick: Long;
    upper_tick: Long;
    tokens_provided: CoinSDKType[];
    token_min_amount0: string;
    token_min_amount1: string;
}
export interface MsgCreatePositionResponse {
    positionId: Long;
    amount0: string;
    amount1: string;
    liquidityCreated: string;
    /**
     * the lower and upper tick are in the response because there are
     * instances in which multiple ticks represent the same price, so
     * we may move their provided tick to the canonical tick that represents
     * the same price.
     */
    lowerTick: Long;
    upperTick: Long;
}
export interface MsgCreatePositionResponseSDKType {
    position_id: Long;
    amount0: string;
    amount1: string;
    liquidity_created: string;
    lower_tick: Long;
    upper_tick: Long;
}
/** ===================== MsgAddToPosition */
export interface MsgAddToPosition {
    positionId: Long;
    sender: string;
    /** amount0 represents the amount of token0 willing to put in. */
    amount0: string;
    /** amount1 represents the amount of token1 willing to put in. */
    amount1: string;
    /**
     * token_min_amount0 represents the minimum amount of token0 desired from the
     * new position being created. Note that this field indicates the min amount0
     * corresponding to the liquidity that is being added, not the total
     * liquidity of the position.
     */
    tokenMinAmount0: string;
    /**
     * token_min_amount1 represents the minimum amount of token1 desired from the
     * new position being created. Note that this field indicates the min amount1
     * corresponding to the liquidity that is being added, not the total
     * liquidity of the position.
     */
    tokenMinAmount1: string;
}
/** ===================== MsgAddToPosition */
export interface MsgAddToPositionSDKType {
    position_id: Long;
    sender: string;
    amount0: string;
    amount1: string;
    token_min_amount0: string;
    token_min_amount1: string;
}
export interface MsgAddToPositionResponse {
    positionId: Long;
    amount0: string;
    amount1: string;
}
export interface MsgAddToPositionResponseSDKType {
    position_id: Long;
    amount0: string;
    amount1: string;
}
/** ===================== MsgWithdrawPosition */
export interface MsgWithdrawPosition {
    positionId: Long;
    sender: string;
    liquidityAmount: string;
}
/** ===================== MsgWithdrawPosition */
export interface MsgWithdrawPositionSDKType {
    position_id: Long;
    sender: string;
    liquidity_amount: string;
}
export interface MsgWithdrawPositionResponse {
    amount0: string;
    amount1: string;
}
export interface MsgWithdrawPositionResponseSDKType {
    amount0: string;
    amount1: string;
}
/** ===================== MsgCollectSpreadRewards */
export interface MsgCollectSpreadRewards {
    positionIds: Long[];
    sender: string;
}
/** ===================== MsgCollectSpreadRewards */
export interface MsgCollectSpreadRewardsSDKType {
    position_ids: Long[];
    sender: string;
}
export interface MsgCollectSpreadRewardsResponse {
    collectedSpreadRewards: Coin[];
}
export interface MsgCollectSpreadRewardsResponseSDKType {
    collected_spread_rewards: CoinSDKType[];
}
/** ===================== MsgCollectIncentives */
export interface MsgCollectIncentives {
    positionIds: Long[];
    sender: string;
}
/** ===================== MsgCollectIncentives */
export interface MsgCollectIncentivesSDKType {
    position_ids: Long[];
    sender: string;
}
export interface MsgCollectIncentivesResponse {
    collectedIncentives: Coin[];
    forfeitedIncentives: Coin[];
}
export interface MsgCollectIncentivesResponseSDKType {
    collected_incentives: CoinSDKType[];
    forfeited_incentives: CoinSDKType[];
}
/** ===================== MsgFungifyChargedPositions */
export interface MsgFungifyChargedPositions {
    positionIds: Long[];
    sender: string;
}
/** ===================== MsgFungifyChargedPositions */
export interface MsgFungifyChargedPositionsSDKType {
    position_ids: Long[];
    sender: string;
}
export interface MsgFungifyChargedPositionsResponse {
    newPositionId: Long;
}
export interface MsgFungifyChargedPositionsResponseSDKType {
    new_position_id: Long;
}
export declare const MsgCreatePosition: {
    encode(message: MsgCreatePosition, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgCreatePosition;
    fromPartial(object: Partial<MsgCreatePosition>): MsgCreatePosition;
};
export declare const MsgCreatePositionResponse: {
    encode(message: MsgCreatePositionResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgCreatePositionResponse;
    fromPartial(object: Partial<MsgCreatePositionResponse>): MsgCreatePositionResponse;
};
export declare const MsgAddToPosition: {
    encode(message: MsgAddToPosition, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgAddToPosition;
    fromPartial(object: Partial<MsgAddToPosition>): MsgAddToPosition;
};
export declare const MsgAddToPositionResponse: {
    encode(message: MsgAddToPositionResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgAddToPositionResponse;
    fromPartial(object: Partial<MsgAddToPositionResponse>): MsgAddToPositionResponse;
};
export declare const MsgWithdrawPosition: {
    encode(message: MsgWithdrawPosition, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgWithdrawPosition;
    fromPartial(object: Partial<MsgWithdrawPosition>): MsgWithdrawPosition;
};
export declare const MsgWithdrawPositionResponse: {
    encode(message: MsgWithdrawPositionResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgWithdrawPositionResponse;
    fromPartial(object: Partial<MsgWithdrawPositionResponse>): MsgWithdrawPositionResponse;
};
export declare const MsgCollectSpreadRewards: {
    encode(message: MsgCollectSpreadRewards, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgCollectSpreadRewards;
    fromPartial(object: Partial<MsgCollectSpreadRewards>): MsgCollectSpreadRewards;
};
export declare const MsgCollectSpreadRewardsResponse: {
    encode(message: MsgCollectSpreadRewardsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgCollectSpreadRewardsResponse;
    fromPartial(object: Partial<MsgCollectSpreadRewardsResponse>): MsgCollectSpreadRewardsResponse;
};
export declare const MsgCollectIncentives: {
    encode(message: MsgCollectIncentives, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgCollectIncentives;
    fromPartial(object: Partial<MsgCollectIncentives>): MsgCollectIncentives;
};
export declare const MsgCollectIncentivesResponse: {
    encode(message: MsgCollectIncentivesResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgCollectIncentivesResponse;
    fromPartial(object: Partial<MsgCollectIncentivesResponse>): MsgCollectIncentivesResponse;
};
export declare const MsgFungifyChargedPositions: {
    encode(message: MsgFungifyChargedPositions, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgFungifyChargedPositions;
    fromPartial(object: Partial<MsgFungifyChargedPositions>): MsgFungifyChargedPositions;
};
export declare const MsgFungifyChargedPositionsResponse: {
    encode(message: MsgFungifyChargedPositionsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgFungifyChargedPositionsResponse;
    fromPartial(object: Partial<MsgFungifyChargedPositionsResponse>): MsgFungifyChargedPositionsResponse;
};
