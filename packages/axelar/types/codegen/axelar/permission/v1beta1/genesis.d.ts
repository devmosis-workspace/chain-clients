import { Params, ParamsSDKType } from "./params";
import { LegacyAminoPubKey, LegacyAminoPubKeySDKType } from "../../../cosmos/crypto/multisig/keys";
import { GovAccount, GovAccountSDKType } from "./types";
import * as _m0 from "protobufjs/minimal";
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
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
};
