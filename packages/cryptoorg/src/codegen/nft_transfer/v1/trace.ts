import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../helpers";
/**
 * ClassTrace contains the base classID for ICS721 non-fungible tokens and the
 * source tracing information path.
 */
export interface ClassTrace {
  /**
   * path defines the chain of port/channel identifiers used for tracing the
   * source of the non-fungible token.
   */
  path: string;
  /** base classID of the relayed non-fungible token. */
  baseClassId: string;
}
/**
 * ClassTrace contains the base classID for ICS721 non-fungible tokens and the
 * source tracing information path.
 */
export interface ClassTraceSDKType {
  path: string;
  base_class_id: string;
}
function createBaseClassTrace(): ClassTrace {
  return {
    path: "",
    baseClassId: ""
  };
}
export const ClassTrace = {
  encode(message: ClassTrace, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.path !== "") {
      writer.uint32(10).string(message.path);
    }
    if (message.baseClassId !== "") {
      writer.uint32(18).string(message.baseClassId);
    }
    return writer;
  },
  fromJSON(object: any): ClassTrace {
    return {
      path: isSet(object.path) ? String(object.path) : "",
      baseClassId: isSet(object.baseClassId) ? String(object.baseClassId) : ""
    };
  },
  fromPartial(object: Partial<ClassTrace>): ClassTrace {
    const message = createBaseClassTrace();
    message.path = object.path ?? "";
    message.baseClassId = object.baseClassId ?? "";
    return message;
  }
};