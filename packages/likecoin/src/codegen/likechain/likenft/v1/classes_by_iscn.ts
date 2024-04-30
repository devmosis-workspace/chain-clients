import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
export interface ClassesByISCN {
  iscnIdPrefix: string;
  classIds: string[];
}
export interface ClassesByISCNProtoMsg {
  typeUrl: "/likechain.likenft.v1.ClassesByISCN";
  value: Uint8Array;
}
export interface ClassesByISCNAmino {
  iscn_id_prefix?: string;
  class_ids?: string[];
}
export interface ClassesByISCNAminoMsg {
  type: "/likechain.likenft.v1.ClassesByISCN";
  value: ClassesByISCNAmino;
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
  typeUrl: "/likechain.likenft.v1.ClassesByISCN",
  encode(message: ClassesByISCN, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: ClassesByISCNAmino): ClassesByISCN {
    const message = createBaseClassesByISCN();
    if (object.iscn_id_prefix !== undefined && object.iscn_id_prefix !== null) {
      message.iscnIdPrefix = object.iscn_id_prefix;
    }
    message.classIds = object.class_ids?.map(e => e) || [];
    return message;
  },
  toAmino(message: ClassesByISCN): ClassesByISCNAmino {
    const obj: any = {};
    obj.iscn_id_prefix = message.iscnIdPrefix;
    if (message.classIds) {
      obj.class_ids = message.classIds.map(e => e);
    } else {
      obj.class_ids = [];
    }
    return obj;
  },
  fromAminoMsg(object: ClassesByISCNAminoMsg): ClassesByISCN {
    return ClassesByISCN.fromAmino(object.value);
  },
  fromProtoMsg(message: ClassesByISCNProtoMsg): ClassesByISCN {
    return ClassesByISCN.decode(message.value);
  },
  toProto(message: ClassesByISCN): Uint8Array {
    return ClassesByISCN.encode(message).finish();
  },
  toProtoMsg(message: ClassesByISCN): ClassesByISCNProtoMsg {
    return {
      typeUrl: "/likechain.likenft.v1.ClassesByISCN",
      value: ClassesByISCN.encode(message).finish()
    };
  }
};