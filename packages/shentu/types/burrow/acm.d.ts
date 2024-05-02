import { PublicKey, PublicKeyAmino, PublicKeySDKType } from "./crypto";
import { AccountPermissions, AccountPermissionsAmino, AccountPermissionsSDKType } from "./permission";
import { BinaryWriter } from "../binary";
export interface Account {
    Address: Uint8Array;
    PublicKey: PublicKey;
    /** Sequence counts the number of transactions that have been accepted from this account */
    Sequence: bigint;
    /** The account's current native token balance */
    Balance: bigint;
    /**
     * We expect exactly one of EVMCode, WASMCode, and NativeName to be non-empty
     * EVM bytecode
     */
    EVMCode: Uint8Array;
    Permissions: AccountPermissions;
    /** WASM bytecode */
    WASMCode: Uint8Array;
    /**
     * Fully qualified (`<contract name>.<function name>`) name of native contract this for which this account object
     * is a sentinel value. Which is to say this account object is a pointer to compiled code and does not contain
     * the contract logic in its entirety
     */
    NativeName: string;
    /** The sha3 hash of the code associated with the account */
    CodeHash: Uint8Array;
    /** Pointer to the Metadata associated with this account */
    ContractMeta: ContractMeta[];
    /**
     * The metadata is stored in the deployed account. When the deployed account creates new account
     * (from Solidity/EVM), they point to the original deployed account where the metadata is stored.
     * This original account is called the forebear.
     */
    Forebear: Uint8Array;
}
export interface AccountProtoMsg {
    typeUrl: "/acm.Account";
    value: Uint8Array;
}
export interface AccountAmino {
    Address?: string;
    PublicKey?: PublicKeyAmino;
    /** Sequence counts the number of transactions that have been accepted from this account */
    Sequence?: string;
    /** The account's current native token balance */
    Balance?: string;
    /**
     * We expect exactly one of EVMCode, WASMCode, and NativeName to be non-empty
     * EVM bytecode
     */
    EVMCode?: string;
    Permissions?: AccountPermissionsAmino;
    /** WASM bytecode */
    WASMCode?: string;
    /**
     * Fully qualified (`<contract name>.<function name>`) name of native contract this for which this account object
     * is a sentinel value. Which is to say this account object is a pointer to compiled code and does not contain
     * the contract logic in its entirety
     */
    NativeName?: string;
    /** The sha3 hash of the code associated with the account */
    CodeHash: string;
    /** Pointer to the Metadata associated with this account */
    ContractMeta?: ContractMetaAmino[];
    /**
     * The metadata is stored in the deployed account. When the deployed account creates new account
     * (from Solidity/EVM), they point to the original deployed account where the metadata is stored.
     * This original account is called the forebear.
     */
    Forebear?: string;
}
export interface AccountAminoMsg {
    type: "/acm.Account";
    value: AccountAmino;
}
export interface AccountSDKType {
    Address: Uint8Array;
    PublicKey: PublicKeySDKType;
    Sequence: bigint;
    Balance: bigint;
    EVMCode: Uint8Array;
    Permissions: AccountPermissionsSDKType;
    WASMCode: Uint8Array;
    NativeName: string;
    CodeHash: Uint8Array;
    ContractMeta: ContractMetaSDKType[];
    Forebear: Uint8Array;
}
export interface ContractMeta {
    CodeHash: Uint8Array;
    MetadataHash: Uint8Array;
    /** In the dump format we would like the ABI rather than its hash */
    Metadata: string;
}
export interface ContractMetaProtoMsg {
    typeUrl: "/acm.ContractMeta";
    value: Uint8Array;
}
export interface ContractMetaAmino {
    CodeHash?: string;
    MetadataHash?: string;
    /** In the dump format we would like the ABI rather than its hash */
    Metadata?: string;
}
export interface ContractMetaAminoMsg {
    type: "/acm.ContractMeta";
    value: ContractMetaAmino;
}
export interface ContractMetaSDKType {
    CodeHash: Uint8Array;
    MetadataHash: Uint8Array;
    Metadata: string;
}
export declare const Account: {
    typeUrl: string;
    encode(message: Account, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Account;
    fromPartial(object: Partial<Account>): Account;
    fromAmino(object: AccountAmino): Account;
    toAmino(message: Account): AccountAmino;
    fromAminoMsg(object: AccountAminoMsg): Account;
    fromProtoMsg(message: AccountProtoMsg): Account;
    toProto(message: Account): Uint8Array;
    toProtoMsg(message: Account): AccountProtoMsg;
};
export declare const ContractMeta: {
    typeUrl: string;
    encode(message: ContractMeta, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ContractMeta;
    fromPartial(object: Partial<ContractMeta>): ContractMeta;
    fromAmino(object: ContractMetaAmino): ContractMeta;
    toAmino(message: ContractMeta): ContractMetaAmino;
    fromAminoMsg(object: ContractMetaAminoMsg): ContractMeta;
    fromProtoMsg(message: ContractMetaProtoMsg): ContractMeta;
    toProto(message: ContractMeta): Uint8Array;
    toProtoMsg(message: ContractMeta): ContractMetaProtoMsg;
};
