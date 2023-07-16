import { IscnId, IscnIdSDKType } from "./iscnid";
import { Long, isSet, bytesFromBase64 } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface StoreRecord {
  iscnId?: IscnId;
  cidBytes: Uint8Array;
  data: Uint8Array;
}
export interface StoreRecordSDKType {
  iscn_id?: IscnIdSDKType;
  cid_bytes: Uint8Array;
  data: Uint8Array;
}
export interface ContentIdRecord {
  ownerAddressBytes: Uint8Array;
  latestVersion: Long;
}
export interface ContentIdRecordSDKType {
  owner_address_bytes: Uint8Array;
  latest_version: Long;
}
function createBaseStoreRecord(): StoreRecord {
  return {
    iscnId: undefined,
    cidBytes: new Uint8Array(),
    data: new Uint8Array()
  };
}
export const StoreRecord = {
  encode(message: StoreRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.iscnId !== undefined) {
      IscnId.encode(message.iscnId, writer.uint32(10).fork()).ldelim();
    }
    if (message.cidBytes.length !== 0) {
      writer.uint32(18).bytes(message.cidBytes);
    }
    if (message.data.length !== 0) {
      writer.uint32(26).bytes(message.data);
    }
    return writer;
  },
  fromJSON(object: any): StoreRecord {
    return {
      iscnId: isSet(object.iscnId) ? IscnId.fromJSON(object.iscnId) : undefined,
      cidBytes: isSet(object.cidBytes) ? bytesFromBase64(object.cidBytes) : new Uint8Array(),
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<StoreRecord>): StoreRecord {
    const message = createBaseStoreRecord();
    message.iscnId = object.iscnId !== undefined && object.iscnId !== null ? IscnId.fromPartial(object.iscnId) : undefined;
    message.cidBytes = object.cidBytes ?? new Uint8Array();
    message.data = object.data ?? new Uint8Array();
    return message;
  }
};
function createBaseContentIdRecord(): ContentIdRecord {
  return {
    ownerAddressBytes: new Uint8Array(),
    latestVersion: Long.UZERO
  };
}
export const ContentIdRecord = {
  encode(message: ContentIdRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ownerAddressBytes.length !== 0) {
      writer.uint32(10).bytes(message.ownerAddressBytes);
    }
    if (!message.latestVersion.isZero()) {
      writer.uint32(16).uint64(message.latestVersion);
    }
    return writer;
  },
  fromJSON(object: any): ContentIdRecord {
    return {
      ownerAddressBytes: isSet(object.ownerAddressBytes) ? bytesFromBase64(object.ownerAddressBytes) : new Uint8Array(),
      latestVersion: isSet(object.latestVersion) ? Long.fromValue(object.latestVersion) : Long.UZERO
    };
  },
  fromPartial(object: Partial<ContentIdRecord>): ContentIdRecord {
    const message = createBaseContentIdRecord();
    message.ownerAddressBytes = object.ownerAddressBytes ?? new Uint8Array();
    message.latestVersion = object.latestVersion !== undefined && object.latestVersion !== null ? Long.fromValue(object.latestVersion) : Long.UZERO;
    return message;
  }
};