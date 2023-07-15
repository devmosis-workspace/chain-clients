import { ExponentialCalculation, ExponentialCalculationSDKType, InflationDistribution, InflationDistributionSDKType } from "./inflation";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** GenesisState defines the inflation module's genesis state. */
export interface GenesisState {
    /** params defines all the parameters of the module. */
    params?: Params;
    /** period is the amount of past periods, based on the epochs per period param */
    period: Long;
    /** epoch_identifier for inflation */
    epochIdentifier: string;
    /** epochs_per_period is the number of epochs after which inflation is recalculated */
    epochsPerPeriod: Long;
    /** skipped_epochs is the number of epochs that have passed while inflation is disabled */
    skippedEpochs: Long;
}
/** GenesisState defines the inflation module's genesis state. */
export interface GenesisStateSDKType {
    params?: ParamsSDKType;
    period: Long;
    epoch_identifier: string;
    epochs_per_period: Long;
    skipped_epochs: Long;
}
/** Params holds parameters for the inflation module. */
export interface Params {
    /** mint_denom specifies the type of coin to mint */
    mintDenom: string;
    /** exponential_calculation takes in the variables to calculate exponential inflation */
    exponentialCalculation?: ExponentialCalculation;
    /** inflation_distribution of the minted denom */
    inflationDistribution?: InflationDistribution;
    /** enable_inflation is the parameter that enables inflation and halts increasing the skipped_epochs */
    enableInflation: boolean;
}
/** Params holds parameters for the inflation module. */
export interface ParamsSDKType {
    mint_denom: string;
    exponential_calculation?: ExponentialCalculationSDKType;
    inflation_distribution?: InflationDistributionSDKType;
    enable_inflation: boolean;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
};
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Params;
    fromPartial(object: Partial<Params>): Params;
};
