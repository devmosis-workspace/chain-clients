import { BinaryWriter } from "../../binary";
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
export interface ClassTraceProtoMsg {
  typeUrl: "/chainmain.nft_transfer.v1.ClassTrace";
  value: Uint8Array;
}
/**
 * ClassTrace contains the base classID for ICS721 non-fungible tokens and the
 * source tracing information path.
 */
export interface ClassTraceAmino {
  /**
   * path defines the chain of port/channel identifiers used for tracing the
   * source of the non-fungible token.
   */
  path: string;
  /** base classID of the relayed non-fungible token. */
  base_class_id: string;
}
export interface ClassTraceAminoMsg {
  type: "/chainmain.nft_transfer.v1.ClassTrace";
  value: ClassTraceAmino;
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
  typeUrl: "/chainmain.nft_transfer.v1.ClassTrace",
  encode(message: ClassTrace, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: ClassTraceAmino): ClassTrace {
    return {
      path: object.path,
      baseClassId: object.base_class_id
    };
  },
  toAmino(message: ClassTrace): ClassTraceAmino {
    const obj: any = {};
    obj.path = message.path;
    obj.base_class_id = message.baseClassId;
    return obj;
  },
  fromAminoMsg(object: ClassTraceAminoMsg): ClassTrace {
    return ClassTrace.fromAmino(object.value);
  },
  fromProtoMsg(message: ClassTraceProtoMsg): ClassTrace {
    return ClassTrace.decode(message.value);
  },
  toProto(message: ClassTrace): Uint8Array {
    return ClassTrace.encode(message).finish();
  },
  toProtoMsg(message: ClassTrace): ClassTraceProtoMsg {
    return {
      typeUrl: "/chainmain.nft_transfer.v1.ClassTrace",
      value: ClassTrace.encode(message).finish()
    };
  }
};