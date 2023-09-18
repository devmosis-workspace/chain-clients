import { BinaryWriter } from "../../binary";
/** VestingAccounts stored in keeper */
export interface VestingAccounts {
    /** addresses defines addresses of all the vesting accounts at genesis */
    addresses: string[];
}
export interface VestingAccountsProtoMsg {
    typeUrl: "/chainmain.supply.v1.VestingAccounts";
    value: Uint8Array;
}
/** VestingAccounts stored in keeper */
export interface VestingAccountsAmino {
    /** addresses defines addresses of all the vesting accounts at genesis */
    addresses: string[];
}
export interface VestingAccountsAminoMsg {
    type: "/chainmain.supply.v1.VestingAccounts";
    value: VestingAccountsAmino;
}
/** VestingAccounts stored in keeper */
export interface VestingAccountsSDKType {
    addresses: string[];
}
export declare const VestingAccounts: {
    typeUrl: string;
    encode(message: VestingAccounts, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): VestingAccounts;
    fromPartial(object: Partial<VestingAccounts>): VestingAccounts;
    fromAmino(object: VestingAccountsAmino): VestingAccounts;
    toAmino(message: VestingAccounts): VestingAccountsAmino;
    fromAminoMsg(object: VestingAccountsAminoMsg): VestingAccounts;
    fromProtoMsg(message: VestingAccountsProtoMsg): VestingAccounts;
    toProto(message: VestingAccounts): Uint8Array;
    toProtoMsg(message: VestingAccounts): VestingAccountsProtoMsg;
};
