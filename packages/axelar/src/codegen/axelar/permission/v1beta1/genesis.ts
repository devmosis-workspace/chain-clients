import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { LegacyAminoPubKey, LegacyAminoPubKeyAmino, LegacyAminoPubKeySDKType } from "../../../cosmos/crypto/multisig/keys";
import { GovAccount, GovAccountAmino, GovAccountSDKType } from "./types";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** GenesisState represents the genesis state */
export interface GenesisState {
  params: Params;
  governanceKey: LegacyAminoPubKey;
  govAccounts: GovAccount[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/axelar.permission.v1beta1.GenesisState";
  value: Uint8Array;
}
/** GenesisState represents the genesis state */
export interface GenesisStateAmino {
  params?: ParamsAmino;
  governance_key?: LegacyAminoPubKeyAmino;
  gov_accounts: GovAccountAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/axelar.permission.v1beta1.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState represents the genesis state */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  governance_key: LegacyAminoPubKeySDKType;
  gov_accounts: GovAccountSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    governanceKey: LegacyAminoPubKey.fromPartial({}),
    govAccounts: []
  };
}
export const GenesisState = {
  typeUrl: "/axelar.permission.v1beta1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.governanceKey !== undefined) {
      LegacyAminoPubKey.encode(message.governanceKey, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.govAccounts) {
      GovAccount.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      governanceKey: isSet(object.governanceKey) ? LegacyAminoPubKey.fromJSON(object.governanceKey) : undefined,
      govAccounts: Array.isArray(object?.govAccounts) ? object.govAccounts.map((e: any) => GovAccount.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.governanceKey = object.governanceKey !== undefined && object.governanceKey !== null ? LegacyAminoPubKey.fromPartial(object.governanceKey) : undefined;
    message.govAccounts = object.govAccounts?.map(e => GovAccount.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    return {
      params: object?.params ? Params.fromAmino(object.params) : undefined,
      governanceKey: object?.governance_key ? LegacyAminoPubKey.fromAmino(object.governance_key) : undefined,
      govAccounts: Array.isArray(object?.gov_accounts) ? object.gov_accounts.map((e: any) => GovAccount.fromAmino(e)) : []
    };
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    obj.governance_key = message.governanceKey ? LegacyAminoPubKey.toAmino(message.governanceKey) : undefined;
    if (message.govAccounts) {
      obj.gov_accounts = message.govAccounts.map(e => e ? GovAccount.toAmino(e) : undefined);
    } else {
      obj.gov_accounts = [];
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
      typeUrl: "/axelar.permission.v1beta1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};