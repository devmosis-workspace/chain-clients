import { Coin, CoinAmino, CoinSDKType } from "../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../binary";
export interface MsgCreateVestingAccount {
    fromAddress: string;
    toAddress: string;
    amount: Coin[];
    startTime: bigint;
    endTime: bigint;
}
export interface MsgCreateVestingAccountProtoMsg {
    typeUrl: "/quasarlabs.quasarnode.qvesting.MsgCreateVestingAccount";
    value: Uint8Array;
}
export interface MsgCreateVestingAccountAmino {
    fromAddress?: string;
    toAddress?: string;
    amount?: CoinAmino[];
    startTime?: string;
    endTime?: string;
}
export interface MsgCreateVestingAccountAminoMsg {
    type: "/quasarlabs.quasarnode.qvesting.MsgCreateVestingAccount";
    value: MsgCreateVestingAccountAmino;
}
export interface MsgCreateVestingAccountSDKType {
    fromAddress: string;
    toAddress: string;
    amount: CoinSDKType[];
    startTime: bigint;
    endTime: bigint;
}
export interface MsgCreateVestingAccountResponse {
}
export interface MsgCreateVestingAccountResponseProtoMsg {
    typeUrl: "/quasarlabs.quasarnode.qvesting.MsgCreateVestingAccountResponse";
    value: Uint8Array;
}
export interface MsgCreateVestingAccountResponseAmino {
}
export interface MsgCreateVestingAccountResponseAminoMsg {
    type: "/quasarlabs.quasarnode.qvesting.MsgCreateVestingAccountResponse";
    value: MsgCreateVestingAccountResponseAmino;
}
export interface MsgCreateVestingAccountResponseSDKType {
}
export declare const MsgCreateVestingAccount: {
    typeUrl: string;
    encode(message: MsgCreateVestingAccount, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgCreateVestingAccount;
    fromPartial(object: Partial<MsgCreateVestingAccount>): MsgCreateVestingAccount;
    fromAmino(object: MsgCreateVestingAccountAmino): MsgCreateVestingAccount;
    toAmino(message: MsgCreateVestingAccount): MsgCreateVestingAccountAmino;
    fromAminoMsg(object: MsgCreateVestingAccountAminoMsg): MsgCreateVestingAccount;
    fromProtoMsg(message: MsgCreateVestingAccountProtoMsg): MsgCreateVestingAccount;
    toProto(message: MsgCreateVestingAccount): Uint8Array;
    toProtoMsg(message: MsgCreateVestingAccount): MsgCreateVestingAccountProtoMsg;
};
export declare const MsgCreateVestingAccountResponse: {
    typeUrl: string;
    encode(_: MsgCreateVestingAccountResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgCreateVestingAccountResponse;
    fromPartial(_: Partial<MsgCreateVestingAccountResponse>): MsgCreateVestingAccountResponse;
    fromAmino(_: MsgCreateVestingAccountResponseAmino): MsgCreateVestingAccountResponse;
    toAmino(_: MsgCreateVestingAccountResponse): MsgCreateVestingAccountResponseAmino;
    fromAminoMsg(object: MsgCreateVestingAccountResponseAminoMsg): MsgCreateVestingAccountResponse;
    fromProtoMsg(message: MsgCreateVestingAccountResponseProtoMsg): MsgCreateVestingAccountResponse;
    toProto(message: MsgCreateVestingAccountResponse): Uint8Array;
    toProtoMsg(message: MsgCreateVestingAccountResponse): MsgCreateVestingAccountResponseProtoMsg;
};
