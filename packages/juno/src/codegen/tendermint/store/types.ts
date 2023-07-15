import { Long, isSet } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface BlockStoreState {
  base: Long;
  height: Long;
}
export interface BlockStoreStateSDKType {
  base: Long;
  height: Long;
}
function createBaseBlockStoreState(): BlockStoreState {
  return {
    base: Long.ZERO,
    height: Long.ZERO
  };
}
export const BlockStoreState = {
  encode(message: BlockStoreState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.base.isZero()) {
      writer.uint32(8).int64(message.base);
    }
    if (!message.height.isZero()) {
      writer.uint32(16).int64(message.height);
    }
    return writer;
  },
  fromJSON(object: any): BlockStoreState {
    return {
      base: isSet(object.base) ? Long.fromValue(object.base) : Long.ZERO,
      height: isSet(object.height) ? Long.fromValue(object.height) : Long.ZERO
    };
  },
  fromPartial(object: Partial<BlockStoreState>): BlockStoreState {
    const message = createBaseBlockStoreState();
    message.base = object.base !== undefined && object.base !== null ? Long.fromValue(object.base) : Long.ZERO;
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
    return message;
  }
};