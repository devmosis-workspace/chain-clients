import { ExponentialCalculation, ExponentialCalculationSDKType, InflationDistribution, InflationDistributionSDKType } from "./inflation";
import { Long, isSet } from "../../../helpers";
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
function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    period: Long.UZERO,
    epochIdentifier: "",
    epochsPerPeriod: Long.ZERO,
    skippedEpochs: Long.UZERO
  };
}
export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (!message.period.isZero()) {
      writer.uint32(16).uint64(message.period);
    }
    if (message.epochIdentifier !== "") {
      writer.uint32(26).string(message.epochIdentifier);
    }
    if (!message.epochsPerPeriod.isZero()) {
      writer.uint32(32).int64(message.epochsPerPeriod);
    }
    if (!message.skippedEpochs.isZero()) {
      writer.uint32(40).uint64(message.skippedEpochs);
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      period: isSet(object.period) ? Long.fromValue(object.period) : Long.UZERO,
      epochIdentifier: isSet(object.epochIdentifier) ? String(object.epochIdentifier) : "",
      epochsPerPeriod: isSet(object.epochsPerPeriod) ? Long.fromValue(object.epochsPerPeriod) : Long.ZERO,
      skippedEpochs: isSet(object.skippedEpochs) ? Long.fromValue(object.skippedEpochs) : Long.UZERO
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.period = object.period !== undefined && object.period !== null ? Long.fromValue(object.period) : Long.UZERO;
    message.epochIdentifier = object.epochIdentifier ?? "";
    message.epochsPerPeriod = object.epochsPerPeriod !== undefined && object.epochsPerPeriod !== null ? Long.fromValue(object.epochsPerPeriod) : Long.ZERO;
    message.skippedEpochs = object.skippedEpochs !== undefined && object.skippedEpochs !== null ? Long.fromValue(object.skippedEpochs) : Long.UZERO;
    return message;
  }
};
function createBaseParams(): Params {
  return {
    mintDenom: "",
    exponentialCalculation: undefined,
    inflationDistribution: undefined,
    enableInflation: false
  };
}
export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.mintDenom !== "") {
      writer.uint32(10).string(message.mintDenom);
    }
    if (message.exponentialCalculation !== undefined) {
      ExponentialCalculation.encode(message.exponentialCalculation, writer.uint32(18).fork()).ldelim();
    }
    if (message.inflationDistribution !== undefined) {
      InflationDistribution.encode(message.inflationDistribution, writer.uint32(26).fork()).ldelim();
    }
    if (message.enableInflation === true) {
      writer.uint32(32).bool(message.enableInflation);
    }
    return writer;
  },
  fromJSON(object: any): Params {
    return {
      mintDenom: isSet(object.mintDenom) ? String(object.mintDenom) : "",
      exponentialCalculation: isSet(object.exponentialCalculation) ? ExponentialCalculation.fromJSON(object.exponentialCalculation) : undefined,
      inflationDistribution: isSet(object.inflationDistribution) ? InflationDistribution.fromJSON(object.inflationDistribution) : undefined,
      enableInflation: isSet(object.enableInflation) ? Boolean(object.enableInflation) : false
    };
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.mintDenom = object.mintDenom ?? "";
    message.exponentialCalculation = object.exponentialCalculation !== undefined && object.exponentialCalculation !== null ? ExponentialCalculation.fromPartial(object.exponentialCalculation) : undefined;
    message.inflationDistribution = object.inflationDistribution !== undefined && object.inflationDistribution !== null ? InflationDistribution.fromPartial(object.inflationDistribution) : undefined;
    message.enableInflation = object.enableInflation ?? false;
    return message;
  }
};