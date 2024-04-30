import { BaseAccount, BaseAccountAmino, BaseAccountSDKType } from "../../../cosmos/auth/v1beta1/auth";
import { BinaryWriter } from "../../../binary";
export interface ForwardingAccount {
    baseAccount?: BaseAccount;
    channel: string;
    recipient: string;
    createdAt: bigint;
}
export interface ForwardingAccountProtoMsg {
    typeUrl: "/noble.forwarding.v1.ForwardingAccount";
    value: Uint8Array;
}
export interface ForwardingAccountAmino {
    base_account?: BaseAccountAmino;
    channel?: string;
    recipient?: string;
    created_at?: string;
}
export interface ForwardingAccountAminoMsg {
    type: "/noble.forwarding.v1.ForwardingAccount";
    value: ForwardingAccountAmino;
}
export interface ForwardingAccountSDKType {
    base_account?: BaseAccountSDKType;
    channel: string;
    recipient: string;
    created_at: bigint;
}
export declare const ForwardingAccount: {
    typeUrl: string;
    encode(message: ForwardingAccount, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ForwardingAccount;
    fromPartial(object: Partial<ForwardingAccount>): ForwardingAccount;
    fromAmino(object: ForwardingAccountAmino): ForwardingAccount;
    toAmino(message: ForwardingAccount): ForwardingAccountAmino;
    fromAminoMsg(object: ForwardingAccountAminoMsg): ForwardingAccount;
    fromProtoMsg(message: ForwardingAccountProtoMsg): ForwardingAccount;
    toProto(message: ForwardingAccount): Uint8Array;
    toProtoMsg(message: ForwardingAccount): ForwardingAccountProtoMsg;
};
