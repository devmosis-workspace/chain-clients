import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { VaultRecord, VaultRecordAmino, VaultRecordSDKType, VaultShareRecord, VaultShareRecordAmino, VaultShareRecordSDKType } from "./vault";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** GenesisState defines the earn module's genesis state. */
export interface GenesisState {
  /** params defines all the paramaters related to earn */
  params: Params;
  /** vault_records defines the available vaults */
  vaultRecords: VaultRecord[];
  /** share_records defines the owned shares of each vault */
  vaultShareRecords: VaultShareRecord[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/kava.earn.v1beta1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the earn module's genesis state. */
export interface GenesisStateAmino {
  /** params defines all the paramaters related to earn */
  params?: ParamsAmino;
  /** vault_records defines the available vaults */
  vault_records: VaultRecordAmino[];
  /** share_records defines the owned shares of each vault */
  vault_share_records: VaultShareRecordAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/kava.earn.v1beta1.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the earn module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  vault_records: VaultRecordSDKType[];
  vault_share_records: VaultShareRecordSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    vaultRecords: [],
    vaultShareRecords: []
  };
}
export const GenesisState = {
  typeUrl: "/kava.earn.v1beta1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.vaultRecords) {
      VaultRecord.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.vaultShareRecords) {
      VaultShareRecord.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      vaultRecords: Array.isArray(object?.vaultRecords) ? object.vaultRecords.map((e: any) => VaultRecord.fromJSON(e)) : [],
      vaultShareRecords: Array.isArray(object?.vaultShareRecords) ? object.vaultShareRecords.map((e: any) => VaultShareRecord.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.vaultRecords = object.vaultRecords?.map(e => VaultRecord.fromPartial(e)) || [];
    message.vaultShareRecords = object.vaultShareRecords?.map(e => VaultShareRecord.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    return {
      params: object?.params ? Params.fromAmino(object.params) : undefined,
      vaultRecords: Array.isArray(object?.vault_records) ? object.vault_records.map((e: any) => VaultRecord.fromAmino(e)) : [],
      vaultShareRecords: Array.isArray(object?.vault_share_records) ? object.vault_share_records.map((e: any) => VaultShareRecord.fromAmino(e)) : []
    };
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    if (message.vaultRecords) {
      obj.vault_records = message.vaultRecords.map(e => e ? VaultRecord.toAmino(e) : undefined);
    } else {
      obj.vault_records = [];
    }
    if (message.vaultShareRecords) {
      obj.vault_share_records = message.vaultShareRecords.map(e => e ? VaultShareRecord.toAmino(e) : undefined);
    } else {
      obj.vault_share_records = [];
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
      typeUrl: "/kava.earn.v1beta1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};