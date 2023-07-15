import { Params, ParamsSDKType } from "./params";
import { SuperfluidAsset, SuperfluidAssetSDKType, OsmoEquivalentMultiplierRecord, OsmoEquivalentMultiplierRecordSDKType, SuperfluidIntermediaryAccount, SuperfluidIntermediaryAccountSDKType, LockIdIntermediaryAccountConnection, LockIdIntermediaryAccountConnectionSDKType } from "./superfluid";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../helpers";
/** GenesisState defines the module's genesis state. */
export interface GenesisState {
  params?: Params;
  /**
   * superfluid_assets defines the registered superfluid assets that have been
   * registered via governance.
   */
  superfluidAssets: SuperfluidAsset[];
  /**
   * osmo_equivalent_multipliers is the records of osmo equivalent amount of
   * each superfluid registered pool, updated every epoch.
   */
  osmoEquivalentMultipliers: OsmoEquivalentMultiplierRecord[];
  /**
   * intermediary_accounts is a secondary account for superfluid staking that
   * plays an intermediary role between validators and the delegators.
   */
  intermediaryAccounts: SuperfluidIntermediaryAccount[];
  intemediaryAccountConnections: LockIdIntermediaryAccountConnection[];
}
/** GenesisState defines the module's genesis state. */
export interface GenesisStateSDKType {
  params?: ParamsSDKType;
  superfluid_assets: SuperfluidAssetSDKType[];
  osmo_equivalent_multipliers: OsmoEquivalentMultiplierRecordSDKType[];
  intermediary_accounts: SuperfluidIntermediaryAccountSDKType[];
  intemediary_account_connections: LockIdIntermediaryAccountConnectionSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    superfluidAssets: [],
    osmoEquivalentMultipliers: [],
    intermediaryAccounts: [],
    intemediaryAccountConnections: []
  };
}
export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.superfluidAssets) {
      SuperfluidAsset.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.osmoEquivalentMultipliers) {
      OsmoEquivalentMultiplierRecord.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.intermediaryAccounts) {
      SuperfluidIntermediaryAccount.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.intemediaryAccountConnections) {
      LockIdIntermediaryAccountConnection.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      superfluidAssets: Array.isArray(object?.superfluidAssets) ? object.superfluidAssets.map((e: any) => SuperfluidAsset.fromJSON(e)) : [],
      osmoEquivalentMultipliers: Array.isArray(object?.osmoEquivalentMultipliers) ? object.osmoEquivalentMultipliers.map((e: any) => OsmoEquivalentMultiplierRecord.fromJSON(e)) : [],
      intermediaryAccounts: Array.isArray(object?.intermediaryAccounts) ? object.intermediaryAccounts.map((e: any) => SuperfluidIntermediaryAccount.fromJSON(e)) : [],
      intemediaryAccountConnections: Array.isArray(object?.intemediaryAccountConnections) ? object.intemediaryAccountConnections.map((e: any) => LockIdIntermediaryAccountConnection.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.superfluidAssets = object.superfluidAssets?.map(e => SuperfluidAsset.fromPartial(e)) || [];
    message.osmoEquivalentMultipliers = object.osmoEquivalentMultipliers?.map(e => OsmoEquivalentMultiplierRecord.fromPartial(e)) || [];
    message.intermediaryAccounts = object.intermediaryAccounts?.map(e => SuperfluidIntermediaryAccount.fromPartial(e)) || [];
    message.intemediaryAccountConnections = object.intemediaryAccountConnections?.map(e => LockIdIntermediaryAccountConnection.fromPartial(e)) || [];
    return message;
  }
};