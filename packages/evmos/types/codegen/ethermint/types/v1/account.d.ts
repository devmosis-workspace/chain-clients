import { BaseAccount, BaseAccountSDKType } from "../../../cosmos/auth/v1beta1/auth";
import * as _m0 from "protobufjs/minimal";
/**
 * EthAccount implements the authtypes.AccountI interface and embeds an
 * authtypes.BaseAccount type. It is compatible with the auth AccountKeeper.
 */
export interface EthAccount {
    /** base_account is an authtypes.BaseAccount */
    baseAccount?: BaseAccount;
    /** code_hash is the hash calculated from the code contents */
    codeHash: string;
}
/**
 * EthAccount implements the authtypes.AccountI interface and embeds an
 * authtypes.BaseAccount type. It is compatible with the auth AccountKeeper.
 */
export interface EthAccountSDKType {
    base_account?: BaseAccountSDKType;
    code_hash: string;
}
export declare const EthAccount: {
    encode(message: EthAccount, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EthAccount;
    fromPartial(object: Partial<EthAccount>): EthAccount;
};
