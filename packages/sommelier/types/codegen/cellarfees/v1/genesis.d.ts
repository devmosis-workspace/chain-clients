import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { FeeAccrualCounters, FeeAccrualCountersAmino, FeeAccrualCountersSDKType } from "./cellarfees";
import { BinaryWriter } from "../../binary";
/** GenesisState defines the cellarfees module's genesis state. */
export interface GenesisState {
    params: Params;
    feeAccrualCounters: FeeAccrualCounters;
    lastRewardSupplyPeak: string;
}
export interface GenesisStateProtoMsg {
    typeUrl: "/cellarfees.v1.GenesisState";
    value: Uint8Array;
}
/** GenesisState defines the cellarfees module's genesis state. */
export interface GenesisStateAmino {
    params?: ParamsAmino;
    fee_accrual_counters?: FeeAccrualCountersAmino;
    last_reward_supply_peak?: string;
}
export interface GenesisStateAminoMsg {
    type: "/cellarfees.v1.GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState defines the cellarfees module's genesis state. */
export interface GenesisStateSDKType {
    params: ParamsSDKType;
    fee_accrual_counters: FeeAccrualCountersSDKType;
    last_reward_supply_peak: string;
}
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
