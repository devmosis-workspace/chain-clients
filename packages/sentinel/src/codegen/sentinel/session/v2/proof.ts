import { Bandwidth, BandwidthAmino, BandwidthSDKType } from "../../types/v1/bandwidth";
import { Duration, DurationAmino, DurationSDKType } from "../../../google/protobuf/duration";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
export interface Proof {
  id: bigint;
  bandwidth: Bandwidth;
  duration: Duration;
}
export interface ProofProtoMsg {
  typeUrl: "/sentinel.session.v2.Proof";
  value: Uint8Array;
}
export interface ProofAmino {
  id?: string;
  bandwidth?: BandwidthAmino;
  duration?: DurationAmino;
}
export interface ProofAminoMsg {
  type: "/sentinel.session.v2.Proof";
  value: ProofAmino;
}
export interface ProofSDKType {
  id: bigint;
  bandwidth: BandwidthSDKType;
  duration: DurationSDKType;
}
function createBaseProof(): Proof {
  return {
    id: BigInt(0),
    bandwidth: Bandwidth.fromPartial({}),
    duration: Duration.fromPartial({})
  };
}
export const Proof = {
  typeUrl: "/sentinel.session.v2.Proof",
  encode(message: Proof, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.bandwidth !== undefined) {
      Bandwidth.encode(message.bandwidth, writer.uint32(18).fork()).ldelim();
    }
    if (message.duration !== undefined) {
      Duration.encode(message.duration, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): Proof {
    return {
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
      bandwidth: isSet(object.bandwidth) ? Bandwidth.fromJSON(object.bandwidth) : undefined,
      duration: isSet(object.duration) ? Duration.fromJSON(object.duration) : undefined
    };
  },
  fromPartial(object: Partial<Proof>): Proof {
    const message = createBaseProof();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.bandwidth = object.bandwidth !== undefined && object.bandwidth !== null ? Bandwidth.fromPartial(object.bandwidth) : undefined;
    message.duration = object.duration !== undefined && object.duration !== null ? Duration.fromPartial(object.duration) : undefined;
    return message;
  },
  fromAmino(object: ProofAmino): Proof {
    const message = createBaseProof();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.bandwidth !== undefined && object.bandwidth !== null) {
      message.bandwidth = Bandwidth.fromAmino(object.bandwidth);
    }
    if (object.duration !== undefined && object.duration !== null) {
      message.duration = Duration.fromAmino(object.duration);
    }
    return message;
  },
  toAmino(message: Proof): ProofAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id.toString() : undefined;
    obj.bandwidth = message.bandwidth ? Bandwidth.toAmino(message.bandwidth) : undefined;
    obj.duration = message.duration ? Duration.toAmino(message.duration) : undefined;
    return obj;
  },
  fromAminoMsg(object: ProofAminoMsg): Proof {
    return Proof.fromAmino(object.value);
  },
  fromProtoMsg(message: ProofProtoMsg): Proof {
    return Proof.decode(message.value);
  },
  toProto(message: Proof): Uint8Array {
    return Proof.encode(message).finish();
  },
  toProtoMsg(message: Proof): ProofProtoMsg {
    return {
      typeUrl: "/sentinel.session.v2.Proof",
      value: Proof.encode(message).finish()
    };
  }
};