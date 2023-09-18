import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { BinaryWriter } from "../../binary";
import { isSet, bytesFromBase64 } from "../../helpers";
export interface GenesisState {
  params: Params;
  contentIdRecords: GenesisState_ContentIdRecord[];
  iscnRecords: Uint8Array[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/likechain.iscn.GenesisState";
  value: Uint8Array;
}
export interface GenesisStateAmino {
  params?: ParamsAmino;
  content_id_records: GenesisState_ContentIdRecordAmino[];
  iscn_records: Uint8Array[];
}
export interface GenesisStateAminoMsg {
  type: "/likechain.iscn.GenesisState";
  value: GenesisStateAmino;
}
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  content_id_records: GenesisState_ContentIdRecordSDKType[];
  iscn_records: Uint8Array[];
}
export interface GenesisState_ContentIdRecord {
  iscnId: string;
  owner: string;
  latestVersion: bigint;
}
export interface GenesisState_ContentIdRecordProtoMsg {
  typeUrl: "/likechain.iscn.ContentIdRecord";
  value: Uint8Array;
}
export interface GenesisState_ContentIdRecordAmino {
  iscn_id: string;
  owner: string;
  latest_version: string;
}
export interface GenesisState_ContentIdRecordAminoMsg {
  type: "/likechain.iscn.ContentIdRecord";
  value: GenesisState_ContentIdRecordAmino;
}
export interface GenesisState_ContentIdRecordSDKType {
  iscn_id: string;
  owner: string;
  latest_version: bigint;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    contentIdRecords: [],
    iscnRecords: []
  };
}
export const GenesisState = {
  typeUrl: "/likechain.iscn.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.contentIdRecords) {
      GenesisState_ContentIdRecord.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.iscnRecords) {
      writer.uint32(26).bytes(v!);
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      contentIdRecords: Array.isArray(object?.contentIdRecords) ? object.contentIdRecords.map((e: any) => GenesisState_ContentIdRecord.fromJSON(e)) : [],
      iscnRecords: Array.isArray(object?.iscnRecords) ? object.iscnRecords.map((e: any) => bytesFromBase64(e)) : []
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.contentIdRecords = object.contentIdRecords?.map(e => GenesisState_ContentIdRecord.fromPartial(e)) || [];
    message.iscnRecords = object.iscnRecords?.map(e => e) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    return {
      params: object?.params ? Params.fromAmino(object.params) : undefined,
      contentIdRecords: Array.isArray(object?.content_id_records) ? object.content_id_records.map((e: any) => GenesisState_ContentIdRecord.fromAmino(e)) : [],
      iscnRecords: Array.isArray(object?.iscn_records) ? object.iscn_records.map((e: any) => e) : []
    };
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    if (message.contentIdRecords) {
      obj.content_id_records = message.contentIdRecords.map(e => e ? GenesisState_ContentIdRecord.toAmino(e) : undefined);
    } else {
      obj.content_id_records = [];
    }
    if (message.iscnRecords) {
      obj.iscn_records = message.iscnRecords.map(e => e);
    } else {
      obj.iscn_records = [];
    }
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/likechain.iscn.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
function createBaseGenesisState_ContentIdRecord(): GenesisState_ContentIdRecord {
  return {
    iscnId: "",
    owner: "",
    latestVersion: BigInt(0)
  };
}
export const GenesisState_ContentIdRecord = {
  typeUrl: "/likechain.iscn.ContentIdRecord",
  encode(message: GenesisState_ContentIdRecord, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.iscnId !== "") {
      writer.uint32(10).string(message.iscnId);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    if (message.latestVersion !== BigInt(0)) {
      writer.uint32(24).uint64(message.latestVersion);
    }
    return writer;
  },
  fromJSON(object: any): GenesisState_ContentIdRecord {
    return {
      iscnId: isSet(object.iscnId) ? String(object.iscnId) : "",
      owner: isSet(object.owner) ? String(object.owner) : "",
      latestVersion: isSet(object.latestVersion) ? BigInt(object.latestVersion.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<GenesisState_ContentIdRecord>): GenesisState_ContentIdRecord {
    const message = createBaseGenesisState_ContentIdRecord();
    message.iscnId = object.iscnId ?? "";
    message.owner = object.owner ?? "";
    message.latestVersion = object.latestVersion !== undefined && object.latestVersion !== null ? BigInt(object.latestVersion.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: GenesisState_ContentIdRecordAmino): GenesisState_ContentIdRecord {
    return {
      iscnId: object.iscn_id,
      owner: object.owner,
      latestVersion: BigInt(object.latest_version)
    };
  },
  toAmino(message: GenesisState_ContentIdRecord): GenesisState_ContentIdRecordAmino {
    const obj: any = {};
    obj.iscn_id = message.iscnId;
    obj.owner = message.owner;
    obj.latest_version = message.latestVersion ? message.latestVersion.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: GenesisState_ContentIdRecordAminoMsg): GenesisState_ContentIdRecord {
    return GenesisState_ContentIdRecord.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisState_ContentIdRecordProtoMsg): GenesisState_ContentIdRecord {
    return GenesisState_ContentIdRecord.decode(message.value);
  },
  toProto(message: GenesisState_ContentIdRecord): Uint8Array {
    return GenesisState_ContentIdRecord.encode(message).finish();
  },
  toProtoMsg(message: GenesisState_ContentIdRecord): GenesisState_ContentIdRecordProtoMsg {
    return {
      typeUrl: "/likechain.iscn.ContentIdRecord",
      value: GenesisState_ContentIdRecord.encode(message).finish()
    };
  }
};