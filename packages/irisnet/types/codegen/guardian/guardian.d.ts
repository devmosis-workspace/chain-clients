import * as _m0 from "protobufjs/minimal";
/** AccountType defines the super account type */
export declare enum AccountType {
    /** GENESIS - GENESIS defines a genesis account type */
    GENESIS = 0,
    /** ORDINARY - ORDINARY defines a ordinary account type */
    ORDINARY = 1,
    UNRECOGNIZED = -1
}
export declare const AccountTypeSDKType: typeof AccountType;
export declare function accountTypeFromJSON(object: any): AccountType;
export declare function accountTypeToJSON(object: AccountType): string;
/** Super defines the super standard */
export interface Super {
    description: string;
    accountType: AccountType;
    address: string;
    addedBy: string;
}
/** Super defines the super standard */
export interface SuperSDKType {
    description: string;
    account_type: AccountType;
    address: string;
    added_by: string;
}
export declare const Super: {
    encode(message: Super, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Super;
    fromPartial(object: Partial<Super>): Super;
};
