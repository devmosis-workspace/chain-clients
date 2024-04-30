import { IscnId, IscnIdAmino, IscnIdSDKType } from "./iscnid";
import { BinaryWriter } from "../../binary";
import { isSet, bytesFromBase64, base64FromBytes } from "../../helpers";
export interface StoreRecord {
  iscnId: IscnId;
  cidBytes: Uint8Array;
  data: Uint8Array;
}
export interface StoreRecordProtoMsg {
  typeUrl: "/likechain.iscn.StoreRecord";
  value: Uint8Array;
}
export interface StoreRecordAmino {
  iscn_id?: IscnIdAmino;
  cid_bytes?: string;
  data?: string;
}
export interface StoreRecordAminoMsg {
  type: "/likechain.iscn.StoreRecord";
  value: StoreRecordAmino;
}
export interface StoreRecordSDKType {
  iscn_id: IscnIdSDKType;
  cid_bytes: Uint8Array;
  data: Uint8Array;
}
export interface ContentIdRecord {
  ownerAddressBytes: Uint8Array;
  latestVersion: bigint;
}
export interface ContentIdRecordProtoMsg {
  typeUrl: "/likechain.iscn.ContentIdRecord";
  value: Uint8Array;
}
export interface ContentIdRecordAmino {
  owner_address_bytes?: string;
  latest_version?: string;
}
export interface ContentIdRecordAminoMsg {
  type: "/likechain.iscn.ContentIdRecord";
  value: ContentIdRecordAmino;
}
export interface ContentIdRecordSDKType {
  owner_address_bytes: Uint8Array;
  latest_version: bigint;
}
function createBaseStoreRecord(): StoreRecord {
  return {
    iscnId: IscnId.fromPartial({}),
    cidBytes: new Uint8Array(),
    data: new Uint8Array()
  };
}
export const StoreRecord = {
  typeUrl: "/likechain.iscn.StoreRecord",
  encode(message: StoreRecord, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: StoreRecordAmino): StoreRecord {
    const message = createBaseStoreRecord();
    if (object.iscn_id !== undefined && object.iscn_id !== null) {
      message.iscnId = IscnId.fromAmino(object.iscn_id);
    }
    if (object.cid_bytes !== undefined && object.cid_bytes !== null) {
      message.cidBytes = bytesFromBase64(object.cid_bytes);
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = bytesFromBase64(object.data);
    }
    return message;
  },
  toAmino(message: StoreRecord): StoreRecordAmino {
    const obj: any = {};
    obj.iscn_id = message.iscnId ? IscnId.toAmino(message.iscnId) : undefined;
    obj.cid_bytes = message.cidBytes ? base64FromBytes(message.cidBytes) : undefined;
    obj.data = message.data ? base64FromBytes(message.data) : undefined;
    return obj;
  },
  fromAminoMsg(object: StoreRecordAminoMsg): StoreRecord {
    return StoreRecord.fromAmino(object.value);
  },
  fromProtoMsg(message: StoreRecordProtoMsg): StoreRecord {
    return StoreRecord.decode(message.value);
  },
  toProto(message: StoreRecord): Uint8Array {
    return StoreRecord.encode(message).finish();
  },
  toProtoMsg(message: StoreRecord): StoreRecordProtoMsg {
    return {
      typeUrl: "/likechain.iscn.StoreRecord",
      value: StoreRecord.encode(message).finish()
    };
  }
};
function createBaseContentIdRecord(): ContentIdRecord {
  return {
    ownerAddressBytes: new Uint8Array(),
    latestVersion: BigInt(0)
  };
}
export const ContentIdRecord = {
  typeUrl: "/likechain.iscn.ContentIdRecord",
  encode(message: ContentIdRecord, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.ownerAddressBytes.length !== 0) {
      writer.uint32(10).bytes(message.ownerAddressBytes);
    }
    if (message.latestVersion !== BigInt(0)) {
      writer.uint32(16).uint64(message.latestVersion);
    }
    return writer;
  },
  fromJSON(object: any): ContentIdRecord {
    return {
      ownerAddressBytes: isSet(object.ownerAddressBytes) ? bytesFromBase64(object.ownerAddressBytes) : new Uint8Array(),
      latestVersion: isSet(object.latestVersion) ? BigInt(object.latestVersion.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<ContentIdRecord>): ContentIdRecord {
    const message = createBaseContentIdRecord();
    message.ownerAddressBytes = object.ownerAddressBytes ?? new Uint8Array();
    message.latestVersion = object.latestVersion !== undefined && object.latestVersion !== null ? BigInt(object.latestVersion.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ContentIdRecordAmino): ContentIdRecord {
    const message = createBaseContentIdRecord();
    if (object.owner_address_bytes !== undefined && object.owner_address_bytes !== null) {
      message.ownerAddressBytes = bytesFromBase64(object.owner_address_bytes);
    }
    if (object.latest_version !== undefined && object.latest_version !== null) {
      message.latestVersion = BigInt(object.latest_version);
    }
    return message;
  },
  toAmino(message: ContentIdRecord): ContentIdRecordAmino {
    const obj: any = {};
    obj.owner_address_bytes = message.ownerAddressBytes ? base64FromBytes(message.ownerAddressBytes) : undefined;
    obj.latest_version = message.latestVersion ? message.latestVersion.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ContentIdRecordAminoMsg): ContentIdRecord {
    return ContentIdRecord.fromAmino(object.value);
  },
  fromProtoMsg(message: ContentIdRecordProtoMsg): ContentIdRecord {
    return ContentIdRecord.decode(message.value);
  },
  toProto(message: ContentIdRecord): Uint8Array {
    return ContentIdRecord.encode(message).finish();
  },
  toProtoMsg(message: ContentIdRecord): ContentIdRecordProtoMsg {
    return {
      typeUrl: "/likechain.iscn.ContentIdRecord",
      value: ContentIdRecord.encode(message).finish()
    };
  }
};