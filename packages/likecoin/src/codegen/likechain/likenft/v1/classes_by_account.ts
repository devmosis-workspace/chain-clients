import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64 } from "../../../helpers";
export interface ClassesByAccount {
  account: string;
  classIds: string[];
}
export interface ClassesByAccountSDKType {
  account: string;
  class_ids: string[];
}
export interface ClassesByAccountStoreRecord {
  accAddress: Uint8Array;
  classIds: string[];
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
  encode(message: ClassesByAccount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseClassesByAccountStoreRecord(): ClassesByAccountStoreRecord {
  return {
    accAddress: new Uint8Array(),
    classIds: []
  };
}
export const ClassesByAccountStoreRecord = {
  encode(message: ClassesByAccountStoreRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};