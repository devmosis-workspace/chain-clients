import { Duration, DurationAmino, DurationSDKType } from "../../../google/protobuf/duration";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** GenesisState defines the recovery module's genesis state. */
export interface GenesisState {
  /** params defines all the paramaters of the module. */
  params: Params;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/evmos.recovery.v1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the recovery module's genesis state. */
export interface GenesisStateAmino {
  /** params defines all the paramaters of the module. */
  params?: ParamsAmino;
}
export interface GenesisStateAminoMsg {
  type: "/evmos.recovery.v1.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the recovery module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
}
/** Params holds parameters for the recovery module */
export interface Params {
  /** enable_recovery IBC middleware */
  enableRecovery: boolean;
  /** packet_timeout_duration is the duration added to timeout timestamp for balances recovered via IBC packets */
  packetTimeoutDuration: Duration;
}
export interface ParamsProtoMsg {
  typeUrl: "/evmos.recovery.v1.Params";
  value: Uint8Array;
}
/** Params holds parameters for the recovery module */
export interface ParamsAmino {
  /** enable_recovery IBC middleware */
  enable_recovery: boolean;
  /** packet_timeout_duration is the duration added to timeout timestamp for balances recovered via IBC packets */
  packet_timeout_duration?: DurationAmino;
}
export interface ParamsAminoMsg {
  type: "/evmos.recovery.v1.Params";
  value: ParamsAmino;
}
/** Params holds parameters for the recovery module */
export interface ParamsSDKType {
  enable_recovery: boolean;
  packet_timeout_duration: DurationSDKType;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({})
  };
}
export const GenesisState = {
  typeUrl: "/evmos.recovery.v1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    return {
      params: object?.params ? Params.fromAmino(object.params) : undefined
    };
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
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
      typeUrl: "/evmos.recovery.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
function createBaseParams(): Params {
  return {
    enableRecovery: false,
    packetTimeoutDuration: Duration.fromPartial({})
  };
}
export const Params = {
  typeUrl: "/evmos.recovery.v1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: ParamsAmino): Params {
    return {
      enableRecovery: object.enable_recovery,
      packetTimeoutDuration: object?.packet_timeout_duration ? Duration.fromAmino(object.packet_timeout_duration) : undefined
    };
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.enable_recovery = message.enableRecovery;
    obj.packet_timeout_duration = message.packetTimeoutDuration ? Duration.toAmino(message.packetTimeoutDuration) : undefined;
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
      typeUrl: "/evmos.recovery.v1.Params",
      value: Params.encode(message).finish()
    };
  }
};