import { BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../helpers";
export interface ClassesByAccount {
  account: string;
  classIds: string[];
}
export interface ClassesByAccountProtoMsg {
  typeUrl: "/likechain.likenft.v1.ClassesByAccount";
  value: Uint8Array;
}
export interface ClassesByAccountAmino {
  account?: string;
  class_ids?: string[];
}
export interface ClassesByAccountAminoMsg {
  type: "/likechain.likenft.v1.ClassesByAccount";
  value: ClassesByAccountAmino;
}
export interface ClassesByAccountSDKType {
  account: string;
  class_ids: string[];
}
export interface ClassesByAccountStoreRecord {
  accAddress: Uint8Array;
  classIds: string[];
}
export interface ClassesByAccountStoreRecordProtoMsg {
  typeUrl: "/likechain.likenft.v1.ClassesByAccountStoreRecord";
  value: Uint8Array;
}
export interface ClassesByAccountStoreRecordAmino {
  acc_address?: string;
  class_ids?: string[];
}
export interface ClassesByAccountStoreRecordAminoMsg {
  type: "/likechain.likenft.v1.ClassesByAccountStoreRecord";
  value: ClassesByAccountStoreRecordAmino;
}
export interface ClassesByAccountStoreRecordSDKType {
  acc_address: Uint8Array;
  class_ids: string[];
}
function createBaseClassesByAccount(): ClassesByAccount {
  return {
    account: "",
    classIds: []
  };
}
export const ClassesByAccount = {
  typeUrl: "/likechain.likenft.v1.ClassesByAccount",
  encode(message: ClassesByAccount, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.account !== "") {
      writer.uint32(10).string(message.account);
    }
    for (const v of message.classIds) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  fromJSON(object: any): ClassesByAccount {
    return {
      account: isSet(object.account) ? String(object.account) : "",
      classIds: Array.isArray(object?.classIds) ? object.classIds.map((e: any) => String(e)) : []
    };
  },
  fromPartial(object: Partial<ClassesByAccount>): ClassesByAccount {
    const message = createBaseClassesByAccount();
    message.account = object.account ?? "";
    message.classIds = object.classIds?.map(e => e) || [];
    return message;
  },
  fromAmino(object: ClassesByAccountAmino): ClassesByAccount {
    const message = createBaseClassesByAccount();
    if (object.account !== undefined && object.account !== null) {
      message.account = object.account;
    }
    message.classIds = object.class_ids?.map(e => e) || [];
    return message;
  },
  toAmino(message: ClassesByAccount): ClassesByAccountAmino {
    const obj: any = {};
    obj.account = message.account;
    if (message.classIds) {
      obj.class_ids = message.classIds.map(e => e);
    } else {
      obj.class_ids = [];
    }
    return obj;
  },
  fromAminoMsg(object: ClassesByAccountAminoMsg): ClassesByAccount {
    return ClassesByAccount.fromAmino(object.value);
  },
  fromProtoMsg(message: ClassesByAccountProtoMsg): ClassesByAccount {
    return ClassesByAccount.decode(message.value);
  },
  toProto(message: ClassesByAccount): Uint8Array {
    return ClassesByAccount.encode(message).finish();
  },
  toProtoMsg(message: ClassesByAccount): ClassesByAccountProtoMsg {
    return {
      typeUrl: "/likechain.likenft.v1.ClassesByAccount",
      value: ClassesByAccount.encode(message).finish()
    };
  }
};
function createBaseClassesByAccountStoreRecord(): ClassesByAccountStoreRecord {
  return {
    accAddress: new Uint8Array(),
    classIds: []
  };
}
export const ClassesByAccountStoreRecord = {
  typeUrl: "/likechain.likenft.v1.ClassesByAccountStoreRecord",
  encode(message: ClassesByAccountStoreRecord, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.accAddress.length !== 0) {
      writer.uint32(10).bytes(message.accAddress);
    }
    for (const v of message.classIds) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  fromJSON(object: any): ClassesByAccountStoreRecord {
    return {
      accAddress: isSet(object.accAddress) ? bytesFromBase64(object.accAddress) : new Uint8Array(),
      classIds: Array.isArray(object?.classIds) ? object.classIds.map((e: any) => String(e)) : []
    };
  },
  fromPartial(object: Partial<ClassesByAccountStoreRecord>): ClassesByAccountStoreRecord {
    const message = createBaseClassesByAccountStoreRecord();
    message.accAddress = object.accAddress ?? new Uint8Array();
    message.classIds = object.classIds?.map(e => e) || [];
    return message;
  },
  fromAmino(object: ClassesByAccountStoreRecordAmino): ClassesByAccountStoreRecord {
    const message = createBaseClassesByAccountStoreRecord();
    if (object.acc_address !== undefined && object.acc_address !== null) {
      message.accAddress = bytesFromBase64(object.acc_address);
    }
    message.classIds = object.class_ids?.map(e => e) || [];
    return message;
  },
  toAmino(message: ClassesByAccountStoreRecord): ClassesByAccountStoreRecordAmino {
    const obj: any = {};
    obj.acc_address = message.accAddress ? base64FromBytes(message.accAddress) : undefined;
    if (message.classIds) {
      obj.class_ids = message.classIds.map(e => e);
    } else {
      obj.class_ids = [];
    }
    return obj;
  },
  fromAminoMsg(object: ClassesByAccountStoreRecordAminoMsg): ClassesByAccountStoreRecord {
    return ClassesByAccountStoreRecord.fromAmino(object.value);
  },
  fromProtoMsg(message: ClassesByAccountStoreRecordProtoMsg): ClassesByAccountStoreRecord {
    return ClassesByAccountStoreRecord.decode(message.value);
  },
  toProto(message: ClassesByAccountStoreRecord): Uint8Array {
    return ClassesByAccountStoreRecord.encode(message).finish();
  },
  toProtoMsg(message: ClassesByAccountStoreRecord): ClassesByAccountStoreRecordProtoMsg {
    return {
      typeUrl: "/likechain.likenft.v1.ClassesByAccountStoreRecord",
      value: ClassesByAccountStoreRecord.encode(message).finish()
    };
  }
};