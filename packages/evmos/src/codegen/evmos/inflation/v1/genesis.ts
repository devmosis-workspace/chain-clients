import { ExponentialCalculation, ExponentialCalculationAmino, ExponentialCalculationSDKType, InflationDistribution, InflationDistributionAmino, InflationDistributionSDKType } from "./inflation";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
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
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    period: BigInt(0),
    epochIdentifier: "",
    epochsPerPeriod: BigInt(0),
    skippedEpochs: BigInt(0)
  };
}
export const GenesisState = {
  typeUrl: "/evmos.inflation.v1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.period !== BigInt(0)) {
      writer.uint32(16).uint64(message.period);
    }
    if (message.epochIdentifier !== "") {
      writer.uint32(26).string(message.epochIdentifier);
    }
    if (message.epochsPerPeriod !== BigInt(0)) {
      writer.uint32(32).int64(message.epochsPerPeriod);
    }
    if (message.skippedEpochs !== BigInt(0)) {
      writer.uint32(40).uint64(message.skippedEpochs);
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      period: isSet(object.period) ? BigInt(object.period.toString()) : BigInt(0),
      epochIdentifier: isSet(object.epochIdentifier) ? String(object.epochIdentifier) : "",
      epochsPerPeriod: isSet(object.epochsPerPeriod) ? BigInt(object.epochsPerPeriod.toString()) : BigInt(0),
      skippedEpochs: isSet(object.skippedEpochs) ? BigInt(object.skippedEpochs.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.period = object.period !== undefined && object.period !== null ? BigInt(object.period.toString()) : BigInt(0);
    message.epochIdentifier = object.epochIdentifier ?? "";
    message.epochsPerPeriod = object.epochsPerPeriod !== undefined && object.epochsPerPeriod !== null ? BigInt(object.epochsPerPeriod.toString()) : BigInt(0);
    message.skippedEpochs = object.skippedEpochs !== undefined && object.skippedEpochs !== null ? BigInt(object.skippedEpochs.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    return {
      params: object?.params ? Params.fromAmino(object.params) : undefined,
      period: BigInt(object.period),
      epochIdentifier: object.epoch_identifier,
      epochsPerPeriod: BigInt(object.epochs_per_period),
      skippedEpochs: BigInt(object.skipped_epochs)
    };
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    obj.period = message.period ? message.period.toString() : undefined;
    obj.epoch_identifier = message.epochIdentifier;
    obj.epochs_per_period = message.epochsPerPeriod ? message.epochsPerPeriod.toString() : undefined;
    obj.skipped_epochs = message.skippedEpochs ? message.skippedEpochs.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/evmos.inflation.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
function createBaseParams(): Params {
  return {
    mintDenom: "",
    exponentialCalculation: ExponentialCalculation.fromPartial({}),
    inflationDistribution: InflationDistribution.fromPartial({}),
    enableInflation: false
  };
}
export const Params = {
  typeUrl: "/evmos.inflation.v1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: ParamsAmino): Params {
    return {
      mintDenom: object.mint_denom,
      exponentialCalculation: object?.exponential_calculation ? ExponentialCalculation.fromAmino(object.exponential_calculation) : undefined,
      inflationDistribution: object?.inflation_distribution ? InflationDistribution.fromAmino(object.inflation_distribution) : undefined,
      enableInflation: object.enable_inflation
    };
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.mint_denom = message.mintDenom;
    obj.exponential_calculation = message.exponentialCalculation ? ExponentialCalculation.toAmino(message.exponentialCalculation) : undefined;
    obj.inflation_distribution = message.inflationDistribution ? InflationDistribution.toAmino(message.inflationDistribution) : undefined;
    obj.enable_inflation = message.enableInflation;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/evmos.inflation.v1.Params",
      value: Params.encode(message).finish()
    };
  }
};