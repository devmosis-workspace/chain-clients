import { Authority, AuthoritySDKType, TeamVestingAccount, TeamVestingAccountSDKType } from "./team";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** GenesisState defines the team module's genesis state. */
export interface GenesisState {
    /** authority ... */
    authority?: Authority;
    /** account_list ... */
    accountList: TeamVestingAccount[];
    /** account_count ... */
    accountCount: Long;
}
/** GenesisState defines the team module's genesis state. */
export interface GenesisStateSDKType {
    authority?: AuthoritySDKType;
    account_list: TeamVestingAccountSDKType[];
    account_count: Long;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
};
