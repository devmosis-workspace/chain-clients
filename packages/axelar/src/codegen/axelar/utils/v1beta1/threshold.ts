import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
export interface Threshold {
  /**
   * split threshold into Numerator and denominator to avoid floating point
   * errors down the line
   */
  numerator: bigint;
  denominator: bigint;
}
export interface ThresholdProtoMsg {
  typeUrl: "/axelar.utils.v1beta1.Threshold";
  value: Uint8Array;
}
export interface ThresholdAmino {
  /**
   * split threshold into Numerator and denominator to avoid floating point
   * errors down the line
   */
  numerator?: string;
  denominator?: string;
}
export interface ThresholdAminoMsg {
  type: "/axelar.utils.v1beta1.Threshold";
  value: ThresholdAmino;
}
export interface ThresholdSDKType {
  numerator: bigint;
  denominator: bigint;
}
function createBaseThreshold(): Threshold {
  return {
    numerator: BigInt(0),
    denominator: BigInt(0)
  };
}
export const Threshold = {
  typeUrl: "/axelar.utils.v1beta1.Threshold",
  encode(message: Threshold, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.numerator !== BigInt(0)) {
      writer.uint32(8).int64(message.numerator);
    }
    if (message.denominator !== BigInt(0)) {
      writer.uint32(16).int64(message.denominator);
    }
    return writer;
  },
  fromJSON(object: any): Threshold {
    return {
      numerator: isSet(object.numerator) ? BigInt(object.numerator.toString()) : BigInt(0),
      denominator: isSet(object.denominator) ? BigInt(object.denominator.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<Threshold>): Threshold {
    const message = createBaseThreshold();
    message.numerator = object.numerator !== undefined && object.numerator !== null ? BigInt(object.numerator.toString()) : BigInt(0);
    message.denominator = object.denominator !== undefined && object.denominator !== null ? BigInt(object.denominator.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ThresholdAmino): Threshold {
    const message = createBaseThreshold();
    if (object.numerator !== undefined && object.numerator !== null) {
      message.numerator = BigInt(object.numerator);
    }
    if (object.denominator !== undefined && object.denominator !== null) {
      message.denominator = BigInt(object.denominator);
    }
    return message;
  },
  toAmino(message: Threshold): ThresholdAmino {
    const obj: any = {};
    obj.numerator = message.numerator ? message.numerator.toString() : undefined;
    obj.denominator = message.denominator ? message.denominator.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ThresholdAminoMsg): Threshold {
    return Threshold.fromAmino(object.value);
  },
  fromProtoMsg(message: ThresholdProtoMsg): Threshold {
    return Threshold.decode(message.value);
  },
  toProto(message: Threshold): Uint8Array {
    return Threshold.encode(message).finish();
  },
  toProtoMsg(message: Threshold): ThresholdProtoMsg {
    return {
      typeUrl: "/axelar.utils.v1beta1.Threshold",
      value: Threshold.encode(message).finish()
    };
  }
};