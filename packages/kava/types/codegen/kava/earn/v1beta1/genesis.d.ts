import { Params, ParamsSDKType } from "./params";
import { VaultRecord, VaultRecordSDKType, VaultShareRecord, VaultShareRecordSDKType } from "./vault";
import * as _m0 from "protobufjs/minimal";
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
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
};
