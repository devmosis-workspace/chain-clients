import { Timestamp, TimestampAmino, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { Duration, DurationAmino, DurationSDKType } from "../../../google/protobuf/duration";
import { BinaryWriter } from "../../../binary";
import { isSet, fromJsonTimestamp, bytesFromBase64 } from "../../../helpers";
/**
 * ValidatorSigningInfo defines a validator's signing info for monitoring their
 * liveness activity.
 */
export interface ValidatorSigningInfo {
  address: string;
  /** height at which validator was first a candidate OR was unjailed */
  startHeight: bigint;
  /** index offset into signed block bit array */
  indexOffset: bigint;
  /** timestamp validator cannot be unjailed until */
  jailedUntil: Timestamp;
  /**
   * whether or not a validator has been tombstoned (killed out of validator
   * set)
   */
  tombstoned: boolean;
  /** missed blocks counter (to avoid scanning the array every time) */
  missedBlocksCounter: bigint;
}
export interface ValidatorSigningInfoProtoMsg {
  typeUrl: "/cosmos.slashing.v1beta1.ValidatorSigningInfo";
  value: Uint8Array;
}
/**
 * ValidatorSigningInfo defines a validator's signing info for monitoring their
 * liveness activity.
 */
export interface ValidatorSigningInfoAmino {
  address: string;
  /** height at which validator was first a candidate OR was unjailed */
  start_height: string;
  /** index offset into signed block bit array */
  index_offset: string;
  /** timestamp validator cannot be unjailed until */
  jailed_until?: TimestampAmino;
  /**
   * whether or not a validator has been tombstoned (killed out of validator
   * set)
   */
  tombstoned: boolean;
  /** missed blocks counter (to avoid scanning the array every time) */
  missed_blocks_counter: string;
}
export interface ValidatorSigningInfoAminoMsg {
  type: "cosmos-sdk/ValidatorSigningInfo";
  value: ValidatorSigningInfoAmino;
}
/**
 * ValidatorSigningInfo defines a validator's signing info for monitoring their
 * liveness activity.
 */
export interface ValidatorSigningInfoSDKType {
  address: string;
  start_height: bigint;
  index_offset: bigint;
  jailed_until: TimestampSDKType;
  tombstoned: boolean;
  missed_blocks_counter: bigint;
}
/** Params represents the parameters used for by the slashing module. */
export interface Params {
  signedBlocksWindow: bigint;
  minSignedPerWindow: Uint8Array;
  downtimeJailDuration: Duration;
  slashFractionDoubleSign: Uint8Array;
  slashFractionDowntime: Uint8Array;
}
export interface ParamsProtoMsg {
  typeUrl: "/cosmos.slashing.v1beta1.Params";
  value: Uint8Array;
}
/** Params represents the parameters used for by the slashing module. */
export interface ParamsAmino {
  signed_blocks_window: string;
  min_signed_per_window: Uint8Array;
  downtime_jail_duration?: DurationAmino;
  slash_fraction_double_sign: Uint8Array;
  slash_fraction_downtime: Uint8Array;
}
export interface ParamsAminoMsg {
  type: "cosmos-sdk/Params";
  value: ParamsAmino;
}
/** Params represents the parameters used for by the slashing module. */
export interface ParamsSDKType {
  signed_blocks_window: bigint;
  min_signed_per_window: Uint8Array;
  downtime_jail_duration: DurationSDKType;
  slash_fraction_double_sign: Uint8Array;
  slash_fraction_downtime: Uint8Array;
}
function createBaseValidatorSigningInfo(): ValidatorSigningInfo {
  return {
    address: "",
    startHeight: BigInt(0),
    indexOffset: BigInt(0),
    jailedUntil: Timestamp.fromPartial({}),
    tombstoned: false,
    missedBlocksCounter: BigInt(0)
  };
}
export const ValidatorSigningInfo = {
  typeUrl: "/cosmos.slashing.v1beta1.ValidatorSigningInfo",
  encode(message: ValidatorSigningInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.startHeight !== BigInt(0)) {
      writer.uint32(16).int64(message.startHeight);
    }
    if (message.indexOffset !== BigInt(0)) {
      writer.uint32(24).int64(message.indexOffset);
    }
    if (message.jailedUntil !== undefined) {
      Timestamp.encode(message.jailedUntil, writer.uint32(34).fork()).ldelim();
    }
    if (message.tombstoned === true) {
      writer.uint32(40).bool(message.tombstoned);
    }
    if (message.missedBlocksCounter !== BigInt(0)) {
      writer.uint32(48).int64(message.missedBlocksCounter);
    }
    return writer;
  },
  fromJSON(object: any): ValidatorSigningInfo {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      startHeight: isSet(object.startHeight) ? BigInt(object.startHeight.toString()) : BigInt(0),
      indexOffset: isSet(object.indexOffset) ? BigInt(object.indexOffset.toString()) : BigInt(0),
      jailedUntil: isSet(object.jailedUntil) ? fromJsonTimestamp(object.jailedUntil) : undefined,
      tombstoned: isSet(object.tombstoned) ? Boolean(object.tombstoned) : false,
      missedBlocksCounter: isSet(object.missedBlocksCounter) ? BigInt(object.missedBlocksCounter.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<ValidatorSigningInfo>): ValidatorSigningInfo {
    const message = createBaseValidatorSigningInfo();
    message.address = object.address ?? "";
    message.startHeight = object.startHeight !== undefined && object.startHeight !== null ? BigInt(object.startHeight.toString()) : BigInt(0);
    message.indexOffset = object.indexOffset !== undefined && object.indexOffset !== null ? BigInt(object.indexOffset.toString()) : BigInt(0);
    message.jailedUntil = object.jailedUntil !== undefined && object.jailedUntil !== null ? Timestamp.fromPartial(object.jailedUntil) : undefined;
    message.tombstoned = object.tombstoned ?? false;
    message.missedBlocksCounter = object.missedBlocksCounter !== undefined && object.missedBlocksCounter !== null ? BigInt(object.missedBlocksCounter.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ValidatorSigningInfoAmino): ValidatorSigningInfo {
    return {
      address: object.address,
      startHeight: BigInt(object.start_height),
      indexOffset: BigInt(object.index_offset),
      jailedUntil: object.jailed_until,
      tombstoned: object.tombstoned,
      missedBlocksCounter: BigInt(object.missed_blocks_counter)
    };
  },
  toAmino(message: ValidatorSigningInfo): ValidatorSigningInfoAmino {
    const obj: any = {};
    obj.address = message.address;
    obj.start_height = message.startHeight ? message.startHeight.toString() : undefined;
    obj.index_offset = message.indexOffset ? message.indexOffset.toString() : undefined;
    obj.jailed_until = message.jailedUntil;
    obj.tombstoned = message.tombstoned;
    obj.missed_blocks_counter = message.missedBlocksCounter ? message.missedBlocksCounter.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ValidatorSigningInfoAminoMsg): ValidatorSigningInfo {
    return ValidatorSigningInfo.fromAmino(object.value);
  },
  toAminoMsg(message: ValidatorSigningInfo): ValidatorSigningInfoAminoMsg {
    return {
      type: "cosmos-sdk/ValidatorSigningInfo",
      value: ValidatorSigningInfo.toAmino(message)
    };
  },
  fromProtoMsg(message: ValidatorSigningInfoProtoMsg): ValidatorSigningInfo {
    return ValidatorSigningInfo.decode(message.value);
  },
  toProto(message: ValidatorSigningInfo): Uint8Array {
    return ValidatorSigningInfo.encode(message).finish();
  },
  toProtoMsg(message: ValidatorSigningInfo): ValidatorSigningInfoProtoMsg {
    return {
      typeUrl: "/cosmos.slashing.v1beta1.ValidatorSigningInfo",
      value: ValidatorSigningInfo.encode(message).finish()
    };
  }
};
function createBaseParams(): Params {
  return {
    signedBlocksWindow: BigInt(0),
    minSignedPerWindow: new Uint8Array(),
    downtimeJailDuration: Duration.fromPartial({}),
    slashFractionDoubleSign: new Uint8Array(),
    slashFractionDowntime: new Uint8Array()
  };
}
export const Params = {
  typeUrl: "/cosmos.slashing.v1beta1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.signedBlocksWindow !== BigInt(0)) {
      writer.uint32(8).int64(message.signedBlocksWindow);
    }
    if (message.minSignedPerWindow.length !== 0) {
      writer.uint32(18).bytes(message.minSignedPerWindow);
    }
    if (message.downtimeJailDuration !== undefined) {
      Duration.encode(message.downtimeJailDuration, writer.uint32(26).fork()).ldelim();
    }
    if (message.slashFractionDoubleSign.length !== 0) {
      writer.uint32(34).bytes(message.slashFractionDoubleSign);
    }
    if (message.slashFractionDowntime.length !== 0) {
      writer.uint32(42).bytes(message.slashFractionDowntime);
    }
    return writer;
  },
  fromJSON(object: any): Params {
    return {
      signedBlocksWindow: isSet(object.signedBlocksWindow) ? BigInt(object.signedBlocksWindow.toString()) : BigInt(0),
      minSignedPerWindow: isSet(object.minSignedPerWindow) ? bytesFromBase64(object.minSignedPerWindow) : new Uint8Array(),
      downtimeJailDuration: isSet(object.downtimeJailDuration) ? Duration.fromJSON(object.downtimeJailDuration) : undefined,
      slashFractionDoubleSign: isSet(object.slashFractionDoubleSign) ? bytesFromBase64(object.slashFractionDoubleSign) : new Uint8Array(),
      slashFractionDowntime: isSet(object.slashFractionDowntime) ? bytesFromBase64(object.slashFractionDowntime) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.signedBlocksWindow = object.signedBlocksWindow !== undefined && object.signedBlocksWindow !== null ? BigInt(object.signedBlocksWindow.toString()) : BigInt(0);
    message.minSignedPerWindow = object.minSignedPerWindow ?? new Uint8Array();
    message.downtimeJailDuration = object.downtimeJailDuration !== undefined && object.downtimeJailDuration !== null ? Duration.fromPartial(object.downtimeJailDuration) : undefined;
    message.slashFractionDoubleSign = object.slashFractionDoubleSign ?? new Uint8Array();
    message.slashFractionDowntime = object.slashFractionDowntime ?? new Uint8Array();
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    return {
      signedBlocksWindow: BigInt(object.signed_blocks_window),
      minSignedPerWindow: object.min_signed_per_window,
      downtimeJailDuration: object?.downtime_jail_duration ? Duration.fromAmino(object.downtime_jail_duration) : undefined,
      slashFractionDoubleSign: object.slash_fraction_double_sign,
      slashFractionDowntime: object.slash_fraction_downtime
    };
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.signed_blocks_window = message.signedBlocksWindow ? message.signedBlocksWindow.toString() : undefined;
    obj.min_signed_per_window = message.minSignedPerWindow;
    obj.downtime_jail_duration = message.downtimeJailDuration ? Duration.toAmino(message.downtimeJailDuration) : undefined;
    obj.slash_fraction_double_sign = message.slashFractionDoubleSign;
    obj.slash_fraction_downtime = message.slashFractionDowntime;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  toAminoMsg(message: Params): ParamsAminoMsg {
    return {
      type: "cosmos-sdk/Params",
      value: Params.toAmino(message)
    };
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/cosmos.slashing.v1beta1.Params",
      value: Params.encode(message).finish()
    };
  }
};