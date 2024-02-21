import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
/** ===================== MsgCreatePosition */
export interface MsgCreatePosition {
    poolId: bigint;
    sender: string;
    lowerTick: bigint;
    upperTick: bigint;
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
export interface MsgCreatePositionProtoMsg {
    typeUrl: "/osmosis.concentratedliquidity.v1beta1.MsgCreatePosition";
    value: Uint8Array;
}
/** ===================== MsgCreatePosition */
export interface MsgCreatePositionAmino {
    pool_id?: string;
    sender?: string;
    lower_tick?: string;
    upper_tick?: string;
    /**
     * tokens_provided is the amount of tokens provided for the position.
     * It must at a minimum be of length 1 (for a single sided position)
     * and at a maximum be of length 2 (for a position that straddles the current
     * tick).
     */
    tokens_provided?: CoinAmino[];
    token_min_amount0?: string;
    token_min_amount1?: string;
}
export interface MsgCreatePositionAminoMsg {
    type: "osmosis/cl-create-position";
    value: MsgCreatePositionAmino;
}
/** ===================== MsgCreatePosition */
export interface MsgCreatePositionSDKType {
    pool_id: bigint;
    sender: string;
    lower_tick: bigint;
    upper_tick: bigint;
    tokens_provided: CoinSDKType[];
    token_min_amount0: string;
    token_min_amount1: string;
}
export interface MsgCreatePositionResponse {
    positionId: bigint;
    amount0: string;
    amount1: string;
    liquidityCreated: string;
    /**
     * the lower and upper tick are in the response because there are
     * instances in which multiple ticks represent the same price, so
     * we may move their provided tick to the canonical tick that represents
     * the same price.
     */
    lowerTick: bigint;
    upperTick: bigint;
}
export interface MsgCreatePositionResponseProtoMsg {
    typeUrl: "/osmosis.concentratedliquidity.v1beta1.MsgCreatePositionResponse";
    value: Uint8Array;
}
export interface MsgCreatePositionResponseAmino {
    position_id?: string;
    amount0?: string;
    amount1?: string;
    liquidity_created?: string;
    /**
     * the lower and upper tick are in the response because there are
     * instances in which multiple ticks represent the same price, so
     * we may move their provided tick to the canonical tick that represents
     * the same price.
     */
    lower_tick?: string;
    upper_tick?: string;
}
export interface MsgCreatePositionResponseAminoMsg {
    type: "osmosis/concentratedliquidity/create-position-response";
    value: MsgCreatePositionResponseAmino;
}
export interface MsgCreatePositionResponseSDKType {
    position_id: bigint;
    amount0: string;
    amount1: string;
    liquidity_created: string;
    lower_tick: bigint;
    upper_tick: bigint;
}
/** ===================== MsgAddToPosition */
export interface MsgAddToPosition {
    positionId: bigint;
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
export interface MsgAddToPositionProtoMsg {
    typeUrl: "/osmosis.concentratedliquidity.v1beta1.MsgAddToPosition";
    value: Uint8Array;
}
/** ===================== MsgAddToPosition */
export interface MsgAddToPositionAmino {
    position_id?: string;
    sender?: string;
    /** amount0 represents the amount of token0 willing to put in. */
    amount0?: string;
    /** amount1 represents the amount of token1 willing to put in. */
    amount1?: string;
    /**
     * token_min_amount0 represents the minimum amount of token0 desired from the
     * new position being created. Note that this field indicates the min amount0
     * corresponding to the liquidity that is being added, not the total
     * liquidity of the position.
     */
    token_min_amount0?: string;
    /**
     * token_min_amount1 represents the minimum amount of token1 desired from the
     * new position being created. Note that this field indicates the min amount1
     * corresponding to the liquidity that is being added, not the total
     * liquidity of the position.
     */
    token_min_amount1?: string;
}
export interface MsgAddToPositionAminoMsg {
    type: "osmosis/cl-add-to-position";
    value: MsgAddToPositionAmino;
}
/** ===================== MsgAddToPosition */
export interface MsgAddToPositionSDKType {
    position_id: bigint;
    sender: string;
    amount0: string;
    amount1: string;
    token_min_amount0: string;
    token_min_amount1: string;
}
export interface MsgAddToPositionResponse {
    positionId: bigint;
    amount0: string;
    amount1: string;
}
export interface MsgAddToPositionResponseProtoMsg {
    typeUrl: "/osmosis.concentratedliquidity.v1beta1.MsgAddToPositionResponse";
    value: Uint8Array;
}
export interface MsgAddToPositionResponseAmino {
    position_id?: string;
    amount0?: string;
    amount1?: string;
}
export interface MsgAddToPositionResponseAminoMsg {
    type: "osmosis/concentratedliquidity/add-to-position-response";
    value: MsgAddToPositionResponseAmino;
}
export interface MsgAddToPositionResponseSDKType {
    position_id: bigint;
    amount0: string;
    amount1: string;
}
/** ===================== MsgWithdrawPosition */
export interface MsgWithdrawPosition {
    positionId: bigint;
    sender: string;
    liquidityAmount: string;
}
export interface MsgWithdrawPositionProtoMsg {
    typeUrl: "/osmosis.concentratedliquidity.v1beta1.MsgWithdrawPosition";
    value: Uint8Array;
}
/** ===================== MsgWithdrawPosition */
export interface MsgWithdrawPositionAmino {
    position_id?: string;
    sender?: string;
    liquidity_amount?: string;
}
export interface MsgWithdrawPositionAminoMsg {
    type: "osmosis/cl-withdraw-position";
    value: MsgWithdrawPositionAmino;
}
/** ===================== MsgWithdrawPosition */
export interface MsgWithdrawPositionSDKType {
    position_id: bigint;
    sender: string;
    liquidity_amount: string;
}
export interface MsgWithdrawPositionResponse {
    amount0: string;
    amount1: string;
}
export interface MsgWithdrawPositionResponseProtoMsg {
    typeUrl: "/osmosis.concentratedliquidity.v1beta1.MsgWithdrawPositionResponse";
    value: Uint8Array;
}
export interface MsgWithdrawPositionResponseAmino {
    amount0?: string;
    amount1?: string;
}
export interface MsgWithdrawPositionResponseAminoMsg {
    type: "osmosis/concentratedliquidity/withdraw-position-response";
    value: MsgWithdrawPositionResponseAmino;
}
export interface MsgWithdrawPositionResponseSDKType {
    amount0: string;
    amount1: string;
}
/** ===================== MsgCollectSpreadRewards */
export interface MsgCollectSpreadRewards {
    positionIds: bigint[];
    sender: string;
}
export interface MsgCollectSpreadRewardsProtoMsg {
    typeUrl: "/osmosis.concentratedliquidity.v1beta1.MsgCollectSpreadRewards";
    value: Uint8Array;
}
/** ===================== MsgCollectSpreadRewards */
export interface MsgCollectSpreadRewardsAmino {
    position_ids?: string[];
    sender?: string;
}
export interface MsgCollectSpreadRewardsAminoMsg {
    type: "osmosis/cl-col-sp-rewards";
    value: MsgCollectSpreadRewardsAmino;
}
/** ===================== MsgCollectSpreadRewards */
export interface MsgCollectSpreadRewardsSDKType {
    position_ids: bigint[];
    sender: string;
}
export interface MsgCollectSpreadRewardsResponse {
    collectedSpreadRewards: Coin[];
}
export interface MsgCollectSpreadRewardsResponseProtoMsg {
    typeUrl: "/osmosis.concentratedliquidity.v1beta1.MsgCollectSpreadRewardsResponse";
    value: Uint8Array;
}
export interface MsgCollectSpreadRewardsResponseAmino {
    collected_spread_rewards?: CoinAmino[];
}
export interface MsgCollectSpreadRewardsResponseAminoMsg {
    type: "osmosis/concentratedliquidity/collect-spread-rewards-response";
    value: MsgCollectSpreadRewardsResponseAmino;
}
export interface MsgCollectSpreadRewardsResponseSDKType {
    collected_spread_rewards: CoinSDKType[];
}
/** ===================== MsgCollectIncentives */
export interface MsgCollectIncentives {
    positionIds: bigint[];
    sender: string;
}
export interface MsgCollectIncentivesProtoMsg {
    typeUrl: "/osmosis.concentratedliquidity.v1beta1.MsgCollectIncentives";
    value: Uint8Array;
}
/** ===================== MsgCollectIncentives */
export interface MsgCollectIncentivesAmino {
    position_ids?: string[];
    sender?: string;
}
export interface MsgCollectIncentivesAminoMsg {
    type: "osmosis/cl-collect-incentives";
    value: MsgCollectIncentivesAmino;
}
/** ===================== MsgCollectIncentives */
export interface MsgCollectIncentivesSDKType {
    position_ids: bigint[];
    sender: string;
}
export interface MsgCollectIncentivesResponse {
    collectedIncentives: Coin[];
    forfeitedIncentives: Coin[];
}
export interface MsgCollectIncentivesResponseProtoMsg {
    typeUrl: "/osmosis.concentratedliquidity.v1beta1.MsgCollectIncentivesResponse";
    value: Uint8Array;
}
export interface MsgCollectIncentivesResponseAmino {
    collected_incentives?: CoinAmino[];
    forfeited_incentives?: CoinAmino[];
}
export interface MsgCollectIncentivesResponseAminoMsg {
    type: "osmosis/concentratedliquidity/collect-incentives-response";
    value: MsgCollectIncentivesResponseAmino;
}
export interface MsgCollectIncentivesResponseSDKType {
    collected_incentives: CoinSDKType[];
    forfeited_incentives: CoinSDKType[];
}
/** ===================== MsgFungifyChargedPositions */
export interface MsgFungifyChargedPositions {
    positionIds: bigint[];
    sender: string;
}
export interface MsgFungifyChargedPositionsProtoMsg {
    typeUrl: "/osmosis.concentratedliquidity.v1beta1.MsgFungifyChargedPositions";
    value: Uint8Array;
}
/** ===================== MsgFungifyChargedPositions */
export interface MsgFungifyChargedPositionsAmino {
    position_ids?: string[];
    sender?: string;
}
export interface MsgFungifyChargedPositionsAminoMsg {
    type: "osmosis/cl-fungify-charged-positions";
    value: MsgFungifyChargedPositionsAmino;
}
/** ===================== MsgFungifyChargedPositions */
export interface MsgFungifyChargedPositionsSDKType {
    position_ids: bigint[];
    sender: string;
}
export interface MsgFungifyChargedPositionsResponse {
    newPositionId: bigint;
}
export interface MsgFungifyChargedPositionsResponseProtoMsg {
    typeUrl: "/osmosis.concentratedliquidity.v1beta1.MsgFungifyChargedPositionsResponse";
    value: Uint8Array;
}
export interface MsgFungifyChargedPositionsResponseAmino {
    new_position_id?: string;
}
export interface MsgFungifyChargedPositionsResponseAminoMsg {
    type: "osmosis/concentratedliquidity/fungify-charged-positions-response";
    value: MsgFungifyChargedPositionsResponseAmino;
}
export interface MsgFungifyChargedPositionsResponseSDKType {
    new_position_id: bigint;
}
/** ===================== MsgTransferPositions */
export interface MsgTransferPositions {
    positionIds: bigint[];
    sender: string;
    newOwner: string;
}
export interface MsgTransferPositionsProtoMsg {
    typeUrl: "/osmosis.concentratedliquidity.v1beta1.MsgTransferPositions";
    value: Uint8Array;
}
/** ===================== MsgTransferPositions */
export interface MsgTransferPositionsAmino {
    position_ids?: string[];
    sender?: string;
    new_owner?: string;
}
export interface MsgTransferPositionsAminoMsg {
    type: "osmosis/cl-transfer-positions";
    value: MsgTransferPositionsAmino;
}
/** ===================== MsgTransferPositions */
export interface MsgTransferPositionsSDKType {
    position_ids: bigint[];
    sender: string;
    new_owner: string;
}
export interface MsgTransferPositionsResponse {
}
export interface MsgTransferPositionsResponseProtoMsg {
    typeUrl: "/osmosis.concentratedliquidity.v1beta1.MsgTransferPositionsResponse";
    value: Uint8Array;
}
export interface MsgTransferPositionsResponseAmino {
}
export interface MsgTransferPositionsResponseAminoMsg {
    type: "osmosis/concentratedliquidity/transfer-positions-response";
    value: MsgTransferPositionsResponseAmino;
}
export interface MsgTransferPositionsResponseSDKType {
}
export declare const MsgCreatePosition: {
    typeUrl: string;
    encode(message: MsgCreatePosition, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgCreatePosition;
    fromPartial(object: Partial<MsgCreatePosition>): MsgCreatePosition;
    fromAmino(object: MsgCreatePositionAmino): MsgCreatePosition;
    toAmino(message: MsgCreatePosition): MsgCreatePositionAmino;
    fromAminoMsg(object: MsgCreatePositionAminoMsg): MsgCreatePosition;
    toAminoMsg(message: MsgCreatePosition): MsgCreatePositionAminoMsg;
    fromProtoMsg(message: MsgCreatePositionProtoMsg): MsgCreatePosition;
    toProto(message: MsgCreatePosition): Uint8Array;
    toProtoMsg(message: MsgCreatePosition): MsgCreatePositionProtoMsg;
};
export declare const MsgCreatePositionResponse: {
    typeUrl: string;
    encode(message: MsgCreatePositionResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgCreatePositionResponse;
    fromPartial(object: Partial<MsgCreatePositionResponse>): MsgCreatePositionResponse;
    fromAmino(object: MsgCreatePositionResponseAmino): MsgCreatePositionResponse;
    toAmino(message: MsgCreatePositionResponse): MsgCreatePositionResponseAmino;
    fromAminoMsg(object: MsgCreatePositionResponseAminoMsg): MsgCreatePositionResponse;
    toAminoMsg(message: MsgCreatePositionResponse): MsgCreatePositionResponseAminoMsg;
    fromProtoMsg(message: MsgCreatePositionResponseProtoMsg): MsgCreatePositionResponse;
    toProto(message: MsgCreatePositionResponse): Uint8Array;
    toProtoMsg(message: MsgCreatePositionResponse): MsgCreatePositionResponseProtoMsg;
};
export declare const MsgAddToPosition: {
    typeUrl: string;
    encode(message: MsgAddToPosition, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgAddToPosition;
    fromPartial(object: Partial<MsgAddToPosition>): MsgAddToPosition;
    fromAmino(object: MsgAddToPositionAmino): MsgAddToPosition;
    toAmino(message: MsgAddToPosition): MsgAddToPositionAmino;
    fromAminoMsg(object: MsgAddToPositionAminoMsg): MsgAddToPosition;
    toAminoMsg(message: MsgAddToPosition): MsgAddToPositionAminoMsg;
    fromProtoMsg(message: MsgAddToPositionProtoMsg): MsgAddToPosition;
    toProto(message: MsgAddToPosition): Uint8Array;
    toProtoMsg(message: MsgAddToPosition): MsgAddToPositionProtoMsg;
};
export declare const MsgAddToPositionResponse: {
    typeUrl: string;
    encode(message: MsgAddToPositionResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgAddToPositionResponse;
    fromPartial(object: Partial<MsgAddToPositionResponse>): MsgAddToPositionResponse;
    fromAmino(object: MsgAddToPositionResponseAmino): MsgAddToPositionResponse;
    toAmino(message: MsgAddToPositionResponse): MsgAddToPositionResponseAmino;
    fromAminoMsg(object: MsgAddToPositionResponseAminoMsg): MsgAddToPositionResponse;
    toAminoMsg(message: MsgAddToPositionResponse): MsgAddToPositionResponseAminoMsg;
    fromProtoMsg(message: MsgAddToPositionResponseProtoMsg): MsgAddToPositionResponse;
    toProto(message: MsgAddToPositionResponse): Uint8Array;
    toProtoMsg(message: MsgAddToPositionResponse): MsgAddToPositionResponseProtoMsg;
};
export declare const MsgWithdrawPosition: {
    typeUrl: string;
    encode(message: MsgWithdrawPosition, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgWithdrawPosition;
    fromPartial(object: Partial<MsgWithdrawPosition>): MsgWithdrawPosition;
    fromAmino(object: MsgWithdrawPositionAmino): MsgWithdrawPosition;
    toAmino(message: MsgWithdrawPosition): MsgWithdrawPositionAmino;
    fromAminoMsg(object: MsgWithdrawPositionAminoMsg): MsgWithdrawPosition;
    toAminoMsg(message: MsgWithdrawPosition): MsgWithdrawPositionAminoMsg;
    fromProtoMsg(message: MsgWithdrawPositionProtoMsg): MsgWithdrawPosition;
    toProto(message: MsgWithdrawPosition): Uint8Array;
    toProtoMsg(message: MsgWithdrawPosition): MsgWithdrawPositionProtoMsg;
};
export declare const MsgWithdrawPositionResponse: {
    typeUrl: string;
    encode(message: MsgWithdrawPositionResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgWithdrawPositionResponse;
    fromPartial(object: Partial<MsgWithdrawPositionResponse>): MsgWithdrawPositionResponse;
    fromAmino(object: MsgWithdrawPositionResponseAmino): MsgWithdrawPositionResponse;
    toAmino(message: MsgWithdrawPositionResponse): MsgWithdrawPositionResponseAmino;
    fromAminoMsg(object: MsgWithdrawPositionResponseAminoMsg): MsgWithdrawPositionResponse;
    toAminoMsg(message: MsgWithdrawPositionResponse): MsgWithdrawPositionResponseAminoMsg;
    fromProtoMsg(message: MsgWithdrawPositionResponseProtoMsg): MsgWithdrawPositionResponse;
    toProto(message: MsgWithdrawPositionResponse): Uint8Array;
    toProtoMsg(message: MsgWithdrawPositionResponse): MsgWithdrawPositionResponseProtoMsg;
};
export declare const MsgCollectSpreadRewards: {
    typeUrl: string;
    encode(message: MsgCollectSpreadRewards, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgCollectSpreadRewards;
    fromPartial(object: Partial<MsgCollectSpreadRewards>): MsgCollectSpreadRewards;
    fromAmino(object: MsgCollectSpreadRewardsAmino): MsgCollectSpreadRewards;
    toAmino(message: MsgCollectSpreadRewards): MsgCollectSpreadRewardsAmino;
    fromAminoMsg(object: MsgCollectSpreadRewardsAminoMsg): MsgCollectSpreadRewards;
    toAminoMsg(message: MsgCollectSpreadRewards): MsgCollectSpreadRewardsAminoMsg;
    fromProtoMsg(message: MsgCollectSpreadRewardsProtoMsg): MsgCollectSpreadRewards;
    toProto(message: MsgCollectSpreadRewards): Uint8Array;
    toProtoMsg(message: MsgCollectSpreadRewards): MsgCollectSpreadRewardsProtoMsg;
};
export declare const MsgCollectSpreadRewardsResponse: {
    typeUrl: string;
    encode(message: MsgCollectSpreadRewardsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgCollectSpreadRewardsResponse;
    fromPartial(object: Partial<MsgCollectSpreadRewardsResponse>): MsgCollectSpreadRewardsResponse;
    fromAmino(object: MsgCollectSpreadRewardsResponseAmino): MsgCollectSpreadRewardsResponse;
    toAmino(message: MsgCollectSpreadRewardsResponse): MsgCollectSpreadRewardsResponseAmino;
    fromAminoMsg(object: MsgCollectSpreadRewardsResponseAminoMsg): MsgCollectSpreadRewardsResponse;
    toAminoMsg(message: MsgCollectSpreadRewardsResponse): MsgCollectSpreadRewardsResponseAminoMsg;
    fromProtoMsg(message: MsgCollectSpreadRewardsResponseProtoMsg): MsgCollectSpreadRewardsResponse;
    toProto(message: MsgCollectSpreadRewardsResponse): Uint8Array;
    toProtoMsg(message: MsgCollectSpreadRewardsResponse): MsgCollectSpreadRewardsResponseProtoMsg;
};
export declare const MsgCollectIncentives: {
    typeUrl: string;
    encode(message: MsgCollectIncentives, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgCollectIncentives;
    fromPartial(object: Partial<MsgCollectIncentives>): MsgCollectIncentives;
    fromAmino(object: MsgCollectIncentivesAmino): MsgCollectIncentives;
    toAmino(message: MsgCollectIncentives): MsgCollectIncentivesAmino;
    fromAminoMsg(object: MsgCollectIncentivesAminoMsg): MsgCollectIncentives;
    toAminoMsg(message: MsgCollectIncentives): MsgCollectIncentivesAminoMsg;
    fromProtoMsg(message: MsgCollectIncentivesProtoMsg): MsgCollectIncentives;
    toProto(message: MsgCollectIncentives): Uint8Array;
    toProtoMsg(message: MsgCollectIncentives): MsgCollectIncentivesProtoMsg;
};
export declare const MsgCollectIncentivesResponse: {
    typeUrl: string;
    encode(message: MsgCollectIncentivesResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgCollectIncentivesResponse;
    fromPartial(object: Partial<MsgCollectIncentivesResponse>): MsgCollectIncentivesResponse;
    fromAmino(object: MsgCollectIncentivesResponseAmino): MsgCollectIncentivesResponse;
    toAmino(message: MsgCollectIncentivesResponse): MsgCollectIncentivesResponseAmino;
    fromAminoMsg(object: MsgCollectIncentivesResponseAminoMsg): MsgCollectIncentivesResponse;
    toAminoMsg(message: MsgCollectIncentivesResponse): MsgCollectIncentivesResponseAminoMsg;
    fromProtoMsg(message: MsgCollectIncentivesResponseProtoMsg): MsgCollectIncentivesResponse;
    toProto(message: MsgCollectIncentivesResponse): Uint8Array;
    toProtoMsg(message: MsgCollectIncentivesResponse): MsgCollectIncentivesResponseProtoMsg;
};
export declare const MsgFungifyChargedPositions: {
    typeUrl: string;
    encode(message: MsgFungifyChargedPositions, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgFungifyChargedPositions;
    fromPartial(object: Partial<MsgFungifyChargedPositions>): MsgFungifyChargedPositions;
    fromAmino(object: MsgFungifyChargedPositionsAmino): MsgFungifyChargedPositions;
    toAmino(message: MsgFungifyChargedPositions): MsgFungifyChargedPositionsAmino;
    fromAminoMsg(object: MsgFungifyChargedPositionsAminoMsg): MsgFungifyChargedPositions;
    toAminoMsg(message: MsgFungifyChargedPositions): MsgFungifyChargedPositionsAminoMsg;
    fromProtoMsg(message: MsgFungifyChargedPositionsProtoMsg): MsgFungifyChargedPositions;
    toProto(message: MsgFungifyChargedPositions): Uint8Array;
    toProtoMsg(message: MsgFungifyChargedPositions): MsgFungifyChargedPositionsProtoMsg;
};
export declare const MsgFungifyChargedPositionsResponse: {
    typeUrl: string;
    encode(message: MsgFungifyChargedPositionsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgFungifyChargedPositionsResponse;
    fromPartial(object: Partial<MsgFungifyChargedPositionsResponse>): MsgFungifyChargedPositionsResponse;
    fromAmino(object: MsgFungifyChargedPositionsResponseAmino): MsgFungifyChargedPositionsResponse;
    toAmino(message: MsgFungifyChargedPositionsResponse): MsgFungifyChargedPositionsResponseAmino;
    fromAminoMsg(object: MsgFungifyChargedPositionsResponseAminoMsg): MsgFungifyChargedPositionsResponse;
    toAminoMsg(message: MsgFungifyChargedPositionsResponse): MsgFungifyChargedPositionsResponseAminoMsg;
    fromProtoMsg(message: MsgFungifyChargedPositionsResponseProtoMsg): MsgFungifyChargedPositionsResponse;
    toProto(message: MsgFungifyChargedPositionsResponse): Uint8Array;
    toProtoMsg(message: MsgFungifyChargedPositionsResponse): MsgFungifyChargedPositionsResponseProtoMsg;
};
export declare const MsgTransferPositions: {
    typeUrl: string;
    encode(message: MsgTransferPositions, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgTransferPositions;
    fromPartial(object: Partial<MsgTransferPositions>): MsgTransferPositions;
    fromAmino(object: MsgTransferPositionsAmino): MsgTransferPositions;
    toAmino(message: MsgTransferPositions): MsgTransferPositionsAmino;
    fromAminoMsg(object: MsgTransferPositionsAminoMsg): MsgTransferPositions;
    toAminoMsg(message: MsgTransferPositions): MsgTransferPositionsAminoMsg;
    fromProtoMsg(message: MsgTransferPositionsProtoMsg): MsgTransferPositions;
    toProto(message: MsgTransferPositions): Uint8Array;
    toProtoMsg(message: MsgTransferPositions): MsgTransferPositionsProtoMsg;
};
export declare const MsgTransferPositionsResponse: {
    typeUrl: string;
    encode(_: MsgTransferPositionsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgTransferPositionsResponse;
    fromPartial(_: Partial<MsgTransferPositionsResponse>): MsgTransferPositionsResponse;
    fromAmino(_: MsgTransferPositionsResponseAmino): MsgTransferPositionsResponse;
    toAmino(_: MsgTransferPositionsResponse): MsgTransferPositionsResponseAmino;
    fromAminoMsg(object: MsgTransferPositionsResponseAminoMsg): MsgTransferPositionsResponse;
    toAminoMsg(message: MsgTransferPositionsResponse): MsgTransferPositionsResponseAminoMsg;
    fromProtoMsg(message: MsgTransferPositionsResponseProtoMsg): MsgTransferPositionsResponse;
    toProto(message: MsgTransferPositionsResponse): Uint8Array;
    toProtoMsg(message: MsgTransferPositionsResponse): MsgTransferPositionsResponseProtoMsg;
};
