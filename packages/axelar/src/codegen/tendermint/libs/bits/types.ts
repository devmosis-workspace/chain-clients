import { Long, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface BitArray {
  bits: Long;
  elems: Long[];
}
export interface BitArraySDKType {
  bits: Long;
  elems: Long[];
}
function createBaseBitArray(): BitArray {
  return {
    bits: Long.ZERO,
    elems: []
  };
}
export const BitArray = {
  encode(message: BitArray, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.bits.isZero()) {
      writer.uint32(8).int64(message.bits);
    }
    writer.uint32(18).fork();
    for (const v of message.elems) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },
  fromJSON(object: any): BitArray {
    return {
      bits: isSet(object.bits) ? Long.fromValue(object.bits) : Long.ZERO,
      elems: Array.isArray(object?.elems) ? object.elems.map((e: any) => Long.fromValue(e)) : []
    };
  },
  fromPartial(object: Partial<BitArray>): BitArray {
    const message = createBaseBitArray();
    message.bits = object.bits !== undefined && object.bits !== null ? Long.fromValue(object.bits) : Long.ZERO;
    message.elems = object.elems?.map(e => Long.fromValue(e)) || [];
    return message;
  }
};