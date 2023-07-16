import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
export interface ClassesByISCN {
  iscnIdPrefix: string;
  classIds: string[];
}
export interface ClassesByISCNSDKType {
  iscn_id_prefix: string;
  class_ids: string[];
}
function createBaseClassesByISCN(): ClassesByISCN {
  return {
    iscnIdPrefix: "",
    classIds: []
  };
}
export const ClassesByISCN = {
  encode(message: ClassesByISCN, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.iscnIdPrefix !== "") {
      writer.uint32(10).string(message.iscnIdPrefix);
    }
    for (const v of message.classIds) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  fromJSON(object: any): ClassesByISCN {
    return {
      iscnIdPrefix: isSet(object.iscnIdPrefix) ? String(object.iscnIdPrefix) : "",
      classIds: Array.isArray(object?.classIds) ? object.classIds.map((e: any) => String(e)) : []
    };
  },
  fromPartial(object: Partial<ClassesByISCN>): ClassesByISCN {
    const message = createBaseClassesByISCN();
    message.iscnIdPrefix = object.iscnIdPrefix ?? "";
    message.classIds = object.classIds?.map(e => e) || [];
    return message;
  }
};