import { BaseAccount, BaseAccountSDKType } from "../../../../cosmos/auth/v1beta1/auth";
import * as _m0 from "protobufjs/minimal";
/** An InterchainAccount is defined as a BaseAccount & the address of the account owner on the controller chain */
export interface InterchainAccount {
    baseAccount?: BaseAccount;
    accountOwner: string;
}
/** An InterchainAccount is defined as a BaseAccount & the address of the account owner on the controller chain */
export interface InterchainAccountSDKType {
    base_account?: BaseAccountSDKType;
    account_owner: string;
}
export declare const InterchainAccount: {
    encode(message: InterchainAccount, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): InterchainAccount;
    fromPartial(object: Partial<InterchainAccount>): InterchainAccount;
};
