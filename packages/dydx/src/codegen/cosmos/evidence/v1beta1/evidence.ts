import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { BinaryWriter } from "../../../binary";
import { isSet, fromJsonTimestamp } from "../../../helpers";
/**
 * Equivocation implements the Evidence interface and defines evidence of double
 * signing misbehavior.
 */
export interface Equivocation {
  /** height is the equivocation height. */
  height: bigint;
  /** time is the equivocation time. */
  time: Timestamp;
  /** power is the equivocation validator power. */
  power: bigint;
  /** consensus_address is the equivocation validator consensus address. */
  consensusAddress: string;
}
export interface EquivocationProtoMsg {
  typeUrl: "/cosmos.evidence.v1beta1.Equivocation";
  value: Uint8Array;
}
/**
 * Equivocation implements the Evidence interface and defines evidence of double
 * signing misbehavior.
 */
export interface EquivocationSDKType {
  height: bigint;
  time: TimestampSDKType;
  power: bigint;
  consensus_address: string;
}
function createBaseEquivocation(): Equivocation {
  return {
    height: BigInt(0),
    time: Timestamp.fromPartial({}),
    power: BigInt(0),
    consensusAddress: ""
  };
}
export const Equivocation = {
  typeUrl: "/cosmos.evidence.v1beta1.Equivocation",
  encode(message: Equivocation, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.height !== BigInt(0)) {
      writer.uint32(8).int64(message.height);
    }
    if (message.time !== undefined) {
      Timestamp.encode(message.time, writer.uint32(18).fork()).ldelim();
    }
    if (message.power !== BigInt(0)) {
      writer.uint32(24).int64(message.power);
    }
    if (message.consensusAddress !== "") {
      writer.uint32(34).string(message.consensusAddress);
    }
    return writer;
  },
  fromJSON(object: any): Equivocation {
    return {
      height: isSet(object.height) ? BigInt(object.height.toString()) : BigInt(0),
      time: isSet(object.time) ? fromJsonTimestamp(object.time) : undefined,
      power: isSet(object.power) ? BigInt(object.power.toString()) : BigInt(0),
      consensusAddress: isSet(object.consensusAddress) ? String(object.consensusAddress) : ""
    };
  },
  fromPartial(object: Partial<Equivocation>): Equivocation {
    const message = createBaseEquivocation();
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    message.time = object.time !== undefined && object.time !== null ? Timestamp.fromPartial(object.time) : undefined;
    message.power = object.power !== undefined && object.power !== null ? BigInt(object.power.toString()) : BigInt(0);
    message.consensusAddress = object.consensusAddress ?? "";
    return message;
  },
  fromAmino(object: EquivocationAmino): Equivocation {
    const message = createBaseEquivocation();
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height);
    }
    if (object.time !== undefined && object.time !== null) {
      message.time = Timestamp.fromAmino(object.time);
    }
    if (object.power !== undefined && object.power !== null) {
      message.power = BigInt(object.power);
    }
    if (object.consensus_address !== undefined && object.consensus_address !== null) {
      message.consensusAddress = object.consensus_address;
    }
    return message;
  },
  toAmino(message: Equivocation): EquivocationAmino {
    const obj: any = {};
    obj.height = message.height ? message.height.toString() : undefined;
    obj.time = message.time ? Timestamp.toAmino(message.time) : Timestamp.fromPartial({});
    obj.power = message.power ? message.power.toString() : undefined;
    obj.consensus_address = message.consensusAddress;
    return obj;
  },
  fromAminoMsg(object: EquivocationAminoMsg): Equivocation {
    return Equivocation.fromAmino(object.value);
  },
  toAminoMsg(message: Equivocation): EquivocationAminoMsg {
    return {
      type: "cosmos-sdk/Equivocation",
      value: Equivocation.toAmino(message)
    };
  },
  fromProtoMsg(message: EquivocationProtoMsg): Equivocation {
    return Equivocation.decode(message.value);
  },
  toProto(message: Equivocation): Uint8Array {
    return Equivocation.encode(message).finish();
  },
  toProtoMsg(message: Equivocation): EquivocationProtoMsg {
    return {
      typeUrl: "/cosmos.evidence.v1beta1.Equivocation",
      value: Equivocation.encode(message).finish()
    };
  }
};