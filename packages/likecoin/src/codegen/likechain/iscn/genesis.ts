import { Params, ParamsSDKType } from "./params";
import { Long, isSet, bytesFromBase64 } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface GenesisState {
  params?: Params;
  contentIdRecords: GenesisState_ContentIdRecord[];
  iscnRecords: Uint8Array[];
}
export interface GenesisStateSDKType {
  params?: ParamsSDKType;
  content_id_records: GenesisState_ContentIdRecordSDKType[];
  iscn_records: Uint8Array[];
}
export interface GenesisState_ContentIdRecord {
  iscnId: string;
  owner: string;
  latestVersion: Long;
}
export interface GenesisState_ContentIdRecordSDKType {
  iscn_id: string;
  owner: string;
  latest_version: Long;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    contentIdRecords: [],
    iscnRecords: []
  };
}
export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseGenesisState_ContentIdRecord(): GenesisState_ContentIdRecord {
  return {
    iscnId: "",
    owner: "",
    latestVersion: Long.UZERO
  };
}
export const GenesisState_ContentIdRecord = {
  encode(message: GenesisState_ContentIdRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.iscnId !== "") {
      writer.uint32(10).string(message.iscnId);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    if (!message.latestVersion.isZero()) {
      writer.uint32(24).uint64(message.latestVersion);
    }
    return writer;
  },
  fromJSON(object: any): GenesisState_ContentIdRecord {
    return {
      iscnId: isSet(object.iscnId) ? String(object.iscnId) : "",
      owner: isSet(object.owner) ? String(object.owner) : "",
      latestVersion: isSet(object.latestVersion) ? Long.fromValue(object.latestVersion) : Long.UZERO
    };
  },
  fromPartial(object: Partial<GenesisState_ContentIdRecord>): GenesisState_ContentIdRecord {
    const message = createBaseGenesisState_ContentIdRecord();
    message.iscnId = object.iscnId ?? "";
    message.owner = object.owner ?? "";
    message.latestVersion = object.latestVersion !== undefined && object.latestVersion !== null ? Long.fromValue(object.latestVersion) : Long.UZERO;
    return message;
  }
};