import { Timestamp, TimestampAmino, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { MultiRewardIndex, MultiRewardIndexAmino, MultiRewardIndexSDKType, USDXMintingClaim, USDXMintingClaimAmino, USDXMintingClaimSDKType, HardLiquidityProviderClaim, HardLiquidityProviderClaimAmino, HardLiquidityProviderClaimSDKType, DelegatorClaim, DelegatorClaimAmino, DelegatorClaimSDKType, SwapClaim, SwapClaimAmino, SwapClaimSDKType, SavingsClaim, SavingsClaimAmino, SavingsClaimSDKType, EarnClaim, EarnClaimAmino, EarnClaimSDKType } from "./claims";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { BinaryWriter } from "../../../binary";
/** AccumulationTime stores the previous reward distribution time and its corresponding collateral type */
export interface AccumulationTime {
    collateralType: string;
    previousAccumulationTime: Timestamp;
}
export interface AccumulationTimeProtoMsg {
    typeUrl: "/kava.incentive.v1beta1.AccumulationTime";
    value: Uint8Array;
}
/** AccumulationTime stores the previous reward distribution time and its corresponding collateral type */
export interface AccumulationTimeAmino {
    collateral_type: string;
    previous_accumulation_time?: TimestampAmino;
}
export interface AccumulationTimeAminoMsg {
    type: "/kava.incentive.v1beta1.AccumulationTime";
    value: AccumulationTimeAmino;
}
/** AccumulationTime stores the previous reward distribution time and its corresponding collateral type */
export interface AccumulationTimeSDKType {
    collateral_type: string;
    previous_accumulation_time: TimestampSDKType;
}
/** GenesisRewardState groups together the global state for a particular reward so it can be exported in genesis. */
export interface GenesisRewardState {
    accumulationTimes: AccumulationTime[];
    multiRewardIndexes: MultiRewardIndex[];
}
export interface GenesisRewardStateProtoMsg {
    typeUrl: "/kava.incentive.v1beta1.GenesisRewardState";
    value: Uint8Array;
}
/** GenesisRewardState groups together the global state for a particular reward so it can be exported in genesis. */
export interface GenesisRewardStateAmino {
    accumulation_times: AccumulationTimeAmino[];
    multi_reward_indexes: MultiRewardIndexAmino[];
}
export interface GenesisRewardStateAminoMsg {
    type: "/kava.incentive.v1beta1.GenesisRewardState";
    value: GenesisRewardStateAmino;
}
/** GenesisRewardState groups together the global state for a particular reward so it can be exported in genesis. */
export interface GenesisRewardStateSDKType {
    accumulation_times: AccumulationTimeSDKType[];
    multi_reward_indexes: MultiRewardIndexSDKType[];
}
/** GenesisState is the state that must be provided at genesis. */
export interface GenesisState {
    params: Params;
    usdxRewardState: GenesisRewardState;
    hardSupplyRewardState: GenesisRewardState;
    hardBorrowRewardState: GenesisRewardState;
    delegatorRewardState: GenesisRewardState;
    swapRewardState: GenesisRewardState;
    usdxMintingClaims: USDXMintingClaim[];
    hardLiquidityProviderClaims: HardLiquidityProviderClaim[];
    delegatorClaims: DelegatorClaim[];
    swapClaims: SwapClaim[];
    savingsRewardState: GenesisRewardState;
    savingsClaims: SavingsClaim[];
    earnRewardState: GenesisRewardState;
    earnClaims: EarnClaim[];
}
export interface GenesisStateProtoMsg {
    typeUrl: "/kava.incentive.v1beta1.GenesisState";
    value: Uint8Array;
}
/** GenesisState is the state that must be provided at genesis. */
export interface GenesisStateAmino {
    params?: ParamsAmino;
    usdx_reward_state?: GenesisRewardStateAmino;
    hard_supply_reward_state?: GenesisRewardStateAmino;
    hard_borrow_reward_state?: GenesisRewardStateAmino;
    delegator_reward_state?: GenesisRewardStateAmino;
    swap_reward_state?: GenesisRewardStateAmino;
    usdx_minting_claims: USDXMintingClaimAmino[];
    hard_liquidity_provider_claims: HardLiquidityProviderClaimAmino[];
    delegator_claims: DelegatorClaimAmino[];
    swap_claims: SwapClaimAmino[];
    savings_reward_state?: GenesisRewardStateAmino;
    savings_claims: SavingsClaimAmino[];
    earn_reward_state?: GenesisRewardStateAmino;
    earn_claims: EarnClaimAmino[];
}
export interface GenesisStateAminoMsg {
    type: "/kava.incentive.v1beta1.GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState is the state that must be provided at genesis. */
export interface GenesisStateSDKType {
    params: ParamsSDKType;
    usdx_reward_state: GenesisRewardStateSDKType;
    hard_supply_reward_state: GenesisRewardStateSDKType;
    hard_borrow_reward_state: GenesisRewardStateSDKType;
    delegator_reward_state: GenesisRewardStateSDKType;
    swap_reward_state: GenesisRewardStateSDKType;
    usdx_minting_claims: USDXMintingClaimSDKType[];
    hard_liquidity_provider_claims: HardLiquidityProviderClaimSDKType[];
    delegator_claims: DelegatorClaimSDKType[];
    swap_claims: SwapClaimSDKType[];
    savings_reward_state: GenesisRewardStateSDKType;
    savings_claims: SavingsClaimSDKType[];
    earn_reward_state: GenesisRewardStateSDKType;
    earn_claims: EarnClaimSDKType[];
}
export declare const AccumulationTime: {
    typeUrl: string;
    encode(message: AccumulationTime, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): AccumulationTime;
    fromPartial(object: Partial<AccumulationTime>): AccumulationTime;
    fromAmino(object: AccumulationTimeAmino): AccumulationTime;
    toAmino(message: AccumulationTime): AccumulationTimeAmino;
    fromAminoMsg(object: AccumulationTimeAminoMsg): AccumulationTime;
    fromProtoMsg(message: AccumulationTimeProtoMsg): AccumulationTime;
    toProto(message: AccumulationTime): Uint8Array;
    toProtoMsg(message: AccumulationTime): AccumulationTimeProtoMsg;
};
export declare const GenesisRewardState: {
    typeUrl: string;
    encode(message: GenesisRewardState, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): GenesisRewardState;
    fromPartial(object: Partial<GenesisRewardState>): GenesisRewardState;
    fromAmino(object: GenesisRewardStateAmino): GenesisRewardState;
    toAmino(message: GenesisRewardState): GenesisRewardStateAmino;
    fromAminoMsg(object: GenesisRewardStateAminoMsg): GenesisRewardState;
    fromProtoMsg(message: GenesisRewardStateProtoMsg): GenesisRewardState;
    toProto(message: GenesisRewardState): Uint8Array;
    toProtoMsg(message: GenesisRewardState): GenesisRewardStateProtoMsg;
};
export declare const GenesisState: {
    typeUrl: string;
    encode(message: GenesisState, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
    fromAmino(object: GenesisStateAmino): GenesisState;
    toAmino(message: GenesisState): GenesisStateAmino;
    fromAminoMsg(object: GenesisStateAminoMsg): GenesisState;
    fromProtoMsg(message: GenesisStateProtoMsg): GenesisState;
    toProto(message: GenesisState): Uint8Array;
    toProtoMsg(message: GenesisState): GenesisStateProtoMsg;
};
