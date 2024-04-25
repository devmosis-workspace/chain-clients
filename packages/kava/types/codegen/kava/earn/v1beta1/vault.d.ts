import { StrategyType } from "./strategy";
import { BinaryWriter } from "../../../binary";
/**
 * AllowedVault is a vault that is allowed to be created. These can be
 * modified via parameter governance.
 */
export interface AllowedVault {
    /** Denom is the only supported denomination of the vault for deposits and withdrawals. */
    denom: string;
    /** VaultStrategy is the strategy used for this vault. */
    strategies: StrategyType[];
    /**
     * IsPrivateVault is true if the vault only allows depositors contained in
     * AllowedDepositors.
     */
    isPrivateVault: boolean;
    /**
     * AllowedDepositors is a list of addresses that are allowed to deposit to
     * this vault if IsPrivateVault is true. Addresses not contained in this list
     * are not allowed to deposit into this vault. If IsPrivateVault is false,
     * this should be empty and ignored.
     */
    allowedDepositors: Uint8Array[];
}
export interface AllowedVaultProtoMsg {
    typeUrl: "/kava.earn.v1beta1.AllowedVault";
    value: Uint8Array;
}
/**
 * AllowedVault is a vault that is allowed to be created. These can be
 * modified via parameter governance.
 */
export interface AllowedVaultAmino {
    /** Denom is the only supported denomination of the vault for deposits and withdrawals. */
    denom?: string;
    /** VaultStrategy is the strategy used for this vault. */
    strategies?: StrategyType[];
    /**
     * IsPrivateVault is true if the vault only allows depositors contained in
     * AllowedDepositors.
     */
    is_private_vault?: boolean;
    /**
     * AllowedDepositors is a list of addresses that are allowed to deposit to
     * this vault if IsPrivateVault is true. Addresses not contained in this list
     * are not allowed to deposit into this vault. If IsPrivateVault is false,
     * this should be empty and ignored.
     */
    allowed_depositors?: string[];
}
export interface AllowedVaultAminoMsg {
    type: "/kava.earn.v1beta1.AllowedVault";
    value: AllowedVaultAmino;
}
/**
 * AllowedVault is a vault that is allowed to be created. These can be
 * modified via parameter governance.
 */
export interface AllowedVaultSDKType {
    denom: string;
    strategies: StrategyType[];
    is_private_vault: boolean;
    allowed_depositors: Uint8Array[];
}
/** VaultRecord is the state of a vault. */
export interface VaultRecord {
    /** TotalShares is the total distributed number of shares in the vault. */
    totalShares: VaultShare;
}
export interface VaultRecordProtoMsg {
    typeUrl: "/kava.earn.v1beta1.VaultRecord";
    value: Uint8Array;
}
/** VaultRecord is the state of a vault. */
export interface VaultRecordAmino {
    /** TotalShares is the total distributed number of shares in the vault. */
    total_shares?: VaultShareAmino;
}
export interface VaultRecordAminoMsg {
    type: "/kava.earn.v1beta1.VaultRecord";
    value: VaultRecordAmino;
}
/** VaultRecord is the state of a vault. */
export interface VaultRecordSDKType {
    total_shares: VaultShareSDKType;
}
/** VaultShareRecord defines the vault shares owned by a depositor. */
export interface VaultShareRecord {
    /** Depositor represents the owner of the shares */
    depositor: Uint8Array;
    /** Shares represent the vault shares owned by the depositor. */
    shares: VaultShare[];
}
export interface VaultShareRecordProtoMsg {
    typeUrl: "/kava.earn.v1beta1.VaultShareRecord";
    value: Uint8Array;
}
/** VaultShareRecord defines the vault shares owned by a depositor. */
export interface VaultShareRecordAmino {
    /** Depositor represents the owner of the shares */
    depositor?: string;
    /** Shares represent the vault shares owned by the depositor. */
    shares?: VaultShareAmino[];
}
export interface VaultShareRecordAminoMsg {
    type: "/kava.earn.v1beta1.VaultShareRecord";
    value: VaultShareRecordAmino;
}
/** VaultShareRecord defines the vault shares owned by a depositor. */
export interface VaultShareRecordSDKType {
    depositor: Uint8Array;
    shares: VaultShareSDKType[];
}
/** VaultShare defines shares of a vault owned by a depositor. */
export interface VaultShare {
    denom: string;
    amount: string;
}
export interface VaultShareProtoMsg {
    typeUrl: "/kava.earn.v1beta1.VaultShare";
    value: Uint8Array;
}
/** VaultShare defines shares of a vault owned by a depositor. */
export interface VaultShareAmino {
    denom?: string;
    amount?: string;
}
export interface VaultShareAminoMsg {
    type: "/kava.earn.v1beta1.VaultShare";
    value: VaultShareAmino;
}
/** VaultShare defines shares of a vault owned by a depositor. */
export interface VaultShareSDKType {
    denom: string;
    amount: string;
}
export declare const AllowedVault: {
    typeUrl: string;
    encode(message: AllowedVault, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): AllowedVault;
    fromPartial(object: Partial<AllowedVault>): AllowedVault;
    fromAmino(object: AllowedVaultAmino): AllowedVault;
    toAmino(message: AllowedVault): AllowedVaultAmino;
    fromAminoMsg(object: AllowedVaultAminoMsg): AllowedVault;
    fromProtoMsg(message: AllowedVaultProtoMsg): AllowedVault;
    toProto(message: AllowedVault): Uint8Array;
    toProtoMsg(message: AllowedVault): AllowedVaultProtoMsg;
};
export declare const VaultRecord: {
    typeUrl: string;
    encode(message: VaultRecord, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): VaultRecord;
    fromPartial(object: Partial<VaultRecord>): VaultRecord;
    fromAmino(object: VaultRecordAmino): VaultRecord;
    toAmino(message: VaultRecord): VaultRecordAmino;
    fromAminoMsg(object: VaultRecordAminoMsg): VaultRecord;
    fromProtoMsg(message: VaultRecordProtoMsg): VaultRecord;
    toProto(message: VaultRecord): Uint8Array;
    toProtoMsg(message: VaultRecord): VaultRecordProtoMsg;
};
export declare const VaultShareRecord: {
    typeUrl: string;
    encode(message: VaultShareRecord, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): VaultShareRecord;
    fromPartial(object: Partial<VaultShareRecord>): VaultShareRecord;
    fromAmino(object: VaultShareRecordAmino): VaultShareRecord;
    toAmino(message: VaultShareRecord): VaultShareRecordAmino;
    fromAminoMsg(object: VaultShareRecordAminoMsg): VaultShareRecord;
    fromProtoMsg(message: VaultShareRecordProtoMsg): VaultShareRecord;
    toProto(message: VaultShareRecord): Uint8Array;
    toProtoMsg(message: VaultShareRecord): VaultShareRecordProtoMsg;
};
export declare const VaultShare: {
    typeUrl: string;
    encode(message: VaultShare, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): VaultShare;
    fromPartial(object: Partial<VaultShare>): VaultShare;
    fromAmino(object: VaultShareAmino): VaultShare;
    toAmino(message: VaultShare): VaultShareAmino;
    fromAminoMsg(object: VaultShareAminoMsg): VaultShare;
    fromProtoMsg(message: VaultShareProtoMsg): VaultShare;
    toProto(message: VaultShare): Uint8Array;
    toProtoMsg(message: VaultShare): VaultShareProtoMsg;
};
