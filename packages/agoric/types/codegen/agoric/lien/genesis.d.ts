import { Lien, LienSDKType } from "./lien";
import * as _m0 from "protobufjs/minimal";
/** The initial or exported state. */
export interface GenesisState {
    liens: AccountLien[];
}
/** The initial or exported state. */
export interface GenesisStateSDKType {
    liens: AccountLienSDKType[];
}
/** The lien on a particular account */
export interface AccountLien {
    /** Account address, bech32-encoded. */
    address: string;
    /** The liened amount. Should be nonzero. */
    lien?: Lien;
}
/** The lien on a particular account */
export interface AccountLienSDKType {
    address: string;
    lien?: LienSDKType;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
};
export declare const AccountLien: {
    encode(message: AccountLien, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): AccountLien;
    fromPartial(object: Partial<AccountLien>): AccountLien;
};
