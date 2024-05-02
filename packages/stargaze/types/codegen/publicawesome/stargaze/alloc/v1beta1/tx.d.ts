import { Coin, CoinAmino, CoinSDKType } from "../../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../../binary";
/**
 * MsgCreateVestingAccount defines a message that enables creating a vesting
 * account.
 */
export interface MsgCreateVestingAccount {
    fromAddress: string;
    toAddress: string;
    amount: Coin[];
    startTime: bigint;
    endTime: bigint;
    delayed: boolean;
}
export interface MsgCreateVestingAccountProtoMsg {
    typeUrl: "/publicawesome.stargaze.alloc.v1beta1.MsgCreateVestingAccount";
    value: Uint8Array;
}
/**
 * MsgCreateVestingAccount defines a message that enables creating a vesting
 * account.
 */
export interface MsgCreateVestingAccountAmino {
    from_address?: string;
    to_address?: string;
    amount?: CoinAmino[];
    start_time?: string;
    end_time?: string;
    delayed?: boolean;
}
export interface MsgCreateVestingAccountAminoMsg {
    type: "/publicawesome.stargaze.alloc.v1beta1.MsgCreateVestingAccount";
    value: MsgCreateVestingAccountAmino;
}
/**
 * MsgCreateVestingAccount defines a message that enables creating a vesting
 * account.
 */
export interface MsgCreateVestingAccountSDKType {
    from_address: string;
    to_address: string;
    amount: CoinSDKType[];
    start_time: bigint;
    end_time: bigint;
    delayed: boolean;
}
/**
 * MsgCreateVestingAccountResponse defines the Msg/CreateVestingAccount response
 * type.
 */
export interface MsgCreateVestingAccountResponse {
}
export interface MsgCreateVestingAccountResponseProtoMsg {
    typeUrl: "/publicawesome.stargaze.alloc.v1beta1.MsgCreateVestingAccountResponse";
    value: Uint8Array;
}
/**
 * MsgCreateVestingAccountResponse defines the Msg/CreateVestingAccount response
 * type.
 */
export interface MsgCreateVestingAccountResponseAmino {
}
export interface MsgCreateVestingAccountResponseAminoMsg {
    type: "/publicawesome.stargaze.alloc.v1beta1.MsgCreateVestingAccountResponse";
    value: MsgCreateVestingAccountResponseAmino;
}
/**
 * MsgCreateVestingAccountResponse defines the Msg/CreateVestingAccount response
 * type.
 */
export interface MsgCreateVestingAccountResponseSDKType {
}
/**
 * MsgFundFairburnPool allows an account to directly
 * fund the fee collector pool.
 */
export interface MsgFundFairburnPool {
    sender: string;
    amount: Coin[];
}
export interface MsgFundFairburnPoolProtoMsg {
    typeUrl: "/publicawesome.stargaze.alloc.v1beta1.MsgFundFairburnPool";
    value: Uint8Array;
}
/**
 * MsgFundFairburnPool allows an account to directly
 * fund the fee collector pool.
 */
export interface MsgFundFairburnPoolAmino {
    sender?: string;
    amount?: CoinAmino[];
}
export interface MsgFundFairburnPoolAminoMsg {
    type: "/publicawesome.stargaze.alloc.v1beta1.MsgFundFairburnPool";
    value: MsgFundFairburnPoolAmino;
}
/**
 * MsgFundFairburnPool allows an account to directly
 * fund the fee collector pool.
 */
export interface MsgFundFairburnPoolSDKType {
    sender: string;
    amount: CoinSDKType[];
}
/**
 * MsgFundFairburnPoolResponse defines the Msg/MsgFundFairburnPool response
 * type.
 */
export interface MsgFundFairburnPoolResponse {
}
export interface MsgFundFairburnPoolResponseProtoMsg {
    typeUrl: "/publicawesome.stargaze.alloc.v1beta1.MsgFundFairburnPoolResponse";
    value: Uint8Array;
}
/**
 * MsgFundFairburnPoolResponse defines the Msg/MsgFundFairburnPool response
 * type.
 */
export interface MsgFundFairburnPoolResponseAmino {
}
export interface MsgFundFairburnPoolResponseAminoMsg {
    type: "/publicawesome.stargaze.alloc.v1beta1.MsgFundFairburnPoolResponse";
    value: MsgFundFairburnPoolResponseAmino;
}
/**
 * MsgFundFairburnPoolResponse defines the Msg/MsgFundFairburnPool response
 * type.
 */
export interface MsgFundFairburnPoolResponseSDKType {
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
export declare const MsgFundFairburnPool: {
    typeUrl: string;
    encode(message: MsgFundFairburnPool, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgFundFairburnPool;
    fromPartial(object: Partial<MsgFundFairburnPool>): MsgFundFairburnPool;
    fromAmino(object: MsgFundFairburnPoolAmino): MsgFundFairburnPool;
    toAmino(message: MsgFundFairburnPool): MsgFundFairburnPoolAmino;
    fromAminoMsg(object: MsgFundFairburnPoolAminoMsg): MsgFundFairburnPool;
    fromProtoMsg(message: MsgFundFairburnPoolProtoMsg): MsgFundFairburnPool;
    toProto(message: MsgFundFairburnPool): Uint8Array;
    toProtoMsg(message: MsgFundFairburnPool): MsgFundFairburnPoolProtoMsg;
};
export declare const MsgFundFairburnPoolResponse: {
    typeUrl: string;
    encode(_: MsgFundFairburnPoolResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgFundFairburnPoolResponse;
    fromPartial(_: Partial<MsgFundFairburnPoolResponse>): MsgFundFairburnPoolResponse;
    fromAmino(_: MsgFundFairburnPoolResponseAmino): MsgFundFairburnPoolResponse;
    toAmino(_: MsgFundFairburnPoolResponse): MsgFundFairburnPoolResponseAmino;
    fromAminoMsg(object: MsgFundFairburnPoolResponseAminoMsg): MsgFundFairburnPoolResponse;
    fromProtoMsg(message: MsgFundFairburnPoolResponseProtoMsg): MsgFundFairburnPoolResponse;
    toProto(message: MsgFundFairburnPoolResponse): Uint8Array;
    toProtoMsg(message: MsgFundFairburnPoolResponse): MsgFundFairburnPoolResponseProtoMsg;
};
