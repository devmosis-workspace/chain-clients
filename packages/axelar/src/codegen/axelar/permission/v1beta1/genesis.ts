import { Params, ParamsSDKType } from "./params";
import { LegacyAminoPubKey, LegacyAminoPubKeySDKType } from "../../../cosmos/crypto/multisig/keys";
import { GovAccount, GovAccountSDKType } from "./types";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
/** GenesisState represents the genesis state */
export interface GenesisState {
  params?: Params;
  governanceKey?: LegacyAminoPubKey;
  govAccounts: GovAccount[];
}
/** GenesisState represents the genesis state */
export interface GenesisStateSDKType {
  params?: ParamsSDKType;
  governance_key?: LegacyAminoPubKeySDKType;
  gov_accounts: GovAccountSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    governanceKey: undefined,
    govAccounts: []
  };
}
export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};