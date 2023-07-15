import { Incentive, IncentiveSDKType, GasMeter, GasMeterSDKType } from "./incentives";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
/** GenesisState defines the module's genesis state. */
export interface GenesisState {
  /** params are the incentives module parameters */
  params?: Params;
  /** incentives is a slice of active incentives */
  incentives: Incentive[];
  /** gas_meters is a slice of active Gasmeters */
  gasMeters: GasMeter[];
}
/** GenesisState defines the module's genesis state. */
export interface GenesisStateSDKType {
  params?: ParamsSDKType;
  incentives: IncentiveSDKType[];
  gas_meters: GasMeterSDKType[];
}
/** Params defines the incentives module params */
export interface Params {
  /** enable_incentives is the parameter to enable incentives */
  enableIncentives: boolean;
  /** allocation_limit is the maximum percentage an incentive can allocate per denomination */
  allocationLimit: string;
  /** incentives_epoch_identifier for the epochs module hooks */
  incentivesEpochIdentifier: string;
  /** reward_scaler is the scaling factor for capping rewards */
  rewardScaler: string;
}
/** Params defines the incentives module params */
export interface ParamsSDKType {
  enable_incentives: boolean;
  allocation_limit: string;
  incentives_epoch_identifier: string;
  reward_scaler: string;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    incentives: [],
    gasMeters: []
  };
}
export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.incentives) {
      Incentive.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.gasMeters) {
      GasMeter.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      incentives: Array.isArray(object?.incentives) ? object.incentives.map((e: any) => Incentive.fromJSON(e)) : [],
      gasMeters: Array.isArray(object?.gasMeters) ? object.gasMeters.map((e: any) => GasMeter.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.incentives = object.incentives?.map(e => Incentive.fromPartial(e)) || [];
    message.gasMeters = object.gasMeters?.map(e => GasMeter.fromPartial(e)) || [];
    return message;
  }
};
function createBaseParams(): Params {
  return {
    enableIncentives: false,
    allocationLimit: "",
    incentivesEpochIdentifier: "",
    rewardScaler: ""
  };
}
export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.enableIncentives === true) {
      writer.uint32(8).bool(message.enableIncentives);
    }
    if (message.allocationLimit !== "") {
      writer.uint32(18).string(message.allocationLimit);
    }
    if (message.incentivesEpochIdentifier !== "") {
      writer.uint32(26).string(message.incentivesEpochIdentifier);
    }
    if (message.rewardScaler !== "") {
      writer.uint32(34).string(message.rewardScaler);
    }
    return writer;
  },
  fromJSON(object: any): Params {
    return {
      enableIncentives: isSet(object.enableIncentives) ? Boolean(object.enableIncentives) : false,
      allocationLimit: isSet(object.allocationLimit) ? String(object.allocationLimit) : "",
      incentivesEpochIdentifier: isSet(object.incentivesEpochIdentifier) ? String(object.incentivesEpochIdentifier) : "",
      rewardScaler: isSet(object.rewardScaler) ? String(object.rewardScaler) : ""
    };
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.enableIncentives = object.enableIncentives ?? false;
    message.allocationLimit = object.allocationLimit ?? "";
    message.incentivesEpochIdentifier = object.incentivesEpochIdentifier ?? "";
    message.rewardScaler = object.rewardScaler ?? "";
    return message;
  }
};