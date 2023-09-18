import { BinaryWriter } from "../binary";
/** AccountType defines the super account type */
export declare enum AccountType {
    /** GENESIS - GENESIS defines a genesis account type */
    GENESIS = 0,
    /** ORDINARY - ORDINARY defines a ordinary account type */
    ORDINARY = 1,
    UNRECOGNIZED = -1
}
export declare const AccountTypeSDKType: typeof AccountType;
export declare const AccountTypeAmino: typeof AccountType;
export declare function accountTypeFromJSON(object: any): AccountType;
export declare function accountTypeToJSON(object: AccountType): string;
/** Super defines the super standard */
export interface Super {
    description: string;
    accountType: AccountType;
    address: string;
    addedBy: string;
}
export interface SuperProtoMsg {
    typeUrl: "/irishub.guardian.Super";
    value: Uint8Array;
}
/** Super defines the super standard */
export interface SuperAmino {
    description: string;
    account_type: AccountType;
    address: string;
    added_by: string;
}
export interface SuperAminoMsg {
    type: "/irishub.guardian.Super";
    value: SuperAmino;
}
/** Super defines the super standard */
export interface SuperSDKType {
    description: string;
    account_type: AccountType;
    address: string;
    added_by: string;
}
export declare const Super: {
    typeUrl: string;
    encode(message: Super, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Super;
    fromPartial(object: Partial<Super>): Super;
    fromAmino(object: SuperAmino): Super;
    toAmino(message: Super): SuperAmino;
    fromAminoMsg(object: SuperAminoMsg): Super;
    fromProtoMsg(message: SuperProtoMsg): Super;
    toProto(message: Super): Uint8Array;
    toProtoMsg(message: Super): SuperProtoMsg;
};
