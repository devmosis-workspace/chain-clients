import { Params, ParamsSDKType } from "./params";
import { VaultRecord, VaultRecordSDKType, VaultShareRecord, VaultShareRecordSDKType } from "./vault";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
/** GenesisState defines the earn module's genesis state. */
export interface GenesisState {
  /** params defines all the paramaters related to earn */
  params?: Params;
  /** vault_records defines the available vaults */
  vaultRecords: VaultRecord[];
  /** share_records defines the owned shares of each vault */
  vaultShareRecords: VaultShareRecord[];
}
/** GenesisState defines the earn module's genesis state. */
export interface GenesisStateSDKType {
  params?: ParamsSDKType;
  vault_records: VaultRecordSDKType[];
  vault_share_records: VaultShareRecordSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    vaultRecords: [],
    vaultShareRecords: []
  };
}
export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};