import { Long, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface Threshold {
  /**
   * split threshold into Numerator and denominator to avoid floating point
   * errors down the line
   */
  numerator: Long;
  denominator: Long;
}
export interface ThresholdSDKType {
  numerator: Long;
  denominator: Long;
}
function createBaseThreshold(): Threshold {
  return {
    numerator: Long.ZERO,
    denominator: Long.ZERO
  };
}
export const Threshold = {
  encode(message: Threshold, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.numerator.isZero()) {
      writer.uint32(8).int64(message.numerator);
    }
    if (!message.denominator.isZero()) {
      writer.uint32(16).int64(message.denominator);
    }
    return writer;
  },
  fromJSON(object: any): Threshold {
    return {
      numerator: isSet(object.numerator) ? Long.fromValue(object.numerator) : Long.ZERO,
      denominator: isSet(object.denominator) ? Long.fromValue(object.denominator) : Long.ZERO
    };
  },
  fromPartial(object: Partial<Threshold>): Threshold {
    const message = createBaseThreshold();
    message.numerator = object.numerator !== undefined && object.numerator !== null ? Long.fromValue(object.numerator) : Long.ZERO;
    message.denominator = object.denominator !== undefined && object.denominator !== null ? Long.fromValue(object.denominator) : Long.ZERO;
    return message;
  }
};