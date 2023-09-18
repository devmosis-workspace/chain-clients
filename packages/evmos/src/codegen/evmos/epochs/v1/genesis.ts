import { Timestamp, TimestampAmino, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { Duration, DurationAmino, DurationSDKType } from "../../../google/protobuf/duration";
import { BinaryWriter } from "../../../binary";
import { isSet, fromJsonTimestamp } from "../../../helpers";
/**
 * EpochInfo defines the message interface containing the relevant informations about
 * an epoch.
 */
export interface EpochInfo {
  /** identifier of the epoch */
  identifier: string;
  /** start_time of the epoch */
  startTime: Timestamp;
  /** duration of the epoch */
  duration: Duration;
  /** current_epoch is the integer identifier of the epoch */
  currentEpoch: bigint;
  /** current_epoch_start_time defines the timestamp of the start of the epoch */
  currentEpochStartTime: Timestamp;
  /** epoch_counting_started reflects if the counting for the epoch has started */
  epochCountingStarted: boolean;
  /** current_epoch_start_height of the epoch */
  currentEpochStartHeight: bigint;
}
export interface EpochInfoProtoMsg {
  typeUrl: "/evmos.epochs.v1.EpochInfo";
  value: Uint8Array;
}
/**
 * EpochInfo defines the message interface containing the relevant informations about
 * an epoch.
 */
export interface EpochInfoAmino {
  /** identifier of the epoch */
  identifier: string;
  /** start_time of the epoch */
  start_time?: TimestampAmino;
  /** duration of the epoch */
  duration?: DurationAmino;
  /** current_epoch is the integer identifier of the epoch */
  current_epoch: string;
  /** current_epoch_start_time defines the timestamp of the start of the epoch */
  current_epoch_start_time?: TimestampAmino;
  /** epoch_counting_started reflects if the counting for the epoch has started */
  epoch_counting_started: boolean;
  /** current_epoch_start_height of the epoch */
  current_epoch_start_height: string;
}
export interface EpochInfoAminoMsg {
  type: "/evmos.epochs.v1.EpochInfo";
  value: EpochInfoAmino;
}
/**
 * EpochInfo defines the message interface containing the relevant informations about
 * an epoch.
 */
export interface EpochInfoSDKType {
  identifier: string;
  start_time: TimestampSDKType;
  duration: DurationSDKType;
  current_epoch: bigint;
  current_epoch_start_time: TimestampSDKType;
  epoch_counting_started: boolean;
  current_epoch_start_height: bigint;
}
/** GenesisState defines the epochs module's genesis state. */
export interface GenesisState {
  /** epochs is a slice of EpochInfo that defines the epochs in the genesis state */
  epochs: EpochInfo[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/evmos.epochs.v1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the epochs module's genesis state. */
export interface GenesisStateAmino {
  /** epochs is a slice of EpochInfo that defines the epochs in the genesis state */
  epochs: EpochInfoAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/evmos.epochs.v1.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the epochs module's genesis state. */
export interface GenesisStateSDKType {
  epochs: EpochInfoSDKType[];
}
function createBaseEpochInfo(): EpochInfo {
  return {
    identifier: "",
    startTime: Timestamp.fromPartial({}),
    duration: Duration.fromPartial({}),
    currentEpoch: BigInt(0),
    currentEpochStartTime: Timestamp.fromPartial({}),
    epochCountingStarted: false,
    currentEpochStartHeight: BigInt(0)
  };
}
export const EpochInfo = {
  typeUrl: "/evmos.epochs.v1.EpochInfo",
  encode(message: EpochInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.identifier !== "") {
      writer.uint32(10).string(message.identifier);
    }
    if (message.startTime !== undefined) {
      Timestamp.encode(message.startTime, writer.uint32(18).fork()).ldelim();
    }
    if (message.duration !== undefined) {
      Duration.encode(message.duration, writer.uint32(26).fork()).ldelim();
    }
    if (message.currentEpoch !== BigInt(0)) {
      writer.uint32(32).int64(message.currentEpoch);
    }
    if (message.currentEpochStartTime !== undefined) {
      Timestamp.encode(message.currentEpochStartTime, writer.uint32(42).fork()).ldelim();
    }
    if (message.epochCountingStarted === true) {
      writer.uint32(48).bool(message.epochCountingStarted);
    }
    if (message.currentEpochStartHeight !== BigInt(0)) {
      writer.uint32(56).int64(message.currentEpochStartHeight);
    }
    return writer;
  },
  fromJSON(object: any): EpochInfo {
    return {
      identifier: isSet(object.identifier) ? String(object.identifier) : "",
      startTime: isSet(object.startTime) ? fromJsonTimestamp(object.startTime) : undefined,
      duration: isSet(object.duration) ? Duration.fromJSON(object.duration) : undefined,
      currentEpoch: isSet(object.currentEpoch) ? BigInt(object.currentEpoch.toString()) : BigInt(0),
      currentEpochStartTime: isSet(object.currentEpochStartTime) ? fromJsonTimestamp(object.currentEpochStartTime) : undefined,
      epochCountingStarted: isSet(object.epochCountingStarted) ? Boolean(object.epochCountingStarted) : false,
      currentEpochStartHeight: isSet(object.currentEpochStartHeight) ? BigInt(object.currentEpochStartHeight.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<EpochInfo>): EpochInfo {
    const message = createBaseEpochInfo();
    message.identifier = object.identifier ?? "";
    message.startTime = object.startTime !== undefined && object.startTime !== null ? Timestamp.fromPartial(object.startTime) : undefined;
    message.duration = object.duration !== undefined && object.duration !== null ? Duration.fromPartial(object.duration) : undefined;
    message.currentEpoch = object.currentEpoch !== undefined && object.currentEpoch !== null ? BigInt(object.currentEpoch.toString()) : BigInt(0);
    message.currentEpochStartTime = object.currentEpochStartTime !== undefined && object.currentEpochStartTime !== null ? Timestamp.fromPartial(object.currentEpochStartTime) : undefined;
    message.epochCountingStarted = object.epochCountingStarted ?? false;
    message.currentEpochStartHeight = object.currentEpochStartHeight !== undefined && object.currentEpochStartHeight !== null ? BigInt(object.currentEpochStartHeight.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: EpochInfoAmino): EpochInfo {
    return {
      identifier: object.identifier,
      startTime: object.start_time,
      duration: object?.duration ? Duration.fromAmino(object.duration) : undefined,
      currentEpoch: BigInt(object.current_epoch),
      currentEpochStartTime: object.current_epoch_start_time,
      epochCountingStarted: object.epoch_counting_started,
      currentEpochStartHeight: BigInt(object.current_epoch_start_height)
    };
  },
  toAmino(message: EpochInfo): EpochInfoAmino {
    const obj: any = {};
    obj.identifier = message.identifier;
    obj.start_time = message.startTime;
    obj.duration = message.duration ? Duration.toAmino(message.duration) : undefined;
    obj.current_epoch = message.currentEpoch ? message.currentEpoch.toString() : undefined;
    obj.current_epoch_start_time = message.currentEpochStartTime;
    obj.epoch_counting_started = message.epochCountingStarted;
    obj.current_epoch_start_height = message.currentEpochStartHeight ? message.currentEpochStartHeight.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: EpochInfoAminoMsg): EpochInfo {
    return EpochInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: EpochInfoProtoMsg): EpochInfo {
    return EpochInfo.decode(message.value);
  },
  toProto(message: EpochInfo): Uint8Array {
    return EpochInfo.encode(message).finish();
  },
  toProtoMsg(message: EpochInfo): EpochInfoProtoMsg {
    return {
      typeUrl: "/evmos.epochs.v1.EpochInfo",
      value: EpochInfo.encode(message).finish()
    };
  }
};
function createBaseGenesisState(): GenesisState {
  return {
    epochs: []
  };
}
export const GenesisState = {
  typeUrl: "/evmos.epochs.v1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.epochs) {
      EpochInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      epochs: Array.isArray(object?.epochs) ? object.epochs.map((e: any) => EpochInfo.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.epochs = object.epochs?.map(e => EpochInfo.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    return {
      epochs: Array.isArray(object?.epochs) ? object.epochs.map((e: any) => EpochInfo.fromAmino(e)) : []
    };
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    if (message.epochs) {
      obj.epochs = message.epochs.map(e => e ? EpochInfo.toAmino(e) : undefined);
    } else {
      obj.epochs = [];
    }
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
      typeUrl: "/evmos.epochs.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};