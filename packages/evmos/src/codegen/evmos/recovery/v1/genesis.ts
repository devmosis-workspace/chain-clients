import { Duration, DurationSDKType } from "../../../google/protobuf/duration";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
/** GenesisState defines the recovery module's genesis state. */
export interface GenesisState {
  /** params defines all the paramaters of the module. */
  params?: Params;
}
/** GenesisState defines the recovery module's genesis state. */
export interface GenesisStateSDKType {
  params?: ParamsSDKType;
}
/** Params holds parameters for the recovery module */
export interface Params {
  /** enable_recovery IBC middleware */
  enableRecovery: boolean;
  /** packet_timeout_duration is the duration added to timeout timestamp for balances recovered via IBC packets */
  packetTimeoutDuration?: Duration;
}
/** Params holds parameters for the recovery module */
export interface ParamsSDKType {
  enable_recovery: boolean;
  packet_timeout_duration?: DurationSDKType;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: undefined
  };
}
export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  }
};
function createBaseParams(): Params {
  return {
    enableRecovery: false,
    packetTimeoutDuration: undefined
  };
}
export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.enableRecovery === true) {
      writer.uint32(8).bool(message.enableRecovery);
    }
    if (message.packetTimeoutDuration !== undefined) {
      Duration.encode(message.packetTimeoutDuration, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): Params {
    return {
      enableRecovery: isSet(object.enableRecovery) ? Boolean(object.enableRecovery) : false,
      packetTimeoutDuration: isSet(object.packetTimeoutDuration) ? Duration.fromJSON(object.packetTimeoutDuration) : undefined
    };
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.enableRecovery = object.enableRecovery ?? false;
    message.packetTimeoutDuration = object.packetTimeoutDuration !== undefined && object.packetTimeoutDuration !== null ? Duration.fromPartial(object.packetTimeoutDuration) : undefined;
    return message;
  }
};