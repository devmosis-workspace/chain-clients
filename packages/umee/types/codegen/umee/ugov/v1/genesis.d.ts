import { DecCoin, DecCoinAmino, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { InflationParams, InflationParamsAmino, InflationParamsSDKType } from "./ugov";
import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { BinaryWriter } from "../../../binary";
/** GenesisState of the ugov module. */
export interface GenesisState {
    minGasPrice: DecCoin;
    /** Emergency Group address */
    emergencyGroup: string;
    /** InflationParams is params for inflation rate changes */
    inflationParams: InflationParams;
    /** Time when the current inflation cycle will end */
    inflationCycleEnd: Timestamp;
}
export interface GenesisStateProtoMsg {
    typeUrl: "/umee.ugov.v1.GenesisState";
    value: Uint8Array;
}
/** GenesisState of the ugov module. */
export interface GenesisStateAmino {
    min_gas_price?: DecCoinAmino;
    /** Emergency Group address */
    emergency_group?: string;
    /** InflationParams is params for inflation rate changes */
    inflation_params?: InflationParamsAmino;
    /** Time when the current inflation cycle will end */
    inflation_cycle_end?: string;
}
export interface GenesisStateAminoMsg {
    type: "/umee.ugov.v1.GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState of the ugov module. */
export interface GenesisStateSDKType {
    min_gas_price: DecCoinSDKType;
    emergency_group: string;
    inflation_params: InflationParamsSDKType;
    inflation_cycle_end: TimestampSDKType;
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
