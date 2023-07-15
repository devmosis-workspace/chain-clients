import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64 } from "../../../helpers";
/** Unit stores cpu, memory and storage metrics */
export interface ResourceValue {
  val: Uint8Array;
}
/** Unit stores cpu, memory and storage metrics */
export interface ResourceValueSDKType {
  val: Uint8Array;
}
function createBaseResourceValue(): ResourceValue {
  return {
    val: new Uint8Array()
  };
}
export const ResourceValue = {
  encode(message: ResourceValue, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.val.length !== 0) {
      writer.uint32(10).bytes(message.val);
    }
    return writer;
  },
  fromJSON(object: any): ResourceValue {
    return {
      val: isSet(object.val) ? bytesFromBase64(object.val) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<ResourceValue>): ResourceValue {
    const message = createBaseResourceValue();
    message.val = object.val ?? new Uint8Array();
    return message;
  }
};