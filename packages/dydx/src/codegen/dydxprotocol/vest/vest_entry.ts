import { Timestamp, TimestampSDKType } from "../../google/protobuf/timestamp";
import { BinaryWriter } from "../../binary";
import { isSet, fromJsonTimestamp } from "../../helpers";
/**
 * VestEntry specifies a Vester Account and the rate at which tokens are
 * dripped into the corresponding Treasury Account.
 */
export interface VestEntry {
  /**
   * The module account to vest tokens from.
   * This is also the key to this `VestEntry` in state.
   */
  vesterAccount: string;
  /** The module account to vest tokens to. */
  treasuryAccount: string;
  /** The denom of the token to vest. */
  denom: string;
  /** The start time of vest. Before this time, no vest will occur. */
  startTime: Timestamp;
  /**
   * The end time of vest. At this target date, all funds should be in the
   * Treasury Account and none left in the Vester Account.
   */
  endTime: Timestamp;
}
export interface VestEntryProtoMsg {
  typeUrl: "/dydxprotocol.vest.VestEntry";
  value: Uint8Array;
}
/**
 * VestEntry specifies a Vester Account and the rate at which tokens are
 * dripped into the corresponding Treasury Account.
 */
export interface VestEntryAmino {
  /**
   * The module account to vest tokens from.
   * This is also the key to this `VestEntry` in state.
   */
  vester_account?: string;
  /** The module account to vest tokens to. */
  treasury_account?: string;
  /** The denom of the token to vest. */
  denom?: string;
  /** The start time of vest. Before this time, no vest will occur. */
  start_time?: string;
  /**
   * The end time of vest. At this target date, all funds should be in the
   * Treasury Account and none left in the Vester Account.
   */
  end_time?: string;
}
export interface VestEntryAminoMsg {
  type: "/dydxprotocol.vest.VestEntry";
  value: VestEntryAmino;
}
/**
 * VestEntry specifies a Vester Account and the rate at which tokens are
 * dripped into the corresponding Treasury Account.
 */
export interface VestEntrySDKType {
  vester_account: string;
  treasury_account: string;
  denom: string;
  start_time: TimestampSDKType;
  end_time: TimestampSDKType;
}
function createBaseVestEntry(): VestEntry {
  return {
    vesterAccount: "",
    treasuryAccount: "",
    denom: "",
    startTime: Timestamp.fromPartial({}),
    endTime: Timestamp.fromPartial({})
  };
}
export const VestEntry = {
  typeUrl: "/dydxprotocol.vest.VestEntry",
  encode(message: VestEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.vesterAccount !== "") {
      writer.uint32(10).string(message.vesterAccount);
    }
    if (message.treasuryAccount !== "") {
      writer.uint32(18).string(message.treasuryAccount);
    }
    if (message.denom !== "") {
      writer.uint32(26).string(message.denom);
    }
    if (message.startTime !== undefined) {
      Timestamp.encode(message.startTime, writer.uint32(34).fork()).ldelim();
    }
    if (message.endTime !== undefined) {
      Timestamp.encode(message.endTime, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): VestEntry {
    return {
      vesterAccount: isSet(object.vesterAccount) ? String(object.vesterAccount) : "",
      treasuryAccount: isSet(object.treasuryAccount) ? String(object.treasuryAccount) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
      startTime: isSet(object.startTime) ? fromJsonTimestamp(object.startTime) : undefined,
      endTime: isSet(object.endTime) ? fromJsonTimestamp(object.endTime) : undefined
    };
  },
  fromPartial(object: Partial<VestEntry>): VestEntry {
    const message = createBaseVestEntry();
    message.vesterAccount = object.vesterAccount ?? "";
    message.treasuryAccount = object.treasuryAccount ?? "";
    message.denom = object.denom ?? "";
    message.startTime = object.startTime !== undefined && object.startTime !== null ? Timestamp.fromPartial(object.startTime) : undefined;
    message.endTime = object.endTime !== undefined && object.endTime !== null ? Timestamp.fromPartial(object.endTime) : undefined;
    return message;
  },
  fromAmino(object: VestEntryAmino): VestEntry {
    const message = createBaseVestEntry();
    if (object.vester_account !== undefined && object.vester_account !== null) {
      message.vesterAccount = object.vester_account;
    }
    if (object.treasury_account !== undefined && object.treasury_account !== null) {
      message.treasuryAccount = object.treasury_account;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.start_time !== undefined && object.start_time !== null) {
      message.startTime = Timestamp.fromAmino(object.start_time);
    }
    if (object.end_time !== undefined && object.end_time !== null) {
      message.endTime = Timestamp.fromAmino(object.end_time);
    }
    return message;
  },
  toAmino(message: VestEntry): VestEntryAmino {
    const obj: any = {};
    obj.vester_account = message.vesterAccount;
    obj.treasury_account = message.treasuryAccount;
    obj.denom = message.denom;
    obj.start_time = message.startTime ? Timestamp.toAmino(message.startTime) : undefined;
    obj.end_time = message.endTime ? Timestamp.toAmino(message.endTime) : undefined;
    return obj;
  },
  fromAminoMsg(object: VestEntryAminoMsg): VestEntry {
    return VestEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: VestEntryProtoMsg): VestEntry {
    return VestEntry.decode(message.value);
  },
  toProto(message: VestEntry): Uint8Array {
    return VestEntry.encode(message).finish();
  },
  toProtoMsg(message: VestEntry): VestEntryProtoMsg {
    return {
      typeUrl: "/dydxprotocol.vest.VestEntry",
      value: VestEntry.encode(message).finish()
    };
  }
};