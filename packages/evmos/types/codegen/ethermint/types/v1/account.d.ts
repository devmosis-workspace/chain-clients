import { BaseAccount, BaseAccountAmino, BaseAccountSDKType } from "../../../cosmos/auth/v1beta1/auth";
import { BinaryWriter } from "../../../binary";
/**
 * EthAccount implements the authtypes.AccountI interface and embeds an
 * authtypes.BaseAccount type. It is compatible with the auth AccountKeeper.
 */
export interface EthAccount {
    $typeUrl?: string;
    /** base_account is an authtypes.BaseAccount */
    baseAccount: BaseAccount;
    /** code_hash is the hash calculated from the code contents */
    codeHash: string;
}
export interface EthAccountProtoMsg {
    typeUrl: "/ethermint.types.v1.EthAccount";
    value: Uint8Array;
}
/**
 * EthAccount implements the authtypes.AccountI interface and embeds an
 * authtypes.BaseAccount type. It is compatible with the auth AccountKeeper.
 */
export interface EthAccountAmino {
    /** base_account is an authtypes.BaseAccount */
    base_account?: BaseAccountAmino;
    /** code_hash is the hash calculated from the code contents */
    code_hash: string;
}
export interface EthAccountAminoMsg {
    type: "/ethermint.types.v1.EthAccount";
    value: EthAccountAmino;
}
/**
 * EthAccount implements the authtypes.AccountI interface and embeds an
 * authtypes.BaseAccount type. It is compatible with the auth AccountKeeper.
 */
export interface EthAccountSDKType {
    $typeUrl?: string;
    base_account: BaseAccountSDKType;
    code_hash: string;
}
export declare const EthAccount: {
    typeUrl: string;
    encode(message: EthAccount, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EthAccount;
    fromPartial(object: Partial<EthAccount>): EthAccount;
    fromAmino(object: EthAccountAmino): EthAccount;
    toAmino(message: EthAccount): EthAccountAmino;
    fromAminoMsg(object: EthAccountAminoMsg): EthAccount;
    fromProtoMsg(message: EthAccountProtoMsg): EthAccount;
    toProto(message: EthAccount): Uint8Array;
    toProtoMsg(message: EthAccount): EthAccountProtoMsg;
};
