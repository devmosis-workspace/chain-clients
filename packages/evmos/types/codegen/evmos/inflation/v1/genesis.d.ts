import { ExponentialCalculation, ExponentialCalculationAmino, ExponentialCalculationSDKType, InflationDistribution, InflationDistributionAmino, InflationDistributionSDKType } from "./inflation";
import { BinaryWriter } from "../../../binary";
/** GenesisState defines the inflation module's genesis state. */
export interface GenesisState {
    /** params defines all the parameters of the module. */
    params: Params;
    /** period is the amount of past periods, based on the epochs per period param */
    period: bigint;
    /** epoch_identifier for inflation */
    epochIdentifier: string;
    /** epochs_per_period is the number of epochs after which inflation is recalculated */
    epochsPerPeriod: bigint;
    /** skipped_epochs is the number of epochs that have passed while inflation is disabled */
    skippedEpochs: bigint;
}
export interface GenesisStateProtoMsg {
    typeUrl: "/evmos.inflation.v1.GenesisState";
    value: Uint8Array;
}
/** GenesisState defines the inflation module's genesis state. */
export interface GenesisStateAmino {
    /** params defines all the parameters of the module. */
    params?: ParamsAmino;
    /** period is the amount of past periods, based on the epochs per period param */
    period: string;
    /** epoch_identifier for inflation */
    epoch_identifier: string;
    /** epochs_per_period is the number of epochs after which inflation is recalculated */
    epochs_per_period: string;
    /** skipped_epochs is the number of epochs that have passed while inflation is disabled */
    skipped_epochs: string;
}
export interface GenesisStateAminoMsg {
    type: "/evmos.inflation.v1.GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState defines the inflation module's genesis state. */
export interface GenesisStateSDKType {
    params: ParamsSDKType;
    period: bigint;
    epoch_identifier: string;
    epochs_per_period: bigint;
    skipped_epochs: bigint;
}
/** Params holds parameters for the inflation module. */
export interface Params {
    /** mint_denom specifies the type of coin to mint */
    mintDenom: string;
    /** exponential_calculation takes in the variables to calculate exponential inflation */
    exponentialCalculation: ExponentialCalculation;
    /** inflation_distribution of the minted denom */
    inflationDistribution: InflationDistribution;
    /** enable_inflation is the parameter that enables inflation and halts increasing the skipped_epochs */
    enableInflation: boolean;
}
export interface ParamsProtoMsg {
    typeUrl: "/evmos.inflation.v1.Params";
    value: Uint8Array;
}
/** Params holds parameters for the inflation module. */
export interface ParamsAmino {
    /** mint_denom specifies the type of coin to mint */
    mint_denom: string;
    /** exponential_calculation takes in the variables to calculate exponential inflation */
    exponential_calculation?: ExponentialCalculationAmino;
    /** inflation_distribution of the minted denom */
    inflation_distribution?: InflationDistributionAmino;
    /** enable_inflation is the parameter that enables inflation and halts increasing the skipped_epochs */
    enable_inflation: boolean;
}
export interface ParamsAminoMsg {
    type: "/evmos.inflation.v1.Params";
    value: ParamsAmino;
}
/** Params holds parameters for the inflation module. */
export interface ParamsSDKType {
    mint_denom: string;
    exponential_calculation: ExponentialCalculationSDKType;
    inflation_distribution: InflationDistributionSDKType;
    enable_inflation: boolean;
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
export declare const Params: {
    typeUrl: string;
    encode(message: Params, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Params;
    fromPartial(object: Partial<Params>): Params;
    fromAmino(object: ParamsAmino): Params;
    toAmino(message: Params): ParamsAmino;
    fromAminoMsg(object: ParamsAminoMsg): Params;
    fromProtoMsg(message: ParamsProtoMsg): Params;
    toProto(message: Params): Uint8Array;
    toProtoMsg(message: Params): ParamsProtoMsg;
};
