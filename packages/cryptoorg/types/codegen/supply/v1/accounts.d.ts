import * as _m0 from "protobufjs/minimal";
/** VestingAccounts stored in keeper */
export interface VestingAccounts {
    /** addresses defines addresses of all the vesting accounts at genesis */
    addresses: string[];
}
/** VestingAccounts stored in keeper */
export interface VestingAccountsSDKType {
    addresses: string[];
}
export declare const VestingAccounts: {
    encode(message: VestingAccounts, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): VestingAccounts;
    fromPartial(object: Partial<VestingAccounts>): VestingAccounts;
};
