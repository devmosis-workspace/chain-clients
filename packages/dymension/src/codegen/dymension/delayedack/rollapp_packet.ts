import { Packet, PacketAmino, PacketSDKType } from "../../ibc/core/channel/v1/channel";
import { BinaryWriter } from "../../binary";
import { isSet, bytesFromBase64, base64FromBytes } from "../../helpers";
export enum RollappPacket_Status {
  PENDING = 0,
  ACCEPTED = 1,
  REJECTED = 2,
  UNRECOGNIZED = -1,
}
export const RollappPacket_StatusSDKType = RollappPacket_Status;
export const RollappPacket_StatusAmino = RollappPacket_Status;
export function rollappPacket_StatusFromJSON(object: any): RollappPacket_Status {
  switch (object) {
    case 0:
    case "PENDING":
      return RollappPacket_Status.PENDING;
    case 1:
    case "ACCEPTED":
      return RollappPacket_Status.ACCEPTED;
    case 2:
    case "REJECTED":
      return RollappPacket_Status.REJECTED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return RollappPacket_Status.UNRECOGNIZED;
  }
}
export function rollappPacket_StatusToJSON(object: RollappPacket_Status): string {
  switch (object) {
    case RollappPacket_Status.PENDING:
      return "PENDING";
    case RollappPacket_Status.ACCEPTED:
      return "ACCEPTED";
    case RollappPacket_Status.REJECTED:
      return "REJECTED";
    case RollappPacket_Status.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export interface RollappPacket {
  packet?: Packet;
  status: RollappPacket_Status;
  ProofHeight: bigint;
  error: string;
  relayer: Uint8Array;
}
export interface RollappPacketProtoMsg {
  typeUrl: "/dymensionxyz.dymension.delayedack.RollappPacket";
  value: Uint8Array;
}
export interface RollappPacketAmino {
  packet?: PacketAmino;
  status?: RollappPacket_Status;
  ProofHeight?: string;
  error?: string;
  relayer?: string;
}
export interface RollappPacketAminoMsg {
  type: "/dymensionxyz.dymension.delayedack.RollappPacket";
  value: RollappPacketAmino;
}
export interface RollappPacketSDKType {
  packet?: PacketSDKType;
  status: RollappPacket_Status;
  ProofHeight: bigint;
  error: string;
  relayer: Uint8Array;
}
function createBaseRollappPacket(): RollappPacket {
  return {
    packet: undefined,
    status: 0,
    ProofHeight: BigInt(0),
    error: "",
    relayer: new Uint8Array()
  };
}
export const RollappPacket = {
  typeUrl: "/dymensionxyz.dymension.delayedack.RollappPacket",
  encode(message: RollappPacket, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.packet !== undefined) {
      Packet.encode(message.packet, writer.uint32(10).fork()).ldelim();
    }
    if (message.status !== 0) {
      writer.uint32(16).int32(message.status);
    }
    if (message.ProofHeight !== BigInt(0)) {
      writer.uint32(24).uint64(message.ProofHeight);
    }
    if (message.error !== "") {
      writer.uint32(34).string(message.error);
    }
    if (message.relayer.length !== 0) {
      writer.uint32(42).bytes(message.relayer);
    }
    return writer;
  },
  fromJSON(object: any): RollappPacket {
    return {
      packet: isSet(object.packet) ? Packet.fromJSON(object.packet) : undefined,
      status: isSet(object.status) ? rollappPacket_StatusFromJSON(object.status) : -1,
      ProofHeight: isSet(object.ProofHeight) ? BigInt(object.ProofHeight.toString()) : BigInt(0),
      error: isSet(object.error) ? String(object.error) : "",
      relayer: isSet(object.relayer) ? bytesFromBase64(object.relayer) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<RollappPacket>): RollappPacket {
    const message = createBaseRollappPacket();
    message.packet = object.packet !== undefined && object.packet !== null ? Packet.fromPartial(object.packet) : undefined;
    message.status = object.status ?? 0;
    message.ProofHeight = object.ProofHeight !== undefined && object.ProofHeight !== null ? BigInt(object.ProofHeight.toString()) : BigInt(0);
    message.error = object.error ?? "";
    message.relayer = object.relayer ?? new Uint8Array();
    return message;
  },
  fromAmino(object: RollappPacketAmino): RollappPacket {
    const message = createBaseRollappPacket();
    if (object.packet !== undefined && object.packet !== null) {
      message.packet = Packet.fromAmino(object.packet);
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = rollappPacket_StatusFromJSON(object.status);
    }
    if (object.ProofHeight !== undefined && object.ProofHeight !== null) {
      message.ProofHeight = BigInt(object.ProofHeight);
    }
    if (object.error !== undefined && object.error !== null) {
      message.error = object.error;
    }
    if (object.relayer !== undefined && object.relayer !== null) {
      message.relayer = bytesFromBase64(object.relayer);
    }
    return message;
  },
  toAmino(message: RollappPacket): RollappPacketAmino {
    const obj: any = {};
    obj.packet = message.packet ? Packet.toAmino(message.packet) : undefined;
    obj.status = message.status;
    obj.ProofHeight = message.ProofHeight ? message.ProofHeight.toString() : undefined;
    obj.error = message.error;
    obj.relayer = message.relayer ? base64FromBytes(message.relayer) : undefined;
    return obj;
  },
  fromAminoMsg(object: RollappPacketAminoMsg): RollappPacket {
    return RollappPacket.fromAmino(object.value);
  },
  fromProtoMsg(message: RollappPacketProtoMsg): RollappPacket {
    return RollappPacket.decode(message.value);
  },
  toProto(message: RollappPacket): Uint8Array {
    return RollappPacket.encode(message).finish();
  },
  toProtoMsg(message: RollappPacket): RollappPacketProtoMsg {
    return {
      typeUrl: "/dymensionxyz.dymension.delayedack.RollappPacket",
      value: RollappPacket.encode(message).finish()
    };
  }
};